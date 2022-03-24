"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[4115],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],l={},c=void 0,s={unversionedId:"Techniques/T1203 - Exploitation for Client Execution",id:"Techniques/T1203 - Exploitation for Client Execution",isDocsHomePage:!1,title:"T1203 - Exploitation for Client Execution",description:"Found 2 references across 1 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1203 - Exploitation for Client Execution.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1203 - Exploitation for Client Execution",permalink:"/ac3-threat-sightings/docs/Techniques/T1203 - Exploitation for Client Execution",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1197 - BITS Jobs",permalink:"/ac3-threat-sightings/docs/Techniques/T1197 - BITS Jobs"},next:{title:"T1204 - User Execution",permalink:"/ac3-threat-sightings/docs/Techniques/T1204 - User Execution"}},u=[{value:"From the AC3 Threat Sighting for <em>Darkside Ransomware</em>",id:"from-the-ac3-threat-sighting-for-darkside-ransomware",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Found 2 references across 1 AC3 Threat Sightings. Enjoy!"),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-darkside-ransomware"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Darkside Ransomware")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Darkside_Ransomware.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Darkside_Ransomware.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Privilege Escalation"),(0,i.kt)("td",{parentName:"tr",align:null},"DarkSide used ",(0,i.kt)("em",{parentName:"td"},"CMD")," to execute a CVE-2021-27091 exploit for Privilege Escalation."),(0,i.kt)("td",{parentName:"tr",align:null},"Exploit (PE) for CVE-2021-27091 is executed."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"perfect_x64.exe -k Dnscache -c cmd -I"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Privilege Escalation"),(0,i.kt)("td",{parentName:"tr",align:null},"DarkSide used ",(0,i.kt)("em",{parentName:"td"},"CMD")," to execute a CVE-2021-27091 exploit for Privilege Escalation."),(0,i.kt)("td",{parentName:"tr",align:null},"Exploit spawned ",(0,i.kt)("em",{parentName:"td"},"CMD")," without commandline arguments."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},"cmd"))))))}m.isMDXComponent=!0}}]);