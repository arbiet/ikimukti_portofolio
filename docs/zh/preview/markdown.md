---
title: Markdown 日本語
tags:
  - markdown
createTime: 2025/08/03 23:10:52
permalink: /zh/article/sprilind/
---

## 見出しH2

### 見出しH3

#### 見出しH4

##### 見出しH5

###### 見出しH6

## 見出し2 バッジ <Badge type="tip" text="バッジ" />

### 見出し3 バッジ <Badge type="warning" text="バッジ" />

#### 見出し4 バッジ <Badge type="danger" text="バッジ" />

本文内容。

`@property` CSS at-ruleは [CSS Houdini API](https://developer.mozilla.org/ja/docs/Web/Guide/Houdini)
の一部であり、開発者が [CSSカスタムプロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/--*)
を明示的に定義でき、型チェック、デフォルト値の設定、継承可否の指定が可能です。

`@property` の登場により、CSSの機能が大幅に強化されました。

太字：**太字テキスト**

斜体： _斜体テキスト_

~~取り消し線テキスト~~

内容 ==マーク==

数式表現： $-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^番目^

H~2~O

::: center
中央揃えの内容
:::

::: right
右揃えの内容
:::

- 箇条書き1
- 箇条書き2
- 箇条書き3

1. 番号付きリスト1
2. 番号付きリスト2
3. 番号付きリスト3

- [ ] タスクリスト1
- [ ] タスクリスト2
- [x] タスクリスト3
- [x] タスクリスト4

| テーブル        | は           | クール  |
| ------------- |:-------------:| -----:|
| col 3は      | 右寄せ        | $1600 |
| col 2は      | 中央揃え      |   $12 |
| ゼブラストライプ | すごい      |    $1 |

> 引用内容
>
> 引用内容

[リンク](/)

[外部リンク](https://github.com/pengzhanbo)

![plume](/plume.svg)

**バッジ：**

- <Badge type="info" text="infoバッジ" />
- <Badge type="tip" text="tipバッジ" />
- <Badge type="warning" text="warningバッジ" />
- <Badge type="danger" text="dangerバッジ" />

**アイコン：**

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

**デモラッパー：**

::: demo-wrapper title="サンプル" no-padding height="200px"
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
  <div class="main">メイン</div>
  <div class="aside">サイド</div>
</div>

:::

**コード：**

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
          value: 'これはとても長いテキストです。これはとても長いテキストです。これはとても長いテキストです。これはとても長いテキストです。', // [!code highlight]
        }
      }
    }
  }
}
```

**コードブロック TwoSlash：**

```ts twoslash
// @errors: 2339
const welcome = 'Tudo bem gente?'
const words = welcome.contains(' ')
```

```ts twoslash
import express from 'express'
const app = express()
app.get('/', (req, res) => {
  res.send
})
app.listen(3000)
```

```ts twoslash
import { createHighlighter } from 'shiki'

const highlighter = await createHighlighter({ themes: ['nord'], langs: ['javascript'] })
// @log: カスタムログメッセージ
const a = 1
// @error: カスタムエラーメッセージ
const b = 1
// @warn: カスタム警告メッセージ
const c = 1
// @annotate: カスタム注釈メッセージ
```

```ts twoslash
// @errors: 2540
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'.toUpperCase(),
//  ^?
}

todo.title = 'Hello'

Number.parseInt('123', 10)
//      ^|

//
//
```

```vue twoslash
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>{{ count }}</p>
</template>
```

**コードグループ：**

::: code-tabs
@tab タブ1

```js
const a = 1
const b = 2
const c = a + b
```

@tab タブ2

```ts
const a: number = 1
const b: number = 2
const c: number = a + b
```

:::

**コードブロックハイライト：**

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

**コードブロックフォーカス：**

```ts
function foo() {
  const a = 1 // [!code focus]
}
```

::: tip タイトルのみ
:::

::: note 注釈
注釈内容 [link](https://github.com/pengzhanbo) `インラインコード`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: info 情報
情報内容 [link](https://github.com/pengzhanbo) `インラインコード`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: tip ヒント
ヒント内容 [link](https://github.com/pengzhanbo) `インラインコード`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: warning 警告
警告内容 [link](https://github.com/pengzhanbo) `インラインコード`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: caution エラー
エラー内容 [link](https://github.com/pengzhanbo) `インラインコード`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: important 重要
重要内容 [link](https://github.com/pengzhanbo) `インラインコード`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: details 詳細タイトル

ここに内容があります。
:::

**GFMアラート：**

> [!note]
> ノート

> [!info]
> 情報

> [!tip]
> ヒント

> [!warning]
> 警告

> [!caution]
> 注意

> [!important]
> 重要

**コードデモ：**

:::: demo title="一般的なサンプル" desc="一般的なサンプルです"

::: code-tabs
@tab HTML

```html
<div id="app">
  <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = 'とても素晴らしい！'
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

**タブ：**

::: tabs
@tab タイトル1
内容ブロック

@tab タイトル2
内容ブロック
:::

:::: warning
::: tabs
@tab タイトル1
内容ブロック

@tab タイトル2
内容ブロック
:::
::::

**脚注：**

脚注1リンク[^first]。

脚注2リンク[^second]。

インライン脚注^[インライン脚注テキスト] の定義。

重複した脚注定義[^second]。

[^first]: 脚注 **には特別なマークを含めることができます**

    複数の段落で構成することもできます

[^second]: 脚注文字。
