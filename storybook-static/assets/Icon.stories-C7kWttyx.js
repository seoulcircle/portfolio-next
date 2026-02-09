import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r,S as b}from"./Button-BFpv5NKZ.js";import{C as u,P as x}from"./plus-DfdrKqQ_.js";import{X as v}from"./x-Dj0MSQ5J.js";import"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-styled.browser.esm-CNvNs0jb.js";import"./createLucideIcon-tLVkFA5j.js";const f={plus:e.jsx(x,{size:16}),x:e.jsx(v,{size:16}),check:e.jsx(u,{size:16})},B={title:"Component/Button/4. Icon",component:r,argTypes:{icon:{control:{type:"select"},options:["none","plus","x","check"]}}},s={args:{as:"button",icon:"plus",variant:"icon"},render:n=>{const t=n.icon==="none"?void 0:f[n.icon],p={plus:"추가",x:"닫기",check:"확인"},i=[{label:"Enabled",props:{}},{label:"Hover",props:{className:"pseudo-hover"}},{label:"Active",props:{className:"pseudo-active"}},{label:"Focus",props:{className:"pseudo-focus"}},{label:"Disabled",props:{disabled:!0}}],d=n.icon&&n.icon!=="none"?p[n.icon]:"아이콘 버튼";return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:i.map(({label:o,props:m})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(b.Label,{children:o}),e.jsx(r,{...n,icon:t,"aria-label":d,...m})]},o))})}};var a,l,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    as: "button",
    icon: "plus",
    // 기본값
    variant: "icon"
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
            <S.Label>{label}</S.Label>
            <Button {...args} icon={resolvedIcon} aria-label={accessibleLabel} {...props} />
          </div>)}
      </div>;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["IconOnly"];export{s as IconOnly,D as __namedExportsOrder,B as default};
