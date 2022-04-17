# 非父子组件间通信PubSubJS
Vue.js 可通过 PubSubJS 库来实现非父子组件之间的通信 ，使用 PubSubJS 的消息发布与订阅模式，来进行数据的传递。

理解：订阅信息 ==== 绑定事件监听 ，发布消息 ==== 触发事件。

**注意**：
但是必须先执行订阅事件 subscribe ，然后才能 publish 发布事件。

**订阅消息(绑定事件监听)**

先在 created 钩子函数中订阅消息
```js
// event接收的是消息名称，data接收发布时传递的数据
PubSub.subscribe('消息名称(相当于事件名)', function(event, data) {
    // 事件回调处理
})
```
**发布消息(触发事件)**
```js
PubSub.publish('消息名称(相当于事件名)', data)
```

