---
title: 调试引擎 (debugEngine)
description: debugEngine，向图形界面输出消息的接口类。
author: umbrella
---

## 写在前面

>[!tip]
>为了让我们在编写代码过程中有更直观的感受，鼓励大家多多使用调试引擎。

- debugEngine，向图形界面输出消息的接口类。

- cpp 层的调试引擎定义在`Rocos/Core/src/Utils/GDebugEngine.h`（实现部分在同名`.cpp`文件）。

- lua 层的调试引擎定义在`Rocos/Core/src/LuaModule/gdebugengine.pkg`。

## debugEngine 向界面输出消息

### 字符串

- 在指定位置输出一行文本。

::: code-tabs#shell
@tab lua
```lua
-- @param point       : 打印文本所在坐标首位置（左侧对齐）
-- @param msg         : 输出文本
-- @param debug_color : 是否使用自定义调试色彩（默认启用）
-- @param RGB         : （可选）色彩
-- @param size        : （可选）字体大小
debugEngine:gui_debug_msg(point, msg, debug_color = 1, RGB = 0, size = 120)

-- 一般简单点只需要输入前两项即可
debugEngine:gui_debug_msg(point, msg)
```

@tab cpp
```cpp
/**
* @param  {CGeoPoint} p  : 打印文本所在坐标首位置（左侧对齐）
* @param  {char*} msgstr : 输出文本（字符串）
*/
void CGDebugEngine::gui_debug_msg(const CGeoPoint& p, const char* msgstr);
```
:::

>[!note]
>`debug_color`参数根据定义[^1]应该是 *是否使用自定义调试色彩（默认启用）* 的选项，
>像这些已经配置好的默认参数，在后面的方法中就不再赘述，感兴趣可以自行琢磨。
>为了看着方便，cpp 部分的定义也去掉了那些已经配置好的默认参数的介绍。

### 叉点 `x`

- 在指定坐标点画`x`。

::: code-tabs#shell
@tab lua
```lua
-- @param point       : 打印坐标点
debugEngine:gui_debug_x(point)
```

@tab cpp
```cpp
/**
* @param  {CGeoPoint} p  : 打印坐标点
* @param  {char*} msgstr : 输出文本（字符串）
*/
void CGDebugEngine::gui_debug_x(const CGeoPoint& p);
```
:::

### 线段

- 画一条线段。

::: code-tabs#shell
@tab lua
```lua
-- @param point1       : 线段的起点
-- @param point2       : 线段的终点
debugEngine:gui_debug_line(point1, point2)
```

@tab cpp
```cpp
/**
* @param  {CGeoPoint} p1  : 线段的起点
* @param  {CGeoPoint} p2  : 线段的终点
*/
void CGDebugEngine::gui_debug_line(const CGeoPoint& p1, const CGeoPoint& p2);
```
:::

### 弧

- 画一个弧。

::: code-tabs#shell
@tab lua
```lua
-- @param point       : 圆心
-- @param r           : 半径
-- @param start_angle : 开始角度
-- @param span_angle  : 结束角度
debugEngine:gui_debug_arc(point, r, start_angle, span_angle)
```

@tab cpp
```cpp
/**
 * @param  {CGeoPoint} p        : 圆心
 * @param  {double} r           : 半径
 * @param  {double} start_angle : 开始角度
 * @param  {double} span_angle  : 结束角度
 */
void CGDebugEngine::gui_debug_arc(const CGeoPoint& p, double r, double start_angle, double span_angle);
```
:::

### 三角形

- 画一个三角形。

::: code-tabs#shell
@tab lua
```lua
-- @param point1 : 坐标点 1
-- @param point2 : 坐标点 2
-- @param point3 : 坐标点 3
debugEngine:gui_debug_triangle(point1, point2, point3)
```

@tab cpp
```cpp
/**
* @param  {CGeoPoint} p1  : 坐标点 1
* @param  {CGeoPoint} p2  : 坐标点 2
* @param  {CGeoPoint} p3  : 坐标点 3
*/
void CGDebugEngine::gui_debug_triangle(const CGeoPoint& p1, const CGeoPoint& p2, const CGeoPoint& p3);
```
:::

[^1]: 参考自`Rocos/Core/src/Utils/GDebugEngine.cpp:35`。
