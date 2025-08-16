/**
 * @see https://theme-plume.vuejs.press/config/intro/
 * @see https://theme-plume.vuejs.press/config/theme/
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar, idNavbar, deNavbar, ruNavbar, frNavbar, jaNavbar } from './navbar'
import { enNotes, zhNotes, idNotes, deNotes, ruNotes, frNotes, jaNotes } from './notes'

// Define common social links once to avoid repetition
import type { SocialLink } from 'vuepress-theme-plume'

const commonSocials: SocialLink[] = [
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
];

// Group navbar and notes imports for easier access
const localeConfigs = {
  en: { navbar: enNavbar, notes: enNotes },
  zh: { navbar: zhNavbar, notes: zhNotes },
  id: { navbar: idNavbar, notes: idNotes },
  de: { navbar: deNavbar, notes: deNotes },
  ru: { navbar: ruNavbar, notes: ruNotes },
  fr: { navbar: frNavbar, notes: frNotes },
  ja: { navbar: jaNavbar, notes: jaNotes },
};

// Store all locale-specific translated text
const localeTranslations = {
  en: {
    path: '/',
    profile: { name: 'ikimukticom - Latest Tech Insights', description: 'Knowledge Hub for Digital Productivity', location: 'Indonesia', layout: 'right' as 'right' },
    bulletin: { title: 'Announcement', content: 'Welcome to ikimukticom, the knowledge hub for digital productivity.' },
    footer: { message: 'Ikimukti.com - Knowledge Hub for Digital Productivity', copyright: 'Copyright © 2025 Ikimukti.com. All rights reserved.' },
  },
  zh: {
    path: '/zh/',
    profile: { name: 'ikimukticom - 最新科技洞察', description: '数字生产力知识中心', location: '印度尼西亚', layout: 'right' as 'right' },
    bulletin: { title: '公告', content: '欢迎来到 ikimukticom，数字生产力知识中心。' },
    footer: { message: 'Ikimukti.com - 数字生产力知识中心', copyright: 'Copyright © 2025 Ikimukti.com. All rights reserved.' },
  },
  id: {
    path: '/id/',
    profile: { name: 'ikimukticom - Informasi Teknologi Terkini', description: 'Pusat Pengetahuan untuk Produktivitas Digital', location: 'Indonesia', layout: 'right' as 'right' },
    bulletin: { title: 'Pengumuman', content: 'Selamat datang di ikimukticom, pusat pengetahuan untuk produktivitas digital.' },
    footer: { message: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital', copyright: 'Copyright © 2025 Ikimukti.com. All rights reserved.' },
  },
  de: {
    path: '/de/',
    profile: { name: 'ikimukticom - Aktuelle Informationstechnologie', description: 'Zentrum für Wissen über digitale Produktivität', location: 'Deutschland', layout: 'right' as 'right' },
    bulletin: { title: 'Ankündigung', content: 'Willkommen bei ikimukticom, dem Wissenszentrum für digitale Produktivität.' },
    footer: { message: 'Ikimukti.com - Zentrum für Wissen über digitale Produktivität', copyright: 'Copyright © 2025 Ikimukti.com. Alle Rechte vorbehalten.' },
  },
  ru: {
    path: '/ru/',
    profile: { name: 'ikimukticom - Актуальные информационные технологии', description: 'Центр знаний о цифровой продуктивности', location: 'Россия', layout: 'right' as 'right' },
    bulletin: { title: 'Объявление', content: 'Добро пожаловать в ikimukticom, центр знаний о цифровой продуктивности.' },
    footer: { message: 'Ikimukti.com - Портал знаний о цифровой продуктивности', copyright: 'Copyright © 2025 Ikimukti.com. Все права защищены.' },
  },
  fr: {
    path: '/fr/',
    profile: { name: 'ikimukticom - Technologies de l\'information actuelles', description: 'Centre de connaissances sur la productivité numérique', location: 'France', layout: 'right' as 'right' },
    bulletin: { title: 'Annonce', content: 'Bienvenue sur ikimukticom, le centre de connaissances sur la productivité numérique.' },
    footer: { message: 'Ikimukti.com - Centre de connaissances sur la productivité numérique', copyright: 'Copyright © 2025 Ikimukti.com. Tous droits réservés.' },
  },
  ja: {
    path: '/ja/',
    profile: { name: 'ikimukticom - 現代情報技術', description: 'デジタル生産性に関する知識の中心', location: '日本', layout: 'right' as 'right' },
    bulletin: { title: 'お知らせ', content: 'ikimukticomへようこそ、デジタル生産性に関する知識の中心です。' },
    footer: { message: 'Ikimukti.com - 現代情報技術に関する知識の中心', copyright: 'Copyright © 2025 Ikimukti.com. 全著作権所有。' },
  },
};

// Dynamically generate the locales object from the translations
const generatedLocales = Object.fromEntries(
  Object.entries(localeTranslations).map(([lang, data]) => [
    data.path,
    {
      profile: {
        avatar: '/image/logo.png',
        circle: true,
        organization: 'ikimukti.com',
        ...data.profile,
      },
      social: commonSocials,
      navbar: localeConfigs[lang as keyof typeof localeConfigs].navbar,
      notes: localeConfigs[lang as keyof typeof localeConfigs].notes,
      bulletin: {
        layout: 'top-right' as 'top-right',
        contentType: 'markdown' as 'markdown',
        ...data.bulletin,
      },
      footer: data.footer,
    }
  ])
);

export default defineThemeConfig({
  // Global configurations
  logo: '/image/favicon-48x48.png',
  logoDark: '/image/favicon-48x48.png',
  appearance: true,
  social: [{ icon: 'github', link: '/' }],
  navbarSocialInclude: ['github'],
  aside: true,
  copyright: true,
  prevPage: true,
  nextPage: true,
  createTime: true,
  footer: {
    message: 'Ikimukti.com - Knowledge Hub for Digital Productivity',
    copyright: 'Copyright © 2025 Ikimukti.com. All rights reserved.'
  },
  transition: {
    page: true,
    postList: true,
    appearance: 'fade',
  },

  // Locale-specific configurations generated dynamically
  locales: generatedLocales,
})