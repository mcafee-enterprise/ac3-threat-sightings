"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[3093],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8106:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],c={},l=void 0,u={unversionedId:"Techniques/T1497.003 - Virtualization-Sandbox Evasion- Time Based Evasion",id:"Techniques/T1497.003 - Virtualization-Sandbox Evasion- Time Based Evasion",isDocsHomePage:!1,title:"T1497.003 - Virtualization-Sandbox Evasion- Time Based Evasion",description:"Found 1 references across 1 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1497.003 - Virtualization-Sandbox Evasion- Time Based Evasion.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1497.003 - Virtualization-Sandbox Evasion- Time Based Evasion",permalink:"/ac3-threat-sightings/docs/Techniques/T1497.003 - Virtualization-Sandbox Evasion- Time Based Evasion",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1486 - Data Encrypted for Impact",permalink:"/ac3-threat-sightings/docs/Techniques/T1486 - Data Encrypted for Impact"},next:{title:"T1505.003 - Server Software Component- Web Shell",permalink:"/ac3-threat-sightings/docs/Techniques/T1505.003 - Server Software Component- Web Shell"}},s=[{value:"From the AC3 Threat Sighting for <em>Guildma RAT</em>",id:"from-the-ac3-threat-sighting-for-guildma-rat",children:[]}],m={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Found 1 references across 1 AC3 Threat Sightings. Enjoy!"),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-guildma-rat"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Guildma RAT")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Guildma_RAT.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Guildma_RAT.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Execution"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat Actor used ",(0,i.kt)("em",{parentName:"td"},"AutoIt3")," scripts to launch ",(0,i.kt)("em",{parentName:"td"},"Guildma DLL")," for Execution."),(0,i.kt)("td",{parentName:"tr",align:null},"Timeout.exe is launched by CMD.exe"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"timeout  3600"))))))}p.isMDXComponent=!0}}]);