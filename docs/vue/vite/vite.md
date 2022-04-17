# Vite

## 初始项目

https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project

### 创建项目文件夹

```text
mkdir vue-admin
cd vue-admin
```

### 使用vite创建项目

```text
yarn create vite
```

设置项目名称 Project name:

选择前端框架 Select a framework： vue

选择类型支持 Select a variant: vue-ts  选择强类型支持typescript

## Vite2配置

https://cn.vitejs.dev/config/

配置选项很多，重点介绍几个

### 别名alias

不再需要像`vite1`一样在别名前后加上`/`，这和`webpack`项目配置可以保持一致便于移植，好评！

```ts
import path from 'path'

export default {
  alias: {
    "@": path.resolve(__dirname, "src"), //__dirname绝对路径
    "comps": path.resolve(__dirname, "src/components"),
  },
}
```

`App.vue`里面用一下试试

```js
<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
</script>
```

### 配置智能提示 [#](https://cn.vitejs.dev/config/#config-intellisense)

因为 Vite 本身附带 Typescript 类型，所以你可以通过 IDE 和 jsdoc 的配合来实现智能提示：

```js
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // ...
}

export default config
```

另外你可以使用 `defineConfig` 工具函数，这样不用 jsdoc 注解也可以获取类型提示：

```js
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
})
```

Vite 也直接支持 TS 配置文件。你可以在 `vite.config.ts` 中使用 `defineConfig` 工具函数。

### 情景配置 

如果配置文件需要基于（`dev`/`serve` 或 `build`）命令或者不同的 [模式](https://cn.vitejs.dev/guide/env-and-mode.html) 来决定选项，则可以选择导出这样一个函数：

```js
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev 独有配置
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
    }
  }
})
```

需要注意的是，在 Vite 的 API 中，在开发环境下 `command` 的值为 `serve`（在 CLI 中， `vite dev` 和 `vite serve` 是 `vite` 的别名），而在生产环境下为 `build`（`vite build`）。



## mock

##### Mock插件应用

之前给大家介绍的[vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)已经重构支持了Vite2。

安装插件

```
npm i mockjs -S
npm i vite-plugin-mock cross-env -D
```

配置，`vite.config.js`

```js
import { viteMockServe } from 'vite-plugin-mock'

export default {
  plugins: [ viteMockServe({ supportTs: false }) ]
}js
```

设置环境变量，`package.json`

```js
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development vite",
    "build": "vite build"
  },
} 
```

## 状态管理

安装`vuex 4.x`

```
npm i vuex@next -S
```

[![image](https://camo.githubusercontent.com/08530e3b93b46148019162b19bc3c8eb861d5055751d33516883048580c8ce95/68747470733a2f2f67697465652e636f6d2f3537636f64652f706963676f2f7261772f6d61737465722f696d6167652d32303231303131383138313530343930332e706e67)](https://camo.githubusercontent.com/08530e3b93b46148019162b19bc3c8eb861d5055751d33516883048580c8ce95/68747470733a2f2f67697465652e636f6d2f3537636f64652f706963676f2f7261772f6d61737465722f696d6167652d32303231303131383138313530343930332e706e67)

Store配置，`store/index.js`

```js
import {createStore} from 'vuex';

export default createStore({
  state: {
    couter: 0
  }
});
```

引入，`main.js`

```js
import store from "@/store";
createApp(App).use(store).mount("#app");
```

## 打包配置

# base

**类型：** `string`

**默认：** `/`

开发或生产环境服务的公共基础路径。合法的值包括以下几种

- 绝对 URL 路径名，例如 `/foo/`
- 完整的 URL，例如 `https://foo.com/`
- 空字符串或 `./`（用于开发环境）

# alias

配置别名

配置图片等静态资源不可以使用resolve的形式配置别名

![image-20220301142236095](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301142236095.png)

# build

### terserOptions

![image-20220301142544526](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301142544526.png)

```js
        minify: 'terser', //注意一定要配置这个
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            },
        },
```

### rollupOptions

默认打包的文件规格和vue-cli打包得到的文件规格不一样，我们可以改一下

默认打包

![image-20220301143118074](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301143118074.png)

更改后打包

![image-20220301143149045](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301143149045.png)

```js
          output: {
               chunkFileNames: 'static/js/[name]-[hash].js',  //出口文件名
               entryFileNames: 'static/js/[name]-[hash].js', //入口文件名
               assetFileNames: 'static/[ext]/[name]-[hash].[ext]', //静态文件
           },
```

# plugin

## element-plus

https://element-plus.gitee.io/zh-CN/guide/design.html

按需引入

![image-20220301143557767](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301143557767.png)

或者使用cdn

![image-20220301143704882](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301143704882.png)

## mock

```shell
npm i vite-plugin-mock mockjs  -D
```

(https://github.com/vbenjs/vite-plugin-mock)

# server

## proxy 跨域代理

https://cn.vitejs.dev/config/#server-proxy

这里是匹配/ss 把  ss 换成空的意思

```js
    server: {
        proxy: {
            '/ss': {
                target: 'https://saucenao.com/search.php?db=999&output_type=2&url=https://pica.zhimg.com/v2-178387c7e8e907910d715e890bfd7519_1440w.jpg?source=172ae18b&api_key=33d4bee5c19583cd3756ee47f2ebef8edd5bef7e', //要代理到的目标后台网址，跨域网址自己找一个
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/ss/, ''),
            },
        },
    },
```

## .env.production 开发环境下的变量

```
VITE_BASE_API=/api
VITE_BASE_API=https://www.manga2020.com/api/v3/comic/hydxjxrwgb/chapter/cb321fca-c608-11e8-879b-024352452ce0?timeout=10000
```

通过import.meta.env 获取环境变量

## CDN

vite中通过cdn引入的插件都可以来这里配置

```
npm install vite-plugin-cdn-import --save-dev
```

![image-20220301145856060](https://cdn.jsdelivr.net/gh/KeXiaoZhan/Images/image-20220301145856060.png)

## 代码压缩

```
npm i vite-plugin-compression -D
        viteCompression({
            //生成压缩包gz
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
```



## 打包图片

```shell
cnpm i vite-plugin-imagemin@0.4.6 -D
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 50,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        }),
```

# 格式化

```
npm i eslint prettier @typescript-eslint/eslint-plugin  @typescript-eslint/parser @vue/eslint-config-prettier @vue/eslint-config-typescript  babel-eslint eslint-config-prettier  eslint-plugin-prettier eslint-plugin-vue -D
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        // '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/indent': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineComponent: 'readonly',
        defineExpose: 'readonly',
    },
}
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    semi: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
    endOfLine: 'auto',
}
```