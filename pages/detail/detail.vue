<template>
	<view class="layout" >
		<view class="bar" :style="{ height:getStatusBarHeight()+getTitleBarHeight()+'px'}">
			<view class="left">
				 <uni-icons class="icon" type="left" size="20" @click="reback"></uni-icons>
			</view>
			<view class="conten">
				<view class="conten-1">正文</view>
			</view>
		</view>
		<view class="img">		
			<swiper indicator-dots indicator-color="rgab(255,255,255,0.5)" indicator-active-color="#000"  @change="change">
				<swiper-item v-for="(item,index) in essay.essayImgs" :key="index" >
					<image :src="item" mode="aspectFit"></image>
				</swiper-item>
			</swiper>			
		</view>
		<view class="content">
			<view class="user">
				<image :src="essay.essayAuthorImg" mode="aspectFill" class="userImg"></image>
				<text class="text">{{essay.essayAuthorName}}</text>
			</view>
			<view class="topic">
				{{essay.essayTitle}}
			</view>
			<view class="detail">
			{{essay.essayContent}}
			</view>
			<view class="timeAndIcons">
				<view class="time">{{essay.essayTime}}</view>
				<view class="likes" @click="likeEssay(essay.essayId)">
					<uni-icons v-if="likes" type="hand-up-filled" size="20" class="icon" color="#dd524d"></uni-icons>
					<uni-icons v-else type="hand-up" size="20" color="#8f9095"  class="icon"></uni-icons>
					<view class="likesText">{{essay.essayLikes}}</view>
				</view>
			</view>
		</view>
		
		<!-- 评论组件 -->
		
		<view class="comments">
			<template v-for="(item ,index) in comments" :key="index">
				<comment-item  :item="item"></comment-item>
			</template>
		</view>
		
		
		<!-- 底部组件 -->
		<view class="bottom">
			<view class="line">
				<view class="add" @click="handComment()">参与讨论</view>
				<uni-icons  type="paperplane" size="26" color="#333" class="icon"></uni-icons>
			</view>
		</view>
	</view>
	
	<uni-popup type="bottom" ref="commentPopup">
		<view>
			<view class="commentPopup">
				<input type="text" class="ipt" placeholder="请输入评论内容" maxlength="50" :focus="setFocus" v-model="content"/>
				<view class="button" @click="addComment">
					<uni-icons  type="paperplane" size="26" color="#333"></uni-icons>
				</view>
				
			</view>
			<view class="safe-area-inset-bottom"></view>
		</view>
	</uni-popup>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import{onLoad} from"@dcloudio/uni-app"
import { getStatusBarHeight,getTitleBarHeight } from "@/utils/system.js"
import{ apiGetEssay,apiGetComment, apiIsToEssayLikes, apiAddComment, apiLikesEssay } from "@/api/apis.js"

const setFocus=ref(Boolean)
const commentPopup=ref(null)
const content=ref("")
const toCommentId=ref()
const essay = ref({
	essayId:'',
    essayTitle: '',
    essayContent: '',
    essayTime: '',
    essayImgs: [],
    essayAuthorName: '',
    essayAuthorImg: '',
	essayLikes:0,
	essayReviews:0
});

const comments = ref([]);

const likes=ref()



const likeEssay=async (esssayId)=>{
	
	if(uni.getStorageSync("userId")!=null&&uni.getStorageSync("userId")!="")
	{
		
		console.log(likes.value)
		if (likes.value) {
			console.log(`取消点赞，`);
			likes.value = false; // 取消点赞
			essay.value.essayLikes-=1;
		      
		    } else {
		        
				console.log(`点赞`);
				essay.value.essayLikes=1+essay.value.essayLikes;
				console.log(essay.value.essayLikes)
				likes.value = true; // 点赞
		    }
			
			let data={
					 "userId":uni.getStorageSync("userId"),
					  "essayId":essay.value.essayId,
					  "likes":likes.value
				}
				
				let res=await apiLikesEssay(data)
	}else{
		uni.showToast({
		    title: '未登录',
		    icon: 'error'
		});
	}
}



