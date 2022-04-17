# 获取博客列表接口对接MySQL

--src

----controllers

------blog.js

```js
const getList = (author,keyword) => {
    //从数据库拿数据
    let sql = `select * from blogs where 1=1`; //加1=1当author和keyword都没有也不会出错
    if(author) {
        sql += ` author='${author}' `;
    }
    if(keyword) {
        sql += `and title like '%${keyword}%'`;
    }
    //执行sql语句
    return execSQL(sql);
}
```



```js
 if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listDataPrmise = getList(author,keyword);
        return listDataPrmise.then(listData => {
            return new SuccessModel(listData);
        })
    }
```



配置好以后只需要改变**控制器**以及**路由**里的代码就可以操作数据库了

