(this["webpackJsonpticket-booking"]=this["webpackJsonpticket-booking"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(6),a=n.n(s),r=(n(12),n(7)),j=n(4),l=(n(13),n(0));var o=function(){var e=Object(c.useState)("joker"),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),a=Object(j.a)(s,2),o=a[0],u=a[1],d=Object(c.useState)(Array(40).fill(null)),b=Object(j.a)(d,1)[0];function O(e){o.includes(Number(e.target.id))?u((function(t){return t.filter((function(t){return t!==Number(e.target.id)}))})):u((function(t){return[].concat(Object(r.a)(t),[Number(e.target.id)])}))}var h=2,v=b.map((function(e,t){return t===h?Object(l.jsx)("div",{id:t},t):t===5+h?(h+=10,Object(l.jsx)("div",{id:t},t)):Object(l.jsx)("div",{className:o.includes(t)?"seat occupied":"seat un-occupied",id:t,onClick:O},t)}));return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Book Tickets"}),Object(l.jsxs)("select",{value:n,onChange:function(e){i(e.target.value)},children:[Object(l.jsx)("option",{value:"joker",children:"Joker (10$)"}),Object(l.jsx)("option",{value:"girlOnTrain",children:"The girl On the Train (8$)"}),Object(l.jsx)("option",{value:"lionKing",children:"Lion King (11$)"}),Object(l.jsx)("option",{value:"avengers",children:"Avengers (12$)"})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("div",{className:"seat un-occupied"}),Object(l.jsx)("span",{children:"UnOccupied"}),Object(l.jsx)("div",{className:"seat occupied"}),Object(l.jsx)("span",{children:"Occupied"})]}),Object(l.jsx)("div",{className:"screen"}),Object(l.jsx)("div",{className:"seat-div",children:v}),Object(l.jsxs)("p",{children:[" You have selected ",Object(l.jsxs)("span",{className:"selection",children:[" ",o.length," "]})," seats and your total price is ",Object(l.jsxs)("span",{className:"selection",children:[o.length*{joker:10,girlOnTrain:8,lionKing:11,avengers:12}[n],"$"]})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.26fbc584.chunk.js.map