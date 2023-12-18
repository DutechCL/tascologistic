import{e as D,q as se,v as we,o as v,c as p,a as M,w as B,u as w,i as ue,t as R,h as g,j as V,F as N,l as j,p as I,k as ae,s as le,_ as pe,g as ye,r as _e,a1 as Te,a5 as Ce,n as Me,a6 as Oe,a7 as xe}from"./index-852ef975.js";import{s as E,a as ee,b as De,d as ke}from"./tag.esm-ecc1724b.js";import{u as Pe}from"./chat-754b635c.js";import{r as T,t as O,_ as Se}from"./index-dd28ee9b.js";import"./index.esm-e809303e.js";import"./ApiService-1a814c3e.js";import"./_commonjsHelpers-725317a4.js";function U(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function We(r,t){T(2,arguments);var e=O(r).getTime(),a=U(t);return new Date(e+a)}var Ue={};function K(){return Ue}function Ye(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function Ee(r){return T(1,arguments),r instanceof Date||Se(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function $e(r){if(T(1,arguments),!Ee(r)&&typeof r!="number")return!1;var t=O(r);return!isNaN(Number(t))}function Ne(r,t){T(2,arguments);var e=U(t);return We(r,-e)}var Fe=864e5;function Le(r){T(1,arguments);var t=O(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/Fe)+1}function G(r){T(1,arguments);var t=1,e=O(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function de(r){T(1,arguments);var t=O(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=G(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=G(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function qe(r){T(1,arguments);var t=de(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=G(e);return a}var He=6048e5;function Be(r){T(1,arguments);var t=O(r),e=G(t).getTime()-qe(t).getTime();return Math.round(e/He)+1}function A(r,t){var e,a,n,i,o,s,u,l;T(1,arguments);var d=K(),m=U((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:d.weekStartsOn)!==null&&a!==void 0?a:(u=d.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=O(r),b=h.getUTCDay(),f=(b<m?7:0)+b-m;return h.setUTCDate(h.getUTCDate()-f),h.setUTCHours(0,0,0,0),h}function ce(r,t){var e,a,n,i,o,s,u,l;T(1,arguments);var d=O(r),m=d.getUTCFullYear(),h=K(),b=U((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&a!==void 0?a:(u=h.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(m+1,0,b),f.setUTCHours(0,0,0,0);var _=A(f,t),x=new Date(0);x.setUTCFullYear(m,0,b),x.setUTCHours(0,0,0,0);var k=A(x,t);return d.getTime()>=_.getTime()?m+1:d.getTime()>=k.getTime()?m:m-1}function Re(r,t){var e,a,n,i,o,s,u,l;T(1,arguments);var d=K(),m=U((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:d.firstWeekContainsDate)!==null&&a!==void 0?a:(u=d.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=ce(r,t),b=new Date(0);b.setUTCFullYear(h,0,m),b.setUTCHours(0,0,0,0);var f=A(b,t);return f}var Ie=6048e5;function Qe(r,t){T(1,arguments);var e=O(r),a=A(e,t).getTime()-Re(e,t).getTime();return Math.round(a/Ie)+1}function c(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var Xe={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return c(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):c(a+1,2)},d:function(t,e){return c(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return c(t.getUTCHours()%12||12,e.length)},H:function(t,e){return c(t.getUTCHours(),e.length)},m:function(t,e){return c(t.getUTCMinutes(),e.length)},s:function(t,e){return c(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return c(i,e.length)}};const S=Xe;var $={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ve={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return S.y(t,e)},Y:function(t,e,a,n){var i=ce(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return c(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){var a=de(t);return c(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return c(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return c(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return S.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=Qe(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):c(i,e.length)},I:function(t,e,a){var n=Be(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):c(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):S.d(t,e)},D:function(t,e,a){var n=Le(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):c(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return c(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=$.noon:n===0?i=$.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=$.evening:n>=12?i=$.afternoon:n>=4?i=$.morning:i=$.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return S.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):S.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):S.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):S.s(t,e)},S:function(t,e){return S.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return ne(o);case"XXXX":case"XX":return W(o);case"XXXXX":case"XXX":default:return W(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return ne(o);case"xxxx":case"xx":return W(o);case"xxxxx":case"xxx":default:return W(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+re(o,":");case"OOOO":default:return"GMT"+W(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+re(o,":");case"zzzz":default:return"GMT"+W(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return c(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return c(o,e.length)}};function re(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+c(i,2)}function ne(r,t){if(r%60===0){var e=r>0?"-":"+";return e+c(Math.abs(r)/60,2)}return W(r,t)}function W(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=c(Math.floor(n/60),2),o=c(n%60,2);return a+i+e+o}const je=Ve;var ie=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},fe=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ge=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return ie(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",ie(n,e)).replace("{{time}}",fe(i,e))},Ae={p:fe,P:Ge};const Ke=Ae;var ze=["D","DD"],Je=["YY","YYYY"];function Ze(r){return ze.indexOf(r)!==-1}function et(r){return Je.indexOf(r)!==-1}function oe(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var tt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},at=function(t,e,a){var n,i=tt[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const rt=at;function te(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var nt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},it={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ot={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},st={date:te({formats:nt,defaultWidth:"full"}),time:te({formats:it,defaultWidth:"full"}),dateTime:te({formats:ot,defaultWidth:"full"})};const ut=st;var lt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},dt=function(t,e,a,n){return lt[t]};const ct=dt;function q(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var s=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[u]||r.values[s]}var l=r.argumentCallback?r.argumentCallback(t):t;return n[l]}}var ft={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},mt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ht={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},vt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},gt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},bt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},wt=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},pt={ordinalNumber:wt,era:q({values:ft,defaultWidth:"wide"}),quarter:q({values:mt,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:q({values:ht,defaultWidth:"wide"}),day:q({values:vt,defaultWidth:"wide"}),dayPeriod:q({values:gt,defaultWidth:"wide",formattingValues:bt,defaultFormattingWidth:"wide"})};const yt=pt;function H(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(s)?Tt(s,function(m){return m.test(o)}):_t(s,function(m){return m.test(o)}),l;l=r.valueCallback?r.valueCallback(u):u,l=e.valueCallback?e.valueCallback(l):l;var d=t.slice(o.length);return{value:l,rest:d}}}function _t(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function Tt(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function Ct(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var Mt=/^(\d+)(th|st|nd|rd)?/i,Ot=/\d+/i,xt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Dt={any:[/^b/i,/^(a|c)/i]},kt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pt={any:[/1/i,/2/i,/3/i,/4/i]},St={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ut={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Yt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Et={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},$t={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Nt={ordinalNumber:Ct({matchPattern:Mt,parsePattern:Ot,valueCallback:function(t){return parseInt(t,10)}}),era:H({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),quarter:H({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:St,defaultMatchWidth:"wide",parsePatterns:Wt,defaultParseWidth:"any"}),day:H({matchPatterns:Ut,defaultMatchWidth:"wide",parsePatterns:Yt,defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:Et,defaultMatchWidth:"any",parsePatterns:$t,defaultParseWidth:"any"})};const Ft=Nt;var Lt={code:"en-US",formatDistance:rt,formatLong:ut,formatRelative:ct,localize:yt,match:Ft,options:{weekStartsOn:0,firstWeekContainsDate:1}};const qt=Lt;var Ht=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rt=/^'([^]*?)'?$/,It=/''/g,Qt=/[a-zA-Z]/;function Xt(r,t,e){var a,n,i,o,s,u,l,d,m,h,b,f,_,x,k,Y,y,z;T(2,arguments);var me=String(t),F=K(),L=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:F.locale)!==null&&a!==void 0?a:qt,J=U((i=(o=(s=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(l=e.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&s!==void 0?s:F.firstWeekContainsDate)!==null&&o!==void 0?o:(m=F.locale)===null||m===void 0||(h=m.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(J>=1&&J<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Z=U((b=(f=(_=(x=e==null?void 0:e.weekStartsOn)!==null&&x!==void 0?x:e==null||(k=e.locale)===null||k===void 0||(Y=k.options)===null||Y===void 0?void 0:Y.weekStartsOn)!==null&&_!==void 0?_:F.weekStartsOn)!==null&&f!==void 0?f:(y=F.locale)===null||y===void 0||(z=y.options)===null||z===void 0?void 0:z.weekStartsOn)!==null&&b!==void 0?b:0);if(!(Z>=0&&Z<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var Q=O(r);if(!$e(Q))throw new RangeError("Invalid time value");var he=Ye(Q),ve=Ne(Q,he),ge={firstWeekContainsDate:J,weekStartsOn:Z,locale:L,_originalDate:Q},be=me.match(Bt).map(function(C){var P=C[0];if(P==="p"||P==="P"){var X=Ke[P];return X(C,L.formatLong)}return C}).join("").match(Ht).map(function(C){if(C==="''")return"'";var P=C[0];if(P==="'")return Vt(C);var X=je[P];if(X)return!(e!=null&&e.useAdditionalWeekYearTokens)&&et(C)&&oe(C,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Ze(C)&&oe(C,t,String(r)),X(ve,C,L.localize,ge);if(P.match(Qt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+P+"`");return C}).join("");return be}function Vt(r){var t=r.match(Rt);return t?t[1].replace(It,"'"):r}const jt={class:""},Gt={class:"flex"},At=g("strong",null,"Motivo: ",-1),Kt={class:"pl-3"},zt={class:"pb-1"},Jt={class:"pl-3"},Zt={class:""},ea={key:0,class:"p-tag-1 tag-font-method font-11 tag-radius"},ta={class:"center; flex justify-center"},aa={__name:"DataTableDetailOrder",props:{order:Object},setup(r){const t=r,e=D([]),a=D(!1),n=D(!1),i=()=>{a.value=!a.value},o=()=>{if(e.value.Problemsh>1)n.value=!0;else{console.log(e.value);const u=e.value.OrderItems.filter(l=>l.Problems.length>0);console.log(u),u.length>1&&(n.value=!0)}};se(()=>{e.value=t.order}),we(()=>t.order,()=>{e.value=t.order,o()});const s=u=>new DOMParser().parseFromString(u,"text/html").body.innerText;return(u,l)=>(v(),p(N,null,[M(w(De),{tableStyle:"min-width: 50rem",value:[e.value],dataKey:"id"},{default:B(()=>[M(w(E),{headerClass:"!bg-primary-900 table-head",class:"table-body font-11",field:"DocNum",header:"Nota de venta"},{body:B(d=>[ue(" N° "+R(d.data.DocNum),1)]),_:1}),M(w(E),{headerClass:"!bg-primary-900 table-head",class:"table-body font-11",field:"Customer.CardName",header:"Cliente",style:{"max-width":"300px"}}),M(w(E),{headerClass:"!bg-primary-900 table-head",class:"table-body font-11",field:"Customer.CardCode",header:"Rut",style:{"max-width":"300px"}}),M(w(E),{headerClass:"!bg-primary-900 table-head",class:"table-body font-11",field:"MethodShippingName",header:"Desde"},{body:B(d=>[M(w(ee),{value:d.data.report_problem_location,class:"p-tag-1 tag-font-method font-11 tag-radius"},null,8,["value"])]),_:1}),M(w(E),{headerClass:"!bg-primary-900 table-head",class:"table-body font-11",field:"SalesEmployeeName",header:"Vendedor"}),M(w(E),{headerClass:"!bg-primary-900 table-head",class:"table-body font-11",field:"report_user_name",header:"Informador"})]),_:1},8,["value"]),g("div",{class:V(["bg-secundary-100 p-3",{"scroll-problems":a.value}])},[g("div",jt,[g("div",Gt,[At,e.value.report_user_responsibles==="cda"?(v(),p("div",{key:0,style:{height:"30px",overflow:"hidden"},class:V({"scroll-problems":a.value})},[g("ul",Kt,[(v(!0),p(N,null,j(e.value.Problems,d=>(v(),p("li",zt,[M(w(ee),{value:"Problema: "+d.ProblemName,class:"p-tag-1 tag-font-method font-11 tag-radius"},null,8,["value"])]))),256))])],2)):(v(),p("div",{key:1,style:{height:"30px",overflow:"hidden"},class:V({"scroll-problems":a.value})},[g("ul",Jt,[(v(!0),p(N,null,j(e.value.OrderItems,d=>(v(),p("li",Zt,[d.Problems.length>0?(v(),p("strong",ea,R(d.ItemDescription)+" - SKU: "+R(d.ItemCode),1)):I("",!0),(v(!0),p(N,null,j(d.Problems,m=>(v(),ae(w(ee),{value:s(m.ProblemName),class:"mx-2 p-tag-1 font-11 tag-font-method tag-radius"},null,8,["value"]))),256))]))),256))])],2))])])],2),g("div",ta,[n.value?(v(),ae(w(le),{key:0,onClick:i,icon:a.value?"pi pi-angle-up":"pi pi-angle-down",class:"w-full btn-angle p-0"},null,8,["icon"])):I("",!0)])],64))}};const ra=r=>(Oe("data-v-7b1bdada"),r=r(),xe(),r),na={class:"content-head-chat"},ia=ra(()=>g("p",{class:"mb-2 text-primary-900 font-inter font-semibold text-xl"},[g("i",{class:"pi pi-arrow-left font-icon"}),ue(" Incidencias en notas de venta")],-1)),oa={key:0,class:"mb-2 text-primary-900 font-inter font-semibold text-sm"},sa=["innerHTML"],ua={class:"text-time"},la={class:"footer-chat p-3"},da={key:0,class:"input-container"},ca={key:0,class:"pi pi-send",style:{"font-size":"25px !important",position:"absolute",right:"25px"}},fa={key:1,class:"pi pi-spin pi-spinner",style:{"font-size":"25px !important",position:"absolute",right:"25px"}},ma={__name:"ShowChat",props:{id:Number},setup(r){const t=r,e=Pe(),a=D(""),n=D(!1),i=D(!1),o=D(!1),s=D(null),u=D({}),l=f=>Xt(new Date(f),"HH:mm"),d=async()=>{try{if(i.value||o.value)return;i.value=!0,o.value=!0,await e.sendMessage({message:a.value,chat_id:e.current.id}),a.value=""}catch(f){console.error("Error al enviar el mensaje:",f)}finally{i.value=!1,setTimeout(()=>{o.value=!1},2e3)}},m=()=>{o.value||d()},h=f=>{var _;return f===((_=e.currentUser)==null?void 0:_.id)},b=()=>{Ce(()=>{s.value.scrollTop=s.value.scrollHeight})};return se(async()=>{try{await e.showChat(t.id).then(f=>{u.value=e.order}),b(),n.value=!0,e.isSubscribed||(e.pusher().subscribe(`private-chat.${e.current.id}`).bind("message.sent",_=>{console.log(_),e.addMessage(_.message),b()}),e.isSubscribed=!0)}catch(f){console.error("Error al obtener los mensajes:",f)}}),ye(()=>{if(e.isSubscribed){const f=e.pusher().channels[`private-chat.${e.current.id}`];f&&(f.unbind(),f.unsubscribe())}}),(f,_)=>{var k,Y;const x=_e("router-link");return v(),p(N,null,[g("div",na,[g("div",null,[M(x,{to:{name:"list-chats"}},{default:B(()=>[ia]),_:1})]),g("div",null,[(k=w(e))!=null&&k.loadingOrder?(v(),ae(aa,{key:0,order:u.value},null,8,["order"])):I("",!0)])]),g("div",{class:"content-chat",ref_key:"messageList",ref:s},[g("ul",null,[(v(!0),p(N,null,j(w(e).messages,y=>(v(),p("li",{key:y.id,style:{width:"100% !important","list-style":"none"}},[g("div",{class:V(["message-container",{"self-message":h(y.user.id)}])},[h(y.user.id)?I("",!0):(v(),p("strong",oa,R(y.user.name),1)),g("div",{class:"receiving-bubbles",style:Me({background:h(y.user.id)?"#259BD7":"#d5ebf8",borderBottomLeftRadius:h(y.user.id)?"33px":"0",borderBottomRightRadius:h(y.user.id)?"0":"33px"})},[g("p",{class:"font-13",innerHTML:y.message},null,8,sa)],4),g("p",ua,R(l(y.created_at)),1)],2)]))),128))])],512),g("div",la,[((Y=w(e))==null?void 0:Y.currentChat.status)==="open"?(v(),p("div",da,[M(w(ke),{placeholder:"Escribe un mensaje...",type:"text",modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=y=>a.value=y),onKeyup:Te(m,["enter"])},null,8,["modelValue","onKeyup"]),M(w(le),{disabled:!a.value.trim()||i.value,onClick:d},{default:B(()=>[i.value?(v(),p("i",fa)):(v(),p("i",ca))]),_:1},8,["disabled"])])):I("",!0)])],64)}}},_a=pe(ma,[["__scopeId","data-v-7b1bdada"]]);export{_a as default};
