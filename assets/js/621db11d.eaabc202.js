"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["9854"],{8830:function(t,e,s){s.r(e),s.d(e,{default:()=>f});var r=s("3112");s("3140");var o=s("2626"),n=s("9423"),a=s("9762"),i=s("8065"),u=s("2731"),l=s("1826"),h=s("1802"),c=s("8857");let g={authorListItem:"authorListItem_DNOn"};function d(t){let{author:e}=t;return(0,r.jsx)("li",{className:g.authorListItem,children:(0,r.jsx)(c.Z,{as:"h2",author:e,count:e.count})})}function p(t){let{authors:e}=t;return(0,r.jsx)("section",{className:(0,o.Z)("margin-vert--lg",g.authorsListSection),children:(0,r.jsx)("ul",{children:e.map(t=>(0,r.jsx)(d,{author:t},t.key))})})}function f(t){let{authors:e,sidebar:s}=t,c=(0,i.HV)();return(0,r.jsxs)(n.FG,{className:(0,o.Z)(a.k.wrapper.blogPages,a.k.page.blogAuthorsListPage),children:[(0,r.jsx)(n.d,{title:c}),(0,r.jsx)(l.Z,{tag:"blog_authors_list"}),(0,r.jsxs)(u.Z,{sidebar:s,children:[(0,r.jsx)(h.Z,{as:"h1",children:c}),(0,r.jsx)(p,{authors:e})]})]})}},8065:function(t,e,s){s.d(e,{HV:function(){return l},J$:function(){return c},Wi:function(){return i},ds:function(){return u},fw:function(){return h}});var r=s(3112);s(3140);var o=s(5217),n=s(673);function a(){let{selectMessage:t}=(0,n.c)();return e=>t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function i(t){let e=a();return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}function u(t){let e=a();return(0,o.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:e(t.count),authorName:t.name||t.key})}let l=()=>(0,o.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,r.jsx)(o.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function c(){return(0,r.jsx)(o.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);