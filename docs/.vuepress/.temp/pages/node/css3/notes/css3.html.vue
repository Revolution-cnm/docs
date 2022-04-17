<template><h1 id="css初级" tabindex="-1"><a class="header-anchor" href="#css初级" aria-hidden="true">#</a> CSS初级</h1>
<h2 id="css简介" tabindex="-1"><a class="header-anchor" href="#css简介" aria-hidden="true">#</a> CSS简介</h2>
<ul>
<li>
<p><strong>什么是CSS</strong></p>
<ul>
<li>Cascading Style Sheets 层叠样式表</li>
</ul>
</li>
<li>
<p>层叠样式表是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。</p>
</li>
</ul>
<h2 id="引入css三种方式" tabindex="-1"><a class="header-anchor" href="#引入css三种方式" aria-hidden="true">#</a> 引入CSS三种方式</h2>
<h3 id="外部样式表" tabindex="-1"><a class="header-anchor" href="#外部样式表" aria-hidden="true">#</a> <code>外部样式表</code></h3>
<p>外部样式表，指在html文件的head标签中，使用link引用另一个css文件中定义的样式。如果某个样式表需要被使用许多次，使用外部样式表是最好的选择。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>rel：是relationship</p>
<p>type：定义css样式文件的类型</p>
<p>href：引用具体的文件名</p>
<h3 id="内部样式表" tabindex="-1"><a class="header-anchor" href="#内部样式表" aria-hidden="true">#</a> <code>内部样式表</code></h3>
<p>指在html文件的head标签内声明样式。当单个文档需要特殊的样式时，就应该使用内部样式表.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 内部样式表 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">h1</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span>red
        <span class="token punctuation">}</span>
        <span class="token selector">p</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span>aqua<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> <code>内联样式</code></h3>
