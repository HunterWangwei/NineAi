import{d as U,k as ee,r as i,a as c,b as m,G as te,H as se,f as g,u as n,I as oe,J as _,n as R,e as a,_ as k,q as w,K as ae,i as re,M as ne,l as le,c as L,w as T,o as ie,O as ce,F as de,p as ue,m as p,T as he,t as pe,B,P,Q as M,R as ge,S as fe}from"./index-98a4a812.js";import{c as ve}from"./index-c94da121.js";function me(r,u){let s,l;return function(...f){l=f,s||(s=setTimeout(()=>{r.apply(this,l),s=null},u))}}const _e="/assets/loadErr-b42c97c5.png",we={class:"w-[300px]"},xe=["src"],ye=U({__name:"loadImg",props:{id:null,url:null,width:null,height:null,preurl:null},setup(r){const u=ee(),s=i(!1),l=i("loading");function x(){s.value=!0,l.value="success"}function f(){s.value=!0,l.value="error"}return(I,h)=>(c(),m("div",we,[te(g(n(oe),{width:r.width,src:r.url,"on-load":x,"on-error":f,"preview-src":r.preurl},null,8,["width","src","preview-src"]),[[se,s.value&&l.value==="success"]]),s.value?w("",!0):(c(),m("div",{key:0,style:_({width:`${r.width}px`,height:`${r.height}px`}),class:R(["relative",n(u).theme==="dark"?"loadBg-dark":"loadBg-light"])},[a("span",{style:_({left:`${r.width-37}px`}),class:"absolute top-2 bg-white dark:bg-[#22252a] rounded-full p-[2px]"},[g(n(k),{icon:"line-md:loading-alt-loop",class:"text-[24px] text-primary"})],4)],6)),s.value&&l.value==="error"?(c(),m("div",{key:1,style:_({width:`${r.width}px`,height:`${r.height}px`}),class:R(["relative flex justify-center items-center",n(u).theme==="dark"?"loadBg-dark":"loadBg-light"])},[a("img",{src:n(_e),alt:""},null,8,xe)],6)):w("",!0)]))}});const be=ae(ye,[["__scopeId","data-v-e4d72a71"]]),ke={class:"min-h-full overflow-hidden flex flex-col"},Ie={class:"flex-1 min-h-full p-2 relative"},$e=["id"],Ce={class:"menu p-2 text-[#cbd5e1]"},Le={class:"prompt"},Be={class:"flex justify-end items-end space-x-2"},Pe=["onClick"],Me={class:"text-sm dark:text-slate-400"},Ee=a("span",null,"画同款",-1),Se=["onClick"],We={class:"text-sm dark:text-slate-400"},De=a("span",null,"使用当前画同款",-1),He=["onClick"],Ne={class:"text-sm dark:text-slate-400"},Re=a("span",null,"复制提示词",-1),Te=a("div",{id:"footer",class:"w-full absolute bottom-[350px]"},null,-1),ze=U({__name:"index",props:{dataList:null,scaleWidth:null,isDrawLike:{type:Boolean},usePropmpt:{type:Boolean},copyPropmpt:{type:Boolean},gap:{default:5},preOrigin:{type:Boolean}},emits:["loadMore","usePropmptDraw"],setup(r,{emit:u}){var W;const s=r,l=re();(W=ne())==null||W.appContext.config.globalProperties.$viewerApi;const x=le(),f=i({}),I=i(0),h=i(160),v=i(0);i([]);const $=i(null),E=i(0),j=L(()=>l.isLogin),S=L(()=>s.scaleWidth?Number(s.scaleWidth)*2+s.gap+150:150),z=ge();function A(){V(),F();const t=v.value,o=h.value,e=[];s.dataList.forEach((d,C)=>{const{width:Q,height:X}=d,Y=o/Q,D=X*Y+s.gap+I.value,b=f.value[d.id];if(e.length<t)b.style.top="0px",b.style.left=`${(o+s.gap)*C}px`,e.push(D);else{const H=Math.min.apply(null,e),N=e.findIndex(Z=>Z===H);b.style.top=`${H+0}px`,b.style.left=`${N*(h.value+s.gap)}px`,e[N]+=D}}),E.value=Math.max(...e)+100}function O(t,o){t&&o&&(f.value[o.id]=t)}function V(){const{showName:t=0,showOther:o=0}={};I.value=[t,o].filter(e=>e).length*15}T(()=>s.scaleWidth,t=>{y()}),T(()=>s.dataList,t=>{t&&fe(()=>{y()})},{immediate:!0});function F(){if(!$.value)return;const t=$.value.clientWidth;v.value=Math.floor(t/S.value);const o=t-v.value*S.value,e=(v.value-1)*s.gap;o-e<0&&(v.value-=1),h.value=Math.floor((t-e)/v.value)}function q(t){if(!j.value)return l.setLoginDialog(!0);const{prompt:o}=t;ve({text:o}),x.success("复制prompt成功")}function G(t){z.push(`/painting?drawId=${t.id}`)}function J(t){const{prompt:o}=t;u("usePropmptDraw",o)}const K=L(()=>t=>{const{width:o,height:e}=t;return e/(o/h.value)}),y=me(function(){A()},200);return ie(async()=>{window.addEventListener("resize",y);const t=document.getElementById("footer");new IntersectionObserver((e,d)=>{e.forEach(C=>{C.isIntersecting&&u("loadMore")})}).observe(t)}),ce(()=>{window.removeEventListener("resize",y)}),(t,o)=>(c(),m("div",ke,[a("div",Ie,[a("div",{id:"wapper",ref_key:"wapperRef",ref:$,class:"wapper",style:_({height:`${E.value}px`})},[(c(!0),m(de,null,ue(r.dataList,e=>(c(),m("div",{id:e.id,key:e.prompt,ref_for:!0,ref:d=>O(d,e),class:"wapper-item",style:_({width:`${h.value}px`})},[g(he,{name:"img",css:!0},{default:p(()=>[g(be,{preUrl:e.originalImgUrl,id:e.id,url:e.thumb||e.originalImgUrl,width:h.value,height:n(K)(e),preurl:e.originalImgUrl},null,8,["preUrl","id","url","width","height","preurl"])]),_:2},1024),a("div",Ce,[a("div",Le,pe(e.fullPrompt),1),a("div",Be,[r.isDrawLike?(c(),B(n(M),{key:0,trigger:"hover"},{trigger:p(()=>[a("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:P(d=>G(e),["stop"])},[a("span",Me,[g(n(k),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Pe)]),default:p(()=>[Ee]),_:2},1024)):w("",!0),r.usePropmpt?(c(),B(n(M),{key:1,trigger:"hover"},{trigger:p(()=>[a("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:P(d=>J(e),["stop"])},[a("span",We,[g(n(k),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Se)]),default:p(()=>[De]),_:2},1024)):w("",!0),r.copyPropmpt?(c(),B(n(M),{key:2,trigger:"hover"},{trigger:p(()=>[a("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:P(d=>q(e),["stop"])},[a("span",Ne,[g(n(k),{icon:"tabler:copy",class:"text-sm"})])],8,He)]),default:p(()=>[Re]),_:2},1024)):w("",!0)])])],12,$e))),128)),Te],4)])]))}});export{ze as _};
