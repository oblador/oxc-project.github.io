import{_ as a,C as n,o as l,c as p,H as o,Q as e}from"./chunks/framework.725e5b03.js";const v=JSON.parse('{"title":"Resolver","description":"","frontmatter":{"title":"Resolver","outline":"deep","badges":[{"src":"https://img.shields.io/npm/dw/oxc-resolver","alt":"npm"}]},"headers":[],"relativePath":"zh/docs/guide/usage/resolver.md","filePath":"zh/docs/guide/usage/resolver.md","lastUpdated":1701524387000}'),t={name:"zh/docs/guide/usage/resolver.md"},r=e(`<h1 id="resolver" tabindex="-1">Resolver <a class="header-anchor" href="#resolver" aria-label="Permalink to &quot;Resolver&quot;">​</a></h1><p>Node.js Module Resolution.</p><ul><li>Feature complete</li><li>All configuration options are aligned with enhanced-resolve</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="rust" tabindex="-1">Rust <a class="header-anchor" href="#rust" aria-label="Permalink to &quot;Rust&quot;">​</a></h3><p>Install <a href="https://crates.io/oxc_resolver" target="_blank" rel="noreferrer">oxc_resolver</a> crate:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc_resolver</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc_resolver</span></span></code></pre></div><p>You should also check <a href="https://docs.rs/oxc_resolver" target="_blank" rel="noreferrer">documentation</a>.</p><h3 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h3><p>Install <a href="https://www.npmjs.com/package/oxc-resolver" target="_blank" rel="noreferrer">oxc-resolver</a>:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-f7A50" id="tab-KWLoRk2" checked="checked"><label for="tab-KWLoRk2">npm</label><input type="radio" name="group-f7A50" id="tab-9sYZgxI"><label for="tab-9sYZgxI">pnpm</label><input type="radio" name="group-f7A50" id="tab-5mZwGf1"><label for="tab-5mZwGf1">yarn</label><input type="radio" name="group-f7A50" id="tab-BTwINeK"><label for="tab-BTwINeK">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc-parser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc-parser</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc-parser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc-parser</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc-parser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc-parser</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc-parser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc-parser</span></span></code></pre></div></div></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">{env, </span><span style="color:#B392F0;">path</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">PathBuf</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">oxc_resolver</span><span style="color:#F97583;">::</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">ResolveOptions</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Resolver</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">env</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">nth</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;require path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> request </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">env</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">nth</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;require request&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PathBuf</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(path)</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">canonicalize</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path: {path:?}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;request: {request}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">match</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Resolver</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ResolveOptions</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">())</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(path, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">request) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Err</span><span style="color:#E1E4E8;">(error) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Error: {error}&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Ok</span><span style="color:#E1E4E8;">(resolution) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">println!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Resolved: {}&quot;</span><span style="color:#E1E4E8;">, resolution</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">full_path</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">to_string_lossy</span><span style="color:#E1E4E8;">()),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#D73A49;">::</span><span style="color:#24292E;">{env, </span><span style="color:#6F42C1;">path</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">PathBuf</span><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">oxc_resolver</span><span style="color:#D73A49;">::</span><span style="color:#24292E;">{</span><span style="color:#6F42C1;">ResolveOptions</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Resolver</span><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">env</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">nth</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;require path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> request </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">env</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">nth</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;require request&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PathBuf</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(path)</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">canonicalize</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path: {path:?}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;request: {request}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">match</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Resolver</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ResolveOptions</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">())</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(path, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">request) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Err</span><span style="color:#24292E;">(error) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Error: {error}&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Ok</span><span style="color:#24292E;">(resolution) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">println!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Resolved: {}&quot;</span><span style="color:#24292E;">, resolution</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">full_path</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">to_string_lossy</span><span style="color:#24292E;">()),</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,13);function c(y,E,i,F,d,u){const s=n("AppBadgeList");return l(),p("div",null,[o(s),r])}const C=a(t,[["render",c]]);export{v as __pageData,C as default};
