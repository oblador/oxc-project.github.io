import{_ as l,c as r,j as s,a as e,I as a,w as h,a4 as o,E as i,o as d}from"./chunks/framework.D6UG3LSr.js";const A=JSON.parse('{"title":"eslint/no-shadow-restricted-names","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md","filePath":"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.md"},p={id:"eslint-no-shadow-restricted-names",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-no-shadow-restricted-names","aria-label":'Permalink to "eslint/no-shadow-restricted-names <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},_=s("span",{class:"emoji"},"✅",-1),m=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow redefine the global variables like &#39;undefined&#39;, &#39;NaN&#39;, &#39;Infinity&#39;, &#39;eval&#39;, &#39;arguments&#39;.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> undefined </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (eval) {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_shadow_restricted_names.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,7);function E(g,f,y,b,x,w){const t=i("Badge"),n=i("Alert");return d(),r("div",null,[s("h1",p,[e("eslint/no-shadow-restricted-names "),a(t,{type:"info",text:"Correctness"}),e(),k]),s("div",u,[a(n,{class:"default-on",type:"success"},{default:h(()=>[_,e(" This rule is turned on by default. ")]),_:1})]),m])}const F=l(c,[["render",E]]);export{A as __pageData,F as default};
