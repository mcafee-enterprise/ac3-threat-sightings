"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[3725],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],s={},l=void 0,c={unversionedId:"Weapons/schtasks",id:"Weapons/schtasks",isDocsHomePage:!1,title:"schtasks",description:"Found 2 references across 2 AC3 Threat Sightings. Enjoy!",source:"@site/docs/04-Weapons/schtasks.md",sourceDirName:"04-Weapons",slug:"/Weapons/schtasks",permalink:"/ac3-threat-sightings/docs/Weapons/schtasks",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rundll32",permalink:"/ac3-threat-sightings/docs/Weapons/rundll32"},next:{title:"timeout",permalink:"/ac3-threat-sightings/docs/Weapons/timeout"}},m=[{value:"From the AC3 Threat Sighting for <em>Emotet Dec2021</em>",id:"from-the-ac3-threat-sighting-for-emotet-dec2021",children:[]},{value:"From the AC3 Threat Sighting for <em>Raccoon InfoStealer</em>",id:"from-the-ac3-threat-sighting-for-raccoon-infostealer",children:[]}],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Found 2 references across 2 AC3 Threat Sightings. Enjoy!"),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-emotet-dec2021"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Emotet Dec2021")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Emotet_Dec2021.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Emotet_Dec2021.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Persistence"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"SCHTASK")," to create an scheduled task that executes the Cobalt Strike beacon for Persistence."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"RunDll32")," spawned CMD for executing scheduled task via SCHTASK."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'C:\\\\WINDOWS\\\\system32\\\\cmd.exe /C SCHTASKS /run /TN \\"ObjectStoreRecoveryUpdateTask2\\"'))))),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-raccoon-infostealer"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Raccoon InfoStealer")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Raccoon_InfoStealer.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Raccoon_InfoStealer.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defense Evasion"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"doscmd/batch")," files to disable Windows Defender via multiple ",(0,i.kt)("em",{parentName:"td"},"reg.exe")," and ",(0,i.kt)("em",{parentName:"td"},"SCHTASKS.exe")," for Defense Evasion."),(0,i.kt)("td",{parentName:"tr",align:null},"Malware launched ",(0,i.kt)("em",{parentName:"td"},"SCHTASKS")," (attempted to modify Windows Defender ",(0,i.kt)("em",{parentName:"td"},"scheduled tasks"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Cache Maintenance\\" /Disable'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Scheduled Scan\\" /Disable'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Verification\\" /Disable'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Cleanup\\" /Disable'))))))}p.isMDXComponent=!0}}]);