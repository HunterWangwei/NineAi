'use strict';const _0x229b2c=_0x53be;function _0x53be(_0x5ac964,_0x4b4a99){const _0x58a338=_0x58a3();return _0x53be=function(_0x53bee3,_0x11bc23){_0x53bee3=_0x53bee3-0xb3;let _0x121574=_0x58a338[_0x53bee3];return _0x121574;},_0x53be(_0x5ac964,_0x4b4a99);}(function(_0x5e101b,_0x1da006){const _0x478006=_0x53be,_0xe80445=_0x5e101b();while(!![]){try{const _0x35aafc=-parseInt(_0x478006(0xbf))/0x1+-parseInt(_0x478006(0xca))/0x2+-parseInt(_0x478006(0xb9))/0x3+-parseInt(_0x478006(0xc5))/0x4*(parseInt(_0x478006(0xc1))/0x5)+-parseInt(_0x478006(0xbc))/0x6*(parseInt(_0x478006(0xc6))/0x7)+parseInt(_0x478006(0xd8))/0x8+parseInt(_0x478006(0xc9))/0x9;if(_0x35aafc===_0x1da006)break;else _0xe80445['push'](_0xe80445['shift']());}catch(_0x2442c2){_0xe80445['push'](_0xe80445['shift']());}}}(_0x58a3,0x1ea0c));function _0x58a3(){const _0x5051e0=['667008EcpWfQ','data:\x20','qianfan_chinese_llama_2_7b','getAccessToken','stream','defineProperty','axios','chatglm2_6b_32k','199806CvUccq','?access_token=','text','699558pYMIIh','filter','split','107092mlKNqL','toString','5IEKeMa','catch','bloomz_7b1','eb-instant','302392fVrMIp','7dpettu','https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=','end','4641525GvHctV','215528yRhjlZ','then','completions_pro','map','llama_2_7b','application/json','toLowerCase','llama_2_13b','parse','keys','data','post','trim','POST'];_0x58a3=function(){return _0x5051e0;};return _0x58a3();}Object[_0x229b2c(0xb6)](exports,'__esModule',{'value':!![]}),exports['sendMessageFromBaidu']=exports[_0x229b2c(0xb4)]=void 0x0;const axios=require(_0x229b2c(0xb7)),getApiModelMaps=()=>{const _0x55a66f=_0x229b2c;let _0x535b32={};const _0xad4735={'ERNIE-Bot':'completions','ERNIE-Bot-turbo':_0x55a66f(0xc4),'BLOOMZ-7B':_0x55a66f(0xc3),'ERNIE-Bot-4':_0x55a66f(0xcc),'Llama-2-7b-chat':_0x55a66f(0xce),'Llama-2-13b-chat':_0x55a66f(0xd1),'ChatGLM2-6B-32K':_0x55a66f(0xb8),'Qianfan-Chinese-Llama-2-7B':_0x55a66f(0xb3)};return Object[_0x55a66f(0xd3)](_0xad4735)[_0x55a66f(0xcd)](_0x5bdb23=>{_0x535b32[''+_0x5bdb23['toLowerCase']()]=_0xad4735[_0x5bdb23];}),_0x535b32;};function getAccessToken(_0x5510c2,_0x575992){const _0x505c97=_0x229b2c;let _0x13ab4f=_0x505c97(0xc7)+_0x5510c2+'&client_secret='+_0x575992;return new Promise((_0x4bb1ab,_0x3fce99)=>{const _0x3067cd=_0x505c97;axios[_0x3067cd(0xd5)](_0x13ab4f)[_0x3067cd(0xcb)](_0x5639f7=>{const _0xdeae3c=_0x3067cd;_0x4bb1ab(_0x5639f7[_0xdeae3c(0xd4)]['access_token']);})[_0x3067cd(0xc2)](_0x4a8c7e=>{_0x3fce99(_0x4a8c7e);});});}exports[_0x229b2c(0xb4)]=getAccessToken;function sendMessageFromBaidu(_0x207dba,{onProgress:_0xeeda35,accessToken:_0x2baa8f,model:_0x1f810d,temperature:temperature=0.95}){const _0x554e97=_0x229b2c,_0xc030f6=getApiModelMaps()[_0x1f810d[_0x554e97(0xd6)]()[_0x554e97(0xd0)]()];return new Promise((_0x267869,_0x3f27a9)=>{const _0x350ec3=_0x554e97,_0x16d02b='https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/'+_0xc030f6+_0x350ec3(0xba)+_0x2baa8f;var _0x3ccf74={'method':_0x350ec3(0xd7),'url':_0x16d02b,'responseType':_0x350ec3(0xb5),'headers':{'Content-Type':_0x350ec3(0xcf)},'data':{'stream':!![],'messages':_0x207dba}};axios(_0x3ccf74)[_0x350ec3(0xcb)](_0x138bd2=>{const _0x2e8888=_0x350ec3,_0x53bbd3=_0x138bd2[_0x2e8888(0xd4)];let _0x297f6e={},_0x20cefc='',_0x3f9a10='';_0x53bbd3['on']('data',_0x297dbd=>{const _0x3bcc24=_0x2e8888,_0x4aedf4=_0x297dbd[_0x3bcc24(0xc0)]()[_0x3bcc24(0xbe)]('\x0a\x0a')[_0x3bcc24(0xbd)](_0x5eeaab=>_0x5eeaab[_0x3bcc24(0xd6)]()!=='');for(const _0x2836c2 of _0x4aedf4){const _0x4cfc98=_0x2836c2['replace'](_0x3bcc24(0xd9),'');try{const _0x3e2419=_0x20cefc+_0x4cfc98,_0x3425d0=JSON[_0x3bcc24(0xd2)](_0x3e2419);_0x20cefc='';const {is_end:_0x1c10e9,result:_0x18427a}=_0x3425d0;_0x18427a&&(_0x3f9a10+=_0x18427a),_0x1c10e9&&(_0x297f6e=_0x3425d0,_0x297f6e[_0x3bcc24(0xbb)]=_0x3f9a10),_0xeeda35(_0x3425d0);}catch(_0x2fd6e3){_0x20cefc=_0x4cfc98;}}}),_0x53bbd3['on'](_0x2e8888(0xc8),()=>{_0x3f9a10='',_0x20cefc='',_0x267869(_0x297f6e);});})[_0x350ec3(0xc2)](_0x57c933=>{_0x3f27a9(new Error(_0x57c933));});});}exports['sendMessageFromBaidu']=sendMessageFromBaidu;