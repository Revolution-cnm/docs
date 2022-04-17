## 全局安装
yarn add global json-server  //使用yarn安装后无法运行使用命令，不知道为啥，使用npm可以

npm install -g json-server

## 使用
json-server --watch --port 3003 --host 127.1.1.1 db.json

--watch 表示启动服务，监听数据更改
--port 表示启动端口
--host 表示启动主机域名
db.json 表示生成的文件

## 启动后得到

```
\{^_^}/ hi!

  Loading db.json
  Oops, db.json doesn't seem to exist
  Creating db.json with some default data

  Done
    //这里表示三个请求文件的地址
  Resources
  http://127.1.1.1:3003/posts     
  http://127.1.1.1:3003/comments
  http://127.1.1.1:3003/profile

  Home
  http://127.1.1.1:3003
```



修改db.json后会自动生成新的请求地址

![image-20220211142532250](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220211142532250.png)