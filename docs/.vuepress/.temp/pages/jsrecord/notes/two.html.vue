<template><h2 id="方法一-使用json转换" tabindex="-1"><a class="header-anchor" href="#方法一-使用json转换" aria-hidden="true">#</a> 方法一: 使用JSON转换</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">//通过数据创建JSON格式的字符串</span>
	    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token comment">//将JSON字符串转化为JS数据</span>
	    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>缺点：</p>
<ul>
<li>JSON转换<strong>不能克隆方法</strong>;</li>
<li>JSON转换<strong>不能克隆循环引用</strong>，如: obj.b.push(obj.c);  obj.c.j = obj.b;</li>
</ul>
<h2 id="方法二-使用递归" tabindex="-1"><a class="header-anchor" href="#方法二-使用递归" aria-hidden="true">#</a> 方法二: 使用递归</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone2</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">//检测数据类型</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// target 是 null ，或者不是对象和数组，说明是原始类型,直接返回</span>
        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
        <span class="token comment">//创建一个容器,存储数组或者对象</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历target</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token comment">//检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            	<span class="token comment">//递归遍历子元素，直到能返回原始值</span>
                result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone2</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>优点: 递归<strong>可以克隆方法</strong></li>
<li>缺点: 递归<strong>不可以克隆循环引用</strong> 如: obj.b.push(obj.c）;   obj.c.j = obj.b;即b中有c，c中有b，这样递归时会不停执行克隆 b--&gt;c--&gt;b--&gt;c**--....**</li>
</ul>
<hr>
<h2 id="方法三-递归-映射" tabindex="-1"><a class="header-anchor" href="#方法三-递归-映射" aria-hidden="true">#</a> 方法三: 递归+映射</h2>
<p>首先要明白<strong>map.set()这个方法传入的值是按引用传入</strong>的,代码如下:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>result<span class="token punctuation">)</span>  <span class="token comment">//这里map.get(0)是[1,2,3]</span>
result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这里map.get(0)是[1,2,3,4]</span>
<span class="token comment">//综上可以得知map.set()方法传入的值是按引用传入</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>综上可以得知map.set()方法传入的值是<strong>按引用传入</strong>。
接下来<strong>解决递归版深拷贝无法拷贝循环引用的问题</strong>,代码如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone3</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">//检测数据类型</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// target 是 null ，或者不是对象和数组，说明是原始类型,直接返回</span>
        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
        <span class="token comment">//克隆数据前，先进行判断数据之前是否克隆过</span>
        <span class="token keyword">let</span> cache <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果克隆过,直接返回映射中键对应的值,绕开了递归</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">return</span> cache<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//创建一个容器,存储数组或者对象</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//注意:map.set()传入的值是按引用传入,后序result改变也会影响map中保存的状态</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历target</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token comment">//检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone3</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试用例</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">,</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>   
obj1<span class="token punctuation">.</span>c<span class="token punctuation">.</span>j <span class="token operator">=</span> obj1<span class="token punctuation">.</span>b<span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token function">deepClone3</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>几个丑字加深理解:
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89917e0827214000ba9472310a9dec83~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p>
<ul>
<li>优点: 解决递归无法深拷贝循环引用问题.</li>
</ul>
</template>
