import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-CgfFrydU.js";import{T as g}from"./Tag-5ZmguUCS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-styled.browser.esm-CNvNs0jb.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./x-Dj0MSQ5J.js";import"./createLucideIcon-tLVkFA5j.js";const v={title:"Component/Tag",component:g,argTypes:{label:{control:"text"},deletable:{control:"boolean"},disabled:{control:"boolean"}}},h=l=>{const x=["아이템 1","아이템 2","아이템 3"],[D,f]=E.useState(x),T=e=>{f(j=>j.filter(S=>S!==e))};return s.jsx(s.Fragment,{children:D.map(e=>s.jsx(g,{label:e,deletable:l.deletable,disabled:l.disabled,onDelete:()=>T(e)},e))})},r={render:h,args:{label:"태그 아이템",deletable:!0}},a={args:{label:"태그 아이템",deletable:!0}},t={args:{label:"태그 아이템",disabled:!0}};var o,n,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "태그 아이템",
    deletable: true
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "태그 아이템",
    deletable: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,i,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "태그 아이템",
    disabled: true
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const w=["Default","Deletable","Disabled"];export{r as Default,a as Deletable,t as Disabled,w as __namedExportsOrder,v as default};
