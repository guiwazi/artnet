<template>
	<div class="container">
    <!-- banner部分 -->
    <div class="banner">
    		<el-carousel :interval="4000" type="card" height="350px">
    	    <el-carousel-item v-for="item in tebleImg" :key="item">
    	      <img :src="item" >
    	    </el-carousel-item>
    	  </el-carousel>
    </div>
    <!-- 拍卖展示部分 -->
    <div class="auction">
      <div class="auction-nav">
        
      </div>
    </div>
	</div>
</template>
<script>
// 图片引入
import imgOne from '../images/banner-1.jpg'
import imgTwo from '../images/banner-2.jpg'
import imgThree from '../images/banner-3.jpg'
import imgFour from '../images/banner-4.jpg'
import imgFive from '../images/banner-5.jpg'
import imgSix from '../images/banner-6.jpg'
  export default {
    data() {
      return {
        tebleImg:[imgOne,imgTwo,imgThree,imgFour,imgFive,imgSix]

      }
    },

  }
</script>
/**
 * @file 主页  组件
 * @author 王维
 */
<style lang="scss" scoped>
.container{
	margin:0 auto;
	width:70%;
	height:100%;
	padding: 10px 0 50px 0;
  .banner{
    width:100%;
    height:350px;
    padding:0 0 10px 0;
  }
  .auction{
    width:100%;
    height:530px;
    border:1px solid red;
    .auction-nav{
    width:100%;
    height:70px;
    border:1px solid blue;
    }
  }

}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>