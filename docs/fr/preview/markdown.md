---
title: Markdown Français
createTime: 2025/08/03 23:10:52
permalink: /fr/article/7phxj1n7/
icon: article
cover: /image/cover.png
category:
  - Documentation
  - Guides
  - Tutoriels
  - Bonnes Pratiques
tags:
  - markdown
  - syntaxe
  - formatage
index: true
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Ikimukti"
    email: "info@ikimukti.com"
    url: "https://ikimukti.com"
lang: fr-FR
sticky: true
draft: false
excerpt: "Apprenez les bases de la syntaxe et du formatage Markdown. Avec Markdown, vous pouvez facilement formater votre texte, créer des listes, ajouter des images, et plus encore."
---

## Titre 2

### Titre 3

#### Titre 4

##### Titre 5

###### Titre 6

Gras : **Texte en gras**

Italique : _Texte en italique_

~~Texte supprimé~~

Contenu ==Surligné==

Expression mathématique : $-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^ème^

H~2~O

::: center
contenu centré
:::

::: right
contenu à droite
:::

- Liste non ordonnée 1
- Liste non ordonnée 2
- Liste non ordonnée 3

1. Liste ordonnée 1
2. Liste ordonnée 2
3. Liste ordonnée 3

- [ ] Tâche 1
- [ ] Tâche 2
- [x] Tâche 3
- [x] Tâche 4

| Tableaux      | Sont           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 est     | alignée à droite | $1600 |
| col 2 est     | centrée        |   $12 |
| rayures zébrées | sont sympas   |    $1 |

> contenu de citation
>
> contenu de citation

[liens](/)

[liens externes](https://github.com/pengzhanbo)

**Badge：**

- <Badge type="info" text="badge info" />
- <Badge type="tip" text="badge astuce" />
- <Badge type="warning" text="badge avertissement" />
- <Badge type="danger" text="badge danger" />

**icônes：**

- accueil - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

**démo wrapper：**

::: demo-wrapper title="Démo" no-padding height="200px"
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
  <div class="main">principal</div>
  <div class="aside">aside</div>
</div>

:::

**bloc de code：**

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
          value: 'ce texte est trop long. ce texte est trop long. ce texte est trop long. ce texte est trop long.', // [!code highlight]
        }
      }
    }
  }
}
```

**groupes de code：**

::: code-tabs
@tab onglet1

```js
const a = 1
const b = 2
const c = a + b
```

@tab onglet2

```ts
const a: number = 1
const b: number = 2
const c: number = a + b
```

:::

**mise en évidence du code：**

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

**focus sur le code：**

```ts
function foo() {
  const a = 1 // [!code focus]
}
```

::: note
contenu de note [lien](https://github.com/pengzhanbo) `code en ligne`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: info
contenu info [lien](https://github.com/pengzhanbo) `code en ligne`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: tip
contenu astuce [lien](https://github.com/pengzhanbo) `code en ligne`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: warning
contenu avertissement [lien](https://github.com/pengzhanbo) `code en ligne`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: caution
contenu prudence [lien](https://github.com/pengzhanbo) `code en ligne`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: important
contenu important [lien](https://github.com/pengzhanbo) `code en ligne`

```js
const a = 1
const b = 2
const c = a + b
```

:::

**Alerte GFM：**

> [!note]
> note

> [!info]
> info

> [!tip]
> astuce

> [!warning]
> avertissement

> [!caution]
> prudence

> [!important]
> important

**démo de code:**

:::: demo title="Démo" desc="Une démo normale"

::: code-tabs
@tab HTML

```html
<div id="app">
  <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = 'Tellement génial !'
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

**onglet carte：**

::: tabs
@tab titre 1
bloc de contenu

@tab titre 2
bloc de contenu
:::

:::: warning
::: tabs
@tab titre 1
bloc de contenu

@tab titre 2
bloc de contenu
:::
::::

**note de bas de page：**

lien note de bas de page 1[^first]。

lien note de bas de page 2[^second]。

note de bas de page en ligne ^[^first] définition。

Définition répétée de note de bas de page[^second]。

[^first]: note de bas de page **vous pouvez contenir une marque spéciale**

    peut aussi contenir un paragraphe

[^second]: contenu de la note
