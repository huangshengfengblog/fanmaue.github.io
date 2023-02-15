import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "discover",
      text: "Note",
      prefix: "note/",
      link: "note/",
      children: "structure",
    },
    {
      text: "Blog",
      icon: "note",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
