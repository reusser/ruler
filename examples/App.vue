<template>
  <div id="app">
    <div class="content-wrapper">
      <RuMenu :activeName="'1-2'">
        <RuSubmenu name="1">
          <template slot="title">
            <RuIcon :type="'heart'"></RuIcon>收藏列表
          </template>
          <RuMenuItem name="1-1"><RuIcon :type="'stats-bars'"></RuIcon>收藏统计</RuMenuItem>
          <RuMenuItem name="1-2"><RuIcon :type="'person'"></RuIcon>收藏用户</RuMenuItem>
          <RuMenuItem name="1-3"><RuIcon :type="'bookmark'"></RuIcon>收藏类型</RuMenuItem>
        </RuSubmenu>
        <RuMenuItem name="2"><RuIcon :type="'heart-broken'"></RuIcon>用户流失</RuMenuItem>
        <RuSubmenu name="3">
          <template slot="title">
            <RuIcon :type="'heart'"></RuIcon>收藏列表
          </template>
          <RuMenuItem name="3-1"><RuIcon :type="'stats-bars'"></RuIcon>收藏统计</RuMenuItem>
          <RuMenuItem name="3-2"><RuIcon :type="'person'"></RuIcon>收藏用户</RuMenuItem>
          <RuMenuItem name="3-3"><RuIcon :type="'bookmark'"></RuIcon>收藏类型</RuMenuItem>
        </RuSubmenu>
      </RuMenu>
    </div>
    <router-view/>
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
    margin: 0 auto;
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
  }
}
</style>
