<template><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>相信很多刚开始接触JavaScript的同学都对for...in 和 for...of 感到迷茫，到底什么时候用哪一个，本文将带你彻底搞懂两者的区别，以及再扩展几种循环迭代的方法。</p>
<h2 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for...in</h2>
<p>我先列举<code>for...in</code> 的特点，然后后面再用代码来论证。</p>
<ol>
<li>for in通常用来<code>遍历对象</code></li>
<li>遍历的是<code>可枚举的属性</code>，包括实例中的属性，也包括对象原型上的属性</li>
<li>只想获得对象的实例属性，可以使用<code>hasOwnProperty</code>方法。</li>
<li>for in用来遍历数组得到的是<code>数组的索引</code></li>
</ol>
<p>下面是代码验证</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//初始化一个对象实例,并且在实例原型上添加属性bar</span>
<span class="token keyword">let</span> schools <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"掘金大学"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grade</span><span class="token operator">:</span><span class="token string">"985"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span><span class="token string">"世界一流大学"</span>
<span class="token punctuation">}</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token comment">//1.遍历对象实例(包括原型链上的属性)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> schools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>schools<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
        得到结果为:
            name:掘金大学
            grade:985
            detail:世界一流大学
            bar:666
        遍历了对象实例的属性,也遍历了对象原型的属性,其中666是实例原型上的属性，也被遍历出来了
    */</span>
<span class="token comment">//2.遍历对象实例(不包括原型链上的属性)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> schools<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>schools<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//hasOwnProperty方法可以判断属性是否为对象实例上的属性,是返回true,不是返回false</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>schools<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
        得到结果为:
            name:掘金大学
            grade:985
            detail:世界一流大学
        只遍历了对象实例的属性
    */</span>
<span class="token comment">//3用for in 遍历数组试试</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 
        得到结果为: 
            0
            1
            2
            bar
        得到的是数组的索引,因为数组通过原型链可以找到Object,因此数组原型上的属性也有bar
    */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for...of</h2>
<p>还是先列举<code>for...of</code> 的特点，然后后面再用代码来论证。</p>
<ol>
<li>for of通常用来<code>遍历数组</code>，从左到右遍历</li>
<li>for of<code>遍历得到的结果是数据的值</code>，而不像for in得到的是索引/属性</li>
<li>for of还可以遍历map,set,String等</li>
<li>for of不可以遍历普通的对象,但是可以借用Object.keys方法遍历对象</li>
</ol>
<p>下面是代码验证</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"掘"</span><span class="token punctuation">,</span><span class="token string">"金"</span><span class="token punctuation">,</span><span class="token string">"大"</span><span class="token punctuation">,</span><span class="token string">"学"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//1.遍历数组</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//得到的结果为:掘 金 大 学</span>
<span class="token comment">//2.遍历字符串</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"String"</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//结果为: S t r i n g</span>
<span class="token comment">//3.遍历map</span>
    <span class="token keyword">const</span> myMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">,</span><span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> myMap<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//结果为: ['a', '1']  ['b', '2']  ['c', '3']</span>
<span class="token comment">//4.遍历set</span>
    <span class="token keyword">const</span> mySet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> mySet<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//结果为: 掘 金 大 学</span>
<span class="token comment">//5.遍历Object</span>
    <span class="token keyword">let</span> schools <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"掘金大学"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grade</span><span class="token operator">:</span><span class="token string">"985"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">detail</span><span class="token operator">:</span><span class="token string">"世界一流大学"</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// for(let item of schools) { </span>
    <span class="token comment">//     console.log(item);</span>
    <span class="token comment">// }</span>
    <span class="token comment">//结果为: Uncaught TypeError: schools is not iterable : 就是说schools对象是不可迭代的</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>schools<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果为['name', 'grade', 'detail'],</span>
    <span class="token comment">//通过这个我们可以知道Object.keys帮助我们把对象的属性名取出并组成一个数组返回。</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>schools<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>schools<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//结果为: name:掘金大学 grade:985 detail:世界一流大学</span>
    <span class="token comment">//通过这个我们可以知道 for of 借助Object.keys遍历对象属性名 来间接获取对象属性值</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h1 id="除了for-in-for-of-还有另外几种常见的循环迭代方法。" tabindex="-1"><a class="header-anchor" href="#除了for-in-for-of-还有另外几种常见的循环迭代方法。" aria-hidden="true">#</a> 除了for in / for of,还有另外几种常见的循环迭代方法。</h1>
