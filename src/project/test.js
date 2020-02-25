// import io from 'socket.io-client'
//
// // 连接服务器, 得到与服务器的连接对象
// const socket = io('/webSocketOneToOne/123,123')
// // 绑定监听, 接收服务器发送的消息
// socket.on('receiveMsg', function (data) {
//     console.log('客户端接收服务器发送的消息', data)
// })
//
// // 发送消息
// socket.emit('sendMsg', {name: 'abc'})
// console.log('客户端向服务器发消息', {name: 'abc'})
var ws = null;
if ('WebSocket' in window) {
    ws = new WebSocket("ws://localhost:8090/react/webSocketOneToOne/1,123");
}
/*
 *监听三种状态的变化js会回调
 */
ws.onopen = function (message) {
};
ws.onclose = function (message) {
};
//接受消息
ws.onmessage = function (ev) {
    console.info(ev.data);
};
//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
    ws.close();
};

//关闭连接
function closeWebSocket() {
    ws.close();
}
setTimeout(function () {
    console.log('发送信息')
    ws.send(JSON.stringify({'message':'aa','role':'12','socketId':"123",'from':'aa'}));
},2000)