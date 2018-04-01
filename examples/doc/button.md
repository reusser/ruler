<script>
  let buttonType = `<RuButton>默认按钮</RuButton>
  <RuButton type="dashed">虚线按钮</RuButton>
  <RuButton type="primary">主要按钮</RuButton>
  <RuButton type="success">成功按钮</RuButton>
  <RuButton type="warning">警告按钮</RuButton>
  <RuButton type="danger">危险按钮</RuButton>
  <RuButton type="info">信息按钮</RuButton>
  <RuButton type="text">文字按钮</RuButton>`

  let buttonShape = `<RuButton plain>朴素按钮</RuButton>
  <RuButton type="dashed" plain>虚线按钮</RuButton>
  <RuButton type="primary" plain>主要按钮</RuButton>
  <RuButton type="success" plain>成功按钮</RuButton>
  <RuButton type="warning" plain>警告按钮</RuButton>
  <RuButton type="danger" plain>危险按钮</RuButton>
  <RuButton type="info" plain>信息按钮</RuButton>
  <RuButton round>默认按钮</RuButton>
  <RuButton type="dashed" round>虚线按钮</RuButton>
  <RuButton type="primary" round>主要按钮</RuButton>
  <RuButton type="success" round>成功按钮</RuButton>
  <RuButton type="warning" round>警告按钮</RuButton>
  <RuButton type="danger" round>危险按钮</RuButton>
  <RuButton type="info" round>信息按钮</RuButton>
  <RuButton type="primary" round icon="ios-search">Search</RuButton>
  <RuButton type="primary" icon="ios-search">Search</RuButton>
  <RuButton round icon="ios-search">Search</RuButton>
  <RuButton icon="ios-search">Search</RuButton>
  <RuButton icon="ios-search" circle></RuButton>
  <RuButton icon="ios-star-outline" circle type="primary"></RuButton>
  <RuButton icon="ios-infinite-outline" circle type="success"></RuButton>
  <RuButton icon="ios-shuffle" circle type="warning"></RuButton>
  <RuButton icon="ios-trash-outline" circle type="danger"></RuButton>
  <RuButton icon="ios-location-outline" circle type="info"></RuButton>`
  
  let buttonSize = `<RuButton type="primary" size="large">large</RuButton>
  <RuButton type="primary">default</RuButton>
  <RuButton type="primary" size="small">small</RuButton>
  <RuButton type="primary" size="large" round>large</RuButton>
  <RuButton type="primary" round>default</RuButton>
  <RuButton type="primary" size="small" round>small</RuButton>
  <RuButton type="success" size="long">SUBMIT</RuButton>
  <RuButton type="danger" size="long">DELETE</RuButton>`

  let buttonDisabled = `<RuButton disabled>主要按钮</RuButton>
  <RuButton type="dashed" disabled>虚线按钮</RuButton>
  <RuButton type="primary" disabled>主要按钮</RuButton>
  <RuButton type="success" disabled>成功按钮</RuButton>
  <RuButton type="warning" disabled>警告按钮</RuButton>
  <RuButton type="danger" disabled>危险按钮</RuButton>
  <RuButton type="info" disabled>信息按钮</RuButton>
  <RuButton plain disabled>朴素按钮</RuButton>
  <RuButton type="dashed" plain disabled>虚线按钮</RuButton>
  <RuButton type="primary" plain disabled>主要按钮</RuButton>
  <RuButton type="success" plain disabled>成功按钮</RuButton>
  <RuButton type="warning" plain disabled>警告按钮</RuButton>
  <RuButton type="danger" plain disabled>危险按钮</RuButton>
  <RuButton type="info" plain disabled>信息按钮</RuButton>`

  let buttonLoading = `<RuButton loading>加载中...</RuButton>
  <RuButton type="primary" loading>加载中...</RuButton>
  <RuButton plain loading type="primary">加载中...</RuButton>`

  export default {
    data() {
      return {
        buttonType: buttonType,
        buttonShape: buttonShape,
        buttonSize: buttonSize,
        buttonDisabled: buttonDisabled,
        buttonLoading: buttonLoading
      }
    }
  }
</script>

## Button 按钮

常用的操作按钮

### 基础用法
基础的按钮用法

<coding title="按钮类型" note="按钮类型有：默认按钮、虚线按钮、主按钮、文字按钮以及四种颜色按钮" :code="buttonType">
  <RuButton>默认按钮</RuButton>
  <RuButton type="dashed">虚线按钮</RuButton>
  <RuButton type="primary">主要按钮</RuButton>
  <RuButton type="success">成功按钮</RuButton>
  <RuButton type="warning">警告按钮</RuButton>
  <RuButton type="danger">危险按钮</RuButton>
  <RuButton type="info">信息按钮</RuButton>
  <RuButton type="text">文字按钮</RuButton>
</coding>