<h2 id="_1-foreach" tabindex="-1"><a class="header-anchor" href="#_1-foreach" aria-hidden="true">#</a> (1) forEach</h2>
<p><strong>特点</strong>:</p>
<ol>
<li>forEach无法跳出循环，即无法使用break</li>
<li>无法使用continue,但可以用return跳过当前迭代</li>
<li>没有返回值,即不能使用return返回给外层</li>
<li>写法简洁，无需关心索引问题
<strong>参数</strong>:</li>
</ol>
<p><code>arr.forEach((item,index,arr) =&gt; {},this)</code></p>
<p>item: 数组当前遍历的元素的值,默认从左往右遍历</p>
<p>index: 数组当前遍历元素的索引</p>
<p>arr: 当前遍历的数组</p>
<p>this: 回调函数中this指向</p>
<p><strong>测试用例</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">数组下标</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的值为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 运行结果为: 
    数组下标0的值为1
    数组下标1的值为2
    数组下标2的值为3
    数组下标3的值为4   (值为5时被跳过了,说明return可以跳过当前迭代，进入下一次循环)
    数组下标5的值为6
    数组下标6的值为7
    数组下标7的值为8
    数组下标8的值为9
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">//结果为:undefined,证实无法使用return返回值</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'root'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次时往数组[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]输入了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 运行结果 
    undefined第1次时往数组[1,2,3,4]输入了1
    undefined第2次时往数组[1,2,3,4]输入了2
    undefined第3次时往数组[1,2,3,4]输入了3
    undefined第4次时往数组[1,2,3,4]输入了4
   使用箭头函数会导致第四个参数(回调函数中this指向)失效
   因为箭头函数没有this指针，它会捕获其所在上下文的this的值，作为自己的this
   此时的this指向全局变量，全局变量没有name属性
 */</span>

