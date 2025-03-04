<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import{onShow} from"@dcloudio/uni-app"
// import axios from 'axios';
// 生成随机用户ID（示例：8位字母数字组合）
const generateUserId = () => {
  return Math.random().toString(36).substr(2,  8);
};
 
// 持久化存储用户ID
const userId = ref('');
const chatId=ref('')
const MessageStatus = {
  Streaming: 'streaming',
  Complete: 'complete',
  Error: 'error',
};
 
const messages = ref([]);
const inputMessage = ref('');
const isLoading = ref(false);
const controller = ref(null);
const messageContainer = ref(null);
const inputRef = ref(null);
//后端获取的历史数据
// const  historyData = reactive({})
// 自动滚动控制
let autoScroll = true;
let lastCharType = 'other';
 
const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value  && autoScroll) {
      messageContainer.value.scrollTop  = messageContainer.value.scrollHeight; 
    }
  });
};
 
const handleScroll = () => {
  if (!messageContainer.value)  return;
  const { scrollTop, scrollHeight, clientHeight } = messageContainer.value; 
  autoScroll = scrollHeight - (scrollTop + clientHeight) < 50;
};
 
// 字符类型检测
const getCharType = (char) => {
  if (/[\u4e00-\u9fa5\u3000-\u303F\uFF00-\uFFEF]/.test(char)) {
    return 'chinese';
  }
  if (/[a-zA-Z]/.test(char)) {
    return 'english';
  }
  return 'other';
};
 
// 智能空格处理核心逻辑
const processContent = (prev, newData) => {
  if (prev.length  === 0) return newData;
 
  const lastChar = prev.slice(-1); 
  const newFirstChar = newData[0] || '';
 
  const prevType = getCharType(lastChar);
  const newType = getCharType(newFirstChar);
 
  let processed = newData;
 
  // 需要添加空格的情况
  const shouldAddSpace =
      (prevType === 'english' && newType === 'english') ||
      (prevType === 'chinese' && newType === 'english') ||
      (prevType === 'english' && newType === 'chinese' && !/[!?,.]$/.test(lastChar));
 
  // 需要删除空格的情况
  const shouldRemoveSpace =
      (prevType === 'chinese' && newType === 'chinese') ||
      (prevType === 'other' && /^[\u4e00-\u9fa5]/.test(newData));
 
  if (shouldAddSpace && !lastChar.match(/\s/)  && !newFirstChar.match(/\s/))  {
    processed = ' ' + processed;
  } else if (shouldRemoveSpace) {
    processed = processed.replace(/^\s+/,  '');
  }
 
  return processed;
};
 
