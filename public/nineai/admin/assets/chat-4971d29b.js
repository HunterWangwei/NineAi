
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{Y as r}from"./index-4432f6f4.js";const e={queryChatAll:a=>r.get("chatLog/chatAll",{params:a}),queryDrawAll:a=>r.get("chatLog/drawAll",{params:a}),recDrawImg:a=>r.post("chatLog/recDrawImg",a),queryMjDrawAll:a=>r.get("midjourney/getList",{params:a}),recMjDrawImg:a=>r.post("draw/sysRec",a),delChatLog:a=>r.post("draw/delDrawItem",a)};export{e as A};
