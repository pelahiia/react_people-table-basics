(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(20),c(21),c(2)),s=c(0),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(8),l=c(11),o=c(4),b=c(1),d=(c(23),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})});function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=c(6),x=c.n(u),O=function(e){var t=e.person;return Object(s.jsx)(a.b,{to:"/people/".concat(t.slug),className:x()({"has-text-danger":"f"===t.sex}),children:t.name})},p=function(e){var t=e.people,c=e.person,n=Object(r.h)().slug,j=function(e){if(!e)return"-";var c=t.find((function(t){return t.name===e}));return c?Object(s.jsx)(O,{person:c}):e},i=c.slug,l=c.sex,o=c.name,b=c.born,d=c.died,h=c.motherName,u=c.fatherName;return Object(s.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":i===n}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(a.b,{to:"/people/".concat(i),className:x()({"has-text-danger":"f"===l}),children:o})}),Object(s.jsx)("td",{children:l}),Object(s.jsx)("td",{children:b}),Object(s.jsx)("td",{children:d}),Object(s.jsx)("td",{children:j(h)}),Object(s.jsx)("td",{children:j(u)})]})},m=function(e){var t=e.people;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(p,{person:e,people:t},e.slug)}))})]})},f=function(){var e=Object(b.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)([]),r=Object(o.a)(a,2),j=r[0],u=r[1],x=Object(b.useState)(!1),O=Object(o.a)(x,2),p=O[0],f=O[1],v=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(!0);case 10:return e.prev=10,f(!0),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){v()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[!p&&Object(s.jsx)(d,{}),c&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),p&&!c&&!j.length&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),p&&!c&&Object(s.jsx)(m,{people:j})]})})]})},v=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},g=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.b,{className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(s.jsx)(a.b,{className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},N=(c(24),function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(g,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(v,{})}),Object(s.jsxs)(r.b,{path:"people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(f,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(f,{})})]})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(N,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.0e62dd6d.chunk.js.map