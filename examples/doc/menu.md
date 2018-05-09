## Menu 菜单

### 基础用法

<coding title="基础用法" note="垂直菜单，可以内嵌子菜单 设置openName和activeName可以设置默认展开的菜单以及选中的菜单项" :code="baseCode">
  <RuMenu :openName="['2']">
    <RuSubmenu name="1">
      <template slot="title">
        <RuIcon type="ios-paper"></RuIcon>
        内容管理
      </template>
      <RuMenuItem name="1-1">文章管理</RuMenuItem>
      <RuMenuItem name="1-2">评论管理</RuMenuItem>
      <RuMenuItem name="1-3">举报管理</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="2">
      <template slot="title">
        <RuIcon type="ios-people"></RuIcon>
        用户管理
      </template>
      <RuMenuItem name="2-1">新增用户</RuMenuItem>
      <RuMenuItem name="2-2">活跃用户</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="3">
      <template slot="title">
        <RuIcon type="stats-bars"></RuIcon>
        统计分析
      </template>
        <RuMenuItem name="3-1">新增和启动</RuMenuItem>
        <RuMenuItem name="3-2">活跃分析</RuMenuItem>
        <RuMenuItem name="3-3">时段分析</RuMenuItem>
        <RuMenuItem name="3-4">用户留存</RuMenuItem>
        <RuMenuItem name="3-5">流失用户</RuMenuItem>
    </RuSubmenu>
  </RuMenu>
  <RuMenu activeName="2-1">
    <RuSubmenu name="1">
      <template slot="title">
        <RuIcon type="ios-paper"></RuIcon>
        内容管理
      </template>
      <RuMenuItem name="1-1">文章管理</RuMenuItem>
      <RuMenuItem name="1-2">评论管理</RuMenuItem>
      <RuMenuItem name="1-3">举报管理</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="2">
      <template slot="title">
        <RuIcon type="ios-people"></RuIcon>
        用户管理
      </template>
      <RuMenuItem name="2-1">新增用户</RuMenuItem>
      <RuMenuItem name="2-2">活跃用户</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="3">
      <template slot="title">
        <RuIcon type="stats-bars"></RuIcon>
        统计分析
      </template>
        <RuMenuItem name="3-1">新增和启动</RuMenuItem>
        <RuMenuItem name="3-2">活跃分析</RuMenuItem>
        <RuMenuItem name="3-3">时段分析</RuMenuItem>
        <RuMenuItem name="3-4">用户留存</RuMenuItem>
        <RuMenuItem name="3-5">流失用户</RuMenuItem>
    </RuSubmenu>
  </RuMenu>
</coding>

### 主题

<coding title="设置主题" note="菜单可以通过设置theme属性来选择主题，主题分为dark和light" :code="themeCode">
  <RuMenu activeName="2-1" theme="dark">
    <RuSubmenu name="1">
      <template slot="title">
        <RuIcon type="ios-paper"></RuIcon>
        内容管理
      </template>
      <RuMenuItem name="1-1">文章管理</RuMenuItem>
      <RuMenuItem name="1-2">评论管理</RuMenuItem>
      <RuMenuItem name="1-3">举报管理</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="2">
      <template slot="title">
        <RuIcon type="ios-people"></RuIcon>
        用户管理
      </template>
      <RuMenuItem name="2-1">新增用户</RuMenuItem>
      <RuMenuItem name="2-2">活跃用户</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="3">
      <template slot="title">
        <RuIcon type="stats-bars"></RuIcon>
        统计分析
      </template>
        <RuMenuItem name="3-1">新增和启动</RuMenuItem>
        <RuMenuItem name="3-2">活跃分析</RuMenuItem>
        <RuMenuItem name="3-3">时段分析</RuMenuItem>
        <RuMenuItem name="3-4">用户留存</RuMenuItem>
        <RuMenuItem name="3-5">流失用户</RuMenuItem>
    </RuSubmenu>
  </RuMenu>
</coding>


