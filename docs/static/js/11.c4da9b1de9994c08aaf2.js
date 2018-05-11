webpackJsonp([11],{"3RIm":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u={data:function(){return{baseCode:'\n<RuMenu :openName="[\'2\']">\n    <RuSubmenu name="1">\n      <template slot="title">\n        <RuIcon type="ios-paper"></RuIcon>\n        内容管理\n      </template>\n      <RuMenuItem name="1-1">文章管理</RuMenuItem>\n      <RuMenuItem name="1-2">评论管理</RuMenuItem>\n      <RuMenuItem name="1-3">举报管理</RuMenuItem>\n    </RuSubmenu>\n    <RuSubmenu name="2">\n      <template slot="title">\n        <RuIcon type="ios-people"></RuIcon>\n        用户管理\n      </template>\n      <RuMenuItem name="2-1">新增用户</RuMenuItem>\n      <RuMenuItem name="2-2">活跃用户</RuMenuItem>\n    </RuSubmenu>\n    <RuSubmenu name="3">\n      <template slot="title">\n        <RuIcon type="stats-bars"></RuIcon>\n        统计分析\n      </template>\n        <RuMenuItem name="3-1">新增和启动</RuMenuItem>\n        <RuMenuItem name="3-2">活跃分析</RuMenuItem>\n        <RuMenuItem name="3-3">时段分析</RuMenuItem>\n        <RuMenuItem name="3-4">用户留存</RuMenuItem>\n        <RuMenuItem name="3-5">流失用户</RuMenuItem>\n    </RuSubmenu>\n  </RuMenu>\n  <RuMenu activeName="2-1">\n    <RuSubmenu name="1">\n      <template slot="title">\n        <RuIcon type="ios-paper"></RuIcon>\n        内容管理\n      </template>\n      <RuMenuItem name="1-1">文章管理</RuMenuItem>\n      <RuMenuItem name="1-2">评论管理</RuMenuItem>\n      <RuMenuItem name="1-3">举报管理</RuMenuItem>\n    </RuSubmenu>\n    <RuSubmenu name="2">\n      <template slot="title">\n        <RuIcon type="ios-people"></RuIcon>\n        用户管理\n      </template>\n      <RuMenuItem name="2-1">新增用户</RuMenuItem>\n      <RuMenuItem name="2-2">活跃用户</RuMenuItem>\n    </RuSubmenu>\n    <RuSubmenu name="3">\n      <template slot="title">\n        <RuIcon type="stats-bars"></RuIcon>\n        统计分析\n      </template>\n        <RuMenuItem name="3-1">新增和启动</RuMenuItem>\n        <RuMenuItem name="3-2">活跃分析</RuMenuItem>\n        <RuMenuItem name="3-3">时段分析</RuMenuItem>\n        <RuMenuItem name="3-4">用户留存</RuMenuItem>\n        <RuMenuItem name="3-5">流失用户</RuMenuItem>\n    </RuSubmenu>\n  </RuMenu>\n',themeCode:'\n<RuMenu activeName="2-1" theme="dark">\n    <RuSubmenu name="1">\n      <template slot="title">\n        <RuIcon type="ios-paper"></RuIcon>\n        内容管理\n      </template>\n      <RuMenuItem name="1-1">文章管理</RuMenuItem>\n      <RuMenuItem name="1-2">评论管理</RuMenuItem>\n      <RuMenuItem name="1-3">举报管理</RuMenuItem>\n    </RuSubmenu>\n    <RuSubmenu name="2">\n      <template slot="title">\n        <RuIcon type="ios-people"></RuIcon>\n        用户管理\n      </template>\n      <RuMenuItem name="2-1">新增用户</RuMenuItem>\n      <RuMenuItem name="2-2">活跃用户</RuMenuItem>\n    </RuSubmenu>\n    <RuSubmenu name="3">\n      <template slot="title">\n        <RuIcon type="stats-bars"></RuIcon>\n        统计分析\n      </template>\n        <RuMenuItem name="3-1">新增和启动</RuMenuItem>\n        <RuMenuItem name="3-2">活跃分析</RuMenuItem>\n        <RuMenuItem name="3-3">时段分析</RuMenuItem>\n        <RuMenuItem name="3-4">用户留存</RuMenuItem>\n        <RuMenuItem name="3-5">流失用户</RuMenuItem>\n    </RuSubmenu>\n  </RuMenu>\n'}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Menu 菜单")]),e._v(" "),n("h3",[e._v("基础用法")]),e._v(" "),n("coding",{attrs:{title:"基础用法",note:"垂直菜单，可以内嵌子菜单 设置openName和activeName可以设置默认展开的菜单以及选中的菜单项",code:e.baseCode}},[n("RuMenu",{attrs:{openName:["2"]}},[n("RuSubmenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"ios-paper"}}),e._v("\n        内容管理\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"1-1"}},[e._v("文章管理")]),e._v(" "),n("RuMenuItem",{attrs:{name:"1-2"}},[e._v("评论管理")]),e._v(" "),n("RuMenuItem",{attrs:{name:"1-3"}},[e._v("举报管理")])],2),e._v(" "),n("RuSubmenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"ios-people"}}),e._v("\n        用户管理\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"2-1"}},[e._v("新增用户")]),e._v(" "),n("RuMenuItem",{attrs:{name:"2-2"}},[e._v("活跃用户")])],2),e._v(" "),n("RuSubmenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"stats-bars"}}),e._v("\n        统计分析\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"3-1"}},[e._v("新增和启动")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-2"}},[e._v("活跃分析")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-3"}},[e._v("时段分析")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-4"}},[e._v("用户留存")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-5"}},[e._v("流失用户")])],2)],1),e._v(" "),n("RuMenu",{attrs:{activeName:"2-1"}},[n("RuSubmenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"ios-paper"}}),e._v("\n        内容管理\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"1-1"}},[e._v("文章管理")]),e._v(" "),n("RuMenuItem",{attrs:{name:"1-2"}},[e._v("评论管理")]),e._v(" "),n("RuMenuItem",{attrs:{name:"1-3"}},[e._v("举报管理")])],2),e._v(" "),n("RuSubmenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"ios-people"}}),e._v("\n        用户管理\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"2-1"}},[e._v("新增用户")]),e._v(" "),n("RuMenuItem",{attrs:{name:"2-2"}},[e._v("活跃用户")])],2),e._v(" "),n("RuSubmenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"stats-bars"}}),e._v("\n        统计分析\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"3-1"}},[e._v("新增和启动")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-2"}},[e._v("活跃分析")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-3"}},[e._v("时段分析")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-4"}},[e._v("用户留存")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-5"}},[e._v("流失用户")])],2)],1)],1),e._v(" "),n("h3",[e._v("主题")]),e._v(" "),n("coding",{attrs:{title:"设置主题",note:"菜单可以通过设置theme属性来选择主题，主题分为dark和light",code:e.themeCode}},[n("RuMenu",{attrs:{activeName:"2-1",theme:"dark"}},[n("RuSubmenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"ios-paper"}}),e._v("\n        内容管理\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"1-1"}},[e._v("文章管理")]),e._v(" "),n("RuMenuItem",{attrs:{name:"1-2"}},[e._v("评论管理")]),e._v(" "),n("RuMenuItem",{attrs:{name:"1-3"}},[e._v("举报管理")])],2),e._v(" "),n("RuSubmenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"ios-people"}}),e._v("\n        用户管理\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"2-1"}},[e._v("新增用户")]),e._v(" "),n("RuMenuItem",{attrs:{name:"2-2"}},[e._v("活跃用户")])],2),e._v(" "),n("RuSubmenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("RuIcon",{attrs:{type:"stats-bars"}}),e._v("\n        统计分析\n      ")],1),e._v(" "),n("RuMenuItem",{attrs:{name:"3-1"}},[e._v("新增和启动")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-2"}},[e._v("活跃分析")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-3"}},[e._v("时段分析")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-4"}},[e._v("用户留存")]),e._v(" "),n("RuMenuItem",{attrs:{name:"3-5"}},[e._v("流失用户")])],2)],1)],1),e._v(" "),n("h3",[e._v("options")]),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("可选值")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("theme")]),e._v(" "),n("td",[e._v("主题")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("dark/light")]),e._v(" "),n("td",[e._v("light")])]),e._v(" "),n("tr",[n("td",[e._v("openName")]),e._v(" "),n("td",[e._v("默认展开的子菜单名字")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("activeName")]),e._v(" "),n("td",[e._v("默认选中的菜单项的名字")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("uniqueOpen")]),e._v(" "),n("td",[e._v("是否同时只能展开一个子菜单")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("router")]),e._v(" "),n("td",[e._v("是否将菜单项的name属性值作为路由地址跳转")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("-")]),e._v(" "),n("td",[e._v("false")])])])])}]},a=n("VU/8")(u,m,!1,null,null,null);t.default=a.exports},XUrW:function(e,t,n){e.exports=n("3RIm")}});
//# sourceMappingURL=11.c4da9b1de9994c08aaf2.js.map