export const data = JSON.parse("{\"key\":\"v-448f03de\",\"path\":\"/blog/note/1.html\",\"title\":\"2023年02月12日博客笔记 use --host to expose\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"2023年02月12日博客笔记 use --host to expose\",\"date\":\"2023-02-12T00:00:00.000Z\",\"category\":[\"博客笔记\"],\"tag\":[\"博客\",\"笔记\",\"方法\"],\"description\":\"项目服务启动后出现 “ Network: use --host to expose ”的解决方法。 方法一 export default defineConfig({ plugins: [ vue(), ], // 在文件中添加以下内容 server: { host: '0.0.0.0' } }) 方法二 \\\"scripts\\\": { \\\"docusaurus\\\": \\\"docusaurus\\\", \\\"start\\\": \\\"docusaurus start --host 0.0.0.0\\\", \\\"build\\\": \\\"docusaurus build\\\", \\\"swizzle\\\": \\\"docusaurus swizzle\\\", \\\"deploy\\\": \\\"docusaurus deploy\\\", \\\"clear\\\": \\\"docusaurus clear\\\", \\\"serve\\\": \\\"docusaurus serve\\\", \\\"write-translations\\\": \\\"docusaurus write-translations\\\", \\\"write-heading-ids\\\": \\\"docusaurus write-heading-ids\\\" },\"},\"headers\":[{\"level\":2,\"title\":\"方法一\",\"slug\":\"方法一\",\"link\":\"#方法一\",\"children\":[]},{\"level\":2,\"title\":\"方法二\",\"slug\":\"方法二\",\"link\":\"#方法二\",\"children\":[]}],\"readingTime\":{\"minutes\":0.64,\"words\":192},\"filePathRelative\":\"blog/note/1.md\",\"localizedDate\":\"2023年2月12日\",\"excerpt\":\"<p>项目服务启动后出现 “ Network: use --host to expose ”的解决方法。</p>\\n<h2> 方法一</h2>\\n<p>export default defineConfig({\\nplugins: [\\nvue(),\\n],\\n// 在文件中添加以下内容\\nserver: {\\nhost: '0.0.0.0'\\n}\\n})</p>\\n<h2> 方法二</h2>\\n<p>\\\"scripts\\\": {\\n\\\"docusaurus\\\": \\\"docusaurus\\\",\\n\\\"start\\\": \\\"docusaurus start --host 0.0.0.0\\\",\\n\\\"build\\\": \\\"docusaurus build\\\",\\n\\\"swizzle\\\": \\\"docusaurus swizzle\\\",\\n\\\"deploy\\\": \\\"docusaurus deploy\\\",\\n\\\"clear\\\": \\\"docusaurus clear\\\",\\n\\\"serve\\\": \\\"docusaurus serve\\\",\\n\\\"write-translations\\\": \\\"docusaurus write-translations\\\",\\n\\\"write-heading-ids\\\": \\\"docusaurus write-heading-ids\\\"\\n},</p>\",\"autoDesc\":true}")

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
