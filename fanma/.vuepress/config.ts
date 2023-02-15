import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "FanMa 博客",
      description: "这是一个饭吗的博客。",
    },
    "/en/": {
      lang: "en-US",
      title: "FanMa Blog",
      description: "A Blog by FanMa",
    },
  },

  theme,

  shouldPrefetch: false,
});