<p>内联样式（一般不建议使用），指在某个html内指定改标签内容的样式。由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span>red</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>这是一个大小为30px的红色字体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="css背景" tabindex="-1"><a class="header-anchor" href="#css背景" aria-hidden="true">#</a> CSS背景</h2>
<h3 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> <code>背景颜色</code></h3>
<ul>
<li>
<p>background-color 属性指定元素的背景色</p>
<p>可以为任何HTML元素设置背景色</p>
</li>
<li>
<p>不透明度</p>
<ul>
<li>
<p>方法一：background-color:rgba(0,128,0,1) ;</p>
<p>使用这种方法，背景内字体不会跟着一起透明</p>
</li>
<li>
<p>方法二：opacity：0.3</p>
<p>使用这种方法，背景内字体会跟着一起透明</p>
</li>
</ul>
</li>
</ul>
<h3 id="背景图像" tabindex="-1"><a class="header-anchor" href="#背景图像" aria-hidden="true">#</a> <code>背景图像</code></h3>
<p>background-image 属性指定用作元素背景的图像。</p>
<p>默认情况下，图像会重复，以覆盖整个元素。</p>
<h3 id="背景附着" tabindex="-1"><a class="header-anchor" href="#背景附着" aria-hidden="true">#</a> <code>背景附着</code></h3>
<p>background-attachment 属性指定背景图像是应该滚动还是固定的（不会随页面的其余部分一起滚动）：</p>
<p>固定</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>   background-attachment: fixed;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>滚动</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> background-attachment: scroll;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="背景重复" tabindex="-1"><a class="header-anchor" href="#背景重复" aria-hidden="true">#</a> <code>背景重复</code></h3>
<p>默认情况下，background-image 属性在水平和垂直方向上都重复图像。</p>
<p>水平方向重复 (background-repeat: repeat-x;)，</p>
<p>如需垂直重复图像，请设置 background-repeat: repeat-y;</p>
<p>如果不想要重复: background-repeat: no-repeat;</p>
<h3 id="背景图像的起始位置" tabindex="-1"><a class="header-anchor" href="#背景图像的起始位置" aria-hidden="true">#</a> <code>背景图像的起始位置</code></h3>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbe5ae4fe91647b58cb3eb1de13ac7c9~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<h3 id="背景简写" tabindex="-1"><a class="header-anchor" href="#背景简写" aria-hidden="true">#</a> <code>背景简写</code></h3>
<p>在使用简写属性时，属性值的顺序为：</p>
<ul>
<li>background-color</li>
<li>background-image</li>
<li>background-repeat</li>
<li>background-attachment</li>
<li>background-position</li>
</ul>
<p>属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。</p>
<h2 id="css边框" tabindex="-1"><a class="header-anchor" href="#css边框" aria-hidden="true">#</a> CSS边框</h2>
<h3 id="边框样式" tabindex="-1"><a class="header-anchor" href="#边框样式" aria-hidden="true">#</a> <code>边框样式</code></h3>
<p>border-style 属性指定要显示的边框类型。</p>
<p>允许以下值：</p>
<ul>
<li>dotted - 定义点线边框</li>
<li>dashed - 定义虚线边框</li>
<li>solid - 定义实线边框</li>
<li>double - 定义双边框</li>
<li>groove - 定义 3D 坡口边框。效果取决于 border-color 值</li>
<li>ridge - 定义 3D 脊线边框。效果取决于 border-color 值</li>
<li>inset - 定义 3D inset 边框。效果取决于 border-color 值</li>
<li>outset - 定义 3D outset 边框。效果取决于 border-color 值</li>
<li>none - 定义无边框</li>
<li>hidden - 定义隐藏边框</li>
</ul>
<p>border-style 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。</p>
<h3 id="边框宽度" tabindex="-1"><a class="header-anchor" href="#边框宽度" aria-hidden="true">#</a> <code>边框宽度</code></h3>
<p>border-width 属性指定四个边框的宽度。</p>
<p>可以将宽度设置为特定大小（以 px、pt、cm、em 计），也可以使用以下三个预定义值之一：thin、medium 或 thick：</p>
<h3 id="边框颜色" tabindex="-1"><a class="header-anchor" href="#边框颜色" aria-hidden="true">#</a> <code>边框颜色</code></h3>
<p>border-color 属性用于设置四个边框的颜色。</p>
<p>可以通过以下方式设置颜色：</p>
<ul>
<li>name - 指定颜色名，比如 &quot;red&quot;</li>
<li>HEX - 指定十六进制值，比如 &quot;#ff0000&quot;</li>
<li>RGB - 指定 RGB 值，比如 &quot;rgb(255,0,0)&quot;</li>
<li>HSL - 指定 HSL 值，比如 &quot;hsl(0, 100%, 50%)&quot;</li>
<li>transparent</li>
</ul>
<p>注释：如果未设置 <code>border-color</code>，则它将继承元素的颜色。</p>
<p>特定边框的颜色</p>
<p>border-color 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。</p>
<h3 id="简写属性" tabindex="-1"><a class="header-anchor" href="#简写属性" aria-hidden="true">#</a> <code>简写属性</code></h3>
<p>为了缩减代码，也可以在一个属性中指定所有单独的边框属性。</p>
<p><code>border</code> 属性是以下各个边框属性的简写属性：</p>
<ul>
<li><code>border-width</code></li>
<li><code>border-style</code>（必需）</li>
<li><code>border-color</code></li>
</ul>
<h3 id="圆角边框" tabindex="-1"><a class="header-anchor" href="#圆角边框" aria-hidden="true">#</a> <code>圆角边框</code></h3>
<p>border-radius 属性用于向元素添加圆角边框：</p>
<h2 id="外边距" tabindex="-1"><a class="header-anchor" href="#外边距" aria-hidden="true">#</a> 外边距</h2>
<h3 id="外边距样式" tabindex="-1"><a class="header-anchor" href="#外边距样式" aria-hidden="true">#</a> <code>外边距样式</code></h3>
<p>CSS margin 属性用于在任何定义的边框之外，为元素周围创建空间。</p>
<p>通过 CSS，您可以完全控制外边距。有一些属性可用于设置元素每侧（上、右、下和左）的外边距。</p>
<p>CSS 拥有用于为元素的每一侧指定外边距的属性：</p>
<ul>
<li>margin-top</li>
<li>margin-right</li>
<li>margin-bottom</li>
<li>margin-left</li>
</ul>
<p>所有外边距属性都可以设置以下值：</p>
<ul>
<li>auto - 浏览器来计算外边距</li>
<li><em>length</em> - 以 px、pt、cm 等单位指定外边距</li>
<li>% - 指定以包含元素宽度的百分比计的外边距</li>
<li>inherit - 指定应从父元素继承外边距</li>
</ul>
<p>提示：允许负值。</p>
<h3 id="外边距简写" tabindex="-1"><a class="header-anchor" href="#外边距简写" aria-hidden="true">#</a> <code>外边距简写</code></h3>
<p>为了缩减代码，可以在一个属性中指定所有外边距属性。</p>
<p><code>margin</code> 属性是以下各外边距属性的简写属性：</p>
<ul>
<li>margin-top</li>
<li>margin-right</li>
<li>margin-bottom</li>
<li>margin-left</li>
</ul>
<p>如果 margin 属性有四个值：</p>
<ul>
<li>
<p>margin: 25px 50px 75px 100px;</p>
</li>
<li>
<ul>
<li>上外边距是 25px</li>
<li>右外边距是 50px</li>
<li>下外边距是 75px</li>
<li>左外边距是 100px</li>
</ul>
</li>
<li>
<p>如果 margin 属性设置三个值：</p>
<ul>
<li>margin: 25px 50px 75px;</li>
<li>
<ul>
<li>上外边距是 25px</li>
<li>右和左外边距是 50px</li>
<li>下外边距是 75px</li>
</ul>
</li>
</ul>
</li>
<li>
<p>如果 margin 属性设置两个值：</p>
<ul>
<li>margin: 25px 50px;</li>
<li>
<ul>
<li>上和下外边距是 25px</li>
<li>右和左外边距是 50px</li>
</ul>
</li>
</ul>
</li>
<li>
<p>如果 <code>margin</code> 属性设置了一个值：</p>
<ul>
<li>margin: 25px;</li>
<li>
<ul>
<li>所有四个外边距都是 25px</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="auto值" tabindex="-1"><a class="header-anchor" href="#auto值" aria-hidden="true">#</a> <code>auto值</code></h3>
<p>您可以将 margin 属性设置为 auto，以使元素在其容器中水平居中。</p>
<p>然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。</p>
<h3 id="inherit值" tabindex="-1"><a class="header-anchor" href="#inherit值" aria-hidden="true">#</a> <code>inherit值</code></h3>
<p>元素的外边距继承自父元素的外边距，两者大小一致</p>
<h3 id="外边距合并" tabindex="-1"><a class="header-anchor" href="#外边距合并" aria-hidden="true">#</a> <code>外边距合并</code></h3>
<p><strong>外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。</strong></p>
<p><strong>合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。</strong></p>
<ul>
<li>当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并。请看下图：</li>
</ul>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52ca5849d165427ca1fd87ec432737e2~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<ul>
<li>当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并。请看下图：</li>
</ul>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a25573fd22fa4f6087ad5fa72ca2af0a~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<ul>
<li>尽管看上去有些奇怪，但是外边距甚至可以与自身发生合并。</li>
</ul>
<p>假设有一个空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并：</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a20ad5cda45409cb80f141b2ce091ab~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<p>如果这个外边距遇到另一个元素的外边距，它还会发生合并</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42ca00b68d174d8b9a9c0c0393cdc827~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<p>这就是一系列段落元素占用空间非常小的原因，因为他们的所有外边距都合并到了一起，形成了一个小的外边距</p>
<p><strong>注释</strong>：只有普通文档流中块框的垂直外边距才会发生外边距合并。<code>行内框、浮动框或绝对定位之间的外边距不会合并。</code></p>
<h3 id="解决外边距合并" tabindex="-1"><a class="header-anchor" href="#解决外边距合并" aria-hidden="true">#</a> <code>解决外边距合并</code></h3>
<p><strong>解决外边距重叠：</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box1</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.box1::before</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.box2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="内边距" tabindex="-1"><a class="header-anchor" href="#内边距" aria-hidden="true">#</a> 内边距</h2>
<h3 id="padding-单独的边" tabindex="-1"><a class="header-anchor" href="#padding-单独的边" aria-hidden="true">#</a> <code>Padding - 单独的边</code></h3>
<p>CSS 拥有用于为元素的每一侧指定内边距的属性：</p>
<ul>
<li>padding-top</li>
<li>padding-right</li>
<li>padding-bottom</li>
<li>padding-left</li>
</ul>
<p>所有内边距属性都可以设置以下值：</p>
<ul>
<li><em>length</em> - 以 px、pt、cm 等单位指定内边距</li>
<li>% - 指定以包含元素宽度的百分比计的内边距</li>
<li>inherit - 指定应从父元素继承内边距</li>
</ul>
<p>提示：不允许负值。</p>
<h3 id="padding-简写属性" tabindex="-1"><a class="header-anchor" href="#padding-简写属性" aria-hidden="true">#</a> <code>Padding - 简写属性</code></h3>
<p>为了缩减代码，可以在一个属性中指定所有内边距属性。</p>
<p><code>padding</code> 属性是以下各内边距属性的简写属性：</p>
<ul>
<li>padding-top</li>
<li>padding-right</li>
<li>padding-bottom</li>
<li>padding-left</li>
</ul>
<p>工作原理是这样的：</p>
<p>如果 padding 属性有四个值：</p>
<ul>
<li>padding: 25px 50px 75px 100px;</li>
<li>
<ul>
<li>上内边距是 25px</li>
<li>右内边距是 50px</li>
<li>下内边距是 75px</li>
<li>左内边距是 100px</li>
</ul>
</li>
</ul>
<h3 id="内边距和元素宽度" tabindex="-1"><a class="header-anchor" href="#内边距和元素宽度" aria-hidden="true">#</a> <code>内边距和元素宽度</code></h3>
<p>CSS width 属性指定元素内容区域的宽度。</p>
<p>内容区域是元素（盒模型）的内边距、边框和外边距<code>内的部分</code>。</p>
<p>因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。这通常是不希望的结果。</p>
<p>总之，内边距会增大内容区域，外边距不会增大内容区域</p>
<blockquote>
<p>使用 <code>box-sizing 属性</code>。这将导致元素保持其宽度。如果<code>增加内边距</code>，则<code>可用的内容空间会减少</code>。</p>
</blockquote>
<h2 id="宽度-高度" tabindex="-1"><a class="header-anchor" href="#宽度-高度" aria-hidden="true">#</a> 宽度/高度</h2>
<p>height 和 width 属性用于设置元素的高度和宽度。</p>
<p>height 和 width 属性不包括内边距、边框或外边距。它设置的是元素内边距、边框以及外边距内的区域的高度或宽度。</p>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> <code>属性</code></h3>
<p>height 和 width 属性可设置如下值：</p>
<ul>
<li>auto - 默认。浏览器计算高度和宽度。</li>
<li><em>length</em> - 以 px、cm 等定义高度/宽度。</li>
<li>% - 以包含块的百分比定义高度/宽度。</li>
<li>initial - 将高度/宽度设置为默认值。</li>
<li>inherit - 从其父值继承高度/宽度。</li>
</ul>
<h3 id="max-width" tabindex="-1"><a class="header-anchor" href="#max-width" aria-hidden="true">#</a> <code>max-width</code></h3>
<p>max-width 属性用于设置元素的最大宽度。</p>
<p>可以用长度值（例如 px、cm 等）或包含块的百分比（％）来指定 max-width（最大宽度），也可以将其设置为 none（默认值。意味着没有最大宽度）。</p>
<p>使用 max-width 能够改善浏览器对小窗口的处理。</p>
<h2 id="框模型" tabindex="-1"><a class="header-anchor" href="#框模型" aria-hidden="true">#</a> 框模型</h2>
<p>所有 HTML 元素都可以视为方框。在 CSS 中，在谈论设计和布局时，会使用术语“盒模型”或“框模型”。</p>
<p>CSS 框模型实质上是一个包围每个 HTML 元素的框。它包括：外边距、边框、内边距以及实际的内容。下图展示了框模型：</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbee4cb9593843a8bf142060dd0956bd~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png">
在 CSS 中，width 和 height 指的是内容区域的宽度和高度。默认情况下，增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。</p>
<h2 id="轮廓" tabindex="-1"><a class="header-anchor" href="#轮廓" aria-hidden="true">#</a> 轮廓</h2>
<p>轮廓是在元素周围绘制的一条线，在边框之外，以凸显元素。</p>
<p>CSS 拥有如下轮廓属性：</p>
<ul>
<li>outline-style</li>
<li>outline-color</li>
<li>outline-width</li>
<li>outline-offset</li>
<li>outline</li>
</ul>
<p>注意：轮廓与<a href="https://www.w3school.com.cn/css/css_border.asp" target="_blank" rel="noopener noreferrer">边框<ExternalLinkIcon/></a>不同！</p>
<p>不同之处在于：轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。同样，轮廓也不是元素尺寸的一部分；元素的总宽度和高度不受轮廓线宽度的影响。</p>
<p><strong><code>CSS 轮廓样式</code></strong></p>
<p>outline-style 属性指定轮廓的样式，并可设置如下值：</p>
<ul>
<li>dotted - 定义点状的轮廓。</li>
<li>dashed - 定义虚线的轮廓。</li>
<li>solid - 定义实线的轮廓。</li>
<li>double - 定义双线的轮廓。</li>
<li>groove - 定义 3D 凹槽轮廓。</li>
<li>ridge - 定义 3D 凸槽轮廓。</li>
<li>inset - 定义 3D 凹边轮廓。</li>
<li>outset - 定义 3D 凸边轮廓。</li>
<li>none - 定义无轮廓。</li>
<li>hidden - 定义隐藏的轮廓。</li>
</ul>
<h2 id="css文本" tabindex="-1"><a class="header-anchor" href="#css文本" aria-hidden="true">#</a> CSS文本</h2>
<h3 id="文本颜色" tabindex="-1"><a class="header-anchor" href="#文本颜色" aria-hidden="true">#</a> <code>文本颜色</code></h3>
<p>color 属性用于设置文本的颜色。颜色由以下值指定：</p>
<ul>
<li>颜色名 - 比如 &quot;red&quot;</li>
<li>十六进制值 - 比如 &quot;#ff0000&quot;</li>
<li>RGB 值 - 比如 &quot;rgb(255,0,0)&quot;</li>
</ul>
<h3 id="文本对齐" tabindex="-1"><a class="header-anchor" href="#文本对齐" aria-hidden="true">#</a> <code>文本对齐</code></h3>
<p>text-align 属性用于设置文本的水平对齐方式。</p>
<p>文本可以左对齐或右对齐，或居中对齐。</p>
<h3 id="文本方向" tabindex="-1"><a class="header-anchor" href="#文本方向" aria-hidden="true">#</a> <code>文本方向</code></h3>
<p>direction 和 unicode-bidi 属性可用于更改元素的文本方向：</p>
<h3 id="文本装饰" tabindex="-1"><a class="header-anchor" href="#文本装饰" aria-hidden="true">#</a> <code>文本装饰</code></h3>
<p>text-decoration 属性用于设置或删除文本装饰。</p>
<p>text-decoration：overline 上划线</p>
<p>text-decoration：line-through 删除线</p>
<p>text-decoration：underline 下划线</p>
<p>text-decoration: none; 通常用于从链接上删除下划线：</p>
<h3 id="文本转换" tabindex="-1"><a class="header-anchor" href="#文本转换" aria-hidden="true">#</a> <code>文本转换</code></h3>
<p>text-transform 属性用于指定文本中的大写和小写字母。</p>
<p>它可用于将所有内容转换为大写或小写字母，或将每个单词的首字母大写：</p>
<p>text-transform：uppercase 大写</p>
<p>text-transform：lowercase 小写</p>
<p>text-transform：capitalize 首字母大写</p>
<h3 id="文字间距" tabindex="-1"><a class="header-anchor" href="#文字间距" aria-hidden="true">#</a> <code>文字间距</code></h3>
<p>text-indent 属性用于指定文本第一行的缩进：</p>
<p>letter-spacing 属性用于指定文本中字符之间的间距。</p>
<p>line-height 属性用于指定行之间的间距：</p>
<p>word-spacing 属性用于指定文本中单词之间的间距。</p>
<p>white-space 属性指定元素内部空白的处理方式。</p>
<h3 id="文字阴影" tabindex="-1"><a class="header-anchor" href="#文字阴影" aria-hidden="true">#</a> <code>文字阴影</code></h3>
<p>指定水平阴影和垂直阴影</p>
<p>text-shadow: 2px 2px;</p>
<p>向阴影添加颜色</p>
<p>h1 {
text-shadow: 2px 2px red;
}</p>
<p>向阴影添加模糊效果</p>
<p>text-shadow: 2px 2px 5px red;</p>
<h2 id="css字体" tabindex="-1"><a class="header-anchor" href="#css字体" aria-hidden="true">#</a> CSS字体</h2>
<h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> <code>属性</code></h3>
<p>在 CSS 中，我们使用 font-family 属性规定文本的字体。</p>
<h3 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> <code>样式</code></h3>
<p>font-style 属性主要用于指定斜体文本。</p>
<p>此属性可设置三个值：</p>
<ul>
<li>normal - 文字正常显示</li>
<li>italic - 文本以斜体显示</li>
<li>oblique - 文本为“倾斜”（倾斜与斜体非常相似，但支持较少）</li>
</ul>
<h3 id="粗细" tabindex="-1"><a class="header-anchor" href="#粗细" aria-hidden="true">#</a> <code>粗细</code></h3>
<p>font-weight 属性指定字体的粗细：</p>
<h3 id="大小" tabindex="-1"><a class="header-anchor" href="#大小" aria-hidden="true">#</a> <code>大小</code></h3>
<p>font-size 属性设置文本的大小。</p>
<p>font-size 值可以是绝对或相对大小。</p>
<p><code>绝对尺寸</code>：</p>
<ul>
<li>将文本设置为指定大小</li>
<li>不允许用户在所有浏览器中更改文本大小（可访问性不佳）</li>
<li>当输出的物理尺寸已知时，绝对尺寸很有用</li>
</ul>
<p><code>相对尺寸</code>：</p>
<ul>
<li>设置相对于周围元素的大小</li>
<li>允许用户在浏览器中更改文本大小</li>
</ul>
<p>注释：如果您没有指定字体大小，则普通文本（如段落）的默认大小为 16px（16px = 1em）。</p>
<p><code>用 em 设置字体大小</code></p>
<p>为了允许用户调整文本大小（在浏览器菜单中），许多开发人员使用 em 而不是像素。</p>
<p>1em 等于当前字体大小。浏览器中的默认文本大小为 16px。因此，默认大小 1em 为 16px。</p>
<p><code>响应式字体大小</code></p>
<p>可以使用<code> vw 单位</code>设置文本大小，它的意思是“视口宽度”（&quot;viewport width&quot;）。</p>
<p>这样，文本大小将遵循浏览器窗口的大小，请调整浏览器窗口的大小，以查看字体大小如何缩放：</p>
<p>视口（Viewport）是浏览器窗口的大小。 1vw = 视口宽度的 1％。如果视口为 50 厘米宽，则 1vw 为 0.5 厘米。</p>
<h2 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2>
<p>向 HTML 页面添加图标的最简单方法是使用图标库，比如 Font Awesome。</p>
<p>将指定的图标类的名称添加到任何行内 HTML 元素（如 <code>&lt;i&gt;</code> 或 <code>&lt;span&gt;</code>）。</p>
<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2>
<p>链接可以使用任何 CSS 属性（例如 color、font-family、background 等）来设置样式。</p>
<p>display: block; 将链接显示为块元素可以使整个链接区域都可以被单击（而不仅仅是文本），我们还可以指定宽度（如果需要，还可以指定内边距、外边距、高度等）。</p>
<p>此外，可以根据链接处于什么状态来设置链接的不同样式。</p>
<p>四种链接状态分别是：(<code>简单记住为love</code>)</p>
<ul>
<li>a:link - 正常的，未访问的链接</li>
<li>a:visited - 用户访问过的链接</li>
<li>a:hover - 用户将鼠标悬停在链接上时</li>
<li>a:active - 链接被点击时</li>
</ul>
<p><code>文本装饰</code></p>
<p>text-decoration 属性主要用于从链接中删除下划线</p>
<p><code>背景色</code></p>
<p>background-color 属性可用于指定链接的背景色</p>
<h1 id="css中级" tabindex="-1"><a class="header-anchor" href="#css中级" aria-hidden="true">#</a> CSS中级</h1>
<h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>此元素不会被显示。</td>
</tr>
<tr>
<td>block</td>
<td>此元素将显示为块级元素，此元素前后会带有换行符。</td>
</tr>
<tr>
<td>inline</td>
<td>默认。此元素会被显示为内联元素，元素前后没有换行符。</td>
</tr>
<tr>
<td>inline-block</td>
<td>行内块元素。（CSS2.1 新增的值）</td>
</tr>
</tbody>
</table>
<p>display: none; 通常与 JavaScript 一起使用，以隐藏和显示元素，而无需删除和重新创建它们。</p>
<h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h2>
<p>position 属性规定应用于元素的定位方法的类型。</p>
<p>有五个不同的位置值：</p>
<ul>
<li>static</li>
<li>relative</li>
<li>fixed</li>
<li>absolute</li>
<li>sticky</li>
</ul>
<p>元素其实是使用 top、bottom、left 和 right 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。</p>
<h3 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> <code>static</code></h3>
<p>HTML 元素默认情况下的定位方式为 static（静态）。</p>
<p>静态定位的元素不受 top、bottom、left 和 right 属性的影响。</p>
<p>position: static; 的元素不会以任何特殊方式定位；它始终根据页面的正常流进行定位：</p>
<h3 id="relative" tabindex="-1"><a class="header-anchor" href="#relative" aria-hidden="true">#</a> <code>relative</code></h3>
<p>position: relative; 的元素相对于其正常位置进行定位。</p>
<p>设置相对定位的元素的 top、right、bottom 和 left 属性将导致其偏离其正常位置进行调整。不会对其余内容进行调整来适应元素留下的任何空间。</p>
<h3 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed" aria-hidden="true">#</a> <code>fixed</code></h3>
<p>position: fixed; 的元素是相对于视口定位的，这意味着即使滚动页面，它也始终位于同一位置。 top、right、bottom 和 left 属性用于定位此元素。</p>
<p>固定定位的元素不会在页面中通常应放置的位置上留出空隙。</p>
<h3 id="absolute" tabindex="-1"><a class="header-anchor" href="#absolute" aria-hidden="true">#</a> <code>absolute</code></h3>
<p>position: absolute; 的元素相对于最近的定位祖先元素进行定位（而不是相对于视口定位，如 fixed）。</p>
<p>然而，如果绝对定位的元素没有祖先，它将使用文档主体（body），并随页面滚动一起移动。</p>
<h3 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> <code>sticky</code></h3>
<p>position: sticky; 的元素根据用户的滚动位置进行定位。</p>
<p>粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 position:fixed）</p>
<h2 id="溢出" tabindex="-1"><a class="header-anchor" href="#溢出" aria-hidden="true">#</a> 溢出</h2>
<p>overflow 属性指定在元素的内容太大而无法放入指定区域时是剪裁内容还是添加滚动条。</p>
<p>overflow 属性可设置以下值：</p>
<ul>
<li>visible - 默认。溢出没有被剪裁。内容在元素框外渲染</li>
<li>hidden - 溢出被剪裁，其余内容将不可见</li>
<li>scroll - 溢出被剪裁，同时添加滚动条以查看其余内容</li>
<li>auto - 与 scroll 类似，但仅在必要时添加滚动条</li>
</ul>
<p>注释：overflow 属性仅适用于具有指定高度的块元素。</p>
<h2 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h2>
<p>float 属性用于定位和格式化内容，通过浮动可以使一个元素向其父元素的左侧或右侧移动</p>
<p>float 属性可以设置以下值之一：</p>
<ul>
<li>left - 元素浮动到其容器的左侧</li>
<li>right - 元素浮动在其容器的右侧</li>
<li>none - 元素不会浮动（将显示在文本中刚出现的位置）。默认值。</li>
<li>inherit - 元素继承其父级的 float 值</li>
</ul>
<h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> <code>清除浮动</code></h3>
<p>clear 属性指定哪些元素可以浮动于被清除元素的旁边以及哪一侧。</p>
<p>clear 属性可设置以下值之一：</p>
<ul>
<li>none - 允许两侧都有浮动元素。默认值</li>
<li>left - 左侧不允许浮动元素</li>
<li>right- 右侧不允许浮动元素</li>
<li>both - 左侧或右侧均不允许浮动元素</li>
<li>inherit - 元素继承其父级的 clear 值
<strong>原理：</strong></li>
</ul>
<p>设置清除浮动之后，浏览器会自动为元素添加一个上外边距，以使其位置不受其他元素的影响</p>
<h3 id="高度塌陷和bfc" tabindex="-1"><a class="header-anchor" href="#高度塌陷和bfc" aria-hidden="true">#</a> <code>高度塌陷和BFC</code></h3>
<p>高度塌陷的问题：</p>
<ul>
<li>浮动布局中，父元素的高度默认被子元素撑开的。当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离，将会无法撑起父元素的高度，导致父元素的高度丢失。举例：</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.outer</span><span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 10px red solid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.inner</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul>
<li>父元素高度丢失后，其下的元素会自动上移，导致页面布局混乱
<code>解决塌陷方法</code></li>
</ul>
<p>固定父元素的高度</p>
<p>开启BFC（Block Formatting Context）块级格式化环境</p>
<ul>
<li>
<p>BFC是CSS的一个隐含属性，可以为一个元素开启BFC</p>
<ul>
<li>
<p>开启BFC后，该元素会变成一个独立的布局区域</p>
</li>
<li>
<p>开启BFC之后的特点：</p>
<ul>
<li>开启BFC的元素不会被浮动元素所覆盖</li>
<li>开启BFC的父元素，子元素和父元素外边距不会重叠</li>
<li>开启BFC的元素，可以包含浮动的子元素（<code>解决塌陷问题</code>）</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><code>特殊方式开启元素的BFC</code>：</p>
<ul>
<li>设置元素的浮动（float: left;这样的）（不推荐）</li>
<li>将元素设置为行内块元素（display: inline-block;这样的）（不推荐）</li>
<li>将元素的overflow设置为一个非visible的值（overflow: hidden; / overflow: auto;这样的）（推荐）</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box1</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.box2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
            <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="使用after伪类解决高度塌陷问题" tabindex="-1"><a class="header-anchor" href="#使用after伪类解决高度塌陷问题" aria-hidden="true">#</a> <code>使用after伪类解决高度塌陷问题</code></h3>
