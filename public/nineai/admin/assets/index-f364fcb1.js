
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
const l=[{value:0,label:"待激活"},{value:1,label:"正常"},{value:2,label:"已封禁"},{value:3,label:"黑名单"}],a={0:"待激活",1:"正常",2:"已封禁",3:"黑名单"},e={0:"info",1:"success",2:"danger",3:"danger"},s={1:"注册赠送",2:"受邀请赠送",3:"邀请人赠送",4:"购买套餐赠送",5:"管理员赠送",6:"扫码支付",7:"绘画失败退款",8:"签到奖励"},t=[{value:1,label:"注册赠送"},{value:2,label:"受邀请赠送"},{value:3,label:"邀请人赠送"},{value:4,label:"购买套餐赠送"},{value:5,label:"管理员赠送"},{value:6,label:"扫码支付"},{value:7,label:"绘画失败退款"},{value:8,label:"签到奖励"}],b={0:"关闭",1:"开启"},u={0:"danger",1:"success"},v=[{value:0,label:"禁用"},{value:1,label:"启动"}],o=[{value:0,label:"未使用"},{value:1,label:"已使用"}],T=[{value:0,label:"未推荐"},{value:1,label:"已推荐"}],c=[{value:0,label:"禁用"},{value:1,label:"启用"},{value:3,label:"待审核"},{value:4,label:"拒绝共享"},{value:5,label:"通过共享"}],n=[{value:"0",label:"未启用"},{value:"1",label:"已启用"}],S=[{value:0,label:"待审核"},{value:1,label:"已通过"},{value:-1,label:"已拒绝"}],_=[{value:0,label:"未推荐"},{value:1,label:"已推荐"}],A=[{value:1,label:"支付宝"},{value:2,label:"微信"}],p=[{value:1,label:"正在排队"},{value:2,label:"正在绘制"},{value:3,label:"绘制完成"},{value:4,label:"绘制失败"},{value:5,label:"绘制超时"}],i={0:"danger",1:"success"},E={"-1":"欠费锁定",0:"未启用",1:"已启用",3:"待审核",4:"拒绝共享",5:"通过共享"},g=["gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-4","gpt-4-1106-preview","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-32k","gpt-4-v","gpt-4-vision-preview","gpt-4-dalle","gpt-4-all","gpt-4-gizmo","gemini-pro","gemini-pro-vision","claude-1-100k","claude-1.3","claude-1.3-100k","claude-2","mj-chat","midjourney","google-palm","llama-2-70b","llama-2-13b","llama-2-7b","code-llama-34b","code-llama-13b","code-llama-7b","stable-diffusion","qwen-72b","mixtral-8x7b","mistral-medium","search-gpts"],m=[{value:"mj",label:"MidjourneyAi"},{value:"DALL-E2",label:"DALL-E"}],O=[{value:0,label:"未支付"},{value:1,label:"已支付"},{value:2,label:"支付失败"},{value:3,label:"支付超时"}],P={0:"未支付",1:"已支付",2:"支付失败",3:"支付超时"},I=[{value:"epay",label:"易支付"},{value:"hupi",label:"虎皮椒"},{value:"wechat",label:"微信支付"},{value:"mpay",label:"码支付"}],r={epay:"易支付",hupi:"虎皮椒",wechat:"微信支付",mpay:"码支付"},d=[{value:1,label:"等待中"},{value:2,label:"绘制中"},{value:3,label:"绘制完成"},{value:4,label:"绘制失败"},{value:5,label:"绘制超时"}],L=[{value:"system",label:"系统"},{value:"user",label:"用户"}],M={1:"排队中",2:"绘制中",3:"绘制完成",4:"绘制失败",5:"绘制超时"},N=[{value:"百度云检测",label:"百度云检测"},{value:"自定义检测",label:"自定义检测"},{value:"NineAI检测",label:"NineAI检测"}],R=[{value:1,label:"OpenAi - [chatGpt]"},{value:2,label:"百度 - [千帆大模型]"},{value:3,label:"清华 - [智谱大模型]"}],U={1:"OPENAI",2:"百度文心",3:"清华智谱"},h={1:["gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-4","gpt-4-1106-preview","gpt-4-0125-preview","gpt-4-turbo-preview","gpt-4-32k","gpt-4-v","gpt-4-vision-preview","gpt-4-dalle","gpt-4-all","gpt-4-gizmo","gemini-pro","gemini-pro-vision","claude-1-100k","claude-1.3","claude-1.3-100k","claude-2","mj-chat","midjourney","google-palm","llama-2-70b","llama-2-13b","llama-2-7b","code-llama-34b","code-llama-13b","code-llama-7b","stable-diffusion","qwen-72b","mixtral-8x7b","mistral-medium","search-gpts"],2:["ERNIE-Bot","ERNIE-Bot-4","ERNIE-Bot-turbo","BLOOMZ-7B","Llama-2-7b-chat","Llama-2-13b-chat","Qianfan-BLOOMZ-7B-compressed","Qianfan-Chinese-Llama-2-7B","AquilaChat-7B"],3:["chatglm_pro","chatglm_std","chatglm_lite","chatglm_lite_32k"]},D=[{value:1,label:"普通余额"},{value:2,label:"高级余额"}],Y={1:"APIKey",2:"client_id",3:"AppKey"};export{L as A,o as C,m as D,c as E,u as I,g as M,S as O,I as P,E as Q,T as R,N as T,e as U,p as W,d as a,n as b,i as c,_ as d,M as e,h as f,Y as g,U as h,R as i,D as j,O as k,r as l,P as m,v as n,b as o,A as p,a as q,l as r,t as s,s as t};
