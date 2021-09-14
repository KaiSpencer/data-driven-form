var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,r)=>{for(var i in r||(r={}))n.call(r,i)&&a(e,i,r[i]);if(t)for(var i of t(r))o.call(r,i)&&a(e,i,r[i]);return e};"undefined"!=typeof require&&require;import{R as i,H as l,C as c,D as s,a as m,I as p,T as d,r as h,u,b as g,B as E,c as y,d as f,e as b,S as k,f as C,g as x,h as v,i as P}from"./vendor.0380ee8a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const F=({component:e,formChoices:t,setFormChoices:n})=>i.createElement(i.Fragment,null,e.title&&i.createElement("h2",null,e.title),e.hint&&i.createElement(l,null,e.hint),i.createElement(c,{onChange:e=>{const o=e.target;o.checked?t[o.id]=o.checked:delete t[o.id],n(r({},t))}},e.options.map((e=>i.createElement(c.Box,{id:e.id,key:e.id},e.displayText))))),T=({component:e,formChoices:t,setFormChoices:n})=>i.createElement(i.Fragment,null,e.title&&i.createElement("h2",null,e.title),i.createElement(s,{hint:e.hint||"",onChange:o=>{const a=o.target.value;console.log(a),t[e.id]=a,n(r({},t))}})),S=({component:e,formChoices:t,setFormChoices:n})=>{const{Radios:{component:o,props:a},Hint:{component:c,props:s}}=(p={Radios:m,Hint:l},d=e.overrides,Object.keys(p).reduce(((e,t)=>{const n=d&&d[t]||{};return e[t]={component:n.component||p[t],props:r({},n.props)},e}),{}));var p,d;return i.createElement(i.Fragment,null,e.title&&i.createElement("h2",null,e.title),e.hint&&i.createElement(c,r({},s),e.hint),i.createElement(o,r({onChange:o=>{const a=o.target;t[e.id]=a.id,n(r({},t))}},a),e.options.map((e=>i.createElement(o.Radio,{id:e.id,key:e.id},e.displayText)))))};const A=({component:e,formChoices:t,setFormChoices:n})=>i.createElement(i.Fragment,null,e.title&&i.createElement("h2",null,e.title),i.createElement(p,{id:e.id,label:e.label,hint:e.hint,width:e.width||void 0,onChange:e=>{const o=e.target;t[o.id]=o.value,n(r({},t))}})),I=({component:e,formChoices:t,setFormChoices:n})=>i.createElement(i.Fragment,null,e.title&&i.createElement("h2",null,e.title),i.createElement(d,{id:e.id,label:e.label,hint:e.hint,width:e.width||void 0,onChange:e=>{const o=e.target;t[o.id]=o.value,n(r({},t))}})),O=({schema:{pages:e}})=>{const[t,n]=h.exports.useState({}),o=u(),{pagePath:a}=g();console.log(a);const r=e.find((e=>e.path===a));return r?i.createElement(i.Fragment,null,"Result:",JSON.stringify(t),r.backlink&&i.createElement(E,{onClick:()=>{o.push(r.backlink.route)}},r.backlink.displayText),i.createElement("h1",null,r.title),r.components.map((e=>{switch(e.type){case"Radios":return i.createElement(S,{component:e,formChoices:t,setFormChoices:n,key:e.id});case"Checkbox":return i.createElement(F,{component:e,formChoices:t,setFormChoices:n,key:e.id});case"DateInput":return i.createElement(T,{component:e,formChoices:t,setFormChoices:n,key:e.id});case"Input":return i.createElement(A,{component:e,formChoices:t,setFormChoices:n,key:e.id});case"TextArea":return i.createElement(I,{component:e,formChoices:t,setFormChoices:n,key:e.id})}})),i.createElement(y,{onClick:()=>{r.nextPath?o.push(r.nextPath):console.log("submit form")}},r.nextPath?"Continue":"Submit")):i.createElement(i.Fragment,null,"Cant find page")},R={title:"My first form",pages:[{title:"Page 1",path:"page-1",nextPath:"/page-2",backlink:{displayText:"Back to home",route:"/"},components:[{id:"hereAreSomeRadios",type:"Radios",title:"Here are some Radios",options:[{displayText:"Option 1",id:"1"},{displayText:"Option 2",id:"2"}],overrides:{Radios:{component:m,props:{hint:"im a hint"}}}}]},{title:"Page 2",path:"page-2",nextPath:"page-3",backlink:{displayText:"Back to page 1",route:"/page-1"},components:[{id:"hereAreSomeCheckboxes",type:"Checkbox",title:"Here are some Checkboxes",hint:"You can have hints too",options:[{displayText:"Checkbox ",id:"1"},{displayText:"Disabled by default",id:"2"},{displayText:"Checked by default",id:"3"}]}]},{title:"Page 3",path:"page-3",nextPath:"page-4",backlink:{displayText:"Back to page 2",route:"/page-2"},components:[{id:"hereAreSomeCheckboxes",type:"DateInput",title:"Here is a DateInput",hint:"With a hint",options:[]},{id:"hereAreSomeCheckboxes2",type:"DateInput",hint:"Title is optional",options:[]}]},{title:"Page 4",path:"page-4",nextPath:"page-5",backlink:{displayText:"Back to page 3",route:"/page-3"},components:[{id:"input",type:"Input",title:"Here is an Input",hint:"And a hint",label:"With a label"},{id:"input2",type:"Input",hint:"And a hint",label:"Another input"}]},{title:"Page 5",path:"page-5",nextPath:void 0,backlink:{displayText:"Back to page 4",route:"/page-4"},components:[{id:"textArea",type:"TextArea",label:"Please input some text.",hint:"Hint goes here"}]}]};function w(){const e=u(),[t,n]=h.exports.useState(R);return i.createElement(i.Fragment,null,i.createElement(f,null,i.createElement(f.Container,null,i.createElement(f.Logo,{onClick:()=>{e.push("/")}}),i.createElement(f.ServiceName,null,"Data Driven Form"),i.createElement(f.Content,null,i.createElement(f.MenuToggle,null)))),i.createElement(b,null,i.createElement(k,null,i.createElement(C,{path:"/:pagePath"},i.createElement(O,{schema:t})),i.createElement(C,{path:"/"},i.createElement("h1",null,"Schema used"),"This JSON tree is interactive. ",i.createElement("br",null),"Edit/Add/Remove values, click Go to form to see your changes. ",i.createElement("br",null),i.createElement("br",null),i.createElement(y,{onClick:()=>{e.push(t.pages[0].path)}},"Go to form"),i.createElement(x,{src:t,onEdit:e=>{const t=e.updated_src;t&&n(r({},t))},onAdd:e=>{const t=e.updated_src;t&&n(r({},t))},onDelete:e=>{const t=e.updated_src;t&&n(r({},t))}})))))}v.render(i.createElement(i.StrictMode,null,i.createElement(P,{basename:"data-driven-form"},i.createElement(w,null))),document.getElementById("root"));
