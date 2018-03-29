<template>
	<!-- 我的拍卖网主页 提交订单 确认订单 -->
  <div class="paitique">
  	<!-- 我的拍卖网组件 -->
  	<myAuction v-show="showmyAuction"></myAuction>
  	<!-- 提交订单组件 -->
  	<tijiao v-show="showTijiao"></tijiao>
  	<!-- 确认订单组件 -->
  	<queren v-show="showQueren"></queren>
  </div>
</template>
<script>
// 我的拍卖网主页
import myAuction from './myAuction.vue'
// 提交订单
import tijiao from './orderQuery.vue'
// 确认订单
import queren from './logisticsQuery.vue'
  export default {
    data() {
      return {
      	showmyAuction:true,
      	showTijiao:false,
      	showQueren:false
      }
    },
    methods:{
    },
    components: {
    	myAuction,
    	tijiao,
    	queren,

  }
  }
</script>
<style lang="scss" scoped>
.paitique{
	margin:0 auto;
	width:1200px;
	height:100%;
	padding: 10px 0 50px 0;
}
</style>