import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{h as O,E as I,c as E,s as D}from"./emotion-element-f0de968e.browser.esm-BJiig29H.js";import{r as N}from"./index-CgfFrydU.js";import{n as A}from"./emotion-styled.browser.esm-CNvNs0jb.js";var _={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M;function L(){if(M)return t;M=1;var e=typeof Symbol=="function"&&Symbol.for,a=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,y=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,P=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,l=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,x=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function u(r){if(typeof r=="object"&&r!==null){var d=r.$$typeof;switch(d){case a:switch(r=r.type,r){case v:case y:case n:case c:case i:case g:return r;default:switch(r=r&&r.$$typeof,r){case f:case m:case l:case b:case s:return r;default:return d}}case o:return d}}}function $(r){return u(r)===y}return t.AsyncMode=v,t.ConcurrentMode=y,t.ContextConsumer=f,t.ContextProvider=s,t.Element=a,t.ForwardRef=m,t.Fragment=n,t.Lazy=l,t.Memo=b,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=g,t.isAsyncMode=function(r){return $(r)||u(r)===v},t.isConcurrentMode=$,t.isContextConsumer=function(r){return u(r)===f},t.isContextProvider=function(r){return u(r)===s},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===a},t.isForwardRef=function(r){return u(r)===m},t.isFragment=function(r){return u(r)===n},t.isLazy=function(r){return u(r)===l},t.isMemo=function(r){return u(r)===b},t.isPortal=function(r){return u(r)===o},t.isProfiler=function(r){return u(r)===c},t.isStrictMode=function(r){return u(r)===i},t.isSuspense=function(r){return u(r)===g},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===n||r===y||r===c||r===i||r===g||r===P||typeof r=="object"&&r!==null&&(r.$$typeof===l||r.$$typeof===b||r.$$typeof===s||r.$$typeof===f||r.$$typeof===m||r.$$typeof===x||r.$$typeof===h||r.$$typeof===S||r.$$typeof===p)},t.typeOf=u,t}var q;function V(){return q||(q=1,_.exports=L()),_.exports}var R,k;function W(){if(k)return R;k=1;var e=V(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[e.ForwardRef]=n,c[e.Memo]=i;function s(l){return e.isMemo(l)?i:c[l.$$typeof]||a}var f=Object.defineProperty,v=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,P=Object.prototype;function b(l,p,x){if(typeof p!="string"){if(P){var h=g(p);h&&h!==P&&b(l,h,x)}var S=v(p);y&&(S=S.concat(y(p)));for(var u=s(l),$=s(p),r=0;r<S.length;++r){var d=S[r];if(!o[d]&&!(x&&x[d])&&!($&&$[d])&&!(u&&u[d])){var C=m(p,d);try{f(l,d,C)}catch{}}}}return l}return R=b,R}W();var F=function(a,o,n){return O.call(o,"css")?w.jsx(I,E(a,o),n):w.jsx(a,o,n)},J=function(a,o,n){return O.call(o,"css")?w.jsxs(I,E(a,o),n):w.jsxs(a,o,n)},z=function(a,o){var n=arguments;if(o==null||!O.call(o,"css"))return N.createElement.apply(void 0,n);var i=n.length,c=new Array(i);c[0]=I,c[1]=E(a,o);for(var s=2;s<i;s++)c[s]=n[s];return N.createElement.apply(null,c)};(function(e){var a;a||(a=e.JSX||(e.JSX={}))})(z||(z={}));function j(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return D(a)}const X={primary:j`
    background: var(--blue-30);
    color: var(--white);
    border: none;

    &:hover,
    &.pseudo-hover {
      background: var(--blue-40);
    }

    &:active,
    &.pseudo-active {
      background: var(--blue-50);
    }

    &:focus-visible,
    &.pseudo-focus {
      background: var(--blue-30);
      border: 2px solid var(--blue-20);
    }

    &:disabled {
      background: var(--gray-20);
      color: var(--gray-40);
    }
  `,outline:j`
    background: transparent;
    color: var(--blue-30);
    border: 1px solid var(--blue-30);

    &:hover,
    &.pseudo-hover {
      background: var(--blue-10);
    }

    &:active,
    &.pseudo-active {
      background: var(--blue-20);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid #85b8ff;
    }

    &:disabled {
      background: transparent;
      border: 1px solid var(--gray-20);
      color: var(--gray-40);
    }
  `,danger:j`
    background: var(--red-30);
    color: white;
    border: none;

    &:hover,
    &.pseudo-hover {
      background: var(--red-40);
    }

    &:active,
    &.pseudo-active {
      background: var(--red-50);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid var(--blue-20);
    }

    &:disabled {
      background: var(--gray-20);
      color: var(--gray-40);
    }
  `,icon:j`
    background: transparent;
    color: var(--blue-30);
    border: 1px solid var(--blue-30);

    &:hover,
    &.pseudo-hover {
      background: var(--blue-10);
    }

    &:active,
    &.pseudo-active {
      background: var(--blue-20);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid #85b8ff;
    }

    &:disabled {
      background: transparent;
      border: 1px solid var(--gray-20);
      color: var(--gray-40);
    }
  `,texticon:j`
    background: var(--red-30);
    color: white;
    border: none;

    &:hover,
    &.pseudo-hover {
      background: var(--red-40);
    }

    &:active,
    &.pseudo-active {
      background: var(--red-50);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid var(--blue-20);
    }

    &:disabled {
      background: var(--gray-20);
      color: var(--gray-40);
    }
  `},H=A("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background 0.2s,
    border 0.2s;

  ${({$variant:e})=>X[e]}

  &:disabled {
    cursor: not-allowed;
  }
`,K=A.span`
  width: 80px;
  font-size: 14px;
  color: var(--color-text);
`,Y=A.span`
  display: inline-flex;
  margin-right: 0.5rem;
`,T={Button:H,Label:K,IconWrapper:Y},B=({as:e,variant:a="primary",icon:o,children:n,iconPosition:i="left",...c})=>{const s=o&&i==="left",f=o&&i==="right",v=e||"button";return J(T.Button,{as:v,$variant:a,...c,children:[s&&F(T.IconWrapper,{children:o}),n,f&&F(T.IconWrapper,{children:o})]})};try{B.displayName="Button",B.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"primary"'},{value:'"outline"'},{value:'"danger"'},{value:'"texticon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{B,T as S};
