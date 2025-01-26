import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Knowledge Base",
  description: "A personal knowledge base with guides and configurations",
  ignoreDeadLinks: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'images/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'KnowledgeBase' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
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