'use strict';const _0x538d79=_0x38c8;(function(_0x134fc8,_0x5ab8bb){const _0x5628a9=_0x38c8,_0x3d9197=_0x134fc8();while(!![]){try{const _0x487c6f=-parseInt(_0x5628a9(0xf6))/0x1*(parseInt(_0x5628a9(0xfe))/0x2)+parseInt(_0x5628a9(0xcc))/0x3*(parseInt(_0x5628a9(0x13c))/0x4)+-parseInt(_0x5628a9(0x12f))/0x5+-parseInt(_0x5628a9(0xfc))/0x6+-parseInt(_0x5628a9(0x135))/0x7+parseInt(_0x5628a9(0x127))/0x8+-parseInt(_0x5628a9(0x158))/0x9*(-parseInt(_0x5628a9(0x114))/0xa);if(_0x487c6f===_0x5ab8bb)break;else _0x3d9197['push'](_0x3d9197['shift']());}catch(_0xd014b9){_0x3d9197['push'](_0x3d9197['shift']());}}}(_0x2f23,0x557bb));var __decorate=this&&this[_0x538d79(0x15d)]||function(_0x570e57,_0x5dcb1b,_0x382889,_0x21699f){const _0x28eddd=_0x538d79;var _0x2657cb=arguments[_0x28eddd(0x10a)],_0x343c19=_0x2657cb<0x3?_0x5dcb1b:_0x21699f===null?_0x21699f=Object[_0x28eddd(0x164)](_0x5dcb1b,_0x382889):_0x21699f,_0x5346cb;if(typeof Reflect===_0x28eddd(0xf2)&&typeof Reflect['decorate']===_0x28eddd(0x13f))_0x343c19=Reflect[_0x28eddd(0xe7)](_0x570e57,_0x5dcb1b,_0x382889,_0x21699f);else{for(var _0x4510ec=_0x570e57['length']-0x1;_0x4510ec>=0x0;_0x4510ec--)if(_0x5346cb=_0x570e57[_0x4510ec])_0x343c19=(_0x2657cb<0x3?_0x5346cb(_0x343c19):_0x2657cb>0x3?_0x5346cb(_0x5dcb1b,_0x382889,_0x343c19):_0x5346cb(_0x5dcb1b,_0x382889))||_0x343c19;}return _0x2657cb>0x3&&_0x343c19&&Object[_0x28eddd(0x105)](_0x5dcb1b,_0x382889,_0x343c19),_0x343c19;},__metadata=this&&this[_0x538d79(0xe9)]||function(_0x3a6dd9,_0x501c71){const _0x2ff4ed=_0x538d79;if(typeof Reflect===_0x2ff4ed(0xf2)&&typeof Reflect[_0x2ff4ed(0x15e)]===_0x2ff4ed(0x13f))return Reflect[_0x2ff4ed(0x15e)](_0x3a6dd9,_0x501c71);};Object[_0x538d79(0x105)](exports,_0x538d79(0xe4),{'value':!![]}),exports[_0x538d79(0x138)]=void 0x0;const common_1=require(_0x538d79(0x107)),TENCENTCOS=require(_0x538d79(0x137)),ALIOSS=require(_0x538d79(0xd7)),axios_1=require('axios'),streamToBuffer=require('stream-to-buffer'),utils_1=require('../../common/utils'),globalConfig_service_1=require(_0x538d79(0x104)),FormData=require(_0x538d79(0x12b)),fs=require('fs'),path=require(_0x538d79(0x151)),path_1=require(_0x538d79(0x151)),iconv=require(_0x538d79(0xdc)),publicFolderPath=_0x538d79(0x101);let UploadService=class UploadService{constructor(_0xd03bb4){const _0x55fd4c=_0x538d79;this[_0x55fd4c(0x15a)]=_0xd03bb4;}[_0x538d79(0xcf)](){this['initializeFolders']();}async['initializeFolders'](){const _0x410636=_0x538d79;!fs['existsSync'](publicFolderPath)&&fs['mkdirSync'](publicFolderPath);const _0x56272a=(0x0,path_1[_0x410636(0x15b)])(publicFolderPath,_0x410636(0x118));!fs[_0x410636(0x11c)](_0x56272a)&&fs['mkdirSync'](_0x56272a);const _0x5088fa=(0x0,path_1[_0x410636(0x15b)])(_0x56272a,_0x410636(0x111));!fs[_0x410636(0x11c)](_0x5088fa)&&fs[_0x410636(0x14a)](_0x5088fa);const _0x226a0f=(0x0,path_1[_0x410636(0x15b)])(_0x56272a,_0x410636(0x11f));!fs[_0x410636(0x11c)](_0x226a0f)&&fs[_0x410636(0x14a)](_0x226a0f);const _0x54def5=(0x0,path_1['join'])(_0x56272a,_0x410636(0x120));!fs[_0x410636(0x11c)](_0x54def5)&&fs[_0x410636(0x14a)](_0x54def5);const _0x4cec30=(0x0,path_1[_0x410636(0x15b)])(publicFolderPath,_0x410636(0xe3));!fs[_0x410636(0x11c)](_0x4cec30)&&fs['mkdirSync'](_0x4cec30);const _0x48ff3c=(0x0,path_1[_0x410636(0x15b)])(_0x4cec30,_0x410636(0x111));!fs[_0x410636(0x11c)](_0x48ff3c)&&fs['mkdirSync'](_0x48ff3c);const _0x25ca76=(0x0,path_1[_0x410636(0x15b)])(_0x4cec30,_0x410636(0x11f));!fs[_0x410636(0x11c)](_0x25ca76)&&fs[_0x410636(0x14a)](_0x25ca76);const _0x52fedb=(0x0,path_1[_0x410636(0x15b)])(_0x4cec30,'media');!fs[_0x410636(0x11c)](_0x52fedb)&&fs[_0x410636(0x14a)](_0x52fedb);}async[_0x538d79(0x12c)](_0x3efc12){const _0x99aba9=_0x538d79;return await this[_0x99aba9(0x124)](_0x3efc12);}async[_0x538d79(0xcb)](_0x40c4ac){return await this['saveFileToImages'](_0x40c4ac);}async[_0x538d79(0xdf)](_0x5d5435){const _0x5ec030=_0x538d79,{filename:_0x2939ea,originalname:_0x2422e4,buffer:_0x1af31b,dir:dir='ai',mimetype:_0x3e24a8}=_0x5d5435,_0x370850=_0x3e24a8?_0x3e24a8['split']('/')[0x1]:'',_0x54cb83=_0x2422e4||_0x2939ea,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this[_0x5ec030(0x15a)][_0x5ec030(0x141)]([_0x5ec030(0xf8),_0x5ec030(0xe0),_0x5ec030(0xda)]);if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus))throw new common_1[(_0x5ec030(0xd1))](_0x5ec030(0xcd),common_1[_0x5ec030(0x147)]['BAD_REQUEST']);if(Number(tencentCosStatus))return this[_0x5ec030(0xce)]({'filename':_0x54cb83,'buffer':_0x1af31b,'dir':dir,'fileTyle':_0x370850});if(Number(aliOssStatus))return await this['uploadFileByAliOss']({'filename':_0x54cb83,'buffer':_0x1af31b,'dir':dir,'fileTyle':_0x370850});if(Number(cheveretoStatus)){const {filename:_0x25187e,buffer:_0x48a477,dir:_0x1b9232}=_0x5d5435;return await this['uploadFileByChevereto']({'filename':_0x25187e,'buffer':_0x48a477[_0x5ec030(0xf0)](_0x5ec030(0x14b)),'dir':_0x1b9232,'fileTyle':_0x370850});}}[_0x538d79(0xd5)](_0x49ab85){const _0x42f15e=_0x538d79,_0x288de2=[_0x42f15e(0x139),_0x42f15e(0xd2),_0x42f15e(0x140),_0x42f15e(0xec)],_0x103448=['audio/mp3',_0x42f15e(0xf3),_0x42f15e(0xd8),_0x42f15e(0x126)],_0x384e00=['application/pdf',_0x42f15e(0x142),_0x42f15e(0x161)];if(_0x288de2['includes'](_0x49ab85[_0x42f15e(0x13b)]))return _0x42f15e(0x111);else{if(_0x103448['includes'](_0x49ab85[_0x42f15e(0x13b)]))return _0x42f15e(0x120);else return _0x384e00[_0x42f15e(0x133)](_0x49ab85['mimetype'])?_0x42f15e(0x11f):null;}}[_0x538d79(0xef)](_0x57f599){const _0x5ea8c4=_0x538d79,_0x27be5f=iconv[_0x5ea8c4(0xf5)](Buffer[_0x5ea8c4(0x121)](_0x57f599,_0x5ea8c4(0xc9)),_0x5ea8c4(0x156));return _0x27be5f;}[_0x538d79(0xed)](_0x48afef){const _0x5ee2e2=_0x538d79,_0x49dc8c=this[_0x5ee2e2(0xef)](_0x48afef),_0x406edd=_0x49dc8c[_0x5ee2e2(0x10c)]('.')[_0x5ee2e2(0x125)](),_0x36568a=_0x49dc8c[_0x5ee2e2(0x10c)]('.')[_0x5ee2e2(0x129)](0x0,-0x1)[_0x5ee2e2(0x15b)]('.'),_0x5d7bf7=new Date()[_0x5ee2e2(0xfb)](),_0x587e28=(0x0,utils_1[_0x5ee2e2(0xf4)])();return _0x36568a+_0x5ee2e2(0x132)+_0x5d7bf7+_0x5ee2e2(0x132)+_0x587e28+'.'+_0x406edd;}async[_0x538d79(0x124)](_0xc16b03){const _0x1f26ce=_0x538d79,_0x10b316=this[_0x1f26ce(0xd5)](_0xc16b03);if(!_0x10b316)throw new common_1[(_0x1f26ce(0xd1))](_0x1f26ce(0xe8),common_1['HttpStatus']['BAD_REQUEST']);const _0x23ecf5=publicFolderPath+_0x1f26ce(0xdd)+_0x10b316,_0x263883=this[_0x1f26ce(0xed)](_0xc16b03[_0x1f26ce(0x115)]),_0x246645=path[_0x1f26ce(0x15b)](_0x23ecf5,_0x263883);fs[_0x1f26ce(0x146)](_0x246645,_0xc16b03[_0x1f26ce(0x116)]);const _0x1c8533=await this[_0x1f26ce(0x15a)]['getConfigs']([_0x1f26ce(0x157)]);if(!_0x1c8533)throw new common_1[(_0x1f26ce(0xd1))](_0x1f26ce(0xd0),common_1['HttpStatus'][_0x1f26ce(0x13e)]);return''+_0x1c8533+_0x246645[_0x1f26ce(0x103)](0x6);}async[_0x538d79(0x110)](_0x1a622a){const _0x4aa966=_0x538d79,_0x203e3f=this[_0x4aa966(0xd5)](_0x1a622a);if(!_0x203e3f)throw new common_1[(_0x4aa966(0xd1))](_0x4aa966(0xe8),common_1[_0x4aa966(0x147)]['BAD_REQUEST']);const _0x4d3d9b=publicFolderPath+_0x4aa966(0xdd)+_0x203e3f,_0x2b242f=this[_0x4aa966(0xed)](_0x1a622a['originalname']),_0x44d7f9=path[_0x4aa966(0x15b)](_0x4d3d9b,_0x2b242f);fs[_0x4aa966(0x146)](_0x44d7f9,_0x1a622a[_0x4aa966(0x116)]);const _0x471c94=await this[_0x4aa966(0x15a)][_0x4aa966(0x141)](['registerBaseUrl']);if(!_0x471c94)throw new common_1[(_0x4aa966(0xd1))](_0x4aa966(0xd0),common_1[_0x4aa966(0x147)][_0x4aa966(0x13e)]);return''+_0x471c94+_0x44d7f9['substring'](0x6);}async[_0x538d79(0x13d)](){const _0x27cdb4=_0x538d79,{tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this['globalConfigService'][_0x27cdb4(0x141)]([_0x27cdb4(0xf8),_0x27cdb4(0xe0),_0x27cdb4(0xda)]);if(Number(tencentCosStatus))return'tencent';if(Number(aliOssStatus))return _0x27cdb4(0x136);if(Number(cheveretoStatus))return _0x27cdb4(0x12d);}async[_0x538d79(0xe5)]({filename:_0x2406b9,url:_0x71f3c6,dir:dir='mj'}){const _0x4ad1a7=_0x538d79;dir=process[_0x4ad1a7(0x14d)][_0x4ad1a7(0x159)]?_0x4ad1a7(0x108):dir;const {tencentCosStatus:tencentCosStatus=0x0,aliOssStatus:aliOssStatus=0x0,cheveretoStatus:cheveretoStatus=0x0}=await this['globalConfigService'][_0x4ad1a7(0x141)](['tencentCosStatus',_0x4ad1a7(0xe0),_0x4ad1a7(0xda)]);if(!Number(tencentCosStatus)&&!Number(aliOssStatus)&&!Number(cheveretoStatus))throw new common_1[(_0x4ad1a7(0xd1))]('请先前往后台配置上传图片的方式',common_1[_0x4ad1a7(0x147)]['BAD_REQUEST']);if(Number(tencentCosStatus))return this[_0x4ad1a7(0x13a)]({'filename':_0x2406b9,'url':_0x71f3c6,'dir':dir});if(Number(aliOssStatus)){const _0xa55c14=await this[_0x4ad1a7(0x149)]({'filename':_0x2406b9,'url':_0x71f3c6,'dir':dir});return _0xa55c14;}if(Number(cheveretoStatus))return await this[_0x4ad1a7(0x11b)]({'filename':_0x2406b9,'url':_0x71f3c6,'dir':dir});}async[_0x538d79(0xce)]({filename:_0x5747bb,buffer:_0x5b1af0,dir:_0x4095d1,fileTyle:_0x2ef3}){const _0x340323=_0x538d79,{Bucket:_0x4bf10b,Region:_0x1bcc94,SecretId:_0x162e4f,SecretKey:_0x3bf112}=await this[_0x340323(0xca)](_0x340323(0x12a));this['tencentCos']=new TENCENTCOS({'SecretId':_0x162e4f,'SecretKey':_0x3bf112,'FileParallelLimit':0xa});try{return new Promise(async(_0x315d8e,_0x1246b0)=>{const _0x6d5c7b=_0x340323,_0x4e460d=_0x2ef3||_0x6d5c7b(0x163);this[_0x6d5c7b(0x14e)][_0x6d5c7b(0xf7)]({'Bucket':(0x0,utils_1[_0x6d5c7b(0x123)])(_0x4bf10b),'Region':(0x0,utils_1[_0x6d5c7b(0x123)])(_0x1bcc94),'Key':_0x4095d1+'/'+(_0x5747bb||(0x0,utils_1[_0x6d5c7b(0xf4)])()+'.'+_0x2ef3),'StorageClass':'STANDARD','Body':_0x5b1af0},async(_0x46ef73,_0x14621b)=>{const _0x3b4dc0=_0x6d5c7b;if(_0x46ef73)return console['log']('cos\x20->\x20err:\x20',_0x46ef73),_0x1246b0(_0x46ef73);let _0x1676c7=_0x14621b[_0x3b4dc0(0x155)][_0x3b4dc0(0x11a)](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,_0x3b4dc0(0xfa));const {acceleratedDomain:_0x3cf271}=await this['getUploadConfig'](_0x3b4dc0(0x12a));return _0x3cf271&&(_0x1676c7=_0x1676c7['replace'](/^(https:\/\/[^/]+)(\/.*)$/,_0x3b4dc0(0x131)+_0x3cf271+'$2'),console[_0x3b4dc0(0x150)](_0x3b4dc0(0xe6),_0x1676c7)),_0x315d8e(_0x1676c7);});});}catch(_0x5a5b3d){console[_0x340323(0x150)](_0x340323(0x11e),_0x5a5b3d);throw new common_1[(_0x340323(0xd1))](_0x340323(0xeb),common_1[_0x340323(0x147)][_0x340323(0x13e)]);}}async['uploadFileByTencentCosFromUrl']({filename:_0x3825d0,url:_0x290c59,dir:_0x1bd854}){const _0x5a04e6=_0x538d79,{Bucket:_0x1660f4,Region:_0x4751a8,SecretId:_0x6e3b34,SecretKey:_0x43ae7}=await this[_0x5a04e6(0xca)](_0x5a04e6(0x12a));this[_0x5a04e6(0x14e)]=new TENCENTCOS({'SecretId':_0x6e3b34,'SecretKey':_0x43ae7,'FileParallelLimit':0xa});try{const _0x41dcbb=await this['globalConfigService'][_0x5a04e6(0x141)]([_0x5a04e6(0x106)])||0x0;if(Number(_0x41dcbb)===0x1){const _0x56bd5c={'cosType':_0x5a04e6(0x12a),'url':_0x290c59,'cosParams':{'Bucket':_0x1660f4,'Region':_0x4751a8,'SecretId':_0x6e3b34,'SecretKey':_0x43ae7}},_0x388155=await this[_0x5a04e6(0x15a)][_0x5a04e6(0x141)](['mjProxyUrl'])||'http://172.247.48.137:8000',_0x25b2ff=await axios_1[_0x5a04e6(0x10d)][_0x5a04e6(0x10e)](_0x388155+_0x5a04e6(0xf9),_0x56bd5c);if(!_0x25b2ff[_0x5a04e6(0xc7)])throw new common_1[(_0x5a04e6(0xd1))](_0x5a04e6(0x153),common_1[_0x5a04e6(0x147)][_0x5a04e6(0x13e)]);let _0x2b1b3d=_0x25b2ff[_0x5a04e6(0xc7)][_0x5a04e6(0x11a)](/^(http:\/\/|https:\/\/|\/\/|)(.*)/,_0x5a04e6(0xfa));const {acceleratedDomain:_0x35163c}=await this[_0x5a04e6(0xca)](_0x5a04e6(0x12a));return _0x35163c&&(_0x2b1b3d=_0x2b1b3d['replace'](/^(https:\/\/[^/]+)(\/.*)$/,_0x5a04e6(0x131)+_0x35163c+'$2'),console['log'](_0x5a04e6(0xe6))),_0x2b1b3d;}else{const _0x4bf078=await this[_0x5a04e6(0xd4)](_0x290c59);return await this[_0x5a04e6(0xce)]({'filename':_0x3825d0,'buffer':_0x4bf078,'dir':_0x1bd854,'fileTyle':''});}}catch(_0x1158b0){console[_0x5a04e6(0x150)](_0x5a04e6(0x117),_0x1158b0);throw new common_1[(_0x5a04e6(0xd1))](_0x5a04e6(0x153),common_1[_0x5a04e6(0x147)][_0x5a04e6(0x13e)]);}}async['uploadFileByAliOss']({filename:_0x4acaf4,buffer:_0x10e807,dir:_0x3ae7b8,fileTyle:fileTyle=_0x538d79(0x163)}){const _0x4c9e46=_0x538d79,{region:_0x23b579,bucket:_0xa3516b,accessKeyId:_0x53e6b7,accessKeySecret:_0x3c7ff8}=await this['getUploadConfig'](_0x4c9e46(0x136)),_0x1b263d=new ALIOSS({'region':(0x0,utils_1[_0x4c9e46(0x123)])(_0x23b579),'accessKeyId':_0x53e6b7,'accessKeySecret':_0x3c7ff8,'bucket':(0x0,utils_1[_0x4c9e46(0x123)])(_0xa3516b)});try{return console[_0x4c9e46(0x150)]('ali\x20开始上传'),new Promise((_0x113f2a,_0x29c083)=>{const _0x261f20=_0x4c9e46;_0x1b263d[_0x261f20(0x10f)](_0x3ae7b8+'/'+(_0x4acaf4||(0x0,utils_1[_0x261f20(0xf4)])()+'.'+fileTyle),_0x10e807)[_0x261f20(0xc8)](_0x4a93a9=>{const _0x527621=_0x261f20;_0x113f2a(_0x4a93a9[_0x527621(0x154)]);})['catch'](_0xf2ad4e=>{_0x29c083(_0xf2ad4e);});});}catch(_0x1594a8){throw new common_1['HttpException'](_0x4c9e46(0x12e),common_1[_0x4c9e46(0x147)][_0x4c9e46(0x13e)]);}}async['uploadFileByAliOssFromUrl']({filename:_0x4ce40a,url:_0x435102,dir:_0x2b1e3e}){const _0x5cdde9=_0x538d79,{region:_0x5baa5a,bucket:_0x15dab7,accessKeyId:_0x41e906,accessKeySecret:_0x3e2220}=await this['getUploadConfig'](_0x5cdde9(0x136)),_0xa2c88c=new ALIOSS({'region':_0x5baa5a,'accessKeyId':_0x41e906,'accessKeySecret':_0x3e2220,'bucket':_0x15dab7});try{const _0x36645a=await this['globalConfigService'][_0x5cdde9(0x141)](['mjProxy'])||0x0;if(Number(_0x36645a)===0x1){const _0x3b764d={'url':_0x435102,'cosParams':{'region':_0x5baa5a,'bucket':_0x15dab7,'accessKeyId':_0x41e906,'accessKeySecret':_0x3e2220},'cosType':_0x5cdde9(0xdb)},_0x5ca216=await this[_0x5cdde9(0x15a)][_0x5cdde9(0x141)]([_0x5cdde9(0xe1)])||_0x5cdde9(0x130),_0x15a3fd=await axios_1[_0x5cdde9(0x10d)]['post'](_0x5ca216+_0x5cdde9(0xf9),_0x3b764d);if(!(_0x15a3fd===null||_0x15a3fd===void 0x0?void 0x0:_0x15a3fd[_0x5cdde9(0xc7)]))throw new common_1[(_0x5cdde9(0xd1))](_0x5cdde9(0x128),common_1[_0x5cdde9(0x147)][_0x5cdde9(0x13e)]);return _0x15a3fd[_0x5cdde9(0xc7)];}else{const _0x35fe13=await this[_0x5cdde9(0xd4)](_0x435102);return await this[_0x5cdde9(0x10b)]({'filename':_0x4ce40a,'buffer':_0x35fe13,'dir':_0x2b1e3e});}}catch(_0x504601){throw new common_1[(_0x5cdde9(0xd1))]('上传图片失败[ALI][url]',common_1[_0x5cdde9(0x147)]['BAD_REQUEST']);}}async['uploadFileByChevereto']({filename:filename='',buffer:_0x580e09,dir:dir='ai',fileTyle:fileTyle=_0x538d79(0x163)}){const _0x376c92=_0x538d79;var _0x199d76;const {key:_0xfbc67a,uploadPath:_0x1dce06}=await this[_0x376c92(0xca)](_0x376c92(0x12d)),_0x1dbd43=_0x1dce06['endsWith']('/')?_0x1dce06[_0x376c92(0x129)](0x0,-0x1):_0x1dce06,_0x57eaba=new FormData();_0x57eaba[_0x376c92(0xe2)](_0x376c92(0xfd),_0x580e09),_0x57eaba[_0x376c92(0xe2)](_0x376c92(0x148),_0xfbc67a);try{const _0x46820d=await axios_1[_0x376c92(0x10d)][_0x376c92(0x10e)](_0x1dbd43,_0x57eaba,{'headers':{'X-API-Key':_0xfbc67a}});if((_0x46820d===null||_0x46820d===void 0x0?void 0x0:_0x46820d[_0x376c92(0x112)])===0xc8)return _0x46820d[_0x376c92(0xc7)]['image'][_0x376c92(0x154)];else console[_0x376c92(0x150)](_0x376c92(0x15c),_0x46820d===null||_0x46820d===void 0x0?void 0x0:_0x46820d[_0x376c92(0xc7)][_0x376c92(0xea)],_0x46820d===null||_0x46820d===void 0x0?void 0x0:_0x46820d[_0x376c92(0xc7)][_0x376c92(0xd6)]['message']),common_1[_0x376c92(0x102)][_0x376c92(0xd6)](_0x376c92(0x14c),JSON[_0x376c92(0x119)](_0x46820d[_0x376c92(0xc7)]));}catch(_0x396961){console['log'](_0x376c92(0x11e),_0x396961);throw new common_1[(_0x376c92(0xd1))](_0x376c92(0xf1)+((_0x199d76=_0x396961[_0x376c92(0xd9)])===null||_0x199d76===void 0x0?void 0x0:_0x199d76[_0x376c92(0xc7)][_0x376c92(0xd6)][_0x376c92(0x143)]),common_1['HttpStatus'][_0x376c92(0x13e)]);}}async[_0x538d79(0x11b)]({filename:_0x4a7fab,url:_0x4f359a,dir:_0x302dec}){const _0xb95ffd=_0x538d79;try{const _0x529a99=await this['globalConfigService'][_0xb95ffd(0x141)]([_0xb95ffd(0x106)])||0x0;if(Number(_0x529a99)===0x1){const {key:_0xb0ba4e,uploadPath:_0x4456dd}=await this[_0xb95ffd(0xca)]('chevereto'),_0x2c9bc7=_0x4456dd[_0xb95ffd(0xd3)]('/')?_0x4456dd[_0xb95ffd(0x129)](0x0,-0x1):_0x4456dd,_0x4089c9={'cosType':_0xb95ffd(0x12d),'url':_0x4f359a,'cosParams':{'key':_0xb0ba4e,'uploadPath':_0x2c9bc7}},_0x2450ec=await this[_0xb95ffd(0x15a)][_0xb95ffd(0x141)](['mjProxyUrl'])||_0xb95ffd(0x130),_0x211611=await axios_1[_0xb95ffd(0x10d)]['post'](_0x2450ec+_0xb95ffd(0xf9),_0x4089c9);if(!_0x211611[_0xb95ffd(0xc7)])throw new common_1[(_0xb95ffd(0xd1))]('上传图片失败[Chevereto][url]',common_1[_0xb95ffd(0x147)][_0xb95ffd(0x13e)]);return _0x211611[_0xb95ffd(0xc7)];}else{const _0x18f4dd=await this[_0xb95ffd(0xd4)](_0x4f359a);return await this[_0xb95ffd(0x11d)]({'filename':_0x4a7fab,'buffer':_0x18f4dd,'dir':_0x302dec});}}catch(_0x800abf){console['log'](_0xb95ffd(0x11e),_0x800abf);throw new common_1[(_0xb95ffd(0xd1))](_0x800abf[_0xb95ffd(0xd9)],common_1[_0xb95ffd(0x147)]['BAD_REQUEST']);}}async[_0x538d79(0xca)](_0x542874){const _0x59a46e=_0x538d79;if(_0x542874===_0x59a46e(0x136)){const {aliOssRegion:_0x2197cd,aliOssBucket:_0x2ead67,aliOssAccessKeyId:_0x431188,aliOssAccessKeySecret:_0x28d7fd}=await this[_0x59a46e(0x15a)][_0x59a46e(0x141)]([_0x59a46e(0x14f),'aliOssBucket',_0x59a46e(0x145),_0x59a46e(0xde)]);return{'region':_0x2197cd,'bucket':_0x2ead67,'accessKeyId':_0x431188,'accessKeySecret':_0x28d7fd};}if(_0x542874===_0x59a46e(0x12a)){const {cosBucket:_0x162cec,cosRegion:_0x4178fe,cosSecretId:_0x1ed482,cosSecretKey:_0xcf790e,tencentCosAcceleratedDomain:_0x363cad}=await this[_0x59a46e(0x15a)][_0x59a46e(0x141)]([_0x59a46e(0x15f),_0x59a46e(0xff),'cosSecretId',_0x59a46e(0x162),'tencentCosAcceleratedDomain']);return{'Bucket':_0x162cec,'Region':_0x4178fe,'SecretId':_0x1ed482,'SecretKey':_0xcf790e,'acceleratedDomain':_0x363cad};}if(_0x542874===_0x59a46e(0x12d)){const {cheveretoKey:_0x105e4b,cheveretoUploadPath:_0x1ae6b4}=await this[_0x59a46e(0x15a)][_0x59a46e(0x141)]([_0x59a46e(0x160),_0x59a46e(0x122)]);return{'key':_0x105e4b,'uploadPath':_0x1ae6b4};}}async['test'](){const _0x244459=_0x538d79,_0x35e4c4={'filename':_0x244459(0x109),'dir':'mj','url':_0x244459(0x100)},_0x2d06f2=await this[_0x244459(0xe5)](_0x35e4c4);return console[_0x244459(0x150)](_0x244459(0x113),_0x2d06f2),_0x2d06f2;}async[_0x538d79(0xd4)](_0x5b6f97){const _0x2d1907=_0x538d79,_0x2603e8=await this['globalConfigService'][_0x2d1907(0x141)]([_0x2d1907(0x106)])||0x0,_0x1b3633=await axios_1[_0x2d1907(0x10d)][_0x2d1907(0x152)](_0x5b6f97,{'responseType':'stream'});return new Promise((_0x44561d,_0x2211f0)=>{const _0x588d7c=_0x2d1907;streamToBuffer(_0x1b3633[_0x588d7c(0xc7)],(_0x2ea7d1,_0x1961ba)=>{const _0x3aa837=_0x588d7c;if(_0x2ea7d1)throw new common_1[(_0x3aa837(0xd1))]('获取图片资源失败、请重新试试吧！',common_1[_0x3aa837(0x147)][_0x3aa837(0x13e)]);else _0x44561d(_0x1961ba);});});}};function _0x38c8(_0x2d8943,_0x5f5977){const _0x2f23d5=_0x2f23();return _0x38c8=function(_0x38c8fe,_0x1c4d3f){_0x38c8fe=_0x38c8fe-0xc7;let _0x2e144c=_0x2f23d5[_0x38c8fe];return _0x2e144c;},_0x38c8(_0x2d8943,_0x5f5977);}UploadService=__decorate([(0x0,common_1[_0x538d79(0x134)])(),__metadata(_0x538d79(0x144),[globalConfig_service_1[_0x538d79(0xee)]])],UploadService),exports[_0x538d79(0x138)]=UploadService;function _0x2f23(){const _0x41f663=['audio/wav','2267744WaBJGd','上传图片失败[ALI][url]','slice','tencent','form-data','uploadFileForLocal','chevereto','上传图片失败[ali]','1776315AYiEPA','http://172.247.48.137:8000','https://','-nine-','includes','Injectable','2281601tJBBsH','ali','cos-nodejs-sdk-v5','UploadService','image/jpeg','uploadFileByTencentCosFromUrl','mimetype','2793756JFduOz','getUploadType','BAD_REQUEST','function','image/webp','getConfigs','application/msword','message','design:paramtypes','aliOssAccessKeyId','writeFileSync','HttpStatus','key','uploadFileByAliOssFromUrl','mkdirSync','base64','上传图片失败[Chevereto]','env','tencentCos','aliOssRegion','log','path','get','上传图片失败[ten][url]','url','Location','UTF-8','registerBaseUrl','297ESZXWD','ISDEV','globalConfigService','join','Chevereto\x20--->\x20res','__decorate','metadata','cosBucket','cheveretoKey','application/vnd.openxmlformats-officedocument.wordprocessingml.document','cosSecretKey','png','getOwnPropertyDescriptor','data','then','binary','getUploadConfig','uploadFileForCore','3ErAZxd','请先前往后台配置上传图片的方式','uploadFileByTencentCos','onModuleInit','请先前往后台管理设置base地址！','HttpException','image/png','endsWith','getBufferFromUrl','getFileTypeWithDir','error','ali-oss','audio/webm','response','cheveretoStatus','aliyun','iconv-lite','/core/','aliOssAccessKeySecret','uploadFile','aliOssStatus','mjProxyUrl','append','core','__esModule','uploadFileFromUrl','当前已开启全球加速----------------->','decorate','不支持当前文件类型！','__metadata','code','上传图片失败[ten]','image/jpg','genFileName','GlobalConfigService','decodeFileName','toString','上传图片失败[Chevereto|buffer]\x20-->\x20','object','audio/mp4','createRandomUid','decode','35318BHPWgx','putObject','tencentCosStatus','/mj/replaceUpload','https://$2','getTime','896472oDkIks','source','2cEFklN','cosRegion','https://cdn.discordapp.com/attachments/1097409128491651135/1169910551275638855/snine_60b5c001b_A_young_girl_smiles_brightly_in_the_pure_blue_f_8a41fe5f-5101-4c1e-b948-a748a0583577.png?ex=65571f1b&is=6544aa1b&hm=b82f2d88224eb7942e24c63a8e519c7693de12a2b96daa0f327dfb8f691b1480&','public','Logger','substring','../globalConfig/globalConfig.service','defineProperty','mjProxy','@nestjs/common','mjdev','mjtest.png','length','uploadFileByAliOss','split','default','post','put','saveCoreFile','images','status','res:\x20','70960tmVLnB','originalname','buffer','TODO->error:\x20\x20','files','stringify','replace','uploadFileByCheveretoFromUrl','existsSync','uploadFileByChevereto','error:\x20','document','media','from','cheveretoUploadPath','removeSpecialCharacters','saveFileToImages','pop'];_0x2f23=function(){return _0x41f663;};return _0x2f23();}