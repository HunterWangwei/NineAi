'use strict';const _0x52524a=_0x152d;function _0x152d(_0x410101,_0xe704d0){const _0x50b836=_0x50b8();return _0x152d=function(_0x152dd8,_0x540105){_0x152dd8=_0x152dd8-0x15e;let _0x2aba2e=_0x50b836[_0x152dd8];return _0x2aba2e;},_0x152d(_0x410101,_0xe704d0);}(function(_0x13e3f2,_0x12d137){const _0x35005c=_0x152d,_0x2eee07=_0x13e3f2();while(!![]){try{const _0x4f7a2d=-parseInt(_0x35005c(0x18e))/0x1+parseInt(_0x35005c(0x165))/0x2+parseInt(_0x35005c(0x1ab))/0x3+-parseInt(_0x35005c(0x170))/0x4+-parseInt(_0x35005c(0x168))/0x5*(parseInt(_0x35005c(0x19d))/0x6)+parseInt(_0x35005c(0x180))/0x7*(-parseInt(_0x35005c(0x16c))/0x8)+-parseInt(_0x35005c(0x199))/0x9*(-parseInt(_0x35005c(0x16d))/0xa);if(_0x4f7a2d===_0x12d137)break;else _0x2eee07['push'](_0x2eee07['shift']());}catch(_0xeebf58){_0x2eee07['push'](_0x2eee07['shift']());}}}(_0x50b8,0x603c0));function _0x50b8(){const _0x4eeb6d=['昨天没签到、今天重置天数！','GlobalConfigService','save','find','Sign\x20in\x20successful.','userBalanceService','./../userBalance/userBalance.service','1399692iIWPGT','globalConfigService','YYYY-MM-DD\x20HH:mm:ss','month','error:\x20','log','signin.signInTime\x20<=\x20:lastDay','defineProperty','push','__esModule','用户不存在','244840yqJWEr','format','HttpStatus','5RCNjXy','update','length','user','739688eLGHkT','1466090AknkTO','decorate','isSigned','1167556LZwgMP','subtract','saveRecordRechargeLog','RechargeType','metadata','__metadata','./signIn.entity','YYYY-MM-DD','__decorate','InjectRepository','getOwnPropertyDescriptor','@nestjs/common','../../common/constants/balance.constant','startOf','SigninEntity','getDate','7cDifqy','signinEntity','debug','day','typeorm','@nestjs/typeorm','endOf','../user/user.entity','setDate','findOne','userEntity','__param','HttpException','getRawMany','488580UqGnOD','default','addBalanceToUser','function','signin','design:paramtypes','sign','signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned','object','Logger','今日已签到、改天再来吧!.','45jSBLlD','SigninService','getSignatureGiftConfig','signin.userId\x20=\x20:userId','329538VYktpD','createQueryBuilder','BAD_REQUEST','signInDate','signin.signInTime\x20>=\x20:firstDay','../../common/utils/date','andWhere'];_0x50b8=function(){return _0x4eeb6d;};return _0x50b8();}var __decorate=this&&this[_0x52524a(0x178)]||function(_0x598003,_0x4c7903,_0x3a6c93,_0x5d8fb6){const _0x46239e=_0x52524a;var _0x45f040=arguments[_0x46239e(0x16a)],_0x278649=_0x45f040<0x3?_0x4c7903:_0x5d8fb6===null?_0x5d8fb6=Object[_0x46239e(0x17a)](_0x4c7903,_0x3a6c93):_0x5d8fb6,_0x113e88;if(typeof Reflect==='object'&&typeof Reflect[_0x46239e(0x16e)]===_0x46239e(0x191))_0x278649=Reflect[_0x46239e(0x16e)](_0x598003,_0x4c7903,_0x3a6c93,_0x5d8fb6);else{for(var _0x1edbd0=_0x598003[_0x46239e(0x16a)]-0x1;_0x1edbd0>=0x0;_0x1edbd0--)if(_0x113e88=_0x598003[_0x1edbd0])_0x278649=(_0x45f040<0x3?_0x113e88(_0x278649):_0x45f040>0x3?_0x113e88(_0x4c7903,_0x3a6c93,_0x278649):_0x113e88(_0x4c7903,_0x3a6c93))||_0x278649;}return _0x45f040>0x3&&_0x278649&&Object[_0x46239e(0x161)](_0x4c7903,_0x3a6c93,_0x278649),_0x278649;},__metadata=this&&this[_0x52524a(0x175)]||function(_0x286725,_0x35e1cc){const _0x2f77f0=_0x52524a;if(typeof Reflect===_0x2f77f0(0x196)&&typeof Reflect['metadata']===_0x2f77f0(0x191))return Reflect[_0x2f77f0(0x174)](_0x286725,_0x35e1cc);},__param=this&&this[_0x52524a(0x18b)]||function(_0xb89a23,_0x4d77de){return function(_0x4fc819,_0x529760){_0x4d77de(_0x4fc819,_0x529760,_0xb89a23);};};Object[_0x52524a(0x161)](exports,_0x52524a(0x163),{'value':!![]}),exports[_0x52524a(0x19a)]=void 0x0;const globalConfig_service_1=require('./../globalConfig/globalConfig.service'),userBalance_service_1=require(_0x52524a(0x1aa)),common_1=require(_0x52524a(0x17b)),signIn_entity_1=require(_0x52524a(0x176)),typeorm_1=require(_0x52524a(0x185)),typeorm_2=require(_0x52524a(0x184)),date_1=require(_0x52524a(0x1a2)),user_entity_1=require(_0x52524a(0x187)),balance_constant_1=require(_0x52524a(0x17c));let SigninService=class SigninService{constructor(_0x4c8c46,_0x33016d,_0x528cb0,_0x4ccdd5){const _0x2154ae=_0x52524a;this[_0x2154ae(0x181)]=_0x4c8c46,this['userEntity']=_0x33016d,this[_0x2154ae(0x1a9)]=_0x528cb0,this[_0x2154ae(0x1ac)]=_0x4ccdd5;}async[_0x52524a(0x194)](_0x2300b3){const _0x54149d=_0x52524a,{id:_0x4cde39}=_0x2300b3['user'],_0x4053c3=(0x0,date_1[_0x54149d(0x18f)])(new Date())[_0x54149d(0x166)](_0x54149d(0x177)),_0x3eff82=await this[_0x54149d(0x181)][_0x54149d(0x189)]({'where':{'userId':_0x4cde39,'signInDate':_0x4053c3}});if(_0x3eff82)throw new common_1[(_0x54149d(0x18c))](_0x54149d(0x198),common_1[_0x54149d(0x167)]['BAD_REQUEST']);const {model3Count:_0x168836,model4Count:_0x4890ad,drawMjCount:_0x1b54e0}=await this[_0x54149d(0x1ac)][_0x54149d(0x19b)]();await this['signinEntity'][_0x54149d(0x1a6)]({'userId':_0x4cde39,'signInTime':new Date(),'signInDate':_0x4053c3,'isSigned':!![]}),await this[_0x54149d(0x1a9)][_0x54149d(0x190)](_0x4cde39,{'model3Count':_0x168836,'model4Count':_0x4890ad,'drawMjCount':_0x1b54e0}),await this['userBalanceService'][_0x54149d(0x172)]({'userId':_0x4cde39,'rechargeType':balance_constant_1[_0x54149d(0x173)]['SIGN_IN'],'model3Count':_0x168836,'model4Count':_0x4890ad,'drawMjCount':_0x1b54e0});const _0x5772a1=(0x0,date_1[_0x54149d(0x18f)])(new Date())[_0x54149d(0x171)](0x1,_0x54149d(0x183))[_0x54149d(0x166)](_0x54149d(0x177)),_0x438f53=await this[_0x54149d(0x181)][_0x54149d(0x189)]({'where':{'userId':_0x4cde39,'signInDate':_0x5772a1}});if(_0x438f53){common_1[_0x54149d(0x197)][_0x54149d(0x182)]('用户'+_0x4cde39+'昨天签到了、今天是连续签到！',_0x54149d(0x19a));const _0x3aa03d=await this[_0x54149d(0x18a)][_0x54149d(0x189)]({'where':{'id':_0x4cde39}});if(!_0x3aa03d)throw new common_1[(_0x54149d(0x18c))](_0x54149d(0x164),common_1[_0x54149d(0x167)][_0x54149d(0x19f)]);const {consecutiveDays:consecutiveDays=0x0}=_0x3aa03d;await this[_0x54149d(0x18a)]['update']({'id':_0x4cde39},{'consecutiveDays':consecutiveDays+0x1});}else common_1['Logger']['debug']('用户'+_0x4cde39+_0x54149d(0x1a4),'SigninService'),await this[_0x54149d(0x18a)][_0x54149d(0x169)]({'id':_0x4cde39},{'consecutiveDays':0x1});return _0x54149d(0x1a8);}async['getSigninLog'](_0x2ae04f){const _0x2c461f=_0x52524a;try{const {id:_0xeb318a}=_0x2ae04f[_0x2c461f(0x16b)],_0x226b4b=(0x0,date_1[_0x2c461f(0x18f)])()[_0x2c461f(0x17d)]('month')['format'](_0x2c461f(0x1ad)),_0x39c688=(0x0,date_1[_0x2c461f(0x18f)])()[_0x2c461f(0x186)](_0x2c461f(0x1ae))[_0x2c461f(0x166)](_0x2c461f(0x1ad)),_0x37d61c=this[_0x2c461f(0x181)][_0x2c461f(0x19e)](_0x2c461f(0x192)),_0xb5e601=await _0x37d61c['select'](_0x2c461f(0x195))[_0x2c461f(0x1a3)](_0x2c461f(0x19c),{'userId':_0x2ae04f[_0x2c461f(0x16b)]['id']})[_0x2c461f(0x1a3)](_0x2c461f(0x1a1),{'firstDay':_0x226b4b})[_0x2c461f(0x1a3)](_0x2c461f(0x160),{'lastDay':_0x39c688})[_0x2c461f(0x18d)](),_0x44e439=new Date(_0x226b4b),_0x2d3ecc=new Date(_0x39c688),_0x43dd66=[],_0x3e2547=new Date(_0x44e439);while(_0x3e2547<=_0x2d3ecc){_0x43dd66[_0x2c461f(0x162)]((0x0,date_1[_0x2c461f(0x18f)])(new Date(_0x3e2547))[_0x2c461f(0x166)](_0x2c461f(0x177))),_0x3e2547[_0x2c461f(0x188)](_0x3e2547[_0x2c461f(0x17f)]()+0x1);}const _0x5210a4=[];for(const _0x568fd4 of _0x43dd66){const _0x5e4b36=_0xb5e601[_0x2c461f(0x1a7)](_0x23c5a6=>_0x23c5a6[_0x2c461f(0x1a0)]===_0x568fd4);!_0x5e4b36?_0x5210a4[_0x2c461f(0x162)]({'signInDate':_0x568fd4,'isSigned':![]}):(_0x5e4b36[_0x2c461f(0x16f)]=!![],_0x5210a4[_0x2c461f(0x162)](_0x5e4b36));}return _0x5210a4;}catch(_0x4ba9b1){console[_0x2c461f(0x15f)](_0x2c461f(0x15e),_0x4ba9b1);throw new common_1[(_0x2c461f(0x18c))]('获取签到数据失败！',common_1[_0x2c461f(0x167)][_0x2c461f(0x19f)]);}}};SigninService=__decorate([(0x0,common_1['Injectable'])(),__param(0x0,(0x0,typeorm_1[_0x52524a(0x179)])(signIn_entity_1[_0x52524a(0x17e)])),__param(0x1,(0x0,typeorm_1[_0x52524a(0x179)])(user_entity_1['UserEntity'])),__metadata(_0x52524a(0x193),[typeorm_2['Repository'],typeorm_2['Repository'],userBalance_service_1['UserBalanceService'],globalConfig_service_1[_0x52524a(0x1a5)]])],SigninService),exports[_0x52524a(0x19a)]=SigninService;