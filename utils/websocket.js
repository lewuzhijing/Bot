let socket

export function connectWebSocket(onMessageCallback) {
  socket = new WebSocket(
    'ws://112.124.63.215:3000/ws/chat'
  )
  socket.onopen = () => {
    console.log('WebSocket connection established')
  }

  socket.onmessage = (event) => {
    // const parsedData = JSON.parse(event.data)
    console.log('WebSocket message received:', event.data)
    // event.data = JSON.parse(event.data)
    // method(event.data)

    if (onMessageCallback) {
      onMessageCallback(event)
    }
  }

  socket.onclose = () => {
    console.log('WebSocket connection closed')
  }

  socket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }
}

export function sendMessageAPI(message) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    // console.log('WebSocket message sent:', message)
    socket.send(message)
    console.log('WebSocket message sent:', message)
  } else {
    console.error('WebSocket connection is not open')
  }
}

// 新增函数，用于关闭 WebSocket 连接
export function disconnectWebSocket() {
  if (socket) {
    socket.close()
    socket = null
    console.log('WebSocket connection manually closed')
  }
}
