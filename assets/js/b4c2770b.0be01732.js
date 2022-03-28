"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[8894],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],s={},m=void 0,l={unversionedId:"Techniques/T1047 - Windows Management Instrumentation",id:"Techniques/T1047 - Windows Management Instrumentation",isDocsHomePage:!1,title:"T1047 - Windows Management Instrumentation",description:"Found 3 references across 2 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1047 - Windows Management Instrumentation.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1047 - Windows Management Instrumentation",permalink:"/ac3-threat-sightings/docs/Techniques/T1047 - Windows Management Instrumentation",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1047 - WMI",permalink:"/ac3-threat-sightings/docs/Techniques/T1047 - WMI"},next:{title:"T1049 - System Network Connections Discovery",permalink:"/ac3-threat-sightings/docs/Techniques/T1049 - System Network Connections Discovery"}},c=[{value:"From the AC3 Threat Sighting for <em>Emotet Dec2021</em>",id:"from-the-ac3-threat-sighting-for-emotet-dec2021",children:[]},{value:"From the AC3 Threat Sighting for <em>Hafnium</em>",id:"from-the-ac3-threat-sighting-for-hafnium",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Found 3 references across 2 AC3 Threat Sightings. Enjoy!"),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-emotet-dec2021"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Emotet Dec2021")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Emotet_Dec2021.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Emotet_Dec2021.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"Cobalt Strike")," for initiating command execution on remote hosts via ",(0,i.kt)("em",{parentName:"td"},"CMD")," and ",(0,i.kt)("em",{parentName:"td"},"WMIC")," for Discovery."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"RunDll32")," spawned ",(0,i.kt)("em",{parentName:"td"},"CMD")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'cmd.exe /C wmic  /node:\\"DC01\\" /user:\\"DOMAIN\\\\admin\\" /password:\\"cleartextpass\\" process call create \\"cmd /c vssadmin list shadows >> c:\\\\log.txt\\"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"WMIC via Cobalt Strike")," to list existing Volume Shadow Copies via ",(0,i.kt)("em",{parentName:"td"},"vssadmin.exe")," for Discovery."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"CMD")," spawned ",(0,i.kt)("em",{parentName:"td"},"WMIC")," to execute command on remote host"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'wmic  /node:\\"DC01\\" /user:\\"DOMAIN\\\\admin\\" /password:\\"cleartextpass\\" process call create \\"cmd /c vssadmin list shadows >> c:\\\\log.txt\\"'))))),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-hafnium"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Hafnium")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Hafnium.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Hafnium.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Discovery"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat Actor used ",(0,i.kt)("em",{parentName:"td"},"wmic via China Chopper Web Shell")," to list running processes for Discovery."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"CMD")," spawns ",(0,i.kt)("em",{parentName:"td"},"wmic.exe")," discovery commands."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"wmic process where name=smex_master.exe get ExecutablePath,commandline"),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"wmic process where name=unsecapp.exe get ExecutablePath"),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"wmic process where name=unsecapp.exe get processid"))))))}u.isMDXComponent=!0}}]);