"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[1773],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5569:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(4137)),o=["components"],l={},s=void 0,c={unversionedId:"Weapons/regsvr32",id:"Weapons/regsvr32",isDocsHomePage:!1,title:"regsvr32",description:"Found 3 references across 2 AC3 Threat Sightings. Enjoy!",source:"@site/docs/04-Weapons/regsvr32.md",sourceDirName:"04-Weapons",slug:"/Weapons/regsvr32",permalink:"/ac3-threat-sightings/docs/Weapons/regsvr32",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"reg",permalink:"/ac3-threat-sightings/docs/Weapons/reg"},next:{title:"rundll32",permalink:"/ac3-threat-sightings/docs/Weapons/rundll32"}},p=[{value:"From the AC3 Threat Sighting for <em>Emotet Dec2021</em>",id:"from-the-ac3-threat-sighting-for-emotet-dec2021",children:[]},{value:"From the AC3 Threat Sighting for <em>TA551</em>",id:"from-the-ac3-threat-sighting-for-ta551",children:[]}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Found 3 references across 2 AC3 Threat Sightings. Enjoy!"),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-emotet-dec2021"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Emotet Dec2021")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Emotet_Dec2021.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Emotet_Dec2021.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Execution"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"RegSvr32")," to execute Cobalt Strike Stager DLL for Execution."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"RunDll32")," spawned ",(0,i.kt)("em",{parentName:"td"},"RegSvr32")," to execute Cobalt Strike Stager DLL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'C:\\\\WINDOWS\\\\SysWOW64\\\\regsvr32.exe -s \\"C:\\\\Users\\\\#{user}\\\\AppData\\\\Local\\\\Bfzefze\\\\uztmfjfrgicq.dll\\"'))))),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-ta551"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"TA551")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_TA551.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_TA551.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defense Evasion"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"REGSVR32")," to launch payload for Defense Evasion."),(0,i.kt)("td",{parentName:"tr",align:null},"MSHTA spawned REGSVR32 to execute a ",(0,i.kt)("em",{parentName:"td"},".JPG")," file from Users","\\","Public folder."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'"C:\\\\Windows\\\\System32\\\\regsvr32.exe" c:\\\\users\\\\public\\\\brDefine.jpg'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'"C:\\\\Windows\\\\System32\\\\regsvr32.exe" c:\\\\users\\\\public\\\\uGirl.jpg'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Command And Control"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"REGSVR32")," to download a masqueraded ",(0,i.kt)("em",{parentName:"td"},"Cobalt Strike shellcode runner")," for Command And Control."),(0,i.kt)("td",{parentName:"tr",align:null},"REGSVR32 drops file (shellcode runner)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"File Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"C:\\\\Users\\\\#{user}\\\\AppData\\\\Local\\\\Temp\\\\jyheeckptwa.exe"))))))}u.isMDXComponent=!0}}]);