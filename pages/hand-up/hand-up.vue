<template>
<view >

	<z-paging ref="paging" v-model="essayList" @query="queryList" class="list">
		<template #top>
			<custom-nav-bar title="热点"></custom-nav-bar>
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
									<!-- 当前判断长度只为简单判断类型，实际业务中，根据逻辑直接渲染即可 -->
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
	import { apiQueryHandUpList } from "@/api/apis.js"
	//页数
	var page =1
	
	//列表数据
		const essayList = ref([]);
		const paging=ref()
	
	//分页获取数据
	const queryList=  async ( pageNo,pageSize)=>{
		
		let res= await apiQueryHandUpList(pageNo)
		paging.value.complete(res.list)

	}
	
	
	

		
</script>

<style lang="scss">
	@import '@/common/uni-ui.scss';


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
