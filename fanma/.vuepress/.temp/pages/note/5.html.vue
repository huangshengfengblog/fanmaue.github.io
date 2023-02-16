<template><div><p>今天在设置 VuePress 网站自动部署 GitHub Action 的时候，出现了 Error: The process '/usr/bin/git' failed with exit code 128 的错误。后面经过一番折腾研究之后，最终才找到正确的解决方法。</p>
<p>自动部署 GitHub Pages：<RouterLink to="/vuepress/1.html">自动部署 GitHub Pages</RouterLink></p>
<h2 id="错误信息" tabindex="-1"><a class="header-anchor" href="#错误信息" aria-hidden="true">#</a> 错误信息</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Pushing fanma/.vuepress/dist directory to gh-pages branch on fanmaue/fama repo
  /usr/bin/git push --force ***github.com/fanmaue/fama.git gh-pages
  remote: Permission to fanmaue/fama.git denied to github-actions[bot].
  fatal: unable to access 'https://github.com/fanmaue/fama.git/': The requested URL returned error: 403
  Error: The process '/usr/bin/git' failed with exit code 128
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>
<p>打开仓库的 Settings 设置页面，找到 Actions 并打开它的下拉选项，选择并打开 General 的页面设置。</p>
<p>1、找到 Fork pull request workflows from outside collaborators 项目。
勾选 Require approval for first-time contributors who are new to GitHub 选项。
点 Save 按钮进行保存。</p>
<p>2、在Workflow permissions 项目里。
勾选 Read and write permissions 选项。
点 Save 按钮进行保存。</p>
<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2>
<p>把上面的这两步设置好后，找到和 Settings 同一排上面的 Actions 链接按钮，并点击打开它。然后在左边栏 Actions 下面，在找到你设置的 Workflow 工作流文件并点击找开它。这时在当前 Workflow 工作流的右边就会有一个 Run Workflow 按钮，点击它就会运行一遍这个文件设置的工作流程。</p>
<p>等一段时间工作流运行完成后，就可以看到工作流前面有个圆形绿色的勾了，这就说明我们的 GitHub Action 自动部署设置成功了。</p>
</div></template>


