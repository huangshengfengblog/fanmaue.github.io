import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://fanmaue.github.io",
  author: {
    name: "饭吗",
    url: "https://fanmaue.github.io",
  },
  iconAssets: "iconfont",
  logo: "/Avatar.jpg",
  repo: "fanmaue/fama",
  docsDir: "fanma",
  pageInfo:["Author", "Original", "Date", "Category", "Tag","Word", "ReadingTime","PageView"],
  locales: {
    "/": {
      // navbar
      // navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "默认页脚",
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
      blog: {
        name: "FanMa",
        avatar: "/Avatar.jpg",
        roundAvatar: true,
        description: "不忘记自己的初心，去做一切美好的事情！",
        intro: "/about/",
      },
    },

    /**
     * Chinese locale config
     */
    "/en/": {
      // navbar
      // navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },

      blog: {
        name: "FanMa",
        avatar: "/Avatar.jpg",
        roundAvatar: true,
        description: "Don't forget your original intention and do all good things!",
        intro: "/en/about/",
      },

    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {

    blog: {
      excerptLength: 300,

      filter: ({ filePathRelative, frontmatter }) => {
        // 舍弃那些不是从 Markdown 文件生成的页面
        if (!filePathRelative) return false;

        // 舍弃 `archives` 文件夹的页面
        if (filePathRelative.startsWith("archives/")) return false;

        // 舍弃那些没有使用默认布局的页面
        if (frontmatter.home || frontmatter.layout) return false;

        return true;
      },

    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {

      attrs: true,
      container: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      mark: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
