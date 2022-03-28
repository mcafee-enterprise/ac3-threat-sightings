"use strict";(self.webpackChunkac3_threat_sightings=self.webpackChunkac3_threat_sightings||[]).push([[8909],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,u=m["".concat(d,".").concat(p)]||m[p]||f[p]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7921:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],l={},d=void 0,s={unversionedId:"Techniques/T1562.001 - Impair Defenses- Disable or Modify Tools",id:"Techniques/T1562.001 - Impair Defenses- Disable or Modify Tools",isDocsHomePage:!1,title:"T1562.001 - Impair Defenses- Disable or Modify Tools",description:"Found 3 references across 1 AC3 Threat Sightings. Enjoy!",source:"@site/docs/05-Techniques/T1562.001 - Impair Defenses- Disable or Modify Tools.md",sourceDirName:"05-Techniques",slug:"/Techniques/T1562.001 - Impair Defenses- Disable or Modify Tools",permalink:"/ac3-threat-sightings/docs/Techniques/T1562.001 - Impair Defenses- Disable or Modify Tools",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"T1560 - Archive Collected Data",permalink:"/ac3-threat-sightings/docs/Techniques/T1560 - Archive Collected Data"},next:{title:"T1566.001 - Phishing- Spearphishing Attachment",permalink:"/ac3-threat-sightings/docs/Techniques/T1566.001 - Phishing- Spearphishing Attachment"}},c=[{value:"From the AC3 Threat Sighting for <em>Raccoon InfoStealer</em>",id:"from-the-ac3-threat-sighting-for-raccoon-infostealer",children:[]}],f={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Found 3 references across 1 AC3 Threat Sightings. Enjoy!"),(0,i.kt)("h2",{id:"from-the-ac3-threat-sighting-for-raccoon-infostealer"},"From the AC3 Threat Sighting for ",(0,i.kt)("em",{parentName:"h2"},"Raccoon InfoStealer")),(0,i.kt)("p",null,"Full details at: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Raccoon_InfoStealer.yml"},"https://github.com/mcafee-enterprise/ac3-threat-sightings/blob/main/sightings/Sightings_Raccoon_InfoStealer.yml")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tactic"),(0,i.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviors"),(0,i.kt)("th",{parentName:"tr",align:null},"Observables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defense Evasion"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"doscmd/batch")," files to disable Windows Defender via multiple ",(0,i.kt)("em",{parentName:"td"},"reg.exe")," and ",(0,i.kt)("em",{parentName:"td"},"SCHTASKS.exe")," for Defense Evasion."),(0,i.kt)("td",{parentName:"tr",align:null},"Malware launched ",(0,i.kt)("em",{parentName:"td"},"REG.exe")," (attempted to modify Windows Defender ",(0,i.kt)("em",{parentName:"td"},"policy configurations"),")."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Microsoft\\\\Windows Defender\\\\Features\\" /v \\"TamperProtection\\" /t REG_DWORD /d \\"0\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  delete \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\" /v \\"DisableAntiSpyware\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\" /v \\"DisableAntiVirus\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\MpEngine\\" /v \\"MpEnablePus\\" /t REG_DWORD /d \\"0\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection\\" /v \\"DisableBehaviorMonitoring\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection\\" /v \\"DisableIOAVProtection\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection\\" /v \\"DisableOnAccessProtection\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection\\" /v \\"DisableRealtimeMonitoring\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Real-Time Protection\\" /v \\"DisableScanOnRealtimeEnable\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\Reporting\\" /v \\"DisableEnhancedNotifications\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\SpyNet\\" /v \\"DisableBlockAtFirstSeen\\" /t REG_DWORD /d \\"1\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\SpyNet\\" /v \\"SpynetReporting\\" /t REG_DWORD /d \\"0\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\Software\\\\Policies\\\\Microsoft\\\\Windows Defender\\\\SpyNet\\" /v \\"SubmitSamplesConsent\\" /t REG_DWORD /d \\"2\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Control\\\\WMI\\\\Autologger\\\\DefenderApiLogger\\" /v \\"Start\\" /t REG_DWORD /d \\"0\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg  add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Control\\\\WMI\\\\Autologger\\\\DefenderAuditLogger\\" /v \\"Start\\" /t REG_DWORD /d \\"0\\" /f'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defense Evasion"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"doscmd/batch")," files to disable Windows Defender via multiple ",(0,i.kt)("em",{parentName:"td"},"reg.exe")," and ",(0,i.kt)("em",{parentName:"td"},"SCHTASKS.exe")," for Defense Evasion."),(0,i.kt)("td",{parentName:"tr",align:null},"Malware launched ",(0,i.kt)("em",{parentName:"td"},"SCHTASKS")," (attempted to modify Windows Defender ",(0,i.kt)("em",{parentName:"td"},"scheduled tasks"),")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Cache Maintenance\\" /Disable'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Scheduled Scan\\" /Disable'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Verification\\" /Disable'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'schtasks  /Change /TN \\"Microsoft\\\\Windows\\\\Windows Defender\\\\Windows Defender Cleanup\\" /Disable'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Defense Evasion"),(0,i.kt)("td",{parentName:"tr",align:null},"Threat actor used ",(0,i.kt)("em",{parentName:"td"},"doscmd/batch")," files to disable Windows Defender via multiple ",(0,i.kt)("em",{parentName:"td"},"reg.exe")," and ",(0,i.kt)("em",{parentName:"td"},"SCHTASKS.exe")," for Defense Evasion."),(0,i.kt)("td",{parentName:"tr",align:null},"Malware launched ",(0,i.kt)("em",{parentName:"td"},"REG.exe")," (attempted to modify Windows Defender ",(0,i.kt)("em",{parentName:"td"},"services configuration"),")."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Process Created"),": ",(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg delete \\"HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Explorer\\\\StartupApproved\\\\Run\\" /v \\"SecurityHealth\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg delete \\"HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run\\" /v \\"SecurityHealth\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg delete \\"HKCR\\\\*\\\\shellex\\\\ContextMenuHandlers\\\\EPP\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg delete \\"HKCR\\\\Directory\\\\shellex\\\\ContextMenuHandlers\\\\EPP\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg delete \\"HKCR\\\\Drive\\\\shellex\\\\ContextMenuHandlers\\\\EPP\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Services\\\\WdBoot\\" /v \\"Start\\" /t REG_DWORD /d \\"4\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Services\\\\WdFilter\\" /v \\"Start\\" /t REG_DWORD /d \\"4\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Services\\\\WdNisDrv\\" /v \\"Start\\" /t REG_DWORD /d \\"4\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Services\\\\WdNisSvc\\" /v \\"Start\\" /t REG_DWORD /d \\"4\\" /f'),(0,i.kt)("br",null),"- ",(0,i.kt)("inlineCode",{parentName:"td"},'reg add \\"HKLM\\\\System\\\\CurrentControlSet\\\\Services\\\\WinDefend\\" /v \\"Start\\" /t REG_DWORD /d \\"4\\" /f'))))))}m.isMDXComponent=!0}}]);