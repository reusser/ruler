## Slider 滑块

拖动滑块，在固定区间内选择值

### 基础用法
拖动滑块改变值

<coding title="默认" note="滑块默认起点为0" :code="defaultCode">
  <RuSlider v-model="value1"></RuSlider><span>{{value1}}</span>
</coding>

<coding title="带初始值的滑块" note="通过设置v-model给滑块初始值" :code="defaultValueCode">
  <RuSlider v-model="value2"></RuSlider><span>{{value2}}</span>
</coding>

<coding title="禁用滑块" note="通过设置disabled禁用滑块" :code="disabledCode">
  <RuSlider v-model="value3" disabled></RuSlider><span>{{value3}}</span>
</coding>

### 步长

滑块是可以设置步长的

<coding title="控制滑块步长" note="通过设置step控制滑块的步长，设置showPoints可以显示步长的间断点" :code="stepCode">
  <RuSlider v-model="value4" :step="10"></RuSlider><span>{{value4}}</span>
  <RuSlider v-model="value5" :step="10" showPoints></RuSlider><span>{{value5}}</span>
</coding>

### 带输入框

通过输入数值更改滑块的值

<coding title="带有输入框的滑块" note="通过设置showInput给滑块组件放置输入框" :code="inputCode">
  <RuSlider v-model="value6" showInput></RuSlider><span>{{value6}}</span>
</coding>

### 范围选择
滑块还支持范围选择数值

<coding title="范围模式滑块" note="通过设置range给滑块组件设置范围选择" :code="rangeCode">
  <RuSlider v-model="value7" range></RuSlider><span>{{value7}}</span>
  <RuSlider v-model="value8" :step="10" range showPoints></RuSlider><span>{{value8}}</span>
</coding>

### 竖向模式
滑块也支持竖向模式

<coding title="竖向滑块" note="通过设置mode为vertical将滑块改为竖向模式，竖向模式一定要设置height属性" :code="verticalCode">
  <RuSlider v-model="value9" mode="vertical" :height="200"></RuSlider><span>{{value9}}</span>
</coding>

### Attributes
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 滑块模式   | String  | horizon/vertical |   horizon   |
| min    | 滑块最小值   | Number   |    -    |   0   |
| max    | 滑块最大值   | Number   |    -    |   100   |
| disabled    | 是否为禁用滑块   |   Boolean   |    -    |   false   |
| step    | 步长   |   Number   |    -    |   1   |
| range    | 是否为范围滑块   |   Boolean   |    -    |   false   |
| showPoints    | 是否显示步长间断点   |   Boolean   |    -    |   false   |
| height   | 竖向模式下滑块高度（竖向模式必须设置该属性）   |   Number   |    -    |   -   |
| showInput   | 是否显示输入框  |  Boolean   |   -    |   false   |


### Events
| 事件名称     | 事件说明    |   默认参数     |
|---------- |-------- |---------- |-------------  |-------- |
| change     | 滑块值改变时触发该事件    |   改变后滑块的值     |
<script>
let defaultCode = `<RuSlider v-model="value1"></RuSlider>`
let defaultValueCode = `<RuSlider v-model="value2"></RuSlider>

export default {
  data() {
    return {
      value2: 20
    }
  }
}
`
let disabledCode = `<RuSlider v-model="value3" disabled></RuSlider>`
let stepCode = `<RuSlider v-model="value4" :step="10"></RuSlider>
<RuSlider v-model="value5" :step="10" showPoints></RuSlider>`
let inputCode = `<RuSlider v-model="value6" showInput></RuSlider>`
let rangeCode = `<RuSlider v-model="value7" range></RuSlider>
<RuSlider v-model="value8" :step="10" range showPoints></RuSlider>


export default {
  data() {
    return {
      value7: [20, 50],
      value8: [20, 50]
    }
  }
}`
let verticalCode = `<RuSlider v-model="value9" mode="vertical" :height="200"></RuSlider>`

export default {
  data() {
    return {
      value1: 0,
      value2: 20,
      value3: 20,
      value4: 20,
      value5: 20,
      value6: 20,
      value7: [20, 50],
      value8: [20, 50],
      value9: 30,
      defaultCode: defaultCode,
      defaultValueCode: defaultValueCode,
      disabledCode: disabledCode,
      stepCode: stepCode,
      inputCode: inputCode,
      rangeCode: rangeCode,
      verticalCode: verticalCode
    }
  }
}
</script>