<template><div><h2 id="wuepress-打包出错" tabindex="-1"><a class="header-anchor" href="#wuepress-打包出错" aria-hidden="true">#</a> Wuepress 打包出错</h2>
<p>修改 theme.ts 配置文件后，进行打包生成静态文件的时候出现以下错误。</p>
<div class="language-git line-numbers-mode" data-ext="git"><pre v-pre class="language-git"><code>$ pnpm build

> fanma@1.0.0 build C:\FanMa\Blog
> vuepress build fanma

<span class="token deleted">- Initializing and preparing data</span>
√ Initializing and preparing data - done in 2.09s
<span class="token deleted">- Compiling with vite</span>
√ Compiling with vite - done in 62.24s
<span class="token deleted">- Rendering 47 pages</span>
√ Rendering 47 pages - done in 6.09s
<span class="token deleted">- Generating robots.txt</span>
vuepress-plugin-seo2:  √ Generating robots.txt
<span class="token deleted">- Generating sitemap to /sitemap.xml</span>
error error in hook onGenerated from vuepress-plugin-sitemap2
TypeError [ERR_INVALID_URL]: Invalid URL
    at new NodeError (node:internal/errors:399:5)
    at URL.onParseError (node:internal/url:565:9)
    at new URL (node:internal/url:645:5)
    at new URL (node:internal/url:642:22)
    at normalizeURL (C:\FanMa\Blog\node_modules\sitemap\dist\lib\utils.js:274:15)
    at SitemapStream._transform (C:\FanMa\Blog\node_modules\sitemap\dist\lib\sitemap-stream.js:74:87)
    at Transform._write (node:internal/streams/transform:175:8)
    at writeOrBuffer (node:internal/streams/writable:392:12)
    at _write (node:internal/streams/writable:333:10)
    at Writable.write (node:internal/streams/writable:337:10)
 ELIFECYCLE  Command failed with exit code 1.

FanMa@DESKTOP-1MGPCCQ MINGW64 /c/FanMa/Blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题" aria-hidden="true">#</a> 解决问题</h2>
<p>后来我经过多次测试，发现 theme.ts 文件里 hostname 改成 &quot;/&quot; 后，打包的时候就会出现上面的错误。</p>
<div class="hint-container danger">
<p class="hint-container-title">错误</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hostname<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"饭吗"</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">"https://fanma.eu.org"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p>后面我把它填写上完整的域名，改成 hostname: &quot;<a href="https://fanma.eu.org" target="_blank" rel="noopener noreferrer">https://fanma.eu.org<ExternalLinkIcon/></a>&quot; 就可以了。</p>
<div class="hint-container tip">
<p class="hint-container-title">正确</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hostname<span class="token operator">:</span> <span class="token string">"https://fanma.eu.org"</span><span class="token punctuation">,</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"饭吗"</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">"https://fanma.eu.org"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>


