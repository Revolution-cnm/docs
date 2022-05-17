(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{453:function(n,o,t){"use strict";t.r(o);var a=t(55),d=Object(a.a)({},(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"window-onload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-onload"}},[n._v("#")]),n._v(" Window.onload")]),n._v(" "),t("p",[t("strong",[n._v("一、没用window.onload的报错原因:")])]),n._v(" "),t("p",[n._v("把代码放到window.onload=function(){...}里面，因为如果页面还没加载到btn按钮而且你代码是放在btn按钮的前面，你就调用了getElementById,返回的对象是undefined.")]),n._v(" "),t("p",[t("strong",[n._v("二、window.onload用法详解:")])]),n._v(" "),t("p",[n._v("网页中的javaScript脚本代码往往需要在文档加载完成后才能够去执行，否则可能导致无法获取对象的情况，为了避免这种情况的发生，可以使用以下两种方式:")]),n._v(" "),t("p",[n._v("①.将脚本代码放在网页的底端，这样在运行脚本代码的时候，可以确保要操作的对象已经加载完成。")]),n._v(" "),t("p",[n._v("②.通过window.onload来执行脚本代码。window.onload是一个事件，当文档加载完成之后就会触发该事件，可以为此事件注册事件处理函数，并将要执行的脚本代码放在事件处理函数中，于是就可以避免获取不到对象的情况")])])}),[],!1,null,null,null);o.default=d.exports}}]);