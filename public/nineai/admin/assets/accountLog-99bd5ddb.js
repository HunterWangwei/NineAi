
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as B}from"./index-b42478fa.js";import{a as N}from"./userBalance-48fa5a47.js";import{s as F,t as G,U as H,q as O}from"./index-f364fcb1.js";import{u as $}from"./utcformatTime-e76e5157.js";import{d as Q,r as _,Q as I,x as X,o as u,c as y,e as a,f as t,R as x,S as R,b as m,k as d,w as J,I as h,t as b,P as K,h as r,X as W,q as M}from"./index-fa2717cc.js";const Z=Q({__name:"accountLog",setup(ee){const C=_(),T=_(0),f=_(!1),n=I({userId:"",rechargeType:"",packageId:"",page:1,size:15});I({model3Count:[{required:!0,message:"请填写赠送基础模型额度",trigger:"blur"}],model4Count:[{required:!0,message:"请填写赠送高级模型额度",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写赠送绘画积分额度",trigger:"blur"}]});const A=_([]),U=_([]);async function i(){try{f.value=!0;const s=await N.queryUserAccountLog(n),{rows:l,count:g}=s.data;f.value=!1,T.value=g,U.value=l}catch{f.value=!1}}async function P(s){const l=await K.queryAllUser({size:30,keyword:s});A.value=l.data.rows}function q(s){s==null||s.resetFields(),i()}return X(()=>i()),(s,l)=>{const g=r("el-option"),k=r("el-select"),w=r("el-form-item"),S=r("el-button"),D=r("el-form"),z=B,V=r("el-avatar"),o=r("el-table-column"),v=r("el-tag"),Y=r("el-table"),E=r("el-pagination"),L=r("el-row"),j=W("loading");return u(),y("div",null,[a(z,null,{default:t(()=>[a(D,{ref_key:"formRef",ref:C,inline:!0,model:n},{default:t(()=>[a(w,{label:"用户名称",prop:"userId"},{default:t(()=>[a(k,{modelValue:n.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"昵称|手机号|邮箱[模糊搜索]","remote-show-suffix":"","remote-method":P},{default:t(()=>[(u(!0),y(x,null,R(A.value,e=>(u(),h(g,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(w,{label:"充值类型",prop:"rechargeType"},{default:t(()=>[a(k,{modelValue:n.rechargeType,"onUpdate:modelValue":l[1]||(l[1]=e=>n.rechargeType=e),placeholder:"请选择充值类型",clearable:""},{default:t(()=>[(u(!0),y(x,null,R(m(F),e=>(u(),h(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(w,null,{default:t(()=>[a(S,{type:"primary",onClick:i},{default:t(()=>[d(" 查询 ")]),_:1}),a(S,{onClick:l[2]||(l[2]=e=>q(C.value))},{default:t(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(z,{style:{width:"100%"}},{default:t(()=>[J((u(),h(Y,{border:"",data:U.value,style:{width:"100%"},size:"large"},{default:t(()=>[a(o,{prop:"avatar",label:"用户头像",width:"120",fixed:""},{default:t(e=>[a(V,{src:e.row.avatar},null,8,["src"])]),_:1}),a(o,{prop:"username",label:"用户名称",width:"150",fixed:""}),a(o,{prop:"id",label:"用户ID",width:"80"}),a(o,{prop:"uid",label:"订单ID",width:"130"}),a(o,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),a(o,{prop:"balanceInfo.useModel4Count",label:"充值类型",width:"160",align:"center"},{default:t(e=>[a(v,{type:"success"},{default:t(()=>{var p,c;return[d(b((p=e.row)!=null&&p.rechargeType?m(G)[(c=e.row)==null?void 0:c.rechargeType]:"---"),1)]}),_:2},1024)]),_:1}),a(o,{prop:"model3Count",label:"基础模型额度",width:"120",align:"center"}),a(o,{prop:"model4Count",label:"高级模型额度",width:"120",align:"center"}),a(o,{prop:"drawMjCount",label:"绘画余额额度",width:"120",align:"center"}),a(o,{label:"额度有效期",width:"170",align:"center"},{default:t(e=>[a(v,{type:"success"},{default:t(()=>{var p,c;return[d(b(((p=e.row)==null?void 0:p.days)<=0?"永久时效":`${(c=e.row)==null?void 0:c.days}天`),1)]}),_:2},1024)]),_:1}),a(o,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:t(({row:e})=>[a(v,{type:m(H)[e.status]},{default:t(()=>[d(b(m(O)[e.status]),1)]),_:2},1032,["type"])]),_:1}),a(o,{prop:"createdAt",label:"充值时间",width:"200",align:"center"},{default:t(e=>[d(b(m($)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1})]),_:1},8,["data"])),[[j,f.value]]),a(L,{class:"flex justify-end mt-5"},{default:t(()=>[a(E,{"current-page":n.page,"onUpdate:currentPage":l[3]||(l[3]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":l[4]||(l[4]=e=>n.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:T.value,onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","total"])]),_:1})]),_:1})])}}});typeof M=="function"&&M(Z);export{Z as default};
