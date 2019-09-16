<template>
<div>
  <header>
    头部
  </header>
  <main class="mainContent">
    <section class="leftSection">
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
      左侧
    </section>
    <section class="rightSection">
      右侧
    </section>
  </main>
  <footer>
    尾部
  </footer>
</div>
</template>
<script>
export default {
}
</script>
<style lang="less">
  .mainContent {
    min-height: 400px;
    display: flex;
    .leftSection, .rightSection {
      background-color: aqua;
      display: table-cell;
    }
    .leftSection {
      width: 200px; 
    }
    .rightSection {
      margin-left: 40px;
      // width: calc(100% - 240px);
      flex: 1;
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
</style>