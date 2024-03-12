
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as pe}from"./index-6dca4230.js";import{A as j}from"./models-f2d5e44f.js";import{u as me}from"./utcformatTime-e76e5157.js";import{f as ce,g as fe,M as X,b as _e,j as ye}from"./index-24ba6e4b.js";import{d as ge,r as T,Q as E,B as I,x as be,o as p,c as C,e,f as l,R as z,S as A,b as m,k as r,a as c,w as G,I as k,t as g,J as P,U as we,E as H,W as ke,h as n,X as ve,q as Z}from"./index-68314221.js";const Te={style:{float:"right"}},he=c("div",{style:{width:"250px"}}," 开放状态的模型可以供用户选择、关闭的模型仅不支持用户切换、但是例如、插件、Dall-e绘画、系统内的翻译、思维导图等依然需要使用此类模型。 ",-1),xe=c("div",{style:{width:"250px"}}," 给定了部分可选的模型列表、你可以可以手动填写您需要调用的模型、请确保填写的模型格式同chatgpt相同、否则可能会在调用中出现不可预知错误！ ",-1),Ve=c("div",{style:{width:"250px"}}," 设置当前key的扣费类型、扣除普通余额或是高级余额。 ",-1),De=c("div",{style:{width:"250px"}}," 设置当前key的单词调用扣除余额、建议同模型或名称key设置相同的金额、避免扣费发生异常！ ",-1),Ue=c("div",{style:{width:"250px"}}," 填写此配置可以限制用户在选择模型时候的高级配置中的最大上下文轮次、可以通过限制此数量减少token的损耗、减低上下文的损耗量、 如果设置了模型的最大token和返回量、那么两个限制会同时生效！ ",-1),Ne=c("div",{style:{width:"250px"}}," 最大token值可以限制模型单词使用允许开放的最大上下文、设置为0表示使用模型的最大上下文、超出依然使用模型允许最大值 ",-1),Me=c("div",{style:{width:"250px"}}," 填写的排序值最大越靠前，决定了用户模型列表的排序顺序 ",-1),Ce=c("div",{style:{width:"250px"}}," 设为默认模型则会优先使用此模型、比如在新建对话时将会默认为此模型、设置多个无效、只会以第一个为准！ ",-1),Se=c("div",{style:{width:"250px"}}," 基础绘画来自于OPENAI的DALL-E模型、所以需要为官方的apiKey、或者你的中转支持绘画！请确定至少设置一张key为基础绘画key即可使用绘画功能！ 可与工具模型同时开启、且推荐只设置单独一个模型即可。 ",-1),Le=c("div",{style:{width:"250px"}}," 工具key仅可来自于OPENAI的的模型、在应用、翻译、联想、思维导图等特殊场景需要使用此模型处理内置操作、建议设置一个模型转为特殊工具使用即可！ 可与绘画模型同时开启、且推荐只设置单独一个模型即可。 ",-1),Re=c("div",{style:{width:"250px"}}," 部分模型支持识别图片文件、例如 gpt-4-all、勾选此选择则用户端使用对应的模型时可以显示上传按钮、允许用户端上传文件！ ",-1),Ie=c("div",{style:{width:"250px"}}," 开启联网模式后模型名称改为 net-原始模型名称调用、官方内置中转支持这种模式、如果是三方其他中转请自行适配、不支持请勿打开此选项！ ",-1),ze={class:"flex justify-end mr-5"},Ae=ge({__name:"modelType",setup(Pe){const F=T(),Q=T(0),h=T(!1),S=T(!1),ee=T(!1),b=E({modelType:"",model:"",status:null,page:1,size:10}),q=T(),x=T(0),a=E({modelType:1,modelName:"",status:!0,model:"",deductType:1,deduct:1,order:100,maxTokens:0,maxRounds:12,isDefaultModel:!1,isDallDraw:!1,isUseTool:!1,supportUpload:!1,supportNetwork:!1}),le=E({modelType:[{required:!0,message:"请填写您的调用模型类型",trigger:"blur"}],modelName:[{required:!0,message:"请填写您的模型名称",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxTokens:[{required:!0,message:"请填写模型允许的最大token数",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}]});function te(d){x.value=0,d==null||d.resetFields()}I(()=>ce[a.modelType]);const oe=I(()=>x.value?"更新模型":"新增模型");I(()=>fe[a.modelType]);const ae=I(()=>x.value?"确认更新":"确认新增"),J=T([]);async function V(){try{S.value=!0;const d=await j.queryModelType(b);S.value=!1;const{rows:o,count:f}=d.data;Q.value=f,J.value=o}catch{S.value=!1}}async function de(d){const{id:o}=d;await j.delModelType({id:o}),H({type:"success",message:"操作完成！"}),V()}function se(d){x.value=d.id;const{modelType:o,modelName:f,secret:D,status:u,model:v,maxTokens:O,deductType:i,deduct:L,maxRounds:N,isDefaultModel:K,isDallDraw:s,isUseTool:w,order:Y,supportUpload:$,supportNetwork:B}=d;ke(()=>{Object.assign(a,{modelType:o,modelName:f,secret:D,status:u,model:v,maxTokens:O,deductType:i,deduct:L,maxRounds:N,isDefaultModel:K,isDallDraw:s,isUseTool:w,order:Y,supportUpload:$,supportNetwork:B})}),h.value=!0}function ne(d){d==null||d.resetFields(),V()}async function ue(d){d==null||d.validate(async o=>{if(o){const f=JSON.parse(JSON.stringify(a));delete f.id,x.value&&(f.id=x.value),await j.setModelType(f),H({type:"success",message:"操作成功！"}),x.value=0,h.value=!1,V()}})}return be(()=>{V()}),(d,o)=>{const f=n("el-option"),D=n("el-select"),u=n("el-form-item"),v=n("el-button"),O=n("Plus"),i=n("el-icon"),L=n("el-form"),N=pe,K=n("el-alert"),s=n("el-table-column"),w=n("el-tag"),Y=n("el-popconfirm"),$=n("el-table"),B=n("el-pagination"),re=n("el-row"),U=n("el-switch"),_=n("QuestionFilled"),y=n("el-tooltip"),M=n("el-input"),ie=n("el-dialog"),W=ve("loading");return p(),C("div",null,[e(N,null,{default:l(()=>[e(L,{ref_key:"formRef",ref:F,inline:!0,model:b},{default:l(()=>[e(u,{label:"模型名称",prop:"model"},{default:l(()=>[e(D,{modelValue:b.model,"onUpdate:modelValue":o[0]||(o[0]=t=>b.model=t),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:""},{default:l(()=>[(p(!0),C(z,null,A(m(X),t=>(p(),k(f,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{label:"启用状态",prop:"status"},{default:l(()=>[e(D,{modelValue:b.status,"onUpdate:modelValue":o[1]||(o[1]=t=>b.status=t),placeholder:"请选择用户可见",clearable:""},{default:l(()=>[(p(!0),C(z,null,A(m(_e),t=>(p(),k(f,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:l(()=>[e(v,{type:"primary",onClick:V},{default:l(()=>[r(" 查询 ")]),_:1}),e(v,{onClick:o[2]||(o[2]=t=>ne(m(F)))},{default:l(()=>[r(" 重置 ")]),_:1})]),_:1}),c("span",Te,[e(v,{type:"success",onClick:o[3]||(o[3]=t=>h.value=!0)},{default:l(()=>[r(" 添加模型 "),e(i,{class:"ml-3"},{default:l(()=>[e(O)]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1}),e(N,null,{default:l(()=>[e(K,{"show-icon":"",title:"模型说明",description:"所有开启的模型将会直接应用到客户端供用户选择使用、请注意在添加模型时候如果您需要使用DALL-E绘画你需要特别指定模型为绘画KEY、同时例如思维导图、应用、翻译、联想等功能【目前绑定为OPENAI类目】请在添加模型的时候勾选上设置为工具Key、届时调用此类功能将使用我们指定的模型、同时绘画KEY和工具KEY可同时设定、建议仅设置一个列表为绘画key、并且绘画key与工具key不会被给到前台供用户选择！",type:"success"})]),_:1}),e(N,{style:{width:"100%"}},{default:l(()=>[G((p(),k($,{border:"",data:m(J),style:{width:"100%"},size:"large"},{default:l(()=>[e(s,{prop:"id",label:"ID",width:"50"}),e(s,{prop:"order",align:"center",label:"排序ID",width:"90"}),e(s,{prop:"modelName",label:"自定义模型名称",width:"240"}),e(s,{prop:"keyCount",align:"center",label:"key数量",width:"90"},{default:l(t=>{var R;return[e(w,{type:((R=t.row)==null?void 0:R.keyCount)>0?"success":""},{default:l(()=>[r(g(t.row.keyCount),1)]),_:2},1032,["type"])]}),_:1}),e(s,{prop:"status",align:"center",label:"用户可见状态",width:"120"},{default:l(t=>[e(w,{type:t.row.status?"success":"danger"},{default:l(()=>[r(g(t.row.status?"可见":"不可见"),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"model",align:"center",label:"绑定模型",width:"240"},{default:l(t=>[e(w,{type:t.row.model.includes("gpt-4")?"success":""},{default:l(()=>[r(g(t.row.model),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"maxTokens",align:"center",label:"最大Token数",width:"120"},{default:l(t=>[c("span",null,g(t.row.maxTokens?t.row.maxTokens:"自适应"),1)]),_:1}),e(s,{prop:"isDefaultModel",align:"center",label:"默认模型",width:"90"},{default:l(t=>[e(w,{type:t.row.isDefaultModel?"success":"info"},{default:l(()=>[r(g(t.row.isDefaultModel?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"isDallDraw",align:"center",label:"DALL绘图专用",width:"130"},{default:l(t=>[e(w,{type:t.row.isDallDraw?"success":"info"},{default:l(()=>[r(g(t.row.isDallDraw?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"isUseTool",align:"center",label:"工具专用",width:"140"},{default:l(t=>[e(w,{type:t.row.isUseTool?"success":"info"},{default:l(()=>[r(g(t.row.isUseTool?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"deductType",align:"center",label:"扣费类型",width:"120"},{default:l(t=>[e(w,{type:t.row.deductType===1?"info":"warning"},{default:l(()=>[r(g(t.row.deductType===1?"普通余额":"高级余额"),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"deduct",align:"center",label:"单次扣除",width:"100"},{default:l(t=>[e(w,{type:t.row.deductType===1?"success":"warning"},{default:l(()=>[r(g(`${t.row.deduct} 积分`),1)]),_:2},1032,["type"])]),_:1}),e(s,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),e(s,{prop:"useToken",align:"center",label:"调用Token",width:"120"}),e(s,{prop:"maxRounds",align:"center",label:"限制上下文轮次",width:"160"},{default:l(t=>[r(g(t.row.maxRounds||"-"),1)]),_:1}),e(s,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:l(t=>[r(g(m(me)(t.row.createdAt,"YYYY-MM-DD")),1)]),_:1}),e(s,{fixed:"right",label:"操作",width:"200"},{default:l(t=>[e(v,{link:"",type:"primary",size:"small",onClick:R=>se(t.row)},{default:l(()=>[r(" 变更 ")]),_:2},1032,["onClick"]),e(Y,{title:"确认删除此模型么?",width:"180","icon-color":"red",onConfirm:R=>de(t.row)},{reference:l(()=>[e(v,{link:"",type:"danger",size:"small"},{default:l(()=>[r(" 删除模型 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[W,m(S)]]),e(re,{class:"flex justify-end mt-5"},{default:l(()=>[e(B,{"current-page":b.page,"onUpdate:currentPage":o[4]||(o[4]=t=>b.page=t),"page-size":b.size,"onUpdate:pageSize":o[5]||(o[5]=t=>b.size=t),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:m(Q),onSizeChange:V,onCurrentChange:V},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(ie,{modelValue:m(h),"onUpdate:modelValue":o[21]||(o[21]=t=>we(h)?h.value=t:null),"close-on-click-modal":!1,title:m(oe),width:"770",onClose:o[22]||(o[22]=t=>te(m(q)))},{footer:l(()=>[c("span",ze,[e(v,{onClick:o[19]||(o[19]=t=>h.value=!1)},{default:l(()=>[r("取消")]),_:1}),e(v,{type:"primary",onClick:o[20]||(o[20]=t=>ue(m(q)))},{default:l(()=>[r(g(m(ae)),1)]),_:1})])]),default:l(()=>[G((p(),k(L,{ref_key:"formPackageRef",ref:q,"label-position":"right","label-width":"120px",model:a,rules:le},{default:l(()=>[e(u,{label:"用户可见状态",prop:"status"},{default:l(()=>[e(U,{modelValue:a.status,"onUpdate:modelValue":o[6]||(o[6]=t=>a.status=t)},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[he]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"模型中文名称",prop:"modelName"},{default:l(()=>[e(M,{modelValue:a.modelName,"onUpdate:modelValue":o[7]||(o[7]=t=>a.modelName=t),placeholder:"请填写模型中文名称（用户选择的）"},null,8,["modelValue"])]),_:1}),e(u,{label:"账号关联模型",prop:"model"},{default:l(()=>[e(D,{modelValue:a.model,"onUpdate:modelValue":o[8]||(o[8]=t=>a.model=t),filterable:"",clearable:"",placeholder:"请选用或填写绑定的模型","allow-create":Number(a.modelType)===1,style:{width:"80%"}},{default:l(()=>[(p(!0),C(z,null,A(m(X),t=>(p(),k(f,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","allow-create"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[xe]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"模型扣费类型",prop:"deductType"},{default:l(()=>[e(D,{modelValue:a.deductType,"onUpdate:modelValue":o[9]||(o[9]=t=>a.deductType=t),filterable:"","allow-create":"",clearable:"",placeholder:"请选用模型扣费类型",style:{width:"80%"}},{default:l(()=>[(p(!0),C(z,null,A(m(ye),t=>(p(),k(f,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Ve]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"单次扣除金额",prop:"deduct"},{default:l(()=>[e(M,{modelValue:a.deduct,"onUpdate:modelValue":o[10]||(o[10]=t=>a.deduct=t),modelModifiers:{number:!0},placeholder:"请填写单词调用此key的扣费金额！",style:{width:"80%"}},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[De]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"上下文限制",prop:"maxRounds"},{default:l(()=>[e(M,{modelValue:a.maxRounds,"onUpdate:modelValue":o[11]||(o[11]=t=>a.maxRounds=t),modelModifiers:{number:!0},placeholder:"请填写允许用户选择的最高上下文轮次！",style:{width:"80%"}},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Ue]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"Token限制",prop:"maxTokens"},{default:l(()=>[e(M,{modelValue:a.maxTokens,"onUpdate:modelValue":o[12]||(o[12]=t=>a.maxTokens=t),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、使用模型最大值填0即可！",style:{width:"80%"}},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Ne]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"自定义排序",prop:"order"},{default:l(()=>[e(M,{modelValue:a.order,"onUpdate:modelValue":o[13]||(o[13]=t=>a.order=t),modelModifiers:{number:!0},placeholder:"请填写order排序值！",style:{width:"80%"}},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Me]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),e(u,{label:"设为默认模型",prop:"isDallDraw"},{default:l(()=>[e(U,{modelValue:a.isDefaultModel,"onUpdate:modelValue":o[14]||(o[14]=t=>a.isDefaultModel=t)},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Ce]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1}),[1].includes(Number(a.modelType))?(p(),k(u,{key:0,label:"设为绘画模型",prop:"isDallDraw"},{default:l(()=>[e(U,{modelValue:a.isDallDraw,"onUpdate:modelValue":o[15]||(o[15]=t=>a.isDallDraw=t)},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Se]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})):P("",!0),[1].includes(Number(a.modelType))?(p(),k(u,{key:1,label:"设为工具模型",prop:"isUseTool"},{default:l(()=>[e(U,{modelValue:a.isUseTool,"onUpdate:modelValue":o[16]||(o[16]=t=>a.isUseTool=t)},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Le]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})):P("",!0),[1].includes(Number(a.modelType))?(p(),k(u,{key:2,label:"支持文件上传",prop:"supportUpload"},{default:l(()=>[e(U,{modelValue:a.supportUpload,"onUpdate:modelValue":o[17]||(o[17]=t=>a.supportUpload=t)},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Re]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})):P("",!0),[1].includes(Number(a.modelType))?(p(),k(u,{key:3,label:"支持联网模式",prop:"supportNetwork"},{default:l(()=>[e(U,{modelValue:a.supportNetwork,"onUpdate:modelValue":o[18]||(o[18]=t=>a.supportNetwork=t)},null,8,["modelValue"]),e(y,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Ie]),default:l(()=>[e(i,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})):P("",!0)]),_:1},8,["model","rules"])),[[W,m(ee)]])]),_:1},8,["modelValue","title"])])}}});typeof Z=="function"&&Z(Ae);export{Ae as default};
