## Font 字体

Ruler对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。

### 中文字体

<div class="font-wrapper">
  <div class="font-box">
    <div class="font-type pingfang">
      清风徐来
    </div>
    <div class="name">PingFang SC</div>
  </div>
  <div class="font-box">
    <div class="font-type hiragino">
      清风徐来
    </div>
    <div class="name">Hiragino Sans GB</div>
  </div>
  <div class="font-box">
    <div class="font-type microsoft">
      清风徐来
    </div>
    <div class="name">Microsoft YaHei</div>
  </div>
</div>

### 英文／数字字体

<div class="font-wrapper">
  <div class="font-box">
    <div class="font-type helvetica-neue">
      Ruler
    </div>
    <div class="name">Helvetica Neue</div>
  </div>
  <div class="font-box">
    <div class="font-type helvetica">
      Ruler
    </div>
    <div class="name">Helvetica</div>
  </div>
  <div class="font-box">
    <div class="font-type arial">
      Ruler
    </div>
    <div class="name">Arial</div>
  </div>
</div>

### 字体使用规范

<table class="font-example">
  <thead>
    <tr>
      <th>文字</th>
      <th>示例</th>
      <th>字号</th>
      <th>颜色</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>主标题</td>
      <td class="primary-title">我是标题</td>
      <td>20px</td>
      <td>#1c2438</td>
    </tr>
    <tr>
      <td>标题</td>
      <td class="title">我是标题</td>
      <td>18px</td>
      <td>#1c2438</td>
    </tr>
    <tr>
      <td>小标题</td>
      <td class="small-title">我是标题</td>
      <td>16px</td>
      <td>#1c2438</td>
    </tr>
    <tr>
      <td>正文</td>
      <td class="text">我是正文</td>
      <td>14px</td>
      <td>#5e5e5e</td>
    </tr>
    <tr>
      <td>正文(小)</td>
      <td class="small-text">我是正文</td>
      <td>12px</td>
      <td>#5e5e5e</td>
    </tr>
    <tr>
      <td>辅助文字</td>
      <td class="placeholder">我是辅助文字</td>
      <td>12px</td>
      <td>#bcbcbc</td>
    </tr>
    <tr>
      <td>失效文字</td>
      <td class="disabled">我是失效文字</td>
      <td>12px</td>
      <td>#bbbec4</td>
    </tr>
  </tbody>
</table>

<style lang="scss" scoped>
.font-wrapper {
  display: flex;
  justify-content: flex-start;
  .font-box {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    margin-right: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    .font-type {
      height: 159px;
      border-bottom: 1px solid #e4e4e4;
      text-align: center;
      line-height: 160px;
      font-size: 40px;
      color: #1c2438;
    }
    .name {
      height: 40px;
      padding-left: 20px;
      line-height: 39px;
      color: #bcbcbc;
      font-family: Helvetica Neue;
    }
    .pingfang {
      font-family: PingFang SC;
    }
    .hiragino {
      font-family: Hiragino Sans GB;
    }
    .microsoft {
      font-family: Microsoft YaHei;
    }
    .helvetica-neue {
      font-family: Helvetica Neue;
    }
    .helvetica {
      font-family: Helvetica;
    }
    .arial {
      font-family: Arial;
    }
  }
}
.font-example {
  width: 100%;
  border: 1px solid #e4e4e4;
  border-collapse: collapse;
  thead {
    background-color: #f7f7f7;
    font-weight: 600;
  }
  th,
  td {
    padding: 8px 16px;
    border: 1px solid #e4e4e4;
    text-align: left;
  }
  td {
    font-size: 12px;
  }
  .primary-title {
    font-size: 20px;
  }
  .title {
    font-size: 18px;
  }
  .small-title {
    font-size: 16px;
  }
  .primary-title,
  .title,
  .small-title {
    color: #1c2438;
  }
  .text {
    font-size: 14px;
  }
  .small-text,
  .placeholder,
  .disabled {
    font-size: 12px;
  }
  .text,
  .small-text {
    color: #5e5e5e;
  }
  .placeholder {
    color: #bcbcbc;
  }
  .disabled {
    color: #bbbec4;
  }
}
</style>