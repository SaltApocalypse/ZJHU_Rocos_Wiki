import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as u,o as d,c as o,a as p,d as i,w as l,e as r,b as e,f as a}from"./app-B7HSQ-y3.js";const h={},v=r('<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h2><ul><li><p><code>player.lua</code>和<code>enemy.lua</code>分别为我方机器人和敌方机器人的方法文件，这两个文件大部分相同，下面列举的主要函数主要以 <em>player</em> 为例。</p></li><li><p><strong>在 lua 方法中</strong>，参数<code>role</code>为<em>所选角色</em>（机器人车号或者匹配的名字，<strong>两者均可</strong>）。</p></li><li><p><strong>在 cpp 函数中</strong>，需要调用视觉模块<code>pVision</code>来获取信息。</p></li><li><p>在文档中不会特意区分不同语言的语法，能看懂即可，如 cpp 中的<code>int</code>与 lua 中的<code>interger</code>；需要注意时会特别标注。</p></li></ul><h2 id="属性相关" tabindex="-1"><a class="header-anchor" href="#属性相关"><span>属性相关</span></a></h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><ul><li>详情：返回机器人的<strong>名字 (string)</strong></li></ul>',5),g=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"name"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),_=e("h3",{id:"-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#-1"},[e("span")])],-1),b=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"车号 (int)")])],-1),k=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"num"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),x=e("h3",{id:"存在性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#存在性"},[e("span",null,"存在性")])],-1),y=e("ul",null,[e("li",null,[a("详情：返回机器人"),e("strong",null,"是否存在 (bool)")])],-1),f=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,`
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),C=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),T=e("h3",{id:"红外是否触发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#红外是否触发"},[e("span",null,"红外是否触发")])],-1),V=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"红外是否触发 (bool)")])],-1),N=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"infrareOn"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),w=e("h3",{id:"红外触发的帧数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#红外触发的帧数"},[e("span",null,"红外触发的帧数")])],-1),B=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"红外触发的帧数 (int)")])],-1),J=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"infraredCount"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),X=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),Y=e("h3",{id:"是否踢球",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#是否踢球"},[e("span",null,"是否踢球")])],-1),z=e("ul",null,[e("li",null,[a("详情：返回机器人"),e("strong",null,"是否踢球 (bool)")])],-1),H=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"kickBall"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),M=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),P=e("h2",{id:"位置相关",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#位置相关"},[e("span",null,"位置相关")])],-1),S=e("h3",{id:"位置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#位置"},[e("span",null,"位置")])],-1),U=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"位置 (CGeoPoint)")])],-1),D=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"pos"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),R=e("h3",{id:"位置-x-值",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#位置-x-值"},[e("span",null,"位置 X 值")])],-1),j=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"位置的 X 坐标 (double)")])],-1),E=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"posX"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),G=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),W=e("h3",{id:"位置-y-值",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#位置-y-值"},[e("span",null,"位置 Y 值")])],-1),q=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"位置的 Y 坐标 (double)")])],-1),F=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"posY"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),K=e("h2",{id:"方向相关",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方向相关"},[e("span",null,"方向相关")])],-1),L=e("h3",{id:"角度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#角度"},[e("span",null,"角度")])],-1),Q=e("ul",null,[e("li",null,[a("详情：返回机器人"),e("strong",null,"角度信息（弧度制） (double)")])],-1),$=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"dir"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ee=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),ae=e("h3",{id:"旋转速度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#旋转速度"},[e("span",null,"旋转速度")])],-1),le=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"旋转速度 (double)")])],-1),te=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"rotVel"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ne=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),se=e("h2",{id:"速度相关",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#速度相关"},[e("span",null,"速度相关")])],-1),ie=e("h3",{id:"速度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#速度"},[e("span",null,"速度")])],-1),ce=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"速度 (vector)")])],-1),ue=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"vel"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),de=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),oe=e("h3",{id:"速度方向",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#速度方向"},[e("span",null,"速度方向")])],-1),pe=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"速度方向 (double)")])],-1),re=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"velDir"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),he=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),ve=e("h3",{id:"速度大小",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#速度大小"},[e("span",null,"速度大小")])],-1),ge=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"速度大小 (double)")])],-1),me=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"velMod"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),_e=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),be=e("h3",{id:"真实速度",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#真实速度"},[e("span",null,"真实速度")])],-1),ke=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"真实速度 (double)")])],-1),Ae=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"rawVel"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),xe=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),ye=e("h3",{id:"真实速度大小",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#真实速度大小"},[e("span",null,"真实速度大小")])],-1),fe=e("ul",null,[e("li",null,[a("详情：返回机器人的"),e("strong",null,"真实速度大小 (double)")])],-1),Ce=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,[a("player"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"rawVelMod"),e("span",{class:"token punctuation"},"("),a("role"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Te=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1),Ve=e("h3",{id:"-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#-2"},[e("span")])],-1),Ne=e("ul",null,[e("li",null,"详情：返回机器人的")],-1),Ze=e("div",{class:"language-lua line-numbers-mode","data-ext":"lua","data-title":"lua"},[e("pre",{class:"language-lua"},[e("code",null,`
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),we=e("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp","data-title":"cpp"},[e("pre",{class:"language-cpp"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1);function Be(Je,Xe){const s=u("CodeTabs");return d(),o("div",null,[p(" more "),v,i(s,{id:"39",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[g]),tab1:l(({value:t,isActive:n})=>[m]),_:1}),_,b,i(s,{id:"57",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[k]),tab1:l(({value:t,isActive:n})=>[A]),_:1}),x,y,i(s,{id:"75",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[f]),tab1:l(({value:t,isActive:n})=>[C]),_:1}),T,V,i(s,{id:"93",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[N]),tab1:l(({value:t,isActive:n})=>[Z]),_:1}),w,B,i(s,{id:"111",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[J]),tab1:l(({value:t,isActive:n})=>[X]),_:1}),Y,z,i(s,{id:"129",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[H]),tab1:l(({value:t,isActive:n})=>[M]),_:1}),P,S,U,i(s,{id:"150",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[D]),tab1:l(({value:t,isActive:n})=>[O]),_:1}),R,j,i(s,{id:"168",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[E]),tab1:l(({value:t,isActive:n})=>[G]),_:1}),W,q,i(s,{id:"186",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[F]),tab1:l(({value:t,isActive:n})=>[I]),_:1}),K,L,Q,i(s,{id:"207",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[$]),tab1:l(({value:t,isActive:n})=>[ee]),_:1}),ae,le,i(s,{id:"225",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[te]),tab1:l(({value:t,isActive:n})=>[ne]),_:1}),se,ie,ce,i(s,{id:"246",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[ue]),tab1:l(({value:t,isActive:n})=>[de]),_:1}),oe,pe,i(s,{id:"264",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[re]),tab1:l(({value:t,isActive:n})=>[he]),_:1}),ve,ge,i(s,{id:"282",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[me]),tab1:l(({value:t,isActive:n})=>[_e]),_:1}),be,ke,i(s,{id:"300",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[Ae]),tab1:l(({value:t,isActive:n})=>[xe]),_:1}),ye,fe,i(s,{id:"318",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[Ce]),tab1:l(({value:t,isActive:n})=>[Te]),_:1}),Ve,Ne,i(s,{id:"336",data:[{id:"lua"},{id:"cpp"}],"tab-id":"shell"},{title0:l(({value:t,isActive:n})=>[a("lua")]),title1:l(({value:t,isActive:n})=>[a("cpp")]),tab0:l(({value:t,isActive:n})=>[Ze]),tab1:l(({value:t,isActive:n})=>[we]),_:1})])}const He=c(h,[["render",Be],["__file","player.html.vue"]]),Me=JSON.parse('{"path":"/apidocs/player.html","title":"机器人 (player & enemy) 相关","lang":"zh-CN","frontmatter":{"title":"机器人 (player & enemy) 相关","description":"机器人 (player & enemy) 相关接口。","head":[["meta",{"property":"og:url","content":"https://rocos.salta.top/apidocs/player.html"}],["meta",{"property":"og:site_name","content":"ZJHU Rocos Wiki"}],["meta",{"property":"og:title","content":"机器人 (player & enemy) 相关"}],["meta",{"property":"og:description","content":"机器人 (player & enemy) 相关接口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-22T07:45:17.000Z"}],["meta",{"property":"article:author","content":"ZJHU"}],["meta",{"property":"article:modified_time","content":"2024-04-22T07:45:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"机器人 (player & enemy) 相关\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-22T07:45:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZJHU\\",\\"url\\":\\"https://rocos.salta.top\\"}]}"]]},"headers":[{"level":2,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":2,"title":"属性相关","slug":"属性相关","link":"#属性相关","children":[{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"","slug":"-1","link":"#-1","children":[]},{"level":3,"title":"存在性","slug":"存在性","link":"#存在性","children":[]},{"level":3,"title":"红外是否触发","slug":"红外是否触发","link":"#红外是否触发","children":[]},{"level":3,"title":"红外触发的帧数","slug":"红外触发的帧数","link":"#红外触发的帧数","children":[]},{"level":3,"title":"是否踢球","slug":"是否踢球","link":"#是否踢球","children":[]}]},{"level":2,"title":"位置相关","slug":"位置相关","link":"#位置相关","children":[{"level":3,"title":"位置","slug":"位置","link":"#位置","children":[]},{"level":3,"title":"位置 X 值","slug":"位置-x-值","link":"#位置-x-值","children":[]},{"level":3,"title":"位置 Y 值","slug":"位置-y-值","link":"#位置-y-值","children":[]}]},{"level":2,"title":"方向相关","slug":"方向相关","link":"#方向相关","children":[{"level":3,"title":"角度","slug":"角度","link":"#角度","children":[]},{"level":3,"title":"旋转速度","slug":"旋转速度","link":"#旋转速度","children":[]}]},{"level":2,"title":"速度相关","slug":"速度相关","link":"#速度相关","children":[{"level":3,"title":"速度","slug":"速度","link":"#速度","children":[]},{"level":3,"title":"速度方向","slug":"速度方向","link":"#速度方向","children":[]},{"level":3,"title":"速度大小","slug":"速度大小","link":"#速度大小","children":[]},{"level":3,"title":"真实速度","slug":"真实速度","link":"#真实速度","children":[]},{"level":3,"title":"真实速度大小","slug":"真实速度大小","link":"#真实速度大小","children":[]},{"level":3,"title":"","slug":"-2","link":"#-2","children":[]}]}],"git":{"createdTime":1713771917000,"updatedTime":1713771917000,"contributors":[{"name":"SaltApocalypse","email":"super800800@icloud.com","commits":1}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"apidocs/player.md","localizedDate":"2024年4月22日"}');export{He as comp,Me as data};
