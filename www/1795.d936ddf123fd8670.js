"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1795],{1795:(qe,A,u)=>{u.r(A),u.d(A,{WeatherPageModule:()=>Fe});var Y=u(6814),Q=u(95),ee=u(7027),j=u(7050),l=u(5879),te=u(2096),re=u(6328),se=u(2181),w=u(7398);class S{}class h{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(r=>{const s=r.indexOf(":");if(s>0){const o=r.slice(0,s),n=o.toLowerCase(),a=r.slice(s+1).trim();this.maybeSetNormalizedName(o,n),this.headers.has(n)?this.headers.get(n).push(a):this.headers.set(n,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((r,s)=>{this.setHeaderEntries(s,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([r,s])=>{this.setHeaderEntries(r,s)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const r=this.headers.get(e.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,r){return this.clone({name:e,value:r,op:"a"})}set(e,r){return this.clone({name:e,value:r,op:"s"})}delete(e,r){return this.clone({name:e,value:r,op:"d"})}maybeSetNormalizedName(e,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,e)}init(){this.lazyInit&&(this.lazyInit instanceof h?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(r=>{this.headers.set(r,e.headers.get(r)),this.normalizedNames.set(r,e.normalizedNames.get(r))})}clone(e){const r=new h;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof h?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([e]),r}applyUpdate(e){const r=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,r);const o=("a"===e.op?this.headers.get(r):void 0)||[];o.push(...s),this.headers.set(r,o);break;case"d":const n=e.value;if(n){let a=this.headers.get(r);if(!a)return;a=a.filter(d=>-1===n.indexOf(d)),0===a.length?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,a)}else this.headers.delete(r),this.normalizedNames.delete(r)}}setHeaderEntries(e,r){const s=(Array.isArray(r)?r:[r]).map(n=>n.toString()),o=e.toLowerCase();this.headers.set(o,s),this.maybeSetNormalizedName(e,o)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>e(this.normalizedNames.get(r),this.headers.get(r)))}}class ne{encodeKey(e){return D(e)}encodeValue(e){return D(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const ae=/%(\d[a-f0-9])/gi,ie={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function D(t){return encodeURIComponent(t).replace(ae,(e,r)=>ie[r]??e)}function x(t){return`${t}`}class p{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ne,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function oe(t,e){const r=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{const n=o.indexOf("="),[a,d]=-1==n?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,n)),e.decodeValue(o.slice(n+1))],c=r.get(a)||[];c.push(d),r.set(a,c)}),r}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(r=>{const s=e.fromObject[r],o=Array.isArray(s)?s.map(x):[x(s)];this.map.set(r,o)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const r=this.map.get(e);return r?r[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,r){return this.clone({param:e,value:r,op:"a"})}appendAll(e){const r=[];return Object.keys(e).forEach(s=>{const o=e[s];Array.isArray(o)?o.forEach(n=>{r.push({param:s,value:n,op:"a"})}):r.push({param:s,value:o,op:"a"})}),this.clone(r)}set(e,r){return this.clone({param:e,value:r,op:"s"})}delete(e,r){return this.clone({param:e,value:r,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const r=this.encoder.encodeKey(e);return this.map.get(e).map(s=>r+"="+this.encoder.encodeValue(s)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const r=new p({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(e),r}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const r=("a"===e.op?this.map.get(e.param):void 0)||[];r.push(x(e.value)),this.map.set(e.param,r);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let s=this.map.get(e.param)||[];const o=s.indexOf(x(e.value));-1!==o&&s.splice(o,1),s.length>0?this.map.set(e.param,s):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class ce{constructor(){this.map=new Map}set(e,r){return this.map.set(e,r),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function L(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function q(t){return typeof Blob<"u"&&t instanceof Blob}function X(t){return typeof FormData<"u"&&t instanceof FormData}class T{constructor(e,r,s,o){let n;if(this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function le(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==s?s:null,n=o):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.context&&(this.context=n.context),n.params&&(this.params=n.params)),this.headers||(this.headers=new h),this.context||(this.context=new ce),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=r;else{const d=r.indexOf("?");this.urlWithParams=r+(-1===d?"?":d<r.length-1?"&":"")+a}}else this.params=new p,this.urlWithParams=r}serializeBody(){return null===this.body?null:L(this.body)||q(this.body)||X(this.body)||function de(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof p?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||X(this.body)?null:q(this.body)?this.body.type||null:L(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof p?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const r=e.method||this.method,s=e.url||this.url,o=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,a=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,d=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let c=e.headers||this.headers,i=e.params||this.params;const y=e.context??this.context;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce((b,m)=>b.set(m,e.setHeaders[m]),c)),e.setParams&&(i=Object.keys(e.setParams).reduce((b,m)=>b.set(m,e.setParams[m]),i)),new T(r,s,n,{params:i,headers:c,context:y,reportProgress:d,responseType:o,withCredentials:a})}}var N=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(N||{});class ue{constructor(e,r=200,s="OK"){this.headers=e.headers||new h,this.status=void 0!==e.status?e.status:r,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class R extends ue{constructor(e={}){super(e),this.type=N.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new R({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}function H(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let O=(()=>{var t;class e{constructor(s){this.handler=s}request(s,o,n={}){let a;if(s instanceof T)a=s;else{let i,y;i=n.headers instanceof h?n.headers:new h(n.headers),n.params&&(y=n.params instanceof p?n.params:new p({fromObject:n.params})),a=new T(s,o,void 0!==n.body?n.body:null,{headers:i,context:n.context,params:y,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const d=(0,te.of)(a).pipe((0,re.b)(i=>this.handler.handle(i)));if(s instanceof T||"events"===n.observe)return d;const c=d.pipe((0,se.h)(i=>i instanceof R));switch(n.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe((0,w.U)(i=>{if(null!==i.body&&!(i.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return i.body}));case"blob":return c.pipe((0,w.U)(i=>{if(null!==i.body&&!(i.body instanceof Blob))throw new Error("Response is not a Blob.");return i.body}));case"text":return c.pipe((0,w.U)(i=>{if(null!==i.body&&"string"!=typeof i.body)throw new Error("Response is not a string.");return i.body}));default:return c.pipe((0,w.U)(i=>i.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(s,o={}){return this.request("DELETE",s,o)}get(s,o={}){return this.request("GET",s,o)}head(s,o={}){return this.request("HEAD",s,o)}jsonp(s,o){return this.request("JSONP",s,{params:(new p).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(s,o={}){return this.request("OPTIONS",s,o)}patch(s,o,n={}){return this.request("PATCH",s,H(n,o))}post(s,o,n={}){return this.request("POST",s,H(n,o))}put(s,o,n={}){return this.request("PUT",s,H(n,o))}}return(t=e).\u0275fac=function(s){return new(s||t)(l.LFG(S))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),e})(),He=(()=>{var t;class e{constructor(s){this.http=s,this.apiKey="e6de68cbf706be50f74669428abef364",this.apiUrl="https://api.openweathermap.org/data/2.5/weather"}getWeather(s){return this.http.get(`${this.apiUrl}?q=${s}&appid=${this.apiKey}&units=metric`)}}return(t=e).\u0275fac=function(s){return new(s||t)(l.LFG(O))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),e})();const Oe=[{path:"",component:(()=>{var t;class e{constructor(s,o){this.http=s,this.weatherService=o,this.apiKey="e6de68cbf706be50f74669428abef364",this.apiUrl="https://api.openweathermap.org/data/2.5/weather"}getWeather(s){return this.http.get(`${this.apiUrl}?q=${s}&appid=${this.apiKey}&units=metric`)}}return(t=e).\u0275fac=function(s){return new(s||t)(l.LFG(O),l.LFG(He))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),e})()}];let Ie=(()=>{var t;class e{}return(t=e).\u0275fac=function(s){return new(s||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[j.Bz.forChild(Oe),j.Bz]}),e})(),Fe=(()=>{var t;class e{}return(t=e).\u0275fac=function(s){return new(s||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[Y.ez,Q.u5,ee.Pc,Ie]}),e})()}}]);