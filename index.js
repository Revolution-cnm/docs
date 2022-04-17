//引入nodejs核心模块http
const http = require('http');
//通过http的方法创建服务器
const server = http.createServer((req,res) => {
    const method = req.method;
    console.log('method',method);
    const url = req.url;
    //请求参数
    req.query = url.split('?')[1].split('&').forEach(item => {
        console.log(item)
    })
    console.log('query',req.query); 
    //响应
    res.end(
        JSON.stringify(req.query)
    );
})

//监听端口
server.listen(5000,() => {
    console.log('server running at port 5000')
})