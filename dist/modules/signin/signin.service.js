'use strict';function _0x5136(){const _0x29c5a1=['getSignatureGiftConfig','typeorm','获取签到数据失败！','createQueryBuilder','今日已签到、改天再来吧!.','7469820MBCBlk','findOne','1312318BDckOk','YYYY-MM-DD','userBalanceService','getOwnPropertyDescriptor','startOf','design:paramtypes','30EvvedJ','andWhere','signinEntity','signin.signInTime\x20<=\x20:lastDay','./../userBalance/userBalance.service','push','length','SigninEntity','user','Logger','select','88uwDdbj','__esModule','function','default','176wGRzWq','用户不存在','InjectRepository','SIGN_IN','../../common/constants/balance.constant','isSigned','subtract','5NptfrC','signin','save','day','log','setDate','11335284UQSvPA','month','getRawMany','defineProperty','HttpException','BAD_REQUEST','debug','Repository','Sign\x20in\x20successful.','RechargeType','__param','./../globalConfig/globalConfig.service','8iQVLrW','endOf','HttpStatus','610202uBpMYx','update','decorate','signInDate','@nestjs/common','object','signin.signInTime\x20>=\x20:firstDay','UserBalanceService','昨天没签到、今天重置天数！','165795YUGXQY','YYYY-MM-DD\x20HH:mm:ss','Injectable','SigninService','UserEntity','metadata','addBalanceToUser','__metadata','4310480YCtyCv','format','昨天签到了、今天是连续签到！','userEntity','signin.userId\x20=\x20:userId','error:\x20','135288KUqeJf'];_0x5136=function(){return _0x29c5a1;};return _0x5136();}const _0xabe5bb=_0x4367;(function(_0x482fdd,_0x8013f4){const _0x11efd6=_0x4367,_0x2f8c67=_0x482fdd();while(!![]){try{const _0x4e12db=parseInt(_0x11efd6(0xcc))/0x1*(-parseInt(_0x11efd6(0xe1))/0x2)+parseInt(_0x11efd6(0xea))/0x3*(parseInt(_0x11efd6(0x111))/0x4)+parseInt(_0x11efd6(0xfe))/0x5+parseInt(_0x11efd6(0x106))/0x6*(-parseInt(_0x11efd6(0x100))/0x7)+parseInt(_0x11efd6(0xde))/0x8*(parseInt(_0x11efd6(0xd2))/0x9)+-parseInt(_0x11efd6(0xf2))/0xa+-parseInt(_0x11efd6(0xc5))/0xb*(parseInt(_0x11efd6(0xf8))/0xc);if(_0x4e12db===_0x8013f4)break;else _0x2f8c67['push'](_0x2f8c67['shift']());}catch(_0x35b4b1){_0x2f8c67['push'](_0x2f8c67['shift']());}}}(_0x5136,0xda7f3));var __decorate=this&&this['__decorate']||function(_0x46356a,_0x4cfcbe,_0x4f4753,_0xac8263){const _0x4db349=_0x4367;var _0x52b577=arguments[_0x4db349(0x10c)],_0x519c20=_0x52b577<0x3?_0x4cfcbe:_0xac8263===null?_0xac8263=Object[_0x4db349(0x103)](_0x4cfcbe,_0x4f4753):_0xac8263,_0x5e9652;if(typeof Reflect===_0x4db349(0xe6)&&typeof Reflect[_0x4db349(0xe3)]===_0x4db349(0x113))_0x519c20=Reflect[_0x4db349(0xe3)](_0x46356a,_0x4cfcbe,_0x4f4753,_0xac8263);else{for(var _0x420643=_0x46356a[_0x4db349(0x10c)]-0x1;_0x420643>=0x0;_0x420643--)if(_0x5e9652=_0x46356a[_0x420643])_0x519c20=(_0x52b577<0x3?_0x5e9652(_0x519c20):_0x52b577>0x3?_0x5e9652(_0x4cfcbe,_0x4f4753,_0x519c20):_0x5e9652(_0x4cfcbe,_0x4f4753))||_0x519c20;}return _0x52b577>0x3&&_0x519c20&&Object[_0x4db349(0xd5)](_0x4cfcbe,_0x4f4753,_0x519c20),_0x519c20;},__metadata=this&&this[_0xabe5bb(0xf1)]||function(_0x5eb72e,_0x6cc02d){const _0x30c360=_0xabe5bb;if(typeof Reflect===_0x30c360(0xe6)&&typeof Reflect[_0x30c360(0xef)]===_0x30c360(0x113))return Reflect[_0x30c360(0xef)](_0x5eb72e,_0x6cc02d);},__param=this&&this[_0xabe5bb(0xdc)]||function(_0x2b84e8,_0x4f93c8){return function(_0x380eef,_0x35d69c){_0x4f93c8(_0x380eef,_0x35d69c,_0x2b84e8);};};Object[_0xabe5bb(0xd5)](exports,_0xabe5bb(0x112),{'value':!![]}),exports['SigninService']=void 0x0;const globalConfig_service_1=require(_0xabe5bb(0xdd)),userBalance_service_1=require(_0xabe5bb(0x10a)),common_1=require(_0xabe5bb(0xe5)),signIn_entity_1=require('./signIn.entity'),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require(_0xabe5bb(0xfa)),date_1=require('../../common/utils/date'),user_entity_1=require('../user/user.entity'),balance_constant_1=require(_0xabe5bb(0xc9));let SigninService=class SigninService{constructor(_0xc25f52,_0x1098f9,_0x5ca127,_0x266d65){const _0x53d342=_0xabe5bb;this[_0x53d342(0x108)]=_0xc25f52,this[_0x53d342(0xf5)]=_0x1098f9,this[_0x53d342(0x102)]=_0x5ca127,this['globalConfigService']=_0x266d65;}async['sign'](_0x5c102b){const _0x3a610e=_0xabe5bb,{id:_0x114a05}=_0x5c102b[_0x3a610e(0x10e)],_0x5cb8b8=(0x0,date_1[_0x3a610e(0x114)])(new Date())[_0x3a610e(0xf3)](_0x3a610e(0x101)),_0x5ce12a=await this[_0x3a610e(0x108)]['findOne']({'where':{'userId':_0x114a05,'signInDate':_0x5cb8b8}});if(_0x5ce12a)throw new common_1[(_0x3a610e(0xd6))](_0x3a610e(0xfd),common_1['HttpStatus'][_0x3a610e(0xd7)]);const {model3Count:_0x1ac814,model4Count:_0x2ffa47,drawMjCount:_0x50e923}=await this['globalConfigService'][_0x3a610e(0xf9)]();await this[_0x3a610e(0x108)][_0x3a610e(0xce)]({'userId':_0x114a05,'signInTime':new Date(),'signInDate':_0x5cb8b8,'isSigned':!![]}),await this[_0x3a610e(0x102)][_0x3a610e(0xf0)](_0x114a05,{'model3Count':_0x1ac814,'model4Count':_0x2ffa47,'drawMjCount':_0x50e923}),await this[_0x3a610e(0x102)]['saveRecordRechargeLog']({'userId':_0x114a05,'rechargeType':balance_constant_1[_0x3a610e(0xdb)][_0x3a610e(0xc8)],'model3Count':_0x1ac814,'model4Count':_0x2ffa47,'drawMjCount':_0x50e923});const _0x584caf=(0x0,date_1[_0x3a610e(0x114)])(new Date())[_0x3a610e(0xcb)](0x1,_0x3a610e(0xcf))['format'](_0x3a610e(0x101)),_0xf2d686=await this[_0x3a610e(0x108)][_0x3a610e(0xff)]({'where':{'userId':_0x114a05,'signInDate':_0x584caf}});if(_0xf2d686){common_1[_0x3a610e(0x10f)][_0x3a610e(0xd8)]('用户'+_0x114a05+_0x3a610e(0xf4),_0x3a610e(0xed));const _0x4b472d=await this[_0x3a610e(0xf5)][_0x3a610e(0xff)]({'where':{'id':_0x114a05}});if(!_0x4b472d)throw new common_1[(_0x3a610e(0xd6))](_0x3a610e(0xc6),common_1[_0x3a610e(0xe0)][_0x3a610e(0xd7)]);const {consecutiveDays:consecutiveDays=0x0}=_0x4b472d;await this['userEntity'][_0x3a610e(0xe2)]({'id':_0x114a05},{'consecutiveDays':consecutiveDays+0x1});}else common_1[_0x3a610e(0x10f)][_0x3a610e(0xd8)]('用户'+_0x114a05+_0x3a610e(0xe9),'SigninService'),await this[_0x3a610e(0xf5)]['update']({'id':_0x114a05},{'consecutiveDays':0x1});return _0x3a610e(0xda);}async['getSigninLog'](_0x587448){const _0x3a1eae=_0xabe5bb;try{const {id:_0x40b912}=_0x587448[_0x3a1eae(0x10e)],_0x3c0bf9=(0x0,date_1[_0x3a1eae(0x114)])()[_0x3a1eae(0x104)](_0x3a1eae(0xd3))['format'](_0x3a1eae(0xeb)),_0xe487cf=(0x0,date_1[_0x3a1eae(0x114)])()[_0x3a1eae(0xdf)]('month')[_0x3a1eae(0xf3)](_0x3a1eae(0xeb)),_0x7c57df=this[_0x3a1eae(0x108)][_0x3a1eae(0xfc)](_0x3a1eae(0xcd)),_0x571e9f=await _0x7c57df[_0x3a1eae(0x110)]('signin.signInDate\x20as\x20signInDate,\x20signin.isSigned\x20as\x20isSigned')[_0x3a1eae(0x107)](_0x3a1eae(0xf6),{'userId':_0x587448['user']['id']})[_0x3a1eae(0x107)](_0x3a1eae(0xe7),{'firstDay':_0x3c0bf9})[_0x3a1eae(0x107)](_0x3a1eae(0x109),{'lastDay':_0xe487cf})[_0x3a1eae(0xd4)](),_0x331be2=new Date(_0x3c0bf9),_0x54e5fb=new Date(_0xe487cf),_0x5cdab3=[],_0x845101=new Date(_0x331be2);while(_0x845101<=_0x54e5fb){_0x5cdab3['push']((0x0,date_1[_0x3a1eae(0x114)])(new Date(_0x845101))['format']('YYYY-MM-DD')),_0x845101[_0x3a1eae(0xd1)](_0x845101['getDate']()+0x1);}const _0x19cb94=[];for(const _0x3404c2 of _0x5cdab3){const _0x3701c2=_0x571e9f['find'](_0x1012a8=>_0x1012a8[_0x3a1eae(0xe4)]===_0x3404c2);!_0x3701c2?_0x19cb94[_0x3a1eae(0x10b)]({'signInDate':_0x3404c2,'isSigned':![]}):(_0x3701c2[_0x3a1eae(0xca)]=!![],_0x19cb94['push'](_0x3701c2));}return _0x19cb94;}catch(_0x5900e0){console[_0x3a1eae(0xd0)](_0x3a1eae(0xf7),_0x5900e0);throw new common_1[(_0x3a1eae(0xd6))](_0x3a1eae(0xfb),common_1[_0x3a1eae(0xe0)][_0x3a1eae(0xd7)]);}}};function _0x4367(_0x336e35,_0x28910d){const _0x5136ce=_0x5136();return _0x4367=function(_0x4367e3,_0x550818){_0x4367e3=_0x4367e3-0xc5;let _0x2304a0=_0x5136ce[_0x4367e3];return _0x2304a0;},_0x4367(_0x336e35,_0x28910d);}SigninService=__decorate([(0x0,common_1[_0xabe5bb(0xec)])(),__param(0x0,(0x0,typeorm_1[_0xabe5bb(0xc7)])(signIn_entity_1[_0xabe5bb(0x10d)])),__param(0x1,(0x0,typeorm_1['InjectRepository'])(user_entity_1[_0xabe5bb(0xee)])),__metadata(_0xabe5bb(0x105),[typeorm_2[_0xabe5bb(0xd9)],typeorm_2[_0xabe5bb(0xd9)],userBalance_service_1[_0xabe5bb(0xe8)],globalConfig_service_1['GlobalConfigService']])],SigninService),exports[_0xabe5bb(0xed)]=SigninService;