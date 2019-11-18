<template>
<div>
  <h1>Hello <span>{{vue}}</span></h1>
  <div class="entryGrid">
    <!-- 网格跳转区域 -->
    <div class="item" @click="jumpPage('/foo', $event)">Foo页面</div>
    <div class="item" @click="jumpPage('/bar', $event)">Bar页面</div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      vue: 'Vue'
    }
  },
  methods: {
    jumpPage(link, $event) {
      this.$router.push(link)
    }
  }
}
</script>
<style lang="less">
  h1 {
    color: #000;
    font-size: 32px;
    text-align: center;
    span {
      color: red;
    }
  }
  .entryGrid {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    .item {
      font-size: 16px;
      width: 48%;
      text-align: center;
      padding: 30px 0;
      border: 1px solid #e9e9e9;
      border-radius: 4px;
      &:active {
        background-color: gray;
        color: #FFF;
      }
    }
  }
</style>