import{d as O,r as c,o as T,a as F,b as L,e as k}from"./index-181d502b.js";const V={class:"relative w-full h-full flex items-center justify-center rounded-sm"},X=["width","height"],Y=["width","height"],U=O({__name:"index",props:{src:String,width:Number,height:Number,max:{type:Number,default:500},exportMaskBackgroundColor:{type:String,default:"black"},exportMaskColor:{type:String,default:"white"},penColor:{type:String,default:"#409eff"},penWidth:{type:Number,default:25},updateFileInfo:Function,modelValue:String},emits:["update:modelValue"],setup(v,{expose:E,emit:S}){const a=v,n=c(null),y=c(null),d=c([]);let w=!1,p=[];const l=new Image,m=c(!1),h=c(0),g=c(0),W=c(0);T(()=>{var t;n.value.getContext("2d");const e=(t=y.value)==null?void 0:t.getContext("2d");l.src=a.src,l.onload=()=>{var s;const o=Math.min(a.max/l.width,a.max/l.height);W.value=o,h.value=a.width||(o<1?l.width*o:l.width),g.value=a.height||(o<1?l.height*o:l.height),(s=a.updateFileInfo)==null||s.call(a,{width:l.width,height:l.height,scaleRatio:o.toFixed(3)}),n.value.width=h.value,y.value.width=h.value,n.value.height=g.value,y.value.height=g.value,e.drawImage(l,0,0,h.value,g.value)},n.value.addEventListener("mousedown",P),n.value.addEventListener("mousemove",I),n.value.addEventListener("mouseup",R)});const P=e=>{w=!0;const t=n.value.getContext("2d");t.beginPath(),t.moveTo(e.offsetX,e.offsetY),p=[{type:m.value?"erase":"draw",x:e.offsetX,y:e.offsetY}]},x=()=>new Promise((e,t)=>{const o=document.createElement("canvas"),s=l;o.width=s.width,o.height=s.height;const i=o.getContext("2d");if(i){i.fillStyle=a.exportMaskBackgroundColor,i.fillRect(0,0,o.width,o.height),i.beginPath();const b=s.width/h.value,C=s.height/g.value;i.beginPath(),d.value.forEach(r=>{r.forEach((u,f)=>{(u.type==="begin"||u.type==="draw")&&((f===0||r[f-1].type!==u.type)&&i.beginPath(),i.lineTo(u.x*b,u.y*C),i.strokeStyle=a.exportMaskColor,i.lineWidth=a.penWidth*b),u.type==="erase"&&((f===0||r[f-1].type!==u.type)&&i.beginPath(),i.lineTo(u.x*b,u.y*C),i.strokeStyle=a.exportMaskBackgroundColor),f<r.length-1&&r[f+1].type!==u.type&&i.stroke()}),r[r.length-1].type!=="begin"&&i.stroke()});const N=o.toDataURL("image/png");e(N)}else t(new Error("无法获取canvas的2D渲染上下文"))}),I=e=>{if(!w)return;const t=n.value.getContext("2d");t.lineTo(e.offsetX,e.offsetY),m.value?(t.globalCompositeOperation="destination-out",t.lineWidth=a.penWidth*2):(t.globalCompositeOperation="source-over",t.strokeStyle=a.penColor,t.lineWidth=a.penWidth),t.stroke(),p.push({type:m.value?"erase":"draw",x:e.offsetX,y:e.offsetY})},R=async()=>{w=!1,d.value.push([...p,{type:"end"}]),p=[];const e=await x();S("update:modelValue",e)};function B(){d.value=[],n.value.getContext("2d").clearRect(0,0,n.value.width,n.value.height)}async function M(){return await x()}function _(){d.value.length>0&&(d.value.pop(),D())}function D(){const e=n.value.getContext("2d");e.clearRect(0,0,n.value.width,n.value.height),e.drawImage(l,0,0,h.value,g.value),d.value.forEach(t=>{t.forEach((o,s)=>{(s===0||t[s-1].type!==o.type)&&e.beginPath(),o.type==="erase"?(e.globalCompositeOperation="destination-out",e.strokeStyle="rgba(0,0,0,0)"):(e.globalCompositeOperation="source-over",e.strokeStyle="white"),e.lineWidth=o.type==="erase"?a.penWidth*2:a.penWidth,e.lineTo(o.x,o.y),e.stroke(),(s===t.length-1||t[s+1].type!==o.type)&&e.closePath()})}),e.globalCompositeOperation="source-over"}return E({getBase:M,undo:_,clear:B,toggleEraser:()=>{m.value=!m.value}}),(e,t)=>(F(),L("div",V,[k("canvas",{ref_key:"backgroundCanvas",ref:y,class:"absolute left-0 top-0 rounded-md",width:v.width,height:v.height},null,8,X),k("canvas",{ref_key:"canvas",ref:n,class:"absolute left-0 top-0 rounded-md",width:v.width,height:v.height},null,8,Y)]))}});export{U as _};
