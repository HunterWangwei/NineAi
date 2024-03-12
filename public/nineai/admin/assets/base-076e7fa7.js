
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as k}from"./index-b42478fa.js";import{a as _}from"./config-ab106de0.js";import{d as L,Q as j,r as b,x as F,o as g,c as V,e,f as l,a as i,k as x,R as O,S as H,E as N,h as m,t as Q,q as v}from"./index-fa2717cc.js";const S={class:"flex justify-between"},E=i("b",null,"系统基础设置",-1),B=i("h5",null,"网站基础信息配置",-1),G=L({__name:"base",setup(M){const h=[{label:"ChatGpt聊天",path:"/chat"},{label:"Dall-E绘画",path:"/draw"},{label:"Midjourney绘画",path:"/midjourney"},{label:"mj公共预览页",path:"/market"},{label:"mind思维导图",path:"/mind"},{label:"应用广场",path:"/app-store"},{label:"不指定首页",path:""}],o=j({siteName:"",qqNumber:"",vxNumber:"",loginDialogImgUrl:"",robotAvatar:"",userDefautlAvatar:"",filingNumber:"",companyName:"",buyCramiAddress:"",siteRobotName:"",isShowAppCatIcon:"",clientFavoIconPath:"",clientLogoPath:"",clientHomePath:""}),y=b({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}]}),p=b();async function f(){const s=await _.queryConfig({keys:["siteName","qqNumber","vxNumber","loginDialogImgUrl","robotAvatar","userDefautlAvatar","buyCramiAddress","filingNumber","companyName","siteRobotName","isShowAppCatIcon","clientLogoPath","clientFavoIconPath","clientHomePath"]});Object.assign(o,s.data)}function A(){var s;(s=p.value)==null||s.validate(async a=>{if(a){try{await _.setConfig({settings:U(o)}),N.success("变更配置信息成功")}catch{}f()}else N.error("请填写完整信息")})}function U(s){return Object.keys(s).map(a=>({configKey:a,configVal:s[a]}))}return F(()=>{f()}),(s,a)=>{const c=m("el-alert"),P=k,q=m("el-button"),d=m("el-input"),n=m("el-form-item"),u=m("el-col"),r=m("el-row"),I=m("el-divider"),C=m("el-radio"),D=m("el-radio-group"),w=m("el-form"),R=m("el-card");return g(),V("div",null,[e(P,null,{default:l(()=>[e(c,{closable:!1,"show-icon":"",title:"用户端基础配置说明",description:"网站类型设置是实时生效的、这里可以配置网站的logo名称等、购卡地址对应卡密购买、思维导图默认展示属于、机器人名称为对话页的默认AI Robot位置！",type:"success"})]),_:1}),e(R,{style:{margin:"20px"}},{header:l(()=>[i("div",S,[E,e(q,{class:"button",text:"",onClick:A},{default:l(()=>[x(" 保存设置 ")]),_:1})])]),default:l(()=>[e(w,{ref_key:"formRef",ref:p,rules:y.value,model:o,"label-width":"150px"},{default:l(()=>[B,e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"网站名称",prop:"siteName"},{default:l(()=>[e(d,{modelValue:o.siteName,"onUpdate:modelValue":a[0]||(a[0]=t=>o.siteName=t),placeholder:"网站名称【Nine Ai】",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"网站QQ客服",prop:"qqNumber"},{default:l(()=>[e(d,{modelValue:o.qqNumber,"onUpdate:modelValue":a[1]||(a[1]=t=>o.qqNumber=t),placeholder:"网站客服QQ号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"网站VX客服",prop:"vxNumber"},{default:l(()=>[e(d,{modelValue:o.vxNumber,"onUpdate:modelValue":a[2]||(a[2]=t=>o.vxNumber=t),placeholder:"网站客服VX号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"登录窗口图片",prop:"loginDialogImgUrl"},{default:l(()=>[e(d,{modelValue:o.loginDialogImgUrl,"onUpdate:modelValue":a[3]||(a[3]=t=>o.loginDialogImgUrl=t),placeholder:"登录窗口的图片地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"机器人头像",prop:"robotAvatar"},{default:l(()=>[e(d,{modelValue:o.robotAvatar,"onUpdate:modelValue":a[4]||(a[4]=t=>o.robotAvatar=t),placeholder:"填写机器人默认头像地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"用户默认头像",prop:"userDefautlAvatar"},{default:l(()=>[e(d,{modelValue:o.userDefautlAvatar,"onUpdate:modelValue":a[5]||(a[5]=t=>o.userDefautlAvatar=t),placeholder:"填写用户注册时默认头像头像地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"网站公司信息",prop:"companyName"},{default:l(()=>[e(d,{modelValue:o.companyName,"onUpdate:modelValue":a[6]||(a[6]=t=>o.companyName=t),placeholder:"填写网站备案信息的公司名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"网站备案号",prop:"filingNumber"},{default:l(()=>[e(d,{modelValue:o.filingNumber,"onUpdate:modelValue":a[7]||(a[7]=t=>o.filingNumber=t),placeholder:"填写网站备案信息的备案号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"机器人名称",prop:"siteRobotName"},{default:l(()=>[e(d,{modelValue:o.siteRobotName,"onUpdate:modelValue":a[8]||(a[8]=t=>o.siteRobotName=t),placeholder:"默认[Ai Robot]、首页默认展示状态下的名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(I),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(n,{label:"用户端LOGO",prop:"clientLogoPath"},{default:l(()=>[e(d,{modelValue:o.clientLogoPath,"onUpdate:modelValue":a[9]||(a[9]=t=>o.clientLogoPath=t),placeholder:"请填写您要设置的网站LOGO图片链接",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(n,{label:"用户端ico",prop:"clientFavoIconPath"},{default:l(()=>[e(d,{modelValue:o.clientFavoIconPath,"onUpdate:modelValue":a[10]||(a[10]=t=>o.clientFavoIconPath=t),placeholder:"请填写您要设置的网站ico地址、格式为svg",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[e(n,{label:"设置指定首页",prop:"clientHomePath"},{default:l(()=>[e(D,{modelValue:o.clientHomePath,"onUpdate:modelValue":a[11]||(a[11]=t=>o.clientHomePath=t)},{default:l(()=>[(g(),V(O,null,H(h,t=>e(C,{key:t.path,size:"small",border:"",label:t.path},{default:l(()=>[x(Q(t.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof v=="function"&&v(G);export{G as default};