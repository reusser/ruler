<template>
  <div id="app">
    <RuMenu>
      <RuSubmenu name="1">
        <template slot="title">
          <RuIcon :type="'heart'"></RuIcon>
          收藏列表
        </template>
        <RuMenuItem name="2">列表项</RuMenuItem>
      </RuSubmenu>
    </RuMenu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
