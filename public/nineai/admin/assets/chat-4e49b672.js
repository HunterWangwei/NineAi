
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as j}from"./index-ebfdc92e.js";import{d as K,r as u,Q as N,x as F,o as m,c as C,e as t,f as o,R as H,S as P,b as i,j as O,k as d,w as Q,I as T,t as _,a as x,P as X,h as l,X as $,l as G,q as A}from"./index-4432f6f4.js";import{m as g}from"./marked.esm-76161808.js";import{A as J}from"./chat-4971d29b.js";import{u as W}from"./utcformatTime-e76e5157.js";const Z={class:"answer"},E=["innerHTML"],ee=K({__name:"chat",setup(te){const V=new g.Renderer;g.setOptions({renderer:V,gfm:!0,pedantic:!1,sanitize:!1});const c=u(!1),h=u([]),v=u(),b=u(0),a=N({userId:"",prompt:"",page:1,size:10}),y=u([]);async function p(){c.value=!0;try{const r=await J.queryChatAll(a);c.value=!1;const{rows:n,count:f}=r.data;b.value=f,y.value=n}catch{c.value=!1}}async function I(r){const n=await X.queryAllUser({size:30,username:r});h.value=n.data.rows}function U(r){r==null||r.resetFields(),p()}return F(()=>{p()}),(r,n)=>{const f=l("el-option"),D=l("el-select"),w=l("el-form-item"),M=l("el-input"),k=l("el-button"),S=l("el-form"),z=j,s=l("el-table-column"),L=l("el-popover"),R=l("el-table"),q=l("el-pagination"),B=l("el-row"),Y=$("loading");return m(),C("div",null,[t(z,null,{default:o(()=>[t(S,{ref_key:"formRef",ref:v,inline:!0,model:a},{default:o(()=>[t(w,{label:"用户名称",prop:"userId"},{default:o(()=>[t(D,{modelValue:a.userId,"onUpdate:modelValue":n[0]||(n[0]=e=>a.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":I},{default:o(()=>[(m(!0),C(H,null,P(i(h),e=>(m(),T(f,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(w,{label:"用户询问的问题",prop:"prompt"},{default:o(()=>[t(M,{modelValue:a.prompt,"onUpdate:modelValue":n[1]||(n[1]=e=>a.prompt=e),placeholder:"提问问题[模糊搜索]",onKeydown:O(G(p,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),t(w,null,{default:o(()=>[t(k,{type:"primary",onClick:p},{default:o(()=>[d(" 查询 ")]),_:1}),t(k,{onClick:n[2]||(n[2]=e=>U(i(v)))},{default:o(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(z,{style:{width:"100%"}},{default:o(()=>[Q((m(),T(R,{border:"",data:i(y),style:{width:"100%"},size:"large","tooltip-options":{}},{default:o(()=>[t(s,{fixed:"",prop:"username",label:"用户名称",width:"150"}),t(s,{prop:"createdAt",label:"角色",width:"80"},{default:o(e=>[d(_(e.row.role==="user"?"用户":"电脑"),1)]),_:1}),t(s,{prop:"email",label:"用户邮箱",width:"200"}),t(s,{prop:"answer",label:"用户询问/AI回复"},{default:o(e=>[t(L,{placement:"top",width:400,trigger:"click"},{reference:o(()=>[x("div",Z,_(e.row.role==="user"?e.row.prompt:e.row.answer),1)]),default:o(()=>[x("div",{class:"answer_container",innerHTML:i(g)(e.row.role==="user"?e.row.prompt:e.row.answer||"")},null,8,E)]),_:2},1024)]),_:1}),t(s,{prop:"completionTokens",label:"提问/回答Token",width:"140",align:"center"},{default:o(e=>[d(_(e.row.role==="user"?e.row.promptTokens:e.row.completionTokens),1)]),_:1}),t(s,{prop:"totalTokens",label:"总计Toekn",width:"110",align:"center"}),t(s,{prop:"model",label:"模型",width:"200"}),t(s,{prop:"createdAt",label:"提问时间",width:"200"},{default:o(e=>[d(_(i(W)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1})]),_:1},8,["data"])),[[Y,i(c)]]),t(B,{class:"flex justify-end mt-5"},{default:o(()=>[t(q,{"current-page":a.page,"onUpdate:currentPage":n[3]||(n[3]=e=>a.page=e),"page-size":a.size,"onUpdate:pageSize":n[4]||(n[4]=e=>a.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:i(b),onSizeChange:p,onCurrentChange:p},null,8,["current-page","page-size","total"])]),_:1})]),_:1})])}}});typeof A=="function"&&A(ee);export{ee as default};
