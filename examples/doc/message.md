## Message 消息

轻量信息反馈组件，在顶部居中显示

### 基础用法

最基础的message组件，默认在3秒后消失

<coding title="基础使用" note="消息组件在全局注册了一个$message的方法，该方法接收一个options对象或者一个字符串（在仅需要设置消息内容时），通过设置options对象中的message字段设置内容。通知默认会在3秒后关闭，你可以手动设置duration字段来更改这个默认设定，当duration 字段设置为0时，消息不会自动关闭" :code="baseCode">
  <RuButton @click="$message({message: '这是一条普通消息'})">普通消息</RuButton>
  <RuButton @click="$message('这是一条只传入字符串产生的普通消息')">只传字符串</RuButton>
  <RuButton @click="$message({message: '这是一条不会自动关闭的消息', duration: 0})">不会自动关闭</RuButton>
</coding>

### 消息类型

消息有五种类型对操作进行反馈

<coding title="消息类型" note="消息有五种类型：加载中、提示、警告、错误、成功，可以通过设置type字段来选择类型，如设置其它类型，会被忽略。type字段也可以不用在选项中注册，可以直接显示调用，使用方法如下" :code="typeCode">
  <RuButton type="success" @click="$message.success('这是一条成功的消息')">成功消息</RuButton>
  <RuButton type="danger" @click="$message({message: '这是一条错误的消息', type: 'error'})">错误消息</RuButton>
  <RuButton type="warning" @click="$message({message: '这是一条警告的消息', type: 'warning'})">警告消息</RuButton>
  <RuButton type="primary" @click="$message({message: '这是一条提示的消息', type: 'info'})">提示消息</RuButton>
  <RuButton @click="$message({message: '这是一条加载中的消息', type: 'loading'})">加载中消息</RuButton>
</coding>

### 居中显示
消息可以设置居中显示

<coding title="居中显示消息" note="通过设置center字段，可以让消息居中显示" :code="centerCode">
  <RuButton type="success" @click="$message.success({message: '这是一条居中的成功的消息', center: true})">居中成功消息</RuButton>
</coding>

### 自定义Icon
消息可以自定义Icon

<coding title="设置Icon" note="使用$message方法时，在传入的对象中定义icon字段即可设置icon" :code="iconCode">
  <RuButton type="danger" @click="$message({message: '又有一个粉丝抛弃了你', type: 'error', icon: 'heart-broken'})">取消关注</RuButton>
</coding>

### options
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message   | 消息内容   | String   |    -    |   -   |
| type      | 消息类型   | String   |    success/info/warning/error/loading    |   -   |
| icon      | 消息图标   | String   |    -    |   -   |
| duration  | 消息显示多久后关闭，单位为毫秒，设为0时消息不会自动关闭   |   Number   |    -    |   3000   |
| onClose   | 关闭时执行的回调函数   |   Function   |    -    |   -   |


### Events
| 事件名称     | 事件说明    |
|---------- |-------- |---------- |-------------  |-------- |
| close     | 关闭当前消息，可用于手动关闭消息   |
<script>
let baseCode = `
  <RuButton @click="$message({message: '这是一条普通消息'})">普通消息</RuButton>
  <RuButton @click="$message('这是一条只传入字符串产生的普通消息')">只传字符串</RuButton>
  <RuButton @click="$message({message: '这是一条不会自动关闭的消息', duration: 0})">不会自动关闭</RuButton>`

let typeCode = `
  <RuButton type="success" @click="$message.success('这是一条成功的消息')">成功消息</RuButton>
  <RuButton type="danger" @click="$message({message: '这是一条错误的消息', type: 'error'})">错误消息</RuButton>
  <RuButton type="warning" @click="$message({message: '这是一条警告的消息', type: 'warning'})">警告消息</RuButton>
  <RuButton type="primary" @click="$message({message: '这是一条提示的消息', type: 'info'})">提示消息</RuButton>
  <RuButton @click="$message({message: '这是一条加载中的消息', type: 'loading'})">加载中消息</RuButton>
`
let centerCode = `<RuButton type="success" @click="$message.success({message: '这是一条居中的成功的消息', center: true})">
  居中成功消息
</RuButton>`

let iconCode = `
<RuButton type="danger" @click="$message({message: '又有一个粉丝抛弃了你', type: 'error', icon: 'heart-broken'})">
  取消关注
</RuButton>`

export default {
  data() {
    return {
      baseCode: baseCode,
      typeCode: typeCode,
      centerCode: centerCode,
      iconCode: iconCode
    }
  }
}
</script>