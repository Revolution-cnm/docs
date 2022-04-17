<template><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined</span>
<span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"baidu.com"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>还没声明web,就先去访问了，理论上会报错，但是这里输出undefined</p>
<p>这是因为js在解析代码时，会先把var声明的变量提升到<strong>函数作用域最顶部</strong>，这就是<code>var的变量提升特性</code>，
上方代码相当于</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> web<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined</span>
web <span class="token operator">=</span> <span class="token string">"baidu.com"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>再看一个例子,因为false,if代码不执行,为何下面还能访问到web?竟然不报错！</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//false,代码不执行,为何下面还能访问到web?竟然不报错！</span>
        <span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"baidu.com"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
<span class="token punctuation">}</span>
<span class="token function">ke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>输出也是undefined,不报错，原因也是<strong>变量提升</strong>(提升到函数作用域顶部)，上面代码相当于</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> web<span class="token punctuation">;</span><span class="token comment">//这就是提升到函数级作用域最顶部</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//false,代码不执行,但web已经定义在上方了</span>
        web <span class="token operator">=</span> <span class="token string">"baidu.com"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
<span class="token punctuation">}</span>
<span class="token function">ke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote>
<p>小结：变量提升是一件很不好的事情，意味着<strong>变量不先声明就能用了</strong>，后面程序员都尽量不使用var了，改用let和const</p>
</blockquote>
<h2 id="解决方法-暂时性死区tdz" tabindex="-1"><a class="header-anchor" href="#解决方法-暂时性死区tdz" aria-hidden="true">#</a> 解决方法 暂时性死区TDZ</h2>
<p>TDZ 又称暂时性死区，指<strong>变量在作用域内已经存在</strong>，但必须在<code>let/const</code>声明<strong>赋值成功后</strong>才可以使用，<strong>如果提前使用就要报错</strong>。</p>
<p>TDZ可以让程序保持<strong>先声明后使用</strong>的习惯，让程序更稳定。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Cannot access 'web' before initialization</span>
    <span class="token keyword">let</span> web <span class="token operator">=</span> <span class="token string">"baidu.com"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>只有在let声明<strong>赋值成功</strong>后才可以使用变量，所以上方console会报错</p>
<p>再来看一个复杂点的案例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    hd <span class="token operator">=</span> <span class="token string">"houdunren"</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Cannot access 'hd' before initialization</span>
        <span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token string">"hdcms"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可能会有同学有疑惑，“run里的hd不能提前用，那不是还有run外面一个hd吗？怎么会报错？”</p>
<p>很简单，因为暂时性死区的性质: <strong>变量在作用域内已经存在</strong>(画重点)，hd说:&quot;我存在啊，你不用去找外面的了&quot;,不过你<strong>不能在hd赋值完成前</strong>提前访问他，<strong>不然就报错了</strong></p>
<p>说了那么多次赋值后才能访问了，可能就会有小机灵鬼来找茬了，如果let声明的hd没被赋值呢？</p>
<p>不要慌，看下方代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> hd<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//undefined</span>
    <span class="token punctuation">}</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>说明什么？说明程序员就算是不给let声明的变量赋值，人家底层代码也是会先帮你赋上一个undefined，暂时性死区的总结仍然成立，<strong>你只有等到变量赋值成功后才能使用它</strong>。</p>
<h2 id="暂时性死区扩展" tabindex="-1"><a class="header-anchor" href="#暂时性死区扩展" aria-hidden="true">#</a> 暂时性死区扩展</h2>
<p>我们知道let 和 const 是声明的变量作用域为块级作用域，会产生暂时性死区TDZ</p>
<p>还有一种变量也会产生暂时性死区，它就是<strong>函数的形参</strong></p>
<p>直接给出例子,</p>
<p>下面代码中，b形成暂时性死区，<strong>b赋值前</strong>，a不能提前访问b，报错</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hd</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> b<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">hd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Cannot access 'b' before initialization</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>因为a已经赋值，所以b可以使用a变量，下面代码访问正常</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hd</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> b <span class="token operator">=</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">hd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>结束语: 本文所用代码示例摘自后盾人大佬的博客, 我在其基础上加了很多注释方便理解。后盾人大佬博客:https://doc.houdunren.com/</p>
</blockquote>
</template>
