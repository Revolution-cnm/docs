import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-8660d306","/jsrecord/notes/one.html",{"title":"除了for in / for of,还有另外几种常见的循环迭代方法。"},["/jsrecord/notes/one","/jsrecord/notes/one.md"]],
  ["v-a3f91076","/jsrecord/notes/three.html",{"title":""},["/jsrecord/notes/three","/jsrecord/notes/three.md"]],
  ["v-9d43fb52","/jsrecord/notes/two.html",{"title":""},["/jsrecord/notes/two","/jsrecord/notes/two.md"]],
  ["v-f7b85254","/node/html5/notes/html5.html",{"title":"HTML5文件结构"},["/node/html5/notes/html5","/node/html5/notes/html5.md"]],
  ["v-0e3ae3e0","/node/css3/notes/css3.html",{"title":"CSS初级"},["/node/css3/notes/css3","/node/css3/notes/css3.md"]],
  ["v-2b326fa0","/node/javaScript/notes/javaScript.html",{"title":""},["/node/javaScript/notes/javaScript","/node/javaScript/notes/javaScript.md"]],
  ["v-e91b5d3c","/vue/npm/notes/npm.html",{"title":"初入：NPM 包管理工具"},["/vue/npm/notes/npm","/vue/npm/notes/npm.md"]],
  ["v-70a593ac","/vue/vue/notes/vue.html",{"title":""},["/vue/vue/notes/vue","/vue/vue/notes/vue.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
