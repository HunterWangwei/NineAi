'use strict';const _0x62161b=_0x47ce;(function(_0x15c520,_0x58c6ea){const _0x2411fe=_0x47ce,_0x2547a5=_0x15c520();while(!![]){try{const _0x2c5377=-parseInt(_0x2411fe(0x119))/0x1*(-parseInt(_0x2411fe(0x120))/0x2)+-parseInt(_0x2411fe(0x125))/0x3+-parseInt(_0x2411fe(0x179))/0x4+parseInt(_0x2411fe(0x167))/0x5*(-parseInt(_0x2411fe(0x16d))/0x6)+-parseInt(_0x2411fe(0x14a))/0x7*(parseInt(_0x2411fe(0x11f))/0x8)+parseInt(_0x2411fe(0x18b))/0x9*(parseInt(_0x2411fe(0x15f))/0xa)+parseInt(_0x2411fe(0x146))/0xb;if(_0x2c5377===_0x58c6ea)break;else _0x2547a5['push'](_0x2547a5['shift']());}catch(_0x16411e){_0x2547a5['push'](_0x2547a5['shift']());}}}(_0x547b,0x41285));var __decorate=this&&this[_0x62161b(0x191)]||function(_0x201a73,_0x21c5e0,_0x503392,_0x3485d9){const _0x4d6a25=_0x62161b;var _0x825ab3=arguments[_0x4d6a25(0x12d)],_0x3cb390=_0x825ab3<0x3?_0x21c5e0:_0x3485d9===null?_0x3485d9=Object[_0x4d6a25(0x18d)](_0x21c5e0,_0x503392):_0x3485d9,_0x24b23a;if(typeof Reflect===_0x4d6a25(0x165)&&typeof Reflect['decorate']===_0x4d6a25(0x148))_0x3cb390=Reflect[_0x4d6a25(0x12a)](_0x201a73,_0x21c5e0,_0x503392,_0x3485d9);else{for(var _0x54d9b3=_0x201a73['length']-0x1;_0x54d9b3>=0x0;_0x54d9b3--)if(_0x24b23a=_0x201a73[_0x54d9b3])_0x3cb390=(_0x825ab3<0x3?_0x24b23a(_0x3cb390):_0x825ab3>0x3?_0x24b23a(_0x21c5e0,_0x503392,_0x3cb390):_0x24b23a(_0x21c5e0,_0x503392))||_0x3cb390;}return _0x825ab3>0x3&&_0x3cb390&&Object[_0x4d6a25(0x19c)](_0x21c5e0,_0x503392,_0x3cb390),_0x3cb390;},__metadata=this&&this[_0x62161b(0x17f)]||function(_0x56e619,_0x113cdb){const _0x2cc088=_0x62161b;if(typeof Reflect===_0x2cc088(0x165)&&typeof Reflect[_0x2cc088(0x158)]===_0x2cc088(0x148))return Reflect['metadata'](_0x56e619,_0x113cdb);},__param=this&&this[_0x62161b(0x18c)]||function(_0x54b6ea,_0x2dad32){return function(_0x23d451,_0x3afff2){_0x2dad32(_0x23d451,_0x3afff2,_0x54b6ea);};};Object['defineProperty'](exports,_0x62161b(0x15e),{'value':!![]}),exports[_0x62161b(0x17c)]=void 0x0;function _0x47ce(_0x267b43,_0x484f6a){const _0x547ba0=_0x547b();return _0x47ce=function(_0x47ce8c,_0x1c01d7){_0x47ce8c=_0x47ce8c-0x116;let _0x25c1b0=_0x547ba0[_0x47ce8c];return _0x25c1b0;},_0x47ce(_0x267b43,_0x484f6a);}const common_1=require('@nestjs/common'),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require('typeorm'),utils_1=require(_0x62161b(0x137)),modelType_entity_1=require('./modelType.entity'),modelKeys_entity_1=require('./modelKeys.entity'),models_1=require(_0x62161b(0x143)),plugin_1=require(_0x62161b(0x11d)),axios_1=require(_0x62161b(0x197));let ModelsService=class ModelsService{constructor(_0x273f59,_0x989247){const _0x2322ea=_0x62161b;this[_0x2322ea(0x11b)]=_0x273f59,this['modelKeysEntity']=_0x989247,this[_0x2322ea(0x172)]=[],this[_0x2322ea(0x12e)]={},this[_0x2322ea(0x138)]={},this['keyPoolIndexMap']={},this[_0x2322ea(0x181)]=[];}async['onModuleInit'](){const _0x234629=_0x62161b;await this[_0x234629(0x14e)]();}async[_0x62161b(0x14e)](){const _0x4589e5=_0x62161b;this[_0x4589e5(0x172)]=[],this[_0x4589e5(0x12e)]={},this[_0x4589e5(0x138)]={},this[_0x4589e5(0x17a)]={},this[_0x4589e5(0x172)]=await this[_0x4589e5(0x11b)][_0x4589e5(0x156)]();const _0x2e20b2=this[_0x4589e5(0x172)][_0x4589e5(0x151)](_0x4ea433=>_0x4ea433['id']),_0x44154f=await this[_0x4589e5(0x15b)][_0x4589e5(0x156)]({'where':{'modelTypeId':(0x0,typeorm_2['In'])(_0x2e20b2),'status':!![]}});this[_0x4589e5(0x172)]['forEach'](_0x11fac2=>{const _0x88a8e0=_0x4589e5,_0x3656ea=_0x44154f[_0x88a8e0(0x18e)](_0x49c9b0=>_0x49c9b0[_0x88a8e0(0x195)]===_0x11fac2['id']);this['modelMaps'][_0x11fac2['id']]=_0x3656ea;}),this['modelTypes'][_0x4589e5(0x131)](_0x2344e3=>{const _0x487dcf=_0x4589e5,{id:_0x251d90}=_0x2344e3,_0x4bb449=this[_0x487dcf(0x12e)][_0x251d90];if(!this[_0x487dcf(0x138)][_0x251d90])this['keyPoolMap'][_0x251d90]=[];_0x4bb449[_0x487dcf(0x131)](_0x10117d=>{const _0x201ecc=_0x487dcf,{keyWeight:_0x799357,id:_0x2c3f9c}=_0x10117d;let _0x3c992f=Number(_0x799357);if(typeof _0x3c992f!==_0x201ecc(0x184))_0x3c992f=0x1;for(let _0x389e08=0x0;_0x389e08<_0x799357;_0x389e08++){this['keyPoolMap'][_0x251d90][_0x201ecc(0x134)](_0x2c3f9c);}});if(!this[_0x487dcf(0x17a)][_0x251d90])this[_0x487dcf(0x17a)][_0x251d90]=0x0;}),await this[_0x4589e5(0x16c)]();}[_0x62161b(0x168)](_0x5ea581){const _0x46acb5=_0x62161b;var _0x758996;return(_0x758996=this[_0x46acb5(0x181)][_0x46acb5(0x156)](_0x3f5b44=>_0x3f5b44['id']===_0x5ea581))===null||_0x758996===void 0x0?void 0x0:_0x758996[_0x46acb5(0x195)];}async[_0x62161b(0x11c)](){const _0xa0410c=_0x62161b;var _0x1fe1dc;return(_0x1fe1dc=this['modelTypes'][_0xa0410c(0x156)](_0x1040e8=>_0x1040e8[_0xa0410c(0x183)]===_0xa0410c(0x19f)))===null||_0x1fe1dc===void 0x0?void 0x0:_0x1fe1dc['id'];}[_0x62161b(0x16c)](){const _0x2b15b9=_0x62161b,_0x29a05e=plugin_1[_0x2b15b9(0x129)][_0x2b15b9(0x18e)](_0x33c509=>{const _0x44b0b3=_0x2b15b9,{pluginModelName:_0x290096}=_0x33c509,_0x568e1b=this[_0x44b0b3(0x172)]['filter'](_0x5539f4=>{var _0x3b2ba0;const {id:_0x41ff61}=_0x5539f4;return((_0x3b2ba0=this['keyPoolMap'][_0x41ff61])===null||_0x3b2ba0===void 0x0?void 0x0:_0x3b2ba0['length'])||!_0x290096;})['map'](_0x3f3855=>{const _0x50ee24=_0x44b0b3;return _0x3f3855[_0x50ee24(0x183)];});return _0x568e1b[_0x44b0b3(0x180)](_0x290096)||!_0x290096;});this['pluginList']=_0x29a05e[_0x2b15b9(0x151)](_0x157574=>{const _0x5761df=_0x2b15b9;var _0xa759ce;const {pluginModelName:_0x10274c}=_0x157574,_0x872a65=(_0xa759ce=this[_0x5761df(0x172)]['find'](_0x185d17=>_0x185d17[_0x5761df(0x183)]===_0x10274c))===null||_0xa759ce===void 0x0?void 0x0:_0xa759ce['id'];return Object[_0x5761df(0x19d)](Object[_0x5761df(0x19d)]({},_0x157574),{'modelTypeId':_0x872a65});});}[_0x62161b(0x12f)](){const _0x92e175=_0x62161b;return this[_0x92e175(0x181)][_0x92e175(0x151)](_0x311cb2=>{const _0x19cf0d=_0x92e175;var _0x18c42a;const {pluginModelName:_0x5377d1,pluginName:_0x316554,icon:_0x44844b,id:_0x29af39}=_0x311cb2,_0x6239da=(_0x18c42a=this['modelTypes']['find'](_0x454a55=>_0x454a55[_0x19cf0d(0x183)]===_0x5377d1))===null||_0x18c42a===void 0x0?void 0x0:_0x18c42a['id'];return Object[_0x19cf0d(0x19d)](Object[_0x19cf0d(0x19d)]({},_0x311cb2),{'pluginId':_0x29af39,'modelTypeId':_0x6239da});});}async['lockKey'](_0x24cd78,_0xc14039,_0x5d7fbb=-0x1){const _0xd708a5=_0x62161b,_0x28c450=await this[_0xd708a5(0x15b)][_0xd708a5(0x160)]({'id':_0x24cd78},{'status':![],'keyStatus':_0x5d7fbb,'remark':_0xc14039});common_1[_0xd708a5(0x155)][_0xd708a5(0x154)](_0xd708a5(0x187)+_0x24cd78+_0xd708a5(0x18f)),this['init']();}async[_0x62161b(0x192)](_0xbda3dd){const _0x3efb7c=_0x62161b;if(!this[_0x3efb7c(0x172)][_0x3efb7c(0x12d)]){common_1['Logger'][_0x3efb7c(0x193)](_0x3efb7c(0x13d));return;}let _0x4357f0=null;if(_0xbda3dd===null||_0xbda3dd===void 0x0?void 0x0:_0xbda3dd['modelTypeId'])_0x4357f0=await this[_0x3efb7c(0x188)](_0xbda3dd===null||_0xbda3dd===void 0x0?void 0x0:_0xbda3dd['modelTypeId']);else{if(_0xbda3dd===null||_0xbda3dd===void 0x0?void 0x0:_0xbda3dd['isGpts']){const _0x2a7fe3=await this[_0x3efb7c(0x142)](_0x3efb7c(0x19f));_0x4357f0=this['modelTypes']['find'](_0x196091=>_0x196091['id']===_0x2a7fe3);}else _0x4357f0=await this[_0x3efb7c(0x157)]();}if(!_0x4357f0)return;const {id:_0x233590,maxRounds:_0xb3f392,maxResponseTokens:_0x4dbac9}=_0x4357f0;return{'modelTypeId':_0x233590,'modelConfig':{'maxResponseTokens':_0x4dbac9,'topN':0.8,'systemMessage':'','rounds':_0xb3f392}};}async[_0x62161b(0x157)](){const _0x29b1f3=_0x62161b;let _0x10675f=null;_0x10675f=this[_0x29b1f3(0x172)]['find'](_0x3a74d2=>_0x3a74d2[_0x29b1f3(0x118)]);if(!_0x10675f){const _0x4115be=this['modelTypes'][_0x29b1f3(0x18e)](_0x54602f=>_0x54602f['status']);_0x4115be[_0x29b1f3(0x12d)]&&(_0x10675f=_0x4115be[0x0]);}return _0x10675f;}async[_0x62161b(0x128)](){const _0x256545=_0x62161b,_0x15bed9=await this[_0x256545(0x11b)]['find']({'order':{'order':_0x256545(0x185)}});return _0x15bed9;}async['getPluginList'](){const _0x44c6ae=_0x62161b;return this[_0x44c6ae(0x181)];}async[_0x62161b(0x161)](_0x4e8bb1,_0x1cec3c,_0x11a611){const _0x1e3e32=_0x62161b;await this[_0x1e3e32(0x15b)][_0x1e3e32(0x122)]()['update'](modelKeys_entity_1[_0x1e3e32(0x140)])[_0x1e3e32(0x126)]({'useCount':()=>'useCount\x20+\x201','useToken':()=>_0x1e3e32(0x159)+_0x11a611})['where']('id\x20=\x20:id',{'id':_0x4e8bb1})[_0x1e3e32(0x124)](),await this['modelsTypeEntity']['createQueryBuilder']()[_0x1e3e32(0x160)](modelType_entity_1[_0x1e3e32(0x153)])[_0x1e3e32(0x126)]({'useCount':()=>_0x1e3e32(0x14d),'useToken':()=>_0x1e3e32(0x159)+_0x11a611})[_0x1e3e32(0x139)](_0x1e3e32(0x176),{'id':_0x1cec3c})[_0x1e3e32(0x124)]();}async['refreshBaiduAccesstoken'](){}async[_0x62161b(0x17e)](_0x552bcc){const _0x39c9bb=_0x62161b,{keyType:_0x864c70,status:_0x38ab17,model:_0x2c344c,page:page=0x1,size:size=0xa}=_0x552bcc,_0x5ca034={};_0x864c70&&(_0x5ca034['keyType']=_0x864c70),_0x2c344c&&(_0x5ca034[_0x39c9bb(0x183)]=_0x2c344c),_0x38ab17&&(_0x5ca034['status']=Number(_0x38ab17)===0x1?!![]:![]);const [_0x20827b,_0x1f68a6]=await this[_0x39c9bb(0x11b)]['findAndCount']({'where':_0x5ca034,'skip':(page-0x1)*size,'take':size,'order':{'order':_0x39c9bb(0x185)}}),_0x3aa44a=_0x20827b[_0x39c9bb(0x151)](_0x999519=>_0x999519['id']),_0x43886b={};for(const _0x5a69ec of _0x3aa44a){const _0x529cb8=await this[_0x39c9bb(0x15b)][_0x39c9bb(0x166)]({'where':{'modelTypeId':_0x5a69ec}});_0x43886b[_0x5a69ec]=_0x529cb8;}return _0x20827b['forEach'](_0x1d54bd=>{const _0x45b5c5=_0x39c9bb;_0x1d54bd[_0x45b5c5(0x123)]=_0x43886b[_0x1d54bd['id']]||0x0;}),{'rows':_0x20827b,'count':_0x1f68a6};}async['setModelType'](_0x251318){const _0x2fbb86=_0x62161b;try{const {id:_0x162902,modelName:_0x343809}=_0x251318,_0x5176f0=this[_0x2fbb86(0x141)](_0x251318);if(_0x162902){const _0x178eaf=await this['modelsTypeEntity'][_0x2fbb86(0x160)]({'id':_0x162902},_0x5176f0);return await this['init'](),_0x178eaf[_0x2fbb86(0x13e)]>0x0;}else{const _0x3ece72=await this[_0x2fbb86(0x11b)][_0x2fbb86(0x16e)]({'where':{'modelName':_0x343809}});if(_0x3ece72)throw new common_1[(_0x2fbb86(0x19e))](_0x2fbb86(0x19a)+_0x343809+'\x20已经添加过！',common_1[_0x2fbb86(0x14c)][_0x2fbb86(0x162)]);const _0x2cfde3=await this[_0x2fbb86(0x11b)][_0x2fbb86(0x13f)](_0x5176f0);return await this[_0x2fbb86(0x14e)](),_0x2cfde3;}}catch(_0x5bbd0b){throw new common_1[(_0x2fbb86(0x19e))](_0x2fbb86(0x18a)+(_0x5bbd0b===null||_0x5bbd0b===void 0x0?void 0x0:_0x5bbd0b[_0x2fbb86(0x150)]),common_1[_0x2fbb86(0x14c)]['BAD_REQUEST']);}}async[_0x62161b(0x163)](_0x27bfbd){const _0x2abb02=_0x62161b,{id:_0x249d2b}=_0x27bfbd;if(!_0x249d2b)throw new common_1[(_0x2abb02(0x19e))](_0x2abb02(0x16b),common_1['HttpStatus'][_0x2abb02(0x162)]);const _0x29b638=await this[_0x2abb02(0x11b)][_0x2abb02(0x16e)]({'where':{'id':_0x249d2b}});if(!_0x29b638)throw new common_1[(_0x2abb02(0x19e))](_0x2abb02(0x16b),common_1['HttpStatus'][_0x2abb02(0x162)]);else{const _0x4b77a2=await this[_0x2abb02(0x15b)]['count']({'where':{'modelTypeId':_0x249d2b}});console[_0x2abb02(0x15d)](_0x2abb02(0x135),_0x4b77a2);if(_0x4b77a2)throw new common_1[(_0x2abb02(0x19e))](_0x2abb02(0x11e),common_1[_0x2abb02(0x14c)][_0x2abb02(0x162)]);const _0x4cd6cb=await this[_0x2abb02(0x11b)][_0x2abb02(0x199)]({'id':_0x249d2b});return this['init'](),_0x4cd6cb['affected'];}}async[_0x62161b(0x152)](_0x35f9fb,_0x47259d){const _0x25eee6=_0x62161b,{role:_0xc922c6}=_0x35f9fb[_0x25eee6(0x19b)],{modelTypeId:_0x134ee5,status:_0x58d667,page:page=0x1,size:size=0xa}=_0x47259d,_0x1a3e6c={};_0x134ee5&&(_0x1a3e6c[_0x25eee6(0x195)]=_0x134ee5),_0x58d667&&(_0x1a3e6c[_0x25eee6(0x186)]=Number(_0x58d667)===0x1?!![]:![]);const [_0x535a8b,_0x2ae1df]=await this[_0x25eee6(0x15b)][_0x25eee6(0x16f)]({'where':_0x1a3e6c,'skip':(page-0x1)*size,'take':size}),_0x19c2d9=_0x535a8b[_0x25eee6(0x151)](_0x3cd9c7=>_0x3cd9c7[_0x25eee6(0x195)]),_0xad6030=await this[_0x25eee6(0x11b)]['findBy']({'id':(0x0,typeorm_2['In'])(_0x19c2d9)});return _0x535a8b[_0x25eee6(0x131)](_0x31b9e3=>{const _0x17c83f=_0x25eee6,_0x489b11=_0xad6030[_0x17c83f(0x156)](_0x198192=>_0x198192['id']===_0x31b9e3['modelTypeId']);_0x31b9e3[_0x17c83f(0x198)]=_0x489b11,_0xc922c6!==_0x17c83f(0x13c)&&(_0x31b9e3[_0x17c83f(0x132)]&&(_0x31b9e3[_0x17c83f(0x132)]=(0x0,utils_1[_0x17c83f(0x196)])(_0x31b9e3['key'])),_0x31b9e3[_0x17c83f(0x17d)]&&(_0x31b9e3[_0x17c83f(0x17d)]=(0x0,utils_1[_0x17c83f(0x196)])(_0x31b9e3['secret'])));}),{'rows':_0x535a8b,'count':_0x2ae1df};}async[_0x62161b(0x190)](_0x23adb4){const _0x4d114b=_0x62161b;try{const {id:_0x5506bf,key:_0x2fa45d,modelTypeId:_0x45e331}=_0x23adb4;if(_0x5506bf){const _0x34cd10=JSON[_0x4d114b(0x147)](JSON[_0x4d114b(0x15a)](_0x23adb4));_0x34cd10[_0x4d114b(0x132)]=_0x23adb4[_0x4d114b(0x132)][0x0],_0x34cd10[_0x4d114b(0x195)]=_0x45e331[0x0];const _0x3b2747=await this[_0x4d114b(0x15b)][_0x4d114b(0x160)]({'id':_0x5506bf},_0x34cd10);return await this[_0x4d114b(0x14e)](),_0x3b2747[_0x4d114b(0x13e)]>0x0;}if(!_0x5506bf){const _0x17ba2e=[];return _0x45e331[_0x4d114b(0x131)](_0x169bd1=>_0x17ba2e[_0x4d114b(0x134)](this[_0x4d114b(0x15b)][_0x4d114b(0x13f)](Object[_0x4d114b(0x19d)](Object[_0x4d114b(0x19d)]({},_0x23adb4),{'modelTypeId':_0x169bd1,'order':0x64})))),await Promise[_0x4d114b(0x173)](_0x17ba2e),await this[_0x4d114b(0x14e)](),!![];}}catch(_0x4a9fd4){console[_0x4d114b(0x15d)](_0x4d114b(0x133),_0x4a9fd4);throw new common_1['HttpException'](_0x4d114b(0x12c),common_1['HttpStatus'][_0x4d114b(0x162)]);}}async[_0x62161b(0x189)](_0x306f07){const _0x3b6fc9=_0x62161b,{id:_0x5f4fb2}=_0x306f07;if(!_0x5f4fb2)throw new common_1['HttpException'](_0x3b6fc9(0x16b),common_1[_0x3b6fc9(0x14c)][_0x3b6fc9(0x162)]);const _0x3bb0e2=await this[_0x3b6fc9(0x15b)][_0x3b6fc9(0x16e)]({'where':{'id':_0x5f4fb2}});if(!_0x3bb0e2)throw new common_1[(_0x3b6fc9(0x19e))](_0x3b6fc9(0x16b),common_1['HttpStatus'][_0x3b6fc9(0x162)]);else{const _0x4592e8=await this[_0x3b6fc9(0x15b)]['delete']({'id':_0x5f4fb2});return this[_0x3b6fc9(0x14e)](),_0x4592e8[_0x3b6fc9(0x13e)];}}['getMaxToken'](_0x1f2a1c,_0x2a68c9){const _0x5d7993=_0x62161b;let _0x50a307=models_1[_0x5d7993(0x178)][_0x1f2a1c];return!_0x50a307?_0x50a307=0x1000:_0x2a68c9<_0x50a307&&_0x2a68c9>0x0&&(_0x50a307=_0x2a68c9),_0x50a307;}[_0x62161b(0x141)](_0x1ed24d){const _0x23625b=_0x62161b,_0x44a9db=JSON[_0x23625b(0x147)](JSON[_0x23625b(0x15a)](_0x1ed24d)),{model:_0x59270d,maxTokens:_0x3db62f}=_0x44a9db,_0x2824e3=models_1[_0x23625b(0x178)][_0x59270d];return _0x44a9db[_0x23625b(0x136)]=this[_0x23625b(0x175)](_0x59270d,_0x3db62f),_0x44a9db[_0x23625b(0x136)]<0x1388&&(_0x44a9db[_0x23625b(0x174)]=0x800),_0x44a9db[_0x23625b(0x136)]>0x1388&&_0x44a9db[_0x23625b(0x136)]<0x2710&&(_0x44a9db[_0x23625b(0x174)]=0x1000),_0x44a9db[_0x23625b(0x136)]>0x2710&&_0x44a9db['maxTokens']<0x7530&&(_0x44a9db['maxResponseTokens']=0x2000),_0x44a9db[_0x23625b(0x136)]>0x7530&&_0x44a9db[_0x23625b(0x136)]<0xc350&&(_0x44a9db[_0x23625b(0x174)]=0x3e80),_0x44a9db[_0x23625b(0x136)]>0xc350&&(_0x44a9db['maxResponseTokens']=0x9c4),_0x44a9db;}async[_0x62161b(0x188)](_0x223f1b){const _0x79fc0f=_0x62161b;return await this[_0x79fc0f(0x172)][_0x79fc0f(0x156)](_0x49d717=>_0x49d717['id']===_0x223f1b);}async[_0x62161b(0x145)](){const _0x3af8f2=_0x62161b;var _0xaf5348;const _0x2476cb=(_0xaf5348=this[_0x3af8f2(0x172)]['find'](_0xc43342=>_0xc43342['isUseTool']))===null||_0xaf5348===void 0x0?void 0x0:_0xaf5348['id'];if(!_0x2476cb)return;const _0x385584=this[_0x3af8f2(0x12e)][_0x2476cb];if(!_0x385584[_0x3af8f2(0x12d)])return;const _0x39ab44=this['keyPoolIndexMap'][_0x2476cb],_0x314bcb=_0x385584[_0x39ab44];return this[_0x3af8f2(0x17a)][_0x2476cb]++,this[_0x3af8f2(0x17a)][_0x2476cb]>=_0x385584[_0x3af8f2(0x12d)]&&(this[_0x3af8f2(0x17a)][_0x2476cb]=0x0),_0x314bcb;}async['getCurrentModelKeyInfo'](_0x3ece8a){const _0x440abc=_0x62161b;if(!_0x3ece8a)return;const _0x39520d=this[_0x440abc(0x12e)][_0x3ece8a];if(!_0x39520d['length'])return;const _0x1dc7c2=this[_0x440abc(0x17a)][_0x3ece8a],_0x14df75=_0x39520d[_0x1dc7c2];return this[_0x440abc(0x17a)][_0x3ece8a]++,this[_0x440abc(0x17a)][_0x3ece8a]>=_0x39520d[_0x440abc(0x12d)]&&(this['keyPoolIndexMap'][_0x3ece8a]=0x0),_0x14df75;}async[_0x62161b(0x182)](){const _0x157a8c=_0x62161b;var _0x5e1d82;const _0x4dfa90=(_0x5e1d82=this[_0x157a8c(0x172)]['find'](_0x492c9e=>_0x492c9e[_0x157a8c(0x149)]))===null||_0x5e1d82===void 0x0?void 0x0:_0x5e1d82['id'];if(!_0x4dfa90)return;const _0x42393e=this[_0x157a8c(0x12e)][_0x4dfa90];if(!_0x42393e[_0x157a8c(0x12d)])return;const _0x24a658=this[_0x157a8c(0x17a)][_0x4dfa90],_0x559c8a=_0x42393e[_0x24a658];return this[_0x157a8c(0x17a)][_0x4dfa90]++,this['keyPoolIndexMap'][_0x4dfa90]>=_0x42393e[_0x157a8c(0x12d)]&&(this['keyPoolIndexMap'][_0x4dfa90]=0x0),_0x559c8a;}async[_0x62161b(0x14f)](){const _0x148068=_0x62161b;var _0x1152be;const _0x41221e=await((_0x1152be=this[_0x148068(0x172)][_0x148068(0x156)](_0x268274=>_0x268274[_0x148068(0x183)][_0x148068(0x180)](_0x148068(0x164))))===null||_0x1152be===void 0x0?void 0x0:_0x1152be['id']);return this[_0x148068(0x13b)](_0x41221e);}async[_0x62161b(0x142)](_0x2198b1){const _0x5020fa=_0x62161b;var _0x430944;if(!_0x2198b1){const _0x43d502=await this[_0x5020fa(0x157)]();return _0x43d502?_0x43d502['id']:null;}return(_0x430944=this[_0x5020fa(0x172)][_0x5020fa(0x156)](_0x2debb4=>_0x2debb4[_0x5020fa(0x183)]===_0x2198b1))===null||_0x430944===void 0x0?void 0x0:_0x430944['id'];}[_0x62161b(0x12b)](_0x28e29a){const _0x44418d=_0x62161b,_0x44013e=_0x28e29a['endsWith']('/')?_0x28e29a[_0x44418d(0x121)](0x0,-0x1):_0x28e29a,_0x2eacae=_0x44013e||'https://api.openai.com';return _0x2eacae+_0x44418d(0x169);}async['searchGpts'](_0x289114,_0x2690b9){const _0x16e98a=_0x62161b;var _0xc27b22,_0x4f3d0c,_0x11cb22,_0x1b3ba;const {keyword:_0x45bd29}=_0x2690b9,_0x4bd4f0=await this[_0x16e98a(0x142)](_0x16e98a(0x15c));let _0x3c6179=await this[_0x16e98a(0x13b)](_0x4bd4f0);!_0x3c6179&&(_0x3c6179={'key':_0x16e98a(0x17b),'proxyUrl':_0x16e98a(0x16a)});const {key:_0x9778cd,proxyUrl:_0x14cd59}=_0x3c6179,_0x20a201={'method':_0x16e98a(0x171),'url':this[_0x16e98a(0x12b)](_0x14cd59),'headers':{'Content-Type':_0x16e98a(0x13a),'Authorization':_0x16e98a(0x116)+(0x0,utils_1[_0x16e98a(0x11a)])(_0x9778cd)},'data':{'max_tokens':0x1f40,'model':_0x16e98a(0x15c),'messages':[{'role':_0x16e98a(0x19b),'content':_0x45bd29}]}};try{const _0x4d4f5e=await(0x0,axios_1[_0x16e98a(0x130)])(_0x20a201);if(_0x4d4f5e[_0x16e98a(0x186)]!==0xc8||!((_0xc27b22=_0x4d4f5e===null||_0x4d4f5e===void 0x0?void 0x0:_0x4d4f5e[_0x16e98a(0x194)])===null||_0xc27b22===void 0x0?void 0x0:_0xc27b22['choices']['length']))throw new common_1[(_0x16e98a(0x19e))](_0x16e98a(0x117),common_1[_0x16e98a(0x14c)][_0x16e98a(0x162)]);this[_0x16e98a(0x161)](_0x3c6179['id'],_0x3c6179[_0x16e98a(0x195)],0x0);const _0x35eb70=(_0x1b3ba=(_0x11cb22=(_0x4f3d0c=_0x4d4f5e===null||_0x4d4f5e===void 0x0?void 0x0:_0x4d4f5e[_0x16e98a(0x194)])===null||_0x4f3d0c===void 0x0?void 0x0:_0x4f3d0c[_0x16e98a(0x144)][0x0])===null||_0x11cb22===void 0x0?void 0x0:_0x11cb22[_0x16e98a(0x127)])===null||_0x1b3ba===void 0x0?void 0x0:_0x1b3ba['content'],_0x4e7ad9=JSON[_0x16e98a(0x147)](_0x35eb70);return _0x4e7ad9['items'][_0x16e98a(0x151)](_0x4d507d=>{const _0x30b9f3=_0x16e98a,{gizmo:_0x52e7e,tools:_0x32cf4b}=_0x4d507d,{id:_0x1bb7f3,display:_0x108921,vanity_metrics:_0x79012f}=_0x52e7e,{name:_0x1c8cc0,description:_0x4b4c8c,prompt_starters:_0x4d923e,profile_picture_url:_0x5cb1ac,welcome_message:_0x1031a6}=_0x108921,{num_conversations_str:_0x540122,created_ago_str:_0x5ac3dc}=_0x79012f;return{'gptsId':_0x1bb7f3,'name':_0x1c8cc0,'des':_0x4b4c8c,'demoData':Array[_0x30b9f3(0x177)](_0x4d923e)?_0x4d923e['join']('\x0a'):_0x4d923e,'coverImg':_0x5cb1ac,'heat':_0x540122,'createTime':_0x5ac3dc,'welcome_message':_0x1031a6,'isGpts':!![]};});}catch(_0x4d19f7){console[_0x16e98a(0x15d)](_0x16e98a(0x133),_0x4d19f7);throw new common_1[(_0x16e98a(0x19e))]('搜索异常！',common_1[_0x16e98a(0x14c)][_0x16e98a(0x162)]);}}};ModelsService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x62161b(0x14b)])(modelType_entity_1[_0x62161b(0x153)])),__param(0x1,(0x0,typeorm_1[_0x62161b(0x14b)])(modelKeys_entity_1[_0x62161b(0x140)])),__metadata('design:paramtypes',[typeorm_2[_0x62161b(0x170)],typeorm_2['Repository']])],ModelsService),exports[_0x62161b(0x17c)]=ModelsService;function _0x547b(){const _0x544933=['2526xkdprz','slice','createQueryBuilder','keyCount','execute','1362951erXWuQ','set','message','modelsList','PluginDefaultList','decorate','getFullUrl','添加Key失败！','length','modelMaps','getOpenPluginList','default','forEach','key','error:\x20','push','count:\x20','maxTokens','../../common/utils','keyPoolMap','where','application/json','getCurrentModelKeyInfo','super','当前未配置任何模型分类，请先配置模型分类！','affected','save','ModelKeysEntity','compilerParams','getModelTypeIdFromModelName','../../common/constants/models','choices','getUseToolsModelKey','5806306NAlVow','parse','function','isDallDraw','855883ztybvk','InjectRepository','HttpStatus','useCount\x20+\x201','init','getTtsModelKey','response','map','queryModelKey','ModelsTypeEntity','error','Logger','find','getDefaultModel','metadata','useToken\x20+\x20','stringify','modelKeysEntity','search-gpts','log','__esModule','3200370ApAeCe','update','saveUseLog','BAD_REQUEST','delModelType','tts','object','count','33995byBeGY','getModelTypeIdFromPluginId','/v1/chat/completions','https://api.gptgod.online/','无效参数！','initPluginList','270LAswMT','findOne','findAndCount','Repository','POST','modelTypes','all','maxResponseTokens','getMaxToken','id\x20=\x20:id','isArray','ModelMaxtokenMap','673172ntBirF','keyPoolIndexMap','sk-70QvIwbE2GVk7NDF6d44U31vSPx46fl7rZF5VOqmd70kW1XX','ModelsService','secret','queryModelType','__metadata','includes','pluginList','getUseDrawModelKey','model','number','DESC','status','key:\x20','getModelTypeDetailFromId','delModelKey','编辑模型失败\x20->\x20','9fPmIlc','__param','getOwnPropertyDescriptor','filter','\x20欠费或被官方封禁导致不可用，已被系统自动锁定','setModelKey','__decorate','getBaseConfig','debug','data','modelTypeId','hideString','axios','modelInfo','delete','模型名称\x20->\x20','user','defineProperty','assign','HttpException','gpt-4-gizmo','Bearer\x20','搜索异常！','isDefaultModel','372kdpASW','removeSpecialCharacters','modelsTypeEntity','getModelTypeIdFromGpts','../../common/constants/plugin','当前模型下还有KEY、请删除当前模型下的KEY后再删除模型','8UVxfxA'];_0x547b=function(){return _0x544933;};return _0x547b();}