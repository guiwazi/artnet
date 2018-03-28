<template>
  <el-carousel :interval="5000">
    <el-carousel-item v-for="item in tabImg" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import imgone from '../images/01.jpg'
import imgtwo from '../images/02.jpg'
import imgthree from '../images/03.jpg'
import imgfour from '../images/04.jpg'
import imgfive from '../images/05.jpg'
export default {
  data(){
      return {
          tabImg:[imgone,imgtwo,imgthree,imgfour,imgfive]
      }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel{
    width: 100%;
    height: 120%;
    position: relative;
    top: -10%;
  }
  .el-carousel__container{
      width: 100%;
      height:100%;
    }
    .el-carousel__container img{
      display: block;
      width: 100%;
      height:100%;
    }
</style>