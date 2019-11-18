<template>
  <div id="app">
    <p style="font-size:16px;">
      <router-link to="/">Index页面</router-link>
      <router-link to="/foo">Foo页面</router-link>
      <router-link to="/bar">Bar页面</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
// App.vue就是一个路由壳子
export default {
  
}
</script>