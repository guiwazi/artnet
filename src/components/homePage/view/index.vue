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
        <div class="auction-nav-img" >
            <img src="../images/logo.png" height="60" width="60" alt="" style="border-radius:50px;">
        </div>
        <h1 class="auction-nav-h1">每日一拍 天天精彩</h1>
<!--         <ul class="auction-nav-ul">
          <li class="auction-nav-ul-li"><span class="auction-nav-ul-li-span">2018/3/22线下</span></li>
          <li class="auction-nav-ul-li"><span class="auction-nav-ul-li-span">2018/3/23线下</span></li>
          <li class="auction-nav-ul-li"><span class="auction-nav-ul-li-span">2018/3/24线下</span></li>
        </ul> -->
      </div>
    <div class="auction-content">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>2018/3/22线下 </span>
            <div class="auction-content-span">
              <div class="auction-content-span-one"></div>
              <div class="auction-content-span-two"></div>
              <div class="auction-content-span-three"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="2018/3/23线下"><div class="auction-content-span">
              <div class="auction-content-span-four"></div>
              <div class="auction-content-span-five"></div>
              <div class="auction-content-span-six"></div>
          </div></el-tab-pane>
          <el-tab-pane label="2018/3/24线下"><div class="auction-content-span">
              <div class="auction-content-span-seven">
                <span class="auction-content-span-seven-span">每周荟萃</span>
              </div>
              <div class="auction-content-span-eight">
                <ul class="auction-content-span-eight-ul">
                  <li class="auction-content-span-eight-ul-li"></li>
                  <li class="auction-content-span-eight-ul-li"></li>
                  <li class="auction-content-span-eight-ul-li"></li>
                  <li class="auction-content-span-eight-ul-li"></li>
                </ul>
              </div>
          </div></el-tab-pane>
        </el-tabs>
    </div>
    </div>
    <div class="commodity-show-1">
      <div class="commodity-show-one">
        <span class="commodity-show-one-span">古瓷杂项 | 当代工艺</span>
      </div>
      <div class="commodity-show-1-img">
        <img src="" alt="">
      </div>
      <ul class="commodity-show-one-ul">
        <li class="commodity-show-one-ul-li"></li>
        <li class="commodity-show-one-ul-li"></li>
        <li class="commodity-show-one-ul-li"></li>
      </ul>
      <div class="commodity-show-one-one">
        
      </div>
    </div>
    <div class="commodity-show-2">
      <div class="commodity-show-two">
        <span class="commodity-show-two-span">中国书画</span>
      </div>
      <div class="commodity-show-2-img">
        <img src="" alt="">
      </div>
      <ul class="commodity-show-two-ul">
        <li class="commodity-show-two-ul-li"></li>
        <li class="commodity-show-two-ul-li"></li>
        <li class="commodity-show-two-ul-li"></li>
      </ul>
      <div class="commodity-show-two-two">
        
      </div>
    </div>
    <div class="commodity-show-3">
      <div class="commodity-show-three">
        <span class="commodity-show-three-span">油画雕塑</span>
      </div>
      <div class="commodity-show-3-img">
        <img src="" alt="">
      </div>
      <ul class="commodity-show-three-ul">
        <li class="commodity-show-three-ul-li"></li>
        <li class="commodity-show-three-ul-li"></li>
        <li class="commodity-show-three-ul-li"></li>
      </ul>
      <div class="commodity-show-three-three">
        
      </div>
    </div>
    <div class="recommendation">
      <h3 class="recommendation-h3">推荐专场</h3>
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
// *{
//   margin:0;
//   padding:0;
// }
.container{
	margin:0 auto;
	width:70%;
	height:100%;
	padding: 10px 0 50px 0;
  .banner{
    width:100%;
    height:350px;
    padding:0 0 30px 0;
  }
  .auction{
    width:100%;
    height:530px;
    .auction-nav{
    width:100%;
    height:70px;
    background-color: #4F83F0;
    .auction-nav-img{
      float: left;
      margin: 5px 0 0 10px;

    }
    .auction-nav-h1{
      line-height:70px;
      float: left;
      margin:0 0 0 20px;
      color:#FFFFFF;
    }
    // .auction-nav-ul{
    //   width:35%;
    //   height:30px;

    //   float: right;
    //   line-height:70px;
    //   .auction-nav-ul-li{
    //     list-style-type: none;
    //     float: left;
    //     width:33%;
    //     height:30px;
    //     line-height:30px;
    //     background-color:#62C2F6;
    //     margin:0 0 0 30px;
    //     border:1px solid #DCDCDC;
    //     .auction-nav-ul-li-span{
    //       line-height:30px;
    //       color:#424242;

    //     }
    //   }
    // }
    }
    .auction-content-span{
      width:100%;
      height:350px;
      .auction-content-span-one{
        width:40%;
        height:300px;
        background-color:red;
        float: left;
        margin: 25px 0 0 20px;
      }
      .auction-content-span-two{
        width:25%;
        height:200px;
        background-color:red;
        float: left;
        margin: 75px 0 0 10px;
      }
      .auction-content-span-three{
        width:25%;
        height:200px;
        background-color:red;
        float: left;
        margin: 75px 0 0 30px;
      }
      .auction-content-span-four{
        width:40%;
        height:300px;
        background-color:#0DCF57;
        float: left;
        margin: 25px 0 0 20px;
      }
      .auction-content-span-five{
        width:25%;
        height:200px;
        background-color:#0DCF57;
        float: left;
        margin: 75px 0 0 10px;
      }
      .auction-content-span-six{
        width:25%;
        height:200px;
        background-color:#0DCF57;
        float: left;
        margin: 75px 0 0 30px;
      }
      .auction-content-span-seven{
        width:100%;
        height:80px;
        float: left;
        .auction-content-span-seven-span{
          color: #25D159;
          font-size:50px;
          display: block;
          text-align: center;
        }
      }
      .auction-content-span-eight{
        width:100%;
        height:250px;
        float: left;

        margin:10px 0 0 0 ;
        .auction-content-span-eight-ul{
          width:100%;
          height:250px;
          float: left;
          margin: 15px 0 0 -40px;
          .auction-content-span-eight-ul-li{
            list-style-type: none;
            float: left;
            width:25%;
            height:250px;
            background-color:#D3D45A;
            margin:-20px 0 0 0;
          }
        }
      }
    }
  }

}
.commodity-show-1{
  width:100%;
  height:340px;
  
  margin:0 0 30px 0;
  border-radius:10px 10px 10px 10px;
  box-shadow: #5DA5F8 2px 2px 2px,#E09D9D -1px -1px 1px;
  .commodity-show-one{
    width:100%;
    height:70px;
    background-color:#5DA5F8;
    border-radius:10px 10px 0 0;
    .commodity-show-one-span{
      line-height:70px;
      margin:0 0 0 20px;
      font-weight: bold;
    }
  }
  .commodity-show-1-img{
    width:30%;
    height:250px;
    float: left;
    margin: 10px 0 0 20px;
    background-color:#5DA5F8;
  }
  .commodity-show-one-ul{
    width:45%;
    height:250px;
    float: left;
    margin:10px 0 0 20px;
  .commodity-show-one-ul-li{
    width:30%;
    height:250px;
    background-color:#5DA5F8;
    float: left;
    margin:0 0 0 10px;
    list-style-type: none;
  }
  }
  .commodity-show-one-one{
    width:15%;
    height:250px;
    float: right;
    background-color:#5DA5F8;
    margin:10px 10px 0 0;
  }
}
.commodity-show-2{
  width:100%;
  height:340px;
  
  margin:0 0 30px 0;
  border-radius:10px 10px 10px 10px;
  box-shadow: #45CC3C 2px 2px 2px,#E09D9D -1px -1px 1px;
  .commodity-show-two{
    width:100%;
    height:70px;
    background-color:#45CC3C;
    border-radius:10px 10px 0 0;
    .commodity-show-two-span{
      line-height:70px;
      margin:0 0 0 20px;
      font-weight: bold;
    }
  }
  .commodity-show-2-img{
    width:30%;
    height:250px;
    float: left;
    margin: 10px 0 0 20px;
    background-color:#45CC3C;
  }
  .commodity-show-two-ul{
    width:45%;
    height:250px;
    float: left;
    margin:10px 0 0 20px;
  .commodity-show-two-ul-li{
    width:30%;
    height:250px;
    background-color:#45CC3C;
    float: left;
    margin:0 0 0 10px;
    list-style-type: none;
  }
  }
  .commodity-show-two-two{
    width:15%;
    height:250px;
    float: right;
    background-color:#45CC3C;
    margin:10px 10px 0 0;
  }
}
.commodity-show-3{
  width:100%;
  height:340px;
  
  margin:0 0 30px 0;
  border-radius:10px 10px 10px 10px;
  box-shadow: #EDC52F 2px 2px 2px,#E09D9D -1px -1px 1px;
  .commodity-show-three{
    width:100%;
    height:70px;
    background-color:#EDC52F;
    border-radius:10px 10px 0 0;
    .commodity-show-three-span{
      line-height:70px;
      margin:0 0 0 20px;
      font-weight: bold;
    }
  }
  .commodity-show-3-img{
    width:30%;
    height:250px;
    float: left;
    margin: 10px 0 0 20px;
    background-color:#EDC52F;
  }
  .commodity-show-three-ul{
    width:45%;
    height:250px;
    float: left;
    margin:10px 0 0 20px;
  .commodity-show-three-ul-li{
    width:30%;
    height:250px;
    background-color:#EDC52F;
    float: left;
    margin:0 0 0 10px;
    list-style-type: none;
  }
  }
  .commodity-show-three-three{
    width:15%;
    height:250px;
    float: right;
    background-color:#EDC52F;
    margin:10px 10px 0 0;
  }

}
  .recommendation{
    width:100%;
    height:250px;
    background-color:#E012E2;
    .recommendation-h3{
      float:left;
      margin:5px 0 0 10px;
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