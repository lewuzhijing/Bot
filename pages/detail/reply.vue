<template>
	<view class="replyOut">
		<view class="outer">
			<view class="body">
				<comment-item></comment-item>
			</view>
		    <view class="list">
				<view class="row" v-for="item in 4">
					<comment-item ></comment-item>
				</view>
			</view>
		</view>
	</view>
	
	<uni-popup type="bottom" ref="commentPopup">
		<view>
			<view class="commentPopup">
				<input type="text" class="ipt" placeholder="请输入评论内容" maxlength="50"/>
				<view class="button">
					<uni-icons  type="paperplane" size="26" color="#333"></uni-icons>
				</view>
				
			</view>
			<view class="safeBottom"></view>
		</view>
	</uni-popup>
</template>

<script setup>
const commentPopup=ref(null)

const handComment=()=>{
	console.log("评论")
	commentPopup.value.open()
}
</script>

<style lang="less" scoped>
.replyOut{
	.body{
		padding:  30rpx 0;
		border-bottom: 12rpx solid #f7f7f7;
	}
	.list{
		.row{
			border-bottom: 1px solid #f7f7f7;
		}
	}
	
}


.commentPopup{
	background: #ffffff;
	padding: 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	.ipt{
		background: #f8f8f8;
		height: 70rpx;
		flex: 1;
		padding: 0 20rpx;
		font-size: 28rpx;
		color: #333;
		border-radius: 10rpx;
	}
	
	.button{
		width: 70rpx;
		height: 70rpx;
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.safeBottom{
	height: 40rpx;
	background: #ffffff;
}
</style>
