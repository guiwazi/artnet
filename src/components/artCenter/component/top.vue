<template>
  <div class="top">
    <img src="../images/001.jpg" alt="">
    <div class="top-right">
      <h2>岁月深处有沉香</h2>
      <span>2016-2-29</span>
      <p>许久以前，对于沉香我除了知道其沉于水、价格不菲外一无所知。曾经天真地认为，沉香就是沉香树。一个偶然的机会了解到，原来并不是想象中那样。</p>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.top{
  width: 70%;
  height: 200px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #e7e7e7;
  img{
    width: 35%;
    height: 100%;
  }
  .top-right{
    width: 63%;
    height: 100%;
    float: right;
    h2{
      color: #258fcc;
      line-height: 50px;
    }
    h2:hover{
      text-decoration: underline;
      cursor: pointer;
    }
    span{
      font-size: 10px;
      line-height: 30px;
      color: gray;
    }
    p{
      font-family: "宋体";
      font-size:12px;
      line-height: 30px;
    }
  }
}
</style>