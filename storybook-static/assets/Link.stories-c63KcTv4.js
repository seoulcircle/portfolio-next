import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Button-BFpv5NKZ.js";import{C as b,P as f}from"./plus-DfdrKqQ_.js";import{X as v}from"./x-Dj0MSQ5J.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-styled.browser.esm-CNvNs0jb.js";import"./createLucideIcon-tLVkFA5j.js";const E={title:"Component/Button/5. Link",component:t,argTypes:{icon:{control:{type:"select"},options:["none","plus","x","check"]}}},x={plus:e.jsx(f,{size:16}),x:e.jsx(v,{size:16}),check:e.jsx(b,{size:16})},o={args:{as:"a",href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"링크 버튼",icon:"plus",iconPosition:"left",variant:"outline"},render:n=>{const c=n.icon==="none"?void 0:x[n.icon],i={plus:"추가",x:"닫기",check:"확인"},p=[{label:"Enabled",props:{}},{label:"Hover",props:{className:"pseudo-hover"}},{label:"Active",props:{className:"pseudo-active"}},{label:"Focus",props:{className:"pseudo-focus"}},{label:"Disabled",props:{"aria-disabled":!0,tabIndex:-1}}],d=n.icon&&n.icon!=="none"?i[n.icon]:"아이콘 버튼";return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:p.map(({label:s,props:m})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{style:{width:80,color:"var(--gray-90)"},children:s}),e.jsx(t,{...n,icon:c,...m,onClick:u=>s==="Disabled"?u.preventDefault():void 0,"aria-label":d})]},s))})}};var a,l,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    as: "a",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "링크 버튼",
    icon: "plus",
    // 드롭다운에서 선택 가능
    iconPosition: "left",
    variant: "outline"
  },
  render: args => {
    const resolvedIcon = args.icon === "none" ? undefined : iconMap[args.icon as keyof typeof iconMap];
    const labelMap = {
      plus: "추가",
      x: "닫기",
      check: "확인"
    };
    const states = [{
      label: "Enabled",
      props: {}
    }, {
      label: "Hover",
      props: {
        className: "pseudo-hover"
      }
    }, {
      label: "Active",
      props: {
        className: "pseudo-active"
      }
    }, {
      label: "Focus",
      props: {
        className: "pseudo-focus"
      }
    }, {
      label: "Disabled",
      props: {
        "aria-disabled": true,
        tabIndex: -1
      }
    } // <a>는 disabled prop 안 먹히므로 대체
    ];
    const accessibleLabel = args.icon && args.icon !== "none" ? labelMap[args.icon as keyof typeof labelMap] : "아이콘 버튼";
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
        {states.map(({
        label,
        props
      }) => <div key={label} style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem"
      }}>
            <span style={{
          width: 80,
          color: "var(--gray-90)"
        }}>{label}</span>
            <Button {...args} icon={resolvedIcon} {...props} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => label === "Disabled" ? e.preventDefault() : undefined} aria-label={accessibleLabel} />
          </div>)}
      </div>;
  }
}`,...(r=(l=o.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const N=["AnchorButton"];export{o as AnchorButton,N as __namedExportsOrder,E as default};
