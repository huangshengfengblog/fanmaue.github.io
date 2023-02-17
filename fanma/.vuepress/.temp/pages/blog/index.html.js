export const data = JSON.parse("{\"key\":\"v-145ac574\",\"path\":\"/blog/\",\"title\":\"Blog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Blog\",\"heroImage\":\"/Avatar.jpg\",\"heroText\":\"饭吗！！！\",\"tagline\":\"不忘记自己的初心，去做一切美好的事情！\",\"category\":[\"Blog\"],\"hero\":false,\"heroFullScreen\":false,\"article\":false,\"sidebar\":false,\"bgImage\":false,\"timeline\":false,\"comment\":false,\"editLink\":false,\"description\":\"这是我的博客日记主页\"},\"headers\":[],\"readingTime\":{\"minutes\":0.2,\"words\":59},\"filePathRelative\":\"blog/README.md\",\"excerpt\":\"<p>这是我的博客日记主页</p>\\n\",\"autoDesc\":true}")

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
