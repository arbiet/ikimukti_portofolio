/**
 * Documentation for theme configuration:
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

// Note: Imports for vite-plugin-static-copy and node-polyfills are kept for potential use.
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// --- Data for Main Locales ---
const mainLocaleData = {
  en: { path: '/', lang: 'en-US', description: 'Pusat Pengetahuan untuk Produktivitas Digital' },
  zh: { path: '/zh/', lang: 'zh-CN', description: '数字生产力知识中心' },
  de: { path: '/de/', lang: 'de-DE', description: 'Wissenszentrum für digitale Produktivität' },
  ru: { path: '/ru/', lang: 'ru-RU', description: 'Центр знаний для цифровой продуктивности' },
  fr: { path: '/fr/', lang: 'fr-FR', description: 'Centre de connaissances pour la productivité numérique' },
  ja: { path: '/ja/', lang: 'ja-JP', description: 'デジタル生産性のための知識センター' },
};

// --- Dynamically generate the main locales block ---
const generatedLocales = Object.fromEntries(
  Object.values(mainLocaleData).map(data => [
    data.path,
    {
      title: 'ikimukticom', // Common title for all locales
      lang: data.lang,
      description: data.description,
    }
  ])
);

// --- Data for Copy Code Locales ---
const copyCodeLocales = {
  '/': { copy: 'Copy' },
  '/zh/': { copy: '复制' },
  '/de/': { copy: 'Kopieren' },
  '/ru/': { copy: 'Копировать' },
  '/fr/': { copy: 'Copier' },
  '/ja/': { copy: 'コピー' },
};


export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  locales: generatedLocales,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/image/favicon-32x32.png' }],
  ],

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  shouldPrefetch: false,

  // The plumeTheme block contains default settings.
  // Your `plume.config.ts` file will override these settings for each locale.
  theme: plumeTheme({
    hostname: 'https://ikimukti.com',
    docsRepo: 'https://github.com/arbiet/ikimukti_portofolio',
    docsDir: 'docs',
    docsBranch: '',
    editLink: true,
    lastUpdated: {},
    contributors: {
      mode: 'inline',
      info: [{ username: 'ikimukticom', alias: ['Ikimukti.com'] }]
    },
    changelog: true,
    profile: {
      name: 'ikimukticom',
      avatar: 'https://avatars.githubusercontent.com/u/148637550?s=400&u=d6caef1d3fd72971c8f1a3b2e31c048afbdfcb44&v=4',
      description: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
      location: 'Indonesia',
      organization: 'Ikimukti',
      circle: true,
      layout: 'right',
    },
    social: [
      { icon: 'github', link: 'https://github.com/ikimukticom' },
      { icon: 'twitter', link: 'https://twitter.com/ikimukticom' },
      { icon: 'facebook', link: 'https://facebook.com/ikimukticom' },
      { icon: 'instagram', link: 'https://instagram.com/ikimukticom' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/ikimukticom' },
      { icon: 'youtube', link: 'https://youtube.com/@ikimukticom' },
      { icon: 'mastodon', link: 'https://mastodon.social/@ikimukticom' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/ikimukticom' },
      { icon: 'discord', link: 'https://discord.gg/ikimukticom' },
      { icon: 'slack', link: 'https://slack.com/ikimukticom' },
      { icon: 'weibo', link: 'https://weibo.com/ikimukticom' },
      { icon: 'qq', link: 'https://qq.com/ikimukticom' },
      { icon: 'douban', link: 'https://douban.com/ikimukticom' },
      { icon: 'zhihu', link: 'https://zhihu.com/ikimukticom' },
      { icon: 'gitlab', link: 'https://gitlab.com/ikimukticom' },
      { icon: 'docker', link: 'https://hub.docker.com/u/ikimukticom' },
      { icon: 'juejin', link: 'https://juejin.cn/user/ikimukticom' },
      { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/ikimukticom' },
      { icon: 'steam', link: 'https://steamcommunity.com/id/ikimukticom' },
      { icon: 'xbox', link: 'https://xbox.com/profile/ikimukticom' },
    ],
    copyright: {
      license: { name: 'CC BY-NC-SA 4.0', url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/' },
      author: { name: 'Ikimukti', url: 'https://ikimukti.com' },
      creation: 'reprint',
    },
    bulletin: {
      layout: 'top-left',
      border: true,
      enablePage: true,
      lifetime: 'always',
      id: 'bulletin',
      title: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
      content: 'Selamat datang di ikimukti.com, pusat pengetahuan untuk produktivitas digital. Kami menyediakan berbagai sumber daya dan informasi untuk membantu Anda meningkatkan produktivitas Anda di dunia digital. Temukan artikel, tutorial, dan tips terbaru tentang teknologi, produktivitas, dan inovasi digital.',
      contentType: 'markdown',
    },
    plugins: {
      markdownPower: {
        imageSize: true,
        codeTabs: {
          icon: {
            named: ['python', 'javascript', 'typescript', 'java', 'csharp', 'cpp', 'go', 'rust', 'kotlin', 'php', 'ruby', 'bash', 'html', 'css', 'json', 'yaml'],
            extensions: ['py', 'js', 'ts', 'java', 'cs', 'cpp', 'go', 'rs', 'kt', 'php', 'rb', 'sh', 'html', 'css', 'json', 'yaml'],
          }
        }
      },
      photoSwipe: {
        selector: '.vp-doc :not(a) > img:not([no-view],.no-view,.ignore)',
        download: true,
        fullscreen: true,
        scrollToClose: true,
      },
      git: true,
      seo: {
        author: { name: 'Ikimukti', url: 'https://ikimukti.com', email: 'info@ikimukti.com' },
        autoDescription: true,
        canonical: page => `https://ikimukti.com${page.path}`,
        ogp: (ogp, page) => ({
          ...ogp,
          title: page.frontmatter.title || 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
          description: page.frontmatter.description || 'Ikimukti.com adalah pusat pengetahuan untuk produktivitas digital. Temukan artikel, tutorial, dan tips terbaru tentang teknologi, produktivitas, dan inovasi digital.',
          image: `https://ikimukti.com${page.frontmatter.image || '/favicon-32x32.png'}`,
          type: 'website',
          url: `https://ikimukti.com${page.path}`,
        }),
      },
      sitemap: {
        changefreq: 'always',
        hostname: 'https://ikimukti.com',
      }
    },
    blog: {
      postList: true,
      tags: true,
      archives: true,
      categories: true,
      postCover: { layout: 'left', ratio: '16:9', width: 300, compact: true },
      pagination: 15,
    },
    article: '/article/',
    cache: 'filesystem',
    autoFrontmatter: {
      permalink: true,
      createTime: true,
      title: true,
    },
    search: { provider: 'local' },
    codeHighlighter: {
      twoslash: true,
      whitespace: true,
      lineNumbers: true,
    },
    readingTime: {},
    markdown: {
      pdf: true,
      plot: true,
      bilibili: true,
      youtube: true,
      icon: { provider: 'iconify' },
      table: { copy: true },
      repl: { python: true },
      math: { type: 'katex' },
      mermaid: true,
      image: { lazyload: true },
    },
    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'arbiet/ikimukti_portofolio',
      repoId: 'R_kgDOOvBxB',
      category: 'Q&A',
      categoryId: 'DIC_kwDOOvBxBM4CtvB5',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      strict: true,
      lazyLoading: true,
    },
    appearance: "dark",
    copyCode: {
      duration: 300,
      showInMobile: true,
      locales: copyCodeLocales, // Using the simplified locales object
    },
    createTime: true,
    darkModeSwitchTitle: 'Switch to Dark Mode',
    transition: {
      appearance: "horizontal-clip",
      page: true,
      postList: true,
    },
    returnToTopLabel: 'To Top',
  }),
})