'use strict';const _0xd20581=_0x4011;(function(_0x46819e,_0x27df87){const _0x444db6=_0x4011,_0x4ccf6d=_0x46819e();while(!![]){try{const _0x3652e0=-parseInt(_0x444db6(0xd1))/0x1+-parseInt(_0x444db6(0xf4))/0x2*(parseInt(_0x444db6(0xda))/0x3)+-parseInt(_0x444db6(0xe1))/0x4*(-parseInt(_0x444db6(0xfc))/0x5)+parseInt(_0x444db6(0xc7))/0x6*(parseInt(_0x444db6(0xe5))/0x7)+parseInt(_0x444db6(0xf3))/0x8+parseInt(_0x444db6(0xe8))/0x9*(parseInt(_0x444db6(0xc8))/0xa)+parseInt(_0x444db6(0xc9))/0xb*(-parseInt(_0x444db6(0xc3))/0xc);if(_0x3652e0===_0x27df87)break;else _0x4ccf6d['push'](_0x4ccf6d['shift']());}catch(_0x4dff9f){_0x4ccf6d['push'](_0x4ccf6d['shift']());}}}(_0x1331,0xe5646));var __decorate=this&&this['__decorate']||function(_0x5636f5,_0x2b8778,_0x30706f,_0x1342e5){const _0x42af41=_0x4011;var _0x1e165f=arguments[_0x42af41(0xe3)],_0x1825a0=_0x1e165f<0x3?_0x2b8778:_0x1342e5===null?_0x1342e5=Object[_0x42af41(0xeb)](_0x2b8778,_0x30706f):_0x1342e5,_0x1316bd;if(typeof Reflect==='object'&&typeof Reflect[_0x42af41(0xed)]==='function')_0x1825a0=Reflect[_0x42af41(0xed)](_0x5636f5,_0x2b8778,_0x30706f,_0x1342e5);else{for(var _0x20d7a7=_0x5636f5[_0x42af41(0xe3)]-0x1;_0x20d7a7>=0x0;_0x20d7a7--)if(_0x1316bd=_0x5636f5[_0x20d7a7])_0x1825a0=(_0x1e165f<0x3?_0x1316bd(_0x1825a0):_0x1e165f>0x3?_0x1316bd(_0x2b8778,_0x30706f,_0x1825a0):_0x1316bd(_0x2b8778,_0x30706f))||_0x1825a0;}return _0x1e165f>0x3&&_0x1825a0&&Object['defineProperty'](_0x2b8778,_0x30706f,_0x1825a0),_0x1825a0;},__metadata=this&&this[_0xd20581(0xdc)]||function(_0xd37955,_0x528b77){const _0x5c7fef=_0xd20581;if(typeof Reflect===_0x5c7fef(0xc6)&&typeof Reflect[_0x5c7fef(0xe4)]==='function')return Reflect['metadata'](_0xd37955,_0x528b77);},__param=this&&this[_0xd20581(0xd6)]||function(_0x506846,_0x41a59c){return function(_0x22d893,_0x8d59a6){_0x41a59c(_0x22d893,_0x8d59a6,_0x506846);};};Object[_0xd20581(0xdb)](exports,_0xd20581(0xd8),{'value':!![]}),exports[_0xd20581(0xde)]=void 0x0;const common_1=require(_0xd20581(0xd5)),bull_1=require('@nestjs/bull'),utils_1=require('../../common/utils'),midjourney_service_1=require(_0xd20581(0xcf)),midjourney_constant_1=require(_0xd20581(0xef)),userBalance_service_1=require('../userBalance/userBalance.service'),globalConfig_service_1=require('../globalConfig/globalConfig.service');function _0x4011(_0x59ad4c,_0x34d2ec){const _0x1331df=_0x1331();return _0x4011=function(_0x40111d,_0x1787fa){_0x40111d=_0x40111d-0xc2;let _0x3c5793=_0x1331df[_0x40111d];return _0x3c5793;},_0x4011(_0x59ad4c,_0x34d2ec);}let QueueService=class QueueService{constructor(_0x2e1124,_0x12733e,_0x403edd,_0x471381){const _0x3fb55d=_0xd20581;this[_0x3fb55d(0xd2)]=_0x2e1124,this[_0x3fb55d(0xea)]=_0x12733e,this[_0x3fb55d(0xfb)]=_0x403edd,this[_0x3fb55d(0xd4)]=_0x471381,this['jobIds']=[];}async['onApplicationBootstrap'](){const _0x13f602=_0xd20581;await this[_0x13f602(0xd2)][_0x13f602(0xf9)](0x0,'active'),await this[_0x13f602(0xea)][_0x13f602(0xee)]();}async[_0xd20581(0xe9)](_0x318e20,_0x367091){const _0x1eb240=_0xd20581,{prompt:_0x25bd95,imgUrl:_0xe2d1a8,extraParam:_0x158521,orderId:_0x21b756,action:action=0x1,drawId:_0x5a2ebf}=_0x318e20;await this[_0x1eb240(0xea)][_0x1eb240(0xcc)](_0x367091),await this[_0x1eb240(0xfb)]['validateBalance'](_0x367091,'mjDraw',action===0x2?0x1:0x4);if(action===midjourney_constant_1[_0x1eb240(0xdf)][_0x1eb240(0xc5)]||action===midjourney_constant_1['MidjourneyActionEnum']['GENERATE']){const _0x3a5bc3=''+(0x0,utils_1['createRandomUid'])(),_0x42ff46=Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)]({},_0x318e20),{'userId':_0x367091['user']['id'],'randomDrawId':_0x3a5bc3}),_0x1531b0=await this['midjourneyService'][_0x1eb240(0xdd)](_0x42ff46),_0xfae631=await this[_0x1eb240(0xd4)]['getConfigs']([_0x1eb240(0xf1)])||0x30d40,_0x249fcb=await this[_0x1eb240(0xd2)][_0x1eb240(0xce)](_0x1eb240(0xe6),{'id':_0x1531b0['id'],'action':_0xe2d1a8?0x4:0x1,'userId':_0x367091[_0x1eb240(0xe2)]['id']},{'delay':0x3e8,'timeout':+_0xfae631});return this[_0x1eb240(0xcb)]['push'](_0x249fcb['id']),await this['userBalanceService'][_0x1eb240(0xf6)](_0x367091[_0x1eb240(0xe2)]['id'],_0x1eb240(0xe6),0x4,0x4),!![];}if(!_0x5a2ebf||!_0x21b756)throw new common_1[(_0x1eb240(0xd0))](_0x1eb240(0xd3),common_1['HttpStatus'][_0x1eb240(0xf2)]);if(action===midjourney_constant_1[_0x1eb240(0xdf)]['UPSCALE']){const _0xaef869=await this[_0x1eb240(0xea)][_0x1eb240(0xf7)](action,_0x5a2ebf,_0x21b756),{custom_id:_0xaf58d4}=_0xaef869;await this['midjourneyService']['checkIsUpscale'](_0xaf58d4);const _0x9cbbe3=Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)](Object['assign']({},_0x318e20),{'userId':_0x367091[_0x1eb240(0xe2)]['id']}),_0xaef869),_0x5e79f8=await this[_0x1eb240(0xea)][_0x1eb240(0xdd)](_0x9cbbe3),_0x157844=await this[_0x1eb240(0xd4)][_0x1eb240(0xca)](['mjTimeoutMs'])||0x30d40,_0x2bac7b=await this[_0x1eb240(0xd2)][_0x1eb240(0xce)](_0x1eb240(0xe6),{'id':_0x5e79f8['id'],'action':action,'userId':_0x367091['user']['id']},{'delay':0x3e8,'timeout':+_0x157844});await this[_0x1eb240(0xfb)][_0x1eb240(0xf6)](_0x367091['user']['id'],'mjDraw',0x1,0x1),this[_0x1eb240(0xcb)]['push'](_0x2bac7b['id']);return;}if(action===midjourney_constant_1[_0x1eb240(0xdf)][_0x1eb240(0xc4)]){const _0x31eda8=await this['midjourneyService'][_0x1eb240(0xf7)](action,_0x5a2ebf,_0x21b756),_0x372e39=Object[_0x1eb240(0xf8)](Object['assign'](Object['assign']({},_0x318e20),{'userId':_0x367091[_0x1eb240(0xe2)]['id']}),_0x31eda8),_0x4f3bbf=await this[_0x1eb240(0xea)]['addDrawQueue'](_0x372e39),_0x43e0b1=await this[_0x1eb240(0xd4)][_0x1eb240(0xca)]([_0x1eb240(0xf1)])||0x30d40,_0xe16cda=await this[_0x1eb240(0xd2)]['add'](_0x1eb240(0xe6),{'id':_0x4f3bbf['id'],'action':action,'userId':_0x367091[_0x1eb240(0xe2)]['id']},{'delay':0x3e8,'timeout':+_0x43e0b1});this[_0x1eb240(0xcb)][_0x1eb240(0xc2)](_0xe16cda['id']),await this[_0x1eb240(0xfb)][_0x1eb240(0xf6)](_0x367091['user']['id'],'mjDraw',0x4,0x4);return;}if(action===midjourney_constant_1['MidjourneyActionEnum'][_0x1eb240(0xe7)]){const _0xa60032=await this['midjourneyService']['getDrawActionDetail'](action,_0x5a2ebf,_0x21b756),_0x4cbcdf=Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)]({},_0x318e20),{'userId':_0x367091[_0x1eb240(0xe2)]['id']}),_0xa60032),_0x16ae56=await this[_0x1eb240(0xea)]['addDrawQueue'](_0x4cbcdf),_0x890806=await this['globalConfigService'][_0x1eb240(0xca)](['mjTimeoutMs'])||0x30d40,_0x16d03e=await this[_0x1eb240(0xd2)][_0x1eb240(0xce)](_0x1eb240(0xe6),{'id':_0x16ae56['id'],'action':action,'userId':_0x367091[_0x1eb240(0xe2)]['id']},{'delay':0x3e8,'timeout':+_0x890806});this[_0x1eb240(0xcb)]['push'](_0x16d03e['id']),await this[_0x1eb240(0xfb)][_0x1eb240(0xf6)](_0x367091[_0x1eb240(0xe2)]['id'],_0x1eb240(0xe6),0x4,0x4);return;}if(action===midjourney_constant_1[_0x1eb240(0xdf)][_0x1eb240(0xe0)]){const _0x2677a9=await this[_0x1eb240(0xea)]['getDrawActionDetail'](action,_0x5a2ebf,_0x21b756),_0x26e530=Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)]({},_0x318e20),{'userId':_0x367091[_0x1eb240(0xe2)]['id']}),_0x2677a9),_0x5ce54a=await this[_0x1eb240(0xea)]['addDrawQueue'](_0x26e530),_0x4b6fc5=await this['globalConfigService'][_0x1eb240(0xca)]([_0x1eb240(0xf1)])||0x30d40,_0x568130=await this['mjDrawQueue'][_0x1eb240(0xce)](_0x1eb240(0xe6),{'id':_0x5ce54a['id'],'action':action,'userId':_0x367091['user']['id']},{'delay':0x3e8,'timeout':+_0x4b6fc5});this[_0x1eb240(0xcb)][_0x1eb240(0xc2)](_0x568130['id']),await this[_0x1eb240(0xfb)]['deductFromBalance'](_0x367091['user']['id'],_0x1eb240(0xe6),0x4,0x4);return;}if(action===midjourney_constant_1[_0x1eb240(0xdf)]['ZOOM']){const _0x50a311=await this[_0x1eb240(0xea)]['getDrawActionDetail'](action,_0x5a2ebf,_0x21b756),_0x14de4e=Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)](Object[_0x1eb240(0xf8)]({},_0x318e20),{'userId':_0x367091[_0x1eb240(0xe2)]['id']}),_0x50a311),_0x2d92f3=await this[_0x1eb240(0xea)][_0x1eb240(0xdd)](_0x14de4e),_0x6b4faf=await this['globalConfigService']['getConfigs']([_0x1eb240(0xf1)])||0x30d40,_0x5e2f63=await this[_0x1eb240(0xd2)][_0x1eb240(0xce)](_0x1eb240(0xe6),{'id':_0x2d92f3['id'],'action':action,'userId':_0x367091[_0x1eb240(0xe2)]['id']},{'delay':0x3e8,'timeout':+_0x6b4faf});this['jobIds'][_0x1eb240(0xc2)](_0x5e2f63['id']),await this['userBalanceService'][_0x1eb240(0xf6)](_0x367091[_0x1eb240(0xe2)]['id'],_0x1eb240(0xe6),0x4,0x4);return;}}async[_0xd20581(0xfa)](){const _0x3d002f=_0xd20581;return{'jobIds':this[_0x3d002f(0xcb)]};}};function _0x1331(){const _0x522def=['object','4711296vExcpR','10mIbcaJ','17665813TCLhOV','getConfigs','jobIds','checkLimit','UserBalanceService','add','../midjourney/midjourney.service','HttpException','3901xRlqZt','mjDrawQueue','缺少必要参数！','globalConfigService','@nestjs/common','__param','design:paramtypes','__esModule','GlobalConfigService','13887LqeuSt','defineProperty','__metadata','addDrawQueue','QueueService','MidjourneyActionEnum','VARY','104nzIIkD','user','length','metadata','14YsdAei','mjDraw','REGENERATE','10726173JBSTiN','addMjDrawQueue','midjourneyService','getOwnPropertyDescriptor','MJDRAW','decorate','cleanQueue','../../common/constants/midjourney.constant','MidjourneyService','mjTimeoutMs','BAD_REQUEST','6739424WzOFkm','466AGdGCY','InjectQueue','deductFromBalance','getDrawActionDetail','assign','clean','getQueue','userBalanceService','4495BAMlYx','push','12ZQAjMl','VARIATION','DRAW'];_0x1331=function(){return _0x522def;};return _0x1331();}QueueService=__decorate([__param(0x0,(0x0,bull_1[_0xd20581(0xf5)])(_0xd20581(0xec))),__metadata(_0xd20581(0xd7),[Object,midjourney_service_1[_0xd20581(0xf0)],userBalance_service_1[_0xd20581(0xcd)],globalConfig_service_1[_0xd20581(0xd9)]])],QueueService),exports[_0xd20581(0xde)]=QueueService;