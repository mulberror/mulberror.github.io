---
title: "学习记录 | CS61A" #标题
date: 2024-10-15T21:13:15+08:00 #创建时间
lastmod: 2024-10-15T21:13:15+08:00 #更新时间
author: ["Mulberror"] #作者
categories: 
- 学习记录
tags: 
- Python
- 编程基础
description: "本篇文章为笔者学习 CS61A 课程的记录，CS61A 主要是 Python 的入门学习，其中笔者做的是 2022-fall 版本。" #描述
weight: # 输入1可以顶置文章，用来给文章展示排序，不填就默认按时间排序
slug: ""
draft: false # 是否为草稿
comments: false #是否展示评论
showToc: false # 显示目录
TocOpen: false # 自动展开目录
hidemeta: false # 是否隐藏文章的元信息，如发布日期、作者等
disableShare: true # 底部不显示分享栏
showbreadcrumbs: true #顶部显示当前路径
cover:
    image: "" #图片路径：posts/tech/文章1/picture.png
    caption: "" #图片底部描述
    alt: ""
    relative: false
---

## 1 前言
本篇文章主要记录的就是笔者在学习 CS61A 的一些心得和一些想法，做的是 2024 Fall 的版本，笔者的编写的作业和相关资料都在笔者的 [github repo](https://github.com/mulberror/CS61A) 中，包括了没有修改的作业之类的。

课程官网：[CS61A](https://cs61a.org/) 

课程教材：[Composing Program](https://www.composingprograms.com/) [教材翻译](https://composingprograms.netlify.app/)

笔者作业实现：[github repo](https://github.com/mulberror/CS61A)

## 2 Lab00 Getting Started
Lab00 的作用主要就是做给后面的 Lab 作业做一个铺垫，稍微简单的说一下 lab 的情况。

一个 lab 通常由多个问题组成，也就是根据作业给出的代码框架，然后进行补全。

在编写代码之前都需要先进行一个问题的解答，比如说需要解答 xxx 问题，那么你就需要到对应 lab 的目录下，然后输入以下命令：

```bash
python3 ok -q xxx -u
```

然后回答给出的相关问题，回答问题的目的是保证你在编写代码之前能够明确题目的要求，并且根据题意进行一定深度的思考。

题目的类型一般分为三种类型：
- 回答函数或者接口的功能和一些基本概念。
- 给出输入的参数，回答函数返回的值。
- 其他问题。

在回答完所有的问题后，你就解锁了本道题目的所有测试样例（主要并不是本 Lab 的所有测试样例），在每一次解决题目前都需要进行这样的操作。再说一句，lab 和 hw 的测试样例普遍偏少（甚至只会有代码框架中给出的样例），但是 CS61A 的各 proj 的样例非常齐全。

需要在终端输入以下命令，进行测试样例的测试：

```bash
python3 ok -q xxx
```

如果所有题目都编写完成，可以输入 `python3 ok` 对所有题目进行测试，以防止自己有题目漏测。

还有一些好用的命令，对于 `lab00.py` 来说，可以在终端输入：

```bash
python3 -i lab00.py
```

然后进入到 python 的运行界面中，然后输入对应的函数进行测试，在后面编写 proj 的时候会给程序在何种的测试数据下，何处产生了何种错误。