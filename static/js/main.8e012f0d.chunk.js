(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),a(1));a(10);var u=function(){var e=l.a.useState(null),t=Object(o.a)(e,2),a=t[0],n=t[1],r=l.a.useState(null),c=Object(o.a)(r,2),u=c[0],s=c[1],i=l.a.useState(0),m=Object(o.a)(i,2),d=m[0],h=m[1],v=l.a.useState(""),E=Object(o.a)(v,2),b=E[0],g=E[1],p=l.a.useState(""),w=Object(o.a)(p,2),y=w[0],f=w[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"BMI-container"},l.a.createElement("legend",null,"Body Mass Index (BMI) Calculator"),l.a.createElement("div",{className:"BMIcalculato"},l.a.createElement("label",null,"Enter your weight in kg "),l.a.createElement("input",{type:"number",value:a,onChange:function(e){n(e.currentTarget.value)}})),l.a.createElement("div",{className:"BMIcalculato"},l.a.createElement("label",null,"Enter your height in meter "),l.a.createElement("input",{type:"number",value:u,onChange:function(e){s(e.currentTarget.value)}})),l.a.createElement("div",{className:"display"},l.a.createElement("p",null,"Your BMI result is... ",d),l.a.createElement("div",{className:"my-result"},l.a.createElement("p",null,"You are..."),l.a.createElement("p",{style:{color:y}},b))),l.a.createElement("div",{className:"result-button"},l.a.createElement("button",{className:"BMIcalculato",onClick:function(){h(Math.round(a/(u*u)));var e=Math.round(a/(u*u));e>=18&&e<25?(g("Normal"),f("green")):e>=25&&e<30?(g("over weight"),f("orange")):e>=30?(g("Obese"),f("red")):e<18?(g("Under weight"),f("blue")):(g("Please enter numbers only"),h("")),n(""),s("")}},"result"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8e012f0d.chunk.js.map