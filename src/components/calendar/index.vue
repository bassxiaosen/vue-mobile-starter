<template>
  <div class="calendarWrapper">
    <div class="navBar">
      <span>左</span>
      <span>{{currentYear}}</span>
      <span>右</span>
    </div>
    <div class="dayWrapper">
      <span>星期一</span>
      <span>星期二</span>
      <span>星期三</span>
      <span>星期四</span>
      <span>星期五</span>
      <span>星期六</span>
      <span>星期日</span>
    </div>
    <div class="calendarContent">
      <span :style="!item.isThisMonth?`color:#eee`:''" v-for="item in calendarDataArr" :key="item.key">
        {{item.key}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.today = new Date()
    this.currentYear = this.today.getFullYear()
    this.init()
    console.log(this.calendarDataArr)
  },
  data() {
    return {
      today: {},
      currentYear: 0,
      calendarDataArr: []
    }
  },
  methods: {
    // 获取当前月最大天数
    getCurrentMonthMaxDay() {
      const today = new Date()
      return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
    },
    // 获取当前月第一天是周几
    getCurrentMonthFirstDay() {
      const today = new Date()
      return new Date(today.getFullYear(), today.getMonth(), 1).getDay()
    },
    // 获取当前月最后一天是周几
    getCurrentMonthLastDay() {
      const today = new Date()
      return new Date(today.getFullYear(), today.getMonth()+1, 0).getDay()
    },
    // 处理逻辑
    init() {
      const maxDate = this.getCurrentMonthMaxDay()
      let firstDay = this.getCurrentMonthFirstDay()
      let lastDay = this.getCurrentMonthLastDay()
      // 先判断星期几进行补位，先进行星期天简化处理
      firstDay = firstDay === 0 ? 7 : firstDay
      lastDay = lastDay === 0 ? 7 : lastDay
      let count = firstDay - 1 // 需要往前补几个
      for(let i = count; i > 0; i--) {
        const today = new Date()
        const thatDay = new Date(today.getFullYear(), today.getMonth(), -(i-1))
        this.calendarDataArr.push({
          key: `${thatDay.getMonth()+1}-${thatDay.getDate()}`,
          isThisMonth: false,
        })
      }
      for(let i = 1; i <= maxDate; i++) {
        const today = new Date()
        this.calendarDataArr.push({
          // key: `${today.getFullYear()}-${today.getMonth()+1}-${i}`
          key: `${today.getMonth()+1}-${i}`,
          isThisMonth: true,
        })
      }
      let lastCount = 7 - lastDay
      for(let i = 1; i <= lastCount; i++) {
        const today = new Date()
        const thatDay = new Date(today.getFullYear(), today.getMonth()+1, i)
        this.calendarDataArr.push({
          key: `${thatDay.getMonth()+1}-${thatDay.getDate()}`,
          isThisMonth: false,
        })
      }
    }
  }
}
</script>
<style lang="less">
  .calendarWrapper {
    font-size: 32px;
    .navBar { 
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      border: 1px solid #eee;
    }
    .dayWrapper {
      padding: 10px;
      font-size: 24px;
      display: flex;
      border: 1px solid #eee;
      > span {
        box-sizing: border-box;
        display: inline-block;
        width: 14.28%;
        text-align: center;
        border-right: 1px solid #eee;
        &:last-of-type {
          border-right: none;
        }
      }
    }
    .calendarContent {
      // padding: 10px 0;
      font-size: 10Px;
      display: flex;
      flex-wrap: wrap;
      > span {
        box-sizing: border-box;
        display: inline-block;
        width: 14.28%;
        text-align: center;
        border: 1px solid #eee;
        margin-bottom: 10px;
        padding: 10px 0;
      }
    }
  }
</style>