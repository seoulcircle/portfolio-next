import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{n}from"./emotion-styled.browser.esm-CNvNs0jb.js";import{X as i}from"./x-Dj0MSQ5J.js";const s=n.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: var(--font-size-1);
  background-color: ${({$disabled:e})=>e?"var(--gray-20)":"var(--gray-10)"};
  color: ${({$disabled:e})=>e?"var(--gray-40)":"var(--gray-90)"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"default"};
  outline: none;
  border: 1px solid transparent;

  &:hover {
    background-color: ${({$disabled:e})=>e?"var(--gray-20)":"var(--gray-30)"};
  }

  &:focus {
    border-color: var(--blue-10);
  }
`,d=n.span`
  user-select: none;
`,c=n.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-50);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--gray-70);
  }
`,o=({label:e,deletable:l,disabled:a,onDelete:t})=>r.jsxs(s,{tabIndex:a?-1:0,$disabled:a,children:[r.jsx(d,{children:e}),l&&!a&&r.jsx(c,{type:"button","aria-label":"태그 삭제",onClick:t,children:r.jsx(i,{size:14})})]});try{o.displayName="Tag",o.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},deletable:{defaultValue:null,description:"",name:"deletable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}export{o as T};
