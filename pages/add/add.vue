<template>
	
  <view class="layout">
	  
	  
	<view class="bar">
			发布
	</view>
	<view class="topic">
		<!-- 图片 -->
		<view class="topic-1">
			<view v-for="(item, index) in imglist" :key="index">
			

				<image class="upload" :src='item' mode='aspectFill'></image>
			</view>
			<view class="upload" @click="upImage" >
				
				<uni-icons type="plusempty" size="20" class=".add"></uni-icons>
			
			</view>
		</view>
		<textarea
		  class="add1"
		  v-model="title"
		  type="text"
		  placeholder="请输入标题"
		  maxlength="60"
		  auto-height
		/>

	</view>
	<view class="content">
		<textarea
		  class="add2"
		  type="text"
		   v-model="content"
		  placeholder="请输入内容"
		  maxlength="300"
		 auto-height
		/>
	</view>
	
	<input
	  type="button"
	  :class="['button-1', { active: isFormComplete }]"
	  :disabled="!isFormComplete"
	  value="点击发布"
	  @click="toAdd"
	/>
	
	
	

			<!-- 提示信息弹窗 -->
	<uni-popup ref="message" type="message" class="popup">
		<uni-popup-message :type="msgType" :message="messageText" :duration="2000" class="popup-message-center"></uni-popup-message>
	</uni-popup>
		
  </view>
  
</template>
<script setup>
import { ref, computed } from 'vue';

// 数据声明
const imglist = ref([]);
const title = ref('');
const content = ref('');
const messageText = ref('');
const msgType = ref('success'); // success | error

// 按钮状态
const isFormComplete = computed(() => {
  return title.value.trim() !== '' && content.value.trim() !== '' && imglist.value.length > 0;
});


//随机生成文章id
function generateRandomId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  // 可用字符
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// 选择图片
const upImage = () => {	
  console.log('选择图片');
  const essayId=generateRandomId(7);
  console.log("文章id"+essayId)
  uni.chooseImage({
    count: 9 - imglist.value.length,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      imglist.value = imglist.value.concat(res.tempFilePaths);
      console.log('当前图片列表:', imglist.value);
    },
    fail: (err) => {
      console.error('图片选择失败', err);
    },
  });
};


//上传文章
const toAdd = async () => {
    console.log('开始上传图片和附加参数');
    const essayId = generateRandomId(7);  // 生成文章ID
    console.log("文章id", essayId);
    let imgulr = "";  // 初始化图片URL字符串

    // 上传每一张图片并等待完成
    const uploadPromises = imglist.value.map((item, index) => {
        return new Promise((resolve, reject) => {
            uni.uploadFile({
                url: "http://localhost:8080/essay/uploadImg", // 上传图片的接口
                filePath: item, // 图片路径
                name: "essayImgs", // 上传字段名
                success: (uploadFileRes) => {
                    console.log(uploadFileRes.data, '=》》》》');
                    try {
                        let imgData = JSON.parse(uploadFileRes.data);
                        imgulr += imgData.data + ','; // 拼接返回的图片URL
                        console.log("imgulr:", imgulr);
                        resolve(); // 上传成功后调用 resolve
                    } catch (error) {
                        reject('图片上传失败');
                    }
                },
                fail: (error) => {
                    console.error("图片上传失败,因为内容过大,", error);
                    reject('图片上传失败');
                }
            });
        });
    });

    try {
        // 等待所有图片上传完成
        await Promise.all(uploadPromises);

        // 所有图片上传完成后发送请求
        uni.request({
            url: "http://localhost:8080/essay/add", // 后端添加文章接口
            method: "POST",
            data: {
                "essayAuthorId": uni.getStorageSync('userId'),
                "essayTitle": title.value,
                "essayContent": content.value,
                "essayId": essayId,
                "essayImgs": imgulr.slice(0, -1),
				"essayAuthorName": uni.getStorageSync('userName')
            },
            success: (res) => {
                console.log("文章添加成功", res);
                uni.showToast({
                    title: '文章发布成功！',
                });
				imglist.value="";
				title.value=""
				content.value=""
				
				uni.navigateTo({
					url:"/pages/detail/detail?essayId="+essayId
				})
            },
            fail: (err) => {
                console.log("文章添加失败", err);
                uni.showToast({
                    title: '文章发布失败',
                    icon: 'error'
                });
            }
        });
    } catch (error) {
        console.error("图片上传失败", error);
        uni.showToast({
            title: '图片上传失败，请重试',
            icon: 'none'
        });
    }
};


// 弹窗提示
const showMessage = (text, type) => {
  messageText.value = text;
  msgType.value = type;
  const popup = uni.$refs.message;
  popup.open();
};

// 返回方法
const reback = () => {
  uni.redirectTo({
    url: '/pages/index/index', // 替换为实际目标页面路径
  });
};


</script>

<style lang="less" scoped>
	

.layout {
  height: 700px	;
  width: 100%;
	.bar{
		padding-top: 50px;
		padding-bottom: 10px;
		height: 80px;
		text-align: center;
		
		width: 100%;
		font-weight: 600;
		font-size: 16px;
		border-bottom: 0.5px solid #cfcfcf 
			
		
	}
		
	.topic{
		min-height: 180px;
		width: 100%;
		margin-top: 20px;
		border-bottom: 0.5px solid #cfcfcf ;
		
		.topic-1{
			display: flex;
			flex-wrap: wrap;
			position: relative;
	
			.upload{
				width: 100px;
				height:100px;
				margin-left: 15px;
				margin-bottom: 10px;
				background-color: #f8f8f8;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.add1{
			margin: 20px;
			margin-top: 0px;
			padding-top: 20px;
			width: auto;
			font-size: 33rpx;
			line-height: 33rpx;
			font-weight: 500;
		}
	}
	.content{
		.add2{
			padding-top: 20px;
			margin-left: 20px;
			margin-right: 20px;
			font-size: 30rpx;
			line-height: 30rpx;
			font-weight: 400;
		}
	}
	
	.button-1 {
	  width: 550rpx;
	  height: 85rpx;
	  background-color: #869eb8; /* 默认灰色 */
	  margin: 360rpx auto;
	  border-radius: 15rpx;
	  box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.08);
	  text-align: center;
	  color: aliceblue;
	  font-size: 30rpx;
	  cursor: not-allowed; /* 不可点击的鼠标样式 */
	}
	.button-1.active {
	  background-color: #1296db; /* 激活状态为绿色 */
	  cursor: pointer;
	}

	

/* 使提示消息居中 */
	.popup-message-center {
		text-align: center;
	   position: relative;
	   top: 100px;
	   margin: 0 auto;
	   max-width: 200px;
	}



.icon{
	position: relative;
	top: 40px;
	left: 20px;
}

}
</style>
