import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-CgfFrydU.js";import{B as i}from"./Button-BFpv5NKZ.js";import{T}from"./Tag-5ZmguUCS.js";import{T as u}from"./Toggle-BSSwXn4x.js";import{n as r}from"./emotion-styled.browser.esm-CNvNs0jb.js";import{C as v}from"./circle-alert-D69aEW18.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./x-Dj0MSQ5J.js";import"./createLucideIcon-tLVkFA5j.js";const D=r.p`
  font-size: var(--font-size-5);
`,z=r.p`
  font-size: var(--font-size-4);
`,W=r.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin: 20px;
`,S=r.div`
  display: flex;
  gap: 10px;
`,w=r.div`
  display: flex;
  gap: 10px;
  margin: 20px;
  align-items: center;
  & span {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-bold);
  }
`,t={Title:D,Text:z,ButtonWrapper:W,TagWrapper:S,ToggleWrapper:w},y=()=>{const[m,d]=n.useState(!0),x=["오늘의 키워드","꾸준함","긍정","🍀"],[g,f]=n.useState(x),h=s=>{f(a=>a.filter(j=>j!==s))};return e.jsxs(e.Fragment,{children:[e.jsx(t.Title,{children:"안녕하세요, 반갑습니다."}),e.jsx(t.Text,{children:"디자인 시스템에 오신 것을 환영합니다."}),e.jsxs(t.ButtonWrapper,{children:[e.jsx(i,{children:"버튼이에요"}),e.jsx(i,{variant:"danger",icon:e.jsx(v,{}),children:"위험"})]}),e.jsx(t.TagWrapper,{children:g.map((s,a)=>e.jsx(T,{label:s,deletable:!0,onDelete:()=>h(s)},a))}),e.jsxs(t.ToggleWrapper,{children:[e.jsx("span",{children:"행운 스위치"}),e.jsx(u,{checked:m,onChange:d}),";"]})]})},q={title:"Demo Page/Demo",component:y},o={};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const G=["DemoPage"];export{o as DemoPage,G as __namedExportsOrder,q as default};
