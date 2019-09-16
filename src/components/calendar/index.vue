<template>
  <div class="calendarWrapper">
    <div class="navBar">
      <span @click="prevMonth">&lt;</span>
      <span>{{currentYear}}年{{currentMonth+1}}月</span>
      <span @click="nextMonth">&gt;</span>
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
      <span :style="!item.isThisMonth?`color:#c0c0c0`:''" v-for="item in calendarDataArr" :key="item.key">
        {{item.key}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // 初始化年月日数据
    this.today = new Date()
    this.currentYear = this.today.getFullYear()
    this.currentMonth = this.today.getMonth()
    this.currentDate = this.today.getDate()
    console.log(this.$data)
    // 业务逻辑操作方法
    this.init()
    console.log(this.calendarDataArr)
  },
  data() {
    return {
      today: {},
      currentYear: 0,
      currentMonth: 0, // 注意是从0开始 0代表1月以此类推
      currentDate: 0,
      calendarDataArr: []
    }
  },
  methods: {
    // 获取当前月最大天数
    getMonthMaxDate(year, month) {
      return new Date(year, month + 1, 0).getDate()
    },
    // 获取当前月第一天是周几
    getMonthFirstDay(year, month) {
      return new Date(year, month, 1).getDay()
    },
    // 获取当前月最后一天是周几
    getMonthLastDay(year, month) {
      return new Date(year, month + 1, 0).getDay()
    },
    // 上下月切换逻辑
    prevMonth() {
      this.switchMonthOperation('prev')
    },
    nextMonth() {
      this.switchMonthOperation('next')
    },
    switchMonthOperation(type) {
      // 月份切换逻辑
      if(type === 'prev') {
        this.currentMonth = this.currentMonth - 1
      } else if(type === 'next') {
        this.currentMonth = this.currentMonth + 1
      }
      const thatMonth = new Date(this.currentYear, this.currentMonth)
      // 重新赋值
      this.currentYear = thatMonth.getFullYear()
      this.currentMonth = thatMonth.getMonth()
      this.init()
    },
    // 处理逻辑
    init() {
      this.calendarDataArr = []
      const maxDate = this.getMonthMaxDate(this.currentYear, this.currentMonth)
      let firstDay = this.getMonthFirstDay(this.currentYear, this.currentMonth)
      let lastDay = this.getMonthLastDay(this.currentYear, this.currentMonth)
      // 先判断星期几进行补位，先进行星期天简化处理
      firstDay = firstDay === 0 ? 7 : firstDay
      lastDay = lastDay === 0 ? 7 : lastDay
      let count = firstDay - 1 // 需要往前补几个
      for(let i = count; i > 0; i--) {
        const thatDay = new Date(this.currentYear, this.currentMonth, -(i-1))
        this.calendarDataArr.push({
          key: `${thatDay.getMonth() + 1}-${thatDay.getDate()}`,
          isThisMonth: false,
        })
      }
      for(let i = 1; i <= maxDate; i++) {
        this.calendarDataArr.push({
          key: `${this.currentMonth + 1}-${i}`,
          isThisMonth: true,
        })
      }
      let lastCount = 7 - lastDay
      for(let i = 1; i <= lastCount; i++) {
        const thatDay = new Date(this.currentYear, this.currentMonth + 1, i)
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