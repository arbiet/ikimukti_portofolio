---
title: Markdown Deutsch
createTime: 2025/08/03 23:10:52
permalink: /de/article/7phxj1n7/
icon: article
cover: /image/cover.png
category:
  - Dokumentation
  - Anleitungen
  - Tutorials
  - Best Practices
tags:
  - markdown
  - syntax
  - formatierung
  - nieuws
index: true
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Ikimukti"
    email: "info@ikimukti.com"
    url: "https://ikimukti.com"
lang: de-DE
sticky: true
draft: false
excerpt: "Lerne die Grundlagen der Markdown-Syntax und -Formatierung. Mit Markdown kannst du ganz einfach deinen Text formatieren, Listen erstellen, Bilder hinzufügen und mehr."
---

## Überschrift 2

### Überschrift 3

#### Überschrift 4

##### Überschrift 5

###### Überschrift 6

Fett: **Fetter Text**

Kursiv: _Kursiver Text_

~~Gelöschter Text~~

Inhalt ==Hervorheben==

Mathematischer Ausdruck: $-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^te^

H~2~O

::: center
zentrierter Inhalt
:::

::: right
rechter Inhalt
:::

- Ungeordnete Liste 1
- Ungeordnete Liste 2
- Ungeordnete Liste 3

1. Geordnete Liste 1
2. Geordnete Liste 2
3. Geordnete Liste 3

- [ ] Aufgabenliste 1
- [ ] Aufgabenliste 2
- [x] Aufgabenliste 3
- [x] Aufgabenliste 4

| Tabellen       | Sind           | Cool  |
| -------------- |:--------------:| -----:|
| Spalte 3 ist   | rechtsbündig   | $1600 |
| Spalte 2 ist   | zentriert      |   $12 |
| Zebra-Streifen | sind schick    |    $1 |

> Zitat-Inhalt
>
> Zitat-Inhalt

[Links](/)

[Externe Links](https://github.com/pengzhanbo)

**Abzeichen：**

- <Badge type="info" text="Info-Abzeichen" />
- <Badge type="tip" text="Tipp-Abzeichen" />
- <Badge type="warning" text="Warnung-Abzeichen" />
- <Badge type="danger" text="Gefahr-Abzeichen" />

**Icons：**

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

**Demo-Wrapper：**

::: demo-wrapper title="Demo" no-padding height="200px"
<style scoped>
.open-door {
  display: flex;
  gap: 20px;
  padding: 20px;
}
.open-door .main {
  background: #ccc;
}
</style>

<div class="open-door">
  <div class="main">Hauptbereich</div>
  <div class="aside">Seitenbereich</div>
</div>

:::

**Codeblock：**

```js whitespace
const a = 1
const b = 2
const c = a + b

// [!code word:obj]
const obj = {
  toLong: {
    deep: {
      deep: {
        deep: {
          value: 'Dies ist ein sehr langer Text. Dies ist ein sehr langer Text. Dies ist ein sehr langer Text. Dies ist ein sehr langer Text.', // [!code highlight]
        }
      }
    }
  }
}
```

**Code-Gruppen：**

::: code-tabs
@tab Tab1

```js
const a = 1
const b = 2
const c = a + b
```

@tab Tab2

```ts
const a: number = 1
const b: number = 2
const c: number = a + b
```

:::

**Code-Hervorhebung：**

```ts
function foo() {
  const a = 1 // [!code highlight]

  console.log(a)

  const b = 2 // [!code ++]
  const c = 3 // [!code --]

  console.log(a + b + c) // [!code error]
  console.log(a + b) // [!code warning]
}
```

**Code-Fokus：**

```ts
function foo() {
  const a = 1 // [!code focus]
}
```

::: note
Hinweis-Inhalt [Link](https://github.com/pengzhanbo) `Inline-Code`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: info
Inhalt [Link](https://github.com/pengzhanbo) `Inline-Code`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: tip
Inhalt [Link](https://github.com/pengzhanbo) `Inline-Code`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: warning
Inhalt [Link](https://github.com/pengzhanbo) `Inline-Code`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: caution
Inhalt [Link](https://github.com/pengzhanbo) `Inline-Code`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: important
Inhalt [Link](https://github.com/pengzhanbo) `Inline-Code`

```js
const a = 1
const b = 2
const c = a + b
```

:::

**GFM-Hinweis：**

> [!note]
> Hinweis

> [!info]
> Info

> [!tip]
> Tipp

> [!warning]
> Warnung

> [!caution]
> Vorsicht

> [!important]
> Wichtig

**Code-Demo:**

:::: demo title="Demo" desc="Eine normale Demo"

::: code-tabs
@tab HTML

```html
<div id="app">
  <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = 'So großartig!'
const app = document.querySelector('#app')
app.appendChild(window.document.createElement('small')).textContent = a
```

@tab CSS

```css
#app {
  font-size: 2em;
  text-align: center;
}
```

:::
::::

**Tab-Karte：**

::: tabs
@tab Titel 1
Inhaltsblock

@tab Titel 2
Inhaltsblock
:::

:::: warning
::: tabs
@tab Titel 1
Inhaltsblock

@tab Titel 2
Inhaltsblock
:::
::::

**Fußnote：**

Fußnote 1 Link[^first]。

Fußnote 2 Link[^second]。

Inline-Fußnote ^[^first] Definition。

Wiederholte Fußnotendefinition[^second]。

[^first]: Fußnote **du kannst spezielle Markierungen enthalten**

    kann auch einen Absatz enthalten

[^second]: Fußnote Inhalt.
