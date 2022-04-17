# 处理post请求

```js
//引入nodejs核心模块http
const http = require('http');
//通过http的方法创建服务器
const server = http.createServer((req,res) => {
    //为真表示客户端向服务端发送数据
    if(req.method === 'POST') {
        //接收发送到服务端的数据
        let postData = ''
        //监听事件,流 stream 方式接受数据
        req.on('data',chunk => {
	//chunk 是二进制格式数据，需要转为字符串
            postData += chunk.toString();
        })
        //监听事件，传输完成后
        req.on('end',() => {
            console.log('postData',postData);
             //终结处理流程
            res.end('数据接收完毕');
        })
        //打印响应的数据类型
        console.log('post data content type',req.headers['content-type']);
    }
})

//监听端口
server.listen(5000,() => {
    console.log('server running at port 5000')
})
```

使用postman向服务器发送数据

![image-20220309152333095](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220309152333095.png)