# Markdown 样式测试文档

> 本文档用于测试 Markdown 渲染器是否支持常见的 Markdown 特性。

---

## 📌 目录

* [标题](#标题)
* [文本样式](#文本样式)
* [列表](#列表)
* [链接与图片](#链接与图片)
* [引用与代码](#引用与代码)
* [表格](#表格)
* [任务列表](#任务列表)
* [数学公式](#数学公式)
* [折叠内容](#折叠内容)
* [HTML 测试](#html-测试)

---

## 标题

# H1 标题

## H2 标题

### H3 标题

#### H4 标题

##### H5 标题

###### H6 标题

---

## 文本样式

- **加粗**
- *斜体*
- ***加粗斜体***
- ~~删除线~~
- <u typography-underline>下划线（HTML）</u>
- `行内代码` 风
- 正常段落文字：这是一段用于测试段落样式的文本。包含多个句子，用于模拟实际使用情况。

---

## 列表

### 有序列表

1. 第一项
2. 第二项
    1. 子项 2.1
    2. 子项 2.2

### 无序列表

- 项目 A
- 项目 B
    - 子项目 B.1
    - 子项目 B.2

---

## 链接与图片

### 超链接

- [百度](https://www.baidu.com)
- <https://www.example.com>

### 图片

![Markdown Logo](https://markdown-here.com/img/icon256.png)

---

## 引用与代码

### 引用块

> 这是一段引用文字。
>
> 可以包含多行内容。

### 代码块

#### 单行代码

使用 `console.log("Hello, Markdown!")` 输出内容。

#### 多行代码

代码`console.log("Hello, Markdown!")`
```js
// JavaScript 示例
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Markdown');
```
代码`console.log("Hello, Markdown!")`

---

## 表格

| 姓名   | 年龄 | 城市     |
|--------|------|----------|
| 张三   | 28   | 北京     |
| 李四   | 32   | 上海     |
| 王五   | 25   | 广州     |

---

## 任务列表

- [x] 支持粗体/斜体/删除线
- [x] 渲染表格
- [ ] 集成数学公式
- [x] 支持代码高亮

---

## 数学公式

> 需支持 MathJax / KaTeX 渲染的 Markdown 工具才可正常显示

行内公式：$E = mc^2$

块级公式：

$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$

---

## 折叠内容

<details>
  <summary>点击展开隐藏内容</summary>

这是一些折叠内容，可以用于 FAQ、代码说明或额外信息展示。

</details>

---

## HTML 测试

<div style="color: red; font-weight: bold;">
  这是一些带样式的 HTML 内容。
</div>

<input type="checkbox" checked> 这是一个 HTML checkbox

---

> 📄 *测试完毕，请检查你所使用的 Markdown 工具是否正确支持以上所有元素。*
