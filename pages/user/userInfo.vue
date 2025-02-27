<template>
<view >

	<z-paging ref="paging" v-model="essayList" @query="queryList" class="list">
		<template #top>
			<view class="bar">
				<view class="left">
					 <uni-icons class="icon" type="left" size="30" @click="reback"></uni-icons>
				</view>
				<view class="bar-text" :style="{ height:getStatusBarHeight()+getTitleBarHeight()+'px',lineHeight:getStatusBarHeight()+getTitleBarHeight()+'px'}">
					{{title}}
				</view>
			</view>
		</template>
		 <!-- 自定义刷新组件-->
		 <template #refresher="{refresherStatus}">
		 	<custom-refresher :status="refresherStatus" />
		 </template>	 
		 <!-- 自定义没有更多数据view -->
		 <template #loadingMoreNoMore>
		 	<!-- 此处的custom-nomore为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，没有更多数据就显示什么view -->
		 	<custom-nomore />
		 </template>
				<!-- 基于 uni-list 的页面布局 -->
				<uni-list>
						<uni-list-item direction="row" v-for="(item,index) in essayList" :key="index"  :to="'/pages/detail/detail?essayId='+item.essayId">
							<!-- 通过body插槽定义列表内容显示 -->
							<template v-slot:body>
								<view class="uni-list-box uni-content">
									<view class="uni-title uni-ellipsis-2">{{item.essayTitle}}</view>
									<view class="uni-note">
										<text>{{item.essayAuthorName}}</text>
										<text>{{item.essayTime}}</text>
									</view>
								</view>
							</template>
							<!-- 通过footer插槽自定义图片右侧显示 -->
							<template v-slot:footer>
								<view class="uni-thumb" style="margin: 0;">
									
									<image class="footerImage" :src='item.essayImgs'  mode="aspectFill"></image>
								</view>
							</template>
						</uni-list-item>					
				</uni-list>
		</z-paging>
</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import{onLoad} from"@dcloudio/uni-app"
	import { apiGetMyInfo, apiQueryHandUpList } from "@/api/apis.js"
	import { getStatusBarHeight,getTitleBarHeight } from "@/utils/system.js"

	
	//列表数据
		const essayList = ref([]);
		const paging=ref()
		const title=ref();
	
	//分页获取数据
	const queryList=  async ( pageNo,pageSize)=>{
		let data={
			"pageNo":pageNo,
			"info":title.value,
			 "userId":uni.getStorageSync("userId")
		}
		let res= await apiGetMyInfo(data)
		paging.value.complete(res.list)

	}
	
	onLoad((e)=>{
		if(e.key==="essay"){
			title.value="我的帖子"
		}else if(e.key=="comment"){
			title.value="我的评论"
		}else{
			title.value="我的点赞"
		}
	})
	
	
	const reback=()=>{
		//uni.navigateBack()//默认delta:1
		uni.navigateBack({
			delta:1,//返回层数，2则上上页
		})

	}
	

		
</script>

<style lang="scss" scoped>
	@import '@/common/uni-ui.scss';

	
	.bar {
	  display: flex;
	  align-items: center; /* 垂直居中 */
	  justify-content: flex-start; /* 按钮在左侧 */
	  padding: 0 15px; /* 为了保证左右有一定的间距 */
	  background-color: #ffffff; /* 背景色，可以根据需要调整 */
	  background:
	  linear-gradient(to bottom,transparent,#fff 400rpx),
	  linear-gradient(to right,#CCffff 20%,#f4e2d8);
	}
	
	.left {
	  display: flex;
	  align-items: center; /* 垂直居中按钮 */
	  justify-content: center; /* 按钮居中 */
	  flex-shrink: 0; /* 防止按钮压缩 */
	}
	
	.bar-text {
	 margin-left: 40rpx;
	  text-align: center; /* 文本居中 */
	  font-size: 40rpx;
	  font-weight: 600;
	  color: #333333; /* 文本颜色，可以根据需要调整 */
	}

	
	


	.uni-list-box {
		margin-top: 0;
	}

	.uni-content {
		padding-right: 10px;
	}

	.uni-note {
		display: flex;
		margin: 0;
		justify-content: space-between;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.content {
		width: 100%;
		display: flex;
	}

	.list-picture {
		width: 100%;
		height: 145px;
	}

	.thumb-image {
		width: 100%;
		height: 100%;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
