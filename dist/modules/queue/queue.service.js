'use strict';const _0x1beb24=_0x2d8a;(function(_0x58b425,_0x344e6f){const _0xbd7805=_0x2d8a,_0x599314=_0x58b425();while(!![]){try{const _0x11be24=parseInt(_0xbd7805(0xc3))/0x1+-parseInt(_0xbd7805(0xa4))/0x2+parseInt(_0xbd7805(0x9a))/0x3+parseInt(_0xbd7805(0xa9))/0x4*(parseInt(_0xbd7805(0xb7))/0x5)+-parseInt(_0xbd7805(0xa8))/0x6*(parseInt(_0xbd7805(0xa7))/0x7)+parseInt(_0xbd7805(0xc0))/0x8+parseInt(_0xbd7805(0xb6))/0x9*(-parseInt(_0xbd7805(0xb8))/0xa);if(_0x11be24===_0x344e6f)break;else _0x599314['push'](_0x599314['shift']());}catch(_0x5cf79e){_0x599314['push'](_0x599314['shift']());}}}(_0x4512,0xa2914));function _0x2d8a(_0x247574,_0x4b1f62){const _0x45129c=_0x4512();return _0x2d8a=function(_0x2d8a5f,_0x135aec){_0x2d8a5f=_0x2d8a5f-0x98;let _0x5148c6=_0x45129c[_0x2d8a5f];return _0x5148c6;},_0x2d8a(_0x247574,_0x4b1f62);}function _0x4512(){const _0x26bbda=['MJDRAW','UserBalanceService','GENERATE','__param','getConfigs','1902298WlPJEq','@nestjs/bull','midjourneyService','1338785gkboNS','18mkiPVe','4LZpMFM','InjectQueue','onApplicationBootstrap','mjTimeoutMs','assign','addDrawQueue','../../common/constants/midjourney.constant','add','缺少必要参数！','metadata','__esModule','clean','getQueue','1242036aUHvtI','6502785ccCQzl','60PDeClv','HttpException','getDrawActionDetail','checkLimit','../globalConfig/globalConfig.service','BAD_REQUEST','VARIATION','deductFromBalance','200504WmMEtz','HttpStatus','user','853300saodal','mjDraw','__metadata','object','QueueService','MidjourneyService','GlobalConfigService','checkIsUpscale','MidjourneyActionEnum','addMjDrawQueue','push','jobIds','function','userBalanceService','DRAW','../../common/utils','../midjourney/midjourney.service','mjDrawQueue','VARY','2519682xArOTW','defineProperty','decorate','globalConfigService','getOwnPropertyDescriptor'];_0x4512=function(){return _0x26bbda;};return _0x4512();}var __decorate=this&&this['__decorate']||function(_0x466bd5,_0x4d838e,_0x3b5c04,_0x2d6148){const _0x5331db=_0x2d8a;var _0x28fc3e=arguments['length'],_0x3e9c52=_0x28fc3e<0x3?_0x4d838e:_0x2d6148===null?_0x2d6148=Object[_0x5331db(0x9e)](_0x4d838e,_0x3b5c04):_0x2d6148,_0x459bdc;if(typeof Reflect===_0x5331db(0xc6)&&typeof Reflect['decorate']===_0x5331db(0xcf))_0x3e9c52=Reflect[_0x5331db(0x9c)](_0x466bd5,_0x4d838e,_0x3b5c04,_0x2d6148);else{for(var _0x39aa6e=_0x466bd5['length']-0x1;_0x39aa6e>=0x0;_0x39aa6e--)if(_0x459bdc=_0x466bd5[_0x39aa6e])_0x3e9c52=(_0x28fc3e<0x3?_0x459bdc(_0x3e9c52):_0x28fc3e>0x3?_0x459bdc(_0x4d838e,_0x3b5c04,_0x3e9c52):_0x459bdc(_0x4d838e,_0x3b5c04))||_0x3e9c52;}return _0x28fc3e>0x3&&_0x3e9c52&&Object[_0x5331db(0x9b)](_0x4d838e,_0x3b5c04,_0x3e9c52),_0x3e9c52;},__metadata=this&&this[_0x1beb24(0xc5)]||function(_0x4f278e,_0x398c18){const _0x67a2fd=_0x1beb24;if(typeof Reflect===_0x67a2fd(0xc6)&&typeof Reflect[_0x67a2fd(0xb2)]===_0x67a2fd(0xcf))return Reflect[_0x67a2fd(0xb2)](_0x4f278e,_0x398c18);},__param=this&&this[_0x1beb24(0xa2)]||function(_0x41bc75,_0xf453e2){return function(_0x2f4c10,_0x38eabc){_0xf453e2(_0x2f4c10,_0x38eabc,_0x41bc75);};};Object[_0x1beb24(0x9b)](exports,_0x1beb24(0xb3),{'value':!![]}),exports['QueueService']=void 0x0;const common_1=require('@nestjs/common'),bull_1=require(_0x1beb24(0xa5)),utils_1=require(_0x1beb24(0xd2)),midjourney_service_1=require(_0x1beb24(0xd3)),midjourney_constant_1=require(_0x1beb24(0xaf)),userBalance_service_1=require('../userBalance/userBalance.service'),globalConfig_service_1=require(_0x1beb24(0xbc));let QueueService=class QueueService{constructor(_0x206699,_0x480bfd,_0x36d32d,_0x243794){const _0x5d9729=_0x1beb24;this[_0x5d9729(0x98)]=_0x206699,this[_0x5d9729(0xa6)]=_0x480bfd,this['userBalanceService']=_0x36d32d,this[_0x5d9729(0x9d)]=_0x243794,this[_0x5d9729(0xce)]=[];}async[_0x1beb24(0xab)](){const _0x22c520=_0x1beb24;await this['mjDrawQueue'][_0x22c520(0xb4)](0x0,'active'),await this[_0x22c520(0xa6)]['cleanQueue']();}async[_0x1beb24(0xcc)](_0x14b5bf,_0x36260f){const _0x190bc2=_0x1beb24,{prompt:_0x191a29,imgUrl:_0x129a80,extraParam:_0x3cb9e1,orderId:_0x130b85,action:action=0x1,drawId:_0x19c318}=_0x14b5bf;await this[_0x190bc2(0xa6)][_0x190bc2(0xbb)](_0x36260f),await this[_0x190bc2(0xd0)]['validateBalance'](_0x36260f,_0x190bc2(0xc4),action===0x2?0x1:0x4);if(action===midjourney_constant_1[_0x190bc2(0xcb)][_0x190bc2(0xd1)]||action===midjourney_constant_1[_0x190bc2(0xcb)][_0x190bc2(0xa1)]){const _0x393841=''+(0x0,utils_1['createRandomUid'])(),_0x206a22=Object[_0x190bc2(0xad)](Object['assign']({},_0x14b5bf),{'userId':_0x36260f['user']['id'],'randomDrawId':_0x393841}),_0x381b83=await this['midjourneyService']['addDrawQueue'](_0x206a22),_0x1019b8=await this[_0x190bc2(0x9d)][_0x190bc2(0xa3)](['mjTimeoutMs'])||0x30d40,_0x5eda40=await this['mjDrawQueue']['add']('mjDraw',{'id':_0x381b83['id'],'action':_0x129a80?0x4:0x1,'userId':_0x36260f[_0x190bc2(0xc2)]['id']},{'delay':0x3e8,'timeout':+_0x1019b8});return this[_0x190bc2(0xce)][_0x190bc2(0xcd)](_0x5eda40['id']),await this[_0x190bc2(0xd0)][_0x190bc2(0xbf)](_0x36260f['user']['id'],'mjDraw',0x4,0x4),!![];}if(!_0x19c318||!_0x130b85)throw new common_1[(_0x190bc2(0xb9))](_0x190bc2(0xb1),common_1[_0x190bc2(0xc1)][_0x190bc2(0xbd)]);if(action===midjourney_constant_1[_0x190bc2(0xcb)]['UPSCALE']){const _0x57a6d7=await this[_0x190bc2(0xa6)][_0x190bc2(0xba)](action,_0x19c318,_0x130b85),{custom_id:_0x4e4760}=_0x57a6d7;await this[_0x190bc2(0xa6)][_0x190bc2(0xca)](_0x4e4760);const _0x5ea39e=Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)]({},_0x14b5bf),{'userId':_0x36260f[_0x190bc2(0xc2)]['id']}),_0x57a6d7),_0x5033c9=await this[_0x190bc2(0xa6)][_0x190bc2(0xae)](_0x5ea39e),_0x57e5ff=await this[_0x190bc2(0x9d)]['getConfigs']([_0x190bc2(0xac)])||0x30d40,_0x5c851b=await this['mjDrawQueue'][_0x190bc2(0xb0)](_0x190bc2(0xc4),{'id':_0x5033c9['id'],'action':action,'userId':_0x36260f[_0x190bc2(0xc2)]['id']},{'delay':0x3e8,'timeout':+_0x57e5ff});await this[_0x190bc2(0xd0)]['deductFromBalance'](_0x36260f['user']['id'],_0x190bc2(0xc4),0x1,0x1),this[_0x190bc2(0xce)]['push'](_0x5c851b['id']);return;}if(action===midjourney_constant_1[_0x190bc2(0xcb)][_0x190bc2(0xbe)]){const _0x330bdc=await this[_0x190bc2(0xa6)][_0x190bc2(0xba)](action,_0x19c318,_0x130b85),_0x118a6f=Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)]({},_0x14b5bf),{'userId':_0x36260f[_0x190bc2(0xc2)]['id']}),_0x330bdc),_0x37307d=await this[_0x190bc2(0xa6)][_0x190bc2(0xae)](_0x118a6f),_0x6f2a0e=await this[_0x190bc2(0x9d)][_0x190bc2(0xa3)]([_0x190bc2(0xac)])||0x30d40,_0x1a03cd=await this[_0x190bc2(0x98)][_0x190bc2(0xb0)](_0x190bc2(0xc4),{'id':_0x37307d['id'],'action':action,'userId':_0x36260f[_0x190bc2(0xc2)]['id']},{'delay':0x3e8,'timeout':+_0x6f2a0e});this[_0x190bc2(0xce)][_0x190bc2(0xcd)](_0x1a03cd['id']),await this[_0x190bc2(0xd0)]['deductFromBalance'](_0x36260f[_0x190bc2(0xc2)]['id'],'mjDraw',0x4,0x4);return;}if(action===midjourney_constant_1[_0x190bc2(0xcb)]['REGENERATE']){const _0x1d2277=await this[_0x190bc2(0xa6)][_0x190bc2(0xba)](action,_0x19c318,_0x130b85),_0x5396cc=Object['assign'](Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)]({},_0x14b5bf),{'userId':_0x36260f[_0x190bc2(0xc2)]['id']}),_0x1d2277),_0xfcdcf8=await this[_0x190bc2(0xa6)]['addDrawQueue'](_0x5396cc),_0x54e20d=await this[_0x190bc2(0x9d)][_0x190bc2(0xa3)](['mjTimeoutMs'])||0x30d40,_0x4d3692=await this[_0x190bc2(0x98)]['add'](_0x190bc2(0xc4),{'id':_0xfcdcf8['id'],'action':action,'userId':_0x36260f[_0x190bc2(0xc2)]['id']},{'delay':0x3e8,'timeout':+_0x54e20d});this[_0x190bc2(0xce)][_0x190bc2(0xcd)](_0x4d3692['id']),await this[_0x190bc2(0xd0)][_0x190bc2(0xbf)](_0x36260f[_0x190bc2(0xc2)]['id'],_0x190bc2(0xc4),0x4,0x4);return;}if(action===midjourney_constant_1[_0x190bc2(0xcb)][_0x190bc2(0x99)]){const _0x1854ea=await this[_0x190bc2(0xa6)][_0x190bc2(0xba)](action,_0x19c318,_0x130b85),_0x418d9f=Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)]({},_0x14b5bf),{'userId':_0x36260f['user']['id']}),_0x1854ea),_0x4a81dd=await this['midjourneyService']['addDrawQueue'](_0x418d9f),_0x331d4f=await this[_0x190bc2(0x9d)][_0x190bc2(0xa3)]([_0x190bc2(0xac)])||0x30d40,_0x1ef3be=await this[_0x190bc2(0x98)][_0x190bc2(0xb0)](_0x190bc2(0xc4),{'id':_0x4a81dd['id'],'action':action,'userId':_0x36260f[_0x190bc2(0xc2)]['id']},{'delay':0x3e8,'timeout':+_0x331d4f});this[_0x190bc2(0xce)]['push'](_0x1ef3be['id']),await this[_0x190bc2(0xd0)][_0x190bc2(0xbf)](_0x36260f['user']['id'],_0x190bc2(0xc4),0x4,0x4);return;}if(action===midjourney_constant_1[_0x190bc2(0xcb)]['ZOOM']){const _0x4fb9e0=await this[_0x190bc2(0xa6)][_0x190bc2(0xba)](action,_0x19c318,_0x130b85),_0x1a0a74=Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)](Object[_0x190bc2(0xad)]({},_0x14b5bf),{'userId':_0x36260f[_0x190bc2(0xc2)]['id']}),_0x4fb9e0),_0x3a918e=await this[_0x190bc2(0xa6)]['addDrawQueue'](_0x1a0a74),_0x58b925=await this['globalConfigService']['getConfigs']([_0x190bc2(0xac)])||0x30d40,_0x51f71f=await this[_0x190bc2(0x98)][_0x190bc2(0xb0)](_0x190bc2(0xc4),{'id':_0x3a918e['id'],'action':action,'userId':_0x36260f[_0x190bc2(0xc2)]['id']},{'delay':0x3e8,'timeout':+_0x58b925});this['jobIds'][_0x190bc2(0xcd)](_0x51f71f['id']),await this[_0x190bc2(0xd0)]['deductFromBalance'](_0x36260f[_0x190bc2(0xc2)]['id'],_0x190bc2(0xc4),0x4,0x4);return;}}async[_0x1beb24(0xb5)](){const _0x50f21d=_0x1beb24;return{'jobIds':this[_0x50f21d(0xce)]};}};QueueService=__decorate([__param(0x0,(0x0,bull_1[_0x1beb24(0xaa)])(_0x1beb24(0x9f))),__metadata('design:paramtypes',[Object,midjourney_service_1[_0x1beb24(0xc8)],userBalance_service_1[_0x1beb24(0xa0)],globalConfig_service_1[_0x1beb24(0xc9)]])],QueueService),exports[_0x1beb24(0xc7)]=QueueService;