<template><div><SiteInfo
  v-for="item in $frontmatter.links"
  :key="item.link"
  v-bind="item"
/>
</div></template>


