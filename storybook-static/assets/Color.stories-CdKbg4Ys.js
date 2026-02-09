import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{n}from"./emotion-styled.browser.esm-CNvNs0jb.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const i=n.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,d=n.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`,m=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,x=n.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({color:e})=>`var(--${e})`};
  border: 1px solid #ccc;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 12px;
  padding-bottom: 4px;
  color: var(--colors-white);
`,o={Wrapper:i,GroupTitle:d,ColorGroup:m,Box:x},g=[{name:"Gray",colors:["gray-10","gray-20","gray-30","gray-40","gray-50","gray-60","gray-70","gray-80","gray-90"]},{name:"Blue",colors:["blue-10","blue-20","blue-30","blue-40","blue-50"]},{name:"Red",colors:["red-30","red-40","red-50"]},{name:"Green",colors:["green-30","green-40"]},{name:"Test",colors:["test-color"]}],c=()=>r.jsx(o.Wrapper,{children:g.map(e=>r.jsxs("div",{children:[r.jsx(o.GroupTitle,{children:e.name}),r.jsx(o.ColorGroup,{children:e.colors.map(t=>r.jsx(o.Box,{color:t,children:t},t))})]},e.name))}),j={title:"Design Tokens/Color",component:c},s={render:()=>r.jsx(c,{})};var a,l,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Color />
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const G=["기본"];export{G as __namedExportsOrder,j as default,s as 기본};
