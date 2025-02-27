<template>
	<view class="searchLayout">
		<view class="search">
			<uni-search-bar 
			@confirm="onSearch"
			@cancel="onCancel"
			@clear="onClear"
			focus 
			placeholder="搜索"
			v-model="queryParams.keyword">
			</uni-search-bar>
		</view>
		
		
		<view v-if="!classList.length || noSearch">
			<view class="history"  v-if="historySearch.length">
				<view class="topTitle">
					<view class="text">最近搜索</view>
					<view class="icon" @click="removeHistory">
						<uni-icons type="trash" size="25"></uni-icons>
					</view>
				</view>
				<view class="tabs">
					<view class="tab" v-for="tab in historySearch" :key="tab" 
					@click="clickTab(tab)">{{tab}}</view>		
				</view>
			</view>
			
			<view class="recommend">
				<view class="topTitle">
					<view class="text">热门搜索</view>				
				</view>
				<view class="tabs">				
					<view class="tab" v-for="tab in recommendList" :key="tab" 
					@click="clickTab(tab)">{{tab}}</view>
				</view>
			</view>
		</view>
		
		
		<view class="noSearch" v-if="noSearch">
			<uv-empty mode="search" icon="http://cdn.uviewui.com/uview/empty/search.png"></uv-empty>
		</view>
		
		
		<view v-else>
			
			<!-- 列表 -->
			
			<view class="list">
				<uni-list>
					<uni-list-item  direction="column" v-for="(item,index) in classList" :key="index"  :to="'/pages/detail/detail?essayId='+item.essayId"	>
						<!-- 头像昵称 -->
						<template v-slot:header >
							<view class="header">
								<image class="slot-image" :src="item.essayAuthorImg" mode="aspectFill"></image>
								<text class="name">{{item.essayAuthorName}}</text>
							</view>
						</template>
						<!-- 自定义 body -->
						<template v-slot:body>
							<text class="body-1">{{item.essayTitle}}</text>
							<text class="body-2">{{item.essayContent}}</text>
						</template>
						<!-- 自定义 footer-->
						<template v-slot:footer>
							<view  class="footer-1" > 
								<template  v-for="i in item.essayImgs">
									<image  class="footer-image" :src="i" mode="aspectFill"></image>
								</template>
							</view>
							<view class="footer-2">
								
								
								<uni-icons class="icons-1" type="chat" size="20" ></uni-icons>
								<view class="likesText">{{item.essayReviews}}</view>
								<uni-icons class="icons-1" type="hand-up" size="20" ></uni-icons>
								<view class="likesText">{{item.essayLikes}}</view>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
			</view>	
			
			
			<view class="loadingLayout" v-if="noData || classList.length">
				<uni-load-more :status="noData?'noMore':'loading'"/>
			</view>
		</view>
		
		
	</view>
</template>

<script setup>
import {ref} from "vue";
import {onLoad,onUnload,onReachBottom} from "@dcloudio/uni-app";
import {apiQueryList} from "@/api/apis.js"
//查询参数
const queryParams = ref({	
	pageNum:1,
	pageSize:10,
	keyword:""
})

const onCancel=()=>{
		
	uni.navigateBack({
		delta:1
	})
}

//搜索历史词
const historySearch = ref(uni.getStorageSync("historySearch") || []);

//热门搜索词
const recommendList = ref(["怪物猎人","steam","孩子们"]);

//没有更多
const noData = ref(false);
//没有搜索结果
const noSearch = ref(false);

//搜索结果列表
const classList = ref([]);


//点击搜索
const onSearch = ()=>{	
	uni.showLoading()
	historySearch.value = 
	[...new Set([queryParams.value.keyword,...historySearch.value])].slice(0,10);
	
	initParams(queryParams.value.keyword);
	searchData();
	console.log(queryParams.value.keyword);
}

//点击清除按钮
const onClear = ()=>{
	initParams();
}



//点击标签进行搜索
const clickTab = (value)=>{
	initParams(value);
	
	onSearch();
}


//点击清空搜索记录
const removeHistory = ()=>{
	uni.showModal({
		title:"是否清空历史搜索？",
		success:res=>{
			if(res.confirm){
				uni.removeStorageSync("historySearch");
				historySearch.value = []
			}
		}
	})
}

const searchData = async ()=>{
	try{
		let res =  await apiQueryList(queryParams.value.pageNum,queryParams.value.keyword);
		classList.value  =  [...classList.value,...res.list] ;
		
		if(queryParams.value.pageSize > res.list.length) {
			console.log(queryParams.value.pageSize)
			noData.value = true;
			console.log(noData.value)
		}
		if(res.list.length == 0 && classList.value.length==0) noSearch.value = true;
		console.log(res);
	}finally{
		uni.hideLoading()
	}
	
}

const initParams = (value='')=>{
	classList.value = [];
	noData.value = false;
	noSearch.value = false;
	queryParams.value = {
		pageNum:1,
		pageSize:10,
		keyword:value || ""
	}
}


//触底加载更多
onReachBottom(()=>{
	if(noData.value){
		console.log("没有更多数据")
		 return;
	}
	queryParams.value.pageNum++
	searchData();
})

//关闭有页面
onUnload(()=>{
	uni.removeStorageSync("storgClassList",classList.value);	
})


</script>

<style lang="scss" scoped>
.searchLayout{
	.search{
		padding:0 10rpx;
		margin-top: 60rpx;
	}
	.topTitle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		color:#999;
	}
	.history{
		padding:30rpx;		
	}
	.recommend{
		padding:30rpx;
	}
	.tabs{
		display: flex;		
		align-items: center;
		flex-wrap: wrap;
		padding-top:20rpx;
		.tab{
			background: #F4F4F4;
			font-size: 28rpx;
			color:#333;
			padding:10rpx 28rpx;
			border-radius: 50rpx;
			margin-right: 20rpx;
			margin-top: 20rpx;
		}
	}	
	.list{
		padding: 30rpx 0;
		.header{
			height: 70rpx;
					.slot-image{
						height: 60rpx;
						width: 60rpx;
						border-radius: 30rpx;
						vertical-align: middle; 
					}
					.name{
						padding-left: 15rpx;
						font-size: 23rpx;
						
					}
				}
				.body-1{
					font-size: 40rpx;
					padding: 8rpx;
					
				}
				.body-2{
					font-size: 27rpx;
					font-weight: 300;
					 /* 在恰当的断字点进行换行 */
					  word-break: break-all;
					  /* 超出范围隐藏 */
					  overflow: hidden;
					  /* 文字超出用省略号 */
					  text-overflow: ellipsis;
					  /* 盒子模型 */
					  display: -webkit-box;
					  /* 显示的文本行数 */
					  -webkit-line-clamp: 3;
					  /* 子元素的垂直排列方式 */
					  -webkit-box-orient: vertical;
					 }
					 
					 .footer-1{
						 height: 230rpx;
						 width: 100%;
						 display: flex;
						 
						 .footer-image{
							width: 200rpx;
							height: 200rpx;
							border-radius: 10rpx;
							margin-right: 20rpx;
							margin-top: 20rpx;
							margin-bottom: 0;
							
						 }
					 }
					 .footer-2{
						height: 30rpx;
						display: flex;
						margin-right: 20rpx;
						margin-left: auto;
						font-size: 20rpx;
						.icons-1{
							padding-left: 10rpx;
						}
						
						.likesText{
							padding-left: 10rpx;
							line-height: 30rpx;
							font-size: 15px;
							color: #888888;
						}
					 }
				
					
		}
}
</style>
