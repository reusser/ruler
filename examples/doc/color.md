## Color 色彩

Ruler使用以下颜色作为设计和开发规范，保证组件的视觉一致性

### 主色

Ruler的主要颜色是橙色

<div class="flex-box">
  <div class="color-box-wrapper">
    <div class="color-box bg-primary">
      <p class="color-box__title">Primary</p>
      <p class="color-box__value">#fe6f3d</p>
    </div>
  </div>
</div>

### 辅助色

辅助色常用于信息提示，比如成功、警告和失败

<div class="flex-box">
  <div class="color-box-wrapper">
    <div class="color-box bg-success">
      <p class="color-box__title">Success</p>
      <p class="color-box__value">#27c24c</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-warning">
      <p class="color-box__title">Warning</p>
      <p class="color-box__value">#ff9900</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-danger">
      <p class="color-box__title">Danger</p>
      <p class="color-box__value">#ef5050</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-info">
      <p class="color-box__title">Info</p>
      <p class="color-box__value">#fe6f3d</p>
    </div>
  </div>
</div>

### 中性色

中性色用于文本、背景、边框、阴影

<div class="flex-box">
  <div class="color-box-wrapper">
    <div class="color-box bg-title">
      <p class="color-box__title">标题颜色</p>
      <p class="color-box__value">#1c2438</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-text-primary">
      <p class="color-box__title">主要文字颜色</p>
      <p class="color-box__value">#5e5e5e</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-text-secondary">
      <p class="color-box__title">次要文字颜色</p>
      <p class="color-box__value">#a1a1a1</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-text-info">
      <p class="color-box__title">提示文字颜色</p>
      <p class="color-box__value">#bcbcbc</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-disabled">
      <p class="color-box__title">失效颜色</p>
      <p class="color-box__value">#bbbec4</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-border">
      <p class="color-box__title">边框和分割线</p>
      <p class="color-box__value">#e4e4e4</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-content-bg">
      <p class="color-box__title">内容区背景色</p>
      <p class="color-box__value">#eff3f4</p>
    </div>
  </div>
  <div class="color-box-wrapper">
    <div class="color-box bg-bottom-line">
      <p class="color-box__title">图表底线</p>
      <p class="color-box__value">#f2f2f2</p>
    </div>
  </div>
</div>

<style lang="scss" scoped>
p {
  margin: 14px 0;
}
.flex-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.color-box-wrapper {
  box-sizing: border-box;
  width: 25%;
  padding-left: 6px;
  padding-right: 6px;
  .color-box {
    box-sizing: border-box;
    height: 76px;
    padding: 21px;
    margin: 5px 0;
    border-radius: 4px;
    p {
      margin: 0;
      color: #fff;
    }
    .color-box__value {
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      opacity: .7;
    }
  }
  .bg-border,
  .bg-content-bg,
  .bg-bottom-line {
    p {
      color: #5e5e5e;
    }
  }
}

.bg-primary {
  background-color: #fe6f3d;
}
.bg-success {
  background-color: #27c24c;
}
.bg-warning {
  background-color: #ff9900;
}
.bg-danger {
  background-color: #ef5050;
}
.bg-info {
  background-color: #fe6f3d;
}
.bg-title {
  background-color: #1c2438;
}
.bg-text-primary {
  background-color: #5e5e5e;
}
.bg-text-secondary {
  background-color: #a1a1a1;
}
.bg-text-info {
  background-color: #bcbcbc;
}
.bg-disabled {
  background-color: #bbbec4;
}
.bg-border {
  background-color: #e4e4e4;
}
.bg-content-bg {
  background-color: #eff3f4;
}
.bg-bottom-line {
  background-color: #f2f2f2;
}
</style>