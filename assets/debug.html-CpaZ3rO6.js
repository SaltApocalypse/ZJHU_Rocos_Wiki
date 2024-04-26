import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as u,o as p,c as d,a as r,d as i,w as n,e as c,b as e,f as a}from"./app-DxKQSu0m.js";const m={},g=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>面向维护人员：本页仍存在不完善之处，已用<code>TODO</code>标记。</p><ul><li>几个地方的 cpp 没加进去 - SaltA 240426</li></ul></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了让我们在编写代码过程中有更直观的感受，鼓励大家多多使用调试引擎。</p></div><h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h2><ul><li><p>debugEngine，向图形界面输出消息的接口类。</p></li><li><p>cpp 层的调试引擎定义在<code>Rocos/Core/src/Utils/GDebugEngine.h</code>（实现部分在同名<code>.cpp</code>文件）。</p></li><li><p>lua 层的调试引擎定义在<code>Rocos/Core/src/LuaModule/gdebugengine.pkg</code>。</p></li></ul><h2 id="debugengine-向界面输出消息" tabindex="-1"><a class="header-anchor" href="#debugengine-向界面输出消息"><span>debugEngine 向界面输出消息</span></a></h2><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3><ul><li>在指定位置输出一行文本。</li></ul>',7),b=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- @param point       : 打印文本所在坐标首位置（左侧对齐）"),a(`
`),e("span",{class:"token comment"},"-- @param msg         : 输出文本"),a(`
`),e("span",{class:"token comment"},"-- @param debug_color : 是否使用自定义调试色彩（默认启用）"),a(`
`),e("span",{class:"token comment"},"-- @param RGB         : （可选）色彩"),a(`
`),e("span",{class:"token comment"},"-- @param size        : （可选）字体大小"),a(`
debugEngine`),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"gui_debug_msg"),e("span",{class:"token punctuation"},"("),a("point"),e("span",{class:"token punctuation"},","),a(" msg"),e("span",{class:"token punctuation"},","),a(" debug_color "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),a(" RGB "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},","),a(" size "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token number"},"120"),e("span",{class:"token punctuation"},")"),a(`

