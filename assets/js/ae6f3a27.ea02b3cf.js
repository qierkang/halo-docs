"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[3937],{1068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var a=n(6600),i=(n(9496),n(9613));n(6401);const o={title:"\u8bbe\u7f6e\u9009\u9879",description:"\u4ecb\u7ecd\u4e3b\u9898\u5982\u4f55\u5b9a\u4e49\u4ee5\u53ca\u4f7f\u7528\u8bbe\u7f6e\u9009\u9879\u3002"},l=void 0,m={unversionedId:"developer-guide/theme/settings",id:"developer-guide/theme/settings",title:"\u8bbe\u7f6e\u9009\u9879",description:"\u4ecb\u7ecd\u4e3b\u9898\u5982\u4f55\u5b9a\u4e49\u4ee5\u53ca\u4f7f\u7528\u8bbe\u7f6e\u9009\u9879\u3002",source:"@site/docs/developer-guide/theme/settings.md",sourceDirName:"developer-guide/theme",slug:"/developer-guide/theme/settings",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/settings",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/theme/settings.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685537190,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"\u8bbe\u7f6e\u9009\u9879",description:"\u4ecb\u7ecd\u4e3b\u9898\u5982\u4f55\u5b9a\u4e49\u4ee5\u53ca\u4f7f\u7528\u8bbe\u7f6e\u9009\u9879\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u9759\u6001\u8d44\u6e90",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/static-resources"},next:{title:"\u6a21\u578b\u5143\u6570\u636e",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/annotations"}},p={},s=[{value:"\u5b9a\u4e49\u8868\u5355",id:"\u5b9a\u4e49\u8868\u5355",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u5728\u4e3b\u9898\u6a21\u677f\u4e2d\u4f7f\u7528",id:"\u5728\u4e3b\u9898\u6a21\u677f\u4e2d\u4f7f\u7528",level:3},{value:"\u66f4\u65b0\u914d\u7f6e",id:"\u66f4\u65b0\u914d\u7f6e",level:2},{value:"\u4ece 1.x \u8fc1\u79fb",id:"\u4ece-1x-\u8fc1\u79fb",level:2}],r={toc:s};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6b64\u6587\u6863\u5c06\u8bb2\u89e3\u5982\u4f55\u5728\u4e3b\u9898\u4e2d\u5b9a\u4e49\u548c\u4f7f\u7528\u8bbe\u7f6e\u9879\uff0c\u5982 ",(0,i.kt)("a",{parentName:"p",href:"../form-schema"},"\u8868\u5355\u5b9a\u4e49")," \u4e2d\u6240\u8bf4\uff0c\u76ee\u524d Halo \u7684 Console \u7aef\u7684\u6240\u6709\u8868\u5355\u90fd\u4f7f\u7528\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/formkit/formkit"},"FormKit")," \u7684\u65b9\u6848\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u6709\u5173 FormKit \u5b9a\u4e49\u8868\u5355\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"../form-schema"},"\u8868\u5355\u5b9a\u4e49"),"\uff0c\u6b64\u6587\u6863\u4ec5\u9488\u5bf9\u4e3b\u9898\u4e2d\u7684\u8bbe\u7f6e\u9879\u8fdb\u884c\u8bb2\u89e3\u3002")),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u8868\u5355"},"\u5b9a\u4e49\u8868\u5355"),(0,i.kt)("p",null,"\u5728\u4e3b\u9898\u4e2d\u8981\u4f7f\u7528\u8bbe\u7f6e\u9879\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u4e3b\u9898\u6839\u76ee\u5f55\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.yaml"),"\uff0c\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.yaml")," \u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.settingName")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.configMapName")," \u5373\u53ef\uff0c\u5728\u5b89\u88c5\u6216\u8005\u521d\u59cb\u5316\u4e3b\u9898\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u5728 Console \u7aef\u7684\u4e3b\u9898\u8bbe\u7f6e\u4e2d\u751f\u6210\u8868\u5355\u3002"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="theme-foo/theme.yaml" {14,15}',title:'"theme-foo/theme.yaml"',"{14,15}":!0},'apiVersion: theme.halo.run/v1alpha1\nkind: Theme\nmetadata:\n  name: theme-foo\nspec:\n  displayName: \u793a\u4f8b\u4e3b\u9898\n  author:\n    name: halo-dev\n    website: https://halo.run\n  description: \u4e00\u4e2a\u793a\u4f8b\u4e3b\u9898\n  logo: https://halo.run/logo\n  website: https://github.com/halo-sigs/theme-foo\n  repo: https://github.com/halo-sigs/theme-foo.git\n  settingName: "theme-foo-setting"\n  configMapName: "theme-foo-configMap"\n  version: 1.0.0\n  require: 2.0.0\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"settingName")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"configMapName")," \u5fc5\u987b\u540c\u65f6\u914d\u7f6e\uff0c\u4e14\u53ef\u4ee5\u81ea\u5b9a\u4e49\u540d\u79f0\uff0c\u4f46\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"settingName")," \u5fc5\u987b\u548c Setting \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u4e00\u81f4\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="theme-foo/settings.yaml" {4}',title:'"theme-foo/settings.yaml"',"{4}":!0},'apiVersion: v1alpha1\nkind: Setting\nmetadata:\n  name: theme-foo-setting\nspec:\n  forms:\n    - group: style\n      label: \u6837\u5f0f\n      formSchema:\n        - $formkit: radio\n          name: color_scheme\n          label: \u9ed8\u8ba4\u914d\u8272\n          value: system\n          options:\n            - label: \u8ddf\u968f\u7cfb\u7edf\n              value: system\n            - label: \u6df1\u8272\n              value: dark\n            - label: \u6d45\u8272\n              value: light\n        - $formkit: color\n          name: background_color\n          label: \u80cc\u666f\u989c\u8272\n          value: "#f2f2f2"\n    - group: layout\n      label: \u5e03\u5c40\n      formSchema:\n        - $formkit: radio\n          name: nav\n          label: \u5bfc\u822a\u680f\u5e03\u5c40\n          value: "single"\n          options: \n            - label: \u5355\u680f\n              value: "single"\n            - label: \u53cc\u680f\n              value: "double"\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Setting \u8d44\u6e90\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u5fc5\u987b\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.yaml")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.settingName")," \u4e00\u81f4\u3002")),(0,i.kt)("h3",{id:"\u5728\u4e3b\u9898\u6a21\u677f\u4e2d\u4f7f\u7528"},"\u5728\u4e3b\u9898\u6a21\u677f\u4e2d\u4f7f\u7528"),(0,i.kt)("p",null,"\u5728\u4e3b\u9898\u6a21\u677f\u4e2d\uff0c\u9700\u8981\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.config.[group].[name]")," \u7684\u5f62\u5f0f\u8fdb\u884c\u8c03\u7528\u3002"),(0,i.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"group"),": \u5373 ",(0,i.kt)("inlineCode",{parentName:"li"},"spec.forms[].group"),"\uff0c\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"style")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"layout"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": \u5373 ",(0,i.kt)("inlineCode",{parentName:"li"},"spec.forms[].formSchema[].name"),"\uff0c\u5982\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"color_scheme")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"nav"),"\u3002")),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<body th:class="${theme.config.style.color_scheme}">\n    \x3c!-- do something --\x3e\n</body>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ul th:if=\"${theme.config.layout.nav == 'single'}\">\n    \x3c!-- do something --\x3e\n</ul>\n\n<div th:if=\"${theme.config.layout.nav == 'double'}\">\n    \x3c!-- do something --\x3e\n</div>\n")),(0,i.kt)("h2",{id:"\u66f4\u65b0\u914d\u7f6e"},"\u66f4\u65b0\u914d\u7f6e"),(0,i.kt)("p",null,"\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.yaml")," \u4e00\u6837\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"settings.yaml")," \u4e5f\u662f\u6301\u4e45\u5316\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\u7684\uff0c\u4e0d\u4f1a\u5728\u4fee\u6539\u4e4b\u540e\u4e3b\u52a8\u66f4\u65b0\u3002\u540c\u6837\u5728\u4e3b\u9898\u8be6\u60c5\u9875\u9762\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"\u91cd\u8f7d\u4e3b\u9898\u914d\u7f6e")," \u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u91cd\u8f7d\u4e3b\u9898\u914d\u7f6e",src:n(6777).Z,width:"3326",height:"902"})),(0,i.kt)("h2",{id:"\u4ece-1x-\u8fc1\u79fb"},"\u4ece 1.x \u8fc1\u79fb"),(0,i.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4e3b\u9898\u5f00\u53d1\u8005\u4ece 1.x \u8fc1\u79fb\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5de5\u5177\u7528\u4e8e\u8fc1\u79fb\u8bbe\u7f6e\u8868\u5355\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u5de5\u5177\u4ed3\u5e93\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/halo-sigs/convert-theme-config-to-next"},"https://github.com/halo-sigs/convert-theme-config-to-next")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# 1.x \u7248\u672c\u4e3b\u9898\ncd path/to/theme\n\nnpx @halo-dev/convert-theme-config-to-next settings\n")),(0,i.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u4e4b\u540e\u5373\u53ef\u770b\u5230\u4e3b\u9898\u76ee\u5f55\u4e0b\u751f\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.2.0.yaml")," \u6587\u4ef6\uff0c\u91cd\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.yaml")," \u5373\u53ef\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8f6c\u6362\u5b8c\u6210\u4e4b\u540e\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u5b57\u6bb5\u3002")))}d.isMDXComponent=!0},6777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reload-theme-config-4970e4a2b3eb93ff71e7594df3678224.png"}}]);