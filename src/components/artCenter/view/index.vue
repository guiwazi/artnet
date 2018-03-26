<template>
  <div class="title">
    <topNav></topNav>
    <show></show>
  </div>
</template>
<script>
  import topNav from '../component/top.vue'
  import show from '../component/show.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
    topNav,
    show
  }
  }
</script>
<style lang="scss" scoped>
.title{
  width:100%;
}
</style>