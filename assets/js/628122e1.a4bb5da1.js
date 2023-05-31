"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[7536],{9943:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(6600),l=(t(9496),t(9613));t(6401);const o={title:"\u6784\u5efa",description:"\u6784\u5efa\u4e3a\u53ef\u6267\u884c JAR \u548c Docker \u955c\u50cf\u7684\u6587\u6863"},i=void 0,r={unversionedId:"developer-guide/core/build",id:"developer-guide/core/build",title:"\u6784\u5efa",description:"\u6784\u5efa\u4e3a\u53ef\u6267\u884c JAR \u548c Docker \u955c\u50cf\u7684\u6587\u6863",source:"@site/docs/developer-guide/core/build.md",sourceDirName:"developer-guide/core",slug:"/developer-guide/core/build",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/build",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/core/build.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685537190,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"\u6784\u5efa",description:"\u6784\u5efa\u4e3a\u53ef\u6267\u884c JAR \u548c Docker \u955c\u50cf\u7684\u6587\u6863"},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u73af\u5883\u8fd0\u884c",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/run"},next:{title:"\u63d2\u4ef6\u5f00\u53d1",permalink:"/1.1.0-SNAPSHOT/category/\u63d2\u4ef6\u5f00\u53d1"}},p={},d=[{value:"\u514b\u9686\u9879\u76ee",id:"\u514b\u9686\u9879\u76ee",level:2},{value:"\u6784\u5efa Console",id:"\u6784\u5efa-console",level:2},{value:"\u6784\u5efa Fat Jar",id:"\u6784\u5efa-fat-jar",level:2},{value:"\u6784\u5efa Docker \u955c\u50cf",id:"\u6784\u5efa-docker-\u955c\u50cf",level:2}],c={toc:d};function s(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u5148\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"./prepare"},"\u300a\u51c6\u5907\u5de5\u4f5c\u300b"),"\uff0c\u68c0\u67e5\u672c\u5730\u73af\u5883\u662f\u5426\u6ee1\u8db3\u8981\u6c42\u3002")),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7248\u672c\u4e00\u81f4\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u6211\u4eec\u5e76\u4e0d\u63a8\u8350\u81ea\u884c\u6784\u5efa\u548c\u4e8c\u6b21\u5f00\u53d1\u3002\u4f46\u8003\u8651\u5230\u6211\u4eec\u76ee\u524d\u4ec5\u63d0\u4f9b Docker \u955c\u50cf\u7684\u53d1\u884c\u7248\u672c\uff0c\u4e0d\u518d\u63d0\u4f9b\u53ef\u6267\u884c JAR \u7684\u53d1\u884c\u7248\u672c\uff0c\u56e0\u6b64\u6211\u4eec\u63d0\u4f9b\u4e86\u6784\u5efa\u7684\u6587\u6863\uff0c\u4ee5\u4f9b\u7528\u6237\u81ea\u884c\u6784\u5efa\u3002"),(0,l.kt)("h2",{id:"\u514b\u9686\u9879\u76ee"},"\u514b\u9686\u9879\u76ee"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf fork \u4e86\u76f8\u5173\u4ed3\u5e93\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u7684 halo-dev \u66ff\u6362\u4e3a\u4f60\u7684 GitHub \u7528\u6237\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/halo-dev/halo\n\n# \u6216\u8005\u4f7f\u7528 ssh \u7684\u65b9\u5f0f clone\uff08\u63a8\u8350\uff09\n\ngit clone git@github.com:halo-dev/halo.git\n\n# \u5207\u6362\u5230\u6700\u65b0\u7684 tag\n\ncd halo\n\ngit checkout v2.4.0\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8bf7\u52a1\u5fc5\u6309\u7167\u4ee5\u4e0a\u8981\u6c42\u5207\u6362\u5230\u6700\u65b0\u7684 tag\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528 main \u5206\u652f\u6784\u5efa\uff0cmain \u5206\u652f\u662f\u6211\u4eec\u7684\u5f00\u53d1\u5206\u652f\u3002\u6b64\u6587\u6863\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"2.5.0")," \u4e3a\u4f8b\uff0c\u67e5\u770b\u6700\u65b0\u7684 tag \u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"git tag --column")," \u67e5\u770b\u3002")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"\u4ece 2.4.0 \u5f00\u59cb\uff0cConsole \u9879\u76ee\u5df2\u7ecf\u5408\u5e76\u5230 Halo \u4e3b\u9879\u76ee\uff0c\u6240\u4ee5\u4e0d\u518d\u9700\u8981\u5355\u72ec\u514b\u9686 Console \u7684\u9879\u76ee\u4ed3\u5e93\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u8be6\u60c5\u53ef\u67e5\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/halo-dev/halo/issues/3393"},"https://github.com/halo-dev/halo/issues/3393"))),(0,l.kt)("h2",{id:"\u6784\u5efa-console"},"\u6784\u5efa Console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd path/to/halo\n")),(0,l.kt)("p",null,"Linux / macOS \u5e73\u53f0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make -C console build\n")),(0,l.kt)("p",null,"Windows \u5e73\u53f0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd console\n\npnpm install\n\npnpm build:packages\n\npnpm build\n")),(0,l.kt)("h2",{id:"\u6784\u5efa-fat-jar"},"\u6784\u5efa Fat Jar"),(0,l.kt)("p",null,"\u6784\u5efa\u4e4b\u524d\u9700\u8981\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"gradle.properties")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," \u4e3a\u5f53\u524d tag \u7684\u7248\u672c\u53f7\uff0c\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"version=2.5.0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd path/to/halo\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows\n./gradlew.bat clean build -x check\n\n# macOS / Linux\n./gradlew clean build -x check\n")),(0,l.kt)("p",null,"\u6784\u5efa\u5b8c\u6210\u4e4b\u540e\uff0c\u5728 halo \u9879\u76ee\u4e0b\u4ea7\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"application/build/libs/halo-2.5.0.jar")," \u5373\u4e3a\u6784\u5efa\u5b8c\u6210\u7684\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u6784\u5efa-docker-\u955c\u50cf"},"\u6784\u5efa Docker \u955c\u50cf"),(0,l.kt)("p",null,"\u5728\u8fdb\u884c\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\uff0c\u6700\u7ec8\u9700\u8981\u786e\u8ba4\u5728 halo \u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"application/build/libs/")," \u76ee\u5f55\u5df2\u7ecf\u5305\u542b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"halo-2.5.0.jar")," \u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd path/to/halo\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t halo-dev/halo:2.5.0 .\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u63d2\u4ef6\u6784\u5efa\u5b8c\u6210\u7684\u7248\u672c\ndocker images | grep halo\n")),(0,l.kt)("p",null,"\u6700\u7ec8\u90e8\u7f72\u6587\u6863\u53ef\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"./docker-compose"},"\u4f7f\u7528 Docker Compose \u90e8\u7f72")))}s.isMDXComponent=!0}}]);