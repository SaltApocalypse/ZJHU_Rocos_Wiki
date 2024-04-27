---
title: 数据类型相关
description: 常用数据类型介绍。
author: umbrella
---

::: warning 面向维护人员
本页仍存在不完善之处，已用`TODO`标记。
- 几个地方 cpp 没加进去 - SaltA 240426
- 又发现几个地方 lua 没加进去 - SaltA 240427
- 后面添加的 常用方法 的格式是乱的，还在修。 - SaltA 240427
:::

>[!warning]
>该页面仍在建设中，可能会有不完善的地方。 - 240426

## 写在前面

- 本篇主要介绍在`Rocos/share/geomotry.h`中定义的类(class)。

- *内容* 部分提供了部分类型的**私有成员**仅用于方便理解用。

- *构造* 部分的 lua 部分传入参数的类型可以参考 cpp 部分。

## 常用数据类型

### CVector

- 二维向量，常用于表示速度等。

- 内容
    - `double _x` 向量的 x 值。
    - `double _y` 向量的 y 值。
    
- 构造

::: code-tabs#shell
@tab lua
```lua
-- 传入坐标 x,y 值
local vel = CVector(x, y)
```

@tab cpp
```cpp
// 等效于 CVector(0, 0)
CVector()
// 传入坐标 x,y 值
CVector(double x, double y)
// 传入另一个向量
CVector(const CVector &v)
```
:::

- 常用方法
    - `double mod()` 返回向量的模。
    - `double mod2()` 返回向量的模的平方。
    - `double dir()` 返回向量的角度。
    - `double theta(const CVector &v)` 返回自身到给定向量的夹角。
    - `double x()` 获取 x 值，还有返回 y 值的`y()`。
    - `CVector operator+(const CVector &v)` 返回当前向量加上传入向量。
    - `CVector operator-(const CVector &v)` 返回当前向量减去传入向量。
    - `CVector operator*(double a)` 返回当前向量的`x, y`乘上`a`。
    - `double operator*(CVector b)` 返回当前向量的向量点乘。
    - `CVector operator/(double a)` 返回当前向量的`x, y`除以`a`。
    - `CVector operator-()` 返回当前向量的负。

::: code-tabs#shell
@tab lua
```lua
-- 使用方法
local vel = CVector(x1, y1)

-- mod()
local velMod = vel:mod()

-- dir()
local veldir = vel:dir()

-- x,y
local vel1X = vel:x()
local vel1Y = vel:y()
```

@tab cpp
```cpp
// 使用方法
CVector vel = CVector(x, y)

// mod()
double velMod = vel1.mod()

// dir()
double veldir = vel.dir()

// x,y
double velX = vel.x()
double velY = vel.y()
```
:::
### CGeoPoint

- 二维的坐标点。

- 内容
    - `double _x` 坐标的 x 值。
    - `double _y` 坐标的 y 值。
    
- 构造

::: code-tabs#shell
@tab lua
```lua
-- 传入坐标 x,y 值
local point = CGeoPoint(x, y)
```

@tab cpp
```cpp
// 构造出 (0, 0)
CGeoPoint()
// 传入坐标 x,y 值
CGeoPoint(double x, double y)
// 传入另一个坐标点
CGeoPoint(const CGeoPoint &p)
```
:::

- 常用方法
    - `double x()` 获取 x 值，还有返回 y 值的`y()`。
    - `double dist(const CGeoPoint &p)` 返回传入坐标与当前坐标的距离。
    - `double dist2(const CGeoPoint &p)` 返回传入坐标与当前坐标的距离的平方。
    - `CGeoPoint midPoint(const CGeoPoint &p)` 返回传入坐标与当前坐标的中点坐标。
    - `bool operator==(const CGeoPoint &rhs)` 返回当前坐标与传入坐标是否相同。
    - `CGeoPoint operator+(const CVector &v)` 返回传入坐标与当前坐标的和。
    - `CVector operator-(const CVector &v)` 返回传入坐标与当前坐标的差。
    - `CGeoPoint operator*(const double &a)` 返回当前坐标的`x, y`乘上`a`。

::: code-tabs#shell
@tab lua
```lua
-- 使用方法
local point1 = CGeoPoint(x1, y1)
local point2 = CGeoPoint(x2, y2)

-- 我们仔细观察可以发现两个 CGeoPoint 相减之后的类型是 CVector 
-- 所以我们相减过后可以调用 CVector 的方法 
-- 例如 mod()
local mod = (point1 - point2):mod()

-- dist()
local dist = point1:dist(point2)
-- 其实 mod == dist
```

@tab cpp
```cpp
// 使用方法
CGeoPoint point1 = CGeoPoint(x1, y1);
CGeoPoint point2 = CGeoPoint(x2, y2);

// 我们仔细观察可以发现两个 CGeoPoint 相减之后的类型是 CVector 
// 所以我们相减过后可以调用 CVector 的方法 
// 例如 mod()
double mod = (point1 - point2).mod();

// dist()
double dist = point1.dist(point2);
// 其实 mod == dist
```
:::

