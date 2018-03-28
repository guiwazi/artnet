<template>
	<div>
			<el-button type="primary" @click="qwqw()">{{spanV}}</el-button>
  </div>
</template>
<script>

  export default {
    data() {
        return {
        	spanV:'22222'
        }
    },
    methods:{
       qwqw(){
       	this.spanV='3333';
       }
    },
    components: {
    },
    mounted() {
    },
    created() {
    },
    beforeDestroy() {
    }
  }
</script>
<style lang="scss" scoped>

</style>