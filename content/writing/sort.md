---
title: 排序
description: "排序"
date: 2024-11-13
created: 2024-11-13 21:35:15
modified: 2024-11-13 23:51:43
author: zy
tags:
  - test
category: 
aliases: 
stick: false
---

# 排序

<img src="/posts/test.awebp" alt="排序对比" style="zoom:100%;" />
<img src="/images/avatar.png" alt="排序对比" />

> * n: 数据规模. k: 桶的个数. In-place: 占用常数内存, 不占用额外内存. Out-place: 占用额外的内存.
>
> * 稳定性
>
>   如果 a 原本在 b 前面, 且 a=b. 排序后 a 仍然在 b 前面. 即为稳定
>
>   ​								  a 有可能出现在 b 后面. 即为不稳定
>
> * 内排序: 所有操作在内存中完成.
>
> * 外排序: 数据放在磁盘中, 排序通过磁盘和内存的数据交互进行.

## 冒泡排序 Bubble Sort

> 1. 从头开始比较每一对相邻的元素 -> 执行完成一轮后, 最末尾的元素就是本轮中最大的元素
> 2. 忽略 (1) 中找到的最大元素, 重复执行, 直到元素全部有序.

<img src="/posts/test3.awebp" alt="img" style="zoom: 67%;" />

```ts
function bubbleSort(arr: number[]): number[] {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort(arr))
```

### 优化

> 添加标志位, 每次外层循环前重置为`true`, 内层循环又发生位置交换时, 置为`false`.
>
> 如果内层循环没有任何交换发生 -> 排序完成.

```ts
function bubbleSort2(arr: number[]): number[] {
    let done: boolean
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        done = true
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                done = false
            }
        }
        if (done) return arr
    }
    return arr
}

const arr2 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(bubbleSort2(arr2))
```

## 选择排序 Selection Sort

<img src="/posts/test1.awebp" alt="img" style="zoom:67%;" />

```ts
function selectionSotr(arr: number[]): number[] {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

const arr3 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(selectionSotr(arr3))
```

## 插入排序 Insertion Sort

<img src="/posts/test2.awebp" alt="img" style="zoom:67%;" />

```ts
function insertionSort(arr: number[]): number[] {
    for (let i = 1, len = arr.length; i < len; i++) {
        let preIndex = i - 1
        const current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex -= 1
        }
        arr[preIndex + 1] = current
    }
    return arr
}

const arr4 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertionSort(arr4))
```

## 快速排序 Quick Sort

> 1. 选择一个基准元素 target (一般为首项)
> 2. 将小于 target 的所有元素放到左边, 大于 target 的元素放到右边
> 3. 递归 重复

<img src="/posts/test4.awebp" alt="image.png" style="zoom: 50%;" />

```ts
function quickSort(arr: number[]): number[] {
    if (arr.length < 2) return arr
    const target = arr[0]
    const left = [], right = []
    for (let i = 1, len = arr.length; i < len; i++) {
        arr[i] > target ? right.push(arr[i]) : left.push(arr[i])
    }
    return quickSort(left).concat(target, quickSort(right))
}

const arr4 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(quickSort(arr4))
```

## 堆排序
