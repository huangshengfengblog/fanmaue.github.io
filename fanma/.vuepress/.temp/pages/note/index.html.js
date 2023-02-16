export const data = JSON.parse("{\"key\":\"v-15054f24\",\"path\":\"/note/\",\"title\":\"Note\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Note\",\"category\":[\"博客笔记\"],\"tag\":[\"Note\",\"笔记\",\"目录\"],\"description\":\"Note主页\"},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"note/README.md\",\"excerpt\":\"<p>Note主页</p>\\n\",\"autoDesc\":true}")

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
