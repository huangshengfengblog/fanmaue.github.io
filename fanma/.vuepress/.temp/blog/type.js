export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-8aa4c400","v-36e83ee6","v-0111f1b4","v-3dbba162","v-412552a0","v-566c6064","v-58213903","v-448f03de","v-3e214e9b"]},"/en/":{"path":"/en/article/","keys":["v-6b596d28","v-6d0e45c7","v-486bf74e"]}},"star":{"/":{"path":"/star/","keys":["v-3e214e9b","v-58213903"]},"/en/":{"path":"/en/star/","keys":["v-6d0e45c7","v-486bf74e"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-8aa4c400","v-36e83ee6","v-0111f1b4","v-3dbba162","v-412552a0","v-566c6064","v-58213903","v-448f03de"]},"/en/":{"path":"/en/timeline/","keys":["v-6b596d28","v-6d0e45c7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