<coding title="带图标按钮及按钮形状" :note="`<p>通过设置按钮的plain属性获得朴素按钮</p><p>通过设置按钮的icon属性或者给按钮嵌入一个icon组件，可以给按钮放置一个图标</p> <p>通过设置round属性给按钮增大圆角。</p> <p>通过设置circle属性，获得一个圆形按钮</p>`" :code="buttonShape">
  <RuButton plain>朴素按钮</RuButton>
  <RuButton type="dashed" plain>虚线按钮</RuButton>
  <RuButton type="primary" plain>主要按钮</RuButton>
  <RuButton type="success" plain>成功按钮</RuButton>
  <RuButton type="warning" plain>警告按钮</RuButton>
  <RuButton type="danger" plain>危险按钮</RuButton>
  <RuButton type="info" plain>信息按钮</RuButton>
  <br>
  <br>
  <RuButton round>默认按钮</RuButton>
  <RuButton type="dashed" round>虚线按钮</RuButton>
  <RuButton type="primary" round>主要按钮</RuButton>
  <RuButton type="success" round>成功按钮</RuButton>
  <RuButton type="warning" round>警告按钮</RuButton>
  <RuButton type="danger" round>危险按钮</RuButton>
  <RuButton type="info" round>信息按钮</RuButton>
  <br>
  <br>
  <RuButton type="primary" round icon="ios-search">Search</RuButton>
  <RuButton type="primary" icon="ios-search">Search</RuButton>
  <RuButton round icon="ios-search">Search</RuButton>
  <RuButton icon="ios-search">Search</RuButton>
  <br>
  <br>
  <RuButton icon="ios-search" circle></RuButton>
  <RuButton icon="ios-star-outline" circle type="primary"></RuButton>
  <RuButton icon="ios-infinite-outline" circle type="success"></RuButton>
  <RuButton icon="ios-shuffle" circle type="warning"></RuButton>
  <RuButton icon="ios-trash-outline" circle type="danger"></RuButton>
  <RuButton icon="ios-location-outline" circle type="info"></RuButton>
</coding>

<coding title="按钮尺寸" note="<p>按钮有四种尺寸：大、默认、小、长</p><p>设置size为large、small、long可以将按钮设置为大、小、长尺寸，不设置为默认尺寸" :code="buttonSize">
  <RuButton type="primary" size="large">large</RuButton>
  <RuButton type="primary">default</RuButton>
  <RuButton type="primary" size="small">small</RuButton>
  <br>
  <br>
  <RuButton type="primary" size="large" round>large</RuButton>
  <RuButton type="primary" round>default</RuButton>
  <RuButton type="primary" size="small" round>small</RuButton>
  <br>
  <br>
  <RuButton type="success" size="long">SUBMIT</RuButton>
  <br>
  <br>
  <RuButton type="danger" size="long">DELETE</RuButton>
</coding>

<coding title="失效按钮" note="通过设置disabled属性可以将按钮设置为不可用状态" :code="buttonDisabled">
  <RuButton disabled>主要按钮</RuButton>
  <RuButton type="dashed" disabled>虚线按钮</RuButton>
  <RuButton type="primary" disabled>主要按钮</RuButton>
  <RuButton type="success" disabled>成功按钮</RuButton>
  <RuButton type="warning" disabled>警告按钮</RuButton>
  <RuButton type="danger" disabled>危险按钮</RuButton>
  <RuButton type="info" disabled>信息按钮</RuButton>
  <br>
  <br>
  <RuButton plain disabled>朴素按钮</RuButton>
  <RuButton type="dashed" plain disabled>虚线按钮</RuButton>
  <RuButton type="primary" plain disabled>主要按钮</RuButton>
  <RuButton type="success" plain disabled>成功按钮</RuButton>
  <RuButton type="warning" plain disabled>警告按钮</RuButton>
  <RuButton type="danger" plain disabled>危险按钮</RuButton>
  <RuButton type="info" plain disabled>信息按钮</RuButton>
</coding>

<coding title="加载状态" note="通过设置loading属性可以将按钮设置为加载状态" :code="buttonLoading">
  <RuButton loading>加载中...</RuButton>
  <RuButton type="primary" loading>加载中...</RuButton>
  <RuButton plain loading type="primary">加载中...</RuButton>
</coding>

### Attributes
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 按钮尺寸   | String  | small/large/long |   -   |
| type     | 按钮类型   | String  | primary/success/warning/danger/info/text |   -   |
| round    | 是否为圆角按钮   |   Boolean   |    -    |   false   |
| plain    | 是否为朴素按钮   |   Boolean   |    -    |   false   |
| circle    | 是否为圆形按钮   |   Boolean   |    -    |   false   |
| loading    | 是否为加载按钮   |   Boolean   |    -    |   false   |
| disabled    | 是否为无效按钮   |   Boolean   |    -    |   false   |
| icon    | 图标类型   |   String   |    -    |   -   |
| native-type    | 按钮原生type属性  |   String   |    button/reset/submit    |   button   |