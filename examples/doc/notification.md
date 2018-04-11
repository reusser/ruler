## notification 通知

全局通知的消息提醒组件，固定在右上角出现

### 基本用法

<coding title="普通消息" note="通知组件在全局注册了一个$notice的方法，该方法接收一个options对象，通过设置options对象中的title字段设置通知标题，message字段设置内容。通知默认会在3秒后关闭，你可以手动设置duration字段来更改这个默认设定，当duration 字段设置为0时，通知不会自动关闭" :code="baseNoticeCode">
  <RuButton @click="notice({title: '标题', message: '这是一条通知，会在三秒后关闭'})">普通通知</RuButton>
  <RuButton @click="notice({title: '标题', message: '这是一条通知，不会自动关闭', duration: 0})">不会自动关闭</RuButton>
</coding>

### 通知类型

通知可以设置成功、错误、警告、消息四种类型，也可以设置icon

<coding title="带有icon的类型通知" note="notification组件有四种类型，successs、error、warning、info，通过type字段来设置，如设置其他type，会被忽略。type字段也可以不用在选项中注册，可以直接显示调用，使用方法如下" :code="typeNoticeCode">
  <RuButton @click="notice({title: '成功', message: '这是一条成功通知，会在三秒后关闭', type: 'success'})" type="success">成功通知</RuButton>
  <RuButton @click="showError" type="danger">失败通知</RuButton>
  <RuButton @click="showWarning" type="warning">警告通知</RuButton>
  <RuButton @click="showInfo" type="primary"> 消息通知</RuButton>
</coding>

### 自定义Icon
通知可以自定义你想要的Icon类型

<coding title="定义Icon" note="使用$notice方法时，在传入的对象中定义icon字段即可设置icon" :code="iconNoticeCode">
  <RuButton @click="$notice.error({title: '通知标题', message: '自定义图标通知', icon: 'flash'})" type="danger">flash!</RuButton>
  <RuButton @click="$notice.success({title: '通知标题', message: '自定义图标通知', icon: 'happy-outline'})" type="success">got it!</RuButton>
</coding>


### 带偏移量
通知可以设置偏移距离

<coding title="设置偏移量" note="在选项中传入topOffset字段，即可设置偏移量" :code="offsetCode">
  <RuButton @click="$notice({title: '通知标题', message: '这是一条带偏移量的通知', topOffset: 100})" type="primary">偏移量100</RuButton>
</coding>



### options
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 通知标题   | String   |    -    |   -   |
| message   | 通知内容   | String   |    -    |   -   |
| type      | 通知类型   | String   |    success/info/warning/error    |   -   |
| icon      | 通知图标   | String   |    -    |   -   |
| duration  | 通知显示多久后关闭，单位为毫秒，设为0时通知不会自动关闭   |   Number   |    -    |   3000   |
| onClose   | 关闭时执行的回调函数   |   Function   |    -    |   -   |
| onClick   | 通知点击时执行的回调函数|   Function   |    -    |   -   |
| topOffset | 通知垂直方向偏移距离   |   Number   |    -    |   -   |
| useHTMLString | 是否将内容作为HTML标签渲染 |  Boolean   |   -    |   false   |

<script>
  let baseNoticeCode = `
  <RuButton @click="notice({title: '标题', message: '这是一条通知，会在三秒后关闭'})">普通通知</RuButton>
  <RuButton @click="notice({title: '标题', message: '这是一条通知，不会自动关闭', duration: 0})">不会自动关闭</RuButton>
  
  export default {
    methods: {
      notice(options) {
        this.$notice(options)
      }
    }
  }
  `

  let typeNoticeCode = `
  <RuButton 
    @click="notice({title: '成功', message: '这是一条成功通知，会在三秒后关闭', type: 'success'})" 
    type="success"
  >
  成功通知
  </RuButton>
  <RuButton @click="showError" type="danger">失败通知</RuButton>
  <RuButton @click="showWarning" type="warning">警告通知</RuButton>
  <RuButton @click="showInfo" type="primary"> 消息通知</RuButton>
  
  export default {
    data() {
      return {}
    },
    methods: {
      notice(options) {
        this.$notice(options)
      },
      showError() {
        this.$notice.error({
          title: '错误',
          message: '这是一条错误的通知'
        })
      },
      showWarning() {
        this.$notice.warning({
          title: '警告',
          message: '这是一条警告的通知'
        })
      },
      showInfo() {
        this.$notice.info({
          title: ' 消息',
          message: '这是一条消息的通知'
        })
      }
    }
  }
  `

  let iconNoticeCode = `
  <RuButton 
    @click="$notice.error({title: '通知标题', message: '自定义图标通知', icon: 'flash'})" 
    type="danger"
  >
  flash!
  </RuButton>
  <RuButton 
    @click="$notice.success({title: '通知标题', message: '自定义图标通知', icon: 'happy-outline'})" 
    type="success"
  >
  got it!
  </RuButton>`

  let offsetCode = `
  <RuButton 
    @click="$notice({title: '通知标题', message: '这是一条带偏移量的通知', topOffset: 100})" 
    type="primary"
  >
  偏移量100
  </RuButton>`

  export default {
    data() {
      return {
        baseNoticeCode: baseNoticeCode,
        typeNoticeCode: typeNoticeCode,
        iconNoticeCode: iconNoticeCode,
        offsetCode: offsetCode
      }
    },
    methods: {
      notice(options) {
        this.$notice(options)
      },
      showError() {
        this.$notice.error({
          title: '错误',
          message: '这是一条错误的通知'
        })
      },
      showWarning() {
        this.$notice.warning({
          title: '警告',
          message: '这是一条警告的通知'
        })
      },
      showInfo() {
        this.$notice.info({
          title: ' 消息',
          message: '这是一条消息的通知'
        })
      }
    }
  }
</script>