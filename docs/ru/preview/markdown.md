---
title: Markdown
createTime: 2025/08/03 23:10:52
permalink: /ru/article/7phxj1n7/
icon: article
cover: /image/cover.png
category:
  - Документация
  - Руководства
  - Туториалы
  - Лучшие практики
tags:
  - markdown
  - синтаксис
  - форматирование
index: true
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Ikimukti"
    email: "info@ikimukti.com"
    url: "https://ikimukti.com"
lang: ru-RU
sticky: true
draft: false
excerpt: "Изучите основы синтаксиса и форматирования Markdown. С помощью Markdown вы легко можете форматировать текст, создавать списки, добавлять изображения и многое другое."
---

## Заголовок 2

### Заголовок 3

#### Заголовок 4

##### Заголовок 5

###### Заголовок 6

Жирный: **Жирный текст**

Курсив: _Курсивный текст_

~~Удалённый текст~~

Контент ==Выделение==

Математическое выражение: $-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^-ый^

H~2~O

::: center
контент по центру
:::

::: right
контент справа
:::

- Неупорядоченный список 1
- Неупорядоченный список 2
- Неупорядоченный список 3

1. Упорядоченный список 1
2. Упорядоченный список 2
3. Упорядоченный список 3

- [ ] Задача 1
- [ ] Задача 2
- [x] Задача 3
- [x] Задача 4

| Таблицы      | Это           | Круто  |
| ------------ |:-------------:| ------:|
| col 3        | по правому краю| $1600  |
| col 2        | по центру      |   $12  |
| зебра        | это классно    |    $1  |

> цитата
>
> цитата

[ссылки](/)

[внешние ссылки](https://github.com/pengzhanbo)

**Бейджи：**

- <Badge type="info" text="информационный бейдж" />
- <Badge type="tip" text="совет" />
- <Badge type="warning" text="предупреждение" />
- <Badge type="danger" text="опасность" />

**иконки：**

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

**демо-обёртка：**

::: demo-wrapper title="Демо" no-padding height="200px"
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
  <div class="main">основной</div>
  <div class="aside">боковая</div>
</div>

:::

**блок кода：**

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
          value: 'это очень длинный текст. это очень длинный текст. это очень длинный текст. это очень длинный текст.', // [!code highlight]
        }
      }
    }
  }
}
```

**группы кода：**

::: code-tabs
@tab tab1

```js
const a = 1
const b = 2
const c = a + b
```

@tab tab2

```ts
const a: number = 1
const b: number = 2
const c: number = a + b
```

:::

**подсветка кода：**

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

**фокус кода：**

```ts
function foo() {
  const a = 1 // [!code focus]
}
```

::: note
заметка [ссылка](https://github.com/pengzhanbo) `встроенный код`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: info
информация [ссылка](https://github.com/pengzhanbo) `встроенный код`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: tip
совет [ссылка](https://github.com/pengzhanbo) `встроенный код`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: warning
предупреждение [ссылка](https://github.com/pengzhanbo) `встроенный код`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: caution
предостережение [ссылка](https://github.com/pengzhanbo) `встроенный код`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: important
важно [ссылка](https://github.com/pengzhanbo) `встроенный код`

```js
const a = 1
const b = 2
const c = a + b
```

:::

**GFM оповещения：**

> [!note]
> заметка

> [!info]
> информация

> [!tip]
> совет

> [!warning]
> предупреждение

> [!caution]
> предостережение

> [!important]
> важно

**демо кода:**

:::: demo title="Демо" desc="Обычный пример"

::: code-tabs
@tab HTML

```html
<div id="app">
  <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = 'Очень круто!'
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

**карточки вкладок：**

::: tabs
@tab заголовок 1
контент блока

@tab заголовок 2
контент блока
:::

:::: warning
::: tabs
@tab заголовок 1
контент блока

@tab заголовок 2
контент блока
:::
::::

**сноски：**

сноска 1 ссылка[^first]。

сноска 2 ссылка[^second]。

встроенная сноска ^[^first] определение。

Повторное определение сноски[^second]。

[^first]: сноска **может содержать спец. разметку**

    также может содержать параграф

[^second]: содержимое сноски.