`),e("span",{class:"token comment"},"-- 一般简单点只需要输入前两项即可"),a(`
debugEngine`),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"gui_debug_msg"),e("span",{class:"token punctuation"},"("),a("point"),e("span",{class:"token punctuation"},","),a(" msg"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),v=c('<div class="hint-container note"><p class="hint-container-title">注</p><p><code>debug_color</code>参数根据定义<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>应该是 <em>是否使用自定义调试色彩（默认启用）</em> 的选项，在后面的方法就不再赘述。</p></div><h3 id="叉点-x" tabindex="-1"><a class="header-anchor" href="#叉点-x"><span>叉点 <code>x</code></span></a></h3><ul><li>在指定坐标点画<code>x</code>。</li></ul>',3),_=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- @param point       : 指定坐标点"),a(`
debugEngine`),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"gui_debug_x"),e("span",{class:"token punctuation"},"("),a("point"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),f=e("h3",{id:"线段",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#线段"},[e("span",null,"线段")])],-1),x=e("ul",null,[e("li",null,"画一条线段")],-1),A=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- @param point1       : 线段的起点"),a(`
`),e("span",{class:"token comment"},"-- @param point2       : 线段的终点"),a(`
debugEngine`),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"gui_debug_line"),e("span",{class:"token punctuation"},"("),a("point1"),e("span",{class:"token punctuation"},","),a(" point2"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),y=e("h3",{id:"弧",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#弧"},[e("span",null,"弧")])],-1),C=e("ul",null,[e("li",null,"画一个弧")],-1),T=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- @param point       : 圆心"),a(`
`),e("span",{class:"token comment"},"-- @param r           : 半径"),a(`
`),e("span",{class:"token comment"},"-- @param start_angle : 开始角度"),a(`
`),e("span",{class:"token comment"},"-- @param span_angle  : 结束角度"),a(`
debugEngine`),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"gui_debug_arc"),e("span",{class:"token punctuation"},"("),a("point"),e("span",{class:"token punctuation"},","),a(" r"),e("span",{class:"token punctuation"},","),a(" start_angle"),e("span",{class:"token punctuation"},","),a(" span_angle"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),R=e("h3",{id:"三角形",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#三角形"},[e("span",null,"三角形")])],-1),z=e("ul",null,[e("li",null,"画一个三角形")],-1),B=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[e("span",{class:"token comment"},"-- @param point1 : 坐标点 1"),a(`
`),e("span",{class:"token comment"},"-- @param point2 : 坐标点 2"),a(`
`),e("span",{class:"token comment"},"-- @param point3 : 坐标点 3"),a(`
debugEngine`),e("span",{class:"token punctuation"},":"),e("span",{class:"token function"},"gui_debug_triangle"),e("span",{class:"token punctuation"},"("),a("point1"),e("span",{class:"token punctuation"},","),a(" point2"),e("span",{class:"token punctuation"},","),a(" point3"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),V=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),w=c('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>参考自<code>Rocos/Core/src/Utils/GDebugEngine.cpp:35</code>。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function D(G,S){const l=u("CodeTabs");return p(),d("div",null,[r(" more "),g,i(l,{id:"53",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:n(({value:t,isActive:s})=>[a("lua")]),title1:n(({value:t,isActive:s})=>[a("cpp")]),tab0:n(({value:t,isActive:s})=>[b]),tab1:n(({value:t,isActive:s})=>[h]),_:1}),v,i(l,{id:"78",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:n(({value:t,isActive:s})=>[a("lua")]),title1:n(({value:t,isActive:s})=>[a("cpp")]),tab0:n(({value:t,isActive:s})=>[_]),tab1:n(({value:t,isActive:s})=>[k]),_:1}),f,x,i(l,{id:"97",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:n(({value:t,isActive:s})=>[a("lua")]),title1:n(({value:t,isActive:s})=>[a("cpp")]),tab0:n(({value:t,isActive:s})=>[A]),tab1:n(({value:t,isActive:s})=>[E]),_:1}),y,C,i(l,{id:"116",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:n(({value:t,isActive:s})=>[a("lua")]),title1:n(({value:t,isActive:s})=>[a("cpp")]),tab0:n(({value:t,isActive:s})=>[T]),tab1:n(({value:t,isActive:s})=>[N]),_:1}),R,z,i(l,{id:"135",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:n(({value:t,isActive:s})=>[a("lua")]),title1:n(({value:t,isActive:s})=>[a("cpp")]),tab0:n(({value:t,isActive:s})=>[B]),tab1:n(({value:t,isActive:s})=>[V]),_:1}),w])}const O=o(m,[["render",D],["__file","debug.html.vue"]]),q=JSON.parse('{"path":"/apidocs/debug.html","title":"调试引擎 (debugEngine)","lang":"zh-CN","frontmatter":{"title":"调试引擎 (debugEngine)","description":"debugEngine，向图形界面输出消息的接口类。","author":"umbrella","head":[["meta",{"property":"og:url","content":"https://rocos.salta.top/apidocs/debug.html"}],["meta",{"property":"og:site_name","content":"ZJHU Rocos Wiki"}],["meta",{"property":"og:title","content":"调试引擎 (debugEngine)"}],["meta",{"property":"og:description","content":"debugEngine，向图形界面输出消息的接口类。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-26T05:56:39.000Z"}],["meta",{"property":"article:author","content":"umbrella"}],["meta",{"property":"article:modified_time","content":"2024-04-26T05:56:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试引擎 (debugEngine)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-26T05:56:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"umbrella\\"}]}"]]},"headers":[{"level":2,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":2,"title":"debugEngine 向界面输出消息","slug":"debugengine-向界面输出消息","link":"#debugengine-向界面输出消息","children":[{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"叉点 x","slug":"叉点-x","link":"#叉点-x","children":[]},{"level":3,"title":"线段","slug":"线段","link":"#线段","children":[]},{"level":3,"title":"弧","slug":"弧","link":"#弧","children":[]},{"level":3,"title":"三角形","slug":"三角形","link":"#三角形","children":[]}]}],"git":{"createdTime":1714061871000,"updatedTime":1714110999000,"contributors":[{"name":"SaltApocalypse","email":"super800800@icloud.com","commits":2},{"name":"Umbrella167","email":"1670187757@qq.com","commits":1}]},"readingTime":{"minutes":1.5,"words":450},"filePathRelative":"apidocs/debug.md","localizedDate":"2024年4月25日"}');export{O as comp,q as data};