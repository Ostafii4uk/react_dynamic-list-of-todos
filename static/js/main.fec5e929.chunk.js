(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(5),n=c.n(s),o=c(2),i=c(1),r=(c(10),c(11),c(4)),d=c.n(r),l=(c(12),c(0)),a=function(e){var t=e.todos,c=e.selectedUserId,s=e.onSelectedUserId,n=Object(i.useState)(""),r=Object(o.a)(n,2),a=r[0],u=r[1],j=Object(i.useState)(""),b=Object(o.a)(j,2),h=b[0],O=b[1],p=Object(i.useMemo)((function(){return t.filter((function(e){var t=e.title.toLowerCase(),c=a.toLowerCase();return t.includes(c)})).filter((function(e){switch(h){case"active":return!e.completed;case"completed":return e.completed;default:return e}}))}),[a,t,h]);return Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{className:"TodoList__list-container",children:[Object(l.jsx)("input",{type:"text",placeholder:"search",value:a,onChange:function(e){return u(e.target.value)}}),Object(l.jsxs)("select",{onChange:function(e){return O(e.target.value)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,selected:!0,children:"select activities"}),Object(l.jsx)("option",{children:"active"}),Object(l.jsx)("option",{children:"completed"}),Object(l.jsx)("option",{children:"select all"})]}),Object(l.jsx)("ul",{className:"TodoList__list",children:p.map((function(e){return Object(l.jsxs)("li",{className:d()("TodoList__item",e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsxs)("button",{type:"button",className:d()("TodoList__user-button",{"TodoList__user-button--selected":c===e.userId},"button"),onClick:function(){s(e.userId)},children:["User\xa0",e.userId]})]},e.id)}))})]})]})},u=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){return e.json()}))},j=(c(14),function(e){var t=e.selectedUserId,c=e.onSetSelectedUserId,s=Object(i.useState)(),n=Object(o.a)(s,2),r=n[0],d=n[1];return Object(i.useEffect)((function(){var e;(e=t,u("users/".concat(e))).then((function(e){return d(e)}))}),[t]),Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected user: ".concat(null===r||void 0===r?void 0:r.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:null===r||void 0===r?void 0:r.username}),Object(l.jsx)("p",{className:"CurrentUser__email",children:null===r||void 0===r?void 0:r.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:null===r||void 0===r?void 0:r.phone}),Object(l.jsx)("button",{className:"TodoList__user-button button",type:"button",onClick:function(){c(0)},children:"Clear"})]})}),b=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),r=Object(o.a)(n,2),d=r[0],b=r[1];return Object(i.useEffect)((function(){u("todos").then((function(e){b(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(a,{todos:d,onSelectedUserId:s,selectedUserId:c})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(j,{selectedUserId:c,onSetSelectedUserId:s}):"No user selected"})})]})};n.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.fec5e929.chunk.js.map