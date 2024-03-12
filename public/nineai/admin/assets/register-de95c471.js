
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as N}from"./index-6dca4230.js";import{a as b}from"./config-b90b5c0c.js";import{d as h,Q as B,r as x,B as v,x as E,o as J,c as O,e,f as l,a as g,k as A,b as i,E as R,h as S,q as w}from"./index-68314221.js";const I={class:"flex justify-between"},K=g("b",null,"注册设置",-1),Q=g("h5",null,"注册赠送",-1),T=g("h5",null,"限定注册赠送",-1),z=g("h5",null,"邀请注册赠送",-1),F=h({__name:"register",setup(H){const t=B({registerSendStatus:"",registerSendModel3Count:"",registerSendModel4Count:"",registerSendDrawMjCount:"",firstRegisterSendStatus:0,firstRegisterSendRank:"",firstRregisterSendModel3Count:"",firstRregisterSendModel4Count:"",firstRregisterSendDrawMjCount:"",inviteSendStatus:1,inviteGiveSendModel3Count:"",inviteGiveSendModel4Count:"",inviteGiveSendDrawMjCount:"",invitedGuestSendModel3Count:"",invitedGuestSendModel4Count:"",invitedGuestSendDrawMjCount:""}),G=x({registerSendStatus:[{required:!0,trigger:"change",message:"请确认是否开启注册赠送"}],firstRegisterSendStatus:[{required:!0,trigger:"change",message:"请确认是否开启优先注册赠送"}],inviteSendStatus:[{required:!0,trigger:"change",message:"请确认是否开启邀请注册赠送"}]}),C=x();async function M(){const a=await b.queryConfig({keys:["registerSendStatus","registerSendModel3Count","registerSendModel4Count","registerSendDrawMjCount","firstRegisterSendStatus","firstRegisterSendRank","firstRregisterSendModel3Count","firstRregisterSendModel4Count","firstRregisterSendDrawMjCount","inviteSendStatus","inviteGiveSendModel3Count","inviteGiveSendModel4Count","inviteGiveSendDrawMjCount","invitedGuestSendModel3Count","invitedGuestSendModel4Count","invitedGuestSendDrawMjCount"]});a.data.firstRegisterSendStatus&&(a.data.firstRegisterSendStatus=Number(a.data.firstRegisterSendStatus)),a.data.registerSendStatus&&(a.data.registerSendStatus=Number(a.data.registerSendStatus)),Object.assign(t,a.data)}function j(){var a;(a=C.value)==null||a.validate(async n=>{if(n){try{await b.setConfig({settings:D(t)}),R.success("变更配置信息成功")}catch{}M()}else R.error("请填写完整信息")})}function D(a){return Object.keys(a).map(n=>({configKey:n,configVal:a[n]}))}const m=v(()=>[{required:t.firstRegisterSendStatus,message:"开启优先注册赠送选项后需填写此项",trigger:"change"}]),f=v(()=>[{required:Number(t.inviteSendStatus)===1,message:"开启邀请赠送选项后需填写此项",trigger:"change"}]),p=v(()=>[{required:t.registerSendStatus,message:"开启注册赠送选项后需填写此项",trigger:"change"}]);return E(()=>{M()}),(a,n)=>{const c=S("el-alert"),U=N,y=S("el-button"),_=S("el-switch"),u=S("el-form-item"),r=S("el-col"),o=S("el-row"),s=S("el-input"),V=S("el-divider"),k=S("el-form"),q=S("el-card");return J(),O("div",null,[e(U,null,{default:l(()=>[e(c,{closable:!1,"show-icon":"",title:"注册设置说明",description:"可以设置注册赠送的默认额度、包含对话次数、普通绘画额度、绘画额度、并且可以设置前x名用户获得更多额度、包含设置邀请和被邀请次数等！",type:"success"})]),_:1}),e(q,{style:{margin:"20px"}},{header:l(()=>[g("div",I,[K,e(y,{class:"button",text:"",onClick:j},{default:l(()=>[A(" 保存设置 ")]),_:1})])]),default:l(()=>[e(k,{ref_key:"formRef",ref:C,rules:G.value,model:t,"label-width":"220px"},{default:l(()=>[Q,e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"是否开启注册赠送",prop:"registerSendStatus"},{default:l(()=>[e(_,{modelValue:t.registerSendStatus,"onUpdate:modelValue":n[0]||(n[0]=d=>t.registerSendStatus=d),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"注册赠送基础模型对话额度",prop:"registerSendModel3Count",rules:i(p)},{default:l(()=>[e(s,{modelValue:t.registerSendModel3Count,"onUpdate:modelValue":n[1]||(n[1]=d=>t.registerSendModel3Count=d),placeholder:"首次注册赠基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"注册赠送高级模型对话额度",prop:"registerSendModel4Count",rules:i(p)},{default:l(()=>[e(s,{modelValue:t.registerSendModel4Count,"onUpdate:modelValue":n[2]||(n[2]=d=>t.registerSendModel4Count=d),placeholder:"首次注册赠高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"注册赠送绘画额度",prop:"registerSendDrawMjCount",rules:i(p)},{default:l(()=>[e(s,{modelValue:t.registerSendDrawMjCount,"onUpdate:modelValue":n[3]||(n[3]=d=>t.registerSendDrawMjCount=d),placeholder:"首次注册赠送MJ额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(V),T,e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"开启优先注册赠送",prop:"firstRegisterSendStatus"},{default:l(()=>[e(_,{modelValue:t.firstRegisterSendStatus,"onUpdate:modelValue":n[4]||(n[4]=d=>t.firstRegisterSendStatus=d),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"前多少名获得奖励",prop:"firstRegisterSendRank",rules:i(m)},{default:l(()=>[e(s,{modelValue:t.firstRegisterSendRank,"onUpdate:modelValue":n[5]||(n[5]=d=>t.firstRegisterSendRank=d),placeholder:"设置优先注册前N名可以获得奖励",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"优先赠基础模型送对话额度",prop:"firstRregisterSendModel3Count",rules:i(m)},{default:l(()=>[e(s,{modelValue:t.firstRregisterSendModel3Count,"onUpdate:modelValue":n[6]||(n[6]=d=>t.firstRregisterSendModel3Count=d),placeholder:"优先注册用户额外赠送基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"优先赠高级模型送对话额度",prop:"firstRregisterSendModel4Count",rules:i(m)},{default:l(()=>[e(s,{modelValue:t.firstRregisterSendModel4Count,"onUpdate:modelValue":n[7]||(n[7]=d=>t.firstRregisterSendModel4Count=d),placeholder:"优先注册用户额外赠送高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"优先赠送绘画额度",prop:"firstRregisterSendDrawMjCount",rules:i(m)},{default:l(()=>[e(s,{modelValue:t.firstRregisterSendDrawMjCount,"onUpdate:modelValue":n[8]||(n[8]=d=>t.firstRregisterSendDrawMjCount=d),placeholder:"优先注册用户额外赠送MJ额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(V),z,e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"开启邀请注册赠送",prop:"inviteSendStatus"},{default:l(()=>[e(_,{modelValue:t.inviteSendStatus,"onUpdate:modelValue":n[9]||(n[9]=d=>t.inviteSendStatus=d),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"邀请赠送基础模型对话额度",prop:"inviteGiveSendModel3Count",rules:i(f)},{default:l(()=>[e(s,{modelValue:t.inviteGiveSendModel3Count,"onUpdate:modelValue":n[10]||(n[10]=d=>t.inviteGiveSendModel3Count=d),placeholder:"邀请注册用户赠送基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"邀请赠送高级模型对话额度",prop:"inviteGiveSendModel4Count",rules:i(f)},{default:l(()=>[e(s,{modelValue:t.inviteGiveSendModel4Count,"onUpdate:modelValue":n[11]||(n[11]=d=>t.inviteGiveSendModel4Count=d),placeholder:"邀请注册用户赠送高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"邀请赠送绘画积分额度",prop:"inviteGiveSendDrawMjCount",rules:i(f)},{default:l(()=>[e(s,{modelValue:t.inviteGiveSendDrawMjCount,"onUpdate:modelValue":n[12]||(n[12]=d=>t.inviteGiveSendDrawMjCount=d),placeholder:"邀请注册用户赠送MJ额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"被邀请赠送基础模型对话额度",prop:"invitedGuestSendModel3Count",rules:i(f)},{default:l(()=>[e(s,{modelValue:t.invitedGuestSendModel3Count,"onUpdate:modelValue":n[13]||(n[13]=d=>t.invitedGuestSendModel3Count=d),placeholder:"被邀请注册用户赠送基础模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"被邀请赠送高级模型对话额度",prop:"invitedGuestSendModel4Count",rules:i(f)},{default:l(()=>[e(s,{modelValue:t.invitedGuestSendModel4Count,"onUpdate:modelValue":n[14]||(n[14]=d=>t.invitedGuestSendModel4Count=d),placeholder:"被邀请注册用户赠送高级模型对话额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1}),e(o,null,{default:l(()=>[e(r,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(u,{label:"被邀请赠送绘画额度",prop:"invitedGuestSendDrawMjCount",rules:i(f)},{default:l(()=>[e(s,{modelValue:t.invitedGuestSendDrawMjCount,"onUpdate:modelValue":n[15]||(n[15]=d=>t.invitedGuestSendDrawMjCount=d),placeholder:"被邀请注册用户赠送额度",clearable:""},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof w=="function"&&w(F);export{F as default};
