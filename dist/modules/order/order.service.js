'use strict';const _0x2e78bd=_0x5639;function _0x2475(){const _0x2e2481=['save','queryPayType','map','function','status','findOne','314560mgNgUn','cramiPackageEntity','orderId','__esModule','587672NnJKmg','length','assign','PayService','orderEntity','userEntity','../pay/pay.service','where','globalConfigService','metadata','email','findAndCount','delete','payService','套餐不存在!','coverImg','pay','userId','des','name','订单不存在!','Injectable','711LTODgv','450adfSxx','username','__param','../../common/utils','find','design:paramtypes','OrderService','goodsId','buy','payPlatform','14jZEhRX','object','__decorate','message','price','count','285028qBqZfz','请先注册账号后购买商品！','CramiPackageEntity','BAD_REQUEST','queryAllOrder','log','UNAUTHORIZED','13670SRNOzg','./order.entity','SUM(order.price)','__metadata','createOrderId','Repository','deleteOrder','create','channel','254960yjcvQK','order.status\x20=\x20:status','user','deleteNotPay','InjectRepository','HttpStatus','UserEntity','defineProperty','DESC','../globalConfig/globalConfig.service','1540IkdpPi','905646mpokKx','queryByOrderId','HttpException','decorate'];_0x2475=function(){return _0x2e2481;};return _0x2475();}(function(_0x14b718,_0x12812e){const _0x25785a=_0x5639,_0x5e9b6d=_0x14b718();while(!![]){try{const _0xac83=-parseInt(_0x25785a(0xd1))/0x1+parseInt(_0x25785a(0xe6))/0x2+parseInt(_0x25785a(0xdc))/0x3+parseInt(_0x25785a(0xc1))/0x4+parseInt(_0x25785a(0xc8))/0x5*(-parseInt(_0x25785a(0xb1))/0x6)+-parseInt(_0x25785a(0xbb))/0x7*(-parseInt(_0x25785a(0x9a))/0x8)+parseInt(_0x25785a(0xb0))/0x9*(parseInt(_0x25785a(0xdb))/0xa);if(_0xac83===_0x12812e)break;else _0x5e9b6d['push'](_0x5e9b6d['shift']());}catch(_0x5c6d26){_0x5e9b6d['push'](_0x5e9b6d['shift']());}}}(_0x2475,0x38075));function _0x5639(_0x3cb07b,_0x5393f9){const _0x24751c=_0x2475();return _0x5639=function(_0x56395e,_0x56d96e){_0x56395e=_0x56395e-0x9a;let _0x703c44=_0x24751c[_0x56395e];return _0x703c44;},_0x5639(_0x3cb07b,_0x5393f9);}var __decorate=this&&this[_0x2e78bd(0xbd)]||function(_0x675607,_0x20777a,_0x130513,_0x1941d3){const _0x46592c=_0x2e78bd;var _0x3a06b4=arguments[_0x46592c(0x9b)],_0x291ca7=_0x3a06b4<0x3?_0x20777a:_0x1941d3===null?_0x1941d3=Object['getOwnPropertyDescriptor'](_0x20777a,_0x130513):_0x1941d3,_0x2ffdf8;if(typeof Reflect===_0x46592c(0xbc)&&typeof Reflect[_0x46592c(0xdf)]===_0x46592c(0xe3))_0x291ca7=Reflect[_0x46592c(0xdf)](_0x675607,_0x20777a,_0x130513,_0x1941d3);else{for(var _0x4f7b95=_0x675607[_0x46592c(0x9b)]-0x1;_0x4f7b95>=0x0;_0x4f7b95--)if(_0x2ffdf8=_0x675607[_0x4f7b95])_0x291ca7=(_0x3a06b4<0x3?_0x2ffdf8(_0x291ca7):_0x3a06b4>0x3?_0x2ffdf8(_0x20777a,_0x130513,_0x291ca7):_0x2ffdf8(_0x20777a,_0x130513))||_0x291ca7;}return _0x3a06b4>0x3&&_0x291ca7&&Object[_0x46592c(0xd8)](_0x20777a,_0x130513,_0x291ca7),_0x291ca7;},__metadata=this&&this[_0x2e78bd(0xcb)]||function(_0x58c841,_0x55a64f){const _0x27ab8a=_0x2e78bd;if(typeof Reflect===_0x27ab8a(0xbc)&&typeof Reflect[_0x27ab8a(0xa3)]==='function')return Reflect[_0x27ab8a(0xa3)](_0x58c841,_0x55a64f);},__param=this&&this[_0x2e78bd(0xb3)]||function(_0x2f917b,_0x1d46b9){return function(_0x27a424,_0x5312d3){_0x1d46b9(_0x27a424,_0x5312d3,_0x2f917b);};};Object[_0x2e78bd(0xd8)](exports,_0x2e78bd(0xe9),{'value':!![]}),exports[_0x2e78bd(0xb7)]=void 0x0;const user_entity_1=require('./../user/user.entity'),typeorm_1=require('@nestjs/typeorm'),common_1=require('@nestjs/common'),typeorm_2=require('typeorm'),order_entity_1=require(_0x2e78bd(0xc9)),cramiPackage_entity_1=require('../crami/cramiPackage.entity'),utils_1=require(_0x2e78bd(0xb4)),pay_service_1=require(_0x2e78bd(0xa0)),globalConfig_service_1=require(_0x2e78bd(0xda));let OrderService=class OrderService{constructor(_0x28e021,_0x145998,_0x16ecdd,_0x234814,_0x1ee55d){const _0x9eaeda=_0x2e78bd;this['orderEntity']=_0x28e021,this[_0x9eaeda(0xe7)]=_0x145998,this[_0x9eaeda(0x9f)]=_0x16ecdd,this[_0x9eaeda(0xa7)]=_0x234814,this['globalConfigService']=_0x1ee55d;}async[_0x2e78bd(0xb9)](_0x13048a,_0x1285c0){const _0x5b32f=_0x2e78bd;try{const {goodsId:_0x58ff3d,count:count=0x1,payType:_0x1ef841}=_0x13048a,{id:_0x55818b}=_0x1285c0[_0x5b32f(0xd3)];if(_0x55818b>0xf4240)throw new common_1['HttpException'](_0x5b32f(0xc2),common_1[_0x5b32f(0xd6)]['UNAUTHORIZED']);const _0x280df9=await this[_0x5b32f(0xcf)](_0x55818b,_0x58ff3d,count,_0x1ef841),_0x4c0f46=await this[_0x5b32f(0xa7)][_0x5b32f(0xaa)](_0x55818b,_0x280df9[_0x5b32f(0xe8)],_0x1ef841);return Object[_0x5b32f(0x9c)](Object[_0x5b32f(0x9c)]({},_0x4c0f46),{'orderId':_0x280df9[_0x5b32f(0xe8)],'platform':_0x280df9[_0x5b32f(0xba)],'total':Number(_0x280df9['total'])});}catch(_0x385602){if(_0x385602['status']===0x191)throw new common_1[(_0x5b32f(0xde))](_0x385602[_0x5b32f(0xbe)],common_1['HttpStatus'][_0x5b32f(0xc7)]);throw new common_1[(_0x5b32f(0xde))](_0x385602['message']||'购买失败!',common_1[_0x5b32f(0xd6)][_0x5b32f(0xc4)]);}}async[_0x2e78bd(0xdd)](_0x6f336,_0x4646db){const _0xcabf48=_0x2e78bd,{id:_0x1d5ab1}=_0x6f336[_0xcabf48(0xd3)],{orderId:_0x173243}=_0x4646db,_0x5a4e46=await this['orderEntity'][_0xcabf48(0xe5)]({'where':{'userId':_0x1d5ab1,'orderId':_0x173243}});if(!_0x5a4e46)throw new common_1[(_0xcabf48(0xde))]('订单不存在!',common_1[_0xcabf48(0xd6)][_0xcabf48(0xc4)]);return _0x5a4e46;}async['create'](_0x55bc77,_0x39fd80,_0x2f5daf,_0x1fa6ca){const _0x140ac6=_0x2e78bd,_0x4756c7=await this[_0x140ac6(0xa2)][_0x140ac6(0xe1)](),_0x54d268=await this[_0x140ac6(0xe7)][_0x140ac6(0xe5)]({'where':{'id':_0x39fd80}});if(!_0x54d268)throw new common_1[(_0x140ac6(0xde))](_0x140ac6(0xa8),common_1[_0x140ac6(0xd6)][_0x140ac6(0xc4)]);const _0x5ae52f={};_0x5ae52f['orderId']=(0x0,utils_1[_0x140ac6(0xcc)])(),_0x5ae52f[_0x140ac6(0xab)]=_0x55bc77,_0x5ae52f[_0x140ac6(0xb8)]=_0x39fd80,_0x5ae52f[_0x140ac6(0xbf)]=Number(_0x54d268[_0x140ac6(0xbf)]),_0x5ae52f[_0x140ac6(0xc0)]=_0x2f5daf,_0x5ae52f['total']=_0x54d268[_0x140ac6(0xbf)],_0x5ae52f[_0x140ac6(0xba)]=_0x4756c7,_0x5ae52f[_0x140ac6(0xd0)]=_0x1fa6ca;const _0x189231=await this[_0x140ac6(0x9e)][_0x140ac6(0xe0)](_0x5ae52f);return console[_0x140ac6(0xc6)]('order:\x20',_0x189231),_0x189231;}async['query'](_0x3c236d,_0x1b0cbf,_0x5b1689){const _0x119029=_0x2e78bd;return await this['orderEntity']['findAndCount']({'where':{'userId':_0x3c236d},'order':{'id':_0x119029(0xd9)},'skip':(_0x1b0cbf-0x1)*_0x5b1689,'take':_0x5b1689});}async[_0x2e78bd(0xc5)](_0x396caf){const _0x4a9c7d=_0x2e78bd,{page:_0x280f3e,size:_0x2b8684,userId:_0x5c0035,platform:_0x1620c8,status:_0x20463f}=_0x396caf,_0x8e113={};if(_0x5c0035)_0x8e113[_0x4a9c7d(0xab)]=_0x5c0035;if(_0x1620c8)_0x8e113[_0x4a9c7d(0xba)]=_0x1620c8;if(_0x20463f)_0x8e113[_0x4a9c7d(0xe4)]=_0x20463f;const [_0x4deb11,_0x3df82c]=await this[_0x4a9c7d(0x9e)][_0x4a9c7d(0xa5)]({'order':{'id':_0x4a9c7d(0xd9)},'where':_0x8e113,'skip':(_0x280f3e-0x1)*_0x2b8684,'take':_0x2b8684}),_0x555d06=_0x4deb11[_0x4a9c7d(0xe2)](_0x2d2f75=>_0x2d2f75[_0x4a9c7d(0xab)]),_0x86660b=_0x4deb11[_0x4a9c7d(0xe2)](_0x2a0afb=>_0x2a0afb[_0x4a9c7d(0xb8)]),_0x376f6a=await this[_0x4a9c7d(0x9f)][_0x4a9c7d(0xb5)]({'where':{'id':(0x0,typeorm_2['In'])(_0x555d06)},'select':['id',_0x4a9c7d(0xb2),_0x4a9c7d(0xa4)]}),_0x3d8c52=await this[_0x4a9c7d(0xe7)]['find']({'where':{'id':(0x0,typeorm_2['In'])(_0x86660b)},'select':['id',_0x4a9c7d(0xad),_0x4a9c7d(0xa9),_0x4a9c7d(0xac)]});_0x4deb11['forEach'](_0x115f48=>{const _0x58175f=_0x4a9c7d;_0x115f48['userInfo']=_0x376f6a['find'](_0x4f298e=>_0x4f298e['id']===_0x115f48[_0x58175f(0xab)]),_0x115f48['goodsInfo']=_0x3d8c52[_0x58175f(0xb5)](_0x111cbe=>_0x111cbe['id']===_0x115f48[_0x58175f(0xb8)]);});const _0x1942c1=await this[_0x4a9c7d(0x9e)]['createQueryBuilder']('order')[_0x4a9c7d(0xa1)](_0x4a9c7d(0xd2),{'status':0x1})['select'](_0x4a9c7d(0xca),'total_price')['getRawOne']();return Object[_0x4a9c7d(0x9c)]({'rows':_0x4deb11,'count':_0x3df82c},_0x1942c1);}async[_0x2e78bd(0xce)](_0x588b31){const _0x40b7da=_0x2e78bd,{orderId:_0x112808}=_0x588b31,_0x57c1d5=await this[_0x40b7da(0x9e)]['findOne']({'where':{'orderId':_0x112808}});if(!_0x57c1d5)throw new common_1[(_0x40b7da(0xde))](_0x40b7da(0xae),common_1[_0x40b7da(0xd6)]['BAD_REQUEST']);return await this[_0x40b7da(0x9e)][_0x40b7da(0xa6)]({'orderId':_0x112808});}async[_0x2e78bd(0xd4)](){const _0x3c2c1c=_0x2e78bd;return await this[_0x3c2c1c(0x9e)][_0x3c2c1c(0xa6)]({'status':0x0});}};OrderService=__decorate([(0x0,common_1[_0x2e78bd(0xaf)])(),__param(0x0,(0x0,typeorm_1[_0x2e78bd(0xd5)])(order_entity_1['OrderEntity'])),__param(0x1,(0x0,typeorm_1[_0x2e78bd(0xd5)])(cramiPackage_entity_1[_0x2e78bd(0xc3)])),__param(0x2,(0x0,typeorm_1[_0x2e78bd(0xd5)])(user_entity_1[_0x2e78bd(0xd7)])),__metadata(_0x2e78bd(0xb6),[typeorm_2['Repository'],typeorm_2['Repository'],typeorm_2[_0x2e78bd(0xcd)],pay_service_1[_0x2e78bd(0x9d)],globalConfig_service_1['GlobalConfigService']])],OrderService),exports[_0x2e78bd(0xb7)]=OrderService;