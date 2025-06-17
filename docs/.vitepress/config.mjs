import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Knowledge Base",
  description: "A comprehensive personal knowledge base with guides, configurations, and technical documentation",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  
  // SEO and metadata improvements
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'KnowledgeBase' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Knowledge Base' }],
    ['meta', { property: 'og:description', content: 'A comprehensive personal knowledge base with guides, configurations, and technical documentation' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  themeConfig: {
    logo: '/images/logo.svg',
    
    // Enhanced search configuration
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            combineWith: 'AND',
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          },
          options: {
            fields: ['title', 'titles', 'text']
          }
        }
      }
    },

    // Enhanced navigation with better organization
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Operating Systems',
        items: [
          {
            text: 'Linux',
            items: [
              { text: 'Setup Guide', link: '/linux/Setup' },
              { text: 'GRUB Configuration', link: '/linux/grub' },
              { text: 'Fish Shell', link: '/linux/fish' }
            ]
          },
          { text: 'Windows', link: '/windows' }
        ]
      },
      {
        text: 'Applications & Tools',
        items: [
          { text: 'Git Version Control', link: '/git' },
          { text: 'JDownloader2', link: '/jdownloader2' },
          { text: 'Browser Configuration', link: '/browsers' },
          { text: 'Android Tools', link: '/android' }
        ]
      }
    ],

    // Enhanced sidebar with better structure and descriptions
    sidebar: [
      {
        text: '🐧 Linux',
        collapsed: false,
        items: [
          { text: 'System Setup', link: '/linux/Setup' },
          { text: 'GRUB Bootloader', link: '/linux/grub' },
          { text: 'Fish Shell Configuration', link: '/linux/fish' }
        ]
      },
      {
        text: '🖥️ Operating Systems',
        collapsed: true,
        items: [
          { text: 'Windows Configuration', link: '/windows' }
        ]
      },
      {
        text: '🔧 Development Tools',
        collapsed: true,
        items: [
          { text: 'Git Version Control', link: '/git' },
          { text: 'Browser Setup', link: '/browsers' }
        ]
      },
      {
        text: '📱 Applications',
        collapsed: true,
        items: [
          { text: 'Android Development', link: '/android' },
          { text: 'JDownloader2', link: '/jdownloader2' }
        ]
      }
    ],
    
    // Enhanced outline configuration
    outline: {
      level: [2, 4],
      label: 'Table of Contents'
    },
    
    // Social links and external references
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fynks/knowledgebase' }
    ],
    
    // Enhanced footer with more information
    footer: {
      message: 'Built with ❤️ using VitePress • Open source knowledge sharing',
      copyright: 'Copyright © 2024-present Ali (Fynks)'
    },
    
    // Edit link configuration
    editLink: {
      pattern: 'https://github.com/fynks/knowledgebase/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    // Last updated configuration
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // Return to top button
    returnToTopLabel: 'Return to top',
    
    // Dark mode toggle
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme'
  }
})