### CGeoLine

- 直线（区别于[线段](#cgeosegment)）。

- 内容
    - `CGeoPoint _p1` 直线的第一个坐标点。
    - `CGeoPoint _p2` 直线的第二个坐标点。
    <!-- - `double _a` 直线的解析方程 $a*x + b * y + c = 0$ 为统一表示，约定 $a >= 0$
    - `double _b`
    - `double _c` -->
    
- 构造

::: code-tabs#shell
@tab lua
```lua
-- 传入直线的起点和直线的方向
local line1 = CGeoLine(point1, point2)
local line2 = CGeoLine(point, dir)
```

@tab cpp
```cpp
CGeoLine() {}
// 传入直线的两个坐标
CGeoLine(const CGeoPoint &p1, const CGeoPoint &p2)
// 传入直线的起点和直线的方向(射线)
CGeoLine(const CGeoPoint &p, double angle)
```
:::

- 常用方法
    - 返回投影点坐标。

    ::: code-tabs#shell
    @tab lua
    ```lua
    ```

    @tab cpp
    ```cpp
    CGeoPoint projection(const CGeoPoint &p)
    ```
    :::

    > 关于投影点坐标：
    >
    > ![关于投影点坐标](https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/prjpoint.png)
    
    - `CGeoPoint point1()` 返回点 1。
    - `CGeoPoint point2()` 返回点 2。
    - `bool operator==(const CGeoLine &rhs)` 返回当前实现是否与传入直线相同。

::: code-tabs#shell
@tab lua
```lua
-- 使用方法
local line = CGeoLine(point1, point2)

-- projection()
local projectionPos = line:projection(point3)

-- point1,point2
local point1 = line:point1()
local point2 = line:point2()
```

@tab cpp
```cpp
// 使用方法
CVector vel = CVector(x, y)

// mod()
double velMod = vel1.mod()

// dir()
double veldir = vel.dir()

// x,y
double velX = vel.x()
double velY = vel.y()
```
:::

### CGeoLineLineIntersection

- 直线与直线的交点。

- 内容
    - `bool _intersectant` 两条直线是否相交。
    - `CGeoPoint _point` 两条直线的交点。

- 构造

::: code-tabs#shell
@tab lua
```lua
```

@tab cpp
```cpp
// 传入两条直线(CeoLine)
CGeoLineLineIntersection(const CGeoLine &line_1, const CGeoLine &line_2)
```
:::

- 常用方法
    - `bool Intersectant()` 两条直线是否相交。
    - `CGeoPoint IntersectPoint()` 两条直线的交点。

### CGeoSegment

- 线段（区别于[直线](#cgeoline)），继承自直线。

- 内容
    - `CGeoPoint _start` 线段的起点。
    - `CGeoPoint _end` 线段的终点。
    
- 构造

::: code-tabs#shell

@tab lua
```lua
-- 传入线段的起点和终点
local segment = CGeoSegment(point1, point2)
```

@tab cpp
```cpp
CGeoSegment() {}
// 传入线段的起点和终点
CGeoSegment(const CGeoPoint &p1, const CGeoPoint &p2)
```
:::

- 常用方法
    - `bool IsPointOnLineOnSegment(const CGeoPoint &p)` 直线上的点是否在线段上。
    - `CGeoPoint segmentsIntersectPoint(const CGeoSegment &p)` 和传入线段的交点，如果没有交点会返回`CGeoPoint(9999, 9999)`。
    - `double dist2Point(const CGeoPoint &p)` 返回传入点到当前线段的距离。
    - `double dist2Segment(const CGeoSegment &s)` 返回传入线段到当前线段的距离，如果相交返回`0`.
    - `CGeoPoint start()` 返回起点，还有返回终点的`end()`和返回中点的`center()`。

## 常用数据类型的方法

- `mod()` 取两个坐标之间的模长。

    用法示例：
    ::: code-tabs#shell
    @tab lua
    ```lua
    local distance = (point1 - point2):mod()
    ```

    <!-- TODO: -->
    @tab cpp
    ```cpp
    ```
    :::

- `dir()` 取两个坐标的方向。

    用法示例：
    ::: code-tabs#shell
    @tab lua
    ```lua
    local direction = (point1 - point2):dir()
    ```

    <!-- TODO: -->
    @tab cpp
    ```cpp
    ```
    :::

## 总结

- 在 lua 中我们想要使用几何相关的数据类型及其方法，可以去`Rocos/Core/src/LuaModule/geometry.pkg`中查阅，并根据具体的定义去正确使用。
- c++ 则需要到相应的`Rocos/share/geometry.h`和`Rocos/share/geometry.cpp`文件中查阅。