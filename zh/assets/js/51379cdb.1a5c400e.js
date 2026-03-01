"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["8434"],{54966(e,n,r){r.r(n),r.d(n,{metadata:()=>t,default:()=>p,frontMatter:()=>d,contentTitle:()=>s,toc:()=>l,assets:()=>c});var t=JSON.parse('{"id":"internals/planning","title":"\u89C4\u5212\u9636\u6BB5","description":"\u89C4\u5212\u9636\u6BB5\u662F\u6BCF\u6B21\u4ECE InversifyJS \u5BB9\u5668\u8BF7\u6C42\u670D\u52A1\u65F6\u53D1\u751F\u7684\u5173\u952E\u6B65\u9AA4\u3002\u5728\u521B\u5EFA\u4EFB\u4F55\u5B9E\u4F8B\u6216\u89E3\u6790\u503C\u4E4B\u524D\uFF0CInversifyJS \u4F1A\u6784\u5EFA\u4E00\u4E2A\u5168\u9762\u7684\u89C4\u5212\u6811\uFF0C\u51C6\u786E\u5730\u89C4\u5212\u51FA\u5982\u4F55\u6EE1\u8DB3\u4F60\u7684\u4F9D\u8D56\u8BF7\u6C42\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-8.x/internals/planning.mdx","sourceDirName":"internals","slug":"/internals/planning","permalink":"/zh/docs/internals/planning","draft":false,"unlisted":false,"tags":[],"version":"8.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"\u89C4\u5212\u9636\u6BB5"},"sidebar":"tutorialSidebar","previous":{"title":"Suites","permalink":"/zh/docs/ecosystem/suites"}}'),i=r(68376),a=r(83321);r(19744);var o=r(82073);let d={sidebar_position:1,title:"\u89C4\u5212\u9636\u6BB5"},s="\u89C4\u5212\u9636\u6BB5",c={},l=[{value:"\u4EC0\u4E48\u662F\u89C4\u5212\u6811\uFF1F",id:"\u4EC0\u4E48\u662F\u89C4\u5212\u6811",level:2},{value:"\u89C4\u5212\u5982\u4F55\u5DE5\u4F5C",id:"\u89C4\u5212\u5982\u4F55\u5DE5\u4F5C",level:2},{value:"1. \u7F13\u5B58\u68C0\u67E5",id:"1-\u7F13\u5B58\u68C0\u67E5",level:3},{value:"2. \u6784\u5EFA\u670D\u52A1\u8282\u70B9",id:"2-\u6784\u5EFA\u670D\u52A1\u8282\u70B9",level:3},{value:"3. \u5904\u7406\u6BCF\u4E2A\u7ED1\u5B9A",id:"3-\u5904\u7406\u6BCF\u4E2A\u7ED1\u5B9A",level:3},{value:"4. \u9012\u5F52\u4F9D\u8D56\u89C4\u5212",id:"4-\u9012\u5F52\u4F9D\u8D56\u89C4\u5212",level:3},{value:"5. \u60F0\u6027\u6C42\u503C",id:"5-\u60F0\u6027\u6C42\u503C",level:3},{value:"6. \u9A8C\u8BC1",id:"6-\u9A8C\u8BC1",level:3},{value:"7. \u7F13\u5B58",id:"7-\u7F13\u5B58",level:3},{value:"\u4E0A\u4E0B\u6587\u65E0\u5173\u4E0E\u4E0A\u4E0B\u6587\u76F8\u5173\u89C4\u5212",id:"\u4E0A\u4E0B\u6587\u65E0\u5173\u4E0E\u4E0A\u4E0B\u6587\u76F8\u5173\u89C4\u5212",level:2},{value:"\u89C4\u5212\u6811\u7ED3\u6784",id:"\u89C4\u5212\u6811\u7ED3\u6784",level:2},{value:"\u53EF\u89C6\u5316\u89C4\u5212\u6811",id:"\u53EF\u89C6\u5316\u89C4\u5212\u6811",level:2},{value:"\u6027\u80FD\u8003\u8651",id:"\u6027\u80FD\u8003\u8651",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u89C4\u5212\u9636\u6BB5",children:"\u89C4\u5212\u9636\u6BB5"})}),"\n",(0,i.jsxs)(n.p,{children:["\u89C4\u5212\u9636\u6BB5\u662F\u6BCF\u6B21\u4ECE InversifyJS \u5BB9\u5668\u8BF7\u6C42\u670D\u52A1\u65F6\u53D1\u751F\u7684\u5173\u952E\u6B65\u9AA4\u3002\u5728\u521B\u5EFA\u4EFB\u4F55\u5B9E\u4F8B\u6216\u89E3\u6790\u503C\u4E4B\u524D\uFF0CInversifyJS \u4F1A\u6784\u5EFA\u4E00\u4E2A\u5168\u9762\u7684",(0,i.jsx)(n.strong,{children:"\u89C4\u5212\u6811"}),"\uFF0C\u51C6\u786E\u5730\u89C4\u5212\u51FA\u5982\u4F55\u6EE1\u8DB3\u4F60\u7684\u4F9D\u8D56\u8BF7\u6C42\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4EC0\u4E48\u662F\u89C4\u5212\u6811",children:"\u4EC0\u4E48\u662F\u89C4\u5212\u6811\uFF1F"}),"\n",(0,i.jsx)(n.p,{children:"\u89C4\u5212\u6811\u662F\u4E00\u4E2A\u5206\u5C42\u6570\u636E\u7ED3\u6784\uFF0C\u63CF\u8FF0\u4E86\u670D\u52A1\u7684\u5B8C\u6574\u89E3\u6790\u7B56\u7565\u3002\u5B83\u6355\u83B7\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5C06\u4F7F\u7528\u54EA\u4E9B",(0,i.jsx)(n.a,{href:"/zh/docs/fundamentals/binding",children:"\u7ED1\u5B9A"}),"\u6765\u89E3\u6790\u6BCF\u4E2A\u670D\u52A1"]}),"\n",(0,i.jsx)(n.li,{children:"\u6BCF\u4E2A\u670D\u52A1\u9700\u8981\u54EA\u4E9B\u4F9D\u8D56\u9879\uFF08\u6784\u9020\u51FD\u6570\u53C2\u6570\u548C\u5C5E\u6027\uFF09"}),"\n",(0,i.jsx)(n.li,{children:"\u670D\u52A1\u5FC5\u987B\u88AB\u89E3\u6790\u7684\u987A\u5E8F"}),"\n",(0,i.jsx)(n.li,{children:"\u5173\u4E8E\u6BCF\u4E2A\u7ED1\u5B9A\u53CA\u5176\u89E3\u6790\u8981\u6C42\u7684\u5143\u6570\u636E"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u5C06\u5176\u89C6\u4E3A\u5BB9\u5668\u5728\u89E3\u6790\u9636\u6BB5\u9075\u5FAA\u7684\u84DD\u56FE\uFF0C\u7528\u4E8E\u6784\u5EFA\u548C\u8FDE\u63A5\u4F60\u7684\u4F9D\u8D56\u5173\u7CFB\u56FE\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u89C4\u5212\u5982\u4F55\u5DE5\u4F5C",children:"\u89C4\u5212\u5982\u4F55\u5DE5\u4F5C"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u4F60\u8C03\u7528 ",(0,i.jsx)(n.code,{children:"container.get()"})," \u6216 ",(0,i.jsx)(n.code,{children:"container.getAll()"})," \u65F6\uFF0CInversifyJS \u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\uFF1A"]}),"\n",(0,i.jsx)(n.h3,{id:"1-\u7F13\u5B58\u68C0\u67E5",children:"1. \u7F13\u5B58\u68C0\u67E5"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uFF0C\u5BB9\u5668\u68C0\u67E5\u5176\u7F13\u5B58\u4E2D\u662F\u5426\u5DF2\u5B58\u5728\u9488\u5BF9\u8BF7\u6C42\u7684\u670D\u52A1\u6807\u8BC6\u7B26\u548C\u7EA6\u675F\uFF08\u540D\u79F0\u3001\u6807\u7B7E\u7B49\uFF09\u7684\u89C4\u5212\u3002\u5982\u679C\u627E\u5230\u5339\u914D\u7684\u89C4\u5212\uFF0C\u5B83\u5C06\u7ACB\u5373\u88AB\u91CD\u7528\uFF0C\u4ECE\u800C\u907F\u514D\u91CD\u590D\u7684\u89C4\u5212\u5DE5\u4F5C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u6784\u5EFA\u670D\u52A1\u8282\u70B9",children:"2. \u6784\u5EFA\u670D\u52A1\u8282\u70B9"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4E0D\u5B58\u5728\u7F13\u5B58\u7684\u89C4\u5212\uFF0CInversifyJS \u5C06\u4E3A\u8BF7\u6C42\u7684\u670D\u52A1\u6784\u5EFA\u4E00\u4E2A",(0,i.jsx)(n.strong,{children:"\u670D\u52A1\u8282\u70B9"}),"\uFF1A"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7EA6\u675F\u6784\u5EFA"}),"\uFF1A\u5BB9\u5668\u6839\u636E\u4F60\u7684\u8BF7\u6C42\u53C2\u6570\uFF08\u670D\u52A1\u6807\u8BC6\u7B26\u3001\u540D\u79F0\u3001\u6807\u7B7E\u3001\u53EF\u9009/\u591A\u4E2A\u6807\u5FD7\uFF09\u6784\u5EFA\u7EA6\u675F\u5217\u8868"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7ED1\u5B9A\u8FC7\u6EE4"}),"\uFF1A\u4F7F\u7528\u6BCF\u4E2A\u7ED1\u5B9A\u7684 ",(0,i.jsx)(n.code,{children:"isSatisfiedBy()"})," \u65B9\u6CD5\uFF0C\u6839\u636E\u8FD9\u4E9B\u7EA6\u675F\u8FC7\u6EE4\u670D\u52A1\u6807\u8BC6\u7B26\u7684\u6240\u6709",(0,i.jsx)(n.a,{href:"/zh/docs/fundamentals/binding",children:"\u7ED1\u5B9A"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u81EA\u52A8\u7ED1\u5B9A"}),"\uFF1A\u5982\u679C\u672A\u627E\u5230\u7ED1\u5B9A\u4E14\u542F\u7528\u4E86\u81EA\u52A8\u7ED1\u5B9A\uFF0C\u5219\u4F1A\u81EA\u52A8\u4E3A\u8BE5\u670D\u52A1\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B\u7ED1\u5B9A"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-\u5904\u7406\u6BCF\u4E2A\u7ED1\u5B9A",children:"3. \u5904\u7406\u6BCF\u4E2A\u7ED1\u5B9A"}),"\n",(0,i.jsxs)(n.p,{children:["\u5BF9\u4E8E\u6BCF\u4E2A\u5339\u914D\u7684\u7ED1\u5B9A\uFF0CInversifyJS \u6839\u636E\u7ED1\u5B9A\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A",(0,i.jsx)(n.strong,{children:"\u7ED1\u5B9A\u8282\u70B9"}),"\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5B9E\u4F8B\u7ED1\u5B9A"}),"\uFF1A\u521B\u5EFA\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"InstanceBindingNode"}),"\uFF0C\u5176\u4E2D\u5305\u62EC\u7C7B\u5143\u6570\u636E\uFF0C\u5E76\u9012\u5F52\u89C4\u5212\u6240\u6709\u6784\u9020\u51FD\u6570\u53C2\u6570\u548C\u5C5E\u6027\u6CE8\u5165"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u89E3\u6790\u503C\u7ED1\u5B9A"}),"\uFF1A\u521B\u5EFA\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"ResolvedValueBindingNode"}),"\uFF0C\u9012\u5F52\u89C4\u5212\u5DE5\u5382\u51FD\u6570\u6240\u9700\u7684\u6240\u6709\u53C2\u6570"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u670D\u52A1\u91CD\u5B9A\u5411\u7ED1\u5B9A"}),"\uFF1A\u521B\u5EFA\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"PlanServiceRedirectionBindingNode"}),"\uFF0C\u91CD\u5B9A\u5411\u5230\u53E6\u4E00\u4E2A\u670D\u52A1\u6807\u8BC6\u7B26"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u53F6\u7ED1\u5B9A"}),"\uFF08\u5E38\u91CF\u3001\u52A8\u6001\u503C\u3001\u5DE5\u5382\u3001\u63D0\u4F9B\u8005\uFF09\uFF1A\u521B\u5EFA\u4E00\u4E2A\u6CA1\u6709\u5B50\u4F9D\u8D56\u9879\u7684 ",(0,i.jsx)(n.code,{children:"LeafBindingNode"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-\u9012\u5F52\u4F9D\u8D56\u89C4\u5212",children:"4. \u9012\u5F52\u4F9D\u8D56\u89C4\u5212"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E\u5177\u6709\u4F9D\u8D56\u9879\u7684\u7ED1\u5B9A\uFF08\u5B9E\u4F8B\u548C\u89E3\u6790\u503C\u7ED1\u5B9A\uFF09\uFF0CInversifyJS \u9012\u5F52\u5730\u4E3A\u6BCF\u4E2A\u4F9D\u8D56\u9879\u6784\u5EFA\u89C4\u5212\u8282\u70B9\u3002\u8FD9\u5C06\u521B\u5EFA\u4E00\u4E2A\u6811\u7ED3\u6784\uFF0C\u5176\u4E2D\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6BCF\u4E2A\u670D\u52A1\u8282\u70B9\u4EE3\u8868\u4E00\u4E2A\u8981\u89E3\u6790\u7684\u670D\u52A1"}),"\n",(0,i.jsx)(n.li,{children:"\u6BCF\u4E2A\u7ED1\u5B9A\u8282\u70B9\u4EE3\u8868\u8BE5\u670D\u52A1\u5C06\u5982\u4F55\u88AB\u89E3\u6790"}),"\n",(0,i.jsx)(n.li,{children:"\u5B50\u8282\u70B9\u4EE3\u8868\u8BE5\u89E3\u6790\u7B56\u7565\u6240\u9700\u7684\u4F9D\u8D56\u9879"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-\u60F0\u6027\u6C42\u503C",children:"5. \u60F0\u6027\u6C42\u503C"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3A\u4E86\u4F18\u5316\u6027\u80FD\uFF0C\u89C4\u5212\u6811\u7684\u67D0\u4E9B\u90E8\u5206\u4F7F\u7528",(0,i.jsx)(n.strong,{children:"\u60F0\u6027\u6C42\u503C"}),"\u3002\u5B50\u4F9D\u8D56\u8282\u70B9\u88AB\u5305\u88C5\u5728 ",(0,i.jsx)(n.code,{children:"LazyPlanServiceNode"})," \u5B9E\u4F8B\u4E2D\uFF0C\u8FD9\u4E9B\u5B9E\u4F8B\u5C06\u63A8\u8FDF\u5176\u5B8C\u6574\u89C4\u5212\uFF0C\u76F4\u5230\u5728\u89E3\u6790\u671F\u95F4\u5B9E\u9645\u9700\u8981\u4E3A\u6B62\u3002\u8FD9\u907F\u514D\u4E86\u5728\u5177\u6709\u53EF\u9009\u4F9D\u8D56\u9879\u6216\u6761\u4EF6\u903B\u8F91\u7684\u573A\u666F\u4E2D\u89C4\u5212\u672A\u4F7F\u7528\u7684\u5206\u652F\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"6-\u9A8C\u8BC1",children:"6. \u9A8C\u8BC1"}),"\n",(0,i.jsx)(n.p,{children:"\u6784\u5EFA\u6811\u540E\uFF0CInversifyJS \u4F1A\u5BF9\u5176\u8FDB\u884C\u9A8C\u8BC1\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5BF9\u4E8E\u5355\u4E2A\u6CE8\u5165\uFF08",(0,i.jsx)(n.code,{children:"container.get()"}),"\uFF09\uFF0C\u786E\u4FDD\u53EA\u627E\u5230\u4E00\u4E2A\u7ED1\u5B9A\uFF08\u5BF9\u4E8E\u53EF\u9009\u6CE8\u5165\uFF0C\u5219\u4E3A\u96F6\u4E2A\uFF09"]}),"\n",(0,i.jsx)(n.li,{children:"\u901A\u8FC7\u5728\u89C4\u5212\u671F\u95F4\u8DDF\u8E2A\u670D\u52A1\u5206\u652F\u5E76\u629B\u51FA\u63CF\u8FF0\u6027\u9519\u8BEF\u6765\u68C0\u6D4B\u5FAA\u73AF\u4F9D\u8D56"}),"\n",(0,i.jsx)(n.li,{children:"\u9A8C\u8BC1\u662F\u5426\u6EE1\u8DB3\u6240\u6709\u5FC5\u9700\u7684\u7EA6\u675F"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"7-\u7F13\u5B58",children:"7. \u7F13\u5B58"}),"\n",(0,i.jsx)(n.p,{children:"\u5B8C\u6210\u7684\u89C4\u5212\u6811\u5B58\u50A8\u5728\u5BB9\u5668\u7684\u89C4\u5212\u7F13\u5B58\u4E2D\uFF0C\u7531\u670D\u52A1\u6807\u8BC6\u7B26\u548C\u7EA6\u675F\u9009\u9879\u7D22\u5F15\u3002\u5BF9\u5177\u6709\u76F8\u540C\u7EA6\u675F\u7684\u540C\u4E00\u670D\u52A1\u7684\u540E\u7EED\u8BF7\u6C42\u5C06\u91CD\u7528\u6B64\u7F13\u5B58\u7684\u89C4\u5212\uFF0C\u4ECE\u800C\u4F7F\u91CD\u590D\u89E3\u6790\u5FEB\u5F97\u591A\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E0A\u4E0B\u6587\u65E0\u5173\u4E0E\u4E0A\u4E0B\u6587\u76F8\u5173\u89C4\u5212",children:"\u4E0A\u4E0B\u6587\u65E0\u5173\u4E0E\u4E0A\u4E0B\u6587\u76F8\u5173\u89C4\u5212"}),"\n",(0,i.jsxs)(n.p,{children:["\u89C4\u5212\u6811\u8DDF\u8E2A\u5B83\u4EEC\u662F",(0,i.jsx)(n.strong,{children:"\u4E0A\u4E0B\u6587\u65E0\u5173"}),"\u8FD8\u662F",(0,i.jsx)(n.strong,{children:"\u4E0A\u4E0B\u6587\u76F8\u5173"}),"\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4E0A\u4E0B\u6587\u65E0\u5173\u89C4\u5212"}),"\uFF1A\u4E0D\u4F9D\u8D56\u4E8E\u7956\u5148\u670D\u52A1\uFF08\u4E0D\u4F7F\u7528\u57FA\u4E8E\u7956\u5148\u7684\u7EA6\u675F\uFF09\u3002\u8FD9\u4E9B\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u89E3\u6790\u4E0A\u4E0B\u6587\u4E2D\u5B89\u5168\u5730\u7F13\u5B58\u548C\u91CD\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4E0A\u4E0B\u6587\u76F8\u5173\u89C4\u5212"}),"\uFF1A\u4F7F\u7528\u57FA\u4E8E\u7956\u5148\u7684\u7EA6\u675F\uFF08\u4F8B\u5982\uFF0C\u6309\u7236\u670D\u52A1\u8FC7\u6EE4\uFF09\u3002\u8FD9\u4E9B\u4ECD\u7136\u88AB\u7F13\u5B58\uFF0C\u4F46\u88AB\u6807\u8BB0\u4E3A\u4E0A\u4E0B\u6587\u76F8\u5173\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u89C4\u5212\u6811\u7ED3\u6784",children:"\u89C4\u5212\u6811\u7ED3\u6784"}),"\n",(0,i.jsx)(n.p,{children:"\u5B8C\u6574\u7684\u89C4\u5212\u7ED3\u679C\u5305\u542B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface PlanResult {\n  tree: {\n    root: PlanServiceNode\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6BCF\u4E2A ",(0,i.jsx)(n.code,{children:"PlanServiceNode"})," \u5305\u62EC\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"serviceIdentifier"}),"\uFF1A\u6B63\u5728\u89E3\u6790\u7684\u670D\u52A1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bindings"}),"\uFF1A\u63CF\u8FF0\u5982\u4F55\u89E3\u6790\u5B83\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u7ED1\u5B9A\u8282\u70B9"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"isContextFree"}),"\uFF1A\u6B64\u8282\u70B9\u662F\u5426\u4F9D\u8D56\u4E8E\u89E3\u6790\u4E0A\u4E0B\u6587"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6BCF\u4E2A\u7ED1\u5B9A\u8282\u70B9\u5305\u542B\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"binding"}),"\uFF1A\u5B9E\u9645\u7684\u7ED1\u5B9A\u5B9E\u4F8B"]}),"\n",(0,i.jsx)(n.li,{children:"\u7279\u5B9A\u4E8E\u7C7B\u578B\u7684\u5143\u6570\u636E\uFF08\u7C7B\u5143\u6570\u636E\u3001\u53C2\u6570\u3001\u5C5E\u6027\u6CE8\u5165\u7B49\uFF09"}),"\n",(0,i.jsx)(n.li,{children:"\u4F9D\u8D56\u9879\u7684\u5B50\u670D\u52A1\u8282\u70B9"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53EF\u89C6\u5316\u89C4\u5212\u6811",children:"\u53EF\u89C6\u5316\u89C4\u5212\u6811"}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u4E0B\u9762\u7684\u4EA4\u4E92\u5F0F\u4EE3\u7801\u7F16\u8F91\u5668\u5C1D\u8BD5\u4E0D\u540C\u7684\u7ED1\u5B9A\u914D\u7F6E\u5E76\u67E5\u770B\u751F\u6210\u7684\u89C4\u5212\u6811\u3002\u7F16\u8F91\u5668\u5141\u8BB8\u4F60\u7F16\u5199 InversifyJS \u4EE3\u7801\u5E76\u53EF\u89C6\u5316\u751F\u6210\u7684\u89C4\u5212\u7ED3\u6784\uFF0C\u5E2E\u52A9\u4F60\u4E86\u89E3\u5BB9\u5668\u5982\u4F55\u89E3\u6790\u4F60\u7684\u4F9D\u8D56\u9879\u3002"}),"\n",(0,i.jsx)(o.A,{style:{height:500}}),"\n",(0,i.jsx)(n.h2,{id:"\u6027\u80FD\u8003\u8651",children:"\u6027\u80FD\u8003\u8651"}),"\n",(0,i.jsx)(n.p,{children:"\u89C4\u5212\u9636\u6BB5\u65E8\u5728\u9AD8\u6548\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7F13\u5B58"}),"\uFF1A\u89C4\u5212\u88AB\u7F13\u5B58\u5E76\u91CD\u7528\u4E8E\u76F8\u540C\u7684\u8BF7\u6C42"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u60F0\u6027\u6C42\u503C"}),"\uFF1A\u4E0D\u5FC5\u8981\u7684\u5B50\u5206\u652F\u4E0D\u4F1A\u88AB\u5B8C\u5168\u6C42\u503C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4E0D\u53EF\u53D8\u6570\u636E\u7ED3\u6784"}),"\uFF1A\u4F7F\u7528\u4E0D\u53EF\u53D8\u94FE\u8868\u8FDB\u884C\u9AD8\u6548\u7684\u7EA6\u675F\u5217\u8868\u7BA1\u7406"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u65E9\u671F\u9A8C\u8BC1"}),"\uFF1A\u5728\u89C4\u5212\u671F\u95F4\u800C\u4E0D\u662F\u89E3\u6790\u671F\u95F4\u6355\u83B7\u914D\u7F6E\u9519\u8BEF"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5927\u90E8\u5206\u8BA1\u7B97\u6210\u672C\u53D1\u751F\u5728\u5BF9\u670D\u52A1\u7684\u7B2C\u4E00\u6B21\u8BF7\u6C42\u671F\u95F4\u3002\u540E\u7EED\u8BF7\u6C42\u53D7\u76CA\u4E8E\u7F13\u5B58\u7684\u89C4\u5212\uFF0C\u4F7F\u5176\u901F\u5EA6\u663E\u8457\u52A0\u5FEB\u3002"})]})}function p(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},82073(e,n,r){let t;r.d(n,{A:()=>O});var i=r(68376),a=r(19744),o=r(38415),d=r(97412),s=r(46094);let c=`
self.addEventListener('message', async (ev) => {
  const { id, code, args } = ev.data || {};
  try {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    const mod = await import(url);
    URL.revokeObjectURL(url);

    const fn = mod.default;
    if (typeof fn !== 'function')
      throw new Error('Default export must be a function');

    const result = await fn(...args);
    self.postMessage({ id, kind: 'success', result });
  } catch (error) {
    self.postMessage({ id, kind: 'error', error });
  }
});
`,l=`declare type AbstractNewable<TInstance = unknown, TArgs extends unknown[] = any[]> = abstract new (...args: TArgs) => TInstance;\r
\r
declare interface BaseMultipleResolvedValueMetadataInjectOptions {\r
    chained?: boolean;\r
    isMultiple: true;\r
}\r
\r
declare interface BaseOptionalResolvedValueMetadataInjectOptions {\r
    optional: true;\r
}\r
\r
declare interface BaseResolvedValueMetadataInjectOptions<T> {\r
    name?: MetadataName;\r
    serviceIdentifier: ServiceIdentifier<T> | LazyServiceIdentifier<T>;\r
    tags?: ResolvedValueMetadataInjectTagOptions[];\r
}\r
\r
export declare type Bind = <T>(serviceIdentifier: ServiceIdentifier<T>) => BindToFluentSyntax<T>;\r
\r
export declare interface BindInFluentSyntax<T> extends BoundServiceSyntax {\r
    inSingletonScope(): BindWhenOnFluentSyntax<T>;\r
    inTransientScope(): BindWhenOnFluentSyntax<T>;\r
    inRequestScope(): BindWhenOnFluentSyntax<T>;\r
}\r
\r
export declare type BindingActivation<T = unknown> = (context: ResolutionContext, injectable: T) => Resolved<T>;\r
\r
export declare interface BindingConstraints {\r
    readonly name: MetadataName | undefined;\r
    readonly tags: Map<MetadataTag, unknown>;\r
    readonly serviceIdentifier: ServiceIdentifier;\r
    getAncestor(): BindingConstraints | undefined;\r
}\r
\r
export declare type BindingDeactivation<T = unknown> = (injectable: T) => void | Promise<void>;\r
\r
export declare interface BindingIdentifier {\r
    readonly id: number;\r
}\r
\r
export declare type BindingScope = 'Singleton' | 'Transient' | 'Request';\r
\r
export declare const bindingScopeValues: {\r
    [TKey in BindingScope]: TKey;\r
};\r
\r
declare type BindingType = 'ConstantValue' | 'DynamicValue' | 'Factory' | 'Instance' | 'Provider' | 'ResolvedValue' | 'ServiceRedirection';\r
\r
export declare const bindingTypeValues: {\r
    [TKey in BindingType]: TKey;\r
};\r
\r
export declare interface BindInWhenOnFluentSyntax<T> extends BindInFluentSyntax<T>, BindWhenOnFluentSyntax<T> {\r
}\r
\r
export declare interface BindOnFluentSyntax<T> extends BoundServiceSyntax {\r
    onActivation(activation: BindingActivation<T>): BindWhenFluentSyntax<T>;\r
    onDeactivation(deactivation: BindingDeactivation<T>): BindWhenFluentSyntax<T>;\r
}\r
\r
export declare interface BindToFluentSyntax<T> {\r
    to(type: Newable<T>): BindInWhenOnFluentSyntax<T>;\r
    toSelf(): BindInWhenOnFluentSyntax<T>;\r
    toConstantValue(value: T): BindWhenOnFluentSyntax<T>;\r
    toDynamicValue(builder: DynamicValueBuilder<T>): BindInWhenOnFluentSyntax<T>;\r
    toFactory(factory: T extends Factory<unknown, any> ? (context: ResolutionContext) => T | Promise<T> : never): BindWhenOnFluentSyntax<T>;\r
    /**\r
     * @deprecated Use \`toFactory()\` instead. Providers will be removed in v8.\r
     * Providers exist for historical reasons from v5 when async dependencies weren't supported.\r
     * Factories are more flexible and can handle both sync and async operations.\r
     */\r
    toProvider(provider: T extends Provider<unknown, any> ? (context: ResolutionContext) => T : never): BindWhenOnFluentSyntax<T>;\r
    toResolvedValue(factory: () => T | Promise<T>): BindInWhenOnFluentSyntax<T>;\r
    toResolvedValue<TArgs extends unknown[] = any[]>(factory: (...args: TArgs) => T | Promise<T>, injectOptions: MapToResolvedValueInjectOptions<TArgs>): BindInWhenOnFluentSyntax<T>;\r
    toService(service: ServiceIdentifier<T>): void;\r
}\r
\r
export declare interface BindWhenFluentSyntax<T> extends BoundServiceSyntax {\r
    when(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenAnyAncestor(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenAnyAncestorIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenAnyAncestorNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenAnyAncestorTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenDefault(): BindOnFluentSyntax<T>;\r
    whenNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenNoAncestor(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenNoAncestorIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenNoAncestorNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenNoAncestorTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenNoParent(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenNoParentIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenNoParentNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenNoParentTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenParent(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenParentIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenParentNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenParentTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
}\r
\r
export declare interface BindWhenOnFluentSyntax<T> extends BindWhenFluentSyntax<T>, BindOnFluentSyntax<T> {\r
}\r
\r
export declare interface BoundServiceSyntax {\r
    getIdentifier(): BindingIdentifier;\r
}\r
\r
export declare class Container extends inversify.Container {\r
    constructor();\r
}\r
\r
declare class Container_2 {\r
    #private;\r
    constructor(options?: ContainerOptions);\r
    bind<T>(serviceIdentifier: ServiceIdentifier<T>): BindToFluentSyntax<T>;\r
    get<T>(serviceIdentifier: ServiceIdentifier<T>, options: OptionalGetOptions): T | undefined;\r
    get<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetOptions): T;\r
    getAll<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetAllOptions): T[];\r
    getAllAsync<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetAllOptions): Promise<T[]>;\r
    getAsync<T>(serviceIdentifier: ServiceIdentifier<T>, options: OptionalGetOptions): Promise<T | undefined>;\r
    getAsync<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetOptions): Promise<T>;\r
    isBound(serviceIdentifier: ServiceIdentifier, options?: IsBoundOptions): boolean;\r
    isCurrentBound(serviceIdentifier: ServiceIdentifier, options?: IsBoundOptions): boolean;\r
    load(...modules: ContainerModule[]): Promise<void>;\r
    loadSync(...modules: ContainerModule[]): void;\r
    onActivation<T>(serviceIdentifier: ServiceIdentifier<T>, activation: BindingActivation<T>): void;\r
    onDeactivation<T>(serviceIdentifier: ServiceIdentifier<T>, deactivation: BindingDeactivation<T>): void;\r
    register(pluginConstructor: Newable): void;\r
    restore(): void;\r
    rebind<T>(serviceIdentifier: ServiceIdentifier<T>): Promise<BindToFluentSyntax<T>>;\r
    rebindSync<T>(serviceIdentifier: ServiceIdentifier<T>): BindToFluentSyntax<T>;\r
    snapshot(): void;\r
    unbind(identifier: BindingIdentifier | ServiceIdentifier): Promise<void>;\r
    unbindAll(): Promise<void>;\r
    unbindAllSync(): void;\r
    unbindSync(identifier: BindingIdentifier | ServiceIdentifier): void;\r
    unload(...modules: ContainerModule[]): Promise<void>;\r
    unloadSync(...modules: ContainerModule[]): void;\r
}\r
\r
export declare class ContainerModule {\r
    #private;\r
    constructor(load: (options: ContainerModuleLoadOptions) => void | Promise<void>);\r
    get id(): number;\r
    load(options: ContainerModuleLoadOptions): void | Promise<void>;\r
}\r
\r
export declare interface ContainerModuleLoadOptions {\r
    bind: Bind;\r
    isBound: IsBound;\r
    onActivation: OnActivation;\r
    onDeactivation: OnDeactivation;\r
    rebind: Rebind;\r
    rebindSync: RebindSync;\r
    unbind: Unbind;\r
    unbindSync: UnbindSync;\r
}\r
\r
export declare interface ContainerOptions {\r
    autobind?: true;\r
    defaultScope?: BindingScope | undefined;\r
    parent?: Container_2 | undefined;\r
}\r
\r
export declare function decorate(decorators: ClassDecorator | ClassDecorator[], target: Function): void;\r
\r
export declare function decorate(decorators: ParameterDecorator | ParameterDecorator[], target: Function, parameterIndex: number): void;\r
\r
export declare function decorate(decorators: ParameterDecorator | ParameterDecorator[], target: Function, methodName: string | symbol, parameterIndex: number): void;\r
\r
export declare function decorate(decorators: MethodDecorator | PropertyDecorator | MethodDecorator[] | PropertyDecorator[], target: Function, property: string | symbol): void;\r
\r
export declare type DynamicValueBuilder<T> = (context: ResolutionContext) => Resolved<T>;\r
\r
export declare type Factory<TActivated, in TArgs extends unknown[] = any[]> = (...args: TArgs) => TActivated | Promise<TActivated>;\r
\r
export declare interface GetAllOptions extends GetOptions {\r
    chained?: boolean;\r
}\r
\r
export declare interface GetOptions {\r
    autobind?: boolean;\r
    name?: MetadataName;\r
    optional?: boolean;\r
    tag?: GetOptionsTagConstraint;\r
}\r
\r
export declare interface GetOptionsTagConstraint {\r
    key: MetadataTag;\r
    value: unknown;\r
}\r
\r
export declare function inject(serviceIdentifier: ServiceIdentifier | LazyServiceIdentifier): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare function injectable(scope?: BindingScope): ClassDecorator;\r
\r
export declare function injectFromBase(options?: InjectFromBaseOptions): ClassDecorator;\r
\r
export declare interface InjectFromBaseOptions {\r
    extendConstructorArguments?: boolean | undefined;\r
    extendProperties?: boolean | undefined;\r
    lifecycle?: InjectFromBaseOptionsLifecycle | undefined;\r
}\r
\r
export declare interface InjectFromBaseOptionsLifecycle {\r
    extendPreDestroyMethods?: boolean | undefined;\r
    extendPostConstructMethods?: boolean | undefined;\r
}\r
\r
export declare function injectFromHierarchy(options?: InjectFromHierarchyOptions): ClassDecorator;\r
\r
export declare interface InjectFromHierarchyOptions {\r
    extendConstructorArguments?: boolean | undefined;\r
    extendProperties?: boolean | undefined;\r
    lifecycle?: InjectFromHierarchyOptionsLifecycle | undefined;\r
}\r
\r
export declare interface InjectFromHierarchyOptionsLifecycle {\r
    extendPreDestroyMethods?: boolean | undefined;\r
    extendPostConstructMethods?: boolean | undefined;\r
}\r
\r
declare namespace inversify {\r
    export {\r
        LazyServiceIdentifier,\r
        Newable,\r
        ServiceIdentifier,\r
        Bind,\r
        BindInFluentSyntax,\r
        BindInWhenOnFluentSyntax,\r
        BindOnFluentSyntax,\r
        BindToFluentSyntax,\r
        BindWhenFluentSyntax,\r
        BindWhenOnFluentSyntax,\r
        BindingIdentifier,\r
        BoundServiceSyntax,\r
        Container_2 as Container,\r
        ContainerModule,\r
        ContainerModuleLoadOptions,\r
        ContainerOptions,\r
        IsBound,\r
        IsBoundOptions,\r
        MapToResolvedValueInjectOptions,\r
        OnActivation,\r
        OnDeactivation,\r
        Rebind,\r
        RebindSync,\r
        ResolvedValueInjectOptions,\r
        ResolvedValueMetadataInjectOptions,\r
        ResolvedValueMetadataInjectTagOptions,\r
        Unbind,\r
        UnbindSync,\r
        BindingActivation,\r
        BindingConstraints,\r
        BindingDeactivation,\r
        BindingScope,\r
        DynamicValueBuilder,\r
        Factory,\r
        GetAllOptions,\r
        GetOptions,\r
        GetOptionsTagConstraint,\r
        InjectFromBaseOptions,\r
        InjectFromBaseOptionsLifecycle,\r
        InjectFromHierarchyOptions,\r
        InjectFromHierarchyOptionsLifecycle,\r
        MetadataName,\r
        MetadataTag,\r
        MultiInjectOptions,\r
        OptionalGetOptions,\r
        Provider,\r
        ResolutionContext,\r
        bindingScopeValues,\r
        bindingTypeValues,\r
        decorate,\r
        inject,\r
        injectFromBase,\r
        injectFromHierarchy,\r
        injectable,\r
        multiInject,\r
        named,\r
        optional,\r
        postConstruct,\r
        preDestroy,\r
        tagged,\r
        unmanaged\r
    }\r
}\r
\r
export declare type IsBound = (serviceIdentifier: ServiceIdentifier, options?: IsBoundOptions) => boolean;\r
\r
export declare interface IsBoundOptions {\r
    name?: MetadataName;\r
    tag?: GetOptionsTagConstraint;\r
}\r
\r
declare const islazyServiceIdentifierSymbol: unique symbol;\r
\r
export declare class LazyServiceIdentifier<TInstance = unknown> {\r
    #private;\r
    [islazyServiceIdentifierSymbol]: true;\r
    constructor(buildServiceId: () => ServiceIdentifier<TInstance>);\r
    static is<TInstance = unknown>(value: unknown): value is LazyServiceIdentifier<TInstance>;\r
    unwrap(): ServiceIdentifier<TInstance>;\r
}\r
\r
export declare type MapToResolvedValueInjectOptions<TArgs extends unknown[]> = {\r
    [K in keyof TArgs]-?: ResolvedValueInjectOptions<TArgs[K]>;\r
};\r
\r
export declare type MetadataName = number | string | symbol;\r
\r
export declare type MetadataTag = number | string | symbol;\r
\r
export declare function multiInject(serviceIdentifier: ServiceIdentifier | LazyServiceIdentifier, options?: MultiInjectOptions): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare interface MultiInjectOptions {\r
    chained?: boolean;\r
}\r
\r
declare interface MultipleOptionalResolvedValueMetadataInjectOptions<T> extends BaseResolvedValueMetadataInjectOptions<T>, BaseMultipleResolvedValueMetadataInjectOptions, BaseOptionalResolvedValueMetadataInjectOptions {\r
}\r
\r
declare interface MultipleResolvedValueMetadataInjectOptions<T> extends BaseResolvedValueMetadataInjectOptions<T>, BaseMultipleResolvedValueMetadataInjectOptions {\r
}\r
\r
export declare function named(name: MetadataName): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare type Newable<TInstance = unknown, TArgs extends unknown[] = any[]> = new (...args: TArgs) => TInstance;\r
\r
export declare type OnActivation = <T>(serviceIdentifier: ServiceIdentifier<T>, activation: BindingActivation<T>) => void;\r
\r
export declare type OnDeactivation = <T>(serviceIdentifier: ServiceIdentifier<T>, deactivation: BindingDeactivation<T>) => void;\r
\r
export declare function optional(): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare interface OptionalGetOptions extends GetOptions {\r
    optional: true;\r
}\r
\r
declare interface OptionalResolvedValueMetadataInjectOptions<T> extends BaseResolvedValueMetadataInjectOptions<T>, BaseOptionalResolvedValueMetadataInjectOptions {\r
}\r
\r
export declare function postConstruct(): MethodDecorator;\r
\r
export declare function preDestroy(): MethodDecorator;\r
\r
/**\r
 * @deprecated Use \`Factory\` instead. Provider will be removed in v8.\r
 * Providers exist for historical reasons from v5 when async dependencies weren't supported.\r
 * Factories are more flexible and can handle both sync and async operations.\r
 */\r
export declare type Provider<TActivated, in TArgs extends unknown[] = any[]> = (...args: TArgs) => Promise<TActivated>;\r
\r
export declare type Rebind = <T>(serviceIdentifier: ServiceIdentifier<T>) => Promise<BindToFluentSyntax<T>>;\r
\r
export declare type RebindSync = <T>(serviceIdentifier: ServiceIdentifier<T>) => BindToFluentSyntax<T>;\r
\r
export declare interface ResolutionContext {\r
    get<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options: OptionalGetOptions): TActivated | undefined;\r
    get<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): TActivated;\r
    getAll<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): TActivated[];\r
    getAllAsync<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): Promise<TActivated[]>;\r
    getAsync<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options: OptionalGetOptions): Promise<TActivated | undefined>;\r
    getAsync<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): Promise<TActivated>;\r
}\r
\r
declare type Resolved<TActivated> = SyncResolved<TActivated> | Promise<SyncResolved<TActivated>>;\r
\r
export declare type ResolvedValueInjectOptions<T> = LazyServiceIdentifier<T> | ResolvedValueMetadataInjectOptions<T> | ServiceIdentifier<T>;\r
\r
export declare type ResolvedValueMetadataInjectOptions<T> = [T] extends [\r
(infer U)[] | undefined\r
] ? [T] extends [U[]] ? MultipleResolvedValueMetadataInjectOptions<U> | BaseResolvedValueMetadataInjectOptions<T> : MultipleOptionalResolvedValueMetadataInjectOptions<U> | OptionalResolvedValueMetadataInjectOptions<T> : T extends undefined ? OptionalResolvedValueMetadataInjectOptions<T> : BaseResolvedValueMetadataInjectOptions<T>;\r
\r
export declare interface ResolvedValueMetadataInjectTagOptions {\r
    key: MetadataTag;\r
    value: unknown;\r
}\r
\r
export declare type ServiceIdentifier<TInstance = unknown> = string | symbol | Newable<TInstance> | AbstractNewable<TInstance> | Function;\r
\r
declare type SyncResolved<TActivated> = TActivated;\r
\r
export declare function tagged(key: MetadataTag, value: unknown): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare type Unbind = (identifier: BindingIdentifier | ServiceIdentifier) => Promise<void>;\r
\r
export declare type UnbindSync = (identifier: BindingIdentifier | ServiceIdentifier) => void;\r
\r
export declare function unmanaged(): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export { }\r
`;async function u(){return void 0===t&&((t=await Promise.all([r.e("4014"),r.e("8177"),r.e("9102")]).then(r.bind(r,8189))).typescript.typescriptDefaults.addExtraLib(l,"file:///node_modules/@types/inversify.d.ts"),t.typescript.typescriptDefaults.setCompilerOptions({allowSyntheticDefaultImports:!0,experimentalDecorators:!0,moduleResolution:t.typescript.ModuleResolutionKind.NodeJs,target:t.typescript.ScriptTarget.ES2020})),t}function p({beforeCodeRun:e,Button:n,onPlan:r,style:t}){let a=function(){let[e,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{!async function(){await (0,o.Ay)(),n(!0)}()},[]),e}(),l=(0,d.useRef)(r);(0,d.useEffect)(()=>{l.current=r},[r]);let p=(0,d.useRef)(function(e){let n=new Blob([c],{type:"text/javascript"}),r=URL.createObjectURL(n),t=new Worker(r,{type:"module"});URL.revokeObjectURL(r);let i=1,a=new Map;function o(e){let n=a.get(e);if(void 0!==n)return a.delete(e),n}return t.addEventListener("error",e=>{let n=Error(`Worker error: ${e.message}`,{cause:e.error});for(let e of a.values())e.reject(n);a.clear()}),t.addEventListener("message",n=>{switch(n.data.kind){case"error":{let e=o(n.data.id);if(void 0===e)return;e.reject(n.data.error)}break;case"plan":e?.onPlan?.(n.data.options,n.data.result);break;case"success":{let e=o(n.data.id);if(void 0===e)return;e.resolve(n.data.result)}}}),t.addEventListener("messageerror",()=>{let e=Error("Worker message serialization error");for(let n of a.values())n.reject(e);a.clear()}),{rpc:async function(e,n){let r=i++;return new Promise((i,o)=>{a.set(r,{reject:o,resolve:i}),t.postMessage({args:e,code:n,id:r})})},terminate:()=>{t.terminate()}}}({onPlan:(e,n)=>l.current?.(e,n)})),v=(0,d.useRef)(null),f=(0,d.useRef)(null),[x,y]=d.useState(!0);(0,d.useEffect)(()=>(v.current&&(async()=>{let e,n=await u(),r=(e=n.Uri.parse("file:///main.ts"),n.editor.getModel(e)??n.editor.createModel(`
import { Container, inject, injectable } from 'inversify';

