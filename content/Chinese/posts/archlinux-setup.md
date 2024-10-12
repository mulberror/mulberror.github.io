---
title: "安装 Linux manjaro" #标题
date: 2024-08-28T23:42:37+08:00 #创建时间
lastmod: 2024-08-28T23:42:37+08:00 #更新时间
author: ["Mulberror"] #作者
categories: 
- 
tags: 
- Manjaro
- Linux
description: "" #描述
weight: # 输入1可以顶置文章，用来给文章展示排序，不填就默认按时间排序
slug: ""
draft: false # 是否为草稿
comments: false #是否展示评论
showToc: true # 显示目录
TocOpen: true # 自动展开目录
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
暑假的时候在家里回收了家长五年前买的 LG gram 轻薄本和海尔 mini 主机，本篇文章记录一下在 LG gram 上重装 Manjaro 系统的过程。

## 换源并更新
```bash
sudo pacman-mirrors -g #尝试所有的源
```
```bash
sudo pacman -Syyu 
```

## 软件安装
### Vscode
```bash
yay -Sy visual-studio-code-bin
```

## 安装 Hyprland

```bash
sudo pacman -S kitty

```

## 参考
- [Manjaro-KDE安装配置全攻略](https://zhuanlan.zhihu.com/p/114296129)