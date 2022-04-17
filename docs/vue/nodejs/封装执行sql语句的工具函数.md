# 封装执行SQL语句的工具函数

--src

----db

------mysql.js

`mysql.js`

```js
const mysql = require('mysql');
//创建连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wodesql',
    port: 3306,
    database: 'myblog'
})

//开始连接
connection.connect();

//执行sql语句并以promise形式返回结果
function execSQL(sql) {
    const promise = new Promise((resolve,reject) => {
        connection.query(sql,(err,result) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    })
    return promise;
}
module.exports = {
    execSQL
}
```



--src

----routes

------blog.js

`blog.js`中使用数据库执行方法

```js
const sql = `select * from blogs`;
execSQL(sql).then(result => {
    console.log(result);
})
```

