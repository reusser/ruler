## DatePicker 日期选择器

### 基础使用

基础的日期选择器用法



<coding title="基础使用" :code="baseCode">
  <ru-date-picker></ru-date-picker>
</coding>

### 带有快捷键的选择器

<coding title="快捷选项" note="日期选择器可以设置快捷选项" :code="optionCode">
  <ru-date-picker showOptions></ru-date-picker>
</coding>

### options
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showOptions   | 是否使用快捷键   | Boolean   |    -    |   false   |



<script>
export default {
  data () {
    return {
      baseCode: '<ru-date-picker></ru-date-picker>',
      optionCode: '<ru-date-picker showOptions></ru-date-picker>'
    }
  }
}
</script>