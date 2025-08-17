/**
 * Dokumentasi untuk konfigurasi tema:
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */

// --- Impor Pustaka ---
import { viteBundler } from '@vuepress/bundler-vite';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig, type Page } from 'vuepress';
import { plumeTheme, type SocialLink, type SocialLinkIcon } from 'vuepress-theme-plume';
import { cachePlugin } from '@vuepress/plugin-cache';
import { openGraphPlugin } from 'vuepress-plugin-open-graph';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin, type PwaPopupPluginOptions } from '@vuepress/plugin-pwa-popup';
import { visualizer } from 'rollup-plugin-visualizer';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// --- Konfigurasi Multi-Bahasa Terpusat ---
const localesConfig = {
  en: { path: '/', lang: 'en-US', description: 'Knowledge Hub for Digital Productivity', copyCode: 'Copy', pwaMessage: 'New content is available.', pwaButton: 'Refresh', searchPlaceholder: 'Search' },
  zh: { path: '/zh/', lang: 'zh-CN', description: '数字生产力知识中心', copyCode: '复制', pwaMessage: '发现新内容。', pwaButton: '刷新', searchPlaceholder: '搜索' },
  de: { path: '/de/', lang: 'de-DE', description: 'Wissenszentrum für digitale Produktivität', copyCode: 'Kopieren', pwaMessage: 'Neuer Inhalt ist verfügbar.', pwaButton: 'Aktualisieren', searchPlaceholder: 'Suche' },
  ru: { path: '/ru/', lang: 'ru-RU', description: 'Центр знаний для цифровой продуктивности', copyCode: 'Копировать', pwaMessage: 'Доступен новый контент.', pwaButton: 'Обновить', searchPlaceholder: 'Поиск' },
  fr: { path: '/fr/', lang: 'fr-FR', description: 'Centre de connaissances pour la productivité numérique', copyCode: 'Copier', pwaMessage: 'Du nouveau contenu est disponible.', pwaButton: 'Actualiser', searchPlaceholder: 'Recherche' },
  ja: { path: '/ja/', lang: 'ja-JP', description: 'デジタル生産性のための知識センター', copyCode: 'コピー', pwaMessage: '新しいコンテンツが利用可能です。', pwaButton: '更新', searchPlaceholder: '検索' },
};

// --- Data untuk Ikon Sosial Media ---
const socialLinks: SocialLink[] = [
  { icon: 'github' as SocialLinkIcon, link: 'https://github.com/ikimukticom' },
  { icon: 'twitter' as SocialLinkIcon, link: 'https://twitter.com/ikimukticom' },
  { icon: 'facebook' as SocialLinkIcon, link: 'https://facebook.com/ikimukticom' },
  { icon: 'instagram' as SocialLinkIcon, link: 'https://instagram.com/ikimukticom' },
  { icon: 'linkedin' as SocialLinkIcon, link: 'https://linkedin.com/company/ikimukticom' },
  { icon: 'youtube' as SocialLinkIcon, link: 'https://youtube.com/@ikimukticom' },
];

// --- Data untuk Ikon Tab Kode ---
const codeTabIcons = {
  python: 'py', javascript: 'js', typescript: 'ts', java: 'java', csharp: 'cs',
  cpp: 'cpp', go: 'go', rust: 'rs', kotlin: 'kt', php: 'php', ruby: 'rb',
  bash: 'sh', html: 'html', css: 'css', json: 'json', yaml: 'yaml',
};

// --- Fungsi Utilitas Pencarian ---
const processSearchTerm = (term: string) => term.replace(/[\u200B-\u200D\uFEFF]/g, '');
const tokenizeSearchText = (text: string) => text.split(/\s+/).filter(Boolean);

// --- Hasilkan Konfigurasi Lokal Secara Dinamis ---
const generatedLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [
    cfg.path,
    {
      title: 'ikimukticom',
      lang: cfg.lang,
      description: cfg.description,
      location: 'Indonesia',
    },
  ])
);

const copyCodeLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [cfg.path, { copy: cfg.copyCode }])
);

const searchLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [
    cfg.path,
    {
      placeholder: cfg.searchPlaceholder,
      buttonText: cfg.searchPlaceholder,
      backButtonTitle: 'Back to Search',
      footer: {
        closeKeyAriaLabel: 'Close Search', closeText: 'Close',
        navigateDownKeyAriaLabel: 'Navigate Down', navigateText: 'Navigate',
        navigateUpKeyAriaLabel: 'Navigate Up',
        selectKeyAriaLabel: 'Select Result', selectText: 'Select',
      },
    },
  ])
);

const pwaPopupLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [
    cfg.path,
    { message: cfg.pwaMessage, buttonText: cfg.pwaButton },
  ])
);


