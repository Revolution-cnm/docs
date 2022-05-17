(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{449:function(s,t,a){"use strict";a.r(t);var n=a(55),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"非父子组件间通信pubsubjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非父子组件间通信pubsubjs"}},[s._v("#")]),s._v(" 非父子组件间通信PubSubJS")]),s._v(" "),a("p",[s._v("Vue.js 可通过 PubSubJS 库来实现非父子组件之间的通信 ，使用 PubSubJS 的消息发布与订阅模式，来进行数据的传递。")]),s._v(" "),a("p",[s._v("理解：订阅信息 ==== 绑定事件监听 ，发布消息 ==== 触发事件。")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v("：\n但是必须先执行订阅事件 subscribe ，然后才能 publish 发布事件。")]),s._v(" "),a("p",[a("strong",[s._v("订阅消息(绑定事件监听)")])]),s._v(" "),a("p",[s._v("先在 created 钩子函数中订阅消息")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// event接收的是消息名称，data接收发布时传递的数据")]),s._v("\nPubSub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'消息名称(相当于事件名)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件回调处理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("发布消息(触发事件)")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("PubSub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'消息名称(相当于事件名)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);