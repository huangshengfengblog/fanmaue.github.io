<template><div><h2 id="_1-0-创建目录" tabindex="-1"><a class="header-anchor" href="#_1-0-创建目录" aria-hidden="true">#</a> 1.0 创建目录</h2>
<h3 id="_1-1" tabindex="-1"><a class="header-anchor" href="#_1-1" aria-hidden="true">#</a> 1.1</h3>
<h3 id="_1-2" tabindex="-1"><a class="header-anchor" href="#_1-2" aria-hidden="true">#</a> 1.2</h3>
<h3 id="_1-3" tabindex="-1"><a class="header-anchor" href="#_1-3" aria-hidden="true">#</a> 1.3</h3>
<p>在 fanma 的目录下创建 blog 和 note 两个子目录，用于分类存放 md 文件，方便以后好管理。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> fanma
<span class="token function">mkdir</span> fanma/blog
<span class="token function">mkdir</span> fanma/note
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-0-创建文件" tabindex="-1"><a class="header-anchor" href="#_2-0-创建文件" aria-hidden="true">#</a> 2.0 创建文件</h2>
<p>创建一些 md 文件，在每个目录下都创建一个 <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md<ExternalLinkIcon/></a> 文件作为目录的主页面。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/README.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/blog/README.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/blog/2.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/note/README.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/note/1.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-0-文章字数" tabindex="-1"><a class="header-anchor" href="#_3-0-文章字数" aria-hidden="true">#</a> 3.0 文章字数</h2>
<p>为了文章信息更加丰富，给阅读带来更好的体验。我们给文章增加 字数 统计功能，修改 theme.ts 文件的内容，在 theme.ts 文章里添加下面这段代码就可以了。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>pageInfo<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"Author"</span><span class="token punctuation">,</span> <span class="token string">"Original"</span><span class="token punctuation">,</span> <span class="token string">"Date"</span><span class="token punctuation">,</span> <span class="token string">"Category"</span><span class="token punctuation">,</span> <span class="token string">"Tag"</span><span class="token punctuation">,</span> <span class="token string">"ReadingTime"</span><span class="token punctuation">,</span><span class="token string">"Word"</span><span class="token punctuation">,</span><span class="token string">"PageView"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-0-网站作者" tabindex="-1"><a class="header-anchor" href="#_4-0-网站作者" aria-hidden="true">#</a> 4.0 网站作者</h2>
<p>还是在 theme.ts 文件里，找到 author 的位置，把里面的 name 改成你网站的作者名称就行了。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
hostname<span class="token operator">:</span> <span class="token string">"https://fanma.eu.org"</span><span class="token punctuation">,</span>
author<span class="token operator">:</span> <span class="token punctuation">{</span>
name<span class="token operator">:</span> <span class="token string">"饭吗"</span><span class="token punctuation">,</span>
url<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
iconAssets<span class="token operator">:</span> <span class="token string">"iconfont"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-0-默认语言" tabindex="-1"><a class="header-anchor" href="#_5-0-默认语言" aria-hidden="true">#</a> 5.0 默认语言</h2>
<p>在 config.ts 文件里找到 locales 里的 lang 设置， &quot;/&quot; 表示网站默认设置，我们把 &quot;/&quot; 里的 lang: &quot;en-US&quot; 改成 lang: &quot;zh-CN&quot; 后，我们的网站默认语言就变成了中文了。值得注意的是，下面的 &quot;/en/&quot; 要改成 &quot;/zh/&quot; ，里面的 zh-CN 也要改成 lang: &quot;en-US&quot; 。里面的 title: &quot;饭吗博客&quot; 就是设置网站的标题，也就是网站名称，中文语言里填写中言语，英文语言栏里填写英文就可以了。（ lang: &quot;zh-CN&quot; = 中文 ，lang: &quot;en-US&quot; = 英文 ）</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>

  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"饭吗博客"</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">"一个饭吗的博客网站"</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"/en/"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">"en-US"</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">"FanMa"</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">"A Blog for FanMa"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-0-修改导航" tabindex="-1"><a class="header-anchor" href="#_6-0-修改导航" aria-hidden="true">#</a> 6.0 修改导航</h2>
<p>我们把默认语言修改成中文后，还需要把页面顶部 导航栏 的相关参数给修改一下。找到 .vuepress\navbar\zh.ts 文件，把 &quot;/zh/&quot; 改成 &quot;/&quot; 。还有一些链接里也要把相关的 /zh/ 要去掉，比如 link: &quot;/zh/demo/&quot; 改成 link: &quot;/demo/&quot; 。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> zhNavbar <span class="token operator">=</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">"/zh/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"案例"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"discover"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/zh/demo/"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">"指南"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"creative"</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">"/zh/guide/"</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">"Bar"</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">"creative"</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">"bar/"</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"baz"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"more"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">"Foo"</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">"config"</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">"foo/"</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ray"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"more"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">"饭吗笔记"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"note"</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">"/category/博客笔记/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是 .vuepress\navbar\zh.ts 文件最终修改效果：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> zhNavbar <span class="token operator">=</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"案例"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"discover"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/demo/"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">"指南"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"creative"</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">"/guide/"</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">"Bar"</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">"creative"</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">"bar/"</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"baz"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"more"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">"Foo"</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">"config"</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">"foo/"</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ray"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"more"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">"饭吗笔记"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"note"</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">"/category/博客笔记/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，相关的 en.ts 文件也要根据上面的方法进行相应的修改，才能够正常浏览相关的网页。这样我们的语言相关设置就做好了，最后还要把主目录的 zh 文件夹给删除掉，当然你保留不删也是可以的。还有再建一个 en 目录，在 en 目录下创建一个相应的 <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md<ExternalLinkIcon/></a> 文件，这个文件就是英文网站的首页。</p>
</div></template>


