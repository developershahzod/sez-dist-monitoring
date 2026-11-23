const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./infra3d-DEDmveLc.js","./map-DmAaLpfj.js","./vendor-prSOuLH6.js","./map-CuCRB34y.css","./index-swSeOYoY.js","./index-BctTdanf.css","./logistics-Ci6-iZgZ.js","./train-front-DKonuudj.js","./UtilityIcon-DvTxAHdg.js","./mapStyle-CJMcJSfe.js"])))=>i.map(i=>d[i]);
var Mu=Object.defineProperty;var Su=(r,e,t)=>e in r?Mu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ie=(r,e,t)=>Su(r,typeof e!="symbol"?e+"":e,t);import{$ as fo,u as Eu,j as gi,_ as Cs,b6 as bu,k as Tu}from"./index-swSeOYoY.js";import{l as Tc,d as Ac,j as fs,r as Ne,b as Au}from"./vendor-prSOuLH6.js";import{m as vn}from"./map-DmAaLpfj.js";import{L as Xt,P as wu,F as Ru,S as Cu,h as Pu,b as Lu}from"./logistics-Ci6-iZgZ.js";import{U as Iu,b as Du}from"./UtilityIcon-DvTxAHdg.js";import{T as Bo}from"./train-front-DKonuudj.js";import{B as Nu,s as Uu,L as ko,S as Fu,n as Ou}from"./mapStyle-CJMcJSfe.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="169",Bu=0,zo=1,ku=2,wc=1,Rc=2,Ln=3,Fn=0,qt=1,un=2,ei=0,Ni=1,_a=2,Ho=3,Go=4,zu=5,hi=100,Hu=101,Gu=102,Vu=103,Wu=104,Xu=200,qu=201,Yu=202,ju=203,xa=204,va=205,Ku=206,$u=207,Zu=208,Ju=209,Qu=210,eh=211,th=212,nh=213,ih=214,ya=0,Ma=1,Sa=2,Bi=3,Ea=4,ba=5,Ta=6,Aa=7,mo=0,rh=1,sh=2,ti=0,ah=1,oh=2,lh=3,Cc=4,ch=5,uh=6,hh=7,Vo="attached",dh="detached",Pc=300,ki=301,zi=302,wa=303,Ra=304,Ms=306,Hi=1e3,Zn=1001,ps=1002,Gt=1003,Lc=1004,hr=1005,Qt=1006,is=1007,Dn=1008,On=1009,Ic=1010,Dc=1011,_r=1012,go=1013,fi=1014,fn=1015,Sr=1016,_o=1017,xo=1018,Gi=1020,Nc=35902,Uc=1021,Fc=1022,sn=1023,Oc=1024,Bc=1025,Ui=1026,Vi=1027,vo=1028,yo=1029,kc=1030,Mo=1031,So=1033,rs=33776,ss=33777,as=33778,os=33779,Ca=35840,Pa=35841,La=35842,Ia=35843,Da=36196,Na=37492,Ua=37496,Fa=37808,Oa=37809,Ba=37810,ka=37811,za=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,ja=37820,Ka=37821,ls=36492,$a=36494,Za=36495,zc=36283,Ja=36284,Qa=36285,eo=36286,xr=2300,vr=2301,Ps=2302,Wo=2400,Xo=2401,qo=2402,fh=2500,ph=0,Hc=1,to=2,mh=3200,gh=3201,Eo=0,_h=1,$n="",Ut="srgb",Lt="srgb-linear",bo="display-p3",Ss="display-p3-linear",ms="linear",xt="srgb",gs="rec709",_s="p3",_i=7680,Yo=519,xh=512,vh=513,yh=514,Gc=515,Mh=516,Sh=517,Eh=518,bh=519,no=35044,jo="300 es",Nn=2e3,xs=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const fr=Math.PI/180,Wi=180/Math.PI;function pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function To(r,e){return(r%e+e)%e}function Th(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ah(r,e,t){return r!==e?(t-r)/(e-r):0}function pr(r,e,t){return(1-t)*r+t*e}function wh(r,e,t,n){return pr(r,e,1-Math.exp(-t*n))}function Rh(r,e=1){return e-Math.abs(To(r,e*2)-e)}function Ch(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ph(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ih(r,e){return r+Math.random()*(e-r)}function Dh(r){return r*(.5-Math.random())}function Nh(r){r!==void 0&&(Ko=r);let e=Ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uh(r){return r*fr}function Fh(r){return r*Wi}function Oh(r){return(r&r-1)===0&&r!==0}function Bh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Yn={DEG2RAD:fr,RAD2DEG:Wi,generateUUID:pn,clamp:Ft,euclideanModulo:To,mapLinear:Th,inverseLerp:Ah,lerp:pr,damp:wh,pingpong:Rh,smoothstep:Ch,smootherstep:Ph,randInt:Lh,randFloat:Ih,randFloatSpread:Dh,seededRandom:Nh,degToRad:Uh,radToDeg:Fh,isPowerOfTwo:Oh,ceilPowerOfTwo:Bh,floorPowerOfTwo:kh,setQuaternionFromProperEuler:zh,normalize:pt,denormalize:hn};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=i[0],p=i[3],m=i[6],A=i[1],S=i[4],T=i[7],O=i[2],P=i[5],R=i[8];return s[0]=a*y+o*A+l*O,s[3]=a*p+o*S+l*P,s[6]=a*m+o*T+l*R,s[1]=c*y+u*A+h*O,s[4]=c*p+u*S+h*P,s[7]=c*m+u*T+h*R,s[2]=d*y+f*A+g*O,s[5]=d*p+f*S+g*P,s[8]=d*m+f*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(i*c-u*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(u*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ls.makeScale(e,t)),this}rotate(e){return this.premultiply(Ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Qe;function Vc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hh(){const r=yr("canvas");return r.style.display="block",r}const $o={};function cs(r){r in $o||($o[r]=!0,console.warn(r))}function Gh(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Vh(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wh(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zo=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jo=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[Lt]:{transfer:ms,primaries:gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Ut]:{transfer:xt,primaries:gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ss]:{transfer:ms,primaries:_s,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Jo),fromReference:r=>r.applyMatrix3(Zo)},[bo]:{transfer:xt,primaries:_s,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Jo),fromReference:r=>r.applyMatrix3(Zo).convertLinearToSRGB()}},Xh=new Set([Lt,Ss]),ot={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Xh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=er[e].toReference,i=er[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return er[r].primaries},getTransfer:function(r){return r===$n?ms:er[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(er[e].luminanceCoefficients)}};function Fi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xi;class qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=yr("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Fi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yh=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ds(i[a].image)):s.push(Ds(i[a]))}else s=Ds(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ds(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class Tt extends Ki{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Zn,i=Zn,s=Qt,a=Dn,o=sn,l=On,c=Tt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=pn(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Pc;Tt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,T=(f+1)/2,O=(m+1)/2,P=(u+d)/4,R=(h+y)/4,B=(g+p)/4;return S>T&&S>O?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=P/n,s=R/n):T>O?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=P/i,s=B/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=R/s,i=B/s),this.set(n,i,s,t),this}let A=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(h-y)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xc extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==f||u!==g){let p=1-o;const m=l*d+c*f+u*g+h*y,A=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const O=Math.sqrt(S),P=Math.atan2(O,m*A);p=Math.sin(p*P)/O,o=Math.sin(o*P)/O}const T=o*A;if(l=l*p+d*T,c=c*p+f*T,u=u*p+g*T,h=h*p+y*T,p===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new I,Qo=new Bn;class gn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Cr.subVectors(this.max,tr),vi.subVectors(e.a,tr),yi.subVectors(e.b,tr),Mi.subVectors(e.c,tr),zn.subVectors(yi,vi),Hn.subVectors(Mi,yi),ii.subVectors(vi,Mi);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ii.y,ii.x,0];return!Us(t,vi,yi,Mi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Us(t,vi,yi,Mi,Cr))?!1:(Pr.crossVectors(zn,Hn),t=[Pr.x,Pr.y,Pr.z],Us(t,vi,yi,Mi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,Rr=new gn,vi=new I,yi=new I,Mi=new I,zn=new I,Hn=new I,ii=new I,tr=new I,Cr=new I,Pr=new I,ri=new I;function Us(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ri.fromArray(r,s);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zh=new gn,nr=new I,Fs=new I;class Mn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Fs)),this.expandByPoint(nr.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new I,Os=new I,Lr=new I,Gn=new I,Bs=new I,Ir=new I,ks=new I;class Er{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Os.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Os);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Gn.dot(this.direction),l=-Gn.dot(Lr),c=Gn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Os).addScaledVector(Lr,d),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){Bs.subVectors(t,e),Ir.subVectors(n,e),ks.crossVectors(Bs,Ir);let a=this.direction.dot(ks),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(Ir.crossVectors(Gn,Ir));if(l<0)return null;const c=o*this.direction.dot(Bs.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(ks);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,g,y,p){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,y,p)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,y,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jh,e,Qh)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Vn.crossVectors(n,$t),Vn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Vn.crossVectors(n,$t)),Vn.normalize(),Dr.crossVectors($t,Vn),i[0]=Vn.x,i[4]=Dr.x,i[8]=$t.x,i[1]=Vn.y,i[5]=Dr.y,i[9]=$t.y,i[2]=Vn.z,i[6]=Dr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],A=n[3],S=n[7],T=n[11],O=n[15],P=i[0],R=i[4],B=i[8],q=i[12],x=i[1],E=i[5],H=i[9],k=i[13],G=i[2],J=i[6],V=i[10],re=i[14],Y=i[3],ve=i[7],ue=i[11],Ae=i[15];return s[0]=a*P+o*x+l*G+c*Y,s[4]=a*R+o*E+l*J+c*ve,s[8]=a*B+o*H+l*V+c*ue,s[12]=a*q+o*k+l*re+c*Ae,s[1]=u*P+h*x+d*G+f*Y,s[5]=u*R+h*E+d*J+f*ve,s[9]=u*B+h*H+d*V+f*ue,s[13]=u*q+h*k+d*re+f*Ae,s[2]=g*P+y*x+p*G+m*Y,s[6]=g*R+y*E+p*J+m*ve,s[10]=g*B+y*H+p*V+m*ue,s[14]=g*q+y*k+p*re+m*Ae,s[3]=A*P+S*x+T*G+O*Y,s[7]=A*R+S*E+T*J+O*ve,s[11]=A*B+S*H+T*V+O*ue,s[15]=A*q+S*k+T*re+O*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+y*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+p*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],A=h*p*c-y*d*c+y*l*f-o*p*f-h*l*m+o*d*m,S=g*d*c-u*p*c-g*l*f+a*p*f+u*l*m-a*d*m,T=u*y*c-g*h*c+g*o*f-a*y*f-u*o*m+a*h*m,O=g*h*l-u*y*l-g*o*d+a*y*d+u*o*p-a*h*p,P=t*A+n*S+i*T+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(y*d*s-h*p*s-y*i*f+n*p*f+h*i*m-n*d*m)*R,e[2]=(o*p*s-y*l*s+y*i*c-n*p*c-o*i*m+n*l*m)*R,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*R,e[4]=S*R,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*m+t*d*m)*R,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*R,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*R,e[8]=T*R,e[9]=(g*h*s-u*y*s-g*n*f+t*y*f+u*n*m-t*h*m)*R,e[10]=(a*y*s-g*o*s+g*n*c-t*y*c-a*n*m+t*o*m)*R,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*R,e[12]=O*R,e[13]=(u*y*i-g*h*i+g*n*d-t*y*d-u*n*p+t*h*p)*R,e[14]=(g*o*i-a*y*i-g*n*l+t*y*l+a*n*p-t*o*p)*R,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,y=a*u,p=a*h,m=o*h,A=l*c,S=l*u,T=l*h,O=n.x,P=n.y,R=n.z;return i[0]=(1-(y+m))*O,i[1]=(f+T)*O,i[2]=(g-S)*O,i[3]=0,i[4]=(f-T)*P,i[5]=(1-(d+m))*P,i[6]=(p+A)*P,i[7]=0,i[8]=(g+S)*R,i[9]=(p-A)*R,i[10]=(1-(d+y))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Si.set(i[0],i[1],i[2]).length();const a=Si.set(i[4],i[5],i[6]).length(),o=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/s,u=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Nn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Nn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===xs)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Nn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,f=(n+i)*u;let g,y;if(o===Nn)g=(a+s)*h,y=-2*h;else if(o===xs)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new I,ln=new Oe,Jh=new I(0,0,0),Qh=new I(1,1,1),Vn=new I,Dr=new I,$t=new I,el=new Oe,tl=new Bn;class _n{constructor(e=0,t=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ed=0;const nl=new I,Ei=new Bn,wn=new Oe,Nr=new I,ir=new I,td=new I,nd=new Bn,il=new I(1,0,0),rl=new I(0,1,0),sl=new I(0,0,1),al={type:"added"},id={type:"removed"},bi={type:"childadded",child:null},zs={type:"childremoved",child:null};class vt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new _n,n=new Bn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Qe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ir,Nr,this.up):wn.lookAt(Nr,ir,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(wn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(al),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id),zs.child=e,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(al),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,Rn=new I,Hs=new I,Cn=new I,Ti=new I,Ai=new I,ol=new I,Gs=new I,Vs=new I,Ws=new I,Xs=new lt,qs=new lt,Ys=new lt;class dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Rn.subVectors(n,t),Hs.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Rn),l=cn.dot(Hs),c=Rn.dot(Rn),u=Rn.dot(Hs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,n),Ys.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Xs,s.x),a.addScaledVector(qs,s.y),a.addScaledVector(Ys,s.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Rn.subVectors(e,t),cn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ti.subVectors(i,n),Ai.subVectors(s,n),Gs.subVectors(e,n);const l=Ti.dot(Gs),c=Ai.dot(Gs);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,i);const u=Ti.dot(Vs),h=Ai.dot(Vs);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ti,a);Ws.subVectors(e,s);const f=Ti.dot(Ws),g=Ai.dot(Ws);if(g>=0&&f<=g)return t.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ai,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return ol.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(ol,o);const m=1/(p+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(Ti,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function js(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=To(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=js(a,s,e+1/3),this.g=js(a,s,e),this.b=js(a,s,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ot.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ft(Dt.r*255,0,255))*65536+Math.round(Ft(Dt.g*255,0,255))*256+Math.round(Ft(Dt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ut){ot.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Ur);const n=pr(Wn.h,Ur.h,t),i=pr(Wn.s,Ur.s,t),s=pr(Wn.l,Ur.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Be;Be.NAMES=qc;let rd=0;class mn extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Ni,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=va,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Un extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,Fr=new et;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}}class Yc extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jc extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const nn=new Oe,Ks=new vt,wi=new I,Zt=new gn,rr=new gn,Rt=new I;class Yt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?jc:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Zt.min,rr.min),Zt.expandByPoint(Rt),Rt.addVectors(Zt.max,rr.max),Zt.expandByPoint(Rt)):(Zt.expandByPoint(rr.min),Zt.expandByPoint(rr.max))}Zt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),Rt.add(wi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new I,l[B]=new I;const c=new I,u=new I,h=new I,d=new et,f=new et,g=new et,y=new I,p=new I;function m(B,q,x){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,q),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,B),f.fromBufferAttribute(s,q),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(E),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(E),o[B].add(y),o[q].add(y),o[x].add(y),l[B].add(p),l[q].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,q=A.length;B<q;++B){const x=A[B],E=x.start,H=x.count;for(let k=E,G=E+H;k<G;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new I,T=new I,O=new I,P=new I;function R(B){O.fromBufferAttribute(i,B),P.copy(O);const q=o[B];S.copy(q),S.sub(O.multiplyScalar(O.dot(q))).normalize(),T.crossVectors(P,q);const E=T.dot(l[B])<0?-1:1;a.setXYZW(B,S.x,S.y,S.z,E)}for(let B=0,q=A.length;B<q;++B){const x=A[B],E=x.start,H=x.count;for(let k=E,G=E+H;k<G;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new Oe,si=new Er,Or=new Mn,cl=new I,Br=new I,kr=new I,zr=new I,$s=new I,Hr=new I,ul=new I,Gr=new I;class Vt extends vt{constructor(e=new Yt,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&($s.fromBufferAttribute(h,e),a?Hr.addScaledVector($s,u):Hr.addScaledVector($s.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Or.containsPoint(si.origin)===!1&&(si.intersectSphere(Or,cl)===null||si.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ll.copy(s).invert(),si.copy(e.ray).applyMatrix4(ll),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const p=d[g],m=a[p.materialIndex],A=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let T=A,O=S;T<O;T+=3){const P=o.getX(T),R=o.getX(T+1),B=o.getX(T+2);i=Vr(this,m,e,n,c,u,h,P,R,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){const A=o.getX(p),S=o.getX(p+1),T=o.getX(p+2);i=Vr(this,a,e,n,c,u,h,A,S,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const p=d[g],m=a[p.materialIndex],A=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=A,O=S;T<O;T+=3){const P=T,R=T+1,B=T+2;i=Vr(this,m,e,n,c,u,h,P,R,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){const A=p,S=p+1,T=p+2;i=Vr(this,a,e,n,c,u,h,A,S,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ad(r,e,t,n,i,s,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Fn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:r}}function Vr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Br),r.getVertexPosition(l,kr),r.getVertexPosition(c,zr);const u=ad(r,e,t,n,Br,kr,zr,ul);if(u){const h=new I;dn.getBarycoord(ul,Br,kr,zr,h),i&&(u.uv=dn.getInterpolatedAttribute(i,o,l,c,h,new et)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,l,c,h,new et)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};dn.getNormal(Br,kr,zr,d.normal),u.face=d,u.barycoord=h}return u}class br extends Yt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function g(y,p,m,A,S,T,O,P,R,B,q){const x=T/R,E=O/B,H=T/2,k=O/2,G=P/2,J=R+1,V=B+1;let re=0,Y=0;const ve=new I;for(let ue=0;ue<V;ue++){const Ae=ue*E-k;for(let He=0;He<J;He++){const at=He*x-H;ve[y]=at*A,ve[p]=Ae*S,ve[m]=G,c.push(ve.x,ve.y,ve.z),ve[y]=0,ve[p]=0,ve[m]=P>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(He/R),h.push(1-ue/B),re+=1}}for(let ue=0;ue<B;ue++)for(let Ae=0;Ae<R;Ae++){const He=d+Ae+J*ue,at=d+Ae+J*(ue+1),j=d+(Ae+1)+J*(ue+1),ae=d+(Ae+1)+J*ue;l.push(He,at,ae),l.push(at,j,ae),Y+=6}o.addGroup(f,Y,q),f+=Y,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const n=Xi(r[t]);for(const i in n)e[i]=n[i]}return e}function od(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const ld={clone:Xi,merge:kt};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wo extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new I,hl=new et,dl=new et;class Ht extends wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,hl,dl),t.subVectors(dl,hl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Ci=1;class hd extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Ri,Ci,e,t);i.layers=this.layers,this.add(i);const s=new Ht(Ri,Ci,e,t);s.layers=this.layers,this.add(s);const a=new Ht(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const l=new Ht(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Ri,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $c extends Tt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ki,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $c(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new br(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:ei});s.uniforms.tEquirect.value=t;const a=new Vt(i,s),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Qt),new hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Zs=new I,fd=new I,pd=new Qe;class jn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zs.subVectors(n,t).cross(fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pd.getNormalMatrix(e),i=this.coplanarPoint(Zs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Mn,Wr=new I;class Ro{constructor(e=new jn,t=new jn,n=new jn,i=new jn,s=new jn,a=new jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],y=i[10],p=i[11],m=i[12],A=i[13],S=i[14],T=i[15];if(n[0].setComponents(l-s,d-c,p-f,T-m).normalize(),n[1].setComponents(l+s,d+c,p+f,T+m).normalize(),n[2].setComponents(l+a,d+u,p+g,T+A).normalize(),n[3].setComponents(l-a,d-u,p-g,T-A).normalize(),n[4].setComponents(l-o,d-h,p-y,T-S).normalize(),t===Nn)n[5].setComponents(l+o,d+h,p+y,T+S).normalize();else if(t===xs)n[5].setComponents(o,h,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wr.x=i.normal.x>0?e.max.x:e.min.x,Wr.y=i.normal.y>0?e.max.y:e.min.y,Wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function md(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];r.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Es extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],y=[],p=[];for(let m=0;m<u;m++){const A=m*d-a;for(let S=0;S<c;S++){const T=S*h-s;g.push(T,-A,0),y.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<o;A++){const S=A+c*m,T=A+c*(m+1),O=A+1+c*(m+1),P=A+1+c*m;f.push(S,T,P),f.push(T,O,P)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Af=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Up=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:xd,alphamap_pars_fragment:vd,alphatest_fragment:yd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:Ed,batching_pars_vertex:bd,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Nd,color_fragment:Ud,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:kd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Vd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:Yd,envmap_fragment:jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:$d,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:Jd,fog_vertex:Qd,fog_pars_vertex:ef,fog_fragment:tf,fog_pars_fragment:nf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:sf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:lf,lights_toon_fragment:uf,lights_toon_pars_fragment:hf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:xf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:Sf,map_fragment:Ef,map_pars_fragment:bf,map_particle_fragment:Tf,map_particle_pars_fragment:Af,metalnessmap_fragment:wf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Df,normal_fragment_begin:Nf,normal_fragment_maps:Uf,normal_pars_fragment:Ff,normal_pars_vertex:Of,normal_vertex:Bf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Vf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:jf,dithering_pars_fragment:Kf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:sp,specularmap_fragment:ap,specularmap_pars_fragment:op,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:up,transmission_pars_fragment:hp,uv_pars_fragment:dp,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:xp,backgroundCube_frag:vp,cube_vert:yp,cube_frag:Mp,depth_vert:Sp,depth_frag:Ep,distanceRGBA_vert:bp,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:wp,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Dp,meshmatcap_vert:Np,meshmatcap_frag:Up,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:Bp,meshphong_frag:kp,meshphysical_vert:zp,meshphysical_frag:Hp,meshtoon_vert:Gp,meshtoon_frag:Vp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:jp,sprite_frag:Kp},me={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},yn={basic:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:kt([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:kt([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:kt([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:kt([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:kt([me.lights,me.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};yn.physical={uniforms:kt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Xr={r:0,b:0,g:0},oi=new _n,$p=new Oe;function Zp(r,e,t,n,i,s,a){const o=new Be(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:e).get(S)),S}function y(A){let S=!1;const T=g(A);T===null?m(o,l):T&&T.isColor&&(m(T,1),S=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(A,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===Ms)?(u===void 0&&(u=new Vt(new br(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Xi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oi.copy(S.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(oi)),u.material.toneMapped=ot.getTransfer(T.colorSpace)!==xt,(h!==T||d!==T.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Vt(new Es(2,2),new ni({name:"BackgroundMaterial",uniforms:Xi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(T.colorSpace)!==xt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,S){A.getRGB(Xr,Kc(r)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(A,S=1){o.set(A),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(o,l)},render:y,addToRenderList:p}}function Jp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(x,E,H,k,G){let J=!1;const V=h(k,H,E);s!==V&&(s=V,c(s.object)),J=f(x,k,H,G),J&&g(x,k,H,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,T(x,E,H,k),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,E,H){const k=H.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let J=G[E.id];J===void 0&&(J={},G[E.id]=J);let V=J[k];return V===void 0&&(V=d(l()),J[k]=V),V}function d(x){const E=[],H=[],k=[];for(let G=0;G<t;G++)E[G]=0,H[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,E,H,k){const G=s.attributes,J=E.attributes;let V=0;const re=H.getAttributes();for(const Y in re)if(re[Y].location>=0){const ue=G[Y];let Ae=J[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Ae=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Ae=x.instanceColor)),ue===void 0||ue.attribute!==Ae||Ae&&ue.data!==Ae.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function g(x,E,H,k){const G={},J=E.attributes;let V=0;const re=H.getAttributes();for(const Y in re)if(re[Y].location>=0){let ue=J[Y];ue===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const Ae={};Ae.attribute=ue,ue&&ue.data&&(Ae.data=ue.data),G[Y]=Ae,V++}s.attributes=G,s.attributesNum=V,s.index=k}function y(){const x=s.newAttributes;for(let E=0,H=x.length;E<H;E++)x[E]=0}function p(x){m(x,0)}function m(x,E){const H=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;H[x]=1,k[x]===0&&(r.enableVertexAttribArray(x),k[x]=1),G[x]!==E&&(r.vertexAttribDivisor(x,E),G[x]=E)}function A(){const x=s.newAttributes,E=s.enabledAttributes;for(let H=0,k=E.length;H<k;H++)E[H]!==x[H]&&(r.disableVertexAttribArray(H),E[H]=0)}function S(x,E,H,k,G,J,V){V===!0?r.vertexAttribIPointer(x,E,H,G,J):r.vertexAttribPointer(x,E,H,k,G,J)}function T(x,E,H,k){y();const G=k.attributes,J=H.getAttributes(),V=E.defaultAttributeValues;for(const re in J){const Y=J[re];if(Y.location>=0){let ve=G[re];if(ve===void 0&&(re==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),re==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),ve!==void 0){const ue=ve.normalized,Ae=ve.itemSize,He=e.get(ve);if(He===void 0)continue;const at=He.buffer,j=He.type,ae=He.bytesPerElement,te=j===r.INT||j===r.UNSIGNED_INT||ve.gpuType===go;if(ve.isInterleavedBufferAttribute){const ee=ve.data,We=ee.stride,Me=ve.offset;if(ee.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Y.locationSize;Ge++)m(Y.location+Ge,ee.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ge=0;Ge<Y.locationSize;Ge++)p(Y.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,at);for(let Ge=0;Ge<Y.locationSize;Ge++)S(Y.location+Ge,Ae/Y.locationSize,j,ue,We*ae,(Me+Ae/Y.locationSize*Ge)*ae,te)}else{if(ve.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee,ve.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee);r.bindBuffer(r.ARRAY_BUFFER,at);for(let ee=0;ee<Y.locationSize;ee++)S(Y.location+ee,Ae/Y.locationSize,j,ue,Ae*ae,Ae/Y.locationSize*ee*ae,te)}}else if(V!==void 0){const ue=V[re];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(Y.location,ue);break;case 3:r.vertexAttrib3fv(Y.location,ue);break;case 4:r.vertexAttrib4fv(Y.location,ue);break;default:r.vertexAttrib1fv(Y.location,ue)}}}}A()}function O(){B();for(const x in n){const E=n[x];for(const H in E){const k=E[H];for(const G in k)u(k[G].object),delete k[G];delete E[H]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const H in E){const k=E[H];for(const G in k)u(k[G].object),delete k[G];delete E[H]}delete n[x.id]}function R(x){for(const E in n){const H=n[E];if(H[x.id]===void 0)continue;const k=H[x.id];for(const G in k)u(k[G].object),delete k[G];delete H[x.id]}}function B(){q(),a=!0,s!==i&&(s=i,c(s.object))}function q(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:B,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function Qp(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];for(let y=0;y<d.length;y++)t.update(g,n,d[y])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function em(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==sn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const B=R===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==On&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fn&&!B)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:O,maxSamples:P}}function tm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new jn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:n,S=A*4;let T=m.clippingState||null;l.value=T,T=u(g,d,S,f);for(let O=0;O!==S;++O)T[O]=t[O];m.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const m=f+y*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,T=f;S!==y;++S,T+=4)a.copy(h[S]).applyMatrix4(A,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function nm(r){let e=new WeakMap;function t(a,o){return o===wa?a.mapping=ki:o===Ra&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wa||o===Ra)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dd(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Co extends wo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,fl=[.125,.215,.35,.446,.526,.582],di=20,Js=new Co,pl=new Be;let Qs=null,ea=0,ta=0,na=!1;const ui=(1+Math.sqrt(5))/2,Pi=1/ui,ml=[new I(-ui,Pi,0),new I(ui,Pi,0),new I(-Pi,0,ui),new I(Pi,0,ui),new I(0,ui,-Pi),new I(0,ui,Pi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qs=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs,ea,ta),this._renderer.xr.enabled=na,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Sr,format:sn,colorSpace:Lt,depthBuffer:!1},i=_l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=rm(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,i){const o=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(pl),u.toneMapping=ti,u.autoClear=!1;const f=new Un({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new Vt(new br,f);let y=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,y=!0):(f.color.copy(pl),y=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):A===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;qr(i,A*S,m>2?S:0,S,S),u.setRenderTarget(i),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ki||e.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ml[(i-s-1)%ml.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*di-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):di;p>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const m=[];let A=0;for(let R=0;R<di;++R){const B=R/y,q=Math.exp(-B*B/2);m.push(q),R===0?A+=q:R<p&&(A+=2*q)}for(let R=0;R<m.length;R++)m[R]=m[R]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const T=this._sizeLods[i],O=3*T*(i>S-Di?i-S+Di:0),P=4*(this._cubeSize-T);qr(t,O,P,3*T,2*T),l.setRenderTarget(t),l.render(h,Js)}}function im(r){const e=[],t=[],n=[];let i=r;const s=r-Di+1+fl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Di?l=fl[a-r+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,p=2,m=1,A=new Float32Array(y*g*f),S=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,B=P>2?0:-1,q=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];A.set(q,y*g*P),S.set(d,p*g*P);const x=[P,P,P,P,P,P];T.set(x,m*g*P)}const O=new Yt;O.setAttribute("position",new Ot(A,y)),O.setAttribute("uv",new Ot(S,p)),O.setAttribute("faceIndex",new Ot(T,m)),e.push(O),i>Di&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _l(r,e,t){const n=new pi(r,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rm(r,e,t){const n=new Float32Array(di),i=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function xl(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function vl(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wa||l===Ra,u=l===ki||l===zi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new gl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new gl(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function am(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function om(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const y=f[g];for(let p=0,m=y.length;p<m;p++)e.update(y[p],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let y=0;if(f!==null){const A=f.array;y=f.version;for(let S=0,T=A.length;S<T;S+=3){const O=A[S+0],P=A[S+1],R=A[S+2];d.push(O,P,P,R,R,O)}}else if(g!==void 0){const A=g.array;y=g.version;for(let S=0,T=A.length/3-1;S<T;S+=3){const O=S+0,P=S+1,R=S+2;d.push(O,P,P,R,R,O)}}else return;const p=new(Vc(d)?jc:Yc)(d,1);p.version=y;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function lm(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function h(d,f,g,y){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,y,0,g);let m=0;for(let A=0;A<g;A++)m+=f[A];for(let A=0;A<y.length;A++)t.update(m,n,y[A])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function um(r,e,t){const n=new WeakMap,i=new lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let q=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let T=o.attributes.position.count*S,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*O*4*h),R=new Xc(P,T,O,h);R.type=fn,R.needsUpdate=!0;const B=S*4;for(let x=0;x<h;x++){const E=p[x],H=m[x],k=A[x],G=T*O*4*x;for(let J=0;J<E.count;J++){const V=J*B;f===!0&&(i.fromBufferAttribute(E,J),P[G+V+0]=i.x,P[G+V+1]=i.y,P[G+V+2]=i.z,P[G+V+3]=0),g===!0&&(i.fromBufferAttribute(H,J),P[G+V+4]=i.x,P[G+V+5]=i.y,P[G+V+6]=i.z,P[G+V+7]=0),y===!0&&(i.fromBufferAttribute(k,J),P[G+V+8]=i.x,P[G+V+9]=i.y,P[G+V+10]=i.z,P[G+V+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new et(T,O)},n.set(o,d),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function hm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Jc extends Tt{constructor(e,t,n,i,s,a,o,l,c,u=Ui){if(u!==Ui&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=fi),n===void 0&&u===Vi&&(n=Gi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qc=new Tt,yl=new Jc(1,1),eu=new Xc,tu=new $h,nu=new $c,Ml=[],Sl=[],El=new Float32Array(16),bl=new Float32Array(9),Tl=new Float32Array(4);function $i(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ml[i];if(s===void 0&&(s=new Float32Array(i),Ml[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function bs(r,e){let t=Sl[e];t===void 0&&(t=new Int32Array(e),Sl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function gm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Tl.set(n),r.uniformMatrix2fv(this.addr,!1,Tl),wt(t,n)}}function _m(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;bl.set(n),r.uniformMatrix3fv(this.addr,!1,bl),wt(t,n)}}function xm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;El.set(n),r.uniformMatrix4fv(this.addr,!1,El),wt(t,n)}}function vm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function Mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function Em(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function bm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function Tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yl.compareFunction=Gc,s=yl):s=Qc,t.setTexture2D(e||s,i)}function Rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tu,i)}function Cm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nu,i)}function Pm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eu,i)}function Lm(r){switch(r){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return bm;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(r,e){r.uniform1fv(this.addr,e)}function Dm(r,e){const t=$i(e,this.size,2);r.uniform2fv(this.addr,t)}function Nm(r,e){const t=$i(e,this.size,3);r.uniform3fv(this.addr,t)}function Um(r,e){const t=$i(e,this.size,4);r.uniform4fv(this.addr,t)}function Fm(r,e){const t=$i(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Om(r,e){const t=$i(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bm(r,e){const t=$i(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function km(r,e){r.uniform1iv(this.addr,e)}function zm(r,e){r.uniform2iv(this.addr,e)}function Hm(r,e){r.uniform3iv(this.addr,e)}function Gm(r,e){r.uniform4iv(this.addr,e)}function Vm(r,e){r.uniform1uiv(this.addr,e)}function Wm(r,e){r.uniform2uiv(this.addr,e)}function Xm(r,e){r.uniform3uiv(this.addr,e)}function qm(r,e){r.uniform4uiv(this.addr,e)}function Ym(r,e,t){const n=this.cache,i=e.length,s=bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qc,s[a])}function jm(r,e,t){const n=this.cache,i=e.length,s=bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||tu,s[a])}function Km(r,e,t){const n=this.cache,i=e.length,s=bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||nu,s[a])}function $m(r,e,t){const n=this.cache,i=e.length,s=bs(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||eu,s[a])}function Zm(r){switch(r){case 5126:return Im;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return zm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return $m}}class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}}class Qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}}class eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Al(r,e){r.seq.push(e),r.map[e.id]=e}function tg(r,e,t){const n=r.name,i=n.length;for(ia.lastIndex=0;;){const s=ia.exec(n),a=ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Al(t,c===void 0?new Jm(o,r,e):new Qm(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new eg(o),Al(t,h)),t=h}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);tg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ng=37297;let ig=0;function rg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function sg(r){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(r);let n;switch(e===t?n="":e===_s&&t===gs?n="LinearDisplayP3ToLinearSRGB":e===gs&&t===_s&&(n="LinearSRGBToLinearDisplayP3"),r){case Lt:case Ss:return[n,"LinearTransferOETF"];case Ut:case bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Rl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rg(r.getShaderSource(e),a)}else return i}function ag(r,e){const t=sg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function og(r,e){let t;switch(e){case ah:t="Linear";break;case oh:t="Reinhard";break;case lh:t="Cineon";break;case Cc:t="ACESFilmic";break;case uh:t="AgX";break;case hh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new I;function lg(){ot.getLuminanceCoefficients(Yr);const r=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function ug(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function dr(r){return r!==""}function Cl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(r){return r.replace(dg,pg)}const fg=new Map;function pg(r,e){let t=Je[e];if(t===void 0){const n=fg.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return io(t)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(r){return r.replace(mg,gg)}function gg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Il(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _g(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function xg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ki:case zi:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function yg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case rh:e="ENVMAP_BLENDING_MIX";break;case sh:e="ENVMAP_BLENDING_ADD";break}return e}function Mg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_g(t),c=xg(t),u=vg(t),h=yg(t),d=Mg(t),f=cg(t),g=ug(s),y=i.createProgram();let p,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(p=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Je.tonemapping_pars_fragment:"",t.toneMapping!==ti?og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=io(a),a=Cl(a,t),a=Pl(a,t),o=io(o),o=Cl(o,t),o=Pl(o,t),a=Ll(a),o=Ll(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=A+p+a,T=A+m+o,O=wl(i,i.VERTEX_SHADER,S),P=wl(i,i.FRAGMENT_SHADER,T);i.attachShader(y,O),i.attachShader(y,P),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function R(E){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(y).trim(),k=i.getShaderInfoLog(O).trim(),G=i.getShaderInfoLog(P).trim();let J=!0,V=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,O,P);else{const re=Rl(i,O,"vertex"),Y=Rl(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+re+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||G==="")&&(V=!1);V&&(E.diagnostics={runnable:J,programLog:H,vertexShader:{log:k,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(O),i.deleteShader(P),B=new us(i,y),q=hg(i,y)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let q;this.getAttributes=function(){return q===void 0&&R(this),q};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(y,ng)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=P,this}let Eg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tg(e),t.set(e,n)),n}}class Tg{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function Ag(r,e,t,n,i,s,a){const o=new Ao,l=new bg,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,H,k,G){const J=k.fog,V=G.geometry,re=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||re),ve=Y&&Y.mapping===Ms?Y.image.height:null,ue=y[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,He=Ae!==void 0?Ae.length:0;let at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let j,ae,te,ee;if(ue){const pe=yn[ue];j=pe.vertexShader,ae=pe.fragmentShader}else j=x.vertexShader,ae=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),ee=l.getFragmentShaderID(x);const We=r.getRenderTarget(),Me=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,st=!!x.map,Xe=!!x.matcap,L=!!Y,Mt=!!x.aoMap,Ze=!!x.lightMap,tt=!!x.bumpMap,Pe=!!x.normalMap,ct=!!x.displacementMap,ke=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,z=x.anisotropy>0,$=x.clearcoat>0,ne=x.dispersion>0,K=x.iridescence>0,we=x.sheen>0,fe=x.transmission>0,xe=z&&!!x.anisotropyMap,rt=$&&!!x.clearcoatMap,se=$&&!!x.clearcoatNormalMap,Se=$&&!!x.clearcoatRoughnessMap,Fe=K&&!!x.iridescenceMap,Ue=K&&!!x.iridescenceThicknessMap,ye=we&&!!x.sheenColorMap,Ke=we&&!!x.sheenRoughnessMap,qe=!!x.specularMap,ut=!!x.specularColorMap,N=!!x.specularIntensityMap,ge=fe&&!!x.transmissionMap,_=fe&&!!x.thicknessMap,b=!!x.gradientMap,W=!!x.alphaMap,X=x.alphaTest>0,de=!!x.alphaHash,be=!!x.extensions;let Q=ti;x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Q=r.toneMapping);const le={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:ae,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:Me,instancingColor:Me&&G.instanceColor!==null,instancingMorph:Me&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:We===null?r.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Lt,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:Xe,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:ve,aoMap:Mt,lightMap:Ze,bumpMap:tt,normalMap:Pe,displacementMap:f&&ct,emissiveMap:ke,normalMapObjectSpace:Pe&&x.normalMapType===_h,normalMapTangentSpace:Pe&&x.normalMapType===Eo,metalnessMap:w,roughnessMap:M,anisotropy:z,anisotropyMap:xe,clearcoat:$,clearcoatMap:rt,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,dispersion:ne,iridescence:K,iridescenceMap:Fe,iridescenceThicknessMap:Ue,sheen:we,sheenColorMap:ye,sheenRoughnessMap:Ke,specularMap:qe,specularColorMap:ut,specularIntensityMap:N,transmission:fe,transmissionMap:ge,thicknessMap:_,gradientMap:b,opaque:x.transparent===!1&&x.blending===Ni&&x.alphaToCoverage===!1,alphaMap:W,alphaTest:X,alphaHash:de,combine:x.combine,mapUv:st&&p(x.map.channel),aoMapUv:Mt&&p(x.aoMap.channel),lightMapUv:Ze&&p(x.lightMap.channel),bumpMapUv:tt&&p(x.bumpMap.channel),normalMapUv:Pe&&p(x.normalMap.channel),displacementMapUv:ct&&p(x.displacementMap.channel),emissiveMapUv:ke&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:M&&p(x.roughnessMap.channel),anisotropyMapUv:xe&&p(x.anisotropyMap.channel),clearcoatMapUv:rt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&p(x.sheenRoughnessMap.channel),specularMapUv:qe&&p(x.specularMap.channel),specularColorMapUv:ut&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:ge&&p(x.transmissionMap.channel),thicknessMapUv:_&&p(x.thicknessMap.channel),alphaMapUv:W&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(st||W),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:at,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Q,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function A(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)E.push(H),E.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(S(E,x),T(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function S(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function T(x,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),x.push(o.mask)}function O(x){const E=y[x.type];let H;if(E){const k=yn[E];H=ld.clone(k.uniforms)}else H=x.uniforms;return H}function P(x,E){let H;for(let k=0,G=u.length;k<G;k++){const J=u[k];if(J.cacheKey===E){H=J,++H.usedTimes;break}}return H===void 0&&(H=new Sg(r,E,x,s),u.push(H)),H}function R(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function B(x){l.remove(x)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:A,getUniforms:O,acquireProgram:P,releaseProgram:R,releaseShaderCache:B,programs:u,dispose:q}}function wg(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Rg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,y,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=y,m.group=p),e++,m}function o(h,d,f,g,y,p){const m=a(h,d,f,g,y,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,g,y,p){const m=a(h,d,f,g,y,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Rg),n.length>1&&n.sort(d||Dl),i.length>1&&i.sort(d||Dl)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Cg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Nl,r.set(n,[a])):i>=s.length?(a=new Nl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Pg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Lg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ig=0;function Dg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ng(r){const e=new Pg,t=Lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Oe,a=new Oe;function o(c){let u=0,h=0,d=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,A=0,S=0,T=0,O=0,P=0,R=0;c.sort(Dg);for(let q=0,x=c.length;q<x;q++){const E=c[q],H=E.color,k=E.intensity,G=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=H.r*k,h+=H.g*k,d+=H.b*k;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],k);R++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const re=E.shadow,Y=t.get(E);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=E.shadow.matrix,A++}n.directional[f]=V,f++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(H).multiplyScalar(k),V.distance=G,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[y]=V;const re=E.shadow;if(E.map&&(n.spotLightMap[O]=E.map,O++,re.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[y]=re.matrix,E.castShadow){const Y=t.get(E);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=J,T++}y++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(H).multiplyScalar(k),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=V,p++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const re=E.shadow,Y=t.get(E);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,Y.shadowCameraNear=re.camera.near,Y.shadowCameraFar=re.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=E.shadow.matrix,S++}n.point[g]=V,g++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(k),V.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[m]=V,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const B=n.hash;(B.directionalLength!==f||B.pointLength!==g||B.spotLength!==y||B.rectAreaLength!==p||B.hemiLength!==m||B.numDirectionalShadows!==A||B.numPointShadows!==S||B.numSpotShadows!==T||B.numSpotMaps!==O||B.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,B.directionalLength=f,B.pointLength=g,B.spotLength=y,B.rectAreaLength=p,B.hemiLength=m,B.numDirectionalShadows=A,B.numPointShadows=S,B.numSpotShadows=T,B.numSpotMaps=O,B.numLightProbes=R,n.version=Ig++)}function l(c,u){let h=0,d=0,f=0,g=0,y=0;const p=u.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const S=c[m];if(S.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),h++}else if(S.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const T=n.hemi[y];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function Ul(r){const e=new Ng(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ug(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ul(r),e.set(i,[o])):s>=a.length?(o=new Ul(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Fg extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Og extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(r,e,t){let n=new Ro;const i=new et,s=new et,a=new lt,o=new Fg({depthPacking:gh}),l=new Og,c={},u=t.maxTextureSize,h={[Fn]:qt,[qt]:Fn,[un]:un},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Bg,fragmentShader:kg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let m=this.type;this.render=function(P,R,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const q=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=m!==Ln&&this.type===Ln,G=m===Ln&&this.type!==Ln;for(let J=0,V=P.length;J<V;J++){const re=P[J],Y=re.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ve=Y.getFrameExtents();if(i.multiply(ve),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ve.x),i.x=s.x*ve.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ve.y),i.y=s.y*ve.y,Y.mapSize.y=s.y)),Y.map===null||k===!0||G===!0){const Ae=this.type!==Ln?{minFilter:Gt,magFilter:Gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pi(i.x,i.y,Ae),Y.map.texture.name=re.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ue=Y.getViewportCount();for(let Ae=0;Ae<ue;Ae++){const He=Y.getViewport(Ae);a.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),H.viewport(a),Y.updateMatrices(re,Ae),n=Y.getFrustum(),T(R,B,Y.camera,re,this.type)}Y.isPointLightShadow!==!0&&this.type===Ln&&A(Y,B),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(q,x,E)};function A(P,R){const B=e.update(y);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(R,null,B,d,y,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(R,null,B,f,y,null)}function S(P,R,B,q){let x=null;const E=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)x=E;else if(x=B.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=x.uuid,k=R.uuid;let G=c[H];G===void 0&&(G={},c[H]=G);let J=G[k];J===void 0&&(J=x.clone(),G[k]=J,R.addEventListener("dispose",O)),x=J}if(x.visible=R.visible,x.wireframe=R.wireframe,q===Ln?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,B.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=r.properties.get(x);H.light=B}return x}function T(P,R,B,q,x){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Ln)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const k=e.update(P),G=P.material;if(Array.isArray(G)){const J=k.groups;for(let V=0,re=J.length;V<re;V++){const Y=J[V],ve=G[Y.materialIndex];if(ve&&ve.visible){const ue=S(P,ve,q,x);P.onBeforeShadow(r,P,R,B,k,ue,Y),r.renderBufferDirect(B,null,k,ue,P,Y),P.onAfterShadow(r,P,R,B,k,ue,Y)}}}else if(G.visible){const J=S(P,G,q,x);P.onBeforeShadow(r,P,R,B,k,J,null),r.renderBufferDirect(B,null,k,J,P,null),P.onAfterShadow(r,P,R,B,k,J,null)}}const H=P.children;for(let k=0,G=H.length;k<G;k++)T(H[k],R,B,q,x)}function O(P){P.target.removeEventListener("dispose",O);for(const B in c){const q=c[B],x=P.target.uuid;x in q&&(q[x].dispose(),delete q[x])}}}const Hg={[ya]:Ma,[Sa]:Ta,[Ea]:Aa,[Bi]:ba,[Ma]:ya,[Ta]:Sa,[Aa]:Ea,[ba]:Bi};function Gg(r){function e(){let N=!1;const ge=new lt;let _=null;const b=new lt(0,0,0,0);return{setMask:function(W){_!==W&&!N&&(r.colorMask(W,W,W,W),_=W)},setLocked:function(W){N=W},setClear:function(W,X,de,be,Q){Q===!0&&(W*=be,X*=be,de*=be),ge.set(W,X,de,be),b.equals(ge)===!1&&(r.clearColor(W,X,de,be),b.copy(ge))},reset:function(){N=!1,_=null,b.set(-1,0,0,0)}}}function t(){let N=!1,ge=!1,_=null,b=null,W=null;return{setReversed:function(X){ge=X},setTest:function(X){X?te(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(X){_!==X&&!N&&(r.depthMask(X),_=X)},setFunc:function(X){if(ge&&(X=Hg[X]),b!==X){switch(X){case ya:r.depthFunc(r.NEVER);break;case Ma:r.depthFunc(r.ALWAYS);break;case Sa:r.depthFunc(r.LESS);break;case Bi:r.depthFunc(r.LEQUAL);break;case Ea:r.depthFunc(r.EQUAL);break;case ba:r.depthFunc(r.GEQUAL);break;case Ta:r.depthFunc(r.GREATER);break;case Aa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}b=X}},setLocked:function(X){N=X},setClear:function(X){W!==X&&(r.clearDepth(X),W=X)},reset:function(){N=!1,_=null,b=null,W=null}}}function n(){let N=!1,ge=null,_=null,b=null,W=null,X=null,de=null,be=null,Q=null;return{setTest:function(le){N||(le?te(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(le){ge!==le&&!N&&(r.stencilMask(le),ge=le)},setFunc:function(le,pe,ze){(_!==le||b!==pe||W!==ze)&&(r.stencilFunc(le,pe,ze),_=le,b=pe,W=ze)},setOp:function(le,pe,ze){(X!==le||de!==pe||be!==ze)&&(r.stencilOp(le,pe,ze),X=le,de=pe,be=ze)},setLocked:function(le){N=le},setClear:function(le){Q!==le&&(r.clearStencil(le),Q=le)},reset:function(){N=!1,ge=null,_=null,b=null,W=null,X=null,de=null,be=null,Q=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,y=null,p=null,m=null,A=null,S=null,T=null,O=null,P=new Be(0,0,0),R=0,B=!1,q=null,x=null,E=null,H=null,k=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(re)[1]),J=V>=1):re.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),J=V>=2);let Y=null,ve={};const ue=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),He=new lt().fromArray(ue),at=new lt().fromArray(Ae);function j(N,ge,_,b){const W=new Uint8Array(4),X=r.createTexture();r.bindTexture(N,X),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<_;de++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,b,0,r.RGBA,r.UNSIGNED_BYTE,W):r.texImage2D(ge+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,W);return X}const ae={};ae[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),te(r.DEPTH_TEST),s.setFunc(Bi),Ze(!1),tt(zo),te(r.CULL_FACE),L(ei);function te(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function ee(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function We(N,ge){return u[N]!==ge?(r.bindFramebuffer(N,ge),u[N]=ge,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ge),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Me(N,ge){let _=d,b=!1;if(N){_=h.get(ge),_===void 0&&(_=[],h.set(ge,_));const W=N.textures;if(_.length!==W.length||_[0]!==r.COLOR_ATTACHMENT0){for(let X=0,de=W.length;X<de;X++)_[X]=r.COLOR_ATTACHMENT0+X;_.length=W.length,b=!0}}else _[0]!==r.BACK&&(_[0]=r.BACK,b=!0);b&&r.drawBuffers(_)}function Ge(N){return f!==N?(r.useProgram(N),f=N,!0):!1}const st={[hi]:r.FUNC_ADD,[Hu]:r.FUNC_SUBTRACT,[Gu]:r.FUNC_REVERSE_SUBTRACT};st[Vu]=r.MIN,st[Wu]=r.MAX;const Xe={[Xu]:r.ZERO,[qu]:r.ONE,[Yu]:r.SRC_COLOR,[xa]:r.SRC_ALPHA,[Qu]:r.SRC_ALPHA_SATURATE,[Zu]:r.DST_COLOR,[Ku]:r.DST_ALPHA,[ju]:r.ONE_MINUS_SRC_COLOR,[va]:r.ONE_MINUS_SRC_ALPHA,[Ju]:r.ONE_MINUS_DST_COLOR,[$u]:r.ONE_MINUS_DST_ALPHA,[eh]:r.CONSTANT_COLOR,[th]:r.ONE_MINUS_CONSTANT_COLOR,[nh]:r.CONSTANT_ALPHA,[ih]:r.ONE_MINUS_CONSTANT_ALPHA};function L(N,ge,_,b,W,X,de,be,Q,le){if(N===ei){g===!0&&(ee(r.BLEND),g=!1);return}if(g===!1&&(te(r.BLEND),g=!0),N!==zu){if(N!==y||le!==B){if((p!==hi||S!==hi)&&(r.blendEquation(r.FUNC_ADD),p=hi,S=hi),le)switch(N){case Ni:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _a:r.blendFunc(r.ONE,r.ONE);break;case Ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Go:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _a:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Go:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,A=null,T=null,O=null,P.set(0,0,0),R=0,y=N,B=le}return}W=W||ge,X=X||_,de=de||b,(ge!==p||W!==S)&&(r.blendEquationSeparate(st[ge],st[W]),p=ge,S=W),(_!==m||b!==A||X!==T||de!==O)&&(r.blendFuncSeparate(Xe[_],Xe[b],Xe[X],Xe[de]),m=_,A=b,T=X,O=de),(be.equals(P)===!1||Q!==R)&&(r.blendColor(be.r,be.g,be.b,Q),P.copy(be),R=Q),y=N,B=!1}function Mt(N,ge){N.side===un?ee(r.CULL_FACE):te(r.CULL_FACE);let _=N.side===qt;ge&&(_=!_),Ze(_),N.blending===Ni&&N.transparent===!1?L(ei):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const b=N.stencilWrite;a.setTest(b),b&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){q!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),q=N)}function tt(N){N!==Bu?(te(r.CULL_FACE),N!==x&&(N===zo?r.cullFace(r.BACK):N===ku?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),x=N}function Pe(N){N!==E&&(J&&r.lineWidth(N),E=N)}function ct(N,ge,_){N?(te(r.POLYGON_OFFSET_FILL),(H!==ge||k!==_)&&(r.polygonOffset(ge,_),H=ge,k=_)):ee(r.POLYGON_OFFSET_FILL)}function ke(N){N?te(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function w(N){N===void 0&&(N=r.TEXTURE0+G-1),Y!==N&&(r.activeTexture(N),Y=N)}function M(N,ge,_){_===void 0&&(Y===null?_=r.TEXTURE0+G-1:_=Y);let b=ve[_];b===void 0&&(b={type:void 0,texture:void 0},ve[_]=b),(b.type!==N||b.texture!==ge)&&(Y!==_&&(r.activeTexture(_),Y=_),r.bindTexture(N,ge||ae[N]),b.type=N,b.texture=ge)}function z(){const N=ve[Y];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){He.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),He.copy(N))}function ye(N){at.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),at.copy(N))}function Ke(N,ge){let _=l.get(ge);_===void 0&&(_=new WeakMap,l.set(ge,_));let b=_.get(N);b===void 0&&(b=r.getUniformBlockIndex(ge,N.name),_.set(N,b))}function qe(N,ge){const b=l.get(ge).get(N);o.get(ge)!==b&&(r.uniformBlockBinding(ge,b,N.__bindingPointIndex),o.set(ge,b))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Y=null,ve={},u={},h=new WeakMap,d=[],f=null,g=!1,y=null,p=null,m=null,A=null,S=null,T=null,O=null,P=new Be(0,0,0),R=0,B=!1,q=null,x=null,E=null,H=null,k=null,He.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:te,disable:ee,bindFramebuffer:We,drawBuffers:Me,useProgram:Ge,setBlending:L,setMaterial:Mt,setFlipSided:Ze,setCullFace:tt,setLineWidth:Pe,setPolygonOffset:ct,setScissorTest:ke,activeTexture:w,bindTexture:M,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Fe,updateUBOMapping:Ke,uniformBlockBinding:qe,texStorage2D:rt,texStorage3D:se,texSubImage2D:K,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ue,viewport:ye,reset:ut}}function Fl(r,e,t,n){const i=Vg(n);switch(t){case Uc:return r*e;case Oc:return r*e;case Bc:return r*e*2;case vo:return r*e/i.components*i.byteLength;case yo:return r*e/i.components*i.byteLength;case kc:return r*e*2/i.components*i.byteLength;case Mo:return r*e*2/i.components*i.byteLength;case Fc:return r*e*3/i.components*i.byteLength;case sn:return r*e*4/i.components*i.byteLength;case So:return r*e*4/i.components*i.byteLength;case rs:case ss:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case as:case os:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Ia:return Math.max(r,16)*Math.max(e,8)/4;case Ca:case La:return Math.max(r,8)*Math.max(e,8)/2;case Da:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ja:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ls:case $a:case Za:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zc:case Ja:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qa:case eo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vg(r){switch(r){case On:case Ic:return{byteLength:1,components:1};case _r:case Dc:case Sr:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case fi:case go:case fn:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Wg(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):yr("canvas")}function y(w,M,z){let $=1;const ne=ke(w);if((ne.width>z||ne.height>z)&&($=z/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor($*ne.width),we=Math.floor($*ne.height);h===void 0&&(h=g(K,we));const fe=M?g(K,we):h;return fe.width=K,fe.height=we,fe.getContext("2d").drawImage(w,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+we+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Gt&&w.minFilter!==Qt}function m(w){r.generateMipmap(w)}function A(w,M,z,$,ne=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=M;if(M===r.RED&&(z===r.FLOAT&&(K=r.R32F),z===r.HALF_FLOAT&&(K=r.R16F),z===r.UNSIGNED_BYTE&&(K=r.R8)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.R8UI),z===r.UNSIGNED_SHORT&&(K=r.R16UI),z===r.UNSIGNED_INT&&(K=r.R32UI),z===r.BYTE&&(K=r.R8I),z===r.SHORT&&(K=r.R16I),z===r.INT&&(K=r.R32I)),M===r.RG&&(z===r.FLOAT&&(K=r.RG32F),z===r.HALF_FLOAT&&(K=r.RG16F),z===r.UNSIGNED_BYTE&&(K=r.RG8)),M===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RG8UI),z===r.UNSIGNED_SHORT&&(K=r.RG16UI),z===r.UNSIGNED_INT&&(K=r.RG32UI),z===r.BYTE&&(K=r.RG8I),z===r.SHORT&&(K=r.RG16I),z===r.INT&&(K=r.RG32I)),M===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGB8UI),z===r.UNSIGNED_SHORT&&(K=r.RGB16UI),z===r.UNSIGNED_INT&&(K=r.RGB32UI),z===r.BYTE&&(K=r.RGB8I),z===r.SHORT&&(K=r.RGB16I),z===r.INT&&(K=r.RGB32I)),M===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),z===r.UNSIGNED_INT&&(K=r.RGBA32UI),z===r.BYTE&&(K=r.RGBA8I),z===r.SHORT&&(K=r.RGBA16I),z===r.INT&&(K=r.RGBA32I)),M===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),M===r.RGBA){const we=ne?ms:ot.getTransfer($);z===r.FLOAT&&(K=r.RGBA32F),z===r.HALF_FLOAT&&(K=r.RGBA16F),z===r.UNSIGNED_BYTE&&(K=we===xt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(w,M){let z;return w?M===null||M===fi||M===Gi?z=r.DEPTH24_STENCIL8:M===fn?z=r.DEPTH32F_STENCIL8:M===_r&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===Gi?z=r.DEPTH_COMPONENT24:M===fn?z=r.DEPTH_COMPONENT32F:M===_r&&(z=r.DEPTH_COMPONENT16),z}function T(w,M){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function O(w){const M=w.target;M.removeEventListener("dispose",O),R(M),M.isVideoTexture&&u.delete(M)}function P(w){const M=w.target;M.removeEventListener("dispose",P),q(M)}function R(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,$=d.get(z);if($){const ne=$[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(w),Object.keys($).length===0&&d.delete(z)}n.remove(w)}function B(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const z=w.source,$=d.get(z);delete $[M.__cacheKey],a.memory.textures--}function q(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ne=0;ne<M.__webglFramebuffer[$].length;ne++)r.deleteFramebuffer(M.__webglFramebuffer[$][ne]);else r.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)r.deleteFramebuffer(M.__webglFramebuffer[$]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=w.textures;for(let $=0,ne=z.length;$<ne;$++){const K=n.get(z[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(w)}let x=0;function E(){x=0}function H(){const w=x;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),x+=1,w}function k(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function G(w,M){const z=n.get(w);if(w.isVideoTexture&&Pe(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(z,w,M);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function J(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){at(z,w,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function V(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){at(z,w,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function re(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){j(z,w,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}const Y={[Hi]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[ps]:r.MIRRORED_REPEAT},ve={[Gt]:r.NEAREST,[Lc]:r.NEAREST_MIPMAP_NEAREST,[hr]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[is]:r.LINEAR_MIPMAP_NEAREST,[Dn]:r.LINEAR_MIPMAP_LINEAR},ue={[xh]:r.NEVER,[bh]:r.ALWAYS,[vh]:r.LESS,[Gc]:r.LEQUAL,[yh]:r.EQUAL,[Eh]:r.GEQUAL,[Mh]:r.GREATER,[Sh]:r.NOTEQUAL};function Ae(w,M){if(M.type===fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===is||M.magFilter===hr||M.magFilter===Dn||M.minFilter===Qt||M.minFilter===is||M.minFilter===hr||M.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Y[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Y[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Y[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ve[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==hr&&M.minFilter!==Dn||M.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function He(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",O));const $=M.source;let ne=d.get($);ne===void 0&&(ne={},d.set($,ne));const K=k(M);if(K!==w.__cacheKey){ne[K]===void 0&&(ne[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[K].usedTimes++;const we=ne[w.__cacheKey];we!==void 0&&(ne[w.__cacheKey].usedTimes--,we.usedTimes===0&&B(M)),w.__cacheKey=K,w.__webglTexture=ne[K].texture}return z}function at(w,M,z){let $=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=r.TEXTURE_3D);const ne=He(w,M),K=M.source;t.bindTexture($,w.__webglTexture,r.TEXTURE0+z);const we=n.get(K);if(K.version!==we.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);const fe=ot.getPrimaries(ot.workingColorSpace),xe=M.colorSpace===$n?null:ot.getPrimaries(M.colorSpace),rt=M.colorSpace===$n||fe===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let se=y(M.image,!1,i.maxTextureSize);se=ct(M,se);const Se=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type);let Ue=A(M.internalFormat,Se,Fe,M.colorSpace,M.isVideoTexture);Ae($,M);let ye;const Ke=M.mipmaps,qe=M.isVideoTexture!==!0,ut=we.__version===void 0||ne===!0,N=K.dataReady,ge=T(M,se);if(M.isDepthTexture)Ue=S(M.format===Vi,M.type),ut&&(qe?t.texStorage2D(r.TEXTURE_2D,1,Ue,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ue,se.width,se.height,0,Se,Fe,null));else if(M.isDataTexture)if(Ke.length>0){qe&&ut&&t.texStorage2D(r.TEXTURE_2D,ge,Ue,Ke[0].width,Ke[0].height);for(let _=0,b=Ke.length;_<b;_++)ye=Ke[_],qe?N&&t.texSubImage2D(r.TEXTURE_2D,_,0,0,ye.width,ye.height,Se,Fe,ye.data):t.texImage2D(r.TEXTURE_2D,_,Ue,ye.width,ye.height,0,Se,Fe,ye.data);M.generateMipmaps=!1}else qe?(ut&&t.texStorage2D(r.TEXTURE_2D,ge,Ue,se.width,se.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,Se,Fe,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,se.width,se.height,0,Se,Fe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Ue,Ke[0].width,Ke[0].height,se.depth);for(let _=0,b=Ke.length;_<b;_++)if(ye=Ke[_],M.format!==sn)if(Se!==null)if(qe){if(N)if(M.layerUpdates.size>0){const W=Fl(ye.width,ye.height,M.format,M.type);for(const X of M.layerUpdates){const de=ye.data.subarray(X*W/ye.data.BYTES_PER_ELEMENT,(X+1)*W/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_,0,0,X,ye.width,ye.height,1,Se,de,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_,0,0,0,ye.width,ye.height,se.depth,Se,ye.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_,Ue,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_,0,0,0,ye.width,ye.height,se.depth,Se,Fe,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_,Ue,ye.width,ye.height,se.depth,0,Se,Fe,ye.data)}else{qe&&ut&&t.texStorage2D(r.TEXTURE_2D,ge,Ue,Ke[0].width,Ke[0].height);for(let _=0,b=Ke.length;_<b;_++)ye=Ke[_],M.format!==sn?Se!==null?qe?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,_,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,_,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?N&&t.texSubImage2D(r.TEXTURE_2D,_,0,0,ye.width,ye.height,Se,Fe,ye.data):t.texImage2D(r.TEXTURE_2D,_,Ue,ye.width,ye.height,0,Se,Fe,ye.data)}else if(M.isDataArrayTexture)if(qe){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Ue,se.width,se.height,se.depth),N)if(M.layerUpdates.size>0){const _=Fl(se.width,se.height,M.format,M.type);for(const b of M.layerUpdates){const W=se.data.subarray(b*_/se.data.BYTES_PER_ELEMENT,(b+1)*_/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,b,se.width,se.height,1,Se,Fe,W)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,Fe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,se.width,se.height,se.depth,0,Se,Fe,se.data);else if(M.isData3DTexture)qe?(ut&&t.texStorage3D(r.TEXTURE_3D,ge,Ue,se.width,se.height,se.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,Fe,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,se.width,se.height,se.depth,0,Se,Fe,se.data);else if(M.isFramebufferTexture){if(ut)if(qe)t.texStorage2D(r.TEXTURE_2D,ge,Ue,se.width,se.height);else{let _=se.width,b=se.height;for(let W=0;W<ge;W++)t.texImage2D(r.TEXTURE_2D,W,Ue,_,b,0,Se,Fe,null),_>>=1,b>>=1}}else if(Ke.length>0){if(qe&&ut){const _=ke(Ke[0]);t.texStorage2D(r.TEXTURE_2D,ge,Ue,_.width,_.height)}for(let _=0,b=Ke.length;_<b;_++)ye=Ke[_],qe?N&&t.texSubImage2D(r.TEXTURE_2D,_,0,0,Se,Fe,ye):t.texImage2D(r.TEXTURE_2D,_,Ue,Se,Fe,ye);M.generateMipmaps=!1}else if(qe){if(ut){const _=ke(se);t.texStorage2D(r.TEXTURE_2D,ge,Ue,_.width,_.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Fe,se)}else t.texImage2D(r.TEXTURE_2D,0,Ue,Se,Fe,se);p(M)&&m($),we.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function j(w,M,z){if(M.image.length!==6)return;const $=He(w,M),ne=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+z);const K=n.get(ne);if(ne.version!==K.__version||$===!0){t.activeTexture(r.TEXTURE0+z);const we=ot.getPrimaries(ot.workingColorSpace),fe=M.colorSpace===$n?null:ot.getPrimaries(M.colorSpace),xe=M.colorSpace===$n||we===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let b=0;b<6;b++)!rt&&!se?Se[b]=y(M.image[b],!0,i.maxCubemapSize):Se[b]=se?M.image[b].image:M.image[b],Se[b]=ct(M,Se[b]);const Fe=Se[0],Ue=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Ke=A(M.internalFormat,Ue,ye,M.colorSpace),qe=M.isVideoTexture!==!0,ut=K.__version===void 0||$===!0,N=ne.dataReady;let ge=T(M,Fe);Ae(r.TEXTURE_CUBE_MAP,M);let _;if(rt){qe&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ke,Fe.width,Fe.height);for(let b=0;b<6;b++){_=Se[b].mipmaps;for(let W=0;W<_.length;W++){const X=_[W];M.format!==sn?Ue!==null?qe?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W,0,0,X.width,X.height,Ue,X.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W,Ke,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W,0,0,X.width,X.height,Ue,ye,X.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W,Ke,X.width,X.height,0,Ue,ye,X.data)}}}else{if(_=M.mipmaps,qe&&ut){_.length>0&&ge++;const b=ke(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ke,b.width,b.height)}for(let b=0;b<6;b++)if(se){qe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Se[b].width,Se[b].height,Ue,ye,Se[b].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,Ke,Se[b].width,Se[b].height,0,Ue,ye,Se[b].data);for(let W=0;W<_.length;W++){const de=_[W].image[b].image;qe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W+1,0,0,de.width,de.height,Ue,ye,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W+1,Ke,de.width,de.height,0,Ue,ye,de.data)}}else{qe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Ue,ye,Se[b]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,Ke,Ue,ye,Se[b]);for(let W=0;W<_.length;W++){const X=_[W];qe?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W+1,0,0,Ue,ye,X.image[b]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+b,W+1,Ke,Ue,ye,X.image[b])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),K.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,z,$,ne,K){const we=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),xe=A(z.internalFormat,we,fe,z.colorSpace);if(!n.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>K),Se=Math.max(1,M.height>>K);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,xe,se,Se,M.depth,0,we,fe,null):t.texImage2D(ne,K,xe,se,Se,0,we,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),tt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,ne,n.get(z).__webglTexture,0,Ze(M)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,ne,n.get(z).__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(w,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const $=M.depthTexture,ne=$&&$.isDepthTexture?$.type:null,K=S(M.stencilBuffer,ne),we=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=Ze(M);tt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,K,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,K,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,K,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,w)}else{const $=M.textures;for(let ne=0;ne<$.length;ne++){const K=$[ne],we=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),xe=A(K.internalFormat,we,fe,K.colorSpace),rt=Ze(M);z&&tt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,xe,M.width,M.height):tt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,xe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,xe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,ne=Ze(M);if(M.depthTexture.format===Ui)tt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(M.depthTexture.format===Vi)tt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function We(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=$}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ee(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=r.createRenderbuffer(),te(M.__webglDepthbuffer[$],w,!1);else{const ne=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),te(M.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(w,M,z){const $=n.get(w);M!==void 0&&ae($.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&We(w)}function Ge(w){const M=w.texture,z=n.get(w),$=n.get(M);w.addEventListener("dispose",P);const ne=w.textures,K=w.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=M.version,a.memory.textures++),K){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)z.__webglFramebuffer[fe][xe]=r.createFramebuffer()}else z.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[fe]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(we)for(let fe=0,xe=ne.length;fe<xe;fe++){const rt=n.get(ne[fe]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&tt(w)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const xe=ne[fe];z.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const rt=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),Se=A(xe.internalFormat,rt,se,xe.colorSpace,w.isXRRenderTarget===!0),Fe=Ze(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Se,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),te(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ae(z.__webglFramebuffer[fe][xe],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ae(z.__webglFramebuffer[fe],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(M)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,xe=ne.length;fe<xe;fe++){const rt=ne[fe],se=n.get(rt);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Ae(r.TEXTURE_2D,rt),ae(z.__webglFramebuffer,w,rt,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),p(rt)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),Ae(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ae(z.__webglFramebuffer[xe],w,M,r.COLOR_ATTACHMENT0,fe,xe);else ae(z.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,fe,0);p(M)&&m(fe),t.unbindTexture()}w.depthBuffer&&We(w)}function st(w){const M=w.textures;for(let z=0,$=M.length;z<$;z++){const ne=M[z];if(p(ne)){const K=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=n.get(ne).__webglTexture;t.bindTexture(K,we),m(K),t.unbindTexture()}}}const Xe=[],L=[];function Mt(w){if(w.samples>0){if(tt(w)===!1){const M=w.textures,z=w.width,$=w.height;let ne=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(w),fe=M.length>1;if(fe)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const rt=n.get(M[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,z,$,0,0,z,$,ne,r.NEAREST),l===!0&&(Xe.length=0,L.length=0,Xe.push(r.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Xe.push(K),L.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const rt=n.get(M[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,rt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ze(w){return Math.min(i.maxSamples,w.samples)}function tt(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function ct(w,M){const z=w.colorSpace,$=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Lt&&z!==$n&&(ot.getTransfer(z)===xt?($!==sn||ne!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=J,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=Me,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=tt}function Xg(r,e){function t(n,i=$n){let s;const a=ot.getTransfer(i);if(n===On)return r.UNSIGNED_BYTE;if(n===_o)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return r.BYTE;if(n===Dc)return r.SHORT;if(n===_r)return r.UNSIGNED_SHORT;if(n===go)return r.INT;if(n===fi)return r.UNSIGNED_INT;if(n===fn)return r.FLOAT;if(n===Sr)return r.HALF_FLOAT;if(n===Uc)return r.ALPHA;if(n===Fc)return r.RGB;if(n===sn)return r.RGBA;if(n===Oc)return r.LUMINANCE;if(n===Bc)return r.LUMINANCE_ALPHA;if(n===Ui)return r.DEPTH_COMPONENT;if(n===Vi)return r.DEPTH_STENCIL;if(n===vo)return r.RED;if(n===yo)return r.RED_INTEGER;if(n===kc)return r.RG;if(n===Mo)return r.RG_INTEGER;if(n===So)return r.RGBA_INTEGER;if(n===rs||n===ss||n===as||n===os)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===La||n===Ia)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Na||n===Ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Da||n===Na)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ls||n===$a||n===Za)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ls)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===Ja||n===Qa||n===eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ls)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class qg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yg={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zg extends Ki{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const y=new $g,p=t.getContextAttributes();let m=null,A=null;const S=[],T=[],O=new et;let P=null;const R=new Ht;R.layers.enable(1),R.viewport=new lt;const B=new Ht;B.layers.enable(2),B.viewport=new lt;const q=[R,B],x=new qg;x.layers.enable(1),x.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=S[j];return ae===void 0&&(ae=new ra,S[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=S[j];return ae===void 0&&(ae=new ra,S[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=S[j];return ae===void 0&&(ae=new ra,S[j]=ae),ae.getHandSpace()};function k(j){const ae=T.indexOf(j.inputSource);if(ae===-1)return;const te=S[ae];te!==void 0&&(te.update(j.inputSource,j.frame,c||a),te.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",J);for(let j=0;j<S.length;j++){const ae=T[j];ae!==null&&(T[j]=null,S[j].disconnect(ae))}E=null,H=null,y.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,A=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new pi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,te=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?Vi:Ui,te=p.stencil?Gi:fi);const We={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(We),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new pi(d.textureWidth,d.textureHeight,{format:sn,type:On,depthTexture:new Jc(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(j){for(let ae=0;ae<j.removed.length;ae++){const te=j.removed[ae],ee=T.indexOf(te);ee>=0&&(T[ee]=null,S[ee].disconnect(te))}for(let ae=0;ae<j.added.length;ae++){const te=j.added[ae];let ee=T.indexOf(te);if(ee===-1){for(let Me=0;Me<S.length;Me++)if(Me>=T.length){T.push(te),ee=Me;break}else if(T[Me]===null){T[Me]=te,ee=Me;break}if(ee===-1)break}const We=S[ee];We&&We.connect(te)}}const V=new I,re=new I;function Y(j,ae,te){V.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(te.matrixWorld);const ee=V.distanceTo(re),We=ae.projectionMatrix.elements,Me=te.projectionMatrix.elements,Ge=We[14]/(We[10]-1),st=We[14]/(We[10]+1),Xe=(We[9]+1)/We[5],L=(We[9]-1)/We[5],Mt=(We[8]-1)/We[0],Ze=(Me[8]+1)/Me[0],tt=Ge*Mt,Pe=Ge*Ze,ct=ee/(-Mt+Ze),ke=ct*-Mt;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),We[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const w=Ge+ct,M=st+ct,z=tt-ke,$=Pe+(ee-ke),ne=Xe*st/M*w,K=L*st/M*w;j.projectionMatrix.makePerspective(z,$,ne,K,w,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,te=j.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(te=y.depthFar)),x.near=B.near=R.near=ae,x.far=B.far=R.far=te,(E!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,H=x.far);const ee=j.parent,We=x.cameras;ve(x,ee);for(let Me=0;Me<We.length;Me++)ve(We[Me],ee);We.length===2?Y(x,R,B):x.projectionMatrix.copy(R.projectionMatrix),ue(j,x,ee)};function ue(j,ae,te){te===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Wi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Ae=null;function He(j,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let ee=!1;te.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let Me=0;Me<te.length;Me++){const Ge=te[Me];let st=null;if(f!==null)st=f.getViewport(Ge);else{const L=h.getViewSubImage(d,Ge);st=L.viewport,Me===0&&(e.setRenderTargetTextures(A,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(A))}let Xe=q[Me];Xe===void 0&&(Xe=new Ht,Xe.layers.enable(Me),Xe.viewport=new lt,q[Me]=Xe),Xe.matrix.fromArray(Ge.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ge.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(st.x,st.y,st.width,st.height),Me===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ee===!0&&x.cameras.push(Xe)}const We=i.enabledFeatures;if(We&&We.includes("depth-sensing")){const Me=h.getDepthInformation(te[0]);Me&&Me.isValid&&Me.texture&&y.init(e,Me,i.renderState)}}for(let te=0;te<S.length;te++){const ee=T[te],We=S[te];ee!==null&&We!==void 0&&We.update(ee,ae,c||a)}Ae&&Ae(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const at=new Zc;at.setAnimationLoop(He),this.setAnimationLoop=function(j){Ae=j},this.dispose=function(){}}}const li=new _n,Jg=new Oe;function Qg(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kc(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,A,S,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,A,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const A=e.get(m),S=A.envMap,T=A.envMapRotation;S&&(p.envMap.value=S,li.copy(T),li.x*=-1,li.y*=-1,li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(li)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){const T=S.program;n.uniformBlockBinding(A,T)}function c(A,S){let T=i[A.id];T===void 0&&(g(A),T=u(A),i[A.id]=T,A.addEventListener("dispose",p));const O=S.program;n.updateUBOMapping(A,O);const P=e.render.frame;s[A.id]!==P&&(d(A),s[A.id]=P)}function u(A){const S=h();A.__bindingPointIndex=S;const T=r.createBuffer(),O=A.__size,P=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,O,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const S=i[A.id],T=A.uniforms,O=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let P=0,R=T.length;P<R;P++){const B=Array.isArray(T[P])?T[P]:[T[P]];for(let q=0,x=B.length;q<x;q++){const E=B[q];if(f(E,P,q,O)===!0){const H=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let J=0;J<k.length;J++){const V=k[J],re=y(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,H+G,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(A,S,T,O){const P=A.value,R=S+"_"+T;if(O[R]===void 0)return typeof P=="number"||typeof P=="boolean"?O[R]=P:O[R]=P.clone(),!0;{const B=O[R];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return O[R]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function g(A){const S=A.uniforms;let T=0;const O=16;for(let R=0,B=S.length;R<B;R++){const q=Array.isArray(S[R])?S[R]:[S[R]];for(let x=0,E=q.length;x<E;x++){const H=q[x],k=Array.isArray(H.value)?H.value:[H.value];for(let G=0,J=k.length;G<J;G++){const V=k[G],re=y(V),Y=T%O,ve=Y%re.boundary,ue=Y+ve;T+=ve,ue!==0&&O-ue<re.storage&&(T+=O-ue),H.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=re.storage}}}const P=T%O;return P>0&&(T+=O-P),A.__size=T,A.__cache={},this}function y(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){const S=A.target;S.removeEventListener("dispose",p);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const A in i)r.deleteBuffer(i[A]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class t_{constructor(e={}){const{canvas:t=Hh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=ti,this.toneMappingExposure=1;const S=this;let T=!1,O=0,P=0,R=null,B=-1,q=null;const x=new lt,E=new lt;let H=null;const k=new Be(0);let G=0,J=t.width,V=t.height,re=1,Y=null,ve=null;const ue=new lt(0,0,J,V),Ae=new lt(0,0,J,V);let He=!1;const at=new Ro;let j=!1,ae=!1;const te=new Oe,ee=new Oe,We=new I,Me=new lt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Xe(){return R===null?re:1}let L=n;function Mt(v,C){return t.getContext(v,C)}try{const v={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",b,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",X,!1),L===null){const C="webgl2";if(L=Mt(C,v),L===null)throw Mt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ze,tt,Pe,ct,ke,w,M,z,$,ne,K,we,fe,xe,rt,se,Se,Fe,Ue,ye,Ke,qe,ut,N;function ge(){Ze=new am(L),Ze.init(),qe=new Xg(L,Ze),tt=new em(L,Ze,e,qe),Pe=new Gg(L),tt.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ct=new cm(L),ke=new wg,w=new Wg(L,Ze,Pe,ke,tt,qe,ct),M=new nm(S),z=new sm(S),$=new md(L),ut=new Jp(L,$),ne=new om(L,$,ct,ut),K=new hm(L,ne,$,ct),Ue=new um(L,tt,w),se=new tm(ke),we=new Ag(S,M,z,Ze,tt,ut,se),fe=new Qg(S,ke),xe=new Cg,rt=new Ug(Ze),Fe=new Zp(S,M,z,Pe,K,d,l),Se=new zg(S,K,tt),N=new e_(L,ct,tt,Pe),ye=new Qp(L,Ze,ct),Ke=new lm(L,Ze,ct),ct.programs=we.programs,S.capabilities=tt,S.extensions=Ze,S.properties=ke,S.renderLists=xe,S.shadowMap=Se,S.state=Pe,S.info=ct}ge();const _=new Zg(S,L);this.xr=_,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Ze.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ze.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(v){v!==void 0&&(re=v,this.setSize(J,V,!1))},this.getSize=function(v){return v.set(J,V)},this.setSize=function(v,C,U=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=v,V=C,t.width=Math.floor(v*re),t.height=Math.floor(C*re),U===!0&&(t.style.width=v+"px",t.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(J*re,V*re).floor()},this.setDrawingBufferSize=function(v,C,U){J=v,V=C,re=U,t.width=Math.floor(v*U),t.height=Math.floor(C*U),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(x)},this.getViewport=function(v){return v.copy(ue)},this.setViewport=function(v,C,U,F){v.isVector4?ue.set(v.x,v.y,v.z,v.w):ue.set(v,C,U,F),Pe.viewport(x.copy(ue).multiplyScalar(re).round())},this.getScissor=function(v){return v.copy(Ae)},this.setScissor=function(v,C,U,F){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,C,U,F),Pe.scissor(E.copy(Ae).multiplyScalar(re).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(v){Pe.setScissorTest(He=v)},this.setOpaqueSort=function(v){Y=v},this.setTransparentSort=function(v){ve=v},this.getClearColor=function(v){return v.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(v=!0,C=!0,U=!0){let F=0;if(v){let D=!1;if(R!==null){const Z=R.texture.format;D=Z===So||Z===Mo||Z===yo}if(D){const Z=R.texture.type,ce=Z===On||Z===fi||Z===_r||Z===Gi||Z===_o||Z===xo,ie=Fe.getClearColor(),oe=Fe.getClearAlpha(),Ee=ie.r,De=ie.g,Ce=ie.b;ce?(f[0]=Ee,f[1]=De,f[2]=Ce,f[3]=oe,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ee,g[1]=De,g[2]=Ce,g[3]=oe,L.clearBufferiv(L.COLOR,0,g))}else F|=L.COLOR_BUFFER_BIT}C&&(F|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",b,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",X,!1),xe.dispose(),rt.dispose(),ke.dispose(),M.dispose(),z.dispose(),K.dispose(),ut.dispose(),N.dispose(),we.dispose(),_.dispose(),_.removeEventListener("sessionstart",Ve),_.removeEventListener("sessionend",Te),he.stop()};function b(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=ct.autoReset,C=Se.enabled,U=Se.autoUpdate,F=Se.needsUpdate,D=Se.type;ge(),ct.autoReset=v,Se.enabled=C,Se.autoUpdate=U,Se.needsUpdate=F,Se.type=D}function X(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function de(v){const C=v.target;C.removeEventListener("dispose",de),be(C)}function be(v){Q(v),ke.remove(v)}function Q(v){const C=ke.get(v).programs;C!==void 0&&(C.forEach(function(U){we.releaseProgram(U)}),v.isShaderMaterial&&we.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,U,F,D,Z){C===null&&(C=Ge);const ce=D.isMesh&&D.matrixWorld.determinant()<0,ie=bn(v,C,U,F,D);Pe.setMaterial(F,ce);let oe=U.index,Ee=1;if(F.wireframe===!0){if(oe=ne.getWireframeAttribute(U),oe===void 0)return;Ee=2}const De=U.drawRange,Ce=U.attributes.position;let ft=De.start*Ee,_t=(De.start+De.count)*Ee;Z!==null&&(ft=Math.max(ft,Z.start*Ee),_t=Math.min(_t,(Z.start+Z.count)*Ee)),oe!==null?(ft=Math.max(ft,0),_t=Math.min(_t,oe.count)):Ce!=null&&(ft=Math.max(ft,0),_t=Math.min(_t,Ce.count));const St=_t-ft;if(St<0||St===1/0)return;ut.setup(D,F,ie,U,oe);let jt,ht=ye;if(oe!==null&&(jt=$.get(oe),ht=Ke,ht.setIndex(jt)),D.isMesh)F.wireframe===!0?(Pe.setLineWidth(F.wireframeLinewidth*Xe()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(D.isLine){let Le=F.linewidth;Le===void 0&&(Le=1),Pe.setLineWidth(Le*Xe()),D.isLineSegments?ht.setMode(L.LINES):D.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else D.isPoints?ht.setMode(L.POINTS):D.isSprite&&ht.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ht.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ht.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Le=D._multiDrawStarts,Pt=D._multiDrawCounts,dt=D._multiDrawCount,an=oe?$.get(oe).bytesPerElement:1,mi=ke.get(F).currentProgram.getUniforms();for(let Kt=0;Kt<dt;Kt++)mi.setValue(L,"_gl_DrawID",Kt),ht.render(Le[Kt]/an,Pt[Kt])}else if(D.isInstancedMesh)ht.renderInstances(ft,St,D.count);else if(U.isInstancedBufferGeometry){const Le=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Pt=Math.min(U.instanceCount,Le);ht.renderInstances(ft,St,Pt)}else ht.render(ft,St)};function le(v,C,U){v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=qt,v.needsUpdate=!0,nt(v,C,U),v.side=Fn,v.needsUpdate=!0,nt(v,C,U),v.side=un):nt(v,C,U)}this.compile=function(v,C,U=null){U===null&&(U=v),p=rt.get(U),p.init(C),A.push(p),U.traverseVisible(function(D){D.isLight&&D.layers.test(C.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),v!==U&&v.traverseVisible(function(D){D.isLight&&D.layers.test(C.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const F=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Z=D.material;if(Z)if(Array.isArray(Z))for(let ce=0;ce<Z.length;ce++){const ie=Z[ce];le(ie,U,D),F.add(ie)}else le(Z,U,D),F.add(Z)}),A.pop(),p=null,F},this.compileAsync=function(v,C,U=null){const F=this.compile(v,C,U);return new Promise(D=>{function Z(){if(F.forEach(function(ce){ke.get(ce).currentProgram.isReady()&&F.delete(ce)}),F.size===0){D(v);return}setTimeout(Z,10)}Ze.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let pe=null;function ze(v){pe&&pe(v)}function Ve(){he.stop()}function Te(){he.start()}const he=new Zc;he.setAnimationLoop(ze),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(v){pe=v,_.setAnimationLoop(v),v===null?he.stop():he.start()},_.addEventListener("sessionstart",Ve),_.addEventListener("sessionend",Te),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(C),C=_.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,C,R),p=rt.get(v,A.length),p.init(C),A.push(p),ee.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),at.setFromProjectionMatrix(ee),ae=this.localClippingEnabled,j=se.init(this.clippingPlanes,ae),y=xe.get(v,m.length),y.init(),m.push(y),_.enabled===!0&&_.isPresenting===!0){const Z=S.xr.getDepthSensingMesh();Z!==null&&je(Z,C,-1/0,S.sortObjects)}je(v,C,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Y,ve),st=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,st&&Fe.addToRenderList(y,v),this.info.render.frame++,j===!0&&se.beginShadows();const U=p.state.shadowsArray;Se.render(U,v,C),j===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=y.opaque,D=y.transmissive;if(p.setupLights(),C.isArrayCamera){const Z=C.cameras;if(D.length>0)for(let ce=0,ie=Z.length;ce<ie;ce++){const oe=Z[ce];_e(F,D,v,oe)}st&&Fe.render(v);for(let ce=0,ie=Z.length;ce<ie;ce++){const oe=Z[ce];$e(y,v,oe,oe.viewport)}}else D.length>0&&_e(F,D,v,C),st&&Fe.render(v),$e(y,v,C);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(S,v,C),ut.resetDefaultState(),B=-1,q=null,A.pop(),A.length>0?(p=A[A.length-1],j===!0&&se.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function je(v,C,U,F){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)U=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||at.intersectsSprite(v)){F&&Me.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ee);const ce=K.update(v),ie=v.material;ie.visible&&y.push(v,ce,ie,U,Me.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||at.intersectsObject(v))){const ce=K.update(v),ie=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Me.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Me.copy(ce.boundingSphere.center)),Me.applyMatrix4(v.matrixWorld).applyMatrix4(ee)),Array.isArray(ie)){const oe=ce.groups;for(let Ee=0,De=oe.length;Ee<De;Ee++){const Ce=oe[Ee],ft=ie[Ce.materialIndex];ft&&ft.visible&&y.push(v,ce,ft,U,Me.z,Ce)}}else ie.visible&&y.push(v,ce,ie,U,Me.z,null)}}const Z=v.children;for(let ce=0,ie=Z.length;ce<ie;ce++)je(Z[ce],C,U,F)}function $e(v,C,U,F){const D=v.opaque,Z=v.transmissive,ce=v.transparent;p.setupLightsView(U),j===!0&&se.setGlobalState(S.clippingPlanes,U),F&&Pe.viewport(x.copy(F)),D.length>0&&Ye(D,C,U),Z.length>0&&Ye(Z,C,U),ce.length>0&&Ye(ce,C,U),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function _e(v,C,U,F){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new pi(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Sr:On,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Z=p.state.transmissionRenderTarget[F.id],ce=F.viewport||x;Z.setSize(ce.z,ce.w);const ie=S.getRenderTarget();S.setRenderTarget(Z),S.getClearColor(k),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),st&&Fe.render(U);const oe=S.toneMapping;S.toneMapping=ti;const Ee=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),j===!0&&se.setGlobalState(S.clippingPlanes,F),Ye(v,U,F),w.updateMultisampleRenderTarget(Z),w.updateRenderTargetMipmap(Z),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ce=0,ft=C.length;Ce<ft;Ce++){const _t=C[Ce],St=_t.object,jt=_t.geometry,ht=_t.material,Le=_t.group;if(ht.side===un&&St.layers.test(F.layers)){const Pt=ht.side;ht.side=qt,ht.needsUpdate=!0,gt(St,U,F,jt,ht,Le),ht.side=Pt,ht.needsUpdate=!0,De=!0}}De===!0&&(w.updateMultisampleRenderTarget(Z),w.updateRenderTargetMipmap(Z))}S.setRenderTarget(ie),S.setClearColor(k,G),Ee!==void 0&&(F.viewport=Ee),S.toneMapping=oe}function Ye(v,C,U){const F=C.isScene===!0?C.overrideMaterial:null;for(let D=0,Z=v.length;D<Z;D++){const ce=v[D],ie=ce.object,oe=ce.geometry,Ee=F===null?ce.material:F,De=ce.group;ie.layers.test(U.layers)&&gt(ie,C,U,oe,Ee,De)}}function gt(v,C,U,F,D,Z){v.onBeforeRender(S,C,U,F,D,Z),v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(S,C,U,F,v,Z),D.transparent===!0&&D.side===un&&D.forceSinglePass===!1?(D.side=qt,D.needsUpdate=!0,S.renderBufferDirect(U,C,F,D,v,Z),D.side=Fn,D.needsUpdate=!0,S.renderBufferDirect(U,C,F,D,v,Z),D.side=un):S.renderBufferDirect(U,C,F,D,v,Z),v.onAfterRender(S,C,U,F,D,Z)}function nt(v,C,U){C.isScene!==!0&&(C=Ge);const F=ke.get(v),D=p.state.lights,Z=p.state.shadowsArray,ce=D.state.version,ie=we.getParameters(v,D.state,Z,C,U),oe=we.getProgramCacheKey(ie);let Ee=F.programs;F.environment=v.isMeshStandardMaterial?C.environment:null,F.fog=C.fog,F.envMap=(v.isMeshStandardMaterial?z:M).get(v.envMap||F.environment),F.envMapRotation=F.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",de),Ee=new Map,F.programs=Ee);let De=Ee.get(oe);if(De!==void 0){if(F.currentProgram===De&&F.lightsStateVersion===ce)return en(v,ie),De}else ie.uniforms=we.getUniforms(v),v.onBeforeCompile(ie,S),De=we.acquireProgram(ie,oe),Ee.set(oe,De),F.uniforms=ie.uniforms;const Ce=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ce.clippingPlanes=se.uniform),en(v,ie),F.needsLights=Re(v),F.lightsStateVersion=ce,F.needsLights&&(Ce.ambientLightColor.value=D.state.ambient,Ce.lightProbe.value=D.state.probe,Ce.directionalLights.value=D.state.directional,Ce.directionalLightShadows.value=D.state.directionalShadow,Ce.spotLights.value=D.state.spot,Ce.spotLightShadows.value=D.state.spotShadow,Ce.rectAreaLights.value=D.state.rectArea,Ce.ltc_1.value=D.state.rectAreaLTC1,Ce.ltc_2.value=D.state.rectAreaLTC2,Ce.pointLights.value=D.state.point,Ce.pointLightShadows.value=D.state.pointShadow,Ce.hemisphereLights.value=D.state.hemi,Ce.directionalShadowMap.value=D.state.directionalShadowMap,Ce.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ce.spotShadowMap.value=D.state.spotShadowMap,Ce.spotLightMatrix.value=D.state.spotLightMatrix,Ce.spotLightMap.value=D.state.spotLightMap,Ce.pointShadowMap.value=D.state.pointShadowMap,Ce.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=De,F.uniformsList=null,De}function yt(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=us.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function en(v,C){const U=ke.get(v);U.outputColorSpace=C.outputColorSpace,U.batching=C.batching,U.batchingColor=C.batchingColor,U.instancing=C.instancing,U.instancingColor=C.instancingColor,U.instancingMorph=C.instancingMorph,U.skinning=C.skinning,U.morphTargets=C.morphTargets,U.morphNormals=C.morphNormals,U.morphColors=C.morphColors,U.morphTargetsCount=C.morphTargetsCount,U.numClippingPlanes=C.numClippingPlanes,U.numIntersection=C.numClipIntersection,U.vertexAlphas=C.vertexAlphas,U.vertexTangents=C.vertexTangents,U.toneMapping=C.toneMapping}function bn(v,C,U,F,D){C.isScene!==!0&&(C=Ge),w.resetTextureUnits();const Z=C.fog,ce=F.isMeshStandardMaterial?C.environment:null,ie=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Lt,oe=(F.isMeshStandardMaterial?z:M).get(F.envMap||ce),Ee=F.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,De=!!U.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ce=!!U.morphAttributes.position,ft=!!U.morphAttributes.normal,_t=!!U.morphAttributes.color;let St=ti;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=S.toneMapping);const jt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ht=jt!==void 0?jt.length:0,Le=ke.get(F),Pt=p.state.lights;if(j===!0&&(ae===!0||v!==q)){const tn=v===q&&F.id===B;se.setState(F,v,tn)}let dt=!1;F.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Pt.state.version||Le.outputColorSpace!==ie||D.isBatchedMesh&&Le.batching===!1||!D.isBatchedMesh&&Le.batching===!0||D.isBatchedMesh&&Le.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Le.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Le.instancing===!1||!D.isInstancedMesh&&Le.instancing===!0||D.isSkinnedMesh&&Le.skinning===!1||!D.isSkinnedMesh&&Le.skinning===!0||D.isInstancedMesh&&Le.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Le.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Le.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Le.instancingMorph===!1&&D.morphTexture!==null||Le.envMap!==oe||F.fog===!0&&Le.fog!==Z||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Ee||Le.vertexTangents!==De||Le.morphTargets!==Ce||Le.morphNormals!==ft||Le.morphColors!==_t||Le.toneMapping!==St||Le.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Le.__version=F.version);let an=Le.currentProgram;dt===!0&&(an=nt(F,C,D));let mi=!1,Kt=!1,As=!1;const Et=an.getUniforms(),kn=Le.uniforms;if(Pe.useProgram(an.program)&&(mi=!0,Kt=!0,As=!0),F.id!==B&&(B=F.id,Kt=!0),mi||q!==v){tt.reverseDepthBuffer?(te.copy(v.projectionMatrix),Vh(te),Wh(te),Et.setValue(L,"projectionMatrix",te)):Et.setValue(L,"projectionMatrix",v.projectionMatrix),Et.setValue(L,"viewMatrix",v.matrixWorldInverse);const tn=Et.map.cameraPosition;tn!==void 0&&tn.setValue(L,We.setFromMatrixPosition(v.matrixWorld)),tt.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Et.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),q!==v&&(q=v,Kt=!0,As=!0)}if(D.isSkinnedMesh){Et.setOptional(L,D,"bindMatrix"),Et.setOptional(L,D,"bindMatrixInverse");const tn=D.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Et.setValue(L,"boneTexture",tn.boneTexture,w))}D.isBatchedMesh&&(Et.setOptional(L,D,"batchingTexture"),Et.setValue(L,"batchingTexture",D._matricesTexture,w),Et.setOptional(L,D,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",D._indirectTexture,w),Et.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",D._colorsTexture,w));const ws=U.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&Ue.update(D,U,an),(Kt||Le.receiveShadow!==D.receiveShadow)&&(Le.receiveShadow=D.receiveShadow,Et.setValue(L,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(kn.envMap.value=oe,kn.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&C.environment!==null&&(kn.envMapIntensity.value=C.environmentIntensity),Kt&&(Et.setValue(L,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&wr(kn,As),Z&&F.fog===!0&&fe.refreshFogUniforms(kn,Z),fe.refreshMaterialUniforms(kn,F,re,V,p.state.transmissionRenderTarget[v.id]),us.upload(L,yt(Le),kn,w)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(us.upload(L,yt(Le),kn,w),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Et.setValue(L,"center",D.center),Et.setValue(L,"modelViewMatrix",D.modelViewMatrix),Et.setValue(L,"normalMatrix",D.normalMatrix),Et.setValue(L,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const tn=F.uniformsGroups;for(let Rs=0,yu=tn.length;Rs<yu;Rs++){const Oo=tn[Rs];N.update(Oo,an),N.bind(Oo,an)}}return an}function wr(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function Re(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,C,U){ke.get(v.texture).__webglTexture=C,ke.get(v.depthTexture).__webglTexture=U;const F=ke.get(v);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=U===void 0,F.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,C){const U=ke.get(v);U.__webglFramebuffer=C,U.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,U=0){R=v,O=C,P=U;let F=!0,D=null,Z=!1,ce=!1;if(v){const oe=ke.get(v);if(oe.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),F=!1;else if(oe.__webglFramebuffer===void 0)w.setupRenderTarget(v);else if(oe.__hasExternalTextures)w.rebindTextures(v,ke.get(v.texture).__webglTexture,ke.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ce=v.depthTexture;if(oe.__boundDepthTexture!==Ce){if(Ce!==null&&ke.has(Ce)&&(v.width!==Ce.image.width||v.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(v)}}const Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ce=!0);const De=ke.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[C])?D=De[C][U]:D=De[C],Z=!0):v.samples>0&&w.useMultisampledRTT(v)===!1?D=ke.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?D=De[U]:D=De,x.copy(v.viewport),E.copy(v.scissor),H=v.scissorTest}else x.copy(ue).multiplyScalar(re).floor(),E.copy(Ae).multiplyScalar(re).floor(),H=He;if(Pe.bindFramebuffer(L.FRAMEBUFFER,D)&&F&&Pe.drawBuffers(v,D),Pe.viewport(x),Pe.scissor(E),Pe.setScissorTest(H),Z){const oe=ke.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,oe.__webglTexture,U)}else if(ce){const oe=ke.get(v.texture),Ee=C||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.__webglTexture,U||0,Ee)}B=-1},this.readRenderTargetPixels=function(v,C,U,F,D,Z,ce){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=ke.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ie=ie[ce]),ie){Pe.bindFramebuffer(L.FRAMEBUFFER,ie);try{const oe=v.texture,Ee=oe.format,De=oe.type;if(!tt.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-F&&U>=0&&U<=v.height-D&&L.readPixels(C,U,F,D,qe.convert(Ee),qe.convert(De),Z)}finally{const oe=R!==null?ke.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(v,C,U,F,D,Z,ce){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=ke.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ie=ie[ce]),ie){const oe=v.texture,Ee=oe.format,De=oe.type;if(!tt.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=v.width-F&&U>=0&&U<=v.height-D){Pe.bindFramebuffer(L.FRAMEBUFFER,ie);const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,Z.byteLength,L.STREAM_READ),L.readPixels(C,U,F,D,qe.convert(Ee),qe.convert(De),0);const ft=R!==null?ke.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,ft);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gh(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Z),L.deleteBuffer(Ce),L.deleteSync(_t),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,C=null,U=0){v.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,v=arguments[1]);const F=Math.pow(2,-U),D=Math.floor(v.image.width*F),Z=Math.floor(v.image.height*F),ce=C!==null?C.x:0,ie=C!==null?C.y:0;w.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,U,0,0,ce,ie,D,Z),Pe.unbindTexture()},this.copyTextureToTexture=function(v,C,U=null,F=null,D=0){v.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,v=arguments[1],C=arguments[2],D=arguments[3]||0,U=null);let Z,ce,ie,oe,Ee,De;U!==null?(Z=U.max.x-U.min.x,ce=U.max.y-U.min.y,ie=U.min.x,oe=U.min.y):(Z=v.image.width,ce=v.image.height,ie=0,oe=0),F!==null?(Ee=F.x,De=F.y):(Ee=0,De=0);const Ce=qe.convert(C.format),ft=qe.convert(C.type);w.setTexture2D(C,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);const _t=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=L.getParameter(L.UNPACK_SKIP_PIXELS),ht=L.getParameter(L.UNPACK_SKIP_ROWS),Le=L.getParameter(L.UNPACK_SKIP_IMAGES),Pt=v.isCompressedTexture?v.mipmaps[D]:v.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,oe),v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,Ee,De,Z,ce,Ce,ft,Pt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,Ee,De,Pt.width,Pt.height,Ce,Pt.data):L.texSubImage2D(L.TEXTURE_2D,D,Ee,De,Z,ce,Ce,ft,Pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),D===0&&C.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(v,C,U=null,F=null,D=0){v.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,F=arguments[1]||null,v=arguments[2],C=arguments[3],D=arguments[4]||0);let Z,ce,ie,oe,Ee,De,Ce,ft,_t;const St=v.isCompressedTexture?v.mipmaps[D]:v.image;U!==null?(Z=U.max.x-U.min.x,ce=U.max.y-U.min.y,ie=U.max.z-U.min.z,oe=U.min.x,Ee=U.min.y,De=U.min.z):(Z=St.width,ce=St.height,ie=St.depth,oe=0,Ee=0,De=0),F!==null?(Ce=F.x,ft=F.y,_t=F.z):(Ce=0,ft=0,_t=0);const jt=qe.convert(C.format),ht=qe.convert(C.type);let Le;if(C.isData3DTexture)w.setTexture3D(C,0),Le=L.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)w.setTexture2DArray(C,0),Le=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);const Pt=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),mi=L.getParameter(L.UNPACK_SKIP_ROWS),Kt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De),v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Le,D,Ce,ft,_t,Z,ce,ie,jt,ht,St.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,D,Ce,ft,_t,Z,ce,ie,jt,St.data):L.texSubImage3D(Le,D,Ce,ft,_t,Z,ce,ie,jt,ht,St),L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,mi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kt),D===0&&C.generateMipmaps&&L.generateMipmap(Le),Pe.unbindTexture()},this.initRenderTarget=function(v){ke.get(v).__webglFramebuffer===void 0&&w.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?w.setTextureCube(v,0):v.isData3DTexture?w.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?w.setTexture2DArray(v,0):w.setTexture2D(v,0),Pe.unbindTexture()},this.resetState=function(){O=0,P=0,R=null,Pe.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bo?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ss?"display-p3":"srgb"}}class n_ extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class i_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=no,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new I;class Lo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ol=new I,Bl=new lt,kl=new lt,r_=new I,zl=new Oe,jr=new I,sa=new Mn,Hl=new Oe,aa=new Er;class s_ extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vo,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(i),e.ray.intersectsSphere(sa)!==!1&&(Hl.copy(i).invert(),aa.copy(e.ray).applyMatrix4(Hl),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bl.fromBufferAttribute(i.attributes.skinIndex,e),kl.fromBufferAttribute(i.attributes.skinWeight,e),Ol.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=kl.getComponent(s);if(a!==0){const o=Bl.getComponent(s);zl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(r_.copy(Ol).applyMatrix4(zl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class iu extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ru extends Tt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Gt,u=Gt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gl=new Oe,a_=new Oe;class Io{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:a_;Gl.multiplyMatrices(o,t[s]),Gl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Io(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ru(t,e,e,sn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new iu),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ro extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Li=new Oe,Vl=new Oe,Kr=[],Wl=new gn,o_=new Oe,sr=new Vt,ar=new Mn;class so extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,o_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Wl.copy(e.boundingBox).applyMatrix4(Li),this.boundingBox.union(Wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),ar.copy(e.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Li),Vl.multiplyMatrices(n,Li),sr.matrixWorld=Vl,sr.raycast(e,Kr);for(let a=0,o=Kr.length;a<o;a++){const l=Kr[a];l.instanceId=s,l.object=this,t.push(l)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ru(new Float32Array(i*this.count),i,this.count,vo,fn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class su extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vs=new I,ys=new I,Xl=new Oe,or=new Er,$r=new Mn,oa=new I,ql=new I;class Do extends vt{constructor(e=new Yt,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)vs.fromBufferAttribute(t,i-1),ys.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vs.distanceTo(ys);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;Xl.copy(i).invert(),or.copy(e.ray).applyMatrix4(Xl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){const m=u.getX(y),A=u.getX(y+1),S=Zr(this,e,or,l,m,A);S&&t.push(S)}if(this.isLineLoop){const y=u.getX(g-1),p=u.getX(f),m=Zr(this,e,or,l,y,p);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){const m=Zr(this,e,or,l,y,y+1);m&&t.push(m)}if(this.isLineLoop){const y=Zr(this,e,or,l,g-1,f);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zr(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(vs.fromBufferAttribute(a,i),ys.fromBufferAttribute(a,s),t.distanceSqToSegment(vs,ys,oa,ql)>n)return;oa.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(oa);if(!(l<e.near||l>e.far))return{distance:l,point:ql.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Yl=new I,jl=new I;class l_ extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Yl.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yl.distanceTo(jl);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class c_ extends Do{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class au extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kl=new Oe,ao=new Er,Jr=new Mn,Qr=new I;class u_ extends vt{constructor(e=new Yt,t=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;Kl.copy(i).invert(),ao.copy(e.ray).applyMatrix4(Kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){const p=c.getX(g);Qr.fromBufferAttribute(h,p),$l(Qr,p,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Qr.fromBufferAttribute(h,g),$l(Qr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $l(r,e,t,n,i,s,a){const o=ao.distanceSqToPoint(r);if(o<t){const l=new I;ao.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class _x extends Tt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends Yt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const y=[],p=n/2;let m=0;A(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function A(){const T=new I,O=new I;let P=0;const R=(t-e)/n;for(let B=0;B<=s;B++){const q=[],x=B/s,E=x*(t-e)+e;for(let H=0;H<=i;H++){const k=H/i,G=k*l+o,J=Math.sin(G),V=Math.cos(G);O.x=E*J,O.y=-x*n+p,O.z=E*V,h.push(O.x,O.y,O.z),T.set(J,R,V).normalize(),d.push(T.x,T.y,T.z),f.push(k,1-x),q.push(g++)}y.push(q)}for(let B=0;B<i;B++)for(let q=0;q<s;q++){const x=y[q][B],E=y[q+1][B],H=y[q+1][B+1],k=y[q][B+1];e>0&&(u.push(x,E,k),P+=3),t>0&&(u.push(E,H,k),P+=3)}c.addGroup(m,P,0),m+=P}function S(T){const O=g,P=new et,R=new I;let B=0;const q=T===!0?e:t,x=T===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const E=g;for(let H=0;H<=i;H++){const G=H/i*l+o,J=Math.cos(G),V=Math.sin(G);R.x=q*V,R.y=p*x,R.z=q*J,h.push(R.x,R.y,R.z),d.push(0,x,0),P.x=J*.5+.5,P.y=V*.5*x+.5,f.push(P.x,P.y),g++}for(let H=0;H<i;H++){const k=O+H,G=E+H;T===!0?u.push(G,G+1,k):u.push(G+1,G,k),B+=3}c.addGroup(m,B,T===!0?1:2),m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ou extends Mr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ou(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lu extends Yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){const A=[],S=m/n;let T=0;m===0&&a===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){const P=O/t;h.x=-e*Math.cos(i+P*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(i+P*s)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(P+T,1-S),A.push(c++)}u.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){const S=u[m][A+1],T=u[m][A],O=u[m+1][A],P=u[m+1][A+1];(m!==0||a>0)&&f.push(S,T,P),(m!==n-1||l<Math.PI)&&f.push(T,O,P)}this.setIndex(f),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cu extends Yt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const y=g/i*s,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(y),h.y=(e+t*Math.cos(p))*Math.sin(y),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const y=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,A=(i+1)*f+g;a.push(y,p,A),a.push(p,m,A)}this.setIndex(a),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ts extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sn extends Ts{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xx extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function es(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function h_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function d_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function uu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f_ extends Tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wo,endingEnd:Wo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xo:s=e,o=2*t-n;break;case qo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xo:a=e,l=2*n-t;break;case qo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,A=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,S=(-1-f)*p+(1.5+f)*y+.5*g,T=f*p-f*y;for(let O=0;O!==o;++O)s[O]=m*a[u+O]+A*a[c+O]+S*a[l+O]+T*a[h+O];return s}}class p_ extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class m_ extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new m_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new p_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new f_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Ps:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Ps}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&h_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ps,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const y=t[h+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=vr;class Zi extends En{constructor(e,t,n){super(e,t,n)}}Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=xr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class hu extends En{}hu.prototype.ValueTypeName="color";class qi extends En{}qi.prototype.ValueTypeName="number";class g_ extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Bn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Yi extends En{InterpolantFactoryMethodLinear(e){return new g_(this.times,this.values,this.getValueSize(),e)}}Yi.prototype.ValueTypeName="quaternion";Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends En{constructor(e,t,n){super(e,t,n)}}Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=xr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends En{}ji.prototype.ValueTypeName="vector";class __{constructor(e="",t=-1,n=[],i=fh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(v_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(En.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=d_(l);l=Zl(l,1,u),c=Zl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,y){if(f.length!==0){const p=[],m=[];uu(f,p,m,g),p.length!==0&&y.push(new h(d,p,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(const y in f){const p=[],m=[];for(let A=0;A!==d[g].morphTargets.length;++A){const S=d[g];p.push(S.time),m.push(S.morphTarget===y?1:0)}i.push(new qi(".morphTargetInfluence["+y+"]",p,m))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(ji,f+".position",d,"pos",i),n(Yi,f+".quaternion",d,"rot",i),n(ji,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function x_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return hu;case"quaternion":return Yi;case"bool":case"boolean":return Zi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function v_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=x_(r.type);if(r.times===void 0){const t=[],n=[];uu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Qn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class y_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const M_=new y_;class Qi{constructor(e){this.manager=e!==void 0?e:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class S_ extends Error{constructor(e,t){super(e),this.response=t}}class du extends Qi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:i});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let y=0;const p=new ReadableStream({start(m){A();function A(){h.read().then(({done:S,value:T})=>{if(S)m.close();else{y+=T.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let P=0,R=u.length;P<R;P++){const B=u[P];B.onProgress&&B.onProgress(O)}m.enqueue(T),A()}},S=>{m.error(S)})}}});return new Response(p)}else throw new S_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Qn.add(e,c);const u=Pn[e];delete Pn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class E_ extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Qn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=yr("img");function l(){u(),Qn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class b_ extends Qi{constructor(e){super(e)}load(e,t,n,i){const s=new Tt,a=new E_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ar extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class T_ extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const la=new Oe,Jl=new I,Ql=new I;class No{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class A_ extends No{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Wi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class w_ extends Ar{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new A_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ec=new Oe,lr=new I,ca=new I;class R_ extends No{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),ca.copy(n.position),ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ca),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class fu extends Ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new R_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class C_ extends No{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hs extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new C_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class P_ extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class L_ extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Qn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Qn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Qn.add(e,l),s.manager.itemStart(e)}}class I_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return performance.now()}const Uo="\\[\\]\\.:\\/",D_=new RegExp("["+Uo+"]","g"),Fo="[^"+Uo+"]",N_="[^"+Uo.replace("\\.","")+"]",U_=/((?:WC+[\/:])*)/.source.replace("WC",Fo),F_=/(WCOD+)?/.source.replace("WCOD",N_),O_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fo),B_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fo),k_=new RegExp("^"+U_+F_+O_+B_+"$"),z_=["material","materials","bones","map"];class H_{constructor(e,t,n){const i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class mt{constructor(e,t,n){this.path=t,this.parsedPath=n||mt.parseTrackName(t),this.node=mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new mt.Composite(e,t,n):new mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D_,"")}static parseTrackName(e){const t=k_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);z_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}mt.Composite=H_;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const nc=new Oe;class G_{constructor(e,t,n=0,i=1/0){this.ray=new Er(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nc),this}intersectObject(e,t=!0,n=[]){return oo(e,this,n,t),n.sort(ic),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)oo(e[i],this,n,t);return n.sort(ic),n}}function ic(r,e){return r.distance-e.distance}function oo(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)oo(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);function vx(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Yt;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=r[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=rc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][d]);const g=rc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function rc(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Ot(a,t,n);let l=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const y=u.getComponent(d,g);o.setComponent(d+h,g,y)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function sc(r,e){if(e===ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===to||e===Hc){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===to)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class V_ extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new j_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new l0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=mr.extractUrlBase(e);a=mr.resolveURL(c,this.path)}else a=mr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new du(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pu){try{a[it.KHR_BINARY_GLTF]=new c0(e)}catch(h){i&&i(h);return}s=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new S0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:a[h]=new q_;break;case it.KHR_DRACO_MESH_COMPRESSION:a[h]=new u0(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[h]=new h0;break;case it.KHR_MESH_QUANTIZATION:a[h]=new d0;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function W_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X_{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Lt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fu(u),c.distance=h;break;case"spot":c=new w_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,In(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class q_{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,n){const i=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Lt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ut))}return Promise.all(i)}}class Y_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(o,o)}return Promise.all(s)}}class K_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Lt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Q_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],Lt),Promise.all(s)}}class e0{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class t0{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],Lt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class r0{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class s0{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class a0{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class o0{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class l0{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==rn.TRIANGLES&&c.mode!==rn.TRIANGLE_STRIP&&c.mode!==rn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const y=new Oe,p=new I,m=new Bn,A=new I(1,1,1),S=new so(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&A.fromBufferAttribute(l.SCALE,T),S.setMatrixAt(T,y.compose(p,m,A));for(const T in l)if(T==="_COLOR_0"){const O=l[T];S.instanceColor=new ro(O.array,O.itemSize,O.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);vt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const pu="glTF",cr=12,ac={JSON:1313821514,BIN:5130562};class c0{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cr,s=new DataView(e,cr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ac.JSON){const c=new Uint8Array(e,cr+a,o);this.content=n.decode(c)}else if(l===ac.BIN){const c=cr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=lo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=lo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Oi[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const y=f.attributes[g],p=l[g];p!==void 0&&(y.normalized=p)}h(f)},o,c,Lt,d)})})}}class h0{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class d0{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class mu extends Tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,y=g-c,p=-2*f+3*d,m=f-d,A=1-p,S=m-d+h;for(let T=0;T!==o;T++){const O=a[y+T+o],P=a[y+T+l]*u,R=a[g+T+o],B=a[g+T]*u;s[T]=A*O+S*P+p*R+m*B}return s}}const f0=new Bn;class p0 extends mu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return f0.fromArray(s).normalize().toArray(s),s}}const rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Oi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},oc={9728:Gt,9729:Qt,9984:Lc,9985:is,9986:hr,9987:Dn},lc={33071:Zn,33648:ps,10497:Hi},ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m0={CUBICSPLINE:void 0,LINEAR:vr,STEP:xr},ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ts({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),r.DefaultMaterial}function ci(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _0(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function x0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v0(r){let e;const t=r.extensions&&r.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+da(t.attributes):e=r.indices+":"+da(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+da(r.targets[n]);return e}function da(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function co(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function y0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const M0=new Oe;class S0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new b_(this.options.manager):this.textureLoader=new L_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new du(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ci(s,o,i),In(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(mr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ua[i.type],o=Oi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ot(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ua[i.type],c=Oi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,p;if(f&&f!==h){const m=Math.floor(d/f),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let S=t.cache.get(A);S||(y=new c(o,m*f,i.count*f/u),S=new i_(y,f/u),t.cache.add(A,S)),p=new Lo(S,l,d%f/u,g)}else o===null?y=new c(i.count*l):y=new c(o,d,i.count*l),p=new Ot(y,l,g);if(i.sparse!==void 0){const m=ua.SCALAR,A=Oi[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,O=new A(a[1],S,i.sparse.count*m),P=new c(a[2],T,i.sparse.count*l);o!==null&&(p=new Ot(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,B=O.length;R<B;R++){const q=O[R];if(p.setX(q,P[R*l]),l>=2&&p.setY(q,P[R*l+1]),l>=3&&p.setZ(q,P[R*l+2]),l>=4&&p.setW(q,P[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=oc[d.magFilter]||Qt,u.minFilter=oc[d.minFilter]||Dn,u.wrapS=lc[d.wrapS]||Hi,u.wrapT=lc[d.wrapT]||Hi,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const p=new Tt(y);p.needsUpdate=!0,d(p)}),t.load(mr.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),In(h,a),h.userData.mimeType=a.mimeType||y0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new au,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new su,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ts}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const h=i[it.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Lt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=un);const u=s.alphaMode||ha.OPAQUE;if(u===ha.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ha.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Un&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new et(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Un&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Un){const h=s.emissiveFactor;o.emissive=new Be().setRGB(h[0],h[1],h[2],Lt)}return s.emissiveTexture!==void 0&&a!==Un&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ut)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),In(h,s),t.associations.set(h,{materials:e}),s.extensions&&ci(i,h,s),h})}createUniqueName(e){const t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return cc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=v0(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=cc(new Yt,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?g0(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const y=u[f],p=a[f];let m;const A=c[f];if(p.mode===rn.TRIANGLES||p.mode===rn.TRIANGLE_STRIP||p.mode===rn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new s_(y,A):new Vt(y,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===rn.TRIANGLE_STRIP?m.geometry=sc(m.geometry,Hc):p.mode===rn.TRIANGLE_FAN&&(m.geometry=sc(m.geometry,to));else if(p.mode===rn.LINES)m=new l_(y,A);else if(p.mode===rn.LINE_STRIP)m=new Do(y,A);else if(p.mode===rn.LINE_LOOP)m=new c_(y,A);else if(p.mode===rn.POINTS)m=new u_(y,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&x0(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),In(m,s),p.extensions&&ci(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&ci(i,h[0],s),h[0];const d=new Jn;s.extensions&&ci(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Yn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Oe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Io(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],y=f.target,p=y.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,A=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],y=h[3],p=h[4],m=[];for(let A=0,S=d.length;A<S;A++){const T=d[A],O=f[A],P=g[A],R=y[A],B=p[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const q=n._createAnimationTracks(T,O,P,R,B);if(q)for(let x=0;x<q.length;x++)m.push(q[x])}return new __(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,M0)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new iu:c.length>1?u=new Jn:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),In(u,s),s.extensions&&ci(n,u,s),s.matrix!==void 0){const h=new Oe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Jn;n.name&&(s.name=i.createUniqueName(n.name)),In(s,n),n.extensions&&ci(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof mn||d instanceof Tt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];qn[s.path]===qn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(qn[s.path]){case qn.weights:c=qi;break;case qn.rotation:c=Yi;break;case qn.position:case qn.scale:c=ji;break;default:switch(n.itemSize){case 1:c=qi;break;case 2:case 3:default:c=ji;break}break}const u=i.interpolation!==void 0?m0[i.interpolation]:vr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+qn[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=co(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Yi?p0:mu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function E0(r,e,t){const n=e.attributes,i=new gn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const u=co(Oi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=co(Oi[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Mn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function cc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=lo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ot.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),In(r,e),E0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_0(r,e.targets,t):r})}const Kn=[68.804684,40.288027],fa=161.6066,uo=new I(-90,0,48),b0=new Set(["VISUAL-690f88a34fe29b13"]),uc=["walls","roof","site","structure","interior","equipment","mep"],gu={walls:"exterior",roof:"exterior",site:"exterior",structure:"structure",interior:"interior",equipment:"equipment",mep:"mep"},T0=new Set(["ROOF-01","VISUAL-2c361ed33dda3c35"]),A0=new Set(["VISUAL-6f45fad219d26c11"]),yx=["overview","equipment","systems","inspection"],pa={overview:{walls:!0,roof:!0,site:!0,structure:!0,interior:!0,equipment:!0,mep:!0},equipment:{walls:!1,roof:!1,site:!1,structure:!0,interior:!0,equipment:!0,mep:!1},systems:{walls:!1,roof:!1,site:!1,structure:!0,interior:!1,equipment:!1,mep:!0},inspection:{walls:!0,roof:!0,site:!0,structure:!0,interior:!0,equipment:!0,mep:!0}},w0={walls:!0,roof:!0,site:!1,structure:!0,interior:!0,equipment:!0,mep:!1},R0={"SYS-E-POWER":{colour:"#7fd4ff",realSpeed:24,spacing:3.2,metaphor:"pulse"},"SYS-E-LIGHT":{colour:"#ffe08a",realSpeed:21,spacing:3.6,metaphor:"pulse"},"SYS-I-DATA":{colour:"#b9a4ff",realSpeed:28,spacing:3.4,metaphor:"pulse"},"SYS-E-EARTH":{colour:"#d8c08c",realSpeed:11,spacing:9,metaphor:"pulse"},"SYS-G-GAS-OPTION":{colour:"#f0b53f",realSpeed:6,spacing:3.6,metaphor:"drift"},"SYS-T-AIR":{colour:"#59ccc2",realSpeed:8.5,spacing:3.4,metaphor:"drift"},"SYS-M-VENT":{colour:"#8fc4e8",realSpeed:7.5,spacing:4.4,metaphor:"drift"},"SYS-M-EXHAUST":{colour:"#9fb0bd",realSpeed:12,spacing:4.4,metaphor:"drift"},"SYS-F-SMOKE":{colour:"#b2a3c0",realSpeed:15,spacing:5.4,metaphor:"drift"},"SYS-P-WATER":{colour:"#4b9fe6",realSpeed:1.35,spacing:3.4,metaphor:"parcel"},"SYS-P-HOT-WATER":{colour:"#e3688f",realSpeed:1.05,spacing:3.4,metaphor:"parcel"},"SYS-M-HEAT":{colour:"#e8823f",realSpeed:1.1,spacing:3.8,metaphor:"parcel"},"SYS-F-FIRE":{colour:"#e05670",realSpeed:2.8,spacing:4.2,metaphor:"parcel"},"SYS-P-DRAIN":{colour:"#a37f4e",realSpeed:.9,spacing:4.8,metaphor:"parcel"},"SYS-P-RAIN":{colour:"#5bb391",realSpeed:1.2,spacing:4.8,metaphor:"parcel"}},C0={colour:"#7f9bb5",realSpeed:2,spacing:5,metaphor:"parcel"};function P0(r){return .9*Math.pow(r,.45)}const Mx=[.25,.5,1,2],L0=1.2;function I0(r){return Math.min(r*.5/L0,.24)}const Nt={exposure:1.06,ambientIntensity:.28,sunIntensity:2.9,sunColour:16773597,skyColour:11455464,groundColour:4866869,hemisphereIntensity:.55,roofFillIntensity:.5,roofFillColour:14477813,interiorFillIntensity:.85,interiorFillColour:15397368,shadowMapSize:1536,shadowRadius:210,shadowBias:-8e-4,shadowNormalBias:.05},D0={walkBackground:790552},Wt={eyeHeight:1.68,spawn:{x:70,z:-15},walkSpeed:4.2,runSpeed:9.5,jumpSpeed:4.4,gravity:11.5,bounds:{minX:-98,maxX:98,minZ:-56,maxZ:56}},N0={min:-95,max:95,default:0},U0=120,F0=900;function O0(r){return Math.min(r.external_width_m??.1,r.external_height_m??.1)}class B0{constructor(e){Ie(this,"root");Ie(this,"tracks",[]);Ie(this,"core",null);Ie(this,"halo",null);Ie(this,"light",null);Ie(this,"clock",0);Ie(this,"playing",!1);Ie(this,"rate",1);Ie(this,"dummy",new vt);Ie(this,"tint",new Be);this.root=e}isPlaying(){return this.playing}getRate(){return this.rate}setRate(e){this.rate=e}setPlaying(e){this.playing=e,e||this.setVisible(!1)}reset(){this.clock=0}build(e,t){this.dispose(),this.tracks=[];for(const s of e){if(t&&s.system_id!==t)continue;const a=R0[s.system_id]??C0,o=new I(s.start_m[0],s.start_m[2],-s.start_m[1]).add(uo),l=new I(s.end_m[0],s.end_m[2],-s.end_m[1]).add(uo),c=l.clone().sub(o);if(c.lengthSq()===0)continue;const u=new Bn().setFromUnitVectors(new I(0,0,1),c.normalize()),h=new Be(a.colour),d=I0(O0(s)),f=Math.max(1,Math.round(s.length_m/a.spacing));for(let g=0;g<f&&this.tracks.length<F0;g++)this.tracks.push({from:o,to:l,length:s.length_m,offset:g/f*s.length_m,speed:P0(a.realSpeed),radius:d,streak:Math.min(a.spacing*.45,s.length_m*.5),along:u,colour:h,metaphor:a.metaphor})}if(this.tracks.length===0)return;const n=new Mr(1,1,1,8,1,!0);n.rotateX(Math.PI/2),this.core=new so(n,new Un({toneMapped:!1,transparent:!0,opacity:.95,depthWrite:!1,side:un}),this.tracks.length),this.core.frustumCulled=!1,this.core.renderOrder=6,this.root.add(this.core);const i=new Mr(1,1,1,8,1,!0);i.rotateX(Math.PI/2),this.halo=new so(i,new Un({toneMapped:!1,transparent:!0,opacity:.2,depthWrite:!1,blending:_a}),this.tracks.length),this.halo.frustumCulled=!1,this.halo.renderOrder=5,this.root.add(this.halo),this.light=new fu(16777215,0,12,2),this.light.color.copy(this.tracks[0].colour),this.root.add(this.light)}step(e){if(!this.core||this.tracks.length===0)return;if(!this.playing){this.setVisible(!1);return}this.clock+=e*this.rate;const t=this.clock;for(let i=0;i<this.tracks.length;i++){const s=this.tracks[i];if(s.length<=0)continue;const o=(s.offset+s.speed*t)%s.length/s.length;this.dummy.position.lerpVectors(s.from,s.to,o),this.dummy.quaternion.copy(s.along);let l=1,c=1,u=1;if(s.metaphor==="pulse"){const h=Math.pow(1-o,.5);l=.7+.5*h,c=1.15,u=.55+.75*h}else s.metaphor==="drift"?(l=.85+.2*Math.sin(t*1.6+s.offset),c=.9,u=.9):(l=1,c=.85,u=.95);this.dummy.scale.set(s.radius*l,s.radius*l,s.streak*c),this.dummy.updateMatrix(),this.core.setMatrixAt(i,this.dummy.matrix),this.tint.copy(s.colour).multiplyScalar(u),this.core.setColorAt(i,this.tint),this.halo&&(this.dummy.scale.set(s.radius*l*2.6,s.radius*l*2.6,s.streak*c*1.15),this.dummy.updateMatrix(),this.halo.setMatrixAt(i,this.dummy.matrix),this.halo.setColorAt(i,s.colour))}const n=this.tracks[0];if(this.light&&n.length>0){const i=(n.offset+n.speed*t)%n.length;this.light.position.lerpVectors(n.from,n.to,i/n.length),this.light.intensity=6}this.setVisible(!0),this.core.instanceMatrix.needsUpdate=!0,this.core.instanceColor&&(this.core.instanceColor.needsUpdate=!0),this.halo&&(this.halo.instanceMatrix.needsUpdate=!0,this.halo.instanceColor&&(this.halo.instanceColor.needsUpdate=!0))}needsFrame(){return this.playing&&this.tracks.length>0}dispose(){[this.core,this.halo].forEach(e=>{e&&(e.removeFromParent(),e.geometry.dispose(),e.material.dispose())}),this.core=null,this.halo=null,this.light&&(this.light.removeFromParent(),this.light=null)}setVisible(e){this.core&&(this.core.visible=e),this.halo&&(this.halo.visible=e),this.light&&(this.light.intensity=e?this.light.intensity:0)}}const _u=r=>new URL("./"+r,document.baseURI).href,k0=new I(0,1,0);function z0(r,e){return r!=="exterior"?r:T0.has(e)?"roof":A0.has(e)?"site":"walls"}function H0(r){return[...new Set(r.map(e=>gu[e]))]}class G0{constructor(e){Ie(this,"id","bim-3d");Ie(this,"type","custom");Ie(this,"renderingMode","3d");Ie(this,"map",null);Ie(this,"renderer",null);Ie(this,"scene",new n_);Ie(this,"camera",new wo);Ie(this,"pickCamera",new Ht(72,1,.1,1200));Ie(this,"root",new Jn);Ie(this,"raycaster",new G_);Ie(this,"originMatrix",new Oe);Ie(this,"meshes",new Map);Ie(this,"opts");Ie(this,"visible",{...pa.overview});Ie(this,"selectedId",null);Ie(this,"hoveredId",null);Ie(this,"ghostCache",new Map);Ie(this,"walking",!1);Ie(this,"walkPos",new I);Ie(this,"walkYaw",0);Ie(this,"walkPitch",0);Ie(this,"keys",{});Ie(this,"velocity",new I);Ie(this,"moveDir",new I);Ie(this,"verticalSpeed",0);Ie(this,"grounded",!0);Ie(this,"clock",new I_);Ie(this,"accent",new Ts({color:"#2f8fd8",emissive:"#1b6aa8",emissiveIntensity:.5,metalness:.2,roughness:.35}));Ie(this,"loader",null);Ie(this,"loaded",new Set);Ie(this,"loading",new Set);Ie(this,"systemOf",new Map);Ie(this,"activeSystem",null);Ie(this,"xray",!1);Ie(this,"sun",null);Ie(this,"flow",new B0(this.root));Ie(this,"sectionPlane",new jn(new I(-1,0,0),N0.default));Ie(this,"sectionOn",!1);Ie(this,"focused",!1);Ie(this,"mode","overview");Ie(this,"network",[]);Ie(this,"lastPickAt",0);this.opts=e}onAdd(e,t){this.map=e,window.__bimLayer=this,this.renderer=new t_({canvas:e.getCanvas(),context:t,antialias:!0}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Ut,this.renderer.toneMapping=Cc,this.renderer.toneMappingExposure=Nt.exposure,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rc,this.scene.add(new P_(16777215,Nt.ambientIntensity)),this.scene.add(new T_(Nt.skyColour,Nt.groundColour,Nt.hemisphereIntensity));const n=new hs(Nt.sunColour,Nt.sunIntensity);n.position.set(70,150,60),n.target.position.set(0,0,0),n.castShadow=!0,n.shadow.mapSize.set(Nt.shadowMapSize,Nt.shadowMapSize);const i=Nt.shadowRadius/2;n.shadow.camera.left=-i,n.shadow.camera.right=i,n.shadow.camera.top=i,n.shadow.camera.bottom=-i,n.shadow.camera.near=1,n.shadow.camera.far=420,n.shadow.bias=Nt.shadowBias,n.shadow.normalBias=Nt.shadowNormalBias,n.shadow.autoUpdate=!1,n.shadow.needsUpdate=!0,this.sun=n,this.root.add(n),this.root.add(n.target);const s=new hs(Nt.roofFillColour,Nt.roofFillIntensity);s.position.set(-40,90,-70),this.root.add(s);const a=new hs(Nt.interiorFillColour,Nt.interiorFillIntensity);a.position.set(0,-40,0),a.target.position.set(0,20,0),this.root.add(a),this.root.add(a.target),this.scene.add(this.root);const o=vn.MercatorCoordinate.fromLngLat({lng:Kn[0],lat:Kn[1]},0),l=o.meterInMercatorCoordinateUnits();this.originMatrix=new Oe().makeTranslation(o.x,o.y,o.z??0).scale(new I(l,-l,l)).multiply(new Oe().makeRotationX(Math.PI/2)).multiply(new Oe().makeRotationY(Yn.degToRad(-fa))),this.loader=new V_,this.loadModules(uc.filter(c=>this.visible[c]))}loadModules(e){const t=this.map,n=this.loader;if(!t||!n)return;const i=H0(e);let s=i.filter(a=>!this.loaded.has(a)&&!this.loading.has(a)).length;if(s===0){this.opts.onReady();return}i.forEach(a=>{this.loaded.has(a)||this.loading.has(a)||(this.loading.add(a),n.load(_u(`bim/assets/${a}.glb`),o=>{this.loading.delete(a),this.loaded.add(a),o.scene.position.copy(uo);const l=[];o.scene.traverse(c=>{var f,g;if(!(c instanceof Vt))return;let u=c;for(;u&&!((f=u.userData)!=null&&f.bim_id);)u=u.parent;const h=(g=u==null?void 0:u.userData)==null?void 0:g.bim_id;if(!h)return;if(b0.has(h)){l.push(u??c);return}c.castShadow=a!=="mep",c.receiveShadow=!0;const d=z0(a,h);this.meshes.set(h,{mesh:c,module:d,original:c.material}),c.visible=this.visible[d]}),new Set(l).forEach(c=>{c.removeFromParent(),c.traverse(u=>{u instanceof Vt&&u.geometry.dispose()})}),this.root.add(o.scene),this.sun&&(this.sun.shadow.needsUpdate=!0),--s===0&&this.opts.onReady(),t.triggerRepaint()},void 0,()=>{this.loading.delete(a),--s===0&&this.opts.onReady()}))})}onRemove(){this.flow.dispose(),this.meshes.forEach(e=>e.mesh.geometry.dispose()),this.meshes.clear(),this.ghostCache.forEach(e=>Array.isArray(e)?e.forEach(t=>t.dispose()):e.dispose()),this.ghostCache.clear(),this.accent.dispose(),this.renderer=null}render(e,t){var s;if(!this.renderer||!this.map)return;const n=t;this.stepWalk();const i=Array.isArray(n)?n:Array.from(((s=n==null?void 0:n.defaultProjectionData)==null?void 0:s.mainMatrix)??[]);if(!(i.length<16)){if(this.walking){const a=this.map.getCanvas().clientWidth/Math.max(this.map.getCanvas().clientHeight,1),o=this.pickCamera;o.aspect=a,o.position.copy(this.walkPos),o.rotation.order="YXZ",o.rotation.set(this.walkPitch,this.walkYaw,0),o.updateProjectionMatrix(),o.updateMatrixWorld(),this.camera.projectionMatrix=o.projectionMatrix.clone().multiply(o.matrixWorldInverse),this.maybeCrosshairPick()}else this.camera.projectionMatrix=new Oe().fromArray(Array.from(i)).multiply(this.originMatrix);this.renderer.resetState(),this.walking?(this.renderer.setClearColor(D0.walkBackground,1),this.renderer.clear(!0,!0,!1)):this.renderer.clearDepth(),this.renderer.render(this.scene,this.camera),this.needsAnotherFrame()&&this.map.triggerRepaint()}}needsAnotherFrame(){return!!(this.walking||this.flow.needsFrame())}setNetwork(e){this.systemOf.clear(),e.forEach(t=>this.systemOf.set(t.id,t.system_id)),this.network=e,this.applyVisibility()}setPlaying(e){var t;e&&this.network.length>0&&this.flow.build(this.network,this.activeSystem),this.flow.setPlaying(e),(t=this.map)==null||t.triggerRepaint()}isPlaying(){return this.flow.isPlaying()}setPlaybackRate(e){this.flow.setRate(e)}getPlaybackRate(){return this.flow.getRate()}resetPlayback(){var e;this.flow.reset(),(e=this.map)==null||e.triggerRepaint()}isWalking(){return this.walking}startWalk(){this.map&&(this.walking=!0,this.walkPos.set(Wt.spawn.x,Wt.eyeHeight,Wt.spawn.z),this.walkYaw=Math.atan2(110,-0),this.walkPitch=0,this.velocity.set(0,0,0),this.verticalSpeed=0,this.grounded=!0,this.keys={},Object.assign(this.visible,w0),this.loadModules(["interior","equipment","structure"]),this.applyVisibility(),this.applyMaterials(),this.clock.start(),this.map.triggerRepaint())}stopWalk(){var e,t,n;this.walking=!1,this.keys={},Object.assign(this.visible,pa[this.mode]),this.applyVisibility(),this.applyMaterials(),(t=(e=this.opts).onWalkEnd)==null||t.call(e),(n=this.map)==null||n.triggerRepaint()}setKey(e,t){this.keys[e]=t}look(e,t){this.walkYaw-=e*.0024,this.walkPitch=Yn.clamp(this.walkPitch-t*.0024,-1.2,1.2)}setSection(e){var t;this.sectionOn=e,this.renderer&&(this.renderer.clippingPlanes=e?[this.sectionPlane]:[]),(t=this.map)==null||t.triggerRepaint()}isSectioned(){return this.sectionOn}setSectionAt(e){var t;this.sectionPlane.constant=e,(t=this.map)==null||t.triggerRepaint()}getSectionAt(){return this.sectionPlane.constant}applyVisibility(){var e;this.meshes.forEach((t,n)=>{if(t.module!=="mep"){t.mesh.visible=this.visible[t.module];return}const i=this.systemOf.get(n);t.mesh.visible=this.visible.mep&&(!this.activeSystem||i===this.activeSystem),t.mesh.renderOrder=this.activeSystem&&i===this.activeSystem?4:0}),(e=this.map)==null||e.triggerRepaint()}setViewMode(e){this.mode=e,Object.assign(this.visible,pa[e]),this.xray=e==="systems"||e==="overview",e!=="systems"&&(this.activeSystem=null);const t=uc.filter(n=>this.visible[n]);return this.loadModules(t),this.applyVisibility(),this.applyMaterials(),this.getModules()}getViewMode(){return this.mode}setModule(e,t){this.visible[e]=t,t&&!this.loaded.has(gu[e])&&this.loadModules([e]),e==="mep"&&!t&&(this.activeSystem=null),this.applyVisibility(),this.applyMaterials()}getModules(){return{...this.visible}}setActiveSystem(e){this.activeSystem=e,e&&(this.visible.mep=!0,this.loadModules(["mep"]),this.xray=!0),this.flow.isPlaying()&&this.flow.build(this.network,this.activeSystem),this.applyVisibility(),this.applyMaterials()}getActiveSystem(){return this.activeSystem}setXray(e){this.xray=e,this.applyMaterials()}isXray(){return this.xray}setFocus(e){this.focused=e}hasFocus(){return this.focused}stepWalk(){const e=Math.min(this.clock.getDelta(),.08);if(this.walking){const t=this.keys,n=(t.KeyW?1:0)-(t.KeyS?1:0),i=(t.KeyD?1:0)-(t.KeyA?1:0),s=t.ShiftLeft||t.ShiftRight?Wt.runSpeed:Wt.walkSpeed;this.moveDir.set(i,0,-n),this.moveDir.lengthSq()>0&&this.moveDir.normalize().applyAxisAngle(k0,this.walkYaw);const a=1-Math.exp(-10*e);this.velocity.x+=(this.moveDir.x*s-this.velocity.x)*a,this.velocity.z+=(this.moveDir.z*s-this.velocity.z)*a,this.walkPos.x=Yn.clamp(this.walkPos.x+this.velocity.x*e,Wt.bounds.minX,Wt.bounds.maxX),this.walkPos.z=Yn.clamp(this.walkPos.z+this.velocity.z*e,Wt.bounds.minZ,Wt.bounds.maxZ),t.Space&&this.grounded&&(this.verticalSpeed=Wt.jumpSpeed,this.grounded=!1),this.grounded?this.walkPos.y=Wt.eyeHeight:(this.verticalSpeed-=Wt.gravity*e,this.walkPos.y+=this.verticalSpeed*e,this.walkPos.y<=Wt.eyeHeight&&(this.walkPos.y=Wt.eyeHeight,this.verticalSpeed=0,this.grounded=!0))}this.flow.step(e)}maybeCrosshairPick(){const e=performance.now();e-this.lastPickAt<U0||(this.lastPickAt=e,this.crosshairPick())}crosshairPick(){var i,s,a,o;const e=[];this.meshes.forEach(l=>l.mesh.visible&&e.push(l.mesh)),this.raycaster.setFromCamera(new et(0,0),this.pickCamera),this.raycaster.far=40;const t=this.raycaster.intersectObjects(e,!1)[0];let n=null;if(t){let l=t.object;for(;l&&!((i=l.userData)!=null&&i.bim_id);)l=l.parent;const c=(s=l==null?void 0:l.userData)==null?void 0:s.bim_id;c&&(n={bimId:c,label:c,point:{x:0,y:0}})}(o=(a=this.opts).onProximity)==null||o.call(a,{doorId:null,lookingAt:n})}pickAt(e,t){var f,g,y;if(!this.map||this.meshes.size===0)return null;if(this.walking)return this.pickFromCrosshair();const n=this.map.getCanvas(),i=new Oe().copy(this.camera.projectionMatrix).invert(),s=e/n.clientWidth*2-1,a=-(t/n.clientHeight)*2+1,o=new I(s,a,-1).applyMatrix4(i),l=new I(s,a,1).applyMatrix4(i);this.raycaster.set(o,l.sub(o).normalize()),this.raycaster.far=1/0;const c=[];this.meshes.forEach(p=>p.mesh.visible&&c.push(p.mesh));const u=this.raycaster.intersectObjects(c,!1).find(p=>!this.sectionOn||this.sectionPlane.distanceToPoint(p.point)>=0);if(!u)return null;let h=u.object;for(;h&&!((f=h.userData)!=null&&f.bim_id);)h=h.parent;const d=(g=h==null?void 0:h.userData)==null?void 0:g.bim_id;return d?{bimId:d,label:((y=h==null?void 0:h.userData)==null?void 0:y.object_key)??d,point:{x:e,y:t}}:null}pickFromCrosshair(){var s,a;const e=[];this.meshes.forEach(o=>o.mesh.visible&&e.push(o.mesh)),this.raycaster.setFromCamera(new et(0,0),this.pickCamera),this.raycaster.far=40;const t=this.raycaster.intersectObjects(e,!1)[0];if(!t)return null;let n=t.object;for(;n&&!((s=n.userData)!=null&&s.bim_id);)n=n.parent;const i=(a=n==null?void 0:n.userData)==null?void 0:a.bim_id;return i?(this.setSelected(i),{bimId:i,label:i,point:{x:0,y:0}}):null}listParts(){const e=[];return this.meshes.forEach((t,n)=>e.push({id:n,module:t.module})),e.sort((t,n)=>t.id.localeCompare(n.id))}partCentre(e){const t=this.meshes.get(e);if(!t)return null;const n=new gn().setFromObject(t.mesh),i=n.getCenter(new I),s=Math.max(n.getSize(new I).length()/2,1.5),a=Yn.degToRad(fa),o=i.x*Math.cos(a)- -i.z*Math.sin(a),l=i.x*Math.sin(a)+-i.z*Math.cos(a),c=Kn[1],u=Kn[0]+o/(111320*Math.cos(Yn.degToRad(c))),h=c+l/110540;return{lngLat:[u,h],radius:s}}framePlan(){this.map&&(this.visible.roof=!1,this.visible.walls=!0,this.visible.structure=!0,this.applyVisibility(),this.map.flyTo({center:Kn,zoom:17.4,pitch:0,bearing:-fa,duration:1400,essential:!0}))}frameOverview(){this.map&&this.map.flyTo({center:Kn,zoom:16.6,pitch:62,bearing:-22,duration:1400,essential:!0})}flyToPart(e){const t=this.partCentre(e);if(!t||!this.map)return;const n=t.radius>40?17.4:t.radius>12?18.6:19.6;this.map.flyTo({center:t.lngLat,zoom:n,pitch:66,duration:1400,essential:!0})}lookAtPart(e){var l;const t=this.meshes.get(e);if(!t||!this.walking)return;const n=new gn().setFromObject(t.mesh),i=n.getCenter(new I),s=Math.max(n.getSize(new I).length()/2,1.2),a=new I(1,0,1).normalize().multiplyScalar(s*2.4+3);this.walkPos.set(i.x+a.x,Math.max(i.y,1.68),i.z+a.z);const o=i.clone().sub(this.walkPos);this.walkYaw=Math.atan2(-o.x,-o.z),this.walkPitch=Yn.clamp(Math.atan2(o.y,Math.hypot(o.x,o.z)),-1.2,1.2),(l=this.map)==null||l.triggerRepaint()}setSelected(e){this.selectedId=e,this.applyMaterials()}setHovered(e){this.hoveredId!==e&&(this.hoveredId=e,this.applyMaterials())}ghostOf(e,t){const n=this.ghostCache.get(e);if(n)return n;const i=a=>{const o=a.clone();return o.transparent=!0,o.opacity=.16,o.depthWrite=!1,o},s=Array.isArray(t)?t.map(i):i(t);return this.ghostCache.set(e,s),s}applyMaterials(){var t;const e=this.activeSystem!==null;this.meshes.forEach((n,i)=>{const s=i===this.selectedId,a=i===this.hoveredId&&!s,o=n.module==="walls"||n.module==="roof"||n.module==="structure",l=n.module==="mep"&&this.systemOf.get(i)===this.activeSystem;let c=n.original;s||a?c=this.accent:e?c=l?n.original:this.ghostOf(i,n.original):this.xray&&o?c=this.ghostOf(i,n.original):this.selectedId&&(c=this.ghostOf(i,n.original)),n.mesh.material!==c&&(n.mesh.material=c),n.mesh.renderOrder=s?10:0}),(t=this.map)==null||t.triggerRepaint()}}function V0(r){const e=document.createElement("div"),t=Tc(e),n=Du[r];Ac.flushSync(()=>t.render(fs.jsx(n,{color:"#ffffff",size:15,strokeWidth:2.4})));const i=e.innerHTML.replace("<svg ",'<svg x="6.5" y="6.5" ');return t.unmount(),`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 28 28"><circle cx="14" cy="14" r="12" fill="${fo[r]}" stroke="#ffffff" stroke-width="2"/>${i}</svg>`}let hc=null;function dc(){return hc??(hc=Promise.all(Iu.map(r=>new Promise((e,t)=>{const n=new Image(56,56);n.onload=()=>e([r,n]),n.onerror=t,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(V0(r))}`})))),hc}const W0=["rail_station","rail_border","road_border","airport"],xu={rail_station:{icon:Bo,color:Xt.rail},rail_border:{icon:Bo,color:Xt.rail},road_border:{icon:Ru,color:Xt.truck},airport:{icon:wu,color:Xt.air}};function X0(r){const e=document.createElement("div"),t=Tc(e),{icon:n,color:i}=xu[r];Ac.flushSync(()=>t.render(fs.jsx(n,{color:"#ffffff",size:14,strokeWidth:2.4})));const s=e.innerHTML.replace("<svg ",'<svg x="7" y="7" ');return t.unmount(),`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 28 28">${r==="rail_border"||r==="road_border"?`<circle cx="14" cy="14" r="13" fill="none" stroke="${i}" stroke-width="1.4"/>`:""}<circle cx="14" cy="14" r="10.6" fill="${i}" stroke="#ffffff" stroke-width="2"/>${s}</svg>`}let fc=null;function q0(){return fc??(fc=Promise.all(W0.map(r=>new Promise((e,t)=>{const n=new Image(56,56);n.onload=()=>e([r,n]),n.onerror=t,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(X0(r))}`})))),fc}const Y0=["lgm-rail-casing","lgm-rail","lgm-rail-ties","lgm-near-casing","lgm-near-line","lgm-station-dots","lgm-station-icons","lgm-hub-icons","lgm-station-labels","lgm-hub-labels","lgm-near-ring","lgm-near-tags"],pc=["interpolate",["linear"],["zoom"],5,9,10,14],j0=["eng-zone-fill","eng-zone-line","eng-sub-area-fill","eng-sub-area-line","eng-lv","eng-hv-casing","eng-hv","eng-towers","eng-tp","eng-sub","eng-sub-labels"],zt={hv110:"#b45309",hv35:"#f59e0b",lv:"#eab308",tp:"#92400e",tower:"#78350f",zone:"#e5484d"},K0="#3f4552",ts=["case",[">=",["coalesce",["get","kv"],35],110],zt.hv110,zt.hv35],$0=13698,mc=["!=",["get","id"],$0];function ns(r){const e=Tu[r];return["match",["get","status"],"occupied",e.occupied,"free",e.free,"auction",e.auction,"cancelled",e.cancelled,"sold",e.sold,"leased",e.leased,e.reserved]}const Z0=["match",["get","infra_type"],...Object.entries(fo).flat(),"#898781"];function Jt(r){let e=1/0,t=1/0,n=-1/0,i=-1/0;const s=a=>{if(Array.isArray(a)&&typeof a[0]=="number"){const[o,l]=a;e=Math.min(e,o),n=Math.max(n,o),t=Math.min(t,l),i=Math.max(i,l)}else Array.isArray(a)&&a.forEach(s)};return r.forEach(a=>a.geometry&&"coordinates"in a.geometry&&s(a.geometry.coordinates)),Number.isFinite(e)?[[e,t],[n,i]]:null}function gc(r){const e=document.createElement("div");e.className="sez-bubble-marker";const t=document.createElement("div");t.className="sez-bubble";const n=Math.round(Math.min(1,Math.max(0,r.occupiedShare))*100),i=Math.round(Math.min(1-n/100,Math.max(0,r.freeShare))*100);t.style.setProperty("--s",`${r.size}px`),t.style.setProperty("--occ",`${n}%`),t.style.setProperty("--free",`${n+i}%`),t.style.setProperty("--pin-delay",`${r.delay??0}ms`);const s=document.createElement("div");s.className="sez-bubble__core";const a=document.createElement("b");a.textContent=String(r.count),s.append(a),t.append(s);const o=document.createElement("div");o.className="sez-bubble__label";const l=document.createElement("span");l.textContent=r.name;const c=document.createElement("small");return c.textContent=r.sub,o.append(l,c),e.append(t,o),e}const _c=r=>Math.round(Math.min(60,Math.max(34,14+Math.sqrt(r)*1.1))),J0={SEZ:"#8b85ff",SIZ:"#f08cb4"},Q0=r=>J0[String(r)]??"#5aa0f0";function ex(r,e="territory-pin"){const t=document.createElement("div");t.className=`${e} sez-pin${r.count?" sez-pin--cluster":""}`,t.style.setProperty("--pin-accent",r.accent),t.style.setProperty("--pin-delay",`${r.delay??0}ms`);const n=document.createElement("div");n.className="sez-pin__card";const i=document.createElement("div");i.className="sez-pin__body";const s=document.createElement("div");s.className="sez-pin__title",s.textContent=r.title;const a=document.createElement("div");if(a.className="sez-pin__sub",a.textContent=r.sub,i.append(s,a),r.occupied!=null){const c=document.createElement("div");c.className="sez-pin__row";const u=document.createElement("span");u.className="sez-pin__bar";const h=document.createElement("i");if(h.style.width=`${Math.round(Math.min(1,Math.max(0,r.occupied))*100)}%`,u.append(h),c.append(u),r.free){const d=document.createElement("span");d.className="sez-pin__free",d.textContent=r.free,c.append(d)}i.append(c)}if(n.append(i),r.count){const c=document.createElement("span");c.className="sez-pin__count",c.textContent=String(r.count),n.append(c)}const o=document.createElement("span");o.className="sez-pin__tail";const l=document.createElement("span");return l.className="sez-pin__dot",t.append(n,o,l),t}const gr={type:"FeatureCollection",features:[]};function xc(r){let e=0;for(let t=0,n=r.length-1;t<r.length;n=t++)e+=(r[n][0]-r[t][0])*(r[n][1]+r[t][1]);return e/2}const ur=r=>{const e=r.getCenter();return`${r.getZoom().toFixed(3)}/${e.lng.toFixed(4)}/${e.lat.toFixed(4)}/${r.getBearing().toFixed(1)}/${r.getPitch().toFixed(1)}`},ho=r=>(r==null?void 0:r.country)??null;function vc(r,e){const t=e==null?ho(r):r==null?void 0:r.features.find(u=>{var h;return Number((h=u.properties)==null?void 0:h.id)===e}),n=t==null?void 0:t.geometry;if(!n||n.type!=="Polygon"&&n.type!=="MultiPolygon")return gr;const i=n.type==="Polygon"?[n.coordinates]:n.coordinates,s=[[-180,-85],[-180,85],[180,85],[180,-85],[-180,-85]],a=Math.sign(xc(s)),o=(u,h)=>Math.sign(xc(u))===h?u:[...u].reverse(),l=i.map(u=>o(u[0],-a)),c=i.flatMap(u=>u.slice(1)).map(u=>[o(u,a)]);return{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[s,...l],...c]}}]}}const tx=(r,e)=>String((e==="uz"?r.name_uz:e==="en"?r.name_en:null)??r.name).replace(/ область$| viloyati$| Region$/,"").replace(/^Республика |^Republic of | Respublikasi$/,"").replace(/^город (.+)$/,"г. $1").replace(/ shahri$/," sh.").replace(/ City$/,""),nx=[[/o[‘’'`ʻ]/gi,"у"],[/g[‘’'`ʻ]/gi,"г"],[/sh/gi,"ш"],[/ch/gi,"ч"],[/yo/gi,"ё"],[/yu/gi,"ю"],[/ya/gi,"я"],[/ye/gi,"е"],[/\be/gi,"э"],[/j/gi,"дж"],[/[‘’'`ʻʼ]/g,""]],ix={a:"а",b:"б",d:"д",e:"е",f:"ф",g:"г",h:"х",i:"и",k:"к",l:"л",m:"м",n:"н",o:"о",p:"п",q:"к",r:"р",s:"с",t:"т",u:"у",v:"в",x:"х",y:"й",z:"з"};function yc(r){return nx.reduce((t,[n,i])=>t.replace(n,i),r.toLowerCase()).replace(/[a-z]/g,t=>ix[t]??t).replace(/(^|[\s-])(\S)/g,(t,n,i)=>n+i.toUpperCase())}function rx(r,e){const t=String(r.name_uz??"").trim(),n=/ shahri$/.test(t),i=t.replace(/ (tumani|shahri)$/,"");return e==="uz"?n?`${i} sh.`:i:e==="en"?n?`${i} City`:i:r.name?String(r.name).replace(/ район$/,"").replace(/^город /,"г. "):n?`г. ${yc(i)}`:yc(i)}function Mc(r,e){return r?{...r,features:r.features.map(t=>{var n;return((n=t.properties)==null?void 0:n.kind)==="label"?{...t,properties:{...t.properties,caption:rx(t.properties,e)}}:t})}:gr}const Sc=r=>{const e=["==",["get","region_id"],r??-1];return["interpolate",["linear"],["zoom"],6,["case",e,.55,0],7.5,["case",e,.6,.3],9,["case",e,.7,.5]]},Ii="#38d9ff",ma="#0284c7",sx=7.4,ds=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Ec(r,e,t){if(ds())return e(1),t==null||t(),()=>{};const n=performance.now();let i=0;const s=a=>{const o=Math.min(1,(a-n)/r);e(1-Math.pow(1-o,3)),o<1?i=requestAnimationFrame(s):t==null||t()};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)}const ga=[[0,4,3],[.5,4,2.5],[1,4,2],[1.5,4,1.5],[2,4,1],[2.5,4,.5],[3,4,0],[0,.5,3,3.5],[0,1,3,3],[0,1.5,3,2.5],[0,2,3,2],[0,2.5,3,1.5],[0,3,3,1],[0,3.5,3,.5]],vu=30,ax=["literal",vu],bc=14.5,ox=["match",["get","status"],"occupied",0,"free",.3,"auction",.45,.6];function lx(){const r=document.createElement("div");return r.className="pointer-events-none relative h-5 w-5",r.innerHTML=`
    <span class="absolute inset-0 animate-ping rounded-full bg-[#4f46e5]/50"></span>
    <span class="absolute inset-[5px] rounded-full border-2 border-white bg-[#4f46e5] shadow"></span>`,r}function Sx({regions:r,districts:e,selectedRegionId:t=null,onSelectRegion:n,regionPins:i=!0,onViewChange:s,territories:a,lots:o,infrastructure:l,selectedLotId:c=null,selectedTerritoryId:u=null,highlightIds:h=null,hoverTerritoryId:d=null,hoverLotId:f=null,onSelectLot:g,onBimHover:y,onBimPick:p,onBimProximity:m,onBimWalk:A,onBimFocus:S,onBimLayer:T,bimWalk:O=!1,bim:P=!1,bimFocus:R=!1,routesOverlay:B=!1,logistics:q,energy:x,onSelectTerritory:E,basemap:H="satellite",layers:k={infra:!0,borders:!0,labels:!0},is3d:G=!1,focus:J={kind:"region"},focusNonce:V=0,padding:re={top:40,right:40,bottom:40,left:40},intro:Y=!1,className:ve}){const{theme:ue,t:Ae,lang:He,district:at,site:j}=Eu(),ae=Ne.useRef(null),te=Ne.useRef(null),[ee,We]=Ne.useState(!1),Me=Ne.useRef({onSelectLot:g,onSelectTerritory:E,onSelectRegion:n,onViewChange:s,onBimHover:y,onBimPick:p,onBimProximity:m,onBimWalk:A,onBimFocus:S,onBimLayer:T}),Ge=Ne.useRef(null),st=Ne.useRef(null);Me.current={onSelectLot:g,onSelectTerritory:E,onSelectRegion:n,onViewChange:s,onBimHover:y,onBimPick:p,onBimProximity:m,onBimWalk:A,onBimFocus:S,onBimLayer:T};const Xe=Ne.useRef({t:Ae,lang:He});Xe.current={t:Ae,lang:He};const L=Ne.useRef(new Map);L.current=new Map(a.features.map(_=>{var b,W,X;return[Number((b=_.properties)==null?void 0:b.id),j(Number((W=_.properties)==null?void 0:W.id),String(((X=_.properties)==null?void 0:X.district)??""))]}));const Mt=Ne.useRef([]),Ze=Ne.useRef(null),tt=Ne.useRef(re);tt.current=re;const Pe=Ne.useRef(null),ct=Ne.useRef(new Map),ke=Ne.useRef(0),w=Ne.useRef(0),M=Ne.useRef(null),[z,$]=Ne.useState(!1),ne=Ne.useRef({infrastructure:l,lots:o});ne.current={infrastructure:l,lots:o};const K=Ne.useRef(!1),we=Ne.useRef(t);we.current=t;const fe=Ne.useRef(h);fe.current=h;const xe=_=>{const b=["case",["boolean",["feature-state","hover"],!1],.88,.62],W=fe.current?["case",["in",["get","id"],["literal",fe.current]],b,.1]:b,X=ke.current,de=["min",1,["max",0,["-",X*1.6,ox]]];_.setPaintProperty("lots-fill","fill-opacity",X>=1?W:["*",de,W]),_.setPaintProperty("lots-line","line-opacity",["interpolate",["linear"],["zoom"],10,.3*X,13,.9*X])};Ne.useEffect(()=>{if(!ae.current)return;const _=t==null&&(r!=null&&r.features.length)?Jt(r.features):Jt(a.features),b=new vn.Map({container:ae.current,style:Nu,center:Y?[64.5,41.3]:[68.7,40.6],zoom:Y?5:8.5,attributionControl:{compact:!0},dragRotate:!0,maxPitch:70});te.current=b;let W=!1,X=0,de=()=>{};const be=[];b.on("load",async()=>{var bn,wr;const le=await dc().catch(()=>[]);if(W)return;le.forEach(([Re,v])=>b.addImage(`infra-${Re}`,v,{pixelRatio:2}));const pe=Re=>b.addLayer(Re,"label-border");if(b.addSource("territories",{type:"geojson",data:a,promoteId:"id"}),b.addSource("lots",{type:"geojson",data:o,promoteId:"id"}),b.addSource("infra",{type:"geojson",data:l??{type:"FeatureCollection",features:[]},promoteId:"id"}),b.addSource("regions",{type:"geojson",data:r??gr,promoteId:"id"}),b.addSource("region-mask",{type:"geojson",data:vc(r,t)}),b.addSource("country",{type:"geojson",data:ho(r)??gr}),b.addSource("districts",{type:"geojson",data:Mc(e,Xe.current.lang)}),pe({id:"region-mask",type:"fill",source:"region-mask",paint:{"fill-color":"#05060a","fill-opacity":.5}}),pe({id:"region-fill",type:"fill",source:"regions",paint:{"fill-color":"#ffffff","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.1,0]}}),pe({id:"region-casing",type:"line",source:"regions",layout:{"line-join":"round"},paint:{"line-color":"#05060a","line-width":["interpolate",["linear"],["zoom"],5,4,10,6],"line-opacity":.45,"line-blur":1.5}}),pe({id:"region-glow",type:"line",source:"regions",filter:["==",["get","id"],-1],layout:{"line-join":"round"},paint:{"line-color":Ii,"line-width":10,"line-blur":8,"line-opacity":.7}}),pe({id:"region-line",type:"line",source:"regions",layout:{"line-join":"round"},paint:{"line-color":Ii,"line-width":["interpolate",["linear"],["zoom"],5,1.4,10,2.4],"line-opacity":.95}}),pe({id:"district-line",type:"line",source:"districts",filter:["==",["get","kind"],"border"],minzoom:5.5,layout:{"line-join":"round"},paint:{"line-color":"#ffffff","line-width":["interpolate",["linear"],["zoom"],6,.8,11,1.6],"line-dasharray":[3,2],"line-opacity":Sc(t)}}),b.addLayer({id:"district-label",type:"symbol",source:"districts",filter:["==",["get","kind"],"label"],minzoom:7.6,maxzoom:12,layout:{"text-field":["get","caption"],"text-font":["Noto Sans Regular"],"text-size":["interpolate",["linear"],["zoom"],8,10,11,12],"text-transform":"uppercase","text-letter-spacing":.12,"text-max-width":9,"symbol-sort-key":["-",0,["get","area_km2"]]},paint:{"text-color":"rgba(255,255,255,0.78)","text-halo-color":"rgba(5,6,10,0.65)","text-halo-width":1.2}},"label-country"),pe({id:"country-glow",type:"line",source:"country",layout:{"line-join":"round"},paint:{"line-color":Ii,"line-width":["interpolate",["linear"],["zoom"],4,7,9,12],"line-blur":6,"line-opacity":.75}}),pe({id:"country-line",type:"line",source:"country",layout:{"line-join":"round"},paint:{"line-color":"#ffffff","line-width":["interpolate",["linear"],["zoom"],4,2.2,9,3.4]}}),pe({id:"territory-fill",type:"fill",source:"territories",paint:{"fill-color":Cs.light,"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.14,["boolean",["feature-state","selected"],!1],.08,.035]}}),pe({id:"territory-line",type:"line",source:"territories",paint:{"line-color":Cs.light,"line-width":["interpolate",["linear"],["zoom"],8,["case",["boolean",["feature-state","hover"],!1],3.2,1.6],14,["case",["boolean",["feature-state","hover"],!1],5,3]],"line-opacity":.95}}),pe({id:"territory-ants",type:"line",source:"territories",filter:["==",["get","id"],-1],layout:{"line-cap":"butt","line-join":"round"},paint:{"line-color":"#ffffff","line-width":2.2,"line-dasharray":[0,4,3]}}),pe({id:"lots-fill",type:"fill",source:"lots",filter:mc,paint:{"fill-color":ns(ue),"fill-opacity":0}}),pe({id:"lots-3d",type:"fill-extrusion",source:"lots",filter:mc,layout:{visibility:"none"},paint:{"fill-extrusion-color":ns(ue),"fill-extrusion-height":0,"fill-extrusion-opacity":.88}}),pe({id:"lots-line",type:"line",source:"lots",paint:{"line-color":"#ffffff","line-width":["case",["boolean",["feature-state","hover"],!1],2.5,1],"line-opacity":0}}),pe({id:"lots-selected",type:"line",source:"lots",filter:["==",["get","id"],-1],paint:{"line-color":"#4f46e5","line-width":3.5}}),b.addSource("bim",{type:"geojson",data:_u("bim/data/factory-c03-footprint.geojson"),promoteId:"id"}),P){const Re=Ge.current??new G0({onReady:()=>b.triggerRepaint(),onPick:ie=>{var oe,Ee;return(Ee=(oe=Me.current).onBimPick)==null?void 0:Ee.call(oe,ie)},onHover:ie=>{var oe,Ee;return(Ee=(oe=Me.current).onBimHover)==null?void 0:Ee.call(oe,ie)},onProximity:ie=>{var oe,Ee;return(Ee=(oe=Me.current).onBimProximity)==null?void 0:Ee.call(oe,ie)},onWalkEnd:()=>{var ie,oe,Ee;b.dragPan.enable(),b.scrollZoom.enable(),b.dragRotate.enable(),(ie=document.exitPointerLock)==null||ie.call(document),(Ee=(oe=Me.current).onBimWalk)==null||Ee.call(oe,!1)}});Ge.current=Re,b.getLayer(Re.id)||b.addLayer(Re),(wr=(bn=Me.current).onBimLayer)==null||wr.call(bn,Re);const v=b.getCanvas(),C=ie=>{var Ee,De;const oe=Ge.current;if(oe!=null&&oe.isWalking()){if(ie.code==="Escape"){oe.stopWalk();return}if(ie.code==="Enter"){(De=(Ee=Me.current).onBimPick)==null||De.call(Ee,oe.pickFromCrosshair());return}oe.setKey(ie.code,!0),["KeyW","KeyA","KeyS","KeyD","Space"].includes(ie.code)&&ie.preventDefault()}},U=ie=>{var oe;return(oe=Ge.current)==null?void 0:oe.setKey(ie.code,!1)},F=ie=>{const oe=Ge.current;oe!=null&&oe.isWalking()&&document.pointerLockElement===v&&oe.look(ie.movementX,ie.movementY)},D=()=>{var oe,Ee,De;const ie=Ge.current;ie!=null&&ie.isWalking()&&(document.pointerLockElement!==v?(oe=v.requestPointerLock)==null||oe.call(v):(De=(Ee=Me.current).onBimPick)==null||De.call(Ee,ie.pickFromCrosshair()))},Z=()=>{var ie,oe;b.flyTo({center:Kn,zoom:16.6,pitch:62,bearing:-22,duration:2200,essential:!0}),(oe=(ie=Me.current).onBimFocus)==null||oe.call(ie)},ce=()=>{b.flyTo({center:Kn,zoom:17,pitch:60,bearing:-22,duration:1200,essential:!0})};window.addEventListener("sez:bim-view",Z),window.addEventListener("sez:bim-walk",ce),window.addEventListener("keydown",C),window.addEventListener("keyup",U),window.addEventListener("mousemove",F),v.addEventListener("click",D),st.current=()=>{window.removeEventListener("sez:bim-view",Z),window.removeEventListener("sez:bim-walk",ce),window.removeEventListener("keydown",C),window.removeEventListener("keyup",U),window.removeEventListener("mousemove",F),v.removeEventListener("click",D)}}b.on("click",Re=>{var U,F,D,Z;const v=Ge.current;if(!v)return;const C=v.pickAt(Re.point.x,Re.point.y);C?(v.setSelected(C.bimId),(F=(U=Me.current).onBimPick)==null||F.call(U,C)):v.hasFocus()&&(v.setSelected(null),(Z=(D=Me.current).onBimPick)==null||Z.call(D,null))}),pe({id:"infra-lines",type:"line",source:"infra",filter:["==",["get","kind"],"line"],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":Z0,"line-width":["interpolate",["linear"],["zoom"],10,["case",["boolean",["feature-state","hover"],!1],4,2],15,["case",["boolean",["feature-state","hover"],!1],8,4]]}}),pe({id:"infra-flow",type:"line",source:"infra",filter:["all",["==",["get","kind"],"line"],["==",["get","territory_id"],-1]],layout:{"line-cap":"butt","line-join":"round"},paint:{"line-color":"#ffffff","line-width":1.6,"line-opacity":.9,"line-dasharray":[0,4,3]}}),pe({id:"infra-points",type:"symbol",source:"infra",filter:["==",["get","kind"],"point"],layout:{"icon-image":["concat","infra-",["get","infra_type"]],"icon-size":["interpolate",["linear"],["zoom"],8,.5,12,.8,15,1.05],"icon-allow-overlap":!0,"icon-ignore-placement":!0}});const ze=new vn.Popup({closeButton:!1,closeOnClick:!1,className:"sez-popup",offset:12,maxWidth:"260px"});let Ve;const Te=Re=>{const v=Re,{t:C,lang:U}=Xe.current,F=L.current.get(Number(v.territory_id)),D=F?`<div style="font-size:11px;opacity:.75;margin-top:2px">${xn(F)}</div>`:"",Z=v.kind==="line"&&v.length_km?`<div style="font-size:11px;margin-top:2px">${C("infra.length")}: ${v.length_km<1?`${Math.round(v.length_km*1e3)} ${U==="en"||U==="uz"?"m":"м"}`:`${v.length_km.toFixed(1)} ${U==="ru"?"км":"km"}`}</div>`:"";return`<div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600"><span style="width:8px;height:8px;border-radius:9px;background:${fo[v.infra_type]??"#898781"}"></span>${C(`infra.${v.kind}.${v.infra_type}`)}</div>`+Z+D+`<div style="font-size:10px;opacity:.55;margin-top:3px">${C("infra.source")}</div>`},he=Re=>{var C,U;const v=b.queryRenderedFeatures(Re.point,{layers:["infra-points"]})[0]??((C=Re.features)==null?void 0:C[0]);!v||(U=M.current)!=null&&U.hovered||(b.getCanvas().style.cursor="pointer",Ve!==void 0&&Ve!==v.id&&b.setFeatureState({source:"infra",id:Ve},{hover:!1}),Ve=v.id,v.id!==void 0&&b.setFeatureState({source:"infra",id:v.id},{hover:!0}),ze.setLngLat(Re.lngLat).setHTML(Te(v.properties)).addTo(b))},je=()=>{Ve!==void 0&&b.setFeatureState({source:"infra",id:Ve},{hover:!1}),Ve=void 0,ze.remove(),b.getCanvas().style.cursor=""};for(const Re of["infra-points","infra-lines"])b.on("mousemove",Re,he),b.on("mouseleave",Re,je);b.on("mousemove",Re=>{var U;const v=M.current;if(!v)return;const C=v.pick(Re.point);C?(C.id!==((U=v.hovered)==null?void 0:U.id)&&v.setHovered(C),b.getCanvas().style.cursor="pointer",ze.setLngLat(Re.lngLat).setHTML(Te(C.props)).addTo(b)):v.hovered&&(v.setHovered(null),je())});const $e=new vn.Popup({closeButton:!1,closeOnClick:!1,className:"sez-popup",offset:14,maxWidth:"280px"});let _e;b.on("mousemove","lots-fill",Re=>{var Z,ce;const v=(Z=Re.features)==null?void 0:Z[0];if(!v)return;if((ce=M.current)!=null&&ce.hovered||b.queryRenderedFeatures(Re.point,{layers:["infra-points","infra-lines"]}).length){$e.remove();return}b.getCanvas().style.cursor="pointer",_e!==void 0&&b.setFeatureState({source:"lots",id:_e},{hover:!1}),_e=v.id,b.setFeatureState({source:"lots",id:_e},{hover:!0});const C=v.properties,{t:U,lang:F}=Xe.current,D=C.organization?`<div style="opacity:.7;margin-top:2px">${xn(C.organization)}</div>`:"";$e.setLngLat(Re.lngLat).setHTML(`<div style="font-size:12px;font-weight:600">${U("common.lot")} #${C.id} · ${gi(Number(C.area),F,2)}</div><div style="font-size:11px;opacity:.85">${U(`status.${C.status}`)}</div><div style="font-size:11px">${D}</div>`).addTo(b)}),b.on("mouseleave","lots-fill",()=>{b.getCanvas().style.cursor="",_e!==void 0&&b.setFeatureState({source:"lots",id:_e},{hover:!1}),_e=void 0,$e.remove()}),b.on("click","lots-fill",Re=>{var C,U,F,D,Z,ce,ie;if((C=M.current)!=null&&C.hovered)return;const v=(D=(F=(U=Re.features)==null?void 0:U[0])==null?void 0:F.properties)==null?void 0:D.id;(Z=Ge.current)!=null&&Z.hasFocus()||v!=null&&((ie=(ce=Me.current).onSelectLot)==null||ie.call(ce,Number(v)))}),b.on("click","territory-fill",Re=>{var C,U,F,D,Z,ce;if(b.queryRenderedFeatures(Re.point,{layers:["lots-fill"]}).length)return;const v=(F=(U=(C=Re.features)==null?void 0:C[0])==null?void 0:U.properties)==null?void 0:F.id;(D=Ge.current)!=null&&D.hasFocus()||v!=null&&((ce=(Z=Me.current).onSelectTerritory)==null||ce.call(Z,Number(v)))});let Ye;const gt=Re=>!!Me.current.onSelectRegion&&(K.current||we.current!=null&&Re!==void 0&&Number(Re)!==we.current),nt=new vn.Popup({closeButton:!1,closeOnClick:!1,className:"sez-popup",offset:12,maxWidth:"260px"});b.on("mousemove","region-fill",Re=>{var D;const v=(D=Re.features)==null?void 0:D[0],U=!(b.queryRenderedFeatures(Re.point,{layers:["territory-fill","lots-fill"]}).length>0)&&v&&gt(v.id)?v:void 0,F=U==null?void 0:U.id;if(U){const Z=U.properties,{t:ce,lang:ie}=Xe.current;nt.setLngLat(Re.lngLat).setHTML(`<div style="font-size:12px;font-weight:600">${xn(String((ie==="uz"?Z.name_uz:ie==="en"?Z.name_en:null)??Z.name))}</div><div style="font-size:11px;opacity:.8">${ce("map.sitesCount",{n:Number(Z.territories??0)})} · ${ce("common.free").toLowerCase()} ${gi(Number(Z.free_area??0),ie,0)}</div>`).addTo(b)}else nt.remove();F!==Ye&&(Ye!==void 0&&b.setFeatureState({source:"regions",id:Ye},{hover:!1}),Ye=F,F!==void 0&&b.setFeatureState({source:"regions",id:F},{hover:!0}),b.getCanvas().style.cursor=F!==void 0?"pointer":"")}),b.on("mouseleave","region-fill",()=>{Ye!==void 0&&b.setFeatureState({source:"regions",id:Ye},{hover:!1}),Ye=void 0,nt.remove(),b.getCanvas().style.cursor=""}),b.on("click","region-fill",Re=>{var C,U,F,D,Z;const v=(F=(U=(C=Re.features)==null?void 0:C[0])==null?void 0:U.properties)==null?void 0:F.id;!gt(v)||b.queryRenderedFeatures(Re.point,{layers:["territory-fill","lots-fill"]}).length||v!=null&&((Z=(D=Me.current).onSelectRegion)==null||Z.call(D,Number(v)))}),b.on("mouseenter","territory-fill",()=>b.getCanvas().style.cursor="pointer"),b.on("mouseleave","territory-fill",()=>b.getCanvas().style.cursor="");const yt=()=>{var C,U;const Re=b.getBounds(),v=b.getCenter();(U=(C=Me.current).onViewChange)==null||U.call(C,{zoom:b.getZoom(),center:[v.lng,v.lat],bounds:[Re.getWest(),Re.getSouth(),Re.getEast(),Re.getNorth()]})};b.on("moveend",yt),yt(),We(!0);const en=()=>{W||(de=Ec(1400,Re=>{ke.current=Re,xe(b)}))};if(Y&&_?be.push(window.setTimeout(()=>{b.once("moveend",()=>Pe.current=ur(b)),b.fitBounds(_,{padding:re,duration:2600,essential:!0,curve:1.6}),b.once("moveend",en)},250)):(_&&b.fitBounds(_,{padding:re,duration:0}),Pe.current=ur(b),be.push(window.setTimeout(en,150))),!ds()){let Re=-1;const v=C=>{const U=Math.floor(C/55)%ga.length;U!==Re&&b.getLayer("infra-flow")&&(Re=U,b.setPaintProperty("infra-flow","line-dasharray",ga[Re]),b.setPaintProperty("territory-ants","line-dasharray",ga[Re])),X=requestAnimationFrame(v)};X=requestAnimationFrame(v)}});const Q=new ResizeObserver(()=>b.resize());return Q.observe(ae.current),()=>{var le;W=!0,M.current=null,be.forEach(clearTimeout),de(),cancelAnimationFrame(X),Q.disconnect(),Mt.current.forEach(pe=>pe.remove()),Mt.current=[],(le=Ze.current)==null||le.remove(),Ze.current=null,b.remove(),te.current=null,We(!1)}},[]),Ne.useEffect(()=>{var b;const _=te.current;!_||!ee||(_.getSource("lots").setData(o),_.getSource("territories").setData(a),l&&_.getSource("infra").setData(l),(b=M.current)==null||b.setData(l,o),r&&(_.getSource("regions").setData(r),_.getSource("country").setData(ho(r)??gr)))},[ee,o,a,l,r]),Ne.useEffect(()=>{const _=te.current;!_||!ee||_.getSource("districts").setData(Mc(e,He))},[ee,e,He]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee)return;const W=["==",["get","id"],t??-1];_.getSource("region-mask").setData(vc(r,t)),_.setFilter("region-glow",W),_.setPaintProperty("district-line","line-opacity",Sc(t)),_.setPaintProperty("region-line","line-opacity",t==null?.95:["case",W,1,.45]),_.setPaintProperty("region-line","line-width",["interpolate",["linear"],["zoom"],5,["case",W,2.8,1.4],10,["case",W,3.6,2.4]]),_.setPaintProperty("country-glow","line-opacity",t==null?.75:.25)},[ee,t,r]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee)return;const b=a.features.map(de=>de.properties),W=()=>{Mt.current.forEach(de=>de.remove()),Mt.current=[],ct.current.clear()},X=()=>{if(W(),K.current=t==null&&_.getZoom()<sx,!k.labels||_.getZoom()>=12.6||K.current&&r&&!i)return;if(K.current&&r){const Q=[];r.features.map(pe=>pe.properties).filter(pe=>Number(pe.territories??0)>0&&Array.isArray(pe.label)).sort((pe,ze)=>Number(ze.useful_area??0)-Number(pe.useful_area??0)).forEach((pe,ze)=>{const Ve=Number(pe.useful_area??0),Te=_c(Ve),he=tx(pe,He),je=_.project(pe.label),$e=Math.max(Te,he.length*7+24),_e={x0:je.x-$e/2,y0:je.y-Te/2,x1:je.x+$e/2,y1:je.y+Te/2+34},Ye=!Q.some(nt=>_e.x0<nt.x1&&_e.x1>nt.x0&&_e.y0<nt.y1&&_e.y1>nt.y0);Ye&&Q.push(_e);const gt=gc({count:Number(pe.territories),size:Te,occupiedShare:Ve?Number(pe.occupied_area??0)/Ve:0,freeShare:Ve?Number(pe.free_area??0)/Ve:0,name:he,sub:`${Xe.current.t("common.free").toLowerCase()} ${gi(Number(pe.free_area??0),He,0)}`,delay:ze*40});Ye||gt.classList.add("sez-bubble-marker--nolabel"),gt.style.zIndex=String(100-ze),gt.addEventListener("click",nt=>{var yt,en;nt.stopPropagation(),(en=(yt=Me.current).onSelectRegion)==null||en.call(yt,Number(pe.id))}),Mt.current.push(new vn.Marker({element:gt,anchor:"top",offset:[0,-Te/2]}).setLngLat(pe.label).addTo(_))});return}const de=b.map(Q=>({p:Q,xy:_.project([Q.lng,Q.lat])})).sort((Q,le)=>le.p.useful_area-Q.p.useful_area),be=new Set;for(const Q of de){if(be.has(Q.p.id))continue;const le=de.filter(he=>!be.has(he.p.id)&&Math.hypot(Q.xy.x-he.xy.x,Q.xy.y-he.xy.y)<130);le.forEach(he=>be.add(he.p.id));let pe,ze,Ve="bottom",Te=[0,0];if(le.length===1){const he=Q.p;pe=ex({title:j(he.id,he.district),sub:`${he.name} · ${gi(he.useful_area,He,0)}`,accent:Q0(he.category_code),occupied:he.useful_area?1-(he.free_area??0)/he.useful_area:void 0,free:`${Xe.current.t("common.free").toLowerCase()} ${gi(he.free_area??0,He,0)}`,delay:Mt.current.length*35}),pe.addEventListener("click",je=>{var $e,_e,Ye;je.stopPropagation(),!(($e=Ge.current)!=null&&$e.hasFocus())&&((Ye=(_e=Me.current).onSelectTerritory)==null||Ye.call(_e,he.id))}),ze=[he.lng,he.lat],ct.current.set(he.id,pe)}else{const he=[...new Set(le.map(nt=>at(nt.p.district)))],je=he.length>2?`${he.slice(0,2).join(", ")} +${he.length-2}`:he.join(", "),$e=le.reduce((nt,yt)=>nt+yt.p.useful_area,0),_e=le.reduce((nt,yt)=>nt+(yt.p.free_area??0),0),Ye=Math.max(44,_c($e)-6);Ve="top",Te=[0,-Ye/2],pe=gc({count:le.length,size:Ye,occupiedShare:$e?1-_e/$e:0,freeShare:$e?_e/$e:0,name:je,sub:`${Xe.current.t("common.free").toLowerCase()} ${gi(_e,He,0)}`,delay:Mt.current.length*35}),pe.classList.add("territory-pin");const gt=new Set(le.map(nt=>nt.p.id));pe.addEventListener("click",nt=>{nt.stopPropagation();const yt=Jt(a.features.filter(en=>{var bn;return gt.has(Number((bn=en.properties)==null?void 0:bn.id))}));yt&&_.fitBounds(yt,{padding:tt.current,duration:1400,maxZoom:13.5})}),ze=[le.reduce((nt,yt)=>nt+yt.p.lng,0)/le.length,le.reduce((nt,yt)=>nt+yt.p.lat,0)/le.length],le.forEach(nt=>ct.current.set(nt.p.id,pe))}Mt.current.push(new vn.Marker({element:pe,anchor:Ve,offset:Te}).setLngLat(ze).addTo(_))}};return X(),_.on("zoomend",X),()=>{_.off("zoomend",X),W()}},[ee,a,k.labels,He,at,j,r,t,i]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee)return;const b=H==="scheme";_.setLayoutProperty("base-sat","visibility",b?"none":"visible");const W=Fu[ue==="dark"?"dark":"light"];_.setLayoutProperty("sch-hill-light","visibility",b&&ue!=="dark"?"visible":"none"),_.setLayoutProperty("sch-hill-dark","visibility",b&&ue==="dark"?"visible":"none"),Object.entries(Uu(W)).forEach(([le,pe])=>{_.setLayoutProperty(le,"visibility",b?"visible":"none"),Object.entries(pe).forEach(([ze,Ve])=>_.setPaintProperty(le,ze,Ve))});const X=b&&ue==="light";ko.forEach(le=>{_.setPaintProperty(le,"text-color",X?"#3b3b48":"#ffffff"),_.setPaintProperty(le,"text-halo-color",X?"rgba(255,255,255,0.9)":"rgba(5,6,10,0.7)")}),_.setPaintProperty("label-border","line-color",X?"#8a8aa0":"#ffffff"),_.setPaintProperty("background","background-color",W.bg),_.setPaintProperty("lots-fill","fill-color",ns(ue)),_.setPaintProperty("lots-3d","fill-extrusion-color",ns(ue));const de=ue==="dark"?"#8b85ff":"#4f46e5",be=Cs[H==="satellite"?"satellite":ue];_.setPaintProperty("territory-line","line-color",be),_.setPaintProperty("territory-fill","fill-color",be),_.setPaintProperty("lots-selected","line-color",H==="satellite"?"#ffffff":de),_.setPaintProperty("lots-line","line-color",ue==="dark"&&H==="scheme"?"#1c1c24":"#ffffff"),_.setPaintProperty("territory-ants","line-color",ue==="dark"&&H==="scheme"?"#0f0f14":"#ffffff"),_.setPaintProperty("region-mask","fill-opacity",H==="satellite"?.55:ue==="dark"?.6:.28);const Q=H==="scheme"&&ue==="light";_.setPaintProperty("region-line","line-color",Q?ma:Ii),_.setPaintProperty("region-glow","line-color",Q?ma:Ii),_.setPaintProperty("country-glow","line-color",Q?ma:Ii),_.setPaintProperty("region-casing","line-opacity",Q?.12:.45),_.setPaintProperty("country-line","line-color",Q?"#0c4a6e":"#ffffff"),_.setPaintProperty("district-line","line-color",Q?"#0369a1":"#ffffff"),_.setPaintProperty("district-label","text-color",Q?"rgba(12,74,110,0.8)":"rgba(255,255,255,0.78)"),_.setPaintProperty("district-label","text-halo-color",Q?"rgba(255,255,255,0.9)":"rgba(5,6,10,0.65)")},[ee,ue,H]),Ne.useEffect(()=>{const _=te.current;!_||!ee||ko.forEach(b=>_.setLayoutProperty(b,"text-field",Ou(He)))},[ee,He]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee)return;const b=W=>W?"visible":"none";_.setLayoutProperty("infra-lines","visibility",b(k.infra)),_.setLayoutProperty("infra-flow","visibility",b(k.infra)),_.setLayoutProperty("infra-points","visibility",b(k.infra)),_.setLayerZoomRange("infra-points",0,G&&z?bc:24),z&&_.setLayoutProperty("infra-3d","visibility",b(k.infra)),_.setLayoutProperty("territory-line","visibility",b(k.borders)),_.setLayoutProperty("territory-fill","visibility",b(k.borders)),_.easeTo({pitch:G?58:0,bearing:G?-18:0,duration:1200})},[ee,k.infra,k.borders,G,z]),Ne.useEffect(()=>{var _;(_=Ge.current)==null||_.setFocus(R)},[R,ee]),Ne.useEffect(()=>{var W,X;const _=te.current,b=Ge.current;!_||!ee||!b||(O&&!b.isWalking()?(_.dragPan.disable(),_.scrollZoom.disable(),_.dragRotate.disable(),b.startWalk(),(X=(W=_.getCanvas()).requestPointerLock)==null||X.call(W)):!O&&b.isWalking()&&b.stopWalk())},[O,ee]),Ne.useEffect(()=>()=>{var _;return(_=st.current)==null?void 0:_.call(st)},[]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee||!B)return;const b={type:"FeatureCollection",features:[]};if(!_.getSource("sez-routes")){_.addSource("sez-routes",{type:"geojson",data:b}),_.addSource("sez-routes-abroad",{type:"geojson",data:b}),_.addSource("sez-routes-points",{type:"geojson",data:b});const Q=["match",["get","kind"],"rail",Xt.rail,"air",Xt.air,"sea",Cu,Xt.truck];_.addLayer({id:"sez-routes-abroad",type:"line",source:"sez-routes-abroad",filter:["==",["get","dash"],!0],layout:{"line-cap":"round"},paint:{"line-color":Q,"line-width":2.6,"line-dasharray":[1.5,2],"line-opacity":.9}},"label-border"),_.addLayer({id:"sez-routes-abroad-real",type:"line",source:"sez-routes-abroad",filter:["!=",["get","dash"],!0],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":Q,"line-width":["interpolate",["linear"],["zoom"],3,2.2,8,3.6],"line-opacity":.9}},"label-border"),_.addLayer({id:"sez-routes-casing",type:"line",source:"sez-routes",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#ffffff","line-width":["interpolate",["linear"],["zoom"],5,7,10,10,14,13],"line-opacity":.95}},"label-border"),_.addLayer({id:"sez-routes-line",type:"line",source:"sez-routes",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":Q,"line-width":["interpolate",["linear"],["zoom"],5,4,10,6,14,8]}},"label-border"),_.addLayer({id:"sez-routes-dots",type:"circle",source:"sez-routes-points",paint:{"circle-radius":["match",["get","role"],"market",8,"origin",7,6.5],"circle-color":["get","color"],"circle-stroke-color":"#ffffff","circle-stroke-width":2.5}}),_.addLayer({id:"sez-routes-labels",type:"symbol",source:"sez-routes-points",filter:["!=",["get","role"],"origin"],layout:{"text-field":["get","label"],"text-font":["Noto Sans Bold"],"text-size":12,"text-offset":[0,1.25],"text-anchor":"top","text-max-width":14},paint:{"text-color":"#ffffff","text-halo-color":"rgba(5,6,10,0.85)","text-halo-width":1.6}})}const W=()=>te.current===_&&!!_.style,X=Q=>{var $e;try{if(!W()||!_.getSource("sez-routes"))return}catch{return}const le=(_e,Ye)=>({type:"Feature",properties:{kind:Ye},geometry:{type:"LineString",coordinates:_e}}),pe=(_e,Ye,gt)=>({type:"Feature",properties:gt,geometry:{type:"Point",coordinates:[_e,Ye]}});_.getSource("sez-routes").setData({type:"FeatureCollection",features:Q?Q.legs.map(_e=>le(_e.coordinates,_e.kind)):[]});const ze=($e=Q==null?void 0:Q.abroadParts)!=null&&$e.length?Q.abroadParts.filter(_e=>_e.coordinates.length>1).map(_e=>({...le(_e.coordinates,_e.kind),properties:{kind:_e.kind,dash:_e.kind==="sea"}})):Q!=null&&Q.abroad?[{...le(Q.abroad.coordinates,Q.abroad.kind),properties:{kind:Q.abroad.kind,dash:!0}}]:[];_.getSource("sez-routes-abroad").setData({type:"FeatureCollection",features:ze});const Ve=Q?[pe(Q.origin.lon,Q.origin.lat,{role:"origin",color:"#4f46e5",label:""}),...Q.station?[pe(Q.station.lon,Q.station.lat,{role:"station",color:Xt.rail,label:Q.station.label})]:[],pe(Q.exit.lon,Q.exit.lat,{role:"exit",color:Xt[Q.exit.kind],label:Q.exit.label}),pe(Q.market.lon,Q.market.lat,{role:"market",color:"#4f46e5",label:Q.market.label})]:[];if(_.getSource("sez-routes-points").setData({type:"FeatureCollection",features:Ve}),!Q)return;const Te=[[Q.origin.lon,Q.origin.lat],[Q.exit.lon,Q.exit.lat],...Q.legs.flatMap(_e=>_e.coordinates)],he=Jt([{type:"Feature",properties:{},geometry:{type:"MultiPoint",coordinates:Te}}]);if(!he)return;const je=()=>{if(!W())return;Pe.current=null;const _e=tt.current;_.fitBounds(he,{padding:{top:_e.top+48,right:_e.right+48,bottom:_e.bottom+48,left:_e.left+48},maxZoom:10,duration:ds()?0:1100,essential:!0})};_.isMoving()?_.once("moveend",je):je()},de=Q=>X(Q.detail??null);window.addEventListener("sez:routes",de);const be=window.setTimeout(()=>window.__sezRoutes&&X(window.__sezRoutes),400);return()=>{window.clearTimeout(be),window.removeEventListener("sez:routes",de),X(null)}},[ee,B]);const rt=!!q,[se,Se]=Ne.useState(!1),Fe=Ne.useRef(q==null?void 0:q.hubs);Fe.current=q==null?void 0:q.hubs,Ne.useEffect(()=>{const _=te.current;if(!_||!ee||!rt)return;let b=!1;const W=()=>!b&&te.current===_&&!!_.style,X=new vn.Popup({closeButton:!1,closeOnClick:!1,className:"sez-popup",offset:12,maxWidth:"280px"}),de=["lgm-hub-icons","lgm-station-dots","lgm-station-icons"],be=Ve=>{var _e;if(!W()||!_.getLayer("lgm-hub-icons")||_.getLayoutProperty("lgm-hub-icons","visibility")==="none")return;const Te=_.queryRenderedFeatures(Ve.point,{layers:de})[0];if(!Te){X.remove();return}const he=Te.properties,{t:je,lang:$e}=Xe.current;X.setLngLat(Te.geometry.coordinates).setHTML(`<div style="display:flex;align-items:center;gap:6px;font-size:11px;opacity:.8"><span style="width:8px;height:8px;border-radius:9px;background:${((_e=xu[he.kind])==null?void 0:_e.color)??Xt.rail}"></span>${xn(je(`lg.hub.${he.kind}`))}</div><div style="font-size:12px;font-weight:600;margin-top:2px">${xn(Lu({id:he.id,name:he.name},$e))}</div>`).addTo(_)},Q=()=>X.remove();(async()=>{if(await new Promise(Te=>window.setTimeout(Te,0)),!W())return;const Ve=await q0().catch(()=>[]);if(W()){if(Ve.forEach(([Te,he])=>{_.hasImage(`lgm-${Te}`)||_.addImage(`lgm-${Te}`,he,{pixelRatio:2})}),!_.getSource("lgm-rail")){const Te={type:"FeatureCollection",features:[]};["lgm-rail","lgm-hubs","lgm-near-lines","lgm-near-points","lgm-near-tags"].forEach(_e=>_.addSource(_e,{type:"geojson",data:Te}));const he=_.getLayer("territory-fill")?"territory-fill":"label-border";_.addLayer({id:"lgm-rail-casing",type:"line",source:"lgm-rail",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffffff","line-width":["interpolate",["linear"],["zoom"],5,2,9,3.2,13,5.5],"line-opacity":.45}},he),_.addLayer({id:"lgm-rail",type:"line",source:"lgm-rail",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":K0,"line-width":["interpolate",["linear"],["zoom"],5,.9,9,1.8,13,3.4],"line-opacity":["interpolate",["linear"],["zoom"],5,.7,9,.95]}},he),_.addLayer({id:"lgm-rail-ties",type:"line",source:"lgm-rail",minzoom:9.5,paint:{"line-color":"#ffffff","line-width":["interpolate",["linear"],["zoom"],10.5,1,14,2],"line-dasharray":[.35,2.2],"line-opacity":.9}},he);const je=["match",["get","kind"],"road_border",Xt.truck,"airport",Xt.air,Xt.rail];_.addLayer({id:"lgm-near-casing",type:"line",source:"lgm-near-lines",layout:{"line-cap":"round"},paint:{"line-color":"#ffffff","line-width":4.2,"line-opacity":.85}}),_.addLayer({id:"lgm-near-line",type:"line",source:"lgm-near-lines",layout:{"line-cap":"round"},paint:{"line-color":je,"line-width":2.2,"line-dasharray":[2,1.6]}}),_.addLayer({id:"lgm-station-dots",type:"circle",source:"lgm-hubs",minzoom:7,maxzoom:10.5,filter:["==",["get","kind"],"rail_station"],paint:{"circle-radius":["interpolate",["linear"],["zoom"],7,2.2,10.5,4.2],"circle-color":Xt.rail,"circle-stroke-color":"#ffffff","circle-stroke-width":1.2}}),_.addLayer({id:"lgm-station-icons",type:"symbol",source:"lgm-hubs",minzoom:10.5,filter:["==",["get","kind"],"rail_station"],layout:{"icon-image":"lgm-rail_station","icon-size":["interpolate",["linear"],["zoom"],10.5,.42,14,.62],"icon-allow-overlap":!0}}),_.addLayer({id:"lgm-hub-icons",type:"symbol",source:"lgm-hubs",filter:["!=",["get","kind"],"rail_station"],layout:{"icon-image":["concat","lgm-",["get","kind"]],"icon-size":["interpolate",["linear"],["zoom"],5,.4,9,.56,13,.7],"icon-allow-overlap":!0}});const $e={"text-color":"#ffffff","text-halo-color":"rgba(5,6,10,0.8)","text-halo-width":1.4};_.addLayer({id:"lgm-station-labels",type:"symbol",source:"lgm-hubs",minzoom:9.5,filter:["==",["get","kind"],"rail_station"],layout:{"text-field":["get","label"],"text-font":["Noto Sans Regular"],"text-size":10.5,"text-offset":[0,.9],"text-anchor":"top","text-max-width":12,"text-optional":!0},paint:$e}),_.addLayer({id:"lgm-hub-labels",type:"symbol",source:"lgm-hubs",minzoom:7,filter:["!=",["get","kind"],"rail_station"],layout:{"text-field":["get","label"],"text-font":["Noto Sans Regular"],"text-size":11,"text-offset":[0,1.1],"text-anchor":"top","text-max-width":12,"text-optional":!0},paint:$e}),_.addLayer({id:"lgm-near-ring",type:"circle",source:"lgm-near-points",paint:{"circle-radius":pc,"circle-color":"rgba(0,0,0,0)","circle-stroke-color":je,"circle-stroke-width":3}}),_.addLayer({id:"lgm-near-tags",type:"symbol",source:"lgm-near-tags",layout:{"text-field":["get","label"],"text-font":["Noto Sans Bold"],"text-size":12,"text-anchor":["get","anchor"],"text-offset":["case",["==",["get","anchor"],"left"],["literal",[.6,0]],["literal",[-.6,0]]],"text-max-width":20,"text-allow-overlap":!0,"text-ignore-placement":!0},paint:{"text-color":"#ffffff","text-halo-color":"rgba(5,6,10,0.88)","text-halo-width":1.6}})}_.on("mousemove",be),_.on("mouseout",Q),Se(!0)}})();let le=0;const pe=Ve=>{const Te=performance.now(),he=je=>{if(le=0,!W()||!_.getLayer("lgm-near-ring"))return;const $e=(je-Te)/1500;if($e>=1){_.setPaintProperty("lgm-near-ring","circle-radius",pc),_.setPaintProperty("lgm-near-ring","circle-stroke-width",3);return}const _e=1+.9*Math.abs(Math.sin($e*Math.PI*2)),Ye=["==",["get","id"],Ve];_.setPaintProperty("lgm-near-ring","circle-radius",["interpolate",["linear"],["zoom"],5,["case",Ye,9*_e,9],10,["case",Ye,14*_e,14]]),_.setPaintProperty("lgm-near-ring","circle-stroke-width",["case",Ye,3+2.5*(_e-1),3]),le=requestAnimationFrame(he)};cancelAnimationFrame(le),le=requestAnimationFrame(he)},ze=Ve=>{var $e;const Te=Ve.detail??{};if(!W())return;let he=Te.lon!=null&&Te.lat!=null?[Te.lon,Te.lat]:null;if(!he&&Te.hubId){const _e=($e=Fe.current)==null?void 0:$e.features.find(Ye=>{var gt;return String((gt=Ye.properties)==null?void 0:gt.id)===Te.hubId});_e&&(he=_e.geometry.coordinates)}if(!he)return;const je=()=>{W()&&(Pe.current=null,_.flyTo({center:he,zoom:Te.zoom??11,duration:ds()?0:1400,essential:!0}),Te.hubId&&_.once("moveend",()=>pe(Te.hubId)))};_.isMoving()?_.once("moveend",je):je()};return window.addEventListener("sez:flyto",ze),()=>{b=!0,X.remove(),cancelAnimationFrame(le),window.removeEventListener("sez:flyto",ze),te.current===_&&(_.off("mousemove",be),_.off("mouseout",Q))}},[ee,rt]);const Ue=_=>te.current===_&&!!_.style&&!!_.getSource("lgm-rail");Ne.useEffect(()=>{const _=te.current;!_||!se||!Ue(_)||_.getSource("lgm-rail").setData((q==null?void 0:q.rail)??{type:"FeatureCollection",features:[]})},[se,q==null?void 0:q.rail]),Ne.useEffect(()=>{const _=te.current;if(!_||!se||!Ue(_))return;const b=q==null?void 0:q.hubs;_.getSource("lgm-hubs").setData(b?{...b,features:b.features.map(W=>{var X,de,be,Q;return{...W,properties:{...W.properties,label:((X=W.properties)==null?void 0:X.kind)==="rail_station"?String((de=W.properties)==null?void 0:de.name):Pu({id:String((be=W.properties)==null?void 0:be.id),name:String((Q=W.properties)==null?void 0:Q.name)},He)}}})}:{type:"FeatureCollection",features:[]})},[se,q==null?void 0:q.hubs,He]),Ne.useEffect(()=>{const _=te.current;if(!_||!se||!Ue(_))return;const b=k.logistics?q==null?void 0:q.nearest:null,W=(b==null?void 0:b.hubs)??[];_.getSource("lgm-near-lines").setData({type:"FeatureCollection",features:W.map(Q=>({type:"Feature",properties:{kind:Q.kind},geometry:{type:"LineString",coordinates:[b.origin,Q.coordinates]}}))}),_.getSource("lgm-near-points").setData({type:"FeatureCollection",features:W.map(Q=>({type:"Feature",properties:{id:Q.id,kind:Q.kind,label:Q.label},geometry:{type:"Point",coordinates:Q.coordinates}}))});let X=0;const de=()=>{if(X=0,!Ue(_))return;const Q=[];if(b){const le=_.project(b.origin),pe=[];W.forEach(ze=>{const Ve=_.project(ze.coordinates),Te=Ve.x-le.x,he=Ve.y-le.y,je=Math.hypot(Te,he)||1;let $e=Math.min(170,je*.55),_e=le.x+Te/je*$e,Ye=le.y+he/je*$e;for(;$e<je&&pe.some(yt=>Math.abs(yt.y-Ye)<34&&Math.abs(yt.x-_e)<180);)$e+=44,_e=le.x+Te/je*$e,Ye=le.y+he/je*$e;pe.push({x:_e,y:Ye});const gt=Te>=0,nt=_.unproject([_e,Ye]);Q.push({type:"Feature",properties:{kind:ze.kind,anchor:gt?"left":"right",label:gt?`${ze.label} →`:`← ${ze.label}`},geometry:{type:"Point",coordinates:[nt.lng,nt.lat]}})})}_.getSource("lgm-near-tags").setData({type:"FeatureCollection",features:Q})},be=()=>{X||(X=requestAnimationFrame(de))};return de(),_.on("move",be),()=>{X&&cancelAnimationFrame(X),te.current===_&&_.off("move",be)}},[se,q==null?void 0:q.nearest,k.logistics]),Ne.useEffect(()=>{const _=te.current;!_||!se||!Ue(_)||Y0.forEach(b=>_.getLayer(b)&&_.setLayoutProperty(b,"visibility",k.logistics?"visible":"none"))},[se,k.logistics]);const ye=!!x,[Ke,qe]=Ne.useState(!1);Ne.useEffect(()=>{const _=te.current;if(!_||!ee||!ye)return;let b=!1;const W=()=>!b&&te.current===_&&!!_.style,X=new vn.Popup({closeButton:!1,closeOnClick:!1,className:"sez-popup",offset:12,maxWidth:"300px"}),de=["eng-sub","eng-tp","eng-towers","eng-hv","eng-lv","eng-zone-fill"],be=(ze,Ve)=>Ve==null||Ve===""?"":`<div style="display:flex;justify-content:space-between;gap:10px;font-size:11px;margin-top:2px"><span style="opacity:.6">${xn(ze)}</span><span>${xn(String(Ve))}</span></div>`,Q=ze=>{if(!W()||!_.getLayer("eng-hv")||_.getLayoutProperty("eng-hv","visibility")==="none")return;const Ve=_.queryRenderedFeatures(ze.point,{layers:de.filter(bn=>_.getLayer(bn))})[0];if(!Ve){X.remove();return}const Te=Ve.properties??{},{t:he,lang:je}=Xe.current,$e=je==="ru"?"км":"km",_e=Te.kv!=null?Number(Te.kv):null;let Ye,gt;switch(Ve.layer.id){case"eng-sub":Ye=he("energy.substation"),gt=_e!=null&&_e>=110?zt.hv110:zt.hv35;break;case"eng-tp":Ye=he("energy.tpShort"),gt=zt.tp;break;case"eng-towers":Ye=he("energy.towers"),gt=zt.tower;break;case"eng-hv":Ye=he("energy.hv"),gt=_e!=null&&_e>=110?zt.hv110:zt.hv35;break;case"eng-lv":Ye=he("energy.lv"),gt=zt.lv;break;default:Ye=he("energy.zone"),gt=zt.zone}const nt=Te.voltage?`${Te.voltage} ${je==="ru"?"кВ":"kV"}`:_e!=null?he("energy.kv",{kv:_e}):null,yt=`<div style="display:flex;align-items:center;gap:6px;font-size:11px;opacity:.8"><span style="width:8px;height:8px;border-radius:9px;background:${gt}"></span>${xn(Ye)}${nt?` · ${xn(nt)}`:""}</div>`+(Te.name?`<div style="font-size:12px;font-weight:600;margin-top:2px">${xn(String(Te.name))}</div>`:"")+be(je==="ru"?"Год ввода":je==="uz"?"Ishga tushirilgan":"Commissioned",Te.year)+be(he("energy.equipment"),Te.equipment)+be(je==="ru"?"Длина":je==="uz"?"Uzunligi":"Length",Te.length_km!=null?`${Number(Te.length_km).toLocaleString(je==="ru"?"ru-RU":"en-US",{maximumFractionDigits:1})} ${$e}`:null)+be(he("energy.towers"),Te.towers)+be(he("energy.wire"),Te.wire)+be(he("energy.zone"),Te.width_m!=null?he("energy.zoneWidth",{m:Te.width_m}):Te.zone_m!=null?he("energy.zoneWidth",{m:Te.zone_m}):null)+be(he("energy.owner"),Te.owner),en=Ve.layer.type==="circle"?Ve.geometry.coordinates:ze.lngLat;X.setLngLat(en).setHTML(yt).addTo(_)},le=()=>X.remove(),pe={type:"FeatureCollection",features:[]};if(!_.getSource("eng-hv")){["eng-hv","eng-sub","eng-zones","eng-sub-area","eng-lv","eng-tp","eng-towers"].forEach(Ve=>_.addSource(Ve,{type:"geojson",data:pe}));const ze=_.getLayer("territory-fill")?"territory-fill":"label-border";_.addLayer({id:"eng-zone-fill",type:"fill",source:"eng-zones",minzoom:10,paint:{"fill-color":zt.zone,"fill-opacity":.1}},ze),_.addLayer({id:"eng-zone-line",type:"line",source:"eng-zones",minzoom:10,paint:{"line-color":zt.zone,"line-width":["interpolate",["linear"],["zoom"],10,.6,15,1.4],"line-dasharray":[2,1.6],"line-opacity":.65}},ze),_.addLayer({id:"eng-sub-area-fill",type:"fill",source:"eng-sub-area",minzoom:11,paint:{"fill-color":ts,"fill-opacity":.22}},ze),_.addLayer({id:"eng-sub-area-line",type:"line",source:"eng-sub-area",minzoom:11,paint:{"line-color":ts,"line-width":1.2,"line-opacity":.9}},ze),_.addLayer({id:"eng-lv",type:"line",source:"eng-lv",minzoom:11,layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":zt.lv,"line-width":["interpolate",["linear"],["zoom"],11,1.3,15,2.6],"line-opacity":.95,"line-dasharray":[2,1.5]}},ze),_.addLayer({id:"eng-hv-casing",type:"line",source:"eng-hv",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffffff","line-width":["interpolate",["linear"],["zoom"],5,1.6,9,3.2,13,5.6],"line-opacity":["interpolate",["linear"],["zoom"],5,.25,9,.55]}},ze),_.addLayer({id:"eng-hv",type:"line",source:"eng-hv",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":ts,"line-width":["interpolate",["linear"],["zoom"],5,["case",[">=",["coalesce",["get","kv"],35],110],1,.6],9,["case",[">=",["coalesce",["get","kv"],35],110],2.2,1.4],13,["case",[">=",["coalesce",["get","kv"],35],110],3.8,2.4]],"line-opacity":["interpolate",["linear"],["zoom"],5,.6,9,.95]}},ze),_.addLayer({id:"eng-towers",type:"circle",source:"eng-towers",minzoom:14,paint:{"circle-radius":["interpolate",["linear"],["zoom"],14,2,17,3.2],"circle-color":zt.tower,"circle-stroke-color":"rgba(5,6,10,0.6)","circle-stroke-width":.6}}),_.addLayer({id:"eng-tp",type:"circle",source:"eng-tp",minzoom:11,paint:{"circle-radius":["interpolate",["linear"],["zoom"],11,3,15,5.5],"circle-color":zt.tp,"circle-stroke-color":"#ffffff","circle-stroke-width":1.5}}),_.addLayer({id:"eng-sub",type:"circle",source:"eng-sub",paint:{"circle-radius":["interpolate",["linear"],["zoom"],5,["case",[">=",["coalesce",["get","kv"],35],110],3,2],9,["case",[">=",["coalesce",["get","kv"],35],110],5.5,4],13,["case",[">=",["coalesce",["get","kv"],35],110],8,6]],"circle-color":ts,"circle-stroke-color":"#ffffff","circle-stroke-width":1.4}}),_.addLayer({id:"eng-sub-labels",type:"symbol",source:"eng-sub",minzoom:9.5,layout:{"text-field":["get","name"],"text-font":["Noto Sans Regular"],"text-size":10.5,"text-offset":[0,.9],"text-anchor":"top","text-max-width":12,"text-optional":!0},paint:{"text-color":"#ffffff","text-halo-color":"rgba(5,6,10,0.8)","text-halo-width":1.4}})}return _.on("mousemove",Q),_.on("mouseout",le),qe(!0),()=>{b=!0,X.remove(),te.current===_&&(_.off("mousemove",Q),_.off("mouseout",le))}},[ee,ye]);const ut=_=>te.current===_&&!!_.style&&!!_.getSource("eng-hv"),N=(_,b,W)=>_.getSource(b).setData(W??{type:"FeatureCollection",features:[]});Ne.useEffect(()=>{var b,W;const _=te.current;!_||!Ke||!ut(_)||(N(_,"eng-hv",(b=x==null?void 0:x.grid)==null?void 0:b.lines),N(_,"eng-sub",(W=x==null?void 0:x.grid)==null?void 0:W.substations))},[Ke,x==null?void 0:x.grid]),Ne.useEffect(()=>{const _=te.current;if(!_||!Ke||!ut(_))return;const b=x==null?void 0:x.local;N(_,"eng-zones",b==null?void 0:b.zones),N(_,"eng-sub-area",b==null?void 0:b.substations),N(_,"eng-lv",b==null?void 0:b.lv_lines),N(_,"eng-tp",b==null?void 0:b.tp),N(_,"eng-towers",b==null?void 0:b.towers)},[Ke,x==null?void 0:x.local]),Ne.useEffect(()=>{const _=te.current;!_||!Ke||!ut(_)||j0.forEach(b=>_.getLayer(b)&&_.setLayoutProperty(b,"visibility",k.energy?"visible":"none"))},[Ke,k.energy]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee)return;const b=w.current,W=G?1:0;G&&_.setLayoutProperty("lots-3d","visibility","visible");let X=!1;G&&!M.current&&Promise.all([bu(()=>import("./infra3d-DEDmveLc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),dc()]).then(([{Infra3DLayer:be},Q])=>{if(X||M.current||te.current!==_)return;const le=new be(Q,vu,bc);_.addLayer(le.layer(),"label-border"),le.setData(ne.current.infrastructure,ne.current.lots),le.rise=w.current,M.current=le,$(!0)}).catch(()=>{});const de=Ec(1300,be=>{w.current=b+(W-b)*be,_.setPaintProperty("lots-3d","fill-extrusion-height",["*",w.current,ax]),M.current&&(M.current.rise=w.current)},()=>!G&&_.setLayoutProperty("lots-3d","visibility","none"));return()=>{X=!0,de()}},[ee,G]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee||d==null)return;_.setFeatureState({source:"territories",id:d},{hover:!0});const b=ct.current.get(d);return b==null||b.classList.add("pin-active"),()=>{te.current===_&&_.setFeatureState({source:"territories",id:d},{hover:!1}),b==null||b.classList.remove("pin-active")}},[ee,d]),Ne.useEffect(()=>{const _=te.current;if(!(!_||!ee||f==null))return _.setFeatureState({source:"lots",id:f},{hover:!0}),()=>{te.current===_&&_.setFeatureState({source:"lots",id:f},{hover:!1})}},[ee,f]),Ne.useEffect(()=>{const _=te.current;!_||!ee||xe(_)},[ee,h]),Ne.useEffect(()=>{var b;const _=te.current;if(!(!_||!ee)){if(_.setFilter("lots-selected",["==",["get","id"],c??-1]),_.setFilter("territory-ants",["==",["get","id"],c==null?u??-1:-1]),_.setFilter("infra-flow",["all",["==",["get","kind"],"line"],["==",["get","territory_id"],u??-1]]),(b=Ze.current)==null||b.remove(),Ze.current=null,c!=null){const W=o.features.find(de=>{var be;return Number((be=de.properties)==null?void 0:be.id)===c}),X=W&&Jt([W]);if(X){const[[de,be],[Q,le]]=X;Ze.current=new vn.Marker({element:lx()}).setLngLat([(de+Q)/2,(be+le)/2]).addTo(_)}}a.features.forEach(W=>_.setFeatureState({source:"territories",id:W.id},{selected:W.id===u}))}},[ee,c,u,o,a]),Ne.useEffect(()=>{const _=te.current;if(!_||!ee||V===0&&J.kind==="region")return;let b=null,W=16.5;if(J.kind==="region"){const X=t!=null?r==null?void 0:r.features.filter(de=>{var be;return Number((be=de.properties)==null?void 0:be.id)===t}):null;b=t==null&&(r!=null&&r.features.length)?Jt(r.features):X!=null&&X.length?Jt(X):Jt(a.features)}J.kind==="territory"&&(b=Jt(a.features.filter(X=>{var de;return X.id===J.id||((de=X.properties)==null?void 0:de.id)===J.id}))),J.kind==="territories"&&(b=Jt(a.features.filter(X=>{var de;return J.ids.includes(Number((de=X.properties)==null?void 0:de.id))}))),J.kind==="lot"&&(b=Jt(o.features.filter(X=>{var de;return((de=X.properties)==null?void 0:de.id)===J.id})),W=16.8),Pe.current=null,b&&J.kind==="region"&&_.once("moveend",()=>Pe.current=ur(_)),b&&_.fitBounds(b,{padding:re,maxZoom:W,duration:1600,essential:!0,curve:1.42})},[ee,V]);const ge=`${re.top},${re.right},${re.bottom},${re.left}`;return Ne.useEffect(()=>{const _=te.current;if(!_||!ee||J.kind!=="region"||_.isMoving()||Pe.current!==ur(_))return;const b=t==null&&(r!=null&&r.features.length)?Jt(r.features):Jt(a.features);b&&(Pe.current=null,_.once("moveend",()=>Pe.current=ur(_)),_.fitBounds(b,{padding:tt.current,duration:600,essential:!0}))},[ee,ge]),fs.jsx("div",{className:Au("isolate",ve??"absolute inset-0"),children:fs.jsx("div",{ref:ae,className:"h-full w-full"})})}function xn(r){return r.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}export{Ot as B,wo as C,hs as D,zt as E,W0 as H,so as I,uc as M,Mx as P,Bn as Q,ma as R,N0 as S,cu as T,yx as V,t_ as W,R0 as a,Sx as b,xu as c,Mc as d,Ii as e,ho as f,Sc as g,vx as h,Un as i,T_ as j,n_ as k,Oe as l,vc as m,xx as n,Es as o,_u as p,_n as q,I as r,_x as s,Ut as t,Be as u,br as v,Mr as w,lu as x,ou as y};
