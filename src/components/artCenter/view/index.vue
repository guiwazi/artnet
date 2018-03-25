<template>
  <div class="title">
    <aaa></aaa>
    <show></show>
  </div>
</template>
<script>
  import aaa from '../component/top.vue'
  import show from '../component/show.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
    aaa,
    show
  }
  }
</script>
<style lang="scss" scoped>
.title{
  width:100%;
}
</style>