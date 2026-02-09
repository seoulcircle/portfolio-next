import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Button-BFpv5NKZ.js";import{C as u,P as b}from"./plus-DfdrKqQ_.js";import{X as x}from"./x-Dj0MSQ5J.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-styled.browser.esm-CNvNs0jb.js";import"./createLucideIcon-tLVkFA5j.js";const B={title:"Component/Button/4. Icon",component:t,argTypes:{icon:{control:{type:"select"},options:["none","plus","x","check"]}}},f={plus:n.jsx(b,{size:17}),x:n.jsx(x,{size:16}),check:n.jsx(u,{size:16})},s={args:{as:"button",children:"버튼",icon:"plus",iconPosition:"left"},render:e=>{const r=e.icon==="none"?void 0:f[e.icon],i={plus:"추가",x:"닫기",check:"확인"},p=[{label:"Enabled",props:{}},{label:"Hover",props:{className:"pseudo-hover"}},{label:"Active",props:{className:"pseudo-active"}},{label:"Focus",props:{className:"pseudo-focus"}},{label:"Disabled",props:{disabled:!0}}],d=e.icon&&e.icon!=="none"?i[e.icon]:"아이콘 버튼";return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:p.map(({label:o,props:m})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[n.jsx("span",{style:{width:80,color:"var(--gray-90)"},children:o}),n.jsx(t,{...e,icon:r,...m,"aria-label":d})]},o))})}};var a,l,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    as: "button",
    children: "버튼",
    icon: "plus",
    // string으로 설정
    iconPosition: "left"
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
        disabled: true
      }
    }];
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
            <Button {...args} icon={resolvedIcon} {...props} aria-label={accessibleLabel} />
          </div>)}
      </div>;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["IconWithText"];export{s as IconWithText,D as __namedExportsOrder,B as default};
