<template>
  <div>
    <h1>Hello <span>{{vue}}</span></h1>
    <CalendarComponent />
  </div>
</template>
<script>
import CalendarComponent from "@/components/calendar/index.vue"
export default {
  components: {
    CalendarComponent
  },
  data() {
    return {
      vue: 'Vue'
    }
  }
}
</script>
<style lang="less">
  h1 {
    color: #e9e9e9;
    font-size: 100px;
    span {
      color: red;
    }
  }
</style>