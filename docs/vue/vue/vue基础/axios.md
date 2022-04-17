# axios
目前 Vue 官方没有内置任何 ajax 请求方法

在 vue 2+ 版本中，axios是官方推荐使用非常棒的第三方 ajax 请求库
## 参考文档

https://github.com/axios/axios/blob/master/README.md

引入axios: `npm install axios`

## 示例

```js
window.AppHome = {
        template,
        data() {
            return {
                hobbies: ['coding', '睡觉', '打豆豆', '看书'],
                empList: [

                ]
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/vue-07-lifecycle&ajx/04-bootstrap-ajax/emp.json')
                .then( response => {
                    // handle success
                    console.log(response.data, this)
                    this.empList = response.data
                })
                .catch( error => {
                    // handle error
                    console.log(error.message)
                    alert(error.message)
                })
        }
```
