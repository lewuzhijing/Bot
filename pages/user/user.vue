<template>
	<view class="userLayout">
		<view class="button" @click="out" v-if="login">
			<view class="text">退出登录</view>
			<uni-icons type="forward" size="25"></uni-icons>
		</view>
		
		<view class="userinfo">
	
			<view class="avatar">
				<image :src="user.userImg" class="userImg" mode="aspectFill"></image>
			</view>
			<view class="name" @click="toLogin()">{{user.userName}}</view>
		</view>
		<view class="menu">
			<view class="list">
				<view class="row"  @click="toInfo('essay')">
					<view  class="left">
						<uni-icons type="compose" size="20" color="#1296db"></uni-icons>
						<view class="text">我的帖子</view>
					</view>
					<view class="right">
						<view class="text">{{user.essay}}</view>
						<uni-icons type="right" size="20"></uni-icons>
					</view>
				</view>
				<view class="row"   @click="toInfo('comment')">
					<view class="left">
						<uni-icons type="chat" size="20" color="#1296db"></uni-icons>
						<view class="text">我的评论</view>
					</view>
					<view class="right">
						<view class="text">{{user.reviews}}</view>
						<uni-icons type="right" size="20"></uni-icons>
					</view>
				</view>
				<view class="row"  @click="toInfo('likes')" >
					<view class="left">
						<uni-icons type="hand-up" size="20" color="#1296db"></uni-icons>
						<view class="text">我的点赞</view>
					</view>
					<view class="right">
						<view class="text">{{user.likes}}</view>
						<uni-icons type="right" size="20"></uni-icons>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted ,ref} from 'vue'
import {onLoad,onShow} from "@dcloudio/uni-app"
import { apiGetUser } from '../../api/apis';


//
const user=ref({
	userName:"未登录",
	userImg:"../../static/tx.png",
	likes:0,
	reviews:0,
	essay:0
})

const login=ref(false)

const toInfo=(key)=>{
	console.log(111111)
	uni.navigateTo({
		url:"/pages/user/userInfo?key="+key
	})
}

const out=()=>{
	uni.removeStorageSync("userId")
	uni.removeStorageSync("userImg")
	uni.removeStorageSync("userName")
	uni.reLaunch({
	    url: '/pages/user/user'
	})
}


	
function toLogin(){
	if(uni.getStorageSync('userId')==""||uni.getStorageSync('userId')==null)
	{
		uni.reLaunch({
			url:"/pages/login/login"
		})
		
	}else{
		console.log(uni.getStorageSync('userId'))
		return
	}
};


onShow(async () => { 
	
 // 获取存储的 userId
  const userId = uni.getStorageSync('userId');
  console.log('获取到的 userId:', userId);
 
if(userId!=null&&userId!=""){
	login.value=true
	// 发送请求获取用户信息
	let res = await apiGetUser(userId)
	console.log(res.data)
	  // 更新 user 数据
	user.value = res.data; // 使用 .value 来修改 ref 中的数据
	uni.setStorageSync("userImg",user.value.userImg)
	uni.setStorageSync("userName",user.value.userName)
	console.log(user.value)
	 
}else{
	uni.navigateTo({
		url:"/pages/login/login"
	})
}
});

	
	


</script>

<style lang="less" scoped>

.userLayout{
	background:
	linear-gradient(to bottom,transparent,#fff 400rpx),
	linear-gradient(to right,#CCffff 20%,#f4e2d8);
	overflow: hidden;
	.button{
		float: right;
		/* margin-top: 40rpx;
		margin-right: 40rpx; */
		padding-top: 60rpx;
		padding-right: 40rpx;
	
		display: flex;
		.text{
			padding-top: 2rpx;
			font-size: 30rpx;
			
		}
	}
	.userinfo{
		margin-top: 100px;
		height: 400rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			height: 160rpx;
			width: 160rpx;
			border-radius: 100rpx;
			overflow: hidden;
			.userImg{
				height: 100%;
				width: 100%;
			}
		}
		.name{
			font-size: 35rpx;
			color: #333;
			padding: 20rpx 0 5rpx;
		}
	}
	.menu{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.08);
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid #eee;
				&:last-child{border-bottom: 0;}
				.left{
					display: flex;
					align-items: center;
					.text{
						padding-left: 20rpx;
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						font-size: 28rpx;
						color: #aaa;
					}
				}
			}
		}
	}
}

</style>
