<template>
  <div>
    计数器{{count}}
    <br>
    <button @click="clickPlus">自增1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    clickPlus() {
      this.count++
    }
  }
}
</script>