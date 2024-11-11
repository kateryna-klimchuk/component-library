import{r as p}from"./index-DAFOQFY5.js";var i={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=p,d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,y=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,a){var t,o={},n=null,l=null;a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)f.call(e,t)&&!b.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:d,type:r,key:n,ref:l,props:o,_owner:y.current}}s.Fragment=c;s.jsx=u;s.jsxs=u;i.exports=s;var _=i.exports;const v=({primary:r=!1,size:e="medium",backgroundColor:a,label:t,...o})=>{const n=r?"storybook-button--primary":"storybook-button--secondary";return _.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${e}`,n].join(" "),style:{backgroundColor:a},...o,children:t})};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};export{v as B,_ as j};
