import{d as W,l as ce,at as ee,an as H,c as g,a,b as u,p as te,e as f,f as l,u as e,_ as C,B as A,N as se,t as P,m as S,q as k,n as J,F as j,aa as ue,z as K,V as re,j as ae,U as le,k as oe,r as G,o as de,w as q,aw as F,X as pe,A as X,D as fe,C as Q,a6 as Y,x as V,R as ne,a4 as he,i as ye,J as Z,G as _e,H as ke,S as ve}from"./index-98a4a812.js";import{N as xe}from"./Dropdown-7e2211c7.js";import{N as ge}from"./Popconfirm-dad5f243.js";import{N as me}from"./LayoutSider-8defd90d.js";function ie(B,v){let h;return(...I)=>{const b=()=>{clearTimeout(h),B(...I)};clearTimeout(h),h=setTimeout(b,v)}}const be=["onClick"],Se={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap font-bold"},we={key:1,class:"text-[14px]"},Ce={key:0,class:"absolute z-10 flex visible right-1"},Ie=["onClick"],$e={key:1},O=W({__name:"ListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup(B,{emit:v}){const h=B,I=ce(),b=ee(),M=h.dataSources,n=H(),y=g(()=>n.groupList.find(s=>s.uuid===n.active));async function m(s){n.loadingGetChatList||v("select",s)}function z(s,o,d){b.openChatGroupModelDialog()}async function $(s,o){o==null||o.stopPropagation(),await n.updateGroupInfo({isSticky:!s.isSticky,groupId:s.uuid}),I.success(s.isSticky?"取消置顶对话完成":"置顶对话完成"),await n.queryMyGroup()}async function x(s,o){o==null||o.stopPropagation(),v("delete",s)}const r=ie(x,600);async function i(s){const{uuid:o,title:d}=s;s.isEdit=!1,await n.updateGroupInfo({groupId:o,title:d}),await n.queryMyGroup()}async function c(s,o){o==null||o.stopPropagation(),o.key==="Enter"&&i(s)}function p(s,o){o==null||o.stopPropagation(),i(s)}function w(s){return n.active===s}const D=g(()=>{const{isSticky:s}=y.value;return[{label:"编辑对话",key:"edit"},{label:s?"取消置顶":"置顶对话",key:"sticky"},{label:"删除对话",key:"del"}]});function T(s,o){s==="edit"&&z(),s==="sticky"&&$(o),s==="del"&&r(o)}function L(s){return s.isSticky?"ri:pushpin-2-line":s.appId?"icon-park-outline:application-one":s.pluginId?"clarity:plugin-outline-badged":"ri:message-3-line"}const R=s=>{const{isSticky:o}=y.value,{key:d}=s;let t="";return d==="edit"&&(t="bxs:edit"),d==="sticky"&&(t=o?"ri:unpin-line":"ri:pushpin-line"),d==="del"&&(t="material-symbols:delete-outline"),ue(C,{icon:t})};return(s,o)=>(a(!0),u(j,null,te(e(M),d=>(a(),u("div",{key:`${d.uuid}`,class:"wapper"},[f("a",{class:J(["relative flex items-center gap-3 px-3 py-[14px] break-all rounded-md cursor-pointer hover:bg-neutral-100 group dark:hover:bg-[#24272e]",w(d.uuid)&&["","bg-neutral-100","text-[#3076FD]","dark:bg-[#24272e]","pr-20"]]),onClick:t=>m(d)},[f("span",null,[l(e(C),{icon:L(d)},null,8,["icon"])]),f("div",Se,[d.isEdit?(a(),A(e(se),{key:0,value:d.title,"onUpdate:value":t=>d.title=t,size:"tiny",onKeypress:t=>c(d,t)},null,8,["value","onUpdate:value","onKeypress"])):(a(),u("span",we,P(d.title),1))]),w(d.uuid)?(a(),u("div",Ce,[d.isEdit?(a(),u("button",{key:0,class:"p-1",onClick:t=>p(d,t)},[l(e(C),{icon:"ri:save-line"})],8,Ie)):(a(),u("div",$e,[l(e(xe),{options:e(D),"render-icon":R,onSelect:t=>T(t,d)},{default:S(()=>[l(e(C),{icon:"iconamoon:menu-kebab-vertical-bold",class:"text-xl"})]),_:2},1032,["options","onSelect"])]))])):k("",!0)],10,be)]))),128))}});const Ge=["onClick"],De={class:"mr-[12px]"},Te=["src"],Ne={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap flex flex-col"},Me={class:"font-bold text-[14px] flex"},Le={class:"mr-2"},Ae={class:"text-[12px] mt-[6px] flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},Pe={key:0,class:"absolute z-10 flex visible right-1"},Be=["onClick"],ze={class:"p-1"},Ue={class:"p-1"},Ee=W({__name:"AppListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup(B,{emit:v}){const h=B;ee();const I=h.dataSources,b=H();async function M(r){b.loadingGetChatList||v("select",r)}async function n(r,i){i==null||i.stopPropagation(),await b.updateGroupInfo({isSticky:!r.isSticky,groupId:r.uuid}),await b.queryMyGroup()}async function y(r,i){i==null||i.stopPropagation(),v("delete",r)}const m=ie(y,600);async function z(r){const{uuid:i,title:c}=r;r.isEdit=!1,await b.updateGroupInfo({groupId:i,title:c}),await b.queryMyGroup()}function $(r,i){i==null||i.stopPropagation(),z(r)}function x(r){return b.active===r}return(r,i)=>(a(!0),u(j,null,te(e(I),c=>(a(),u("div",{key:`${c.uuid}`},[f("a",{class:J(["relative flex items-center px-[10px] py-[10px] break-all rounded-md cursor-pointer hover:bg-[#1c1c230a] group dark:hover:bg-[#24272e]",x(c.uuid)&&["","bg-neutral-100","text-[#3388FF]","dark:bg-[#24272e]","","pr-20"]]),onClick:p=>M(c)},[f("span",De,[f("img",{src:c.appLogo,class:"w-[40px]"},null,8,Te)]),f("div",Ne,[f("span",Me,[f("span",Le,P(c.title),1),c.isGpts?(a(),A(e(re),{key:0,type:"success",size:"small",round:""},{default:S(()=>[K(" GPTS ")]),_:1})):k("",!0)]),f("span",Ae,P(c.des),1)]),x(c.uuid)?(a(),u("div",Pe,[c.isEdit?(a(),u("button",{key:0,class:"p-1",onClick:p=>$(c,p)},[l(e(C),{icon:"ri:save-line"})],8,Be)):(a(),u(j,{key:1},[f("button",ze,[l(e(C),{icon:c.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:p=>n(c,p)},null,8,["icon","onClick"])]),l(e(ge),{placement:"bottom",onPositiveClick:p=>e(m)(c,p)},{trigger:S(()=>[f("button",Ue,[l(e(C),{icon:"ri:delete-bin-line"})])]),default:S(()=>[K(" "+P(r.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):k("",!0)],10,Ge)]))),128))}}),Ke={class:"flex h-full flex-col gap-3 text-sm"},qe={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300 w-full"},Re={key:1,class:"h-[calc(100%-105px)]"},Ve={class:"space-y-0"},Fe={key:3,class:"mt-5"},We={class:"space-y-0"},He={key:1,class:"mt-5"},Oe={class:"w-full flex flex-col flex-shrink-0 p-[10px]"},je=f("span",{class:"mr-3"},"清空非置顶内容",-1),Je=W({__name:"List",setup(B){const{isMobile:v}=ae(),h=le(),I=ne(),b=he(),M=oe(),n=H(),y=G("chat"),m=G(100),z=g(()=>n.groupList.find(t=>t.uuid===n.active)),$=g(()=>n.groupList),x=g(()=>n.groupKeyWord),r=new Date().setHours(0,0,0,0),i=g(()=>$.value.filter(t=>x.value?t.title.includes(x.value)&&t.isSticky:t.isSticky)),c=g(()=>$.value.filter(t=>x.value?t.title.includes(x.value)&&!t.isSticky&&t.appId:!t.isSticky&&t.appId)),p=g(()=>$.value.filter(t=>x.value?t.title.includes(x.value)&&!t.isSticky&&!t.appId&&D(t.createdAt)>=r:!t.isSticky&&!t.appId&&D(t.createdAt)>=r)),w=g(()=>$.value.filter(t=>x.value?t.title.includes(x.value)&&!t.isSticky&&!t.appId&&D(t.createdAt)<r:!t.isSticky&&!t.appId&&D(t.createdAt)<r));function D(t){const _=new Date(t).getTime()+8*60*60*1e3;return new Date(_).getTime()}async function T(t){const{uuid:N,appId:_=0}=t;R(N)||(n.setSelectAppId(_),await n.setActiveGroup(N),await n.queryActiveChatLogList(),b.name!=="Chat"&&I.push("/chat"),v.value&&M.setSiderCollapsed(!0))}async function L(t){event==null||event.stopPropagation(),await n.deleteGroup(t),await n.queryMyGroup(),v.value&&M.setSiderCollapsed(!0)}function R(t){return n.active===t}function s(){I.push("/role")}async function o(){h.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await n.delAllGroup(y.value)}})}const d=g(()=>y.value==="chat"?w.value.length||i.value.length||p.value.length:y.value==="app"?c.value.length:!1);return de(()=>{n.queryMyGroup()}),q($,()=>m.value=m.value+1),q(x,()=>m.value=m.value+1),q(z,t=>{if(!t)return;const{appId:N}=t;y.value=N?"app":"chat"}),(t,N)=>(a(),u("div",Ke,[!e($).length&&e(n).loadingGetChatGroup?(a(),u("div",qe,[l(e(pe),{vertical:"",class:"flex-1 ml-3 w-full"},{default:S(()=>[l(e(F),{text:"",height:"20px",style:{width:"100%"}}),l(e(F),{text:"",height:"20px",style:{width:"100%"}}),l(e(F),{text:"",height:"20px",style:{width:"100%"}}),l(e(F),{text:"",height:"20px",style:{width:"100%"}})]),_:1})])):(a(),u("div",Re,[l(e(fe),{value:y.value,"onUpdate:value":N[0]||(N[0]=_=>y.value=_),type:"line",animated:"",class:"mt-0","justify-content":"space-evenly"},{default:S(()=>[l(e(X),{name:"chat",tab:"对话历史"}),l(e(X),{name:"app",tab:"助手列表"})]),_:1},8,["value"]),y.value==="chat"?(a(),A(e(Y),{key:0,class:"px-2"},{default:S(()=>[f("div",Ve,[e(i).length?(a(),A(O,{key:1e3+m.value,title:"置顶","data-sources":e(i),onSelect:T,onDelete:L},null,8,["data-sources"])):k("",!0),e(p).length?(a(),A(O,{key:3e3+m.value,title:"今天","data-sources":e(p),onSelect:T,onDelete:L},null,8,["data-sources"])):k("",!0),e(w).length?(a(),A(O,{key:4e3+m.value,title:"其他","data-sources":e(w),onSelect:T,onDelete:L},null,8,["data-sources"])):k("",!0),!e(i).length&&!e(p).length&&!e(w).length?(a(),u("div",Fe,[l(e(Q),{description:"当前列表空空如也"})])):k("",!0)])]),_:1})):k("",!0),y.value==="app"?(a(),A(e(Y),{key:1,class:"px-2"},{default:S(()=>[f("div",We,[e(c).length?(a(),A(Ee,{key:2e3+m.value,title:"应用分类组","data-sources":e(c),onSelect:T,onDelete:L},null,8,["data-sources"])):k("",!0),e(c).length?k("",!0):(a(),u("div",He,[l(e(Q),{description:"当前助手空空如也"})]))])]),_:1})):k("",!0),f("div",Oe,[l(e(V),{type:"primary",text:"",class:"!mb-[8px]",onClick:s},{default:S(()=>[K(" 前往工作台 > ")]),_:1}),l(e(V),{disabled:!e(d),type:"tertiary",size:"small",class:"mt-2",onClick:o},{default:S(()=>[l(e(C),{icon:"fluent-mdl2:delete",class:"ml-2 mr-1 text-sm"}),je]),_:1},8,["disabled"])])]))]))}}),Xe={key:0,class:"flex h-14 items-center space-x-2 px-4 rounded-t-md"},Qe={class:"flex-1"},Ye={key:1,class:"flex h-14 items-center space-x-2 px-4 bg-white dark:bg-[#1f1f1f] rounded-t-md"},Ze={class:"flex-1"},et={key:2,class:"px-3 py-3 mt-[12px] bg-white dark:bg-[#1f1f1f] rounded-md border-t dark:border-t-neutral-800 flex flex-col"},tt={key:0,class:"my-1 w-full flex items-center select-none"},st={key:0,class:"ml-2 text-primary"},at={key:1,class:"my-1 w-full flex items-center select-none"},lt={key:0,class:"ml-2 text-primary"},ut=W({__name:"index",setup(B){ne();const v=oe(),h=H(),I=ye(),b=G(null),M=G(null),n=g(()=>I.userBalance);le();const y=g(()=>h==null?void 0:h.activeModelKeyDeductType),m=g(()=>h==null?void 0:h.activeModelKeyPrice),z=G(0),$=G(0),x=G(0),r=G(0),i=G(!1),c=G(null);q(()=>I.userBalance.useModel3Token,(_,U)=>{var E;z.value=U||0,$.value=_||0,(E=b.value)==null||E.play()},{immediate:!0,flush:"post"}),q(()=>I.userBalance.useModel4Token,(_,U)=>{var E;x.value=U||0,r.value=_||0,(E=M.value)==null||E.play()},{immediate:!0,flush:"post"});const{isMobile:p}=ae(),w=G(!1),D=g(()=>v.siderCollapsed),T=G("");function L(_){T.value=_,h.setGroupKeyWord(_)}function R(){i.value=!1}async function s(){try{w.value=!0,await h.addNewChatGroup(),await h.queryMyGroup(),w.value=!1,p.value&&v.setSiderCollapsed(!0)}catch{w.value=!1}}function o(){v.setSiderCollapsed(!D.value)}function d(){i.value=!0,ve(()=>{var _;(_=c.value)==null||_.focus()})}const t=g(()=>p.value?{position:"fixed",zIndex:50}:{}),N=g(()=>p.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return q(p,_=>{v.setSiderCollapsed(_)},{immediate:!0,flush:"post"}),(_,U)=>(a(),u("div",null,[l(e(me),{collapsed:e(D),"collapsed-width":0,width:300,"show-trigger":e(p)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:Z(e(t)),"content-style":{backgroundColor:e(v).theme==="dark"?"#000":"#dce3f1"},onUpdateCollapsed:o},{default:S(()=>[f("div",{class:"flex flex-col h-full",style:Z(e(N))},[f("main",{class:J(["flex flex-col h-full flex-1 min-h-0 rounded-tr-md",e(p)?"pt-[45px] pb-[58px]":""])},[i.value?(a(),u("div",Xe,[l(e(V),{type:"primary",loading:w.value,size:"small",onClick:s},{default:S(()=>[l(e(C),{icon:"ion:add-outline",class:"text-xl"})]),_:1},8,["loading"]),f("div",Qe,[l(e(se),{ref_key:"searchRef",ref:c,modelValue:T.value,"onUpdate:modelValue":U[0]||(U[0]=E=>T.value=E),size:"small",style:{width:"100%"},type:"text",placeholder:"对话历史查找",clearable:"",onBlur:R,onInput:L},null,8,["modelValue"])])])):k("",!0),i.value?k("",!0):(a(),u("div",Ye,[f("div",Ze,[l(e(V),{type:"primary",size:"small",style:{width:"100%"},loading:w.value,onClick:s},{default:S(()=>[K(" 新对话 "),l(e(C),{icon:"ion:add-outline",class:"text-xl"})]),_:1},8,["loading"])]),l(e(V),{size:"small",onClick:d},{default:S(()=>[l(e(C),{icon:"icon-park-outline:search",class:"text-xl"})]),_:1})])),l(Je,{class:"flex-1 pb-4 overflow-hidden rounded-b-md dark:bg-[#1f1f1f] bg-white"}),e(y)?(a(),u("div",et,[e(y)?(a(),u("div",tt,[l(e(C),{icon:"icon-park-solid:vip-one",class:"ml-2 mr-2 text-base text-[#f4a629]"}),K("普通额度 "+P(`${e(n).sumModel3Count||0} 积分`)+" ",1),e(y)===1?(a(),u("span",st,P(e(m)?"(当前使用)":"(免费使用)"),1)):k("",!0)])):k("",!0),e(y)?(a(),u("div",at,[l(e(C),{icon:"icon-park-solid:vip-one",class:"ml-2 mr-2 text-base text-[#c81021]"}),K("高级额度 "+P(`${e(n).sumModel4Count||0} 积分`)+" ",1),e(y)===2?(a(),u("span",lt,P(e(m)?"(当前使用)":"(免费使用)"),1)):k("",!0)])):k("",!0)])):k("",!0)],2)],4)]),_:1},8,["collapsed","show-trigger","style","content-style"]),e(p)?_e((a(),u("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:o},null,512)),[[ke,!e(D)]]):k("",!0)]))}});export{ut as _};
