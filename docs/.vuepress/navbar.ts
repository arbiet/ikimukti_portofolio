/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/notes/demo/README.md' }]
  },
])

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/zh/' },
  { text: '博客', link: '/zh/blog/' },
  { text: '标签', link: '/zh/blog/tags/' },
  { text: '归档', link: '/zh/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/zh/notes/demo/README.md' }]
  },
])

export const idNavbar = defineNavbarConfig([
  { text: 'Beranda', link: '/id/' },
  { text: 'Blog', link: '/id/blog/' },
  { text: 'Tag', link: '/id/blog/tags/' },
  { text: 'Arsip', link: '/id/blog/archives/' },
  {
    text: 'Catatan',
    items: [{ text: 'Contoh', link: '/id/notes/demo/README.md' }]
  },
])

export const deNavbar = defineNavbarConfig([
  { text: 'Startseite', link: '/de/' },
  { text: 'Blog', link: '/de/blog/' },
  { text: 'Tags', link: '/de/blog/tags/' },
  { text: 'Archive', link: '/de/blog/archives/' },
  {
    text: 'Notizen',
    items: [{ text: 'Demo', link: '/de/notes/demo/README.md' }]
  },
])

export const ruNavbar = defineNavbarConfig([
  { text: 'Главная', link: '/ru/' },
  { text: 'Блог', link: '/ru/blog/' },
  { text: 'Теги', link: '/ru/blog/tags/' },
  { text: 'Архив', link: '/ru/blog/archives/' },
  {
    text: 'Заметки',
    items: [{ text: 'Демо', link: '/ru/notes/demo/README.md' }]
  },
])

export const frNavbar = defineNavbarConfig([
  { text: 'Accueil', link: '/fr/' },
  { text: 'Blog', link: '/fr/blog/' },
  { text: 'Tags', link: '/fr/blog/tags/' },
  { text: 'Archives', link: '/fr/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Démo', link: '/fr/notes/demo/README.md' }]
  },
])

export const jaNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/ja/' },
  { text: 'ブログ', link: '/ja/blog/' },
  { text: 'タグ', link: '/ja/blog/tags/' },
  { text: 'アーカイブ', link: '/ja/blog/archives/' },
  {
    text: 'ノート',
    items: [{ text: 'デモ', link: '/ja/notes/demo/README.md' }]
  },
])
