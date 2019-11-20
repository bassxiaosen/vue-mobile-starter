<template>
  <div>
    Bar页面
    <couter/>
    <hr>
    {{showData}}
  </div>
</template>
<script>
import couter from "@/components/couter"
import { mapState } from 'vuex'
export default {
  components: {
    couter
  },
  computed: {
    ...mapState('BarData', ['showData'])
  }
}
</script>