const sendChatRequest = async (content, botMessage) => {
  controller.value  = new AbortController();
 // const fetchEventSource = await import('@microsoft/fetch-event-source');
  await fetchEventSource('http://148.100.78.168:3000/chat/stream',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/event-stream',
      'X-Content-Lang': 'zh-CN'
    },
    body: JSON.stringify({  message: content, userId: userId.value,  chatId: chatId.value }),
    signal: controller.value.signal, 
    openWhenHidden: true,
 
    onopen: async response => {
      // if (!response.ok)  throw new Error(`HTTP error ${response.status}`) 
    },
 
    onmessage: event => {
      if (event.data  === '[DONE]') {
        botMessage.status  = MessageStatus.Complete;
        return;
      }
 
      const processedData = processContent(botMessage.content,  event.data); 
      botMessage.content  += processedData;
      botMessage.timestamp  = Date.now(); 
 
      // 更新最后字符类型
      const lastChar = processedData.slice(-1); 
      lastCharType = getCharType(lastChar);
 
      scrollToBottom();
    },
 
    onerror: err => {
      throw err;
    }
  });
};
 
 
 // const sendChatRequest = (content, botMessage) => {
 //   // 创建 wx.request  请求任务
 //   const requestTask = wx.request({ 
 //     url: 'http://148.100.78.168:3000/chat/stream',
 //     method: 'POST',
 //     data: {
 //       message: content,
 //       userId: userId.value, 
 //       chatId: chatId.value, 
 //     },
 //     header: {
 //       'Content-Type': 'application/json',
 //       'Accept': 'text/event-stream',
 //       'X-Content-Lang': 'zh-CN',
 //     },
 //     enableChunked: true, // 启用分块接收
 //     success: (res) => {
 //       console.log('Response  received:', res.data); 
 //       // handleSSEData(res.data,  botMessage); // 处理 SSE 数据 
 //     },
 //     fail: (error) => {
 //       handleRequestError(botMessage, error);
 //     },
 //   });
 //    // 开发工具存在问题，使用真机测试
 //      const listener = (data) => {
 //      		// data为返回的数据，可以在此对数据进行处理
	// 		console.log('话',data)
 //      }
 //      // 监听服务端返回的数据
 //      requestTask.onChunkReceived(listener)
 //      // 移除监听 需传入与监听时同一个的函数对象
 //      requestTask.offChunkReceived(listener)
 
  
 //   // 返回取消请求的方法
 //   return () => {
 //     console.warn('Request  cancellation is not directly supported in WeChat Mini Program.');
 //     requestTask.abort();  // 尝试终止请求
 //   };
 // };
  
 // // 处理 SSE 数据
 // const handleSSEData = (data, botMessage) => {
 //   let buffer = ''; // 缓冲区
  
 //   data.split('\n').forEach((line)  => {
 //     buffer += line;
  
 //     // 如果遇到空行，表示一条完整消息结束
 //     if (line.trim()  === '') {
 //       const lines = buffer.split('\n').filter((l)  => l.trim()  !== '');
 //       buffer = ''; // 清空缓冲区
  
 //       for (const l of lines) {
 //         if (l.startsWith('data:'))  {
 //           const eventData = l.slice(5).trim();  // 提取数据部分
  
 //           if (eventData === '[DONE]') {
 //             botMessage.status  = MessageStatus.Complete;
 //             return;
 //           }
  
 //           const processedData = processContent(botMessage.content,  eventData);
 //           botMessage.content  += processedData;
 //           botMessage.timestamp  = Date.now(); 
  
 //           const lastChar = processedData.slice(-1); 
 //           lastCharType = getCharType(lastChar);
  
 //           scrollToBottom();
 //         }
 //       }
 //     }
 //   });
  
 //   // 如果缓冲区中还有未处理的数据，保留到下次处理 
 //   if (buffer && !buffer.endsWith('\n'))  {
 //     console.log('Incomplete  data in buffer:', buffer);
 //   }
 // };
 
 

// 错误处理
const handleRequestError = (botMessage, error) => {
  const errorMessage = error instanceof Error
      ? navigator.onLine 
          ? error.message  
          : '网络连接不可用'
      : '请求发生未知错误';
 
  botMessage.status  = MessageStatus.Error;
  botMessage.content  = errorMessage;
};
 
// 主发送逻辑
const sendMessage = async () => {
  if (!inputMessage.value.trim()  || isLoading.value)  return;
 
  const userContent = inputMessage.value.trim(); 
  inputMessage.value  = '';
 
  // 创建用户消息
  const userMessage = reactive({
    id: `user-${Date.now()}`, 
    content: userContent,
    isBot: false,
    timestamp: Date.now() 
  });
  messages.value.push(userMessage); 
 
  // 创建机器人消息
  const botMessage = reactive({
    id: `bot-${Date.now()}`, 
    content: '',
    isBot: true,
    status: MessageStatus.Streaming,
    timestamp: Date.now() 
  });
  messages.value.push(botMessage); 
 
  isLoading.value  = true;
  try {
    await sendChatRequest(userContent, botMessage);
  } catch (err) {
    handleRequestError(botMessage, err);
  } finally {
    isLoading.value  = false;
    nextTick(() => inputRef.value?.focus()); 
  }
};
 
// 停止生成
const stopGeneration = () => {
	
  controller.value?.abort(); 
  isLoading.value  = false;
};
//历史记录信息 
const fetchHistoryMessages = () => {
    // loading.value  = true;
    // error.value  = null;
	if(localStorage.getItem('chatId'))
	chatId.value=localStorage.getItem('chatId')
	
    // 使用uni.request 发送GET请求到后端接口 
        uni.request({ 
            url: 'http://148.100.78.168:3000/chat/getMessage', // 后端接口地址
            method: 'GET',
            data: {
                chatId: chatId.value||"test1"// 查询参数
            },
            success: (res) => {
                // 检查响应状态码和数据结构
				console.log("11",res)
                if (res.statusCode  === 200 && res.data.code  === 1) {
                    const historyData = res.data.data; 
                    historyData.forEach(item  => {
                        const message = {
                            id: item.id, 
                            content: item.message, 
                            isBot: item.messageType  === "ASSISTANT",
                            timestamp: new Date(item.creatTime).getTime() 
                        };
						// messages.value=[]
                        messages.value.push(message); 
                    });
                } else {
                    error.value  = '服务器返回了错误的数据';
                }
            },
            fail: (err) => {
                // 错误处理
                error.value  = err.errMsg  || '无法获取历史记录，请稍后再试';
            },
            complete: () => {
                // 请求完成后的回调
                // loading.value  = false;
            }
        });
};
 
