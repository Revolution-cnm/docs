# vue-router 路由
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得非常简单。

通过根据不同的请求路径，切换显示不同组件进行渲染页面。

安装路由:`npm install vue-router`

引入 vue-router.js：
````js
<script src="./node_modules/vue-router/dist/vue-router.js"></script>
````
## **基本路由使用-示例代码**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>路由管理</title>
</head>

<body>
    <div id="app">
        <div class="header">
            <h1>头部</h1>
        </div>
        <div class="left">
            <p>
            <ul>
                <li><a href="#/foo">Go Foo</a></li>
                <li><a href="#/bar">Go Bar</a></li>
                <!-- 下面是官方推荐的写法 -->
                <!-- 
                    通过 router-link 标签会默认渲染出 a 标签
                    其中通过 to 属性指定跳转链接，不用带上 # 号
                -->
                <li><router-link to="/foo">Go to Foo</router-link><br/></li>
                <li><router-link to="/bar">Go to Bar</router-link></li>
            </ul>
            </p>
        </div>
        <div class="main">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>
    </div>

    <script src="./node_modules/vue/dist/vue.js"></script>
    <script src="./node_modules/vue-router/dist/vue-router.js"></script>
    <script>
        // 1. 定义组件
        const Foo = {
            template: '<div>我是Foo组件</div>'
        }
        const Bar = {
            template: '<div>我是Bar组件</div>'
        }

        // 2. 配置路由表，当点击指定url时，显示对应的那个组件
        const router = new VueRouter({
            routes: [ // 注意单词是routes!
                { 
                    path: '/foo', 
                    component: Foo 
                },
                { 
                    path: '/bar', 
                    component: Bar 
                }
            ]
        })

        // 3. 将路由器注入到实例中
        new Vue({
            el: '#app',
            router // router: router
        })
    </script>
</body>

</html>
```
## **嵌套路由**
```js
{
    path: '/news',
    component: News,
    children: [
        // 当匹配到 /news/sport 请求时，
        // 组件 Sport 会被渲染在 News 组件中的 <router-view> 中
    {
        path: '/news/sport',
        component: Sport
    },
    // 简写方式，等价于 /news/tech 路径，注意前面没有 / ,有 / 就是根目录了
    {
        path: 'tech',
        component: Tech
    },
    //点击新闻管理默认选中 新闻，
    // 就是/news后面没有子路径时, redirect 重定向到 体育
    {
        path: '',
        redirect: '/news/sport'
    }
```
## **缓存路由组件**

默认情况下，当路由组件被切换后组件实例会销毁，当切换回来时实例会重新创建。

如果可以缓存路由组件实例，切换后不用重新加载数据，可以提高用户体验。

`<keep-alive>`可缓存渲染的路由组件。

```html
<keep-alive>
    <router-view></router-view>
</keep-alive>
```

## **路由组件传递数据**
路由配置
```js
{
    path: '/news/sport',
    component: Sport,
    children: [
    {
        path: '/news/sport/detail/:id', // :id 路径变量占位符
        component: SportDetail
    }
    ]
},
```
路由跳转路径
```js
<!--
要动态拼接值, 则 to 属性值是 JS 表达式,
要写 JS 表达式, 则要使用 v-bind 方式绑定属性
注意 + 前面有单引号 ''
-->
<router-link :to="'/news/sport/detail/' + sport.id">
    {{sport.title}}
</router-link>
```
在路由组件中读取请求参数
```js
this.$route.params.id
```

