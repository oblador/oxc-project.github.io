import{_ as l,c as h,j as e,a as s,I as a,w as o,a4 as r,E as t,o as d}from"./chunks/framework.D6UG3LSr.js";const A=JSON.parse('{"title":"eslint/no-with","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-with.md","filePath":"docs/guide/usage/linter/rules/eslint/no-with.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-with.md"},p={id:"eslint-no-with",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#eslint-no-with","aria-label":'Permalink to "eslint/no-with <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},_=e("span",{class:"emoji"},"✅",-1),E=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow <code>with</code> statements</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The with statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (point) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sqrt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// is r a member of point?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_with.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function m(g,b,y,f,x,w){const i=t("Badge"),n=t("Alert");return d(),h("div",null,[e("h1",p,[s("eslint/no-with "),a(i,{type:"info",text:"Correctness"}),s(),k]),e("div",u,[a(n,{class:"default-on",type:"success"},{default:o(()=>[_,s(" This rule is turned on by default. ")]),_:1})]),E])}const D=l(c,[["render",m]]);export{A as __pageData,D as default};
