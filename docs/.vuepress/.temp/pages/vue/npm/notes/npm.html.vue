<template><h1 id="初入-npm-包管理工具" tabindex="-1"><a class="header-anchor" href="#初入-npm-包管理工具" aria-hidden="true">#</a> 初入：NPM 包管理工具</h1>
<h2 id="_1-简单了解npm" tabindex="-1"><a class="header-anchor" href="#_1-简单了解npm" aria-hidden="true">#</a> 1 简单了解NPM</h2>
<p>​	NPM 全称<font color='orange' size='3'> Node Package Manager</font>，它是 JavaScript 的包管理工具, 并且是<font color='red' size='3'> Node.js 平台的默认包管理工具</font>。</p>
<p>​	因为Node.js已经集成了npm工具，接下来我们需要下载Node.js，为电脑安装Node环境。</p>
<p>​	进而可以为我们的项目引入vue.js模块。</p>
<h2 id="_2-下载node-js" tabindex="-1"><a class="header-anchor" href="#_2-下载node-js" aria-hidden="true">#</a> 2 下载Node.js</h2>
<font color='red' size='3'>中文下载地址:</font>https://nodejs.org/zh-cn
<font color='red' size='3'>英文下载地址:</font>https://nodejs.org/en/download/
<p>安装完成后，打开命令行窗口，输入node -v查看是否安装成功</p>
<h2 id="_3-初始化项目" tabindex="-1"><a class="header-anchor" href="#_3-初始化项目" aria-hidden="true">#</a> 3 初始化项目</h2>
<p>新建一个npm-demo文件夹，打开命令提示符窗口，执行下方命令初始化项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init -y   //这是以默认信息的方式初始化项目，如果要手动初始化项目，就别加-y 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55b58c7bec4145caa58aa140cbb759ef~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<h2 id="_4-安装模块" tabindex="-1"><a class="header-anchor" href="#_4-安装模块" aria-hidden="true">#</a> 4 安装模块</h2>
<p>npm install 用于安装模块，可以选择进行<font color='red' size='3'>本地安装</font>或者<font color='red' size='3'>全局安装</font></p>
<h3 id="_4-1-本地安装" tabindex="-1"><a class="header-anchor" href="#_4-1-本地安装" aria-hidden="true">#</a> 4.1 本地安装</h3>
<p>本地安装会将JS库安装到<font color='orange' size='3'>当前目录</font>下，<font color='red' size='3'>如果只有单个项目使用到某个模块，建议使用本地安装</font></p>
<p>打开命令提示符窗口，执行下方命令安装模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install &lt;Module Name>[@版本号]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>比如 安装 vue 模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vue@2.6.10
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装后，可以在package.json 中看到我们安装的模块</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a8147bc7e104fb098780651df2b1a55~tplv-k3u1fbpfcp-watermark.image?" alt="图片.png"></p>
<p><strong>package-lock:</strong></p>
<p>其实用一句话来概括很简单，就是锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。</p>
<h3 id="_4-2-全局安装" tabindex="-1"><a class="header-anchor" href="#_4-2-全局安装" aria-hidden="true">#</a> 4.2 全局安装</h3>
<p>全局安装会将JS库安装到<font color='orange' size='3'>全局目录</font>下,<font color='red' size='3'>如果有多个项目应用到某个模块，建议使用全局安装</font></p>
<p>打开命令提示符窗口，执行下方命令安装模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install &lt;Module Name>[@版本号] -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>比如安装vue模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install vue@2.6.10 -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看自己的全局目录，打开命令提示符窗口，执行下方命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm root -g
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-生产环境模块安装" tabindex="-1"><a class="header-anchor" href="#_5-生产环境模块安装" aria-hidden="true">#</a> 5 生产环境模块安装</h2>
<p>默认情况下模块都是安装到生产环境中的</p>
<p>生产环境模块安装方法，打开命令提示符窗口，执行下方命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install &lt;Module Name> -S
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也可以不加  -S   因为<font color='red' size='3'>默认情况下模块都是安装到生产环境中</font>的</p>
<h2 id="_6-开发环境模块安装" tabindex="-1"><a class="header-anchor" href="#_6-开发环境模块安装" aria-hidden="true">#</a> 6 开发环境模块安装</h2>
<p>有一些模块只是在开发的时候需要，项目<font color='orange' size='3'>上线的时候不需要</font>，就<font color='orange' size='3'>安装到开发环境中</font></p>
<p>比如<font color='red' size='3'>eslint</font>模块,只是在开发阶段用来作为代码的语法校验，上线后并不需要，便可以安装到开发环境。</p>
<p>开发环境模块安装方法，打开命令提示符窗口，执行下方命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install &lt;Module Name> -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_7-配置淘宝镜像加速" tabindex="-1"><a class="header-anchor" href="#_7-配置淘宝镜像加速" aria-hidden="true">#</a> 7 配置淘宝镜像加速</h2>
<p>有时候国内安装一些模块很慢，可以使用淘宝镜像加速</p>
<ol>
<li>查看当前使用的镜像地址</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm get registry
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.配置淘宝镜像地址</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>3.安装下载模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install &lt;模块名>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4">
<li>还原默认镜像地址</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set registry https://registry.npmjs.org/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_8-卸载模块" tabindex="-1"><a class="header-anchor" href="#_8-卸载模块" aria-hidden="true">#</a> 8 卸载模块</h2>
<p>1.卸载局部模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm uninstall &lt;模块名>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.卸载全局模块</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm uninstall -g &lt;模块名>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_9-查看本地已安装模块" tabindex="-1"><a class="header-anchor" href="#_9-查看本地已安装模块" aria-hidden="true">#</a> 9 查看本地已安装模块</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
