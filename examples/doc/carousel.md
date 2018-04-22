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

<coding>
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