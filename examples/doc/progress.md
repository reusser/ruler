## Progress 进度条

进度条组件用于展示操作状态及进度

### 基础使用


<coding title="基本用法">
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

<coding title="基本用法">
  <RuProgress :percent="20" textInside></RuProgress>
  <RuProgress :percent="70" color="#1a9efb" textInside></RuProgress>
  <RuProgress :percent="100" textInside></RuProgress>
  <RuProgress :percent="50" status="error" textInside></RuProgress>
  <RuProgress :percent="basePercent" :status="baseStatus"></RuProgress>
  <RuButton type="primary" @click="add" :style="{marginLeft: '10px'}">增加</RuButton>
  <RuButton type="primary" @click="reduce">减少</RuButton>
  <RuButton type="success" @click="setSuccess">成功</RuButton>
  <RuButton type="danger" @click="setError">失败</RuButton>
  <RuButton type="warning" @click="reset">重置</RuButton>
</coding>

<script>
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
</script>