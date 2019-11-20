<template>
  <h1>Hello <span>{{vue}}</span></h1>
</template>
<script>
export default {
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
    font-size: 32px;
    span {
      color: red;
    }
  }
</style>