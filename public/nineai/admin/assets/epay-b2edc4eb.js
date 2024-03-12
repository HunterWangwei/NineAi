
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as D}from"./index-b42478fa.js";import{a as _}from"./config-ab106de0.js";import{d as O,Q as j,r as E,x as B,o as g,c as b,e,f as a,a as h,k as x,R as L,S as M,E as U,h as o,t as J,q as V}from"./index-fa2717cc.js";const z={class:"flex justify-between"},F=h("b",null,"易支付参数设置",-1),K=O({__name:"epay",setup(T){const t=j({payEpayStatus:"",payEpayPid:"",payEpaySecret:"",payEpayNotifyUrl:"",payEpayReturnUrl:"",payEpayApiPayUrl:"",payEpayApiQueryUrl:"",payEpayRedirect:"",payEpayChannel:[]}),v=E({payEpayStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payEpaySecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payEpayPid:[{required:!0,trigger:"blur",message:"请填写商户PID"}],payEpayNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}],payEpayApiPayUrl:[{required:!0,trigger:"blur",message:"请填写平台支付API请求地址"}],payEpayApiQueryUrl:[{required:!0,trigger:"blur",message:"请填写平台API商户查询地址"}]}),s=E(),C=[{label:"微信支付",value:"wxpay"},{label:"支付宝支付",value:"alipay"}];async function i(){const r=await _.queryConfig({keys:["payEpaySecret","payEpayNotifyUrl","payEpayReturnUrl","payEpayPid","payEpayStatus","payEpayApiPayUrl","payEpayApiQueryUrl","payEpayRedirect","payEpayChannel"]}),l=r.data.payEpayChannel?JSON.parse(r.data.payEpayChannel):[];Object.assign(t,r.data,{payEpayChannel:l})}function P(){var r;(r=s.value)==null||r.validate(async l=>{if(l){try{await _.setConfig({settings:A(t)}),U.success("变更配置信息成功")}catch{}i()}else U.error("请填写完整信息")})}function S(r,l){if(["payEpayChannel"].includes(r)){if(!l)return[];if(l)return JSON.stringify(l)}else return l}function A(r){return Object.keys(r).map(l=>({configKey:l,configVal:S(l,r[l])}))}return B(()=>{i()}),(r,l)=>{const c=o("el-alert"),k=D,w=o("el-button"),m=o("el-switch"),n=o("el-form-item"),u=o("el-col"),y=o("el-row"),d=o("el-input"),f=o("el-divider"),R=o("el-tooltip"),N=o("el-checkbox"),q=o("el-checkbox-group"),Q=o("el-form"),I=o("el-card");return g(),b("div",null,[e(k,null,{default:a(()=>[e(c,{closable:!1,"show-icon":"",title:"易支付参数说明",description:"通用易支付渠道、请按文档配置即可、同时开启多种支付、我们会以菜单顺序为优先级使用、仅mpay支持非跳转支付、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"success"})]),_:1}),e(I,{style:{margin:"20px"}},{header:a(()=>[h("div",z,[F,e(w,{class:"button",text:"",onClick:P},{default:a(()=>[x(" 保存设置 ")]),_:1})])]),default:a(()=>[e(Q,{ref_key:"formRef",ref:s,rules:v.value,model:t,"label-width":"120px"},{default:a(()=>[e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"启用当前支付",prop:"payEpayPid"},{default:a(()=>[e(m,{modelValue:t.payEpayStatus,"onUpdate:modelValue":l[0]||(l[0]=p=>t.payEpayStatus=p),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"商户PID",prop:"payEpayPid"},{default:a(()=>[e(d,{modelValue:t.payEpayPid,"onUpdate:modelValue":l[1]||(l[1]=p=>t.payEpayPid=p),placeholder:"请填写商户PID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"商户秘钥",prop:"payEpaySecret"},{default:a(()=>[e(d,{modelValue:t.payEpaySecret,"onUpdate:modelValue":l[2]||(l[2]=p=>t.payEpaySecret=p),placeholder:"请填写商户秘钥",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"支付通知地址",prop:"payEpaySecret"},{default:a(()=>[e(d,{modelValue:t.payEpayNotifyUrl,"onUpdate:modelValue":l[3]||(l[3]=p=>t.payEpayNotifyUrl=p),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"支付回调地址",prop:"payEpaySecret"},{default:a(()=>[e(d,{modelValue:t.payEpayReturnUrl,"onUpdate:modelValue":l[4]||(l[4]=p=>t.payEpayReturnUrl=p),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"支付请求地址",prop:"payEpayApiPayUrl"},{default:a(()=>[e(d,{modelValue:t.payEpayApiPayUrl,"onUpdate:modelValue":l[5]||(l[5]=p=>t.payEpayApiPayUrl=p),placeholder:"请填写平台支付请求地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"商户查询地址",prop:"payEpayApiQueryUrl"},{default:a(()=>[e(d,{modelValue:t.payEpayApiQueryUrl,"onUpdate:modelValue":l[6]||(l[6]=p=>t.payEpayApiQueryUrl=p),placeholder:"请填写平台查询商户地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(n,{label:"是否开启跳转支付",prop:"payEpayRedirect","label-width":"130px"},{default:a(()=>[e(R,{class:"box-item",effect:"dark",content:"请注意、仅mapi支持不跳转支付、其他都需要为跳转支付、不开启跳转支付表示购买页面显示二维码直接扫码购买、跳转支付表示前往新页面！",placement:"right"},{default:a(()=>[e(m,{modelValue:t.payEpayRedirect,"onUpdate:modelValue":l[7]||(l[7]=p=>t.payEpayRedirect=p),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:a(()=>[e(n,{label:"开启支付渠道",prop:"payEpayChannel"},{default:a(()=>[e(q,{modelValue:t.payEpayChannel,"onUpdate:modelValue":l[8]||(l[8]=p=>t.payEpayChannel=p),size:"small"},{default:a(()=>[(g(),b(L,null,M(C,p=>e(N,{key:p.value,border:"",label:p.value},{default:a(()=>[x(J(p.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof V=="function"&&V(K);export{K as default};