const handComment=()=>{
	console.log("评论")
	setFocus.value=true
	commentPopup.value.open()
	
}

const addComment= async()=>{
	
	if(uni.getStorageSync('userId')==""||uni.getStorageSync('userId')==null){
		uni.showToast({
		    title: '未登录',
		    icon: 'error'
		});
		console.log("未登录")
	}else{
		
		let data={
			content:content.value,
			userId:uni.getStorageSync('userId'),
			essayId:essay.value.essayId,
			userImg:uni.getStorageSync("userImg"),
			userName:uni.getStorageSync("userName")
		}
		
		let res=await apiAddComment(data)
		uni.showToast({
		    title: '发布评论成功！',
		})
		console.log(res)
		content.value=""
		commentPopup.value.close()
		let commentRes=await apiGetComment(essay.value.essayId,1)
		comments.value=commentRes.list
	
	}
}




const reback = () => {
	
	uni.switchTab({
		url:"/pages/index/index"
	})
};



onLoad( async (e)=>{
	console.log("跳转文章id",e.essayId)
	essay.value.essayId=e.essayId
	let essayRes=await apiGetEssay(e.essayId)
	essay.value=essayRes.data
	
	
	let commentRes=await apiGetComment(e.essayId,1)
	comments.value=commentRes.list
	
	
	let likesRes=await apiIsToEssayLikes(e.essayId)

	likes.value=likesRes.data
})




	
</script>

<style lang="less" scoped>
	
	
.layout{
    overflow: scroll;
	.bar{
		padding-top: 40px;
		display: flex;
		
		.left{
			.icon{
				margin-left: 20rpx;
			}
		}	
		.conten{
			.conten-1 {
				
				margin-left: 290rpx;
				font-size: 14px;
				font-weight: 600;
			}
		
		}
	}
	.img{
		margin-top: 10rpx;
		swiper{
			width: 100%;
			min-height: 300px;
			swiper-item{
				width: 100%;
				height: 100%;
				padding: 0;
				image{
					width: 100%;
					height: 100%;
					
				     }
			      }
			}
		
	}
	.content{
		padding: 40rpx;
		min-height: 150px;
		position: relative;
			border-bottom: 12rpx solid #f7f7f7;
		.user{
			height: 70rpx;
			.userImg{
				
				height: 60rpx;
				width: 60rpx;
				border-radius: 30rpx;
				vertical-align: middle; 
			}
			.text{
				padding-left: 15rpx;
				font-size: 23rpx;
			}
		}
		.topic{
			margin: 10rpx;
			font-size: 15px;
			font-weight: 600;
			min-height: 60rpx;
		}
		.detail{
			font-size: 13px;
		}
			
		.timeAndIcons{
			margin-top: 15px;
			display: flex;
			height: 30px;
			width: 100%;
			 justify-content: space-between;
			.time{
				line-height: 30px;
				font-size: 10px;
				color: #888888;
			   
				 
			}
			.likes{
				display: flex;
				height: 30px;
				
				.icon{
					margin: auto 5px;
				}
				.likesText{
					line-height: 30px;
					font-size: 13px;
					color: #888888;
				}
			}
		}
		
	}
	.comments{
		padding-top: 0px;
		padding-bottom: 100px;
		min-height: 500rpx;
		
	}
	
	.bottom{
		position: fixed;
		bottom: 0rpx;
		padding-bottom: 50rpx;
		width: 100%;
		z-index: 10;
		background-color: #ffffff;
		.line{
			display: flex;
			line-height: 30px;
			padding-top: 20px;
			padding-bottom: 10px;
			.add{
				background-color: #f8f8f8;
				margin-left: 20rpx;
				width: 80%;
				height: 30px;
				border-radius: 8px;
				text-align: center;
				color: #67677a;
				
			}
			.icon{
				padding-left: 15px;
				
			}
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
	    margin-bottom: 30rpx;
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



</style>
