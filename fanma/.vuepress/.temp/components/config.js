import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/FanMa/Blog/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "C:/FanMa/Blog/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "C:/FanMa/Blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import SiteInfo from "C:/FanMa/Blog/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import BackToTop from "C:/FanMa/Blog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "C:/FanMa/Blog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
