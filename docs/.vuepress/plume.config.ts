/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar, idNavbar, deNavbar, ruNavbar, frNavbar, jaNavbar } from './navbar'
import { enNotes, zhNotes, idNotes, deNotes, ruNotes, frNotes, jaNotes } from './notes'


/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/image/favicon-32x32.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: '/' },
  ],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,

  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Ikimukti.com - Knowledge Hub for Digital Productivity',
    copyright: 'Copyright © 2025 Ikimukti.com. All rights reserved.'
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

  locales: {
    '/en/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - Latest Tech Insights',
        description: 'Knowledge Hub for Digital Productivity',
        circle: true,
        location: 'Indonesia',
        organization: 'ikimukti.com',
        layout: 'right',
      },
      social: [
        // "discord" | "facebook" | "github" | "instagram" | "linkedin" | "mastodon" | "npm" | "slack" | "twitter" | "x" | "youtube" | "qq" | "weibo" | "bilibili" | "gitlab" | "docker" | "juejin" | "zhihu" | "douban" | "steam" | "stackoverflow" | "xbox";
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
        { icon: 'slack', link: 'https://slack.com/ikimukticom' },
        { icon: 'zhihu', link: 'https://zhihu.com/ikimukticom' },
        { icon: 'douban', link: 'https://douban.com/ikimukticom' },
      ],

      navbar: enNavbar,
      notes: enNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: 'Announcement',
         content: 'Welcome to ikimukticom, the knowledge hub for digital productivity.',
       },
    },
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - Pusat Pengetahuan untuk Produktivitas Digital',
        description: 'Pusat Pengetahuan untuk Produktivitas Digital',
        circle: true,
        location: 'Indonesia',
        organization: 'ikimukti.com',
        layout: 'right',
      },
      social: [
        // "discord" | "facebook" | "github" | "instagram" | "linkedin" | "mastodon" | "npm" | "slack" | "twitter" | "x" | "youtube" | "qq" | "weibo" | "bilibili" | "gitlab" | "docker" | "juejin" | "zhihu" | "douban" | "steam" | "stackoverflow" | "xbox";
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
        { icon: 'slack', link: 'https://slack.com/ikimukticom' },
        { icon: 'zhihu', link: 'https://zhihu.com/ikimukticom' },
        { icon: 'douban', link: 'https://douban.com/ikimukticom' },
      ],

      navbar: enNavbar,
      notes: enNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: 'Pengumuman',
         content: 'Selamat datang di ikimukticom, pusat pengetahuan untuk produktivitas digital.',
       },
    },
    '/zh/': { // 中文配置
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - 最新科技洞察',
        description: '数字生产力知识中心',
        circle: true,
        location: '印度尼西亚',
        organization: 'ikimukti.com',
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
        { icon: 'slack', link: 'https://slack.com/ikimukticom' },
        { icon: 'zhihu', link: 'https://zhihu.com/ikimukticom' },
        { icon: 'douban', link: 'https://douban.com/ikimukticom' },
      ],

      navbar: zhNavbar,
      notes: zhNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: '公告',
         content: '欢迎来到 ikimukticom，数字生产力知识中心。',
       },
    },
    '/id/': {
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - Informasi Teknologi Terkini',
        description: 'Pusat Pengetahuan untuk Produktivitas Digital',
        circle: true,
        location: 'Indonesia',
        organization: 'ikimukti.com',
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
        { icon: 'slack', link: 'https://slack.com/ikimukticom' },
        { icon: 'zhihu', link: 'https://zhihu.com/ikimukticom' },
        { icon: 'douban', link: 'https://douban.com/ikimukticom' },
      ],

      navbar: idNavbar,
      notes: idNotes,
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: 'Pengumuman',
         content: 'Selamat datang di ikimukticom, pusat pengetahuan untuk produktivitas digital.',
       },
    },
    '/de/': {
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - Aktuelle Informationstechnologie',
        description: 'Zentrum für Wissen über digitale Produktivität',
        circle: true,
        location: 'Deutschland',
        organization: 'ikimukti.com',
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
      ],

      navbar: deNavbar,
      notes: deNotes,

      bulletin: {
        layout: 'top-right',
        contentType: 'markdown',
        title: 'Ankündigung',
        content: 'Willkommen bei ikimukticom, dem Wissenszentrum für digitale Produktivität.',
      },
    },
    '/ru/': {
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - Актуальные информационные технологии',
        description: 'Центр знаний о цифровой продуктивности',
        circle: true,
        location: 'Россия',
        organization: 'ikimukti.com',
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
      ],

      navbar: ruNavbar,
      notes: ruNotes,

      bulletin: {
        layout: 'top-right',
        contentType: 'markdown',
        title: 'Объявление',
        content: 'Добро пожаловать в ikimukticom, центр знаний о цифровой продуктивности.',
      },
    },
    '/fr/': {
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - Technologies de l\'information actuelles',
        description: 'Centre de connaissances sur la productivité numérique',
        circle: true,
        location: 'France',
        organization: 'ikimukti.com',
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
      ],

      navbar: frNavbar,
      notes: frNotes,

      bulletin: {
        layout: 'top-right',
        contentType: 'markdown',
        title: 'Annonce',
        content: 'Bienvenue sur ikimukticom, le centre de connaissances sur la productivité numérique.',
      },
    },
    '/ja/': {
      profile: {
        avatar: '/image/logo.png',
        name: 'ikimukticom - 現代情報技術',
        description: 'デジタル生産性に関する知識の中心',
        circle: true,
        location: '日本',
        organization: 'ikimukti.com',
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
        { icon: 'npm', link: 'https://www.npmjs.com/~ikimukticom' },
      ],

      navbar: jaNavbar,
      notes: jaNotes,

      bulletin: {
        layout: 'top-right',
        contentType: 'markdown',
        title: 'お知らせ',
        content: 'ikimukticomへようこそ、デジタル生産性に関する知識の中心です。',
      },
    },
  },
})
