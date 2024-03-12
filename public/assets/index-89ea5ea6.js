import{d as R,b3 as U,a6 as V,n as O,l as q,o as c,c as i,F as D,s as E,a,t as $,K as ce,f as h,u as t,_ as J,v as d,C as B,w as y,A as L,R as H,z as W,q as S,O as X,b4 as re,bX as ie,k as ue,b as w,r as p,p as Y,e as de,i as fe,bJ as pe,a3 as he,a4 as ve,bY as K,bZ as xe,ba as ge,b_ as _e,b$ as ye,m as me,ar as be}from"./index-8f9df034.js";import{N as we}from"./InputGroup-bdaf541e.js";const ke={class:"w-full flex items-center justify-between"},Ce={class:"w-16 h-16 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},Ae=["src"],Ie={class:"flex flex-col w-full flex-1"},Se={class:"flex justify-between"},$e={class:"css-0 mb-2 line-clamp-1 break-all text-lg font-semibold tracking-wide text-[#333] dark:text-[#ffffff]"},Me=["onClick"],je={key:0},Ne=["src"],Pe={class:"text-[12px]"},Ge={class:"line-clamp-2 break-all overflow-hidden text-gray-400 w-full text-xs"},Le={class:"w-full flex justify-end mt-1"},Q=R({__name:"cardList",props:{list:null,mineApps:null,isSearchGpts:{type:Boolean}},setup(k){const z=k,m=U(),f=V(),M=X(),g=O(),{isMobile:C}=q();async function v(l){l.loading=!0;try{const n=await re({appId:l.id});g.success(n.data),await m.queryMineApps(),l.loading=!1}catch{l.loading=!1}}function N(l){return z.mineApps.some(n=>n.appId===l.id)}async function P(l){let n=l.id;if(!n){const e=await ie(l);if(!e.success)return g.error(e.data);n=e.data.id}f.setSelectAppId(n),M.push({path:"/chat"})}return(l,n)=>k.list.length?(c(),i("div",{key:0,class:S(["w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 gap-6 py-4",t(C)?"px-4":""])},[(c(!0),i(D,null,E(k.list,e=>{var x,b,o;return c(),i("div",{key:e.id,class:"bg-[#f6f7fa] dark:bg-[#18181c] custom-card cursor-pointer space-y-2 border-[#e0e0e0] dark:border-neutral-800 p-4 pt-4 border rounded-md flex flex-col justify-center items-center hover:bg-neutral-100 dark:hover:bg-[#24272e] select-none min-h-[150px]"},[a("div",ke,[a("span",Ce,[a("img",{src:e.coverImg,class:"w-14 h-14 mb-1",alt:""},null,8,Ae)]),a("div",Ie,[a("div",Se,[a("span",$e,$(e.name),1),k.isSearchGpts?d("",!0):(c(),i("span",{key:0,class:"h-full",onClick:ce(_=>v(e),["stop"])},[h(t(J),{icon:N(e)?"solar:star-bold":"ph:star-thin",class:"run-icon text-xl text-[#5A91FC]"},null,8,["icon"])],8,Me))]),a("span",null,[k.isSearchGpts?(c(),B(t(H),{key:0,type:"success",size:"small",round:""},{default:y(()=>[L(" GPTS ")]),_:1})):d("",!0)]),e.catInfo?(c(),i("span",je,[(x=e==null?void 0:e.catInfo)!=null&&x.coverImg?(c(),i("img",{key:0,src:(b=e==null?void 0:e.catInfo)==null?void 0:b.coverImg,class:"w-[16px] mr-2 inline-block",alt:""},null,8,Ne)):d("",!0),a("span",Pe,$(((o=e==null?void 0:e.catInfo)==null?void 0:o.name)||"--"),1),e.isGpts?(c(),B(t(H),{key:1,type:"success",size:"small",round:"",class:"ml-2"},{default:y(()=>[L(" GPTS ")]),_:1})):d("",!0)])):d("",!0)])]),a("p",Ge,$(e.des),1),a("div",Le,[h(t(W),{class:"join",size:"small",type:"primary",ghost:"",disabled:e.loading,onClick:_=>P(e)},{default:y(()=>[L(" 使用 ")]),_:2},1032,["disabled","onClick"])])])}),128))],2)):d("",!0)}}),ze="/assets/planet-ad615213.jpg",Be="/assets/global-dc90d4d0.jpg",Te="/assets/loading-d770ce96.gif",Re={class:"w-full flex flex-col items-center max-w-screen-4xl p-4 lg:p-6 h-full"},qe={class:"flex justify-center text-base text-small text-center text-gray-700 dark:text-gray-300 lg:text-lg mt-[10px] css-0 tracking-wide whitespace-nowrap line-clamp-1 break-all"},Fe={key:0,class:"sticky left-0 mt-3 right-0 top-0 flex max-w-screen-4xl bg-white items-center z-50 w-full dark:bg-[#101014]"},He={class:"flex mt-3 items-center space-x-3 whitespace-nowrap"},Ke={key:2,class:"min-h-[500px] flex items-center justify-center flex-col w-full"},Qe=["src"],Ue={key:3,class:"min-h-[500px] flex items-center justify-center flex-col w-full"},Ve=["src"],Oe=["src"],De={class:"font-bold text-[1d1c23]"},Ee={key:4,class:"h-full"},Je=R({__name:"main",emits:["run-app"],setup(k,{emit:z}){var F;const{isMobile:m}=q(),f=ue(),M=((F=f.globalConfig)==null?void 0:F.siteRobotName)||"AI Tools",g=w(()=>f.globalConfig.appMenuHeaderTips);w(()=>f.globalConfig.appMenuHeaderBgUrl),X(),O();const C=U(),v=p(""),N=p([]),P=w(()=>C.catId),l=p([]),n=p([]),e=w(()=>C.mineApps),x=p([]),b=p(0);V();const o=p(1),_=p(!1),A=p([]),I=p(!1),G=[{label:"站内搜索",value:1},{label:"全网搜索",value:2}],j=w(()=>v.value?l.value.filter(s=>s.name.includes(v.value)):b.value===0?l.value:l.value.filter(s=>s.catId===b.value));async function Z(){var s;try{I.value=!0;const u=await xe();l.value=(s=u==null?void 0:u.data)==null?void 0:s.rows.map(r=>(r.loading=!1,r.catInfo=x.value.find(T=>T.id===r.catId),r)),I.value=!1,n.value=l.value}catch{I.value=!1}}async function ee(){var r;I.value=!0;const s=await ge(),u={id:0,name:"全部分类"};x.value=[u,...(r=s==null?void 0:s.data)==null?void 0:r.rows]}async function te(){const s=await _e({menuPlatform:1});s.success&&(N.value=s.data)}function se(s){b.value=s,o.value=1}Y(P,s=>{s?n.value=l.value.filter(u=>u.catId===s):n.value=l.value});async function ae(){if(o.value===2){_.value=!0,A.value=[];try{const s=await ye({keyword:v.value});A.value=s==null?void 0:s.data,_.value=!1}catch{_.value=!1}}}function le(s){v.value="",o.value=s}function ne(){o.value=2,v.value=""}const oe=w(()=>o.value===1?"搜索应用名称、快速查找应用...":"全网搜索应用、海量寻找工具[回车搜索]...");return de(async()=>{await ee(),Z(),te()}),(s,u)=>(c(),i("div",{class:S(["relative flex justify-center",t(m)?"":"mr-12px"])},[a("div",Re,[a("div",{class:S(["w-full flex items-center flex-shrink-0",t(m)?"flex-col h-[150px] justify-around":"h-[130px] justify-between"])},[a("div",{class:S(["flex",t(m)?"flex-col":""])},[a("span",{class:S(["text-center text-3xl font-extrabold text-[#5A91FC] whitespace-nowrap dark:text-[var(--primary-color-dark)] lg:text-4xl",t(m)?"":"mr-[40px]"])},$(t(M)),3),a("span",qe,$(t(g)||"探索无限可能，与AI一同开创智慧未来！"),1)],2),a("div",{class:S(["w-[400px]",t(m)?"mt-[0px]":"mt-[20px]"])},[h(t(we),null,{default:y(()=>[h(t(fe),{value:v.value,"onUpdate:value":u[0]||(u[0]=r=>v.value=r),style:{flex:1},placeholder:t(oe),onKeydown:pe(ae,["enter"])},{prefix:y(()=>[h(t(J),{icon:"iconamoon:search-thin",class:"text-base"})]),_:1},8,["value","placeholder","onKeydown"]),h(t(he),{value:o.value,"onUpdate:value":u[1]||(u[1]=r=>o.value=r),style:{width:"100px"},options:G,"on-update:value":le},null,8,["value"])]),_:1})],2)],2),o.value===1&&x.value.length>1?(c(),i("div",Fe,[h(t(ve),{"x-scrollable":"",class:"!h-[60px]"},{default:y(()=>[a("div",He,[(c(!0),i(D,null,E(x.value,(r,T)=>(c(),B(t(W),{key:T,size:"small",round:"",type:b.value===r.id?"primary":"default",onClick:Ye=>se(r.id)},{default:y(()=>[L($(r.name),1)]),_:2},1032,["type","onClick"]))),128))])]),_:1})])):d("",!0),o.value===1?(c(),B(t(K),{key:1,delay:0,y:50,duration:350},{default:y(()=>[h(Q,{list:t(j),"mine-apps":t(e)},null,8,["list","mine-apps"])]),_:1})):d("",!0),!t(j).length&&o.value===1&&!I.value?(c(),i("div",Ke,[a("img",{src:t(ze),class:"w-[80px] mb-[20px]"},null,8,Qe),a("span",{class:"font-bold text-[1d1c23]"},[L("抱歉、我们没有找到该搜索的相关应用、您还可以 "),a("span",{class:"text-[#3388ff] cursor-pointer ml-[5px]",onClick:ne},"前往全站搜索")])])):d("",!0),o.value===2&&!A.value.length?(c(),i("div",Ue,[_.value?d("",!0):(c(),i("img",{key:0,src:t(Be),class:"w-[80px] mb-[20px]"},null,8,Ve)),_.value?(c(),i("img",{key:1,src:t(Te),alt:""},null,8,Oe)):d("",!0),a("span",De,$(_.value?"正在从全网为您收集资源中......":"全站搜索内容来源于网络、在这里、你可以搜索到海量的创意！"),1)])):d("",!0),o.value===2&&A.value.length?(c(),i("div",Ee,[h(t(K),{delay:0,y:50,duration:350},{default:y(()=>[h(Q,{list:A.value,"mine-apps":t(e),"is-search-gpts":!0},null,8,["list","mine-apps"])]),_:1})])):d("",!0)])],2))}});const We={class:"h-full dark:bg-[#24272e] transition-all"},Xe={class:"flex flex-col w-full"},tt=R({__name:"index",setup(k){const z=me(),{isMobile:m}=q(),f=p(null),M=w(()=>z.theme);let g=null;const C=p({});function v(n){C.value=n}Y(M,()=>N());function N(){const{innerWidth:n,innerHeight:e}=window;f.value.width=n-0,f.value.height=e-0,g=f.value.getContext("2d");const[x,b]=[f.value.width,f.value.height],o=20,_=Math.floor(x/o),A=Math.floor(b/o),I=M.value==="light"?"#00000080":"#ffffff66";for(let G=0;G<A;G++)for(let j=0;j<_;j++)P({x:j*o+20,y:G*o+20},I)}function P({x:n,y:e},x){g.fillStyle=x,g.beginPath(),g.rect(n,e,1,1),g.fill()}w(()=>Object.keys(C.value).length>0);const l=w(()=>m.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]);return(n,e)=>(c(),i("div",We,[a("div",{class:S(["h-full overflow-hidden flex flex-col",t(l)])},[h(t(be),{class:"transition flex-1 h-full w-full","has-sider":""},{default:y(()=>[a("canvas",{ref_key:"grid",ref:f,class:"absolute left-0 right-0 bottom-0 top-0 z-0 bg-[#fff] dark:bg-[#101014]"},null,512),a("div",Xe,[h(Je,{onRunApp:v})])]),_:1})],2)]))}});export{tt as default};