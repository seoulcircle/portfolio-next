import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CgfFrydU.js";import{n as i}from"./emotion-styled.browser.esm-CNvNs0jb.js";const s=i.div`
  width: 48px;
  height: 24px;
  border-radius: 14px;
  background-color: ${({$checked:r,$disabled:a,theme:o})=>a?(o==null?void 0:o.mode)==="dark"?"var(--gray-70)":"var(--gray-10)":r?"var(--green-30)":"var(--gray-50)"};
  display: flex;
  align-items: center;
  padding: 2px 4px;
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  position: relative;
  transition: background-color 0.2s;
  outline: none;
  &:focus {
    box-shadow: ${({$disabled:r,theme:a})=>r?"none":(a==null?void 0:a.mode)==="dark"?"0 0 0 2px var(--blue-20)":"0 0 0 2px var(--blue-10)"};
  }
  &:hover {
    background-color: ${({$checked:r,$disabled:a})=>a?"var(--gray-20)":r?"var(--green-40)":"var(--gray-60)"};
  }
`,u=i.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$disabled:r,theme:a})=>r?(a==null?void 0:a.mode)==="dark"?"var(--gray-50)":"var(--gray-20)":"var(--white)"};
  transform: ${({$checked:r})=>r?"translateX(25px)":"translateX(0)"};
  transition: transform 0.2s;
`,t=({checked:r,onChange:a,disabled:o})=>{const l=d.useCallback(()=>{o||a(!r)},[r,o,a]);return n.jsx(s,{role:"switch","aria-checked":r,$checked:r,$disabled:o,tabIndex:o?-1:0,onClick:l,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&!o&&(e.preventDefault(),a(!r))},children:n.jsx(u,{$checked:r,$disabled:o})})};try{t.displayName="Toggle",t.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{t as T};
