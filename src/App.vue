<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
          /**
       * 切换语言 

       changeLangEvent() {
         this.$confirm('确定切换语言吗?', '提示', {
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'warning'
          }).then(() => {
             if ( this.lang === 'zh-CN' ) {
                this.lang = 'en-US';
                this.$i18n.locale = this.lang;//关键语句
             }else {
                this.lang = 'zh-CN';
                this.$i18n.locale = this.lang;//关键语句
             }
          }).catch(() => {
             this.$message({
                 type: 'info',
             });
          });
      }   */ 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
