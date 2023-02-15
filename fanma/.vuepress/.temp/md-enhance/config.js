import { defineClientConfig } from "@vuepress/client";
import "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Presentation from "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "C:/FanMa/Blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    
  },
});
