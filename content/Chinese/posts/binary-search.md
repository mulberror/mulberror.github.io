---
title: "算法 二分与三分" #标题
date: 2024-08-12T18:09:10+08:00 #创建时间
lastmod: 2024-08-12T18:09:10+08:00 #更新时间
author: ["Mulberror"] #作者
categories: 
- 算法
tags: 
- 二分搜索
- 三分搜索
description: "二分搜索是非常基础且实用的算法，将求解问题变成验证问题，用较小的时间换取方便的解法，这样的转换思维是解决问题的常用方法。" #描述
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
    relative: true
---
## 1 关于二分和三分
### 1.1 二分
二分是一个经常使用到的算法，该算法的作用就是将问题的求解变成问题的验证，一半可以大幅度降低问题的难度。

能够使用二分进行求解的问题一般满足单调性的特点，最简单的例子就是求解一个单调递增序列中第一个大于某一个数的位置。

一般二分最常见的写法如下图所示，引入一个维护变量 `ans` 来记录求解过程中的合法答案，然后直接舍弃 `mid` 值，这样就不需要考虑边界问题。

```cpp
int lo = 1, hi = n, ans = 1;
while (lo <= hi) {
    int mid = (lo + hi) / 2;
    if (a[mid] > x) {
        ans = mid;
        hi = mid - 1;
    } else {
        lo = mid + 1;
    }
}
```

### 1.2 三分
三分是求解单峰函数问题的算法。

假设我们需要求解一个先递增后递减函数 $f(x)$ 的最大值，答案在区间 $[l,r]$ 内，那么找到该区间的两个三等分点 `p` 和 `q`（其中 `p` 在 `q` 的左侧）。

如果 $f(p)<f(q)$ 那么就说明答案在区间 $[p,r]$ 内，否则就说明答案在区间 $[l,q]$ 内。

因为三分每次将答案区间缩小至原先的$\frac{2}{3}$，所以总共的迭代次数约为 $\Theta(2 \log_{3}n)$。

以下为三分的参考写法，对于浮点精度的控制有两种做法：

1. 设定 `eps` 作为浮点的最小误差值进行控制。
2. 固定迭代次数，应控制在比 $\log T$ 大一点（$T$ 就是答案的范围大小）。

```cpp
constexpr double eps = 1e-6;

double lo = 0, hi = n;
while (lo + eps < hi) {
    double p = lo + (hi - lo) / 3;
    double q = hi - (hi - lo) / 3;
    if (f(p) < f(q)) {
        lo = p;
    } else {
        hi = q;
    }
}
```

## 2 例题
### 2.1 愤怒的牛
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

### 2.2 最好的牛围栏
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

### 2.3 曲线
题目连接：[Reach-Top](https://www.reach-top.cn/problem.php?id=2266)

求取若干个函数最大值的最小值，可以考虑直接二分答案 $ans$，然后计算出该函数在 $[1,1000]$ 中满足条件的区间。

然后判断所有区间是否有交集即可。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
const double eps = 1e-6;
 
int n;
int a[N], b[N], c[N];
 
bool check(double k) {
    double l = 0, r = 1000;
    for (int i = 1; i <= n; i++) {
        double ll, rr;
        if (a[i] == 0) {
            if (b[i] > 0) {
                ll = 0;
                rr = (k - c[i]) / b[i];
            } else if (b[i] == 0) {
                if (c[i] > k) {
                    ll = 1000;
                    rr = 0;
                } else {
                    ll = 0;
                    rr = 1000;
                }
            } else {
                ll = (k - c[i]) / b[i];
                rr = 1000;
            }
        } else {
            double delta = b[i] * b[i] - 4 * a[i] * (c[i] - k);
            if (delta < 0) {
                return false;
            }
            delta = sqrt(delta);
            ll = (-b[i] - delta) / (2 * a[i]);
            rr = (-b[i] + delta) / (2 * a[i]);
        }
        l = max(l, ll);
        r = min(r, rr);
        if (l > r) {
            return false;
        }
    }
    return true;
}
 
void solve() {
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        scanf("%d%d%d", &a[i], &b[i], &c[i]);
    } 
    double ans = 0;
    for (double lo = -1e9, hi = 1e9; lo + eps < hi; ) {
        double mid = (lo + hi) / 2;
        if (check(mid)) {
            ans = mid;
            hi = mid;
        } else {
            lo = mid;
        }
    }
    printf("%.4lf\n", ans);
}
 
