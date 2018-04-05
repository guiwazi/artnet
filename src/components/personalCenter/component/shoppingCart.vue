<template>
	<!-- 我的拍卖网主页 提交订单 确认订单 -->
  <div class="paitique">
  	<!-- 我的拍卖网组件 -->
    <transition name="el-zoom-in-top">
  	<myAuction v-show="showmyAuction" @tijiaodingdang="showdingdang()"></myAuction>
    </transition>
  	<!-- 提交订单组件 -->
    <transition name="el-zoom-in-top">
  	<tijiao v-show="showTijiao" @tiaozhuanqueren="showqueren()"></tijiao>
    </transition>
  	<!-- 确认订单组件 -->
    <transition name="el-zoom-in-top">
  	<queren v-show="showQueren" @huimyauctong="showmyauction()"></queren>
    </transition>
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
      // 弹窗提交订单页面
      showdingdang(){
        this.showTijiao=true;
        this.showmyAuction=false;
      },
      // 弹窗确认订单页面
      showqueren(){
        this.showQueren=true;
        this.showTijiao=false;
      },
      // 关闭提交 确认订单页面 显示我的拍卖主页
      showmyauction(){
        this.showmyAuction=true;
        this.showTijiao=false;
        this.showQueren=false;
      }

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