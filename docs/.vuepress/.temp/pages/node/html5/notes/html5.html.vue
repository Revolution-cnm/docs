<template><h1 id="html5文件结构" tabindex="-1"><a class="header-anchor" href="#html5文件结构" aria-hidden="true">#</a> HTML5文件结构</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>该文整理自本人自己的笔记，以及我好友的博客：https://yuanke3.github.io/docs/   html5部分</p>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 
        meta主要用于设置网页中的一些元数据，元数据不是给用户看
        charset 指定网页的字符集
        name 指定的数据的名称，里面内容表示网站的关键字
        content 指定的数据的内容

        &lt;meta http-equiv="refresh" content="3;url=https://www.baidu.com">
        上面代码表示3秒后跳转到baidu.com
     --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="doctype-html" tabindex="-1"><a class="header-anchor" href="#doctype-html" aria-hidden="true">#</a> !DOCTYPE html</h3>
<p><code>!DOCTYPE html</code> 是html5标准网页声明,全称为<code>Document Type HyperText Mark-up Language</code>，意思为文档种类为超文本标记性语言或超文本链接标示语言。支持html5标准的主流浏览器都认识这个声明，<code>表示网页采用html5</code>。</p>
<h3 id="charset-utf-8" tabindex="-1"><a class="header-anchor" href="#charset-utf-8" aria-hidden="true">#</a> charset=&quot;UTF-8&quot;</h3>
<p>“utf-8”是一种字符编码。charset=”utf-8”是告知浏览器此页面属于什么字符编码格式，下一步浏览器做好“翻译”工作。</p>
<p>常见的字符编码有：gb2312、gbk、unicode、utf-8。</p>
<h3 id="http-equiv-x-ua-compatible-content-ie-edge" tabindex="-1"><a class="header-anchor" href="#http-equiv-x-ua-compatible-content-ie-edge" aria-hidden="true">#</a> http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;</h3>
<p>X-UA-Compatible是IE8的一个专有<code>&lt;meta&gt;</code>属性，它告诉IE8采用何种IE版本去渲染网页，在html的<code>&lt;head&gt;</code>标签中使用</p>
<p>Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染。</p>
<h3 id="name-viewport-content-width-device-width-initial-scale-1-0" tabindex="-1"><a class="header-anchor" href="#name-viewport-content-width-device-width-initial-scale-1-0" aria-hidden="true">#</a> name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;</h3>
<p>在移动设备上进行网页的重构或开发，首先得搞明白的就是<code>移动设备上的viewport</code>了，只有明白了viewport的概念以及弄清楚了跟viewport有关的meta标签的使用，才能更好地让我们的网页适配或响应各种不同分辨率的移动设备</p>
<h3 id="titile" tabindex="-1"><a class="header-anchor" href="#titile" aria-hidden="true">#</a> titile</h3>
<p>页面的标题</p>
<h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h3>
<p>页面主体</p>
<h2 id="html标签" tabindex="-1"><a class="header-anchor" href="#html标签" aria-hidden="true">#</a> HTML标签</h2>
<h3 id="语义化标签" tabindex="-1"><a class="header-anchor" href="#语义化标签" aria-hidden="true">#</a> 语义化标签</h3>
<ul>
<li>
<p>h1-h6标签：表示标题。是<em>块元素</em>（block element），独占一行</p>
</li>
<li>
<p>p标签：表示页面的一个段落。是<em>块元素</em></p>
</li>
<li>
<p>em标签：表示语气、声调加重突出（重点），使选定内容斜体加粗。例如<code>&lt;p&gt;今天天气&lt;em&gt;真&lt;/em&gt;不错&lt;/p&gt;</code>。是<em>行内元素</em>（inline element）</p>
</li>
<li>
<p>strong标签：表示强调重要的内容，使选定内容加粗。例如<code>&lt;p&gt;你今天必须要&lt;strong&gt;完成&lt;/strong&gt;作业！&lt;/p&gt;</code>。是行内元素</p>
</li>
<li>
<p>header：表示网页的头部</p>
</li>
<li>
<p>main：表示网页的主体部分（一个页面中只会有一个main）</p>
</li>
<li>
<p>footer：表示网页的底部</p>
</li>
<li>
<p>nav：表示网页的导航</p>
</li>
<li>
<p>aside：和主体相关的其他内容（侧边栏）</p>
</li>
<li>
<p>article：表示一个独立的文章</p>
</li>
<li>
<p>section：表示一个独立的区块，上边的标签都不能表示时可以用section</p>
</li>
<li>
<p>div：块标签</p>
</li>
<li>
<p>span：行标签</p>
</li>
<li>
<p>hgroup标签：为标题分组，可以将一组相关的标签同时放入到hgroup</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hgroup</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>你好啊<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>我叫赛利亚<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hgroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>blockquote标签/q标签：表示长引用/短引用。例如</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    鲁迅说：
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">></span></span>
        这句话我没说过
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
    子曰：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q</span><span class="token punctuation">></span></span>学而时习之，乐呵乐呵<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="换行段落" tabindex="-1"><a class="header-anchor" href="#换行段落" aria-hidden="true">#</a> 换行段落</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        这个段落
        在源代码中
        包含许多行
        但是浏览器
        忽略了它们。
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        这个段落
        <span class="token comment">&lt;!-- 一行中不管空几个空格，在浏览器中只会显示一个空格,“落”与“在”之间由一个空格--></span>
        在源代码       中          
        包含   许多行
        但是      浏览器
        忽略了  它们。
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>段落的行数依赖于浏览器窗口的大小。如果调节浏览器窗口的大小，将改变段落中的行数。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
这个段落 在源代码中 包含许多行 但是浏览器 忽略了它们。
这个段落 在源代码 中 包含 许多行 但是 浏览器 忽略了 它们。
段落的行数依赖于浏览器窗口的大小。如果调节浏览器窗口的大小，将改变段落中的行数。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="换行标签" tabindex="-1"><a class="header-anchor" href="#换行标签" aria-hidden="true">#</a> 换行标签</h3>
<p><code>&lt;br/&gt;</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        春眠不觉晓，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
        处处闻啼鸟。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
        夜来风雨声，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
        花落知多少。
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
春眠不觉晓，
处处闻啼鸟。
夜来风雨声，
花落知多少。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="字体标签" tabindex="-1"><a class="header-anchor" href="#字体标签" aria-hidden="true">#</a> 字体标签</h3>
<p><code>&lt;font&gt; XXXX &lt;/font&gt;</code></p>
<p>规定文本的字体、字体尺寸、字体颜色。</p>
<p><code>&lt;font size=5 color=&quot;red&quot;&gt; 红色 &lt;/font&gt;</code></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>color</td>
<td>rgb(x,x,x)<br/>   <em>#xxxxxx</em> <br/><em>colorname</em></td>
</tr>
<tr>
<td>face</td>
<td>#font_family</td>
</tr>
<tr>
<td>size</td>
<td>number</td>
</tr>
</tbody>
</table>
<h3 id="注释标签" tabindex="-1"><a class="header-anchor" href="#注释标签" aria-hidden="true">#</a> 注释标签</h3>
<p><code>&lt;!-- XXXX --&gt;</code></p>
<h3 id="a标签-超链接" tabindex="-1"><a class="header-anchor" href="#a标签-超链接" aria-hidden="true">#</a> a标签(超链接)</h3>
<p><code>&lt;a&gt;.....&lt;/a&gt;</code>
标签定义超链接，用于从一张页面链接到另一张页面。</p>
<p><code>&lt;a href=&quot;页面二.html&quot; target=&quot;_blank&quot;&gt;在新的窗口打开链接&lt;/a&gt;</code></p>
<ol>
<li>
<p>href属性：跳转目标</p>
</li>
<li>
<p>target属性：可选值：</p>
<ul>
<li>_self：默认值，在当前页面打开超链接</li>
<li>_blank：在一个新的页面中打开超链接</li>
</ul>
</li>
<li>
<p>无跳转占位符：<code>&lt;a href=&quot;javascript:;&quot;&gt;无跳转占位符&lt;/a&gt;</code></p>
</li>
</ol>
<h3 id="锚点标签" tabindex="-1"><a class="header-anchor" href="#锚点标签" aria-hidden="true">#</a> 锚点标签</h3>
<p><code>&lt;a name=&quot;maodian&quot;&gt; XXX &lt;/a&gt;</code>(name可以改为id)</p>
<p>链接到同一个页面的不同位置,锚点必须先定义再使用</p>
<ul>
<li>跳转顶部：<code>&lt;a href=&quot;#&quot;&gt;回到顶部&lt;/a&gt;</code></li>
<li>跳转底部：</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>去底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>去中间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是中间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="图片标签" tabindex="-1"><a class="header-anchor" href="#图片标签" aria-hidden="true">#</a> 图片标签</h3>
<p><code>&lt;img src=&quot;&quot; alt=&quot;&quot;&gt;</code></p>
<ol>
<li>
<p>src属性：图片路径</p>
</li>
<li>
<p>alt属性：图片的描述，默认不显示，有些浏览器在图片无法加载时显示。<strong>搜索引擎根据alt内容来识别图片</strong></p>
</li>
<li>
<p>width属性：图片宽度（单位是像素）</p>
</li>
<li>
<p>height属性：图片高度</p>
<p><strong>默认情况下，宽度和高度若只修改了一个，则另一个会等比例缩放，就是默认另一边为auto</strong></p>
</li>
</ol>
<ul>
<li>
<p>图片常用格式</p>
<ol>
<li>
<p>jpeg</p>
<ul>
<li>支持的颜色比较丰富，不支持透明效果，不支持动图</li>
<li>一般用来显示照片</li>
</ul>
</li>
<li>
<p>gif</p>
<ul>
<li>支持的颜色比较少，支持简单透明，支持动图</li>
<li>颜色单一的图片、动图</li>
</ul>
</li>
<li>
<p>png</p>
<ul>
<li>支持的颜色丰富，支持复杂透明，不支持动图</li>
<li>颜色丰富、复杂透明的图片（为网页而生）</li>
</ul>
</li>
<li>
<p>webp</p>
<ul>
<li>谷歌新推出的专门用来表示网页中的图片的一种格式</li>
<li>它具备其他图片格式的所有优点，而且文件还特别小</li>
<li>缺点：兼容性不好，垃圾ie浏览器不能用</li>
</ul>
</li>
<li>
<p>base64</p>
<ul>
<li>将图片使用base64进行编码，可以直接将图片转换成字符，通过字符的形式来引用图片</li>
<li>一般都是一些需要和网页一起加载的图片才会使用base64（加载图片速度最快）</li>
</ul>
</li>
</ol>
</li>
</ul>
<h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<p><strong>无序列表</strong></p>
<p><code>&lt;ul&gt;&lt;li&gt; XXX &lt;/li&gt;&lt;/ul&gt;</code></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>disc/circle/square</td>
<td>规定了标记类型</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>香蕉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>柠檬<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>桔子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>  

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>空心圆符号列表：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>  

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>实心方块符号列表：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>有序列表</strong>
<code>&lt;ol&gt;&lt;li&gt; XXX &lt;/li&gt;&lt;/ol&gt;</code></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>reversed</td>
<td></td>
<td>规定列表顺序为降序(9,8,7..)</td>
</tr>
<tr>
<td>start</td>
<td>number</td>
<td>规定有序列表的起始值</td>
</tr>
<tr>
<td>type</td>
<td>1 A a I i</td>
<td>规定在列表中使用的标记类型</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>大写罗马字母列表:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>I<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>华北<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>华南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>华东<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>华西<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>
            
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>
            
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">border</td>
<td>pixels</td>
<td>规定表格边框的宽度</td>
</tr>
<tr>
<td style="text-align:left">cellpadding</td>
<td>pixels / %</td>
<td>规定单元边沿与其内容之间的空白</td>
</tr>
<tr>
<td style="text-align:left">cellspacing</td>
<td>pixels / %</td>
<td>规定单元格之间的空白</td>
</tr>
<tr>
<td style="text-align:left">frame</td>
<td>void<br>above<br>below<br>hsides<br>Ihs<br>rhs<br>vsides<br>box<br>border</td>
<td>规定外侧边框的哪个部分是可见的</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td>pixels  / %</td>
<td>规定表格的宽度</td>
</tr>
</tbody>
</table>
<h3 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h3>
<p><code>&lt;form&gt; XXX &lt;/form&gt;</code>
用于收集用户信息,进行人机交互</p>
<p><strong>常用控件</strong></p>
<table>
<thead>
<tr>
<th>控件</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>文本框  <code>&lt;input type=&quot;text&quot;&gt;  </code></td>
<td>该元素可创建一个单行的文本输入字段</td>
</tr>
<tr>
<td>文本域<code>&lt;textarea cols=&quot;30&quot; rows=&quot;10&quot;&gt;&lt;/textarea&gt;</code></td>
<td>创建一个多行的文本输入字段</td>
</tr>
<tr>
<td>单选按钮<code>&lt;input type=&quot;radio&quot;&gt;</code></td>
<td>单选按钮是表示一组互斥选项按钮中的一个</td>
</tr>
<tr>
<td>复选框<code>&lt;input type=&quot;checkbox&quot; name=&quot;box&quot; id=&quot;&quot;&gt;</code></td>
<td>多个选项中选一个或多个或不选</td>
</tr>
<tr>
<td>列表框<code>&lt;select&gt;  &lt;option&gt;  &lt;/option&gt; &lt;/select&gt;</code></td>
<td>选择列表中的某个</td>
</tr>
<tr>
<td>按钮<code>&lt;input type=&quot;button&quot;&gt; </code></td>
<td>代表 HTML 文档中的一个按钮</td>
</tr>
<tr>
<td>掩码<code>&lt;input type=&quot;password&quot;&gt;</code></td>
<td>隐藏字段</td>
</tr>
</tbody>
</table>
<p><strong>常用控件属性</strong></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>指定控件名称，可重复</td>
</tr>
<tr>
<td>id</td>
<td>指定标签的唯一标识</td>
</tr>
<tr>
<td>value</td>
<td>控件的值</td>
</tr>
<tr>
<td>checked</td>
<td>单选（复选）框默认选中的项目</td>
</tr>
<tr>
<td>selected</td>
<td>列表框默认选中的项目</td>
</tr>
<tr>
<td>src</td>
<td>图片框图片来源</td>
</tr>
<tr>
<td>onclick</td>
<td>鼠标点击事件</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用该控件</td>
</tr>
<tr>
<td>multiple</td>
<td>允许多选</td>
</tr>
</tbody>
</table>
<h3 id="内联框架" tabindex="-1"><a class="header-anchor" href="#内联框架" aria-hidden="true">#</a> 内联框架</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 
        src 指定要引入的网页的路径
        frameborder 指定内敛框架的边框
     --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://yuanke3.github.io/docs/<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="音视频" tabindex="-1"><a class="header-anchor" href="#音视频" aria-hidden="true">#</a> 音视频</h3>
