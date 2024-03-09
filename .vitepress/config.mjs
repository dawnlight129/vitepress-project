import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-project/",
  title: "学习资料库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', items:[
        {text: '首页',link: '/'},
        {text: '前端',link: '/markdown-examples'}
      ] },
      { text: '示例', link: '/markdown-examples' },
      { text: '示例', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dawnlight129' }
    ],
    footer: { 
      copyright:"Copyright @ 2024-present wuwu"
    }
    
  }
})
