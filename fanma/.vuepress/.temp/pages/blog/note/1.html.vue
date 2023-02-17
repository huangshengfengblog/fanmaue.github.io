<template><div><p>项目服务启动后出现 “ Network: use --host to expose ”的解决方法。</p>
<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2>
<p>export default defineConfig({
plugins: [
vue(),
],
// 在文件中添加以下内容
server: {
host: '0.0.0.0'
}
})</p>
<h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h2>
<p>&quot;scripts&quot;: {
&quot;docusaurus&quot;: &quot;docusaurus&quot;,
&quot;start&quot;: &quot;docusaurus start --host 0.0.0.0&quot;,
&quot;build&quot;: &quot;docusaurus build&quot;,
&quot;swizzle&quot;: &quot;docusaurus swizzle&quot;,
&quot;deploy&quot;: &quot;docusaurus deploy&quot;,
&quot;clear&quot;: &quot;docusaurus clear&quot;,
&quot;serve&quot;: &quot;docusaurus serve&quot;,
&quot;write-translations&quot;: &quot;docusaurus write-translations&quot;,
&quot;write-heading-ids&quot;: &quot;docusaurus write-heading-ids&quot;
},</p>
<p>@next/swc-win32-x64-gnu, @next/swc-win32-x64-msvc 报错的解决方法，将swcMinify的值改为false。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>warn  - Attempted to load @next/swc-win32-x64-gnu, but it was not installed
warn  - Attempted to load @next/swc-win32-x64-msvc, but an error occurred: The specified module could not be found.
\\?\C:\FanMa\Next\blog\node_modules\@next\swc-win32-x64-msvc\next-swc.win32-x64-msvc.node

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


