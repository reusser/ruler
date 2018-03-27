<script> 
  const iconList = require('@/icon.json')
  export default {
    data() {
      return {
        icons: iconList
      }
    }
  }
</script>

## 图标集合
<ul class="icon-list">
  <li v-for="type in icons" :key="type">
    <span>
      <RuIcon :type="type"></RuIcon>
      <span class="icon-type">{{type}}</span>
    </span>
  </li>
</ul>