// ===================================================================================
// --- KONFIGURASI UTAMA VUEPRESS ---
// ===================================================================================
export default defineUserConfig({
  // --- Metadata Situs ---
  base: '/',
  lang: 'en-US',
  locales: generatedLocales,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/image/favicon-48x48.png' }],
    ['meta', { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; style-src 'self' 'unsafe-inline';" }],
    ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
    ['meta', { 'http-equiv': 'X-Frame-Options', content: 'DENY' }],
    ['meta', { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }],
    ['meta', { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; style-src 'self' 'nonce-random-nonce-value';" }],
    ['meta', { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; script-src 'self' http://ikimukti.com 'unsafe-inline' 'unsafe-eval';" }],
    ['meta', { name: 'algolia-site-verification', content: '37BAF5981A83D338' }],
    ['meta', { name: 'msvalidate.01', content: '4077B11CAE89D53B7DAE1D82710447B0' }],
    ['meta', { name: 'yandex-verification', content: 'b7d4fe28c3d29dd2' }],
    ['meta', { name: 'naver-site-verification', content: '70ef6d5bfc1bba6db665b2fdba6ab2afd49f993f' }],
    ['meta', { name: 'p:domain_verify', content: 'bfa2c54f2e4986e4956c14d4fe581412' }],
    ['script', { async: true, src: 'https://news.google.com/swg/js/v1/swg-basic.js' }],
    ['script', {}, `
      (self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
        basicSubscriptions.init({
          type: "NewsArticle",
          isPartOfType: ["Product"],
          isPartOfProductId: "CAowkMq9DA:openaccess",
          clientOptions: { theme: "light", lang: "en-US" },
        });
      });
    `],
  ],

  // --- Konfigurasi Build ---
  bundler: viteBundler(),
  shouldPrefetch: false,

  // --- Konfigurasi Tema Plume ---
  theme: plumeTheme({
    hostname: 'https://ikimukti.com',
    logo: '/image/favicon-48x48.png',
    docsRepo: 'https://github.com/arbiet/ikimukti_portofolio',
    docsDir: 'docs',
    editLink: true,
    contributors: false,
    changelog: true,

    // Profil & Sosial
    profile: {
      name: 'ikimukticom',
      avatar: 'https://avatars.githubusercontent.com/u/148637550?v=4',
      description: 'Pusat Pengetahuan untuk Produktivitas Digital',
      location: 'Indonesia',
      organization: 'Ikimukti',
      circle: true,
    },
    social: socialLinks,

    // Hak Cipta
    copyright: {
      license: { name: 'CC BY-NC-SA 4.0', url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/' },
      author: { name: 'Ikimukti', url: 'https://ikimukti.com' },
      creation: 'reprint',
    },

    // Fitur Blog
    blog: {
      postList: true,
      tags: true,
      archives: true,
      categories: true,
      pagination: 15,
      categoriesExpand: "deep",
      tagsTheme: 'colored',
    },
    article: '/article/',
    
    // Konfigurasi Plugin Internal Tema
    plugins: {
      markdownPower: {
        imageSize: 'all',
        codeTabs: {
          icon: {
            named: Object.keys(codeTabIcons),
            extensions: Object.values(codeTabIcons),
          },
        },
      },
      photoSwipe: {
        download: true,
        fullscreen: true,
        locales: {
          en: { close: 'Close', zoom: 'Zoom', download: 'Download' },
          zh: { close: '关闭', zoom: '缩放', download: '下载' },
          de: { close: 'Schließen', zoom: 'Zoom', download: 'Herunterladen' },
          ru: { close: 'Закрыть', zoom: 'Увеличить', download: 'Скачать' },
          fr: { close: 'Fermer', zoom: 'Zoomer', download: 'Télécharger' },
          ja: { close: '閉じる', zoom: 'ズーム', download: 'ダウンロード' },
        },
        scrollToClose: true,
      },
      git: true,
      seo: {
        author: { name: 'Ikimukti', url: 'https://ikimukti.com' },
        autoDescription: true,
        ogp: (ogp, page) => ({
          ...ogp,
          title: page.frontmatter.title || 'Ikimukti.com',
          description: page.frontmatter.description || 'Pusat Pengetahuan untuk Produktivitas Digital.',
          image: `https://ikimukti.com${page.frontmatter.cover || '/favicon-48x48.png'}`,
          url: `https://ikimukti.com${page.path}`,
          site_name: 'Ikimukti.com',
          type: 'website',
        }),
      },
      sitemap: {
        hostname: 'https://ikimukti.com',
        changefreq: 'daily',
      },
    },

    // Fitur Pencarian Lokal
    search: {
      provider: 'local',
      isSearchable: (page: Page) => page.frontmatter.searchable !== false && page.path !== '/404.html',
      locales: searchLocales,
      miniSearch: {
        options: { processTerm: processSearchTerm, tokenize: tokenizeSearchText },
        searchOptions: {
          weights: { fuzzy: 0.1, prefix: 0.2 },
          prefix: true,
          fuzzy: 0.2,
        },
      },
    },

    // Pengaturan Tampilan & UX
    appearance: 'dark',
    copyCode: { locales: copyCodeLocales },
    codeHighlighter: { twoslash: true, lineNumbers: true },
    readingTime: {},
    markdown: {
      pdf: true, plot: true, mermaid: true,
      image: { lazyload: true },
      icon: { provider: 'iconify' },
      table: { copy: true },
      math: { type: 'katex' },
    },
    
    // Sistem Komentar
    comment: {
      provider: 'Giscus',
      repo: 'arbiet/ikimukti_portofolio',
      repoId: 'R_kgDOOvBxBA',
      category: 'General',
      categoryId: 'DIC_kwDOOvBxBM4CtvB4',
      mapping: 'pathname',
    },
  }),

  // --- Plugin VuePress Eksternal ---
  plugins: [
    visualizer({
      filename: 'stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    openGraphPlugin({ host: 'https://ikimukti.com' }),
    pwaPlugin(),
    (pwaPopupPlugin as (options: PwaPopupPluginOptions) => any)({
       locales: pwaPopupLocales,
    }),
    webpackBundler({
      plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })],
    }),
  ],
});