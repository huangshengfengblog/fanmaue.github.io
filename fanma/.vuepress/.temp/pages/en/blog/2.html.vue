<template><div><h2 id="_1-0-create-directory" tabindex="-1"><a class="header-anchor" href="#_1-0-create-directory" aria-hidden="true">#</a> 1.0 Create directory</h2>
<p>Create blog and note subdirectories under fanma's directory to classify and store md files for easy management in the future.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> fanma
<span class="token function">mkdir</span> fanma/blog
<span class="token function">mkdir</span> fanma/note
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-0-create-a-file" tabindex="-1"><a class="header-anchor" href="#_2-0-create-a-file" aria-hidden="true">#</a> 2.0 create a file</h2>
<p>Create some md files, and create a <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md<ExternalLinkIcon/></a> file under each directory as the main page of the directory.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/README.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/blog/README.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/blog/2.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/note/README.md
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello FanMa'</span> <span class="token operator">></span> fanma/note/1.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-0-number-of-articles" tabindex="-1"><a class="header-anchor" href="#_3-0-number-of-articles" aria-hidden="true">#</a> 3.0 Number of articles</h2>
<p>In order to enrich the article information and bring better experience to reading. We add the word count function to the article, modify the content of the theme. ts file, and add the following code to the theme. ts article.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>pageInfo<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"Author"</span><span class="token punctuation">,</span> <span class="token string">"Original"</span><span class="token punctuation">,</span> <span class="token string">"Date"</span><span class="token punctuation">,</span> <span class="token string">"Category"</span><span class="token punctuation">,</span> <span class="token string">"Tag"</span><span class="token punctuation">,</span> <span class="token string">"ReadingTime"</span><span class="token punctuation">,</span><span class="token string">"Word"</span><span class="token punctuation">,</span><span class="token string">"PageView"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-0-website-author" tabindex="-1"><a class="header-anchor" href="#_4-0-website-author" aria-hidden="true">#</a> 4.0 Website author</h2>
<p>Or in the theme. ts file, find the location of the author, and change the name to the name of the author of your website.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
hostname<span class="token operator">:</span> <span class="token string">"https://fanma.eu.org"</span><span class="token punctuation">,</span>
author<span class="token operator">:</span> <span class="token punctuation">{</span>
name<span class="token operator">:</span> <span class="token string">"饭吗"</span><span class="token punctuation">,</span>
url<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
iconAssets<span class="token operator">:</span> <span class="token string">"iconfont"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-0-default-language" tabindex="-1"><a class="header-anchor" href="#_5-0-default-language" aria-hidden="true">#</a> 5.0 default language</h2>
<p>Find the lang setting in locales in the config.ts file. &quot;/&quot; indicates the default setting of the website. After we change the lang: &quot;en US&quot; in &quot;/&quot; to lang: &quot;zh CN&quot;, the default language of our website will become Chinese. It is worth noting that the following &quot;/en/&quot; should be changed to &quot;/zh/&quot;, and the zh-CN should also be changed to lang: &quot;en US&quot;. The title: &quot;Fanmo Blog&quot; is to set the title of the website, that is, the website name. Fill in Chinese in the Chinese language, and fill in English in the English language column. (lang: &quot;zh CN&quot;=Chinese, lang: &quot;en US&quot;=English)</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-0-modify-navigation" tabindex="-1"><a class="header-anchor" href="#_6-0-modify-navigation" aria-hidden="true">#</a> 6.0 Modify Navigation</h2>
<p>After changing the default language to Chinese, we also need to modify the relevant parameters of the navigation bar at the top of the page. Find the. vuepress  navbar  zh.ts file and change &quot;/zh/&quot; to &quot;/&quot;. There are also links where the relevant/zh/should be removed, such as link: &quot;/zh/demo/&quot; to link: &quot;/demo/&quot;.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following is the final modification effect of the. vuepress  navbar  zh.ts file:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, the relevant en.ts file should also be modified according to the above method to be able to browse the relevant web pages normally. So our language-related settings are ready. Finally, we need to delete the zh folder of the main directory. Of course, you can keep it. Then create another en directory, and create a corresponding <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md<ExternalLinkIcon/></a> file under the en directory, which is the home page of the English website.</p>
</div></template>