<p><strong>解决方法：</strong></p>
<p>利用在浮动元素下面添加一个新的空元素，并清除浮动元素对其的影响（clear: both;），使之撑开父元素。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box1</span><span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 10px red solid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.box2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 默认是行内元素 */</span>
        <span class="token selector">.box1::after</span><span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
            <span class="token comment">/* 清除浮动元素的影响，使内容显示于box2的下面，从而撑开box1 */</span>
            <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="clearfix" tabindex="-1"><a class="header-anchor" href="#clearfix" aria-hidden="true">#</a> <code>clearfix</code></h3>
<p><strong>既解决外边距重叠，又解决塌陷问题（以后直接在需要的元素的类上加上clearfix就好）：</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.clearfix::before, .clearfix::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="css伪类" tabindex="-1"><a class="header-anchor" href="#css伪类" aria-hidden="true">#</a> CSS伪类</h2>
<p>伪类用于定义元素的特殊状态。</p>
<p>例如，它可以用于：</p>
<ul>
<li>设置鼠标悬停在元素上时的样式</li>
<li>为已访问和未访问链接设置不同的样式</li>
<li>设置元素获得焦点时的样式</li>
</ul>
<h3 id="first-child" tabindex="-1"><a class="header-anchor" href="#first-child" aria-hidden="true">#</a> <code>first-child</code></h3>
<p>:first-child 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。</p>
<p>p:first-child ：匹配首个P元素</p>
<p>p:first-child i ：匹配首个P元素的所有i</p>
<p>p i:first-child 匹配所有P元素的首个i</p>
<h2 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h2>
<p>CSS 伪元素用于设置元素指定部分的样式。</p>
<p>例如，它可用于：</p>
<ul>
<li>设置元素的首字母、首行的样式</li>
<li>在元素的内容之前或之后插入内容</li>
</ul>
<h3 id="first-line-伪元素" tabindex="-1"><a class="header-anchor" href="#first-line-伪元素" aria-hidden="true">#</a> <code>::first-line 伪元素</code></h3>
<p>::first-line 伪元素用于向文本的首行添加特殊样式。</p>
<h3 id="first-letter" tabindex="-1"><a class="header-anchor" href="#first-letter" aria-hidden="true">#</a> <code>::first-letter</code></h3>
<p>::first-letter 伪元素用于向文本的首字母添加特殊样式。</p>
<h3 id="before-伪元素" tabindex="-1"><a class="header-anchor" href="#before-伪元素" aria-hidden="true">#</a> <code>::before 伪元素</code></h3>
<p>::before 伪元素可用于在元素内容之前插入一些内容。</p>
<h3 id="after-伪元素" tabindex="-1"><a class="header-anchor" href="#after-伪元素" aria-hidden="true">#</a> <code>::after 伪元素</code></h3>
<p>::after 伪元素可用于在元素内容之后插入一些内容。</p>
<h3 id="selection-伪元素" tabindex="-1"><a class="header-anchor" href="#selection-伪元素" aria-hidden="true">#</a> <code>::selection 伪元素</code></h3>
<p>::selection 伪元素匹配用户选择的元素部分。</p>
<h2 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器" aria-hidden="true">#</a> 复合选择器</h2>
<h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器" aria-hidden="true">#</a> <code>交集选择器</code></h3>
<ul>
<li>作用：选中同时符合多个条件的元素</li>
<li>语法：选择器1选择器2选择器3</li>
<li>注意点：交集选择器中如果有元素选择器，必须使用元素选择器开头</li>
<li>代码举例：</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
    div.red</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style>

