<style lang="scss" scoped>
  .ru-carousel-item {
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 20px;
      color: #fff;
    }
    &:nth-child(odd) {
      background-color: #4b6b9c;
    }
    &:nth-child(even) {
      background-color: #d3dce6;
    }
  }
</style>

## Carousel 走马灯

循环播放图片，文字内容等

### 基础用法

<coding title="基础用法" note="走马灯默认1000ms切换一次，指示器默认通过点击触发" :code="baseCode">
  <RuCarousel>
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
</coding>

### 触发指示器

指示器可以修改为Hover触发

<coding title="Hover触发" note="指示器可以修改为Hover触发" :code="hoverCode">
  <RuCarousel trigger="hover">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
</coding>

### 控制箭头显示

可以设置箭头显示的时机

<coding title="控制箭头显示隐藏" note="通过showArrow字段可以设置箭头的显示时机" :code="arrowCode">
  <RuCarousel showArrow="always">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
  <RuCarousel showArrow="hover">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
</coding>

### 外置指示器

指示器可以放在组件外部显示

<coding title="指示器外置" note="设置dotsOutside可以将指示器放在组件外部显示" :code="dotCode">
  <RuCarousel dotsOutside>
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
</coding>

### Attributes
| 参数      | 说明    | 类型      | 可选值   | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| dotsOutside| 指示器是否外置| Boolean   |    -    |   false   |
| height     | 走马灯的高度  | String    |    -    |   -      |
| duration   | 时间间隔（为0时不自动切换） | Number  |   -     |   1000   |
| showArrow  | 箭头的显示时机 | String   |    always/never/hover |     hover     |
| trigger    | 指示器的触发时机| String   |    hover/click    |   click |
| index      | 初始内容索引   | Number   |    -    |   0 |

<script>
const baseCode = `
  <RuCarousel>
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>`

  const hoverCode = `
  <RuCarousel trigger="hover">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>`

  const arrowCode = `
  <RuCarousel showArrow="always">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
  <RuCarousel showArrow="hover">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
  `

  const dotCode = `
  <RuCarousel dotsOutside">
    <RuCarouselItem>
      <div class="item">1</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">2</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">3</div>
    </RuCarouselItem>
    <RuCarouselItem>
      <div class="item">4</div>
    </RuCarouselItem>
  </RuCarousel>
  `
export default {
  data() {
    return {
      baseCode: baseCode,
      hoverCode: hoverCode,
      arrowCode: arrowCode,
      dotCode: dotCode
    }
  }
}
</script>