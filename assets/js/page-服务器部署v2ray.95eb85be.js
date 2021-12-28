(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{557:function(t,v,_){"use strict";_.r(v);var r=_(1),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"服务器部署v2ray"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器部署v2ray"}},[t._v("#")]),t._v(" 服务器部署v2ray")]),t._v(" "),_("p",[t._v("官网:"),_("a",{attrs:{href:"https://www.v2ray.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Project V"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"测速"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测速"}},[t._v("#")]),t._v(" 测速")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://tor-ca-ping.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tor-ca-ping.vultr.com/"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("在服务器位置中选择不同位置的服务器，在自己电脑上ping ip地址，查看延时和丢包率。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("位置")]),t._v(" "),_("th",[t._v("ip")]),t._v(" "),_("th",[t._v("延迟")]),t._v(" "),_("th",[t._v("丢包率")]),t._v(" "),_("th",[t._v("测试文件下载速度(/s)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("达拉斯")]),t._v(" "),_("td",[t._v("108.61.224.175")]),t._v(" "),_("td",[t._v("331.475")]),t._v(" "),_("td",[t._v("5.0%")]),t._v(" "),_("td",[t._v("2M")])]),t._v(" "),_("tr",[_("td",[t._v("纽约")]),t._v(" "),_("td",[t._v("108.61.219.200")]),t._v(" "),_("td",[t._v("334.775")]),t._v(" "),_("td",[t._v("8.1%")]),t._v(" "),_("td",[t._v("2M")])]),t._v(" "),_("tr",[_("td",[t._v("西雅图")]),t._v(" "),_("td",[t._v("108.61.194.105")]),t._v(" "),_("td",[t._v("270.027")]),t._v(" "),_("td",[t._v("0.0%")]),t._v(" "),_("td",[t._v("2M")])]),t._v(" "),_("tr",[_("td",[t._v("亚特兰大")]),t._v(" "),_("td",[t._v("108.61.193.166")]),t._v(" "),_("td",[t._v("365.606")]),t._v(" "),_("td",[t._v("4.4%")]),t._v(" "),_("td",[t._v("2M")])]),t._v(" "),_("tr",[_("td",[t._v("硅谷")]),t._v(" "),_("td",[t._v("104.156.230.107")]),t._v(" "),_("td",[t._v("313.314")]),t._v(" "),_("td",[t._v("55.3%")]),t._v(" "),_("td",[t._v("3M")])])])]),t._v(" "),_("h2",{attrs:{id:"服务器安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器安装"}},[t._v("#")]),t._v(" 服务器安装")]),t._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L -s https://install.direct/go.sh"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("p",[t._v("此脚本会自动安装以下文件：")]),t._v(" "),_("ol",[_("li",[t._v("/usr/bin/v2ray/v2ray：V2Ray 程序；")]),t._v(" "),_("li",[t._v("/usr/bin/v2ray/v2ctl：V2Ray 工具；")]),t._v(" "),_("li",[t._v("/etc/v2ray/config.json：配置文件；")]),t._v(" "),_("li",[t._v("/usr/bin/v2ray/geoip.dat：IP 数据文件")]),t._v(" "),_("li",[t._v("/usr/bin/v2ray/geosite.dat：域名数据文件")])]),t._v(" "),_("p",[t._v("此脚本会配置自动运行脚本。自动运行脚本会在系统重启之后，自动运行 V2Ray。目前自动运行脚本只支持带有 Systemd 的系统，以及 Debian / Ubuntu 全系列。")]),t._v(" "),_("p",[t._v("运行脚本位于系统的以下位置：")]),t._v(" "),_("ol",[_("li",[t._v("/etc/systemd/system/v2ray.service: Systemd")]),t._v(" "),_("li",[t._v("/etc/init.d/v2ray: SysV")])]),t._v(" "),_("p",[t._v("脚本运行完成后，你需要：")]),t._v(" "),_("p",[t._v("编辑 "),_("code",[t._v("/etc/v2ray/config.json")]),t._v(" 文件来配置你需要的代理方式；")]),t._v(" "),_("p",[t._v("运行 "),_("code",[t._v("service v2ray start")]),t._v(" 来启动 V2Ray 进程；")]),t._v(" "),_("p",[t._v("之后可以使用 "),_("code",[t._v("service v2ray start|stop|status|reload|restart|force-reload")]),t._v(" 控制 V2Ray 的运行。")]),t._v(" "),_("h2",{attrs:{id:"关闭服务器防火墙"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关闭服务器防火墙"}},[t._v("#")]),t._v(" 关闭服务器防火墙")]),t._v(" "),_("p",[t._v("。。。")])])}),[],!1,null,null,null);v.default=a.exports}}]);