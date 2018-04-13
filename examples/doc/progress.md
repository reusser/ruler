## Progress 进度条

进度条组件用于展示操作状态及进度

### 基础使用


<coding title="基本用法" note="progress组件设置percent属性控制进度值，status属性用于控制组件的状态" :code="baseCode">
  <RuProgress :percent="20"></RuProgress>
  <RuProgress :percent="70" color="#1a9efb"></RuProgress>
  <RuProgress :percent="100"></RuProgress>
  <RuProgress :percent="50" status="error"></RuProgress>
  <RuProgress :percent="basePercent" :status="baseStatus"></RuProgress>
  <RuButton type="primary" @click="add" :style="{marginLeft: '10px'}">增加</RuButton>
  <RuButton type="primary" @click="reduce">减少</RuButton>
  <RuButton type="success" @click="setSuccess">成功</RuButton>
  <RuButton type="danger" @click="setError">失败</RuButton>
  <RuButton type="warning" @click="reset">重置</RuButton>
</coding>

### 进度内显

progress可以设置进度值在进度条内部显示

<coding title="进度值在进度条内显示" note="设置textInside可以让文字内置" :code="insideCode">
  <RuProgress :percent="20" textInside></RuProgress>
  <RuProgress :percent="70" color="#1a9efb" textInside></RuProgress>
  <RuProgress :percent="100" textInside></RuProgress>
  <RuProgress :percent="50" status="error" textInside></RuProgress>
  <RuProgress :percent="insidePercent" :status="insideStatus" textInside></RuProgress>
  <RuButton type="primary" @click="add2" :style="{marginLeft: '10px'}">增加</RuButton>
  <RuButton type="primary" @click="reduce2">减少</RuButton>
  <RuButton type="success" @click="setSuccess2">成功</RuButton>
  <RuButton type="danger" @click="setError2">失败</RuButton>
  <RuButton type="warning" @click="reset2">重置</RuButton>
</coding>


### Attributes
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percent   | 进度值     | Number   |    -    |   0       |
| textInside| 文字是否内置| Boolean  |    -    |   false   |
| showText  | 是否显示文字| Boolean  |   -     |   true    |
| height    | 进度条高度  | Number   |    -    |   6       |
| color     | 进度条颜色  | String   |    -    |   #fe6f3d |
| status    | 进度条状态  | String   |success/error|   -       |

<script>

let baseCode = `
  <RuProgress :percent="20"></RuProgress>
  <RuProgress :percent="70" color="#1a9efb"></RuProgress>
  <RuProgress :percent="100"></RuProgress>
  <RuProgress :percent="50" status="error"></RuProgress>
  <RuProgress :percent="basePercent" :status="baseStatus"></RuProgress>
  <RuButton type="primary" @click="add" :style="{marginLeft: '10px'}">增加</RuButton>
  <RuButton type="primary" @click="reduce">减少</RuButton>
  <RuButton type="success" @click="setSuccess">成功</RuButton>
  <RuButton type="danger" @click="setError">失败</RuButton>
  <RuButton type="warning" @click="reset">重置</RuButton>
  
  export default {
  data() {
    return {
      basePercent: 0,
      baseStatus: ''
    }
  },
  methods: {
    add() {
      if (this.basePercent >= 100) return false
      this.basePercent += 10
    },
    reduce() {
      if (this.basePercent <= 0) return false
      this.basePercent -= 10
    },
    setSuccess() {
      this.basePercent = 100
      this.baseStatus = 'success'
    },
    setError() {
      this.baseStatus = 'error'
    },
    reset() {
      this.basePercent = 0
      this.baseStatus = ''
    }
  }
}
  `
let insideCode = `
  <RuProgress :percent="20" textInside></RuProgress>
  <RuProgress :percent="70" color="#1a9efb" textInside></RuProgress>
  <RuProgress :percent="100" textInside></RuProgress>
  <RuProgress :percent="50" status="error" textInside></RuProgress>
  <RuProgress :percent="insidePercent" :status="insideStatus" textInside></RuProgress>
  <RuButton type="primary" @click="add2" :style="{marginLeft: '10px'}">增加</RuButton>
  <RuButton type="primary" @click="reduce2">减少</RuButton>
  <RuButton type="success" @click="setSuccess2">成功</RuButton>
  <RuButton type="danger" @click="setError2">失败</RuButton>
  <RuButton type="warning" @click="reset2">重置</RuButton>


  export default {
  data() {
    return {
      insidePercent: 0,
      insideStatus: ''
    }
  },
  methods: {
    add2() {
      if (this.insidePercent >= 100) return false
      this.insidePercent += 10
    },
    reduce2() {
      if (this.insidePercent <= 0) return false
      this.insidePercent -= 10
    },
    setSuccess2() {
      this.insidePercent = 100
      this.insideStatus = 'success'
    },
    setError2() {
      this.insideStatus = 'error'
    },
    reset2() {
      this.insidePercent = 0
      this.insideStatus = ''
    },
  }
}
`
export default {
  data() {
    return {
      basePercent: 0,
      baseStatus: '',
      baseCode: baseCode,
      insidePercent: 0,
      insideStatus: '',
      insideCode: insideCode
    }
  },
  methods: {
    add() {
      if (this.basePercent >= 100) return false
      this.basePercent += 10
    },
    reduce() {
      if (this.basePercent <= 0) return false
      this.basePercent -= 10
    },
    setSuccess() {
      this.basePercent = 100
      this.baseStatus = 'success'
    },
    setError() {
      this.baseStatus = 'error'
    },
    reset() {
      this.basePercent = 0
      this.baseStatus = ''
    },
    add2() {
      if (this.insidePercent >= 100) return false
      this.insidePercent += 10
    },
    reduce2() {
      if (this.insidePercent <= 0) return false
      this.insidePercent -= 10
    },
    setSuccess2() {
      this.insidePercent = 100
      this.insideStatus = 'success'
    },
    setError2() {
      this.insideStatus = 'error'
    },
    reset2() {
      this.insidePercent = 0
      this.insideStatus = ''
    },
  }
}
</script>