## Circle 进度环

用于展示操作进度百分比以及数据占比等

### 基础用法

<coding title="进度环基础配置" note="进度环的进度由percent字段控制，进度环颜色由strokeColor控制" class="circle-first-box" :code="baseCode">
  <RuCircle :percent="50" :style="{fontSize: '20px'}">50%</RuCircle>
  <RuCircle :percent="100" strokeColor="#27c24c"><RuIcon type="ios-checkmark-empty" size="55px" color="#27c24c"></RuIcon></RuCircle>
  <RuCircle :percent="30" strokeColor="#ef5050"><RuIcon type="ios-close-empty" size="55px" color="#ef5050"></RuIcon></RuCircle>
</coding>

<coding title="常见场景" note="进度环常见用来与其他组件配合实现交互" :code="demoCode">
  <RuCircle :percent="percent" :strokeColor="color">
    <span v-if="percent !== 100" style="font-size: 20px">{{percent}}%</span>
    <RuIcon type="ios-checkmark-empty" size="55px" color="#27c24c" v-else></RuIcon>
  </RuCircle>
  <RuButton type="primary" :style="{margin: '10px'}" @click="add">增</RuButton>
  <RuButton type="primary" @click="reduce">减</RuButton>
</coding>

### 自定义内容

<coding title="自定义进度环内容" note="通过自定义进度环内容，可以展示统计结果等数据" :code="slotCode">
  <RuCircle :percent="18.7" :size="300" strokeColor="#20a3f7" :backWidth="2" :strokeWidth="3" linecap="square">
    <div>
      <h2>1,390,080,000</h2>
      <p>2017中国人口</p>
      <p>世界占比18.7%</p>
    </div>
  </RuCircle>
</coding>

### Attributes
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percent   | 进度值     | Number   |    -    |   0       |
| size      | 进度环的宽高| Number   |    -    |   120     |
| linecap   | 进度环头尾的形状| String  |   square/round     |   round   |
| strokeWidth| 进度环的线条宽度  | Number   |    -    |   6       |
| strokeColor| 进度条颜色  | String   |    -    |   #fe6f3d |
| backWidth | 进度环背景宽度| number   |    -    |   5 |
| backColor | 进度环背景颜色| String   |    -    |   #e4e4e4 |

<script>
let baseCode = `
  <RuCircle :percent="50" :style="{fontSize: '20px'}">50%</RuCircle>
  <RuCircle 
    :percent="100" 
    strokeColor="#27c24c"
  >
    <RuIcon type="ios-checkmark-empty" size="55px" color="#27c24c"></RuIcon>
  </RuCircle>
  <RuCircle 
    :percent="30" 
    strokeColor="#ef5050"
  >
    <RuIcon type="ios-close-empty" size="55px" color="#ef5050"></RuIcon>
  </RuCircle>
`

let demoCode = `
  <RuCircle :percent="percent" :strokeColor="color">
    <span v-if="percent !== 100" style="font-size: 20px">{{percent}}%</span>
    <RuIcon type="ios-checkmark-empty" size="55px" color="#27c24c" v-else></RuIcon>
  </RuCircle>
  <RuButton type="primary" :style="{margin: '10px'}" @click="add">增</RuButton>
  <RuButton type="primary" @click="reduce">减</RuButton>

  export default {
  data() {
    return {
      percent: 0
    }
  },
  computed: {
    color() {
      return this.percent === 100 ? '#27c24c' : '#fe6f3d'
    }
  },
  methods: {
    add() {
      if (this.percent === 100) return
      this.percent += 10
    },
    reduce() {
      if (this.percent === 0) return
      this.percent -= 10
    }
  }
}
`
let slotCode = `
  <RuCircle :percent="18.7" :size="300" strokeColor="#20a3f7" :backWidth="2" :strokeWidth="3">
    <div class="circle-demo-content">
      <h2>1,390,080,000</h2>
      <p>2017中国人口</p>
      <p>世界占比18.7%</p>
    </div>
  </RuCircle>
`

export default {
  data() {
    return {
      baseCode: baseCode,
      percent: 0,
      demoCode: demoCode,
      slotCode: slotCode
    }
  },
  computed: {
    color() {
      return this.percent === 100 ? '#27c24c' : '#fe6f3d'
    }
  },
  methods: {
    add() {
      if (this.percent === 100) return
      this.percent += 10
    },
    reduce() {
      if (this.percent === 0) return
      this.percent -= 10
    }
  }
}
</script>

<style lang="scss" scoped>
.circle-first-box {
  .ru-circle {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>