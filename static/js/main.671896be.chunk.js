(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(11),a=n.n(s),r=(n(18),n(8)),u=n(10),o=n.n(u),j=n(12),d=n(4),l=(n(20),n(5)),b=n(2),m=(n(21),n(0)),h=function(){return Object(m.jsxs)("div",{className:"Home",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Eu nulla mollit elit magna consequat ea aute ex cillum reprehenderit. Sint quis labore anim in nostrud velit sit labore ipsum proident ea eu magna. Esse do deserunt ut quis tempor labore et non. Magna sunt excepteur minim exercitation sint deserunt reprehenderit incididunt exercitation nulla esse."}),Object(m.jsx)("p",{children:"Et fugiat officia elit amet enim elit deserunt deserunt irure aute irure fugiat deserunt adipisicing. Qui minim incididunt anim cupidatat. Cillum dolor duis cupidatat ipsum dolore adipisicing voluptate veniam qui cillum in Lorem ullamco ullamco. Nisi laboris magna quis in aliqua consequat mollit. Duis duis nisi aute mollit enim anim labore dolore pariatur."})]}),Object(m.jsx)("img",{src:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",alt:"Product"})]})},O=function(){return Object(m.jsx)("div",{className:"Loading",children:Object(m.jsx)("h2",{children:"LOADING!!!"})})},p=(n(23),function(e){return Object(m.jsx)("div",{className:"Item",children:Object(m.jsx)(l.b,{to:"/shop/".concat(e.product.id),children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:e.product.image,alt:e.product.title}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("h3",{children:e.product.title}),Object(m.jsxs)("h4",{children:["\xa3",e.product.price]})]})]})})})}),x=(n(24),function(e){return Object(m.jsx)("div",{className:"ShopDisplay",children:e.products.map((function(e){return Object(m.jsx)(p,{product:e},e.id)}))})}),f=(n(25),function(e){return Object(m.jsxs)("div",{className:"Shop",children:[e.loading&&Object(m.jsx)(O,{}),!e.loading&&Object(m.jsx)(x,{products:e.products})]})}),v=n(13),k=n.n(v),g=(n(27),function(e){return Object(m.jsxs)("div",{className:"Total",children:["Total:\xa3",e.basket.reduce((function(e,t){return e+t.item.price*t.amount}),0)]})}),N=(n(28),function(e){return Object(m.jsxs)("div",{className:"Checkout",children:[Object(m.jsx)("h1",{children:"Basket"}),e.basket.map((function(t,n){return Object(m.jsxs)("div",{className:"checkout-item",children:[Object(m.jsx)("div",{children:t.item.title}),Object(m.jsxs)("div",{"data-id":n,children:[Object(m.jsx)("button",{onClick:e.reduceBasketAmount,children:"-"}),"Quantity:",t.amount,Object(m.jsx)("button",{onClick:e.increaseBasketAmount,children:"+"})]}),Object(m.jsxs)("div",{children:["\xa3",t.item.price*t.amount]})]},k()())})),Object(m.jsx)(g,{basket:e.basket}),Object(m.jsx)("button",{className:"btn",children:"Checkout"})]})}),S=(n(29),function(e){var t=Object(c.useState)(0),n=Object(d.a)(t,2),i=n[0],s=n[1],a=window.location.href.split("/shop/")[1],r=e.products[a-1];return Object(m.jsxs)("div",{className:"ItemDetail",children:[e.loading&&Object(m.jsx)(O,{}),!e.loading&&Object(m.jsxs)("div",{className:"item-div",children:[Object(m.jsx)("h1",{children:r.title}),Object(m.jsx)("img",{src:r.image,alt:r.title}),Object(m.jsx)("p",{children:r.description}),Object(m.jsxs)("form",{className:"add-to-basket",onSubmit:e.addToBasket,"data-id":a-1,children:[Object(m.jsxs)("label",{children:["Amount:",Object(m.jsx)("input",{type:"number",value:i,name:"Amount",onChange:function(e){s(e.target.value)}})]}),Object(m.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})]})]})}),B=(n(30),function(e){return Object(m.jsxs)("div",{className:"Nav",children:[Object(m.jsx)(l.b,{to:"/",children:"Home"}),Object(m.jsx)(l.b,{to:"/shop",children:"Shop"}),Object(m.jsxs)(l.b,{to:"/checkout",children:["Basket (",e.basketSize,")"]})]})}),y=(n(31),function(e){return Object(m.jsxs)("div",{className:"MainLayout",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:"title",children:"FakeShop"}),Object(m.jsx)(B,{basketSize:e.basketSize})]}),Object(m.jsx)("main",{children:Object(m.jsx)(b.a,{})}),Object(m.jsx)("footer",{children:"Made by James Spencer"})]})}),A=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),a=Object(d.a)(s,2),u=a[0],O=a[1],p=Object(c.useState)(!0),x=Object(d.a)(p,2),v=x[0],k=x[1];Object(c.useEffect)((function(){g()}),[]);var g=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(l.a,{children:Object(m.jsx)(b.d,{children:Object(m.jsxs)(b.b,{path:"/",element:Object(m.jsx)(y,{basketSize:u.length}),children:[Object(m.jsx)(b.b,{index:!0,element:Object(m.jsx)(h,{})}),Object(m.jsx)(b.b,{path:"shop",element:Object(m.jsx)(f,{products:n,loading:v})}),Object(m.jsx)(b.b,{path:"shop/:id",element:Object(m.jsx)(S,{products:n,loading:v,addToBasket:function(e){e.preventDefault();var t=parseInt(e.target.elements[0].value),c={item:n[e.target.dataset.id],amount:t};O([].concat(Object(r.a)(u),[c]))}})}),Object(m.jsx)(b.b,{path:"checkout",element:Object(m.jsx)(N,{basket:u,reduceBasketAmount:function(e){var t=Object(r.a)(u);t[parseInt(e.target.parentElement.dataset.id)].amount-=1,O(t)},increaseBasketAmount:function(e){var t=Object(r.a)(u);t[parseInt(e.target.parentElement.dataset.id)].amount+=1,O(t)}})})]})})})};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.671896be.chunk.js.map