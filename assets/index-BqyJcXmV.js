(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},qr=[],zt=()=>{},dd=()=>!1,Xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Jc=n=>n.startsWith("onUpdate:"),ut=Object.assign,Xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},b_=Object.prototype.hasOwnProperty,Ee=(n,e)=>b_.call(n,e),re=Array.isArray,Hr=n=>_i(n)==="[object Map]",pd=n=>_i(n)==="[object Set]",eh=n=>_i(n)==="[object Date]",le=n=>typeof n=="function",je=n=>typeof n=="string",xt=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",gd=n=>(Re(n)||le(n))&&le(n.then)&&le(n.catch),md=Object.prototype.toString,_i=n=>md.call(n),S_=n=>_i(n).slice(8,-1),_d=n=>_i(n)==="[object Object]",Yc=n=>je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},R_=/-\w/g,qn=Yo(n=>n.replace(R_,e=>e.slice(1).toUpperCase())),P_=/\B([A-Z])/g,wr=Yo(n=>n.replace(P_,"-$1").toLowerCase()),yd=Yo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Yo(n=>n?`on${yd(n)}`:""),xn=(n,e)=>!Object.is(n,e),io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Zc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let th;const Zo=()=>th||(th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function as(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=je(r)?D_(r):as(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(n)||Re(n))return n}const C_=/;(?![^(]*\))/g,V_=/:([^]+)/,k_=/\/\*[^]*?\*\//g;function D_(n){const e={};return n.replace(k_,"").split(C_).forEach(t=>{if(t){const r=t.split(V_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function el(n){let e="";if(je(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=el(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const N_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O_=Qc(N_);function Ed(n){return!!n||n===""}function x_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=To(n[r],e[r]);return t}function To(n,e){if(n===e)return!0;let t=eh(n),r=eh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=xt(n),r=xt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?x_(n,e):!1;if(t=Re(n),r=Re(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!To(n[a],e[a]))return!1}}return String(n)===String(e)}const Td=n=>!!(n&&n.__v_isRef===!0),Bt=n=>je(n)?n:n==null?"":re(n)||Re(n)&&(n.toString===md||!le(n.toString))?Td(n)?Bt(n.value):JSON.stringify(n,Id,2):String(n),Id=(n,e)=>Td(e)?Id(n,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[$a(r,i)+" =>"]=s,t),{})}:pd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$a(t))}:xt(e)?$a(e):Re(e)&&!re(e)&&!_d(e)?String(e):e,$a=(n,e="")=>{var t;return xt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class wd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=it;try{return it=this,e()}finally{it=t}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ad(n){return new wd(n)}function bd(){return it}function M_(n,e=!1){it&&it.cleanups.push(n)}let be;const qa=new WeakSet;class Sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nh(this),Cd(this);const e=be,t=Nt;be=this,Nt=!0;try{return this.fn()}finally{Vd(this),be=e,Nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rl(e);this.deps=this.depsTail=void 0,nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let Rd=0,qs,Hs;function Pd(n,e=!1){if(n.flags|=8,e){n.next=Hs,Hs=n;return}n.next=qs,qs=n}function tl(){Rd++}function nl(){if(--Rd>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qs;){let e=qs;for(qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Cd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),rl(r),L_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function uc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ri)||(n.globalVersion=ri,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!uc(n))))return;n.flags|=2;const e=n.dep,t=be,r=Nt;be=n,Nt=!0;try{Cd(n);const s=n.fn(n._value);(e.version===0||xn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=t,Nt=r,Vd(n),n.flags&=-3}}function rl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)rl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function L_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nt=!0;const Dd=[];function fn(){Dd.push(Nt),Nt=!1}function dn(){const n=Dd.pop();Nt=n===void 0?!0:n}function nh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=be;be=void 0;try{e()}finally{be=t}}}let ri=0;class F_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!Nt||be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==be)t=this.activeLink=new F_(be,this),be.deps?(t.prevDep=be.depsTail,be.depsTail.nextDep=t,be.depsTail=t):be.deps=be.depsTail=t,Nd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=be.depsTail,t.nextDep=void 0,be.depsTail.nextDep=t,be.depsTail=t,be.deps===t&&(be.deps=r)}return t}trigger(e){this.version++,ri++,this.notify(e)}notify(e){tl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{nl()}}}function Nd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Io=new WeakMap,fr=Symbol(""),hc=Symbol(""),si=Symbol("");function at(n,e,t){if(Nt&&be){let r=Io.get(n);r||Io.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new sl),s.map=r,s.key=t),s.track()}}function an(n,e,t,r,s,i){const a=Io.get(n);if(!a){ri++;return}const c=l=>{l&&l.trigger()};if(tl(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Yc(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===si||!xt(m)&&m>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(si)),e){case"add":l?h&&c(a.get("length")):(c(a.get(fr)),Hr(n)&&c(a.get(hc)));break;case"delete":l||(c(a.get(fr)),Hr(n)&&c(a.get(hc)));break;case"set":Hr(n)&&c(a.get(fr));break}}nl()}function U_(n,e){const t=Io.get(n);return t&&t.get(e)}function xr(n){const e=ye(n);return e===n?e:(at(e,"iterate",si),Rt(n)?e:e.map(Ye))}function ea(n){return at(n=ye(n),"iterate",si),n}const B_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,Ye)},concat(...n){return xr(this).concat(...n.map(e=>re(e)?xr(e):e))},entries(){return Ha(this,"entries",n=>(n[1]=Ye(n[1]),n))},every(n,e){return sn(this,"every",n,e,void 0,arguments)},filter(n,e){return sn(this,"filter",n,e,t=>t.map(Ye),arguments)},find(n,e){return sn(this,"find",n,e,Ye,arguments)},findIndex(n,e){return sn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return sn(this,"findLast",n,e,Ye,arguments)},findLastIndex(n,e){return sn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return sn(this,"forEach",n,e,void 0,arguments)},includes(...n){return za(this,"includes",n)},indexOf(...n){return za(this,"indexOf",n)},join(n){return xr(this).join(n)},lastIndexOf(...n){return za(this,"lastIndexOf",n)},map(n,e){return sn(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return rh(this,"reduce",n,e)},reduceRight(n,...e){return rh(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return sn(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return xr(this).toReversed()},toSorted(n){return xr(this).toSorted(n)},toSpliced(...n){return xr(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return Ha(this,"values",Ye)}};function Ha(n,e,t){const r=ea(n),s=r[e]();return r!==n&&!Rt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const j_=Array.prototype;function sn(n,e,t,r,s,i){const a=ea(n),c=a!==n&&!Rt(n),l=a[e];if(l!==j_[e]){const p=l.apply(n,i);return c?Ye(p):p}let h=t;a!==n&&(c?h=function(p,m){return t.call(this,Ye(p),m,n)}:t.length>2&&(h=function(p,m){return t.call(this,p,m,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function rh(n,e,t,r){const s=ea(n);let i=t;return s!==n&&(Rt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,Ye(c),l,n)}),s[e](i,...r)}function za(n,e,t){const r=ye(n);at(r,"iterate",si);const s=r[e](...t);return(s===-1||s===!1)&&al(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function Vs(n,e,t=[]){fn(),tl();const r=ye(n)[e].apply(n,t);return nl(),dn(),r}const $_=Qc("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xt));function q_(n){xt(n)||(n=String(n));const e=ye(this);return at(e,"has",n),e.hasOwnProperty(n)}class xd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Z_:Ud:i?Fd:Ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=B_[t]))return l;if(t==="hasOwnProperty")return q_}const c=Reflect.get(e,t,Le(e)?e:r);if((xt(t)?Od.has(t):$_(t))||(s||at(e,"get",t),i))return c;if(Le(c)){const l=a&&Yc(t)?c:c.value;return s&&Re(l)?dc(l):l}return Re(c)?s?dc(c):ta(c):c}}class Md extends xd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=Hn(i);if(!Rt(r)&&!Hn(r)&&(i=ye(i),r=ye(r)),!re(e)&&Le(i)&&!Le(r))return l||(i.value=r),!0}const a=re(e)&&Yc(t)?Number(t)<e.length:Ee(e,t),c=Reflect.set(e,t,r,Le(e)?e:s);return e===ye(s)&&(a?xn(r,i)&&an(e,"set",t,r):an(e,"add",t,r)),c}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&an(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!xt(t)||!Od.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":fr),Reflect.ownKeys(e)}}class H_ extends xd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const z_=new Md,W_=new H_,K_=new Md(!0);const fc=n=>n,Qi=n=>Reflect.getPrototypeOf(n);function G_(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),a=Hr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?fc:e?wo:Ye;return!e&&at(i,"iterate",l?hc:fr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ji(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Q_(n,e){const t={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);n||(xn(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=Qi(a),h=e?fc:n?wo:Ye;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(ye(s),"iterate",fr),s.size},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return n||(xn(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?fc:n?wo:Ye;return!n&&at(l,"iterate",fr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ut(t,n?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(s){!e&&!Rt(s)&&!Hn(s)&&(s=ye(s));const i=ye(this);return Qi(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!Rt(i)&&!Hn(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Qi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?xn(i,d)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Qi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&an(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=G_(s,n,e)}),t}function il(n,e){const t=Q_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const J_={get:il(!1,!1)},X_={get:il(!1,!0)},Y_={get:il(!0,!1)};const Ld=new WeakMap,Fd=new WeakMap,Ud=new WeakMap,Z_=new WeakMap;function ey(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ty(n){return n.__v_skip||!Object.isExtensible(n)?0:ey(S_(n))}function ta(n){return Hn(n)?n:ol(n,!1,z_,J_,Ld)}function ny(n){return ol(n,!1,K_,X_,Fd)}function dc(n){return ol(n,!0,W_,Y_,Ud)}function ol(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=ty(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function Mn(n){return Hn(n)?Mn(n.__v_raw):!!(n&&n.__v_isReactive)}function Hn(n){return!!(n&&n.__v_isReadonly)}function Rt(n){return!!(n&&n.__v_isShallow)}function al(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function cl(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&vd(n,"__v_skip",!0),n}const Ye=n=>Re(n)?ta(n):n,wo=n=>Re(n)?dc(n):n;function Le(n){return n?n.__v_isRef===!0:!1}function zs(n){return ry(n,!1)}function ry(n,e){return Le(n)?n:new sy(n,e)}class sy{constructor(e,t){this.dep=new sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Ye(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Rt(e)||Hn(e);e=r?e:ye(e),xn(e,t)&&(this._rawValue=e,this._value=r?e:Ye(e),this.dep.trigger())}}function Ce(n){return Le(n)?n.value:n}const iy={get:(n,e,t)=>e==="__v_raw"?n:Ce(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Le(s)&&!Le(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Bd(n){return Mn(n)?n:new Proxy(n,iy)}function oy(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=cy(n,t);return e}class ay{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return U_(ye(this._object),this._key)}}function cy(n,e,t){const r=n[e];return Le(r)?r:new ay(n,e,t)}class ly{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Pd(this,!0),!0}get value(){const e=this.dep.track();return kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uy(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new ly(r,s,t)}const Xi={},Ao=new WeakMap;let ar;function hy(n,e=!1,t=ar){if(t){let r=Ao.get(t);r||Ao.set(t,r=[]),r.push(n)}}function fy(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=H=>s?H:Rt(H)||s===!1||s===0?cn(H,1):cn(H);let d,p,m,w,C=!1,O=!1;if(Le(n)?(p=()=>n.value,C=Rt(n)):Mn(n)?(p=()=>h(n),C=!0):re(n)?(O=!0,C=n.some(H=>Mn(H)||Rt(H)),p=()=>n.map(H=>{if(Le(H))return H.value;if(Mn(H))return h(H);if(le(H))return l?l(H,2):H()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(m){fn();try{m()}finally{dn()}}const H=ar;ar=d;try{return l?l(n,3,[w]):n(w)}finally{ar=H}}:p=zt,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>cn(H(),oe)}const L=bd(),z=()=>{d.stop(),L&&L.active&&Xc(L.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let K=O?new Array(n.length).fill(Xi):Xi;const Q=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||C||(O?oe.some((ve,I)=>xn(ve,K[I])):xn(oe,K))){m&&m();const ve=ar;ar=d;try{const I=[oe,K===Xi?void 0:O&&K[0]===Xi?[]:K,w];K=oe,l?l(e,3,I):e(...I)}finally{ar=ve}}}else d.run()};return c&&c(Q),d=new Sd(p),d.scheduler=a?()=>a(Q,!1):Q,w=H=>hy(H,!1,d),m=d.onStop=()=>{const H=Ao.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();Ao.delete(d)}},e?r?Q(!0):K=d.run():a?a(Q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function cn(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Le(n))cn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)cn(n[r],e,t);else if(pd(n)||Hr(n))n.forEach(r=>{cn(r,e,t)});else if(_d(n)){for(const r in n)cn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&cn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(n,e,t,r){try{return r?n(...r):n()}catch(s){na(s,e,t)}}function Xt(n,e,t,r){if(le(n)){const s=yi(n,e,t,r);return s&&gd(s)&&s.catch(i=>{na(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Xt(n[i],e,t,r));return s}}function na(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){fn(),yi(i,null,10,[n,l,h]),dn();return}}dy(n,t,s,r,a)}function dy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const gt=[];let jt=-1;const zr=[];let Rn=null,Lr=0;const jd=Promise.resolve();let bo=null;function $d(n){const e=bo||jd;return n?e.then(this?n.bind(this):n):e}function py(n){let e=jt+1,t=gt.length;for(;e<t;){const r=e+t>>>1,s=gt[r],i=ii(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ll(n){if(!(n.flags&1)){const e=ii(n),t=gt[gt.length-1];!t||!(n.flags&2)&&e>=ii(t)?gt.push(n):gt.splice(py(e),0,n),n.flags|=1,qd()}}function qd(){bo||(bo=jd.then(zd))}function gy(n){re(n)?zr.push(...n):Rn&&n.id===-1?Rn.splice(Lr+1,0,n):n.flags&1||(zr.push(n),n.flags|=1),qd()}function sh(n,e,t=jt+1){for(;t<gt.length;t++){const r=gt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Hd(n){if(zr.length){const e=[...new Set(zr)].sort((t,r)=>ii(t)-ii(r));if(zr.length=0,Rn){Rn.push(...e);return}for(Rn=e,Lr=0;Lr<Rn.length;Lr++){const t=Rn[Lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rn=null,Lr=0}}const ii=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zd(n){try{for(jt=0;jt<gt.length;jt++){const e=gt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<gt.length;jt++){const e=gt[jt];e&&(e.flags&=-2)}jt=-1,gt.length=0,Hd(),bo=null,(gt.length||zr.length)&&zd()}}let lt=null,Wd=null;function So(n){const e=lt;return lt=n,Wd=n&&n.type.__scopeId||null,e}function xs(n,e=lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&ph(-1);const i=So(e);let a;try{a=n(...s)}finally{So(i),r._d&&ph(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ks(n,e){if(lt===null)return n;const t=oa(lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ae]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&cn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function ir(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(fn(),Xt(l,t,8,[n.el,c,n,e]),dn())}}const my=Symbol("_vte"),_y=n=>n.__isTeleport,yy=Symbol("_leaveCb");function ul(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ul(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vi(n,e){return le(n)?ut({name:n.name},e,{setup:n}):n}function Kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ro=new WeakMap;function Ws(n,e,t,r,s=!1){if(re(n)){n.forEach((C,O)=>Ws(C,e&&(re(e)?e[O]:e),t,r,s));return}if(Wr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?oa(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,m=ye(p),w=p===Ae?dd:C=>Ee(m,C);if(h!=null&&h!==l){if(ih(e),je(h))d[h]=null,w(h)&&(p[h]=null);else if(Le(h)){h.value=null;const C=e;C.k&&(d[C.k]=null)}}if(le(l))yi(l,c,12,[a,d]);else{const C=je(l),O=Le(l);if(C||O){const L=()=>{if(n.f){const z=C?w(l)?p[l]:d[l]:l.value;if(s)re(z)&&Xc(z,i);else if(re(z))z.includes(i)||z.push(i);else if(C)d[l]=[i],w(l)&&(p[l]=d[l]);else{const K=[i];l.value=K,n.k&&(d[n.k]=K)}}else C?(d[l]=a,w(l)&&(p[l]=a)):O&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const z=()=>{L(),Ro.delete(n)};z.id=-1,Ro.set(n,z),Et(z,t)}else ih(n),L()}}}function ih(n){const e=Ro.get(n);e&&(e.flags|=8,Ro.delete(n))}Zo().requestIdleCallback;Zo().cancelIdleCallback;const Wr=n=>!!n.type.__asyncLoader,Gd=n=>n.type.__isKeepAlive;function vy(n,e){Qd(n,"a",e)}function Ey(n,e){Qd(n,"da",e)}function Qd(n,e,t=mt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ra(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Gd(s.parent.vnode)&&Ty(r,e,t,s),s=s.parent}}function Ty(n,e,t,r){const s=ra(e,n,r,!0);Jd(()=>{Xc(r[e],s)},t)}function ra(n,e,t=mt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{fn();const c=Ei(t),l=Xt(e,t,n,a);return c(),dn(),l});return r?s.unshift(i):s.push(i),i}}const vn=n=>(e,t=mt)=>{(!ai||n==="sp")&&ra(n,(...r)=>e(...r),t)},Iy=vn("bm"),wy=vn("m"),Ay=vn("bu"),by=vn("u"),Sy=vn("bum"),Jd=vn("um"),Ry=vn("sp"),Py=vn("rtg"),Cy=vn("rtc");function Vy(n,e=mt){ra("ec",n,e)}const ky=Symbol.for("v-ndc");function Cn(n,e,t,r){let s;const i=t,a=re(n);if(a||je(n)){const c=a&&Mn(n);let l=!1,h=!1;c&&(l=!Rt(n),h=Hn(n),n=ea(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?wo(Ye(n[d])):Ye(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function oo(n,e,t={},r,s){if(lt.ce||lt.parent&&Wr(lt.parent)&&lt.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),de(),Vn(Ne,null,[It("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),de();const a=i&&Xd(i(t)),c=t.key||a&&a.key,l=Vn(Ne,{key:(c&&!xt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Xd(n){return n.some(e=>dl(e)?!(e.type===pn||e.type===Ne&&!Xd(e.children)):!0)?n:null}const pc=n=>n?yp(n)?oa(n):pc(n.parent):null,Ks=ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pc(n.parent),$root:n=>pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Zd(n),$forceUpdate:n=>n.f||(n.f=()=>{ll(n.update)}),$nextTick:n=>n.n||(n.n=$d.bind(n.proxy)),$watch:n=>ev.bind(n)}),Wa=(n,e)=>n!==Ae&&!n.__isScriptSetup&&Ee(n,e),Dy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Wa(r,e))return a[e]=1,r[e];if(s!==Ae&&Ee(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];gc&&(a[e]=0)}}const d=Ks[e];let p,m;if(d)return e==="$attrs"&&at(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];if(m=l.config.globalProperties,Ee(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Wa(s,e)?(s[e]=t,!0):r!==Ae&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(t[c]||n!==Ae&&c[0]!=="$"&&Ee(n,c)||Wa(e,c)||(l=i[0])&&Ee(l,c)||Ee(r,c)||Ee(Ks,c)||Ee(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function oh(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let gc=!0;function Ny(n){const e=Zd(n),t=n.proxy,r=n.ctx;gc=!1,e.beforeCreate&&ah(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:w,updated:C,activated:O,deactivated:L,beforeDestroy:z,beforeUnmount:K,destroyed:Q,unmounted:H,render:oe,renderTracked:ve,renderTriggered:I,errorCaptured:_,serverPrefetch:y,expose:T,inheritAttrs:A,components:S,directives:E,filters:ft}=e;if(h&&Oy(h,r,null),a)for(const ae in a){const me=a[ae];le(me)&&(r[ae]=me.bind(t))}if(s){const ae=s.call(t,t);Re(ae)&&(n.data=ta(ae))}if(gc=!0,i)for(const ae in i){const me=i[ae],Pt=le(me)?me.bind(t,t):le(me.get)?me.get.bind(t,t):zt,Yn=!le(me)&&le(me.set)?me.set.bind(t):zt,en=Kr({get:Pt,set:Yn});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>en.value,set:$e=>en.value=$e})}if(c)for(const ae in c)Yd(c[ae],r,t,ae);if(l){const ae=le(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(me=>{By(me,ae[me])})}d&&ah(d,n,"c");function De(ae,me){re(me)?me.forEach(Pt=>ae(Pt.bind(t))):me&&ae(me.bind(t))}if(De(Iy,p),De(wy,m),De(Ay,w),De(by,C),De(vy,O),De(Ey,L),De(Vy,_),De(Cy,ve),De(Py,I),De(Sy,K),De(Jd,H),De(Ry,y),re(T))if(T.length){const ae=n.exposed||(n.exposed={});T.forEach(me=>{Object.defineProperty(ae,me,{get:()=>t[me],set:Pt=>t[me]=Pt,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===zt&&(n.render=oe),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),E&&(n.directives=E),y&&Kd(n)}function Oy(n,e,t=zt){re(n)&&(n=mc(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=Gs(s.from||r,s.default,!0):i=Gs(s.from||r):i=Gs(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ah(n,e,t){Xt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Yd(n,e,t,r){let s=r.includes(".")?fp(t,r):()=>t[r];if(je(n)){const i=e[n];le(i)&&ao(s,i)}else if(le(n))ao(s,n.bind(t));else if(Re(n))if(re(n))n.forEach(i=>Yd(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&ao(s,i,n)}}function Zd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,a,!0)),Po(l,e,a)),Re(e)&&i.set(e,l),l}function Po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Po(n,i,t,!0),s&&s.forEach(a=>Po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=xy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const xy={data:ch,props:lh,emits:lh,methods:Ms,computed:Ms,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Ms,directives:Ms,watch:Ly,provide:ch,inject:My};function ch(n,e){return e?n?function(){return ut(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function My(n,e){return Ms(mc(n),mc(e))}function mc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ms(n,e){return n?ut(Object.create(null),n,e):e}function lh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:ut(Object.create(null),oh(n),oh(e??{})):e}function Ly(n,e){if(!n)return e;if(!e)return n;const t=ut(Object.create(null),n);for(const r in e)t[r]=pt(n[r],e[r]);return t}function ep(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fy=0;function Uy(n,e){return function(r,s=null){le(r)||(r=ut({},r)),s!=null&&!Re(s)&&(s=null);const i=ep(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Fy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Tv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const w=h._ceVNode||It(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(w,d,m),l=!0,h._container=d,d.__vue_app__=h,oa(w.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Xt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=dr;dr=h;try{return d()}finally{dr=p}}};return h}}let dr=null;function By(n,e){if(mt){let t=mt.provides;const r=mt.parent&&mt.parent.provides;r===t&&(t=mt.provides=Object.create(r)),t[n]=e}}function Gs(n,e,t=!1){const r=_p();if(r||dr){let s=dr?dr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function jy(){return!!(_p()||dr)}const tp={},np=()=>Object.create(tp),rp=n=>Object.getPrototypeOf(n)===tp;function $y(n,e,t,r=!1){const s={},i=np();n.propsDefaults=Object.create(null),sp(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:ny(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function qy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ye(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(sa(n.emitsOptions,m))continue;const w=e[m];if(l)if(Ee(i,m))w!==i[m]&&(i[m]=w,h=!0);else{const C=qn(m);s[C]=_c(l,c,C,w,n,!1)}else w!==i[m]&&(i[m]=w,h=!0)}}}else{sp(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=wr(p))===p||!Ee(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=_c(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&an(n.attrs,"set","")}function sp(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if($s(l))continue;const h=e[l];let d;s&&Ee(s,d=qn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:sa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(t),h=c||Ae;for(let d=0;d<i.length;d++){const p=i[d];t[p]=_c(s,l,p,h[p],n,!Ee(h,p))}}return a}function _c(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Ei(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===wr(t))&&(r=!0))}return r}const Hy=new WeakMap;function ip(n,e,t=!1){const r=t?Hy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[m,w]=ip(p,e,!0);ut(a,m),w&&c.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Re(n)&&r.set(n,qr),qr;if(re(i))for(let d=0;d<i.length;d++){const p=qn(i[d]);uh(p)&&(a[p]=Ae)}else if(i)for(const d in i){const p=qn(d);if(uh(p)){const m=i[d],w=a[p]=re(m)||le(m)?{type:m}:ut({},m),C=w.type;let O=!1,L=!0;if(re(C))for(let z=0;z<C.length;++z){const K=C[z],Q=le(K)&&K.name;if(Q==="Boolean"){O=!0;break}else Q==="String"&&(L=!1)}else O=le(C)&&C.name==="Boolean";w[0]=O,w[1]=L,(O||Ee(w,"default"))&&c.push(p)}}const h=[a,c];return Re(n)&&r.set(n,h),h}function uh(n){return n[0]!=="$"&&!$s(n)}const hl=n=>n==="_"||n==="_ctx"||n==="$stable",fl=n=>re(n)?n.map(qt):[qt(n)],zy=(n,e,t)=>{if(e._n)return e;const r=xs((...s)=>fl(e(...s)),t);return r._c=!1,r},op=(n,e,t)=>{const r=n._ctx;for(const s in n){if(hl(s))continue;const i=n[s];if(le(i))e[s]=zy(s,i,r);else if(i!=null){const a=fl(i);e[s]=()=>a}}},ap=(n,e)=>{const t=fl(e);n.slots.default=()=>t},cp=(n,e,t)=>{for(const r in e)(t||!hl(r))&&(n[r]=e[r])},Wy=(n,e,t)=>{const r=n.slots=np();if(n.vnode.shapeFlag&32){const s=e._;s?(cp(r,e,t),t&&vd(r,"_",s,!0)):op(e,r)}else e&&ap(n,e)},Ky=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:cp(s,e,t):(i=!e.$stable,op(e,s)),a=e}else e&&(ap(n,e),a={default:1});if(i)for(const c in s)!hl(c)&&a[c]==null&&delete s[c]},Et=cv;function Gy(n){return Qy(n)}function Qy(n,e){const t=Zo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:w=zt,insertStaticContent:C}=n,O=(v,b,V,F=null,N=null,x=null,$=void 0,B=null,U=!!b.dynamicChildren)=>{if(v===b)return;v&&!Ds(v,b)&&(F=tn(v),$e(v,N,x,!0),v=null),b.patchFlag===-2&&(U=!1,b.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:q}=b;switch(M){case ia:L(v,b,V,F);break;case pn:z(v,b,V,F);break;case Ga:v==null&&K(b,V,F,$);break;case Ne:S(v,b,V,F,N,x,$,B,U);break;default:q&1?oe(v,b,V,F,N,x,$,B,U):q&6?E(v,b,V,F,N,x,$,B,U):(q&64||q&128)&&M.process(v,b,V,F,N,x,$,B,U,Ft)}Y!=null&&N?Ws(Y,v&&v.ref,x,b||v,!b):Y==null&&v&&v.ref!=null&&Ws(v.ref,null,x,v,!0)},L=(v,b,V,F)=>{if(v==null)r(b.el=c(b.children),V,F);else{const N=b.el=v.el;b.children!==v.children&&h(N,b.children)}},z=(v,b,V,F)=>{v==null?r(b.el=l(b.children||""),V,F):b.el=v.el},K=(v,b,V,F)=>{[v.el,v.anchor]=C(v.children,b,V,F,v.el,v.anchor)},Q=({el:v,anchor:b},V,F)=>{let N;for(;v&&v!==b;)N=m(v),r(v,V,F),v=N;r(b,V,F)},H=({el:v,anchor:b})=>{let V;for(;v&&v!==b;)V=m(v),s(v),v=V;s(b)},oe=(v,b,V,F,N,x,$,B,U)=>{if(b.type==="svg"?$="svg":b.type==="math"&&($="mathml"),v==null)ve(b,V,F,N,x,$,B,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,b,N,x,$,B,U)}finally{M&&M._endPatch()}}},ve=(v,b,V,F,N,x,$,B)=>{let U,M;const{props:Y,shapeFlag:q,transition:J,dirs:te}=v;if(U=v.el=a(v.type,x,Y&&Y.is,Y),q&8?d(U,v.children):q&16&&_(v.children,U,null,F,N,Ka(v,x),$,B),te&&ir(v,null,F,"created"),I(U,v,v.scopeId,$,F),Y){for(const ce in Y)ce!=="value"&&!$s(ce)&&i(U,ce,null,Y[ce],x,F);"value"in Y&&i(U,"value",null,Y.value,x),(M=Y.onVnodeBeforeMount)&&Ut(M,F,v)}te&&ir(v,null,F,"beforeMount");const Z=Jy(N,J);Z&&J.beforeEnter(U),r(U,b,V),((M=Y&&Y.onVnodeMounted)||Z||te)&&Et(()=>{M&&Ut(M,F,v),Z&&J.enter(U),te&&ir(v,null,F,"mounted")},N)},I=(v,b,V,F,N)=>{if(V&&w(v,V),F)for(let x=0;x<F.length;x++)w(v,F[x]);if(N){let x=N.subTree;if(b===x||pp(x.type)&&(x.ssContent===b||x.ssFallback===b)){const $=N.vnode;I(v,$,$.scopeId,$.slotScopeIds,N.parent)}}},_=(v,b,V,F,N,x,$,B,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=B?Pn(v[M]):qt(v[M]);O(null,Y,b,V,F,N,x,$,B)}},y=(v,b,V,F,N,x,$)=>{const B=b.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=b;U|=v.patchFlag&16;const q=v.props||Ae,J=b.props||Ae;let te;if(V&&or(V,!1),(te=J.onVnodeBeforeUpdate)&&Ut(te,V,b,v),Y&&ir(b,v,V,"beforeUpdate"),V&&or(V,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(B,""),M?T(v.dynamicChildren,M,B,V,F,Ka(b,N),x):$||me(v,b,B,null,V,F,Ka(b,N),x,!1),U>0){if(U&16)A(B,q,J,V,N);else if(U&2&&q.class!==J.class&&i(B,"class",null,J.class,N),U&4&&i(B,"style",q.style,J.style,N),U&8){const Z=b.dynamicProps;for(let ce=0;ce<Z.length;ce++){const pe=Z[ce],Ke=q[pe],Ge=J[pe];(Ge!==Ke||pe==="value")&&i(B,pe,Ke,Ge,N,V)}}U&1&&v.children!==b.children&&d(B,b.children)}else!$&&M==null&&A(B,q,J,V,N);((te=J.onVnodeUpdated)||Y)&&Et(()=>{te&&Ut(te,V,b,v),Y&&ir(b,v,V,"updated")},F)},T=(v,b,V,F,N,x,$)=>{for(let B=0;B<b.length;B++){const U=v[B],M=b[B],Y=U.el&&(U.type===Ne||!Ds(U,M)||U.shapeFlag&198)?p(U.el):V;O(U,M,Y,null,F,N,x,$,!0)}},A=(v,b,V,F,N)=>{if(b!==V){if(b!==Ae)for(const x in b)!$s(x)&&!(x in V)&&i(v,x,b[x],null,N,F);for(const x in V){if($s(x))continue;const $=V[x],B=b[x];$!==B&&x!=="value"&&i(v,x,B,$,N,F)}"value"in V&&i(v,"value",b.value,V.value,N)}},S=(v,b,V,F,N,x,$,B,U)=>{const M=b.el=v?v.el:c(""),Y=b.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:te}=b;te&&(B=B?B.concat(te):te),v==null?(r(M,V,F),r(Y,V,F),_(b.children||[],V,Y,N,x,$,B,U)):q>0&&q&64&&J&&v.dynamicChildren?(T(v.dynamicChildren,J,V,N,x,$,B),(b.key!=null||N&&b===N.subTree)&&lp(v,b,!0)):me(v,b,V,Y,N,x,$,B,U)},E=(v,b,V,F,N,x,$,B,U)=>{b.slotScopeIds=B,v==null?b.shapeFlag&512?N.ctx.activate(b,V,F,$,U):ft(b,V,F,N,x,$,U):Lt(v,b,U)},ft=(v,b,V,F,N,x,$)=>{const B=v.component=gv(v,F,N);if(Gd(v)&&(B.ctx.renderer=Ft),mv(B,!1,$),B.asyncDep){if(N&&N.registerDep(B,De,$),!v.el){const U=B.subTree=It(pn);z(null,U,b,V),v.placeholder=U.el}}else De(B,v,b,V,N,x,$)},Lt=(v,b,V)=>{const F=b.component=v.component;if(ov(v,b,V))if(F.asyncDep&&!F.asyncResolved){ae(F,b,V);return}else F.next=b,F.update();else b.el=v.el,F.vnode=b},De=(v,b,V,F,N,x,$)=>{const B=()=>{if(v.isMounted){let{next:q,bu:J,u:te,parent:Z,vnode:ce}=v;{const tt=up(v);if(tt){q&&(q.el=ce.el,ae(v,q,$)),tt.asyncDep.then(()=>{v.isUnmounted||B()});return}}let pe=q,Ke;or(v,!1),q?(q.el=ce.el,ae(v,q,$)):q=ce,J&&io(J),(Ke=q.props&&q.props.onVnodeBeforeUpdate)&&Ut(Ke,Z,q,ce),or(v,!0);const Ge=fh(v),wt=v.subTree;v.subTree=Ge,O(wt,Ge,p(wt.el),tn(wt),v,N,x),q.el=Ge.el,pe===null&&av(v,Ge.el),te&&Et(te,N),(Ke=q.props&&q.props.onVnodeUpdated)&&Et(()=>Ut(Ke,Z,q,ce),N)}else{let q;const{el:J,props:te}=b,{bm:Z,m:ce,parent:pe,root:Ke,type:Ge}=v,wt=Wr(b);or(v,!1),Z&&io(Z),!wt&&(q=te&&te.onVnodeBeforeMount)&&Ut(q,pe,b),or(v,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(Ge);const tt=v.subTree=fh(v);O(null,tt,V,F,v,N,x),b.el=tt.el}if(ce&&Et(ce,N),!wt&&(q=te&&te.onVnodeMounted)){const tt=b;Et(()=>Ut(q,pe,tt),N)}(b.shapeFlag&256||pe&&Wr(pe.vnode)&&pe.vnode.shapeFlag&256)&&v.a&&Et(v.a,N),v.isMounted=!0,b=V=F=null}};v.scope.on();const U=v.effect=new Sd(B);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>ll(Y),or(v,!0),M()},ae=(v,b,V)=>{b.component=v;const F=v.vnode.props;v.vnode=b,v.next=null,qy(v,b.props,F,V),Ky(v,b.children,V),fn(),sh(v),dn()},me=(v,b,V,F,N,x,$,B,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,q=b.children,{patchFlag:J,shapeFlag:te}=b;if(J>0){if(J&128){Yn(M,q,V,F,N,x,$,B,U);return}else if(J&256){Pt(M,q,V,F,N,x,$,B,U);return}}te&8?(Y&16&&er(M,N,x),q!==M&&d(V,q)):Y&16?te&16?Yn(M,q,V,F,N,x,$,B,U):er(M,N,x,!0):(Y&8&&d(V,""),te&16&&_(q,V,F,N,x,$,B,U))},Pt=(v,b,V,F,N,x,$,B,U)=>{v=v||qr,b=b||qr;const M=v.length,Y=b.length,q=Math.min(M,Y);let J;for(J=0;J<q;J++){const te=b[J]=U?Pn(b[J]):qt(b[J]);O(v[J],te,V,null,N,x,$,B,U)}M>Y?er(v,N,x,!0,!1,q):_(b,V,F,N,x,$,B,U,q)},Yn=(v,b,V,F,N,x,$,B,U)=>{let M=0;const Y=b.length;let q=v.length-1,J=Y-1;for(;M<=q&&M<=J;){const te=v[M],Z=b[M]=U?Pn(b[M]):qt(b[M]);if(Ds(te,Z))O(te,Z,V,null,N,x,$,B,U);else break;M++}for(;M<=q&&M<=J;){const te=v[q],Z=b[J]=U?Pn(b[J]):qt(b[J]);if(Ds(te,Z))O(te,Z,V,null,N,x,$,B,U);else break;q--,J--}if(M>q){if(M<=J){const te=J+1,Z=te<Y?b[te].el:F;for(;M<=J;)O(null,b[M]=U?Pn(b[M]):qt(b[M]),V,Z,N,x,$,B,U),M++}}else if(M>J)for(;M<=q;)$e(v[M],N,x,!0),M++;else{const te=M,Z=M,ce=new Map;for(M=Z;M<=J;M++){const Qe=b[M]=U?Pn(b[M]):qt(b[M]);Qe.key!=null&&ce.set(Qe.key,M)}let pe,Ke=0;const Ge=J-Z+1;let wt=!1,tt=0;const Tn=new Array(Ge);for(M=0;M<Ge;M++)Tn[M]=0;for(M=te;M<=q;M++){const Qe=v[M];if(Ke>=Ge){$e(Qe,N,x,!0);continue}let At;if(Qe.key!=null)At=ce.get(Qe.key);else for(pe=Z;pe<=J;pe++)if(Tn[pe-Z]===0&&Ds(Qe,b[pe])){At=pe;break}At===void 0?$e(Qe,N,x,!0):(Tn[At-Z]=M+1,At>=tt?tt=At:wt=!0,O(Qe,b[At],V,null,N,x,$,B,U),Ke++)}const _s=wt?Xy(Tn):qr;for(pe=_s.length-1,M=Ge-1;M>=0;M--){const Qe=Z+M,At=b[Qe],Ni=b[Qe+1],Vr=Qe+1<Y?Ni.el||Ni.placeholder:F;Tn[M]===0?O(null,At,V,Vr,N,x,$,B,U):wt&&(pe<0||M!==_s[pe]?en(At,V,Vr,2):pe--)}}},en=(v,b,V,F,N=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:M}=v;if(M&6){en(v.component.subTree,b,V,F);return}if(M&128){v.suspense.move(b,V,F);return}if(M&64){$.move(v,b,V,Ft);return}if($===Ne){r(x,b,V);for(let q=0;q<U.length;q++)en(U[q],b,V,F);r(v.anchor,b,V);return}if($===Ga){Q(v,b,V);return}if(F!==2&&M&1&&B)if(F===0)B.beforeEnter(x),r(x,b,V),Et(()=>B.enter(x),N);else{const{leave:q,delayLeave:J,afterLeave:te}=B,Z=()=>{v.ctx.isUnmounted?s(x):r(x,b,V)},ce=()=>{x._isLeaving&&x[yy](!0),q(x,()=>{Z(),te&&te()})};J?J(x,Z,ce):ce()}else r(x,b,V)},$e=(v,b,V,F=!1,N=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:te}=v;if(q===-2&&(N=!1),B!=null&&(fn(),Ws(B,null,V,v,!0),dn()),te!=null&&(b.renderCache[te]=void 0),Y&256){b.ctx.deactivate(v);return}const Z=Y&1&&J,ce=!Wr(v);let pe;if(ce&&(pe=$&&$.onVnodeBeforeUnmount)&&Ut(pe,b,v),Y&6)Zn(v.component,V,F);else{if(Y&128){v.suspense.unmount(V,F);return}Z&&ir(v,null,b,"beforeUnmount"),Y&64?v.type.remove(v,b,V,Ft,F):M&&!M.hasOnce&&(x!==Ne||q>0&&q&64)?er(M,b,V,!1,!0):(x===Ne&&q&384||!N&&Y&16)&&er(U,b,V),F&&qe(v)}(ce&&(pe=$&&$.onVnodeUnmounted)||Z)&&Et(()=>{pe&&Ut(pe,b,v),Z&&ir(v,null,b,"unmounted")},V)},qe=v=>{const{type:b,el:V,anchor:F,transition:N}=v;if(b===Ne){Sa(V,F);return}if(b===Ga){H(v);return}const x=()=>{s(V),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:B}=N,U=()=>$(V,x);B?B(v.el,x,U):U()}else x()},Sa=(v,b)=>{let V;for(;v!==b;)V=m(v),s(v),v=V;s(b)},Zn=(v,b,V)=>{const{bum:F,scope:N,job:x,subTree:$,um:B,m:U,a:M}=v;hh(U),hh(M),F&&io(F),N.stop(),x&&(x.flags|=8,$e($,v,b,V)),B&&Et(B,b),Et(()=>{v.isUnmounted=!0},b)},er=(v,b,V,F=!1,N=!1,x=0)=>{for(let $=x;$<v.length;$++)$e(v[$],b,V,F,N)},tn=v=>{if(v.shapeFlag&6)return tn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=m(v.anchor||v.el),V=b&&b[my];return V?m(V):b};let gs=!1;const Di=(v,b,V)=>{v==null?b._vnode&&$e(b._vnode,null,null,!0):O(b._vnode||null,v,b,null,null,null,V),b._vnode=v,gs||(gs=!0,sh(),Hd(),gs=!1)},Ft={p:O,um:$e,m:en,r:qe,mt:ft,mc:_,pc:me,pbc:T,n:tn,o:n};return{render:Di,hydrate:void 0,createApp:Uy(Di)}}function Ka({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Jy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function lp(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Pn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&lp(a,c)),c.type===ia&&c.patchFlag!==-1&&(c.el=a.el),c.type===pn&&!c.el&&(c.el=a.el)}}function Xy(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function up(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:up(e)}function hh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Yy=Symbol.for("v-scx"),Zy=()=>Gs(Yy);function ao(n,e,t){return hp(n,e,t)}function hp(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,c=ut({},t),l=e&&r||!e&&i!=="post";let h;if(ai){if(i==="sync"){const w=Zy();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!l){const w=()=>{};return w.stop=zt,w.resume=zt,w.pause=zt,w}}const d=mt;c.call=(w,C,O)=>Xt(w,d,C,O);let p=!1;i==="post"?c.scheduler=w=>{Et(w,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(w,C)=>{C?w():ll(w)}),c.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const m=fy(n,e,c);return ai&&(h?h.push(m):l&&m()),m}function ev(n,e,t){const r=this.proxy,s=je(n)?n.includes(".")?fp(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Ei(this),c=hp(s,i.bind(r),t);return a(),c}function fp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const tv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${qn(e)}Modifiers`]||n[`${wr(e)}Modifiers`];function nv(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&tv(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>je(d)?d.trim():d)),a.number&&(s=t.map(Zc)));let c,l=r[c=ja(e)]||r[c=ja(qn(e))];!l&&i&&(l=r[c=ja(wr(e))]),l&&Xt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Xt(h,n,6,s)}}const rv=new WeakMap;function dp(n,e,t=!1){const r=t?rv:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=dp(h,e,!0);d&&(c=!0,ut(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Re(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):ut(a,i),Re(n)&&r.set(n,a),a)}function sa(n,e){return!n||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,wr(e))||Ee(n,e))}function fh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:w,ctx:C,inheritAttrs:O}=n,L=So(n);let z,K;try{if(t.shapeFlag&4){const H=s||r,oe=H;z=qt(h.call(oe,H,d,p,w,m,C)),K=c}else{const H=e;z=qt(H.length>1?H(p,{attrs:c,slots:a,emit:l}):H(p,null)),K=e.props?c:sv(c)}}catch(H){Qs.length=0,na(H,n,1),z=It(pn)}let Q=z;if(K&&O!==!1){const H=Object.keys(K),{shapeFlag:oe}=Q;H.length&&oe&7&&(i&&H.some(Jc)&&(K=iv(K,i)),Q=Zr(Q,K,!1,!0))}return t.dirs&&(Q=Zr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&ul(Q,t.transition),z=Q,So(L),z}const sv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=n[t]);return e},iv=(n,e)=>{const t={};for(const r in n)(!Jc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function ov(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?dh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!sa(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?dh(r,a,h):!0:!!a;return!1}function dh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!sa(t,i))return!0}return!1}function av({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const pp=n=>n.__isSuspense;function cv(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):gy(n)}const Ne=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),Qs=[];let Tt=null;function de(n=!1){Qs.push(Tt=n?null:[])}function lv(){Qs.pop(),Tt=Qs[Qs.length-1]||null}let oi=1;function ph(n,e=!1){oi+=n,n<0&&Tt&&e&&(Tt.hasOnce=!0)}function gp(n){return n.dynamicChildren=oi>0?Tt||qr:null,lv(),oi>0&&Tt&&Tt.push(n),n}function we(n,e,t,r,s,i){return gp(Ve(n,e,t,r,s,i,!0))}function Vn(n,e,t,r,s){return gp(It(n,e,t,r,s,!0))}function dl(n){return n?n.__v_isVNode===!0:!1}function Ds(n,e){return n.type===e.type&&n.key===e.key}const mp=({key:n})=>n??null,co=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?je(n)||Le(n)||le(n)?{i:lt,r:n,k:e,f:!!t}:n:null);function Ve(n,e=null,t=null,r=0,s=null,i=n===Ne?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&mp(e),ref:e&&co(e),scopeId:Wd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(pl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=je(t)?8:16),oi>0&&!a&&Tt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Tt.push(l),l}const It=uv;function uv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ky)&&(n=pn),dl(n)){const c=Zr(n,e,!0);return t&&pl(c,t),oi>0&&!i&&Tt&&(c.shapeFlag&6?Tt[Tt.indexOf(n)]=c:Tt.push(c)),c.patchFlag=-2,c}if(Ev(n)&&(n=n.__vccOpts),e){e=hv(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=el(c)),Re(l)&&(al(l)&&!re(l)&&(l=ut({},l)),e.style=as(l))}const a=je(n)?1:pp(n)?128:_y(n)?64:Re(n)?4:le(n)?2:0;return Ve(n,e,t,r,s,a,i,!0)}function hv(n){return n?al(n)||rp(n)?ut({},n):n:null}function Zr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?fv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&mp(h),ref:e&&e.ref?t&&i?re(i)?i.concat(co(e)):[i,co(e)]:co(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ne?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zr(n.ssContent),ssFallback:n.ssFallback&&Zr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&ul(d,l.clone(d)),d}function Ls(n=" ",e=0){return It(ia,null,n,e)}function $r(n="",e=!1){return e?(de(),Vn(pn,null,n)):It(pn,null,n)}function qt(n){return n==null||typeof n=="boolean"?It(pn):re(n)?It(Ne,null,n.slice()):dl(n)?Pn(n):It(ia,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zr(n)}function pl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!rp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},t=32):(e=String(e),r&64?(t=16,e=[Ls(e)]):t=8);n.children=e,n.shapeFlag|=t}function fv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=el([e.class,r.class]));else if(s==="style")e.style=as([e.style,r.style]);else if(Xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ut(n,e,t,r=null){Xt(n,e,7,[t,r])}const dv=ep();let pv=0;function gv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||dv,i={uid:pv++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(r,s),emitsOptions:dp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nv.bind(null,i),n.ce&&n.ce(i),i}let mt=null;const _p=()=>mt||lt;let Co,yc;{const n=Zo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",t=>mt=t),yc=e("__VUE_SSR_SETTERS__",t=>ai=t)}const Ei=n=>{const e=mt;return Co(n),n.scope.on(),()=>{n.scope.off(),Co(e)}},gh=()=>{mt&&mt.scope.off(),Co(null)};function yp(n){return n.vnode.shapeFlag&4}let ai=!1;function mv(n,e=!1,t=!1){e&&yc(e);const{props:r,children:s}=n.vnode,i=yp(n);$y(n,r,i,e),Wy(n,s,t||e);const a=i?_v(n,e):void 0;return e&&yc(!1),a}function _v(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Dy);const{setup:r}=t;if(r){fn();const s=n.setupContext=r.length>1?vv(n):null,i=Ei(n),a=yi(r,n,0,[n.props,s]),c=gd(a);if(dn(),i(),(c||n.sp)&&!Wr(n)&&Kd(n),c){if(a.then(gh,gh),e)return a.then(l=>{mh(n,l)}).catch(l=>{na(l,n,0)});n.asyncDep=a}else mh(n,a)}else vp(n)}function mh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=Bd(e)),vp(n)}function vp(n,e,t){const r=n.type;n.render||(n.render=r.render||zt);{const s=Ei(n);fn();try{Ny(n)}finally{dn(),s()}}}const yv={get(n,e){return at(n,"get",""),n[e]}};function vv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,yv),slots:n.slots,emit:n.emit,expose:e}}function oa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bd(cl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function Ev(n){return le(n)&&"__vccOpts"in n}const Kr=(n,e)=>uy(n,e,ai),Tv="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vc;const _h=typeof window<"u"&&window.trustedTypes;if(_h)try{vc=_h.createPolicy("vue",{createHTML:n=>n})}catch{}const Ep=vc?n=>vc.createHTML(n):n=>n,Iv="http://www.w3.org/2000/svg",wv="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,yh=on&&on.createElement("template"),Av={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?on.createElementNS(Iv,n):e==="mathml"?on.createElementNS(wv,n):t?on.createElement(n,{is:t}):on.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>on.createTextNode(n),createComment:n=>on.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>on.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{yh.innerHTML=Ep(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=yh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bv=Symbol("_vtc");function Sv(n,e,t){const r=n[bv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const vh=Symbol("_vod"),Rv=Symbol("_vsh"),Pv=Symbol(""),Cv=/(?:^|;)\s*display\s*:/;function Vv(n,e,t){const r=n.style,s=je(t);let i=!1;if(t&&!s){if(e)if(je(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&lo(r,c,"")}else for(const a in e)t[a]==null&&lo(r,a,"");for(const a in t)a==="display"&&(i=!0),lo(r,a,t[a])}else if(s){if(e!==t){const a=r[Pv];a&&(t+=";"+a),r.cssText=t,i=Cv.test(t)}}else e&&n.removeAttribute("style");vh in n&&(n[vh]=i?r.display:"",n[Rv]&&(r.display="none"))}const Eh=/\s*!important$/;function lo(n,e,t){if(re(t))t.forEach(r=>lo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=kv(n,e);Eh.test(t)?n.setProperty(wr(r),t.replace(Eh,""),"important"):n[r]=t}}const Th=["Webkit","Moz","ms"],Qa={};function kv(n,e){const t=Qa[e];if(t)return t;let r=qn(e);if(r!=="filter"&&r in n)return Qa[e]=r;r=yd(r);for(let s=0;s<Th.length;s++){const i=Th[s]+r;if(i in n)return Qa[e]=i}return e}const Ih="http://www.w3.org/1999/xlink";function wh(n,e,t,r,s,i=O_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ih,e.slice(6,e.length)):n.setAttributeNS(Ih,e,t):t==null||i&&!Ed(t)?n.removeAttribute(e):n.setAttribute(e,i?"":xt(t)?String(t):t)}function Ah(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ep(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ed(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function lr(n,e,t,r){n.addEventListener(e,t,r)}function Dv(n,e,t,r){n.removeEventListener(e,t,r)}const bh=Symbol("_vei");function Nv(n,e,t,r,s=null){const i=n[bh]||(n[bh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Ov(e);if(r){const h=i[e]=Lv(r,s);lr(n,c,h,l)}else a&&(Dv(n,c,a,l),i[e]=void 0)}}const Sh=/(?:Once|Passive|Capture)$/;function Ov(n){let e;if(Sh.test(n)){e={};let r;for(;r=n.match(Sh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wr(n.slice(2)),e]}let Ja=0;const xv=Promise.resolve(),Mv=()=>Ja||(xv.then(()=>Ja=0),Ja=Date.now());function Lv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Xt(Fv(r,t.value),e,5,[r])};return t.value=n,t.attached=Mv(),t}function Fv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Rh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Uv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Sv(n,r,a):e==="style"?Vv(n,t,r):Xo(e)?Jc(e)||Nv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(n,e,r,a))?(Ah(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!je(r))?Ah(n,qn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),wh(n,e,r,a))};function Bv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rh(e)&&je(t)?!1:e in n}const Vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>io(e,t):e};function jv(n){n.target.composing=!0}function Ph(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gr=Symbol("_assign");function Ch(n,e,t){return e&&(n=n.trim()),t&&(n=Zc(n)),n}const $v={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Gr]=Vo(s);const i=r||s.props&&s.props.type==="number";lr(n,e?"change":"input",a=>{a.target.composing||n[Gr](Ch(n.value,t,i))}),(t||i)&&lr(n,"change",()=>{n.value=Ch(n.value,t,i)}),e||(lr(n,"compositionstart",jv),lr(n,"compositionend",Ph),lr(n,"change",Ph))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Gr]=Vo(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Zc(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Yi={created(n,{value:e},t){n.checked=To(e,t.props.value),n[Gr]=Vo(t),lr(n,"change",()=>{n[Gr](qv(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Gr]=Vo(r),e!==t&&(n.checked=To(e,r.props.value))}};function qv(n){return"_value"in n?n._value:n.value}const Hv=ut({patchProp:Uv},Av);let Vh;function zv(){return Vh||(Vh=Gy(Hv))}const Wv=((...n)=>{const e=zv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Gv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Kv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Kv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Gv(n){return je(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Tp;const aa=n=>Tp=n,Ip=Symbol();function Ec(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Js;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Js||(Js={}));function Qv(){const n=Ad(!0),e=n.run(()=>zs({}));let t=[],r=[];const s=cl({install(i){aa(s),s._a=i,i.provide(Ip,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const wp=()=>{};function kh(n,e,t,r=wp){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&bd()&&M_(s),s}function Mr(n,...e){n.forEach(t=>{t(...e)})}const Jv=n=>n(),Dh=Symbol(),Xa=Symbol();function Tc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Ec(s)&&Ec(r)&&n.hasOwnProperty(t)&&!Le(r)&&!Mn(r)?n[t]=Tc(s,r):n[t]=r}return n}const Xv=Symbol();function Yv(n){return!Ec(n)||!Object.prototype.hasOwnProperty.call(n,Xv)}const{assign:Sn}=Object;function Zv(n){return!!(Le(n)&&n.effect)}function eE(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=oy(t.state.value[n]);return Sn(d,i,Object.keys(a||{}).reduce((p,m)=>(p[m]=cl(Kr(()=>{aa(t);const w=t._s.get(n);return a[m].call(w,w)})),p),{}))}return l=Ap(n,h,e,t,r,!0),l}function Ap(n,e,t={},r,s,i){let a;const c=Sn({actions:{}},t),l={deep:!0};let h,d,p=new Set,m=new Set,w;const C=r.state.value[n];!i&&!C&&(r.state.value[n]={}),zs({});let O;function L(_){let y;h=d=!1,typeof _=="function"?(_(r.state.value[n]),y={type:Js.patchFunction,storeId:n,events:w}):(Tc(r.state.value[n],_),y={type:Js.patchObject,payload:_,storeId:n,events:w});const T=O=Symbol();$d().then(()=>{O===T&&(h=!0)}),d=!0,Mr(p,y,r.state.value[n])}const z=i?function(){const{state:y}=t,T=y?y():{};this.$patch(A=>{Sn(A,T)})}:wp;function K(){a.stop(),p.clear(),m.clear(),r._s.delete(n)}const Q=(_,y="")=>{if(Dh in _)return _[Xa]=y,_;const T=function(){aa(r);const A=Array.from(arguments),S=new Set,E=new Set;function ft(ae){S.add(ae)}function Lt(ae){E.add(ae)}Mr(m,{args:A,name:T[Xa],store:oe,after:ft,onError:Lt});let De;try{De=_.apply(this&&this.$id===n?this:oe,A)}catch(ae){throw Mr(E,ae),ae}return De instanceof Promise?De.then(ae=>(Mr(S,ae),ae)).catch(ae=>(Mr(E,ae),Promise.reject(ae))):(Mr(S,De),De)};return T[Dh]=!0,T[Xa]=y,T},H={_p:r,$id:n,$onAction:kh.bind(null,m),$patch:L,$reset:z,$subscribe(_,y={}){const T=kh(p,_,y.detached,()=>A()),A=a.run(()=>ao(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&_({storeId:n,type:Js.direct,events:w},S)},Sn({},l,y)));return T},$dispose:K},oe=ta(H);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||Jv)(()=>r._e.run(()=>(a=Ad()).run(()=>e({action:Q}))));for(const _ in I){const y=I[_];if(Le(y)&&!Zv(y)||Mn(y))i||(C&&Yv(y)&&(Le(y)?y.value=C[_]:Tc(y,C[_])),r.state.value[n][_]=y);else if(typeof y=="function"){const T=Q(y,_);I[_]=T,c.actions[_]=y}}return Sn(oe,I),Sn(ye(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:_=>{L(y=>{Sn(y,_)})}}),r._p.forEach(_=>{Sn(oe,a.run(()=>_({store:oe,app:r._a,pinia:r,options:c})))}),C&&i&&t.hydrate&&t.hydrate(oe.$state,C),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function tE(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=jy();return a=a||(l?Gs(Ip,null):null),a&&aa(a),a=Tp,a._s.has(n)||(s?Ap(n,e,r,a):eE(n,r,a)),a._s.get(n)}return i.$id=n,i}function nE(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function gl(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=gl(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function bp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return gl(n,bp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Sp(n,e){return e.map(t=>t.split(".")).map(t=>[t,nE(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>gl(t,r[1],r[0]),{})}function Rp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>bp(t,r),n)}function Nh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const m=t.deserialize(p),w=i?Sp(m,i):m,C=a?Rp(w,a):w;n.$patch(C)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function Oh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?Sp(n,i):n,l=a?Rp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function rE(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function sE(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Nh(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{Oh(s.$state,c)})},a.forEach(c=>{Nh(s,c,n),s.$subscribe((l,h)=>Oh(h,c),{detached:!0})})}function iE(n={}){return function(e){sE(e,t=>{const r=rE(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var oE=iE();const Ar=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},aE={},cE={class:"carafe"};function lE(n,e){return de(),we("div",cE,[oo(n.$slots,"top",{},void 0,!0),oo(n.$slots,"mid",{},void 0,!0),oo(n.$slots,"bottom",{},void 0,!0)])}const uE=Ar(aE,[["render",lE],["__scopeId","data-v-7699247e"]]),hE={},fE={class:"mug"};function dE(n,e){return de(),we("div",fE,[oo(n.$slots,"default")])}const pE=Ar(hE,[["render",dE]]),gE=vi({__name:"Syrup",props:{syrup:{}},setup(n){return(e,t)=>(de(),we("div",{class:"syrup",style:as({backgroundColor:n.syrup.color})},null,4))}}),mE=Ar(gE,[["__scopeId","data-v-d4936c55"]]),_E=vi({__name:"Base",props:{drink:{},creamer:{},syrup:{},hasCreamer:{type:Boolean}},setup(n){return(e,t)=>(de(),we("div",{class:"baseBeverage",style:as({backgroundColor:n.drink.color})},null,4))}}),yE=Ar(_E,[["__scopeId","data-v-cb8b77d7"]]),vE={class:"froth"},EE=vi({__name:"Creamer",props:{creamer:{},isIced:{type:Boolean}},setup(n){return(e,t)=>(de(),we("div",vE,[(de(),we(Ne,null,Cn(5,r=>Ve("div",{key:r,class:"foam",style:as({backgroundColor:n.creamer.color})},null,4)),64))]))}}),TE=Ar(EE,[["__scopeId","data-v-219d6889"]]),IE={},wE={id:"steam"},AE={class:"stream"};function bE(n,e){return de(),we("div",wE,[(de(),we(Ne,null,Cn(3,()=>Ve("div",AE)),64))])}const SE=Ar(IE,[["render",bE]]),RE={},PE={id:"condensation"},CE={class:"flake"};function VE(n,e){return de(),we("div",PE,[(de(),we(Ne,null,Cn(3,()=>Ve("div",CE)),64))])}const kE=Ar(RE,[["render",VE]]),DE=vi({__name:"Beverage",props:{beverage:{}},setup(n){const e=n,t=Kr(()=>e.beverage.temp.toLowerCase()==="cold"),r=Kr(()=>e.beverage.creamer.name!=="No Cream"),s=Kr(()=>e.beverage.syrup.name!=="No Syrup");return(i,a)=>(de(),Vn(pE,null,{default:xs(()=>[t.value?(de(),Vn(kE,{key:0})):(de(),Vn(SE,{key:1})),It(uE,null,{top:xs(()=>[r.value?(de(),Vn(TE,{key:0,creamer:n.beverage.creamer,isIced:t.value},null,8,["creamer","isIced"])):$r("",!0)]),mid:xs(()=>[s.value?(de(),Vn(mE,{key:0,syrup:n.beverage.syrup},null,8,["syrup"])):$r("",!0)]),bottom:xs(()=>[It(yE,{drink:n.beverage.base,creamer:n.beverage.creamer,syrup:n.beverage.syrup,hasCreamer:r.value},null,8,["drink","creamer","syrup","hasCreamer"])]),_:1})]),_:1}))}}),xh=["Hot","Cold"],NE=()=>{};var Mh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},OE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,w=h&63;l||(w=64,a||(m=64)),r.push(t[d],t[p],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new xE;const m=i<<2|c>>4;if(r.push(m),h!==64){const w=c<<4&240|h>>2;if(r.push(w),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ME=function(n){const e=Pp(n);return Cp.encodeByteArray(e,!0)},ko=function(n){return ME(n).replace(/\./g,"")},Vp=function(n){try{return Cp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>LE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof Mh>"u")return;const n=Mh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},BE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vp(n[1]);return e&&JSON.parse(e)},ca=()=>{try{return NE()||FE()||UE()||BE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kp=n=>{var e,t;return(t=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jE=n=>{const e=kp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dp=()=>{var n;return(n=ca())===null||n===void 0?void 0:n.config},Np=n=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Op(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ko(JSON.stringify(t)),ko(JSON.stringify(a)),""].join(".")}const Xs={};function HE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?n.emulator.push(e):n.prod.push(e);return n}function zE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Lh=!1;function xp(n,e){if(typeof window>"u"||typeof document>"u"||!cs(window.location.host)||Xs[n]===e||Xs[n]||Lh)return;Xs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=HE().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Lh=!0,a()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=zE(r),w=t("text"),C=document.getElementById(w)||document.createElement("span"),O=t("learnmore"),L=document.getElementById(O)||document.createElement("a"),z=t("preprendIcon"),K=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const Q=m.element;c(Q),d(L,O);const H=h();l(K,z),Q.append(K,C,L,H),document.body.appendChild(Q)}i?(C.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function KE(){var n;const e=(n=ca())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XE(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YE(){return!KE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZE(){try{return typeof indexedDB=="object"}catch{return!1}}function eT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="FirebaseError";class En extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tT,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?nT(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new En(s,c,r)}}function nT(n,e){return n.replace(rT,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rT=/\{\$([^}]+)}/g;function sT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Fh(i)&&Fh(a)){if(!yr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Fh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function iT(n,e){const t=new oT(n,e);return t.subscribe.bind(t)}class oT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");aT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ya),s.error===void 0&&(s.error=Ya),s.complete===void 0&&(s.complete=Ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n){return n&&n._delegate?n._delegate:n}class vr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $E;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uT(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lT(n){return n===cr?void 0:n}function uT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const fT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},dT=he.INFO,pT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},gT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=pT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=dT,this._logHandler=gT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const mT=(n,e)=>e.some(t=>n instanceof t);let Uh,Bh;function _T(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yT(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,Ic=new WeakMap,Lp=new WeakMap,Za=new WeakMap,_l=new WeakMap;function vT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ln(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mp.set(t,n)}).catch(()=>{}),_l.set(e,n),e}function ET(n){if(Ic.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ic.set(n,e)}let wc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ic.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ln(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function TT(n){wc=n(wc)}function IT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ec(this),e,...t);return Lp.set(r,e.sort?e.sort():[e]),Ln(r)}:yT().includes(n)?function(...e){return n.apply(ec(this),e),Ln(Mp.get(this))}:function(...e){return Ln(n.apply(ec(this),e))}}function wT(n){return typeof n=="function"?IT(n):(n instanceof IDBTransaction&&ET(n),mT(n,_T())?new Proxy(n,wc):n)}function Ln(n){if(n instanceof IDBRequest)return vT(n);if(Za.has(n))return Za.get(n);const e=wT(n);return e!==n&&(Za.set(n,e),_l.set(e,n)),e}const ec=n=>_l.get(n);function AT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Ln(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ln(a.result),l.oldVersion,l.newVersion,Ln(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const bT=["get","getKey","getAll","getAllKeys","count"],ST=["put","add","delete","clear"],tc=new Map;function jh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ST.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return tc.set(e,i),i}TT(n=>({...n,get:(e,t,r)=>jh(e,t)||n.get(e,t,r),has:(e,t)=>!!jh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function PT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ac="@firebase/app",$h="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new ml("@firebase/app"),CT="@firebase/app-compat",VT="@firebase/analytics-compat",kT="@firebase/analytics",DT="@firebase/app-check-compat",NT="@firebase/app-check",OT="@firebase/auth",xT="@firebase/auth-compat",MT="@firebase/database",LT="@firebase/data-connect",FT="@firebase/database-compat",UT="@firebase/functions",BT="@firebase/functions-compat",jT="@firebase/installations",$T="@firebase/installations-compat",qT="@firebase/messaging",HT="@firebase/messaging-compat",zT="@firebase/performance",WT="@firebase/performance-compat",KT="@firebase/remote-config",GT="@firebase/remote-config-compat",QT="@firebase/storage",JT="@firebase/storage-compat",XT="@firebase/firestore",YT="@firebase/ai",ZT="@firebase/firestore-compat",eI="firebase",tI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="[DEFAULT]",nI={[Ac]:"fire-core",[CT]:"fire-core-compat",[kT]:"fire-analytics",[VT]:"fire-analytics-compat",[NT]:"fire-app-check",[DT]:"fire-app-check-compat",[OT]:"fire-auth",[xT]:"fire-auth-compat",[MT]:"fire-rtdb",[LT]:"fire-data-connect",[FT]:"fire-rtdb-compat",[UT]:"fire-fn",[BT]:"fire-fn-compat",[jT]:"fire-iid",[$T]:"fire-iid-compat",[qT]:"fire-fcm",[HT]:"fire-fcm-compat",[zT]:"fire-perf",[WT]:"fire-perf-compat",[KT]:"fire-rc",[GT]:"fire-rc-compat",[QT]:"fire-gcs",[JT]:"fire-gcs-compat",[XT]:"fire-fst",[ZT]:"fire-fst-compat",[YT]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,rI=new Map,Sc=new Map;function qh(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function es(n){const e=n.name;if(Sc.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,n);for(const t of Do.values())qh(t,n);for(const t of rI.values())qh(t,n);return!0}function yl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Ti("app","Firebase",sI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=tI;function Fp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(t||(t=Dp()),!t)throw Fn.create("no-options");const i=Do.get(s);if(i){if(yr(t,i.options)&&yr(r,i.config))return i;throw Fn.create("duplicate-app",{appName:s})}const a=new hT(s);for(const l of Sc.values())a.addComponent(l);const c=new iI(t,r,a);return Do.set(s,c),c}function Up(n=bc){const e=Do.get(n);if(!e&&n===bc&&Dp())return Fp();if(!e)throw Fn.create("no-app",{appName:n});return e}function Un(n,e,t){var r;let s=(r=nI[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(c.join(" "));return}es(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="firebase-heartbeat-database",aI=1,ci="firebase-heartbeat-store";let nc=null;function Bp(){return nc||(nc=AT(oI,aI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ci)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fn.create("idb-open",{originalErrorMessage:n.message})})),nc}async function cI(n){try{const t=(await Bp()).transaction(ci),r=await t.objectStore(ci).get(jp(n));return await t.done,r}catch(e){if(e instanceof En)gn.warn(e.message);else{const t=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function Hh(n,e){try{const r=(await Bp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,jp(n)),await r.done}catch(t){if(t instanceof En)gn.warn(t.message);else{const r=Fn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(r.message)}}}function jp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=1024,uI=30;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>uI){const a=pI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zh(),{heartbeatsToSend:r,unsentEntries:s}=fI(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gn.warn(t),""}}}function zh(){return new Date().toISOString().substring(0,10)}function fI(n,e=lI){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Wh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZE()?eT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wh(n){return ko(JSON.stringify({version:2,heartbeats:n})).length}function pI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n){es(new vr("platform-logger",e=>new RT(e),"PRIVATE")),es(new vr("heartbeat",e=>new hI(e),"PRIVATE")),Un(Ac,$h,n),Un(Ac,$h,"esm2017"),Un("fire-js","")}gI("");var mI="firebase",_I="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(mI,_I,"app");function vl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function $p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yI=$p,qp=new Ti("auth","Firebase",$p());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new ml("@firebase/auth");function vI(n,...e){No.logLevel<=he.WARN&&No.warn(`Auth (${ls}): ${n}`,...e)}function uo(n,...e){No.logLevel<=he.ERROR&&No.error(`Auth (${ls}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,...e){throw Tl(n,...e)}function Ot(n,...e){return Tl(n,...e)}function El(n,e,t){const r=Object.assign(Object.assign({},yI()),{[e]:t});return new Ti("auth","Firebase",r).create(e,{appName:n.name})}function pr(n){return El(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function EI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(n,"argument-error"),El(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qp.create(n,...e)}function ne(n,e,...t){if(!n)throw Tl(e,...t)}function ln(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uo(e),new Error(e)}function mn(n,e){n||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function TI(){return Kh()==="http:"||Kh()==="https:"}function Kh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TI()||QE()||"connection"in navigator)?navigator.onLine:!0}function wI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,mn(t>e,"Short delay should be less than long delay!"),this.isMobile=WE()||JE()}get(){return II()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n,e){mn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SI=new wi(3e4,6e4);function wl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function us(n,e,t,r,s={}){return zp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ii(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return GE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&cs(n.emulatorConfig.host)&&(h.credentials="include"),Hp.fetch()(await Wp(n,n.config.apiHost,t,c),h)})}async function zp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},AI),e);try{const s=new PI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw El(n,d,h);Yt(n,d)}}catch(s){if(s instanceof En)throw s;Yt(n,"network-request-failed",{message:String(s)})}}async function RI(n,e,t,r,s={}){const i=await us(n,e,t,r,s);return"mfaPendingCredential"in i&&Yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Il(n.config,s):`${n.config.apiScheme}://${s}`;return bI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class PI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),SI.get())})}}function Zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ot(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(n,e){return us(n,"POST","/v1/accounts:delete",e)}async function Oo(n,e){return us(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(n,e=!1){const t=_t(n),r=await t.getIdToken(e),s=Al(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(rc(s.auth_time)),issuedAtTime:Ys(rc(s.iat)),expirationTime:Ys(rc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rc(n){return Number(n)*1e3}function Al(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vp(t);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gh(n){const e=Al(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof En&&kI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await li(n,Oo(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kp(i.providerUserInfo):[],c=OI(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Pc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function NI(n){const e=_t(n);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kp(n){return n.map(e=>{var{providerId:t}=e,r=vl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(n,e){const t=await zp(n,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Wp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&cs(n.emulatorConfig.host)&&(l.credentials="include"),Hp.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function MI(n,e){return us(n,"POST","/v2/accounts:revokeToken",wl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Gh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await xI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Qr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await li(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VI(this,e)}reload(){return NI(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await li(this,CI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,K=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:H,isAnonymous:oe,providerData:ve,stsTokenManager:I}=t;ne(Q&&I,e,"internal-error");const _=Qr.fromJSON(this.name,I);ne(typeof Q=="string",e,"internal-error"),bn(p,e.name),bn(m,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),bn(w,e.name),bn(C,e.name),bn(O,e.name),bn(L,e.name),bn(z,e.name),bn(K,e.name);const y=new kt({uid:Q,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:oe,photoURL:C,phoneNumber:w,tenantId:O,stsTokenManager:_,createdAt:z,lastLoginAt:K});return ve&&Array.isArray(ve)&&(y.providerData=ve.map(T=>Object.assign({},T))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qr;s.updateFromServerResponse(t);const i=new kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Qr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=new Map;function un(n){mn(n instanceof Function,"Expected a class definition");let e=Qh.get(n);return e?(mn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gp.type="NONE";const Jh=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Oo(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jr(un(Jh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||un(Jh);const a=ho(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await Oo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await kt._fromGetAccountInfoResponse(e,m,d)}else p=kt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eg(e))return"Blackberry";if(tg(e))return"Webos";if(Jp(e))return"Safari";if((e.includes("chrome/")||Xp(e))&&!e.includes("edge/"))return"Chrome";if(Zp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qp(n=ht()){return/firefox\//i.test(n)}function Jp(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xp(n=ht()){return/crios\//i.test(n)}function Yp(n=ht()){return/iemobile/i.test(n)}function Zp(n=ht()){return/android/i.test(n)}function eg(n=ht()){return/blackberry/i.test(n)}function tg(n=ht()){return/webos/i.test(n)}function bl(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function LI(n=ht()){var e;return bl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FI(){return XE()&&document.documentMode===10}function ng(n=ht()){return bl(n)||Zp(n)||tg(n)||eg(n)||/windows phone/i.test(n)||Yp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e=[]){let t;switch(n){case"Browser":t=Xh(ht());break;case"Worker":t=`${Xh(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,e={}){return us(n,"GET","/v2/passwordPolicy",wl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=6;class $I{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:jI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yh(this),this.idTokenSubscription=new Yh(this),this.beforeStateQueue=new UI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=un(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Oo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(pr(this));const t=e?_t(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BI(this),t=new $I(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await MI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&un(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function la(n){return _t(n)}class Yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=iT(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HI(n){Sl=n}function zI(n){return Sl.loadJS(n)}function WI(){return Sl.gapiScript}function KI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n,e){const t=yl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(yr(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function QI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(un);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JI(n,e,t){const r=la(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sg(e),{host:a,port:c}=XI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(yr(h,r.config.emulator)&&yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,cs(a)?(Op(`${i}//${a}${l}`),xp("Auth",!0)):YI()}function sg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function XI(n){const e=sg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Zh(a)}}}function Zh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,t){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(n,e){return RI(n,"POST","/v1/accounts:signInWithIdp",wl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="http://localhost";class Er extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=vl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Er(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xr(e,t)}buildRequest(){const e={requestUri:ZI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ii(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ai{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Er._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ai{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ai{constructor(){super("twitter.com")}static credential(e,t){return Er._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=ef(r);return new ts({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ef(r);return new ts({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ef(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends En{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Mo(e,t,r,s)}}function og(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(n,i,e,r):i})}async function ew(n,e,t=!1){const r=await li(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ts._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await li(n,og(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=Al(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),ts._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(n,e,t=!1){if(Vt(n.app))return Promise.reject(pr(n));const r="signIn",s=await og(n,r,e),i=await ts._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function rw(n,e,t,r){return _t(n).onIdTokenChanged(e,t,r)}function sw(n,e,t){return _t(n).beforeAuthStateChanged(e,t)}function iw(n,e,t,r){return _t(n).onAuthStateChanged(e,t,r)}function ow(n){return _t(n).signOut()}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=1e3,cw=10;class cg extends ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);FI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cg.type="LOCAL";const lw=cg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lg.type="SESSION";const ug=lg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await uw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Pl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function fw(n){Wt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function dw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gw(){return hg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="firebaseLocalStorageDb",mw=1,Fo="firebaseLocalStorage",dg="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(n,e){return n.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function _w(){const n=indexedDB.deleteDatabase(fg);return new bi(n).toPromise()}function Cc(){const n=indexedDB.open(fg,mw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fo,{keyPath:dg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await _w(),e(await Cc()))})})}async function tf(n,e,t){const r=ha(n,!0).put({[dg]:e,value:t});return new bi(r).toPromise()}async function yw(n,e){const t=ha(n,!1).get(e),r=await new bi(t).toPromise();return r===void 0?null:r.value}function nf(n,e){const t=ha(n,!0).delete(e);return new bi(t).toPromise()}const vw=800,Ew=3;class pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ew)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(gw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dw(),!this.activeServiceWorker)return;this.sender=new hw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cc();return await tf(e,Lo,"1"),await nf(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pg.type="LOCAL";const Tw=pg;new wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){return e?un(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iw(n){return nw(n.auth,new Cl(n),n.bypassAuthState)}function ww(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),tw(t,new Cl(n),n.bypassAuthState)}async function Aw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),ew(t,new Cl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iw;case"linkViaPopup":case"linkViaRedirect":return Aw;case"reauthViaPopup":case"reauthViaRedirect":return ww;default:Yt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new wi(2e3,1e4);async function Sw(n,e,t){if(Vt(n.app))return Promise.reject(Ot(n,"operation-not-supported-in-this-environment"));const r=la(n);EI(n,e,Rl);const s=gg(r,t);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends mg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Pl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bw.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="pendingRedirect",fo=new Map;class Pw extends mg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await Cw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cw(n,e){const t=Dw(e),r=kw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Vw(n,e){fo.set(n._key(),e)}function kw(n){return un(n._redirectPersistence)}function Dw(n){return ho(Rw,n.config.apiKey,n.name)}async function Nw(n,e,t=!1){if(Vt(n.app))return Promise.reject(pr(n));const r=la(n),s=gg(r,e),a=await new Pw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=600*1e3;class xw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_g(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ow&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(e))}saveEventToCache(e){this.cachedEventUids.add(rf(e)),this.lastProcessedEventTime=Date.now()}}function rf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _g({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _g(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n,e={}){return us(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uw=/^https?/;async function Bw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lw(n);for(const t of e)try{if(jw(t))return}catch{}Yt(n,"unauthorized-domain")}function jw(n){const e=Rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Uw.test(t))return!1;if(Fw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new wi(3e4,6e4);function sf(){const n=Wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qw(n){return new Promise((e,t)=>{var r,s,i;function a(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),t(Ot(n,"network-request-failed"))},timeout:$w.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)a();else{const c=KI("iframefcb");return Wt()[c]=()=>{gapi.load?a():t(Ot(n,"network-request-failed"))},zI(`${WI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw po=null,e})}let po=null;function Hw(n){return po=po||qw(n),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=new wi(5e3,15e3),Ww="__/auth/iframe",Kw="emulator/auth/iframe",Gw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jw(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Il(e,Kw):`https://${n.config.authDomain}/${Ww}`,r={apiKey:e.apiKey,appName:n.name,v:ls},s=Qw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ii(r).slice(1)}`}async function Xw(n){const e=await Hw(n),t=Wt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:Jw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(n,"network-request-failed"),c=Wt().setTimeout(()=>{i(a)},zw.get());function l(){Wt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zw=500,eA=600,tA="_blank",nA="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rA(n,e,t,r=Zw,s=eA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Yw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();t&&(c=Xp(h)?tA:t),Qp(h)&&(e=e||nA,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(LI(h)&&c!=="_self")return sA(e||"",c),new of(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new of(p)}function sA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="__/auth/handler",oA="emulator/auth/handler",aA=encodeURIComponent("fac");async function af(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ls,eventId:s};if(e instanceof Rl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",sT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ai){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${aA}=${encodeURIComponent(l)}`:"";return`${cA(n)}?${Ii(c).slice(1)}${h}`}function cA({config:n}){return n.emulator?Il(n,oA):`https://${n.authDomain}/${iA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="webStorageSupport";class lA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ug,this._completeRedirectFn=Nw,this._overrideRedirectResult=Vw}async _openPopup(e,t,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await af(e,t,r,Rc(),s);return rA(e,a,Pl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await af(e,t,r,Rc(),s);return fw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xw(e),r=new xw(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sc,{type:sc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sc];a!==void 0&&t(!!a),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ng()||Jp()||bl()}}const uA=lA;var cf="@firebase/auth",lf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dA(n){es(new vr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rg(n)},h=new qI(r,s,i,l);return QI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),es(new vr("auth-internal",e=>{const t=la(e.getProvider("auth").getImmediate());return(r=>new hA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(cf,lf,fA(n)),Un(cf,lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=300,gA=Np("authIdTokenMaxAge")||pA;let uf=null;const mA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gA)return;const s=t==null?void 0:t.token;uf!==s&&(uf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _A(n=Up()){const e=yl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=GI(n,{popupRedirectResolver:uA,persistence:[Tw,lw,ug]}),r=Np("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=mA(i.toString());sw(t,a,()=>a(t.currentUser)),rw(t,c=>a(c))}}const s=kp("auth");return s&&JI(t,`http://${s}`),t}function yA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}HI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",yA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dA("Browser");var hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bn,yg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function y(){}y.prototype=_.prototype,I.D=_.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return _.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,y){y||(y=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=I.g[0],y=I.g[1],A=I.g[2];var S=I.g[3],E=_+(S^y&(A^S))+T[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=S+(A^_&(y^A))+T[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(y^S&(_^y))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(_^A&(S^_))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=_+(S^y&(A^S))+T[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=S+(A^_&(y^A))+T[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(y^S&(_^y))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(_^A&(S^_))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=_+(S^y&(A^S))+T[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=S+(A^_&(y^A))+T[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(y^S&(_^y))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(_^A&(S^_))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=_+(S^y&(A^S))+T[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=S+(A^_&(y^A))+T[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(y^S&(_^y))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(_^A&(S^_))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=_+(A^S&(y^A))+T[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(_^y))+T[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^y&(S^_))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(A^S))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=_+(A^S&(y^A))+T[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(_^y))+T[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^y&(S^_))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(A^S))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=_+(A^S&(y^A))+T[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(_^y))+T[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^y&(S^_))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(A^S))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=_+(A^S&(y^A))+T[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(_^y))+T[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^y&(S^_))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(A^S))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=_+(y^A^S)+T[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^A)+T[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^y)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^_)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=_+(y^A^S)+T[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^A)+T[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^y)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^_)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=_+(y^A^S)+T[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^A)+T[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^y)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^_)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=_+(y^A^S)+T[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^A)+T[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^y)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^_)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=_+(A^(y|~S))+T[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~A))+T[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~y))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~_))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=_+(A^(y|~S))+T[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~A))+T[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~y))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~_))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=_+(A^(y|~S))+T[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~A))+T[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~y))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~_))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=_+(A^(y|~S))+T[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~A))+T[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~y))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var y=_-this.blockSize,T=this.B,A=this.h,S=0;S<_;){if(A==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<_;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var y=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=y&255,y/=256;for(this.u(I),I=Array(16),_=y=0;4>_;++_)for(var T=0;32>T;T+=8)I[y++]=this.g[_]>>>T&255;return I};function i(I,_){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=_(I)}function a(I,_){this.h=_;for(var y=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==_||(y[A]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return L(h(-I));for(var _=[],y=1,T=0;I>=y;T++)_[T]=I/y|0,y*=4294967296;return new a(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return L(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),T=p,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),_);8>S?(S=h(Math.pow(_,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),m=l(1),w=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-L(this).m();for(var I=0,_=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(O(this))return"-"+L(this).toString(I);for(var _=h(Math.pow(I,6)),y=this,T="";;){var A=H(y,_).g;y=z(y,A.j(_));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=A,C(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=z(this,I),O(I)?-1:C(I)?0:1};function L(I){for(var _=I.g.length,y=[],T=0;T<_;T++)y[T]=~I.g[T];return new a(y,~I.h).add(m)}n.abs=function(){return O(this)?L(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0,A=0;A<=_;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,y[A]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,_){return I.add(L(_))}n.j=function(I){if(C(this)||C(I))return p;if(O(this))return O(I)?L(this).j(L(I)):L(L(this).j(I));if(O(I))return L(this.j(L(I)));if(0>this.l(w)&&0>I.l(w))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,y=[],T=0;T<2*_;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ft=I.i(A)>>>16,Lt=I.i(A)&65535;y[2*T+2*A]+=E*Lt,K(y,2*T+2*A),y[2*T+2*A+1]+=S*Lt,K(y,2*T+2*A+1),y[2*T+2*A+1]+=E*ft,K(y,2*T+2*A+1),y[2*T+2*A+2]+=S*ft,K(y,2*T+2*A+2)}for(T=0;T<_;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=_;T<2*_;T++)y[T]=0;return new a(y,0)};function K(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function Q(I,_){this.g=I,this.h=_}function H(I,_){if(C(_))throw Error("division by zero");if(C(I))return new Q(p,p);if(O(I))return _=H(L(I),_),new Q(L(_.g),L(_.h));if(O(_))return _=H(I,L(_)),new Q(L(_.g),_.h);if(30<I.g.length){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,T=_;0>=T.l(I);)y=oe(y),T=oe(T);var A=ve(y,1),S=ve(T,1);for(T=ve(T,2),y=ve(y,2);!C(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(y),S=E),T=ve(T,1),y=ve(y,1)}return _=z(I,A.j(_)),new Q(A,_)}for(A=p;0<=I.l(_);){for(y=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(_);O(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(_);C(S)&&(S=m),A=A.add(S),I=z(I,E)}return new Q(A,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function oe(I){for(var _=I.g.length+1,y=[],T=0;T<_;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function ve(I,_){var y=_>>5;_%=32;for(var T=I.g.length-y,A=[],S=0;S<T;S++)A[S]=0<_?I.i(S+y)>>>_|I.i(S+y+1)<<32-_:I.i(S+y);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Bn=a}).apply(typeof hf<"u"?hf:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vg,Fs,Eg,go,Vc,Tg,Ig,wg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,P){for(var j=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)j[Ie-2]=arguments[Ie];return u.prototype[R].apply(g,j)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,P=g.length||0;o.length=R+P;for(let j=0;j<P;j++)o[R+j]=g[j]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ve(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<y.length;P++)f=y[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,f){const g=Lt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Lt=new z(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,me=!1,Pt=new ft,Yn=()=>{const o=c.Promise.resolve(void 0);ae=()=>{o.then(en)}};var en=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Sa=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function Zn(o,u){if(qe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:er[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zn.aa.h.call(this)}}C(Zn,qe);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),gs=0;function Di(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++gs,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,u,f,g,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=b(o,u,g,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new Di(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&(Ft(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function b(o,u,f,g){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var V="closure_lm_"+(1e6*Math.random()|0),F={};function N(o,u,f,g,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)N(o,u[P],f,g,R);return null}return f=te(f),o&&o[tn]?o.K(u,f,h(g)?!!g.capture:!1,R):x(o,u,f,!1,g,R)}function x(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,Ie=q(o);if(Ie||(o[V]=Ie=new ms(o)),f=Ie.add(u,f,g,j,P),f.proxy)return f;if(g=$(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Sa||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function B(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[tn]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=b(P,f,g,R),-1<f&&(Ft(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=b(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[tn])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[V]=null)):Ft(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new Zn(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function q(o){return o=o[V],o instanceof ms?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){$e.call(this),this.i=new ms(this),this.M=this,this.F=null}C(Z,$e),Z.prototype[tn]=!0,Z.prototype.removeEventListener=function(o,u,f,g){B(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new qe(u,o);else if(u instanceof qe)u.target=u.target||o;else{var R=u;u=new qe(g,o),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var j=u.g=f[P];R=pe(j,g,!0,u)&&R}if(j=u.g=o,R=pe(j,g,!0,u)&&R,R=pe(j,g,!1,u)&&R,f)for(P=0;P<f.length;P++)j=u.g=f[P],R=pe(j,g,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Ft(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function pe(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==f){var Ie=j.listener,Je=j.ha||j.src;j.fa&&v(o.i,j),R=Ie.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ke(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ge(o){o.g=Ke(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class wt extends $e{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){$e.call(this),this.h=o,this.g={}}C(tt,$e);var Tn=[];function _s(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),_s(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,At=c.JSON.parse,Ni=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Vr(){}Vr.prototype.h=null;function lu(o){return o.h||(o.h=o.i())}function uu(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ra(){qe.call(this,"d")}C(Ra,qe);function Pa(){qe.call(this,"c")}C(Pa,qe);var tr={},hu=null;function Oi(){return hu=hu||new Z}tr.La="serverreachability";function fu(o){qe.call(this,tr.La,o)}C(fu,qe);function vs(o){const u=Oi();ce(u,new fu(u))}tr.STAT_EVENT="statevent";function du(o,u){qe.call(this,tr.STAT_EVENT,o),this.stat=u}C(du,qe);function dt(o){const u=Oi();ce(u,new du(u,o))}tr.Ma="timingevent";function pu(o,u){qe.call(this,tr.Ma,o),this.size=u}C(pu,qe);function Es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function n_(o,u,f,g,R,P){o.info(function(){if(o.g)if(P)for(var j="",Ie=P.split("&"),Je=0;Je<Ie.length;Je++){var _e=Ie[Je].split("=");if(1<_e.length){var nt=_e[0];_e=_e[1];var rt=nt.split("_");j=2<=rt.length&&rt[1]=="type"?j+(nt+"="+_e+"&"):j+(nt+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function r_(o,u,f,g,R,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+j})}function kr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+i_(o,f)+(g?" "+g:"")})}function s_(o,u){o.info(function(){return"TIMEOUT: "+u})}Ts.prototype.info=function(){};function i_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Qe(f)}catch{return u}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function Mi(){}C(Mi,Vr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Ca=new Mi;function In(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var _u={},Va={};function ka(o,u,f){o.L=1,o.v=Bi(nn(u)),o.m=f,o.P=!0,yu(o,null)}function yu(o,u){o.F=Date.now(),Li(o),o.A=nn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Du(f.i,"t",g),o.C=0,f=o.j.J,o.h=new mu,o.g=Ju(o.j,f?u:null,!o.m),0<o.O&&(o.M=new wt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Tn[0]=R.toString()),R=Tn);for(var P=0;P<R.length;P++){var j=N(f,R[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vs(),n_(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const u=this.M;u&&rn(o)==3?u.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const rt=rn(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Or?vs(3):vs(2)),Da(this);var f=this.g.Z();this.X=f;t:if(vu(this)){var g=Uu(this.g);o="";var R=g.length,P=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),Is(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,r_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,Je=this.g;if((Ie=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ie)){var _e=Ie;break t}}_e=null}if(f=_e)kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,f);else{this.o=!1,this.s=3,dt(12),nr(this),Is(this);break e}}if(this.P){f=!0;let Ct;for(;!this.J&&this.C<j.length;)if(Ct=o_(this,j),Ct==Va){rt==4&&(this.s=4,dt(14),f=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==_u){this.s=4,dt(15),kr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else kr(this.i,this.l,Ct,null),Na(this,Ct);if(vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||j.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)kr(this.i,this.l,j,"[Invalid Chunked Response]"),nr(this),Is(this);else if(0<j.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ua(nt),nt.M=!0,dt(11))}}else kr(this.i,this.l,j,null),Na(this,j);rt==4&&nr(this),this.o&&!this.J&&(rt==4?Wu(this.j,this):(this.o=!1,Li(this)))}else w_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),nr(this),Is(this)}}}catch{}finally{}};function vu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function o_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Va:(f=Number(u.substring(f,g)),isNaN(f)?_u:(g+=1,g+f>u.length?Va:(u=u.slice(g,g+f),o.C=g+f,u)))}In.prototype.cancel=function(){this.J=!0,nr(this)};function Li(o){o.S=Date.now()+o.I,Eu(o,o.I)}function Eu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Es(m(o.ba,o),u)}function Da(o){o.B&&(c.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(s_(this.i,this.A),this.L!=2&&(vs(),dt(17)),nr(this),this.s=2,Is(this)):Eu(this,this.S-o)};function Is(o){o.j.G==0||o.J||Wu(o.j,o)}function nr(o){Da(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,_s(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Na(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Oa(f.h,o))){if(!o.K&&Oa(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Wi(f),Hi(f);else break e;Fa(f),dt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Es(m(f.Za,f),6e3));if(1>=wu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else sr(f,11)}else if((o.K||f.g==o)&&Wi(f),!K(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const nt=_e[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=_e[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const Or=_e[5];Or!=null&&typeof Or=="number"&&0<Or&&(g=1.5*Or,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ct=o.g;if(Ct){const Gi=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var P=g.h;P.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(xa(P,P.h),P.h=null))}if(g.D){const Ba=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(g.ya=Ba,Pe(g.I,g.D,Ba))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=Qu(g,g.J?g.ia:null,g.W),j.K){Au(g.h,j);var Ie=j,Je=g.L;Je&&(Ie.I=Je),Ie.B&&(Da(Ie),Li(Ie)),g.g=j}else Hu(g);0<f.i.length&&zi(f)}else _e[0]!="stop"&&_e[0]!="close"||sr(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?sr(f,7):La(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}vs(4)}catch{}}var a_=class{constructor(o,u){this.g=o,this.map=u}};function Tu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wu(o){return o.h?1:o.g?o.g.size:0}function Oa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xa(o,u){o.g?o.g.add(u):o.h=u}function Au(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Tu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function c_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function l_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Su(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=l_(o),g=c_(o),R=g.length,P=0;P<R;P++)u.call(void 0,g[P],f&&f[P],o)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var P=o[f].substring(0,g);R=o[f].substring(g+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var u=o.i,f=new bs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Pu(this,f),this.m=o.m}else o&&(u=String(o).match(Ru))?(this.h=!1,Fi(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),Ui(this,u[4]),this.l=ws(u[5]||"",!0),Pu(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}rr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(As(u,Cu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(As(u,Cu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(As(f,f.charAt(0)=="/"?d_:f_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",As(f,g_)),o.join("")};function nn(o){return new rr(o)}function Fi(o,u,f){o.j=f?ws(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Pu(o,u,f){u instanceof bs?(o.i=u,m_(o.i,o.h)):(f||(u=As(u,p_)),o.i=new bs(u,o.h))}function Pe(o,u,f){o.i.set(u,f)}function Bi(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ws(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function As(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,h_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function h_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cu=/[#\/\?@]/g,f_=/[#\?:]/g,d_=/[#\?]/g,p_=/[#\?@]/g,g_=/#/g;function bs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&u_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=bs.prototype,n.add=function(o,u){wn(this),this.i=null,o=Dr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Vu(o,u){wn(o),u=Dr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ku(o,u){return wn(o),u=Dr(o,u),o.g.has(u)}n.forEach=function(o,u){wn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){wn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let P=0;P<R.length;P++)f.push(u[g])}return f},n.V=function(o){wn(this);let u=[];if(typeof o=="string")ku(this,o)&&(u=u.concat(this.g.get(Dr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return wn(this),this.i=null,o=Dr(this,o),ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Du(o,u,f){Vu(o,u),0<f.length&&(o.i=null,o.g.set(Dr(o,u),O(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=P;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function Dr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function m_(o,u){u&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Vu(this,g),Du(this,R,f))},o)),o.j=u}function __(o,u){const f=new Ts;if(c.Image){const g=new Image;g.onload=w(An,f,"TestLoadImage: loaded",!0,u,g),g.onerror=w(An,f,"TestLoadImage: error",!1,u,g),g.onabort=w(An,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(An,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function y_(o,u){const f=new Ts,g=new AbortController,R=setTimeout(()=>{g.abort(),An(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?An(f,"TestPingServer: ok",!0,u):An(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),An(f,"TestPingServer: error",!1,u)})}function An(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function v_(){this.g=new Ni}function E_(o,u,f){const g=f||"";try{Su(o,function(R,P){let j=R;h(R)&&(j=Qe(R)),u.push(g+P+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ji,Vr),ji.prototype.g=function(){return new $i(this.l,this.j)},ji.prototype.i=(function(o){return function(){return o}})({});function $i(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C($i,Z),n=$i.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Rs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Rs(this),this.readyState==3&&Nu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Qa=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Rs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Rs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ou(o){let u="";return ve(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ma(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ou(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pe(o,u,f))}function xe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(xe,Z);var T_=/^https?$/i,I_=["POST","PUT"];n=xe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?lu(this.o):lu(Ca),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){xu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(I_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){xu(this,P)}};function xu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Mu(o),qi(o)}function Mu(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),qi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lu(this):this.bb())},n.bb=function(){Lu(this)};function Lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rn(o)!=4||o.Z()!=2)){if(o.u&&rn(o)==4)Ke(o.Ea,0,o);else if(ce(o,"readystatechange"),rn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var R=String(o.D).match(Ru)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!T_.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var P=2<rn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Mu(o)}}finally{qi(o)}}}}function qi(o,u){if(o.g){Fu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function Fu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function rn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),At(u)}};function Uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function w_(o){const u={};o=(o.g&&2<=rn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(K(o[g]))continue;var f=A(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Bu(o){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,o),this.cb=Ps("retryDelaySeedMs",1e4,o),this.Wa=Ps("forwardChannelMaxRetries",2,o),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Tu(o&&o.concurrentRequestLimit),this.Da=new v_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Qu(this,null,this.W),zi(this)};function La(o){if(ju(o),o.G==3){var u=o.U++,f=nn(o.I);if(Pe(f,"SID",o.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),Cs(o,f),u=new In(o,o.j,u),u.L=2,u.v=Bi(nn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ju(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}Gu(o)}function Hi(o){o.g&&(Ua(o),o.g.cancel(),o.g=null)}function ju(o){Hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zi(o){if(!Iu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||Yn(),me||(ae(),me=!0),Pt.add(u,o),o.B=0}}function A_(o,u){return wu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Es(m(o.Ga,o,u),Ku(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new In(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=qu(this,R,u),f=nn(this.I),Pe(f,"RID",o),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),Cs(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Ou(P)))+"&"+u:this.m&&Ma(f,this.m,P)),xa(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,ka(R,f,null)):ka(R,f,u),this.G=2}}else this.G==3&&(o?$u(this,o):this.i.length==0||Iu(this.h)||$u(this))};function $u(o,u){var f;u?f=u.l:f=o.U++;const g=nn(o.I);Pe(g,"SID",o.K),Pe(g,"RID",f),Pe(g,"AID",o.T),Cs(o,g),o.m&&o.o&&Ma(g,o.m,o.o),f=new In(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=qu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xa(o.h,f),ka(f,g,u)}function Cs(o,u){o.H&&ve(o.H,function(f,g){Pe(u,g,f)}),o.l&&Su({},function(f,g){Pe(u,g,f)})}function qu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const j=["count="+f];P==-1?0<f?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ie=!0;for(let Je=0;Je<f;Je++){let _e=R[Je].g;const nt=R[Je].map;if(_e-=P,0>_e)P=Math.max(0,R[Je].g-100),Ie=!1;else try{E_(nt,j,"req"+_e+"_")}catch{g&&g(nt)}}if(Ie){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Hu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||Yn(),me||(ae(),me=!0),Pt.add(u,o),o.v=0}}function Fa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Es(m(o.Fa,o),Ku(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Es(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Hi(this),zu(this))};function Ua(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function zu(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=nn(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),Cs(o,u),o.m&&o.o&&Ma(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Bi(nn(u)),f.m=null,f.P=!0,yu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Hi(this),Fa(this),dt(19))};function Wi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Wu(o,u){var f=null;if(o.g==u){Wi(o),Ua(o),o.g=null;var g=2}else if(Oa(o.h,u))f=u.D,Au(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Oi(),ce(g,new pu(g,f)),zi(o)}else Hu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&A_(o,u)||g==2&&Fa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function Ku(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const R=!g;g=new rr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(g,"https"),Bi(g),R?__(g.toString(),f):y_(g.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),Gu(o),ju(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Gu(o){if(o.G=0,o.ka=[],o.l){const u=bu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Qu(o,u,f){var g=f instanceof rr?nn(f):new rr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ui(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new rr(null);g&&Fi(P,g),u&&(P.g=u),R&&Ui(P,R),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Pe(g,f,u),Pe(g,"VER",o.la),Cs(o,g),g}function Ju(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new ji({eb:f})):new xe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xu(){}n=Xu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){Z.call(this),this.g=new Bu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}C(vt,Z),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){La(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new a_(u.Ya++,o)),u.G==3&&zi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,vt.aa.N.call(this)};function Yu(o){Ra.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(Yu,Ra);function Zu(){Pa.call(this),this.status=1}C(Zu,Pa);function Nr(o){this.g=o}C(Nr,Xu),Nr.prototype.ua=function(){ce(this.g,"a")},Nr.prototype.ta=function(o){ce(this.g,new Yu(o))},Nr.prototype.sa=function(o){ce(this.g,new Zu)},Nr.prototype.ra=function(){ce(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,wg=function(){return new Ki},Ig=function(){return Oi()},Tg=tr,Vc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,go=xi,gu.COMPLETE="complete",Eg=gu,uu.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Fs=uu,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,vg=xe}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const ff="@firebase/firestore",df="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new ml("@firebase/firestore");function Fr(){return Tr.logLevel}function W(n,...e){if(Tr.logLevel<=he.DEBUG){const t=e.map(Vl);Tr.debug(`Firestore (${hs}): ${n}`,...t)}}function _n(n,...e){if(Tr.logLevel<=he.ERROR){const t=e.map(Vl);Tr.error(`Firestore (${hs}): ${n}`,...t)}}function zn(n,...e){if(Tr.logLevel<=he.WARN){const t=e.map(Vl);Tr.warn(`Firestore (${hs}): ${n}`,...t)}}function Vl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ag(n,r,t)}function Ag(n,e,t){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _n(r),new Error(r)}function Te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ag(e,s,r)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends En{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class EA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class TA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new bg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class IA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new IA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=bA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function kc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Sg(),a=SA(i.encode(gf(n,t)),i.encode(gf(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function gf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function SA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function ns(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=$t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),s=$t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(e).compare($t.extractNumericId(t)):kc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bn.fromString(e.substring(4,e.length-2))}}class Se extends $t{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Se(t)}static emptyPath(){return new Se([])}}const RA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends $t{construct(e,t,r){return new Ze(e,t,r)}static isValidIdentifier(e){return RA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mf}static keyField(){return new Ze([mf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new G(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new G(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Se.fromString(e))}static fromName(e){return new X(Se.fromString(e).popFirst(5))}static empty(){return new X(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e,t){if(!t)throw new G(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function PA(n,e,t,r){if(e===!0&&r===!0)throw new G(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _f(n){if(!X.isDocumentKey(n))throw new G(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yf(n){if(X.isDocumentKey(n))throw new G(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function gr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fa(n);throw new G(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,e){const t={typeString:n};return e&&(t.value=e),t}function Si(n,e){if(!Pg(n))throw new G(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new G(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=-62135596800,Ef=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ef);return new ke(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vf)throw new G(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ef}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Si(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Be("string",ke._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=-1;function CA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new Wn(s,X.empty(),e)}function VA(n){return new Wn(n.readTime,n.key,ui)}class Wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Wn(se.min(),X.empty(),ui)}static max(){return new Wn(se.max(),X.empty(),ui)}}function kA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==DA)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function OA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ds(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}da.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=-1;function pa(n){return n==null}function Uo(n){return n===0&&1/n==-1/0}function xA(n){return typeof n=="number"&&Number.isInteger(n)&&!Uo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="";function MA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tf(e)),e=LA(n.get(t),e);return Tf(e)}function LA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Cg:t+="";break;default:t+=i}}return t}function Tf(n){return n+Cg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wf(this.data.getIterator())}getIteratorFrom(e){return new wf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class wf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new ze(Ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kg("Invalid base64 string: "+i):i}})(e);return new et(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const FA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(n){if(Te(!!n,39018),typeof n=="string"){let e=0;const t=FA.exec(n);if(Te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gn(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="server_timestamp",Ng="__type__",Og="__previous_value__",xg="__local_write_time__";function Nl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ng])===null||t===void 0?void 0:t.stringValue)===Dg}function ga(n){const e=n.mapValue.fields[Og];return Nl(e)?ga(e):e}function hi(n){const e=Kn(n.mapValue.fields[xg].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Bo="(default)";class fi{constructor(e,t){this.projectId=e,this.database=t||Bo}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database===Bo}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="__type__",BA="__max__",no={mapValue:{}},Lg="__vector__",jo="value";function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nl(n)?4:$A(n)?9007199254740991:jA(n)?10:11:ee(28295,{value:n})}function Zt(n,e){if(n===e)return!0;const t=Qn(n);if(t!==Qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hi(n).isEqual(hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),c=Kn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Gn(s.bytesValue).isEqual(Gn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?Uo(a)===Uo(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return ns(n.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(If(a)!==If(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Zt(a[l],c[l])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function di(n,e){return(n.values||[]).find((t=>Zt(t,e)))!==void 0}function rs(n,e){if(n===e)return 0;const t=Qn(n),r=Qn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Af(n.timestampValue,e.timestampValue);case 4:return Af(hi(n),hi(e));case 5:return kc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Gn(i),l=Gn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Me(i.latitude),Me(a.latitude));return c!==0?c:ue(Me(i.longitude),Me(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return bf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},m=a.fields||{},w=(c=p[jo])===null||c===void 0?void 0:c.arrayValue,C=(l=m[jo])===null||l===void 0?void 0:l.arrayValue,O=ue(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:bf(w,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=kc(l[p],d[p]);if(m!==0)return m;const w=rs(c[l[p]],h[d[p]]);if(w!==0)return w}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function Af(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Kn(n),r=Kn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function bf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=rs(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function ss(n){return Dc(n)}function Dc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Kn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Gn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Dc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Dc(t.fields[a])}`;return s+"}"})(n.mapValue):ee(61005,{value:n})}function mo(n){switch(Qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ga(n);return e?16+mo(e):16;case 5:return 2*n.stringValue.length;case 6:return Gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+mo(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return br(r.fields,((i,a)=>{s+=i.length+mo(a)})),s})(n.mapValue);default:throw ee(13486,{value:n})}}function Sf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Nc(n){return!!n&&"integerValue"in n}function Ol(n){return!!n&&"arrayValue"in n}function Rf(n){return!!n&&"nullValue"in n}function Pf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _o(n){return!!n&&"mapValue"in n}function jA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mg])===null||t===void 0?void 0:t.stringValue)===Lg}function Zs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return br(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Zs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $A(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===BA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_o(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(t)}setAll(e){let t=Ze.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Zs(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());_o(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){br(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new bt(Zs(this.value))}}function Fg(n){const e=[];return br(n.fields,((t,r)=>{const s=new Ze([t]);if(_o(r)){const i=Fg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),bt.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,se.min(),se.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,se.min(),se.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.position=e,this.inclusive=t}}function Cf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=rs(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t="asc"){this.field=e,this.dir=t}}function qA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{}class Ue extends Ug{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zA(e,t,r):t==="array-contains"?new GA(e,r):t==="in"?new QA(e,r):t==="not-in"?new JA(e,r):t==="array-contains-any"?new XA(e,r):new Ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new WA(e,r):new KA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rs(t,this.value)):t!==null&&Qn(this.value)===Qn(t)&&this.matchesComparison(rs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Ug{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Mt(e,t)}matches(e){return Bg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Bg(n){return n.op==="and"}function jg(n){return HA(n)&&Bg(n)}function HA(n){for(const e of n.filters)if(e instanceof Mt)return!1;return!0}function Oc(n){if(n instanceof Ue)return n.field.canonicalString()+n.op.toString()+ss(n.value);if(jg(n))return n.filters.map((e=>Oc(e))).join(",");{const e=n.filters.map((t=>Oc(t))).join(",");return`${n.op}(${e})`}}function $g(n,e){return n instanceof Ue?(function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)})(n,e):n instanceof Mt?(function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&$g(a,s.filters[c])),!0):!1})(n,e):void ee(19439)}function qg(n){return n instanceof Ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${ss(t.value)}`})(n):n instanceof Mt?(function(t){return t.op.toString()+" {"+t.getFilters().map(qg).join(" ,")+"}"})(n):"Filter"}class zA extends Ue{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class WA extends Ue{constructor(e,t){super(e,"in",t),this.keys=Hg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class KA extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=Hg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class GA extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ol(t)&&di(t.arrayValue,this.value)}}class QA extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class JA extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!di(this.value.arrayValue,t)}}class XA extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>di(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function kf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new YA(n,e,t,r,s,i,a)}function xl(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Oc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),pa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ss(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ss(r))).join(",")),e.Pe=t}return e.Pe}function Ml(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$g(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vf(n.startAt,e.startAt)&&Vf(n.endAt,e.endAt)}function xc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ZA(n,e,t,r,s,i,a,c){return new Ri(n,e,t,r,s,i,a,c)}function Ll(n){return new Ri(n)}function Df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zg(n){return n.collectionGroup!==null}function ei(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ze(Ze.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new qo(i,r))})),t.has(Ze.keyField().canonicalString())||e.Te.push(new qo(Ze.keyField(),r))}return e.Te}function Kt(n){const e=ie(n);return e.Ie||(e.Ie=eb(e,ei(n))),e.Ie}function eb(n,e){if(n.limitType==="F")return kf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)}));const t=n.endAt?new $o(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $o(n.startAt.position,n.startAt.inclusive):null;return kf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Mc(n,e){const t=n.filters.concat([e]);return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Lc(n,e,t){return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ma(n,e){return Ml(Kt(n),Kt(e))&&n.limitType===e.limitType}function Wg(n){return`${xl(Kt(n))}|lt:${n.limitType}`}function Ur(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>qg(s))).join(", ")}]`),pa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ss(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ss(s))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function _a(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Cf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,ei(r),s)||r.endAt&&!(function(a,c,l){const h=Cf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,ei(r),s))})(n,e)}function tb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kg(n){return(e,t)=>{let r=!1;for(const s of ei(n)){const i=nb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nb(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Vg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new Oe(X.comparator);function yn(){return rb}const Gg=new Oe(X.comparator);function Us(...n){let e=Gg;for(const t of n)e=e.insert(t.key,t);return e}function Qg(n){let e=Gg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function hr(){return ti()}function Jg(){return ti()}function ti(){return new Sr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const sb=new Oe(X.comparator),ib=new ze(X.comparator);function fe(...n){let e=ib;for(const t of n)e=e.add(t);return e}const ob=new ze(ue);function ab(){return ob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function Xg(n){return{integerValue:""+n}}function cb(n,e){return xA(e)?Xg(e):Fl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this._=void 0}}function lb(n,e,t){return n instanceof Ho?(function(s,i){const a={fields:{[Ng]:{stringValue:Dg},[xg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nl(i)&&(i=ga(i)),i&&(a.fields[Og]=i),{mapValue:a}})(t,e):n instanceof pi?Zg(n,e):n instanceof gi?em(n,e):(function(s,i){const a=Yg(s,i),c=Nf(a)+Nf(s.Ee);return Nc(a)&&Nc(s.Ee)?Xg(c):Fl(s.serializer,c)})(n,e)}function ub(n,e,t){return n instanceof pi?Zg(n,e):n instanceof gi?em(n,e):t}function Yg(n,e){return n instanceof zo?(function(r){return Nc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ho extends ya{}class pi extends ya{constructor(e){super(),this.elements=e}}function Zg(n,e){const t=tm(e);for(const r of n.elements)t.some((s=>Zt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class gi extends ya{constructor(e){super(),this.elements=e}}function em(n,e){let t=tm(e);for(const r of n.elements)t=t.filter((s=>!Zt(s,r)));return{arrayValue:{values:t}}}class zo extends ya{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Nf(n){return Me(n.integerValue||n.doubleValue)}function tm(n){return Ol(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hb(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof pi&&s instanceof pi||r instanceof gi&&s instanceof gi?ns(r.elements,s.elements,Zt):r instanceof zo&&s instanceof zo?Zt(r.Ee,s.Ee):r instanceof Ho&&s instanceof Ho})(n.transform,e.transform)}class fb{constructor(e,t){this.version=e,this.transformResults=t}}class hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class va{}function nm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sm(n.key,hn.none()):new Pi(n.key,n.data,hn.none());{const t=n.data,r=bt.empty();let s=new ze(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Rr(n.key,r,new Dt(s.toArray()),hn.none())}}function db(n,e,t){n instanceof Pi?(function(s,i,a){const c=s.value.clone(),l=xf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Rr?(function(s,i,a){if(!yo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=xf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(rm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ni(n,e,t,r){return n instanceof Pi?(function(i,a,c,l){if(!yo(i.precondition,a))return c;const h=i.value.clone(),d=Mf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Rr?(function(i,a,c,l){if(!yo(i.precondition,a))return c;const h=Mf(i.fieldTransforms,l,a),d=a.data;return d.setAll(rm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return yo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function pb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yg(r.transform,s||null);i!=null&&(t===null&&(t=bt.empty()),t.set(r.field,i))}return t||null}function Of(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,((i,a)=>hb(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pi extends va{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends va{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function xf(n,e,t){const r=new Map;Te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ub(a,c,t[s]))}return r}function Mf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,lb(i,a,e))}return r}class sm extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gb extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&db(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ni(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ni(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=nm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,((t,r)=>Of(t,r)))&&ns(this.baseMutations,e.baseMutations,((t,r)=>Of(t,r)))}}class Ul{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return sb})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ul(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ge;function vb(n){switch(n){case k.OK:return ee(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function im(n){if(n===void 0)return _n("GRPC error has no .code"),k.UNKNOWN;switch(n){case Fe.OK:return k.OK;case Fe.CANCELLED:return k.CANCELLED;case Fe.UNKNOWN:return k.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return k.INTERNAL;case Fe.UNAVAILABLE:return k.UNAVAILABLE;case Fe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Fe.NOT_FOUND:return k.NOT_FOUND;case Fe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Fe.ABORTED:return k.ABORTED;case Fe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Fe.DATA_LOSS:return k.DATA_LOSS;default:return ee(39323,{code:n})}}(ge=Fe||(Fe={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new Bn([4294967295,4294967295],0);function Lf(n){const e=Sg().encode(n),t=new yg;return t.update(e),new Uint8Array(t.digest())}function Ff(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bn([t,r],0),new Bn([s,i],0)]}class Bl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Bn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Bn.fromNumber(r)));return s.compare(Eb)===1&&(s=new Bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Lf(e),[r,s]=Ff(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Bl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Lf(e),[r,s]=Ff(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ea(se.min(),s,new Oe(ue),yn(),fe())}}class Ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ci(r,t,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class om{constructor(e,t){this.targetId=e,this.De=t}}class am{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Uf{constructor(){this.ve=0,this.Ce=Bf(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Ci(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Bf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Tb{constructor(e){this.We=e,this.Ge=new Map,this.ze=yn(),this.je=ro(),this.Je=ro(),this.He=new Oe(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(xc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,ct.newNoDocument(a,se.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Gn(r).toUint8Array()}catch(l){if(l instanceof kg)return zn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Bl(a,s,i)}catch(l){return zn(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&xc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ea(e,t,this.He,this.ze,r);return this.ze=yn(),this.je=ro(),this.Je=ro(),this.He=new Oe(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Uf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ze(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ze(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Uf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ro(){return new Oe(X.comparator)}function Bf(){return new Oe(X.comparator)}const Ib={asc:"ASCENDING",desc:"DESCENDING"},wb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ab={and:"AND",or:"OR"};class bb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Fc(n,e){return n.useProto3Json||pa(e)?e:{value:e}}function Wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sb(n,e){return Wo(n,e.toTimestamp())}function Gt(n){return Te(!!n,49232),se.fromTimestamp((function(t){const r=Kn(t);return new ke(r.seconds,r.nanos)})(n))}function jl(n,e){return Uc(n,e).canonicalString()}function Uc(n,e){const t=(function(s){return new Se(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function lm(n){const e=Se.fromString(n);return Te(pm(e),10190,{key:e.toString()}),e}function Bc(n,e){return jl(n.databaseId,e.path)}function ic(n,e){const t=lm(e);if(t.get(1)!==n.databaseId.projectId)throw new G(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(hm(t))}function um(n,e){return jl(n.databaseId,e)}function Rb(n){const e=lm(n);return e.length===4?Se.emptyPath():hm(e)}function jc(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hm(n){return Te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function jf(n,e,t){return{name:Bc(n,e),fields:t.value.mapValue.fields}}function Pb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Te(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:im(h.code);return new G(d,h.message||"")})(a);t=new am(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ic(n,r.document.name),i=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):se.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new vo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ic(n,r.document),i=r.readTime?Gt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new vo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ic(n,r.document),i=r.removedTargetIds||[];t=new vo([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new yb(s,i),c=r.targetId;t=new om(c,a)}}return t}function Cb(n,e){let t;if(e instanceof Pi)t={update:jf(n,e.key,e.value)};else if(e instanceof sm)t={delete:Bc(n,e.key)};else if(e instanceof Rr)t={update:jf(n,e.key,e.data),updateMask:Fb(e.fieldMask)};else{if(!(e instanceof gb))return ee(16599,{Rt:e.type});t={verify:Bc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Sb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function Vb(n,e){return n&&n.length>0?(Te(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Gt(s.updateTime):Gt(i);return a.isEqual(se.min())&&(a=Gt(i)),new fb(a,s.transformResults||[])})(t,e)))):[]}function kb(n,e){return{documents:[um(n,e.path)]}}function Db(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=um(n,s);const i=(function(h){if(h.length!==0)return dm(Mt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(m){return{field:Br(m.field),direction:xb(m.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Fc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function Nb(n){let e=Rb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const m=fm(p);return m instanceof Mt&&jg(m)?m.getFilters():[m]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((m=>(function(C){return new qo(jr(C.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,pa(m)?null:m})(t.limit));let l=null;t.startAt&&(l=(function(p){const m=!!p.before,w=p.values||[];return new $o(w,m)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const m=!p.before,w=p.values||[];return new $o(w,m)})(t.endAt)),ZA(e,s,a,i,c,"F",l,h)}function Ob(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jr(t.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(t.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(t.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(t.unaryFilter.field);return Ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ue.create(jr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Mt.create(t.compositeFilter.filters.map((r=>fm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function xb(n){return Ib[n]}function Mb(n){return wb[n]}function Lb(n){return Ab[n]}function Br(n){return{fieldPath:n.canonicalString()}}function jr(n){return Ze.fromServerFormat(n.fieldPath)}function dm(n){return n instanceof Ue?(function(t){if(t.op==="=="){if(Pf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NAN"}};if(Rf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NAN"}};if(Rf(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(t.field),op:Mb(t.op),value:t.value}}})(n):n instanceof Mt?(function(t){const r=t.getFilters().map((s=>dm(s)));return r.length===1?r[0]:{compositeFilter:{op:Lb(t.op),filters:r}}})(n):ee(54877,{filter:n})}function Fb(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,r,s,i=se.min(),a=se.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.gt=e}}function Bb(n){const e=Nb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Dn=new $b}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Wn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class $b{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ze(Se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gm=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(gm,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new is(0)}static ur(){return new is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="LruGarbageCollector",qb=1048576;function Hf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class Hb{constructor(e){this.Tr=e,this.buffer=new ze(Hf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Hf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(qf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ds(t)?W(qf,"Ignoring IndexedDB error during garbage collection: ",t):await fs(t)}await this.Rr(3e5)}))}}class Wb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(da.ue);const r=new Hb(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve($f)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$f):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Fr()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Kb(n,e){return new Wb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.changes=new Sr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ni(r.mutation,s,Dt.empty(),ke.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=hr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Us();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=hr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=yn();const a=ti(),c=(function(){return ti()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Rr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ni(d.mutation,h,d.mutation.getFieldMask(),ke.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new Qb(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=ti();let s=new Oe(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Dt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Jg();d.forEach((m=>{if(!i.has(m)){const w=nm(t.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(hr());let c=ui,l=i;return a.next((h=>D.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:Qg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Us();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(p,m){return new Ri(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=Us();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ni(d.mutation,h,Dt.empty(),ke.now()),_a(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Bb(s.bundledQuery),readTime:Gt(s.readTime)}})(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.overlays=new Oe(X.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hr();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=hr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=hr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=hr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _b(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.qr=new ze(We.Qr),this.$r=new ze(We.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new We(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new We(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Se([])),r=new We(t,e),s=new We(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Se([])),r=new We(t,e),s=new We(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new We(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ze(We.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mb(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new We(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Dl:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ze(ue);return t.forEach((s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new We(new X(i),0);let c=new ze(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new We(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new We(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.ni=e,this.docs=(function(){return new Oe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=yn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yn();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||kA(VA(d),r)<=0||(s.has(d.key)||_a(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new n0(this)}getSize(e){return D.resolve(this.size)}}class n0 extends Gb{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.persistence=e,this.ii=new Sr((t=>xl(t)),Ml),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new $l,this.targetCount=0,this._i=is.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new is(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.ai={},this.overlays={},this.ui=new da(0),this.ci=!1,this.ci=!0,this.li=new Zb,this.referenceDelegate=e(this),this.hi=new r0(this),this.indexManager=new jb,this.remoteDocumentCache=(function(s){return new t0(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Ub(t),this.Ti=new Xb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new e0(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new s0(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class s0 extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class ql{constructor(e){this.persistence=e,this.Ai=new $l,this.Ri=null}static Vi(e){return new ql(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ko{constructor(e,t){this.persistence=e,this.gi=new Sr((r=>MA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Kb(this,t)}static Vi(e,t){return new Ko(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mo(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return YE()?8:OA(ht())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new i0;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Fr()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Fr()<=he.DEBUG&&W("QueryEngine","Query:",Ur(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Fr()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):D.resolve())}ps(e,t){if(Df(t))return D.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Lc(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,Lc(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return Df(t)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(Fr()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(t)),this.vs(e,a,t,CA(s,ui)).next((c=>c)))}))}bs(e,t){let r=new ze(Kg(e));return t.forEach(((s,i)=>{_a(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Fr()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ur(t)),this.gs.getDocumentsMatchingQuery(e,t,Wn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="LocalStore",a0=3e8;class c0{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Oe(ue),this.Ms=new Sr((i=>xl(i)),Ml),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function l0(n,e,t,r){return new c0(n,e,t,r)}async function _m(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function u0(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,m=p.keys();let w=D.resolve();return m.forEach((C=>{w=w.next((()=>d.getEntry(l,C))).next((O=>{const L=h.docVersions.get(C);Te(L!==null,48541),O.version.compareTo(L)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function ym(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function h0(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),(function(O,L,z){return O.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=a0?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(m,w,d)&&c.push(t.hi.updateTargetData(i,w))}));let l=yn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(f0(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function f0(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=yn();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(zl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function d0(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Dl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function p0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new On(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function $c(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ds(a))throw a;W(zl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function zf(n,e,t){const r=ie(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),m=p.Ms.get(d);return m!==void 0?D.resolve(p.Fs.get(m)):p.hi.getTargetData(h,d)})(r,a,Kt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe()))).next((c=>(g0(r,tb(e),c),{documents:c,qs:i})))))}function g0(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Wf{constructor(){this.activeTargetIds=ab()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m0{constructor(){this.Fo=new Wf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Wf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="ConnectivityMonitor";class Gf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Kf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Kf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function qc(){return so===null?so=(function(){return 268435456+Math.round(2147483648*Math.random())})():so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="RestConnection",y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class v0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Bo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=qc(),c=this.Go(e,t.toUriEncodedString());W(oc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=cs(h);return this.jo(e,c,l,r,d).then((p=>(W(oc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw zn(oc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=y0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class T0 extends v0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=qc();return new Promise(((c,l)=>{const h=new vg;h.setWithCredentials(!0),h.listenOnce(Eg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case go.NO_ERROR:const p=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case go.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new G(k.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const m=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const O=(function(z){const K=z.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(K)>=0?K:k.UNKNOWN})(C.status);l(new G(O,C.message))}else l(new G(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new G(k.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=qc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=wg(),c=Ig(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let m=!1,w=!1;const C=new E0({Ho:L=>{w?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(m||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),W(st,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Yo:()=>p.close()}),O=(L,z,K)=>{L.listen(z,(Q=>{try{K(Q)}catch(H){setTimeout((()=>{throw H}),0)}}))};return O(p,Fs.EventType.OPEN,(()=>{w||(W(st,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),O(p,Fs.EventType.CLOSE,(()=>{w||(w=!0,W(st,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))})),O(p,Fs.EventType.ERROR,(L=>{w||(w=!0,zn(st,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),C.__(new G(k.UNAVAILABLE,"The operation could not be completed")))})),O(p,Fs.EventType.MESSAGE,(L=>{var z;if(!w){const K=L.data[0];Te(!!K,16349);const Q=K,H=(Q==null?void 0:Q.error)||((z=Q[0])===null||z===void 0?void 0:z.error);if(H){W(st,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let ve=(function(y){const T=Fe[y];if(T!==void 0)return im(T)})(oe),I=H.message;ve===void 0&&(ve=k.INTERNAL,I="Unknown error status: "+oe+" with message "+H.message),w=!0,C.__(new G(ve,I)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,K),C.a_(K)}})),O(c,Tg.STAT_EVENT,(L=>{L.stat===Vc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Vc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){return new bb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="PersistentStream";class Em{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new vm(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(_n(t.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new G(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Qf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Qf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class I0 extends Em{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Pb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Gt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=jc(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=xc(l)?{documents:kb(i,l)}:{query:Db(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=cm(i,a.resumeToken);const h=Fc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Wo(i,a.snapshotVersion.toTimestamp());const h=Fc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Ob(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=jc(this.serializer),t.removeTarget=e,this.k_(t)}}class w0 extends Em{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Vb(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=jc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Cb(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{}class b0 extends A0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new G(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Uc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Uc(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class S0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_n(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="RemoteStore";class R0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Pr(this)&&(W(Ir,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Vi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Ia(h)})(this))}))})),this.Aa=new S0(r,s)}}async function Ia(n){if(Pr(n))for(const e of n.da)await e(!0)}async function Vi(n){for(const e of n.da)await e(!1)}function Tm(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ql(t)?Gl(t):ps(t).x_()&&Kl(t,e))}function Wl(n,e){const t=ie(n),r=ps(t);t.Ta.delete(e),r.x_()&&Im(t,e),t.Ta.size===0&&(r.x_()?r.B_():Pr(t)&&t.Aa.set("Unknown"))}function Kl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ps(n).H_(e)}function Im(n,e){n.Ra.$e(e),ps(n).Y_(e)}function Gl(n){n.Ra=new Tb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ps(n).start(),n.Aa.aa()}function Ql(n){return Pr(n)&&!ps(n).M_()&&n.Ta.size>0}function Pr(n){return ie(n).Ia.size===0}function wm(n){n.Ra=void 0}async function P0(n){n.Aa.set("Online")}async function C0(n){n.Ta.forEach(((e,t)=>{Kl(n,e)}))}async function V0(n,e){wm(n),Ql(n)?(n.Aa.la(e),Gl(n)):n.Aa.set("Unknown")}async function k0(n,e,t){if(n.Aa.set("Online"),e instanceof am&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(Ir,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(n,r)}else if(e instanceof vo?n.Ra.Ye(e):e instanceof om?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await ym(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Im(i,l);const p=new On(d.target,l,h,d.sequenceNumber);Kl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(Ir,"Failed to raise snapshot:",r),await Go(n,r)}}async function Go(n,e,t){if(!ds(e))throw e;n.Ia.add(1),await Vi(n),n.Aa.set("Offline"),t||(t=()=>ym(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(Ir,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ia(n)}))}function Am(n,e){return e().catch((t=>Go(n,t,e)))}async function wa(n){const e=ie(n),t=Jn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Dl;for(;D0(e);)try{const s=await d0(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,N0(e,s)}catch(s){await Go(e,s)}bm(e)&&Sm(e)}function D0(n){return Pr(n)&&n.Pa.length<10}function N0(n,e){n.Pa.push(e);const t=Jn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function bm(n){return Pr(n)&&!Jn(n).M_()&&n.Pa.length>0}function Sm(n){Jn(n).start()}async function O0(n){Jn(n).na()}async function x0(n){const e=Jn(n);for(const t of n.Pa)e.X_(t.mutations)}async function M0(n,e,t){const r=n.Pa.shift(),s=Ul.from(r,e,t);await Am(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await wa(n)}async function L0(n,e){e&&Jn(n).Z_&&await(async function(r,s){if((function(a){return vb(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();Jn(r).N_(),await Am(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wa(r)}})(n,e),bm(n)&&Sm(n)}async function Jf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(Ir,"RemoteStore received new credentials");const r=Pr(t);t.Ia.add(3),await Vi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ia(t)}async function F0(n,e){const t=ie(n);e?(t.Ia.delete(2),await Ia(t)):e||(t.Ia.add(2),await Vi(t),t.Aa.set("Unknown"))}function ps(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new I0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:P0.bind(null,n),e_:C0.bind(null,n),n_:V0.bind(null,n),J_:k0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ql(n)?Gl(n):n.Aa.set("Unknown")):(await n.Va.stop(),wm(n))}))),n.Va}function Jn(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new w0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:O0.bind(null,n),n_:L0.bind(null,n),ea:x0.bind(null,n),ta:M0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await wa(n)):(await n.ma.stop(),n.Pa.length>0&&(W(Ir,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Jl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(n,e){if(_n("AsyncQueue",`${e}: ${n}`),ds(n))return new G(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static emptySet(e){return new Yr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Us(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.fa=new Oe(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class os{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new os(e,t,Yr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class B0{constructor(){this.queries=Yf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Yf(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new G(k.ABORTED,"Firestore shutting down"))}}function Yf(){return new Sr((n=>Wg(n)),ma)}async function Rm(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new U0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Xl(a,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Yl(t)}async function Pm(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function j0(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Yl(t)}function $0(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Yl(n){n.Da.forEach((e=>{e.next()}))}var Hc,Zf;(Zf=Hc||(Hc={})).Fa="default",Zf.Cache="cache";class Cm{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Hc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class q0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=Kg(e),this.eu=new Yr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Xf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const m=s.get(d),w=_a(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let L=!1;m&&w?m.data.isEqual(w.data)?C!==O&&(r.track({type:3,doc:w}),L=!0):this.iu(m,w)||(r.track({type:2,doc:w}),L=!0,(l&&this.Xa(w,l)>0||h&&this.Xa(w,h)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),L=!0):m&&!w&&(r.track({type:1,doc:m}),L=!0,(l||h)&&(c=!0)),L&&(w?(a=a.add(w),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(w,C){const O=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:L})}};return O(w)-O(C)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new os(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new km(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Vm(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return os.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zl="SyncEngine";class H0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class z0{constructor(e){this.key=e,this.lu=!1}}class W0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Sr((c=>Wg(c)),ma),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(X.comparator),this.Eu=new Map,this.Au=new $l,this.Ru={},this.Vu=new Map,this.mu=is.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function K0(n,e,t=!0){const r=Lm(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Dm(r,e,t,!0),s}async function G0(n,e){const t=Lm(n);await Dm(t,e,!0,!1)}async function Dm(n,e,t,r){const s=await p0(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Q0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tm(n.remoteStore,s),c}async function Q0(n,e,t,r,s){n.gu=(p,m,w)=>(async function(O,L,z,K){let Q=L.view.nu(z);Q.Ds&&(Q=await zf(O.localStore,L.query,!1).then((({documents:I})=>L.view.nu(I,Q))));const H=K&&K.targetChanges.get(L.targetId),oe=K&&K.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges(Q,O.isPrimaryClient,H,oe);return td(O,L.targetId,ve._u),ve.snapshot})(n,p,m,w);const i=await zf(n.localStore,e,!0),a=new q0(e,i.qs),c=a.nu(i.documents),l=Ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);td(n,t,h._u);const d=new H0(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function J0(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!ma(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $c(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Wl(r.remoteStore,s.targetId),zc(r,s.targetId)})).catch(fs)):(zc(r,s.targetId),await $c(r.localStore,s.targetId,!0))}async function X0(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Wl(t.remoteStore,r.targetId))}async function Y0(n,e,t){const r=iS(n);try{const s=await(function(a,c){const l=ie(a),h=ke.now(),d=c.reduce(((w,C)=>w.add(C.key)),fe());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let C=yn(),O=fe();return l.Os.getEntries(w,d).next((L=>{C=L,C.forEach(((z,K)=>{K.isValidDocument()||(O=O.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(w,C))).next((L=>{p=L;const z=[];for(const K of c){const Q=pb(K,p.get(K.key).overlayedDocument);Q!=null&&z.push(new Rr(K.key,Q,Fg(Q.value.mapValue),hn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,z,c)})).next((L=>{m=L;const z=L.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(w,L.batchId,z)}))})).then((()=>({batchId:m.batchId,changes:Qg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await ki(r,s.changes),await wa(r.remoteStore)}catch(s){const i=Xl(s,"Failed to persist write");t.reject(i)}}async function Nm(n,e){const t=ie(n);try{const r=await h0(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Te(a.lu,14607):s.removedDocuments.size>0&&(Te(a.lu,42227),a.lu=!1))})),await ki(t,r,e)}catch(r){await fs(r)}}function ed(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const m of p.wa)m.va(c)&&(h=!0)})),h&&Yl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Z0(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=fe().add(i),l=new Ea(se.min(),new Map,new Oe(ue),a,c);await Nm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),eu(r)}else await $c(r.localStore,e,!1).then((()=>zc(r,e,t))).catch(fs)}async function eS(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await u0(t.localStore,e);xm(t,r,null),Om(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,s)}catch(s){await fs(s)}}async function tS(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Te(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);xm(r,e,t),Om(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,s)}catch(s){await fs(s)}}function Om(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function xm(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function zc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Mm(n,r)}))}function Mm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Wl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),eu(n))}function td(n,e,t){for(const r of t)r instanceof Vm?(n.Au.addReference(r.key,e),nS(n,r)):r instanceof km?(W(Zl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Mm(n,r.key)):ee(19791,{yu:r})}function nS(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(Zl,"New document in limbo: "+t),n.Iu.add(r),eu(n))}function eu(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Se.fromString(e)),r=n.mu.next();n.Eu.set(r,new z0(t)),n.du=n.du.insert(t,r),Tm(n.remoteStore,new On(Kt(Ll(t.path)),r,"TargetPurposeLimboResolution",da.ue))}}async function ki(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hl.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(m=>D.forEach(m.Is,(w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w))).next((()=>D.forEach(m.ds,(w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))))))}catch(p){if(!ds(p))throw p;W(zl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const w=d.Fs.get(m),C=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(C);d.Fs=d.Fs.insert(m,O)}}})(r.localStore,i))}async function rS(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(Zl,"User change. New user:",e.toKey());const r=await _m(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new G(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Bs)}}function sS(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Lm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z0.bind(null,e),e.hu.J_=j0.bind(null,e.eventManager),e.hu.pu=$0.bind(null,e.eventManager),e}function iS(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tS.bind(null,e),e}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return l0(this.persistence,new o0,e.initialUser,this.serializer)}Du(e){return new mm(ql.Vi,this.serializer)}bu(e){return new m0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class oS extends Qo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Te(this.persistence.referenceDelegate instanceof Ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zb(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new mm((r=>Ko.Vi(r,t)),this.serializer)}}class Wc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ed(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rS.bind(null,this.syncEngine),await F0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new B0})()}createDatastore(e){const t=Ta(e.databaseInfo.databaseId),r=(function(i){return new T0(i)})(e.databaseInfo);return(function(i,a,c,l){return new b0(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new R0(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>ed(this.syncEngine,t,0)),(function(){return Gf.C()?new Gf:new _0})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new W0(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(Ir,"RemoteStore shutting down."),i.Ia.add(5),await Vi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wc.provider={build:()=>new Wc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="FirestoreClient";class aS{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=kl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Xl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function cc(n,e){n.asyncQueue.verifyOperationInProgress(),W(Xn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await _m(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{zn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{zn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function nd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cS(n);W(Xn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Jf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Jf(e.remoteStore,s))),n._onlineComponents=e}async function cS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(Xn,"Using user provided OfflineComponentProvider");try{await cc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;zn("Error using user provided cache. Falling back to memory cache: "+t),await cc(n,new Qo)}}else W(Xn,"Using default OfflineComponentProvider"),await cc(n,new oS(void 0));return n._offlineComponents}async function Um(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(Xn,"Using user provided OnlineComponentProvider"),await nd(n,n._uninitializedComponentsProvider._online)):(W(Xn,"Using default OnlineComponentProvider"),await nd(n,new Wc))),n._onlineComponents}function lS(n){return Um(n).then((e=>e.syncEngine))}async function Kc(n){const e=await Um(n),t=e.eventManager;return t.onListen=K0.bind(null,e.syncEngine),t.onUnlisten=J0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=G0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=X0.bind(null,e.syncEngine),t}function uS(n,e,t={}){const r=new jn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new Fm({next:m=>{d.Ou(),a.enqueueAndForget((()=>Pm(i,p))),m.fromCache&&l.source==="server"?h.reject(new G(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Cm(c,d,{includeMetadataChanges:!0,ka:!0});return Rm(i,p)})(await Kc(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="firestore.googleapis.com",sd=!0;class id{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jm,this.ssl=sd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:sd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qb)throw new G(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new id({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new id(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new vA;switch(r.type){case"firstParty":return new wA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=rd.get(t);r&&(W("ComponentProvider","Removing Datastore"),rd.delete(t),r.terminate())})(this),Promise.resolve()}}function hS(n,e,t,r={}){var s;n=gr(n,Aa);const i=cs(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Op(`https://${l}`),xp("Firestore",!0)),a.host!==jm&&a.host!==l&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!yr(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=qE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(m)}n._authCredentials=new EA(new bg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Si(t,He._jsonSchema))return new He(e,r||null,new X(Se.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Be("string",He._jsonSchemaVersion),referencePath:Be("string")};class $n extends Cr{constructor(e,t,r){super(e,t,Ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new X(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function Ns(n,e,...t){if(n=_t(n),Rg("collection","path",e),n instanceof Aa){const r=Se.fromString(e,...t);return yf(r),new $n(n,null,r)}{if(!(n instanceof He||n instanceof $n))throw new G(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return yf(r),new $n(n.firestore,null,r)}}function fS(n,e,...t){if(n=_t(n),arguments.length===1&&(e=kl.newId()),Rg("doc","path",e),n instanceof Aa){const r=Se.fromString(e,...t);return _f(r),new He(n,null,new X(r))}{if(!(n instanceof He||n instanceof $n))throw new G(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return _f(r),new He(n.firestore,n instanceof $n?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="AsyncQueue";class ad{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new vm(this,"async_queue_retry"),this.oc=()=>{const r=ac();r&&W(od,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=ac();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new jn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ds(e))throw e;W(od,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_n("INTERNAL UNHANDLED ERROR: ",cd(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Jl.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:cd(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function cd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class mi extends Aa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ad,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ad(e),this._firestoreClient=void 0,await e}}}function dS(n,e){const t=typeof n=="object"?n:Up(),r=typeof n=="string"?n:Bo,s=yl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jE("firestore");i&&hS(s,...i)}return s}function tu(n){if(n._terminated)throw new G(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pS(n),n._firestoreClient}function pS(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new UA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Bm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new aS(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(et.fromBase64String(e))}catch(t){throw new G(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new St(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Si(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:Be("string",St._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(e){if(Si(e,Qt._jsonSchema))return new Qt(e.latitude,e.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:Be("string",Qt._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Si(e,Jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jt(e.vectorValues);throw new G(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jt._jsonSchemaVersion="firestore/vectorValue/1.0",Jt._jsonSchema={type:Be("string",Jt._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^__.*__$/;class mS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pi(e,this.data,t,this.fieldTransforms)}}function qm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}class ru{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Jo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(qm(this.Ec)&&gS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class _S{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ta(e)}Dc(e,t,r,s=!1){return new ru({Ec:e,methodName:t,bc:r,path:Ze.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hm(n){const e=n._freezeSettings(),t=Ta(n._databaseId);return new _S(n._databaseId,!!e.ignoreUndefinedProperties,t)}function yS(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Km("Data must be an object, but it was:",a,r);const c=zm(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ES(e,p,t);if(!a.contains(m))throw new G(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);IS(d,m)||d.push(m)}l=new Dt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new mS(new bt(c),l,h)}function vS(n,e,t,r=!1){return su(t,n.Dc(r?4:3,e))}function su(n,e){if(Wm(n=_t(n)))return Km("Unsupported field value:",e,n),zm(n,e);if(n instanceof $m)return(function(r,s){if(!qm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=su(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:cm(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jt)return(function(a,c){return{mapValue:{fields:{[Mg]:{stringValue:Lg},[jo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Fl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fa(r)}`)})(n,e)}function zm(n,e){const t={};return Vg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(n,((r,s)=>{const i=su(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Wm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof Qt||n instanceof St||n instanceof He||n instanceof $m||n instanceof Jt)}function Km(n,e,t){if(!Wm(t)||!Pg(t)){const r=fa(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ES(n,e,t){if((e=_t(e))instanceof nu)return e._internalPath;if(typeof e=="string")return Gm(n,e);throw Jo("Field path arguments must be of type string or ",n,!1,void 0,t)}const TS=new RegExp("[~\\*/\\[\\]]");function Gm(n,e,t){if(e.search(TS)>=0)throw Jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nu(...e.split("."))._internalPath}catch{throw Jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new G(k.INVALID_ARGUMENT,c+n+l)}function IS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(iu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wS extends Qm{data(){return super.data()}}function iu(n,e){return typeof e=="string"?Gm(n,e):e instanceof nu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ou{}class AS extends ou{}function bS(n,e,...t){let r=[];e instanceof ou&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof au)).length,c=i.filter((l=>l instanceof ba)).length;if(a>1||a>0&&c>0)throw new G(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ba extends AS{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ba(e,t,r)}_apply(e){const t=this._parse(e);return Xm(e._query,t),new Cr(e.firestore,e.converter,Mc(e._query,t))}_parse(e){const t=Hm(e.firestore);return(function(i,a,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hd(p,d);const C=[];for(const O of p)C.push(ud(l,i,O));m={arrayValue:{values:C}}}else m=ud(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hd(p,d),m=vS(c,a,p,d==="in"||d==="not-in");return Ue.create(h,d,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function SS(n,e,t){const r=e,s=iu("where",n);return ba._create(s,r,t)}class au extends ou{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new au(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Xm(a,l),a=Mc(a,l)})(e._query,t),new Cr(e.firestore,e.converter,Mc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ud(n,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new G(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zg(e)&&t.indexOf("/")!==-1)throw new G(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!X.isDocumentKey(r))throw new G(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sf(n,new X(r))}if(t instanceof He)return Sf(n,t._key);throw new G(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fa(t)}.`)}function hd(n,e){if(!Array.isArray(n)||n.length===0)throw new G(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xm(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new G(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class RS{convertValue(e,t="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return br(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[jo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Me(a.doubleValue)));return new Jt(i)}convertGeoPoint(e){return new Qt(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ga(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const t=Kn(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);Te(pm(r),9688,{name:e});const s=new fi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class js{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mr extends Qm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",mr._jsonSchema={type:Be("string",mr._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Eo extends mr{data(e={}){return super.data(e)}}class _r{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Eo(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Eo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:CS(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_r._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}_r._jsonSchemaVersion="firestore/querySnapshot/1.0",_r._jsonSchema={type:Be("string",_r._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class cu extends RS{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function lc(n){n=gr(n,Cr);const e=gr(n.firestore,mi),t=tu(e),r=new cu(e);return Jm(n._query),uS(t,n._query).then((s=>new _r(e,r,n,s)))}function VS(n,e){const t=gr(n.firestore,mi),r=fS(n),s=PS(n.converter,e);return DS(t,[yS(Hm(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then((()=>r))}function kS(n,...e){var t,r,s;n=_t(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ld(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ld(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof He)h=gr(n.firestore,mi),d=Ll(n._key.path),l={next:p=>{e[a]&&e[a](NS(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=gr(n,Cr);h=gr(p.firestore,mi),d=p._query;const m=new cu(h);l={next:w=>{e[a]&&e[a](new _r(h,m,p,w))},error:e[a+1],complete:e[a+2]},Jm(n._query)}return(function(m,w,C,O){const L=new Fm(O),z=new Cm(w,L,C);return m.asyncQueue.enqueueAndForget((async()=>Rm(await Kc(m),z))),()=>{L.Ou(),m.asyncQueue.enqueueAndForget((async()=>Pm(await Kc(m),z)))}})(tu(h),d,c,l)}function DS(n,e){return(function(r,s){const i=new jn;return r.asyncQueue.enqueueAndForget((async()=>Y0(await lS(r),s,i))),i.promise})(tu(n),e)}function NS(n,e,t){const r=t.docs.get(e._key),s=new cu(n);return new mr(n,s,e._key,r,new js(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){hs=s})(ls),es(new vr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new mi(new TA(r.getProvider("auth-internal")),new AA(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Un(ff,df,e),Un(ff,df,"esm2017")})();const OS={apiKey:"AIzaSyAg_R6Tz1dwtr4aVmcJGOe5ogv4_1x6CK8",authDomain:"brew-and-save-project4.firebaseapp.com",projectId:"brew-and-save-project4",storageBucket:"brew-and-save-project4.firebasestorage.app",messagingSenderId:"664552986490",appId:"1:664552986490:web:4a6b9ed59bbd70ff0da8c3",measurementId:"G-GB6RS8Y7JF"},Ym=Fp(OS),Gc=_A(Ym),Os=dS(Ym);new Ht;const Zm=tE("BeverageStore",{state:()=>({user:null,temps:xh,currentTemp:xh[0],bases:[],currentBase:"",syrups:[],currentSyrup:"",creamers:[],currentCreamer:"",beverages:[],currentBeverage:null,beverageName:"",currentName:"",isLoaded:!1,unsubscribeBeverages:null}),actions:{async init(){try{const n=await lc(Ns(Os,"bases"));this.bases=n.docs.map(r=>({id:r.id,...r.data()}));const e=await lc(Ns(Os,"creamers"));this.creamers=e.docs.map(r=>({id:r.id,...r.data()}));const t=await lc(Ns(Os,"syrups"));this.syrups=t.docs.map(r=>({id:r.id,...r.data()})),this.bases.length>0&&(this.currentBase=this.bases[0].id),this.creamers.length>0&&(this.currentCreamer=this.creamers[0].id),this.syrups.length>0&&(this.currentSyrup=this.syrups[0].id),this.isLoaded=!0,console.log("Data loaded from Firestore successfully!")}catch(n){console.error("Error loading data from Firestore:",n)}},setUser(n){if(this.user=n,this.unsubscribeBeverages&&(this.unsubscribeBeverages(),this.unsubscribeBeverages=null),!n){this.beverages=[],this.currentBeverage=null,console.log("User logged out, beverages cleared");return}this.loadUserBeverages(n.uid)},loadUserBeverages(n){const e=Ns(Os,"beverages"),t=bS(e,SS("userId","==",n));this.unsubscribeBeverages=kS(t,r=>{if(this.beverages=r.docs.map(s=>({id:s.id,...s.data()})),this.currentBeverage){const s=this.beverages.find(i=>{var a;return i.id===((a=this.currentBeverage)==null?void 0:a.id)});s?this.currentBeverage=s:this.currentBeverage=null}console.log(`Loaded ${this.beverages.length} beverages for user ${n}`)})},makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";const n=this.beverageName||this.currentName;if(!n||n.trim()===""||!this.currentBase||!this.currentCreamer||!this.currentSyrup)return"Please complete all beverage options and the name before making a beverage.";const e=this.bases.find(i=>i.id===this.currentBase),t=this.creamers.find(i=>i.id===this.currentCreamer),r=this.syrups.find(i=>i.id===this.currentSyrup);if(!e||!t||!r)return"Please complete all beverage options and the name before making a beverage.";const s={name:n.trim(),temp:this.currentTemp,base:e,creamer:t,syrup:r,userId:this.user.uid};return VS(Ns(Os,"beverages"),s).then(()=>{console.log("Beverage saved to Firestore:",s),this.beverageName="",this.currentName=""}).catch(i=>{console.error("Error saving beverage to Firestore:",i)}),`Beverage ${n.trim()} made successfully!`},showBeverage(n){const e=n||this.currentBeverage;e&&(this.currentTemp=e.temp,this.currentBase=e.base.id,this.currentCreamer=e.creamer.id,this.currentSyrup=e.syrup.id,this.beverageName=e.name,this.currentName=e.name,console.log("Displaying beverage:",e.name))}}}),xS=["id","value"],MS=["id","value"],LS=["id","value"],FS=["id","value"],US={class:"auth-row"},BS=["disabled"],jS={class:"user-label"},$S={key:0,class:"status-message",style:{background:"#f8d7da","border-color":"#f5c6cb",color:"#721c24"}},qS={key:1,class:"hint"},HS=["disabled"],zS=["disabled"],WS={key:2,class:"status-message"},KS={key:0,style:{"margin-top":"20px"}},GS=["id","value","onChange"],QS=["for"],JS=vi({__name:"App",setup(n){const e=Zm(),t=zs(""),r=zs(""),s=zs(!1),i=Kr(()=>{var w;const d=e.bases.find(C=>C.id===e.currentBase)||e.bases[0],p=e.creamers.find(C=>C.id===e.currentCreamer)||e.creamers[0],m=e.syrups.find(C=>C.id===e.currentSyrup)||e.syrups[0];return{id:"",name:e.beverageName||"Preview",temp:e.currentTemp,base:d,creamer:p,syrup:m,userId:((w=e.user)==null?void 0:w.uid)||""}}),a=d=>{t.value=d,setTimeout(()=>{t.value=""},5e3)},c=async()=>{if(s.value)return;s.value=!0,r.value="";const d=new Ht;try{await Sw(Gc,d),console.log("Signed in successfully")}catch(p){console.error("Sign-in error:",p),r.value=p.message||"Failed to sign in with Google"}finally{s.value=!1}},l=async()=>{try{await ow(Gc),r.value="",t.value=""}catch(d){console.error("Sign-out error:",d),r.value=d.message||"Failed to sign out"}},h=async()=>{const d=await e.makeBeverage();a(d)};return(d,p)=>(de(),we(Ne,null,[Ve("div",null,[It(DE,{beverage:i.value},null,8,["beverage"]),Ve("ul",null,[Ve("li",null,[(de(!0),we(Ne,null,Cn(Ce(e).temps,m=>(de(),we("label",{key:m},[ks(Ve("input",{type:"radio",name:"temperature",id:`r${m}`,value:m,"onUpdate:modelValue":p[0]||(p[0]=w=>Ce(e).currentTemp=w)},null,8,xS),[[Yi,Ce(e).currentTemp]]),Ls(" "+Bt(m),1)]))),128))])]),Ve("ul",null,[Ve("li",null,[(de(!0),we(Ne,null,Cn(Ce(e).bases,m=>(de(),we("label",{key:m.id},[ks(Ve("input",{type:"radio",name:"bases",id:`r${m.id}`,value:m.id,"onUpdate:modelValue":p[1]||(p[1]=w=>Ce(e).currentBase=w)},null,8,MS),[[Yi,Ce(e).currentBase]]),Ls(" "+Bt(m.name),1)]))),128))])]),Ve("ul",null,[Ve("li",null,[(de(!0),we(Ne,null,Cn(Ce(e).syrups,m=>(de(),we("label",{key:m.id},[ks(Ve("input",{type:"radio",name:"syrups",id:`r${m.id}`,value:m.id,"onUpdate:modelValue":p[2]||(p[2]=w=>Ce(e).currentSyrup=w)},null,8,LS),[[Yi,Ce(e).currentSyrup]]),Ls(" "+Bt(m.name),1)]))),128))])]),Ve("ul",null,[Ve("li",null,[(de(!0),we(Ne,null,Cn(Ce(e).creamers,m=>(de(),we("label",{key:m.id},[ks(Ve("input",{type:"radio",name:"creamers",id:`r${m.id}`,value:m.id,"onUpdate:modelValue":p[3]||(p[3]=w=>Ce(e).currentCreamer=w)},null,8,FS),[[Yi,Ce(e).currentCreamer]]),Ls(" "+Bt(m.name),1)]))),128))])]),Ve("div",US,[Ce(e).user?(de(),we(Ne,{key:1},[Ve("span",jS,Bt(Ce(e).user.displayName||Ce(e).user.email),1),Ve("button",{onClick:l},"Sign out")],64)):(de(),we("button",{key:0,onClick:c,disabled:s.value},Bt(s.value?"Signing in...":"Sign in with Google"),9,BS))]),r.value?(de(),we("p",$S,Bt(r.value),1)):$r("",!0),Ce(e).user?$r("",!0):(de(),we("p",qS,"Please sign in to save beverages")),ks(Ve("input",{"onUpdate:modelValue":p[4]||(p[4]=m=>Ce(e).beverageName=m),type:"text",placeholder:"Beverage Name",disabled:!Ce(e).user},null,8,HS),[[$v,Ce(e).beverageName]]),Ve("button",{onClick:h,disabled:!Ce(e).user},"🍺 Make Beverage",8,zS),t.value?(de(),we("p",WS,Bt(t.value),1)):$r("",!0)]),Ce(e).user&&Ce(e).beverages.length>0?(de(),we("div",KS,[(de(!0),we(Ne,null,Cn(Ce(e).beverages,m=>(de(),we(Ne,{key:m.id},[Ve("input",{type:"radio",name:"saved-beverage",id:m.id,value:m,onChange:w=>Ce(e).showBeverage(m)},null,40,GS),Ve("label",{for:m.id},Bt(m.name),9,QS)],64))),128))])):$r("",!0)],64))}}),e_=Qv();e_.use(oE);const t_=Wv(JS);t_.use(e_);const fd=Zm();fd.init().then(()=>{t_.mount("#app"),console.log("App mounted after Firestore data loaded"),iw(Gc,n=>{console.log("🔐 Auth state changed:",(n==null?void 0:n.email)||"No user"),fd.setUser(n)})});
