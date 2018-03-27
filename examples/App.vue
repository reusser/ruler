<template>
  <div id="app">
    <div class="content-wrapper">
      <RuMenu :openName="['1', '3']" :uniqueOpen="false">
        <RuSubmenu name="1">
          <template slot="title">
            <RuIcon :type="'ios-bookmarks'"></RuIcon>指南
          </template>
          <RuMenuItem name="1-1">安装</RuMenuItem>
          <RuMenuItem name="1-2">快速上手</RuMenuItem>
        </RuSubmenu>
        <RuSubmenu name="3">
          <template slot="title">
            <RuIcon :type="'grid'"></RuIcon>组件列表
          </template>
          <RuMenuItem name="3-1"><RuIcon :type="'android-color-palette'"></RuIcon>Color 色彩</RuMenuItem>
          <RuMenuItem name="3-2"><RuIcon :type="'bonfire'"></RuIcon>Font 字体</RuMenuItem>
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .content-wrapper {
    box-sizing: border-box;
    width: 1140px;
    height: 100%;
    margin: 90px auto 0 auto;
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 22px;
    }
    section > h3 {
      margin: 50px 0 20px;
    }
    > .ru-menu {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 160px;
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
</style>
