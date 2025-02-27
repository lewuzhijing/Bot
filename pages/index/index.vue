<template>
	<z-paging ref="paging" v-model="list" @query="queryList" class="homeLayout">
	
		
		<template #top>
			<custom-nav-bar></custom-nav-bar>
		</template>
		
		
			<view class="banner">
				<swiper indicator-dots indicator-color="rgab(255,255,255,0.5)" indicator-active-color="#fff" autoplay circular>
					<swiper-item v-for="item in swiper">
						<image :src="item.essayImgs[0]" mode="aspectFill" @click="toDetail(item.essayId)"></image>
					</swiper-item>
				</swiper>
				
			</view>
			
			<view class="notice">
				<view class="left">
					<uni-icons type="sound-filled" size="20" color="#1296db"></uni-icons>
					<text class="text">公告</text>
				</view>
				<view class="center">
					<swiper vertical autoplay interval="1500" duration="300" circular>
						<swiper-item v-for="item in 3" >
							此版本为测试版，含有许多bug
						</swiper-item>
					</swiper>
				</view>
				<view class="rigth">
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
		
		
		<!-- 自定义刷新组件-->
		<template #refresher="{refresherStatus}">
			<custom-refresher :status="refresherStatus" />
		</template>	 
		<!-- 自定义没有更多数据view -->
		<template #loadingMoreNoMore>
			<!-- 此处的custom-nomore为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，没有更多数据就显示什么view -->
			<custom-nomore />
		</template>
	
		
		<view class="list">
			<uni-list>
				<uni-list-item  direction="column" v-for="(item,index) in list" :key="index"  :to="'/pages/detail/detail?essayId='+item.essayId"	>
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
		
	</z-paging>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import{ apiQueryList } from "@/api/apis.js"
	import{onLoad,onShow} from"@dcloudio/uni-app"
	
	const paging=ref()
	const list=ref([
	])
	const swiper=ref([])
	
	
	
	//分页获取数据
	const queryList= async ( pageNo,pageSize)=>{
		let res=await apiQueryList(pageNo,"");
		swiper.value=res.list.slice(0, 3)
		paging.value.complete(res.list)
	
	}
	
	
	
	function toDetail(essayId){
		uni.navigateTo({
			url:"/pages/detail/detail?essayId="+essayId
		})
	}
	
	onShow(()=>{
		queryList(1,10)
	})
	
	
</script>

<style lang="less" scoped>
.homeLayout{
		.banner{
			width: 750rpx;
			//根据机型修改
			
			background:
			linear-gradient(to bottom,transparent,#fff 400rpx),
			linear-gradient(to right,#ccffff 20%,#f4e2d8);
			margin-bottom: 10px;
			swiper{
				width: 750rpx;
				height: 340rpx;
				swiper-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					     }
				      }
				}
			}
		
		.notice{
			
			width: 690rpx;
			height: 80rpx;
			background-color: #f9f9f9;
			line-height: 80rpx;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text{
					color: #1296db;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.rigth{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
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
