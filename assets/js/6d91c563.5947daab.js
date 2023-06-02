"use strict";(self.webpackChunk_nineya_docs=self.webpackChunk_nineya_docs||[]).push([[6926],{9102:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(6600),l=(t(9496),t(9613));t(6401);const r={title:"\u5728 Linux \u73af\u5883\u90e8\u7f72",description:"\u5728 Linux \u4e0a\u5feb\u901f\u5b89\u88c5 Halo-Plus"},o=void 0,p={unversionedId:"getting-started/install/linux",id:"getting-started/install/linux",title:"\u5728 Linux \u73af\u5883\u90e8\u7f72",description:"\u5728 Linux \u4e0a\u5feb\u901f\u5b89\u88c5 Halo-Plus",source:"@site/docs/getting-started/install/linux.md",sourceDirName:"getting-started/install",slug:"/getting-started/install/linux",permalink:"/1.1.0-SNAPSHOT/getting-started/install/linux",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/main/docs/getting-started/install/linux.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685671694,formattedLastUpdatedAt:"2023\u5e746\u67082\u65e5",frontMatter:{title:"\u5728 Linux \u73af\u5883\u90e8\u7f72",description:"\u5728 Linux \u4e0a\u5feb\u901f\u5b89\u88c5 Halo-Plus"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/1.1.0-SNAPSHOT/category/\u5b89\u88c5\u6307\u5357"},next:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo",permalink:"/1.1.0-SNAPSHOT/getting-started/install/docker"}},s={},i=[{value:"\u4f9d\u8d56\u68c0\u67e5",id:"\u4f9d\u8d56\u68c0\u67e5",level:2},{value:"CentOS",id:"centos",level:3},{value:"Ubuntu",id:"ubuntu",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c",id:"\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c",level:2},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:2},{value:"Nginx",id:"nginx",level:3},{value:"Caddy 1.x",id:"caddy-1x",level:3},{value:"Caddy 2.x",id:"caddy-2x",level:3}],u={toc:i};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u7ee7\u7eed\u64cd\u4f5c\u4e4b\u524d\uff0c\u6211\u4eec\u63a8\u8350\u60a8\u5148\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"../prepare"},"\u300a\u5199\u5728\u524d\u9762\u300b"),"\uff0c\u8fd9\u53ef\u4ee5\u5feb\u901f\u5e2e\u52a9\u4f60\u4e86\u89e3 Halo-Plus\u3002")),(0,l.kt)("h2",{id:"\u4f9d\u8d56\u68c0\u67e5"},"\u4f9d\u8d56\u68c0\u67e5"),(0,l.kt)("p",null,"\u76ee\u524d\u8fd0\u884c Halo-Plus \u7684\u6700\u4f4e\u4f9d\u8d56\u8981\u6c42\u4e3a JRE 11\uff0c\u8bf7\u52a1\u5fc5\u786e\u4fdd\u5728\u8fdb\u884c\u4e0b\u9762\u64cd\u4f5c\u4e4b\u524d\u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\u4e86 JRE\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u4ecb\u7ecd\u4e24\u79cd Linux \u53d1\u884c\u7248\u7684\u5b89\u88c5\u65b9\u5f0f\uff0c\u5747\u4e3a OpenJRE\uff0c\u4e0d\u63a8\u8350 Oracle \u7248\u672c\u3002"),(0,l.kt)("h3",{id:"centos"},"CentOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install java-11-openjdk -y\n")),(0,l.kt)("p",null,"\u68c0\u67e5\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,l.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u4ee5\u4e0b\u7c7b\u4f3c\u5185\u5bb9\u5373\u4ee3\u8868\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'openjdk version "11.0.10" 2021-01-19 LTS\nOpenJDK Runtime Environment 18.9 (build 11.0.10+9-LTS)\nOpenJDK 64-Bit Server VM 18.9 (build 11.0.10+9-LTS, mixed mode, sharing)\n')),(0,l.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install openjdk-11-jre -y\n")),(0,l.kt)("p",null,"\u68c0\u67e5\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,l.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u4ee5\u4e0b\u7c7b\u4f3c\u5185\u5bb9\u5373\u4ee3\u8868\u6210\u529f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'openjdk version "11.0.10" 2021-01-19\nOpenJDK Runtime Environment (build 11.0.10+9-Ubuntu-0ubuntu1.20.04)\nOpenJDK 64-Bit Server VM (build 11.0.10+9-Ubuntu-0ubuntu1.20.04, mixed mode)\n')),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684\u7cfb\u7edf\u7528\u6237")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u4e0d\u63a8\u8350\u76f4\u63a5\u4f7f\u7528\u7cfb\u7edf root \u7528\u6237\u6765\u8fd0\u884c Halo-Plus\u3002\u5982\u679c\u60a8\u9700\u8981\u76f4\u63a5\u4f7f\u7528 root \u7528\u6237\uff0c\u8bf7\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a halo \u7684\u7528\u6237\uff08\u540d\u5b57\u53ef\u4ee5\u968f\u610f\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"useradd -m halo\n")),(0,l.kt)("p",null,"\u7ed9\u4e88 sudo \u6743\u9650"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -aG wheel halo\n")),(0,l.kt)("p",null,"\u4e3a halo \u7528\u6237\u521b\u5efa\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"passwd halo\n")),(0,l.kt)("p",null,"\u767b\u5f55\u5230 halo \u8d26\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"su - halo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5b58\u653e ",(0,l.kt)("a",{parentName:"li",href:"../prepare#%E8%BF%90%E8%A1%8C%E5%8C%85"},"\u8fd0\u884c\u5305")," \u7684\u76ee\u5f55\uff0c\u8fd9\u91cc\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"~/app")," \u4e3a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/app && cd ~/app\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u8fd0\u884c\u5305")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.halo.run/release/halo-1.6.0.jar -O halo-plus.jar\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0b\u8f7d\u901f\u5ea6\u4e0d\u7406\u60f3\uff0c\u53ef\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"../downloads"},"\u5728\u8fd9\u91cc")," \u9009\u62e9\u5176\u4ed6\u4e0b\u8f7d\u5730\u5740\u3002")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,l.kt)("a",{parentName:"li",href:"../prepare#%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95"},"\u5de5\u4f5c\u76ee\u5f55"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.halo-plus&& cd ~/.halo\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u5230 ",(0,l.kt)("a",{parentName:"li",href:"../prepare#%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95"},"\u5de5\u4f5c\u76ee\u5f55"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml \n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6570\u636e\u5e93\u6216\u8005\u7aef\u53e3\u7b49\uff0c\u5982\u9700\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"../config"},"\u914d\u7f6e\u53c2\u8003"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim application.yaml\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u8fd0\u884c Halo-Plus")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/app && java -jar halo-plus.jar\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"\u5982\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u65e5\u5fd7\u8f93\u51fa\uff0c\u5219\u4ee3\u8868\u542f\u52a8\u6210\u529f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"run.halo.app.listener.StartedListener    : Halo-Plus started at         http://127.0.0.1:8090\nrun.halo.app.listener.StartedListener    : Halo-Plus admin started at   http://127.0.0.1:8090/admin\nrun.halo.app.listener.StartedListener    : Halo-Plus has started successfully!\n")),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://ip:\u7aef\u53e3\u53f7")," \u5373\u53ef\u770b\u5230\u5b89\u88c5\u5f15\u5bfc\u754c\u9762\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u6d4b\u8bd5\u542f\u52a8\u6b63\u5e38\uff0c\u8bf7\u7ee7\u7eed\u770b",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c"),"\u90e8\u5206\uff0c\u7b2c 8 \u6b65\u4ec5\u4ec5\u4f5c\u4e3a\u6d4b\u8bd5\u3002\u5f53\u4f60\u5173\u95ed ssh \u8fde\u63a5\u4e4b\u540e\uff0c\u670d\u52a1\u4f1a\u505c\u6b62\u3002\u4f60\u53ef\u4f7f\u7528 ",(0,l.kt)("kbd",null,"CTRL"),"+",(0,l.kt)("kbd",null,"C")," \u505c\u6b62\u8fd0\u884c\u6d4b\u8bd5\u8fdb\u7a0b\u3002")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u914d\u7f6e\u57df\u540d\u8bbf\u95ee\uff0c\u5efa\u8bae\u5148\u914d\u7f6e\u597d\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca\u57df\u540d\u89e3\u6790\u518d\u8fdb\u884c\u521d\u59cb\u5316\u3002\u5982\u679c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://ip: \u7aef\u53e3\u53f7")," \u7684\u5f62\u5f0f\u65e0\u6cd5\u8bbf\u95ee\uff0c\u8bf7\u5230\u670d\u52a1\u5668\u5382\u5546\u540e\u53f0\u5c06\u8fd0\u884c\u7684\u7aef\u53e3\u53f7\u6dfb\u52a0\u5230\u5b89\u5168\u7ec4\uff0c\u5982\u679c\u670d\u52a1\u5668\u4f7f\u7528\u4e86 Linux \u9762\u677f\uff0c\u8bf7\u68c0\u67e5\u6b64 Linux \u9762\u677f\u662f\u5426\u6709\u8fd8\u6709\u5b89\u5168\u7ec4\u914d\u7f6e\uff0c\u9700\u8981\u540c\u6837\u5c06\u7aef\u53e3\u53f7\u6dfb\u52a0\u5230\u5b89\u5168\u7ec4\u3002")),(0,l.kt)("h2",{id:"\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c"},"\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9000\u51fa halo \u8d26\u6237\uff0c\u767b\u5f55\u5230 root \u8d26\u6237")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5f53\u524d\u5c31\u662f root \u8d26\u6237\uff0c\u8bf7\u7565\u8fc7\u6b64\u6b65\u9aa4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d Halo-Plus \u5b98\u65b9\u7684 halo.service \u6a21\u677f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.halo.run/config/halo.service -O /etc/systemd/system/halo.service\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 halo.service")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/systemd/system/halo.service\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u914d\u7f6e")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"YOUR_JAR_PATH"),"\uff1aHalo-Plus \u8fd0\u884c\u5305\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"/home/halo/app/halo-plus.jar"),"\uff0c\u6ce8\u610f\uff1a\u6b64\u8def\u5f84\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"~")," \u7b26\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"USER"),"\uff1a\u8fd0\u884c Halo-Plus \u7684\u7cfb\u7edf\u7528\u6237\uff0c\u5982\u679c\u6709\u6309\u7167\u4e0a\u65b9\u6559\u7a0b\u521b\u5efa\u65b0\u7684\u7528\u6237\u6765\u8fd0\u884c Halo-Plus\uff0c\u4fee\u6539\u4e3a\u4f60\u521b\u5efa\u7684\u7528\u6237\u540d\u79f0\u5373\u53ef\u3002\u53cd\u4e4b\u8bf7\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"User=USER"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[Unit]\nDescription=Halo Service\nDocumentation=https://halo.run\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=simple\nUser=USER\nExecStart=/usr/bin/java -server -Xms256m -Xmx256m -jar YOUR_JAR_PATH\nExecStop=/bin/kill -s QUIT $MAINPID\nRestart=always\nStandOutput=syslog\n\nStandError=inherit\n\n[Install]\nWantedBy=multi-user.target\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8bf7\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin/java")," \u662f\u6b63\u786e\u65e0\u8bef\u7684\u3002\u5efa\u8bae\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecStart")," \u4e2d\u7684\u547d\u4ee4\u590d\u5236\u51fa\u6765\u8fd0\u884c\u4e00\u4e0b\uff0c\u4fdd\u8bc1\u547d\u4ee4\u6709\u6548\u3002")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u52a0\u8f7d systemd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u670d\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start halo\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u542f\u52a8\u670d\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable halo\n")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u67e5\u770b\u670d\u52a1\u65e5\u5fd7\u68c0\u67e5\u542f\u52a8\u72b6\u6001"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -n 20 -u halo\n")),(0,l.kt)("h2",{id:"\u53cd\u5411\u4ee3\u7406"},"\u53cd\u5411\u4ee3\u7406"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0b\u9762\u7684\u53cd\u5411\u4ee3\u7406\u8f6f\u4ef6\u4e2d\u4efb\u9009\u4e00\u9879\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\u5176\u4e2d\u4e00\u9879\uff0c\u5e76\u5bf9\u5176\u57fa\u672c\u64cd\u4f5c\u6709\u4e00\u5b9a\u4e86\u89e3\u3002\u5982\u679c\u4f60\u5bf9 Nginx \u4e0d\u719f\u6089\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"./other/oneinstack"},"OneinStack")," \u6765\u7ba1\u7406 Nginx\u3002"),(0,l.kt)("h3",{id:"nginx"},"Nginx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream halo {\n  server 127.0.0.1:8090;\n}\nserver {\n  listen 80;\n  listen [::]:80;\n  server_name www.yourdomain.com;\n  client_max_body_size 1024m;\n  location / {\n    proxy_pass http://halo;\n    proxy_set_header HOST $host;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  }\n}\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1aNginx \u9ed8\u8ba4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"client_max_body_size")," \u914d\u7f6e\u5927\u5c0f\u4e3a 1m\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4f60\u5728 Halo-Plus \u540e\u53f0\u4e0a\u4f20\u6587\u4ef6\u88ab Nginx \u9650\u5236\uff0c\u6240\u4ee5\u6b64\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u52a0\u4e0a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"client_max_body_size 1024m;")," \u8fd9\u884c\u914d\u7f6e\u3002\u5f53\u7136\uff0c1024m \u53ef\u6839\u636e\u4f60\u7684\u9700\u8981\u81ea\u884c\u4fee\u6539\u3002"),(0,l.kt)("h3",{id:"caddy-1x"},"Caddy 1.x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"https://www.yourdomain.com {\n gzip\n tls your@email.com\n proxy / localhost:8090 {\n  transparent\n }\n}\n")),(0,l.kt)("h3",{id:"caddy-2x"},"Caddy 2.x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"www.yourdomain.com\n\nencode gzip\n\nreverse_proxy 127.0.0.1:8090\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u90fd\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nineya/halo-puls-common"},"https://github.com/nineya/halo-puls-common")," \u627e\u5230\u3002"))}d.isMDXComponent=!0}}]);