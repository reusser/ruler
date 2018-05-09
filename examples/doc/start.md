## 快速上手

### 引入Ruler

引入Ruler只需在main.js中写入以下内容

import Vue from 'vue';

<br>

import Ruler from 'ruler-ui';

<br>

Vue.use(Ruler)

<br>
引入后即可在任意组件内使用ruler，比如使用简单的按钮

<coding title="简单使用组件" :code="baseCode">
  <ru-button type="primary">按钮</ru-button>
</coding>

<script>
export default {
  data () {
    return {
      baseCode: '<ru-button type="primary">按钮</ru-button>'
    }
  }
}
</script>