&lt;body>
    &lt;div class=<span class="token string">"red"</span>>测试1&lt;/div>
    &lt;p class=<span class="token string">"red"</span>>测试2&lt;/p>
&lt;/body>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="并集选择器" tabindex="-1"><a class="header-anchor" href="#并集选择器" aria-hidden="true">#</a> <code>并集选择器</code></h3>
<ul>
<li>作用：同时选择多个选择器对应的元素</li>
<li>语法：选择器1, 选择器2, 选择器3</li>
</ul>
<h3 id="关系选择器" tabindex="-1"><a class="header-anchor" href="#关系选择器" aria-hidden="true">#</a> <code>关系选择器</code></h3>
<p>后代选择器 (空格)</p>
<p>子选择器 (&gt;)</p>
<p>相邻兄弟选择器 (+)</p>
<p>通用兄弟选择器 (~)</p>
<ul>
<li>
<p>子元素选择器：</p>
<ul>
<li>语法：父元素 &gt; 子元素</li>
</ul>
</li>
<li>
<p>后代元素选择器</p>
<ul>
<li>语法：祖先 后代</li>
</ul>
</li>
<li>
<p>相邻兄弟选择器：</p>
<ul>
<li>语法：前一个 + 下一个</li>
<li>选择下边所有兄弟：语法：兄 ~ 弟</li>
</ul>
</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">li + li</span> <span class="token punctuation">{</span><span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> <code>属性选择器</code></h3>
<p>为带有特定属性的 HTML 元素设置样式</p>
<p>我们可以设置带有特定属性或属性值的 HTML 元素的样式。</p>
<ul>
<li>
<p>语法：</p>
<ul>
<li>[属性名]：选择含有指定属性的元素</li>
<li>[属性名=属性值]：选择含有指定属性和属性值的元素</li>
<li>[属性名^=属性值]：选择属性值以指定值开头的元素</li>
<li>[属性名$=属性值]：选择属性值以指定值结尾的元素</li>
<li>[属性名*=属性值]：选择属性值中含有某值的元素</li>
</ul>
</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;style>
    p[title]</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token selector">p[title=abc]</span><span class="token punctuation">{</span>
    	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">p[title^=yu]</span><span class="token punctuation">{</span>
    	<span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">p[title$=pp]</span><span class="token punctuation">{</span>
    	<span class="token property">color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">p[title*=aaa]</span><span class="token punctuation">{</span>
    	<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
