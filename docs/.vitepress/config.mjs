import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Knowledge Base",
  description: "A personal knowledge base with guides and configurations",
  ignoreDeadLinks: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ],

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    nav: [
      {
        text: 'Linux',
        items: [
          { text: 'Setup', link: '/linux/Setup' },
          { text: 'Grub', link: '/linux/grub' },
          { text: 'Fish Shell', link: '/linux/fish' }
        ]
      },
      { text: 'Browsers', link: '/browsers' },
      { text: 'Windows', link: '/windows' },
      {
        text: 'Tools',
        items: [
          { text: 'Android', link: '/android' },
          { text: 'Git', link: '/git' },
          { text: 'JDownloader', link: '/Jdownloader2' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Linux',
        items: [
          { text: 'Setup', link: '/linux/Setup' },
          { text: 'Grub', link: '/linux/grub' },
          { text: 'Fish Shell', link: '/linux/fish' }
        ]
      },
      { text: 'Browsers', link: '/browsers' },
      { text: 'Windows', link: '/windows' },
      { text: 'Android', link: '/android' },
      {
        text: 'Tools & Apps',
        items: [
          { text: 'Git', link: '/git' },
          { text: 'JDownloader', link: '/Jdownloader' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    footer: {
      message: 'All rights reserved',
      copyright: 'Copyright © 2024-present'
    }
  }
})