<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">
					{{title}}
				</view>
				<navigator   url="/pages/search/search" class="seacher">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>	
				</navigator>
			</view>
		</view>
		<view class="fill" :style="{height:getStatusBarHeight()+getTitleBarHeight()+'px'}"></view>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getStatusBarHeight,getTitleBarHeight } from "@/utils/system.js"

defineProps({
	title:{
		type:String,
		default:"首页"
	}
})

</script>

<style lang="less" scoped>
.layout{
		
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom,transparent,#fff 400rpx),
		linear-gradient(to right,#CCffff 20%,#f4e2d8);
	
		.statusBar{
			
		}
			
		.titleBar{
			display: flex;
			padding: 0 30rpx;
			align-items: center;
			
			.title{
				font-size: 22px;
				font-weight: 700;
				margin-left: 10rpx;
				color: #000;
			}
				
			.seacher{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background-color: rgba(255,255,255);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					margin-left: 5rpx;
				}
				
			}
			.add{
				margin-left: 300rpx;
			}
			
		}
	}
}
</style>