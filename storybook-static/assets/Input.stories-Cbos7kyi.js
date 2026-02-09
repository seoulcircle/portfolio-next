import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{n as a}from"./emotion-styled.browser.esm-CNvNs0jb.js";import{c as D}from"./createLucideIcon-tLVkFA5j.js";import{C as $}from"./circle-alert-D69aEW18.js";import{r as w}from"./index-CgfFrydU.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],N=D("circle-x",F),L=a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,A=a.div`
  position: relative;
`,B=a.input`
  width: 288px;
  padding: 12px 16px;
  font-size: 14px;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease;
  outline: none;

  border: none;
  border-bottom: ${({error:e})=>e?"1px solid var(--red-30)":"1px solid var(--gray-40)"};

  &::placeholder {
    color: var(--gray-40);
  }

  &:hover {
    border-bottom: ${({error:e})=>e?"1px solid var(--red-30)":"1px solid var(--blue-30)"};
  }

  &:focus {
    border: ${({error:e})=>e?"1px solid var(--red-30)":"1px solid var(--blue-30)"};

    padding: 12px 16px;
  }

  ${({error:e})=>e&&`
    border: 1px solid var(--red-30);
  `}

  &:disabled {
    color: var(--gray-40);
    border: none;
    cursor: not-allowed;
  }
`,O=a.button`
  position: absolute;
  left: 280px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-50);
`,R=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--red-30);
  font-size: 12px;
  margin-top: 2px;
`,X=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-text);
  font-size: 12px;
  margin-top: 2px;
`,c=({value:e,onChange:u,placeholder:n,disabled:l,error:o,label:k,errorMessage:g,labelMessage:b,onClear:m,...z})=>{const E=T=>{u(T.target.value)},S=()=>{m==null||m()};return r.jsxs(L,{disabled:l,error:o,children:[k&&b&&r.jsx(X,{children:r.jsx("span",{children:b})}),r.jsxs(A,{children:[r.jsx(B,{value:e,onChange:E,placeholder:n,disabled:l,error:o,...z}),e&&!l&&r.jsx(O,{type:"button",onClick:S,children:r.jsx(N,{size:18})})]}),o&&g&&r.jsxs(R,{children:[r.jsx($,{size:14}),r.jsx("span",{children:g})]})]})};try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | (string & readonly string[])"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"boolean"}},labelMessage:{defaultValue:null,description:"",name:"labelMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}}}}}catch{}const U={title:"Component/Input",component:c,tags:["autodocs"],argTypes:{value:{control:"text"},error:{control:"boolean"},label:{control:"boolean"},disabled:{control:"boolean"},labelMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text"}}},p=e=>{const[u,n]=w.useState(e.value??""),l=o=>{n(o)};return r.jsx(c,{...e,value:u,onChange:l,onClear:()=>n("")})},t={render:p,args:{label:!0,labelMessage:"인풋 레이블",placeholder:"플레이스 홀더 텍스트"}},s={render:p,args:{value:"사용자 입력 텍스트",label:!0,labelMessage:"인풋 레이블",placeholder:"플레이스 홀더 텍스트"}},d={render:p,args:{value:"에러 상태",error:!0,errorMessage:"에러 메시지",placeholder:"입력하세요",label:!0,labelMessage:"인풋 레이블"}},i={render:p,args:{value:"비활성화 상태",disabled:!0,placeholder:"입력 불가",label:!0,labelMessage:"인풋 레이블"}};var x,f,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: true,
    labelMessage: "인풋 레이블",
    placeholder: "플레이스 홀더 텍스트"
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,y,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: "사용자 입력 텍스트",
    label: true,
    labelMessage: "인풋 레이블",
    placeholder: "플레이스 홀더 텍스트"
  }
}`,...(M=(y=s.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var C,j,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: "에러 상태",
    error: true,
    errorMessage: "에러 메시지",
    placeholder: "입력하세요",
    label: true,
    labelMessage: "인풋 레이블"
  }
}`,...(_=(j=d.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var q,V,I;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {
    value: "비활성화 상태",
    disabled: true,
    placeholder: "입력 불가",
    label: true,
    labelMessage: "인풋 레이블"
  }
}`,...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const W=["Default","Filled","Error","Disabled"];export{t as Default,i as Disabled,d as Error,s as Filled,W as __namedExportsOrder,U as default};
