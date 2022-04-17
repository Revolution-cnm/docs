## 安装

yarn add mockjs



## 编写模拟数据

参考文档http://mockjs.com/examples.html#

```js

const Mock = require('mockjs'); //引入mockjs

const Random = Mock.Random;  //随机生成数据对象

module.exports = () => {
    let data = {news: []};
    for(let i = 0; i < 20; i++) {
        data.news.push({
            id: i,
            //具体看参考文档http://mockjs.com/examples.html#
            content: Random.cparagraph(10) //生成随机中文字段，参数2表示生成10句话，
        })
    }
    return data;
}
```

## 启动服务

使用json-server启动服务

![image-20220211152745831](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220211152745831.png)







## 扩展

跳转到指定文件后，使用code . 可以直接用VSCODE打开文件

![image-20220211190830088](https://gitee.com/wddzhahaha/images/raw/master/img/image-20220211190830088.png)