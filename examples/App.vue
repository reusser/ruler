<template>
  <div id="app">
    <div class="content-wrapper">
      <RuMenu :uniqueOpen="false" :router="true">
        <RuSubmenu name="1">
          <template slot="title">
            <RuIcon :type="'ios-bookmarks'"></RuIcon>指南
          </template>
          <RuMenuItem name="1-1">安装</RuMenuItem>
          <RuMenuItem name="1-2">快速上手</RuMenuItem>
        </RuSubmenu>
        <RuSubmenu name="components">
          <template slot="title">
            <RuIcon :type="'grid'"></RuIcon>组件列表
          </template>
          <RuMenuItem :name="'color'"><RuIcon :type="'android-color-palette'"></RuIcon>Color 色彩</RuMenuItem>
          <RuMenuItem :name="'font'"><RuIcon :type="'bonfire'"></RuIcon>Font 字体</RuMenuItem>
          <RuMenuItem :name="'button'"><RuIcon :type="'settings'"></RuIcon>Button 按钮</RuMenuItem>
          <RuMenuItem :name="'icon'"><RuIcon :type="'ionic'"></RuIcon>Icon 图标</RuMenuItem>
          <RuMenuItem :name="'slider'"><RuIcon :type="'android-options'"></RuIcon>Slider 滑块</RuMenuItem>
          <RuMenuItem :name="'notification'"><RuIcon :type="'paper-airplane'"></RuIcon>notification 通知</RuMenuItem>
        </RuSubmenu>
      </RuMenu>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
  .content-wrapper {
    box-sizing: border-box;
    width: 1140px;
    height: 100%;
    margin: 90px auto 0 auto;
    overflow: auto;
    h2 {
      font-size: 28px;
      &+p {
        margin: 14px 0;
      }
    }
    h3 {
      font-size: 22px;
      &+p {
        margin: 14px 0;
      }
    }
    section > h3 {
      margin: 50px 0 20px;
    }
    > .ru-menu {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 180px;
      margin-top: 90px;
      border-right: none;
      .ru-menu-item {
        border-right: none;
      }
    }
    .router-view {
      box-sizing: border-box;
      padding: 10px 0 80px 270px;
    }
  }
}
.router-view > table {
  width: 100%;
  border: 1px solid #e4e4e4;
  border-collapse: collapse;
  thead {
    background-color: #f7f7f7;
    font-weight: 600;
  }
  th,
  td {
    padding: 8px 16px;
    border: 1px solid #e4e4e4;
    text-align: left;
  }
  td {
    font-size: 14px;
    font-family: Consolas;
    color: #495056;
  }
}
.hljs {
  font-family: Consolas, Menlo, Courier, monospace !important;
  * {
    line-height: 1.7;
  }
}

.xml {
  .hljs-tag {
    .hljs-name {
      color: #DD4A68
    }
    .hljs-attr {
      color: #690
    }
    .hljs-string {
      color: #07a
    }
  }
}

.hljs-comment,
.hljs-quote {
  color: #bc9458;
  font-style: italic
}

.hljs-keyword,
.hljs-selector-tag {
  color: #07a
}

.hljs-string,
.hljs-number,
.hljs-regexp,
.hljs-variable,
.hljs-template-variable {
  color: #690
}

.hljs-subst {
  color: #519f50
}

.hljs-tag
.hljs-name {
  color: #DD4A68
}

.hljs-type {
  color: #da4939
}

.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-builtin-name,
.hljs-attr,
.hljs-link {
  color: #690
}

.hljs-params {
  color: #d0d0ff
}

.hljs-attribute {
  color: #07a
}

.hljs-meta {
  color: #9b859d
}

.hljs-title,
.hljs-section {
  color: #ffc66d
}

.hljs-addition {
  background-color: #144212;
  color: #e6e1dc;
  display: inline-block;
  width: 100%
}

.hljs-deletion {
  background-color: #600;
  color: #e6e1dc;
  display: inline-block;
  width: 100%
}

.hljs-selector-class {
    color: #9b703f
}

.hljs-selector-id {
  color: #8b98ab
}

.hljs-emphasis {
  font-style: italic
}

.hljs-strong {
  font-weight: bold
}

.hljs-link {
  text-decoration: underline
}
</style>
