<script> 
 let type = 
 ` <RuIcon type="heart" size="30px"></RuIcon>
  <RuIcon type="heart-broken" size="30px"></RuIcon>
  <RuIcon type="social-github" size="30px"></RuIcon>
  <RuIcon type="social-twitter" color="#2d8cf0" size="30px"></RuIcon>`
  const iconList = require('@/icon.json')
  export default {
    data() {
      return {
        icons: iconList,
        type: type
      }
    }
  }
</script>

## Icon 图标

Ruler的图标使用的是开源项目[<RuIcon type="ionic"></RuIcon> ionicons](http://ionicons.com/)

### 使用方法
<coding title="图标" class="icon-examples" note="使用Icon组件，只要指定图标对应的type属性即可，同时可设置color和size属性控制图标的颜色及大小" lang="html" :code="type">
  <RuIcon type="heart" size="30px"></RuIcon>
  <RuIcon type="heart-broken" size="30px"></RuIcon>
  <RuIcon type="social-github" size="30px"></RuIcon>
  <RuIcon type="social-twitter" color="#2d8cf0" size="30px"></RuIcon>
</coding>

### Icon Props

| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 图标的大小，单位px   | Number／String  |    —     |
| type     | 图标名称   | String    |     —    |
| color     | 图标颜色   |   String   |    -    |

### 图标集合
<ul class="icon-list">
  <li v-for="type in icons" :key="type">
    <div>
      <RuIcon :type="type" :size="'32px'"></RuIcon>
    </div>
    <p>
      <span class="icon-type">{{type}}</span>
    </p>
  </li>
</ul>

<style lang="scss" scoped>
a {
  text-decoration: none;
  &:active,
  &:link,
  &:visited {
    color: #008cec;
    i {
      color: #008cec;
    }
  }
  &:hover {
    color: #5cadff;
    i {
      color: #5cadff;
    }
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  list-style: none;
  li {
    width: 16.6%;
    height: 100px;
    > div {
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    > p {
      height: 40px;
      text-align: center;
    }
  }
}
.icon-examples {
  [class^="ru-icon-"] {
    display: inline-block;
    margin: 0 20px;
  }
}
</style>