<template>
  <div class="code-box">
    <div class="code-content">
      <slot></slot>
    </div>
    <div class="code-title">
      <span>{{title}}</span>
    </div>
    <div class="code-bottom">
      <p class="note">{{note}}</p>
      <collapse-transition name="code" mode="in-out">
        <div class="coding-code" v-show="isShowCode">
          <div>
            <pre><code :class="lang" ref="code">{{code}}</code></pre>
          </div>
        </div>
      </collapse-transition>
    </div>
    <div class="code-button" @mouseover="isShowButtonText = true" @mouseout="isShowButtonText = false" @click="isShowCode = !isShowCode">
      <RuIcon :type=" isShowCode ? 'arrow-up-b' : 'arrow-down-b'" @click.native="isShowCode = !isShowCode"></RuIcon>
      <transition name="text">
        <span class="button-text" v-show="isShowButtonText">{{isShowCode ? '隐藏代码' : '显示代码'}}</span>
      </transition>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
export default {
  name: 'coding',
  props: {
    code: String,
    title: String,
    note: String,
    lang: String
  },
  data () {
    return {
      isShowCode: false,
      isShowButtonText: false
    }
  },
  mounted () {
    hljs.highlightBlock(this.$refs.code)
  }
}
</script>

<style lang="scss" scoped>
.code-box {
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  transition: .2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .code-content {
    padding: 24px;
  }
  .code-title {
    position: relative;
    margin: 10px 0 10px;
    font-weight: 500;
    > span {
      display: inline-block;
      position: relative;
      padding: 0 18px;
      margin-left: 30px;
      background-color: #fff;
      font-size: 14px;
    }
    &::before {
      box-sizing: border-box;
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #e4e4e4;
    }
  }
  .code-bottom {
    position: relative;
    padding: 0 24px 24px 24px;
    .note {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .coding-code {
      overflow: hidden;
      pre {
        background: #fff;
        margin: 0;
        line-height: 1.5;
        font-size: 12px;
      }
    }
  }
  .code-button {
    position: relative;
    bottom: 10;
    left: 50%;
    width: 100%;
    height: 40px;
    border-top: 1px solid #e4e4e4;
    line-height: 40px;
    text-align: center;
    transform: translate(-50%);
    cursor: pointer;
    &:hover {
      background-color: #f9fafc;
      [class^="ru-icon-"] {
        color: #fe6f3d;
        transform: translateX(-15px);
      }
    }
    [class^="ru-icon-"] {
      transition: all .4s;
    }
    color: #fe6f3d;
    .button-text {
      position: absolute;
      top: 0;
    }
  }
}
.text-enter-active {
  transition: all .3s ease;
}
.text-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.text-enter, .text-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
