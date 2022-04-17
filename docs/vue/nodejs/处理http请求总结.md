# 处理http请求总结

```js
//引入nodejs核心模块http
const http = require('http');
//引入url解码模块
const urlencode = require('urlencode')
const server = http.createServer((req,res) => {
    //请求方法
    const method = req.method;
    //请求url:path+query 
    const url = req.url;
    //请求路径
    const path = url.split('?')[0];
    //url中参数
    const query = urlencode.parse(url.split('?')[1]);
    //响应数据
    const responseData = {
        method,
        url,
        path,
        query
    }
    //设置返回字符串格式为application/json，方便浏览器解析json文件
    res.setHeader('Content-Type','application/json')
    if(method === 'GET') {
        //终结响应处理流程
        res.end(
            //返回响应数据,json转为字符串格式
            JSON.stringify(responseData)
        )
    }
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
            //响应数据中添加接收到数据
            responseData.postData = postData;
            //终结处理流程
            res.end(
                //返回响应数据,json转为字符串格式
                JSON.stringify(responseData)
            );
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

![image-20220309172516932](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220309172516932.png)