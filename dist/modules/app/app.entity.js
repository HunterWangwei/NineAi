'use strict';function _0xf192(){var _0x464349=['defineProperty','2149904hndPIj','372752DZCeTe','function','__decorate','__metadata','gptsId','name','AppEntity','system','order','design:type','prototype','demoData','1425018FrBZDc','preset','../../common/entity/baseEntity','decorate','332560BbgrXG','App示例数据','275166VfpCYX','84TzHzTb','App应用角色\x20system\x20\x20user','144BEfeZT','1529315zmQHFN','metadata','gpts应用封面图片\x20来源网络的地址很长、兼容一下','getOwnPropertyDescriptor','gptsImg','12guglhE','BaseEntity','App应用预设场景信息','Entity','用户Id','app','Column','length','346017mfgtKs','App分类Id','catId','App是否共享到应用广场','是否是gpts应用','text','public','App应用排序、数字越大越靠前','object','isGpts'];_0xf192=function(){return _0x464349;};return _0xf192();}var _0x2ebfaf=_0x42ac;(function(_0x1f4d80,_0x4073ba){var _0x616cb6=_0x42ac,_0xa1cb88=_0x1f4d80();while(!![]){try{var _0x266162=parseInt(_0x616cb6(0x15d))/0x1+parseInt(_0x616cb6(0x14c))/0x2*(-parseInt(_0x616cb6(0x155))/0x3)+-parseInt(_0x616cb6(0x168))/0x4+-parseInt(_0x616cb6(0x150))/0x5+parseInt(_0x616cb6(0x146))/0x6+-parseInt(_0x616cb6(0x14d))/0x7*(-parseInt(_0x616cb6(0x169))/0x8)+parseInt(_0x616cb6(0x14f))/0x9*(parseInt(_0x616cb6(0x14a))/0xa);if(_0x266162===_0x4073ba)break;else _0xa1cb88['push'](_0xa1cb88['shift']());}catch(_0x53be6d){_0xa1cb88['push'](_0xa1cb88['shift']());}}}(_0xf192,0x449f1));var __decorate=this&&this[_0x2ebfaf(0x16b)]||function(_0x529302,_0x5c8b01,_0x5f2d75,_0x25a0bd){var _0xb754ee=_0x2ebfaf,_0x2c6016=arguments[_0xb754ee(0x15c)],_0x1d4b7b=_0x2c6016<0x3?_0x5c8b01:_0x25a0bd===null?_0x25a0bd=Object[_0xb754ee(0x153)](_0x5c8b01,_0x5f2d75):_0x25a0bd,_0x384818;if(typeof Reflect===_0xb754ee(0x165)&&typeof Reflect['decorate']==='function')_0x1d4b7b=Reflect[_0xb754ee(0x149)](_0x529302,_0x5c8b01,_0x5f2d75,_0x25a0bd);else{for(var _0xc597d3=_0x529302[_0xb754ee(0x15c)]-0x1;_0xc597d3>=0x0;_0xc597d3--)if(_0x384818=_0x529302[_0xc597d3])_0x1d4b7b=(_0x2c6016<0x3?_0x384818(_0x1d4b7b):_0x2c6016>0x3?_0x384818(_0x5c8b01,_0x5f2d75,_0x1d4b7b):_0x384818(_0x5c8b01,_0x5f2d75))||_0x1d4b7b;}return _0x2c6016>0x3&&_0x1d4b7b&&Object[_0xb754ee(0x167)](_0x5c8b01,_0x5f2d75,_0x1d4b7b),_0x1d4b7b;},__metadata=this&&this[_0x2ebfaf(0x16c)]||function(_0x5c4228,_0x336f8e){var _0x292bc7=_0x2ebfaf;if(typeof Reflect==='object'&&typeof Reflect[_0x292bc7(0x151)]===_0x292bc7(0x16a))return Reflect['metadata'](_0x5c4228,_0x336f8e);};Object[_0x2ebfaf(0x167)](exports,'__esModule',{'value':!![]}),exports[_0x2ebfaf(0x16f)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require(_0x2ebfaf(0x148));function _0x42ac(_0x588428,_0xee750b){var _0xf1927e=_0xf192();return _0x42ac=function(_0x537e25,_0xa31e39){_0x537e25=_0x537e25-0x142;var _0x3cfc95=_0xf1927e[_0x537e25];return _0x3cfc95;},_0x42ac(_0x588428,_0xee750b);}let AppEntity=class AppEntity extends baseEntity_1[_0x2ebfaf(0x156)]{};__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'unique':!![],'comment':'App应用名称'}),__metadata('design:type',String)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x16e),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2ebfaf(0x15e)}),__metadata(_0x2ebfaf(0x143),Number)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x15f),void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':'App应用描述信息'}),__metadata('design:type',String)],AppEntity['prototype'],'des',void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':_0x2ebfaf(0x157),'type':_0x2ebfaf(0x162),'nullable':!![]}),__metadata(_0x2ebfaf(0x143),String)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x147),void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':'App应用封面图片','nullable':!![]}),__metadata(_0x2ebfaf(0x143),String)],AppEntity[_0x2ebfaf(0x144)],'coverImg',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2ebfaf(0x152),'nullable':!![],'type':'text'}),__metadata(_0x2ebfaf(0x143),String)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x154),void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':_0x2ebfaf(0x164),'default':0x64}),__metadata(_0x2ebfaf(0x143),Number)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x142),void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':'App应用是否启用中\x200：禁用\x201：启用','default':0x1}),__metadata(_0x2ebfaf(0x143),Number)],AppEntity['prototype'],'status',void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':_0x2ebfaf(0x14b),'nullable':!![],'type':_0x2ebfaf(0x162)}),__metadata('design:type',String)],AppEntity['prototype'],_0x2ebfaf(0x145),void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':_0x2ebfaf(0x14e),'default':_0x2ebfaf(0x170)}),__metadata(_0x2ebfaf(0x143),String)],AppEntity[_0x2ebfaf(0x144)],'role',void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':_0x2ebfaf(0x160),'default':![]}),__metadata(_0x2ebfaf(0x143),Boolean)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x163),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2ebfaf(0x159),'nullable':!![]}),__metadata(_0x2ebfaf(0x143),Number)],AppEntity['prototype'],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x2ebfaf(0x15b)])({'comment':'绑定调用的模型id','nullable':!![]}),__metadata(_0x2ebfaf(0x143),Number)],AppEntity[_0x2ebfaf(0x144)],'modelTypeId',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2ebfaf(0x161),'default':![]}),__metadata(_0x2ebfaf(0x143),Boolean)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x166),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'gpts应用id','nullable':!![]}),__metadata(_0x2ebfaf(0x143),String)],AppEntity[_0x2ebfaf(0x144)],_0x2ebfaf(0x16d),void 0x0),AppEntity=__decorate([(0x0,typeorm_1[_0x2ebfaf(0x158)])({'name':_0x2ebfaf(0x15a)})],AppEntity),exports['AppEntity']=AppEntity;