
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as me}from"./index-ebfdc92e.js";import{A as E}from"./models-8f9a8bbb.js";import{u as ce}from"./utcformatTime-e76e5157.js";import{f as ye,g as fe,M as _e,b as ke,h as ge,i as be,j as we}from"./index-867b894d.js";import{d as Te,r as w,Q as j,B as I,x as ve,o as p,c as N,e,f as t,R,S,b as u,k as i,a as _,w as Q,I as f,t as y,J as A,U as xe,E as X,W as Ve,h as d,X as he,q as G}from"./index-4432f6f4.js";const Ue={style:{float:"right"}},De=_("div",{style:{width:"250px"}}," 账号启用状态、一旦锁定当前key将停止工作！ ",-1),Ne=_("div",{style:{width:"250px"}}," 不同模型的设置不同、例如openai仅设置key即可、如果是百度大模型、则填写clientId以及同时需要填写secret。对于OPENAI模型、我们支持批量导入、如果您需要批量导入key、则一行一个key即可、多个key使用换行隔离、其余配置将共享、多个key可以重复选用默认模型。 ",-1),Me=_("div",{style:{width:"250px"}}," 不同账号填写的内容不同、但是都代表的是Secret秘钥 ",-1),Re=_("div",{style:{width:"250px"}}," 给定了部分可选的模型列表、你可以可以手动填写您需要调用的模型、请确保填写的模型是当前key支持的类型、否则可能会在调用中出现不可预知错误！ ",-1),Se=_("div",{style:{width:"250px"}}," 设置当前key的扣费类型、扣除普通余额或是高级余额。 ",-1),Ce=_("div",{style:{width:"250px"}}," 设置当前key的单词调用扣除余额、建议同模型或名称key设置相同的金额、避免扣费发生异常！ ",-1),Le=_("div",{style:{width:"250px"}}," 填写此配置可以限制用户在选择模型时候的高级配置中的最大上下文轮次、可以通过限制此数量减少token的损耗、减低上下文的损耗量、 如果设置了模型的最大token和返回量、那么两个限制会同时生效！ ",-1),Ie=_("div",{style:{width:"250px"}}," 当前轮询是根据模型下的列表按顺序调用、如果权重为2则表示轮到此key的时候会调用两次之后再轮询下一个key 保证每个key的调用顺序以及限制每次调用的准确次数 ",-1),Ae=_("div",{style:{width:"250px"}}," 基础绘画来自于OPENAI的DALL-E模型、所以需要为官方的apiKey、请确定至少设置一张key为基础绘画key即可使用绘画功能！同时当前版本的mind思维导图和mj联想绘图等功能都会走当前设置的key，会后后续版本解除此限制！ ",-1),Oe={class:"flex justify-end mr-5"},Pe=Te({__name:"index",setup(qe){w();const B=w(),Y=w(0),h=w(!1),C=w(!1),H=w(!1);w(!1);const k=j({keyType:"",model:"",status:null,page:1,size:10}),O=w(),U=w(0),o=j({keyType:1,modelName:"",status:!0,model:"",temperature:"",deduct:1,deductType:1,order:100,maxTokens:4096,maxResponseTokens:2048,maxRounds:12,isDallE3:!1,isUseTool:!1}),Z=j({keyType:[{required:!0,message:"请填写您的调用模型类型",trigger:"blur"}],modelName:[{required:!0,message:"请填写您的模型名称",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],model:[{required:!0,message:"请选择当前key需要绑定的模型",trigger:"change"}],temperature:[{required:!0,message:"请设置模型默认温度",trigger:"change"}],maxTokens:[{required:!0,message:"请填写模型允许的最大token数",trigger:"blur"}],maxResponseTokens:[{required:!0,message:"请填写允许用户使用的最大回复token数",trigger:"blur"}],deductType:[{required:!0,message:"请选择当前模型扣费类型",trigger:"change"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],maxRounds:[{required:!0,message:"请填写允许用户选择的最大上下文轮次",trigger:"blur"}]});function ee(n){U.value=0,n==null||n.resetFields()}const le=I(()=>ye[o.keyType]),te=I(()=>U.value?"更新秘钥":"新增秘钥"),ae=I(()=>fe[o.keyType]),oe=I(()=>U.value?"确认更新":"确认新增"),F=w([]);async function D(){try{C.value=!0;const n=await E.queryModels(k);C.value=!1;const{rows:a,count:m}=n.data;Y.value=m,F.value=a}catch{C.value=!1}}async function se(n){const{id:a}=n;await E.delModels({id:a}),X({type:"success",message:"操作完成！"}),D()}function ne(n){U.value=n.id;const{keyType:a,modelName:m,key:V,secret:s,status:g,model:P,keyWeight:c,maxTokens:L,maxResponseTokens:M,proxyUrl:q,timeout:T,deductType:r,deduct:z,maxRounds:K,isDraw:$}=n;Ve(()=>{Object.assign(o,{keyType:a,modelName:m,key:V,secret:s,status:g,model:P,keyWeight:c,maxTokens:L,maxResponseTokens:M,proxyUrl:q,timeout:T,deductType:r,deduct:z,maxRounds:K,isDraw:$})}),h.value=!0}function de(n){n==null||n.resetFields(),D()}async function re(n){n==null||n.validate(async a=>{if(a){const m=JSON.parse(JSON.stringify(o));if(delete m.id,U.value&&(m.id=U.value),Number(o.keyType)===1){const s=JSON.parse(JSON.stringify(o.key)).split(`
`);m.key=s}await E.setModels(m),X({type:"success",message:"操作成功！"}),U.value=0,h.value=!1,D()}})}return ve(()=>{D()}),(n,a)=>{const m=d("el-option"),V=d("el-select"),s=d("el-form-item"),g=d("el-button"),P=d("Plus"),c=d("el-icon"),L=d("el-form"),M=me,q=d("el-alert"),T=d("el-tag"),r=d("el-table-column"),z=d("el-popconfirm"),K=d("el-table"),$=d("el-pagination"),ue=d("el-row"),J=d("el-switch"),v=d("QuestionFilled"),x=d("el-tooltip"),b=d("el-input"),ie=d("el-dialog"),W=he("loading");return p(),N("div",null,[e(M,null,{default:t(()=>[e(L,{ref_key:"formRef",ref:B,inline:!0,model:k},{default:t(()=>[e(s,{label:"模型名称",prop:"model"},{default:t(()=>[e(V,{modelValue:k.model,"onUpdate:modelValue":a[0]||(a[0]=l=>k.model=l),filterable:"","allow-create":"",placeholder:"请选择或填写绑定的模型",clearable:""},{default:t(()=>[(p(!0),N(R,null,S(u(_e),l=>(p(),f(m,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"启用状态",prop:"status"},{default:t(()=>[e(V,{modelValue:k.status,"onUpdate:modelValue":a[1]||(a[1]=l=>k.status=l),placeholder:"请选择模型启用状态",clearable:""},{default:t(()=>[(p(!0),N(R,null,S(u(ke),l=>(p(),f(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(g,{type:"primary",onClick:D},{default:t(()=>[i(" 查询 ")]),_:1}),e(g,{onClick:a[2]||(a[2]=l=>de(u(B)))},{default:t(()=>[i(" 重置 ")]),_:1})]),_:1}),_("span",Ue,[e(g,{type:"success",onClick:a[3]||(a[3]=l=>h.value=!0)},{default:t(()=>[i(" 添加模型 "),e(c,{class:"ml-3"},{default:t(()=>[e(P)]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1}),e(M,null,{default:t(()=>[e(q,{"show-icon":"",title:"模型说明",description:"所有开启的模型将会直接应用到客户端供用户选择使用、请注意在添加模型时候如果您需要使用DALL-E绘画你需要特别指定模型为绘画时候、同时例如思维导图、应用、翻译、联想等功能【目前绑定为OPENAI类目】请在添加模型的时候勾选上设置为工具Key、届时调用此类功能将使用我们指定的模型！",type:"success"})]),_:1}),e(M,{style:{width:"100%"}},{default:t(()=>[Q((p(),f(K,{border:"",data:u(F),style:{width:"100%"},size:"large"},{default:t(()=>[e(r,{prop:"keyType",label:"模型类型",width:"120"},{default:t(l=>[e(T,{type:"success"},{default:t(()=>[i(y(u(ge)[l.row.keyType]),1)]),_:2},1024)]),_:1}),e(r,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:t(l=>[e(T,{type:l.row.status?"success":"danger"},{default:t(()=>[i(y(l.row.status?"使用中":"已暂停"),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"modelName",label:"自定义模型名称"}),e(r,{prop:"model",align:"center",label:"指定模型"},{default:t(l=>[e(T,{type:l.row.model.includes("gpt-4")?"success":""},{default:t(()=>[i(y(l.row.model),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"isDraw",align:"center",label:"绑定DALL-E",width:"120"},{default:t(l=>[e(T,{type:l.row.isDraw?"success":"danger"},{default:t(()=>[i(y(l.row.isDraw?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"isDraw",align:"center",label:"绑定通用功能",width:"120"},{default:t(l=>[e(T,{type:l.row.isDraw?"success":"danger"},{default:t(()=>[i(y(l.row.isUseTool?"是":"否"),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"deductType",align:"center",label:"扣费类型",width:"120"},{default:t(l=>[e(T,{type:l.row.deductType===1?"":"error"},{default:t(()=>[i(y(l.row.deductType===1?"普通余额":"高级余额"),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"deduct",align:"center",label:"单次扣除",width:"100"},{default:t(l=>[e(T,{type:l.row.deductType===1?"success":"warning"},{default:t(()=>[i(y(`${l.row.deduct} 积分`),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"temperature",align:"center",label:"默认温度",width:"100"},{default:t(l=>[i(y(l.row.temperature||"---"),1)]),_:1}),e(r,{prop:"order",align:"center",label:"排序ID",width:"90"}),e(r,{prop:"useCount",align:"center",label:"调用次数",width:"90"}),e(r,{prop:"useToken",align:"center",label:"调用Token",width:"120"}),e(r,{prop:"maxResponseTokens",align:"center",label:"限制最大回复",width:"160"},{default:t(l=>[e(g,{type:"info",text:""},{default:t(()=>[i(y(l.row.maxResponseTokens||"-"),1)]),_:2},1024)]),_:1}),e(r,{prop:"maxRounds",align:"center",label:"限制上下文轮次",width:"160"},{default:t(l=>[i(y(l.row.maxRounds||"-"),1)]),_:1}),e(r,{prop:"createdAt",align:"center",label:"添加时间",width:"120"},{default:t(l=>[i(y(u(ce)(l.row.createdAt,"YYYY-MM-DD")),1)]),_:1}),e(r,{fixed:"right",label:"操作",width:"200"},{default:t(l=>[e(g,{link:"",type:"primary",size:"small",onClick:pe=>ne(l.row)},{default:t(()=>[i(" 变更 ")]),_:2},1032,["onClick"]),e(z,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:pe=>se(l.row)},{reference:t(()=>[e(g,{link:"",type:"danger",size:"small"},{default:t(()=>[i(" 删除秘钥 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[W,u(C)]]),e(ue,{class:"flex justify-end mt-5"},{default:t(()=>[e($,{"current-page":k.page,"onUpdate:currentPage":a[4]||(a[4]=l=>k.page=l),"page-size":k.size,"onUpdate:pageSize":a[5]||(a[5]=l=>k.size=l),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:u(Y),onSizeChange:D,onCurrentChange:D},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(ie,{modelValue:u(h),"onUpdate:modelValue":a[23]||(a[23]=l=>xe(h)?h.value=l:null),"close-on-click-modal":!1,title:u(te),width:"770",onClose:a[24]||(a[24]=l=>ee(u(O)))},{footer:t(()=>[_("span",Oe,[e(g,{onClick:a[21]||(a[21]=l=>h.value=!1)},{default:t(()=>[i("取消")]),_:1}),e(g,{type:"primary",onClick:a[22]||(a[22]=l=>re(u(O)))},{default:t(()=>[i(y(u(oe)),1)]),_:1})])]),default:t(()=>[Q((p(),f(L,{ref_key:"formPackageRef",ref:O,"label-position":"right","label-width":"120px",model:o,rules:Z},{default:t(()=>[e(s,{label:"模型类型选择",prop:"keyType"},{default:t(()=>[e(V,{modelValue:o.keyType,"onUpdate:modelValue":a[6]||(a[6]=l=>o.keyType=l),placeholder:"请选择模型类型",style:{width:"100%"}},{default:t(()=>[(p(!0),N(R,null,S(u(be),l=>(p(),f(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"模型启用状态",prop:"status"},{default:t(()=>[e(J,{modelValue:o.status,"onUpdate:modelValue":a[7]||(a[7]=l=>o.status=l)},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[De]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(s,{label:"模型中文名称",prop:"modelName"},{default:t(()=>[e(b,{modelValue:o.modelName,"onUpdate:modelValue":a[8]||(a[8]=l=>o.modelName=l),placeholder:"请填写模型中文名称（用户选择的）"},null,8,["modelValue"])]),_:1}),e(s,{label:u(ae),prop:"key"},{default:t(()=>[e(b,{modelValue:o.key,"onUpdate:modelValue":a[9]||(a[9]=l=>o.key=l),type:Number(o.keyType)===1?"textarea":"text",rows:5,placeholder:"请填写模型Key|clientId|AppId",style:{width:"95%"}},null,8,["modelValue","type"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ne]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1},8,["label"]),[2].includes(Number(o.keyType))?(p(),f(s,{key:0,label:"SecretKey",prop:"secret"},{default:t(()=>[e(b,{modelValue:o.secret,"onUpdate:modelValue":a[10]||(a[10]=l=>o.secret=l),placeholder:"请填写模型调用所需的Secret[部分类型模型需要]",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Me]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1})):A("",!0),e(s,{label:"账号关联模型",prop:"model"},{default:t(()=>[e(V,{modelValue:o.model,"onUpdate:modelValue":a[11]||(a[11]=l=>o.model=l),filterable:"",clearable:"",placeholder:"请选用或填写绑定的模型","allow-create":Number(o.keyType)===1,style:{width:"80%"}},{default:t(()=>[(p(!0),N(R,null,S(u(le),l=>(p(),f(m,{key:l,label:l,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue","allow-create"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Re]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(s,{label:"模型扣费类型",prop:"deductType"},{default:t(()=>[e(V,{modelValue:o.deductType,"onUpdate:modelValue":a[12]||(a[12]=l=>o.deductType=l),filterable:"","allow-create":"",clearable:"",placeholder:"请选用模型扣费类型",style:{width:"80%"}},{default:t(()=>[(p(!0),N(R,null,S(u(we),l=>(p(),f(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Se]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(s,{label:"单次扣除金额",prop:"deduct"},{default:t(()=>[e(b,{modelValue:o.deduct,"onUpdate:modelValue":a[13]||(a[13]=l=>o.deduct=l),modelModifiers:{number:!0},placeholder:"请填写单词调用此key的扣费金额！",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ce]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(s,{label:"上下文限制",prop:"maxRounds"},{default:t(()=>[e(b,{modelValue:o.maxRounds,"onUpdate:modelValue":a[14]||(a[14]=l=>o.maxRounds=l),modelModifiers:{number:!0},placeholder:"请填写允许用户选择的最高上下文轮次！",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Le]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(s,{label:"调用轮询权重",prop:"keyWeight"},{default:t(()=>[e(b,{modelValue:o.keyWeight,"onUpdate:modelValue":a[15]||(a[15]=l=>o.keyWeight=l),modelModifiers:{number:!0},placeholder:"请填写key的权重、数字越大使用评率越高！",style:{width:"80%"}},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ie]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(s,{label:"模型最大Token",prop:"maxTokens"},{default:t(()=>[e(b,{modelValue:o.maxTokens,"onUpdate:modelValue":a[16]||(a[16]=l=>o.maxTokens=l),modelModifiers:{number:!0},placeholder:"请填写模型最大Token、不填写默认使用默认！"},null,8,["modelValue"])]),_:1}),e(s,{label:"最大回复Token",prop:"maxResponseTokens"},{default:t(()=>[e(b,{modelValue:o.maxResponseTokens,"onUpdate:modelValue":a[17]||(a[17]=l=>o.maxResponseTokens=l),modelModifiers:{number:!0},placeholder:"请填写最大回复Token、不填写使用默认！"},null,8,["modelValue"])]),_:1}),[1].includes(Number(o.keyType))?(p(),f(s,{key:1,label:"调用超时时间",prop:"timeout"},{default:t(()=>[e(b,{modelValue:o.timeout,"onUpdate:modelValue":a[18]||(a[18]=l=>o.timeout=l),modelModifiers:{number:!0},placeholder:"请填写key的超时时间单位（秒）！"},null,8,["modelValue"])]),_:1})):A("",!0),[1].includes(Number(o.keyType))?(p(),f(s,{key:2,label:"设为特殊key",prop:"isDraw"},{default:t(()=>[e(J,{modelValue:o.isDraw,"onUpdate:modelValue":a[19]||(a[19]=l=>o.isDraw=l)},null,8,["modelValue"]),e(x,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ae]),default:t(()=>[e(c,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(v)]),_:1})]),_:1})]),_:1})):A("",!0),[1].includes(Number(o.keyType))?(p(),f(s,{key:3,label:"指定代理地址",prop:"proxyUrl"},{default:t(()=>[e(b,{modelValue:o.proxyUrl,"onUpdate:modelValue":a[20]||(a[20]=l=>o.proxyUrl=l),modelModifiers:{number:!0},placeholder:"如需使用代理请填写、不填写默认使用全局配置！"},null,8,["modelValue"])]),_:1})):A("",!0)]),_:1},8,["model","rules"])),[[W,u(H)]])]),_:1},8,["modelValue","title"])])}}});typeof G=="function"&&G(Pe);export{Pe as default};
