'use strict';const _0x1a7fe7=_0x53a4;(function(_0x5bf283,_0x33db6f){const _0x4f49ef=_0x53a4,_0x392d87=_0x5bf283();while(!![]){try{const _0x1d29f1=parseInt(_0x4f49ef(0x1b1))/0x1+parseInt(_0x4f49ef(0x1b7))/0x2*(-parseInt(_0x4f49ef(0x1ac))/0x3)+-parseInt(_0x4f49ef(0x1a7))/0x4*(parseInt(_0x4f49ef(0x1b9))/0x5)+parseInt(_0x4f49ef(0x1b3))/0x6*(-parseInt(_0x4f49ef(0x1af))/0x7)+parseInt(_0x4f49ef(0x1a4))/0x8+-parseInt(_0x4f49ef(0x1aa))/0x9+parseInt(_0x4f49ef(0x1ad))/0xa;if(_0x1d29f1===_0x33db6f)break;else _0x392d87['push'](_0x392d87['shift']());}catch(_0x40381f){_0x392d87['push'](_0x392d87['shift']());}}}(_0x1745,0x625e6));var __decorate=this&&this[_0x1a7fe7(0x1a8)]||function(_0x1b8f71,_0x3e4b24,_0x396163,_0x5ed656){const _0x47aefa=_0x1a7fe7;var _0x43f122=arguments[_0x47aefa(0x1a9)],_0x3a4ae0=_0x43f122<0x3?_0x3e4b24:_0x5ed656===null?_0x5ed656=Object[_0x47aefa(0x1a3)](_0x3e4b24,_0x396163):_0x5ed656,_0x5b5eae;if(typeof Reflect==='object'&&typeof Reflect[_0x47aefa(0x1ab)]===_0x47aefa(0x1b4))_0x3a4ae0=Reflect[_0x47aefa(0x1ab)](_0x1b8f71,_0x3e4b24,_0x396163,_0x5ed656);else{for(var _0x31aa48=_0x1b8f71[_0x47aefa(0x1a9)]-0x1;_0x31aa48>=0x0;_0x31aa48--)if(_0x5b5eae=_0x1b8f71[_0x31aa48])_0x3a4ae0=(_0x43f122<0x3?_0x5b5eae(_0x3a4ae0):_0x43f122>0x3?_0x5b5eae(_0x3e4b24,_0x396163,_0x3a4ae0):_0x5b5eae(_0x3e4b24,_0x396163))||_0x3a4ae0;}return _0x43f122>0x3&&_0x3a4ae0&&Object[_0x47aefa(0x1b5)](_0x3e4b24,_0x396163,_0x3a4ae0),_0x3a4ae0;};Object[_0x1a7fe7(0x1b5)](exports,_0x1a7fe7(0x1b0),{'value':!![]}),exports[_0x1a7fe7(0x1ba)]=void 0x0;const common_1=require('@nestjs/common'),jwtAuth_guard_1=require(_0x1a7fe7(0x1b6));function _0x1745(){const _0x1b0d08=['5zyjICT','SuperAuthGuard','super','JwtAuthGuard','Injectable','getOwnPropertyDescriptor','4873632MyaSDS','role','canActivate','3078004NQSAfA','__decorate','length','3894714KKbHlQ','decorate','6nGtLJx','11382900ZKUcPn','user','98KVfpeT','__esModule','64199EgprVu','getRequest','48378POReiK','function','defineProperty','./jwtAuth.guard','93646iZCwmo','UnauthorizedException'];_0x1745=function(){return _0x1b0d08;};return _0x1745();}let SuperAuthGuard=class SuperAuthGuard extends jwtAuth_guard_1[_0x1a7fe7(0x1bc)]{async['canActivate'](_0x3df4d7){const _0x5ae8ea=_0x1a7fe7,_0x1de36b=await super[_0x5ae8ea(0x1a6)](_0x3df4d7);if(!_0x1de36b)return![];const _0x515cda=_0x3df4d7['switchToHttp']()[_0x5ae8ea(0x1b2)](),_0x1b908e=_0x515cda[_0x5ae8ea(0x1ae)];if(_0x1b908e&&_0x1b908e[_0x5ae8ea(0x1a5)]===_0x5ae8ea(0x1bb))return!![];else throw new common_1[(_0x5ae8ea(0x1b8))]('非法操作、非超级管理员无权操作！');}};function _0x53a4(_0x2da4c8,_0x404b26){const _0x174594=_0x1745();return _0x53a4=function(_0x53a455,_0x5b33be){_0x53a455=_0x53a455-0x1a3;let _0x26595d=_0x174594[_0x53a455];return _0x26595d;},_0x53a4(_0x2da4c8,_0x404b26);}SuperAuthGuard=__decorate([(0x0,common_1[_0x1a7fe7(0x1bd)])()],SuperAuthGuard),exports['SuperAuthGuard']=SuperAuthGuard;