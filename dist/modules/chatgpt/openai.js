'use strict';const _0x19e544=_0x7960;(function(_0x3a9719,_0x562a43){const _0x554f5b=_0x7960,_0x75e243=_0x3a9719();while(!![]){try{const _0x26d0d3=-parseInt(_0x554f5b(0x8c))/0x1*(parseInt(_0x554f5b(0x80))/0x2)+parseInt(_0x554f5b(0x89))/0x3*(-parseInt(_0x554f5b(0x83))/0x4)+parseInt(_0x554f5b(0xab))/0x5*(parseInt(_0x554f5b(0xa4))/0x6)+-parseInt(_0x554f5b(0x87))/0x7+parseInt(_0x554f5b(0x9a))/0x8+-parseInt(_0x554f5b(0xa9))/0x9+parseInt(_0x554f5b(0xa3))/0xa;if(_0x26d0d3===_0x562a43)break;else _0x75e243['push'](_0x75e243['shift']());}catch(_0x21e6e4){_0x75e243['push'](_0x75e243['shift']());}}}(_0x2f47,0x873df));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['getTokenCount']=exports['sendMessageFromOpenAi']=exports['getFullUrl']=void 0x0;const axios_1=require(_0x19e544(0xa2)),tiktoken_1=require(_0x19e544(0xa5)),utils_1=require(_0x19e544(0xa1)),es=require('event-stream'),tokenizer=(0x0,tiktoken_1[_0x19e544(0xa6)])(_0x19e544(0x91));function getFullUrl(_0xd9eb5){const _0xbe74fd=_0x19e544,_0x35593c=_0xd9eb5[_0xbe74fd(0xa0)]('/')?_0xd9eb5[_0xbe74fd(0xa8)](0x0,-0x1):_0xd9eb5,_0x2289d4=_0x35593c||_0xbe74fd(0x97);return _0x2289d4+'/v1/chat/completions';}exports[_0x19e544(0x9d)]=getFullUrl;function sendMessageFromOpenAi(_0x4feb4b,_0x51aec9){const _0x720cf5=_0x19e544;var _0x558d54;const {onProgress:_0x4f8531,maxToken:_0x1fd8c3,apiKey:_0x1837b3,model:_0x5b3514,temperature:temperature=0.95,proxyUrl:_0x4feec8,usingNetwork:usingNetwork=![],gptsId:_0x1222d7}=_0x51aec9,_0x132306={'method':_0x720cf5(0x8f),'url':getFullUrl(_0x4feec8),'responseType':_0x720cf5(0x7f),'headers':{'Content-Type':_0x720cf5(0x8d),'Authorization':'Bearer\x20'+(0x0,utils_1[_0x720cf5(0x9f)])(_0x1837b3)},'data':{'stream':!![],'temperature':temperature,'model':_0x5b3514,'messages':_0x4feb4b}};usingNetwork&&(_0x132306[_0x720cf5(0xa7)][_0x720cf5(0x7c)]=_0x720cf5(0x88)+_0x132306[_0x720cf5(0xa7)][_0x720cf5(0x7c)]);_0x1222d7&&(_0x132306['data']['model']=_0x132306['data'][_0x720cf5(0x7c)]+'-'+_0x1222d7);const _0x2c2c5f=(_0x558d54=_0x4feb4b[_0x4feb4b[_0x720cf5(0x95)]-0x1])===null||_0x558d54===void 0x0?void 0x0:_0x558d54['content'];return new Promise(async(_0x2b83d7,_0x450810)=>{const _0x27504f=_0x720cf5;try{const _0xf82883=await(0x0,axios_1[_0x27504f(0x9e)])(_0x132306),_0x4cb6d4=_0xf82883[_0x27504f(0xa7)],_0x57b445={'text':''};_0x4cb6d4[_0x27504f(0x7e)](es[_0x27504f(0x94)]('\x0a'))['on'](_0x27504f(0xa7),_0x1754dd=>{const _0x12f373=_0x27504f;var _0x3e630c;let _0x21664e=_0x1754dd?[_0x1754dd[_0x12f373(0x9b)]()]:[];if(_0x21664e[_0x12f373(0x95)]&&_0x21664e[0x0][_0x12f373(0x7b)](_0x12f373(0x79)))_0x21664e=[];for(const _0x24edea of _0x21664e){const _0x15585a=_0x24edea[_0x12f373(0x92)](_0x12f373(0x96),'');let _0x56e3e3=![];try{_0x56e3e3=JSON['parse'](_0x15585a)[_0x12f373(0x93)][0x0][_0x12f373(0x99)]===_0x12f373(0x86);}catch(_0x191255){_0x56e3e3=![];}if(_0x15585a==='[DONE]'||_0x56e3e3)return _0x57b445[_0x12f373(0x81)]=_0x57b445[_0x12f373(0x81)]['trim'](),_0x57b445;try{const _0x359794=JSON['parse'](_0x15585a);_0x359794['id']&&(_0x57b445['id']=_0x359794['id']);if((_0x3e630c=_0x359794['choices'])===null||_0x3e630c===void 0x0?void 0x0:_0x3e630c[_0x12f373(0x95)]){const _0x4ae2da=_0x359794['choices'][0x0][_0x12f373(0x98)];_0x57b445[_0x12f373(0x98)]=_0x4ae2da[_0x12f373(0x7d)];if(_0x4ae2da===null||_0x4ae2da===void 0x0?void 0x0:_0x4ae2da[_0x12f373(0x7d)])_0x57b445['text']+=_0x4ae2da['content'];_0x4ae2da['role']&&(_0x57b445[_0x12f373(0xaa)]=_0x4ae2da[_0x12f373(0xaa)]),_0x57b445['detail']=_0x359794;}_0x4f8531&&_0x4f8531({'text':_0x57b445[_0x12f373(0x81)]});}catch(_0x2b805){console[_0x12f373(0x85)]('parse\x20Error',_0x15585a);}}}),_0x4cb6d4['on']('end',()=>{const _0x19dfac=_0x27504f;if(_0x57b445['detail']&&_0x57b445[_0x19dfac(0x81)]){const _0x4204a8=getTokenCount(_0x2c2c5f),_0x201021=getTokenCount(_0x57b445[_0x19dfac(0x81)]);_0x57b445[_0x19dfac(0x8b)][_0x19dfac(0x84)]={'prompt_tokens':_0x4204a8,'completion_tokens':_0x201021,'total_tokens':_0x4204a8+_0x201021,'estimated':!![]};}return _0x2b83d7(_0x57b445);});}catch(_0x48a70f){console[_0x27504f(0x85)](_0x27504f(0x9c),_0x48a70f[_0x27504f(0x8e)][_0x27504f(0xa7)]),_0x450810(_0x48a70f);}});}function _0x2f47(){const _0x3142c6=['@dqbd/tiktoken','get_encoding','data','slice','5420502UzHrCu','role','20TZCbcd','[DONE]','getTokenCount','includes','model','content','pipe','stream','2xFiIOS','text','32k','326328PhcSGq','usage','log','stop','721798OqGcUc','net-','39BAoYwk','preview','detail','759547eJoSyN','application/json','response','POST','gpt-4','cl100k_base','replace','choices','split','length','data:','https://api.openai.com','delta','finish_reason','812168nbuxPh','toString','openai\x20---------->\x20:\x20','getFullUrl','default','removeSpecialCharacters','endsWith','../../common/utils','axios','19719670gcyKZE','1508952xnRxkL'];_0x2f47=function(){return _0x3142c6;};return _0x2f47();}exports['sendMessageFromOpenAi']=sendMessageFromOpenAi;function getTokenCount(_0xbeb595){const _0x186a7d=_0x19e544;if(!_0xbeb595)return 0x0;return _0xbeb595=_0xbeb595[_0x186a7d(0x9b)]()[_0x186a7d(0x92)](/<\|endoftext\|>/g,''),tokenizer['encode'](_0xbeb595)['length'];}function _0x7960(_0x20663a,_0x29eae4){const _0x2f476c=_0x2f47();return _0x7960=function(_0x7960d8,_0x5236bb){_0x7960d8=_0x7960d8-0x79;let _0x327496=_0x2f476c[_0x7960d8];return _0x327496;},_0x7960(_0x20663a,_0x29eae4);}exports[_0x19e544(0x7a)]=getTokenCount;function compilerToken(_0x313252,_0x5d0cdc){const _0x232e4a=_0x19e544;let _0x5e2222=0x0;return _0x313252[_0x232e4a(0x7b)](3.5)&&(_0x5e2222=_0x5d0cdc>0x1000?0x1000:_0x5d0cdc),_0x313252['includes'](_0x232e4a(0x90))&&(_0x5e2222=_0x5d0cdc>0x2000?0x2000:_0x5d0cdc),_0x313252[_0x232e4a(0x7b)](_0x232e4a(0x8a))&&(_0x5e2222=_0x5d0cdc>0x1000?0x1000:_0x5d0cdc),_0x313252['includes'](_0x232e4a(0x82))&&(_0x5e2222=_0x5d0cdc>0x8000?0x8000:_0x5d0cdc),_0x5e2222;}