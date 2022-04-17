# 处理get请求

## 基础方法

```js
//引入nodejs核心模块http
const http = require('http');
//通过http的方法创建服务器,req:请求，res:响应
const server = http.createServer((req,res) => {
    //终结响应处理流程
    res.end('Hello Hamo!');
})

//监听端口
server.listen(5000,() => {
    console.log('server running at port 5000')
})
```

当启动服务器时会显示监听的端口

![image-20220309140649834](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220309140649834.png)

当访问该服务器时会得到响应

![image-20220309140830370](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220309140830370.png)

## 获取请求参数

```js
//引入nodejs核心模块http
const http = require('http');
//引入url解码模块
const urlencode = require('urlencode')
//通过http的方法创建服务器
const server = http.createServer((req,res) => {
    //获取请求方法
    const method = req.method;
    //获取请求url
    const url = req.url;
    //获取请求参数
    req.query = urlencode.parse(url.split('?')[1]);
    //响应
    res.end(
        JSON.stringify(req.query)
    );
})

//监听端口
server.listen(5000,() => {
    console.log('server running at port 5000')
})
```

![image-20220309143657308](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220309143657308.png)