# 处理post数据

创建服务器的过程中就要做好post数据的处理

在`app.js`  serverHandler方法中加入post数据处理方法`getPostData`



`getPostData`:处理post数据，这里将返回post数据,在`serverHandler`中将返回的数据添加到req中

```js
const getPostData = (req,res) => {
    const promise = new Promise((resolve,reject) => {
        //如果请求不是POST类型,直接返回
        if(req.method !== 'POST') {
            resolve({});
            return;
        }
        //如果POST数据类型不是application/json格式，直接返回
        if(req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        //到这里请求即是post类型又是json格式
        let postData = "";
        req.on('data',(chunk) => {
            postData += chunk.toString();
        });
        req.on('end',() => {
            if(!postData) {
                resolve({});
                return;
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise;
}
```

`serverHandler` 将 post数据添加在req.body中

```js
getPostData(req).then((postData) => {

        req.body = postData
        //博客相关的路由，向handleBlogRoute中传入请求和响应参数
        const blogData = handleBlogRoute(req,res);
        
        if(blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return;
        }
        //如果blogData为空,那就无数据响应了,进行404处理
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 Not Found');
        res.end();
    })
```

当发起路由请求时可以通过req.body访问post数据

```js
if(method === 'POST' && req.path === '/api/blog/update') {
        console.log(req.body);
        return {
            message: "更新博客的接口"
        }
    }
```

