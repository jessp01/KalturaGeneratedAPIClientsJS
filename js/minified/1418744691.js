
var MD5=function(string){function RotateLeft(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));}
function AddUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function GG(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function HH(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function II(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function ConvertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};function WordToHex(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);}
return WordToHexValue;};function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;};var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=Utf8Encode(string);x=ConvertToWordArray(string);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],S11,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],S11,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],S41,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],S41,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],S41,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD);}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return temp.toLowerCase();}
if(typeof(OX)==='undefined')var OX={};OX.AJAST={Broker:function(url,callbackparameter,optional_decode_json_response,optional_timeout_milliseconds,optional_default_params)
{this.url=url;this.cb=callbackparameter;this.params=[];this.timeout=optional_timeout_milliseconds||5000;if(typeof(optional_default_params)!=='undefined')
{for(p in optional_default_params)
this.params.push(p+'='+encodeURIComponent(optional_default_params[p]));}
this.jsonmode=optional_decode_json_response||false;},__callbacks__:{},__callid__:1,call:function(url,callbackparameter,callbackfunction,optional_timeout,optional_decode_json_response)
{var callbackid='callback'+OX.AJAST.__callid__;url+='&'+encodeURIComponent(callbackparameter)+'='+encodeURIComponent('OX.AJAST.__callbacks__.'+callbackid);var tag=OX.AJAST.createScriptTag(url);var head=document.getElementsByTagName('head').item(0);var timedout=function()
{if(OX.AJAST.__callbacks__[callbackid]!=='undefined')
{OX.AJAST.__callbacks__[callbackid]=function(){delete OX.AJAST.__callbacks__[callbackid];};callbackfunction(false);head.removeChild(tag);}};var timer=setTimeout(timedout,optional_timeout||5000);var decode_response=optional_decode_json_response||false;OX.AJAST.__callbacks__[callbackid]=function(data)
{clearTimeout(timer);if(typeof(data)==='undefined')
callbackfunction(false);else
{callbackfunction(true,decode_response?eval(data):data);}
delete OX.AJAST.__callbacks__[callbackid];head.removeChild(tag);};head.appendChild(tag);},createScriptTag:function(url)
{var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('id','oxajastcall'+OX.AJAST.__callid__++);s.setAttribute('src',url);return s;}};OX.AJAST.Broker.prototype.call=function(params,callback)
{var args=[];for(p in params)
args.push(p+'='+encodeURIComponent(params[p]));for(p in this.params)
args.push(this.params[p]);if(this.url.indexOf('?',0)>-1)
this.url+='&'+args.join('&');else
this.url+='?'+args.join('&');OX.AJAST.call(this.url,this.cb,callback,this.timeout,this.jsonmode);};function http_build_query(formdata,numeric_prefix,arg_separator){var value,key,tmp=[];var _http_build_query_helper=function(key,val,arg_separator){var k,tmp=[];if(val===true){val="1";}else if(val===false){val="0";}
if(val!==null&&typeof(val)==="object"){for(k in val){if(val[k]!==null){tmp.push(_http_build_query_helper(key+"["+k+"]",val[k],arg_separator));}}
return tmp.join(arg_separator);}else if(typeof(val)!=="function"){return key+"="+encodeURIComponent(val);}else{return'';}};if(!arg_separator){arg_separator="&";}
for(key in formdata){value=formdata[key];if(numeric_prefix&&!isNaN(key)){key=String(numeric_prefix)+key;}
tmp.push(_http_build_query_helper(key,value,arg_separator));}
return tmp.join(arg_separator);}
function getFunctionName(func){if(typeof func=="function"||typeof func=="object")
var fName=(""+func).match(/^function\s*([\w\$]*)\s*\(/);if(fName!==null)
return fName[1];return null;}
function getClass(obj,forceConstructor){if(typeof obj=="undefined")return"undefined";if(obj===null)return"null";if(forceConstructor==true&&obj.hasOwnProperty("constructor"))delete obj.constructor;if(forceConstructor!=false&&!obj.hasOwnProperty("constructor"))return getFunctionName(obj.constructor);return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];}
function addIfNotNull(obj,params,paramName,paramValue)
{if(paramValue!=null){if(paramValue instanceof KalturaObjectBase){params[paramName]=toParams(paramValue);}else{params[paramName]=paramValue;}}}
function toParams(obj)
{var params=new Object();params["objectType"]=getClass(obj);for(var prop in obj){var val=obj[prop];addIfNotNull(obj,params,prop,val);}
return params;}
Function.prototype.inheritsFrom=function(parentClassOrObject){if(parentClassOrObject.constructor==Function)
{this.prototype=new parentClassOrObject;this.prototype.constructor=this;this.prototype.parentClass=parentClassOrObject.prototype;}
else
{this.prototype=parentClassOrObject;this.prototype.constructor=this;this.prototype.parentClass=parentClassOrObject;}
return this;}
function ksort(arr){var sArr=[];var tArr=[];var n=0;for(i in arr)
tArr[n++]=i+" |"+arr[i];tArr=tArr.sort();for(var i=0;i<tArr.length;i++){var x=tArr[i].split(" |");sArr[x[0]]=x[1];}
return sArr;}
function KalturaServiceActionCall(service,action,params,files)
{if(!params)
params=new Object();if(!files)
files=new Object();this.service=service;this.action=action;this.params=this.parseParams(params);this.files=files;}
KalturaServiceActionCall.prototype.service=null;KalturaServiceActionCall.prototype.action=null;KalturaServiceActionCall.prototype.params=null;KalturaServiceActionCall.prototype.files=null;KalturaServiceActionCall.prototype.parseParams=function(params)
{var newParams=new Object();for(var key in params){var val=params[key];if(typeof(val)=='object'){newParams[key]=this.parseParams(val);}else{newParams[key]=val;}}
return newParams;};KalturaServiceActionCall.prototype.getParamsForMultiRequest=function(multiRequestIndex)
{var multiRequestParams=new Object();multiRequestParams[multiRequestIndex+":service"]=this.service;multiRequestParams[multiRequestIndex+":action"]=this.action;for(var key in this.params){var val=this.params[key];multiRequestParams[multiRequestIndex+":"+key]=val;}
return multiRequestParams;};KalturaServiceActionCall.prototype.getFilesForMultiRequest=function(multiRequestIndex)
{var multiRequestFiles=new Object();for(var key in this.files){var val=this.files[key];multiRequestFiles[multiRequestIndex+":"+key]=val;}
return multiRequestFiles;};function IKalturaLogger()
{}
IKalturaLogger.prototype.log=function(msg){if(console&&console.log){console.log(msg);}};function KalturaClientBase()
{}
KalturaClientBase.prototype.init=function(config)
{this.config=config;var logger=this.config.getLogger();if(logger){this.shouldLog=true;}};KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON=1;KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_XML=2;KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_PHP=3;KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSONP=9;KalturaClientBase.prototype.apiVersion=null;KalturaClientBase.prototype.config=null;KalturaClientBase.prototype.ks=null;KalturaClientBase.prototype.shouldLog=false;KalturaClientBase.prototype.useMultiRequest=false;KalturaClientBase.prototype.callsQueue=new Array();KalturaClientBase.prototype.queueServiceActionCall=function(service,action,params,files)
{if(!params.hasOwnProperty("partnerId")||params["partnerId"]==-1)
params["partnerId"]=this.config.partnerId;this.addParam(params,"ks",this.ks);var call=new KalturaServiceActionCall(service,action,params,files);this.callsQueue.push(call);};KalturaClientBase.prototype.doQueue=function(callback)
{if(this.callsQueue.length==0)
return null;var params=new Object();var files=new Object();this.log("service url: ["+this.config.serviceUrl+"]");this.addParam(params,"apiVersion",this.apiVersion);this.addParam(params,"format",this.config.format);this.addParam(params,"clientTag",this.config.clientTag);var url=this.config.serviceUrl+this.config.serviceBase;var call=null;if(this.useMultiRequest){url+="multirequest";$i=1;for(var v in this.callsQueue){call=this.callsQueue[v];var callParams=call.getParamsForMultiRequest($i);for(var sv1 in callParams)
params[sv1]=callParams[sv1];var callFiles=call.getFilesForMultiRequest($i);for(var sv2 in callFiles)
files[sv2]=call.files[sv2];$i++;}}else{call=this.callsQueue[0];url+=call.service+"&action="+call.action;for(var sv3 in call.params)
params[sv3]=call.params[sv3];for(var sv4 in call.files)
files[sv4]=call.files[sv4];}
this.callsQueue=new Array();this.useMultiRequest=false;var signature=this.signature(params);this.addParam(params,"kalsig",signature);this.doHttpRequest(callback,url,params,files);return true;};KalturaClientBase.prototype.signature=function(params)
{params=ksort(params);var str="";for(var v in params){var k=params[v];str+=v+k;}
return MD5(str);};KalturaClientBase.prototype.doHttpRequest=function(callCompletedCallback,url,params,files)
{url+='&'+http_build_query(params);OX.AJAST.call(url,"callback",callCompletedCallback,20000,false);};KalturaClientBase.prototype.getKs=function()
{return this.ks;};KalturaClientBase.prototype.setKs=function(ks)
{this.ks=ks;};KalturaClientBase.prototype.getConfig=function()
{return this.config;};KalturaClientBase.prototype.setConfig=function(config)
{this.config=config;logger=this.config.getLogger();if(logger instanceof IKalturaLogger){this.shouldLog=true;}};KalturaClientBase.prototype.addParam=function(params,paramName,paramValue)
{if(paramValue==null)
return;if(typeof(paramValue)!='object'){params[paramName]=paramValue;return;}
if(isNaN(paramValue.length)){for(var subParamName in paramValue){var subParamValue=paramValue[subParamName];this.addParam(params,paramName+":"+subParamName,subParamValue);}
return;}
if(paramValue.length){for(var subParamName in paramValue){var subParamValue=paramValue[subParamName];this.addParam(params,paramName+":"+subParamName,subParamValue);}}
else{this.addParam(params,paramName+":-","");}};KalturaClientBase.prototype.startMultiRequest=function()
{this.useMultiRequest=true;};KalturaClientBase.prototype.doMultiRequest=function(callback)
{return this.doQueue(callback);};KalturaClientBase.prototype.isMultiRequest=function()
{return this.useMultiRequest;};KalturaClientBase.prototype.log=function(msg)
{if(this.shouldLog)
this.config.getLogger().log(msg);};function KalturaObjectBase()
{}
function KalturaServiceBase()
{}
KalturaServiceBase.prototype.init=function(client)
{this.client=client;};KalturaServiceBase.prototype.client=null;function KalturaConfiguration(partnerId)
{if(!partnerId)
partnerId=-1;if(typeof(partnerId)!='number')
throw"Invalid partner id - partnerId must be numeric!";this.partnerId=partnerId;}
KalturaConfiguration.prototype.logger=null;KalturaConfiguration.prototype.serviceUrl="http://www.kaltura.com";KalturaConfiguration.prototype.serviceBase="/api_v3/index.php?service=";KalturaConfiguration.prototype.partnerId=null;KalturaConfiguration.prototype.format=KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSONP;KalturaConfiguration.prototype.clientTag="js:14-12-16";KalturaConfiguration.prototype.setLogger=function(log)
{this.logger=log;};KalturaConfiguration.prototype.getLogger=function()
{return this.logger;};function KalturaAppearInListType(){}
KalturaAppearInListType.PARTNER_ONLY=1;KalturaAppearInListType.CATEGORY_MEMBERS_ONLY=3;function KalturaAssetParamsDeletePolicy(){}
KalturaAssetParamsDeletePolicy.KEEP=0;KalturaAssetParamsDeletePolicy.DELETE=1;function KalturaAssetParamsOrigin(){}
KalturaAssetParamsOrigin.CONVERT=0;KalturaAssetParamsOrigin.INGEST=1;KalturaAssetParamsOrigin.CONVERT_WHEN_MISSING=2;function KalturaAssetStatus(){}
KalturaAssetStatus.ERROR=-1;KalturaAssetStatus.QUEUED=0;KalturaAssetStatus.READY=2;KalturaAssetStatus.DELETED=3;KalturaAssetStatus.IMPORTING=7;KalturaAssetStatus.EXPORTING=9;function KalturaAttachmentAssetStatus(){}
KalturaAttachmentAssetStatus.ERROR=-1;KalturaAttachmentAssetStatus.QUEUED=0;KalturaAttachmentAssetStatus.READY=2;KalturaAttachmentAssetStatus.DELETED=3;KalturaAttachmentAssetStatus.IMPORTING=7;KalturaAttachmentAssetStatus.EXPORTING=9;function KalturaAuditTrailChangeXmlNodeType(){}
KalturaAuditTrailChangeXmlNodeType.CHANGED=1;KalturaAuditTrailChangeXmlNodeType.ADDED=2;KalturaAuditTrailChangeXmlNodeType.REMOVED=3;function KalturaAuditTrailContext(){}
KalturaAuditTrailContext.CLIENT=-1;KalturaAuditTrailContext.SCRIPT=0;KalturaAuditTrailContext.PS2=1;KalturaAuditTrailContext.API_V3=2;function KalturaAuditTrailFileSyncType(){}
KalturaAuditTrailFileSyncType.FILE=1;KalturaAuditTrailFileSyncType.LINK=2;KalturaAuditTrailFileSyncType.URL=3;function KalturaAuditTrailStatus(){}
KalturaAuditTrailStatus.PENDING=1;KalturaAuditTrailStatus.READY=2;KalturaAuditTrailStatus.FAILED=3;function KalturaBatchJobErrorTypes(){}
KalturaBatchJobErrorTypes.APP=0;KalturaBatchJobErrorTypes.RUNTIME=1;KalturaBatchJobErrorTypes.HTTP=2;KalturaBatchJobErrorTypes.CURL=3;KalturaBatchJobErrorTypes.KALTURA_API=4;KalturaBatchJobErrorTypes.KALTURA_CLIENT=5;function KalturaBatchJobStatus(){}
KalturaBatchJobStatus.PENDING=0;KalturaBatchJobStatus.QUEUED=1;KalturaBatchJobStatus.PROCESSING=2;KalturaBatchJobStatus.PROCESSED=3;KalturaBatchJobStatus.MOVEFILE=4;KalturaBatchJobStatus.FINISHED=5;KalturaBatchJobStatus.FAILED=6;KalturaBatchJobStatus.ABORTED=7;KalturaBatchJobStatus.ALMOST_DONE=8;KalturaBatchJobStatus.RETRY=9;KalturaBatchJobStatus.FATAL=10;KalturaBatchJobStatus.DONT_PROCESS=11;KalturaBatchJobStatus.FINISHED_PARTIALLY=12;function KalturaBitRateMode(){}
KalturaBitRateMode.CBR=1;KalturaBitRateMode.VBR=2;function KalturaBulkUploadCsvVersion(){}
KalturaBulkUploadCsvVersion.V1=1;KalturaBulkUploadCsvVersion.V2=2;KalturaBulkUploadCsvVersion.V3=3;function KalturaCaptionAssetStatus(){}
KalturaCaptionAssetStatus.ERROR=-1;KalturaCaptionAssetStatus.QUEUED=0;KalturaCaptionAssetStatus.READY=2;KalturaCaptionAssetStatus.DELETED=3;KalturaCaptionAssetStatus.IMPORTING=7;KalturaCaptionAssetStatus.EXPORTING=9;function KalturaCategoryEntryStatus(){}
KalturaCategoryEntryStatus.PENDING=1;KalturaCategoryEntryStatus.ACTIVE=2;KalturaCategoryEntryStatus.DELETED=3;KalturaCategoryEntryStatus.REJECTED=4;function KalturaCategoryStatus(){}
KalturaCategoryStatus.UPDATING=1;KalturaCategoryStatus.ACTIVE=2;KalturaCategoryStatus.DELETED=3;KalturaCategoryStatus.PURGED=4;function KalturaCategoryUserPermissionLevel(){}
KalturaCategoryUserPermissionLevel.MANAGER=0;KalturaCategoryUserPermissionLevel.MODERATOR=1;KalturaCategoryUserPermissionLevel.CONTRIBUTOR=2;KalturaCategoryUserPermissionLevel.MEMBER=3;KalturaCategoryUserPermissionLevel.NONE=4;function KalturaCategoryUserStatus(){}
KalturaCategoryUserStatus.ACTIVE=1;KalturaCategoryUserStatus.PENDING=2;KalturaCategoryUserStatus.NOT_ACTIVE=3;KalturaCategoryUserStatus.DELETED=4;function KalturaCommercialUseType(){}
KalturaCommercialUseType.NON_COMMERCIAL_USE=0;KalturaCommercialUseType.COMMERCIAL_USE=1;function KalturaContributionPolicyType(){}
KalturaContributionPolicyType.ALL=1;KalturaContributionPolicyType.MEMBERS_WITH_CONTRIBUTION_PERMISSION=2;function KalturaControlPanelCommandStatus(){}
KalturaControlPanelCommandStatus.PENDING=1;KalturaControlPanelCommandStatus.HANDLED=2;KalturaControlPanelCommandStatus.DONE=3;KalturaControlPanelCommandStatus.FAILED=4;function KalturaControlPanelCommandTargetType(){}
KalturaControlPanelCommandTargetType.DATA_CENTER=1;KalturaControlPanelCommandTargetType.SCHEDULER=2;KalturaControlPanelCommandTargetType.JOB_TYPE=3;KalturaControlPanelCommandTargetType.JOB=4;KalturaControlPanelCommandTargetType.BATCH=5;function KalturaControlPanelCommandType(){}
KalturaControlPanelCommandType.KILL=4;function KalturaCountryRestrictionType(){}
KalturaCountryRestrictionType.RESTRICT_COUNTRY_LIST=0;KalturaCountryRestrictionType.ALLOW_COUNTRY_LIST=1;function KalturaCuePointStatus(){}
KalturaCuePointStatus.READY=1;KalturaCuePointStatus.DELETED=2;KalturaCuePointStatus.HANDLED=3;function KalturaDVRStatus(){}
KalturaDVRStatus.DISABLED=0;KalturaDVRStatus.ENABLED=1;function KalturaDeleteFlavorsLogicType(){}
KalturaDeleteFlavorsLogicType.KEEP_LIST_DELETE_OTHERS=1;KalturaDeleteFlavorsLogicType.DELETE_LIST=2;KalturaDeleteFlavorsLogicType.DELETE_KEEP_SMALLEST=3;function KalturaDeliveryStatus(){}
KalturaDeliveryStatus.ACTIVE=0;KalturaDeliveryStatus.DELETED=1;KalturaDeliveryStatus.STAGING_IN=2;KalturaDeliveryStatus.STAGING_OUT=3;function KalturaDirectoryRestrictionType(){}
KalturaDirectoryRestrictionType.DONT_DISPLAY=0;KalturaDirectoryRestrictionType.DISPLAY_WITH_LINK=1;function KalturaDistributionAction(){}
KalturaDistributionAction.SUBMIT=1;KalturaDistributionAction.UPDATE=2;KalturaDistributionAction.DELETE=3;KalturaDistributionAction.FETCH_REPORT=4;function KalturaDistributionErrorType(){}
KalturaDistributionErrorType.MISSING_FLAVOR=1;KalturaDistributionErrorType.MISSING_THUMBNAIL=2;KalturaDistributionErrorType.MISSING_METADATA=3;KalturaDistributionErrorType.INVALID_DATA=4;KalturaDistributionErrorType.MISSING_ASSET=5;KalturaDistributionErrorType.CONDITION_NOT_MET=6;function KalturaDistributionFieldRequiredStatus(){}
KalturaDistributionFieldRequiredStatus.NOT_REQUIRED=0;KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PROVIDER=1;KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PARTNER=2;KalturaDistributionFieldRequiredStatus.REQUIRED_FOR_AUTOMATIC_DISTRIBUTION=3;function KalturaDistributionProfileActionStatus(){}
KalturaDistributionProfileActionStatus.DISABLED=1;KalturaDistributionProfileActionStatus.AUTOMATIC=2;KalturaDistributionProfileActionStatus.MANUAL=3;function KalturaDistributionProfileStatus(){}
KalturaDistributionProfileStatus.DISABLED=1;KalturaDistributionProfileStatus.ENABLED=2;KalturaDistributionProfileStatus.DELETED=3;function KalturaDistributionProtocol(){}
KalturaDistributionProtocol.FTP=1;KalturaDistributionProtocol.SCP=2;KalturaDistributionProtocol.SFTP=3;KalturaDistributionProtocol.HTTP=4;KalturaDistributionProtocol.HTTPS=5;KalturaDistributionProtocol.ASPERA=10;function KalturaDistributionValidationErrorType(){}
KalturaDistributionValidationErrorType.CUSTOM_ERROR=0;KalturaDistributionValidationErrorType.STRING_EMPTY=1;KalturaDistributionValidationErrorType.STRING_TOO_LONG=2;KalturaDistributionValidationErrorType.STRING_TOO_SHORT=3;KalturaDistributionValidationErrorType.INVALID_FORMAT=4;function KalturaDocumentType(){}
KalturaDocumentType.DOCUMENT=11;KalturaDocumentType.SWF=12;KalturaDocumentType.PDF=13;function KalturaDrmLicenseExpirationPolicy(){}
KalturaDrmLicenseExpirationPolicy.FIXED_DURATION=1;KalturaDrmLicenseExpirationPolicy.ENTRY_SCHEDULING_END=2;KalturaDrmLicenseExpirationPolicy.UNLIMITED=3;function KalturaDrmPolicyStatus(){}
KalturaDrmPolicyStatus.ACTIVE=1;KalturaDrmPolicyStatus.DELETED=2;function KalturaDrmProfileStatus(){}
KalturaDrmProfileStatus.ACTIVE=1;KalturaDrmProfileStatus.DELETED=2;function KalturaDropFolderContentFileHandlerMatchPolicy(){}
KalturaDropFolderContentFileHandlerMatchPolicy.ADD_AS_NEW=1;KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_ADD_AS_NEW=2;KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_KEEP_IN_FOLDER=3;function KalturaDropFolderFileDeletePolicy(){}
KalturaDropFolderFileDeletePolicy.MANUAL_DELETE=1;KalturaDropFolderFileDeletePolicy.AUTO_DELETE=2;KalturaDropFolderFileDeletePolicy.AUTO_DELETE_WHEN_ENTRY_IS_READY=3;function KalturaDropFolderFileStatus(){}
KalturaDropFolderFileStatus.UPLOADING=1;KalturaDropFolderFileStatus.PENDING=2;KalturaDropFolderFileStatus.WAITING=3;KalturaDropFolderFileStatus.HANDLED=4;KalturaDropFolderFileStatus.IGNORE=5;KalturaDropFolderFileStatus.DELETED=6;KalturaDropFolderFileStatus.PURGED=7;KalturaDropFolderFileStatus.NO_MATCH=8;KalturaDropFolderFileStatus.ERROR_HANDLING=9;KalturaDropFolderFileStatus.ERROR_DELETING=10;KalturaDropFolderFileStatus.DOWNLOADING=11;KalturaDropFolderFileStatus.ERROR_DOWNLOADING=12;KalturaDropFolderFileStatus.PROCESSING=13;KalturaDropFolderFileStatus.PARSED=14;KalturaDropFolderFileStatus.DETECTED=15;function KalturaDropFolderStatus(){}
KalturaDropFolderStatus.DISABLED=0;KalturaDropFolderStatus.ENABLED=1;KalturaDropFolderStatus.DELETED=2;KalturaDropFolderStatus.ERROR=3;function KalturaEditorType(){}
KalturaEditorType.SIMPLE=1;KalturaEditorType.ADVANCED=2;function KalturaEmailIngestionProfileStatus(){}
KalturaEmailIngestionProfileStatus.INACTIVE=0;KalturaEmailIngestionProfileStatus.ACTIVE=1;function KalturaEmailNotificationTemplatePriority(){}
KalturaEmailNotificationTemplatePriority.HIGH=1;KalturaEmailNotificationTemplatePriority.NORMAL=3;KalturaEmailNotificationTemplatePriority.LOW=5;function KalturaEntryDistributionFlag(){}
KalturaEntryDistributionFlag.NONE=0;KalturaEntryDistributionFlag.SUBMIT_REQUIRED=1;KalturaEntryDistributionFlag.DELETE_REQUIRED=2;KalturaEntryDistributionFlag.UPDATE_REQUIRED=3;KalturaEntryDistributionFlag.ENABLE_REQUIRED=4;KalturaEntryDistributionFlag.DISABLE_REQUIRED=5;function KalturaEntryDistributionStatus(){}
KalturaEntryDistributionStatus.PENDING=0;KalturaEntryDistributionStatus.QUEUED=1;KalturaEntryDistributionStatus.READY=2;KalturaEntryDistributionStatus.DELETED=3;KalturaEntryDistributionStatus.SUBMITTING=4;KalturaEntryDistributionStatus.UPDATING=5;KalturaEntryDistributionStatus.DELETING=6;KalturaEntryDistributionStatus.ERROR_SUBMITTING=7;KalturaEntryDistributionStatus.ERROR_UPDATING=8;KalturaEntryDistributionStatus.ERROR_DELETING=9;KalturaEntryDistributionStatus.REMOVED=10;KalturaEntryDistributionStatus.IMPORT_SUBMITTING=11;KalturaEntryDistributionStatus.IMPORT_UPDATING=12;function KalturaEntryDistributionSunStatus(){}
KalturaEntryDistributionSunStatus.BEFORE_SUNRISE=1;KalturaEntryDistributionSunStatus.AFTER_SUNRISE=2;KalturaEntryDistributionSunStatus.AFTER_SUNSET=3;function KalturaEntryModerationStatus(){}
KalturaEntryModerationStatus.PENDING_MODERATION=1;KalturaEntryModerationStatus.APPROVED=2;KalturaEntryModerationStatus.REJECTED=3;KalturaEntryModerationStatus.FLAGGED_FOR_REVIEW=5;KalturaEntryModerationStatus.AUTO_APPROVED=6;function KalturaEventNotificationTemplateStatus(){}
KalturaEventNotificationTemplateStatus.DISABLED=1;KalturaEventNotificationTemplateStatus.ACTIVE=2;KalturaEventNotificationTemplateStatus.DELETED=3;function KalturaFeatureStatusType(){}
KalturaFeatureStatusType.LOCK_CATEGORY=1;KalturaFeatureStatusType.CATEGORY=2;KalturaFeatureStatusType.CATEGORY_ENTRY=3;KalturaFeatureStatusType.ENTRY=4;KalturaFeatureStatusType.CATEGORY_USER=5;KalturaFeatureStatusType.USER=6;function KalturaFileSyncStatus(){}
KalturaFileSyncStatus.ERROR=-1;KalturaFileSyncStatus.PENDING=1;KalturaFileSyncStatus.READY=2;KalturaFileSyncStatus.DELETED=3;KalturaFileSyncStatus.PURGED=4;function KalturaFileSyncType(){}
KalturaFileSyncType.FILE=1;KalturaFileSyncType.LINK=2;KalturaFileSyncType.URL=3;function KalturaFlavorAssetStatus(){}
KalturaFlavorAssetStatus.ERROR=-1;KalturaFlavorAssetStatus.QUEUED=0;KalturaFlavorAssetStatus.CONVERTING=1;KalturaFlavorAssetStatus.READY=2;KalturaFlavorAssetStatus.DELETED=3;KalturaFlavorAssetStatus.NOT_APPLICABLE=4;KalturaFlavorAssetStatus.TEMP=5;KalturaFlavorAssetStatus.WAIT_FOR_CONVERT=6;KalturaFlavorAssetStatus.IMPORTING=7;KalturaFlavorAssetStatus.VALIDATING=8;KalturaFlavorAssetStatus.EXPORTING=9;function KalturaFlavorReadyBehaviorType(){}
KalturaFlavorReadyBehaviorType.NO_IMPACT=0;KalturaFlavorReadyBehaviorType.INHERIT_FLAVOR_PARAMS=0;KalturaFlavorReadyBehaviorType.REQUIRED=1;KalturaFlavorReadyBehaviorType.OPTIONAL=2;function KalturaGender(){}
KalturaGender.UNKNOWN=0;KalturaGender.MALE=1;KalturaGender.FEMALE=2;function KalturaGenericDistributionProviderParser(){}
KalturaGenericDistributionProviderParser.XSL=1;KalturaGenericDistributionProviderParser.XPATH=2;KalturaGenericDistributionProviderParser.REGEX=3;function KalturaGenericDistributionProviderStatus(){}
KalturaGenericDistributionProviderStatus.ACTIVE=2;KalturaGenericDistributionProviderStatus.DELETED=3;function KalturaHttpNotificationAuthenticationMethod(){}
KalturaHttpNotificationAuthenticationMethod.ANYSAFE=-18;KalturaHttpNotificationAuthenticationMethod.ANY=-17;KalturaHttpNotificationAuthenticationMethod.BASIC=1;KalturaHttpNotificationAuthenticationMethod.DIGEST=2;KalturaHttpNotificationAuthenticationMethod.GSSNEGOTIATE=4;KalturaHttpNotificationAuthenticationMethod.NTLM=8;function KalturaHttpNotificationMethod(){}
KalturaHttpNotificationMethod.GET=1;KalturaHttpNotificationMethod.POST=2;KalturaHttpNotificationMethod.PUT=3;KalturaHttpNotificationMethod.DELETE=4;function KalturaHttpNotificationSslVersion(){}
KalturaHttpNotificationSslVersion.V2=2;KalturaHttpNotificationSslVersion.V3=3;function KalturaInheritanceType(){}
KalturaInheritanceType.INHERIT=1;KalturaInheritanceType.MANUAL=2;function KalturaIpAddressRestrictionType(){}
KalturaIpAddressRestrictionType.RESTRICT_LIST=0;KalturaIpAddressRestrictionType.ALLOW_LIST=1;function KalturaLicenseType(){}
KalturaLicenseType.UNKNOWN=-1;KalturaLicenseType.NONE=0;KalturaLicenseType.COPYRIGHTED=1;KalturaLicenseType.PUBLIC_DOMAIN=2;KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION=3;KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE=4;KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES=5;KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL=6;KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE=7;KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES=8;KalturaLicenseType.GFDL=9;KalturaLicenseType.GPL=10;KalturaLicenseType.AFFERO_GPL=11;KalturaLicenseType.LGPL=12;KalturaLicenseType.BSD=13;KalturaLicenseType.APACHE=14;KalturaLicenseType.MOZILLA=15;function KalturaLimitFlavorsRestrictionType(){}
KalturaLimitFlavorsRestrictionType.RESTRICT_LIST=0;KalturaLimitFlavorsRestrictionType.ALLOW_LIST=1;function KalturaLivePublishStatus(){}
KalturaLivePublishStatus.DISABLED=0;KalturaLivePublishStatus.ENABLED=1;function KalturaLiveReportExportType(){}
KalturaLiveReportExportType.PARTNER_TOTAL_ALL=1;KalturaLiveReportExportType.PARTNER_TOTAL_LIVE=2;KalturaLiveReportExportType.ENTRY_TIME_LINE_ALL=11;KalturaLiveReportExportType.ENTRY_TIME_LINE_LIVE=12;KalturaLiveReportExportType.LOCATION_ALL=21;KalturaLiveReportExportType.LOCATION_LIVE=22;KalturaLiveReportExportType.SYNDICATION_ALL=31;KalturaLiveReportExportType.SYNDICATION_LIVE=32;function KalturaMailJobStatus(){}
KalturaMailJobStatus.PENDING=1;KalturaMailJobStatus.SENT=2;KalturaMailJobStatus.ERROR=3;KalturaMailJobStatus.QUEUED=4;function KalturaMediaServerIndex(){}
KalturaMediaServerIndex.PRIMARY=0;KalturaMediaServerIndex.SECONDARY=1;function KalturaMediaType(){}
KalturaMediaType.VIDEO=1;KalturaMediaType.IMAGE=2;KalturaMediaType.AUDIO=5;KalturaMediaType.LIVE_STREAM_FLASH=201;KalturaMediaType.LIVE_STREAM_WINDOWS_MEDIA=202;KalturaMediaType.LIVE_STREAM_REAL_MEDIA=203;KalturaMediaType.LIVE_STREAM_QUICKTIME=204;function KalturaMetadataProfileCreateMode(){}
KalturaMetadataProfileCreateMode.API=1;KalturaMetadataProfileCreateMode.KMC=2;KalturaMetadataProfileCreateMode.APP=3;function KalturaMetadataProfileStatus(){}
KalturaMetadataProfileStatus.ACTIVE=1;KalturaMetadataProfileStatus.DEPRECATED=2;KalturaMetadataProfileStatus.TRANSFORMING=3;function KalturaMetadataStatus(){}
KalturaMetadataStatus.VALID=1;KalturaMetadataStatus.INVALID=2;KalturaMetadataStatus.DELETED=3;function KalturaModerationFlagType(){}
KalturaModerationFlagType.SEXUAL_CONTENT=1;KalturaModerationFlagType.VIOLENT_REPULSIVE=2;KalturaModerationFlagType.HARMFUL_DANGEROUS=3;KalturaModerationFlagType.SPAM_COMMERCIALS=4;KalturaModerationFlagType.COPYRIGHT=5;KalturaModerationFlagType.TERMS_OF_USE_VIOLATION=6;function KalturaMrssExtensionMode(){}
KalturaMrssExtensionMode.APPEND=1;KalturaMrssExtensionMode.REPLACE=2;function KalturaNotificationObjectType(){}
KalturaNotificationObjectType.ENTRY=1;KalturaNotificationObjectType.KSHOW=2;KalturaNotificationObjectType.USER=3;KalturaNotificationObjectType.BATCH_JOB=4;function KalturaNotificationStatus(){}
KalturaNotificationStatus.PENDING=1;KalturaNotificationStatus.SENT=2;KalturaNotificationStatus.ERROR=3;KalturaNotificationStatus.SHOULD_RESEND=4;KalturaNotificationStatus.ERROR_RESENDING=5;KalturaNotificationStatus.SENT_SYNCH=6;KalturaNotificationStatus.QUEUED=7;function KalturaNotificationType(){}
KalturaNotificationType.ENTRY_ADD=1;KalturaNotificationType.ENTR_UPDATE_PERMISSIONS=2;KalturaNotificationType.ENTRY_DELETE=3;KalturaNotificationType.ENTRY_BLOCK=4;KalturaNotificationType.ENTRY_UPDATE=5;KalturaNotificationType.ENTRY_UPDATE_THUMBNAIL=6;KalturaNotificationType.ENTRY_UPDATE_MODERATION=7;KalturaNotificationType.USER_ADD=21;KalturaNotificationType.USER_BANNED=26;function KalturaNullableBoolean(){}
KalturaNullableBoolean.NULL_VALUE=-1;KalturaNullableBoolean.FALSE_VALUE=0;KalturaNullableBoolean.TRUE_VALUE=1;function KalturaPartnerGroupType(){}
KalturaPartnerGroupType.PUBLISHER=1;KalturaPartnerGroupType.VAR_GROUP=2;KalturaPartnerGroupType.GROUP=3;KalturaPartnerGroupType.TEMPLATE=4;function KalturaPartnerStatus(){}
KalturaPartnerStatus.DELETED=0;KalturaPartnerStatus.ACTIVE=1;KalturaPartnerStatus.BLOCKED=2;KalturaPartnerStatus.FULL_BLOCK=3;function KalturaPartnerType(){}
KalturaPartnerType.KMC=1;KalturaPartnerType.WIKI=100;KalturaPartnerType.WORDPRESS=101;KalturaPartnerType.DRUPAL=102;KalturaPartnerType.DEKIWIKI=103;KalturaPartnerType.MOODLE=104;KalturaPartnerType.COMMUNITY_EDITION=105;KalturaPartnerType.JOOMLA=106;KalturaPartnerType.BLACKBOARD=107;KalturaPartnerType.SAKAI=108;KalturaPartnerType.ADMIN_CONSOLE=109;function KalturaPermissionStatus(){}
KalturaPermissionStatus.ACTIVE=1;KalturaPermissionStatus.BLOCKED=2;KalturaPermissionStatus.DELETED=3;function KalturaPermissionType(){}
KalturaPermissionType.NORMAL=1;KalturaPermissionType.SPECIAL_FEATURE=2;KalturaPermissionType.PLUGIN=3;KalturaPermissionType.PARTNER_GROUP=4;function KalturaPlayReadyAnalogVideoOPL(){}
KalturaPlayReadyAnalogVideoOPL.MIN_100=100;KalturaPlayReadyAnalogVideoOPL.MIN_150=150;KalturaPlayReadyAnalogVideoOPL.MIN_200=200;function KalturaPlayReadyCompressedDigitalVideoOPL(){}
KalturaPlayReadyCompressedDigitalVideoOPL.MIN_400=400;KalturaPlayReadyCompressedDigitalVideoOPL.MIN_500=500;function KalturaPlayReadyDigitalAudioOPL(){}
KalturaPlayReadyDigitalAudioOPL.MIN_100=100;KalturaPlayReadyDigitalAudioOPL.MIN_150=150;KalturaPlayReadyDigitalAudioOPL.MIN_200=200;KalturaPlayReadyDigitalAudioOPL.MIN_250=250;KalturaPlayReadyDigitalAudioOPL.MIN_300=300;function KalturaPlayReadyLicenseRemovalPolicy(){}
KalturaPlayReadyLicenseRemovalPolicy.FIXED_FROM_EXPIRATION=1;KalturaPlayReadyLicenseRemovalPolicy.ENTRY_SCHEDULING_END=2;KalturaPlayReadyLicenseRemovalPolicy.NONE=3;function KalturaPlayReadyMinimumLicenseSecurityLevel(){}
KalturaPlayReadyMinimumLicenseSecurityLevel.NON_COMMERCIAL_QUALITY=150;KalturaPlayReadyMinimumLicenseSecurityLevel.COMMERCIAL_QUALITY=2000;function KalturaPlayReadyUncompressedDigitalVideoOPL(){}
KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_100=100;KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_250=250;KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_270=270;KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_300=300;function KalturaPlaylistType(){}
KalturaPlaylistType.STATIC_LIST=3;KalturaPlaylistType.DYNAMIC=10;KalturaPlaylistType.EXTERNAL=101;function KalturaPrivacyType(){}
KalturaPrivacyType.ALL=1;KalturaPrivacyType.AUTHENTICATED_USERS=2;KalturaPrivacyType.MEMBERS_ONLY=3;function KalturaRecordStatus(){}
KalturaRecordStatus.DISABLED=0;KalturaRecordStatus.ENABLED=1;function KalturaReportType(){}
KalturaReportType.TOP_CONTENT=1;KalturaReportType.CONTENT_DROPOFF=2;KalturaReportType.CONTENT_INTERACTIONS=3;KalturaReportType.MAP_OVERLAY=4;KalturaReportType.TOP_CONTRIBUTORS=5;KalturaReportType.TOP_SYNDICATION=6;KalturaReportType.CONTENT_CONTRIBUTIONS=7;KalturaReportType.USER_ENGAGEMENT=11;KalturaReportType.SPEFICIC_USER_ENGAGEMENT=12;KalturaReportType.USER_TOP_CONTENT=13;KalturaReportType.USER_CONTENT_DROPOFF=14;KalturaReportType.USER_CONTENT_INTERACTIONS=15;KalturaReportType.APPLICATIONS=16;KalturaReportType.USER_USAGE=17;KalturaReportType.SPECIFIC_USER_USAGE=18;KalturaReportType.VAR_USAGE=19;KalturaReportType.TOP_CREATORS=20;KalturaReportType.PLATFORMS=21;KalturaReportType.OPERATION_SYSTEM=22;KalturaReportType.BROWSERS=23;KalturaReportType.LIVE=24;KalturaReportType.PARTNER_USAGE=201;function KalturaResponseType(){}
KalturaResponseType.RESPONSE_TYPE_JSON=1;KalturaResponseType.RESPONSE_TYPE_XML=2;KalturaResponseType.RESPONSE_TYPE_PHP=3;KalturaResponseType.RESPONSE_TYPE_PHP_ARRAY=4;KalturaResponseType.RESPONSE_TYPE_HTML=7;KalturaResponseType.RESPONSE_TYPE_MRSS=8;KalturaResponseType.RESPONSE_TYPE_JSONP=9;function KalturaScheduledTaskAddOrRemoveType(){}
KalturaScheduledTaskAddOrRemoveType.ADD=1;KalturaScheduledTaskAddOrRemoveType.REMOVE=2;function KalturaScheduledTaskProfileStatus(){}
KalturaScheduledTaskProfileStatus.DISABLED=1;KalturaScheduledTaskProfileStatus.ACTIVE=2;KalturaScheduledTaskProfileStatus.DELETED=3;KalturaScheduledTaskProfileStatus.SUSPENDED=4;KalturaScheduledTaskProfileStatus.DRY_RUN_ONLY=5;function KalturaSearchOperatorType(){}
KalturaSearchOperatorType.SEARCH_AND=1;KalturaSearchOperatorType.SEARCH_OR=2;function KalturaSearchProviderType(){}
KalturaSearchProviderType.FLICKR=3;KalturaSearchProviderType.YOUTUBE=4;KalturaSearchProviderType.MYSPACE=7;KalturaSearchProviderType.PHOTOBUCKET=8;KalturaSearchProviderType.JAMENDO=9;KalturaSearchProviderType.CCMIXTER=10;KalturaSearchProviderType.NYPL=11;KalturaSearchProviderType.CURRENT=12;KalturaSearchProviderType.MEDIA_COMMONS=13;KalturaSearchProviderType.KALTURA=20;KalturaSearchProviderType.KALTURA_USER_CLIPS=21;KalturaSearchProviderType.ARCHIVE_ORG=22;KalturaSearchProviderType.KALTURA_PARTNER=23;KalturaSearchProviderType.METACAFE=24;KalturaSearchProviderType.SEARCH_PROXY=28;KalturaSearchProviderType.PARTNER_SPECIFIC=100;function KalturaSessionType(){}
KalturaSessionType.USER=0;KalturaSessionType.ADMIN=2;function KalturaShortLinkStatus(){}
KalturaShortLinkStatus.DISABLED=1;KalturaShortLinkStatus.ENABLED=2;KalturaShortLinkStatus.DELETED=3;function KalturaSiteRestrictionType(){}
KalturaSiteRestrictionType.RESTRICT_SITE_LIST=0;KalturaSiteRestrictionType.ALLOW_SITE_LIST=1;function KalturaStatsEventType(){}
KalturaStatsEventType.WIDGET_LOADED=1;KalturaStatsEventType.MEDIA_LOADED=2;KalturaStatsEventType.PLAY=3;KalturaStatsEventType.PLAY_REACHED_25=4;KalturaStatsEventType.PLAY_REACHED_50=5;KalturaStatsEventType.PLAY_REACHED_75=6;KalturaStatsEventType.PLAY_REACHED_100=7;KalturaStatsEventType.OPEN_EDIT=8;KalturaStatsEventType.OPEN_VIRAL=9;KalturaStatsEventType.OPEN_DOWNLOAD=10;KalturaStatsEventType.OPEN_REPORT=11;KalturaStatsEventType.BUFFER_START=12;KalturaStatsEventType.BUFFER_END=13;KalturaStatsEventType.OPEN_FULL_SCREEN=14;KalturaStatsEventType.CLOSE_FULL_SCREEN=15;KalturaStatsEventType.REPLAY=16;KalturaStatsEventType.SEEK=17;KalturaStatsEventType.OPEN_UPLOAD=18;KalturaStatsEventType.SAVE_PUBLISH=19;KalturaStatsEventType.CLOSE_EDITOR=20;KalturaStatsEventType.PRE_BUMPER_PLAYED=21;KalturaStatsEventType.POST_BUMPER_PLAYED=22;KalturaStatsEventType.BUMPER_CLICKED=23;KalturaStatsEventType.PREROLL_STARTED=24;KalturaStatsEventType.MIDROLL_STARTED=25;KalturaStatsEventType.POSTROLL_STARTED=26;KalturaStatsEventType.OVERLAY_STARTED=27;KalturaStatsEventType.PREROLL_CLICKED=28;KalturaStatsEventType.MIDROLL_CLICKED=29;KalturaStatsEventType.POSTROLL_CLICKED=30;KalturaStatsEventType.OVERLAY_CLICKED=31;KalturaStatsEventType.PREROLL_25=32;KalturaStatsEventType.PREROLL_50=33;KalturaStatsEventType.PREROLL_75=34;KalturaStatsEventType.MIDROLL_25=35;KalturaStatsEventType.MIDROLL_50=36;KalturaStatsEventType.MIDROLL_75=37;KalturaStatsEventType.POSTROLL_25=38;KalturaStatsEventType.POSTROLL_50=39;KalturaStatsEventType.POSTROLL_75=40;function KalturaStatsFeatureType(){}
KalturaStatsFeatureType.NONE=0;KalturaStatsFeatureType.RELATED=1;function KalturaStatsKmcEventType(){}
KalturaStatsKmcEventType.CONTENT_PAGE_VIEW=1001;KalturaStatsKmcEventType.CONTENT_ADD_PLAYLIST=1010;KalturaStatsKmcEventType.CONTENT_EDIT_PLAYLIST=1011;KalturaStatsKmcEventType.CONTENT_DELETE_PLAYLIST=1012;KalturaStatsKmcEventType.CONTENT_EDIT_ENTRY=1013;KalturaStatsKmcEventType.CONTENT_CHANGE_THUMBNAIL=1014;KalturaStatsKmcEventType.CONTENT_ADD_TAGS=1015;KalturaStatsKmcEventType.CONTENT_REMOVE_TAGS=1016;KalturaStatsKmcEventType.CONTENT_ADD_ADMIN_TAGS=1017;KalturaStatsKmcEventType.CONTENT_REMOVE_ADMIN_TAGS=1018;KalturaStatsKmcEventType.CONTENT_DOWNLOAD=1019;KalturaStatsKmcEventType.CONTENT_APPROVE_MODERATION=1020;KalturaStatsKmcEventType.CONTENT_REJECT_MODERATION=1021;KalturaStatsKmcEventType.CONTENT_BULK_UPLOAD=1022;KalturaStatsKmcEventType.CONTENT_ADMIN_KCW_UPLOAD=1023;KalturaStatsKmcEventType.ACCOUNT_CHANGE_PARTNER_INFO=1030;KalturaStatsKmcEventType.ACCOUNT_CHANGE_LOGIN_INFO=1031;KalturaStatsKmcEventType.ACCOUNT_CONTACT_US_USAGE=1032;KalturaStatsKmcEventType.ACCOUNT_UPDATE_SERVER_SETTINGS=1033;KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_OVERVIEW=1034;KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL=1035;KalturaStatsKmcEventType.ACCOUNT_TRANSCODING_SETTINGS=1036;KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_UPGRADE=1037;KalturaStatsKmcEventType.ACCOUNT_SAVE_SERVER_SETTINGS=1038;KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL_DELETE=1039;KalturaStatsKmcEventType.ACCOUNT_SAVE_TRANSCODING_SETTINGS=1040;KalturaStatsKmcEventType.LOGIN=1041;KalturaStatsKmcEventType.DASHBOARD_IMPORT_CONTENT=1042;KalturaStatsKmcEventType.DASHBOARD_UPDATE_CONTENT=1043;KalturaStatsKmcEventType.DASHBOARD_ACCOUNT_CONTACT_US=1044;KalturaStatsKmcEventType.DASHBOARD_VIEW_REPORTS=1045;KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYER=1046;KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYLIST=1047;KalturaStatsKmcEventType.DASHBOARD_CUSTOMIZE_PLAYERS=1048;KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO=1050;KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_PLAYLIST=1051;KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST=1052;KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO=1053;KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_PLAYLIST=1054;KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST=1055;KalturaStatsKmcEventType.APP_STUDIO_DUPLICATE_PLAYER=1056;KalturaStatsKmcEventType.CONTENT_CONTENT_GO_TO_PAGE=1057;KalturaStatsKmcEventType.CONTENT_DELETE_ITEM=1058;KalturaStatsKmcEventType.CONTENT_DELETE_MIX=1059;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB=1070;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB=1071;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB=1072;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS=1073;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS=1074;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS=1075;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTENT=1076;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DROPOFF=1077;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS=1078;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS=1079;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN=1080;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION=1081;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN=1082;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF=1083;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN=1084;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN=1085;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY=1086;KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY=1087;KalturaStatsKmcEventType.CONTENT_ENTRY_DRILLDOWN=1088;KalturaStatsKmcEventType.CONTENT_OPEN_PREVIEW_AND_EMBED=1089;function KalturaStorageProfileDeliveryStatus(){}
KalturaStorageProfileDeliveryStatus.ACTIVE=1;KalturaStorageProfileDeliveryStatus.BLOCKED=2;function KalturaStorageProfileReadyBehavior(){}
KalturaStorageProfileReadyBehavior.NO_IMPACT=0;KalturaStorageProfileReadyBehavior.REQUIRED=1;function KalturaStorageProfileStatus(){}
KalturaStorageProfileStatus.DISABLED=1;KalturaStorageProfileStatus.AUTOMATIC=2;KalturaStorageProfileStatus.MANUAL=3;function KalturaSyndicationFeedStatus(){}
KalturaSyndicationFeedStatus.DELETED=-1;KalturaSyndicationFeedStatus.ACTIVE=1;function KalturaSyndicationFeedType(){}
KalturaSyndicationFeedType.GOOGLE_VIDEO=1;KalturaSyndicationFeedType.YAHOO=2;KalturaSyndicationFeedType.ITUNES=3;KalturaSyndicationFeedType.TUBE_MOGUL=4;KalturaSyndicationFeedType.KALTURA=5;KalturaSyndicationFeedType.KALTURA_XSLT=6;function KalturaThumbAssetStatus(){}
KalturaThumbAssetStatus.ERROR=-1;KalturaThumbAssetStatus.QUEUED=0;KalturaThumbAssetStatus.CAPTURING=1;KalturaThumbAssetStatus.READY=2;KalturaThumbAssetStatus.DELETED=3;KalturaThumbAssetStatus.IMPORTING=7;KalturaThumbAssetStatus.EXPORTING=9;function KalturaThumbCropType(){}
KalturaThumbCropType.RESIZE=1;KalturaThumbCropType.RESIZE_WITH_PADDING=2;KalturaThumbCropType.CROP=3;KalturaThumbCropType.CROP_FROM_TOP=4;KalturaThumbCropType.RESIZE_WITH_FORCE=5;function KalturaThumbCuePointSubType(){}
KalturaThumbCuePointSubType.SLIDE=1;KalturaThumbCuePointSubType.CHAPTER=2;function KalturaUiConfCreationMode(){}
KalturaUiConfCreationMode.WIZARD=2;KalturaUiConfCreationMode.ADVANCED=3;function KalturaUiConfObjType(){}
KalturaUiConfObjType.PLAYER=1;KalturaUiConfObjType.CONTRIBUTION_WIZARD=2;KalturaUiConfObjType.SIMPLE_EDITOR=3;KalturaUiConfObjType.ADVANCED_EDITOR=4;KalturaUiConfObjType.PLAYLIST=5;KalturaUiConfObjType.APP_STUDIO=6;KalturaUiConfObjType.KRECORD=7;KalturaUiConfObjType.PLAYER_V3=8;KalturaUiConfObjType.KMC_ACCOUNT=9;KalturaUiConfObjType.KMC_ANALYTICS=10;KalturaUiConfObjType.KMC_CONTENT=11;KalturaUiConfObjType.KMC_DASHBOARD=12;KalturaUiConfObjType.KMC_LOGIN=13;KalturaUiConfObjType.PLAYER_SL=14;KalturaUiConfObjType.CLIENTSIDE_ENCODER=15;KalturaUiConfObjType.KMC_GENERAL=16;KalturaUiConfObjType.KMC_ROLES_AND_PERMISSIONS=17;KalturaUiConfObjType.CLIPPER=18;KalturaUiConfObjType.KSR=19;KalturaUiConfObjType.KUPLOAD=20;function KalturaUpdateMethodType(){}
KalturaUpdateMethodType.MANUAL=0;KalturaUpdateMethodType.AUTOMATIC=1;function KalturaUploadErrorCode(){}
KalturaUploadErrorCode.NO_ERROR=0;KalturaUploadErrorCode.GENERAL_ERROR=1;KalturaUploadErrorCode.PARTIAL_UPLOAD=2;function KalturaUploadTokenStatus(){}
KalturaUploadTokenStatus.PENDING=0;KalturaUploadTokenStatus.PARTIAL_UPLOAD=1;KalturaUploadTokenStatus.FULL_UPLOAD=2;KalturaUploadTokenStatus.CLOSED=3;KalturaUploadTokenStatus.TIMED_OUT=4;KalturaUploadTokenStatus.DELETED=5;function KalturaUserAgentRestrictionType(){}
KalturaUserAgentRestrictionType.RESTRICT_LIST=0;KalturaUserAgentRestrictionType.ALLOW_LIST=1;function KalturaUserJoinPolicyType(){}
KalturaUserJoinPolicyType.AUTO_JOIN=1;KalturaUserJoinPolicyType.REQUEST_TO_JOIN=2;KalturaUserJoinPolicyType.NOT_ALLOWED=3;function KalturaUserRoleStatus(){}
KalturaUserRoleStatus.ACTIVE=1;KalturaUserRoleStatus.BLOCKED=2;KalturaUserRoleStatus.DELETED=3;function KalturaUserStatus(){}
KalturaUserStatus.BLOCKED=0;KalturaUserStatus.ACTIVE=1;KalturaUserStatus.DELETED=2;function KalturaVirusFoundAction(){}
KalturaVirusFoundAction.NONE=0;KalturaVirusFoundAction.DELETE=1;KalturaVirusFoundAction.CLEAN_NONE=2;KalturaVirusFoundAction.CLEAN_DELETE=3;function KalturaVirusScanJobResult(){}
KalturaVirusScanJobResult.SCAN_ERROR=1;KalturaVirusScanJobResult.FILE_IS_CLEAN=2;KalturaVirusScanJobResult.FILE_WAS_CLEANED=3;KalturaVirusScanJobResult.FILE_INFECTED=4;function KalturaVirusScanProfileStatus(){}
KalturaVirusScanProfileStatus.DISABLED=1;KalturaVirusScanProfileStatus.ENABLED=2;KalturaVirusScanProfileStatus.DELETED=3;function KalturaWidevineRepositorySyncMode(){}
KalturaWidevineRepositorySyncMode.MODIFY=0;function KalturaWidgetSecurityType(){}
KalturaWidgetSecurityType.NONE=1;KalturaWidgetSecurityType.TIMEHASH=2;function KalturaAccessControlOrderBy(){}
KalturaAccessControlOrderBy.CREATED_AT_ASC="+createdAt";KalturaAccessControlOrderBy.CREATED_AT_DESC="-createdAt";function KalturaAccessControlProfileOrderBy(){}
KalturaAccessControlProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaAccessControlProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaAccessControlProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaAccessControlProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaAdCuePointOrderBy(){}
KalturaAdCuePointOrderBy.CREATED_AT_ASC="+createdAt";KalturaAdCuePointOrderBy.DURATION_ASC="+duration";KalturaAdCuePointOrderBy.END_TIME_ASC="+endTime";KalturaAdCuePointOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaAdCuePointOrderBy.START_TIME_ASC="+startTime";KalturaAdCuePointOrderBy.TRIGGERED_AT_ASC="+triggeredAt";KalturaAdCuePointOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaAdCuePointOrderBy.CREATED_AT_DESC="-createdAt";KalturaAdCuePointOrderBy.DURATION_DESC="-duration";KalturaAdCuePointOrderBy.END_TIME_DESC="-endTime";KalturaAdCuePointOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaAdCuePointOrderBy.START_TIME_DESC="-startTime";KalturaAdCuePointOrderBy.TRIGGERED_AT_DESC="-triggeredAt";KalturaAdCuePointOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaAdProtocolType(){}
KalturaAdProtocolType.CUSTOM="0";KalturaAdProtocolType.VAST="1";KalturaAdProtocolType.VAST_2_0="2";KalturaAdProtocolType.VPAID="3";function KalturaAdType(){}
KalturaAdType.VIDEO="1";KalturaAdType.OVERLAY="2";function KalturaAdminUserOrderBy(){}
KalturaAdminUserOrderBy.CREATED_AT_ASC="+createdAt";KalturaAdminUserOrderBy.ID_ASC="+id";KalturaAdminUserOrderBy.CREATED_AT_DESC="-createdAt";KalturaAdminUserOrderBy.ID_DESC="-id";function KalturaAkamaiUniversalStreamType(){}
KalturaAkamaiUniversalStreamType.HD_IPHONE_IPAD_LIVE="HD iPhone/iPad Live";KalturaAkamaiUniversalStreamType.UNIVERSAL_STREAMING_LIVE="Universal Streaming Live";function KalturaAmazonS3StorageProfileFilesPermissionLevel(){}
KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_AUTHENTICATED_READ="authenticated-read";KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_PRIVATE="private";KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_PUBLIC_READ="public-read";KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_PUBLIC_READ_WRITE="public-read-write";function KalturaAmazonS3StorageProfileOrderBy(){}
KalturaAmazonS3StorageProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaAmazonS3StorageProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaAmazonS3StorageProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaAmazonS3StorageProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaAnnotationOrderBy(){}
KalturaAnnotationOrderBy.CREATED_AT_ASC="+createdAt";KalturaAnnotationOrderBy.DURATION_ASC="+duration";KalturaAnnotationOrderBy.END_TIME_ASC="+endTime";KalturaAnnotationOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaAnnotationOrderBy.START_TIME_ASC="+startTime";KalturaAnnotationOrderBy.TRIGGERED_AT_ASC="+triggeredAt";KalturaAnnotationOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaAnnotationOrderBy.CREATED_AT_DESC="-createdAt";KalturaAnnotationOrderBy.DURATION_DESC="-duration";KalturaAnnotationOrderBy.END_TIME_DESC="-endTime";KalturaAnnotationOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaAnnotationOrderBy.START_TIME_DESC="-startTime";KalturaAnnotationOrderBy.TRIGGERED_AT_DESC="-triggeredAt";KalturaAnnotationOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaApiActionPermissionItemOrderBy(){}
KalturaApiActionPermissionItemOrderBy.CREATED_AT_ASC="+createdAt";KalturaApiActionPermissionItemOrderBy.ID_ASC="+id";KalturaApiActionPermissionItemOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaApiActionPermissionItemOrderBy.CREATED_AT_DESC="-createdAt";KalturaApiActionPermissionItemOrderBy.ID_DESC="-id";KalturaApiActionPermissionItemOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaApiParameterPermissionItemAction(){}
KalturaApiParameterPermissionItemAction.USAGE="all";KalturaApiParameterPermissionItemAction.INSERT="insert";KalturaApiParameterPermissionItemAction.READ="read";KalturaApiParameterPermissionItemAction.UPDATE="update";function KalturaApiParameterPermissionItemOrderBy(){}
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_ASC="+createdAt";KalturaApiParameterPermissionItemOrderBy.ID_ASC="+id";KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaApiParameterPermissionItemOrderBy.CREATED_AT_DESC="-createdAt";KalturaApiParameterPermissionItemOrderBy.ID_DESC="-id";KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaAssetOrderBy(){}
KalturaAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaAssetOrderBy.SIZE_ASC="+size";KalturaAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaAssetOrderBy.SIZE_DESC="-size";KalturaAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaAssetParamsOrderBy(){}
function KalturaAssetParamsOutputOrderBy(){}
function KalturaAssetType(){}
KalturaAssetType.ATTACHMENT="attachment.Attachment";KalturaAssetType.CAPTION="caption.Caption";KalturaAssetType.DOCUMENT="document.Document";KalturaAssetType.IMAGE="document.Image";KalturaAssetType.PDF="document.PDF";KalturaAssetType.SWF="document.SWF";KalturaAssetType.TIMED_THUMB_ASSET="thumbCuePoint.timedThumb";KalturaAssetType.WIDEVINE_FLAVOR="widevine.WidevineFlavor";KalturaAssetType.FLAVOR="1";KalturaAssetType.THUMBNAIL="2";KalturaAssetType.LIVE="3";function KalturaAttachmentAssetOrderBy(){}
KalturaAttachmentAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaAttachmentAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaAttachmentAssetOrderBy.SIZE_ASC="+size";KalturaAttachmentAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaAttachmentAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaAttachmentAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaAttachmentAssetOrderBy.SIZE_DESC="-size";KalturaAttachmentAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaAttachmentType(){}
KalturaAttachmentType.TEXT="1";KalturaAttachmentType.MEDIA="2";KalturaAttachmentType.DOCUMENT="3";function KalturaAudioCodec(){}
KalturaAudioCodec.NONE="";KalturaAudioCodec.AAC="aac";KalturaAudioCodec.AACHE="aache";KalturaAudioCodec.AC3="ac3";KalturaAudioCodec.AMRNB="amrnb";KalturaAudioCodec.COPY="copy";KalturaAudioCodec.MP3="mp3";KalturaAudioCodec.MPEG2="mpeg2";KalturaAudioCodec.PCM="pcm";KalturaAudioCodec.VORBIS="vorbis";KalturaAudioCodec.WMA="wma";KalturaAudioCodec.WMAPRO="wmapro";function KalturaAuditTrailAction(){}
KalturaAuditTrailAction.CHANGED="CHANGED";KalturaAuditTrailAction.CONTENT_VIEWED="CONTENT_VIEWED";KalturaAuditTrailAction.COPIED="COPIED";KalturaAuditTrailAction.CREATED="CREATED";KalturaAuditTrailAction.DELETED="DELETED";KalturaAuditTrailAction.FILE_SYNC_CREATED="FILE_SYNC_CREATED";KalturaAuditTrailAction.RELATION_ADDED="RELATION_ADDED";KalturaAuditTrailAction.RELATION_REMOVED="RELATION_REMOVED";KalturaAuditTrailAction.VIEWED="VIEWED";function KalturaAuditTrailObjectType(){}
KalturaAuditTrailObjectType.BATCH_JOB="BatchJob";KalturaAuditTrailObjectType.EMAIL_INGESTION_PROFILE="EmailIngestionProfile";KalturaAuditTrailObjectType.FILE_SYNC="FileSync";KalturaAuditTrailObjectType.KSHOW_KUSER="KshowKuser";KalturaAuditTrailObjectType.METADATA="Metadata";KalturaAuditTrailObjectType.METADATA_PROFILE="MetadataProfile";KalturaAuditTrailObjectType.PARTNER="Partner";KalturaAuditTrailObjectType.PERMISSION="Permission";KalturaAuditTrailObjectType.UPLOAD_TOKEN="UploadToken";KalturaAuditTrailObjectType.USER_LOGIN_DATA="UserLoginData";KalturaAuditTrailObjectType.USER_ROLE="UserRole";KalturaAuditTrailObjectType.ACCESS_CONTROL="accessControl";KalturaAuditTrailObjectType.CATEGORY="category";KalturaAuditTrailObjectType.CONVERSION_PROFILE_2="conversionProfile2";KalturaAuditTrailObjectType.ENTRY="entry";KalturaAuditTrailObjectType.FLAVOR_ASSET="flavorAsset";KalturaAuditTrailObjectType.FLAVOR_PARAMS="flavorParams";KalturaAuditTrailObjectType.FLAVOR_PARAMS_CONVERSION_PROFILE="flavorParamsConversionProfile";KalturaAuditTrailObjectType.FLAVOR_PARAMS_OUTPUT="flavorParamsOutput";KalturaAuditTrailObjectType.KSHOW="kshow";KalturaAuditTrailObjectType.KUSER="kuser";KalturaAuditTrailObjectType.MEDIA_INFO="mediaInfo";KalturaAuditTrailObjectType.MODERATION="moderation";KalturaAuditTrailObjectType.ROUGHCUT="roughcutEntry";KalturaAuditTrailObjectType.SYNDICATION="syndicationFeed";KalturaAuditTrailObjectType.THUMBNAIL_ASSET="thumbAsset";KalturaAuditTrailObjectType.THUMBNAIL_PARAMS="thumbParams";KalturaAuditTrailObjectType.THUMBNAIL_PARAMS_OUTPUT="thumbParamsOutput";KalturaAuditTrailObjectType.UI_CONF="uiConf";KalturaAuditTrailObjectType.WIDGET="widget";function KalturaAuditTrailOrderBy(){}
KalturaAuditTrailOrderBy.CREATED_AT_ASC="+createdAt";KalturaAuditTrailOrderBy.PARSED_AT_ASC="+parsedAt";KalturaAuditTrailOrderBy.CREATED_AT_DESC="-createdAt";KalturaAuditTrailOrderBy.PARSED_AT_DESC="-parsedAt";function KalturaBaseEntryOrderBy(){}
KalturaBaseEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaBaseEntryOrderBy.END_DATE_ASC="+endDate";KalturaBaseEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaBaseEntryOrderBy.NAME_ASC="+name";KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaBaseEntryOrderBy.RANK_ASC="+rank";KalturaBaseEntryOrderBy.RECENT_ASC="+recent";KalturaBaseEntryOrderBy.START_DATE_ASC="+startDate";KalturaBaseEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaBaseEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaBaseEntryOrderBy.WEIGHT_ASC="+weight";KalturaBaseEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaBaseEntryOrderBy.END_DATE_DESC="-endDate";KalturaBaseEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaBaseEntryOrderBy.NAME_DESC="-name";KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaBaseEntryOrderBy.RANK_DESC="-rank";KalturaBaseEntryOrderBy.RECENT_DESC="-recent";KalturaBaseEntryOrderBy.START_DATE_DESC="-startDate";KalturaBaseEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaBaseEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaBaseEntryOrderBy.WEIGHT_DESC="-weight";function KalturaBaseSyndicationFeedOrderBy(){}
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaBaseSyndicationFeedOrderBy.NAME_ASC="+name";KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaBaseSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaBaseSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaBaseSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaBaseSyndicationFeedOrderBy.NAME_DESC="-name";KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaBaseSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaBaseSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaBatchJobOrderBy(){}
KalturaBatchJobOrderBy.CREATED_AT_ASC="+createdAt";KalturaBatchJobOrderBy.ESTIMATED_EFFORT_ASC="+estimatedEffort";KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_ASC="+executionAttempts";KalturaBatchJobOrderBy.FINISH_TIME_ASC="+finishTime";KalturaBatchJobOrderBy.LOCK_VERSION_ASC="+lockVersion";KalturaBatchJobOrderBy.PRIORITY_ASC="+priority";KalturaBatchJobOrderBy.QUEUE_TIME_ASC="+queueTime";KalturaBatchJobOrderBy.STATUS_ASC="+status";KalturaBatchJobOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaBatchJobOrderBy.CREATED_AT_DESC="-createdAt";KalturaBatchJobOrderBy.ESTIMATED_EFFORT_DESC="-estimatedEffort";KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_DESC="-executionAttempts";KalturaBatchJobOrderBy.FINISH_TIME_DESC="-finishTime";KalturaBatchJobOrderBy.LOCK_VERSION_DESC="-lockVersion";KalturaBatchJobOrderBy.PRIORITY_DESC="-priority";KalturaBatchJobOrderBy.QUEUE_TIME_DESC="-queueTime";KalturaBatchJobOrderBy.STATUS_DESC="-status";KalturaBatchJobOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaBatchJobType(){}
KalturaBatchJobType.PARSE_CAPTION_ASSET="captionSearch.parseCaptionAsset";KalturaBatchJobType.DISTRIBUTION_DELETE="contentDistribution.DistributionDelete";KalturaBatchJobType.CONVERT="0";KalturaBatchJobType.DISTRIBUTION_DISABLE="contentDistribution.DistributionDisable";KalturaBatchJobType.DISTRIBUTION_ENABLE="contentDistribution.DistributionEnable";KalturaBatchJobType.DISTRIBUTION_FETCH_REPORT="contentDistribution.DistributionFetchReport";KalturaBatchJobType.DISTRIBUTION_SUBMIT="contentDistribution.DistributionSubmit";KalturaBatchJobType.DISTRIBUTION_SYNC="contentDistribution.DistributionSync";KalturaBatchJobType.DISTRIBUTION_UPDATE="contentDistribution.DistributionUpdate";KalturaBatchJobType.DROP_FOLDER_CONTENT_PROCESSOR="dropFolder.DropFolderContentProcessor";KalturaBatchJobType.DROP_FOLDER_WATCHER="dropFolder.DropFolderWatcher";KalturaBatchJobType.EVENT_NOTIFICATION_HANDLER="eventNotification.EventNotificationHandler";KalturaBatchJobType.SCHEDULED_TASK="scheduledTask.ScheduledTask";KalturaBatchJobType.INDEX_TAGS="tagSearch.IndexTagsByPrivacyContext";KalturaBatchJobType.TAG_RESOLVE="tagSearch.TagResolve";KalturaBatchJobType.VIRUS_SCAN="virusScan.VirusScan";KalturaBatchJobType.WIDEVINE_REPOSITORY_SYNC="widevine.WidevineRepositorySync";KalturaBatchJobType.IMPORT="1";KalturaBatchJobType.DELETE="2";KalturaBatchJobType.FLATTEN="3";KalturaBatchJobType.BULKUPLOAD="4";KalturaBatchJobType.DVDCREATOR="5";KalturaBatchJobType.DOWNLOAD="6";KalturaBatchJobType.OOCONVERT="7";KalturaBatchJobType.CONVERT_PROFILE="10";KalturaBatchJobType.POSTCONVERT="11";KalturaBatchJobType.EXTRACT_MEDIA="14";KalturaBatchJobType.MAIL="15";KalturaBatchJobType.NOTIFICATION="16";KalturaBatchJobType.CLEANUP="17";KalturaBatchJobType.SCHEDULER_HELPER="18";KalturaBatchJobType.BULKDOWNLOAD="19";KalturaBatchJobType.DB_CLEANUP="20";KalturaBatchJobType.PROVISION_PROVIDE="21";KalturaBatchJobType.CONVERT_COLLECTION="22";KalturaBatchJobType.STORAGE_EXPORT="23";KalturaBatchJobType.PROVISION_DELETE="24";KalturaBatchJobType.STORAGE_DELETE="25";KalturaBatchJobType.EMAIL_INGESTION="26";KalturaBatchJobType.METADATA_IMPORT="27";KalturaBatchJobType.METADATA_TRANSFORM="28";KalturaBatchJobType.FILESYNC_IMPORT="29";KalturaBatchJobType.CAPTURE_THUMB="30";KalturaBatchJobType.DELETE_FILE="31";KalturaBatchJobType.INDEX="32";KalturaBatchJobType.MOVE_CATEGORY_ENTRIES="33";KalturaBatchJobType.COPY="34";KalturaBatchJobType.CONCAT="35";KalturaBatchJobType.CONVERT_LIVE_SEGMENT="36";KalturaBatchJobType.COPY_PARTNER="37";KalturaBatchJobType.VALIDATE_LIVE_MEDIA_SERVERS="38";KalturaBatchJobType.SYNC_CATEGORY_PRIVACY_CONTEXT="39";KalturaBatchJobType.LIVE_REPORT_EXPORT="40";function KalturaBulkUploadAction(){}
KalturaBulkUploadAction.ADD="1";KalturaBulkUploadAction.UPDATE="2";KalturaBulkUploadAction.DELETE="3";KalturaBulkUploadAction.REPLACE="4";KalturaBulkUploadAction.TRANSFORM_XSLT="5";KalturaBulkUploadAction.ADD_OR_UPDATE="6";function KalturaBulkUploadObjectType(){}
KalturaBulkUploadObjectType.ENTRY="1";KalturaBulkUploadObjectType.CATEGORY="2";KalturaBulkUploadObjectType.USER="3";KalturaBulkUploadObjectType.CATEGORY_USER="4";KalturaBulkUploadObjectType.CATEGORY_ENTRY="5";function KalturaBulkUploadOrderBy(){}
function KalturaBulkUploadResultObjectType(){}
KalturaBulkUploadResultObjectType.ENTRY="1";KalturaBulkUploadResultObjectType.CATEGORY="2";KalturaBulkUploadResultObjectType.USER="3";KalturaBulkUploadResultObjectType.CATEGORY_USER="4";KalturaBulkUploadResultObjectType.CATEGORY_ENTRY="5";function KalturaBulkUploadResultStatus(){}
KalturaBulkUploadResultStatus.ERROR="1";KalturaBulkUploadResultStatus.OK="2";KalturaBulkUploadResultStatus.IN_PROGRESS="3";function KalturaBulkUploadType(){}
KalturaBulkUploadType.CSV="bulkUploadCsv.CSV";KalturaBulkUploadType.FILTER="bulkUploadFilter.FILTER";KalturaBulkUploadType.XML="bulkUploadXml.XML";KalturaBulkUploadType.DROP_FOLDER_XML="dropFolderXmlBulkUpload.DROP_FOLDER_XML";function KalturaCaptionAssetOrderBy(){}
KalturaCaptionAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaCaptionAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaCaptionAssetOrderBy.SIZE_ASC="+size";KalturaCaptionAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaCaptionAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaCaptionAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaCaptionAssetOrderBy.SIZE_DESC="-size";KalturaCaptionAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaCaptionParamsOrderBy(){}
function KalturaCaptionType(){}
KalturaCaptionType.SRT="1";KalturaCaptionType.DFXP="2";KalturaCaptionType.WEBVTT="3";function KalturaCategoryEntryAdvancedOrderBy(){}
KalturaCategoryEntryAdvancedOrderBy.CREATED_AT_ASC="+createdAt";KalturaCategoryEntryAdvancedOrderBy.CREATED_AT_DESC="-createdAt";function KalturaCategoryEntryOrderBy(){}
KalturaCategoryEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaCategoryEntryOrderBy.CREATED_AT_DESC="-createdAt";function KalturaCategoryIdentifierField(){}
KalturaCategoryIdentifierField.FULL_NAME="fullName";KalturaCategoryIdentifierField.ID="id";KalturaCategoryIdentifierField.REFERENCE_ID="referenceId";function KalturaCategoryOrderBy(){}
KalturaCategoryOrderBy.CREATED_AT_ASC="+createdAt";KalturaCategoryOrderBy.DEPTH_ASC="+depth";KalturaCategoryOrderBy.DIRECT_ENTRIES_COUNT_ASC="+directEntriesCount";KalturaCategoryOrderBy.DIRECT_SUB_CATEGORIES_COUNT_ASC="+directSubCategoriesCount";KalturaCategoryOrderBy.ENTRIES_COUNT_ASC="+entriesCount";KalturaCategoryOrderBy.FULL_NAME_ASC="+fullName";KalturaCategoryOrderBy.MEMBERS_COUNT_ASC="+membersCount";KalturaCategoryOrderBy.NAME_ASC="+name";KalturaCategoryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaCategoryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaCategoryOrderBy.CREATED_AT_DESC="-createdAt";KalturaCategoryOrderBy.DEPTH_DESC="-depth";KalturaCategoryOrderBy.DIRECT_ENTRIES_COUNT_DESC="-directEntriesCount";KalturaCategoryOrderBy.DIRECT_SUB_CATEGORIES_COUNT_DESC="-directSubCategoriesCount";KalturaCategoryOrderBy.ENTRIES_COUNT_DESC="-entriesCount";KalturaCategoryOrderBy.FULL_NAME_DESC="-fullName";KalturaCategoryOrderBy.MEMBERS_COUNT_DESC="-membersCount";KalturaCategoryOrderBy.NAME_DESC="-name";KalturaCategoryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaCategoryOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaCategoryUserOrderBy(){}
KalturaCategoryUserOrderBy.CREATED_AT_ASC="+createdAt";KalturaCategoryUserOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaCategoryUserOrderBy.CREATED_AT_DESC="-createdAt";KalturaCategoryUserOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaCodeCuePointOrderBy(){}
KalturaCodeCuePointOrderBy.CREATED_AT_ASC="+createdAt";KalturaCodeCuePointOrderBy.DURATION_ASC="+duration";KalturaCodeCuePointOrderBy.END_TIME_ASC="+endTime";KalturaCodeCuePointOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaCodeCuePointOrderBy.START_TIME_ASC="+startTime";KalturaCodeCuePointOrderBy.TRIGGERED_AT_ASC="+triggeredAt";KalturaCodeCuePointOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaCodeCuePointOrderBy.CREATED_AT_DESC="-createdAt";KalturaCodeCuePointOrderBy.DURATION_DESC="-duration";KalturaCodeCuePointOrderBy.END_TIME_DESC="-endTime";KalturaCodeCuePointOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaCodeCuePointOrderBy.START_TIME_DESC="-startTime";KalturaCodeCuePointOrderBy.TRIGGERED_AT_DESC="-triggeredAt";KalturaCodeCuePointOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaConditionType(){}
KalturaConditionType.ABC_WATERMARK="abcScreenersWatermarkAccessControl.abcWatermark";KalturaConditionType.EVENT_NOTIFICATION_FIELD="eventNotification.BooleanField";KalturaConditionType.EVENT_NOTIFICATION_OBJECT_CHANGED="eventNotification.ObjectChanged";KalturaConditionType.METADATA_FIELD_CHANGED="metadata.FieldChanged";KalturaConditionType.METADATA_FIELD_COMPARE="metadata.FieldCompare";KalturaConditionType.METADATA_FIELD_MATCH="metadata.FieldMatch";KalturaConditionType.AUTHENTICATED="1";KalturaConditionType.COUNTRY="2";KalturaConditionType.IP_ADDRESS="3";KalturaConditionType.SITE="4";KalturaConditionType.USER_AGENT="5";KalturaConditionType.FIELD_MATCH="6";KalturaConditionType.FIELD_COMPARE="7";KalturaConditionType.ASSET_PROPERTIES_COMPARE="8";KalturaConditionType.USER_ROLE="9";KalturaConditionType.GEO_DISTANCE="10";function KalturaConfigurableDistributionProfileOrderBy(){}
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaContainerFormat(){}
KalturaContainerFormat._3GP="3gp";KalturaContainerFormat.APPLEHTTP="applehttp";KalturaContainerFormat.AVI="avi";KalturaContainerFormat.BMP="bmp";KalturaContainerFormat.COPY="copy";KalturaContainerFormat.FLV="flv";KalturaContainerFormat.HLS="hls";KalturaContainerFormat.ISMV="ismv";KalturaContainerFormat.JPG="jpg";KalturaContainerFormat.M4V="m4v";KalturaContainerFormat.MKV="mkv";KalturaContainerFormat.MOV="mov";KalturaContainerFormat.MP3="mp3";KalturaContainerFormat.MP4="mp4";KalturaContainerFormat.MPEG="mpeg";KalturaContainerFormat.MPEGTS="mpegts";KalturaContainerFormat.OGG="ogg";KalturaContainerFormat.OGV="ogv";KalturaContainerFormat.PDF="pdf";KalturaContainerFormat.PNG="png";KalturaContainerFormat.SWF="swf";KalturaContainerFormat.WAV="wav";KalturaContainerFormat.WEBM="webm";KalturaContainerFormat.WMA="wma";KalturaContainerFormat.WMV="wmv";KalturaContainerFormat.WVM="wvm";function KalturaContextType(){}
KalturaContextType.PLAY="1";KalturaContextType.DOWNLOAD="2";KalturaContextType.THUMBNAIL="3";KalturaContextType.METADATA="4";KalturaContextType.EXPORT="5";function KalturaControlPanelCommandOrderBy(){}
KalturaControlPanelCommandOrderBy.CREATED_AT_ASC="+createdAt";KalturaControlPanelCommandOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaControlPanelCommandOrderBy.CREATED_AT_DESC="-createdAt";KalturaControlPanelCommandOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaConversionProfileAssetParamsOrderBy(){}
function KalturaConversionProfileOrderBy(){}
KalturaConversionProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaConversionProfileOrderBy.CREATED_AT_DESC="-createdAt";function KalturaConversionProfileStatus(){}
KalturaConversionProfileStatus.DISABLED="1";KalturaConversionProfileStatus.ENABLED="2";KalturaConversionProfileStatus.DELETED="3";function KalturaConversionProfileType(){}
KalturaConversionProfileType.MEDIA="1";KalturaConversionProfileType.LIVE_STREAM="2";function KalturaCuePointOrderBy(){}
KalturaCuePointOrderBy.CREATED_AT_ASC="+createdAt";KalturaCuePointOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaCuePointOrderBy.START_TIME_ASC="+startTime";KalturaCuePointOrderBy.TRIGGERED_AT_ASC="+triggeredAt";KalturaCuePointOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaCuePointOrderBy.CREATED_AT_DESC="-createdAt";KalturaCuePointOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaCuePointOrderBy.START_TIME_DESC="-startTime";KalturaCuePointOrderBy.TRIGGERED_AT_DESC="-triggeredAt";KalturaCuePointOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaCuePointType(){}
KalturaCuePointType.AD="adCuePoint.Ad";KalturaCuePointType.ANNOTATION="annotation.Annotation";KalturaCuePointType.CODE="codeCuePoint.Code";KalturaCuePointType.EVENT="eventCuePoint.Event";KalturaCuePointType.THUMB="thumbCuePoint.Thumb";function KalturaDataEntryOrderBy(){}
KalturaDataEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaDataEntryOrderBy.END_DATE_ASC="+endDate";KalturaDataEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaDataEntryOrderBy.NAME_ASC="+name";KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaDataEntryOrderBy.RANK_ASC="+rank";KalturaDataEntryOrderBy.RECENT_ASC="+recent";KalturaDataEntryOrderBy.START_DATE_ASC="+startDate";KalturaDataEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaDataEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDataEntryOrderBy.WEIGHT_ASC="+weight";KalturaDataEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaDataEntryOrderBy.END_DATE_DESC="-endDate";KalturaDataEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaDataEntryOrderBy.NAME_DESC="-name";KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaDataEntryOrderBy.RANK_DESC="-rank";KalturaDataEntryOrderBy.RECENT_DESC="-recent";KalturaDataEntryOrderBy.START_DATE_DESC="-startDate";KalturaDataEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaDataEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaDataEntryOrderBy.WEIGHT_DESC="-weight";function KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy(){}
KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileAkamaiHdsOrderBy(){}
KalturaDeliveryProfileAkamaiHdsOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileAkamaiHdsOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileAkamaiHdsOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileAkamaiHdsOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileAkamaiHttpOrderBy(){}
KalturaDeliveryProfileAkamaiHttpOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileAkamaiHttpOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileAkamaiHttpOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileAkamaiHttpOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileGenericAppleHttpOrderBy(){}
KalturaDeliveryProfileGenericAppleHttpOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileGenericAppleHttpOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileGenericAppleHttpOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileGenericAppleHttpOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileGenericHdsOrderBy(){}
KalturaDeliveryProfileGenericHdsOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileGenericHdsOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileGenericHdsOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileGenericHdsOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileGenericHttpOrderBy(){}
KalturaDeliveryProfileGenericHttpOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileGenericHttpOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileGenericHttpOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileGenericHttpOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileGenericRtmpOrderBy(){}
KalturaDeliveryProfileGenericRtmpOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileGenericRtmpOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileGenericRtmpOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileGenericRtmpOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileGenericSilverLightOrderBy(){}
KalturaDeliveryProfileGenericSilverLightOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileGenericSilverLightOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileGenericSilverLightOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileGenericSilverLightOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileLiveAppleHttpOrderBy(){}
KalturaDeliveryProfileLiveAppleHttpOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileLiveAppleHttpOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileLiveAppleHttpOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileLiveAppleHttpOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileOrderBy(){}
KalturaDeliveryProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileRtmpOrderBy(){}
KalturaDeliveryProfileRtmpOrderBy.CREATED_AT_ASC="+createdAt";KalturaDeliveryProfileRtmpOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDeliveryProfileRtmpOrderBy.CREATED_AT_DESC="-createdAt";KalturaDeliveryProfileRtmpOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDeliveryProfileType(){}
KalturaDeliveryProfileType.EDGE_CAST_HTTP="edgeCast.EDGE_CAST_HTTP";KalturaDeliveryProfileType.EDGE_CAST_RTMP="edgeCast.EDGE_CAST_RTMP";KalturaDeliveryProfileType.KONTIKI_HTTP="kontiki.KONTIKI_HTTP";KalturaDeliveryProfileType.UPLYNK_HTTP="uplynk.UPLYNK_HTTP";KalturaDeliveryProfileType.UPLYNK_RTMP="uplynk.UPLYNK_RTMP";KalturaDeliveryProfileType.VELOCIX_HDS="velocix.VELOCIX_HDS";KalturaDeliveryProfileType.VELOCIX_HLS="velocix.VELOCIX_HLS";KalturaDeliveryProfileType.APPLE_HTTP="1";KalturaDeliveryProfileType.HDS="3";KalturaDeliveryProfileType.HTTP="4";KalturaDeliveryProfileType.RTMP="5";KalturaDeliveryProfileType.RTSP="6";KalturaDeliveryProfileType.SILVER_LIGHT="7";KalturaDeliveryProfileType.AKAMAI_HLS_DIRECT="10";KalturaDeliveryProfileType.AKAMAI_HLS_MANIFEST="11";KalturaDeliveryProfileType.AKAMAI_HD="12";KalturaDeliveryProfileType.AKAMAI_HDS="13";KalturaDeliveryProfileType.AKAMAI_HTTP="14";KalturaDeliveryProfileType.AKAMAI_RTMP="15";KalturaDeliveryProfileType.AKAMAI_RTSP="16";KalturaDeliveryProfileType.AKAMAI_SS="17";KalturaDeliveryProfileType.GENERIC_HLS="21";KalturaDeliveryProfileType.GENERIC_HDS="23";KalturaDeliveryProfileType.GENERIC_HTTP="24";KalturaDeliveryProfileType.GENERIC_HLS_MANIFEST="25";KalturaDeliveryProfileType.GENERIC_HDS_MANIFEST="26";KalturaDeliveryProfileType.GENERIC_SS="27";KalturaDeliveryProfileType.GENERIC_RTMP="28";KalturaDeliveryProfileType.LEVEL3_HLS="31";KalturaDeliveryProfileType.LEVEL3_HTTP="34";KalturaDeliveryProfileType.LEVEL3_RTMP="35";KalturaDeliveryProfileType.LIMELIGHT_HTTP="44";KalturaDeliveryProfileType.LIMELIGHT_RTMP="45";KalturaDeliveryProfileType.LOCAL_PATH_APPLE_HTTP="51";KalturaDeliveryProfileType.LOCAL_PATH_HTTP="54";KalturaDeliveryProfileType.LOCAL_PATH_RTMP="55";KalturaDeliveryProfileType.VOD_PACKAGER_HLS="61";KalturaDeliveryProfileType.VOD_PACKAGER_HDS="63";KalturaDeliveryProfileType.VOD_PACKAGER_MSS="67";KalturaDeliveryProfileType.VOD_PACKAGER_DASH="68";KalturaDeliveryProfileType.LIVE_HLS="1001";KalturaDeliveryProfileType.LIVE_HDS="1002";KalturaDeliveryProfileType.LIVE_RTMP="1005";KalturaDeliveryProfileType.LIVE_AKAMAI_HDS="1013";function KalturaDistributionProfileOrderBy(){}
KalturaDistributionProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaDistributionProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDistributionProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaDistributionProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDistributionProviderOrderBy(){}
function KalturaDistributionProviderType(){}
KalturaDistributionProviderType.ATT_UVERSE="attUverseDistribution.ATT_UVERSE";KalturaDistributionProviderType.AVN="avnDistribution.AVN";KalturaDistributionProviderType.COMCAST_MRSS="comcastMrssDistribution.COMCAST_MRSS";KalturaDistributionProviderType.CROSS_KALTURA="crossKalturaDistribution.CROSS_KALTURA";KalturaDistributionProviderType.DAILYMOTION="dailymotionDistribution.DAILYMOTION";KalturaDistributionProviderType.DOUBLECLICK="doubleClickDistribution.DOUBLECLICK";KalturaDistributionProviderType.FREEWHEEL="freewheelDistribution.FREEWHEEL";KalturaDistributionProviderType.FREEWHEEL_GENERIC="freewheelGenericDistribution.FREEWHEEL_GENERIC";KalturaDistributionProviderType.FTP="ftpDistribution.FTP";KalturaDistributionProviderType.FTP_SCHEDULED="ftpDistribution.FTP_SCHEDULED";KalturaDistributionProviderType.HULU="huluDistribution.HULU";KalturaDistributionProviderType.IDETIC="ideticDistribution.IDETIC";KalturaDistributionProviderType.METRO_PCS="metroPcsDistribution.METRO_PCS";KalturaDistributionProviderType.MSN="msnDistribution.MSN";KalturaDistributionProviderType.NDN="ndnDistribution.NDN";KalturaDistributionProviderType.PODCAST="podcastDistribution.PODCAST";KalturaDistributionProviderType.QUICKPLAY="quickPlayDistribution.QUICKPLAY";KalturaDistributionProviderType.SYNACOR_HBO="synacorHboDistribution.SYNACOR_HBO";KalturaDistributionProviderType.TIME_WARNER="timeWarnerDistribution.TIME_WARNER";KalturaDistributionProviderType.TVCOM="tvComDistribution.TVCOM";KalturaDistributionProviderType.TVINCI="tvinciDistribution.TVINCI";KalturaDistributionProviderType.UVERSE_CLICK_TO_ORDER="uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER";KalturaDistributionProviderType.UVERSE="uverseDistribution.UVERSE";KalturaDistributionProviderType.VERIZON_VCAST="verizonVcastDistribution.VERIZON_VCAST";KalturaDistributionProviderType.YAHOO="yahooDistribution.YAHOO";KalturaDistributionProviderType.YOUTUBE="youTubeDistribution.YOUTUBE";KalturaDistributionProviderType.YOUTUBE_API="youtubeApiDistribution.YOUTUBE_API";KalturaDistributionProviderType.GENERIC="1";KalturaDistributionProviderType.SYNDICATION="2";function KalturaDocumentEntryOrderBy(){}
KalturaDocumentEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaDocumentEntryOrderBy.END_DATE_ASC="+endDate";KalturaDocumentEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaDocumentEntryOrderBy.NAME_ASC="+name";KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaDocumentEntryOrderBy.RANK_ASC="+rank";KalturaDocumentEntryOrderBy.RECENT_ASC="+recent";KalturaDocumentEntryOrderBy.START_DATE_ASC="+startDate";KalturaDocumentEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaDocumentEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDocumentEntryOrderBy.WEIGHT_ASC="+weight";KalturaDocumentEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaDocumentEntryOrderBy.END_DATE_DESC="-endDate";KalturaDocumentEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaDocumentEntryOrderBy.NAME_DESC="-name";KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaDocumentEntryOrderBy.RANK_DESC="-rank";KalturaDocumentEntryOrderBy.RECENT_DESC="-recent";KalturaDocumentEntryOrderBy.START_DATE_DESC="-startDate";KalturaDocumentEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaDocumentEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaDocumentEntryOrderBy.WEIGHT_DESC="-weight";function KalturaDocumentFlavorParamsOrderBy(){}
function KalturaDocumentFlavorParamsOutputOrderBy(){}
function KalturaDrmDeviceOrderBy(){}
KalturaDrmDeviceOrderBy.CREATED_AT_ASC="+createdAt";KalturaDrmDeviceOrderBy.CREATED_AT_DESC="-createdAt";function KalturaDrmLicenseScenario(){}
KalturaDrmLicenseScenario.PROTECTION="playReady.PROTECTION";KalturaDrmLicenseScenario.PURCHASE="playReady.PURCHASE";KalturaDrmLicenseScenario.RENTAL="playReady.RENTAL";KalturaDrmLicenseScenario.SUBSCRIPTION="playReady.SUBSCRIPTION";function KalturaDrmLicenseType(){}
KalturaDrmLicenseType.NON_PERSISTENT="playReady.NON_PERSISTENT";KalturaDrmLicenseType.PERSISTENT="playReady.PERSISTENT";function KalturaDrmPolicyOrderBy(){}
function KalturaDrmProfileOrderBy(){}
KalturaDrmProfileOrderBy.ID_ASC="+id";KalturaDrmProfileOrderBy.NAME_ASC="+name";KalturaDrmProfileOrderBy.ID_DESC="-id";KalturaDrmProfileOrderBy.NAME_DESC="-name";function KalturaDrmProviderType(){}
KalturaDrmProviderType.PLAY_READY="playReady.PLAY_READY";KalturaDrmProviderType.WIDEVINE="widevine.WIDEVINE";function KalturaDropFolderErrorCode(){}
KalturaDropFolderErrorCode.ERROR_CONNECT="1";KalturaDropFolderErrorCode.ERROR_AUTENTICATE="2";KalturaDropFolderErrorCode.ERROR_GET_PHISICAL_FILE_LIST="3";KalturaDropFolderErrorCode.ERROR_GET_DB_FILE_LIST="4";KalturaDropFolderErrorCode.DROP_FOLDER_APP_ERROR="5";KalturaDropFolderErrorCode.CONTENT_MATCH_POLICY_UNDEFINED="6";function KalturaDropFolderFileErrorCode(){}
KalturaDropFolderFileErrorCode.ERROR_ADDING_BULK_UPLOAD="dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD";KalturaDropFolderFileErrorCode.ERROR_ADD_CONTENT_RESOURCE="dropFolderXmlBulkUpload.ERROR_ADD_CONTENT_RESOURCE";KalturaDropFolderFileErrorCode.ERROR_IN_BULK_UPLOAD="dropFolderXmlBulkUpload.ERROR_IN_BULK_UPLOAD";KalturaDropFolderFileErrorCode.ERROR_WRITING_TEMP_FILE="dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE";KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_CHECKSUM="dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM";KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_SIZE="dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE";KalturaDropFolderFileErrorCode.MALFORMED_XML_FILE="dropFolderXmlBulkUpload.MALFORMED_XML_FILE";KalturaDropFolderFileErrorCode.XML_FILE_SIZE_EXCEED_LIMIT="dropFolderXmlBulkUpload.XML_FILE_SIZE_EXCEED_LIMIT";KalturaDropFolderFileErrorCode.ERROR_UPDATE_ENTRY="1";KalturaDropFolderFileErrorCode.ERROR_ADD_ENTRY="2";KalturaDropFolderFileErrorCode.FLAVOR_NOT_FOUND="3";KalturaDropFolderFileErrorCode.FLAVOR_MISSING_IN_FILE_NAME="4";KalturaDropFolderFileErrorCode.SLUG_REGEX_NO_MATCH="5";KalturaDropFolderFileErrorCode.ERROR_READING_FILE="6";KalturaDropFolderFileErrorCode.ERROR_DOWNLOADING_FILE="7";KalturaDropFolderFileErrorCode.ERROR_UPDATE_FILE="8";KalturaDropFolderFileErrorCode.ERROR_ADDING_CONTENT_PROCESSOR="10";KalturaDropFolderFileErrorCode.ERROR_IN_CONTENT_PROCESSOR="11";KalturaDropFolderFileErrorCode.ERROR_DELETING_FILE="12";KalturaDropFolderFileErrorCode.FILE_NO_MATCH="13";function KalturaDropFolderFileHandlerType(){}
KalturaDropFolderFileHandlerType.XML="dropFolderXmlBulkUpload.XML";KalturaDropFolderFileHandlerType.CONTENT="1";function KalturaDropFolderFileOrderBy(){}
KalturaDropFolderFileOrderBy.CREATED_AT_ASC="+createdAt";KalturaDropFolderFileOrderBy.FILE_NAME_ASC="+fileName";KalturaDropFolderFileOrderBy.FILE_SIZE_ASC="+fileSize";KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_ASC="+fileSizeLastSetAt";KalturaDropFolderFileOrderBy.ID_ASC="+id";KalturaDropFolderFileOrderBy.PARSED_FLAVOR_ASC="+parsedFlavor";KalturaDropFolderFileOrderBy.PARSED_SLUG_ASC="+parsedSlug";KalturaDropFolderFileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDropFolderFileOrderBy.CREATED_AT_DESC="-createdAt";KalturaDropFolderFileOrderBy.FILE_NAME_DESC="-fileName";KalturaDropFolderFileOrderBy.FILE_SIZE_DESC="-fileSize";KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_DESC="-fileSizeLastSetAt";KalturaDropFolderFileOrderBy.ID_DESC="-id";KalturaDropFolderFileOrderBy.PARSED_FLAVOR_DESC="-parsedFlavor";KalturaDropFolderFileOrderBy.PARSED_SLUG_DESC="-parsedSlug";KalturaDropFolderFileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDropFolderOrderBy(){}
KalturaDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaDropFolderOrderBy.ID_ASC="+id";KalturaDropFolderOrderBy.NAME_ASC="+name";KalturaDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaDropFolderOrderBy.ID_DESC="-id";KalturaDropFolderOrderBy.NAME_DESC="-name";KalturaDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaDropFolderType(){}
KalturaDropFolderType.WEBEX="WebexDropFolder.WEBEX";KalturaDropFolderType.LOCAL="1";KalturaDropFolderType.FTP="2";KalturaDropFolderType.SCP="3";KalturaDropFolderType.SFTP="4";KalturaDropFolderType.S3="6";function KalturaDurationType(){}
KalturaDurationType.LONG="long";KalturaDurationType.MEDIUM="medium";KalturaDurationType.NOT_AVAILABLE="notavailable";KalturaDurationType.SHORT="short";function KalturaDynamicEnum(){}
function KalturaEmailNotificationFormat(){}
KalturaEmailNotificationFormat.HTML="1";KalturaEmailNotificationFormat.TEXT="2";function KalturaEmailNotificationRecipientProviderType(){}
KalturaEmailNotificationRecipientProviderType.STATIC_LIST="1";KalturaEmailNotificationRecipientProviderType.CATEGORY="2";KalturaEmailNotificationRecipientProviderType.USER="3";function KalturaEmailNotificationTemplateOrderBy(){}
KalturaEmailNotificationTemplateOrderBy.CREATED_AT_ASC="+createdAt";KalturaEmailNotificationTemplateOrderBy.ID_ASC="+id";KalturaEmailNotificationTemplateOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaEmailNotificationTemplateOrderBy.CREATED_AT_DESC="-createdAt";KalturaEmailNotificationTemplateOrderBy.ID_DESC="-id";KalturaEmailNotificationTemplateOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaEntryDistributionOrderBy(){}
KalturaEntryDistributionOrderBy.CREATED_AT_ASC="+createdAt";KalturaEntryDistributionOrderBy.SUBMITTED_AT_ASC="+submittedAt";KalturaEntryDistributionOrderBy.SUNRISE_ASC="+sunrise";KalturaEntryDistributionOrderBy.SUNSET_ASC="+sunset";KalturaEntryDistributionOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaEntryDistributionOrderBy.CREATED_AT_DESC="-createdAt";KalturaEntryDistributionOrderBy.SUBMITTED_AT_DESC="-submittedAt";KalturaEntryDistributionOrderBy.SUNRISE_DESC="-sunrise";KalturaEntryDistributionOrderBy.SUNSET_DESC="-sunset";KalturaEntryDistributionOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaEntryIdentifierField(){}
KalturaEntryIdentifierField.ID="id";KalturaEntryIdentifierField.REFERENCE_ID="referenceId";function KalturaEntryReplacementStatus(){}
KalturaEntryReplacementStatus.NONE="0";KalturaEntryReplacementStatus.APPROVED_BUT_NOT_READY="1";KalturaEntryReplacementStatus.READY_BUT_NOT_APPROVED="2";KalturaEntryReplacementStatus.NOT_READY_AND_NOT_APPROVED="3";KalturaEntryReplacementStatus.FAILED="4";function KalturaEntryStatus(){}
KalturaEntryStatus.ERROR_IMPORTING="-2";KalturaEntryStatus.ERROR_CONVERTING="-1";KalturaEntryStatus.SCAN_FAILURE="virusScan.ScanFailure";KalturaEntryStatus.IMPORT="0";KalturaEntryStatus.INFECTED="virusScan.Infected";KalturaEntryStatus.PRECONVERT="1";KalturaEntryStatus.READY="2";KalturaEntryStatus.DELETED="3";KalturaEntryStatus.PENDING="4";KalturaEntryStatus.MODERATE="5";KalturaEntryStatus.BLOCKED="6";KalturaEntryStatus.NO_CONTENT="7";function KalturaEntryType(){}
KalturaEntryType.AUTOMATIC="-1";KalturaEntryType.EXTERNAL_MEDIA="externalMedia.externalMedia";KalturaEntryType.MEDIA_CLIP="1";KalturaEntryType.MIX="2";KalturaEntryType.PLAYLIST="5";KalturaEntryType.DATA="6";KalturaEntryType.LIVE_STREAM="7";KalturaEntryType.LIVE_CHANNEL="8";KalturaEntryType.DOCUMENT="10";function KalturaEventCuePointOrderBy(){}
KalturaEventCuePointOrderBy.CREATED_AT_ASC="+createdAt";KalturaEventCuePointOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaEventCuePointOrderBy.START_TIME_ASC="+startTime";KalturaEventCuePointOrderBy.TRIGGERED_AT_ASC="+triggeredAt";KalturaEventCuePointOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaEventCuePointOrderBy.CREATED_AT_DESC="-createdAt";KalturaEventCuePointOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaEventCuePointOrderBy.START_TIME_DESC="-startTime";KalturaEventCuePointOrderBy.TRIGGERED_AT_DESC="-triggeredAt";KalturaEventCuePointOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaEventNotificationEventObjectType(){}
KalturaEventNotificationEventObjectType.AD_CUE_POINT="adCuePointEventNotifications.AdCuePoint";KalturaEventNotificationEventObjectType.ANNOTATION="annotationEventNotifications.Annotation";KalturaEventNotificationEventObjectType.CAPTION_ASSET="captionAssetEventNotifications.CaptionAsset";KalturaEventNotificationEventObjectType.CODE_CUE_POINT="codeCuePointEventNotifications.CodeCuePoint";KalturaEventNotificationEventObjectType.DISTRIBUTION_PROFILE="contentDistributionEventNotifications.DistributionProfile";KalturaEventNotificationEventObjectType.ENTRY_DISTRIBUTION="contentDistributionEventNotifications.EntryDistribution";KalturaEventNotificationEventObjectType.CUE_POINT="cuePointEventNotifications.CuePoint";KalturaEventNotificationEventObjectType.METADATA="metadataEventNotifications.Metadata";KalturaEventNotificationEventObjectType.ENTRY="1";KalturaEventNotificationEventObjectType.CATEGORY="2";KalturaEventNotificationEventObjectType.ASSET="3";KalturaEventNotificationEventObjectType.FLAVORASSET="4";KalturaEventNotificationEventObjectType.THUMBASSET="5";KalturaEventNotificationEventObjectType.KUSER="8";KalturaEventNotificationEventObjectType.ACCESSCONTROL="9";KalturaEventNotificationEventObjectType.BATCHJOB="10";KalturaEventNotificationEventObjectType.BULKUPLOADRESULT="11";KalturaEventNotificationEventObjectType.CATEGORYKUSER="12";KalturaEventNotificationEventObjectType.CONVERSIONPROFILE2="14";KalturaEventNotificationEventObjectType.FLAVORPARAMS="15";KalturaEventNotificationEventObjectType.FLAVORPARAMSCONVERSIONPROFILE="16";KalturaEventNotificationEventObjectType.FLAVORPARAMSOUTPUT="17";KalturaEventNotificationEventObjectType.GENERICSYNDICATIONFEED="18";KalturaEventNotificationEventObjectType.KUSERTOUSERROLE="19";KalturaEventNotificationEventObjectType.PARTNER="20";KalturaEventNotificationEventObjectType.PERMISSION="21";KalturaEventNotificationEventObjectType.PERMISSIONITEM="22";KalturaEventNotificationEventObjectType.PERMISSIONTOPERMISSIONITEM="23";KalturaEventNotificationEventObjectType.SCHEDULER="24";KalturaEventNotificationEventObjectType.SCHEDULERCONFIG="25";KalturaEventNotificationEventObjectType.SCHEDULERSTATUS="26";KalturaEventNotificationEventObjectType.SCHEDULERWORKER="27";KalturaEventNotificationEventObjectType.STORAGEPROFILE="28";KalturaEventNotificationEventObjectType.SYNDICATIONFEED="29";KalturaEventNotificationEventObjectType.THUMBPARAMS="31";KalturaEventNotificationEventObjectType.THUMBPARAMSOUTPUT="32";KalturaEventNotificationEventObjectType.UPLOADTOKEN="33";KalturaEventNotificationEventObjectType.USERLOGINDATA="34";KalturaEventNotificationEventObjectType.USERROLE="35";KalturaEventNotificationEventObjectType.WIDGET="36";KalturaEventNotificationEventObjectType.CATEGORYENTRY="37";function KalturaEventNotificationEventType(){}
KalturaEventNotificationEventType.BATCH_JOB_STATUS="1";KalturaEventNotificationEventType.OBJECT_ADDED="2";KalturaEventNotificationEventType.OBJECT_CHANGED="3";KalturaEventNotificationEventType.OBJECT_COPIED="4";KalturaEventNotificationEventType.OBJECT_CREATED="5";KalturaEventNotificationEventType.OBJECT_DATA_CHANGED="6";KalturaEventNotificationEventType.OBJECT_DELETED="7";KalturaEventNotificationEventType.OBJECT_ERASED="8";KalturaEventNotificationEventType.OBJECT_READY_FOR_REPLACMENT="9";KalturaEventNotificationEventType.OBJECT_SAVED="10";KalturaEventNotificationEventType.OBJECT_UPDATED="11";KalturaEventNotificationEventType.OBJECT_REPLACED="12";KalturaEventNotificationEventType.OBJECT_READY_FOR_INDEX="13";function KalturaEventNotificationTemplateOrderBy(){}
KalturaEventNotificationTemplateOrderBy.CREATED_AT_ASC="+createdAt";KalturaEventNotificationTemplateOrderBy.ID_ASC="+id";KalturaEventNotificationTemplateOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaEventNotificationTemplateOrderBy.CREATED_AT_DESC="-createdAt";KalturaEventNotificationTemplateOrderBy.ID_DESC="-id";KalturaEventNotificationTemplateOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaEventNotificationTemplateType(){}
KalturaEventNotificationTemplateType.EMAIL="emailNotification.Email";KalturaEventNotificationTemplateType.HTTP="httpNotification.Http";function KalturaEventType(){}
KalturaEventType.BROADCAST_START="1";KalturaEventType.BROADCAST_END="2";function KalturaExternalMediaEntryOrderBy(){}
KalturaExternalMediaEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaExternalMediaEntryOrderBy.DURATION_ASC="+duration";KalturaExternalMediaEntryOrderBy.END_DATE_ASC="+endDate";KalturaExternalMediaEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaExternalMediaEntryOrderBy.MEDIA_TYPE_ASC="+mediaType";KalturaExternalMediaEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaExternalMediaEntryOrderBy.NAME_ASC="+name";KalturaExternalMediaEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaExternalMediaEntryOrderBy.PLAYS_ASC="+plays";KalturaExternalMediaEntryOrderBy.RANK_ASC="+rank";KalturaExternalMediaEntryOrderBy.RECENT_ASC="+recent";KalturaExternalMediaEntryOrderBy.START_DATE_ASC="+startDate";KalturaExternalMediaEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaExternalMediaEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaExternalMediaEntryOrderBy.VIEWS_ASC="+views";KalturaExternalMediaEntryOrderBy.WEIGHT_ASC="+weight";KalturaExternalMediaEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaExternalMediaEntryOrderBy.DURATION_DESC="-duration";KalturaExternalMediaEntryOrderBy.END_DATE_DESC="-endDate";KalturaExternalMediaEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaExternalMediaEntryOrderBy.MEDIA_TYPE_DESC="-mediaType";KalturaExternalMediaEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaExternalMediaEntryOrderBy.NAME_DESC="-name";KalturaExternalMediaEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaExternalMediaEntryOrderBy.PLAYS_DESC="-plays";KalturaExternalMediaEntryOrderBy.RANK_DESC="-rank";KalturaExternalMediaEntryOrderBy.RECENT_DESC="-recent";KalturaExternalMediaEntryOrderBy.START_DATE_DESC="-startDate";KalturaExternalMediaEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaExternalMediaEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaExternalMediaEntryOrderBy.VIEWS_DESC="-views";KalturaExternalMediaEntryOrderBy.WEIGHT_DESC="-weight";function KalturaExternalMediaSourceType(){}
KalturaExternalMediaSourceType.INTERCALL="InterCall";KalturaExternalMediaSourceType.YOUTUBE="YouTube";function KalturaFileAssetObjectType(){}
KalturaFileAssetObjectType.UI_CONF="2";function KalturaFileAssetOrderBy(){}
KalturaFileAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaFileAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaFileAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaFileAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaFileAssetStatus(){}
KalturaFileAssetStatus.PENDING="0";KalturaFileAssetStatus.UPLOADING="1";KalturaFileAssetStatus.READY="2";KalturaFileAssetStatus.DELETED="3";KalturaFileAssetStatus.ERROR="4";function KalturaFileSyncObjectType(){}
KalturaFileSyncObjectType.DISTRIBUTION_PROFILE="contentDistribution.DistributionProfile";KalturaFileSyncObjectType.ENTRY_DISTRIBUTION="contentDistribution.EntryDistribution";KalturaFileSyncObjectType.GENERIC_DISTRIBUTION_ACTION="contentDistribution.GenericDistributionAction";KalturaFileSyncObjectType.EMAIL_NOTIFICATION_TEMPLATE="emailNotification.EmailNotificationTemplate";KalturaFileSyncObjectType.HTTP_NOTIFICATION_TEMPLATE="httpNotification.HttpNotificationTemplate";KalturaFileSyncObjectType.ENTRY="1";KalturaFileSyncObjectType.UICONF="2";KalturaFileSyncObjectType.BATCHJOB="3";KalturaFileSyncObjectType.ASSET="4";KalturaFileSyncObjectType.FLAVOR_ASSET="4";KalturaFileSyncObjectType.METADATA="5";KalturaFileSyncObjectType.METADATA_PROFILE="6";KalturaFileSyncObjectType.SYNDICATION_FEED="7";KalturaFileSyncObjectType.CONVERSION_PROFILE="8";KalturaFileSyncObjectType.FILE_ASSET="9";function KalturaFileSyncOrderBy(){}
KalturaFileSyncOrderBy.CREATED_AT_ASC="+createdAt";KalturaFileSyncOrderBy.FILE_SIZE_ASC="+fileSize";KalturaFileSyncOrderBy.READY_AT_ASC="+readyAt";KalturaFileSyncOrderBy.SYNC_TIME_ASC="+syncTime";KalturaFileSyncOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaFileSyncOrderBy.VERSION_ASC="+version";KalturaFileSyncOrderBy.CREATED_AT_DESC="-createdAt";KalturaFileSyncOrderBy.FILE_SIZE_DESC="-fileSize";KalturaFileSyncOrderBy.READY_AT_DESC="-readyAt";KalturaFileSyncOrderBy.SYNC_TIME_DESC="-syncTime";KalturaFileSyncOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaFileSyncOrderBy.VERSION_DESC="-version";function KalturaFlavorAssetOrderBy(){}
KalturaFlavorAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaFlavorAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaFlavorAssetOrderBy.SIZE_ASC="+size";KalturaFlavorAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaFlavorAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaFlavorAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaFlavorAssetOrderBy.SIZE_DESC="-size";KalturaFlavorAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaFlavorParamsOrderBy(){}
function KalturaFlavorParamsOutputOrderBy(){}
function KalturaFtpDropFolderOrderBy(){}
KalturaFtpDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaFtpDropFolderOrderBy.ID_ASC="+id";KalturaFtpDropFolderOrderBy.NAME_ASC="+name";KalturaFtpDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaFtpDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaFtpDropFolderOrderBy.ID_DESC="-id";KalturaFtpDropFolderOrderBy.NAME_DESC="-name";KalturaFtpDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaGenericDistributionProfileOrderBy(){}
KalturaGenericDistributionProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaGenericDistributionProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaGenericDistributionProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaGenericDistributionProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaGenericDistributionProviderActionOrderBy(){}
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_ASC="+createdAt";KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_DESC="-createdAt";KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaGenericDistributionProviderOrderBy(){}
KalturaGenericDistributionProviderOrderBy.CREATED_AT_ASC="+createdAt";KalturaGenericDistributionProviderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaGenericDistributionProviderOrderBy.CREATED_AT_DESC="-createdAt";KalturaGenericDistributionProviderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaGenericSyndicationFeedOrderBy(){}
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaGenericSyndicationFeedOrderBy.NAME_ASC="+name";KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaGenericSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaGenericSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaGenericSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaGenericSyndicationFeedOrderBy.NAME_DESC="-name";KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaGenericSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaGenericSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaGenericXsltSyndicationFeedOrderBy(){}
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaGenericXsltSyndicationFeedOrderBy.NAME_ASC="+name";KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaGenericXsltSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaGenericXsltSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaGenericXsltSyndicationFeedOrderBy.NAME_DESC="-name";KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaGenericXsltSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaGenericXsltSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaGeoCoderType(){}
KalturaGeoCoderType.KALTURA="1";function KalturaGoogleSyndicationFeedAdultValues(){}
KalturaGoogleSyndicationFeedAdultValues.NO="No";KalturaGoogleSyndicationFeedAdultValues.YES="Yes";function KalturaGoogleVideoSyndicationFeedOrderBy(){}
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaGoogleVideoSyndicationFeedOrderBy.NAME_ASC="+name";KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaGoogleVideoSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaGoogleVideoSyndicationFeedOrderBy.NAME_DESC="-name";KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaGoogleVideoSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaHttpNotificationCertificateType(){}
KalturaHttpNotificationCertificateType.DER="DER";KalturaHttpNotificationCertificateType.ENG="ENG";KalturaHttpNotificationCertificateType.PEM="PEM";function KalturaHttpNotificationSslKeyType(){}
KalturaHttpNotificationSslKeyType.DER="DER";KalturaHttpNotificationSslKeyType.ENG="ENG";KalturaHttpNotificationSslKeyType.PEM="PEM";function KalturaHttpNotificationTemplateOrderBy(){}
KalturaHttpNotificationTemplateOrderBy.CREATED_AT_ASC="+createdAt";KalturaHttpNotificationTemplateOrderBy.ID_ASC="+id";KalturaHttpNotificationTemplateOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaHttpNotificationTemplateOrderBy.CREATED_AT_DESC="-createdAt";KalturaHttpNotificationTemplateOrderBy.ID_DESC="-id";KalturaHttpNotificationTemplateOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaITunesSyndicationFeedAdultValues(){}
KalturaITunesSyndicationFeedAdultValues.CLEAN="clean";KalturaITunesSyndicationFeedAdultValues.NO="no";KalturaITunesSyndicationFeedAdultValues.YES="yes";function KalturaITunesSyndicationFeedCategories(){}
KalturaITunesSyndicationFeedCategories.ARTS="Arts";KalturaITunesSyndicationFeedCategories.ARTS_DESIGN="Arts/Design";KalturaITunesSyndicationFeedCategories.ARTS_FASHION_BEAUTY="Arts/Fashion &amp; Beauty";KalturaITunesSyndicationFeedCategories.ARTS_FOOD="Arts/Food";KalturaITunesSyndicationFeedCategories.ARTS_LITERATURE="Arts/Literature";KalturaITunesSyndicationFeedCategories.ARTS_PERFORMING_ARTS="Arts/Performing Arts";KalturaITunesSyndicationFeedCategories.ARTS_VISUAL_ARTS="Arts/Visual Arts";KalturaITunesSyndicationFeedCategories.BUSINESS="Business";KalturaITunesSyndicationFeedCategories.BUSINESS_BUSINESS_NEWS="Business/Business News";KalturaITunesSyndicationFeedCategories.BUSINESS_CAREERS="Business/Careers";KalturaITunesSyndicationFeedCategories.BUSINESS_INVESTING="Business/Investing";KalturaITunesSyndicationFeedCategories.BUSINESS_MANAGEMENT_MARKETING="Business/Management &amp; Marketing";KalturaITunesSyndicationFeedCategories.BUSINESS_SHOPPING="Business/Shopping";KalturaITunesSyndicationFeedCategories.COMEDY="Comedy";KalturaITunesSyndicationFeedCategories.EDUCATION="Education";KalturaITunesSyndicationFeedCategories.EDUCATION_TECHNOLOGY="Education/Education Technology";KalturaITunesSyndicationFeedCategories.EDUCATION_HIGHER_EDUCATION="Education/Higher Education";KalturaITunesSyndicationFeedCategories.EDUCATION_K_12="Education/K-12";KalturaITunesSyndicationFeedCategories.EDUCATION_LANGUAGE_COURSES="Education/Language Courses";KalturaITunesSyndicationFeedCategories.EDUCATION_TRAINING="Education/Training";KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES="Games &amp; Hobbies";KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AUTOMOTIVE="Games &amp; Hobbies/Automotive";KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AVIATION="Games &amp; Hobbies/Aviation";KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_HOBBIES="Games &amp; Hobbies/Hobbies";KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_OTHER_GAMES="Games &amp; Hobbies/Other Games";KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_VIDEO_GAMES="Games &amp; Hobbies/Video Games";KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS="Government &amp; Organizations";KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_LOCAL="Government &amp; Organizations/Local";KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NATIONAL="Government &amp; Organizations/National";KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NON_PROFIT="Government &amp; Organizations/Non-Profit";KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_REGIONAL="Government &amp; Organizations/Regional";KalturaITunesSyndicationFeedCategories.HEALTH="Health";KalturaITunesSyndicationFeedCategories.HEALTH_ALTERNATIVE_HEALTH="Health/Alternative Health";KalturaITunesSyndicationFeedCategories.HEALTH_FITNESS_NUTRITION="Health/Fitness &amp; Nutrition";KalturaITunesSyndicationFeedCategories.HEALTH_SELF_HELP="Health/Self-Help";KalturaITunesSyndicationFeedCategories.HEALTH_SEXUALITY="Health/Sexuality";KalturaITunesSyndicationFeedCategories.KIDS_FAMILY="Kids &amp; Family";KalturaITunesSyndicationFeedCategories.MUSIC="Music";KalturaITunesSyndicationFeedCategories.NEWS_POLITICS="News &amp; Politics";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY="Religion &amp; Spirituality";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_BUDDHISM="Religion &amp; Spirituality/Buddhism";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_CHRISTIANITY="Religion &amp; Spirituality/Christianity";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_HINDUISM="Religion &amp; Spirituality/Hinduism";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_ISLAM="Religion &amp; Spirituality/Islam";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_JUDAISM="Religion &amp; Spirituality/Judaism";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_OTHER="Religion &amp; Spirituality/Other";KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_SPIRITUALITY="Religion &amp; Spirituality/Spirituality";KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE="Science &amp; Medicine";KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_MEDICINE="Science &amp; Medicine/Medicine";KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_NATURAL_SCIENCES="Science &amp; Medicine/Natural Sciences";KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_SOCIAL_SCIENCES="Science &amp; Medicine/Social Sciences";KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE="Society &amp; Culture";KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_HISTORY="Society &amp; Culture/History";KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PERSONAL_JOURNALS="Society &amp; Culture/Personal Journals";KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PHILOSOPHY="Society &amp; Culture/Philosophy";KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PLACES_TRAVEL="Society &amp; Culture/Places &amp; Travel";KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION="Sports &amp; Recreation";KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_AMATEUR="Sports &amp; Recreation/Amateur";KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL="Sports &amp; Recreation/College &amp; High School";KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_OUTDOOR="Sports &amp; Recreation/Outdoor";KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_PROFESSIONAL="Sports &amp; Recreation/Professional";KalturaITunesSyndicationFeedCategories.TV_FILM="TV &amp; Film";KalturaITunesSyndicationFeedCategories.TECHNOLOGY="Technology";KalturaITunesSyndicationFeedCategories.TECHNOLOGY_GADGETS="Technology/Gadgets";KalturaITunesSyndicationFeedCategories.TECHNOLOGY_PODCASTING="Technology/Podcasting";KalturaITunesSyndicationFeedCategories.TECHNOLOGY_SOFTWARE_HOW_TO="Technology/Software How-To";KalturaITunesSyndicationFeedCategories.TECHNOLOGY_TECH_NEWS="Technology/Tech News";function KalturaITunesSyndicationFeedOrderBy(){}
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaITunesSyndicationFeedOrderBy.NAME_ASC="+name";KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaITunesSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaITunesSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaITunesSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaITunesSyndicationFeedOrderBy.NAME_DESC="-name";KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaITunesSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaITunesSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaImageFlavorParamsOrderBy(){}
function KalturaImageFlavorParamsOutputOrderBy(){}
function KalturaKontikiStorageProfileOrderBy(){}
KalturaKontikiStorageProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaKontikiStorageProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaKontikiStorageProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaKontikiStorageProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaLanguage(){}
KalturaLanguage.AB="Abkhazian";KalturaLanguage.AA="Afar";KalturaLanguage.AF="Afrikaans";KalturaLanguage.SQ="Albanian";KalturaLanguage.AM="Amharic";KalturaLanguage.AR="Arabic";KalturaLanguage.HY="Armenian";KalturaLanguage.AS_="Assamese";KalturaLanguage.AY="Aymara";KalturaLanguage.AZ="Azerbaijani";KalturaLanguage.BA="Bashkir";KalturaLanguage.EU="Basque";KalturaLanguage.BN="Bengali (Bangla)";KalturaLanguage.DZ="Bhutani";KalturaLanguage.BH="Bihari";KalturaLanguage.BI="Bislama";KalturaLanguage.BR="Breton";KalturaLanguage.BG="Bulgarian";KalturaLanguage.MY="Burmese";KalturaLanguage.BE="Byelorussian (Belarusian)";KalturaLanguage.KM="Cambodian";KalturaLanguage.CA="Catalan";KalturaLanguage.ZH="Chinese";KalturaLanguage.CO="Corsican";KalturaLanguage.HR="Croatian";KalturaLanguage.CS="Czech";KalturaLanguage.DA="Danish";KalturaLanguage.NL="Dutch";KalturaLanguage.EN="English";KalturaLanguage.EO="Esperanto";KalturaLanguage.ET="Estonian";KalturaLanguage.FO="Faeroese";KalturaLanguage.FA="Farsi";KalturaLanguage.FJ="Fiji";KalturaLanguage.FI="Finnish";KalturaLanguage.FR="French";KalturaLanguage.FY="Frisian";KalturaLanguage.GV="Gaelic (Manx)";KalturaLanguage.GD="Gaelic (Scottish)";KalturaLanguage.GL="Galician";KalturaLanguage.KA="Georgian";KalturaLanguage.DE="German";KalturaLanguage.EL="Greek";KalturaLanguage.KL="Greenlandic";KalturaLanguage.GN="Guarani";KalturaLanguage.GU="Gujarati";KalturaLanguage.HA="Hausa";KalturaLanguage.IW="Hebrew";KalturaLanguage.HE="Hebrew";KalturaLanguage.HI="Hindi";KalturaLanguage.HU="Hungarian";KalturaLanguage.IS="Icelandic";KalturaLanguage.IN="Indonesian";KalturaLanguage.ID="Indonesian";KalturaLanguage.IA="Interlingua";KalturaLanguage.IE="Interlingue";KalturaLanguage.IU="Inuktitut";KalturaLanguage.IK="Inupiak";KalturaLanguage.GA="Irish";KalturaLanguage.IT="Italian";KalturaLanguage.JA="Japanese";KalturaLanguage.JV="Javanese";KalturaLanguage.KN="Kannada";KalturaLanguage.KS="Kashmiri";KalturaLanguage.KK="Kazakh";KalturaLanguage.RW="Kinyarwanda (Ruanda)";KalturaLanguage.KY="Kirghiz";KalturaLanguage.RN="Kirundi (Rundi)";KalturaLanguage.KO="Korean";KalturaLanguage.KU="Kurdish";KalturaLanguage.LO="Laothian";KalturaLanguage.LA="Latin";KalturaLanguage.LV="Latvian (Lettish)";KalturaLanguage.LI="Limburgish ( Limburger)";KalturaLanguage.LN="Lingala";KalturaLanguage.LT="Lithuanian";KalturaLanguage.MK="Macedonian";KalturaLanguage.MG="Malagasy";KalturaLanguage.MS="Malay";KalturaLanguage.ML="Malayalam";KalturaLanguage.MT="Maltese";KalturaLanguage.MI="Maori";KalturaLanguage.MR="Marathi";KalturaLanguage.MO="Moldavian";KalturaLanguage.MN="Mongolian";KalturaLanguage.NA="Nauru";KalturaLanguage.NE="Nepali";KalturaLanguage.NO="Norwegian";KalturaLanguage.OC="Occitan";KalturaLanguage.OR_="Oriya";KalturaLanguage.OM="Oromo (Afan, Galla)";KalturaLanguage.PS="Pashto (Pushto)";KalturaLanguage.PL="Polish";KalturaLanguage.PT="Portuguese";KalturaLanguage.PA="Punjabi";KalturaLanguage.QU="Quechua";KalturaLanguage.RM="Rhaeto-Romance";KalturaLanguage.RO="Romanian";KalturaLanguage.RU="Russian";KalturaLanguage.SM="Samoan";KalturaLanguage.SG="Sangro";KalturaLanguage.SA="Sanskrit";KalturaLanguage.SR="Serbian";KalturaLanguage.SH="Serbo-Croatian";KalturaLanguage.ST="Sesotho";KalturaLanguage.TN="Setswana";KalturaLanguage.SN="Shona";KalturaLanguage.SD="Sindhi";KalturaLanguage.SI="Sinhalese";KalturaLanguage.SS="Siswati";KalturaLanguage.SK="Slovak";KalturaLanguage.SL="Slovenian";KalturaLanguage.SO="Somali";KalturaLanguage.ES="Spanish";KalturaLanguage.SU="Sundanese";KalturaLanguage.SW="Swahili (Kiswahili)";KalturaLanguage.SV="Swedish";KalturaLanguage.TL="Tagalog";KalturaLanguage.TG="Tajik";KalturaLanguage.TA="Tamil";KalturaLanguage.TT="Tatar";KalturaLanguage.TE="Telugu";KalturaLanguage.TH="Thai";KalturaLanguage.BO="Tibetan";KalturaLanguage.TI="Tigrinya";KalturaLanguage.TO="Tonga";KalturaLanguage.TS="Tsonga";KalturaLanguage.TR="Turkish";KalturaLanguage.TK="Turkmen";KalturaLanguage.TW="Twi";KalturaLanguage.UG="Uighur";KalturaLanguage.UK="Ukrainian";KalturaLanguage.UR="Urdu";KalturaLanguage.UZ="Uzbek";KalturaLanguage.VI="Vietnamese";KalturaLanguage.VO="Volapuk";KalturaLanguage.CY="Welsh";KalturaLanguage.WO="Wolof";KalturaLanguage.XH="Xhosa";KalturaLanguage.YI="Yiddish";KalturaLanguage.JI="Yiddish";KalturaLanguage.YO="Yoruba";KalturaLanguage.ZU="Zulu";function KalturaLanguageCode(){}
KalturaLanguageCode.AA="aa";KalturaLanguageCode.AB="ab";KalturaLanguageCode.AF="af";KalturaLanguageCode.AM="am";KalturaLanguageCode.AR="ar";KalturaLanguageCode.AS_="as";KalturaLanguageCode.AY="ay";KalturaLanguageCode.AZ="az";KalturaLanguageCode.BA="ba";KalturaLanguageCode.BE="be";KalturaLanguageCode.BG="bg";KalturaLanguageCode.BH="bh";KalturaLanguageCode.BI="bi";KalturaLanguageCode.BN="bn";KalturaLanguageCode.BO="bo";KalturaLanguageCode.BR="br";KalturaLanguageCode.CA="ca";KalturaLanguageCode.CO="co";KalturaLanguageCode.CS="cs";KalturaLanguageCode.CY="cy";KalturaLanguageCode.DA="da";KalturaLanguageCode.DE="de";KalturaLanguageCode.DZ="dz";KalturaLanguageCode.EL="el";KalturaLanguageCode.EN="en";KalturaLanguageCode.EO="eo";KalturaLanguageCode.ES="es";KalturaLanguageCode.ET="et";KalturaLanguageCode.EU="eu";KalturaLanguageCode.FA="fa";KalturaLanguageCode.FI="fi";KalturaLanguageCode.FJ="fj";KalturaLanguageCode.FO="fo";KalturaLanguageCode.FR="fr";KalturaLanguageCode.FY="fy";KalturaLanguageCode.GA="ga";KalturaLanguageCode.GD="gd";KalturaLanguageCode.GL="gl";KalturaLanguageCode.GN="gn";KalturaLanguageCode.GU="gu";KalturaLanguageCode.GV="gv";KalturaLanguageCode.HA="ha";KalturaLanguageCode.HE="he";KalturaLanguageCode.HI="hi";KalturaLanguageCode.HR="hr";KalturaLanguageCode.HU="hu";KalturaLanguageCode.HY="hy";KalturaLanguageCode.IA="ia";KalturaLanguageCode.ID="id";KalturaLanguageCode.IE="ie";KalturaLanguageCode.IK="ik";KalturaLanguageCode.IN="in";KalturaLanguageCode.IS="is";KalturaLanguageCode.IT="it";KalturaLanguageCode.IU="iu";KalturaLanguageCode.IW="iw";KalturaLanguageCode.JA="ja";KalturaLanguageCode.JI="ji";KalturaLanguageCode.JV="jv";KalturaLanguageCode.KA="ka";KalturaLanguageCode.KK="kk";KalturaLanguageCode.KL="kl";KalturaLanguageCode.KM="km";KalturaLanguageCode.KN="kn";KalturaLanguageCode.KO="ko";KalturaLanguageCode.KS="ks";KalturaLanguageCode.KU="ku";KalturaLanguageCode.KY="ky";KalturaLanguageCode.LA="la";KalturaLanguageCode.LI="li";KalturaLanguageCode.LN="ln";KalturaLanguageCode.LO="lo";KalturaLanguageCode.LT="lt";KalturaLanguageCode.LV="lv";KalturaLanguageCode.MG="mg";KalturaLanguageCode.MI="mi";KalturaLanguageCode.MK="mk";KalturaLanguageCode.ML="ml";KalturaLanguageCode.MN="mn";KalturaLanguageCode.MO="mo";KalturaLanguageCode.MR="mr";KalturaLanguageCode.MS="ms";KalturaLanguageCode.MT="mt";KalturaLanguageCode.MY="my";KalturaLanguageCode.NA="na";KalturaLanguageCode.NE="ne";KalturaLanguageCode.NL="nl";KalturaLanguageCode.NO="no";KalturaLanguageCode.OC="oc";KalturaLanguageCode.OM="om";KalturaLanguageCode.OR_="or";KalturaLanguageCode.PA="pa";KalturaLanguageCode.PL="pl";KalturaLanguageCode.PS="ps";KalturaLanguageCode.PT="pt";KalturaLanguageCode.QU="qu";KalturaLanguageCode.RM="rm";KalturaLanguageCode.RN="rn";KalturaLanguageCode.RO="ro";KalturaLanguageCode.RU="ru";KalturaLanguageCode.RW="rw";KalturaLanguageCode.SA="sa";KalturaLanguageCode.SD="sd";KalturaLanguageCode.SG="sg";KalturaLanguageCode.SH="sh";KalturaLanguageCode.SI="si";KalturaLanguageCode.SK="sk";KalturaLanguageCode.SL="sl";KalturaLanguageCode.SM="sm";KalturaLanguageCode.SN="sn";KalturaLanguageCode.SO="so";KalturaLanguageCode.SQ="sq";KalturaLanguageCode.SR="sr";KalturaLanguageCode.SS="ss";KalturaLanguageCode.ST="st";KalturaLanguageCode.SU="su";KalturaLanguageCode.SV="sv";KalturaLanguageCode.SW="sw";KalturaLanguageCode.TA="ta";KalturaLanguageCode.TE="te";KalturaLanguageCode.TG="tg";KalturaLanguageCode.TH="th";KalturaLanguageCode.TI="ti";KalturaLanguageCode.TK="tk";KalturaLanguageCode.TL="tl";KalturaLanguageCode.TN="tn";KalturaLanguageCode.TO="to";KalturaLanguageCode.TR="tr";KalturaLanguageCode.TS="ts";KalturaLanguageCode.TT="tt";KalturaLanguageCode.TW="tw";KalturaLanguageCode.UG="ug";KalturaLanguageCode.UK="uk";KalturaLanguageCode.UR="ur";KalturaLanguageCode.UZ="uz";KalturaLanguageCode.VI="vi";KalturaLanguageCode.VO="vo";KalturaLanguageCode.WO="wo";KalturaLanguageCode.XH="xh";KalturaLanguageCode.YI="yi";KalturaLanguageCode.YO="yo";KalturaLanguageCode.ZH="zh";KalturaLanguageCode.ZU="zu";function KalturaLiveAssetOrderBy(){}
KalturaLiveAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaLiveAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaLiveAssetOrderBy.SIZE_ASC="+size";KalturaLiveAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaLiveAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaLiveAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaLiveAssetOrderBy.SIZE_DESC="-size";KalturaLiveAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaLiveChannelOrderBy(){}
KalturaLiveChannelOrderBy.CREATED_AT_ASC="+createdAt";KalturaLiveChannelOrderBy.DURATION_ASC="+duration";KalturaLiveChannelOrderBy.END_DATE_ASC="+endDate";KalturaLiveChannelOrderBy.FIRST_BROADCAST_ASC="+firstBroadcast";KalturaLiveChannelOrderBy.LAST_BROADCAST_ASC="+lastBroadcast";KalturaLiveChannelOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaLiveChannelOrderBy.MEDIA_TYPE_ASC="+mediaType";KalturaLiveChannelOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaLiveChannelOrderBy.NAME_ASC="+name";KalturaLiveChannelOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaLiveChannelOrderBy.PLAYS_ASC="+plays";KalturaLiveChannelOrderBy.RANK_ASC="+rank";KalturaLiveChannelOrderBy.RECENT_ASC="+recent";KalturaLiveChannelOrderBy.START_DATE_ASC="+startDate";KalturaLiveChannelOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaLiveChannelOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaLiveChannelOrderBy.VIEWS_ASC="+views";KalturaLiveChannelOrderBy.WEIGHT_ASC="+weight";KalturaLiveChannelOrderBy.CREATED_AT_DESC="-createdAt";KalturaLiveChannelOrderBy.DURATION_DESC="-duration";KalturaLiveChannelOrderBy.END_DATE_DESC="-endDate";KalturaLiveChannelOrderBy.FIRST_BROADCAST_DESC="-firstBroadcast";KalturaLiveChannelOrderBy.LAST_BROADCAST_DESC="-lastBroadcast";KalturaLiveChannelOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaLiveChannelOrderBy.MEDIA_TYPE_DESC="-mediaType";KalturaLiveChannelOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaLiveChannelOrderBy.NAME_DESC="-name";KalturaLiveChannelOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaLiveChannelOrderBy.PLAYS_DESC="-plays";KalturaLiveChannelOrderBy.RANK_DESC="-rank";KalturaLiveChannelOrderBy.RECENT_DESC="-recent";KalturaLiveChannelOrderBy.START_DATE_DESC="-startDate";KalturaLiveChannelOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaLiveChannelOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaLiveChannelOrderBy.VIEWS_DESC="-views";KalturaLiveChannelOrderBy.WEIGHT_DESC="-weight";function KalturaLiveChannelSegmentOrderBy(){}
KalturaLiveChannelSegmentOrderBy.CREATED_AT_ASC="+createdAt";KalturaLiveChannelSegmentOrderBy.START_TIME_ASC="+startTime";KalturaLiveChannelSegmentOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaLiveChannelSegmentOrderBy.CREATED_AT_DESC="-createdAt";KalturaLiveChannelSegmentOrderBy.START_TIME_DESC="-startTime";KalturaLiveChannelSegmentOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaLiveChannelSegmentStatus(){}
KalturaLiveChannelSegmentStatus.ACTIVE="2";KalturaLiveChannelSegmentStatus.DELETED="3";function KalturaLiveChannelSegmentTriggerType(){}
KalturaLiveChannelSegmentTriggerType.CHANNEL_RELATIVE="1";KalturaLiveChannelSegmentTriggerType.ABSOLUTE_TIME="2";KalturaLiveChannelSegmentTriggerType.SEGMENT_START_RELATIVE="3";KalturaLiveChannelSegmentTriggerType.SEGMENT_END_RELATIVE="4";function KalturaLiveChannelSegmentType(){}
KalturaLiveChannelSegmentType.VIDEO_AND_AUDIO="1";function KalturaLiveEntryOrderBy(){}
KalturaLiveEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaLiveEntryOrderBy.DURATION_ASC="+duration";KalturaLiveEntryOrderBy.END_DATE_ASC="+endDate";KalturaLiveEntryOrderBy.FIRST_BROADCAST_ASC="+firstBroadcast";KalturaLiveEntryOrderBy.LAST_BROADCAST_ASC="+lastBroadcast";KalturaLiveEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaLiveEntryOrderBy.MEDIA_TYPE_ASC="+mediaType";KalturaLiveEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaLiveEntryOrderBy.NAME_ASC="+name";KalturaLiveEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaLiveEntryOrderBy.PLAYS_ASC="+plays";KalturaLiveEntryOrderBy.RANK_ASC="+rank";KalturaLiveEntryOrderBy.RECENT_ASC="+recent";KalturaLiveEntryOrderBy.START_DATE_ASC="+startDate";KalturaLiveEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaLiveEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaLiveEntryOrderBy.VIEWS_ASC="+views";KalturaLiveEntryOrderBy.WEIGHT_ASC="+weight";KalturaLiveEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaLiveEntryOrderBy.DURATION_DESC="-duration";KalturaLiveEntryOrderBy.END_DATE_DESC="-endDate";KalturaLiveEntryOrderBy.FIRST_BROADCAST_DESC="-firstBroadcast";KalturaLiveEntryOrderBy.LAST_BROADCAST_DESC="-lastBroadcast";KalturaLiveEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaLiveEntryOrderBy.MEDIA_TYPE_DESC="-mediaType";KalturaLiveEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaLiveEntryOrderBy.NAME_DESC="-name";KalturaLiveEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaLiveEntryOrderBy.PLAYS_DESC="-plays";KalturaLiveEntryOrderBy.RANK_DESC="-rank";KalturaLiveEntryOrderBy.RECENT_DESC="-recent";KalturaLiveEntryOrderBy.START_DATE_DESC="-startDate";KalturaLiveEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaLiveEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaLiveEntryOrderBy.VIEWS_DESC="-views";KalturaLiveEntryOrderBy.WEIGHT_DESC="-weight";function KalturaLiveParamsOrderBy(){}
function KalturaLiveReportType(){}
KalturaLiveReportType.ENTRY_GEO_TIME_LINE="ENTRY_GEO_TIME_LINE";KalturaLiveReportType.ENTRY_SYNDICATION_TOTAL="ENTRY_SYNDICATION_TOTAL";KalturaLiveReportType.ENTRY_TIME_LINE="ENTRY_TIME_LINE";KalturaLiveReportType.ENTRY_TOTAL="ENTRY_TOTAL";KalturaLiveReportType.PARTNER_TOTAL="PARTNER_TOTAL";function KalturaLiveStreamAdminEntryOrderBy(){}
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaLiveStreamAdminEntryOrderBy.DURATION_ASC="+duration";KalturaLiveStreamAdminEntryOrderBy.END_DATE_ASC="+endDate";KalturaLiveStreamAdminEntryOrderBy.FIRST_BROADCAST_ASC="+firstBroadcast";KalturaLiveStreamAdminEntryOrderBy.LAST_BROADCAST_ASC="+lastBroadcast";KalturaLiveStreamAdminEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_ASC="+mediaType";KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaLiveStreamAdminEntryOrderBy.NAME_ASC="+name";KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaLiveStreamAdminEntryOrderBy.PLAYS_ASC="+plays";KalturaLiveStreamAdminEntryOrderBy.RANK_ASC="+rank";KalturaLiveStreamAdminEntryOrderBy.RECENT_ASC="+recent";KalturaLiveStreamAdminEntryOrderBy.START_DATE_ASC="+startDate";KalturaLiveStreamAdminEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaLiveStreamAdminEntryOrderBy.VIEWS_ASC="+views";KalturaLiveStreamAdminEntryOrderBy.WEIGHT_ASC="+weight";KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaLiveStreamAdminEntryOrderBy.DURATION_DESC="-duration";KalturaLiveStreamAdminEntryOrderBy.END_DATE_DESC="-endDate";KalturaLiveStreamAdminEntryOrderBy.FIRST_BROADCAST_DESC="-firstBroadcast";KalturaLiveStreamAdminEntryOrderBy.LAST_BROADCAST_DESC="-lastBroadcast";KalturaLiveStreamAdminEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_DESC="-mediaType";KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaLiveStreamAdminEntryOrderBy.NAME_DESC="-name";KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaLiveStreamAdminEntryOrderBy.PLAYS_DESC="-plays";KalturaLiveStreamAdminEntryOrderBy.RANK_DESC="-rank";KalturaLiveStreamAdminEntryOrderBy.RECENT_DESC="-recent";KalturaLiveStreamAdminEntryOrderBy.START_DATE_DESC="-startDate";KalturaLiveStreamAdminEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaLiveStreamAdminEntryOrderBy.VIEWS_DESC="-views";KalturaLiveStreamAdminEntryOrderBy.WEIGHT_DESC="-weight";function KalturaLiveStreamEntryOrderBy(){}
KalturaLiveStreamEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaLiveStreamEntryOrderBy.DURATION_ASC="+duration";KalturaLiveStreamEntryOrderBy.END_DATE_ASC="+endDate";KalturaLiveStreamEntryOrderBy.FIRST_BROADCAST_ASC="+firstBroadcast";KalturaLiveStreamEntryOrderBy.LAST_BROADCAST_ASC="+lastBroadcast";KalturaLiveStreamEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_ASC="+mediaType";KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaLiveStreamEntryOrderBy.NAME_ASC="+name";KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaLiveStreamEntryOrderBy.PLAYS_ASC="+plays";KalturaLiveStreamEntryOrderBy.RANK_ASC="+rank";KalturaLiveStreamEntryOrderBy.RECENT_ASC="+recent";KalturaLiveStreamEntryOrderBy.START_DATE_ASC="+startDate";KalturaLiveStreamEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaLiveStreamEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaLiveStreamEntryOrderBy.VIEWS_ASC="+views";KalturaLiveStreamEntryOrderBy.WEIGHT_ASC="+weight";KalturaLiveStreamEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaLiveStreamEntryOrderBy.DURATION_DESC="-duration";KalturaLiveStreamEntryOrderBy.END_DATE_DESC="-endDate";KalturaLiveStreamEntryOrderBy.FIRST_BROADCAST_DESC="-firstBroadcast";KalturaLiveStreamEntryOrderBy.LAST_BROADCAST_DESC="-lastBroadcast";KalturaLiveStreamEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_DESC="-mediaType";KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaLiveStreamEntryOrderBy.NAME_DESC="-name";KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaLiveStreamEntryOrderBy.PLAYS_DESC="-plays";KalturaLiveStreamEntryOrderBy.RANK_DESC="-rank";KalturaLiveStreamEntryOrderBy.RECENT_DESC="-recent";KalturaLiveStreamEntryOrderBy.START_DATE_DESC="-startDate";KalturaLiveStreamEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaLiveStreamEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaLiveStreamEntryOrderBy.VIEWS_DESC="-views";KalturaLiveStreamEntryOrderBy.WEIGHT_DESC="-weight";function KalturaMailType(){}
KalturaMailType.MAIL_TYPE_KALTURA_NEWSLETTER="10";KalturaMailType.MAIL_TYPE_ADDED_TO_FAVORITES="11";KalturaMailType.MAIL_TYPE_ADDED_TO_CLIP_FAVORITES="12";KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_PROFILE="13";KalturaMailType.MAIL_TYPE_CLIP_ADDED_YOUR_KALTURA="20";KalturaMailType.MAIL_TYPE_VIDEO_ADDED="21";KalturaMailType.MAIL_TYPE_ROUGHCUT_CREATED="22";KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_YOUR_FAVORITES="23";KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA="24";KalturaMailType.MAIL_TYPE_CLIP_ADDED="30";KalturaMailType.MAIL_TYPE_VIDEO_CREATED="31";KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES="32";KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_CONTRIBUTED="33";KalturaMailType.MAIL_TYPE_CLIP_CONTRIBUTED="40";KalturaMailType.MAIL_TYPE_ROUGHCUT_CREATED_SUBSCRIBED="41";KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES_SUBSCRIBED="42";KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_SUBSCRIBED="43";KalturaMailType.MAIL_TYPE_REGISTER_CONFIRM="50";KalturaMailType.MAIL_TYPE_PASSWORD_RESET="51";KalturaMailType.MAIL_TYPE_LOGIN_MAIL_RESET="52";KalturaMailType.MAIL_TYPE_REGISTER_CONFIRM_VIDEO_SERVICE="54";KalturaMailType.MAIL_TYPE_VIDEO_READY="60";KalturaMailType.MAIL_TYPE_VIDEO_IS_READY="62";KalturaMailType.MAIL_TYPE_BULK_DOWNLOAD_READY="63";KalturaMailType.MAIL_TYPE_BULKUPLOAD_FINISHED="64";KalturaMailType.MAIL_TYPE_BULKUPLOAD_FAILED="65";KalturaMailType.MAIL_TYPE_BULKUPLOAD_ABORTED="66";KalturaMailType.MAIL_TYPE_NOTIFY_ERR="70";KalturaMailType.MAIL_TYPE_ACCOUNT_UPGRADE_CONFIRM="80";KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE="81";KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_LIMIT_REACHED="82";KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_LOCKED="83";KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_DELETED="84";KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_UPGRADE_OFFER="85";KalturaMailType.MAIL_TYPE_ACCOUNT_REACTIVE_CONFIRM="86";KalturaMailType.MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD="110";KalturaMailType.MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD_SUCCESS="111";KalturaMailType.MAIL_TYPE_SYSTEM_USER_NEW_PASSWORD="112";KalturaMailType.MAIL_TYPE_SYSTEM_USER_CREDENTIALS_SAVED="113";KalturaMailType.MAIL_TYPE_LIVE_REPORT_EXPORT_SUCCESS="130";KalturaMailType.MAIL_TYPE_LIVE_REPORT_EXPORT_FAILURE="131";KalturaMailType.MAIL_TYPE_LIVE_REPORT_EXPORT_ABORT="132";function KalturaMediaEntryOrderBy(){}
KalturaMediaEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaMediaEntryOrderBy.DURATION_ASC="+duration";KalturaMediaEntryOrderBy.END_DATE_ASC="+endDate";KalturaMediaEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaMediaEntryOrderBy.MEDIA_TYPE_ASC="+mediaType";KalturaMediaEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaMediaEntryOrderBy.NAME_ASC="+name";KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaMediaEntryOrderBy.PLAYS_ASC="+plays";KalturaMediaEntryOrderBy.RANK_ASC="+rank";KalturaMediaEntryOrderBy.RECENT_ASC="+recent";KalturaMediaEntryOrderBy.START_DATE_ASC="+startDate";KalturaMediaEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaMediaEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaMediaEntryOrderBy.VIEWS_ASC="+views";KalturaMediaEntryOrderBy.WEIGHT_ASC="+weight";KalturaMediaEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaMediaEntryOrderBy.DURATION_DESC="-duration";KalturaMediaEntryOrderBy.END_DATE_DESC="-endDate";KalturaMediaEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaMediaEntryOrderBy.MEDIA_TYPE_DESC="-mediaType";KalturaMediaEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaMediaEntryOrderBy.NAME_DESC="-name";KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaMediaEntryOrderBy.PLAYS_DESC="-plays";KalturaMediaEntryOrderBy.RANK_DESC="-rank";KalturaMediaEntryOrderBy.RECENT_DESC="-recent";KalturaMediaEntryOrderBy.START_DATE_DESC="-startDate";KalturaMediaEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaMediaEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaMediaEntryOrderBy.VIEWS_DESC="-views";KalturaMediaEntryOrderBy.WEIGHT_DESC="-weight";function KalturaMediaFlavorParamsOrderBy(){}
function KalturaMediaFlavorParamsOutputOrderBy(){}
function KalturaMediaInfoOrderBy(){}
function KalturaMediaParserType(){}
KalturaMediaParserType.MEDIAINFO="0";KalturaMediaParserType.REMOTE_MEDIAINFO="remoteMediaInfo.RemoteMediaInfo";KalturaMediaParserType.FFMPEG="1";function KalturaMediaServerOrderBy(){}
KalturaMediaServerOrderBy.CREATED_AT_ASC="+createdAt";KalturaMediaServerOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaMediaServerOrderBy.CREATED_AT_DESC="-createdAt";KalturaMediaServerOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaMetadataObjectType(){}
KalturaMetadataObjectType.AD_CUE_POINT="adCuePointMetadata.AdCuePoint";KalturaMetadataObjectType.ANNOTATION="annotationMetadata.Annotation";KalturaMetadataObjectType.CODE_CUE_POINT="codeCuePointMetadata.CodeCuePoint";KalturaMetadataObjectType.THUMB_CUE_POINT="thumbCuePointMetadata.thumbCuePoint";KalturaMetadataObjectType.ENTRY="1";KalturaMetadataObjectType.CATEGORY="2";KalturaMetadataObjectType.USER="3";KalturaMetadataObjectType.PARTNER="4";function KalturaMetadataOrderBy(){}
KalturaMetadataOrderBy.CREATED_AT_ASC="+createdAt";KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_ASC="+metadataProfileVersion";KalturaMetadataOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaMetadataOrderBy.VERSION_ASC="+version";KalturaMetadataOrderBy.CREATED_AT_DESC="-createdAt";KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_DESC="-metadataProfileVersion";KalturaMetadataOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaMetadataOrderBy.VERSION_DESC="-version";function KalturaMetadataProfileOrderBy(){}
KalturaMetadataProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaMetadataProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaMetadataProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaMetadataProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaMixEntryOrderBy(){}
KalturaMixEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaMixEntryOrderBy.DURATION_ASC="+duration";KalturaMixEntryOrderBy.END_DATE_ASC="+endDate";KalturaMixEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaMixEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaMixEntryOrderBy.NAME_ASC="+name";KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaMixEntryOrderBy.PLAYS_ASC="+plays";KalturaMixEntryOrderBy.RANK_ASC="+rank";KalturaMixEntryOrderBy.RECENT_ASC="+recent";KalturaMixEntryOrderBy.START_DATE_ASC="+startDate";KalturaMixEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaMixEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaMixEntryOrderBy.VIEWS_ASC="+views";KalturaMixEntryOrderBy.WEIGHT_ASC="+weight";KalturaMixEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaMixEntryOrderBy.DURATION_DESC="-duration";KalturaMixEntryOrderBy.END_DATE_DESC="-endDate";KalturaMixEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaMixEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaMixEntryOrderBy.NAME_DESC="-name";KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaMixEntryOrderBy.PLAYS_DESC="-plays";KalturaMixEntryOrderBy.RANK_DESC="-rank";KalturaMixEntryOrderBy.RECENT_DESC="-recent";KalturaMixEntryOrderBy.START_DATE_DESC="-startDate";KalturaMixEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaMixEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaMixEntryOrderBy.VIEWS_DESC="-views";KalturaMixEntryOrderBy.WEIGHT_DESC="-weight";function KalturaModerationFlagStatus(){}
KalturaModerationFlagStatus.PENDING="1";KalturaModerationFlagStatus.MODERATED="2";function KalturaModerationObjectType(){}
KalturaModerationObjectType.ENTRY="2";KalturaModerationObjectType.USER="3";function KalturaObjectFilterEngineType(){}
KalturaObjectFilterEngineType.ENTRY="1";function KalturaObjectTaskType(){}
KalturaObjectTaskType.DISPATCH_EVENT_NOTIFICATION="scheduledTaskEventNotification.DispatchEventNotification";KalturaObjectTaskType.EXECUTE_METADATA_XSLT="scheduledTaskMetadata.ExecuteMetadataXslt";KalturaObjectTaskType.DELETE_ENTRY="1";KalturaObjectTaskType.MODIFY_CATEGORIES="2";KalturaObjectTaskType.DELETE_ENTRY_FLAVORS="3";KalturaObjectTaskType.CONVERT_ENTRY_FLAVORS="4";KalturaObjectTaskType.DELETE_LOCAL_CONTENT="5";function KalturaPartnerOrderBy(){}
KalturaPartnerOrderBy.ADMIN_EMAIL_ASC="+adminEmail";KalturaPartnerOrderBy.ADMIN_NAME_ASC="+adminName";KalturaPartnerOrderBy.CREATED_AT_ASC="+createdAt";KalturaPartnerOrderBy.ID_ASC="+id";KalturaPartnerOrderBy.NAME_ASC="+name";KalturaPartnerOrderBy.STATUS_ASC="+status";KalturaPartnerOrderBy.WEBSITE_ASC="+website";KalturaPartnerOrderBy.ADMIN_EMAIL_DESC="-adminEmail";KalturaPartnerOrderBy.ADMIN_NAME_DESC="-adminName";KalturaPartnerOrderBy.CREATED_AT_DESC="-createdAt";KalturaPartnerOrderBy.ID_DESC="-id";KalturaPartnerOrderBy.NAME_DESC="-name";KalturaPartnerOrderBy.STATUS_DESC="-status";KalturaPartnerOrderBy.WEBSITE_DESC="-website";function KalturaPdfFlavorParamsOrderBy(){}
function KalturaPdfFlavorParamsOutputOrderBy(){}
function KalturaPermissionItemOrderBy(){}
KalturaPermissionItemOrderBy.CREATED_AT_ASC="+createdAt";KalturaPermissionItemOrderBy.ID_ASC="+id";KalturaPermissionItemOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaPermissionItemOrderBy.CREATED_AT_DESC="-createdAt";KalturaPermissionItemOrderBy.ID_DESC="-id";KalturaPermissionItemOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaPermissionItemType(){}
KalturaPermissionItemType.API_ACTION_ITEM="kApiActionPermissionItem";KalturaPermissionItemType.API_PARAMETER_ITEM="kApiParameterPermissionItem";function KalturaPermissionOrderBy(){}
KalturaPermissionOrderBy.CREATED_AT_ASC="+createdAt";KalturaPermissionOrderBy.ID_ASC="+id";KalturaPermissionOrderBy.NAME_ASC="+name";KalturaPermissionOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaPermissionOrderBy.CREATED_AT_DESC="-createdAt";KalturaPermissionOrderBy.ID_DESC="-id";KalturaPermissionOrderBy.NAME_DESC="-name";KalturaPermissionOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaPlayReadyAnalogVideoOPId(){}
KalturaPlayReadyAnalogVideoOPId.EXPLICIT_ANALOG_TV="2098DE8D-7DDD-4BAB-96C6-32EBB6FABEA3";KalturaPlayReadyAnalogVideoOPId.BEST_EFFORT_EXPLICIT_ANALOG_TV="225CD36F-F132-49EF-BA8C-C91EA28E4369";KalturaPlayReadyAnalogVideoOPId.IMAGE_CONSTRAINT_VIDEO="811C5110-46C8-4C6E-8163-C0482A15D47E";KalturaPlayReadyAnalogVideoOPId.AGC_AND_COLOR_STRIPE="C3FD11C6-F8B7-4D20-B008-1DB17D61F2DA";KalturaPlayReadyAnalogVideoOPId.IMAGE_CONSTRAINT_MONITOR="D783A191-E083-4BAF-B2DA-E69F910B3772";function KalturaPlayReadyCopyEnablerType(){}
KalturaPlayReadyCopyEnablerType.CSS="3CAF2814-A7AB-467C-B4DF-54ACC56C66DC";KalturaPlayReadyCopyEnablerType.PRINTER="3CF2E054-F4D5-46cd-85A6-FCD152AD5FBE";KalturaPlayReadyCopyEnablerType.DEVICE="6848955D-516B-4EB0-90E8-8F6D5A77B85F";KalturaPlayReadyCopyEnablerType.CLIPBOARD="6E76C588-C3A9-47ea-A875-546D5209FF38";KalturaPlayReadyCopyEnablerType.SDC="79F78A0D-0B69-401e-8A90-8BEF30BCE192";KalturaPlayReadyCopyEnablerType.SDC_PREVIEW="81BD9AD4-A720-4ea1-B510-5D4E6FFB6A4D";KalturaPlayReadyCopyEnablerType.AACS="C3CF56E0-7FF2-4491-809F-53E21D3ABF07";KalturaPlayReadyCopyEnablerType.HELIX="CCB0B4E3-8B46-409e-A998-82556E3F5AF4";KalturaPlayReadyCopyEnablerType.CPRM="CDD801AD-A577-48DB-950E-46D5F1592FAE";KalturaPlayReadyCopyEnablerType.PC="CE480EDE-516B-40B3-90E1-D6CFC47630C5";KalturaPlayReadyCopyEnablerType.SDC_LIMITED="E6785609-64CC-4bfa-B82D-6B619733B746";KalturaPlayReadyCopyEnablerType.ORANGE_BOOK_CD="EC930B7D-1F2D-4682-A38B-8AB977721D0D";function KalturaPlayReadyDigitalAudioOPId(){}
KalturaPlayReadyDigitalAudioOPId.SCMS="6D5CFA59-C250-4426-930E-FAC72C8FCFA6";function KalturaPlayReadyPlayEnablerType(){}
KalturaPlayReadyPlayEnablerType.HELIX="002F9772-38A0-43E5-9F79-0F6361DCC62A";KalturaPlayReadyPlayEnablerType.HDCP_WIVU="1B4542E3-B5CF-4C99-B3BA-829AF46C92F8";KalturaPlayReadyPlayEnablerType.AIRPLAY="5ABF0F0D-DC29-4B82-9982-FD8E57525BFC";KalturaPlayReadyPlayEnablerType.UNKNOWN="786627D8-C2A6-44BE-8F88-08AE255B01A";KalturaPlayReadyPlayEnablerType.HDCP_MIRACAST="A340C256-0941-4D4C-AD1D-0B6735C0CB24";KalturaPlayReadyPlayEnablerType.UNKNOWN_520="B621D91F-EDCC-4035-8D4B-DC71760D43E9";KalturaPlayReadyPlayEnablerType.DTCP="D685030B-0F4F-43A6-BBAD-356F1EA0049A";function KalturaPlayReadyPolicyOrderBy(){}
function KalturaPlayReadyProfileOrderBy(){}
KalturaPlayReadyProfileOrderBy.ID_ASC="+id";KalturaPlayReadyProfileOrderBy.NAME_ASC="+name";KalturaPlayReadyProfileOrderBy.ID_DESC="-id";KalturaPlayReadyProfileOrderBy.NAME_DESC="-name";function KalturaPlayableEntryOrderBy(){}
KalturaPlayableEntryOrderBy.CREATED_AT_ASC="+createdAt";KalturaPlayableEntryOrderBy.DURATION_ASC="+duration";KalturaPlayableEntryOrderBy.END_DATE_ASC="+endDate";KalturaPlayableEntryOrderBy.LAST_PLAYED_AT_ASC="+lastPlayedAt";KalturaPlayableEntryOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaPlayableEntryOrderBy.NAME_ASC="+name";KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaPlayableEntryOrderBy.PLAYS_ASC="+plays";KalturaPlayableEntryOrderBy.RANK_ASC="+rank";KalturaPlayableEntryOrderBy.RECENT_ASC="+recent";KalturaPlayableEntryOrderBy.START_DATE_ASC="+startDate";KalturaPlayableEntryOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaPlayableEntryOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaPlayableEntryOrderBy.VIEWS_ASC="+views";KalturaPlayableEntryOrderBy.WEIGHT_ASC="+weight";KalturaPlayableEntryOrderBy.CREATED_AT_DESC="-createdAt";KalturaPlayableEntryOrderBy.DURATION_DESC="-duration";KalturaPlayableEntryOrderBy.END_DATE_DESC="-endDate";KalturaPlayableEntryOrderBy.LAST_PLAYED_AT_DESC="-lastPlayedAt";KalturaPlayableEntryOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaPlayableEntryOrderBy.NAME_DESC="-name";KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaPlayableEntryOrderBy.PLAYS_DESC="-plays";KalturaPlayableEntryOrderBy.RANK_DESC="-rank";KalturaPlayableEntryOrderBy.RECENT_DESC="-recent";KalturaPlayableEntryOrderBy.START_DATE_DESC="-startDate";KalturaPlayableEntryOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaPlayableEntryOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaPlayableEntryOrderBy.VIEWS_DESC="-views";KalturaPlayableEntryOrderBy.WEIGHT_DESC="-weight";function KalturaPlaybackProtocol(){}
KalturaPlaybackProtocol.APPLE_HTTP="applehttp";KalturaPlaybackProtocol.AUTO="auto";KalturaPlaybackProtocol.AKAMAI_HD="hdnetwork";KalturaPlaybackProtocol.AKAMAI_HDS="hdnetworkmanifest";KalturaPlaybackProtocol.HDS="hds";KalturaPlaybackProtocol.HLS="hls";KalturaPlaybackProtocol.HTTP="http";KalturaPlaybackProtocol.MPEG_DASH="mpegdash";KalturaPlaybackProtocol.MULTICAST_SL="multicast_silverlight";KalturaPlaybackProtocol.RTMP="rtmp";KalturaPlaybackProtocol.RTSP="rtsp";KalturaPlaybackProtocol.SILVER_LIGHT="sl";function KalturaPlaylistOrderBy(){}
KalturaPlaylistOrderBy.CREATED_AT_ASC="+createdAt";KalturaPlaylistOrderBy.END_DATE_ASC="+endDate";KalturaPlaylistOrderBy.MODERATION_COUNT_ASC="+moderationCount";KalturaPlaylistOrderBy.NAME_ASC="+name";KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaPlaylistOrderBy.RANK_ASC="+rank";KalturaPlaylistOrderBy.RECENT_ASC="+recent";KalturaPlaylistOrderBy.START_DATE_ASC="+startDate";KalturaPlaylistOrderBy.TOTAL_RANK_ASC="+totalRank";KalturaPlaylistOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaPlaylistOrderBy.WEIGHT_ASC="+weight";KalturaPlaylistOrderBy.CREATED_AT_DESC="-createdAt";KalturaPlaylistOrderBy.END_DATE_DESC="-endDate";KalturaPlaylistOrderBy.MODERATION_COUNT_DESC="-moderationCount";KalturaPlaylistOrderBy.NAME_DESC="-name";KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaPlaylistOrderBy.RANK_DESC="-rank";KalturaPlaylistOrderBy.RECENT_DESC="-recent";KalturaPlaylistOrderBy.START_DATE_DESC="-startDate";KalturaPlaylistOrderBy.TOTAL_RANK_DESC="-totalRank";KalturaPlaylistOrderBy.UPDATED_AT_DESC="-updatedAt";KalturaPlaylistOrderBy.WEIGHT_DESC="-weight";function KalturaRemoteDropFolderOrderBy(){}
KalturaRemoteDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaRemoteDropFolderOrderBy.ID_ASC="+id";KalturaRemoteDropFolderOrderBy.NAME_ASC="+name";KalturaRemoteDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaRemoteDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaRemoteDropFolderOrderBy.ID_DESC="-id";KalturaRemoteDropFolderOrderBy.NAME_DESC="-name";KalturaRemoteDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaReportInterval(){}
KalturaReportInterval.DAYS="days";KalturaReportInterval.MONTHS="months";function KalturaReportOrderBy(){}
KalturaReportOrderBy.CREATED_AT_ASC="+createdAt";KalturaReportOrderBy.CREATED_AT_DESC="-createdAt";function KalturaRuleActionType(){}
KalturaRuleActionType.DRM_POLICY="playReady.DRM_POLICY";KalturaRuleActionType.BLOCK="1";KalturaRuleActionType.PREVIEW="2";KalturaRuleActionType.LIMIT_FLAVORS="3";KalturaRuleActionType.ADD_TO_STORAGE="4";function KalturaScheduledTaskProfileOrderBy(){}
KalturaScheduledTaskProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaScheduledTaskProfileOrderBy.ID_ASC="+id";KalturaScheduledTaskProfileOrderBy.LAST_EXECUTION_STARTED_AT_ASC="+lastExecutionStartedAt";KalturaScheduledTaskProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaScheduledTaskProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaScheduledTaskProfileOrderBy.ID_DESC="-id";KalturaScheduledTaskProfileOrderBy.LAST_EXECUTION_STARTED_AT_DESC="-lastExecutionStartedAt";KalturaScheduledTaskProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaSchemaType(){}
KalturaSchemaType.BULK_UPLOAD_RESULT_XML="bulkUploadXml.bulkUploadResultXML";KalturaSchemaType.BULK_UPLOAD_XML="bulkUploadXml.bulkUploadXML";KalturaSchemaType.INGEST_API="cuePoint.ingestAPI";KalturaSchemaType.SERVE_API="cuePoint.serveAPI";KalturaSchemaType.DROP_FOLDER_XML="dropFolderXmlBulkUpload.dropFolderXml";KalturaSchemaType.SYNDICATION="syndication";function KalturaScpDropFolderOrderBy(){}
KalturaScpDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaScpDropFolderOrderBy.ID_ASC="+id";KalturaScpDropFolderOrderBy.NAME_ASC="+name";KalturaScpDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaScpDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaScpDropFolderOrderBy.ID_DESC="-id";KalturaScpDropFolderOrderBy.NAME_DESC="-name";KalturaScpDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaSearchConditionComparison(){}
KalturaSearchConditionComparison.EQUAL="1";KalturaSearchConditionComparison.GREATER_THAN="2";KalturaSearchConditionComparison.GREATER_THAN_OR_EQUAL="3";KalturaSearchConditionComparison.LESS_THAN="4";KalturaSearchConditionComparison.LESS_THAN_OR_EQUAL="5";function KalturaSftpDropFolderOrderBy(){}
KalturaSftpDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaSftpDropFolderOrderBy.ID_ASC="+id";KalturaSftpDropFolderOrderBy.NAME_ASC="+name";KalturaSftpDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaSftpDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaSftpDropFolderOrderBy.ID_DESC="-id";KalturaSftpDropFolderOrderBy.NAME_DESC="-name";KalturaSftpDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaShortLinkOrderBy(){}
KalturaShortLinkOrderBy.CREATED_AT_ASC="+createdAt";KalturaShortLinkOrderBy.EXPIRES_AT_ASC="+expiresAt";KalturaShortLinkOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaShortLinkOrderBy.CREATED_AT_DESC="-createdAt";KalturaShortLinkOrderBy.EXPIRES_AT_DESC="-expiresAt";KalturaShortLinkOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaSourceType(){}
KalturaSourceType.LIMELIGHT_LIVE="limeLight.LIVE_STREAM";KalturaSourceType.VELOCIX_LIVE="velocix.VELOCIX_LIVE";KalturaSourceType.FILE="1";KalturaSourceType.WEBCAM="2";KalturaSourceType.URL="5";KalturaSourceType.SEARCH_PROVIDER="6";KalturaSourceType.AKAMAI_LIVE="29";KalturaSourceType.MANUAL_LIVE_STREAM="30";KalturaSourceType.AKAMAI_UNIVERSAL_LIVE="31";KalturaSourceType.LIVE_STREAM="32";KalturaSourceType.LIVE_CHANNEL="33";KalturaSourceType.RECORDED_LIVE="34";KalturaSourceType.CLIP="35";KalturaSourceType.LIVE_STREAM_ONTEXTDATA_CAPTIONS="42";function KalturaSshDropFolderOrderBy(){}
KalturaSshDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaSshDropFolderOrderBy.ID_ASC="+id";KalturaSshDropFolderOrderBy.NAME_ASC="+name";KalturaSshDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaSshDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaSshDropFolderOrderBy.ID_DESC="-id";KalturaSshDropFolderOrderBy.NAME_DESC="-name";KalturaSshDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaStorageProfileOrderBy(){}
KalturaStorageProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaStorageProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaStorageProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaStorageProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaStorageProfileProtocol(){}
KalturaStorageProfileProtocol.KONTIKI="kontiki.KONTIKI";KalturaStorageProfileProtocol.KALTURA_DC="0";KalturaStorageProfileProtocol.FTP="1";KalturaStorageProfileProtocol.SCP="2";KalturaStorageProfileProtocol.SFTP="3";KalturaStorageProfileProtocol.S3="6";KalturaStorageProfileProtocol.LOCAL="7";function KalturaSwfFlavorParamsOrderBy(){}
function KalturaSwfFlavorParamsOutputOrderBy(){}
function KalturaSyndicationDistributionProfileOrderBy(){}
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaSyndicationDistributionProviderOrderBy(){}
function KalturaSyndicationFeedEntriesOrderBy(){}
KalturaSyndicationFeedEntriesOrderBy.CREATED_AT_DESC="-createdAt";KalturaSyndicationFeedEntriesOrderBy.RECENT="recent";function KalturaTaggedObjectType(){}
KalturaTaggedObjectType.ENTRY="1";KalturaTaggedObjectType.CATEGORY="2";function KalturaThumbAssetOrderBy(){}
KalturaThumbAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaThumbAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaThumbAssetOrderBy.SIZE_ASC="+size";KalturaThumbAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaThumbAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaThumbAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaThumbAssetOrderBy.SIZE_DESC="-size";KalturaThumbAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaThumbCuePointOrderBy(){}
KalturaThumbCuePointOrderBy.CREATED_AT_ASC="+createdAt";KalturaThumbCuePointOrderBy.PARTNER_SORT_VALUE_ASC="+partnerSortValue";KalturaThumbCuePointOrderBy.START_TIME_ASC="+startTime";KalturaThumbCuePointOrderBy.TRIGGERED_AT_ASC="+triggeredAt";KalturaThumbCuePointOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaThumbCuePointOrderBy.CREATED_AT_DESC="-createdAt";KalturaThumbCuePointOrderBy.PARTNER_SORT_VALUE_DESC="-partnerSortValue";KalturaThumbCuePointOrderBy.START_TIME_DESC="-startTime";KalturaThumbCuePointOrderBy.TRIGGERED_AT_DESC="-triggeredAt";KalturaThumbCuePointOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaThumbParamsOrderBy(){}
function KalturaThumbParamsOutputOrderBy(){}
function KalturaTimedThumbAssetOrderBy(){}
KalturaTimedThumbAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaTimedThumbAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaTimedThumbAssetOrderBy.SIZE_ASC="+size";KalturaTimedThumbAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaTimedThumbAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaTimedThumbAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaTimedThumbAssetOrderBy.SIZE_DESC="-size";KalturaTimedThumbAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaTubeMogulSyndicationFeedCategories(){}
KalturaTubeMogulSyndicationFeedCategories.ANIMALS_AND_PETS="Animals &amp; Pets";KalturaTubeMogulSyndicationFeedCategories.ARTS_AND_ANIMATION="Arts &amp; Animation";KalturaTubeMogulSyndicationFeedCategories.AUTOS="Autos";KalturaTubeMogulSyndicationFeedCategories.COMEDY="Comedy";KalturaTubeMogulSyndicationFeedCategories.COMMERCIALS_PROMOTIONAL="Commercials/Promotional";KalturaTubeMogulSyndicationFeedCategories.ENTERTAINMENT="Entertainment";KalturaTubeMogulSyndicationFeedCategories.FAMILY_AND_KIDS="Family &amp; Kids";KalturaTubeMogulSyndicationFeedCategories.HOW_TO_INSTRUCTIONAL_DIY="How To/Instructional/DIY";KalturaTubeMogulSyndicationFeedCategories.MUSIC="Music";KalturaTubeMogulSyndicationFeedCategories.NEWS_AND_BLOGS="News &amp; Blogs";KalturaTubeMogulSyndicationFeedCategories.SCIENCE_AND_TECHNOLOGY="Science &amp; Technology";KalturaTubeMogulSyndicationFeedCategories.SPORTS="Sports";KalturaTubeMogulSyndicationFeedCategories.TRAVEL_AND_PLACES="Travel &amp; Places";KalturaTubeMogulSyndicationFeedCategories.VIDEO_GAMES="Video Games";KalturaTubeMogulSyndicationFeedCategories.VLOGS_PEOPLE="Vlogs &amp; People";function KalturaTubeMogulSyndicationFeedOrderBy(){}
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaTubeMogulSyndicationFeedOrderBy.NAME_ASC="+name";KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaTubeMogulSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaTubeMogulSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaTubeMogulSyndicationFeedOrderBy.NAME_DESC="-name";KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaTubeMogulSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaTubeMogulSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaUiConfOrderBy(){}
KalturaUiConfOrderBy.CREATED_AT_ASC="+createdAt";KalturaUiConfOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaUiConfOrderBy.CREATED_AT_DESC="-createdAt";KalturaUiConfOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaUploadTokenOrderBy(){}
KalturaUploadTokenOrderBy.CREATED_AT_ASC="+createdAt";KalturaUploadTokenOrderBy.CREATED_AT_DESC="-createdAt";function KalturaUserLoginDataOrderBy(){}
function KalturaUserOrderBy(){}
KalturaUserOrderBy.CREATED_AT_ASC="+createdAt";KalturaUserOrderBy.ID_ASC="+id";KalturaUserOrderBy.CREATED_AT_DESC="-createdAt";KalturaUserOrderBy.ID_DESC="-id";function KalturaUserRoleOrderBy(){}
KalturaUserRoleOrderBy.CREATED_AT_ASC="+createdAt";KalturaUserRoleOrderBy.ID_ASC="+id";KalturaUserRoleOrderBy.NAME_ASC="+name";KalturaUserRoleOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaUserRoleOrderBy.CREATED_AT_DESC="-createdAt";KalturaUserRoleOrderBy.ID_DESC="-id";KalturaUserRoleOrderBy.NAME_DESC="-name";KalturaUserRoleOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaVideoCodec(){}
KalturaVideoCodec.NONE="";KalturaVideoCodec.APCH="apch";KalturaVideoCodec.APCN="apcn";KalturaVideoCodec.APCO="apco";KalturaVideoCodec.APCS="apcs";KalturaVideoCodec.COPY="copy";KalturaVideoCodec.DNXHD="dnxhd";KalturaVideoCodec.DV="dv";KalturaVideoCodec.FLV="flv";KalturaVideoCodec.H263="h263";KalturaVideoCodec.H264="h264";KalturaVideoCodec.H264B="h264b";KalturaVideoCodec.H264H="h264h";KalturaVideoCodec.H264M="h264m";KalturaVideoCodec.H265="h265";KalturaVideoCodec.MPEG2="mpeg2";KalturaVideoCodec.MPEG4="mpeg4";KalturaVideoCodec.THEORA="theora";KalturaVideoCodec.VP6="vp6";KalturaVideoCodec.VP8="vp8";KalturaVideoCodec.VP9="vp9";KalturaVideoCodec.WMV2="wmv2";KalturaVideoCodec.WMV3="wmv3";KalturaVideoCodec.WVC1A="wvc1a";function KalturaVirusScanEngineType(){}
KalturaVirusScanEngineType.CLAMAV_SCAN_ENGINE="clamAVScanEngine.ClamAV";KalturaVirusScanEngineType.SYMANTEC_SCAN_DIRECT_ENGINE="symantecScanEngine.SymantecScanDirectEngine";KalturaVirusScanEngineType.SYMANTEC_SCAN_ENGINE="symantecScanEngine.SymantecScanEngine";KalturaVirusScanEngineType.SYMANTEC_SCAN_JAVA_ENGINE="symantecScanEngine.SymantecScanJavaEngine";function KalturaVirusScanProfileOrderBy(){}
KalturaVirusScanProfileOrderBy.CREATED_AT_ASC="+createdAt";KalturaVirusScanProfileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaVirusScanProfileOrderBy.CREATED_AT_DESC="-createdAt";KalturaVirusScanProfileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaWebexDropFolderFileOrderBy(){}
KalturaWebexDropFolderFileOrderBy.CREATED_AT_ASC="+createdAt";KalturaWebexDropFolderFileOrderBy.FILE_NAME_ASC="+fileName";KalturaWebexDropFolderFileOrderBy.FILE_SIZE_ASC="+fileSize";KalturaWebexDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_ASC="+fileSizeLastSetAt";KalturaWebexDropFolderFileOrderBy.ID_ASC="+id";KalturaWebexDropFolderFileOrderBy.PARSED_FLAVOR_ASC="+parsedFlavor";KalturaWebexDropFolderFileOrderBy.PARSED_SLUG_ASC="+parsedSlug";KalturaWebexDropFolderFileOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaWebexDropFolderFileOrderBy.CREATED_AT_DESC="-createdAt";KalturaWebexDropFolderFileOrderBy.FILE_NAME_DESC="-fileName";KalturaWebexDropFolderFileOrderBy.FILE_SIZE_DESC="-fileSize";KalturaWebexDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_DESC="-fileSizeLastSetAt";KalturaWebexDropFolderFileOrderBy.ID_DESC="-id";KalturaWebexDropFolderFileOrderBy.PARSED_FLAVOR_DESC="-parsedFlavor";KalturaWebexDropFolderFileOrderBy.PARSED_SLUG_DESC="-parsedSlug";KalturaWebexDropFolderFileOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaWebexDropFolderOrderBy(){}
KalturaWebexDropFolderOrderBy.CREATED_AT_ASC="+createdAt";KalturaWebexDropFolderOrderBy.ID_ASC="+id";KalturaWebexDropFolderOrderBy.NAME_ASC="+name";KalturaWebexDropFolderOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaWebexDropFolderOrderBy.CREATED_AT_DESC="-createdAt";KalturaWebexDropFolderOrderBy.ID_DESC="-id";KalturaWebexDropFolderOrderBy.NAME_DESC="-name";KalturaWebexDropFolderOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaWidevineFlavorAssetOrderBy(){}
KalturaWidevineFlavorAssetOrderBy.CREATED_AT_ASC="+createdAt";KalturaWidevineFlavorAssetOrderBy.DELETED_AT_ASC="+deletedAt";KalturaWidevineFlavorAssetOrderBy.SIZE_ASC="+size";KalturaWidevineFlavorAssetOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaWidevineFlavorAssetOrderBy.CREATED_AT_DESC="-createdAt";KalturaWidevineFlavorAssetOrderBy.DELETED_AT_DESC="-deletedAt";KalturaWidevineFlavorAssetOrderBy.SIZE_DESC="-size";KalturaWidevineFlavorAssetOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaWidevineFlavorParamsOrderBy(){}
function KalturaWidevineFlavorParamsOutputOrderBy(){}
function KalturaWidevineProfileOrderBy(){}
KalturaWidevineProfileOrderBy.ID_ASC="+id";KalturaWidevineProfileOrderBy.NAME_ASC="+name";KalturaWidevineProfileOrderBy.ID_DESC="-id";KalturaWidevineProfileOrderBy.NAME_DESC="-name";function KalturaWidgetOrderBy(){}
KalturaWidgetOrderBy.CREATED_AT_ASC="+createdAt";KalturaWidgetOrderBy.CREATED_AT_DESC="-createdAt";function KalturaYahooSyndicationFeedAdultValues(){}
KalturaYahooSyndicationFeedAdultValues.ADULT="adult";KalturaYahooSyndicationFeedAdultValues.NON_ADULT="nonadult";function KalturaYahooSyndicationFeedCategories(){}
KalturaYahooSyndicationFeedCategories.ACTION="Action";KalturaYahooSyndicationFeedCategories.ANIMALS="Animals";KalturaYahooSyndicationFeedCategories.ART_AND_ANIMATION="Art &amp; Animation";KalturaYahooSyndicationFeedCategories.COMMERCIALS="Commercials";KalturaYahooSyndicationFeedCategories.ENTERTAINMENT_AND_TV="Entertainment &amp; TV";KalturaYahooSyndicationFeedCategories.FAMILY="Family";KalturaYahooSyndicationFeedCategories.FOOD="Food";KalturaYahooSyndicationFeedCategories.FUNNY_VIDEOS="Funny Videos";KalturaYahooSyndicationFeedCategories.GAMES="Games";KalturaYahooSyndicationFeedCategories.HEALTH_AND_BEAUTY="Health &amp; Beauty";KalturaYahooSyndicationFeedCategories.HOW_TO="How-To";KalturaYahooSyndicationFeedCategories.MOVIES_AND_SHORTS="Movies &amp; Shorts";KalturaYahooSyndicationFeedCategories.MUSIC="Music";KalturaYahooSyndicationFeedCategories.NEWS_AND_POLITICS="News &amp; Politics";KalturaYahooSyndicationFeedCategories.PEOPLE_AND_VLOGS="People &amp; Vlogs";KalturaYahooSyndicationFeedCategories.PRODUCTS_AND_TECH="Products &amp; Tech.";KalturaYahooSyndicationFeedCategories.SCIENCE_AND_ENVIRONMENT="Science &amp; Environment";KalturaYahooSyndicationFeedCategories.SPORTS="Sports";KalturaYahooSyndicationFeedCategories.TRANSPORTATION="Transportation";KalturaYahooSyndicationFeedCategories.TRAVEL="Travel";function KalturaYahooSyndicationFeedOrderBy(){}
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_ASC="+createdAt";KalturaYahooSyndicationFeedOrderBy.NAME_ASC="+name";KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_ASC="+playlistId";KalturaYahooSyndicationFeedOrderBy.TYPE_ASC="+type";KalturaYahooSyndicationFeedOrderBy.UPDATED_AT_ASC="+updatedAt";KalturaYahooSyndicationFeedOrderBy.CREATED_AT_DESC="-createdAt";KalturaYahooSyndicationFeedOrderBy.NAME_DESC="-name";KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_DESC="-playlistId";KalturaYahooSyndicationFeedOrderBy.TYPE_DESC="-type";KalturaYahooSyndicationFeedOrderBy.UPDATED_AT_DESC="-updatedAt";function KalturaBaseRestriction(){}
KalturaBaseRestriction.inheritsFrom(KalturaObjectBase);function KalturaAccessControl(){this.id=null;this.partnerId=null;this.name=null;this.systemName=null;this.description=null;this.createdAt=null;this.isDefault=null;this.restrictions=null;this.containsUnsuportedRestrictions=null;}
KalturaAccessControl.inheritsFrom(KalturaObjectBase);function KalturaContextTypeHolder(){this.type=null;}
KalturaContextTypeHolder.inheritsFrom(KalturaObjectBase);function KalturaAccessControlContextTypeHolder(){}
KalturaAccessControlContextTypeHolder.inheritsFrom(KalturaContextTypeHolder);function KalturaAccessControlListResponse(){this.objects=null;this.totalCount=null;}
KalturaAccessControlListResponse.inheritsFrom(KalturaObjectBase);function KalturaRuleAction(){this.type=null;}
KalturaRuleAction.inheritsFrom(KalturaObjectBase);function KalturaCondition(){this.type=null;this.description=null;this.not=null;}
KalturaCondition.inheritsFrom(KalturaObjectBase);function KalturaRule(){this.message=null;this.actions=null;this.conditions=null;this.contexts=null;this.stopProcessing=null;}
KalturaRule.inheritsFrom(KalturaObjectBase);function KalturaAccessControlProfile(){this.id=null;this.partnerId=null;this.name=null;this.systemName=null;this.description=null;this.createdAt=null;this.updatedAt=null;this.isDefault=null;this.rules=null;}
KalturaAccessControlProfile.inheritsFrom(KalturaObjectBase);function KalturaAccessControlProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaAccessControlProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaKeyValue(){this.key=null;this.value=null;}
KalturaKeyValue.inheritsFrom(KalturaObjectBase);function KalturaAccessControlScope(){this.referrer=null;this.ip=null;this.ks=null;this.userAgent=null;this.time=null;this.contexts=null;this.hashes=null;}
KalturaAccessControlScope.inheritsFrom(KalturaObjectBase);function KalturaCuePoint(){this.id=null;this.cuePointType=null;this.status=null;this.entryId=null;this.partnerId=null;this.createdAt=null;this.updatedAt=null;this.triggeredAt=null;this.tags=null;this.startTime=null;this.userId=null;this.partnerData=null;this.partnerSortValue=null;this.forceStop=null;this.thumbOffset=null;this.systemName=null;}
KalturaCuePoint.inheritsFrom(KalturaObjectBase);function KalturaAnnotation(){this.parentId=null;this.text=null;this.endTime=null;this.duration=null;this.depth=null;this.childrenCount=null;this.directChildrenCount=null;}
KalturaAnnotation.inheritsFrom(KalturaCuePoint);function KalturaAnnotationListResponse(){this.objects=null;this.totalCount=null;}
KalturaAnnotationListResponse.inheritsFrom(KalturaObjectBase);function KalturaAsset(){this.id=null;this.entryId=null;this.partnerId=null;this.version=null;this.size=null;this.tags=null;this.fileExt=null;this.createdAt=null;this.updatedAt=null;this.deletedAt=null;this.description=null;this.partnerData=null;this.partnerDescription=null;this.actualSourceAssetParamsIds=null;}
KalturaAsset.inheritsFrom(KalturaObjectBase);function KalturaAssetDistributionCondition(){}
KalturaAssetDistributionCondition.inheritsFrom(KalturaObjectBase);function KalturaAssetDistributionRule(){this.validationError=null;this.assetDistributionConditions=null;}
KalturaAssetDistributionRule.inheritsFrom(KalturaObjectBase);function KalturaString(){this.value=null;}
KalturaString.inheritsFrom(KalturaObjectBase);function KalturaAssetParams(){this.id=null;this.partnerId=null;this.name=null;this.systemName=null;this.description=null;this.createdAt=null;this.isSystemDefault=null;this.tags=null;this.requiredPermissions=null;this.sourceRemoteStorageProfileId=null;this.remoteStorageProfileIds=null;this.mediaParserType=null;this.sourceAssetParamsIds=null;}
KalturaAssetParams.inheritsFrom(KalturaObjectBase);function KalturaResource(){}
KalturaResource.inheritsFrom(KalturaObjectBase);function KalturaContentResource(){}
KalturaContentResource.inheritsFrom(KalturaResource);function KalturaAssetParamsResourceContainer(){this.resource=null;this.assetParamsId=null;}
KalturaAssetParamsResourceContainer.inheritsFrom(KalturaResource);function KalturaAttachmentAsset(){this.filename=null;this.title=null;this.format=null;this.status=null;}
KalturaAttachmentAsset.inheritsFrom(KalturaAsset);function KalturaAttachmentAssetListResponse(){this.objects=null;this.totalCount=null;}
KalturaAttachmentAssetListResponse.inheritsFrom(KalturaObjectBase);function KalturaAuditTrailInfo(){}
KalturaAuditTrailInfo.inheritsFrom(KalturaObjectBase);function KalturaAuditTrail(){this.id=null;this.createdAt=null;this.parsedAt=null;this.status=null;this.auditObjectType=null;this.objectId=null;this.relatedObjectId=null;this.relatedObjectType=null;this.entryId=null;this.masterPartnerId=null;this.partnerId=null;this.requestId=null;this.userId=null;this.action=null;this.data=null;this.ks=null;this.context=null;this.entryPoint=null;this.serverName=null;this.ipAddress=null;this.userAgent=null;this.clientTag=null;this.description=null;this.errorDescription=null;}
KalturaAuditTrail.inheritsFrom(KalturaObjectBase);function KalturaAuditTrailChangeItem(){this.descriptor=null;this.oldValue=null;this.newValue=null;}
KalturaAuditTrailChangeItem.inheritsFrom(KalturaObjectBase);function KalturaAuditTrailListResponse(){this.objects=null;this.totalCount=null;}
KalturaAuditTrailListResponse.inheritsFrom(KalturaObjectBase);function KalturaOperationAttributes(){}
KalturaOperationAttributes.inheritsFrom(KalturaObjectBase);function KalturaBaseEntry(){this.id=null;this.name=null;this.description=null;this.partnerId=null;this.userId=null;this.creatorId=null;this.tags=null;this.adminTags=null;this.categories=null;this.categoriesIds=null;this.status=null;this.moderationStatus=null;this.moderationCount=null;this.type=null;this.createdAt=null;this.updatedAt=null;this.rank=null;this.totalRank=null;this.votes=null;this.groupId=null;this.partnerData=null;this.downloadUrl=null;this.searchText=null;this.licenseType=null;this.version=null;this.thumbnailUrl=null;this.accessControlId=null;this.startDate=null;this.endDate=null;this.referenceId=null;this.replacingEntryId=null;this.replacedEntryId=null;this.replacementStatus=null;this.partnerSortValue=null;this.conversionProfileId=null;this.redirectEntryId=null;this.rootEntryId=null;this.parentEntryId=null;this.operationAttributes=null;this.entitledUsersEdit=null;this.entitledUsersPublish=null;}
KalturaBaseEntry.inheritsFrom(KalturaObjectBase);function KalturaBaseEntryListResponse(){this.objects=null;this.totalCount=null;}
KalturaBaseEntryListResponse.inheritsFrom(KalturaObjectBase);function KalturaBaseSyndicationFeed(){this.id=null;this.feedUrl=null;this.partnerId=null;this.playlistId=null;this.name=null;this.status=null;this.type=null;this.landingPage=null;this.createdAt=null;this.allowEmbed=null;this.playerUiconfId=null;this.flavorParamId=null;this.transcodeExistingContent=null;this.addToDefaultConversionProfile=null;this.categories=null;this.storageId=null;this.entriesOrderBy=null;this.enforceEntitlement=null;this.privacyContext=null;this.updatedAt=null;}
KalturaBaseSyndicationFeed.inheritsFrom(KalturaObjectBase);function KalturaBaseSyndicationFeedListResponse(){this.objects=null;this.totalCount=null;}
KalturaBaseSyndicationFeedListResponse.inheritsFrom(KalturaObjectBase);function KalturaBulkServiceData(){}
KalturaBulkServiceData.inheritsFrom(KalturaObjectBase);function KalturaBulkUploadPluginData(){this.field=null;this.value=null;}
KalturaBulkUploadPluginData.inheritsFrom(KalturaObjectBase);function KalturaBulkUploadResult(){this.id=null;this.bulkUploadJobId=null;this.lineIndex=null;this.partnerId=null;this.status=null;this.action=null;this.objectId=null;this.objectStatus=null;this.bulkUploadResultObjectType=null;this.rowData=null;this.partnerData=null;this.objectErrorDescription=null;this.pluginsData=null;this.errorDescription=null;this.errorCode=null;this.errorType=null;}
KalturaBulkUploadResult.inheritsFrom(KalturaObjectBase);function KalturaBulkUpload(){this.id=null;this.uploadedBy=null;this.uploadedByUserId=null;this.uploadedOn=null;this.numOfEntries=null;this.status=null;this.logFileUrl=null;this.csvFileUrl=null;this.bulkFileUrl=null;this.bulkUploadType=null;this.results=null;this.error=null;this.errorType=null;this.errorNumber=null;this.fileName=null;this.description=null;this.numOfObjects=null;this.bulkUploadObjectType=null;}
KalturaBulkUpload.inheritsFrom(KalturaObjectBase);function KalturaBulkUploadListResponse(){this.objects=null;this.totalCount=null;}
KalturaBulkUploadListResponse.inheritsFrom(KalturaObjectBase);function KalturaBulkUploadObjectData(){}
KalturaBulkUploadObjectData.inheritsFrom(KalturaObjectBase);function KalturaCEError(){this.id=null;this.partnerId=null;this.browser=null;this.serverIp=null;this.serverOs=null;this.phpVersion=null;this.ceAdminEmail=null;this.type=null;this.description=null;this.data=null;}
KalturaCEError.inheritsFrom(KalturaObjectBase);function KalturaCaptionAsset(){this.captionParamsId=null;this.language=null;this.languageCode=null;this.isDefault=null;this.label=null;this.format=null;this.status=null;}
KalturaCaptionAsset.inheritsFrom(KalturaAsset);function KalturaCaptionAssetItem(){this.asset=null;this.entry=null;this.startTime=null;this.endTime=null;this.content=null;}
KalturaCaptionAssetItem.inheritsFrom(KalturaObjectBase);function KalturaCaptionAssetItemListResponse(){this.objects=null;this.totalCount=null;}
KalturaCaptionAssetItemListResponse.inheritsFrom(KalturaObjectBase);function KalturaCaptionAssetListResponse(){this.objects=null;this.totalCount=null;}
KalturaCaptionAssetListResponse.inheritsFrom(KalturaObjectBase);function KalturaCaptionParams(){this.language=null;this.isDefault=null;this.label=null;this.format=null;this.sourceParamsId=null;}
KalturaCaptionParams.inheritsFrom(KalturaAssetParams);function KalturaCaptionParamsListResponse(){this.objects=null;this.totalCount=null;}
KalturaCaptionParamsListResponse.inheritsFrom(KalturaObjectBase);function KalturaCategory(){this.id=null;this.parentId=null;this.depth=null;this.partnerId=null;this.name=null;this.fullName=null;this.fullIds=null;this.entriesCount=null;this.createdAt=null;this.updatedAt=null;this.description=null;this.tags=null;this.appearInList=null;this.privacy=null;this.inheritanceType=null;this.userJoinPolicy=null;this.defaultPermissionLevel=null;this.owner=null;this.directEntriesCount=null;this.referenceId=null;this.contributionPolicy=null;this.membersCount=null;this.pendingMembersCount=null;this.privacyContext=null;this.privacyContexts=null;this.status=null;this.inheritedParentId=null;this.partnerSortValue=null;this.partnerData=null;this.defaultOrderBy=null;this.directSubCategoriesCount=null;this.moderation=null;this.pendingEntriesCount=null;}
KalturaCategory.inheritsFrom(KalturaObjectBase);function KalturaCategoryEntry(){this.categoryId=null;this.entryId=null;this.createdAt=null;this.categoryFullIds=null;this.status=null;}
KalturaCategoryEntry.inheritsFrom(KalturaObjectBase);function KalturaCategoryEntryListResponse(){this.objects=null;this.totalCount=null;}
KalturaCategoryEntryListResponse.inheritsFrom(KalturaObjectBase);function KalturaCategoryListResponse(){this.objects=null;this.totalCount=null;}
KalturaCategoryListResponse.inheritsFrom(KalturaObjectBase);function KalturaCategoryUser(){this.categoryId=null;this.userId=null;this.partnerId=null;this.permissionLevel=null;this.status=null;this.createdAt=null;this.updatedAt=null;this.updateMethod=null;this.categoryFullIds=null;this.permissionNames=null;}
KalturaCategoryUser.inheritsFrom(KalturaObjectBase);function KalturaCategoryUserListResponse(){this.objects=null;this.totalCount=null;}
KalturaCategoryUserListResponse.inheritsFrom(KalturaObjectBase);function KalturaClientNotification(){this.url=null;this.data=null;}
KalturaClientNotification.inheritsFrom(KalturaObjectBase);function KalturaContext(){}
KalturaContext.inheritsFrom(KalturaObjectBase);function KalturaContextDataResult(){this.messages=null;this.actions=null;}
KalturaContextDataResult.inheritsFrom(KalturaObjectBase);function KalturaConversionAttribute(){this.flavorParamsId=null;this.name=null;this.value=null;}
KalturaConversionAttribute.inheritsFrom(KalturaObjectBase);function KalturaCropDimensions(){this.left=null;this.top=null;this.width=null;this.height=null;}
KalturaCropDimensions.inheritsFrom(KalturaObjectBase);function KalturaConversionProfile(){this.id=null;this.partnerId=null;this.status=null;this.type=null;this.name=null;this.systemName=null;this.tags=null;this.description=null;this.defaultEntryId=null;this.createdAt=null;this.flavorParamsIds=null;this.isDefault=null;this.isPartnerDefault=null;this.cropDimensions=null;this.clipStart=null;this.clipDuration=null;this.xslTransformation=null;this.storageProfileId=null;this.mediaParserType=null;}
KalturaConversionProfile.inheritsFrom(KalturaObjectBase);function KalturaConversionProfileAssetParams(){this.conversionProfileId=null;this.assetParamsId=null;this.readyBehavior=null;this.origin=null;this.systemName=null;this.forceNoneComplied=null;this.deletePolicy=null;}
KalturaConversionProfileAssetParams.inheritsFrom(KalturaObjectBase);function KalturaConversionProfileAssetParamsListResponse(){this.objects=null;this.totalCount=null;}
KalturaConversionProfileAssetParamsListResponse.inheritsFrom(KalturaObjectBase);function KalturaConversionProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaConversionProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaConvertCollectionFlavorData(){this.flavorAssetId=null;this.flavorParamsOutputId=null;this.readyBehavior=null;this.videoBitrate=null;this.audioBitrate=null;this.destFileSyncLocalPath=null;this.destFileSyncRemoteUrl=null;}
KalturaConvertCollectionFlavorData.inheritsFrom(KalturaObjectBase);function KalturaCoordinate(){this.latitude=null;this.longitude=null;this.name=null;}
KalturaCoordinate.inheritsFrom(KalturaObjectBase);function KalturaCuePointListResponse(){this.objects=null;this.totalCount=null;}
KalturaCuePointListResponse.inheritsFrom(KalturaObjectBase);function KalturaDataEntry(){this.dataContent=null;this.retrieveDataContentByGet=null;}
KalturaDataEntry.inheritsFrom(KalturaBaseEntry);function KalturaDataListResponse(){this.objects=null;this.totalCount=null;}
KalturaDataListResponse.inheritsFrom(KalturaObjectBase);function KalturaUrlRecognizer(){this.hosts=null;this.uriPrefix=null;}
KalturaUrlRecognizer.inheritsFrom(KalturaObjectBase);function KalturaUrlTokenizer(){this.window=null;this.key=null;}
KalturaUrlTokenizer.inheritsFrom(KalturaObjectBase);function KalturaDeliveryProfile(){this.id=null;this.partnerId=null;this.name=null;this.type=null;this.systemName=null;this.description=null;this.createdAt=null;this.updatedAt=null;this.streamerType=null;this.url=null;this.hostName=null;this.status=null;this.recognizer=null;this.tokenizer=null;this.isDefault=null;this.parentId=null;this.mediaProtocols=null;}
KalturaDeliveryProfile.inheritsFrom(KalturaObjectBase);function KalturaDeliveryProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaDeliveryProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaFileSyncDescriptor(){this.fileSyncLocalPath=null;this.fileSyncRemoteUrl=null;this.fileSyncObjectSubType=null;}
KalturaFileSyncDescriptor.inheritsFrom(KalturaObjectBase);function KalturaDestFileSyncDescriptor(){}
KalturaDestFileSyncDescriptor.inheritsFrom(KalturaFileSyncDescriptor);function KalturaDistributionFieldConfig(){this.fieldName=null;this.userFriendlyFieldName=null;this.entryMrssXslt=null;this.isRequired=null;this.updateOnChange=null;this.updateParams=null;this.isDefault=null;}
KalturaDistributionFieldConfig.inheritsFrom(KalturaObjectBase);function KalturaDistributionJobProviderData(){}
KalturaDistributionJobProviderData.inheritsFrom(KalturaObjectBase);function KalturaDistributionThumbDimensions(){this.width=null;this.height=null;}
KalturaDistributionThumbDimensions.inheritsFrom(KalturaObjectBase);function KalturaDistributionProfile(){this.id=null;this.createdAt=null;this.updatedAt=null;this.partnerId=null;this.providerType=null;this.name=null;this.status=null;this.submitEnabled=null;this.updateEnabled=null;this.deleteEnabled=null;this.reportEnabled=null;this.autoCreateFlavors=null;this.autoCreateThumb=null;this.optionalFlavorParamsIds=null;this.requiredFlavorParamsIds=null;this.optionalThumbDimensions=null;this.requiredThumbDimensions=null;this.optionalAssetDistributionRules=null;this.requiredAssetDistributionRules=null;this.sunriseDefaultOffset=null;this.sunsetDefaultOffset=null;this.recommendedStorageProfileForDownload=null;this.recommendedDcForDownload=null;this.recommendedDcForExecute=null;}
KalturaDistributionProfile.inheritsFrom(KalturaObjectBase);function KalturaDistributionProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaDistributionProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaDistributionProvider(){this.type=null;this.name=null;this.scheduleUpdateEnabled=null;this.availabilityUpdateEnabled=null;this.deleteInsteadUpdate=null;this.intervalBeforeSunrise=null;this.intervalBeforeSunset=null;this.updateRequiredEntryFields=null;this.updateRequiredMetadataXPaths=null;}
KalturaDistributionProvider.inheritsFrom(KalturaObjectBase);function KalturaDistributionProviderListResponse(){this.objects=null;this.totalCount=null;}
KalturaDistributionProviderListResponse.inheritsFrom(KalturaObjectBase);function KalturaDistributionRemoteMediaFile(){this.version=null;this.assetId=null;this.remoteId=null;}
KalturaDistributionRemoteMediaFile.inheritsFrom(KalturaObjectBase);function KalturaDistributionValidationError(){this.action=null;this.errorType=null;this.description=null;}
KalturaDistributionValidationError.inheritsFrom(KalturaObjectBase);function KalturaDocumentEntry(){this.documentType=null;this.assetParamsIds=null;}
KalturaDocumentEntry.inheritsFrom(KalturaBaseEntry);function KalturaDocumentListResponse(){this.objects=null;this.totalCount=null;}
KalturaDocumentListResponse.inheritsFrom(KalturaObjectBase);function KalturaDrmPolicy(){this.id=null;this.partnerId=null;this.name=null;this.systemName=null;this.description=null;this.provider=null;this.status=null;this.scenario=null;this.licenseType=null;this.licenseExpirationPolicy=null;this.duration=null;this.createdAt=null;this.updatedAt=null;}
KalturaDrmPolicy.inheritsFrom(KalturaObjectBase);function KalturaDrmPolicyListResponse(){this.objects=null;this.totalCount=null;}
KalturaDrmPolicyListResponse.inheritsFrom(KalturaObjectBase);function KalturaDrmProfile(){this.id=null;this.partnerId=null;this.name=null;this.description=null;this.provider=null;this.status=null;this.licenseServerUrl=null;this.defaultPolicy=null;this.createdAt=null;this.updatedAt=null;}
KalturaDrmProfile.inheritsFrom(KalturaObjectBase);function KalturaDrmProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaDrmProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaDropFolderFileHandlerConfig(){this.handlerType=null;}
KalturaDropFolderFileHandlerConfig.inheritsFrom(KalturaObjectBase);function KalturaDropFolder(){this.id=null;this.partnerId=null;this.name=null;this.description=null;this.type=null;this.status=null;this.conversionProfileId=null;this.dc=null;this.path=null;this.fileSizeCheckInterval=null;this.fileDeletePolicy=null;this.autoFileDeleteDays=null;this.fileHandlerType=null;this.fileNamePatterns=null;this.fileHandlerConfig=null;this.tags=null;this.errorCode=null;this.errorDescription=null;this.ignoreFileNamePatterns=null;this.createdAt=null;this.updatedAt=null;this.lastAccessedAt=null;this.incremental=null;this.lastFileTimestamp=null;this.metadataProfileId=null;this.categoriesMetadataFieldName=null;this.enforceEntitlement=null;this.shouldValidateKS=null;}
KalturaDropFolder.inheritsFrom(KalturaObjectBase);function KalturaDropFolderFile(){this.id=null;this.partnerId=null;this.dropFolderId=null;this.fileName=null;this.fileSize=null;this.fileSizeLastSetAt=null;this.status=null;this.type=null;this.parsedSlug=null;this.parsedFlavor=null;this.parsedUserId=null;this.leadDropFolderFileId=null;this.deletedDropFolderFileId=null;this.entryId=null;this.errorCode=null;this.errorDescription=null;this.lastModificationTime=null;this.createdAt=null;this.updatedAt=null;this.uploadStartDetectedAt=null;this.uploadEndDetectedAt=null;this.importStartedAt=null;this.importEndedAt=null;this.batchJobId=null;}
KalturaDropFolderFile.inheritsFrom(KalturaObjectBase);function KalturaDropFolderFileListResponse(){this.objects=null;this.totalCount=null;}
KalturaDropFolderFileListResponse.inheritsFrom(KalturaObjectBase);function KalturaDropFolderListResponse(){this.objects=null;this.totalCount=null;}
KalturaDropFolderListResponse.inheritsFrom(KalturaObjectBase);function KalturaEmailIngestionProfile(){this.id=null;this.name=null;this.description=null;this.emailAddress=null;this.mailboxId=null;this.partnerId=null;this.conversionProfile2Id=null;this.moderationStatus=null;this.status=null;this.createdAt=null;this.defaultCategory=null;this.defaultUserId=null;this.defaultTags=null;this.defaultAdminTags=null;this.maxAttachmentSizeKbytes=null;this.maxAttachmentsPerMail=null;}
KalturaEmailIngestionProfile.inheritsFrom(KalturaObjectBase);function KalturaValue(){this.description=null;}
KalturaValue.inheritsFrom(KalturaObjectBase);function KalturaStringValue(){this.value=null;}
KalturaStringValue.inheritsFrom(KalturaValue);function KalturaEmailNotificationRecipient(){this.email=null;this.name=null;}
KalturaEmailNotificationRecipient.inheritsFrom(KalturaObjectBase);function KalturaEmailNotificationRecipientJobData(){this.providerType=null;}
KalturaEmailNotificationRecipientJobData.inheritsFrom(KalturaObjectBase);function KalturaEmailNotificationRecipientProvider(){}
KalturaEmailNotificationRecipientProvider.inheritsFrom(KalturaObjectBase);function KalturaEntryDistribution(){this.id=null;this.createdAt=null;this.updatedAt=null;this.submittedAt=null;this.entryId=null;this.partnerId=null;this.distributionProfileId=null;this.status=null;this.sunStatus=null;this.dirtyStatus=null;this.thumbAssetIds=null;this.flavorAssetIds=null;this.assetIds=null;this.sunrise=null;this.sunset=null;this.remoteId=null;this.plays=null;this.views=null;this.validationErrors=null;this.errorType=null;this.errorNumber=null;this.errorDescription=null;this.hasSubmitResultsLog=null;this.hasSubmitSentDataLog=null;this.hasUpdateResultsLog=null;this.hasUpdateSentDataLog=null;this.hasDeleteResultsLog=null;this.hasDeleteSentDataLog=null;}
KalturaEntryDistribution.inheritsFrom(KalturaObjectBase);function KalturaEntryDistributionListResponse(){this.objects=null;this.totalCount=null;}
KalturaEntryDistributionListResponse.inheritsFrom(KalturaObjectBase);function KalturaEntryReplacementOptions(){this.keepManualThumbnails=null;}
KalturaEntryReplacementOptions.inheritsFrom(KalturaObjectBase);function KalturaEventNotificationParameter(){this.key=null;this.description=null;this.value=null;}
KalturaEventNotificationParameter.inheritsFrom(KalturaObjectBase);function KalturaEventNotificationTemplate(){this.id=null;this.partnerId=null;this.name=null;this.systemName=null;this.description=null;this.type=null;this.status=null;this.createdAt=null;this.updatedAt=null;this.manualDispatchEnabled=null;this.automaticDispatchEnabled=null;this.eventType=null;this.eventObjectType=null;this.eventConditions=null;this.contentParameters=null;this.userParameters=null;}
KalturaEventNotificationTemplate.inheritsFrom(KalturaObjectBase);function KalturaEventNotificationTemplateListResponse(){this.objects=null;this.totalCount=null;}
KalturaEventNotificationTemplateListResponse.inheritsFrom(KalturaObjectBase);function KalturaObjectIdentifier(){this.extendedFeatures=null;}
KalturaObjectIdentifier.inheritsFrom(KalturaObjectBase);function KalturaExtendingItemMrssParameter(){this.xpath=null;this.identifier=null;this.extensionMode=null;}
KalturaExtendingItemMrssParameter.inheritsFrom(KalturaObjectBase);function KalturaPlayableEntry(){this.plays=null;this.views=null;this.lastPlayedAt=null;this.width=null;this.height=null;this.duration=null;this.msDuration=null;this.durationType=null;}
KalturaPlayableEntry.inheritsFrom(KalturaBaseEntry);function KalturaMediaEntry(){this.mediaType=null;this.conversionQuality=null;this.sourceType=null;this.searchProviderType=null;this.searchProviderId=null;this.creditUserName=null;this.creditUrl=null;this.mediaDate=null;this.dataUrl=null;this.flavorParamsIds=null;}
KalturaMediaEntry.inheritsFrom(KalturaPlayableEntry);function KalturaExternalMediaEntry(){this.externalSourceType=null;this.assetParamsIds=null;}
KalturaExternalMediaEntry.inheritsFrom(KalturaMediaEntry);function KalturaExternalMediaEntryListResponse(){this.objects=null;this.totalCount=null;}
KalturaExternalMediaEntryListResponse.inheritsFrom(KalturaObjectBase);function KalturaFeatureStatus(){this.type=null;this.value=null;}
KalturaFeatureStatus.inheritsFrom(KalturaObjectBase);function KalturaFeatureStatusListResponse(){this.objects=null;this.totalCount=null;}
KalturaFeatureStatusListResponse.inheritsFrom(KalturaObjectBase);function KalturaFileAsset(){this.id=null;this.partnerId=null;this.fileAssetObjectType=null;this.objectId=null;this.name=null;this.systemName=null;this.fileExt=null;this.version=null;this.createdAt=null;this.updatedAt=null;this.status=null;}
KalturaFileAsset.inheritsFrom(KalturaObjectBase);function KalturaFileAssetListResponse(){this.objects=null;this.totalCount=null;}
KalturaFileAssetListResponse.inheritsFrom(KalturaObjectBase);function KalturaSearchItem(){}
KalturaSearchItem.inheritsFrom(KalturaObjectBase);function KalturaFilter(){this.orderBy=null;this.advancedSearch=null;}
KalturaFilter.inheritsFrom(KalturaObjectBase);function KalturaFilterPager(){this.pageSize=null;this.pageIndex=null;}
KalturaFilterPager.inheritsFrom(KalturaObjectBase);function KalturaFlavorAsset(){this.flavorParamsId=null;this.width=null;this.height=null;this.bitrate=null;this.frameRate=null;this.isOriginal=null;this.isWeb=null;this.containerFormat=null;this.videoCodecId=null;this.status=null;}
KalturaFlavorAsset.inheritsFrom(KalturaAsset);function KalturaFlavorAssetListResponse(){this.objects=null;this.totalCount=null;}
KalturaFlavorAssetListResponse.inheritsFrom(KalturaObjectBase);function KalturaFlavorParams(){this.videoCodec=null;this.videoBitrate=null;this.audioCodec=null;this.audioBitrate=null;this.audioChannels=null;this.audioSampleRate=null;this.width=null;this.height=null;this.frameRate=null;this.gopSize=null;this.conversionEngines=null;this.conversionEnginesExtraParams=null;this.twoPass=null;this.deinterlice=null;this.rotate=null;this.operators=null;this.engineVersion=null;this.format=null;this.aspectRatioProcessingMode=null;this.forceFrameToMultiplication16=null;this.isGopInSec=null;this.isAvoidVideoShrinkFramesizeToSource=null;this.isAvoidVideoShrinkBitrateToSource=null;this.isVideoFrameRateForLowBrAppleHls=null;this.multiStream=null;this.anamorphicPixels=null;this.isAvoidForcedKeyFrames=null;this.maxFrameRate=null;this.videoConstantBitrate=null;this.videoBitrateTolerance=null;this.watermarkData=null;this.clipOffset=null;this.clipDuration=null;}
KalturaFlavorParams.inheritsFrom(KalturaAssetParams);function KalturaFlavorAssetWithParams(){this.flavorAsset=null;this.flavorParams=null;this.entryId=null;}
KalturaFlavorAssetWithParams.inheritsFrom(KalturaObjectBase);function KalturaFlavorParamsListResponse(){this.objects=null;this.totalCount=null;}
KalturaFlavorParamsListResponse.inheritsFrom(KalturaObjectBase);function KalturaFlavorParamsOutput(){this.flavorParamsId=null;this.commandLinesStr=null;this.flavorParamsVersion=null;this.flavorAssetId=null;this.flavorAssetVersion=null;this.readyBehavior=null;}
KalturaFlavorParamsOutput.inheritsFrom(KalturaFlavorParams);function KalturaFlavorParamsOutputListResponse(){this.objects=null;this.totalCount=null;}
KalturaFlavorParamsOutputListResponse.inheritsFrom(KalturaObjectBase);function KalturaGenericDistributionProfileAction(){this.protocol=null;this.serverUrl=null;this.serverPath=null;this.username=null;this.password=null;this.ftpPassiveMode=null;this.httpFieldName=null;this.httpFileName=null;}
KalturaGenericDistributionProfileAction.inheritsFrom(KalturaObjectBase);function KalturaGenericDistributionProviderAction(){this.id=null;this.createdAt=null;this.updatedAt=null;this.genericDistributionProviderId=null;this.action=null;this.status=null;this.resultsParser=null;this.protocol=null;this.serverAddress=null;this.remotePath=null;this.remoteUsername=null;this.remotePassword=null;this.editableFields=null;this.mandatoryFields=null;this.mrssTransformer=null;this.mrssValidator=null;this.resultsTransformer=null;}
KalturaGenericDistributionProviderAction.inheritsFrom(KalturaObjectBase);function KalturaGenericDistributionProviderActionListResponse(){this.objects=null;this.totalCount=null;}
KalturaGenericDistributionProviderActionListResponse.inheritsFrom(KalturaObjectBase);function KalturaGenericDistributionProvider(){this.id=null;this.createdAt=null;this.updatedAt=null;this.partnerId=null;this.isDefault=null;this.status=null;this.optionalFlavorParamsIds=null;this.requiredFlavorParamsIds=null;this.optionalThumbDimensions=null;this.requiredThumbDimensions=null;this.editableFields=null;this.mandatoryFields=null;}
KalturaGenericDistributionProvider.inheritsFrom(KalturaDistributionProvider);function KalturaGenericDistributionProviderListResponse(){this.objects=null;this.totalCount=null;}
KalturaGenericDistributionProviderListResponse.inheritsFrom(KalturaObjectBase);function KalturaObject(){}
KalturaObject.inheritsFrom(KalturaObjectBase);function KalturaHttpNotification(){this.object=null;this.eventObjectType=null;this.eventNotificationJobId=null;this.templateId=null;this.templateName=null;this.templateSystemName=null;this.eventType=null;}
KalturaHttpNotification.inheritsFrom(KalturaObjectBase);function KalturaHttpNotificationData(){}
KalturaHttpNotificationData.inheritsFrom(KalturaObjectBase);function KalturaIntegerValue(){this.value=null;}
KalturaIntegerValue.inheritsFrom(KalturaValue);function KalturaJobData(){}
KalturaJobData.inheritsFrom(KalturaObjectBase);function KalturaLiveStreamConfiguration(){this.protocol=null;this.url=null;this.publishUrl=null;this.backupUrl=null;this.streamName=null;}
KalturaLiveStreamConfiguration.inheritsFrom(KalturaObjectBase);function KalturaLiveStreamPushPublishConfiguration(){this.publishUrl=null;this.backupPublishUrl=null;this.port=null;}
KalturaLiveStreamPushPublishConfiguration.inheritsFrom(KalturaObjectBase);function KalturaLiveEntry(){this.offlineMessage=null;this.recordStatus=null;this.dvrStatus=null;this.dvrWindow=null;this.lastElapsedRecordingTime=null;this.liveStreamConfigurations=null;this.recordedEntryId=null;this.pushPublishEnabled=null;this.publishConfigurations=null;this.firstBroadcast=null;this.lastBroadcast=null;this.currentBroadcastStartTime=null;}
KalturaLiveEntry.inheritsFrom(KalturaMediaEntry);function KalturaLiveChannel(){this.playlistId=null;this.repeat=null;}
KalturaLiveChannel.inheritsFrom(KalturaLiveEntry);function KalturaLiveChannelListResponse(){this.objects=null;this.totalCount=null;}
KalturaLiveChannelListResponse.inheritsFrom(KalturaObjectBase);function KalturaLiveChannelSegment(){this.id=null;this.partnerId=null;this.createdAt=null;this.updatedAt=null;this.name=null;this.description=null;this.tags=null;this.type=null;this.status=null;this.channelId=null;this.entryId=null;this.triggerType=null;this.triggerSegmentId=null;this.startTime=null;this.duration=null;}
KalturaLiveChannelSegment.inheritsFrom(KalturaObjectBase);function KalturaLiveChannelSegmentListResponse(){this.objects=null;this.totalCount=null;}
KalturaLiveChannelSegmentListResponse.inheritsFrom(KalturaObjectBase);function KalturaLiveReportExportParams(){this.entryIds=null;this.recpientEmail=null;this.timeZoneOffset=null;}
KalturaLiveReportExportParams.inheritsFrom(KalturaObjectBase);function KalturaLiveReportExportResponse(){this.referenceJobId=null;this.reportEmail=null;}
KalturaLiveReportExportResponse.inheritsFrom(KalturaObjectBase);function KalturaLiveReportInputFilter(){this.entryIds=null;this.fromTime=null;this.toTime=null;this.live=null;}
KalturaLiveReportInputFilter.inheritsFrom(KalturaObjectBase);function KalturaLiveStats(){this.audience=null;this.avgBitrate=null;this.bufferTime=null;this.plays=null;this.secondsViewed=null;this.startEvent=null;this.timestamp=null;}
KalturaLiveStats.inheritsFrom(KalturaObjectBase);function KalturaLiveStatsListResponse(){this.objects=null;this.totalCount=null;}
KalturaLiveStatsListResponse.inheritsFrom(KalturaObjectBase);function KalturaLiveStreamBitrate(){this.bitrate=null;this.width=null;this.height=null;this.tags=null;}
KalturaLiveStreamBitrate.inheritsFrom(KalturaObjectBase);function KalturaLiveStreamEntry(){this.streamRemoteId=null;this.streamRemoteBackupId=null;this.bitrates=null;this.primaryBroadcastingUrl=null;this.secondaryBroadcastingUrl=null;this.primaryRtspBroadcastingUrl=null;this.secondaryRtspBroadcastingUrl=null;this.streamName=null;this.streamUrl=null;this.hlsStreamUrl=null;this.urlManager=null;this.encodingIP1=null;this.encodingIP2=null;this.streamPassword=null;this.streamUsername=null;}
KalturaLiveStreamEntry.inheritsFrom(KalturaLiveEntry);function KalturaLiveStreamListResponse(){this.objects=null;this.totalCount=null;}
KalturaLiveStreamListResponse.inheritsFrom(KalturaObjectBase);function KalturaBaseEntryBaseFilter(){this.idEqual=null;this.idIn=null;this.idNotIn=null;this.nameLike=null;this.nameMultiLikeOr=null;this.nameMultiLikeAnd=null;this.nameEqual=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.userIdEqual=null;this.userIdIn=null;this.creatorIdEqual=null;this.tagsLike=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.adminTagsLike=null;this.adminTagsMultiLikeOr=null;this.adminTagsMultiLikeAnd=null;this.categoriesMatchAnd=null;this.categoriesMatchOr=null;this.categoriesNotContains=null;this.categoriesIdsMatchAnd=null;this.categoriesIdsMatchOr=null;this.categoriesIdsNotContains=null;this.categoriesIdsEmpty=null;this.statusEqual=null;this.statusNotEqual=null;this.statusIn=null;this.statusNotIn=null;this.moderationStatusEqual=null;this.moderationStatusNotEqual=null;this.moderationStatusIn=null;this.moderationStatusNotIn=null;this.typeEqual=null;this.typeIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.totalRankLessThanOrEqual=null;this.totalRankGreaterThanOrEqual=null;this.groupIdEqual=null;this.searchTextMatchAnd=null;this.searchTextMatchOr=null;this.accessControlIdEqual=null;this.accessControlIdIn=null;this.startDateGreaterThanOrEqual=null;this.startDateLessThanOrEqual=null;this.startDateGreaterThanOrEqualOrNull=null;this.startDateLessThanOrEqualOrNull=null;this.endDateGreaterThanOrEqual=null;this.endDateLessThanOrEqual=null;this.endDateGreaterThanOrEqualOrNull=null;this.endDateLessThanOrEqualOrNull=null;this.referenceIdEqual=null;this.referenceIdIn=null;this.replacingEntryIdEqual=null;this.replacingEntryIdIn=null;this.replacedEntryIdEqual=null;this.replacedEntryIdIn=null;this.replacementStatusEqual=null;this.replacementStatusIn=null;this.partnerSortValueGreaterThanOrEqual=null;this.partnerSortValueLessThanOrEqual=null;this.rootEntryIdEqual=null;this.rootEntryIdIn=null;this.parentEntryIdEqual=null;this.tagsNameMultiLikeOr=null;this.tagsAdminTagsMultiLikeOr=null;this.tagsAdminTagsNameMultiLikeOr=null;this.tagsNameMultiLikeAnd=null;this.tagsAdminTagsMultiLikeAnd=null;this.tagsAdminTagsNameMultiLikeAnd=null;}
KalturaBaseEntryBaseFilter.inheritsFrom(KalturaFilter);function KalturaBaseEntryFilter(){this.freeText=null;this.isRoot=null;this.categoriesFullNameIn=null;this.categoryAncestorIdIn=null;this.redirectFromEntryId=null;}
KalturaBaseEntryFilter.inheritsFrom(KalturaBaseEntryBaseFilter);function KalturaPlayableEntryBaseFilter(){this.lastPlayedAtGreaterThanOrEqual=null;this.lastPlayedAtLessThanOrEqual=null;this.durationLessThan=null;this.durationGreaterThan=null;this.durationLessThanOrEqual=null;this.durationGreaterThanOrEqual=null;this.durationTypeMatchOr=null;}
KalturaPlayableEntryBaseFilter.inheritsFrom(KalturaBaseEntryFilter);function KalturaPlayableEntryFilter(){}
KalturaPlayableEntryFilter.inheritsFrom(KalturaPlayableEntryBaseFilter);function KalturaMediaEntryBaseFilter(){this.mediaTypeEqual=null;this.mediaTypeIn=null;this.sourceTypeEqual=null;this.sourceTypeNotEqual=null;this.sourceTypeIn=null;this.sourceTypeNotIn=null;this.mediaDateGreaterThanOrEqual=null;this.mediaDateLessThanOrEqual=null;this.flavorParamsIdsMatchOr=null;this.flavorParamsIdsMatchAnd=null;}
KalturaMediaEntryBaseFilter.inheritsFrom(KalturaPlayableEntryFilter);function KalturaMediaEntryFilter(){}
KalturaMediaEntryFilter.inheritsFrom(KalturaMediaEntryBaseFilter);function KalturaMediaEntryFilterForPlaylist(){this.limit=null;}
KalturaMediaEntryFilterForPlaylist.inheritsFrom(KalturaMediaEntryFilter);function KalturaMediaInfo(){this.id=null;this.flavorAssetId=null;this.fileSize=null;this.containerFormat=null;this.containerId=null;this.containerProfile=null;this.containerDuration=null;this.containerBitRate=null;this.videoFormat=null;this.videoCodecId=null;this.videoDuration=null;this.videoBitRate=null;this.videoBitRateMode=null;this.videoWidth=null;this.videoHeight=null;this.videoFrameRate=null;this.videoDar=null;this.videoRotation=null;this.audioFormat=null;this.audioCodecId=null;this.audioDuration=null;this.audioBitRate=null;this.audioBitRateMode=null;this.audioChannels=null;this.audioSamplingRate=null;this.audioResolution=null;this.writingLib=null;this.rawData=null;this.multiStreamInfo=null;this.scanType=null;this.multiStream=null;this.isFastStart=null;this.contentStreams=null;}
KalturaMediaInfo.inheritsFrom(KalturaObjectBase);function KalturaMediaInfoListResponse(){this.objects=null;this.totalCount=null;}
KalturaMediaInfoListResponse.inheritsFrom(KalturaObjectBase);function KalturaMediaListResponse(){this.objects=null;this.totalCount=null;}
KalturaMediaListResponse.inheritsFrom(KalturaObjectBase);function KalturaMediaServer(){this.id=null;this.dc=null;this.hostname=null;this.createdAt=null;this.updatedAt=null;}
KalturaMediaServer.inheritsFrom(KalturaObjectBase);function KalturaMediaServerStatus(){}
KalturaMediaServerStatus.inheritsFrom(KalturaObjectBase);function KalturaMetadata(){this.id=null;this.partnerId=null;this.metadataProfileId=null;this.metadataProfileVersion=null;this.metadataObjectType=null;this.objectId=null;this.version=null;this.createdAt=null;this.updatedAt=null;this.status=null;this.xml=null;}
KalturaMetadata.inheritsFrom(KalturaObjectBase);function KalturaMetadataListResponse(){this.objects=null;this.totalCount=null;}
KalturaMetadataListResponse.inheritsFrom(KalturaObjectBase);function KalturaMetadataProfile(){this.id=null;this.partnerId=null;this.metadataObjectType=null;this.version=null;this.name=null;this.systemName=null;this.description=null;this.createdAt=null;this.updatedAt=null;this.status=null;this.xsd=null;this.views=null;this.xslt=null;this.createMode=null;}
KalturaMetadataProfile.inheritsFrom(KalturaObjectBase);function KalturaMetadataProfileField(){this.id=null;this.xPath=null;this.key=null;this.label=null;}
KalturaMetadataProfileField.inheritsFrom(KalturaObjectBase);function KalturaMetadataProfileFieldListResponse(){this.objects=null;this.totalCount=null;}
KalturaMetadataProfileFieldListResponse.inheritsFrom(KalturaObjectBase);function KalturaMetadataProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaMetadataProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaMixEntry(){this.hasRealThumbnail=null;this.editorType=null;this.dataContent=null;}
KalturaMixEntry.inheritsFrom(KalturaPlayableEntry);function KalturaMixListResponse(){this.objects=null;this.totalCount=null;}
KalturaMixListResponse.inheritsFrom(KalturaObjectBase);function KalturaModerationFlag(){this.id=null;this.partnerId=null;this.userId=null;this.moderationObjectType=null;this.flaggedEntryId=null;this.flaggedUserId=null;this.status=null;this.comments=null;this.flagType=null;this.createdAt=null;this.updatedAt=null;}
KalturaModerationFlag.inheritsFrom(KalturaObjectBase);function KalturaModerationFlagListResponse(){this.objects=null;this.totalCount=null;}
KalturaModerationFlagListResponse.inheritsFrom(KalturaObjectBase);function KalturaObjectListResponse(){this.objects=null;this.totalCount=null;}
KalturaObjectListResponse.inheritsFrom(KalturaObjectBase);function KalturaObjectTask(){this.type=null;}
KalturaObjectTask.inheritsFrom(KalturaObjectBase);function KalturaPlayerDeliveryType(){this.id=null;this.label=null;this.flashvars=null;this.minVersion=null;this.enabledByDefault=null;}
KalturaPlayerDeliveryType.inheritsFrom(KalturaObjectBase);function KalturaPlayerEmbedCodeType(){this.id=null;this.label=null;this.entryOnly=null;this.minVersion=null;}
KalturaPlayerEmbedCodeType.inheritsFrom(KalturaObjectBase);function KalturaPartner(){this.id=null;this.name=null;this.website=null;this.notificationUrl=null;this.appearInSearch=null;this.createdAt=null;this.adminName=null;this.adminEmail=null;this.description=null;this.commercialUse=null;this.landingPage=null;this.userLandingPage=null;this.contentCategories=null;this.type=null;this.phone=null;this.describeYourself=null;this.adultContent=null;this.defConversionProfileType=null;this.notify=null;this.status=null;this.allowQuickEdit=null;this.mergeEntryLists=null;this.notificationsConfig=null;this.maxUploadSize=null;this.partnerPackage=null;this.secret=null;this.adminSecret=null;this.cmsPassword=null;this.allowMultiNotification=null;this.adminLoginUsersQuota=null;this.adminUserId=null;this.firstName=null;this.lastName=null;this.country=null;this.state=null;this.additionalParams=null;this.publishersQuota=null;this.partnerGroupType=null;this.defaultEntitlementEnforcement=null;this.defaultDeliveryType=null;this.defaultEmbedCodeType=null;this.deliveryTypes=null;this.embedCodeTypes=null;this.templatePartnerId=null;this.ignoreSeoLinks=null;this.host=null;this.cdnHost=null;this.isFirstLogin=null;this.logoutUrl=null;this.partnerParentId=null;this.crmId=null;this.referenceId=null;}
KalturaPartner.inheritsFrom(KalturaObjectBase);function KalturaPartnerListResponse(){this.objects=null;this.totalCount=null;}
KalturaPartnerListResponse.inheritsFrom(KalturaObjectBase);function KalturaPartnerStatistics(){this.packageBandwidthAndStorage=null;this.hosting=null;this.bandwidth=null;this.usage=null;this.usagePercent=null;this.reachedLimitDate=null;}
KalturaPartnerStatistics.inheritsFrom(KalturaObjectBase);function KalturaPartnerUsage(){this.hostingGB=null;this.Percent=null;this.packageBW=null;this.usageGB=null;this.reachedLimitDate=null;this.usageGraph=null;}
KalturaPartnerUsage.inheritsFrom(KalturaObjectBase);function KalturaVarPartnerUsageItem(){this.partnerId=null;this.partnerName=null;this.partnerStatus=null;this.partnerPackage=null;this.partnerCreatedAt=null;this.views=null;this.plays=null;this.entriesCount=null;this.totalEntriesCount=null;this.videoEntriesCount=null;this.imageEntriesCount=null;this.audioEntriesCount=null;this.mixEntriesCount=null;this.bandwidth=null;this.totalStorage=null;this.storage=null;this.deletedStorage=null;this.peakStorage=null;this.avgStorage=null;this.combinedStorageBandwidth=null;this.transcodingUsage=null;this.dateId=null;}
KalturaVarPartnerUsageItem.inheritsFrom(KalturaObjectBase);function KalturaPartnerUsageListResponse(){this.total=null;this.objects=null;this.totalCount=null;}
KalturaPartnerUsageListResponse.inheritsFrom(KalturaObjectBase);function KalturaPermission(){this.id=null;this.type=null;this.name=null;this.friendlyName=null;this.description=null;this.status=null;this.partnerId=null;this.dependsOnPermissionNames=null;this.tags=null;this.permissionItemsIds=null;this.createdAt=null;this.updatedAt=null;this.partnerGroup=null;}
KalturaPermission.inheritsFrom(KalturaObjectBase);function KalturaPermissionItem(){this.id=null;this.type=null;this.partnerId=null;this.tags=null;this.createdAt=null;this.updatedAt=null;}
KalturaPermissionItem.inheritsFrom(KalturaObjectBase);function KalturaPermissionItemListResponse(){this.objects=null;this.totalCount=null;}
KalturaPermissionItemListResponse.inheritsFrom(KalturaObjectBase);function KalturaPermissionListResponse(){this.objects=null;this.totalCount=null;}
KalturaPermissionListResponse.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyAnalogVideoOPIdHolder(){this.type=null;}
KalturaPlayReadyAnalogVideoOPIdHolder.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyContentKey(){this.keyId=null;this.contentKey=null;}
KalturaPlayReadyContentKey.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyCopyEnablerHolder(){this.type=null;}
KalturaPlayReadyCopyEnablerHolder.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyDigitalAudioOPIdHolder(){this.type=null;}
KalturaPlayReadyDigitalAudioOPIdHolder.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyRight(){}
KalturaPlayReadyRight.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyPolicy(){this.gracePeriod=null;this.licenseRemovalPolicy=null;this.licenseRemovalDuration=null;this.minSecurityLevel=null;this.rights=null;}
KalturaPlayReadyPolicy.inheritsFrom(KalturaDrmPolicy);function KalturaPlayReadyLicenseDetails(){this.policy=null;this.beginDate=null;this.expirationDate=null;this.removalDate=null;}
KalturaPlayReadyLicenseDetails.inheritsFrom(KalturaObjectBase);function KalturaPlayReadyPlayEnablerHolder(){this.type=null;}
KalturaPlayReadyPlayEnablerHolder.inheritsFrom(KalturaObjectBase);function KalturaPlaylist(){this.playlistContent=null;this.filters=null;this.totalResults=null;this.playlistType=null;this.plays=null;this.views=null;this.duration=null;this.executeUrl=null;}
KalturaPlaylist.inheritsFrom(KalturaBaseEntry);function KalturaPlaylistListResponse(){this.objects=null;this.totalCount=null;}
KalturaPlaylistListResponse.inheritsFrom(KalturaObjectBase);function KalturaRemotePath(){this.storageProfileId=null;this.uri=null;}
KalturaRemotePath.inheritsFrom(KalturaObjectBase);function KalturaRemotePathListResponse(){this.objects=null;this.totalCount=null;}
KalturaRemotePathListResponse.inheritsFrom(KalturaObjectBase);function KalturaUrlResource(){this.url=null;this.forceAsyncDownload=null;}
KalturaUrlResource.inheritsFrom(KalturaContentResource);function KalturaRemoteStorageResource(){this.storageProfileId=null;}
KalturaRemoteStorageResource.inheritsFrom(KalturaUrlResource);function KalturaReportBaseTotal(){this.id=null;this.data=null;}
KalturaReportBaseTotal.inheritsFrom(KalturaObjectBase);function KalturaReportGraph(){this.id=null;this.data=null;}
KalturaReportGraph.inheritsFrom(KalturaObjectBase);function KalturaReportInputBaseFilter(){this.fromDate=null;this.toDate=null;this.fromDay=null;this.toDay=null;}
KalturaReportInputBaseFilter.inheritsFrom(KalturaObjectBase);function KalturaReportResponse(){this.columns=null;this.results=null;}
KalturaReportResponse.inheritsFrom(KalturaObjectBase);function KalturaReportTable(){this.header=null;this.data=null;this.totalCount=null;}
KalturaReportTable.inheritsFrom(KalturaObjectBase);function KalturaReportTotal(){this.header=null;this.data=null;}
KalturaReportTotal.inheritsFrom(KalturaObjectBase);function KalturaScheduledTaskProfile(){this.id=null;this.partnerId=null;this.name=null;this.systemName=null;this.description=null;this.status=null;this.objectFilterEngineType=null;this.objectFilter=null;this.objectTasks=null;this.createdAt=null;this.updatedAt=null;this.lastExecutionStartedAt=null;this.maxTotalCountAllowed=null;}
KalturaScheduledTaskProfile.inheritsFrom(KalturaObjectBase);function KalturaScheduledTaskProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaScheduledTaskProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaScope(){}
KalturaScope.inheritsFrom(KalturaObjectBase);function KalturaSearch(){this.keyWords=null;this.searchSource=null;this.mediaType=null;this.extraData=null;this.authData=null;}
KalturaSearch.inheritsFrom(KalturaObjectBase);function KalturaSearchAuthData(){this.authData=null;this.loginUrl=null;this.message=null;}
KalturaSearchAuthData.inheritsFrom(KalturaObjectBase);function KalturaSearchResult(){this.id=null;this.title=null;this.thumbUrl=null;this.description=null;this.tags=null;this.url=null;this.sourceLink=null;this.credit=null;this.licenseType=null;this.flashPlaybackType=null;this.fileExt=null;}
KalturaSearchResult.inheritsFrom(KalturaSearch);function KalturaSearchResultResponse(){this.objects=null;this.needMediaInfo=null;}
KalturaSearchResultResponse.inheritsFrom(KalturaObjectBase);function KalturaSessionInfo(){this.ks=null;this.sessionType=null;this.partnerId=null;this.userId=null;this.expiry=null;this.privileges=null;}
KalturaSessionInfo.inheritsFrom(KalturaObjectBase);function KalturaShortLink(){this.id=null;this.createdAt=null;this.updatedAt=null;this.expiresAt=null;this.partnerId=null;this.userId=null;this.name=null;this.systemName=null;this.fullUrl=null;this.status=null;}
KalturaShortLink.inheritsFrom(KalturaObjectBase);function KalturaShortLinkListResponse(){this.objects=null;this.totalCount=null;}
KalturaShortLinkListResponse.inheritsFrom(KalturaObjectBase);function KalturaSourceFileSyncDescriptor(){this.actualFileSyncLocalPath=null;this.assetId=null;this.assetParamsId=null;}
KalturaSourceFileSyncDescriptor.inheritsFrom(KalturaFileSyncDescriptor);function KalturaStartWidgetSessionResponse(){this.partnerId=null;this.ks=null;this.userId=null;}
KalturaStartWidgetSessionResponse.inheritsFrom(KalturaObjectBase);function KalturaStatsEvent(){this.clientVer=null;this.eventType=null;this.eventTimestamp=null;this.sessionId=null;this.partnerId=null;this.entryId=null;this.uniqueViewer=null;this.widgetId=null;this.uiconfId=null;this.userId=null;this.currentPoint=null;this.duration=null;this.userIp=null;this.processDuration=null;this.controlId=null;this.seek=null;this.newPoint=null;this.referrer=null;this.isFirstInSession=null;this.applicationId=null;this.contextId=null;this.featureType=null;}
KalturaStatsEvent.inheritsFrom(KalturaObjectBase);function KalturaStatsKmcEvent(){this.clientVer=null;this.kmcEventActionPath=null;this.kmcEventType=null;this.eventTimestamp=null;this.sessionId=null;this.partnerId=null;this.entryId=null;this.widgetId=null;this.uiconfId=null;this.userId=null;this.userIp=null;}
KalturaStatsKmcEvent.inheritsFrom(KalturaObjectBase);function KalturaStorageProfile(){this.id=null;this.createdAt=null;this.updatedAt=null;this.partnerId=null;this.name=null;this.systemName=null;this.desciption=null;this.status=null;this.protocol=null;this.storageUrl=null;this.storageBaseDir=null;this.storageUsername=null;this.storagePassword=null;this.storageFtpPassiveMode=null;this.minFileSize=null;this.maxFileSize=null;this.flavorParamsIds=null;this.maxConcurrentConnections=null;this.pathManagerClass=null;this.pathManagerParams=null;this.trigger=null;this.deliveryPriority=null;this.deliveryStatus=null;this.readyBehavior=null;this.allowAutoDelete=null;this.createFileLink=null;this.rules=null;this.deliveryProfileIds=null;}
KalturaStorageProfile.inheritsFrom(KalturaObjectBase);function KalturaStorageProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaStorageProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaSyndicationFeedEntryCount(){this.totalEntryCount=null;this.actualEntryCount=null;this.requireTranscodingCount=null;}
KalturaSyndicationFeedEntryCount.inheritsFrom(KalturaObjectBase);function KalturaTag(){this.id=null;this.tag=null;this.taggedObjectType=null;this.partnerId=null;this.instanceCount=null;this.createdAt=null;this.updatedAt=null;}
KalturaTag.inheritsFrom(KalturaObjectBase);function KalturaTagListResponse(){this.objects=null;this.totalCount=null;}
KalturaTagListResponse.inheritsFrom(KalturaObjectBase);function KalturaThumbAsset(){this.thumbParamsId=null;this.width=null;this.height=null;this.status=null;}
KalturaThumbAsset.inheritsFrom(KalturaAsset);function KalturaThumbAssetListResponse(){this.objects=null;this.totalCount=null;}
KalturaThumbAssetListResponse.inheritsFrom(KalturaObjectBase);function KalturaThumbParams(){this.cropType=null;this.quality=null;this.cropX=null;this.cropY=null;this.cropWidth=null;this.cropHeight=null;this.videoOffset=null;this.width=null;this.height=null;this.scaleWidth=null;this.scaleHeight=null;this.backgroundColor=null;this.sourceParamsId=null;this.format=null;this.density=null;this.stripProfiles=null;this.videoOffsetInPercentage=null;}
KalturaThumbParams.inheritsFrom(KalturaAssetParams);function KalturaThumbParamsListResponse(){this.objects=null;this.totalCount=null;}
KalturaThumbParamsListResponse.inheritsFrom(KalturaObjectBase);function KalturaThumbParamsOutput(){this.thumbParamsId=null;this.thumbParamsVersion=null;this.thumbAssetId=null;this.thumbAssetVersion=null;this.rotate=null;}
KalturaThumbParamsOutput.inheritsFrom(KalturaThumbParams);function KalturaThumbParamsOutputListResponse(){this.objects=null;this.totalCount=null;}
KalturaThumbParamsOutputListResponse.inheritsFrom(KalturaObjectBase);function KalturaThumbnailServeOptions(){this.download=null;}
KalturaThumbnailServeOptions.inheritsFrom(KalturaObjectBase);function KalturaUiConf(){this.id=null;this.name=null;this.description=null;this.partnerId=null;this.objType=null;this.objTypeAsString=null;this.width=null;this.height=null;this.htmlParams=null;this.swfUrl=null;this.confFilePath=null;this.confFile=null;this.confFileFeatures=null;this.config=null;this.confVars=null;this.useCdn=null;this.tags=null;this.swfUrlVersion=null;this.createdAt=null;this.updatedAt=null;this.creationMode=null;this.html5Url=null;this.version=null;this.partnerTags=null;}
KalturaUiConf.inheritsFrom(KalturaObjectBase);function KalturaUiConfListResponse(){this.objects=null;this.totalCount=null;}
KalturaUiConfListResponse.inheritsFrom(KalturaObjectBase);function KalturaUiConfTypeInfo(){this.type=null;this.versions=null;this.directory=null;this.filename=null;}
KalturaUiConfTypeInfo.inheritsFrom(KalturaObjectBase);function KalturaUploadResponse(){this.uploadTokenId=null;this.fileSize=null;this.errorCode=null;this.errorDescription=null;}
KalturaUploadResponse.inheritsFrom(KalturaObjectBase);function KalturaUploadToken(){this.id=null;this.partnerId=null;this.userId=null;this.status=null;this.fileName=null;this.fileSize=null;this.uploadedFileSize=null;this.createdAt=null;this.updatedAt=null;}
KalturaUploadToken.inheritsFrom(KalturaObjectBase);function KalturaUploadTokenListResponse(){this.objects=null;this.totalCount=null;}
KalturaUploadTokenListResponse.inheritsFrom(KalturaObjectBase);function KalturaUser(){this.id=null;this.partnerId=null;this.screenName=null;this.fullName=null;this.email=null;this.dateOfBirth=null;this.country=null;this.state=null;this.city=null;this.zip=null;this.thumbnailUrl=null;this.description=null;this.tags=null;this.adminTags=null;this.gender=null;this.status=null;this.createdAt=null;this.updatedAt=null;this.partnerData=null;this.indexedPartnerDataInt=null;this.indexedPartnerDataString=null;this.storageSize=null;this.password=null;this.firstName=null;this.lastName=null;this.isAdmin=null;this.language=null;this.lastLoginTime=null;this.statusUpdatedAt=null;this.deletedAt=null;this.loginEnabled=null;this.roleIds=null;this.roleNames=null;this.isAccountOwner=null;this.allowedPartnerIds=null;this.allowedPartnerPackages=null;}
KalturaUser.inheritsFrom(KalturaObjectBase);function KalturaUserListResponse(){this.objects=null;this.totalCount=null;}
KalturaUserListResponse.inheritsFrom(KalturaObjectBase);function KalturaUserRole(){this.id=null;this.name=null;this.systemName=null;this.description=null;this.status=null;this.partnerId=null;this.permissionNames=null;this.tags=null;this.createdAt=null;this.updatedAt=null;}
KalturaUserRole.inheritsFrom(KalturaObjectBase);function KalturaUserRoleListResponse(){this.objects=null;this.totalCount=null;}
KalturaUserRoleListResponse.inheritsFrom(KalturaObjectBase);function KalturaVirusScanProfile(){this.id=null;this.createdAt=null;this.updatedAt=null;this.partnerId=null;this.name=null;this.status=null;this.engineType=null;this.entryFilter=null;this.actionIfInfected=null;}
KalturaVirusScanProfile.inheritsFrom(KalturaObjectBase);function KalturaVirusScanProfileListResponse(){this.objects=null;this.totalCount=null;}
KalturaVirusScanProfileListResponse.inheritsFrom(KalturaObjectBase);function KalturaWidget(){this.id=null;this.sourceWidgetId=null;this.rootWidgetId=null;this.partnerId=null;this.entryId=null;this.uiConfId=null;this.securityType=null;this.securityPolicy=null;this.createdAt=null;this.updatedAt=null;this.partnerData=null;this.widgetHTML=null;this.enforceEntitlement=null;this.privacyContext=null;this.addEmbedHtml5Support=null;}
KalturaWidget.inheritsFrom(KalturaObjectBase);function KalturaWidgetListResponse(){this.objects=null;this.totalCount=null;}
KalturaWidgetListResponse.inheritsFrom(KalturaObjectBase);function KalturaABCScreenersWatermarkCondition(){}
KalturaABCScreenersWatermarkCondition.inheritsFrom(KalturaCondition);function KalturaAccessControlBaseFilter(){this.idEqual=null;this.idIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;}
KalturaAccessControlBaseFilter.inheritsFrom(KalturaFilter);function KalturaAccessControlBlockAction(){}
KalturaAccessControlBlockAction.inheritsFrom(KalturaRuleAction);function KalturaAccessControlLimitFlavorsAction(){this.flavorParamsIds=null;this.isBlockedList=null;}
KalturaAccessControlLimitFlavorsAction.inheritsFrom(KalturaRuleAction);function KalturaAccessControlPlayReadyPolicyAction(){this.policyId=null;}
KalturaAccessControlPlayReadyPolicyAction.inheritsFrom(KalturaRuleAction);function KalturaAccessControlPreviewAction(){this.limit=null;}
KalturaAccessControlPreviewAction.inheritsFrom(KalturaRuleAction);function KalturaAccessControlProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaAccessControlProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaAdCuePoint(){this.protocolType=null;this.sourceUrl=null;this.adType=null;this.title=null;this.endTime=null;this.duration=null;}
KalturaAdCuePoint.inheritsFrom(KalturaCuePoint);function KalturaAdminUser(){}
KalturaAdminUser.inheritsFrom(KalturaUser);function KalturaAmazonS3StorageProfile(){this.filesPermissionInS3=null;}
KalturaAmazonS3StorageProfile.inheritsFrom(KalturaStorageProfile);function KalturaApiActionPermissionItem(){this.service=null;this.action=null;}
KalturaApiActionPermissionItem.inheritsFrom(KalturaPermissionItem);function KalturaApiParameterPermissionItem(){this.object=null;this.parameter=null;this.action=null;}
KalturaApiParameterPermissionItem.inheritsFrom(KalturaPermissionItem);function KalturaAssetBaseFilter(){this.idEqual=null;this.idIn=null;this.entryIdEqual=null;this.entryIdIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.sizeGreaterThanOrEqual=null;this.sizeLessThanOrEqual=null;this.tagsLike=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.deletedAtGreaterThanOrEqual=null;this.deletedAtLessThanOrEqual=null;}
KalturaAssetBaseFilter.inheritsFrom(KalturaFilter);function KalturaAssetDistributionPropertyCondition(){this.propertyName=null;this.propertyValue=null;}
KalturaAssetDistributionPropertyCondition.inheritsFrom(KalturaAssetDistributionCondition);function KalturaAssetParamsBaseFilter(){this.systemNameEqual=null;this.systemNameIn=null;this.isSystemDefaultEqual=null;this.tagsEqual=null;}
KalturaAssetParamsBaseFilter.inheritsFrom(KalturaFilter);function KalturaAssetParamsOutput(){this.assetParamsId=null;this.assetParamsVersion=null;this.assetId=null;this.assetVersion=null;this.readyBehavior=null;this.format=null;}
KalturaAssetParamsOutput.inheritsFrom(KalturaAssetParams);function KalturaAssetPropertiesCompareCondition(){this.properties=null;}
KalturaAssetPropertiesCompareCondition.inheritsFrom(KalturaCondition);function KalturaAssetsParamsResourceContainers(){this.resources=null;}
KalturaAssetsParamsResourceContainers.inheritsFrom(KalturaResource);function KalturaAuditTrailBaseFilter(){this.idEqual=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.parsedAtGreaterThanOrEqual=null;this.parsedAtLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;this.auditObjectTypeEqual=null;this.auditObjectTypeIn=null;this.objectIdEqual=null;this.objectIdIn=null;this.relatedObjectIdEqual=null;this.relatedObjectIdIn=null;this.relatedObjectTypeEqual=null;this.relatedObjectTypeIn=null;this.entryIdEqual=null;this.entryIdIn=null;this.masterPartnerIdEqual=null;this.masterPartnerIdIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.requestIdEqual=null;this.requestIdIn=null;this.userIdEqual=null;this.userIdIn=null;this.actionEqual=null;this.actionIn=null;this.ksEqual=null;this.contextEqual=null;this.contextIn=null;this.entryPointEqual=null;this.entryPointIn=null;this.serverNameEqual=null;this.serverNameIn=null;this.ipAddressEqual=null;this.ipAddressIn=null;this.clientTagEqual=null;}
KalturaAuditTrailBaseFilter.inheritsFrom(KalturaFilter);function KalturaAuditTrailChangeInfo(){this.changedItems=null;}
KalturaAuditTrailChangeInfo.inheritsFrom(KalturaAuditTrailInfo);function KalturaAuditTrailChangeXmlNode(){this.type=null;}
KalturaAuditTrailChangeXmlNode.inheritsFrom(KalturaAuditTrailChangeItem);function KalturaAuditTrailFileSyncCreateInfo(){this.version=null;this.objectSubType=null;this.dc=null;this.original=null;this.fileType=null;}
KalturaAuditTrailFileSyncCreateInfo.inheritsFrom(KalturaAuditTrailInfo);function KalturaAuditTrailTextInfo(){this.info=null;}
KalturaAuditTrailTextInfo.inheritsFrom(KalturaAuditTrailInfo);function KalturaAuthenticatedCondition(){this.privileges=null;}
KalturaAuthenticatedCondition.inheritsFrom(KalturaCondition);function KalturaBaseSyndicationFeedBaseFilter(){}
KalturaBaseSyndicationFeedBaseFilter.inheritsFrom(KalturaFilter);function KalturaBatchJobBaseFilter(){this.idEqual=null;this.idGreaterThanOrEqual=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.partnerIdNotIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.executionAttemptsGreaterThanOrEqual=null;this.executionAttemptsLessThanOrEqual=null;this.lockVersionGreaterThanOrEqual=null;this.lockVersionLessThanOrEqual=null;this.entryIdEqual=null;this.jobTypeEqual=null;this.jobTypeIn=null;this.jobTypeNotIn=null;this.jobSubTypeEqual=null;this.jobSubTypeIn=null;this.jobSubTypeNotIn=null;this.statusEqual=null;this.statusIn=null;this.statusNotIn=null;this.priorityGreaterThanOrEqual=null;this.priorityLessThanOrEqual=null;this.priorityEqual=null;this.priorityIn=null;this.priorityNotIn=null;this.batchVersionGreaterThanOrEqual=null;this.batchVersionLessThanOrEqual=null;this.batchVersionEqual=null;this.queueTimeGreaterThanOrEqual=null;this.queueTimeLessThanOrEqual=null;this.finishTimeGreaterThanOrEqual=null;this.finishTimeLessThanOrEqual=null;this.errTypeEqual=null;this.errTypeIn=null;this.errTypeNotIn=null;this.errNumberEqual=null;this.errNumberIn=null;this.errNumberNotIn=null;this.estimatedEffortLessThan=null;this.estimatedEffortGreaterThan=null;this.urgencyLessThanOrEqual=null;this.urgencyGreaterThanOrEqual=null;}
KalturaBatchJobBaseFilter.inheritsFrom(KalturaFilter);function KalturaBooleanValue(){this.value=null;}
KalturaBooleanValue.inheritsFrom(KalturaValue);function KalturaBulkDownloadJobData(){this.entryIds=null;this.flavorParamsId=null;this.puserId=null;}
KalturaBulkDownloadJobData.inheritsFrom(KalturaJobData);function KalturaBulkServiceFilterData(){this.filter=null;this.templateObject=null;}
KalturaBulkServiceFilterData.inheritsFrom(KalturaBulkServiceData);function KalturaBulkUploadBaseFilter(){this.uploadedOnGreaterThanOrEqual=null;this.uploadedOnLessThanOrEqual=null;this.uploadedOnEqual=null;this.statusIn=null;this.statusEqual=null;this.bulkUploadObjectTypeEqual=null;this.bulkUploadObjectTypeIn=null;}
KalturaBulkUploadBaseFilter.inheritsFrom(KalturaFilter);function KalturaBulkUploadCategoryData(){}
KalturaBulkUploadCategoryData.inheritsFrom(KalturaBulkUploadObjectData);function KalturaBulkUploadCategoryEntryData(){}
KalturaBulkUploadCategoryEntryData.inheritsFrom(KalturaBulkUploadObjectData);function KalturaBulkUploadCategoryUserData(){}
KalturaBulkUploadCategoryUserData.inheritsFrom(KalturaBulkUploadObjectData);function KalturaBulkUploadEntryData(){this.conversionProfileId=null;}
KalturaBulkUploadEntryData.inheritsFrom(KalturaBulkUploadObjectData);function KalturaBulkUploadJobData(){this.userId=null;this.uploadedBy=null;this.conversionProfileId=null;this.resultsFileLocalPath=null;this.resultsFileUrl=null;this.numOfEntries=null;this.numOfObjects=null;this.filePath=null;this.bulkUploadObjectType=null;this.fileName=null;this.objectData=null;this.type=null;this.emailRecipients=null;this.numOfErrorObjects=null;}
KalturaBulkUploadJobData.inheritsFrom(KalturaJobData);function KalturaBulkUploadResultCategory(){this.relativePath=null;this.name=null;this.referenceId=null;this.description=null;this.tags=null;this.appearInList=null;this.privacy=null;this.inheritanceType=null;this.userJoinPolicy=null;this.defaultPermissionLevel=null;this.owner=null;this.contributionPolicy=null;this.partnerSortValue=null;this.moderation=null;}
KalturaBulkUploadResultCategory.inheritsFrom(KalturaBulkUploadResult);function KalturaBulkUploadResultCategoryEntry(){this.categoryId=null;this.entryId=null;}
KalturaBulkUploadResultCategoryEntry.inheritsFrom(KalturaBulkUploadResult);function KalturaBulkUploadResultCategoryUser(){this.categoryId=null;this.categoryReferenceId=null;this.userId=null;this.permissionLevel=null;this.updateMethod=null;this.requiredObjectStatus=null;}
KalturaBulkUploadResultCategoryUser.inheritsFrom(KalturaBulkUploadResult);function KalturaBulkUploadResultEntry(){this.entryId=null;this.title=null;this.description=null;this.tags=null;this.url=null;this.contentType=null;this.conversionProfileId=null;this.accessControlProfileId=null;this.category=null;this.scheduleStartDate=null;this.scheduleEndDate=null;this.entryStatus=null;this.thumbnailUrl=null;this.thumbnailSaved=null;this.sshPrivateKey=null;this.sshPublicKey=null;this.sshKeyPassphrase=null;this.creatorId=null;this.entitledUsersEdit=null;this.entitledUsersPublish=null;this.ownerId=null;}
KalturaBulkUploadResultEntry.inheritsFrom(KalturaBulkUploadResult);function KalturaBulkUploadResultUser(){this.userId=null;this.screenName=null;this.email=null;this.description=null;this.tags=null;this.dateOfBirth=null;this.country=null;this.state=null;this.city=null;this.zip=null;this.gender=null;this.firstName=null;this.lastName=null;}
KalturaBulkUploadResultUser.inheritsFrom(KalturaBulkUploadResult);function KalturaBulkUploadUserData(){}
KalturaBulkUploadUserData.inheritsFrom(KalturaBulkUploadObjectData);function KalturaCaptureThumbJobData(){this.srcFileSyncLocalPath=null;this.actualSrcFileSyncLocalPath=null;this.srcFileSyncRemoteUrl=null;this.thumbParamsOutputId=null;this.thumbAssetId=null;this.srcAssetId=null;this.srcAssetType=null;this.thumbPath=null;}
KalturaCaptureThumbJobData.inheritsFrom(KalturaJobData);function KalturaCategoryBaseFilter(){this.idEqual=null;this.idIn=null;this.parentIdEqual=null;this.parentIdIn=null;this.depthEqual=null;this.fullNameEqual=null;this.fullNameStartsWith=null;this.fullNameIn=null;this.fullIdsEqual=null;this.fullIdsStartsWith=null;this.fullIdsMatchOr=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.tagsLike=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.appearInListEqual=null;this.privacyEqual=null;this.privacyIn=null;this.inheritanceTypeEqual=null;this.inheritanceTypeIn=null;this.referenceIdEqual=null;this.referenceIdEmpty=null;this.contributionPolicyEqual=null;this.membersCountGreaterThanOrEqual=null;this.membersCountLessThanOrEqual=null;this.pendingMembersCountGreaterThanOrEqual=null;this.pendingMembersCountLessThanOrEqual=null;this.privacyContextEqual=null;this.statusEqual=null;this.statusIn=null;this.inheritedParentIdEqual=null;this.inheritedParentIdIn=null;this.partnerSortValueGreaterThanOrEqual=null;this.partnerSortValueLessThanOrEqual=null;}
KalturaCategoryBaseFilter.inheritsFrom(KalturaFilter);function KalturaCategoryEntryAdvancedFilter(){this.categoriesMatchOr=null;this.categoryEntryStatusIn=null;this.orderBy=null;this.categoryIdEqual=null;}
KalturaCategoryEntryAdvancedFilter.inheritsFrom(KalturaSearchItem);function KalturaCategoryEntryBaseFilter(){this.categoryIdEqual=null;this.categoryIdIn=null;this.entryIdEqual=null;this.entryIdIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.categoryFullIdsStartsWith=null;this.statusEqual=null;this.statusIn=null;}
KalturaCategoryEntryBaseFilter.inheritsFrom(KalturaFilter);function KalturaCategoryIdentifier(){this.identifier=null;}
KalturaCategoryIdentifier.inheritsFrom(KalturaObjectIdentifier);function KalturaCategoryUserAdvancedFilter(){this.memberIdEq=null;this.memberIdIn=null;this.memberPermissionsMatchOr=null;this.memberPermissionsMatchAnd=null;}
KalturaCategoryUserAdvancedFilter.inheritsFrom(KalturaSearchItem);function KalturaCategoryUserBaseFilter(){this.categoryIdEqual=null;this.categoryIdIn=null;this.userIdEqual=null;this.userIdIn=null;this.permissionLevelEqual=null;this.permissionLevelIn=null;this.statusEqual=null;this.statusIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.updateMethodEqual=null;this.updateMethodIn=null;this.categoryFullIdsStartsWith=null;this.categoryFullIdsEqual=null;this.permissionNamesMatchAnd=null;this.permissionNamesMatchOr=null;this.permissionNamesNotContains=null;}
KalturaCategoryUserBaseFilter.inheritsFrom(KalturaFilter);function KalturaCategoryUserProviderFilter(){this.userIdEqual=null;this.userIdIn=null;this.statusEqual=null;this.statusIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.updateMethodEqual=null;this.updateMethodIn=null;this.permissionNamesMatchAnd=null;this.permissionNamesMatchOr=null;}
KalturaCategoryUserProviderFilter.inheritsFrom(KalturaFilter);function KalturaClipAttributes(){this.offset=null;this.duration=null;}
KalturaClipAttributes.inheritsFrom(KalturaOperationAttributes);function KalturaCodeCuePoint(){this.code=null;this.description=null;this.endTime=null;this.duration=null;}
KalturaCodeCuePoint.inheritsFrom(KalturaCuePoint);function KalturaCompareCondition(){this.value=null;this.comparison=null;}
KalturaCompareCondition.inheritsFrom(KalturaCondition);function KalturaDataCenterContentResource(){}
KalturaDataCenterContentResource.inheritsFrom(KalturaContentResource);function KalturaConcatAttributes(){this.resource=null;}
KalturaConcatAttributes.inheritsFrom(KalturaOperationAttributes);function KalturaConcatJobData(){this.srcFiles=null;this.destFilePath=null;this.flavorAssetId=null;this.offset=null;this.duration=null;}
KalturaConcatJobData.inheritsFrom(KalturaJobData);function KalturaConfigurableDistributionJobProviderData(){this.fieldValues=null;}
KalturaConfigurableDistributionJobProviderData.inheritsFrom(KalturaDistributionJobProviderData);function KalturaConfigurableDistributionProfile(){this.fieldConfigArray=null;this.itemXpathsToExtend=null;}
KalturaConfigurableDistributionProfile.inheritsFrom(KalturaDistributionProfile);function KalturaContentDistributionSearchItem(){this.noDistributionProfiles=null;this.distributionProfileId=null;this.distributionSunStatus=null;this.entryDistributionFlag=null;this.entryDistributionStatus=null;this.hasEntryDistributionValidationErrors=null;this.entryDistributionValidationErrors=null;}
KalturaContentDistributionSearchItem.inheritsFrom(KalturaSearchItem);function KalturaControlPanelCommandBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.createdByIdEqual=null;this.typeEqual=null;this.typeIn=null;this.targetTypeEqual=null;this.targetTypeIn=null;this.statusEqual=null;this.statusIn=null;}
KalturaControlPanelCommandBaseFilter.inheritsFrom(KalturaFilter);function KalturaConvartableJobData(){this.srcFileSyncLocalPath=null;this.actualSrcFileSyncLocalPath=null;this.srcFileSyncRemoteUrl=null;this.srcFileSyncs=null;this.engineVersion=null;this.flavorParamsOutputId=null;this.flavorParamsOutput=null;this.mediaInfoId=null;this.currentOperationSet=null;this.currentOperationIndex=null;this.pluginData=null;}
KalturaConvartableJobData.inheritsFrom(KalturaJobData);function KalturaConversionProfileAssetParamsBaseFilter(){this.conversionProfileIdEqual=null;this.conversionProfileIdIn=null;this.assetParamsIdEqual=null;this.assetParamsIdIn=null;this.readyBehaviorEqual=null;this.readyBehaviorIn=null;this.originEqual=null;this.originIn=null;this.systemNameEqual=null;this.systemNameIn=null;}
KalturaConversionProfileAssetParamsBaseFilter.inheritsFrom(KalturaFilter);function KalturaConversionProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.statusEqual=null;this.statusIn=null;this.typeEqual=null;this.typeIn=null;this.nameEqual=null;this.systemNameEqual=null;this.systemNameIn=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.defaultEntryIdEqual=null;this.defaultEntryIdIn=null;}
KalturaConversionProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaConvertEntryFlavorsObjectTask(){this.flavorParamsIds=null;this.reconvert=null;}
KalturaConvertEntryFlavorsObjectTask.inheritsFrom(KalturaObjectTask);function KalturaConvertLiveSegmentJobData(){this.entryId=null;this.assetId=null;this.mediaServerIndex=null;this.fileIndex=null;this.srcFilePath=null;this.destFilePath=null;this.endTime=null;}
KalturaConvertLiveSegmentJobData.inheritsFrom(KalturaJobData);function KalturaConvertProfileJobData(){this.inputFileSyncLocalPath=null;this.thumbHeight=null;this.thumbBitrate=null;}
KalturaConvertProfileJobData.inheritsFrom(KalturaJobData);function KalturaCopyPartnerJobData(){this.fromPartnerId=null;this.toPartnerId=null;}
KalturaCopyPartnerJobData.inheritsFrom(KalturaJobData);function KalturaCountryRestriction(){this.countryRestrictionType=null;this.countryList=null;}
KalturaCountryRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaCuePointBaseFilter(){this.idEqual=null;this.idIn=null;this.cuePointTypeEqual=null;this.cuePointTypeIn=null;this.statusEqual=null;this.statusIn=null;this.entryIdEqual=null;this.entryIdIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.triggeredAtGreaterThanOrEqual=null;this.triggeredAtLessThanOrEqual=null;this.tagsLike=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.startTimeGreaterThanOrEqual=null;this.startTimeLessThanOrEqual=null;this.userIdEqual=null;this.userIdIn=null;this.partnerSortValueEqual=null;this.partnerSortValueIn=null;this.partnerSortValueGreaterThanOrEqual=null;this.partnerSortValueLessThanOrEqual=null;this.forceStopEqual=null;this.systemNameEqual=null;this.systemNameIn=null;}
KalturaCuePointBaseFilter.inheritsFrom(KalturaFilter);function KalturaDeleteEntryFlavorsObjectTask(){this.deleteType=null;this.flavorParamsIds=null;}
KalturaDeleteEntryFlavorsObjectTask.inheritsFrom(KalturaObjectTask);function KalturaDeleteEntryObjectTask(){}
KalturaDeleteEntryObjectTask.inheritsFrom(KalturaObjectTask);function KalturaDeleteFileJobData(){this.localFileSyncPath=null;}
KalturaDeleteFileJobData.inheritsFrom(KalturaJobData);function KalturaDeleteJobData(){this.filter=null;}
KalturaDeleteJobData.inheritsFrom(KalturaJobData);function KalturaDeleteLocalContentObjectTask(){}
KalturaDeleteLocalContentObjectTask.inheritsFrom(KalturaObjectTask);function KalturaDeliveryProfileAkamaiAppleHttpManifest(){this.supportClipping=null;}
KalturaDeliveryProfileAkamaiAppleHttpManifest.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileAkamaiHds(){this.supportClipping=null;}
KalturaDeliveryProfileAkamaiHds.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileAkamaiHttp(){this.useIntelliseek=null;}
KalturaDeliveryProfileAkamaiHttp.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.streamerTypeEqual=null;this.statusEqual=null;this.statusIn=null;}
KalturaDeliveryProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaDeliveryProfileGenericAppleHttp(){this.pattern=null;this.rendererClass=null;this.manifestRedirect=null;}
KalturaDeliveryProfileGenericAppleHttp.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileGenericHds(){this.pattern=null;this.rendererClass=null;}
KalturaDeliveryProfileGenericHds.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileGenericHttp(){this.pattern=null;}
KalturaDeliveryProfileGenericHttp.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileGenericSilverLight(){this.pattern=null;}
KalturaDeliveryProfileGenericSilverLight.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileLiveAppleHttp(){this.disableExtraAttributes=null;this.forceProxy=null;}
KalturaDeliveryProfileLiveAppleHttp.inheritsFrom(KalturaDeliveryProfile);function KalturaDeliveryProfileRtmp(){this.enforceRtmpe=null;this.prefix=null;}
KalturaDeliveryProfileRtmp.inheritsFrom(KalturaDeliveryProfile);function KalturaDirectoryRestriction(){this.directoryRestrictionType=null;}
KalturaDirectoryRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaDispatchEventNotificationObjectTask(){this.eventNotificationTemplateId=null;}
KalturaDispatchEventNotificationObjectTask.inheritsFrom(KalturaObjectTask);function KalturaDistributionJobData(){this.distributionProfileId=null;this.distributionProfile=null;this.entryDistributionId=null;this.entryDistribution=null;this.remoteId=null;this.providerType=null;this.providerData=null;this.results=null;this.sentData=null;this.mediaFiles=null;}
KalturaDistributionJobData.inheritsFrom(KalturaJobData);function KalturaDistributionProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;}
KalturaDistributionProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaDistributionProviderBaseFilter(){this.typeEqual=null;this.typeIn=null;}
KalturaDistributionProviderBaseFilter.inheritsFrom(KalturaFilter);function KalturaDistributionValidationErrorConditionNotMet(){this.conditionName=null;}
KalturaDistributionValidationErrorConditionNotMet.inheritsFrom(KalturaDistributionValidationError);function KalturaDistributionValidationErrorInvalidData(){this.fieldName=null;this.validationErrorType=null;this.validationErrorParam=null;}
KalturaDistributionValidationErrorInvalidData.inheritsFrom(KalturaDistributionValidationError);function KalturaDistributionValidationErrorMissingAsset(){this.data=null;}
KalturaDistributionValidationErrorMissingAsset.inheritsFrom(KalturaDistributionValidationError);function KalturaDistributionValidationErrorMissingFlavor(){this.flavorParamsId=null;}
KalturaDistributionValidationErrorMissingFlavor.inheritsFrom(KalturaDistributionValidationError);function KalturaDistributionValidationErrorMissingMetadata(){this.fieldName=null;}
KalturaDistributionValidationErrorMissingMetadata.inheritsFrom(KalturaDistributionValidationError);function KalturaDistributionValidationErrorMissingThumbnail(){this.dimensions=null;}
KalturaDistributionValidationErrorMissingThumbnail.inheritsFrom(KalturaDistributionValidationError);function KalturaDrmDeviceBaseFilter(){this.partnerIdEqual=null;this.partnerIdIn=null;this.deviceIdLike=null;this.providerEqual=null;this.providerIn=null;}
KalturaDrmDeviceBaseFilter.inheritsFrom(KalturaFilter);function KalturaDrmPolicyBaseFilter(){this.partnerIdEqual=null;this.partnerIdIn=null;this.nameLike=null;this.systemNameLike=null;this.providerEqual=null;this.providerIn=null;this.statusEqual=null;this.statusIn=null;this.scenarioEqual=null;this.scenarioIn=null;}
KalturaDrmPolicyBaseFilter.inheritsFrom(KalturaFilter);function KalturaDrmProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.nameLike=null;this.providerEqual=null;this.providerIn=null;this.statusEqual=null;this.statusIn=null;}
KalturaDrmProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaDropFolderBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.nameLike=null;this.typeEqual=null;this.typeIn=null;this.statusEqual=null;this.statusIn=null;this.conversionProfileIdEqual=null;this.conversionProfileIdIn=null;this.dcEqual=null;this.dcIn=null;this.pathEqual=null;this.pathLike=null;this.fileHandlerTypeEqual=null;this.fileHandlerTypeIn=null;this.fileNamePatternsLike=null;this.fileNamePatternsMultiLikeOr=null;this.fileNamePatternsMultiLikeAnd=null;this.tagsLike=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.errorCodeEqual=null;this.errorCodeIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaDropFolderBaseFilter.inheritsFrom(KalturaFilter);function KalturaDropFolderContentFileHandlerConfig(){this.contentMatchPolicy=null;this.slugRegex=null;}
KalturaDropFolderContentFileHandlerConfig.inheritsFrom(KalturaDropFolderFileHandlerConfig);function KalturaDropFolderContentProcessorJobData(){this.dropFolderId=null;this.dropFolderFileIds=null;this.parsedSlug=null;this.contentMatchPolicy=null;this.conversionProfileId=null;this.parsedUserId=null;}
KalturaDropFolderContentProcessorJobData.inheritsFrom(KalturaJobData);function KalturaDropFolderFileBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.dropFolderIdEqual=null;this.dropFolderIdIn=null;this.fileNameEqual=null;this.fileNameIn=null;this.fileNameLike=null;this.statusEqual=null;this.statusIn=null;this.statusNotIn=null;this.parsedSlugEqual=null;this.parsedSlugIn=null;this.parsedSlugLike=null;this.parsedFlavorEqual=null;this.parsedFlavorIn=null;this.parsedFlavorLike=null;this.leadDropFolderFileIdEqual=null;this.deletedDropFolderFileIdEqual=null;this.entryIdEqual=null;this.errorCodeEqual=null;this.errorCodeIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaDropFolderFileBaseFilter.inheritsFrom(KalturaFilter);function KalturaDropFolderXmlBulkUploadFileHandlerConfig(){}
KalturaDropFolderXmlBulkUploadFileHandlerConfig.inheritsFrom(KalturaDropFolderFileHandlerConfig);function KalturaCategoryUserFilter(){this.categoryDirectMembers=null;this.freeText=null;}
KalturaCategoryUserFilter.inheritsFrom(KalturaCategoryUserBaseFilter);function KalturaEmailNotificationCategoryRecipientJobData(){this.categoryUserFilter=null;}
KalturaEmailNotificationCategoryRecipientJobData.inheritsFrom(KalturaEmailNotificationRecipientJobData);function KalturaEmailNotificationCategoryRecipientProvider(){this.categoryId=null;this.categoryUserFilter=null;}
KalturaEmailNotificationCategoryRecipientProvider.inheritsFrom(KalturaEmailNotificationRecipientProvider);function KalturaEmailNotificationParameter(){}
KalturaEmailNotificationParameter.inheritsFrom(KalturaEventNotificationParameter);function KalturaEmailNotificationStaticRecipientJobData(){this.emailRecipients=null;}
KalturaEmailNotificationStaticRecipientJobData.inheritsFrom(KalturaEmailNotificationRecipientJobData);function KalturaEmailNotificationStaticRecipientProvider(){this.emailRecipients=null;}
KalturaEmailNotificationStaticRecipientProvider.inheritsFrom(KalturaEmailNotificationRecipientProvider);function KalturaEmailNotificationTemplate(){this.format=null;this.subject=null;this.body=null;this.fromEmail=null;this.fromName=null;this.to=null;this.cc=null;this.bcc=null;this.replyTo=null;this.priority=null;this.confirmReadingTo=null;this.hostname=null;this.messageID=null;this.customHeaders=null;}
KalturaEmailNotificationTemplate.inheritsFrom(KalturaEventNotificationTemplate);function KalturaUserBaseFilter(){this.partnerIdEqual=null;this.screenNameLike=null;this.screenNameStartsWith=null;this.emailLike=null;this.emailStartsWith=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.statusEqual=null;this.statusIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.firstNameStartsWith=null;this.lastNameStartsWith=null;this.isAdminEqual=null;}
KalturaUserBaseFilter.inheritsFrom(KalturaFilter);function KalturaUserFilter(){this.idOrScreenNameStartsWith=null;this.idEqual=null;this.idIn=null;this.loginEnabledEqual=null;this.roleIdEqual=null;this.roleIdsEqual=null;this.roleIdsIn=null;this.firstNameOrLastNameStartsWith=null;this.permissionNamesMultiLikeOr=null;this.permissionNamesMultiLikeAnd=null;}
KalturaUserFilter.inheritsFrom(KalturaUserBaseFilter);function KalturaEmailNotificationUserRecipientJobData(){this.filter=null;}
KalturaEmailNotificationUserRecipientJobData.inheritsFrom(KalturaEmailNotificationRecipientJobData);function KalturaEmailNotificationUserRecipientProvider(){this.filter=null;}
KalturaEmailNotificationUserRecipientProvider.inheritsFrom(KalturaEmailNotificationRecipientProvider);function KalturaEntryContext(){this.entryId=null;this.followEntryRedirect=null;}
KalturaEntryContext.inheritsFrom(KalturaContext);function KalturaEntryContextDataParams(){this.flavorAssetId=null;this.flavorTags=null;this.streamerType=null;this.mediaProtocol=null;}
KalturaEntryContextDataParams.inheritsFrom(KalturaAccessControlScope);function KalturaEntryContextDataResult(){this.isSiteRestricted=null;this.isCountryRestricted=null;this.isSessionRestricted=null;this.isIpAddressRestricted=null;this.isUserAgentRestricted=null;this.previewLength=null;this.isScheduledNow=null;this.isAdmin=null;this.streamerType=null;this.mediaProtocol=null;this.storageProfilesXML=null;this.accessControlMessages=null;this.accessControlActions=null;this.flavorAssets=null;}
KalturaEntryContextDataResult.inheritsFrom(KalturaContextDataResult);function KalturaEntryDistributionBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.submittedAtGreaterThanOrEqual=null;this.submittedAtLessThanOrEqual=null;this.entryIdEqual=null;this.entryIdIn=null;this.distributionProfileIdEqual=null;this.distributionProfileIdIn=null;this.statusEqual=null;this.statusIn=null;this.dirtyStatusEqual=null;this.dirtyStatusIn=null;this.sunriseGreaterThanOrEqual=null;this.sunriseLessThanOrEqual=null;this.sunsetGreaterThanOrEqual=null;this.sunsetLessThanOrEqual=null;}
KalturaEntryDistributionBaseFilter.inheritsFrom(KalturaFilter);function KalturaEntryIdentifier(){this.identifier=null;}
KalturaEntryIdentifier.inheritsFrom(KalturaObjectIdentifier);function KalturaEntryLiveStats(){this.entryId=null;this.peakAudience=null;}
KalturaEntryLiveStats.inheritsFrom(KalturaLiveStats);function KalturaEventCuePoint(){this.eventType=null;}
KalturaEventCuePoint.inheritsFrom(KalturaCuePoint);function KalturaBooleanField(){}
KalturaBooleanField.inheritsFrom(KalturaBooleanValue);function KalturaEventFieldCondition(){this.field=null;}
KalturaEventFieldCondition.inheritsFrom(KalturaCondition);function KalturaEventNotificationArrayParameter(){this.values=null;this.allowedValues=null;}
KalturaEventNotificationArrayParameter.inheritsFrom(KalturaEventNotificationParameter);function KalturaEventNotificationDispatchJobData(){this.templateId=null;this.contentParameters=null;}
KalturaEventNotificationDispatchJobData.inheritsFrom(KalturaJobData);function KalturaEventNotificationScope(){this.objectId=null;this.scopeObjectType=null;}
KalturaEventNotificationScope.inheritsFrom(KalturaScope);function KalturaEventNotificationTemplateBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.typeEqual=null;this.typeIn=null;this.statusEqual=null;this.statusIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaEventNotificationTemplateBaseFilter.inheritsFrom(KalturaFilter);function KalturaEventObjectChangedCondition(){this.modifiedColumns=null;}
KalturaEventObjectChangedCondition.inheritsFrom(KalturaCondition);function KalturaExecuteMetadataXsltObjectTask(){this.metadataProfileId=null;this.metadataObjectType=null;this.xslt=null;}
KalturaExecuteMetadataXsltObjectTask.inheritsFrom(KalturaObjectTask);function KalturaFileAssetBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.fileAssetObjectTypeEqual=null;this.objectIdEqual=null;this.objectIdIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;}
KalturaFileAssetBaseFilter.inheritsFrom(KalturaFilter);function KalturaFileSyncBaseFilter(){this.partnerIdEqual=null;this.fileObjectTypeEqual=null;this.fileObjectTypeIn=null;this.objectIdEqual=null;this.objectIdIn=null;this.versionEqual=null;this.versionIn=null;this.objectSubTypeEqual=null;this.objectSubTypeIn=null;this.dcEqual=null;this.dcIn=null;this.originalEqual=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.readyAtGreaterThanOrEqual=null;this.readyAtLessThanOrEqual=null;this.syncTimeGreaterThanOrEqual=null;this.syncTimeLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;this.fileTypeEqual=null;this.fileTypeIn=null;this.linkedIdEqual=null;this.linkCountGreaterThanOrEqual=null;this.linkCountLessThanOrEqual=null;this.fileSizeGreaterThanOrEqual=null;this.fileSizeLessThanOrEqual=null;}
KalturaFileSyncBaseFilter.inheritsFrom(KalturaFilter);function KalturaFileSyncImportJobData(){this.sourceUrl=null;this.filesyncId=null;this.tmpFilePath=null;this.destFilePath=null;this.fileSize=null;}
KalturaFileSyncImportJobData.inheritsFrom(KalturaJobData);function KalturaFlattenJobData(){}
KalturaFlattenJobData.inheritsFrom(KalturaJobData);function KalturaGenericDistributionJobProviderData(){this.xml=null;this.resultParseData=null;this.resultParserType=null;}
KalturaGenericDistributionJobProviderData.inheritsFrom(KalturaDistributionJobProviderData);function KalturaGenericDistributionProfile(){this.genericProviderId=null;this.submitAction=null;this.updateAction=null;this.deleteAction=null;this.fetchReportAction=null;this.updateRequiredEntryFields=null;this.updateRequiredMetadataXPaths=null;}
KalturaGenericDistributionProfile.inheritsFrom(KalturaDistributionProfile);function KalturaGenericDistributionProviderActionBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.genericDistributionProviderIdEqual=null;this.genericDistributionProviderIdIn=null;this.actionEqual=null;this.actionIn=null;}
KalturaGenericDistributionProviderActionBaseFilter.inheritsFrom(KalturaFilter);function KalturaGenericSyndicationFeed(){this.feedDescription=null;this.feedLandingPage=null;}
KalturaGenericSyndicationFeed.inheritsFrom(KalturaBaseSyndicationFeed);function KalturaGoogleVideoSyndicationFeed(){this.adultContent=null;}
KalturaGoogleVideoSyndicationFeed.inheritsFrom(KalturaBaseSyndicationFeed);function KalturaHttpNotificationDataFields(){}
KalturaHttpNotificationDataFields.inheritsFrom(KalturaHttpNotificationData);function KalturaHttpNotificationDataText(){this.content=null;}
KalturaHttpNotificationDataText.inheritsFrom(KalturaHttpNotificationData);function KalturaHttpNotificationObjectData(){this.apiObjectType=null;this.format=null;this.ignoreNull=null;this.code=null;}
KalturaHttpNotificationObjectData.inheritsFrom(KalturaHttpNotificationData);function KalturaHttpNotificationTemplate(){this.url=null;this.method=null;this.data=null;this.timeout=null;this.connectTimeout=null;this.username=null;this.password=null;this.authenticationMethod=null;this.sslVersion=null;this.sslCertificate=null;this.sslCertificateType=null;this.sslCertificatePassword=null;this.sslEngine=null;this.sslEngineDefault=null;this.sslKeyType=null;this.sslKey=null;this.sslKeyPassword=null;this.customHeaders=null;}
KalturaHttpNotificationTemplate.inheritsFrom(KalturaEventNotificationTemplate);function KalturaITunesSyndicationFeed(){this.feedDescription=null;this.language=null;this.feedLandingPage=null;this.ownerName=null;this.ownerEmail=null;this.feedImageUrl=null;this.category=null;this.adultContent=null;this.feedAuthor=null;this.enforceOrder=null;}
KalturaITunesSyndicationFeed.inheritsFrom(KalturaBaseSyndicationFeed);function KalturaImportJobData(){this.srcFileUrl=null;this.destFileLocalPath=null;this.flavorAssetId=null;this.fileSize=null;}
KalturaImportJobData.inheritsFrom(KalturaJobData);function KalturaImportMetadataJobData(){this.srcFileUrl=null;this.destFileLocalPath=null;this.metadataId=null;}
KalturaImportMetadataJobData.inheritsFrom(KalturaJobData);function KalturaIndexAdvancedFilter(){this.indexIdGreaterThan=null;}
KalturaIndexAdvancedFilter.inheritsFrom(KalturaSearchItem);function KalturaIndexJobData(){this.filter=null;this.lastIndexId=null;this.shouldUpdate=null;}
KalturaIndexJobData.inheritsFrom(KalturaJobData);function KalturaIndexTagsByPrivacyContextJobData(){this.changedCategoryId=null;this.deletedPrivacyContexts=null;this.addedPrivacyContexts=null;}
KalturaIndexTagsByPrivacyContextJobData.inheritsFrom(KalturaJobData);function KalturaIpAddressRestriction(){this.ipAddressRestrictionType=null;this.ipAddressList=null;}
KalturaIpAddressRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaKontikiStorageProfile(){this.serviceToken=null;}
KalturaKontikiStorageProfile.inheritsFrom(KalturaStorageProfile);function KalturaLimitFlavorsRestriction(){this.limitFlavorsRestrictionType=null;this.flavorParamsIds=null;}
KalturaLimitFlavorsRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaLiveChannelSegmentBaseFilter(){this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;this.channelIdEqual=null;this.channelIdIn=null;this.startTimeGreaterThanOrEqual=null;this.startTimeLessThanOrEqual=null;}
KalturaLiveChannelSegmentBaseFilter.inheritsFrom(KalturaFilter);function KalturaLiveReportExportJobData(){this.timeReference=null;this.timeZoneOffset=null;this.entryIds=null;this.outputPath=null;this.recipientEmail=null;}
KalturaLiveReportExportJobData.inheritsFrom(KalturaJobData);function KalturaLiveStreamPushPublishRTMPConfiguration(){this.userId=null;this.password=null;this.streamName=null;this.applicationName=null;}
KalturaLiveStreamPushPublishRTMPConfiguration.inheritsFrom(KalturaLiveStreamPushPublishConfiguration);function KalturaMailJobData(){this.mailType=null;this.mailPriority=null;this.status=null;this.recipientName=null;this.recipientEmail=null;this.recipientId=null;this.fromName=null;this.fromEmail=null;this.bodyParams=null;this.subjectParams=null;this.templatePath=null;this.language=null;this.campaignId=null;this.minSendDate=null;this.isHtml=null;this.separator=null;}
KalturaMailJobData.inheritsFrom(KalturaJobData);function KalturaMatchCondition(){this.values=null;}
KalturaMatchCondition.inheritsFrom(KalturaCondition);function KalturaMediaInfoBaseFilter(){this.flavorAssetIdEqual=null;}
KalturaMediaInfoBaseFilter.inheritsFrom(KalturaFilter);function KalturaMediaServerBaseFilter(){this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaMediaServerBaseFilter.inheritsFrom(KalturaFilter);function KalturaMetadataBaseFilter(){this.partnerIdEqual=null;this.metadataProfileIdEqual=null;this.metadataProfileVersionEqual=null;this.metadataProfileVersionGreaterThanOrEqual=null;this.metadataProfileVersionLessThanOrEqual=null;this.metadataObjectTypeEqual=null;this.objectIdEqual=null;this.objectIdIn=null;this.versionEqual=null;this.versionGreaterThanOrEqual=null;this.versionLessThanOrEqual=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;}
KalturaMetadataBaseFilter.inheritsFrom(KalturaFilter);function KalturaMetadataProfileBaseFilter(){this.idEqual=null;this.partnerIdEqual=null;this.metadataObjectTypeEqual=null;this.metadataObjectTypeIn=null;this.versionEqual=null;this.nameEqual=null;this.systemNameEqual=null;this.systemNameIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.statusEqual=null;this.statusIn=null;this.createModeEqual=null;this.createModeNotEqual=null;this.createModeIn=null;this.createModeNotIn=null;}
KalturaMetadataProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaModifyCategoriesObjectTask(){this.addRemoveType=null;this.categoryIds=null;}
KalturaModifyCategoriesObjectTask.inheritsFrom(KalturaObjectTask);function KalturaMoveCategoryEntriesJobData(){this.srcCategoryId=null;this.destCategoryId=null;this.lastMovedCategoryId=null;this.lastMovedCategoryPageIndex=null;this.lastMovedCategoryEntryPageIndex=null;this.moveFromChildren=null;this.copyOnly=null;this.destCategoryFullIds=null;}
KalturaMoveCategoryEntriesJobData.inheritsFrom(KalturaJobData);function KalturaNotificationJobData(){this.userId=null;this.type=null;this.typeAsString=null;this.objectId=null;this.status=null;this.data=null;this.numberOfAttempts=null;this.notificationResult=null;this.objType=null;}
KalturaNotificationJobData.inheritsFrom(KalturaJobData);function KalturaParseCaptionAssetJobData(){this.captionAssetId=null;}
KalturaParseCaptionAssetJobData.inheritsFrom(KalturaJobData);function KalturaPartnerBaseFilter(){this.idEqual=null;this.idIn=null;this.idNotIn=null;this.nameLike=null;this.nameMultiLikeOr=null;this.nameMultiLikeAnd=null;this.nameEqual=null;this.statusEqual=null;this.statusIn=null;this.partnerPackageEqual=null;this.partnerPackageGreaterThanOrEqual=null;this.partnerPackageLessThanOrEqual=null;this.partnerGroupTypeEqual=null;this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike=null;}
KalturaPartnerBaseFilter.inheritsFrom(KalturaFilter);function KalturaPermissionBaseFilter(){this.idEqual=null;this.idIn=null;this.typeEqual=null;this.typeIn=null;this.nameEqual=null;this.nameIn=null;this.friendlyNameLike=null;this.descriptionLike=null;this.statusEqual=null;this.statusIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.dependsOnPermissionNamesMultiLikeOr=null;this.dependsOnPermissionNamesMultiLikeAnd=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaPermissionBaseFilter.inheritsFrom(KalturaFilter);function KalturaPermissionItemBaseFilter(){this.idEqual=null;this.idIn=null;this.typeEqual=null;this.typeIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaPermissionItemBaseFilter.inheritsFrom(KalturaFilter);function KalturaPlayReadyCopyRight(){this.copyCount=null;this.copyEnablers=null;}
KalturaPlayReadyCopyRight.inheritsFrom(KalturaPlayReadyRight);function KalturaPlayReadyPlayRight(){this.analogVideoOPL=null;this.analogVideoOutputProtectionList=null;this.compressedDigitalAudioOPL=null;this.compressedDigitalVideoOPL=null;this.digitalAudioOutputProtectionList=null;this.uncompressedDigitalAudioOPL=null;this.uncompressedDigitalVideoOPL=null;this.firstPlayExpiration=null;this.playEnablers=null;}
KalturaPlayReadyPlayRight.inheritsFrom(KalturaPlayReadyRight);function KalturaPlayReadyProfile(){this.keySeed=null;}
KalturaPlayReadyProfile.inheritsFrom(KalturaDrmProfile);function KalturaProvisionJobData(){this.streamID=null;this.backupStreamID=null;this.rtmp=null;this.encoderIP=null;this.backupEncoderIP=null;this.encoderPassword=null;this.encoderUsername=null;this.endDate=null;this.returnVal=null;this.mediaType=null;this.primaryBroadcastingUrl=null;this.secondaryBroadcastingUrl=null;this.streamName=null;}
KalturaProvisionJobData.inheritsFrom(KalturaJobData);function KalturaRemoteDropFolder(){}
KalturaRemoteDropFolder.inheritsFrom(KalturaDropFolder);function KalturaReportBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.systemNameEqual=null;this.systemNameIn=null;}
KalturaReportBaseFilter.inheritsFrom(KalturaFilter);function KalturaReportInputFilter(){this.keywords=null;this.searchInTags=null;this.searchInAdminTags=null;this.categories=null;this.timeZoneOffset=null;this.interval=null;}
KalturaReportInputFilter.inheritsFrom(KalturaReportInputBaseFilter);function KalturaScheduledTaskJobData(){this.maxResults=null;this.resultsFilePath=null;this.referenceTime=null;}
KalturaScheduledTaskJobData.inheritsFrom(KalturaJobData);function KalturaScheduledTaskProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.statusEqual=null;this.statusIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.lastExecutionStartedAtGreaterThanOrEqual=null;this.lastExecutionStartedAtLessThanOrEqual=null;}
KalturaScheduledTaskProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaSearchCondition(){this.field=null;this.value=null;}
KalturaSearchCondition.inheritsFrom(KalturaSearchItem);function KalturaSearchOperator(){this.type=null;this.items=null;}
KalturaSearchOperator.inheritsFrom(KalturaSearchItem);function KalturaSessionRestriction(){}
KalturaSessionRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaShortLinkBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.expiresAtGreaterThanOrEqual=null;this.expiresAtLessThanOrEqual=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.userIdEqual=null;this.userIdIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.statusEqual=null;this.statusIn=null;}
KalturaShortLinkBaseFilter.inheritsFrom(KalturaFilter);function KalturaSiteRestriction(){this.siteRestrictionType=null;this.siteList=null;}
KalturaSiteRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaStorageAddAction(){}
KalturaStorageAddAction.inheritsFrom(KalturaRuleAction);function KalturaStorageJobData(){this.serverUrl=null;this.serverUsername=null;this.serverPassword=null;this.ftpPassiveMode=null;this.srcFileSyncLocalPath=null;this.srcFileSyncId=null;this.destFileSyncStoredPath=null;}
KalturaStorageJobData.inheritsFrom(KalturaJobData);function KalturaStorageProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.statusEqual=null;this.statusIn=null;this.protocolEqual=null;this.protocolIn=null;}
KalturaStorageProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaSyncCategoryPrivacyContextJobData(){this.categoryId=null;this.lastUpdatedCategoryEntryCreatedAt=null;this.lastUpdatedCategoryCreatedAt=null;}
KalturaSyncCategoryPrivacyContextJobData.inheritsFrom(KalturaJobData);function KalturaSyndicationDistributionProfile(){this.xsl=null;this.feedId=null;}
KalturaSyndicationDistributionProfile.inheritsFrom(KalturaDistributionProfile);function KalturaSyndicationDistributionProvider(){}
KalturaSyndicationDistributionProvider.inheritsFrom(KalturaDistributionProvider);function KalturaTagFilter(){this.objectTypeEqual=null;this.tagEqual=null;this.tagStartsWith=null;this.instanceCountEqual=null;this.instanceCountIn=null;}
KalturaTagFilter.inheritsFrom(KalturaFilter);function KalturaThumbCuePoint(){this.assetId=null;this.description=null;this.title=null;this.subType=null;}
KalturaThumbCuePoint.inheritsFrom(KalturaCuePoint);function KalturaTransformMetadataJobData(){this.srcXslPath=null;this.srcVersion=null;this.destVersion=null;this.destXsdPath=null;this.metadataProfileId=null;}
KalturaTransformMetadataJobData.inheritsFrom(KalturaJobData);function KalturaTubeMogulSyndicationFeed(){this.category=null;}
KalturaTubeMogulSyndicationFeed.inheritsFrom(KalturaBaseSyndicationFeed);function KalturaUiConfBaseFilter(){this.idEqual=null;this.idIn=null;this.nameLike=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.objTypeEqual=null;this.objTypeIn=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.creationModeEqual=null;this.creationModeIn=null;this.versionEqual=null;this.versionMultiLikeOr=null;this.versionMultiLikeAnd=null;this.partnerTagsMultiLikeOr=null;this.partnerTagsMultiLikeAnd=null;}
KalturaUiConfBaseFilter.inheritsFrom(KalturaFilter);function KalturaUploadTokenBaseFilter(){this.idEqual=null;this.idIn=null;this.userIdEqual=null;this.statusEqual=null;this.statusIn=null;this.fileNameEqual=null;this.fileSizeEqual=null;}
KalturaUploadTokenBaseFilter.inheritsFrom(KalturaFilter);function KalturaUrlRecognizerAkamaiG2O(){this.headerData=null;this.headerSign=null;this.timeout=null;this.salt=null;}
KalturaUrlRecognizerAkamaiG2O.inheritsFrom(KalturaUrlRecognizer);function KalturaUrlTokenizerAkamaiHttp(){this.paramName=null;this.rootDir=null;}
KalturaUrlTokenizerAkamaiHttp.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerAkamaiRtmp(){this.profile=null;this.type=null;this.aifp=null;this.usePrefix=null;}
KalturaUrlTokenizerAkamaiRtmp.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerAkamaiRtsp(){this.host=null;this.cpcode=null;}
KalturaUrlTokenizerAkamaiRtsp.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerAkamaiSecureHd(){this.paramName=null;this.aclPostfix=null;this.customPostfixes=null;this.useCookieHosts=null;this.rootDir=null;}
KalturaUrlTokenizerAkamaiSecureHd.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerBitGravity(){this.hashPatternRegex=null;}
KalturaUrlTokenizerBitGravity.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerLevel3(){this.paramName=null;this.expiryName=null;this.gen=null;}
KalturaUrlTokenizerLevel3.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerLimeLight(){}
KalturaUrlTokenizerLimeLight.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerUplynk(){this.accountId=null;}
KalturaUrlTokenizerUplynk.inheritsFrom(KalturaUrlTokenizer);function KalturaUrlTokenizerVelocix(){this.hdsPaths=null;this.paramName=null;this.authPrefix=null;}
KalturaUrlTokenizerVelocix.inheritsFrom(KalturaUrlTokenizer);function KalturaUserAgentRestriction(){this.userAgentRestrictionType=null;this.userAgentRegexList=null;}
KalturaUserAgentRestriction.inheritsFrom(KalturaBaseRestriction);function KalturaUserLoginDataBaseFilter(){this.loginEmailEqual=null;}
KalturaUserLoginDataBaseFilter.inheritsFrom(KalturaFilter);function KalturaUserRoleBaseFilter(){this.idEqual=null;this.idIn=null;this.nameEqual=null;this.nameIn=null;this.systemNameEqual=null;this.systemNameIn=null;this.descriptionLike=null;this.statusEqual=null;this.statusIn=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.tagsMultiLikeOr=null;this.tagsMultiLikeAnd=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;}
KalturaUserRoleBaseFilter.inheritsFrom(KalturaFilter);function KalturaUserRoleCondition(){this.roleIds=null;}
KalturaUserRoleCondition.inheritsFrom(KalturaCondition);function KalturaVarPartnerUsageTotalItem(){}
KalturaVarPartnerUsageTotalItem.inheritsFrom(KalturaVarPartnerUsageItem);function KalturaVirusScanJobData(){this.srcFilePath=null;this.flavorAssetId=null;this.scanResult=null;this.virusFoundAction=null;}
KalturaVirusScanJobData.inheritsFrom(KalturaJobData);function KalturaVirusScanProfileBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.nameEqual=null;this.nameLike=null;this.statusEqual=null;this.statusIn=null;this.engineTypeEqual=null;this.engineTypeIn=null;}
KalturaVirusScanProfileBaseFilter.inheritsFrom(KalturaFilter);function KalturaWebexDropFolder(){this.webexUserId=null;this.webexPassword=null;this.webexSiteId=null;this.webexPartnerId=null;this.webexServiceUrl=null;this.webexHostIdMetadataFieldName=null;}
KalturaWebexDropFolder.inheritsFrom(KalturaDropFolder);function KalturaWebexDropFolderFile(){this.recordingId=null;this.webexHostId=null;this.description=null;this.confId=null;this.contentUrl=null;}
KalturaWebexDropFolderFile.inheritsFrom(KalturaDropFolderFile);function KalturaWidevineProfile(){this.key=null;this.iv=null;this.owner=null;this.portal=null;this.maxGop=null;this.regServerHost=null;}
KalturaWidevineProfile.inheritsFrom(KalturaDrmProfile);function KalturaWidevineRepositorySyncJobData(){this.syncMode=null;this.wvAssetIds=null;this.modifiedAttributes=null;this.monitorSyncCompletion=null;}
KalturaWidevineRepositorySyncJobData.inheritsFrom(KalturaJobData);function KalturaWidgetBaseFilter(){this.idEqual=null;this.idIn=null;this.sourceWidgetIdEqual=null;this.rootWidgetIdEqual=null;this.partnerIdEqual=null;this.entryIdEqual=null;this.uiConfIdEqual=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.partnerDataLike=null;}
KalturaWidgetBaseFilter.inheritsFrom(KalturaFilter);function KalturaYahooSyndicationFeed(){this.category=null;this.adultContent=null;this.feedDescription=null;this.feedLandingPage=null;}
KalturaYahooSyndicationFeed.inheritsFrom(KalturaBaseSyndicationFeed);function KalturaAccessControlFilter(){}
KalturaAccessControlFilter.inheritsFrom(KalturaAccessControlBaseFilter);function KalturaAccessControlProfileFilter(){}
KalturaAccessControlProfileFilter.inheritsFrom(KalturaAccessControlProfileBaseFilter);function KalturaAkamaiProvisionJobData(){this.wsdlUsername=null;this.wsdlPassword=null;this.cpcode=null;this.emailId=null;this.primaryContact=null;this.secondaryContact=null;}
KalturaAkamaiProvisionJobData.inheritsFrom(KalturaProvisionJobData);function KalturaAkamaiUniversalProvisionJobData(){this.streamId=null;this.systemUserName=null;this.systemPassword=null;this.domainName=null;this.dvrEnabled=null;this.dvrWindow=null;this.primaryContact=null;this.secondaryContact=null;this.streamType=null;this.notificationEmail=null;}
KalturaAkamaiUniversalProvisionJobData.inheritsFrom(KalturaProvisionJobData);function KalturaAssetFilter(){}
KalturaAssetFilter.inheritsFrom(KalturaAssetBaseFilter);function KalturaAssetParamsFilter(){}
KalturaAssetParamsFilter.inheritsFrom(KalturaAssetParamsBaseFilter);function KalturaAssetResource(){this.assetId=null;}
KalturaAssetResource.inheritsFrom(KalturaContentResource);function KalturaAuditTrailFilter(){}
KalturaAuditTrailFilter.inheritsFrom(KalturaAuditTrailBaseFilter);function KalturaBaseSyndicationFeedFilter(){}
KalturaBaseSyndicationFeedFilter.inheritsFrom(KalturaBaseSyndicationFeedBaseFilter);function KalturaBatchJobFilter(){}
KalturaBatchJobFilter.inheritsFrom(KalturaBatchJobBaseFilter);function KalturaBulkUploadCsvJobData(){this.csvVersion=null;this.columns=null;}
KalturaBulkUploadCsvJobData.inheritsFrom(KalturaBulkUploadJobData);function KalturaBulkUploadFilter(){}
KalturaBulkUploadFilter.inheritsFrom(KalturaBulkUploadBaseFilter);function KalturaBulkUploadFilterJobData(){this.filter=null;this.templateObject=null;}
KalturaBulkUploadFilterJobData.inheritsFrom(KalturaBulkUploadJobData);function KalturaBulkUploadXmlJobData(){}
KalturaBulkUploadXmlJobData.inheritsFrom(KalturaBulkUploadJobData);function KalturaCategoryEntryFilter(){}
KalturaCategoryEntryFilter.inheritsFrom(KalturaCategoryEntryBaseFilter);function KalturaCategoryFilter(){this.freeText=null;this.membersIn=null;this.nameOrReferenceIdStartsWith=null;this.managerEqual=null;this.memberEqual=null;this.fullNameStartsWithIn=null;this.ancestorIdIn=null;this.idOrInheritedParentIdIn=null;}
KalturaCategoryFilter.inheritsFrom(KalturaCategoryBaseFilter);function KalturaCompareMetadataCondition(){this.xPath=null;this.profileId=null;this.profileSystemName=null;}
KalturaCompareMetadataCondition.inheritsFrom(KalturaCompareCondition);function KalturaControlPanelCommandFilter(){}
KalturaControlPanelCommandFilter.inheritsFrom(KalturaControlPanelCommandBaseFilter);function KalturaConversionProfileFilter(){}
KalturaConversionProfileFilter.inheritsFrom(KalturaConversionProfileBaseFilter);function KalturaConversionProfileAssetParamsFilter(){this.conversionProfileIdFilter=null;this.assetParamsIdFilter=null;}
KalturaConversionProfileAssetParamsFilter.inheritsFrom(KalturaConversionProfileAssetParamsBaseFilter);function KalturaConvertCollectionJobData(){this.destDirLocalPath=null;this.destDirRemoteUrl=null;this.destFileName=null;this.inputXmlLocalPath=null;this.inputXmlRemoteUrl=null;this.commandLinesStr=null;this.flavors=null;}
KalturaConvertCollectionJobData.inheritsFrom(KalturaConvartableJobData);function KalturaConvertJobData(){this.destFileSyncLocalPath=null;this.destFileSyncRemoteUrl=null;this.logFileSyncLocalPath=null;this.logFileSyncRemoteUrl=null;this.flavorAssetId=null;this.remoteMediaId=null;this.customData=null;this.extraDestFileSyncs=null;this.engineMessage=null;}
KalturaConvertJobData.inheritsFrom(KalturaConvartableJobData);function KalturaCountryCondition(){this.geoCoderType=null;}
KalturaCountryCondition.inheritsFrom(KalturaMatchCondition);function KalturaCuePointFilter(){}
KalturaCuePointFilter.inheritsFrom(KalturaCuePointBaseFilter);function KalturaDeliveryProfileFilter(){}
KalturaDeliveryProfileFilter.inheritsFrom(KalturaDeliveryProfileBaseFilter);function KalturaDeliveryProfileGenericRtmp(){this.pattern=null;this.rendererClass=null;}
KalturaDeliveryProfileGenericRtmp.inheritsFrom(KalturaDeliveryProfileRtmp);function KalturaDistributionDeleteJobData(){}
KalturaDistributionDeleteJobData.inheritsFrom(KalturaDistributionJobData);function KalturaDistributionFetchReportJobData(){this.plays=null;this.views=null;}
KalturaDistributionFetchReportJobData.inheritsFrom(KalturaDistributionJobData);function KalturaDistributionProfileFilter(){}
KalturaDistributionProfileFilter.inheritsFrom(KalturaDistributionProfileBaseFilter);function KalturaDistributionProviderFilter(){}
KalturaDistributionProviderFilter.inheritsFrom(KalturaDistributionProviderBaseFilter);function KalturaDistributionSubmitJobData(){}
KalturaDistributionSubmitJobData.inheritsFrom(KalturaDistributionJobData);function KalturaDistributionUpdateJobData(){}
KalturaDistributionUpdateJobData.inheritsFrom(KalturaDistributionJobData);function KalturaDistributionValidationErrorInvalidMetadata(){this.metadataProfileId=null;}
KalturaDistributionValidationErrorInvalidMetadata.inheritsFrom(KalturaDistributionValidationErrorInvalidData);function KalturaDocumentFlavorParams(){}
KalturaDocumentFlavorParams.inheritsFrom(KalturaFlavorParams);function KalturaDrmDeviceFilter(){}
KalturaDrmDeviceFilter.inheritsFrom(KalturaDrmDeviceBaseFilter);function KalturaDrmPolicyFilter(){}
KalturaDrmPolicyFilter.inheritsFrom(KalturaDrmPolicyBaseFilter);function KalturaDrmProfileFilter(){}
KalturaDrmProfileFilter.inheritsFrom(KalturaDrmProfileBaseFilter);function KalturaDropFolderFileFilter(){}
KalturaDropFolderFileFilter.inheritsFrom(KalturaDropFolderFileBaseFilter);function KalturaDropFolderFilter(){this.currentDc=null;}
KalturaDropFolderFilter.inheritsFrom(KalturaDropFolderBaseFilter);function KalturaEmailNotificationDispatchJobData(){this.fromEmail=null;this.fromName=null;this.to=null;this.cc=null;this.bcc=null;this.replyTo=null;this.priority=null;this.confirmReadingTo=null;this.hostname=null;this.messageID=null;this.customHeaders=null;}
KalturaEmailNotificationDispatchJobData.inheritsFrom(KalturaEventNotificationDispatchJobData);function KalturaEndUserReportInputFilter(){this.application=null;this.userIds=null;this.playbackContext=null;}
KalturaEndUserReportInputFilter.inheritsFrom(KalturaReportInputFilter);function KalturaEntryDistributionFilter(){}
KalturaEntryDistributionFilter.inheritsFrom(KalturaEntryDistributionBaseFilter);function KalturaEntryReferrerLiveStats(){this.referrer=null;}
KalturaEntryReferrerLiveStats.inheritsFrom(KalturaEntryLiveStats);function KalturaEntryResource(){this.entryId=null;this.flavorParamsId=null;}
KalturaEntryResource.inheritsFrom(KalturaContentResource);function KalturaEventNotificationTemplateFilter(){}
KalturaEventNotificationTemplateFilter.inheritsFrom(KalturaEventNotificationTemplateBaseFilter);function KalturaExtractMediaJobData(){this.flavorAssetId=null;}
KalturaExtractMediaJobData.inheritsFrom(KalturaConvartableJobData);function KalturaIntegerField(){}
KalturaIntegerField.inheritsFrom(KalturaIntegerValue);function KalturaFieldCompareCondition(){this.field=null;}
KalturaFieldCompareCondition.inheritsFrom(KalturaCompareCondition);function KalturaStringField(){}
KalturaStringField.inheritsFrom(KalturaStringValue);function KalturaFieldMatchCondition(){this.field=null;}
KalturaFieldMatchCondition.inheritsFrom(KalturaMatchCondition);function KalturaFileAssetFilter(){}
KalturaFileAssetFilter.inheritsFrom(KalturaFileAssetBaseFilter);function KalturaFileSyncFilter(){this.currentDc=null;}
KalturaFileSyncFilter.inheritsFrom(KalturaFileSyncBaseFilter);function KalturaFileSyncResource(){this.fileSyncObjectType=null;this.objectSubType=null;this.objectId=null;this.version=null;}
KalturaFileSyncResource.inheritsFrom(KalturaContentResource);function KalturaFtpDropFolder(){this.host=null;this.port=null;this.username=null;this.password=null;}
KalturaFtpDropFolder.inheritsFrom(KalturaRemoteDropFolder);function KalturaGenericDistributionProviderActionFilter(){}
KalturaGenericDistributionProviderActionFilter.inheritsFrom(KalturaGenericDistributionProviderActionBaseFilter);function KalturaGenericXsltSyndicationFeed(){this.xslt=null;this.itemXpathsToExtend=null;}
KalturaGenericXsltSyndicationFeed.inheritsFrom(KalturaGenericSyndicationFeed);function KalturaGeoDistanceCondition(){this.geoCoderType=null;}
KalturaGeoDistanceCondition.inheritsFrom(KalturaMatchCondition);function KalturaGeoTimeLiveStats(){this.city=null;this.country=null;}
KalturaGeoTimeLiveStats.inheritsFrom(KalturaEntryLiveStats);function KalturaHttpNotificationDispatchJobData(){this.url=null;this.method=null;this.data=null;this.timeout=null;this.connectTimeout=null;this.username=null;this.password=null;this.authenticationMethod=null;this.sslVersion=null;this.sslCertificate=null;this.sslCertificateType=null;this.sslCertificatePassword=null;this.sslEngine=null;this.sslEngineDefault=null;this.sslKeyType=null;this.sslKey=null;this.sslKeyPassword=null;this.customHeaders=null;this.signSecret=null;}
KalturaHttpNotificationDispatchJobData.inheritsFrom(KalturaEventNotificationDispatchJobData);function KalturaImageFlavorParams(){this.densityWidth=null;this.densityHeight=null;this.sizeWidth=null;this.sizeHeight=null;this.depth=null;}
KalturaImageFlavorParams.inheritsFrom(KalturaFlavorParams);function KalturaIpAddressCondition(){}
KalturaIpAddressCondition.inheritsFrom(KalturaMatchCondition);function KalturaLiveAsset(){this.multicastIP=null;this.multicastPort=null;}
KalturaLiveAsset.inheritsFrom(KalturaFlavorAsset);function KalturaLiveChannelSegmentFilter(){}
KalturaLiveChannelSegmentFilter.inheritsFrom(KalturaLiveChannelSegmentBaseFilter);function KalturaLiveParams(){this.streamSuffix=null;}
KalturaLiveParams.inheritsFrom(KalturaFlavorParams);function KalturaMatchMetadataCondition(){this.xPath=null;this.profileId=null;this.profileSystemName=null;}
KalturaMatchMetadataCondition.inheritsFrom(KalturaMatchCondition);function KalturaMediaFlavorParams(){}
KalturaMediaFlavorParams.inheritsFrom(KalturaFlavorParams);function KalturaMediaInfoFilter(){}
KalturaMediaInfoFilter.inheritsFrom(KalturaMediaInfoBaseFilter);function KalturaMediaServerFilter(){}
KalturaMediaServerFilter.inheritsFrom(KalturaMediaServerBaseFilter);function KalturaMetadataFieldChangedCondition(){this.xPath=null;this.profileId=null;this.profileSystemName=null;this.versionA=null;this.versionB=null;}
KalturaMetadataFieldChangedCondition.inheritsFrom(KalturaMatchCondition);function KalturaMetadataFilter(){}
KalturaMetadataFilter.inheritsFrom(KalturaMetadataBaseFilter);function KalturaMetadataProfileFilter(){}
KalturaMetadataProfileFilter.inheritsFrom(KalturaMetadataProfileBaseFilter);function KalturaMetadataSearchItem(){this.metadataProfileId=null;this.orderBy=null;}
KalturaMetadataSearchItem.inheritsFrom(KalturaSearchOperator);function KalturaOperationResource(){this.resource=null;this.operationAttributes=null;this.assetParamsId=null;}
KalturaOperationResource.inheritsFrom(KalturaContentResource);function KalturaPartnerFilter(){}
KalturaPartnerFilter.inheritsFrom(KalturaPartnerBaseFilter);function KalturaPdfFlavorParams(){this.readonly=null;}
KalturaPdfFlavorParams.inheritsFrom(KalturaFlavorParams);function KalturaPermissionFilter(){}
KalturaPermissionFilter.inheritsFrom(KalturaPermissionBaseFilter);function KalturaPermissionItemFilter(){}
KalturaPermissionItemFilter.inheritsFrom(KalturaPermissionItemBaseFilter);function KalturaPostConvertJobData(){this.flavorAssetId=null;this.createThumb=null;this.thumbPath=null;this.thumbOffset=null;this.thumbHeight=null;this.thumbBitrate=null;this.customData=null;}
KalturaPostConvertJobData.inheritsFrom(KalturaConvartableJobData);function KalturaPreviewRestriction(){this.previewLength=null;}
KalturaPreviewRestriction.inheritsFrom(KalturaSessionRestriction);function KalturaRegexCondition(){}
KalturaRegexCondition.inheritsFrom(KalturaMatchCondition);function KalturaRemoteStorageResources(){this.resources=null;}
KalturaRemoteStorageResources.inheritsFrom(KalturaContentResource);function KalturaReportFilter(){}
KalturaReportFilter.inheritsFrom(KalturaReportBaseFilter);function KalturaScheduledTaskProfileFilter(){}
KalturaScheduledTaskProfileFilter.inheritsFrom(KalturaScheduledTaskProfileBaseFilter);function KalturaSearchComparableCondition(){this.comparison=null;}
KalturaSearchComparableCondition.inheritsFrom(KalturaSearchCondition);function KalturaShortLinkFilter(){}
KalturaShortLinkFilter.inheritsFrom(KalturaShortLinkBaseFilter);function KalturaSiteCondition(){}
KalturaSiteCondition.inheritsFrom(KalturaMatchCondition);function KalturaSshDropFolder(){this.host=null;this.port=null;this.username=null;this.password=null;this.privateKey=null;this.publicKey=null;this.passPhrase=null;}
KalturaSshDropFolder.inheritsFrom(KalturaRemoteDropFolder);function KalturaSshImportJobData(){this.privateKey=null;this.publicKey=null;this.passPhrase=null;}
KalturaSshImportJobData.inheritsFrom(KalturaImportJobData);function KalturaStorageDeleteJobData(){}
KalturaStorageDeleteJobData.inheritsFrom(KalturaStorageJobData);function KalturaStorageExportJobData(){this.force=null;this.createLink=null;}
KalturaStorageExportJobData.inheritsFrom(KalturaStorageJobData);function KalturaStorageProfileFilter(){}
KalturaStorageProfileFilter.inheritsFrom(KalturaStorageProfileBaseFilter);function KalturaStringResource(){this.content=null;}
KalturaStringResource.inheritsFrom(KalturaContentResource);function KalturaSwfFlavorParams(){this.flashVersion=null;this.poly2Bitmap=null;}
KalturaSwfFlavorParams.inheritsFrom(KalturaFlavorParams);function KalturaTimedThumbAsset(){this.cuePointId=null;}
KalturaTimedThumbAsset.inheritsFrom(KalturaThumbAsset);function KalturaUiConfFilter(){}
KalturaUiConfFilter.inheritsFrom(KalturaUiConfBaseFilter);function KalturaUploadTokenFilter(){}
KalturaUploadTokenFilter.inheritsFrom(KalturaUploadTokenBaseFilter);function KalturaUserLoginDataFilter(){}
KalturaUserLoginDataFilter.inheritsFrom(KalturaUserLoginDataBaseFilter);function KalturaUserRoleFilter(){}
KalturaUserRoleFilter.inheritsFrom(KalturaUserRoleBaseFilter);function KalturaVelocixProvisionJobData(){this.provisioningParams=null;this.userName=null;this.password=null;}
KalturaVelocixProvisionJobData.inheritsFrom(KalturaProvisionJobData);function KalturaVirusScanProfileFilter(){}
KalturaVirusScanProfileFilter.inheritsFrom(KalturaVirusScanProfileBaseFilter);function KalturaWebexDropFolderContentProcessorJobData(){this.description=null;this.webexHostId=null;}
KalturaWebexDropFolderContentProcessorJobData.inheritsFrom(KalturaDropFolderContentProcessorJobData);function KalturaWidevineFlavorAsset(){this.widevineDistributionStartDate=null;this.widevineDistributionEndDate=null;this.widevineAssetId=null;}
KalturaWidevineFlavorAsset.inheritsFrom(KalturaFlavorAsset);function KalturaWidevineFlavorParams(){}
KalturaWidevineFlavorParams.inheritsFrom(KalturaFlavorParams);function KalturaWidgetFilter(){}
KalturaWidgetFilter.inheritsFrom(KalturaWidgetBaseFilter);function KalturaAdCuePointBaseFilter(){this.protocolTypeEqual=null;this.protocolTypeIn=null;this.titleLike=null;this.titleMultiLikeOr=null;this.titleMultiLikeAnd=null;this.endTimeGreaterThanOrEqual=null;this.endTimeLessThanOrEqual=null;this.durationGreaterThanOrEqual=null;this.durationLessThanOrEqual=null;}
KalturaAdCuePointBaseFilter.inheritsFrom(KalturaCuePointFilter);function KalturaAdminUserBaseFilter(){}
KalturaAdminUserBaseFilter.inheritsFrom(KalturaUserFilter);function KalturaAmazonS3StorageExportJobData(){this.filesPermissionInS3=null;}
KalturaAmazonS3StorageExportJobData.inheritsFrom(KalturaStorageExportJobData);function KalturaAmazonS3StorageProfileBaseFilter(){}
KalturaAmazonS3StorageProfileBaseFilter.inheritsFrom(KalturaStorageProfileFilter);function KalturaAnnotationBaseFilter(){this.parentIdEqual=null;this.parentIdIn=null;this.textLike=null;this.textMultiLikeOr=null;this.textMultiLikeAnd=null;this.endTimeGreaterThanOrEqual=null;this.endTimeLessThanOrEqual=null;this.durationGreaterThanOrEqual=null;this.durationLessThanOrEqual=null;}
KalturaAnnotationBaseFilter.inheritsFrom(KalturaCuePointFilter);function KalturaApiActionPermissionItemBaseFilter(){}
KalturaApiActionPermissionItemBaseFilter.inheritsFrom(KalturaPermissionItemFilter);function KalturaApiParameterPermissionItemBaseFilter(){}
KalturaApiParameterPermissionItemBaseFilter.inheritsFrom(KalturaPermissionItemFilter);function KalturaAssetParamsOutputBaseFilter(){}
KalturaAssetParamsOutputBaseFilter.inheritsFrom(KalturaAssetParamsFilter);function KalturaAttachmentAssetBaseFilter(){this.formatEqual=null;this.formatIn=null;this.statusEqual=null;this.statusIn=null;this.statusNotIn=null;}
KalturaAttachmentAssetBaseFilter.inheritsFrom(KalturaAssetFilter);function KalturaBatchJobFilterExt(){this.jobTypeAndSubTypeIn=null;}
KalturaBatchJobFilterExt.inheritsFrom(KalturaBatchJobFilter);function KalturaCaptionAssetBaseFilter(){this.captionParamsIdEqual=null;this.captionParamsIdIn=null;this.formatEqual=null;this.formatIn=null;this.statusEqual=null;this.statusIn=null;this.statusNotIn=null;}
KalturaCaptionAssetBaseFilter.inheritsFrom(KalturaAssetFilter);function KalturaCaptionParamsBaseFilter(){this.formatEqual=null;this.formatIn=null;}
KalturaCaptionParamsBaseFilter.inheritsFrom(KalturaAssetParamsFilter);function KalturaCodeCuePointBaseFilter(){this.codeLike=null;this.codeMultiLikeOr=null;this.codeMultiLikeAnd=null;this.codeEqual=null;this.codeIn=null;this.descriptionLike=null;this.descriptionMultiLikeOr=null;this.descriptionMultiLikeAnd=null;this.endTimeGreaterThanOrEqual=null;this.endTimeLessThanOrEqual=null;this.durationGreaterThanOrEqual=null;this.durationLessThanOrEqual=null;}
KalturaCodeCuePointBaseFilter.inheritsFrom(KalturaCuePointFilter);function KalturaConfigurableDistributionProfileBaseFilter(){}
KalturaConfigurableDistributionProfileBaseFilter.inheritsFrom(KalturaDistributionProfileFilter);function KalturaCoordinatesContextField(){this.geoCoderType=null;}
KalturaCoordinatesContextField.inheritsFrom(KalturaStringField);function KalturaCountryContextField(){this.geoCoderType=null;}
KalturaCountryContextField.inheritsFrom(KalturaStringField);function KalturaDataEntryBaseFilter(){}
KalturaDataEntryBaseFilter.inheritsFrom(KalturaBaseEntryFilter);function KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter(){}
KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileAkamaiHdsBaseFilter(){}
KalturaDeliveryProfileAkamaiHdsBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileAkamaiHttpBaseFilter(){}
KalturaDeliveryProfileAkamaiHttpBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileGenericAppleHttpBaseFilter(){}
KalturaDeliveryProfileGenericAppleHttpBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileGenericHdsBaseFilter(){}
KalturaDeliveryProfileGenericHdsBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileGenericHttpBaseFilter(){}
KalturaDeliveryProfileGenericHttpBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileGenericSilverLightBaseFilter(){}
KalturaDeliveryProfileGenericSilverLightBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileLiveAppleHttpBaseFilter(){}
KalturaDeliveryProfileLiveAppleHttpBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDeliveryProfileRtmpBaseFilter(){}
KalturaDeliveryProfileRtmpBaseFilter.inheritsFrom(KalturaDeliveryProfileFilter);function KalturaDistributionDisableJobData(){}
KalturaDistributionDisableJobData.inheritsFrom(KalturaDistributionUpdateJobData);function KalturaDistributionEnableJobData(){}
KalturaDistributionEnableJobData.inheritsFrom(KalturaDistributionUpdateJobData);function KalturaDocumentEntryBaseFilter(){this.documentTypeEqual=null;this.documentTypeIn=null;this.assetParamsIdsMatchOr=null;this.assetParamsIdsMatchAnd=null;}
KalturaDocumentEntryBaseFilter.inheritsFrom(KalturaBaseEntryFilter);function KalturaDocumentFlavorParamsOutput(){}
KalturaDocumentFlavorParamsOutput.inheritsFrom(KalturaFlavorParamsOutput);function KalturaDropFolderFileResource(){this.dropFolderFileId=null;}
KalturaDropFolderFileResource.inheritsFrom(KalturaDataCenterContentResource);function KalturaDropFolderImportJobData(){this.dropFolderFileId=null;}
KalturaDropFolderImportJobData.inheritsFrom(KalturaSshImportJobData);function KalturaEmailNotificationTemplateBaseFilter(){}
KalturaEmailNotificationTemplateBaseFilter.inheritsFrom(KalturaEventNotificationTemplateFilter);function KalturaEvalBooleanField(){this.code=null;}
KalturaEvalBooleanField.inheritsFrom(KalturaBooleanField);function KalturaEvalStringField(){this.code=null;}
KalturaEvalStringField.inheritsFrom(KalturaStringField);function KalturaEventCuePointBaseFilter(){this.eventTypeEqual=null;this.eventTypeIn=null;}
KalturaEventCuePointBaseFilter.inheritsFrom(KalturaCuePointFilter);function KalturaFlavorAssetBaseFilter(){this.flavorParamsIdEqual=null;this.flavorParamsIdIn=null;this.statusEqual=null;this.statusIn=null;this.statusNotIn=null;}
KalturaFlavorAssetBaseFilter.inheritsFrom(KalturaAssetFilter);function KalturaFlavorParamsBaseFilter(){this.formatEqual=null;}
KalturaFlavorParamsBaseFilter.inheritsFrom(KalturaAssetParamsFilter);function KalturaGenericDistributionProfileBaseFilter(){}
KalturaGenericDistributionProfileBaseFilter.inheritsFrom(KalturaDistributionProfileFilter);function KalturaGenericDistributionProviderBaseFilter(){this.idEqual=null;this.idIn=null;this.createdAtGreaterThanOrEqual=null;this.createdAtLessThanOrEqual=null;this.updatedAtGreaterThanOrEqual=null;this.updatedAtLessThanOrEqual=null;this.partnerIdEqual=null;this.partnerIdIn=null;this.isDefaultEqual=null;this.isDefaultIn=null;this.statusEqual=null;this.statusIn=null;}
KalturaGenericDistributionProviderBaseFilter.inheritsFrom(KalturaDistributionProviderFilter);function KalturaGenericSyndicationFeedBaseFilter(){}
KalturaGenericSyndicationFeedBaseFilter.inheritsFrom(KalturaBaseSyndicationFeedFilter);function KalturaGoogleVideoSyndicationFeedBaseFilter(){}
KalturaGoogleVideoSyndicationFeedBaseFilter.inheritsFrom(KalturaBaseSyndicationFeedFilter);function KalturaHttpNotificationTemplateBaseFilter(){}
KalturaHttpNotificationTemplateBaseFilter.inheritsFrom(KalturaEventNotificationTemplateFilter);function KalturaITunesSyndicationFeedBaseFilter(){}
KalturaITunesSyndicationFeedBaseFilter.inheritsFrom(KalturaBaseSyndicationFeedFilter);function KalturaImageFlavorParamsOutput(){this.densityWidth=null;this.densityHeight=null;this.sizeWidth=null;this.sizeHeight=null;this.depth=null;}
KalturaImageFlavorParamsOutput.inheritsFrom(KalturaFlavorParamsOutput);function KalturaIpAddressContextField(){}
KalturaIpAddressContextField.inheritsFrom(KalturaStringField);function KalturaKontikiStorageDeleteJobData(){this.contentMoid=null;this.serviceToken=null;}
KalturaKontikiStorageDeleteJobData.inheritsFrom(KalturaStorageDeleteJobData);function KalturaKontikiStorageExportJobData(){this.flavorAssetId=null;this.contentMoid=null;this.serviceToken=null;}
KalturaKontikiStorageExportJobData.inheritsFrom(KalturaStorageExportJobData);function KalturaKontikiStorageProfileBaseFilter(){}
KalturaKontikiStorageProfileBaseFilter.inheritsFrom(KalturaStorageProfileFilter);function KalturaMediaFlavorParamsOutput(){}
KalturaMediaFlavorParamsOutput.inheritsFrom(KalturaFlavorParamsOutput);function KalturaObjectIdField(){}
KalturaObjectIdField.inheritsFrom(KalturaStringField);function KalturaPdfFlavorParamsOutput(){this.readonly=null;}
KalturaPdfFlavorParamsOutput.inheritsFrom(KalturaFlavorParamsOutput);function KalturaPlayReadyPolicyBaseFilter(){}
KalturaPlayReadyPolicyBaseFilter.inheritsFrom(KalturaDrmPolicyFilter);function KalturaPlayReadyProfileBaseFilter(){}
KalturaPlayReadyProfileBaseFilter.inheritsFrom(KalturaDrmProfileFilter);function KalturaPlaylistBaseFilter(){}
KalturaPlaylistBaseFilter.inheritsFrom(KalturaBaseEntryFilter);function KalturaRemoteDropFolderBaseFilter(){}
KalturaRemoteDropFolderBaseFilter.inheritsFrom(KalturaDropFolderFilter);function KalturaScpDropFolder(){}
KalturaScpDropFolder.inheritsFrom(KalturaSshDropFolder);function KalturaServerFileResource(){this.localFilePath=null;}
KalturaServerFileResource.inheritsFrom(KalturaDataCenterContentResource);function KalturaSftpDropFolder(){}
KalturaSftpDropFolder.inheritsFrom(KalturaSshDropFolder);function KalturaSshUrlResource(){this.privateKey=null;this.publicKey=null;this.keyPassphrase=null;}
KalturaSshUrlResource.inheritsFrom(KalturaUrlResource);function KalturaSwfFlavorParamsOutput(){this.flashVersion=null;this.poly2Bitmap=null;}
KalturaSwfFlavorParamsOutput.inheritsFrom(KalturaFlavorParamsOutput);function KalturaSyndicationDistributionProfileBaseFilter(){}
KalturaSyndicationDistributionProfileBaseFilter.inheritsFrom(KalturaDistributionProfileFilter);function KalturaSyndicationDistributionProviderBaseFilter(){}
KalturaSyndicationDistributionProviderBaseFilter.inheritsFrom(KalturaDistributionProviderFilter);function KalturaThumbAssetBaseFilter(){this.thumbParamsIdEqual=null;this.thumbParamsIdIn=null;this.statusEqual=null;this.statusIn=null;this.statusNotIn=null;}
KalturaThumbAssetBaseFilter.inheritsFrom(KalturaAssetFilter);function KalturaThumbCuePointBaseFilter(){this.descriptionLike=null;this.descriptionMultiLikeOr=null;this.descriptionMultiLikeAnd=null;this.titleLike=null;this.titleMultiLikeOr=null;this.titleMultiLikeAnd=null;this.subTypeEqual=null;this.subTypeIn=null;}
KalturaThumbCuePointBaseFilter.inheritsFrom(KalturaCuePointFilter);function KalturaThumbParamsBaseFilter(){this.formatEqual=null;}
KalturaThumbParamsBaseFilter.inheritsFrom(KalturaAssetParamsFilter);function KalturaTimeContextField(){this.offset=null;}
KalturaTimeContextField.inheritsFrom(KalturaIntegerField);function KalturaTubeMogulSyndicationFeedBaseFilter(){}
KalturaTubeMogulSyndicationFeedBaseFilter.inheritsFrom(KalturaBaseSyndicationFeedFilter);function KalturaUploadedFileTokenResource(){this.token=null;}
KalturaUploadedFileTokenResource.inheritsFrom(KalturaDataCenterContentResource);function KalturaUserAgentCondition(){}
KalturaUserAgentCondition.inheritsFrom(KalturaRegexCondition);function KalturaUserAgentContextField(){}
KalturaUserAgentContextField.inheritsFrom(KalturaStringField);function KalturaUserEmailContextField(){}
KalturaUserEmailContextField.inheritsFrom(KalturaStringField);function KalturaVarConsolePartnerFilter(){this.groupTypeEq=null;this.groupTypeIn=null;this.partnerPermissionsExist=null;}
KalturaVarConsolePartnerFilter.inheritsFrom(KalturaPartnerFilter);function KalturaWebcamTokenResource(){this.token=null;}
KalturaWebcamTokenResource.inheritsFrom(KalturaDataCenterContentResource);function KalturaWebexDropFolderBaseFilter(){}
KalturaWebexDropFolderBaseFilter.inheritsFrom(KalturaDropFolderFilter);function KalturaWebexDropFolderFileBaseFilter(){}
KalturaWebexDropFolderFileBaseFilter.inheritsFrom(KalturaDropFolderFileFilter);function KalturaWidevineFlavorParamsOutput(){this.widevineDistributionStartDate=null;this.widevineDistributionEndDate=null;}
KalturaWidevineFlavorParamsOutput.inheritsFrom(KalturaFlavorParamsOutput);function KalturaWidevineProfileBaseFilter(){}
KalturaWidevineProfileBaseFilter.inheritsFrom(KalturaDrmProfileFilter);function KalturaYahooSyndicationFeedBaseFilter(){}
KalturaYahooSyndicationFeedBaseFilter.inheritsFrom(KalturaBaseSyndicationFeedFilter);function KalturaAdCuePointFilter(){}
KalturaAdCuePointFilter.inheritsFrom(KalturaAdCuePointBaseFilter);function KalturaAdminUserFilter(){}
KalturaAdminUserFilter.inheritsFrom(KalturaAdminUserBaseFilter);function KalturaAmazonS3StorageProfileFilter(){}
KalturaAmazonS3StorageProfileFilter.inheritsFrom(KalturaAmazonS3StorageProfileBaseFilter);function KalturaAnnotationFilter(){}
KalturaAnnotationFilter.inheritsFrom(KalturaAnnotationBaseFilter);function KalturaApiActionPermissionItemFilter(){}
KalturaApiActionPermissionItemFilter.inheritsFrom(KalturaApiActionPermissionItemBaseFilter);function KalturaApiParameterPermissionItemFilter(){}
KalturaApiParameterPermissionItemFilter.inheritsFrom(KalturaApiParameterPermissionItemBaseFilter);function KalturaAssetParamsOutputFilter(){}
KalturaAssetParamsOutputFilter.inheritsFrom(KalturaAssetParamsOutputBaseFilter);function KalturaAttachmentAssetFilter(){}
KalturaAttachmentAssetFilter.inheritsFrom(KalturaAttachmentAssetBaseFilter);function KalturaCaptionAssetFilter(){}
KalturaCaptionAssetFilter.inheritsFrom(KalturaCaptionAssetBaseFilter);function KalturaCaptionParamsFilter(){}
KalturaCaptionParamsFilter.inheritsFrom(KalturaCaptionParamsBaseFilter);function KalturaCodeCuePointFilter(){}
KalturaCodeCuePointFilter.inheritsFrom(KalturaCodeCuePointBaseFilter);function KalturaConfigurableDistributionProfileFilter(){}
KalturaConfigurableDistributionProfileFilter.inheritsFrom(KalturaConfigurableDistributionProfileBaseFilter);function KalturaDataEntryFilter(){}
KalturaDataEntryFilter.inheritsFrom(KalturaDataEntryBaseFilter);function KalturaDeliveryProfileAkamaiAppleHttpManifestFilter(){}
KalturaDeliveryProfileAkamaiAppleHttpManifestFilter.inheritsFrom(KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter);function KalturaDeliveryProfileAkamaiHdsFilter(){}
KalturaDeliveryProfileAkamaiHdsFilter.inheritsFrom(KalturaDeliveryProfileAkamaiHdsBaseFilter);function KalturaDeliveryProfileAkamaiHttpFilter(){}
KalturaDeliveryProfileAkamaiHttpFilter.inheritsFrom(KalturaDeliveryProfileAkamaiHttpBaseFilter);function KalturaDeliveryProfileGenericAppleHttpFilter(){}
KalturaDeliveryProfileGenericAppleHttpFilter.inheritsFrom(KalturaDeliveryProfileGenericAppleHttpBaseFilter);function KalturaDeliveryProfileGenericHdsFilter(){}
KalturaDeliveryProfileGenericHdsFilter.inheritsFrom(KalturaDeliveryProfileGenericHdsBaseFilter);function KalturaDeliveryProfileGenericHttpFilter(){}
KalturaDeliveryProfileGenericHttpFilter.inheritsFrom(KalturaDeliveryProfileGenericHttpBaseFilter);function KalturaDeliveryProfileGenericSilverLightFilter(){}
KalturaDeliveryProfileGenericSilverLightFilter.inheritsFrom(KalturaDeliveryProfileGenericSilverLightBaseFilter);function KalturaDeliveryProfileLiveAppleHttpFilter(){}
KalturaDeliveryProfileLiveAppleHttpFilter.inheritsFrom(KalturaDeliveryProfileLiveAppleHttpBaseFilter);function KalturaDeliveryProfileRtmpFilter(){}
KalturaDeliveryProfileRtmpFilter.inheritsFrom(KalturaDeliveryProfileRtmpBaseFilter);function KalturaDocumentEntryFilter(){}
KalturaDocumentEntryFilter.inheritsFrom(KalturaDocumentEntryBaseFilter);function KalturaEmailNotificationTemplateFilter(){}
KalturaEmailNotificationTemplateFilter.inheritsFrom(KalturaEmailNotificationTemplateBaseFilter);function KalturaEventCuePointFilter(){}
KalturaEventCuePointFilter.inheritsFrom(KalturaEventCuePointBaseFilter);function KalturaFlavorAssetFilter(){}
KalturaFlavorAssetFilter.inheritsFrom(KalturaFlavorAssetBaseFilter);function KalturaFlavorParamsFilter(){}
KalturaFlavorParamsFilter.inheritsFrom(KalturaFlavorParamsBaseFilter);function KalturaGenericDistributionProfileFilter(){}
KalturaGenericDistributionProfileFilter.inheritsFrom(KalturaGenericDistributionProfileBaseFilter);function KalturaGenericDistributionProviderFilter(){}
KalturaGenericDistributionProviderFilter.inheritsFrom(KalturaGenericDistributionProviderBaseFilter);function KalturaGenericSyndicationFeedFilter(){}
KalturaGenericSyndicationFeedFilter.inheritsFrom(KalturaGenericSyndicationFeedBaseFilter);function KalturaGoogleVideoSyndicationFeedFilter(){}
KalturaGoogleVideoSyndicationFeedFilter.inheritsFrom(KalturaGoogleVideoSyndicationFeedBaseFilter);function KalturaHttpNotificationTemplateFilter(){}
KalturaHttpNotificationTemplateFilter.inheritsFrom(KalturaHttpNotificationTemplateBaseFilter);function KalturaITunesSyndicationFeedFilter(){}
KalturaITunesSyndicationFeedFilter.inheritsFrom(KalturaITunesSyndicationFeedBaseFilter);function KalturaKontikiStorageProfileFilter(){}
KalturaKontikiStorageProfileFilter.inheritsFrom(KalturaKontikiStorageProfileBaseFilter);function KalturaPlayReadyPolicyFilter(){}
KalturaPlayReadyPolicyFilter.inheritsFrom(KalturaPlayReadyPolicyBaseFilter);function KalturaPlayReadyProfileFilter(){}
KalturaPlayReadyProfileFilter.inheritsFrom(KalturaPlayReadyProfileBaseFilter);function KalturaPlaylistFilter(){}
KalturaPlaylistFilter.inheritsFrom(KalturaPlaylistBaseFilter);function KalturaRemoteDropFolderFilter(){}
KalturaRemoteDropFolderFilter.inheritsFrom(KalturaRemoteDropFolderBaseFilter);function KalturaSyndicationDistributionProfileFilter(){}
KalturaSyndicationDistributionProfileFilter.inheritsFrom(KalturaSyndicationDistributionProfileBaseFilter);function KalturaSyndicationDistributionProviderFilter(){}
KalturaSyndicationDistributionProviderFilter.inheritsFrom(KalturaSyndicationDistributionProviderBaseFilter);function KalturaThumbAssetFilter(){this.typeIn=null;}
KalturaThumbAssetFilter.inheritsFrom(KalturaThumbAssetBaseFilter);function KalturaThumbCuePointFilter(){}
KalturaThumbCuePointFilter.inheritsFrom(KalturaThumbCuePointBaseFilter);function KalturaThumbParamsFilter(){}
KalturaThumbParamsFilter.inheritsFrom(KalturaThumbParamsBaseFilter);function KalturaTubeMogulSyndicationFeedFilter(){}
KalturaTubeMogulSyndicationFeedFilter.inheritsFrom(KalturaTubeMogulSyndicationFeedBaseFilter);function KalturaWebexDropFolderFileFilter(){}
KalturaWebexDropFolderFileFilter.inheritsFrom(KalturaWebexDropFolderFileBaseFilter);function KalturaWebexDropFolderFilter(){}
KalturaWebexDropFolderFilter.inheritsFrom(KalturaWebexDropFolderBaseFilter);function KalturaWidevineProfileFilter(){}
KalturaWidevineProfileFilter.inheritsFrom(KalturaWidevineProfileBaseFilter);function KalturaYahooSyndicationFeedFilter(){}
KalturaYahooSyndicationFeedFilter.inheritsFrom(KalturaYahooSyndicationFeedBaseFilter);function KalturaCaptionAssetItemFilter(){this.contentLike=null;this.contentMultiLikeOr=null;this.contentMultiLikeAnd=null;this.partnerDescriptionLike=null;this.partnerDescriptionMultiLikeOr=null;this.partnerDescriptionMultiLikeAnd=null;this.languageEqual=null;this.languageIn=null;this.labelEqual=null;this.labelIn=null;this.startTimeGreaterThanOrEqual=null;this.startTimeLessThanOrEqual=null;this.endTimeGreaterThanOrEqual=null;this.endTimeLessThanOrEqual=null;}
KalturaCaptionAssetItemFilter.inheritsFrom(KalturaCaptionAssetFilter);function KalturaDeliveryProfileGenericRtmpBaseFilter(){}
KalturaDeliveryProfileGenericRtmpBaseFilter.inheritsFrom(KalturaDeliveryProfileRtmpFilter);function KalturaDocumentFlavorParamsBaseFilter(){}
KalturaDocumentFlavorParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaFlavorParamsOutputBaseFilter(){this.flavorParamsIdEqual=null;this.flavorParamsVersionEqual=null;this.flavorAssetIdEqual=null;this.flavorAssetVersionEqual=null;}
KalturaFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaFtpDropFolderBaseFilter(){}
KalturaFtpDropFolderBaseFilter.inheritsFrom(KalturaRemoteDropFolderFilter);function KalturaGenericXsltSyndicationFeedBaseFilter(){}
KalturaGenericXsltSyndicationFeedBaseFilter.inheritsFrom(KalturaGenericSyndicationFeedFilter);function KalturaImageFlavorParamsBaseFilter(){}
KalturaImageFlavorParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaLiveAssetBaseFilter(){}
KalturaLiveAssetBaseFilter.inheritsFrom(KalturaFlavorAssetFilter);function KalturaLiveParamsBaseFilter(){}
KalturaLiveParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaLiveStreamAdminEntry(){}
KalturaLiveStreamAdminEntry.inheritsFrom(KalturaLiveStreamEntry);function KalturaMediaFlavorParamsBaseFilter(){}
KalturaMediaFlavorParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaMixEntryBaseFilter(){}
KalturaMixEntryBaseFilter.inheritsFrom(KalturaPlayableEntryFilter);function KalturaPdfFlavorParamsBaseFilter(){}
KalturaPdfFlavorParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaSshDropFolderBaseFilter(){}
KalturaSshDropFolderBaseFilter.inheritsFrom(KalturaRemoteDropFolderFilter);function KalturaSwfFlavorParamsBaseFilter(){}
KalturaSwfFlavorParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaThumbParamsOutputBaseFilter(){this.thumbParamsIdEqual=null;this.thumbParamsVersionEqual=null;this.thumbAssetIdEqual=null;this.thumbAssetVersionEqual=null;}
KalturaThumbParamsOutputBaseFilter.inheritsFrom(KalturaThumbParamsFilter);function KalturaTimedThumbAssetBaseFilter(){}
KalturaTimedThumbAssetBaseFilter.inheritsFrom(KalturaThumbAssetFilter);function KalturaWidevineFlavorAssetBaseFilter(){}
KalturaWidevineFlavorAssetBaseFilter.inheritsFrom(KalturaFlavorAssetFilter);function KalturaWidevineFlavorParamsBaseFilter(){}
KalturaWidevineFlavorParamsBaseFilter.inheritsFrom(KalturaFlavorParamsFilter);function KalturaDeliveryProfileGenericRtmpFilter(){}
KalturaDeliveryProfileGenericRtmpFilter.inheritsFrom(KalturaDeliveryProfileGenericRtmpBaseFilter);function KalturaDocumentFlavorParamsFilter(){}
KalturaDocumentFlavorParamsFilter.inheritsFrom(KalturaDocumentFlavorParamsBaseFilter);function KalturaFlavorParamsOutputFilter(){}
KalturaFlavorParamsOutputFilter.inheritsFrom(KalturaFlavorParamsOutputBaseFilter);function KalturaFtpDropFolderFilter(){}
KalturaFtpDropFolderFilter.inheritsFrom(KalturaFtpDropFolderBaseFilter);function KalturaGenericXsltSyndicationFeedFilter(){}
KalturaGenericXsltSyndicationFeedFilter.inheritsFrom(KalturaGenericXsltSyndicationFeedBaseFilter);function KalturaImageFlavorParamsFilter(){}
KalturaImageFlavorParamsFilter.inheritsFrom(KalturaImageFlavorParamsBaseFilter);function KalturaLiveAssetFilter(){}
KalturaLiveAssetFilter.inheritsFrom(KalturaLiveAssetBaseFilter);function KalturaLiveParamsFilter(){}
KalturaLiveParamsFilter.inheritsFrom(KalturaLiveParamsBaseFilter);function KalturaMediaFlavorParamsFilter(){}
KalturaMediaFlavorParamsFilter.inheritsFrom(KalturaMediaFlavorParamsBaseFilter);function KalturaMixEntryFilter(){}
KalturaMixEntryFilter.inheritsFrom(KalturaMixEntryBaseFilter);function KalturaPdfFlavorParamsFilter(){}
KalturaPdfFlavorParamsFilter.inheritsFrom(KalturaPdfFlavorParamsBaseFilter);function KalturaSshDropFolderFilter(){}
KalturaSshDropFolderFilter.inheritsFrom(KalturaSshDropFolderBaseFilter);function KalturaSwfFlavorParamsFilter(){}
KalturaSwfFlavorParamsFilter.inheritsFrom(KalturaSwfFlavorParamsBaseFilter);function KalturaThumbParamsOutputFilter(){}
KalturaThumbParamsOutputFilter.inheritsFrom(KalturaThumbParamsOutputBaseFilter);function KalturaTimedThumbAssetFilter(){}
KalturaTimedThumbAssetFilter.inheritsFrom(KalturaTimedThumbAssetBaseFilter);function KalturaWidevineFlavorAssetFilter(){}
KalturaWidevineFlavorAssetFilter.inheritsFrom(KalturaWidevineFlavorAssetBaseFilter);function KalturaWidevineFlavorParamsFilter(){}
KalturaWidevineFlavorParamsFilter.inheritsFrom(KalturaWidevineFlavorParamsBaseFilter);function KalturaDocumentFlavorParamsOutputBaseFilter(){}
KalturaDocumentFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsOutputFilter);function KalturaExternalMediaEntryBaseFilter(){this.externalSourceTypeEqual=null;this.externalSourceTypeIn=null;this.assetParamsIdsMatchOr=null;this.assetParamsIdsMatchAnd=null;}
KalturaExternalMediaEntryBaseFilter.inheritsFrom(KalturaMediaEntryFilter);function KalturaImageFlavorParamsOutputBaseFilter(){}
KalturaImageFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsOutputFilter);function KalturaLiveEntryBaseFilter(){}
KalturaLiveEntryBaseFilter.inheritsFrom(KalturaMediaEntryFilter);function KalturaMediaFlavorParamsOutputBaseFilter(){}
KalturaMediaFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsOutputFilter);function KalturaPdfFlavorParamsOutputBaseFilter(){}
KalturaPdfFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsOutputFilter);function KalturaScpDropFolderBaseFilter(){}
KalturaScpDropFolderBaseFilter.inheritsFrom(KalturaSshDropFolderFilter);function KalturaSftpDropFolderBaseFilter(){}
KalturaSftpDropFolderBaseFilter.inheritsFrom(KalturaSshDropFolderFilter);function KalturaSwfFlavorParamsOutputBaseFilter(){}
KalturaSwfFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsOutputFilter);function KalturaWidevineFlavorParamsOutputBaseFilter(){}
KalturaWidevineFlavorParamsOutputBaseFilter.inheritsFrom(KalturaFlavorParamsOutputFilter);function KalturaDocumentFlavorParamsOutputFilter(){}
KalturaDocumentFlavorParamsOutputFilter.inheritsFrom(KalturaDocumentFlavorParamsOutputBaseFilter);function KalturaExternalMediaEntryFilter(){}
KalturaExternalMediaEntryFilter.inheritsFrom(KalturaExternalMediaEntryBaseFilter);function KalturaImageFlavorParamsOutputFilter(){}
KalturaImageFlavorParamsOutputFilter.inheritsFrom(KalturaImageFlavorParamsOutputBaseFilter);function KalturaLiveEntryFilter(){this.isLive=null;this.isRecordedEntryIdEmpty=null;}
KalturaLiveEntryFilter.inheritsFrom(KalturaLiveEntryBaseFilter);function KalturaMediaFlavorParamsOutputFilter(){}
KalturaMediaFlavorParamsOutputFilter.inheritsFrom(KalturaMediaFlavorParamsOutputBaseFilter);function KalturaPdfFlavorParamsOutputFilter(){}
KalturaPdfFlavorParamsOutputFilter.inheritsFrom(KalturaPdfFlavorParamsOutputBaseFilter);function KalturaScpDropFolderFilter(){}
KalturaScpDropFolderFilter.inheritsFrom(KalturaScpDropFolderBaseFilter);function KalturaSftpDropFolderFilter(){}
KalturaSftpDropFolderFilter.inheritsFrom(KalturaSftpDropFolderBaseFilter);function KalturaSwfFlavorParamsOutputFilter(){}
KalturaSwfFlavorParamsOutputFilter.inheritsFrom(KalturaSwfFlavorParamsOutputBaseFilter);function KalturaWidevineFlavorParamsOutputFilter(){}
KalturaWidevineFlavorParamsOutputFilter.inheritsFrom(KalturaWidevineFlavorParamsOutputBaseFilter);function KalturaLiveChannelBaseFilter(){}
KalturaLiveChannelBaseFilter.inheritsFrom(KalturaLiveEntryFilter);function KalturaLiveStreamEntryBaseFilter(){}
KalturaLiveStreamEntryBaseFilter.inheritsFrom(KalturaLiveEntryFilter);function KalturaLiveChannelFilter(){}
KalturaLiveChannelFilter.inheritsFrom(KalturaLiveChannelBaseFilter);function KalturaLiveStreamEntryFilter(){}
KalturaLiveStreamEntryFilter.inheritsFrom(KalturaLiveStreamEntryBaseFilter);function KalturaLiveStreamAdminEntryBaseFilter(){}
KalturaLiveStreamAdminEntryBaseFilter.inheritsFrom(KalturaLiveStreamEntryFilter);function KalturaLiveStreamAdminEntryFilter(){}
KalturaLiveStreamAdminEntryFilter.inheritsFrom(KalturaLiveStreamAdminEntryBaseFilter);function KalturaAccessControlProfileService(client){this.init(client);}
KalturaAccessControlProfileService.inheritsFrom(KalturaServiceBase);KalturaAccessControlProfileService.prototype.add=function(callback,accessControlProfile){var kparams=new Object();this.client.addParam(kparams,"accessControlProfile",toParams(accessControlProfile));this.client.queueServiceActionCall("accesscontrolprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("accesscontrolprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlProfileService.prototype.update=function(callback,id,accessControlProfile){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"accessControlProfile",toParams(accessControlProfile));this.client.queueServiceActionCall("accesscontrolprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlProfileService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("accesscontrolprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("accesscontrolprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaAccessControlService(client){this.init(client);}
KalturaAccessControlService.inheritsFrom(KalturaServiceBase);KalturaAccessControlService.prototype.add=function(callback,accessControl){var kparams=new Object();this.client.addParam(kparams,"accessControl",toParams(accessControl));this.client.queueServiceActionCall("accesscontrol","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("accesscontrol","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlService.prototype.update=function(callback,id,accessControl){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"accessControl",toParams(accessControl));this.client.queueServiceActionCall("accesscontrol","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("accesscontrol","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAccessControlService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("accesscontrol","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaAdminUserService(client){this.init(client);}
KalturaAdminUserService.inheritsFrom(KalturaServiceBase);KalturaAdminUserService.prototype.updatePassword=function(callback,email,password,newEmail,newPassword){if(!newEmail)
newEmail="";if(!newPassword)
newPassword="";var kparams=new Object();this.client.addParam(kparams,"email",email);this.client.addParam(kparams,"password",password);this.client.addParam(kparams,"newEmail",newEmail);this.client.addParam(kparams,"newPassword",newPassword);this.client.queueServiceActionCall("adminuser","updatePassword",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAdminUserService.prototype.resetPassword=function(callback,email){var kparams=new Object();this.client.addParam(kparams,"email",email);this.client.queueServiceActionCall("adminuser","resetPassword",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAdminUserService.prototype.login=function(callback,email,password,partnerId){if(!partnerId)
partnerId=null;var kparams=new Object();this.client.addParam(kparams,"email",email);this.client.addParam(kparams,"password",password);this.client.addParam(kparams,"partnerId",partnerId);this.client.queueServiceActionCall("adminuser","login",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAdminUserService.prototype.setInitialPassword=function(callback,hashKey,newPassword){var kparams=new Object();this.client.addParam(kparams,"hashKey",hashKey);this.client.addParam(kparams,"newPassword",newPassword);this.client.queueServiceActionCall("adminuser","setInitialPassword",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaBaseEntryService(client){this.init(client);}
KalturaBaseEntryService.inheritsFrom(KalturaServiceBase);KalturaBaseEntryService.prototype.add=function(callback,entry,type){if(!type)
type=null;var kparams=new Object();this.client.addParam(kparams,"entry",toParams(entry));this.client.addParam(kparams,"type",type);this.client.queueServiceActionCall("baseentry","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.addContent=function(callback,entryId,resource){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"resource",toParams(resource));this.client.queueServiceActionCall("baseentry","addContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.addFromUploadedFile=function(callback,entry,uploadTokenId,type){if(!type)
type=null;var kparams=new Object();this.client.addParam(kparams,"entry",toParams(entry));this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.addParam(kparams,"type",type);this.client.queueServiceActionCall("baseentry","addFromUploadedFile",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("baseentry","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.getRemotePaths=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("baseentry","getRemotePaths",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.update=function(callback,entryId,baseEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"baseEntry",toParams(baseEntry));this.client.queueServiceActionCall("baseentry","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.updateContent=function(callback,entryId,resource,conversionProfileId,advancedOptions){if(!conversionProfileId)
conversionProfileId=null;if(!advancedOptions)
advancedOptions=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"resource",toParams(resource));this.client.addParam(kparams,"conversionProfileId",conversionProfileId);if(advancedOptions!=null)
this.client.addParam(kparams,"advancedOptions",toParams(advancedOptions));this.client.queueServiceActionCall("baseentry","updateContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.getByIds=function(callback,entryIds){var kparams=new Object();this.client.addParam(kparams,"entryIds",entryIds);this.client.queueServiceActionCall("baseentry","getByIds",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("baseentry","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("baseentry","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.listByReferenceId=function(callback,refId,pager){if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"refId",refId);if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("baseentry","listByReferenceId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("baseentry","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.upload=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("baseentry","upload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.updateThumbnailJpeg=function(callback,entryId,fileData){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("baseentry","updateThumbnailJpeg",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.updateThumbnailFromUrl=function(callback,entryId,url){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("baseentry","updateThumbnailFromUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.updateThumbnailFromSourceEntry=function(callback,entryId,sourceEntryId,timeOffset){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"sourceEntryId",sourceEntryId);this.client.addParam(kparams,"timeOffset",timeOffset);this.client.queueServiceActionCall("baseentry","updateThumbnailFromSourceEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.flag=function(callback,moderationFlag){var kparams=new Object();this.client.addParam(kparams,"moderationFlag",toParams(moderationFlag));this.client.queueServiceActionCall("baseentry","flag",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.reject=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("baseentry","reject",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.approve=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("baseentry","approve",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.listFlags=function(callback,entryId,pager){if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("baseentry","listFlags",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.anonymousRank=function(callback,entryId,rank){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"rank",rank);this.client.queueServiceActionCall("baseentry","anonymousRank",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.getContextData=function(callback,entryId,contextDataParams){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"contextDataParams",toParams(contextDataParams));this.client.queueServiceActionCall("baseentry","getContextData",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.exportAction=function(callback,entryId,storageProfileId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"storageProfileId",storageProfileId);this.client.queueServiceActionCall("baseentry","export",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.index=function(callback,id,shouldUpdate){if(!shouldUpdate)
shouldUpdate=true;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"shouldUpdate",shouldUpdate);this.client.queueServiceActionCall("baseentry","index",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBaseEntryService.prototype.cloneAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("baseentry","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaBulkUploadService(client){this.init(client);}
KalturaBulkUploadService.inheritsFrom(KalturaServiceBase);KalturaBulkUploadService.prototype.add=function(callback,conversionProfileId,csvFileData,bulkUploadType,uploadedBy,fileName){if(!bulkUploadType)
bulkUploadType=null;if(!uploadedBy)
uploadedBy=null;if(!fileName)
fileName=null;var kparams=new Object();this.client.addParam(kparams,"conversionProfileId",conversionProfileId);kfiles=new Object();this.client.addParam(kfiles,"csvFileData",csvFileData);this.client.addParam(kparams,"bulkUploadType",bulkUploadType);this.client.addParam(kparams,"uploadedBy",uploadedBy);this.client.addParam(kparams,"fileName",fileName);this.client.queueServiceActionCall("bulkupload","add",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBulkUploadService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("bulkupload","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBulkUploadService.prototype.listAction=function(callback,pager){if(!pager)
pager=null;var kparams=new Object();if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("bulkupload","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBulkUploadService.prototype.abort=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("bulkupload","abort",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCategoryEntryService(client){this.init(client);}
KalturaCategoryEntryService.inheritsFrom(KalturaServiceBase);KalturaCategoryEntryService.prototype.add=function(callback,categoryEntry){var kparams=new Object();this.client.addParam(kparams,"categoryEntry",toParams(categoryEntry));this.client.queueServiceActionCall("categoryentry","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.deleteAction=function(callback,entryId,categoryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"categoryId",categoryId);this.client.queueServiceActionCall("categoryentry","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("categoryentry","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.index=function(callback,entryId,categoryId,shouldUpdate){if(!shouldUpdate)
shouldUpdate=true;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"shouldUpdate",shouldUpdate);this.client.queueServiceActionCall("categoryentry","index",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.activate=function(callback,entryId,categoryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"categoryId",categoryId);this.client.queueServiceActionCall("categoryentry","activate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.reject=function(callback,entryId,categoryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"categoryId",categoryId);this.client.queueServiceActionCall("categoryentry","reject",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.syncPrivacyContext=function(callback,entryId,categoryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"categoryId",categoryId);this.client.queueServiceActionCall("categoryentry","syncPrivacyContext",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryEntryService.prototype.addFromBulkUpload=function(callback,bulkUploadData,bulkUploadCategoryEntryData){if(!bulkUploadCategoryEntryData)
bulkUploadCategoryEntryData=null;var kparams=new Object();this.client.addParam(kparams,"bulkUploadData",toParams(bulkUploadData));if(bulkUploadCategoryEntryData!=null)
this.client.addParam(kparams,"bulkUploadCategoryEntryData",toParams(bulkUploadCategoryEntryData));this.client.queueServiceActionCall("categoryentry","addFromBulkUpload",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCategoryService(client){this.init(client);}
KalturaCategoryService.inheritsFrom(KalturaServiceBase);KalturaCategoryService.prototype.add=function(callback,category){var kparams=new Object();this.client.addParam(kparams,"category",toParams(category));this.client.queueServiceActionCall("category","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("category","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.update=function(callback,id,category){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"category",toParams(category));this.client.queueServiceActionCall("category","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.deleteAction=function(callback,id,moveEntriesToParentCategory){if(!moveEntriesToParentCategory)
moveEntriesToParentCategory=1;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"moveEntriesToParentCategory",moveEntriesToParentCategory);this.client.queueServiceActionCall("category","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("category","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.index=function(callback,id,shouldUpdate){if(!shouldUpdate)
shouldUpdate=true;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"shouldUpdate",shouldUpdate);this.client.queueServiceActionCall("category","index",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.move=function(callback,categoryIds,targetCategoryParentId){var kparams=new Object();this.client.addParam(kparams,"categoryIds",categoryIds);this.client.addParam(kparams,"targetCategoryParentId",targetCategoryParentId);this.client.queueServiceActionCall("category","move",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.unlockCategories=function(callback){var kparams=new Object();this.client.queueServiceActionCall("category","unlockCategories",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryService.prototype.addFromBulkUpload=function(callback,fileData,bulkUploadData,bulkUploadCategoryData){if(!bulkUploadData)
bulkUploadData=null;if(!bulkUploadCategoryData)
bulkUploadCategoryData=null;var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);if(bulkUploadData!=null)
this.client.addParam(kparams,"bulkUploadData",toParams(bulkUploadData));if(bulkUploadCategoryData!=null)
this.client.addParam(kparams,"bulkUploadCategoryData",toParams(bulkUploadCategoryData));this.client.queueServiceActionCall("category","addFromBulkUpload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCategoryUserService(client){this.init(client);}
KalturaCategoryUserService.inheritsFrom(KalturaServiceBase);KalturaCategoryUserService.prototype.add=function(callback,categoryUser){var kparams=new Object();this.client.addParam(kparams,"categoryUser",toParams(categoryUser));this.client.queueServiceActionCall("categoryuser","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.get=function(callback,categoryId,userId){var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("categoryuser","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.update=function(callback,categoryId,userId,categoryUser,override){if(!override)
override=false;var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"categoryUser",toParams(categoryUser));this.client.addParam(kparams,"override",override);this.client.queueServiceActionCall("categoryuser","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.deleteAction=function(callback,categoryId,userId){var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("categoryuser","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.activate=function(callback,categoryId,userId){var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("categoryuser","activate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.deactivate=function(callback,categoryId,userId){var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("categoryuser","deactivate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("categoryuser","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.copyFromCategory=function(callback,categoryId){var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.queueServiceActionCall("categoryuser","copyFromCategory",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.index=function(callback,userId,categoryId,shouldUpdate){if(!shouldUpdate)
shouldUpdate=true;var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"shouldUpdate",shouldUpdate);this.client.queueServiceActionCall("categoryuser","index",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCategoryUserService.prototype.addFromBulkUpload=function(callback,fileData,bulkUploadData,bulkUploadCategoryUserData){if(!bulkUploadData)
bulkUploadData=null;if(!bulkUploadCategoryUserData)
bulkUploadCategoryUserData=null;var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);if(bulkUploadData!=null)
this.client.addParam(kparams,"bulkUploadData",toParams(bulkUploadData));if(bulkUploadCategoryUserData!=null)
this.client.addParam(kparams,"bulkUploadCategoryUserData",toParams(bulkUploadCategoryUserData));this.client.queueServiceActionCall("categoryuser","addFromBulkUpload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaConversionProfileAssetParamsService(client){this.init(client);}
KalturaConversionProfileAssetParamsService.inheritsFrom(KalturaServiceBase);KalturaConversionProfileAssetParamsService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("conversionprofileassetparams","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileAssetParamsService.prototype.update=function(callback,conversionProfileId,assetParamsId,conversionProfileAssetParams){var kparams=new Object();this.client.addParam(kparams,"conversionProfileId",conversionProfileId);this.client.addParam(kparams,"assetParamsId",assetParamsId);this.client.addParam(kparams,"conversionProfileAssetParams",toParams(conversionProfileAssetParams));this.client.queueServiceActionCall("conversionprofileassetparams","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaConversionProfileService(client){this.init(client);}
KalturaConversionProfileService.inheritsFrom(KalturaServiceBase);KalturaConversionProfileService.prototype.setAsDefault=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("conversionprofile","setAsDefault",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileService.prototype.getDefault=function(callback,type){if(!type)
type=null;var kparams=new Object();this.client.addParam(kparams,"type",type);this.client.queueServiceActionCall("conversionprofile","getDefault",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileService.prototype.add=function(callback,conversionProfile){var kparams=new Object();this.client.addParam(kparams,"conversionProfile",toParams(conversionProfile));this.client.queueServiceActionCall("conversionprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("conversionprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileService.prototype.update=function(callback,id,conversionProfile){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"conversionProfile",toParams(conversionProfile));this.client.queueServiceActionCall("conversionprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("conversionprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaConversionProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("conversionprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDataService(client){this.init(client);}
KalturaDataService.inheritsFrom(KalturaServiceBase);KalturaDataService.prototype.add=function(callback,dataEntry){var kparams=new Object();this.client.addParam(kparams,"dataEntry",toParams(dataEntry));this.client.queueServiceActionCall("data","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDataService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("data","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDataService.prototype.update=function(callback,entryId,documentEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.queueServiceActionCall("data","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDataService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("data","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDataService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("data","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDeliveryProfileService(client){this.init(client);}
KalturaDeliveryProfileService.inheritsFrom(KalturaServiceBase);KalturaDeliveryProfileService.prototype.add=function(callback,delivery){var kparams=new Object();this.client.addParam(kparams,"delivery",toParams(delivery));this.client.queueServiceActionCall("deliveryprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDeliveryProfileService.prototype.update=function(callback,id,delivery){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"delivery",toParams(delivery));this.client.queueServiceActionCall("deliveryprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDeliveryProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("deliveryprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDeliveryProfileService.prototype.cloneAction=function(callback,deliveryId){var kparams=new Object();this.client.addParam(kparams,"deliveryId",deliveryId);this.client.queueServiceActionCall("deliveryprofile","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDeliveryProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("deliveryprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDocumentService(client){this.init(client);}
KalturaDocumentService.inheritsFrom(KalturaServiceBase);KalturaDocumentService.prototype.addFromUploadedFile=function(callback,documentEntry,uploadTokenId){var kparams=new Object();this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.queueServiceActionCall("document","addFromUploadedFile",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.addFromEntry=function(callback,sourceEntryId,documentEntry,sourceFlavorParamsId){if(!documentEntry)
documentEntry=null;if(!sourceFlavorParamsId)
sourceFlavorParamsId=null;var kparams=new Object();this.client.addParam(kparams,"sourceEntryId",sourceEntryId);if(documentEntry!=null)
this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.addParam(kparams,"sourceFlavorParamsId",sourceFlavorParamsId);this.client.queueServiceActionCall("document","addFromEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.addFromFlavorAsset=function(callback,sourceFlavorAssetId,documentEntry){if(!documentEntry)
documentEntry=null;var kparams=new Object();this.client.addParam(kparams,"sourceFlavorAssetId",sourceFlavorAssetId);if(documentEntry!=null)
this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.queueServiceActionCall("document","addFromFlavorAsset",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.convert=function(callback,entryId,conversionProfileId,dynamicConversionAttributes){if(!conversionProfileId)
conversionProfileId=null;if(!dynamicConversionAttributes)
dynamicConversionAttributes=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"conversionProfileId",conversionProfileId);if(dynamicConversionAttributes!=null)
for(var index in dynamicConversionAttributes)
{var obj=dynamicConversionAttributes[index];this.client.addParam(kparams,"dynamicConversionAttributes:"+index,toParams(obj));}
this.client.queueServiceActionCall("document","convert",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("document","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.update=function(callback,entryId,documentEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.queueServiceActionCall("document","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("document","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.upload=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("document","upload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.convertPptToSwf=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document","convertPptToSwf",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.updateContent=function(callback,entryId,resource,conversionProfileId){if(!conversionProfileId)
conversionProfileId=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"resource",toParams(resource));this.client.addParam(kparams,"conversionProfileId",conversionProfileId);this.client.queueServiceActionCall("document","updateContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.approveReplace=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document","approveReplace",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentService.prototype.cancelReplace=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document","cancelReplace",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaEmailIngestionProfileService(client){this.init(client);}
KalturaEmailIngestionProfileService.inheritsFrom(KalturaServiceBase);KalturaEmailIngestionProfileService.prototype.add=function(callback,EmailIP){var kparams=new Object();this.client.addParam(kparams,"EmailIP",toParams(EmailIP));this.client.queueServiceActionCall("emailingestionprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEmailIngestionProfileService.prototype.getByEmailAddress=function(callback,emailAddress){var kparams=new Object();this.client.addParam(kparams,"emailAddress",emailAddress);this.client.queueServiceActionCall("emailingestionprofile","getByEmailAddress",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEmailIngestionProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("emailingestionprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEmailIngestionProfileService.prototype.update=function(callback,id,EmailIP){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"EmailIP",toParams(EmailIP));this.client.queueServiceActionCall("emailingestionprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEmailIngestionProfileService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("emailingestionprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEmailIngestionProfileService.prototype.addMediaEntry=function(callback,mediaEntry,uploadTokenId,emailProfId,fromAddress,emailMsgId){var kparams=new Object();this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.addParam(kparams,"emailProfId",emailProfId);this.client.addParam(kparams,"fromAddress",fromAddress);this.client.addParam(kparams,"emailMsgId",emailMsgId);this.client.queueServiceActionCall("emailingestionprofile","addMediaEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaFileAssetService(client){this.init(client);}
KalturaFileAssetService.inheritsFrom(KalturaServiceBase);KalturaFileAssetService.prototype.add=function(callback,fileAsset){var kparams=new Object();this.client.addParam(kparams,"fileAsset",toParams(fileAsset));this.client.queueServiceActionCall("fileasset","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFileAssetService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("fileasset","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFileAssetService.prototype.update=function(callback,id,fileAsset){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"fileAsset",toParams(fileAsset));this.client.queueServiceActionCall("fileasset","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFileAssetService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("fileasset","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFileAssetService.prototype.setContent=function(callback,id,contentResource){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"contentResource",toParams(contentResource));this.client.queueServiceActionCall("fileasset","setContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFileAssetService.prototype.listAction=function(callback,filter,pager){if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("fileasset","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaFlavorAssetService(client){this.init(client);}
KalturaFlavorAssetService.inheritsFrom(KalturaServiceBase);KalturaFlavorAssetService.prototype.add=function(callback,entryId,flavorAsset){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"flavorAsset",toParams(flavorAsset));this.client.queueServiceActionCall("flavorasset","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.update=function(callback,id,flavorAsset){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"flavorAsset",toParams(flavorAsset));this.client.queueServiceActionCall("flavorasset","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.setContent=function(callback,id,contentResource){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"contentResource",toParams(contentResource));this.client.queueServiceActionCall("flavorasset","setContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorasset","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.getByEntryId=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("flavorasset","getByEntryId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("flavorasset","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.getWebPlayableByEntryId=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("flavorasset","getWebPlayableByEntryId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.convert=function(callback,entryId,flavorParamsId,priority){if(!priority)
priority=0;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"flavorParamsId",flavorParamsId);this.client.addParam(kparams,"priority",priority);this.client.queueServiceActionCall("flavorasset","convert",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.reconvert=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorasset","reconvert",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorasset","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.getUrl=function(callback,id,storageId,forceProxy){if(!storageId)
storageId=null;if(!forceProxy)
forceProxy=false;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"storageId",storageId);this.client.addParam(kparams,"forceProxy",forceProxy);this.client.queueServiceActionCall("flavorasset","getUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.getRemotePaths=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorasset","getRemotePaths",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.getDownloadUrl=function(callback,id,useCdn){if(!useCdn)
useCdn=false;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"useCdn",useCdn);this.client.queueServiceActionCall("flavorasset","getDownloadUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.getFlavorAssetsWithParams=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("flavorasset","getFlavorAssetsWithParams",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.exportAction=function(callback,assetId,storageProfileId){var kparams=new Object();this.client.addParam(kparams,"assetId",assetId);this.client.addParam(kparams,"storageProfileId",storageProfileId);this.client.queueServiceActionCall("flavorasset","export",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.setAsSource=function(callback,assetId){var kparams=new Object();this.client.addParam(kparams,"assetId",assetId);this.client.queueServiceActionCall("flavorasset","setAsSource",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorAssetService.prototype.deleteLocalContent=function(callback,assetId){var kparams=new Object();this.client.addParam(kparams,"assetId",assetId);this.client.queueServiceActionCall("flavorasset","deleteLocalContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaFlavorParamsOutputService(client){this.init(client);}
KalturaFlavorParamsOutputService.inheritsFrom(KalturaServiceBase);KalturaFlavorParamsOutputService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorparamsoutput","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorParamsOutputService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("flavorparamsoutput","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaFlavorParamsService(client){this.init(client);}
KalturaFlavorParamsService.inheritsFrom(KalturaServiceBase);KalturaFlavorParamsService.prototype.add=function(callback,flavorParams){var kparams=new Object();this.client.addParam(kparams,"flavorParams",toParams(flavorParams));this.client.queueServiceActionCall("flavorparams","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorParamsService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorparams","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorParamsService.prototype.update=function(callback,id,flavorParams){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"flavorParams",toParams(flavorParams));this.client.queueServiceActionCall("flavorparams","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorParamsService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("flavorparams","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorParamsService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("flavorparams","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaFlavorParamsService.prototype.getByConversionProfileId=function(callback,conversionProfileId){var kparams=new Object();this.client.addParam(kparams,"conversionProfileId",conversionProfileId);this.client.queueServiceActionCall("flavorparams","getByConversionProfileId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaLiveChannelSegmentService(client){this.init(client);}
KalturaLiveChannelSegmentService.inheritsFrom(KalturaServiceBase);KalturaLiveChannelSegmentService.prototype.add=function(callback,liveChannelSegment){var kparams=new Object();this.client.addParam(kparams,"liveChannelSegment",toParams(liveChannelSegment));this.client.queueServiceActionCall("livechannelsegment","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelSegmentService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("livechannelsegment","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelSegmentService.prototype.update=function(callback,id,liveChannelSegment){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"liveChannelSegment",toParams(liveChannelSegment));this.client.queueServiceActionCall("livechannelsegment","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelSegmentService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("livechannelsegment","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelSegmentService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("livechannelsegment","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaLiveChannelService(client){this.init(client);}
KalturaLiveChannelService.inheritsFrom(KalturaServiceBase);KalturaLiveChannelService.prototype.add=function(callback,liveChannel){var kparams=new Object();this.client.addParam(kparams,"liveChannel",toParams(liveChannel));this.client.queueServiceActionCall("livechannel","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("livechannel","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.update=function(callback,id,liveChannel){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"liveChannel",toParams(liveChannel));this.client.queueServiceActionCall("livechannel","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("livechannel","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("livechannel","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.isLive=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("livechannel","isLive",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.appendRecording=function(callback,entryId,assetId,mediaServerIndex,resource,duration,isLastChunk){if(!isLastChunk)
isLastChunk=false;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"assetId",assetId);this.client.addParam(kparams,"mediaServerIndex",mediaServerIndex);this.client.addParam(kparams,"resource",toParams(resource));this.client.addParam(kparams,"duration",duration);this.client.addParam(kparams,"isLastChunk",isLastChunk);this.client.queueServiceActionCall("livechannel","appendRecording",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.registerMediaServer=function(callback,entryId,hostname,mediaServerIndex,applicationName){if(!applicationName)
applicationName=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"hostname",hostname);this.client.addParam(kparams,"mediaServerIndex",mediaServerIndex);this.client.addParam(kparams,"applicationName",applicationName);this.client.queueServiceActionCall("livechannel","registerMediaServer",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.unregisterMediaServer=function(callback,entryId,hostname,mediaServerIndex){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"hostname",hostname);this.client.addParam(kparams,"mediaServerIndex",mediaServerIndex);this.client.queueServiceActionCall("livechannel","unregisterMediaServer",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveChannelService.prototype.validateRegisteredMediaServers=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("livechannel","validateRegisteredMediaServers",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaLiveReportsService(client){this.init(client);}
KalturaLiveReportsService.inheritsFrom(KalturaServiceBase);KalturaLiveReportsService.prototype.getEvents=function(callback,reportType,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("livereports","getEvents",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveReportsService.prototype.getReport=function(callback,reportType,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("livereports","getReport",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveReportsService.prototype.exportToCsv=function(callback,reportType,params){var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);this.client.addParam(kparams,"params",toParams(params));this.client.queueServiceActionCall("livereports","exportToCsv",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveReportsService.prototype.serveReport=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("livereports","serveReport",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaStatsService(client){this.init(client);}
KalturaStatsService.inheritsFrom(KalturaServiceBase);KalturaStatsService.prototype.collect=function(callback,event){var kparams=new Object();this.client.addParam(kparams,"event",toParams(event));this.client.queueServiceActionCall("stats","collect",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStatsService.prototype.kmcCollect=function(callback,kmcEvent){var kparams=new Object();this.client.addParam(kparams,"kmcEvent",toParams(kmcEvent));this.client.queueServiceActionCall("stats","kmcCollect",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStatsService.prototype.reportKceError=function(callback,kalturaCEError){var kparams=new Object();this.client.addParam(kparams,"kalturaCEError",toParams(kalturaCEError));this.client.queueServiceActionCall("stats","reportKceError",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStatsService.prototype.reportError=function(callback,errorCode,errorMessage){var kparams=new Object();this.client.addParam(kparams,"errorCode",errorCode);this.client.addParam(kparams,"errorMessage",errorMessage);this.client.queueServiceActionCall("stats","reportError",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaLiveStreamService(client){this.init(client);}
KalturaLiveStreamService.inheritsFrom(KalturaServiceBase);KalturaLiveStreamService.prototype.add=function(callback,liveStreamEntry,sourceType){if(!sourceType)
sourceType=null;var kparams=new Object();this.client.addParam(kparams,"liveStreamEntry",toParams(liveStreamEntry));this.client.addParam(kparams,"sourceType",sourceType);this.client.queueServiceActionCall("livestream","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("livestream","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.authenticate=function(callback,entryId,token){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"token",token);this.client.queueServiceActionCall("livestream","authenticate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.update=function(callback,entryId,liveStreamEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"liveStreamEntry",toParams(liveStreamEntry));this.client.queueServiceActionCall("livestream","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("livestream","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("livestream","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.updateOfflineThumbnailJpeg=function(callback,entryId,fileData){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("livestream","updateOfflineThumbnailJpeg",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.updateOfflineThumbnailFromUrl=function(callback,entryId,url){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("livestream","updateOfflineThumbnailFromUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.isLive=function(callback,id,protocol){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"protocol",protocol);this.client.queueServiceActionCall("livestream","isLive",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.addLiveStreamPushPublishConfiguration=function(callback,entryId,protocol,url,liveStreamConfiguration){if(!url)
url=null;if(!liveStreamConfiguration)
liveStreamConfiguration=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"protocol",protocol);this.client.addParam(kparams,"url",url);if(liveStreamConfiguration!=null)
this.client.addParam(kparams,"liveStreamConfiguration",toParams(liveStreamConfiguration));this.client.queueServiceActionCall("livestream","addLiveStreamPushPublishConfiguration",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.removeLiveStreamPushPublishConfiguration=function(callback,entryId,protocol){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"protocol",protocol);this.client.queueServiceActionCall("livestream","removeLiveStreamPushPublishConfiguration",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.appendRecording=function(callback,entryId,assetId,mediaServerIndex,resource,duration,isLastChunk){if(!isLastChunk)
isLastChunk=false;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"assetId",assetId);this.client.addParam(kparams,"mediaServerIndex",mediaServerIndex);this.client.addParam(kparams,"resource",toParams(resource));this.client.addParam(kparams,"duration",duration);this.client.addParam(kparams,"isLastChunk",isLastChunk);this.client.queueServiceActionCall("livestream","appendRecording",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.registerMediaServer=function(callback,entryId,hostname,mediaServerIndex,applicationName){if(!applicationName)
applicationName=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"hostname",hostname);this.client.addParam(kparams,"mediaServerIndex",mediaServerIndex);this.client.addParam(kparams,"applicationName",applicationName);this.client.queueServiceActionCall("livestream","registerMediaServer",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.unregisterMediaServer=function(callback,entryId,hostname,mediaServerIndex){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"hostname",hostname);this.client.addParam(kparams,"mediaServerIndex",mediaServerIndex);this.client.queueServiceActionCall("livestream","unregisterMediaServer",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.validateRegisteredMediaServers=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("livestream","validateRegisteredMediaServers",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLiveStreamService.prototype.createPeriodicSyncPoints=function(callback,entryId,interval,duration){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"interval",interval);this.client.addParam(kparams,"duration",duration);this.client.queueServiceActionCall("livestream","createPeriodicSyncPoints",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaMediaInfoService(client){this.init(client);}
KalturaMediaInfoService.inheritsFrom(KalturaServiceBase);KalturaMediaInfoService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("mediainfo","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaMediaServerService(client){this.init(client);}
KalturaMediaServerService.inheritsFrom(KalturaServiceBase);KalturaMediaServerService.prototype.get=function(callback,hostname){var kparams=new Object();this.client.addParam(kparams,"hostname",hostname);this.client.queueServiceActionCall("mediaserver","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaServerService.prototype.reportStatus=function(callback,hostname,mediaServerStatus){var kparams=new Object();this.client.addParam(kparams,"hostname",hostname);this.client.addParam(kparams,"mediaServerStatus",toParams(mediaServerStatus));this.client.queueServiceActionCall("mediaserver","reportStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaMediaService(client){this.init(client);}
KalturaMediaService.inheritsFrom(KalturaServiceBase);KalturaMediaService.prototype.add=function(callback,entry){var kparams=new Object();this.client.addParam(kparams,"entry",toParams(entry));this.client.queueServiceActionCall("media","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addContent=function(callback,entryId,resource){if(!resource)
resource=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);if(resource!=null)
this.client.addParam(kparams,"resource",toParams(resource));this.client.queueServiceActionCall("media","addContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addFromUrl=function(callback,mediaEntry,url){var kparams=new Object();this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("media","addFromUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addFromSearchResult=function(callback,mediaEntry,searchResult){if(!mediaEntry)
mediaEntry=null;if(!searchResult)
searchResult=null;var kparams=new Object();if(mediaEntry!=null)
this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));if(searchResult!=null)
this.client.addParam(kparams,"searchResult",toParams(searchResult));this.client.queueServiceActionCall("media","addFromSearchResult",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addFromUploadedFile=function(callback,mediaEntry,uploadTokenId){var kparams=new Object();this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.queueServiceActionCall("media","addFromUploadedFile",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addFromRecordedWebcam=function(callback,mediaEntry,webcamTokenId){var kparams=new Object();this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.addParam(kparams,"webcamTokenId",webcamTokenId);this.client.queueServiceActionCall("media","addFromRecordedWebcam",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addFromEntry=function(callback,sourceEntryId,mediaEntry,sourceFlavorParamsId){if(!mediaEntry)
mediaEntry=null;if(!sourceFlavorParamsId)
sourceFlavorParamsId=null;var kparams=new Object();this.client.addParam(kparams,"sourceEntryId",sourceEntryId);if(mediaEntry!=null)
this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.addParam(kparams,"sourceFlavorParamsId",sourceFlavorParamsId);this.client.queueServiceActionCall("media","addFromEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.addFromFlavorAsset=function(callback,sourceFlavorAssetId,mediaEntry){if(!mediaEntry)
mediaEntry=null;var kparams=new Object();this.client.addParam(kparams,"sourceFlavorAssetId",sourceFlavorAssetId);if(mediaEntry!=null)
this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.queueServiceActionCall("media","addFromFlavorAsset",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.convert=function(callback,entryId,conversionProfileId,dynamicConversionAttributes){if(!conversionProfileId)
conversionProfileId=null;if(!dynamicConversionAttributes)
dynamicConversionAttributes=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"conversionProfileId",conversionProfileId);if(dynamicConversionAttributes!=null)
for(var index in dynamicConversionAttributes)
{var obj=dynamicConversionAttributes[index];this.client.addParam(kparams,"dynamicConversionAttributes:"+index,toParams(obj));}
this.client.queueServiceActionCall("media","convert",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("media","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.getMrss=function(callback,entryId,extendingItemsArray){if(!extendingItemsArray)
extendingItemsArray=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);if(extendingItemsArray!=null)
for(var index in extendingItemsArray)
{var obj=extendingItemsArray[index];this.client.addParam(kparams,"extendingItemsArray:"+index,toParams(obj));}
this.client.queueServiceActionCall("media","getMrss",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.update=function(callback,entryId,mediaEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"mediaEntry",toParams(mediaEntry));this.client.queueServiceActionCall("media","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.updateContent=function(callback,entryId,resource,conversionProfileId,advancedOptions){if(!conversionProfileId)
conversionProfileId=null;if(!advancedOptions)
advancedOptions=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"resource",toParams(resource));this.client.addParam(kparams,"conversionProfileId",conversionProfileId);if(advancedOptions!=null)
this.client.addParam(kparams,"advancedOptions",toParams(advancedOptions));this.client.queueServiceActionCall("media","updateContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("media","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.approveReplace=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("media","approveReplace",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.cancelReplace=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("media","cancelReplace",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("media","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("media","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.upload=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("media","upload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.updateThumbnail=function(callback,entryId,timeOffset,flavorParamsId){if(!flavorParamsId)
flavorParamsId=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"timeOffset",timeOffset);this.client.addParam(kparams,"flavorParamsId",flavorParamsId);this.client.queueServiceActionCall("media","updateThumbnail",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.updateThumbnailFromSourceEntry=function(callback,entryId,sourceEntryId,timeOffset,flavorParamsId){if(!flavorParamsId)
flavorParamsId=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"sourceEntryId",sourceEntryId);this.client.addParam(kparams,"timeOffset",timeOffset);this.client.addParam(kparams,"flavorParamsId",flavorParamsId);this.client.queueServiceActionCall("media","updateThumbnailFromSourceEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.updateThumbnailJpeg=function(callback,entryId,fileData){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("media","updateThumbnailJpeg",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.updateThumbnailFromUrl=function(callback,entryId,url){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("media","updateThumbnailFromUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.requestConversion=function(callback,entryId,fileFormat){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"fileFormat",fileFormat);this.client.queueServiceActionCall("media","requestConversion",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.flag=function(callback,moderationFlag){var kparams=new Object();this.client.addParam(kparams,"moderationFlag",toParams(moderationFlag));this.client.queueServiceActionCall("media","flag",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.reject=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("media","reject",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.approve=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("media","approve",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.listFlags=function(callback,entryId,pager){if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("media","listFlags",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.anonymousRank=function(callback,entryId,rank){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"rank",rank);this.client.queueServiceActionCall("media","anonymousRank",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMediaService.prototype.bulkUploadAdd=function(callback,fileData,bulkUploadData,bulkUploadEntryData){if(!bulkUploadData)
bulkUploadData=null;if(!bulkUploadEntryData)
bulkUploadEntryData=null;var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);if(bulkUploadData!=null)
this.client.addParam(kparams,"bulkUploadData",toParams(bulkUploadData));if(bulkUploadEntryData!=null)
this.client.addParam(kparams,"bulkUploadEntryData",toParams(bulkUploadEntryData));this.client.queueServiceActionCall("media","bulkUploadAdd",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaMixingService(client){this.init(client);}
KalturaMixingService.inheritsFrom(KalturaServiceBase);KalturaMixingService.prototype.add=function(callback,mixEntry){var kparams=new Object();this.client.addParam(kparams,"mixEntry",toParams(mixEntry));this.client.queueServiceActionCall("mixing","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("mixing","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.update=function(callback,entryId,mixEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"mixEntry",toParams(mixEntry));this.client.queueServiceActionCall("mixing","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("mixing","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("mixing","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("mixing","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.cloneAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("mixing","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.appendMediaEntry=function(callback,mixEntryId,mediaEntryId){var kparams=new Object();this.client.addParam(kparams,"mixEntryId",mixEntryId);this.client.addParam(kparams,"mediaEntryId",mediaEntryId);this.client.queueServiceActionCall("mixing","appendMediaEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.getMixesByMediaId=function(callback,mediaEntryId){var kparams=new Object();this.client.addParam(kparams,"mediaEntryId",mediaEntryId);this.client.queueServiceActionCall("mixing","getMixesByMediaId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.getReadyMediaEntries=function(callback,mixId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"mixId",mixId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("mixing","getReadyMediaEntries",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMixingService.prototype.anonymousRank=function(callback,entryId,rank){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"rank",rank);this.client.queueServiceActionCall("mixing","anonymousRank",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaNotificationService(client){this.init(client);}
KalturaNotificationService.inheritsFrom(KalturaServiceBase);KalturaNotificationService.prototype.getClientNotification=function(callback,entryId,type){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"type",type);this.client.queueServiceActionCall("notification","getClientNotification",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaPartnerService(client){this.init(client);}
KalturaPartnerService.inheritsFrom(KalturaServiceBase);KalturaPartnerService.prototype.register=function(callback,partner,cmsPassword,templatePartnerId,silent){if(!cmsPassword)
cmsPassword="";if(!templatePartnerId)
templatePartnerId=null;if(!silent)
silent=false;var kparams=new Object();this.client.addParam(kparams,"partner",toParams(partner));this.client.addParam(kparams,"cmsPassword",cmsPassword);this.client.addParam(kparams,"templatePartnerId",templatePartnerId);this.client.addParam(kparams,"silent",silent);this.client.queueServiceActionCall("partner","register",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.update=function(callback,partner,allowEmpty){if(!allowEmpty)
allowEmpty=false;var kparams=new Object();this.client.addParam(kparams,"partner",toParams(partner));this.client.addParam(kparams,"allowEmpty",allowEmpty);this.client.queueServiceActionCall("partner","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.get=function(callback,id){if(!id)
id=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("partner","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.getSecrets=function(callback,partnerId,adminEmail,cmsPassword){var kparams=new Object();this.client.addParam(kparams,"partnerId",partnerId);this.client.addParam(kparams,"adminEmail",adminEmail);this.client.addParam(kparams,"cmsPassword",cmsPassword);this.client.queueServiceActionCall("partner","getSecrets",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.getInfo=function(callback){var kparams=new Object();this.client.queueServiceActionCall("partner","getInfo",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.getUsage=function(callback,year,month,resolution){if(!year)
year="";if(!month)
month=1;if(!resolution)
resolution=null;var kparams=new Object();this.client.addParam(kparams,"year",year);this.client.addParam(kparams,"month",month);this.client.addParam(kparams,"resolution",resolution);this.client.queueServiceActionCall("partner","getUsage",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.getStatistics=function(callback){var kparams=new Object();this.client.queueServiceActionCall("partner","getStatistics",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.listPartnersForUser=function(callback,partnerFilter,pager){if(!partnerFilter)
partnerFilter=null;if(!pager)
pager=null;var kparams=new Object();if(partnerFilter!=null)
this.client.addParam(kparams,"partnerFilter",toParams(partnerFilter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("partner","listPartnersForUser",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("partner","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.listFeatureStatus=function(callback){var kparams=new Object();this.client.queueServiceActionCall("partner","listFeatureStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPartnerService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("partner","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaPermissionItemService(client){this.init(client);}
KalturaPermissionItemService.inheritsFrom(KalturaServiceBase);KalturaPermissionItemService.prototype.add=function(callback,permissionItem){var kparams=new Object();this.client.addParam(kparams,"permissionItem",toParams(permissionItem));this.client.queueServiceActionCall("permissionitem","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionItemService.prototype.get=function(callback,permissionItemId){var kparams=new Object();this.client.addParam(kparams,"permissionItemId",permissionItemId);this.client.queueServiceActionCall("permissionitem","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionItemService.prototype.update=function(callback,permissionItemId,permissionItem){var kparams=new Object();this.client.addParam(kparams,"permissionItemId",permissionItemId);this.client.addParam(kparams,"permissionItem",toParams(permissionItem));this.client.queueServiceActionCall("permissionitem","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionItemService.prototype.deleteAction=function(callback,permissionItemId){var kparams=new Object();this.client.addParam(kparams,"permissionItemId",permissionItemId);this.client.queueServiceActionCall("permissionitem","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionItemService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("permissionitem","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaPermissionService(client){this.init(client);}
KalturaPermissionService.inheritsFrom(KalturaServiceBase);KalturaPermissionService.prototype.add=function(callback,permission){var kparams=new Object();this.client.addParam(kparams,"permission",toParams(permission));this.client.queueServiceActionCall("permission","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionService.prototype.get=function(callback,permissionName){var kparams=new Object();this.client.addParam(kparams,"permissionName",permissionName);this.client.queueServiceActionCall("permission","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionService.prototype.update=function(callback,permissionName,permission){var kparams=new Object();this.client.addParam(kparams,"permissionName",permissionName);this.client.addParam(kparams,"permission",toParams(permission));this.client.queueServiceActionCall("permission","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionService.prototype.deleteAction=function(callback,permissionName){var kparams=new Object();this.client.addParam(kparams,"permissionName",permissionName);this.client.queueServiceActionCall("permission","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("permission","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPermissionService.prototype.getCurrentPermissions=function(callback){var kparams=new Object();this.client.queueServiceActionCall("permission","getCurrentPermissions",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaPlaylistService(client){this.init(client);}
KalturaPlaylistService.inheritsFrom(KalturaServiceBase);KalturaPlaylistService.prototype.add=function(callback,playlist,updateStats){if(!updateStats)
updateStats=false;var kparams=new Object();this.client.addParam(kparams,"playlist",toParams(playlist));this.client.addParam(kparams,"updateStats",updateStats);this.client.queueServiceActionCall("playlist","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.get=function(callback,id,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("playlist","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.update=function(callback,id,playlist,updateStats){if(!updateStats)
updateStats=false;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"playlist",toParams(playlist));this.client.addParam(kparams,"updateStats",updateStats);this.client.queueServiceActionCall("playlist","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("playlist","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.cloneAction=function(callback,id,newPlaylist){if(!newPlaylist)
newPlaylist=null;var kparams=new Object();this.client.addParam(kparams,"id",id);if(newPlaylist!=null)
this.client.addParam(kparams,"newPlaylist",toParams(newPlaylist));this.client.queueServiceActionCall("playlist","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("playlist","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.execute=function(callback,id,detailed,playlistContext,filter){if(!detailed)
detailed="";if(!playlistContext)
playlistContext=null;if(!filter)
filter=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"detailed",detailed);if(playlistContext!=null)
this.client.addParam(kparams,"playlistContext",toParams(playlistContext));if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("playlist","execute",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.executeFromContent=function(callback,playlistType,playlistContent,detailed){if(!detailed)
detailed="";var kparams=new Object();this.client.addParam(kparams,"playlistType",playlistType);this.client.addParam(kparams,"playlistContent",playlistContent);this.client.addParam(kparams,"detailed",detailed);this.client.queueServiceActionCall("playlist","executeFromContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.executeFromFilters=function(callback,filters,totalResults,detailed){if(!detailed)
detailed="";var kparams=new Object();for(var index in filters)
{var obj=filters[index];this.client.addParam(kparams,"filters:"+index,toParams(obj));}
this.client.addParam(kparams,"totalResults",totalResults);this.client.addParam(kparams,"detailed",detailed);this.client.queueServiceActionCall("playlist","executeFromFilters",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlaylistService.prototype.getStatsFromContent=function(callback,playlistType,playlistContent){var kparams=new Object();this.client.addParam(kparams,"playlistType",playlistType);this.client.addParam(kparams,"playlistContent",playlistContent);this.client.queueServiceActionCall("playlist","getStatsFromContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaReportService(client){this.init(client);}
KalturaReportService.inheritsFrom(KalturaServiceBase);KalturaReportService.prototype.getGraphs=function(callback,reportType,reportInputFilter,dimension,objectIds){if(!dimension)
dimension=null;if(!objectIds)
objectIds=null;var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);this.client.addParam(kparams,"reportInputFilter",toParams(reportInputFilter));this.client.addParam(kparams,"dimension",dimension);this.client.addParam(kparams,"objectIds",objectIds);this.client.queueServiceActionCall("report","getGraphs",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaReportService.prototype.getTotal=function(callback,reportType,reportInputFilter,objectIds){if(!objectIds)
objectIds=null;var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);this.client.addParam(kparams,"reportInputFilter",toParams(reportInputFilter));this.client.addParam(kparams,"objectIds",objectIds);this.client.queueServiceActionCall("report","getTotal",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaReportService.prototype.getBaseTotal=function(callback,reportType,reportInputFilter,objectIds){if(!objectIds)
objectIds=null;var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);this.client.addParam(kparams,"reportInputFilter",toParams(reportInputFilter));this.client.addParam(kparams,"objectIds",objectIds);this.client.queueServiceActionCall("report","getBaseTotal",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaReportService.prototype.getTable=function(callback,reportType,reportInputFilter,pager,order,objectIds){if(!order)
order=null;if(!objectIds)
objectIds=null;var kparams=new Object();this.client.addParam(kparams,"reportType",reportType);this.client.addParam(kparams,"reportInputFilter",toParams(reportInputFilter));this.client.addParam(kparams,"pager",toParams(pager));this.client.addParam(kparams,"order",order);this.client.addParam(kparams,"objectIds",objectIds);this.client.queueServiceActionCall("report","getTable",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaReportService.prototype.getUrlForReportAsCsv=function(callback,reportTitle,reportText,headers,reportType,reportInputFilter,dimension,pager,order,objectIds){if(!dimension)
dimension=null;if(!pager)
pager=null;if(!order)
order=null;if(!objectIds)
objectIds=null;var kparams=new Object();this.client.addParam(kparams,"reportTitle",reportTitle);this.client.addParam(kparams,"reportText",reportText);this.client.addParam(kparams,"headers",headers);this.client.addParam(kparams,"reportType",reportType);this.client.addParam(kparams,"reportInputFilter",toParams(reportInputFilter));this.client.addParam(kparams,"dimension",dimension);if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.addParam(kparams,"order",order);this.client.addParam(kparams,"objectIds",objectIds);this.client.queueServiceActionCall("report","getUrlForReportAsCsv",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaReportService.prototype.serve=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("report","serve",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaReportService.prototype.execute=function(callback,id,params){if(!params)
params=null;var kparams=new Object();this.client.addParam(kparams,"id",id);if(params!=null)
for(var index in params)
{var obj=params[index];this.client.addParam(kparams,"params:"+index,toParams(obj));}
this.client.queueServiceActionCall("report","execute",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaSchemaService(client){this.init(client);}
KalturaSchemaService.inheritsFrom(KalturaServiceBase);function KalturaSearchService(client){this.init(client);}
KalturaSearchService.inheritsFrom(KalturaServiceBase);KalturaSearchService.prototype.search=function(callback,search,pager){if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"search",toParams(search));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("search","search",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSearchService.prototype.getMediaInfo=function(callback,searchResult){var kparams=new Object();this.client.addParam(kparams,"searchResult",toParams(searchResult));this.client.queueServiceActionCall("search","getMediaInfo",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSearchService.prototype.searchUrl=function(callback,mediaType,url){var kparams=new Object();this.client.addParam(kparams,"mediaType",mediaType);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("search","searchUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSearchService.prototype.externalLogin=function(callback,searchSource,userName,password){var kparams=new Object();this.client.addParam(kparams,"searchSource",searchSource);this.client.addParam(kparams,"userName",userName);this.client.addParam(kparams,"password",password);this.client.queueServiceActionCall("search","externalLogin",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaSessionService(client){this.init(client);}
KalturaSessionService.inheritsFrom(KalturaServiceBase);KalturaSessionService.prototype.start=function(callback,secret,userId,type,partnerId,expiry,privileges){if(!userId)
userId="";if(!type)
type=0;if(!partnerId)
partnerId=null;if(!expiry)
expiry=86400;if(!privileges)
privileges=null;var kparams=new Object();this.client.addParam(kparams,"secret",secret);this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"type",type);this.client.addParam(kparams,"partnerId",partnerId);this.client.addParam(kparams,"expiry",expiry);this.client.addParam(kparams,"privileges",privileges);this.client.queueServiceActionCall("session","start",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSessionService.prototype.end=function(callback){var kparams=new Object();this.client.queueServiceActionCall("session","end",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSessionService.prototype.impersonate=function(callback,secret,impersonatedPartnerId,userId,type,partnerId,expiry,privileges){if(!userId)
userId="";if(!type)
type=0;if(!partnerId)
partnerId=null;if(!expiry)
expiry=86400;if(!privileges)
privileges=null;var kparams=new Object();this.client.addParam(kparams,"secret",secret);this.client.addParam(kparams,"impersonatedPartnerId",impersonatedPartnerId);this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"type",type);this.client.addParam(kparams,"partnerId",partnerId);this.client.addParam(kparams,"expiry",expiry);this.client.addParam(kparams,"privileges",privileges);this.client.queueServiceActionCall("session","impersonate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSessionService.prototype.impersonateByKs=function(callback,session,type,expiry,privileges){if(!type)
type=null;if(!expiry)
expiry=null;if(!privileges)
privileges=null;var kparams=new Object();this.client.addParam(kparams,"session",session);this.client.addParam(kparams,"type",type);this.client.addParam(kparams,"expiry",expiry);this.client.addParam(kparams,"privileges",privileges);this.client.queueServiceActionCall("session","impersonateByKs",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSessionService.prototype.get=function(callback,session){if(!session)
session=null;var kparams=new Object();this.client.addParam(kparams,"session",session);this.client.queueServiceActionCall("session","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSessionService.prototype.startWidgetSession=function(callback,widgetId,expiry){if(!expiry)
expiry=86400;var kparams=new Object();this.client.addParam(kparams,"widgetId",widgetId);this.client.addParam(kparams,"expiry",expiry);this.client.queueServiceActionCall("session","startWidgetSession",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaStorageProfileService(client){this.init(client);}
KalturaStorageProfileService.inheritsFrom(KalturaServiceBase);KalturaStorageProfileService.prototype.add=function(callback,storageProfile){var kparams=new Object();this.client.addParam(kparams,"storageProfile",toParams(storageProfile));this.client.queueServiceActionCall("storageprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStorageProfileService.prototype.updateStatus=function(callback,storageId,status){var kparams=new Object();this.client.addParam(kparams,"storageId",storageId);this.client.addParam(kparams,"status",status);this.client.queueServiceActionCall("storageprofile","updateStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStorageProfileService.prototype.get=function(callback,storageProfileId){var kparams=new Object();this.client.addParam(kparams,"storageProfileId",storageProfileId);this.client.queueServiceActionCall("storageprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStorageProfileService.prototype.update=function(callback,storageProfileId,storageProfile){var kparams=new Object();this.client.addParam(kparams,"storageProfileId",storageProfileId);this.client.addParam(kparams,"storageProfile",toParams(storageProfile));this.client.queueServiceActionCall("storageprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaStorageProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("storageprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaSyndicationFeedService(client){this.init(client);}
KalturaSyndicationFeedService.inheritsFrom(KalturaServiceBase);KalturaSyndicationFeedService.prototype.add=function(callback,syndicationFeed){var kparams=new Object();this.client.addParam(kparams,"syndicationFeed",toParams(syndicationFeed));this.client.queueServiceActionCall("syndicationfeed","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSyndicationFeedService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("syndicationfeed","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSyndicationFeedService.prototype.update=function(callback,id,syndicationFeed){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"syndicationFeed",toParams(syndicationFeed));this.client.queueServiceActionCall("syndicationfeed","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSyndicationFeedService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("syndicationfeed","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSyndicationFeedService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("syndicationfeed","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSyndicationFeedService.prototype.getEntryCount=function(callback,feedId){var kparams=new Object();this.client.addParam(kparams,"feedId",feedId);this.client.queueServiceActionCall("syndicationfeed","getEntryCount",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSyndicationFeedService.prototype.requestConversion=function(callback,feedId){var kparams=new Object();this.client.addParam(kparams,"feedId",feedId);this.client.queueServiceActionCall("syndicationfeed","requestConversion",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaSystemService(client){this.init(client);}
KalturaSystemService.inheritsFrom(KalturaServiceBase);KalturaSystemService.prototype.ping=function(callback){var kparams=new Object();this.client.queueServiceActionCall("system","ping",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSystemService.prototype.pingDatabase=function(callback){var kparams=new Object();this.client.queueServiceActionCall("system","pingDatabase",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSystemService.prototype.getTime=function(callback){var kparams=new Object();this.client.queueServiceActionCall("system","getTime",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaSystemService.prototype.getVersion=function(callback){var kparams=new Object();this.client.queueServiceActionCall("system","getVersion",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaThumbAssetService(client){this.init(client);}
KalturaThumbAssetService.inheritsFrom(KalturaServiceBase);KalturaThumbAssetService.prototype.add=function(callback,entryId,thumbAsset){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"thumbAsset",toParams(thumbAsset));this.client.queueServiceActionCall("thumbasset","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.setContent=function(callback,id,contentResource){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"contentResource",toParams(contentResource));this.client.queueServiceActionCall("thumbasset","setContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.update=function(callback,id,thumbAsset){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"thumbAsset",toParams(thumbAsset));this.client.queueServiceActionCall("thumbasset","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.setAsDefault=function(callback,thumbAssetId){var kparams=new Object();this.client.addParam(kparams,"thumbAssetId",thumbAssetId);this.client.queueServiceActionCall("thumbasset","setAsDefault",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.generateByEntryId=function(callback,entryId,destThumbParamsId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"destThumbParamsId",destThumbParamsId);this.client.queueServiceActionCall("thumbasset","generateByEntryId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.generate=function(callback,entryId,thumbParams,sourceAssetId){if(!sourceAssetId)
sourceAssetId=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"thumbParams",toParams(thumbParams));this.client.addParam(kparams,"sourceAssetId",sourceAssetId);this.client.queueServiceActionCall("thumbasset","generate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.regenerate=function(callback,thumbAssetId){var kparams=new Object();this.client.addParam(kparams,"thumbAssetId",thumbAssetId);this.client.queueServiceActionCall("thumbasset","regenerate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.get=function(callback,thumbAssetId){var kparams=new Object();this.client.addParam(kparams,"thumbAssetId",thumbAssetId);this.client.queueServiceActionCall("thumbasset","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.getByEntryId=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("thumbasset","getByEntryId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("thumbasset","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.addFromUrl=function(callback,entryId,url){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("thumbasset","addFromUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.addFromImage=function(callback,entryId,fileData){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("thumbasset","addFromImage",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.deleteAction=function(callback,thumbAssetId){var kparams=new Object();this.client.addParam(kparams,"thumbAssetId",thumbAssetId);this.client.queueServiceActionCall("thumbasset","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.getUrl=function(callback,id,storageId,thumbParams){if(!storageId)
storageId=null;if(!thumbParams)
thumbParams=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"storageId",storageId);if(thumbParams!=null)
this.client.addParam(kparams,"thumbParams",toParams(thumbParams));this.client.queueServiceActionCall("thumbasset","getUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbAssetService.prototype.getRemotePaths=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("thumbasset","getRemotePaths",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaThumbParamsOutputService(client){this.init(client);}
KalturaThumbParamsOutputService.inheritsFrom(KalturaServiceBase);KalturaThumbParamsOutputService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("thumbparamsoutput","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbParamsOutputService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("thumbparamsoutput","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaThumbParamsService(client){this.init(client);}
KalturaThumbParamsService.inheritsFrom(KalturaServiceBase);KalturaThumbParamsService.prototype.add=function(callback,thumbParams){var kparams=new Object();this.client.addParam(kparams,"thumbParams",toParams(thumbParams));this.client.queueServiceActionCall("thumbparams","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbParamsService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("thumbparams","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbParamsService.prototype.update=function(callback,id,thumbParams){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"thumbParams",toParams(thumbParams));this.client.queueServiceActionCall("thumbparams","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbParamsService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("thumbparams","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbParamsService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("thumbparams","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaThumbParamsService.prototype.getByConversionProfileId=function(callback,conversionProfileId){var kparams=new Object();this.client.addParam(kparams,"conversionProfileId",conversionProfileId);this.client.queueServiceActionCall("thumbparams","getByConversionProfileId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaUiConfService(client){this.init(client);}
KalturaUiConfService.inheritsFrom(KalturaServiceBase);KalturaUiConfService.prototype.add=function(callback,uiConf){var kparams=new Object();this.client.addParam(kparams,"uiConf",toParams(uiConf));this.client.queueServiceActionCall("uiconf","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.update=function(callback,id,uiConf){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"uiConf",toParams(uiConf));this.client.queueServiceActionCall("uiconf","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("uiconf","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("uiconf","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.cloneAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("uiconf","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.listTemplates=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("uiconf","listTemplates",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("uiconf","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUiConfService.prototype.getAvailableTypes=function(callback){var kparams=new Object();this.client.queueServiceActionCall("uiconf","getAvailableTypes",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaUploadService(client){this.init(client);}
KalturaUploadService.inheritsFrom(KalturaServiceBase);KalturaUploadService.prototype.upload=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("upload","upload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUploadService.prototype.getUploadedFileTokenByFileName=function(callback,fileName){var kparams=new Object();this.client.addParam(kparams,"fileName",fileName);this.client.queueServiceActionCall("upload","getUploadedFileTokenByFileName",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaUploadTokenService(client){this.init(client);}
KalturaUploadTokenService.inheritsFrom(KalturaServiceBase);KalturaUploadTokenService.prototype.add=function(callback,uploadToken){if(!uploadToken)
uploadToken=null;var kparams=new Object();if(uploadToken!=null)
this.client.addParam(kparams,"uploadToken",toParams(uploadToken));this.client.queueServiceActionCall("uploadtoken","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUploadTokenService.prototype.get=function(callback,uploadTokenId){var kparams=new Object();this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.queueServiceActionCall("uploadtoken","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUploadTokenService.prototype.upload=function(callback,uploadTokenId,fileData,resume,finalChunk,resumeAt){if(!resume)
resume=false;if(!finalChunk)
finalChunk=true;if(!resumeAt)
resumeAt=-1;var kparams=new Object();this.client.addParam(kparams,"uploadTokenId",uploadTokenId);kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.addParam(kparams,"resume",resume);this.client.addParam(kparams,"finalChunk",finalChunk);this.client.addParam(kparams,"resumeAt",resumeAt);this.client.queueServiceActionCall("uploadtoken","upload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUploadTokenService.prototype.deleteAction=function(callback,uploadTokenId){var kparams=new Object();this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.queueServiceActionCall("uploadtoken","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUploadTokenService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("uploadtoken","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaUserRoleService(client){this.init(client);}
KalturaUserRoleService.inheritsFrom(KalturaServiceBase);KalturaUserRoleService.prototype.add=function(callback,userRole){var kparams=new Object();this.client.addParam(kparams,"userRole",toParams(userRole));this.client.queueServiceActionCall("userrole","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserRoleService.prototype.get=function(callback,userRoleId){var kparams=new Object();this.client.addParam(kparams,"userRoleId",userRoleId);this.client.queueServiceActionCall("userrole","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserRoleService.prototype.update=function(callback,userRoleId,userRole){var kparams=new Object();this.client.addParam(kparams,"userRoleId",userRoleId);this.client.addParam(kparams,"userRole",toParams(userRole));this.client.queueServiceActionCall("userrole","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserRoleService.prototype.deleteAction=function(callback,userRoleId){var kparams=new Object();this.client.addParam(kparams,"userRoleId",userRoleId);this.client.queueServiceActionCall("userrole","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserRoleService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("userrole","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserRoleService.prototype.cloneAction=function(callback,userRoleId){var kparams=new Object();this.client.addParam(kparams,"userRoleId",userRoleId);this.client.queueServiceActionCall("userrole","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaUserService(client){this.init(client);}
KalturaUserService.inheritsFrom(KalturaServiceBase);KalturaUserService.prototype.add=function(callback,user){var kparams=new Object();this.client.addParam(kparams,"user",toParams(user));this.client.queueServiceActionCall("user","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.update=function(callback,userId,user){var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"user",toParams(user));this.client.queueServiceActionCall("user","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.get=function(callback,userId){if(!userId)
userId=null;var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("user","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.getByLoginId=function(callback,loginId){var kparams=new Object();this.client.addParam(kparams,"loginId",loginId);this.client.queueServiceActionCall("user","getByLoginId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.deleteAction=function(callback,userId){var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("user","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("user","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.notifyBan=function(callback,userId){var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("user","notifyBan",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.login=function(callback,partnerId,userId,password,expiry,privileges){if(!expiry)
expiry=86400;if(!privileges)
privileges="*";var kparams=new Object();this.client.addParam(kparams,"partnerId",partnerId);this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"password",password);this.client.addParam(kparams,"expiry",expiry);this.client.addParam(kparams,"privileges",privileges);this.client.queueServiceActionCall("user","login",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.loginByLoginId=function(callback,loginId,password,partnerId,expiry,privileges){if(!partnerId)
partnerId=null;if(!expiry)
expiry=86400;if(!privileges)
privileges="*";var kparams=new Object();this.client.addParam(kparams,"loginId",loginId);this.client.addParam(kparams,"password",password);this.client.addParam(kparams,"partnerId",partnerId);this.client.addParam(kparams,"expiry",expiry);this.client.addParam(kparams,"privileges",privileges);this.client.queueServiceActionCall("user","loginByLoginId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.updateLoginData=function(callback,oldLoginId,password,newLoginId,newPassword,newFirstName,newLastName){if(!newLoginId)
newLoginId="";if(!newPassword)
newPassword="";if(!newFirstName)
newFirstName=null;if(!newLastName)
newLastName=null;var kparams=new Object();this.client.addParam(kparams,"oldLoginId",oldLoginId);this.client.addParam(kparams,"password",password);this.client.addParam(kparams,"newLoginId",newLoginId);this.client.addParam(kparams,"newPassword",newPassword);this.client.addParam(kparams,"newFirstName",newFirstName);this.client.addParam(kparams,"newLastName",newLastName);this.client.queueServiceActionCall("user","updateLoginData",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.resetPassword=function(callback,email){var kparams=new Object();this.client.addParam(kparams,"email",email);this.client.queueServiceActionCall("user","resetPassword",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.setInitialPassword=function(callback,hashKey,newPassword){var kparams=new Object();this.client.addParam(kparams,"hashKey",hashKey);this.client.addParam(kparams,"newPassword",newPassword);this.client.queueServiceActionCall("user","setInitialPassword",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.enableLogin=function(callback,userId,loginId,password){if(!password)
password=null;var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"loginId",loginId);this.client.addParam(kparams,"password",password);this.client.queueServiceActionCall("user","enableLogin",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.disableLogin=function(callback,userId,loginId){if(!userId)
userId=null;if(!loginId)
loginId=null;var kparams=new Object();this.client.addParam(kparams,"userId",userId);this.client.addParam(kparams,"loginId",loginId);this.client.queueServiceActionCall("user","disableLogin",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.index=function(callback,id,shouldUpdate){if(!shouldUpdate)
shouldUpdate=true;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"shouldUpdate",shouldUpdate);this.client.queueServiceActionCall("user","index",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.addFromBulkUpload=function(callback,fileData,bulkUploadData,bulkUploadUserData){if(!bulkUploadData)
bulkUploadData=null;if(!bulkUploadUserData)
bulkUploadUserData=null;var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);if(bulkUploadData!=null)
this.client.addParam(kparams,"bulkUploadData",toParams(bulkUploadData));if(bulkUploadUserData!=null)
this.client.addParam(kparams,"bulkUploadUserData",toParams(bulkUploadUserData));this.client.queueServiceActionCall("user","addFromBulkUpload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaUserService.prototype.checkLoginDataExists=function(callback,filter){var kparams=new Object();this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("user","checkLoginDataExists",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaWidgetService(client){this.init(client);}
KalturaWidgetService.inheritsFrom(KalturaServiceBase);KalturaWidgetService.prototype.add=function(callback,widget){var kparams=new Object();this.client.addParam(kparams,"widget",toParams(widget));this.client.queueServiceActionCall("widget","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaWidgetService.prototype.update=function(callback,id,widget){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"widget",toParams(widget));this.client.queueServiceActionCall("widget","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaWidgetService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("widget","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaWidgetService.prototype.cloneAction=function(callback,widget){var kparams=new Object();this.client.addParam(kparams,"widget",toParams(widget));this.client.queueServiceActionCall("widget","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaWidgetService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("widget","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaXInternalService(client){this.init(client);}
KalturaXInternalService.inheritsFrom(KalturaServiceBase);KalturaXInternalService.prototype.xAddBulkDownload=function(callback,entryIds,flavorParamsId){if(!flavorParamsId)
flavorParamsId="";var kparams=new Object();this.client.addParam(kparams,"entryIds",entryIds);this.client.addParam(kparams,"flavorParamsId",flavorParamsId);this.client.queueServiceActionCall("xinternal","xAddBulkDownload",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaMetadataService(client){this.init(client);}
KalturaMetadataService.inheritsFrom(KalturaServiceBase);KalturaMetadataService.prototype.add=function(callback,metadataProfileId,objectType,objectId,xmlData){var kparams=new Object();this.client.addParam(kparams,"metadataProfileId",metadataProfileId);this.client.addParam(kparams,"objectType",objectType);this.client.addParam(kparams,"objectId",objectId);this.client.addParam(kparams,"xmlData",xmlData);this.client.queueServiceActionCall("metadata_metadata","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.addFromFile=function(callback,metadataProfileId,objectType,objectId,xmlFile){var kparams=new Object();this.client.addParam(kparams,"metadataProfileId",metadataProfileId);this.client.addParam(kparams,"objectType",objectType);this.client.addParam(kparams,"objectId",objectId);kfiles=new Object();this.client.addParam(kfiles,"xmlFile",xmlFile);this.client.queueServiceActionCall("metadata_metadata","addFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.addFromUrl=function(callback,metadataProfileId,objectType,objectId,url){var kparams=new Object();this.client.addParam(kparams,"metadataProfileId",metadataProfileId);this.client.addParam(kparams,"objectType",objectType);this.client.addParam(kparams,"objectId",objectId);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("metadata_metadata","addFromUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.addFromBulk=function(callback,metadataProfileId,objectType,objectId,url){var kparams=new Object();this.client.addParam(kparams,"metadataProfileId",metadataProfileId);this.client.addParam(kparams,"objectType",objectType);this.client.addParam(kparams,"objectId",objectId);this.client.addParam(kparams,"url",url);this.client.queueServiceActionCall("metadata_metadata","addFromBulk",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("metadata_metadata","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.update=function(callback,id,xmlData,version){if(!xmlData)
xmlData=null;if(!version)
version=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"xmlData",xmlData);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("metadata_metadata","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.updateFromFile=function(callback,id,xmlFile){if(!xmlFile)
xmlFile=null;var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"xmlFile",xmlFile);this.client.queueServiceActionCall("metadata_metadata","updateFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("metadata_metadata","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("metadata_metadata","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.invalidate=function(callback,id,version){if(!version)
version=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("metadata_metadata","invalidate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataService.prototype.updateFromXSL=function(callback,id,xslFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"xslFile",xslFile);this.client.queueServiceActionCall("metadata_metadata","updateFromXSL",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaMetadataProfileService(client){this.init(client);}
KalturaMetadataProfileService.inheritsFrom(KalturaServiceBase);KalturaMetadataProfileService.prototype.add=function(callback,metadataProfile,xsdData,viewsData){if(!viewsData)
viewsData=null;var kparams=new Object();this.client.addParam(kparams,"metadataProfile",toParams(metadataProfile));this.client.addParam(kparams,"xsdData",xsdData);this.client.addParam(kparams,"viewsData",viewsData);this.client.queueServiceActionCall("metadata_metadataprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.addFromFile=function(callback,metadataProfile,xsdFile,viewsFile){if(!viewsFile)
viewsFile=null;var kparams=new Object();this.client.addParam(kparams,"metadataProfile",toParams(metadataProfile));kfiles=new Object();this.client.addParam(kfiles,"xsdFile",xsdFile);this.client.addParam(kfiles,"viewsFile",viewsFile);this.client.queueServiceActionCall("metadata_metadataprofile","addFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("metadata_metadataprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.update=function(callback,id,metadataProfile,xsdData,viewsData){if(!xsdData)
xsdData=null;if(!viewsData)
viewsData=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"metadataProfile",toParams(metadataProfile));this.client.addParam(kparams,"xsdData",xsdData);this.client.addParam(kparams,"viewsData",viewsData);this.client.queueServiceActionCall("metadata_metadataprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("metadata_metadataprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.listFields=function(callback,metadataProfileId){var kparams=new Object();this.client.addParam(kparams,"metadataProfileId",metadataProfileId);this.client.queueServiceActionCall("metadata_metadataprofile","listFields",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("metadata_metadataprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.revert=function(callback,id,toVersion){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"toVersion",toVersion);this.client.queueServiceActionCall("metadata_metadataprofile","revert",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.updateDefinitionFromFile=function(callback,id,xsdFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"xsdFile",xsdFile);this.client.queueServiceActionCall("metadata_metadataprofile","updateDefinitionFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.updateViewsFromFile=function(callback,id,viewsFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"viewsFile",viewsFile);this.client.queueServiceActionCall("metadata_metadataprofile","updateViewsFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaMetadataProfileService.prototype.updateTransformationFromFile=function(callback,id,xsltFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"xsltFile",xsltFile);this.client.queueServiceActionCall("metadata_metadataprofile","updateTransformationFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDocumentsService(client){this.init(client);}
KalturaDocumentsService.inheritsFrom(KalturaServiceBase);KalturaDocumentsService.prototype.addFromUploadedFile=function(callback,documentEntry,uploadTokenId){var kparams=new Object();this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.addParam(kparams,"uploadTokenId",uploadTokenId);this.client.queueServiceActionCall("document_documents","addFromUploadedFile",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.addFromEntry=function(callback,sourceEntryId,documentEntry,sourceFlavorParamsId){if(!documentEntry)
documentEntry=null;if(!sourceFlavorParamsId)
sourceFlavorParamsId=null;var kparams=new Object();this.client.addParam(kparams,"sourceEntryId",sourceEntryId);if(documentEntry!=null)
this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.addParam(kparams,"sourceFlavorParamsId",sourceFlavorParamsId);this.client.queueServiceActionCall("document_documents","addFromEntry",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.addFromFlavorAsset=function(callback,sourceFlavorAssetId,documentEntry){if(!documentEntry)
documentEntry=null;var kparams=new Object();this.client.addParam(kparams,"sourceFlavorAssetId",sourceFlavorAssetId);if(documentEntry!=null)
this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.queueServiceActionCall("document_documents","addFromFlavorAsset",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.convert=function(callback,entryId,conversionProfileId,dynamicConversionAttributes){if(!conversionProfileId)
conversionProfileId=null;if(!dynamicConversionAttributes)
dynamicConversionAttributes=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"conversionProfileId",conversionProfileId);if(dynamicConversionAttributes!=null)
for(var index in dynamicConversionAttributes)
{var obj=dynamicConversionAttributes[index];this.client.addParam(kparams,"dynamicConversionAttributes:"+index,toParams(obj));}
this.client.queueServiceActionCall("document_documents","convert",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.get=function(callback,entryId,version){if(!version)
version=-1;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"version",version);this.client.queueServiceActionCall("document_documents","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.update=function(callback,entryId,documentEntry){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"documentEntry",toParams(documentEntry));this.client.queueServiceActionCall("document_documents","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.deleteAction=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document_documents","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("document_documents","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.upload=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("document_documents","upload",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.convertPptToSwf=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document_documents","convertPptToSwf",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.updateContent=function(callback,entryId,resource,conversionProfileId){if(!conversionProfileId)
conversionProfileId=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"resource",toParams(resource));this.client.addParam(kparams,"conversionProfileId",conversionProfileId);this.client.queueServiceActionCall("document_documents","updateContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.approveReplace=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document_documents","approveReplace",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDocumentsService.prototype.cancelReplace=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("document_documents","cancelReplace",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaAnnotationService(client){this.init(client);}
KalturaAnnotationService.inheritsFrom(KalturaServiceBase);KalturaAnnotationService.prototype.add=function(callback,annotation){var kparams=new Object();this.client.addParam(kparams,"annotation",toParams(annotation));this.client.queueServiceActionCall("annotation_annotation","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAnnotationService.prototype.update=function(callback,id,annotation){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"annotation",toParams(annotation));this.client.queueServiceActionCall("annotation_annotation","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAnnotationService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("annotation_annotation","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAnnotationService.prototype.addFromBulk=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("annotation_annotation","addFromBulk",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAnnotationService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("annotation_annotation","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAnnotationService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("annotation_annotation","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAnnotationService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("annotation_annotation","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaAsperaService(client){this.init(client);}
KalturaAsperaService.inheritsFrom(KalturaServiceBase);KalturaAsperaService.prototype.getFaspUrl=function(callback,flavorAssetId){var kparams=new Object();this.client.addParam(kparams,"flavorAssetId",flavorAssetId);this.client.queueServiceActionCall("aspera_aspera","getFaspUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaAttachmentAssetService(client){this.init(client);}
KalturaAttachmentAssetService.inheritsFrom(KalturaServiceBase);KalturaAttachmentAssetService.prototype.add=function(callback,entryId,attachmentAsset){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"attachmentAsset",toParams(attachmentAsset));this.client.queueServiceActionCall("attachment_attachmentasset","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.setContent=function(callback,id,contentResource){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"contentResource",toParams(contentResource));this.client.queueServiceActionCall("attachment_attachmentasset","setContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.update=function(callback,id,attachmentAsset){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"attachmentAsset",toParams(attachmentAsset));this.client.queueServiceActionCall("attachment_attachmentasset","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.getUrl=function(callback,id,storageId){if(!storageId)
storageId=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"storageId",storageId);this.client.queueServiceActionCall("attachment_attachmentasset","getUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.getRemotePaths=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("attachment_attachmentasset","getRemotePaths",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.get=function(callback,attachmentAssetId){var kparams=new Object();this.client.addParam(kparams,"attachmentAssetId",attachmentAssetId);this.client.queueServiceActionCall("attachment_attachmentasset","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("attachment_attachmentasset","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAttachmentAssetService.prototype.deleteAction=function(callback,attachmentAssetId){var kparams=new Object();this.client.addParam(kparams,"attachmentAssetId",attachmentAssetId);this.client.queueServiceActionCall("attachment_attachmentasset","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaAuditTrailService(client){this.init(client);}
KalturaAuditTrailService.inheritsFrom(KalturaServiceBase);KalturaAuditTrailService.prototype.add=function(callback,auditTrail){var kparams=new Object();this.client.addParam(kparams,"auditTrail",toParams(auditTrail));this.client.queueServiceActionCall("audit_audittrail","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAuditTrailService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("audit_audittrail","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaAuditTrailService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("audit_audittrail","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaBulkService(client){this.init(client);}
KalturaBulkService.inheritsFrom(KalturaServiceBase);KalturaBulkService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("bulkupload_bulk","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBulkService.prototype.listAction=function(callback,bulkUploadFilter,pager){if(!bulkUploadFilter)
bulkUploadFilter=null;if(!pager)
pager=null;var kparams=new Object();if(bulkUploadFilter!=null)
this.client.addParam(kparams,"bulkUploadFilter",toParams(bulkUploadFilter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("bulkupload_bulk","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaBulkService.prototype.abort=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("bulkupload_bulk","abort",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCaptionAssetService(client){this.init(client);}
KalturaCaptionAssetService.inheritsFrom(KalturaServiceBase);KalturaCaptionAssetService.prototype.add=function(callback,entryId,captionAsset){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"captionAsset",toParams(captionAsset));this.client.queueServiceActionCall("caption_captionasset","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.setContent=function(callback,id,contentResource){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"contentResource",toParams(contentResource));this.client.queueServiceActionCall("caption_captionasset","setContent",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.update=function(callback,id,captionAsset){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"captionAsset",toParams(captionAsset));this.client.queueServiceActionCall("caption_captionasset","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.getUrl=function(callback,id,storageId){if(!storageId)
storageId=null;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"storageId",storageId);this.client.queueServiceActionCall("caption_captionasset","getUrl",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.getRemotePaths=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("caption_captionasset","getRemotePaths",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.setAsDefault=function(callback,captionAssetId){var kparams=new Object();this.client.addParam(kparams,"captionAssetId",captionAssetId);this.client.queueServiceActionCall("caption_captionasset","setAsDefault",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.get=function(callback,captionAssetId){var kparams=new Object();this.client.addParam(kparams,"captionAssetId",captionAssetId);this.client.queueServiceActionCall("caption_captionasset","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("caption_captionasset","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetService.prototype.deleteAction=function(callback,captionAssetId){var kparams=new Object();this.client.addParam(kparams,"captionAssetId",captionAssetId);this.client.queueServiceActionCall("caption_captionasset","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCaptionParamsService(client){this.init(client);}
KalturaCaptionParamsService.inheritsFrom(KalturaServiceBase);KalturaCaptionParamsService.prototype.add=function(callback,captionParams){var kparams=new Object();this.client.addParam(kparams,"captionParams",toParams(captionParams));this.client.queueServiceActionCall("caption_captionparams","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionParamsService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("caption_captionparams","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionParamsService.prototype.update=function(callback,id,captionParams){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"captionParams",toParams(captionParams));this.client.queueServiceActionCall("caption_captionparams","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionParamsService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("caption_captionparams","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionParamsService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("caption_captionparams","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCaptionAssetItemService(client){this.init(client);}
KalturaCaptionAssetItemService.inheritsFrom(KalturaServiceBase);KalturaCaptionAssetItemService.prototype.search=function(callback,entryFilter,captionAssetItemFilter,captionAssetItemPager){if(!entryFilter)
entryFilter=null;if(!captionAssetItemFilter)
captionAssetItemFilter=null;if(!captionAssetItemPager)
captionAssetItemPager=null;var kparams=new Object();if(entryFilter!=null)
this.client.addParam(kparams,"entryFilter",toParams(entryFilter));if(captionAssetItemFilter!=null)
this.client.addParam(kparams,"captionAssetItemFilter",toParams(captionAssetItemFilter));if(captionAssetItemPager!=null)
this.client.addParam(kparams,"captionAssetItemPager",toParams(captionAssetItemPager));this.client.queueServiceActionCall("captionsearch_captionassetitem","search",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCaptionAssetItemService.prototype.searchEntries=function(callback,entryFilter,captionAssetItemFilter,captionAssetItemPager){if(!entryFilter)
entryFilter=null;if(!captionAssetItemFilter)
captionAssetItemFilter=null;if(!captionAssetItemPager)
captionAssetItemPager=null;var kparams=new Object();if(entryFilter!=null)
this.client.addParam(kparams,"entryFilter",toParams(entryFilter));if(captionAssetItemFilter!=null)
this.client.addParam(kparams,"captionAssetItemFilter",toParams(captionAssetItemFilter));if(captionAssetItemPager!=null)
this.client.addParam(kparams,"captionAssetItemPager",toParams(captionAssetItemPager));this.client.queueServiceActionCall("captionsearch_captionassetitem","searchEntries",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDistributionProfileService(client){this.init(client);}
KalturaDistributionProfileService.inheritsFrom(KalturaServiceBase);KalturaDistributionProfileService.prototype.add=function(callback,distributionProfile){var kparams=new Object();this.client.addParam(kparams,"distributionProfile",toParams(distributionProfile));this.client.queueServiceActionCall("contentdistribution_distributionprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDistributionProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_distributionprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDistributionProfileService.prototype.update=function(callback,id,distributionProfile){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"distributionProfile",toParams(distributionProfile));this.client.queueServiceActionCall("contentdistribution_distributionprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDistributionProfileService.prototype.updateStatus=function(callback,id,status){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"status",status);this.client.queueServiceActionCall("contentdistribution_distributionprofile","updateStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDistributionProfileService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_distributionprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDistributionProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("contentdistribution_distributionprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDistributionProfileService.prototype.listByPartner=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("contentdistribution_distributionprofile","listByPartner",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaEntryDistributionService(client){this.init(client);}
KalturaEntryDistributionService.inheritsFrom(KalturaServiceBase);KalturaEntryDistributionService.prototype.add=function(callback,entryDistribution){var kparams=new Object();this.client.addParam(kparams,"entryDistribution",toParams(entryDistribution));this.client.queueServiceActionCall("contentdistribution_entrydistribution","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.validate=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","validate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.update=function(callback,id,entryDistribution){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"entryDistribution",toParams(entryDistribution));this.client.queueServiceActionCall("contentdistribution_entrydistribution","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("contentdistribution_entrydistribution","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.submitAdd=function(callback,id,submitWhenReady){if(!submitWhenReady)
submitWhenReady=false;var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"submitWhenReady",submitWhenReady);this.client.queueServiceActionCall("contentdistribution_entrydistribution","submitAdd",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.submitUpdate=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","submitUpdate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.submitFetchReport=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","submitFetchReport",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.submitDelete=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","submitDelete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEntryDistributionService.prototype.retrySubmit=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_entrydistribution","retrySubmit",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDistributionProviderService(client){this.init(client);}
KalturaDistributionProviderService.inheritsFrom(KalturaServiceBase);KalturaDistributionProviderService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("contentdistribution_distributionprovider","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaGenericDistributionProviderService(client){this.init(client);}
KalturaGenericDistributionProviderService.inheritsFrom(KalturaServiceBase);KalturaGenericDistributionProviderService.prototype.add=function(callback,genericDistributionProvider){var kparams=new Object();this.client.addParam(kparams,"genericDistributionProvider",toParams(genericDistributionProvider));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderService.prototype.update=function(callback,id,genericDistributionProvider){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"genericDistributionProvider",toParams(genericDistributionProvider));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaGenericDistributionProviderActionService(client){this.init(client);}
KalturaGenericDistributionProviderActionService.inheritsFrom(KalturaServiceBase);KalturaGenericDistributionProviderActionService.prototype.add=function(callback,genericDistributionProviderAction){var kparams=new Object();this.client.addParam(kparams,"genericDistributionProviderAction",toParams(genericDistributionProviderAction));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.addMrssTransform=function(callback,id,xslData){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"xslData",xslData);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","addMrssTransform",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.addMrssTransformFromFile=function(callback,id,xslFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"xslFile",xslFile);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","addMrssTransformFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.addMrssValidate=function(callback,id,xsdData){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"xsdData",xsdData);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","addMrssValidate",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.addMrssValidateFromFile=function(callback,id,xsdFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"xsdFile",xsdFile);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","addMrssValidateFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.addResultsTransform=function(callback,id,transformData){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"transformData",transformData);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","addResultsTransform",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.addResultsTransformFromFile=function(callback,id,transformFile){var kparams=new Object();this.client.addParam(kparams,"id",id);kfiles=new Object();this.client.addParam(kfiles,"transformFile",transformFile);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","addResultsTransformFromFile",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.getByProviderId=function(callback,genericDistributionProviderId,actionType){var kparams=new Object();this.client.addParam(kparams,"genericDistributionProviderId",genericDistributionProviderId);this.client.addParam(kparams,"actionType",actionType);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","getByProviderId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.updateByProviderId=function(callback,genericDistributionProviderId,actionType,genericDistributionProviderAction){var kparams=new Object();this.client.addParam(kparams,"genericDistributionProviderId",genericDistributionProviderId);this.client.addParam(kparams,"actionType",actionType);this.client.addParam(kparams,"genericDistributionProviderAction",toParams(genericDistributionProviderAction));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","updateByProviderId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.update=function(callback,id,genericDistributionProviderAction){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"genericDistributionProviderAction",toParams(genericDistributionProviderAction));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.deleteByProviderId=function(callback,genericDistributionProviderId,actionType){var kparams=new Object();this.client.addParam(kparams,"genericDistributionProviderId",genericDistributionProviderId);this.client.addParam(kparams,"actionType",actionType);this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","deleteByProviderId",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaGenericDistributionProviderActionService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaCuePointService(client){this.init(client);}
KalturaCuePointService.inheritsFrom(KalturaServiceBase);KalturaCuePointService.prototype.add=function(callback,cuePoint){var kparams=new Object();this.client.addParam(kparams,"cuePoint",toParams(cuePoint));this.client.queueServiceActionCall("cuepoint_cuepoint","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCuePointService.prototype.addFromBulk=function(callback,fileData){var kparams=new Object();kfiles=new Object();this.client.addParam(kfiles,"fileData",fileData);this.client.queueServiceActionCall("cuepoint_cuepoint","addFromBulk",kparams,kfiles);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCuePointService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("cuepoint_cuepoint","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCuePointService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("cuepoint_cuepoint","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCuePointService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("cuepoint_cuepoint","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCuePointService.prototype.update=function(callback,id,cuePoint){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"cuePoint",toParams(cuePoint));this.client.queueServiceActionCall("cuepoint_cuepoint","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaCuePointService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("cuepoint_cuepoint","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDropFolderService(client){this.init(client);}
KalturaDropFolderService.inheritsFrom(KalturaServiceBase);KalturaDropFolderService.prototype.add=function(callback,dropFolder){var kparams=new Object();this.client.addParam(kparams,"dropFolder",toParams(dropFolder));this.client.queueServiceActionCall("dropfolder_dropfolder","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderService.prototype.get=function(callback,dropFolderId){var kparams=new Object();this.client.addParam(kparams,"dropFolderId",dropFolderId);this.client.queueServiceActionCall("dropfolder_dropfolder","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderService.prototype.update=function(callback,dropFolderId,dropFolder){var kparams=new Object();this.client.addParam(kparams,"dropFolderId",dropFolderId);this.client.addParam(kparams,"dropFolder",toParams(dropFolder));this.client.queueServiceActionCall("dropfolder_dropfolder","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderService.prototype.deleteAction=function(callback,dropFolderId){var kparams=new Object();this.client.addParam(kparams,"dropFolderId",dropFolderId);this.client.queueServiceActionCall("dropfolder_dropfolder","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("dropfolder_dropfolder","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDropFolderFileService(client){this.init(client);}
KalturaDropFolderFileService.inheritsFrom(KalturaServiceBase);KalturaDropFolderFileService.prototype.add=function(callback,dropFolderFile){var kparams=new Object();this.client.addParam(kparams,"dropFolderFile",toParams(dropFolderFile));this.client.queueServiceActionCall("dropfolder_dropfolderfile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderFileService.prototype.get=function(callback,dropFolderFileId){var kparams=new Object();this.client.addParam(kparams,"dropFolderFileId",dropFolderFileId);this.client.queueServiceActionCall("dropfolder_dropfolderfile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderFileService.prototype.update=function(callback,dropFolderFileId,dropFolderFile){var kparams=new Object();this.client.addParam(kparams,"dropFolderFileId",dropFolderFileId);this.client.addParam(kparams,"dropFolderFile",toParams(dropFolderFile));this.client.queueServiceActionCall("dropfolder_dropfolderfile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderFileService.prototype.updateStatus=function(callback,dropFolderFileId,status){var kparams=new Object();this.client.addParam(kparams,"dropFolderFileId",dropFolderFileId);this.client.addParam(kparams,"status",status);this.client.queueServiceActionCall("dropfolder_dropfolderfile","updateStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderFileService.prototype.deleteAction=function(callback,dropFolderFileId){var kparams=new Object();this.client.addParam(kparams,"dropFolderFileId",dropFolderFileId);this.client.queueServiceActionCall("dropfolder_dropfolderfile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderFileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("dropfolder_dropfolderfile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDropFolderFileService.prototype.ignore=function(callback,dropFolderFileId){var kparams=new Object();this.client.addParam(kparams,"dropFolderFileId",dropFolderFileId);this.client.queueServiceActionCall("dropfolder_dropfolderfile","ignore",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaEventNotificationTemplateService(client){this.init(client);}
KalturaEventNotificationTemplateService.inheritsFrom(KalturaServiceBase);KalturaEventNotificationTemplateService.prototype.add=function(callback,eventNotificationTemplate){var kparams=new Object();this.client.addParam(kparams,"eventNotificationTemplate",toParams(eventNotificationTemplate));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.cloneAction=function(callback,id,eventNotificationTemplate){if(!eventNotificationTemplate)
eventNotificationTemplate=null;var kparams=new Object();this.client.addParam(kparams,"id",id);if(eventNotificationTemplate!=null)
this.client.addParam(kparams,"eventNotificationTemplate",toParams(eventNotificationTemplate));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","clone",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.update=function(callback,id,eventNotificationTemplate){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"eventNotificationTemplate",toParams(eventNotificationTemplate));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.updateStatus=function(callback,id,status){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"status",status);this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","updateStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.listByPartner=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","listByPartner",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.dispatch=function(callback,id,scope){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"scope",toParams(scope));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","dispatch",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaEventNotificationTemplateService.prototype.listTemplates=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate","listTemplates",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaLikeService(client){this.init(client);}
KalturaLikeService.inheritsFrom(KalturaServiceBase);KalturaLikeService.prototype.like=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("like_like","like",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLikeService.prototype.unlike=function(callback,entryId){var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.queueServiceActionCall("like_like","unlike",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaLikeService.prototype.checkLikeExists=function(callback,entryId,userId){if(!userId)
userId=null;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"userId",userId);this.client.queueServiceActionCall("like_like","checkLikeExists",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaShortLinkService(client){this.init(client);}
KalturaShortLinkService.inheritsFrom(KalturaServiceBase);KalturaShortLinkService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("shortlink_shortlink","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaShortLinkService.prototype.add=function(callback,shortLink){var kparams=new Object();this.client.addParam(kparams,"shortLink",toParams(shortLink));this.client.queueServiceActionCall("shortlink_shortlink","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaShortLinkService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("shortlink_shortlink","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaShortLinkService.prototype.update=function(callback,id,shortLink){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"shortLink",toParams(shortLink));this.client.queueServiceActionCall("shortlink_shortlink","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaShortLinkService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("shortlink_shortlink","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaTagService(client){this.init(client);}
KalturaTagService.inheritsFrom(KalturaServiceBase);KalturaTagService.prototype.search=function(callback,tagFilter,pager){if(!pager)
pager=null;var kparams=new Object();this.client.addParam(kparams,"tagFilter",toParams(tagFilter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("tagsearch_tag","search",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaTagService.prototype.deletePending=function(callback){var kparams=new Object();this.client.queueServiceActionCall("tagsearch_tag","deletePending",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaTagService.prototype.indexCategoryEntryTags=function(callback,categoryId,pcToDecrement,pcToIncrement){var kparams=new Object();this.client.addParam(kparams,"categoryId",categoryId);this.client.addParam(kparams,"pcToDecrement",pcToDecrement);this.client.addParam(kparams,"pcToIncrement",pcToIncrement);this.client.queueServiceActionCall("tagsearch_tag","indexCategoryEntryTags",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaVarConsoleService(client){this.init(client);}
KalturaVarConsoleService.inheritsFrom(KalturaServiceBase);KalturaVarConsoleService.prototype.getPartnerUsage=function(callback,partnerFilter,usageFilter,pager){if(!partnerFilter)
partnerFilter=null;if(!usageFilter)
usageFilter=null;if(!pager)
pager=null;var kparams=new Object();if(partnerFilter!=null)
this.client.addParam(kparams,"partnerFilter",toParams(partnerFilter));if(usageFilter!=null)
this.client.addParam(kparams,"usageFilter",toParams(usageFilter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("varconsole_varconsole","getPartnerUsage",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaVarConsoleService.prototype.updateStatus=function(callback,id,status){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"status",status);this.client.queueServiceActionCall("varconsole_varconsole","updateStatus",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaVirusScanProfileService(client){this.init(client);}
KalturaVirusScanProfileService.inheritsFrom(KalturaServiceBase);KalturaVirusScanProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("virusscan_virusscanprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaVirusScanProfileService.prototype.add=function(callback,virusScanProfile){var kparams=new Object();this.client.addParam(kparams,"virusScanProfile",toParams(virusScanProfile));this.client.queueServiceActionCall("virusscan_virusscanprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaVirusScanProfileService.prototype.get=function(callback,virusScanProfileId){var kparams=new Object();this.client.addParam(kparams,"virusScanProfileId",virusScanProfileId);this.client.queueServiceActionCall("virusscan_virusscanprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaVirusScanProfileService.prototype.update=function(callback,virusScanProfileId,virusScanProfile){var kparams=new Object();this.client.addParam(kparams,"virusScanProfileId",virusScanProfileId);this.client.addParam(kparams,"virusScanProfile",toParams(virusScanProfile));this.client.queueServiceActionCall("virusscan_virusscanprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaVirusScanProfileService.prototype.deleteAction=function(callback,virusScanProfileId){var kparams=new Object();this.client.addParam(kparams,"virusScanProfileId",virusScanProfileId);this.client.queueServiceActionCall("virusscan_virusscanprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaVirusScanProfileService.prototype.scan=function(callback,flavorAssetId,virusScanProfileId){if(!virusScanProfileId)
virusScanProfileId=null;var kparams=new Object();this.client.addParam(kparams,"flavorAssetId",flavorAssetId);this.client.addParam(kparams,"virusScanProfileId",virusScanProfileId);this.client.queueServiceActionCall("virusscan_virusscanprofile","scan",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaExternalMediaService(client){this.init(client);}
KalturaExternalMediaService.inheritsFrom(KalturaServiceBase);KalturaExternalMediaService.prototype.add=function(callback,entry){var kparams=new Object();this.client.addParam(kparams,"entry",toParams(entry));this.client.queueServiceActionCall("externalmedia_externalmedia","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaExternalMediaService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("externalmedia_externalmedia","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaExternalMediaService.prototype.update=function(callback,id,entry){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"entry",toParams(entry));this.client.queueServiceActionCall("externalmedia_externalmedia","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaExternalMediaService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("externalmedia_externalmedia","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaExternalMediaService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("externalmedia_externalmedia","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaExternalMediaService.prototype.count=function(callback,filter){if(!filter)
filter=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));this.client.queueServiceActionCall("externalmedia_externalmedia","count",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDrmPolicyService(client){this.init(client);}
KalturaDrmPolicyService.inheritsFrom(KalturaServiceBase);KalturaDrmPolicyService.prototype.add=function(callback,drmPolicy){var kparams=new Object();this.client.addParam(kparams,"drmPolicy",toParams(drmPolicy));this.client.queueServiceActionCall("drm_drmpolicy","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmPolicyService.prototype.get=function(callback,drmPolicyId){var kparams=new Object();this.client.addParam(kparams,"drmPolicyId",drmPolicyId);this.client.queueServiceActionCall("drm_drmpolicy","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmPolicyService.prototype.update=function(callback,drmPolicyId,drmPolicy){var kparams=new Object();this.client.addParam(kparams,"drmPolicyId",drmPolicyId);this.client.addParam(kparams,"drmPolicy",toParams(drmPolicy));this.client.queueServiceActionCall("drm_drmpolicy","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmPolicyService.prototype.deleteAction=function(callback,drmPolicyId){var kparams=new Object();this.client.addParam(kparams,"drmPolicyId",drmPolicyId);this.client.queueServiceActionCall("drm_drmpolicy","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmPolicyService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("drm_drmpolicy","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaDrmProfileService(client){this.init(client);}
KalturaDrmProfileService.inheritsFrom(KalturaServiceBase);KalturaDrmProfileService.prototype.add=function(callback,drmProfile){var kparams=new Object();this.client.addParam(kparams,"drmProfile",toParams(drmProfile));this.client.queueServiceActionCall("drm_drmprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmProfileService.prototype.get=function(callback,drmProfileId){var kparams=new Object();this.client.addParam(kparams,"drmProfileId",drmProfileId);this.client.queueServiceActionCall("drm_drmprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmProfileService.prototype.update=function(callback,drmProfileId,drmProfile){var kparams=new Object();this.client.addParam(kparams,"drmProfileId",drmProfileId);this.client.addParam(kparams,"drmProfile",toParams(drmProfile));this.client.queueServiceActionCall("drm_drmprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmProfileService.prototype.deleteAction=function(callback,drmProfileId){var kparams=new Object();this.client.addParam(kparams,"drmProfileId",drmProfileId);this.client.queueServiceActionCall("drm_drmprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("drm_drmprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaDrmProfileService.prototype.getByProvider=function(callback,provider){var kparams=new Object();this.client.addParam(kparams,"provider",provider);this.client.queueServiceActionCall("drm_drmprofile","getByProvider",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaWidevineDrmService(client){this.init(client);}
KalturaWidevineDrmService.inheritsFrom(KalturaServiceBase);KalturaWidevineDrmService.prototype.getLicense=function(callback,flavorAssetId,referrer){if(!referrer)
referrer=null;var kparams=new Object();this.client.addParam(kparams,"flavorAssetId",flavorAssetId);this.client.addParam(kparams,"referrer",referrer);this.client.queueServiceActionCall("widevine_widevinedrm","getLicense",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaScheduledTaskProfileService(client){this.init(client);}
KalturaScheduledTaskProfileService.inheritsFrom(KalturaServiceBase);KalturaScheduledTaskProfileService.prototype.add=function(callback,scheduledTaskProfile){var kparams=new Object();this.client.addParam(kparams,"scheduledTaskProfile",toParams(scheduledTaskProfile));this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","add",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaScheduledTaskProfileService.prototype.get=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","get",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaScheduledTaskProfileService.prototype.update=function(callback,id,scheduledTaskProfile){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.addParam(kparams,"scheduledTaskProfile",toParams(scheduledTaskProfile));this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","update",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaScheduledTaskProfileService.prototype.deleteAction=function(callback,id){var kparams=new Object();this.client.addParam(kparams,"id",id);this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","delete",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaScheduledTaskProfileService.prototype.listAction=function(callback,filter,pager){if(!filter)
filter=null;if(!pager)
pager=null;var kparams=new Object();if(filter!=null)
this.client.addParam(kparams,"filter",toParams(filter));if(pager!=null)
this.client.addParam(kparams,"pager",toParams(pager));this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","list",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaScheduledTaskProfileService.prototype.requestDryRun=function(callback,scheduledTaskProfileId,maxResults){if(!maxResults)
maxResults=500;var kparams=new Object();this.client.addParam(kparams,"scheduledTaskProfileId",scheduledTaskProfileId);this.client.addParam(kparams,"maxResults",maxResults);this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","requestDryRun",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaScheduledTaskProfileService.prototype.getDryRunResults=function(callback,requestId){var kparams=new Object();this.client.addParam(kparams,"requestId",requestId);this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile","getDryRunResults",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaPlayReadyDrmService(client){this.init(client);}
KalturaPlayReadyDrmService.inheritsFrom(KalturaServiceBase);KalturaPlayReadyDrmService.prototype.generateKey=function(callback){var kparams=new Object();this.client.queueServiceActionCall("playready_playreadydrm","generateKey",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlayReadyDrmService.prototype.getContentKeys=function(callback,keyIds){var kparams=new Object();this.client.addParam(kparams,"keyIds",keyIds);this.client.queueServiceActionCall("playready_playreadydrm","getContentKeys",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlayReadyDrmService.prototype.getEntryContentKey=function(callback,entryId,createIfMissing){if(!createIfMissing)
createIfMissing=false;var kparams=new Object();this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"createIfMissing",createIfMissing);this.client.queueServiceActionCall("playready_playreadydrm","getEntryContentKey",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
KalturaPlayReadyDrmService.prototype.getLicenseDetails=function(callback,keyId,deviceId,deviceType,entryId,referrer){if(!entryId)
entryId=null;if(!referrer)
referrer=null;var kparams=new Object();this.client.addParam(kparams,"keyId",keyId);this.client.addParam(kparams,"deviceId",deviceId);this.client.addParam(kparams,"deviceType",deviceType);this.client.addParam(kparams,"entryId",entryId);this.client.addParam(kparams,"referrer",referrer);this.client.queueServiceActionCall("playready_playreadydrm","getLicenseDetails",kparams);if(!this.client.isMultiRequest())
this.client.doQueue(callback);}
function KalturaClient(config){this.init(config);}
KalturaClient.inheritsFrom(KalturaClientBase);KalturaClient.prototype.apiVersion="3.1.6";KalturaClient.prototype.accessControlProfile=null;KalturaClient.prototype.accessControl=null;KalturaClient.prototype.adminUser=null;KalturaClient.prototype.baseEntry=null;KalturaClient.prototype.bulkUpload=null;KalturaClient.prototype.categoryEntry=null;KalturaClient.prototype.category=null;KalturaClient.prototype.categoryUser=null;KalturaClient.prototype.conversionProfileAssetParams=null;KalturaClient.prototype.conversionProfile=null;KalturaClient.prototype.data=null;KalturaClient.prototype.deliveryProfile=null;KalturaClient.prototype.document=null;KalturaClient.prototype.EmailIngestionProfile=null;KalturaClient.prototype.fileAsset=null;KalturaClient.prototype.flavorAsset=null;KalturaClient.prototype.flavorParamsOutput=null;KalturaClient.prototype.flavorParams=null;KalturaClient.prototype.liveChannelSegment=null;KalturaClient.prototype.liveChannel=null;KalturaClient.prototype.liveReports=null;KalturaClient.prototype.stats=null;KalturaClient.prototype.liveStream=null;KalturaClient.prototype.mediaInfo=null;KalturaClient.prototype.mediaServer=null;KalturaClient.prototype.media=null;KalturaClient.prototype.mixing=null;KalturaClient.prototype.notification=null;KalturaClient.prototype.partner=null;KalturaClient.prototype.permissionItem=null;KalturaClient.prototype.permission=null;KalturaClient.prototype.playlist=null;KalturaClient.prototype.report=null;KalturaClient.prototype.schema=null;KalturaClient.prototype.search=null;KalturaClient.prototype.session=null;KalturaClient.prototype.storageProfile=null;KalturaClient.prototype.syndicationFeed=null;KalturaClient.prototype.system=null;KalturaClient.prototype.thumbAsset=null;KalturaClient.prototype.thumbParamsOutput=null;KalturaClient.prototype.thumbParams=null;KalturaClient.prototype.uiConf=null;KalturaClient.prototype.upload=null;KalturaClient.prototype.uploadToken=null;KalturaClient.prototype.userRole=null;KalturaClient.prototype.user=null;KalturaClient.prototype.widget=null;KalturaClient.prototype.xInternal=null;KalturaClient.prototype.metadata=null;KalturaClient.prototype.metadataProfile=null;KalturaClient.prototype.documents=null;KalturaClient.prototype.annotation=null;KalturaClient.prototype.aspera=null;KalturaClient.prototype.attachmentAsset=null;KalturaClient.prototype.auditTrail=null;KalturaClient.prototype.bulk=null;KalturaClient.prototype.captionAsset=null;KalturaClient.prototype.captionParams=null;KalturaClient.prototype.captionAssetItem=null;KalturaClient.prototype.distributionProfile=null;KalturaClient.prototype.entryDistribution=null;KalturaClient.prototype.distributionProvider=null;KalturaClient.prototype.genericDistributionProvider=null;KalturaClient.prototype.genericDistributionProviderAction=null;KalturaClient.prototype.cuePoint=null;KalturaClient.prototype.dropFolder=null;KalturaClient.prototype.dropFolderFile=null;KalturaClient.prototype.eventNotificationTemplate=null;KalturaClient.prototype.like=null;KalturaClient.prototype.shortLink=null;KalturaClient.prototype.tag=null;KalturaClient.prototype.varConsole=null;KalturaClient.prototype.virusScanProfile=null;KalturaClient.prototype.externalMedia=null;KalturaClient.prototype.drmPolicy=null;KalturaClient.prototype.drmProfile=null;KalturaClient.prototype.widevineDrm=null;KalturaClient.prototype.scheduledTaskProfile=null;KalturaClient.prototype.playReadyDrm=null;KalturaClient.prototype.init=function(config){KalturaClientBase.prototype.init.apply(this,arguments);this.accessControlProfile=new KalturaAccessControlProfileService(this);this.accessControl=new KalturaAccessControlService(this);this.adminUser=new KalturaAdminUserService(this);this.baseEntry=new KalturaBaseEntryService(this);this.bulkUpload=new KalturaBulkUploadService(this);this.categoryEntry=new KalturaCategoryEntryService(this);this.category=new KalturaCategoryService(this);this.categoryUser=new KalturaCategoryUserService(this);this.conversionProfileAssetParams=new KalturaConversionProfileAssetParamsService(this);this.conversionProfile=new KalturaConversionProfileService(this);this.data=new KalturaDataService(this);this.deliveryProfile=new KalturaDeliveryProfileService(this);this.document=new KalturaDocumentService(this);this.EmailIngestionProfile=new KalturaEmailIngestionProfileService(this);this.fileAsset=new KalturaFileAssetService(this);this.flavorAsset=new KalturaFlavorAssetService(this);this.flavorParamsOutput=new KalturaFlavorParamsOutputService(this);this.flavorParams=new KalturaFlavorParamsService(this);this.liveChannelSegment=new KalturaLiveChannelSegmentService(this);this.liveChannel=new KalturaLiveChannelService(this);this.liveReports=new KalturaLiveReportsService(this);this.stats=new KalturaStatsService(this);this.liveStream=new KalturaLiveStreamService(this);this.mediaInfo=new KalturaMediaInfoService(this);this.mediaServer=new KalturaMediaServerService(this);this.media=new KalturaMediaService(this);this.mixing=new KalturaMixingService(this);this.notification=new KalturaNotificationService(this);this.partner=new KalturaPartnerService(this);this.permissionItem=new KalturaPermissionItemService(this);this.permission=new KalturaPermissionService(this);this.playlist=new KalturaPlaylistService(this);this.report=new KalturaReportService(this);this.schema=new KalturaSchemaService(this);this.search=new KalturaSearchService(this);this.session=new KalturaSessionService(this);this.storageProfile=new KalturaStorageProfileService(this);this.syndicationFeed=new KalturaSyndicationFeedService(this);this.system=new KalturaSystemService(this);this.thumbAsset=new KalturaThumbAssetService(this);this.thumbParamsOutput=new KalturaThumbParamsOutputService(this);this.thumbParams=new KalturaThumbParamsService(this);this.uiConf=new KalturaUiConfService(this);this.upload=new KalturaUploadService(this);this.uploadToken=new KalturaUploadTokenService(this);this.userRole=new KalturaUserRoleService(this);this.user=new KalturaUserService(this);this.widget=new KalturaWidgetService(this);this.xInternal=new KalturaXInternalService(this);this.metadata=new KalturaMetadataService(this);this.metadataProfile=new KalturaMetadataProfileService(this);this.documents=new KalturaDocumentsService(this);this.annotation=new KalturaAnnotationService(this);this.aspera=new KalturaAsperaService(this);this.attachmentAsset=new KalturaAttachmentAssetService(this);this.auditTrail=new KalturaAuditTrailService(this);this.bulk=new KalturaBulkService(this);this.captionAsset=new KalturaCaptionAssetService(this);this.captionParams=new KalturaCaptionParamsService(this);this.captionAssetItem=new KalturaCaptionAssetItemService(this);this.distributionProfile=new KalturaDistributionProfileService(this);this.entryDistribution=new KalturaEntryDistributionService(this);this.distributionProvider=new KalturaDistributionProviderService(this);this.genericDistributionProvider=new KalturaGenericDistributionProviderService(this);this.genericDistributionProviderAction=new KalturaGenericDistributionProviderActionService(this);this.cuePoint=new KalturaCuePointService(this);this.dropFolder=new KalturaDropFolderService(this);this.dropFolderFile=new KalturaDropFolderFileService(this);this.eventNotificationTemplate=new KalturaEventNotificationTemplateService(this);this.like=new KalturaLikeService(this);this.shortLink=new KalturaShortLinkService(this);this.tag=new KalturaTagService(this);this.varConsole=new KalturaVarConsoleService(this);this.virusScanProfile=new KalturaVirusScanProfileService(this);this.externalMedia=new KalturaExternalMediaService(this);this.drmPolicy=new KalturaDrmPolicyService(this);this.drmProfile=new KalturaDrmProfileService(this);this.widevineDrm=new KalturaWidevineDrmService(this);this.scheduledTaskProfile=new KalturaScheduledTaskProfileService(this);this.playReadyDrm=new KalturaPlayReadyDrmService(this);}