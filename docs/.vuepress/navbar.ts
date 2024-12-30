import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { 
    text: 'FurnitureCore',
    items: [
      { text: '插件使用', link: '/notes/core/use/README.md' },
      { text: '参与开发', link: '/notes/core/dev/README.md' },
    ]
  },
  { text: 'FurnitureBench', link: '/notes/bench/README.md' },
  { text: 'FurnitureMarket', link: '/notes/market/README.md' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { 
    text: 'FurnitureCore',
    items: [
      { text: 'PluginUsage', link: '/en/notes/core/use/README.md' },
      { text: 'Development', link: '/en/notes/core/dev/README.md' },
    ]
  },
  { text: 'FurnitureBench', link: '/en/notes/bench/README.md' },
  { text: 'FurnitureMarket', link: '/en/notes/market/README.md' },
])