&lt;/style>

&lt;body>
    &lt;p title=<span class="token string">"hello"</span>>hahaha&lt;/p>
    &lt;p>mimimi&lt;/p>
    &lt;p title=<span class="token string">"abc"</span>>we are good&lt;/p>
    &lt;p title=<span class="token string">"yuan"</span>>66666&lt;/p>
    &lt;p title=<span class="token string">"pppp"</span>>noscript&lt;/p>
    &lt;p title=<span class="token string">"nbaaaa"</span>>so we&lt;/p>
&lt;/body>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="选择器权重" tabindex="-1"><a class="header-anchor" href="#选择器权重" aria-hidden="true">#</a> 选择器权重</h2>
<p>当通过不同的选择器，选中相同的元素，并为相同的样式设置不同的值时，此时会发生样式的冲突</p>
<h3 id="引例" tabindex="-1"><a class="header-anchor" href="#引例" aria-hidden="true">#</a> <code>引例</code></h3>
<p>结果是红色</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.red</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是一个div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="选择的权重-从高到底排列" tabindex="-1"><a class="header-anchor" href="#选择的权重-从高到底排列" aria-hidden="true">#</a> <code>选择的权重（从高到底排列）</code></h3>
<ul>
<li>内联样式 1000</li>
<li>id选择器 100</li>
<li>类和伪类选择器 10</li>
<li>元素选择器 1</li>
<li>通配选择器 0</li>
<li>继承的样式 无优先级</li>
</ul>
<p>比较优先级时，需要将所有的选择器的优先级进行相加计算，则优先显示，所以，#box1和div#box1会优先使用后者的样式</p>
<p>分组选择器（div,p,span{}）是单独计算的</p>
<p>如果优先级计算后相等，则优先使用靠下的样式</p>
<p><code>!important</code>：可以在某一个样式的后面添加!important，则此时改样式会获取到最高的优先级，甚至超过内联样式。在开发中，这个要慎用！</p>
<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<p>祖先元素的样式会应用到它的后代元素上</p>
<ul>
<li>注意：并不是所有的样式都会被继承，例如背景相关的、布局相关的不会被继承。例如如果p标签包着span，p设置背景颜色，那么span不会继承</li>
</ul>
<h2 id="像素和百分比" tabindex="-1"><a class="header-anchor" href="#像素和百分比" aria-hidden="true">#</a> 像素和百分比</h2>
<p>长度单位</p>
<ul>
<li>
<p>像素：px</p>
</li>
<li>
<p>百分比：</p>
<ul>
<li>可以设置属性相对于父元素的百分比</li>
<li>设置百分比可以使子元素跟随父元素的改变而改变</li>
</ul>
</li>
<li>
<p>em：</p>
<ul>
<li>em是相当于字体大小计算的</li>
<li>1em = 1font-size</li>
<li>em会根据字体大小改变而改变</li>
</ul>
</li>
<li>
<p>rem：</p>
<ul>
<li>rem是相对于根元素的自大小来计算</li>
<li>只需要<code>html{font-size: 30px;}</code>这样设置网页字体大小，那么1rem = 30px</li>
</ul>
</li>
</ul>
<h2 id="rgb值" tabindex="-1"><a class="header-anchor" href="#rgb值" aria-hidden="true">#</a> RGB值</h2>
<ul>
<li>
<p>red、green、blue</p>
</li>
<li>
<p>每一种颜色范围在0-255之间</p>
</li>
<li>
<p>格式举例：<code>background-color: rgb(0, 255, 0) /* 绿色 */</code></p>
</li>
<li>
<p>rgb(0, 0, 0)：黑色，rgb(255, 255, 255)：白色</p>
</li>
<li>
<p>rgba：多的那个a是透明度。0表示完全透明（看不到了），.5表示半透明，1表示完全不透明</p>
</li>
<li>
<p>十六进制的RGB值：</p>
<ul>
<li>语法：#红色绿色蓝色</li>
<li>颜色浓度通过 00-ff 表示</li>
<li>成双的可以简写，例如护眼色<code>#bfa ==&gt; #bbffaa</code></li>
</ul>
</li>
</ul>
<h2 id="hsl值" tabindex="-1"><a class="header-anchor" href="#hsl值" aria-hidden="true">#</a> HSL值</h2>
<ul>
<li>H：色相（0-360）、S：饱和度（0-100%）、L：亮度（0-100%）</li>
<li>很少用，工业用的</li>
</ul>
<h1 id="css高级" tabindex="-1"><a class="header-anchor" href="#css高级" aria-hidden="true">#</a> CSS高级</h1>
<h2 id="过渡" tabindex="-1"><a class="header-anchor" href="#过渡" aria-hidden="true">#</a> 过渡</h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> <code>基本使用</code></h3>
<p><code>transition</code>如何使用 CSS 过渡？</p>
<p>如需创建过渡效果，必须明确两件事：</p>
<ul>
<li>您要添加效果的 CSS 属性</li>
<li>效果的持续时间</li>
</ul>
<p>注意：如果未规定持续时间部分，则过渡不会有效果，因为默认值为 0。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">//width过渡
div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> width 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:hover</span> <span class="token punctuation">{</span>
    //更改width长度
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="指定过渡的速度曲线" tabindex="-1"><a class="header-anchor" href="#指定过渡的速度曲线" aria-hidden="true">#</a> <code>指定过渡的速度曲线</code></h3>
<p>transition-timing-function 属性规定过渡效果的速度曲线。</p>
<p>transition-timing-function 属性可接受以下值：</p>
<ul>
<li>ease - 规定过渡效果，先缓慢地开始，然后加速，然后缓慢地结束（默认）</li>
<li>linear - 规定从开始到结束具有相同速度的过渡效果</li>
<li>ease-in -规定缓慢开始的过渡效果</li>
<li>ease-out - 规定缓慢结束的过渡效果</li>
<li>ease-in-out - 规定开始和结束较慢的过渡效果</li>
<li>cubic-bezier(n,n,n,n) - 允许您在三次贝塞尔函数中定义自己的值</li>
</ul>
<h3 id="延迟过渡效果" tabindex="-1"><a class="header-anchor" href="#延迟过渡效果" aria-hidden="true">#</a> <code>延迟过渡效果</code></h3>
<p>transition-delay 属性规定过渡效果的延迟（以秒计）。</p>
<p>下例在启动之前有 1 秒的延迟：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">transition-delay</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="object-fit属性" tabindex="-1"><a class="header-anchor" href="#object-fit属性" aria-hidden="true">#</a> object-fit属性</h2>
<p>object-fit 属性用于指定应如何调整<code> &lt;img&gt;</code> 或 <code>&lt;video&gt;</code> 的大小以适合其容器。</p>
<p>这个属性告诉内容以不同的方式填充容器。比如“保留长宽比”或者“展开并占用尽可能多的空间”。</p>
<p>object-fit 属性可接受如下值：</p>
<ul>
<li>fill - 默认值。调整替换后的内容大小，以填充元素的内容框。如有必要，将拉伸或挤压物体以适应该对象。</li>
<li>contain - 缩放替换后的内容以保持其纵横比，同时将其放入元素的内容框。</li>
<li>cover - 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应。</li>
<li>none - 不对替换的内容调整大小。</li>
<li>scale-down - 调整内容大小就像没有指定内容或包含内容一样（将导致较小的具体对象尺寸）</li>
</ul>
<h2 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> Flexbox</h2>
<p>弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。</p>
<h3 id="flex-direction-属性" tabindex="-1"><a class="header-anchor" href="#flex-direction-属性" aria-hidden="true">#</a> <code>flex-direction </code>属性</h3>
<p>flex-direction 属性定义容器要在哪个方向上堆叠 flex 项目</p>
<p>column 值设置垂直堆叠 flex 项目（从上到下）：</p>
<p>column-reverse 值垂直堆叠 flex 项目（但从下到上）：</p>
<p>row 值水平堆叠 flex 项目（从左到右）：</p>
<p>row-reverse 值水平堆叠 flex 项目（但从右到左）：</p>
<h3 id="flex-wrap-属性" tabindex="-1"><a class="header-anchor" href="#flex-wrap-属性" aria-hidden="true">#</a> <code>flex-wrap</code> 属性</h3>
<p>flex-wrap 属性规定是否应该对 flex 项目换行。</p>
<p>wrap 值规定 flex 项目将在必要时进行换行：</p>
<p>nowrap 值规定将不对 flex 项目换行（默认）：</p>
<p>wrap-reverse 值规定如有必要，弹性项目将以相反的顺序换行：</p>
<h3 id="flex-flow-属性" tabindex="-1"><a class="header-anchor" href="#flex-flow-属性" aria-hidden="true">#</a> <code>flex-flow</code> 属性</h3>
<p>flex-flow 属性是用于同时设置 flex-direction 和 flex-wrap 属性的简写属性。</p>
<h3 id="justify-content-属性" tabindex="-1"><a class="header-anchor" href="#justify-content-属性" aria-hidden="true">#</a> <code>justify-content</code> 属性</h3>
<p>justify-content 属性用于对齐 flex 项目：</p>
<p>center 值将 flex 项目在容器的中心对齐：</p>
<p>flex-start 值将 flex 项目在容器的开头对齐（默认）：</p>
<p>flex-end 值将 flex 项目在容器的末端对齐：</p>
<p>space-around 值显示行之前、之间和之后带有空格的 flex 项目：</p>
<p>space-between 值显示行之间有空格的 flex 项目：</p>
<h3 id="align-items-属性" tabindex="-1"><a class="header-anchor" href="#align-items-属性" aria-hidden="true">#</a> <code>align-items</code> 属性</h3>
<p>center 值将 flex 项目在容器中间对齐：</p>
<p>flex-start 值将 flex 项目在容器顶部对齐：</p>
<p>flex-end 值将弹性项目在容器底部对齐：</p>
<p>stretch 值拉伸 flex 项目以填充容器（默认）：</p>
<p>baseline 值使 flex 项目基线对齐：</p>
<h3 id="align-content-属性" tabindex="-1"><a class="header-anchor" href="#align-content-属性" aria-hidden="true">#</a> <code>align-content </code>属性</h3>
<p>align-content 属性用于对齐弹性线。</p>
<p>space-between 值显示的弹性线之间有相等的间距：</p>
<p>space-around 值显示弹性线在其之前、之间和之后带有空格：</p>
<p>stretch 值拉伸弹性线以占据剩余空间（默认）：</p>
<p>center 值在容器中间显示弹性线：</p>
<p>flex-start 值在容器开头显示弹性线：</p>
<p>flex-end 值在容器的末尾显示弹性线：</p>
<h3 id="完美居中" tabindex="-1"><a class="header-anchor" href="#完美居中" aria-hidden="true">#</a> <code>完美居中</code></h3>
<p>将 justify-content 和 align-items 属性设置为居中，然后 flex 项目将完美居中：</p>
<h3 id="order-属性" tabindex="-1"><a class="header-anchor" href="#order-属性" aria-hidden="true">#</a> <code>order</code> 属性</h3>
<p>order 属性规定 flex 项目的顺序。</p>
<h3 id="flex-grow-属性" tabindex="-1"><a class="header-anchor" href="#flex-grow-属性" aria-hidden="true">#</a> <code>flex-grow</code> 属性</h3>
<p>flex-grow 属性规定某个 flex 项目相对于其余 flex 项目将增长多少。</p>
<h3 id="flex-shrink-属性" tabindex="-1"><a class="header-anchor" href="#flex-shrink-属性" aria-hidden="true">#</a> <code>flex-shrink</code> 属性</h3>
<p>flex-shrink 属性规定某个 flex 项目相对于其余 flex 项目将收缩多少。</p>
<h3 id="flex-basis-属性" tabindex="-1"><a class="header-anchor" href="#flex-basis-属性" aria-hidden="true">#</a> <code>flex-basis </code>属性</h3>
<p>flex-basis 属性规定 flex 项目的初始长度。</p>
<h3 id="flex-属性" tabindex="-1"><a class="header-anchor" href="#flex-属性" aria-hidden="true">#</a> <code>flex</code> 属性</h3>
<p>flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。</p>
<h3 id="align-self-属性" tabindex="-1"><a class="header-anchor" href="#align-self-属性" aria-hidden="true">#</a> <code>align-self</code> 属性</h3>
<p>align-self 属性规定弹性容器内所选项目的对齐方式。</p>
<p><code>align-self 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。 </code></p>
<p>center 值将 flex 项目在容器中间对齐：</p>
<p>flex-start 值将 flex 项目在容器顶部对齐：</p>
<p>flex-end 值将弹性项目在容器底部对齐：</p>
<p>auto:默认值。元素继承了它的父容器的 align-items 属性。</p>
<p>stretch:元素被拉伸以适应容器</p>
<p>baseline:元素位于容器的基线上</p>
<h2 id="css3新特性" tabindex="-1"><a class="header-anchor" href="#css3新特性" aria-hidden="true">#</a> CSS3新特性</h2>
<p>可参考<code>守候i</code>大佬的文章 https://juejin.cn/post/6844903518520901639</p>
<h2 id="结束语" tabindex="-1"><a class="header-anchor" href="#结束语" aria-hidden="true">#</a> 结束语</h2>
<p>我也只是站在了巨人到得肩膀上，本文所写内容摘录自w3c以及好友的博客https://yuanke3.github.io/docs/, 只是一个简化版本，方便回顾复习。</p>
</template>