int main() {
    int tt;
    scanf("%d", &tt);
    while (tt--) {
        solve();
    }
}
```

### 2.4 数列分段 II
[题目连接](https://www.reach-top.cn/problem.php?id=2267)

比较经典的二分的题目，考虑直接二分答案，然后贪心划分即可。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
 
int n, m;
int a[N];
 
bool check(int sum) {
    int now_sum = 0, cnt = 1;
    for (int i = 1; i <= n; i++) {
        if (a[i] + now_sum <= sum) {
            now_sum += a[i];
        } else {
            if (a[i] > sum) {
                return false;
            }
            cnt++;
            now_sum = a[i];
        }
    }
    return cnt <= m;
}
 
int main() {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; i++) {
        scanf("%d", &a[i]);
    }
    int ans = 0;
    for (int lo = 0, hi = 1e9; lo <= hi; ) {
        int mid = (lo + hi) / 2;
        if (check(mid)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    cout << ans << "\n";
}
```

### 2.5 扩散
[题目连接](https://www.reach-top.cn/problem.php?id=2268)

这道题目也满足二分的性质，可以考虑直接二分时间 $t$。

两个点在 $t$ 时间能够连通的，就需要计算两个点的曼哈顿距离是否大于 $2\times t$。

计算完每个点对之间的连通关系，就可以用并查集查询目标点对之间的连通性了。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
 
int n;
int x[N], y[N];
int fa[N];
 
int get(int x) {
    return fa[x] == x ? fa[x] : fa[x] = get(fa[x]);
}
 
bool check(int ds) {
    for (int i = 1; i <= n; i++) {
        fa[i] = i;
    }
    int cnt = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = i + 1; j <= n; j++) {
            if (ds * 2 >= abs(x[i] - x[j]) + abs(y[i] - y[j])) {
                if (get(i) != get(j)) {
                    fa[get(i)] = get(j);
                    cnt++;
                }
            }
        }
    }
    return cnt == n - 1;
}
 
int main() {
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        scanf("%d%d", &x[i], &y[i]);
    }
    int lo = 0, hi = 1e9, ans = 0;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (check(mid)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    cout << ans << "\n";
}
```

### 2.6 灯泡
较为明显的一个可以三分的题目，直接三分枚举一下人到墙壁的距离 $x$，然后计算影子的长度。

将墙角作为坐标系原点进行计算会方便一点。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
const double eps = 1e-6;
 
double H, h, D;
 
double calc(double x) {
    double k = (H - h) / (D - x);
    double b = h - k * x;
 
    double zy = b;
    double zx = -b / k;
 
    return x - max(zx, 0.0) + max(0.0, zy);
}
 
int main() {
    int tc;
    std::cin >> tc;
    while (tc--) {
        std::cin >> H >> h >> D;
 
        double lo = 0, hi = D;
        while (lo + eps < hi) {
            double l = lo + (hi - lo) / 3;
            double r = hi - (hi - lo) / 3;
            if (calc(l) < calc(r)) {
                lo = l;
            } else {
                hi = r;
            }
        }
 
        printf("%.3lf\n", calc(lo));
    }
}
```

### 2.7 传送带
[题目连接](https://www.reach-top.cn/problem.php?id=2270)

本题就是找到两个点使得三条线段上的行驶时间最少，那么假设固定一个点，另外一个点在线上动，这个时间显然是满足三分性质的。

那么我们就可以大胆猜测另外一个点动的情况下也满足三分性质，写一个三分套三分就可以了。

```cpp
#include <bits/stdc++.h>
 
using namespace std;
 
const int N = 1e5 + 5;
const double eps = 1e-6;
 
double ax, ay, bx, by, cx, cy, dx, dy;
double p, q, r;
 
double dist(double x0, double y0, double x1, double y1) {
    return sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
}
 
double cal(double sx, double sy, double k) {
    double x = k * (dx - cx) + cx, y = k * (dy - cy) + cy;
    return dist(x, y, dx, dy) / q + dist(x, y, sx, sy) / r;
}
 
double calc(double k) {
    double x = k * (bx - ax) + ax, y = k * (by - ay) + ay;
    double lo = 0.0, hi = 1.0;
    while (lo + eps < hi) {
        double l = lo + (hi - lo) / 3, r = hi - (hi - lo) / 3;
        if (cal(x, y, l) < cal(x, y, r)) {
            hi = r;
        } else {
            lo = l;
        }
    }
    return dist(ax, ay, x, y) / p + cal(x, y, lo);
}
 
int main() {
    cin >> ax >> ay >> bx >> by >> cx >> cy >> dx >> dy;
    cin >> p >> q >> r;
 
    double lo = 0.0, hi = 1.0;
    while (lo + eps < hi) {
        double l = lo + (hi - lo) / 3, r = hi - (hi - lo) / 3;
        if (calc(l) < calc(r)) {
            hi = r;
        } else {
            lo = l;
        }
    }
 
    cout << fixed << setprecision(2);
    cout << calc(lo) << "\n";
}
```