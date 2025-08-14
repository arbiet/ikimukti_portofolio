---
title: Markdown 中文
createTime: 2025/08/03 23:10:52
permalink: /article/7phxj1n7/
icon: article
cover: /image/cover.png
category:
  - 文档
  - 指南
  - 教程
  - 最佳实践
tags:
  - markdown
  - 语法
  - 格式化
  - 新闻
index: true
author:
  - name: "Firmansyah Mukti Wijaya"
    email: "ikimukti@gmail.com"
    url: "https://ikimukti.com"
  - name: "Ikimukti"
    email: "info@ikimukti.com"
    url: "https://ikimukti.com"
lang: zh-CN
sticky: true
draft: false
excerpt: "学习 Markdown 语法和格式化的基础知识。使用 Markdown，您可以轻松格式化文本、创建列表、添加图片等。"
---

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

加粗：**加粗文本**

斜体：_斜体文本_

~~删除文本~~

内容 ==高亮==

数学表达式：$-(2^{n-1})$ ~ $2^{n-1} -1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19^次^

H~2~O

::: center
内容居中
:::

::: right
内容右对齐
:::

- 无序列表 1
- 无序列表 2
- 无序列表 3

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

- [ ] 任务列表 1
- [ ] 任务列表 2
- [x] 任务列表 3
- [x] 任务列表 4

| 表格        | 是           | 很酷  |
| ----------- |:-----------:| -----:|
| 第3列       | 右对齐      | $1600 |
| 第2列       | 居中        |   $12 |
| 斑马条纹    | 很整齐      |    $1 |

> 引用内容
>
> 引用内容

[链接](/)

[外部链接](https://github.com/pengzhanbo)

**徽章：**

- <Badge type="info" text="信息徽章" />
- <Badge type="tip" text="提示徽章" />
- <Badge type="warning" text="警告徽章" />
- <Badge type="danger" text="危险徽章" />

**图标：**

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

**演示包装器：**

::: demo-wrapper title="演示" no-padding height="200px"
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
  <div class="main">主内容</div>
  <div class="aside">侧边栏</div>
</div>

:::

**代码块：**

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
          value: '这是一段很长的文本。这是一段很长的文本。这是一段很长的文本。这是一段很长的文本。', // [!code highlight]
        }
      }
    }
  }
}
```

**代码分组：**

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

**代码高亮：**

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

**代码聚焦：**

```ts
function foo() {
  const a = 1 // [!code focus]
}
```

::: note
注释内容 [链接](https://github.com/pengzhanbo) `内联代码`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: info
信息内容 [链接](https://github.com/pengzhanbo) `内联代码`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: tip
提示内容 [链接](https://github.com/pengzhanbo) `内联代码`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: warning
警告内容 [链接](https://github.com/pengzhanbo) `内联代码`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: caution
注意内容 [链接](https://github.com/pengzhanbo) `内联代码`

```js
const a = 1
const b = 2
const c = a + b
```

:::

::: important
重要内容 [链接](https://github.com/pengzhanbo) `内联代码`

```js
const a = 1
const b = 2
const c = a + b
```

:::

**GFM 警告：**

> [!note]
> 注释

> [!info]
> 信息

> [!tip]
> 提示

> [!warning]
> 警告

> [!caution]
> 注意

> [!important]
> 重要

**代码演示：**

:::: demo title="演示" desc="一个普通的演示"

::: code-tabs
@tab HTML

```html
<div id="app">
  <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = '太棒了！'
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

**标签卡片：**

::: tabs
@tab 标题 1
内容块

@tab 标题 2
内容块
:::

:::: warning
::: tabs
@tab 标题 1
内容块

@tab 标题 2
内容块
:::
::::

**脚注：**

脚注 1 链接[^first]。

脚注 2 链接[^second]。

内联脚注 ^[^first] 定义。

重复脚注定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以包含段落

[^second]: 脚注内容
