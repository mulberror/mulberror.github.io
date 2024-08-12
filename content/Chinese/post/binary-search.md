---
title: "算法 | 二分与三分" #标题
date: 2024-08-12T18:09:10+08:00 #创建时间
lastmod: 2024-08-12T18:09:10+08:00 #更新时间
author: ["Mulberror"] #作者
categories: 
- 算法
tags: 
- 二分搜索
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

## A. 愤怒的牛
题目连接：[Reach-Top](https://www.reach-top.cn/problem.php?id=2264)

考虑二分两只牛之间的最小距离，然后用贪心放置牛的位置。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
 
int n, m;
int a[N];
 
bool check(int len) {
    int cnt = 1, last = a[1];
    for (int i = 2; i <= n; i++) {
        if (a[i] - last >= len) {
            cnt++;
            last = a[i];
        }
    }
    return cnt >= m;
}
 
int main() {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; i++) {
        scanf("%d", &a[i]);
    }
    sort(a + 1, a + 1 + n);
    int low = 0, high = 1e9, ans = 1e9;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (check(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    printf("%d\n", ans);
}
```

## B. 最好的牛围栏
题目连接：[Reach-Top](https://www.reach-top.cn/problem.php?id=2265)

考虑二分平均数，将所有数都减去该平均数，那么限制条件就变成了：

$$
\sum_{k=l}^{r}(a_i-ave)\geq 0
$$

用前缀和优化后就可以发现我们只关心前缀和的前缀最小值，可以用 $O(n)$ 的时间完成 check。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
const double eps = 1e-6;
 
int n, m;
int a[N];
double sum[N];
 
bool check(double k) {
    sum[0] = 0;
    for (int i = 1; i <= n; i++) {
        sum[i] = a[i] - k;
        sum[i] += sum[i - 1];
    }
    double fmin = 1e9;
    for (int i = 1; i <= n; i++) {
        if (i >= m) {
            fmin = min(fmin, sum[i - m]);
        }
        if (sum[i] - fmin >= 0) {
            return true;
        }
    }
    return false;
}
 
int main() {
    std::ios::sync_with_stdio(false);
    std::cout << std::fixed << setprecision(5);
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; i++) {
        scanf("%d", &a[i]);
    }
    double ans = 0;
    for (double lo = 0, hi = 2e3; lo + eps < hi; ) {
        double mid = (lo + hi) / 2;
        if (check(mid)) {
            lo = mid;
            ans = mid;
        } else {
            hi = mid;
        }
    }
    printf("%d\n", int(ans * 1000 + 0.5));
}
```