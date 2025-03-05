<template>
	<view class="commentItem">
		<view class="outer">
			
			
			
			
			<view class="avatar">
				<image class="prc" :src="item.userImg"></image>
			</view>
			<view class="content">
				
				
				<view class="userInfo">
					<view class="left">
						<view class="name">{{item.userName}}</view>
						<view class="time">{{item.creatTime}}</view>
					</view>
					<view class="right">
						<view class="like" @click="likeComment(item.commentId,item.isCommentLikes)">
							<view class="num">
								{{item.commentLikeCount}}
							</view>
							<uni-icons v-if="item.isCommentLikes" type="hand-up-filled" size="20" color="#dd524d"></uni-icons>
							<uni-icons v-else type="hand-up" size="20" color="#a7a7a7"></uni-icons>
						</view>
						<view class="remove">
							<uni-icons type="trash" size="20" color="#a7a7a7"></uni-icons>
							<text>删除</text>
						</view>
					</view>
				</view>
				<view class="reply" @click="toReply(item.commentId,item.commentId,item.userName,item.essayId)">
					<text>
					{{item.content}}
					</text>
				</view>
			</view>
		</view>
	
	<view class="subReply" v-if="item.subCommentList!=0">
		<view class="list">
			<view class="row" v-for="(item,index) in item.subCommentList" :key="index" @click="toReply(item.commentId,item.rootCommentId,item.userName,item.essayId)" > {{item.userName}} 回复 {{item.subCommentName}}：{{item.content}}</view>
			<view class="row more">
			共{{item.subCommentCount}}条回复	<uni-icons type="right" color="#a7a7a7" size="16"></uni-icons>
			</view>
		</view>
		
	</view>
	</view>
	
	<uni-popup type="bottom" ref="commentPopup">
		<view>
			<view class="commentPopup">
				<input type="text" class="ipt" placeholder="请输入评论内容" maxlength="50" :focus="setFocus" v-model="content"/>
				<view class="button" @click="add">
					<uni-icons  type="paperplane" size="26" color="#333"></uni-icons>
				</view>
				
			</view>
			<view class="safe-area-inset-bottom"></view>
		</view>
	</uni-popup>
	
	
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { apiAddComment, apiGetComment } from '../../api/apis';
const commentPopup=ref(null)
const content=ref("")
const setFocus=ref(Boolean)
const props=defineProps(["item"])
const toCommentId=ref(0)
const rootCommentId=ref(0)
const subCommentName=ref("")
const essayId=ref("")




const likeComment=(commentId,likes)=>{
	if (likes) {
	        console.log(`取消点赞，评论ID: ${commentId}`);
	        props.item.isCommentLikes = false; // 取消点赞
			props.item.commentLikeCount-=1;
			
	    } else {
	        console.log(`点赞，评论ID: ${commentId}`);
			
	        props.item.isCommentLikes= true; // 点赞
			props.item.commentLikeCount+=1;
	    }
		uni.request({
			url:"http://112.124.63.215:3000/likes/likes",
			method:"POST",
			data:{
				 "userId":uni.getStorageSync("userId"),
				 "toCommentId":commentId,
				  "likes":props.item.isCommentLikes
			}
		})

}

//上传评论数据
const add= async()=>{
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
			essayId:essayId.value,
			toCommentId:toCommentId.value,
			userImg:uni.getStorageSync("userImg"),
			userName:uni.getStorageSync("userName"),
			rootCommentId:rootCommentId.value,
			subCommentName:subCommentName.value
		}
		let res= await apiAddComment(data)
			uni.showToast({
			    title: '发布评论成功！',
			})
			console.log(res)
			content.value=""
			commentPopup.value.close()		
			location.reload()

	}
}

const toReply=(a,b,c,d)=>{
	console.log(a)
	setFocus.value=true
	commentPopup.value.open()	
	toCommentId.value=a
	rootCommentId.value=b
	subCommentName.value=c
	essayId.value=d
}

	
</script>

<style lang="less" scoped>
.commentItem{
	padding: 30rpx;
	.outer{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.avatar{
			width: 60rpx;
			height: 60rpx;
			margin-right: 20rpx;
			border-radius: 50%;
			overflow: hidden;
			.prc{
				width: 100%;
				height: 100%;
			}
		}
		.content{
			flex: 1;
			.userInfo{
				
					height: 60rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
				.left{
					.name{
						font-size: 26rpx;
						
					}
					.time{
						font-size: 22rpx;
						color: #888888;
					}
				}
				.right{
					font-size: 22rpx;
					display: flex;
					align-items: center;
						
					.like{
						display: flex;
						align-items: center;
						.num{
							margin-right: 5rpx;
						}
						.remove{
							margin-left: 20rpx;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
			
			.reply{
				padding: 20rpx 0;
				font-size: 30rpx;
				color: #000;
				line-height: 1.7em;
				.text{
					color: #a7a7a7;
					
					.nickname{
						color: #74dbef;
					}
				}
			}
		}
	}
	.subReply{
		padding-left: 80rpx;
		.list{
			background: #f4f4f4;
			padding: 20rpx;
			border-radius: 10rpx;
			.row{
				line-height: 1.8em;
				font-size: 28rpx;
				color: #676767;
			}
			.more{
				color: #a7a7a7;
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