list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次时往数组[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]输入了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>user<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 运行结果 
    root第1次时往数组[1,2,3,4]输入了1
    root第2次时往数组[1,2,3,4]输入了2
    root第3次时往数组[1,2,3,4]输入了3
    root第4次时往数组[1,2,3,4]输入了4
   回调函数中this代指user
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_2-map" tabindex="-1"><a class="header-anchor" href="#_2-map" aria-hidden="true">#</a> (2) map</h2>
<p><strong>特点</strong></p>
<ol>
<li>不改变原数组，返回新数组</li>
<li>不可以使用break中断循环，不可以使用continue跳出迭代</li>
<li>可以使用return返回<strong>自定义元素</strong></li>
<li><strong>新数组长度与原数组长度保持一致</strong>，但数组元素是可自定义的</li>
<li>数组中如果有空元素会跳过
（<code>简单理解就是map相当于一物换一物，可能换到一样的东西，也可能换到不一样的，空元素相当于没有东西，换到的自然也是空</code>）</li>
</ol>
<p><strong>测试用例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span><span class="token punctuation">(</span>item <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">"稀土掘金"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> test2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果为: [1,empty,null,undefined,2,3,4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果为: [1,empty,null,undefined,'稀土掘金',3,4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果为: [2, empty, 1, NaN, 3, 4, 5]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_3-filter" tabindex="-1"><a class="header-anchor" href="#_3-filter" aria-hidden="true">#</a> (3) filter</h2>
<p><strong>特点</strong></p>
<p>1.不改变原数组，返回新数组</p>
<p>2.不可以使用break和continue</p>
<p>3.可以使用return返回<strong>满足条件元素</strong>，</p>
<p>4.<strong>新数组长度与原数组长度不一定一致</strong>,但对应元素一致。</p>
<p>5.数组中如果有空元素会跳过</p>
<p>（<code>简单理解filter相当于滤网，滤出可以透出的东西，过滤后这些东西并没有发生变化，如果这个东西如果是空，那就是没东西可以过滤咯，自然也就没东西透出</code>）</p>
<p><strong>测试用例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> test2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> item <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//简化写法</span>
<span class="token keyword">const</span> test3 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//结果为: [1,empty,null,undefined,2,3,4];</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//结果为: [1, 2, 3, 4],这里空,null和undefined都被过滤掉了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//结果为: [1, null, 2, 3],这里空和undefined被过滤掉了,但是null没有,是因为null在于数字4进行比较时，被当做0处理，因为null能够滤出</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_4-reduce-reduceright" tabindex="-1"><a class="header-anchor" href="#_4-reduce-reduceright" aria-hidden="true">#</a> （4）reduce\reduceRight</h2>
<p><strong>特点</strong></p>
<p>1.不改变原数组，返回回调函数处理累计的结果</p>
<p>2.reduce从左往右遍历，reduceRight从右往左遍历</p>
<p>3.不能使用break,不能使用continue</p>
<p>4.可以使用return,返回之前数组元素被回调函数处理累计的结果</p>
<p><strong>参数</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span>current<span class="token punctuation">,</span>currentIndex<span class="token punctuation">,</span>sourceArray</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> accumulator<span class="token operator">*</span>current<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>initialValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>reduce有两个参数</strong>，</p>
<p>一个是回调函数<code>(accumulator,current,currentIndex,sourceArray) =&gt; {  }</code></p>
<p>另一个是初始值 <code>initialValue</code></p>
<p><strong>回调函数的四个参数分别是</strong>:</p>
<p>accumulator: 之前所有数组元素被回调函数处理累计的结果,<code>初始值为initialValue(reduce的第二个参数)</code>,
如果没有设定<code>initialValue</code>，则让数组中第一个元素作为初始值传给accumulator，从数组第二项开始累计处理结果。</p>
<p>current: 当前正在执行的数组元素</p>
<p>currentIndex: 当前被执行元素的索引</p>
<p>sourceArray: 原数组</p>
<p><strong>测试用例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment">//(1)有初始值initialValue</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span>current<span class="token punctuation">,</span>currentIndex<span class="token punctuation">,</span>sourceArray</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>accumulator<span class="token punctuation">,</span>current<span class="token punctuation">,</span>currentIndex<span class="token punctuation">,</span>sourceArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> accumulator<span class="token operator">+</span>current<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"result:"</span><span class="token operator">+</span>result<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 执行结果为: 
    1 1 0 (4) [1, 2, 3, 4]
    2 2 1 (4) [1, 2, 3, 4]
    4 3 2 (4) [1, 2, 3, 4]
    7 4 3 (4) [1, 2, 3, 4]
    result: 11
 */</span>
<span class="token comment">//(2)没有初始值initialValue</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span>current<span class="token punctuation">,</span>currentIndex<span class="token punctuation">,</span>sourceArray</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>accumulator<span class="token punctuation">,</span>current<span class="token punctuation">,</span>currentIndex<span class="token punctuation">,</span>sourceArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> accumulator<span class="token operator">+</span>current<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//注意这里的 1 没了;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"result2:"</span><span class="token operator">+</span>result2<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 执行结果为: 
    1 2 1 (4) [1, 2, 3, 4]  //这里直接将数组第一项作为accumulator传给数组第二项，从数组第二项开始reduce
    3 3 2 (4) [1, 2, 3, 4]
    6 4 3 (4) [1, 2, 3, 4]
    result2: 10
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="_5-some-every" tabindex="-1"><a class="header-anchor" href="#_5-some-every" aria-hidden="true">#</a> （5）some/every</h2>
<p><strong>特点</strong></p>
<p>1.不改变原数组，返回布尔值</p>
<p>2.some：某一个元素满足返回条件，就立刻返回true，全部元素都不满足返回条件，则返回false</p>
<p>3.every：所有元素都满足返回条件才返回true，有某一个元素不满足返回条件，就立刻返回false</p>
<p>4.不可以使用break和continue，可以使用return</p>
<p><strong>参数</strong></p>
<p>some和every的回调函数中都有三个参数</p>
<p><code>some((item,index,arr) =&gt; {})</code></p>
<p><code>every((item,index,arr) =&gt; {})</code></p>
<p>item: 当前正在执行的数组元素</p>
<p>index：当前正在执行数组元素的索引</p>
<p>arr: 原数组</p>
<p><strong>代码示例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> item <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 
 *运行结果: 
    1 0 (4) [1, 2, 3, 4]   
    true         //第一项就满足返回条件了，立刻返回。
*/</span>

<span class="token keyword">const</span> result2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> item <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 
 *运行结果: 
    1 0 (4) [1, 2, 3, 4]
    2 1 (4) [1, 2, 3, 4]
    3 2 (4) [1, 2, 3, 4]
    4 3 (4) [1, 2, 3, 4]  
    true         //每一项都满足条件才返回true
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_6-find-findindex" tabindex="-1"><a class="header-anchor" href="#_6-find-findindex" aria-hidden="true">#</a> (6) find/findIndex</h2>
<p><strong>特点</strong></p>
<p>1.不改变元素值</p>
<p>2.find返回匹配到的数组元素，findIndex返回匹配到数组元素的索引</p>
<p>3.不可以使用break，continue,可以使用return</p>
<p><strong>参数</strong></p>
<p>find和findIndex的回调函数中都有三个参数</p>
<p><code>find((item,index,arr) =&gt; {})</code></p>
<p><code>findIndex((item,index,arr) =&gt; {})</code></p>
<p>item: 当前正在执行的数组元素</p>
<p>index：当前正在执行数组元素的索引</p>
<p>arr: 原数组</p>
<p><strong>代码示例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> schools <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'掘金大学'</span><span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'B站大学'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'CSDN大学'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> schools<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'掘金大学'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token doc-comment comment">/**
 * 运行结果: 
    <span class="token punctuation">{</span>name: '掘金大学', id: 1<span class="token punctuation">}</span> //返回匹配到的数组元素
 */</span>

<span class="token keyword">const</span> result2 <span class="token operator">=</span> schools<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'掘金大学'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token doc-comment comment">/**
 * 运行结果: 
    0 //返回匹配到的数组元素的索引
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote>
<p>写的不好的地方欢迎大家来批评指正，希望路过的朋友动动小指给个赞，这对我真的很重要！</p>
</blockquote>
</template>
