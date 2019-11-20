<template>
  <div>
    Foo页面
    <couter/>
    <hr>
    {{$store.state.FooData.showData}}
  </div>
</template>
<script>
import couter from "@/components/couter"
import { mapState } from 'vuex'
export default {
  components: {
    couter
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>