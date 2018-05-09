<template>
  <div class="ru-date-picker">
    <ru-icon type="ios-calendar-outline"></ru-icon>
    <input 
      class="ru-date-picker__input"
      @focus="inputFocusHandler"
      @blur="isShowDatePanel = false"
      :placeholder="placeholder"
      v-model="value[0]"
      readonly
    >
    </input>
    <div class="ru-date-wrapper" v-show="isShowDatePanel || keepDatePanel" @click="keepDatePanel = true">
      <div class="ru-date-options" v-if="showOptions">
        <template v-if="!range">
          <button class="ru-date-options__btn" @click.stop="selectValue(visualYear, visualMonth, visualDay, 0)">今天</button>
          <button class="ru-date-options__btn" @click.stop="selectValue(visualYear, visualMonth, visualDay, -1)">昨天</button>
          <button class="ru-date-options__btn" @click.stop="selectValue(visualYear, visualMonth, visualDay, -7)">一周前</button>
        </template>
        <template v-else>
          <button class="ru-date-options__btn">最近一周</button>
          <button class="ru-date-options__btn">最近一个月</button>
          <button class="ru-date-options__btn">最近三个月</button>
        </template>
      </div>
      <div :class="['ru-date-panel', {'is-show-options': showOptions}]">
        <div class="ru-date-panel__header">
          <div class="ru-date-panel__options">
            <span class="ru-date-panel__double-arrow-left arrow" @click="reduceYear()">
              <ru-icon type="ios-arrow-left"></ru-icon>
              <ru-icon type="ios-arrow-left"></ru-icon>
            </span>
            <span class="ru-date-panel__arrow-left arrow" @click="reduceMonth()">
              <ru-icon type="ios-arrow-left"></ru-icon>
            </span>
            <span class="ru-date-panel__year">
              {{visualYear}}年
            </span>
            <span class="ru-date-panel__month">
              {{visualMonth}}月
            </span>
            <span class="ru-date-panel__arrow-right arrow" @click="addMonth()">
              <ru-icon type="ios-arrow-right"></ru-icon>
            </span>
            <span class="ru-date-panel__double-arrow-right arrow" @click="addYear()">
              <ru-icon type="ios-arrow-right"></ru-icon>
              <ru-icon type="ios-arrow-right"></ru-icon>
            </span>
          </div>
          <div class="ru-date-panel__weekday">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
          </div>
        </div>
        <div class="ru-date-panel__body">
          <span class="is-disabled" v-for="(item, index) in prevDisabledDate" :key="`_${index}`">{{item}}</span>
          <span v-for="(item, index) in dateArr" :key="`_${index}_`">
            <span 
              :class="['ru-date-panel__item', {'is-active': `${visualYear}-${visualMonth}-${item}` === activeDate }]" 
              @click.stop="selectValue(visualYear, visualMonth, item, 0)"
            >
              {{item}}
            </span>
          </span>
          <span class="is-disabled" v-for="(item, index) in postDisabledDate" :key="`${index}_`">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RuIcon from '../../icon'
export default {
  name: 'RuDatePicker',
  components: {
    RuIcon
  },
  props: {
    placeholder: {
      type: String,
      default: '选择日期'
    },
    range: Boolean,
    showOptions: Boolean
  },
  data() {
    return {
      isShowDatePanel: false,
      prevDisabledDate: [],
      dateArr: [],
      postDisabledDate: [],
      value: [],
      visualYear: '',
      visualMonth: '',
      visualDay: '',
      activeDate: '',
      dateFirstInstance: null,
      panelDayCount: 42,
      keepDatePanel: false
    }
  },
  methods: {
    inputFocusHandler() {
      this.dateFirstInstance = this.value[0] ? new Date(this.value[0]) : new Date()
      this.visualYear = this.dateFirstInstance.getFullYear()
      this.visualMonth = this.dateFirstInstance.getMonth() + 1
      this.visualDay = this.dateFirstInstance.getDate()
      this.activeDate = `${this.visualYear}-${this.visualMonth}-${this.visualDay}`
      this.isShowDatePanel = true
      this.keepDatePanel = true
    },
    getDateArr(year, month) {
      let date = new Date(year, month, 0)
      let dayCount = date.getDate()
      let weekDay = new Date(year, month - 1, 1).getDay()
      let prevDayCount = new Date(year, month - 1, 0).getDate()
      this.prevDisabledDate = [... new Array(prevDayCount + 1).keys()].slice(weekDay === 0 ? prevDayCount - 6 : prevDayCount + 1 - weekDay)
      this.dateArr = [... new Array(dayCount + 1).keys()].slice(1)
      let postLength = this.panelDayCount - this.prevDisabledDate.length - this.dateArr.length
      this.postDisabledDate = [... new Array(postLength + 1).keys()].slice(1)
    },
    reduceMonth() {
      if (this.visualMonth === 1) {
        this.visualMonth = 12
        this.visualYear -= 1
      } else {
        this.visualMonth -= 1
      }
    },
    addMonth() {
      if (this.visualMonth === 12) {
        this.visualMonth = 1
        this.visualYear += 1
      } else {
        this.visualMonth += 1
      }
    },
    reduceYear() {
      this.visualYear --
    },
    addYear() {
      this.visualYear ++
    },
    selectValue(year, month, day, daySet) {
      if (daySet === 0) {
        this.value = [`${year}-${month}-${day}`]
        this.isShowDatePanel = false
        this.keepDatePanel = false
      } else {
        let str = `${year}-${month}-${day}`
        let val = new Date (new Date(str).getTime() + daySet * 24 * 3600 * 1000)
        this.value = [`${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`]
        this.isShowDatePanel = false
        this.keepDatePanel = false
      }
    }
  },
  watch: {
    visualYear() {
      if (this.visualMonth !== '' && this.visualMonth !== 0) {
        this.getDateArr(this.visualYear, this.visualMonth)
      }
    },
    visualMonth() {
      if (this.visualYear !== '' && this.visualYear !== 0) {
        this.getDateArr(this.visualYear, this.visualMonth)
      }
    }
  }
}
</script>
