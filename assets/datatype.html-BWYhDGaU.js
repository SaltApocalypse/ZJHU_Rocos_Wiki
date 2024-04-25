import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c as u,a as r,d as l,w as a,b as e,e as i,f as n}from"./app-DXNCE1Jk.js";const m={},k=i('<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h2><ul><li><p>本篇主要介绍在<code>Rocos/share/geomotry.h</code>中定义的类(class)。</p></li><li><p>内容部分提供了部分类型的<strong>私有成员</strong>仅用于方便理解用。</p></li><li><p>构造 部分的 lua 部分传入参数的类型可以参考 cpp 部分。</p></li><li><p>⚠️ 常用数据类型的方法 部分可能暂时写得还不是很清晰。<!-- TODO: 完善 --></p></li></ul><h2 id="常用数据类型" tabindex="-1"><a class="header-anchor" href="#常用数据类型"><span>常用数据类型</span></a></h2><h3 id="cvector" tabindex="-1"><a class="header-anchor" href="#cvector"><span>CVector</span></a></h3><ul><li><p>二维向量，常用于表示速度等。</p></li><li><p>内容</p><ul><li><code>double _x</code> 向量的 x 值。</li><li><code>double _y</code> 向量的 y 值。</li></ul></li><li><p>构造</p></li></ul>',5),v=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- 传入坐标 x,y 值"),n(`
`),e("span",{class:"token keyword"},"local"),n(" vel "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"CVector"),e("span",{class:"token punctuation"},"("),n("x"),e("span",{class:"token punctuation"},","),n(" y"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code",null,[e("span",{class:"token comment"},"// 等效于 CVector(0, 0)"),n(`
`),e("span",{class:"token function"},"CVector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token comment"},"// 传入坐标 x,y 值"),n(`
`),e("span",{class:"token function"},"CVector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"double"),n(" x"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token keyword"},"double"),n(" y"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token comment"},"// 传入另一个向量"),n(`
`),e("span",{class:"token function"},"CVector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" CVector "),e("span",{class:"token operator"},"&"),n("v"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=i('<ul><li>常用方法 <ul><li><code>double mod()</code> 返回向量的模。</li><li><code>double mod2()</code> 返回向量的模的平方。</li><li><code>double dir()</code> 返回向量的角度。</li><li><code>double theta(const CVector &amp;v)</code> 返回自身到给定向量的夹角。</li><li><code>double x()</code> 获取 x 值，还有返回 y 值的<code>y()</code>。</li><li><code>CVector operator+(const CVector &amp;v)</code> 返回当前向量加上传入向量。</li><li><code>CVector operator-(const CVector &amp;v)</code> 返回当前向量减去传入向量。</li><li><code>CVector operator*(double a)</code> 返回当前向量的<code>x, y</code>乘上<code>a</code>。</li><li><code>double operator*(CVector b)</code> 返回当前向量的向量点乘。</li><li><code>CVector operator/(double a)</code> 返回当前向量的<code>x, y</code>除以<code>a</code>。</li><li><code>CVector operator-()</code> 返回当前向量的负。</li></ul></li></ul><h3 id="cgeopoint" tabindex="-1"><a class="header-anchor" href="#cgeopoint"><span>CGeoPoint</span></a></h3><ul><li><p>坐标点。</p></li><li><p>内容</p><ul><li><code>double _x</code> 坐标的 x 值。</li><li><code>double _y</code> 坐标的 y 值。</li></ul></li><li><p>构造</p></li></ul>',3),h=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- 传入坐标 x,y 值"),n(`
`),e("span",{class:"token keyword"},"local"),n(" point "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"CGeoPoint"),e("span",{class:"token punctuation"},"("),n("x"),e("span",{class:"token punctuation"},","),n(" y"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code",null,[e("span",{class:"token comment"},"// 构造出 (0, 0)"),n(`
`),e("span",{class:"token function"},"CGeoPoint"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token comment"},"// 传入坐标 x,y 值"),n(`
`),e("span",{class:"token function"},"CGeoPoint"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"double"),n(" x"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token keyword"},"double"),n(" y"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token comment"},"// 传入另一个坐标点"),n(`
`),e("span",{class:"token function"},"CGeoPoint"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" CGeoPoint "),e("span",{class:"token operator"},"&"),n("p"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=i('<ul><li>常用方法 <ul><li><code>double x()</code> 获取 x 值，还有返回 y 值的<code>y()</code>。</li><li><code>double dist(const CGeoPoint &amp;p)</code> 返回传入坐标与当前坐标的距离。</li><li><code>double dist2(const CGeoPoint &amp;p)</code> 返回传入坐标与当前坐标的距离的平方。</li><li><code>CGeoPoint midPoint(const CGeoPoint &amp;p)</code> 返回传入坐标与当前坐标的中点坐标。</li><li><code>bool operator==(const CGeoPoint &amp;rhs)</code> 返回当前坐标与传入坐标是否相同。</li><li><code>CGeoPoint operator+(const CVector &amp;v)</code> 返回传入坐标与当前坐标的和。</li><li><code>CGeoPoint operator-(const CVector &amp;v)</code> 返回传入坐标与当前坐标的差。</li><li><code>CGeoPoint operator*(const double &amp;a)</code> 返回当前坐标的<code>x, y</code>乘上<code>a</code>。</li></ul></li></ul><h3 id="cgeoline" tabindex="-1"><a class="header-anchor" href="#cgeoline"><span>CGeoLine</span></a></h3><ul><li><p>直线（区别于<a href="#cgeosegment">线段</a>）。</p></li><li><p>内容</p><ul><li><code>CGeoPoint _p1</code> 直线的第一个坐标点。</li><li><code>CGeoPoint _p2</code> 直线的第二个坐标点。</li></ul><!-- - `double _a` 直线的解析方程 $a*x + b * y + c = 0$ 为统一表示，约定 $a &gt;= 0$\n  - `double _b`\n  - `double _c` --></li><li><p>构造</p></li></ul>',3),y=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- 传入直线的起点和直线的方向"),n(`
`),e("span",{class:"token keyword"},"local"),n(" line "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"CGeoLine"),e("span",{class:"token punctuation"},"("),n("point"),e("span",{class:"token punctuation"},","),n(" dir"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code",null,[e("span",{class:"token function"},"CGeoLine"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token comment"},"// 传入直线的两个坐标"),n(`
`),e("span",{class:"token function"},"CGeoLine"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" CGeoPoint "),e("span",{class:"token operator"},"&"),n("p1"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token keyword"},"const"),n(" CGeoPoint "),e("span",{class:"token operator"},"&"),n("p2"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token comment"},"// 传入直线的起点和直线的方向"),n(`
`),e("span",{class:"token function"},"CGeoLine"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" CGeoPoint "),e("span",{class:"token operator"},"&"),n("p"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token keyword"},"double"),n(" angle"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=i('<ul><li><p>常用方法</p><ul><li><code>CGeoPoint projection(const CGeoPoint &amp;p)</code> 返回投影点坐标。</li></ul><blockquote><p>关于投影点坐标</p><figure><img src="https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/prjpoint.png" alt="关于投影点坐标" tabindex="0" loading="lazy"><figcaption>关于投影点坐标</figcaption></figure></blockquote><ul><li><code>CGeoPoint point1()</code> 返回点 1。</li><li><code>CGeoPoint point2()</code> 返回点 2。</li><li><code>bool operator==(const CGeoLine &amp;rhs)</code> 返回当前实现是否与传入直线相同。</li></ul></li></ul><h3 id="cgeolinelineintersection" tabindex="-1"><a class="header-anchor" href="#cgeolinelineintersection"><span>CGeoLineLineIntersection</span></a></h3><ul><li><p>直线与直线的交点。</p></li><li><p>内容</p><ul><li><code>bool _intersectant</code> 两条直线是否相交。</li><li><code>CGeoPoint _point</code> 两条直线的交点。</li></ul></li><li><p>构造</p></li></ul>',3),f=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),P=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code",null,[e("span",{class:"token comment"},"// 传入两条直线(CeoLine)"),n(`
`),e("span",{class:"token function"},"CGeoLineLineIntersection"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" CGeoLine "),e("span",{class:"token operator"},"&"),n("line_1"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token keyword"},"const"),n(" CGeoLine "),e("span",{class:"token operator"},"&"),n("line_2"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=i('<ul><li>常用方法 <ul><li><code>bool Intersectant()</code> 两条直线是否相交。</li><li><code>CGeoPoint IntersectPoint()</code> 两条直线的交点。</li></ul></li></ul><h3 id="cgeosegment" tabindex="-1"><a class="header-anchor" href="#cgeosegment"><span>CGeoSegment</span></a></h3><ul><li><p>线段（区别于<a href="#cgeoline">直线</a>），继承自直线。</p></li><li><p>内容</p><ul><li><code>CGeoPoint _start</code> 线段的起点。</li><li><code>CGeoPoint _end</code> 线段的终点。</li></ul></li><li><p>构造</p></li></ul>',3),V=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- 传入线段的起点和终点"),n(`
`),e("span",{class:"token keyword"},"local"),n(" segment "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token function"},"CGeoSegment"),e("span",{class:"token punctuation"},"("),n("point1"),e("span",{class:"token punctuation"},","),n(" point2"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code",null,[e("span",{class:"token function"},"CGeoSegment"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),n(`
`),e("span",{class:"token comment"},"// 传入线段的起点和终点"),n(`
`),e("span",{class:"token function"},"CGeoSegment"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" CGeoPoint "),e("span",{class:"token operator"},"&"),n("p1"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token keyword"},"const"),n(" CGeoPoint "),e("span",{class:"token operator"},"&"),n("p2"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=i('<ul><li>常用方法 <ul><li><code>bool IsPointOnLineOnSegment(const CGeoPoint &amp;p)</code> 直线上的点是否在线段上。</li><li><code>CGeoPoint segmentsIntersectPoint(const CGeoSegment &amp;p)</code> 和传入线段的交点，如果没有交点会返回<code>CGeoPoint(9999, 9999)</code>。</li><li><code>double dist2Point(const CGeoPoint &amp;p)</code> 返回传入点到当前线段的距离。</li><li><code>double dist2Segment(const CGeoSegment &amp;s)</code> 返回传入线段到当前线段的距离，如果相交返回<code>0</code>.</li><li><code>CGeoPoint start()</code> 返回起点，还有返回终点的<code>end()</code>和返回中点的<code>center()</code>。</li></ul></li></ul><h2 id="常用数据类型的方法" tabindex="-1"><a class="header-anchor" href="#常用数据类型的方法"><span>常用数据类型的方法</span></a></h2>',2),S=e("p",null,[e("code",null,"mod()"),n(" 取两个坐标之间的模长。")],-1),N=e("p",null,"用法示例：",-1),T=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token keyword"},"local"),n(" distance "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token punctuation"},"("),n("point1 "),e("span",{class:"token operator"},"-"),n(" point2"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"mod"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),j=e("p",null,[e("code",null,"dir()"),n(" 取两个坐标的方向。")],-1),I=e("p",null,"用法示例：",-1),J=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token keyword"},"local"),n(" direction "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token punctuation"},"("),n("point1 "),e("span",{class:"token operator"},"-"),n(" point2"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"dir"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1);function R(U,D){const s=p("CodeTabs");return d(),u("div",null,[r(" more "),k,l(s,{id:"61",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[v]),tab1:a(({value:t,isActive:o})=>[b]),_:1}),g,l(s,{id:"165",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[h]),tab1:a(({value:t,isActive:o})=>[_]),_:1}),C,l(s,{id:"255",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[y]),tab1:a(({value:t,isActive:o})=>[G]),_:1}),x,l(s,{id:"334",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[f]),tab1:a(({value:t,isActive:o})=>[P]),_:1}),A,l(s,{id:"393",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[V]),tab1:a(({value:t,isActive:o})=>[w]),_:1}),L,e("ul",null,[e("li",null,[S,N,l(s,{id:"446",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[T]),tab1:a(({value:t,isActive:o})=>[Z]),_:1})]),e("li",null,[j,I,l(s,{id:"462",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:a(({value:t,isActive:o})=>[n("lua")]),title1:a(({value:t,isActive:o})=>[n("cpp")]),tab0:a(({value:t,isActive:o})=>[J]),tab1:a(({value:t,isActive:o})=>[H]),_:1})])])])}const W=c(m,[["render",R],["__file","datatype.html.vue"]]),$=JSON.parse('{"path":"/apidocs/datatype.html","title":"数据类型相关","lang":"zh-CN","frontmatter":{"title":"数据类型相关","description":"常用数据类型介绍。","head":[["meta",{"property":"og:url","content":"https://rocos.salta.top/apidocs/datatype.html"}],["meta",{"property":"og:site_name","content":"ZJHU Rocos Wiki"}],["meta",{"property":"og:title","content":"数据类型相关"}],["meta",{"property":"og:description","content":"常用数据类型介绍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/prjpoint.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-25T07:49:54.000Z"}],["meta",{"property":"article:author","content":"ZJHU"}],["meta",{"property":"article:modified_time","content":"2024-04-25T07:49:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型相关\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/saltapocalypse/CDN/ZJHU_Rocos_Wiki/prjpoint.png\\"],\\"dateModified\\":\\"2024-04-25T07:49:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZJHU\\",\\"url\\":\\"https://rocos.salta.top\\"}]}"]]},"headers":[{"level":2,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":2,"title":"常用数据类型","slug":"常用数据类型","link":"#常用数据类型","children":[{"level":3,"title":"CVector","slug":"cvector","link":"#cvector","children":[]},{"level":3,"title":"CGeoPoint","slug":"cgeopoint","link":"#cgeopoint","children":[]},{"level":3,"title":"CGeoLine","slug":"cgeoline","link":"#cgeoline","children":[]},{"level":3,"title":"CGeoLineLineIntersection","slug":"cgeolinelineintersection","link":"#cgeolinelineintersection","children":[]},{"level":3,"title":"CGeoSegment","slug":"cgeosegment","link":"#cgeosegment","children":[]}]},{"level":2,"title":"常用数据类型的方法","slug":"常用数据类型的方法","link":"#常用数据类型的方法","children":[]}],"git":{"createdTime":1714031394000,"updatedTime":1714031394000,"contributors":[{"name":"SaltApocalypse","email":"super800800@icloud.com","commits":1}]},"readingTime":{"minutes":3.67,"words":1102},"filePathRelative":"apidocs/datatype.md","localizedDate":"2024年4月25日"}');export{W as comp,$ as data};
