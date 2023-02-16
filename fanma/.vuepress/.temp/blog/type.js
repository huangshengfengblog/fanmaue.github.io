export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-57187de8","v-152101fe","v-53aeccaa","v-51f9f40b","v-631c95bc","v-64d16e5b","v-50451b6c","v-3e214e9b"]},"/en/":{"path":"/en/article/","keys":["v-6b596d28","v-6d0e45c7","v-486bf74e"]}},"star":{"/":{"path":"/star/","keys":["v-3e214e9b","v-64d16e5b"]},"/en/":{"path":"/en/star/","keys":["v-6d0e45c7","v-486bf74e"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-57187de8","v-152101fe","v-53aeccaa","v-51f9f40b","v-631c95bc","v-64d16e5b","v-50451b6c"]},"/en/":{"path":"/en/timeline/","keys":["v-6b596d28","v-6d0e45c7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

