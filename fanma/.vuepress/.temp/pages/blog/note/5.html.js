export const data = JSON.parse("{\"key\":\"v-36e83ee6\",\"path\":\"/blog/note/5.html\",\"title\":\"Error The process '/usr/bin/git' failed with exit code 128\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Error The process '/usr/bin/git' failed with exit code 128\",\"date\":\"2023-02-16T00:00:00.000Z\",\"category\":[\"自动部署\"],\"tag\":[\"自动\",\"部署\",\"错误\"],\"description\":\"今天在设置 VuePress 网站自动部署 GitHub Action 的时候，出现了 Error: The process '/usr/bin/git' failed with exit code 128 的错误。后面经过一番折腾研究之后，最终才找到正确的解决方法。 自动部署 GitHub Pages：自动部署 GitHub Pages 错误信息 Pushing fanma/.vuepress/dist directory to gh-pages branch on fanmaue/fama repo /usr/bin/git push --force ***github.com/fanmaue/fama.git gh-pages remote: Permission to fanmaue/fama.git denied to github-actions[bot]. fatal: unable to access 'https://github.com/fanmaue/fama.git/': The requested URL returned error: 403 Error: The process '/usr/bin/git' failed with exit code 128\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://fanmaue.github.io/blog/note/5.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"FanMa 博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Error The process '/usr/bin/git' failed with exit code 128\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"今天在设置 VuePress 网站自动部署 GitHub Action 的时候，出现了 Error: The process '/usr/bin/git' failed with exit code 128 的错误。后面经过一番折腾研究之后，最终才找到正确的解决方法。 自动部署 GitHub Pages：自动部署 GitHub Pages 错误信息 Pushing fanma/.vuepress/dist directory to gh-pages branch on fanmaue/fama repo /usr/bin/git push --force ***github.com/fanmaue/fama.git gh-pages remote: Permission to fanmaue/fama.git denied to github-actions[bot]. fatal: unable to access 'https://github.com/fanmaue/fama.git/': The requested URL returned error: 403 Error: The process '/usr/bin/git' failed with exit code 128\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"自动\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"部署\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"错误\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-02-16T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Error The process '/usr/bin/git' failed with exit code 128\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-02-16T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"错误信息\",\"slug\":\"错误信息\",\"link\":\"#错误信息\",\"children\":[]},{\"level\":2,\"title\":\"解决方法\",\"slug\":\"解决方法\",\"link\":\"#解决方法\",\"children\":[]},{\"level\":2,\"title\":\"问题解决\",\"slug\":\"问题解决\",\"link\":\"#问题解决\",\"children\":[]}],\"readingTime\":{\"minutes\":1.38,\"words\":413},\"filePathRelative\":\"blog/note/5.md\",\"localizedDate\":\"2023年2月16日\",\"excerpt\":\"<p>今天在设置 VuePress 网站自动部署 GitHub Action 的时候，出现了 Error: The process '/usr/bin/git' failed with exit code 128 的错误。后面经过一番折腾研究之后，最终才找到正确的解决方法。</p>\\n<p>自动部署 GitHub Pages：<a href=\\\"/vuepress/1.html\\\" target=\\\"blank\\\">自动部署 GitHub Pages</a></p>\\n<h2> 错误信息</h2>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>Pushing fanma/.vuepress/dist directory to gh-pages branch on fanmaue/fama repo\\n  /usr/bin/git push --force ***github.com/fanmaue/fama.git gh-pages\\n  remote: Permission to fanmaue/fama.git denied to github-actions[bot].\\n  fatal: unable to access 'https://github.com/fanmaue/fama.git/': The requested URL returned error: 403\\n  Error: The process '/usr/bin/git' failed with exit code 128\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}