@injectable()
class Weapon {
  damage = 10;
}

@injectable()
class Ninja {
  public readonly weapon: Weapon;

  constructor(@inject(Weapon) weapon: Weapon) {
    this.weapon = weapon;
  }
}

export default async () => {
  const container = new Container();

  container.bind(Ninja).toSelf().inSingletonScope();
  container.bind(Weapon).toSelf().inSingletonScope();

  const ninja = container.get(Ninja);

  console.log(JSON.stringify(ninja));
}
`.trim(),"typescript",e));f.current=n.editor.create(v.current,{model:r}),y(!1)})(),()=>{null!==f.current&&f.current.dispose(),p.current.terminate()}),[]);let h={...t,position:"relative"};return(0,i.jsxs)("div",{style:h,children:[(0,i.jsx)("div",{className:"_spinnerOverlay_1ifuj_24",style:{display:x?"flex":"none"},children:(0,i.jsx)("div",{className:"_spinnerDot_1ifuj_15"})}),(0,i.jsx)("div",{style:{height:"calc(100% - 40px)",width:"100%"},children:(0,i.jsx)("div",{ref:v,className:"_reactMonacoEditorContainer_1ifuj_10"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n,{onClick:()=>{if(null!==f.current&&a){var n;e?.();let r=function(e,n){for(let[e,r]of n)void 0===s.availablePlugins[e]&&(0,s.registerPlugin)(e,r);return(0,s.transform)(e,{filename:"main.ts",plugins:[...n.map(([e])=>[e])],sourceType:"module"}).code??""}((0,o.Uz)(f.current.getValue(),{jsc:{parser:{decorators:!0,syntax:"typescript"},target:"es2022",transform:{decoratorMetadata:!0,legacyDecorator:!0}},module:{type:"es6"}}).code,[["customMapImports",(n={inversify:`${window.location.origin}/inversify.js`},()=>({visitor:{ImportDeclaration(e){let r=n[e.node.source.value];void 0!==r&&(e.node.source=s.packages.types.stringLiteral(r))}}}))]]);p.current.rpc([],r)}},label:"Run"})})]})}var v=r(65789),f=r(18712),x=r(90228),y=r(4921);function h({block:e=!1,className:n,disabled:r=!1,onClick:t,outline:a=!1,label:o,link:d,size:s,style:c,variant:l="primary"}){let u="lg"===s||"sm"===s?`button--${s}`:"",p=`button--${l}`,v=r?null:d??null;return(0,i.jsx)(x.A,{...null===v?{}:{to:v},children:(0,i.jsx)("button",{"aria-disabled":r,className:(0,y.A)("button",u,a?"button--outline":"",p,e?"button--block":"",r?"disabled":"",n),onClick:t,role:"button",style:c,children:o})})}var g=r(80673);g.A.initialize({});let T=({source:e,id:n})=>{let r=(0,d.useRef)(null);return(0,d.useEffect)(()=>{void 0!==e&&(async()=>{if(null!==r.current){r.current.innerHTML=e;let{svg:t,bindFunctions:i}=await g.A.render(`mermaid-diagram-${n}`,e);r.current.innerHTML=t,i?.(r.current)}})()},[n,e]),(0,i.jsx)("div",{id:n,ref:r})};function j(e){return e.replace(/\n/g,"<br />").replace(/\r/g,"").replace(/\t/g,"  ").replace(/([[\]{}\\"<>])/g,"\\$1")}function m(e){return"string"==typeof e?e:"symbol"==typeof e?e.toString():"function"==typeof e||"object"==typeof e?""===e.name?"AnonymousFunction":e.name:"Unknown"}function I(e){return"classMetadata"in e&&"constructorParams"in e}function S(e){return"params"in e&&!("classMetadata"in e)}function b(e){return"redirections"in e}function O({style:e}){let[n,r]=(0,d.useState)([]),[t,o]=(0,d.useState)(void 0),s=void 0!==t?n[t]:void 0;return(0,i.jsx)(a.A,{children:()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(f.A,{children:[(0,i.jsx)(v.A,{value:"editor",label:"Editor",children:(0,i.jsx)(p,{beforeCodeRun:()=>{r([]),o(void 0)},Button:h,onPlan:(e,t)=>{var i;let a=function(e,n){let r=["flowchart TD"],t=0,i=new Map;function a(e,n){let r=i.get(e);if(void 0===r){var a;let r=(a=t++,`${n}_${String(a)}`);return i.set(e,r),r}return r}function o(e){let n=a(e,"service"),t=j(m(e.serviceIdentifier));if(r.push(`${n}["ServiceNode<br/>Service identifier: ${t}<br/>Is context free: ${String(e.isContextFree)}"]`),void 0!==e.bindings)if(Array.isArray(e.bindings))for(let r of e.bindings)d(r,n);else d(e.bindings,n);return n}function d(e,n){if(I(e))!function(e,n){let t=a(e,"instance"),i=e.binding.type,d=j(e.binding.implementationType.name);r.push(`${t}["${i}: ${d}<br/>Binding scope: ${e.binding.scope}"]`),r.push(`${n} --> ${t}`);for(let n=0;n<e.constructorParams.length;n++){let i=e.constructorParams[n];if(void 0!==i){let e=o(i);r.push(`${t} -.->|param ${String(n)}| ${e}`)}}if(e.propertyParams.length>0)for(let[n,i]of e.propertyParams){let e=j(String(n)),a=o(i);r.push(`${t} -.->|prop: ${e}| ${a}`)}}(e,n);else if(S(e))!function(e,n){let t=a(e,"resolved"),i=e.binding.type;r.push(`${t}["${i}<br/>Binding scope: ${e.binding.scope}"]`),r.push(`${n} --> ${t}`);for(let n=0;n<e.params.length;n++){let i=e.params[n];if(void 0!==i){let e=o(i);r.push(`${t} -.->|param ${String(n)}| ${e}`)}}}(e,n);else if(b(e)){var t=e,i=n;let o=a(t,"redirect"),s=j(m(t.binding.targetServiceIdentifier));for(let e of(r.push(`${o}["ServiceRedirection \u{2192} ${s}"]`),r.push(`${i} --> ${o}`),t.redirections))d(e,o)}else I(e)||S(e)||b(e)||function(e,n){let t=a(e,"leaf"),i=e.binding.type,o=i;if("ConstantValue"===i&&"value"in e.binding){let n,r=e.binding.value;n=null===r?"null":void 0===r?"undefined":"object"==typeof r?j("{...}"):"string"==typeof r?j(r.slice(0,30)):"number"==typeof r||"boolean"==typeof r?j(String(r)):"symbol"==typeof r?j(r.toString()):typeof r,o=`${i}: ${n}`}r.push(`${t}["${o}<br/>Binding scope: ${e.binding.scope}"]`),r.push(`${n} --> ${t}`)}(e,n)}let s="root",c=j(m(e.serviceIdentifier)),l=e.optional?" (optional)<br/>":"",u="isMultiple"in e&&e.isMultiple?" (multiple)<br/>":"",p=void 0!==e.name?`Name: "${String(e.name)}"<br/>`:"";return r.push(`${s}["Request:<br/>Service identifier: ${c}<br/>${p}${l}${u}"]`),r.push(`style ${s} fill:#e1f5ff,stroke:#0288d1,stroke-width:3px`),o(n.tree.root),r.push(`${s} --> ${a(n.tree.root,"service")}`),r.join("\n")}(e,t),d="string"==typeof(i=e.serviceIdentifier)?i:"symbol"==typeof i?i.toString():"function"==typeof i||"object"==typeof i?""===i.name?"AnonymousFunction":i.name:"Unknown";r(n=>[...n,{displayName:d,serviceIdentifier:e.serviceIdentifier,source:a}]),o(e=>void 0===e?0:n.length)},style:e})}),(0,i.jsxs)(v.A,{value:"graph",label:"Graph",children:[0===n.length?(0,i.jsx)("p",{children:"Run the code to generate a dependency graph."}):(0,i.jsxs)("div",{style:{marginBottom:"1rem",marginTop:"1rem"},children:[(0,i.jsx)("label",{htmlFor:"graph-selector",style:{marginRight:"0.5rem"},children:"Select Graph:"}),(0,i.jsx)("select",{id:"graph-selector",value:t??"",onChange:e=>{o(Number(e.target.value))},style:{border:"1px solid var(--ifm-color-emphasis-300)",borderRadius:"4px",padding:"0.5rem"},children:n.map((e,n)=>(0,i.jsx)("option",{value:n,children:e.displayName},n))})]}),(0,i.jsx)(T,{source:s?.source,id:"mermaid-graph"})]})]})})})}}}]);