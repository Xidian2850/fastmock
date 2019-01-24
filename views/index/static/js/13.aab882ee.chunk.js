(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{195:function(e,t,a){"use strict";a(215);var n=a(198),r=(a(216),a(199)),c=(a(190),a(63)),l=a(14),s=a(15),o=a(36),i=a(34),u=a(35),m=a(0),p=a.n(m),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"page-info-action"},p.a.createElement("div",{className:"my-container"},p.a.createElement(n.a,{gutter:16},p.a.createElement(r.a,{className:"gutter-row",span:1},p.a.createElement("div",{className:"page-logo"},p.a.createElement(c.a,{type:this.props.antIcon}))),p.a.createElement(r.a,{className:"gutter-row",span:16},p.a.createElement("div",{className:"page-description"},p.a.createElement("span",null,p.a.createElement("h2",null,this.props.pageName),p.a.createElement("p",null,this.props.pageDesc)))),p.a.createElement(r.a,{className:"gutter-row",span:7},p.a.createElement("div",{className:"page-act"},this.props.children)))))}}]),t}(p.a.Component);t.a=f},217:function(e,t,a){},220:function(e,t,a){"use strict";var n=a(195),r=(a(190),a(63)),c=a(196),l=a.n(c),s=a(197),o=(a(205),a(211)),i=a(14),u=a(15),m=a(36),p=a(34),f=a(35),E=(a(221),a(225)),h=a(0),g=a.n(h),d=a(46),b=a(283),y=a(37),v=(a(217),E.a.Header),k=E.a.Content,j=E.a.Footer,N=Object(y.a)(),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).logout=function(e){e.preventDefault(),o.a.confirm({title:"\u63d0\u793a",content:"\u786e\u5b9a\u8981\u9000\u51fa\u5417\uff1f",okText:"\u786e\u8ba4",onOk:function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,http.get("/api/logout",{});case 2:e.sent.success&&(d.a.removeLoginInfo(),N.push("/"));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),cancelText:"\u53d6\u6d88"})},a.state={date:new Date,userInfo:{role:0,username:""},selectedStyle:{color:"#fff"}},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({userInfo:d.a.getLoginInfo()})}},{key:"render",value:function(){return g.a.createElement("section",{className:"root-layout"},g.a.createElement(E.a,{className:"layout"},g.a.createElement(v,{className:"header",style:{height:"60px"}},g.a.createElement("div",{className:"my-container"},g.a.createElement("div",{className:"logo"},g.a.createElement("img",{height:"26",style:{marginTop:"-5px"},src:"./assets/images/fastmock-logo.jpg",alt:""})),g.a.createElement("ul",{className:"header-nav"},g.a.createElement("li",null,g.a.createElement(b.a,{to:"/projects",activeStyle:this.state.selectedStyle},g.a.createElement(r.a,{type:"appstore"})," \u6211\u7684\u9879\u76ee")),g.a.createElement("li",null,g.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://marvengong.github.io/fastmock-docs/book/"},g.a.createElement(r.a,{type:"book"})," \u4f7f\u7528\u6587\u6863")),g.a.createElement("li",null,g.a.createElement(b.a,{to:"/feedback",activeStyle:this.state.selectedStyle},g.a.createElement(r.a,{type:"question"})," \u95ee\u9898\u4e0e\u5efa\u8bae")),this.state.userInfo.role/1===1&&g.a.createElement("li",null,g.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/admin/users"},g.a.createElement(r.a,{type:"windows"})," \u540e\u53f0\u7ba1\u7406"))),g.a.createElement("div",{className:"right-user"},g.a.createElement("a",null,g.a.createElement(r.a,{type:"user"})," ",this.state.userInfo.username),g.a.createElement("a",{href:"javascript:;",onClick:this.logout},g.a.createElement(r.a,{type:"logout"})," \u9000\u51fa\u767b\u5f55")))),g.a.createElement(k,{style:{backgroundColor:"#f5f5f5"}},g.a.createElement("div",{style:{minHeight:280}},this.props.children)),g.a.createElement(j,{style:{textAlign:"center",backgroundColor:"#f5f5f5"}},"FastMock\u5728\u7ebfMock\u5e73\u53f0")))}}]),t}(h.Component);a.d(t,"a",function(){return n.a}),a.d(t,"b",function(){return O})},500:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),c=a(36),l=a(34),s=a(35),o=a(0),i=a.n(o),u=a(220),m=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).state={page:1},e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(u.b,null,i.a.createElement("section",{className:"handbook"},i.a.createElement(u.a,{antIcon:"file-unknown",pageName:"\u4f7f\u7528\u6587\u6863",pageDesc:"\u8fd9\u91cc\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528FastMock\u6765\u63d0\u9ad8\u4f60\u7684\u751f\u4ea7\u6548\u7387\u3002"}),i.a.createElement("section",{className:"my-container",style:{padding:"15px 0"}})))}}]),t}(i.a.Component);t.default=m}}]);
//# sourceMappingURL=13.aab882ee.chunk.js.map