
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as k}from"./index-b42478fa.js";import{a as f}from"./config-ab106de0.js";import{d as S,Q as P,r as q,B,x as N,o as j,c as A,e,f as t,a as y,k as E,b as h,E as v,h as a,q as g}from"./index-fa2717cc.js";const R={class:"flex justify-between"},M=y("b",null,"chevereto图床参数设置",-1),O=S({__name:"chevereto",setup(I){const l=P({cheveretoStatus:"",cheveretoUploadPath:"",cheveretoKey:""}),d=q();async function i(){const n=await f.queryConfig({keys:["cheveretoKey","cheveretoUploadPath","cheveretoStatus"]});Object.assign(l,n.data)}function b(){var n;(n=d.value)==null||n.validate(async o=>{if(o){try{await f.setConfig({settings:x(l)}),v.success("变更配置信息成功")}catch{}i()}else v.error("请填写完整信息")})}function x(n){return Object.keys(n).map(o=>({configKey:o,configVal:n[o]}))}const p=B(()=>[{required:Number(l.cheveretoStatus)===1,message:"开启配置后请填写此项",trigger:"change"}]);return N(()=>{i()}),(n,o)=>{const _=a("el-alert"),V=k,w=a("el-button"),U=a("el-switch"),s=a("el-form-item"),c=a("el-col"),u=a("el-row"),m=a("el-input"),C=a("el-form"),K=a("el-card");return j(),A("div",null,[e(V,null,{default:t(()=>[e(_,{closable:!1,"show-icon":"",title:"chevereto图床配置说明",description:"chevereto图床官方文档 https://v4-docs.chevereto.com/developer/api/api-v1.html 同时开启多个存储会以菜单排序优先级开启使用",type:"success"})]),_:1}),e(K,{style:{margin:"20px"}},{header:t(()=>[y("div",R,[M,e(w,{class:"button",text:"",onClick:b},{default:t(()=>[E(" 保存设置 ")]),_:1})])]),default:t(()=>[e(C,{ref_key:"formRef",ref:d,model:l,"label-width":"100px"},{default:t(()=>[e(u,null,{default:t(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"服务启用状态",prop:"cheveretoStatus"},{default:t(()=>[e(U,{modelValue:l.cheveretoStatus,"onUpdate:modelValue":o[0]||(o[0]=r=>l.cheveretoStatus=r),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"上传地址",prop:"cheveretoUploadPath",rules:h(p)},{default:t(()=>[e(m,{modelValue:l.cheveretoUploadPath,"onUpdate:modelValue":o[1]||(o[1]=r=>l.cheveretoUploadPath=r),placeholder:"请填写您的图床上传地址",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(c,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"ApiKey",prop:"cheveretoKey",rules:h(p)},{default:t(()=>[e(m,{modelValue:l.cheveretoKey,"onUpdate:modelValue":o[2]||(o[2]=r=>l.cheveretoKey=r),placeholder:"请填写ApiKey",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof g=="function"&&g(O);export{O as default};
