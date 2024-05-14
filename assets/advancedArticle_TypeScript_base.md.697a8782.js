import{_ as s,c as n,o as a,d as l}from"./app.57bd0b6b.js";const A=JSON.parse('{"title":"TypeScript\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]}],"relativePath":"advancedArticle/TypeScript/base.md"}'),p={name:"advancedArticle/TypeScript/base.md"},o=l(`<h1 id="typescript\u57FA\u7840" tabindex="-1">TypeScript\u57FA\u7840 <a class="header-anchor" href="#typescript\u57FA\u7840" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u53EA\u80FD\u4F20\u6307\u5B9A\u7C7B\u578B</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// age = &#39;10&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// b = 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u9ED8\u8BA4\u7ED9\u5B9A\u7C7B\u578B</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//js\u51FD\u6570\u4E0D\u9700\u8981\u8003\u8651\u51FD\u6570\u53C2\u6570\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;">// function sum (a , b) {</span></span>
<span class="line"><span style="color:#676E95;">//     return a + b</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"><span style="color:#676E95;">// sum(111,222)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//ts\u9700\u8981\u7ED9\u5B9A\u6307\u5B9A\u7C7B\u578B\u548C\u6570\u76EE</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// sum(10,&#39;10&#39;)</span></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function c(t,r,y,D,F,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
