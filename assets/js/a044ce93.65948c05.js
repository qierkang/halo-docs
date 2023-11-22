"use strict";(self.webpackChunk_nineya_halo_docs=self.webpackChunk_nineya_halo_docs||[]).push([[4514],{5581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(6600),l=(a(9496),a(9613));a(6401);const r={title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo",description:"\u4f7f\u7528 Docker \u90e8\u7f72"},o=void 0,i={unversionedId:"getting-started/install/docker",id:"version-1.0/getting-started/install/docker",title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo",description:"\u4f7f\u7528 Docker \u90e8\u7f72",source:"@site/versioned_docs/version-1.0/getting-started/install/docker.md",sourceDirName:"getting-started/install",slug:"/getting-started/install/docker",permalink:"/getting-started/install/docker",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/master/versioned_docs/version-1.0/getting-started/install/docker.md",tags:[],version:"1.0",lastUpdatedBy:"nineya",lastUpdatedAt:1700617208,formattedLastUpdatedAt:"2023\u5e7411\u670822\u65e5",frontMatter:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo",description:"\u4f7f\u7528 Docker \u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Linux \u73af\u5883\u90e8\u7f72",permalink:"/getting-started/install/linux"},next:{title:"\u4e0e\u5b9d\u5854\u9762\u677f\u914d\u5408\u4f7f\u7528",permalink:"/getting-started/install/other/bt-panel"}},p={},s=[{value:"\u4f7f\u7528 Docker \u955c\u50cf",id:"\u4f7f\u7528-docker-\u955c\u50cf",level:2},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:2},{value:"Nginx",id:"nginx",level:3},{value:"Caddy 1.x",id:"caddy-1x",level:3},{value:"Caddy 2.x",id:"caddy-2x",level:3}],d={toc:s};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u7ee7\u7eed\u64cd\u4f5c\u4e4b\u524d\uff0c\u6211\u4eec\u63a8\u8350\u60a8\u5148\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"../prepare"},"\u300a\u5199\u5728\u524d\u9762\u300b"),"\uff0c\u8fd9\u53ef\u4ee5\u5feb\u901f\u5e2e\u52a9\u4f60\u4e86\u89e3 Halo\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-docker-\u955c\u50cf"},"\u4f7f\u7528 Docker \u955c\u50cf"),(0,l.kt)("p",null,"Halo-Plus \u5728 Docker Hub \u4e0a\u53d1\u5e03\u7684\u955c\u50cf\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nineya/halo-plus"},"nineya/halo-plus")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,l.kt)("a",{parentName:"li",href:"../prepare#%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95"},"\u5de5\u4f5c\u76ee\u5f55"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.halo-plus&& cd ~/.halo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u5230 ",(0,l.kt)("a",{parentName:"li",href:"../prepare#%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95"},"\u5de5\u4f5c\u76ee\u5f55"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6570\u636e\u5e93\u6216\u8005\u7aef\u53e3\u7b49\uff0c\u5982\u9700\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"../config"},"\u914d\u7f6e\u53c2\u8003"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim application.yaml\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u6700\u65b0\u7684 Halo-Plus \u955c\u50cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull nineya/halo-plus:latest\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u67e5\u770b\u6700\u65b0\u7248\u672c\u955c\u50cf\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nineya/halo-plus"},"https://hub.docker.com/r/nineya/halo-plus")," \uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5177\u4f53\u7248\u672c\u53f7\u7684\u955c\u50cf\uff0c\u4f46\u4e5f\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," \u6807\u7b7e\u7684\u955c\u50cf\uff0c\u5b83\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5bb9\u5668")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -d --name halo-plus -p 8090:8090 -v ~/.halo:/root/.halo-plus --restart=unless-stopped nineya/halo-plus:1.0.2\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u6b64\u547d\u4ee4\u9ed8\u8ba4\u4f7f\u7528\u81ea\u5e26\u7684 H2 Database \u6570\u636e\u5e93\u3002\u5982\u9700\u4f7f\u7528 MySQL\uff0c\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"./other/docker-mysql"},"\u4f7f\u7528 Docker \u90e8\u7f72 Halo-Plus \u548c MySQL"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-it\uff1a")," \u5f00\u542f\u8f93\u5165\u529f\u80fd\u5e76\u8fde\u63a5\u4f2a\u7ec8\u7aef"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-d\uff1a")," \u540e\u53f0\u8fd0\u884c\u5bb9\u5668"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"--name\uff1a")," \u4e3a\u5bb9\u5668\u6307\u5b9a\u4e00\u4e2a\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-p\uff1a")," \u7aef\u53e3\u6620\u5c04\uff0c\u683c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e3b\u673a(\u5bbf\u4e3b)\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3")," \uff0c\u53ef\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-v\uff1a")," \u5de5\u4f5c\u76ee\u5f55\u6620\u5c04\u3002\u5f62\u5f0f\u4e3a\uff1a-v \u5bbf\u4e3b\u673a\u8def\u5f84:/root/.halo\uff0c\u540e\u8005\u4e0d\u80fd\u4fee\u6539\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"--restart\uff1a")," \u5efa\u8bae\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"unless-stopped"),"\uff0c\u5728 Docker \u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u542f\u52a8 Halo-Plus \u5bb9\u5668\u3002")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"http://ip:\u7aef\u53e3\u53f7")," \u5373\u53ef\u770b\u5230\u5b89\u88c5\u5f15\u5bfc\u754c\u9762\u3002")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u914d\u7f6e\u57df\u540d\u8bbf\u95ee\uff0c\u5efa\u8bae\u5148\u914d\u7f6e\u597d\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca\u57df\u540d\u89e3\u6790\u518d\u8fdb\u884c\u521d\u59cb\u5316\u3002\u5982\u679c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://ip:\u7aef\u53e3\u53f7")," \u7684\u5f62\u5f0f\u65e0\u6cd5\u8bbf\u95ee\uff0c\u8bf7\u5230\u670d\u52a1\u5668\u5382\u5546\u540e\u53f0\u5c06\u8fd0\u884c\u7684\u7aef\u53e3\u53f7\u6dfb\u52a0\u5230\u5b89\u5168\u7ec4\uff0c\u5982\u679c\u670d\u52a1\u5668\u4f7f\u7528\u4e86 Linux \u9762\u677f\uff0c\u8bf7\u68c0\u67e5\u6b64 Linux \u9762\u677f\u662f\u5426\u6709\u8fd8\u6709\u5b89\u5168\u7ec4\u914d\u7f6e\uff0c\u9700\u8981\u540c\u6837\u5c06\u7aef\u53e3\u53f7\u6dfb\u52a0\u5230\u5b89\u5168\u7ec4\u3002")),(0,l.kt)("h2",{id:"\u53cd\u5411\u4ee3\u7406"},"\u53cd\u5411\u4ee3\u7406"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0b\u9762\u7684\u53cd\u5411\u4ee3\u7406\u8f6f\u4ef6\u4e2d\u4efb\u9009\u4e00\u9879\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\u5176\u4e2d\u4e00\u9879\uff0c\u5e76\u5bf9\u5176\u7684\u57fa\u672c\u64cd\u4f5c\u6709\u4e00\u5b9a\u4e86\u89e3\u3002\u5982\u679c\u4f60\u5bf9 Nginx \u4e0d\u719f\u6089\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"./other/oneinstack"},"OneinStack")," \u6765\u7ba1\u7406 Nginx\u3002"),(0,l.kt)("h3",{id:"nginx"},"Nginx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream halo {\n  server 127.0.0.1:8090;\n}\nserver {\n  listen 80;\n  listen [::]:80;\n  server_name www.yourdomain.com;\n  client_max_body_size 1024m;\n  location / {\n    proxy_pass http://halo;\n    proxy_set_header HOST $host;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  }\n}\n")),(0,l.kt)("h3",{id:"caddy-1x"},"Caddy 1.x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"https://www.yourdomain.com {\n gzip\n tls your@email.com\n proxy / localhost:8090 {\n  transparent\n }\n}\n")),(0,l.kt)("h3",{id:"caddy-2x"},"Caddy 2.x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"www.yourdomain.com\n\nencode gzip\n\nreverse_proxy 127.0.0.1:8090\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u90fd\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com//halo-dev/halo-common"},"https://github.com//halo-dev/halo-common")," \u627e\u5230\u3002"))}k.isMDXComponent=!0}}]);