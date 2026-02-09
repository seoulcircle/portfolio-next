import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CgfFrydU.js";import{n as l}from"./emotion-styled.browser.esm-CNvNs0jb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";const w=l.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-1);
  color: ${({$disabled:e})=>e?"var(--gray-40)":"var(--color-text)"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
`,D=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,q=l.span`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  transition: all 0.2s ease;

  background-color: ${({$checked:e,$disabled:a,theme:r})=>e&&a?(r==null?void 0:r.mode)==="dark"?"var(--blue-40)":"var(--blue-20)":e?"var(--blue-30)":"transparent"};

  border: 1.5px solid
    ${({$checked:e,$disabled:a,theme:r})=>e&&a?(r==null?void 0:r.mode)==="dark"?"var(--blue-40)":"var(--blue-10)":e?"var(--blue-30)":a?"var(--gray-20)":"var(--color-text)"};

  ${({$focused:e,$disabled:a,theme:r})=>e&&!a?`outline: 2px solid ${(r==null?void 0:r.mode)==="dark"?"var(--blue-20)":"var(--blue-10)"}; outline-offset: 2px;`:""}
`,T=l.svg`
  width: 14px;
  height: 14px;
  stroke: ${({theme:e})=>(e==null?void 0:e.mode)==="dark"?"var(--gray-90)":"var(--white)"};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`,V=l.span`
  user-select: none;
`,o=({label:e,checked:a,disabled:r=!1,onChange:t,...s})=>{const[p,h]=c.useState(!1),_=$=>{t==null||t($.target.checked)},b=`checkbox-${e}`;return n.jsxs(w,{htmlFor:b,$disabled:r,children:[n.jsx(D,{id:b,type:"checkbox",checked:a,onChange:_,onFocus:()=>h(!0),onBlur:()=>h(!1),disabled:r,...s}),n.jsx(q,{$checked:a,$disabled:r,$focused:p,children:a&&n.jsx(T,{viewBox:"0 0 24 24",children:n.jsx("polyline",{points:"4 12 10 18 20 6"})})}),n.jsx(V,{children:e})]})};try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},deletable:{defaultValue:null,description:"",name:"deletable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const N={title:"Component/Checkbox",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}}},S=e=>{const[a,r]=c.useState(e.checked??!1),t=s=>{r(s)};return n.jsx(o,{...e,checked:a,onChange:t})},d=()=>{const[e,a]=c.useState(!0),[r,t]=c.useState(!1),[s,p]=c.useState(!1);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsx(o,{label:"체크박스 1",checked:e,onChange:a}),n.jsx(o,{label:"체크박스 2",checked:r,onChange:t}),n.jsx(o,{label:"체크박스 3",checked:s,onChange:p})]})},i={render:S,args:{label:"비활성 체크박스",disabled:!0,checked:!1}},u={render:S,args:{label:"비활성 체크박스",disabled:!0,checked:!0}};var k,x,f;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
      <Checkbox label="체크박스 1" checked={checked1} onChange={setChecked1} />
      <Checkbox label="체크박스 2" checked={checked2} onChange={setChecked2} />
      <Checkbox label="체크박스 3" checked={checked3} onChange={setChecked3} />
    </div>;
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,m,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "비활성 체크박스",
    disabled: true,
    checked: false
  }
}`,...(C=(m=i.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var v,y,j;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "비활성 체크박스",
    disabled: true,
    checked: true
  }
}`,...(j=(y=u.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const H=["Default","Disabled","DisabledChecked"];export{d as Default,i as Disabled,u as DisabledChecked,H as __namedExportsOrder,N as default};
