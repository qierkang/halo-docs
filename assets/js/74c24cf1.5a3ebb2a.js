"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[9556],{7325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(6600),a=(t(9496),t(9613));t(6401);const l={title:"\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6",description:"\u4e86\u89e3\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6 plugin.yaml \u5982\u4f55\u914d\u7f6e"},p=void 0,o={unversionedId:"developer-guide/plugin/manifest",id:"developer-guide/plugin/manifest",title:"\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6",description:"\u4e86\u89e3\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6 plugin.yaml \u5982\u4f55\u914d\u7f6e",source:"@site/docs/developer-guide/plugin/manifest.md",sourceDirName:"developer-guide/plugin",slug:"/developer-guide/plugin/manifest",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/manifest",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/plugin/manifest.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685537190,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6",description:"\u4e86\u89e3\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6 plugin.yaml \u5982\u4f55\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/lifecycle"},next:{title:"\u63d2\u4ef6\u4e2d\u7684\u5bf9\u8c61\u7ba1\u7406",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/object-management"}},r={},d=[],m={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6 plugin.yaml \u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: plugin.halo.run/v1alpha1\n  kind: Plugin\n  metadata:\n    name: hello-world\n  spec:\n    enabled: true\n    requires: ">=2.0.0"\n    author:\n      name: halo-dev\n      website: https://halo.run\n    logo: https://halo.run/logo\n    # settingName: hello-world-settings\n    # configMapName: hello-world-configmap\n    homepage: https://github.com/guqing/halo-plugin-hello-world\n    displayName: "\u63d2\u4ef6 Hello world"\n    description: "\u63d2\u4ef6\u5f00\u53d1\u7684 hello world\uff0c\u7528\u4e8e\u5b66\u4e60\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 Halo \u63d2\u4ef6"\n    license:\n      - name: "MIT"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apiVersion")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"kind"),"\uff1a\u4e3a\u56fa\u5b9a\u5199\u6cd5\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u5199\u6cd5\u90fd\u662f\u4e00\u6837\u7684\u4e0d\u53ef\u53d8\u66f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metadata.name"),"\uff1a\u5b83\u662f\u63d2\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u540d\uff0c\u5305\u542b\u4e0d\u8d85\u8fc7 253 \u4e2a\u5b57\u7b26\uff0c\u4ec5\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u201c-\u201d\uff0c\u4ee5\u5b57\u6bcd\u6216\u6570\u5b57\u5f00\u5934\uff0c\u4ee5\u5b57\u6bcd\u6216\u6570\u5b57\u7ed3\u5c3e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.enabled"),"\uff1a\u8868\u793a\u662f\u5426\u8981\u5728\u5b89\u88c5\u65f6\u81ea\u52a8\u542f\u7528\u63d2\u4ef6\uff0c\u4ec5\u5728\u63d2\u4ef6\u5f00\u53d1\u6a21\u5f0f\u4e0b\u6709\u6548\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.requires"),'\uff1a\u652f\u6301\u7684 Halo \u7248\u672c\uff0cSemVer expression, e.g. ">=2.0.0"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.author"),"\uff1a\u63d2\u4ef6\u4f5c\u8005\u7684\u540d\u79f0\u548c\u53ef\u83b7\u5f97\u652f\u6301\u7684\u7f51\u7ad9\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.logo"),"\uff1a\u63d2\u4ef6 logo\uff0c\u53ef\u4ee5\u662f\u57df\u540d\u6216\u76f8\u5bf9\u4e8e\u9879\u76ee src/main/resources \u76ee\u5f55\u7684\u76f8\u5bf9\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.settingName"),"\uff1a\u63d2\u4ef6\u914d\u7f6e\u8868\u5355\u540d\u79f0\uff0c\u53c2\u8003\u8868\u5355\u5b9a\u4e49\uff0c\u4e0d\u9700\u8981\u8868\u5355\u8bbe\u7f6e\u5219\u53ef\u5220\u9664\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.configMapName"),'\uff1a\u8868\u5355\u5b9a\u4e49\u5bf9\u5e94\u7684\u503c\u6807\u8bc6\u540d, \u63a8\u8350\u547d\u540d\u4e3a "\u63d2\u4ef6\u540d-configmap"\uff0c\u6ca1\u6709\u914d\u7f6e ',(0,a.kt)("inlineCode",{parentName:"li"},"settingName")," \u5219\u4e0d\u9700\u8981\u914d\u7f6e\u6b64\u9879\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.homepage"),"\uff1a\u901a\u5e38\u4e3a\u63d2\u4ef6\u7684 Github \u4ed3\u5e93\u94fe\u63a5\uff0c\u6216\u53ef\u8054\u7cfb\u5230\u63d2\u4ef6\u4f5c\u8005\u6216\u63d2\u4ef6\u5b98\u7f51\u6216\u5e2e\u52a9\u4e2d\u5fc3\u94fe\u63a5\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.displayName"),"\uff1a\u63d2\u4ef6\u7684\u663e\u793a\u540d\u79f0\uff0c\u5b83\u901a\u5e38\u662f\u4ee5\u5c11\u6570\u51e0\u4e2a\u5b57\u6765\u6982\u62ec\u63d2\u4ef6\u7684\u7528\u9014\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.description"),"\uff1a\u63d2\u4ef6\u63cf\u8ff0\uff0c\u7528\u4e00\u6bb5\u8bdd\u6765\u4ecb\u7ecd\u63d2\u4ef6\u7684\u7528\u9014\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec.license"),"\uff1a\u63d2\u4ef6\u4f7f\u7528\u7684\u8f6f\u4ef6\u534f\u8bae\uff0c\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Software_license"},"https://en.wikipedia.org/wiki/Software_license"),"\u3002")),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728 plugin.yaml \u4e2d\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"settingName")," \u4f46\u786e\u6ca1\u6709\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Setting")," \u81ea\u5b9a\u4e49\u6a21\u578b\u8d44\u6e90\u6587\u4ef6\uff0c\u4f1a\u5bfc\u81f4\u63d2\u4ef6\u65e0\u6cd5\u542f\u52a8\uff0c\u539f\u56e0\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Setting")," \u6a21\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u4e3a\u4f60\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"settingName")," \u7684\u8d44\u6e90\u65e0\u6cd5\u627e\u5230\u3002")))}s.isMDXComponent=!0}}]);