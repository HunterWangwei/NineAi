'use strict';const _0x2e7428=_0x2c45;(function(_0x3208c8,_0x2b67de){const _0x23e178=_0x2c45,_0x343c0b=_0x3208c8();while(!![]){try{const _0x201cee=-parseInt(_0x23e178(0x130))/0x1*(parseInt(_0x23e178(0x13f))/0x2)+parseInt(_0x23e178(0x13d))/0x3+-parseInt(_0x23e178(0x137))/0x4+-parseInt(_0x23e178(0x131))/0x5*(parseInt(_0x23e178(0x142))/0x6)+-parseInt(_0x23e178(0x136))/0x7*(-parseInt(_0x23e178(0x146))/0x8)+parseInt(_0x23e178(0x139))/0x9+parseInt(_0x23e178(0x135))/0xa;if(_0x201cee===_0x2b67de)break;else _0x343c0b['push'](_0x343c0b['shift']());}catch(_0x81ec5e){_0x343c0b['push'](_0x343c0b['shift']());}}}(_0xf539,0xaebb3));function _0xf539(){const _0x328c2a=['2255HzyeOu','BullModule','./queue.service','__esModule','3228450fbDpuh','2448698BKUUWJ','1576328EaYpSH','REDIS_HOST','187353TKMuaI','password','length','MJDRAW','2954418tITVxh','env','87284fTLxnT','REDIS_PASSWORD','defineProperty','6402HRYThR','./queue.process','registerQueueAsync','QueueService','8NPKFlx','decorate','QueueModule','REDIS_PORT','Module','object','2eESnnk'];_0xf539=function(){return _0x328c2a;};return _0xf539();}var __decorate=this&&this['__decorate']||function(_0xfe482a,_0x4ee863,_0x4db107,_0x280c7d){const _0x4fba3e=_0x2c45;var _0x26d039=arguments[_0x4fba3e(0x13b)],_0x4f41b2=_0x26d039<0x3?_0x4ee863:_0x280c7d===null?_0x280c7d=Object['getOwnPropertyDescriptor'](_0x4ee863,_0x4db107):_0x280c7d,_0x5d1c17;if(typeof Reflect===_0x4fba3e(0x12f)&&typeof Reflect[_0x4fba3e(0x147)]==='function')_0x4f41b2=Reflect[_0x4fba3e(0x147)](_0xfe482a,_0x4ee863,_0x4db107,_0x280c7d);else{for(var _0x1e1d35=_0xfe482a[_0x4fba3e(0x13b)]-0x1;_0x1e1d35>=0x0;_0x1e1d35--)if(_0x5d1c17=_0xfe482a[_0x1e1d35])_0x4f41b2=(_0x26d039<0x3?_0x5d1c17(_0x4f41b2):_0x26d039>0x3?_0x5d1c17(_0x4ee863,_0x4db107,_0x4f41b2):_0x5d1c17(_0x4ee863,_0x4db107))||_0x4f41b2;}return _0x26d039>0x3&&_0x4f41b2&&Object[_0x4fba3e(0x141)](_0x4ee863,_0x4db107,_0x4f41b2),_0x4f41b2;};Object[_0x2e7428(0x141)](exports,_0x2e7428(0x134),{'value':!![]}),exports[_0x2e7428(0x148)]=void 0x0;function _0x2c45(_0x106ac9,_0xcfef63){const _0xf53975=_0xf539();return _0x2c45=function(_0x2c4554,_0x563fda){_0x2c4554=_0x2c4554-0x12d;let _0x1d1041=_0xf53975[_0x2c4554];return _0x1d1041;},_0x2c45(_0x106ac9,_0xcfef63);}const common_1=require('@nestjs/common'),queue_controller_1=require('./queue.controller'),queue_service_1=require(_0x2e7428(0x133)),bull_1=require('@nestjs/bull'),queue_process_1=require(_0x2e7428(0x143));let QueueModule=class QueueModule{};QueueModule=__decorate([(0x0,common_1[_0x2e7428(0x12e)])({'imports':[bull_1[_0x2e7428(0x132)][_0x2e7428(0x144)]({'name':_0x2e7428(0x13c),'useFactory':()=>{const _0xf86306=_0x2e7428,_0x783839={'port':+process['env'][_0xf86306(0x12d)],'host':process[_0xf86306(0x13e)][_0xf86306(0x138)]};return process[_0xf86306(0x13e)][_0xf86306(0x140)]&&(_0x783839[_0xf86306(0x13a)]=process[_0xf86306(0x13e)][_0xf86306(0x140)]),{'redis':_0x783839};}})],'controllers':[queue_controller_1['QueueController']],'providers':[queue_service_1[_0x2e7428(0x145)],queue_process_1['QueueProcessor']]})],QueueModule),exports[_0x2e7428(0x148)]=QueueModule;