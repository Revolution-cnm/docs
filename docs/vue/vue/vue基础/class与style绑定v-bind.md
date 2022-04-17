# class与style绑定v-bind
`v-bind:class='表达式'` 或 `:class='表达式'`

class 的表达式可以为：

字符串 `:class="activeClass"`

对象 `:class="{active: isActive, error: hasError}"`

数组 `:class="['active', 'error']"` 注意要加上单引号,不然是获取data中的值

`v-bind:style='表达式'` 或 `:style='表达式'`

style 的表达式一般为对象

`:style="{color: activeColor, fontSize: fontSize + 'px'}"`

注意：对象中的value值 activeColor 和 fontSize 是data中的属性
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .active {
            color: green; 
        }
        .delete {
            background: red;
        }
        .error {
            font-size: 35px;
        }
    </style>
</head>
<body>
    <div id="app">
        <h3>Class绑定，v-bind:class 或 :class </h3>
        <!-- <p class="active">字符串表达式</p> -->
        <p v-bind:class="activeClass">字符串表达式</p>
        <!-- key值是样式 名，value值是data中绑定的属性
        当isDelete为true的时候，delete就会进行渲染
        -->
        <p :class="{delete: isDelete, error: hasError}">对象表达式</p>

        <p :class="['active', 'error']">数组表达式</p>

        <h3>Style绑定，v-bind:style 或 :style</h3>
        <p :style="{color: activeColor, fontSize: fontSize + 'px'}">Style绑定</p>
        
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                activeClass: 'active',
                isDelete: false,
                hasError: true,
                activeColor: 'red',
                fontSize: 100
            }
        })
    </script>
</body>
</html>
```
