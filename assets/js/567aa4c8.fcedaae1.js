"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[8739],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(r),f=i,h=g["".concat(l,".").concat(f)]||g[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7983:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var n=r(7462),i=r(3366),a=(r(7294),r(4137)),o=["components"],c={},l=void 0,s={unversionedId:"Techniques/T1546.001 - Event Triggered Execution- Change Default File Association",id:"Techniques/T1546.001 - Event Triggered Execution- Change Default File Association",isDocsHomePage:!1,title:"T1546.001 - Event Triggered Execution- Change Default File Association",description:"Found 1 references across 1 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1546.001 - Event Triggered Execution- Change Default File Association.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1546.001 - Event Triggered Execution- Change Default File Association",permalink:"/ac3-threat-sightings/docs/Techniques/T1546.001 - Event Triggered Execution- Change Default File Association",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1543.003 - Create or Modify System Process- Windows Service",permalink:"/ac3-threat-sightings/docs/Techniques/T1543.003 - Create or Modify System Process- Windows Service"},next:{title:"T1547.001 - Boot or Logon Autostart Execution- Registry Run Keys - Startup Folder",permalink:"/ac3-threat-sightings/docs/Techniques/T1547.001 - Boot or Logon Autostart Execution- Registry Run Keys - Startup Folder"}},u=[{value:"From the AC3 Threat Sighting for <em>Jupyter InfoStealer</em>",id:"from-the-ac3-threat-sighting-for-jupyter-infostealer",children:[]}],p={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Found 1 references across 1 AC3 Threat Sightings. Enjoy!"),(0,a.kt)("h2",{id:"from-the-ac3-threat-sighting-for-jupyter-infostealer"},"From the AC3 Threat Sighting for ",(0,a.kt)("em",{parentName:"h2"},"Jupyter InfoStealer")),(0,a.kt)("p",null,"Full details at: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Jupyter_InfoStealer.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Jupyter_InfoStealer.yml")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,a.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,a.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,a.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Persistence"),(0,a.kt)("td",{parentName:"tr",align:null},"Threat Actor used ",(0,a.kt)("em",{parentName:"td"},"PowerShell")," to modify file association in Windows Registry for Persistence."),(0,a.kt)("td",{parentName:"tr",align:null},"PowerShell modified default file association to execute highly obfuscated PowerShell command."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"RegValue Created"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"HKEY_CLASSES_ROOT\\\\nnfjzceglbgu\\\\shell\\\\open\\\\command"))))))}g.isMDXComponent=!0}}]);