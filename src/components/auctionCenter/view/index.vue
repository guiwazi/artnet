<template>
	<div>
    <!-- 弹窗组件 -->
    <transition name="el-zoom-in-bottom">
  	<auctionPop v-show="auctionP" @auctionShow="auctionShowFang()"></auctionPop>
    </transition>
  	<!-- 拍卖中心组件 -->
  	<transition name="el-fade-in-linear">
  	<auctionContent v-show="auctionC"></auctionContent>
  	</transition>
  </div>
</template>
<script>
// 弹窗引入
import auctionPop from '../component/pop/auctionPop.vue'
// 拍卖内容
import auctionContent from '../component/auction/auctionC.vue'
  export default {
    data() {
        return {
        	auctionP:true,
        	auctionC:false

        }
    },
    methods:{
    	auctionShowFang(){
    		this.auctionP=false;
    		this.auctionC=true;
    	}
    },
    components: {
    	auctionPop,
    	auctionContent
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