### options
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| theme   |  主题   | String   |    dark/light    |   light   |
| openName  | 默认展开的子菜单名字   | String   |    -    |   -   |
| activeName | 默认选中的菜单项的名字   | String   |    -    |   -   |
| uniqueOpen  | 是否同时只能展开一个子菜单   |   Boolean   |    -    |   true   |
| router   | 是否将菜单项的name属性值作为路由地址跳转   |   Boolean   |    -    |   false  |


<script>
const baseCode = `
<RuMenu :openName="['2']">
    <RuSubmenu name="1">
      <template slot="title">
        <RuIcon type="ios-paper"></RuIcon>
        内容管理
      </template>
      <RuMenuItem name="1-1">文章管理</RuMenuItem>
      <RuMenuItem name="1-2">评论管理</RuMenuItem>
      <RuMenuItem name="1-3">举报管理</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="2">
      <template slot="title">
        <RuIcon type="ios-people"></RuIcon>
        用户管理
      </template>
      <RuMenuItem name="2-1">新增用户</RuMenuItem>
      <RuMenuItem name="2-2">活跃用户</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="3">
      <template slot="title">
        <RuIcon type="stats-bars"></RuIcon>
        统计分析
      </template>
        <RuMenuItem name="3-1">新增和启动</RuMenuItem>
        <RuMenuItem name="3-2">活跃分析</RuMenuItem>
        <RuMenuItem name="3-3">时段分析</RuMenuItem>
        <RuMenuItem name="3-4">用户留存</RuMenuItem>
        <RuMenuItem name="3-5">流失用户</RuMenuItem>
    </RuSubmenu>
  </RuMenu>
  <RuMenu activeName="2-1">
    <RuSubmenu name="1">
      <template slot="title">
        <RuIcon type="ios-paper"></RuIcon>
        内容管理
      </template>
      <RuMenuItem name="1-1">文章管理</RuMenuItem>
      <RuMenuItem name="1-2">评论管理</RuMenuItem>
      <RuMenuItem name="1-3">举报管理</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="2">
      <template slot="title">
        <RuIcon type="ios-people"></RuIcon>
        用户管理
      </template>
      <RuMenuItem name="2-1">新增用户</RuMenuItem>
      <RuMenuItem name="2-2">活跃用户</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="3">
      <template slot="title">
        <RuIcon type="stats-bars"></RuIcon>
        统计分析
      </template>
        <RuMenuItem name="3-1">新增和启动</RuMenuItem>
        <RuMenuItem name="3-2">活跃分析</RuMenuItem>
        <RuMenuItem name="3-3">时段分析</RuMenuItem>
        <RuMenuItem name="3-4">用户留存</RuMenuItem>
        <RuMenuItem name="3-5">流失用户</RuMenuItem>
    </RuSubmenu>
  </RuMenu>
`

const themeCode = `
<RuMenu activeName="2-1" theme="dark">
    <RuSubmenu name="1">
      <template slot="title">
        <RuIcon type="ios-paper"></RuIcon>
        内容管理
      </template>
      <RuMenuItem name="1-1">文章管理</RuMenuItem>
      <RuMenuItem name="1-2">评论管理</RuMenuItem>
      <RuMenuItem name="1-3">举报管理</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="2">
      <template slot="title">
        <RuIcon type="ios-people"></RuIcon>
        用户管理
      </template>
      <RuMenuItem name="2-1">新增用户</RuMenuItem>
      <RuMenuItem name="2-2">活跃用户</RuMenuItem>
    </RuSubmenu>
    <RuSubmenu name="3">
      <template slot="title">
        <RuIcon type="stats-bars"></RuIcon>
        统计分析
      </template>
        <RuMenuItem name="3-1">新增和启动</RuMenuItem>
        <RuMenuItem name="3-2">活跃分析</RuMenuItem>
        <RuMenuItem name="3-3">时段分析</RuMenuItem>
        <RuMenuItem name="3-4">用户留存</RuMenuItem>
        <RuMenuItem name="3-5">流失用户</RuMenuItem>
    </RuSubmenu>
  </RuMenu>
`
export default {
  data() {
    return {
      baseCode: baseCode,
      themeCode: themeCode
    }
  }
}
</script>