<p><strong>音频</strong></p>
<ul>
<li>audio标签和video标签默认不允许用户自己控制播放停止</li>
<li>若要控制播放，要如此写（加个controls）：</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/1.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>audio的一些属性：</p>
<ul>
<li>autoplay属性：是自动播放（大部分浏览器都不会自动对音乐进行播放）</li>
<li>loop属性：重复播放</li>
<li>src属性：无需多言</li>
<li>controls+source属性：可以播放音频，同时用来提醒ie用户升级浏览器（只有ie浏览器用户会显示这段文字）。可以用source指定文件，例如：</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
    对不起，您的破烂ie浏览器不支持播放音频！快去升级！
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/1.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>embed标签：ie浏览器用embed标签，用src属性来得到音频路径，同时要同时指定width和height属性，不然不显示播放器；同时还要指定type属性值，例如&quot;audio/mp3&quot;</li>
<li>最好的兼容方式：</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/1.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/1.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300px<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/mp3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li><strong>视频</strong></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls"</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/flowers.webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/flowers.mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./source/flowers.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="html5新特性" tabindex="-1"><a class="header-anchor" href="#html5新特性" aria-hidden="true">#</a> HTML5新特性</h2>
<p>HTML5新特性可以查看<strong>hieeyh</strong>大佬总结的文章，相当详细</p>
<blockquote>
<p>https://juejin.cn/post/6844903486539169805</p>
</blockquote>
</template>
