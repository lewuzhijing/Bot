<template>
	
  <view class="layout">
	  
	  <uni-icons class="icon" type="left" size="28" @click="reback"></uni-icons>
	  <view class="text">登录账号</view>
    <view class="form">
      <uni-forms :modelValue="formData">
        <uni-forms-item label="账号" name="user">
          <view class="input">
            <input
              class="add1"
              type="text"
              v-model="formData.user"
              placeholder="请输入账号"
              placeholder-style="text-align: center;"
            />
          </view>
        </uni-forms-item>
        <uni-forms-item label="密码" name="password">
          <view class="input">
            <input
              class="add2"
              type="password"
              v-model="formData.password"
              placeholder="请输入密码"
              placeholder-style="text-align: center;"
            />
          </view>
        </uni-forms-item>
      </uni-forms>
    </view>
    <button
      :class="['button-1', { active: isFormComplete }]"
      :disabled="!isFormComplete"
      value="登录"
      @click="toLogin"
    >登录</button>
	
		
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="center" class="popup">
				
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000" class="popup-message-center"></uni-popup-message>
			</uni-popup>
		
  </view>
  
</template>

<script setup>
import { ref, computed } from "vue";
import { reactive, toRefs, nextTick } from 'vue'
import {    onMounted,    getCurrentInstance  } from 'vue';

// 表单数据
const formData = ref({
  user: "",
  password: "",
});
const msgType=ref("success");
const messageText= ref("登录成功");
// 定义组件引用
const message = ref(null);

// 计算属性：判断表单是否完整
const isFormComplete = computed(() => {
  return formData.value.user.trim() !== "" && formData.value.password.trim() !== "";
});


// 登录方法

const toLogin=()=>{
	uni.request({
		url:"http://148.100.78.168:3000/user/login",
			method:"POST",
			data:{
				"userId":formData.value.user,
				"userPassword":formData.value.password
			}
	}).then(res=>{
		if(res.data.code===1){
			// 登录成功后，将 userId 存储到本地缓存
			uni.setStorageSync('userId', res.data.data.userId);
			
			
			if (message.value && typeof message.value.open === 'function') {
				message.value.open(); // 调用 uni-popup 的 open 方法
			}
				
			uni.reLaunch({
				url:"/pages/user/user"
			})
		}else{
			console.log("登录失败")
			msgType.value = "error";
			messageText.value = "账号或密码错误，请重试";
			if (message.value && typeof message.value.open === 'function') {
				message.value.open(); // 调用 uni-popup 的 open 方法
			}
		}
	}).catch(error=>{
		console.log("登录失败")
		msgType.value = "error";
		messageText.value = "服务器失联了，请稍后再尝试";
		if (message.value && typeof message.value.open === 'function') {
			message.value.open(); // 调用 uni-popup 的 open 方法
		}
			
	})
}


//返回方法
function reback(){
	uni.switchTab({
		url:"/pages/user/user"
	})
}
</script>

<style lang="less" scoped>
	

.layout {
  height: 800px;
  width: 100%;
  background: linear-gradient(
      to bottom,
      transparent,
      #fff 1000rpx
    ),
    linear-gradient(to right, #ccffff 20%, #f4e2d8);

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
.text{
	text-align: center;
	position: relative;
	top: 130px;
	font-size: 25px;
	font-weight: 800;
}
  .form {
    height: 300rpx;
    position: relative;
    top: 160px;
    display: flex;
    align-content: center;
    justify-content: center;

    .input {
      width: 550rpx;
      height: 85rpx;
      border-radius: 15rpx;
      background-color: rgba(255, 255, 255);
      border: 1px solid #fff;
      margin: 50rpx;
      box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.08);

      input {
        height: 85rpx;
        padding: 0 20rpx;
        text-align: center;
      }
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
    background-color:#1c3a62; /* 激活状态橙色 */
    color: #ffffff; /* 白色文字 */
    cursor: pointer; /* 可点击的鼠标样式 */
  }
}
</style>