// 生命周期
onMounted(() => {
	
  userId.value  = localStorage.getItem('chatUserId')  || generateUserId();
  chatId.value='text1'
  localStorage.setItem('chatId',chatId.value)
  localStorage.setItem('chatUserId', userId.value);
   // fetchHistoryMessages(chatId.value)
    fetchHistoryMessages()
  messageContainer.value?.addEventListener('scroll',  handleScroll);
  scrollToBottom()
  inputRef.value?.focus(); 
  
});
 onShow(()=>{
	 // fetchHistoryMessages(chatId.value)
 })
onBeforeUnmount(() => {
  messageContainer.value?.removeEventListener('scroll',  handleScroll);
  controller.value?.abort(); 
});
</script>

<template>
  <div class="chat-container">
    <header class="app-header">
      <div class="logo">
        <svg viewBox="0 0 24 24">
          <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
        <h1>Spring AI</h1>
      </div>
    </header>

    <div class="messages" ref="messageContainer">
      <div
          v-for="msg in messages"
          :key="msg.id"
          :class="[
          'message',
          msg.isBot ? 'bot' : 'user',
          { streaming: msg.status === MessageStatus.Streaming }
        ]"
      >
        <div class="avatar">
          <svg v-if="msg.isBot" viewBox="0 0 24 24">
            <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
          <svg v-else viewBox="0 0 24 24">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>

        <div class="message-content">
          <div class="meta">
            <span class="sender">{{ msg.isBot ? 'Spring AI' : '我' }}</span>
            <span class="time">{{ new Date(msg.timestamp).toLocaleTimeString() }}</span>
          </div>
          <div class="bubble">
            <template v-if="msg.status === MessageStatus.Streaming">
              <div class="typing-indicator">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </template>
            <div class="text-content">{{ msg.content }}</div>
            <div v-if="msg.status === MessageStatus.Error" class="error-actions">
              <button @click="msg.retry?.()">重试</button>
            </div>
          </div>
        </div>
      </div>
    </div>
<button @click="fetchHistoryMessages(chatId)">获取历史数据</button>
    <div class="input-area">
      <div class="input-wrapper">
        <input
            ref="inputRef"
            v-model="inputMessage"
            @keydown.enter="sendMessage"
            placeholder="输入消息..."
            :disabled="isLoading"
        />
        <button
            @click="sendMessage"
            :disabled="isLoading"
            class="send-button"
        >
          <span v-if="isLoading">发送中...</span>
          <span v-else>发送</span>
        </button>
        <button
            v-if="isLoading"
            @click="stopGeneration"
            class="stop-button"
        >
          停止
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  background: #f8fafc;
}

.app-header {
  padding: 1rem;
  background: #3b82f6;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}

.logo svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
}

.logo h1 {
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

.message {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.message.user {
  flex-direction: row-reverse;
}

.avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message.user .avatar {
  background: #bfdbfe;
}

.message-content {
  max-width: 70%;
  min-width: 200px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
}

.bubble {
  padding: 1rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
  position: relative;
}

.message.user .bubble {
  background: #3b82f6;
  color: white;
  border-radius: 1rem 1rem 0 1rem;
}

.text-content {
  white-space: pre-wrap;
  word-break: break-word;
}

.typing-indicator {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: #64748b;
  border-radius: 50%;
  animation: bounce 1.4s infinite;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}

.input-area {
  padding: 1rem;
  background: white;
  border-top: 1px solid #e2e8f0;
}

.input-wrapper {
  display: flex;
  gap: 0.5rem;
  max-width: 100%;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

button {
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.send-button {
  background: #3b82f6;
  color: white;
}

.send-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.stop-button {
  background: #ef4444;
  color: white;
}

.error-actions {
  margin-top: 0.5rem;
}

.error-actions button {
  padding: 0.5rem 1rem;
  background: #f8d7da;
  color: #721c24;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .chat-container {
    max-width: 100%;
  }

  .message-content {
    max-width: 85%;
  }

  .input-wrapper {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
</style>