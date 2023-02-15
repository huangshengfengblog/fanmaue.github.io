import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "笔记",
      prefix: "note/",
      link: "note/",
      children: "structure",
    },
    {
      text: "博客",
      icon: "note",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
