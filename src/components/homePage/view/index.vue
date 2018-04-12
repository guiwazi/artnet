<template>
	<div class="container">
    <!-- banner部分 -->
    <div class="banner">
    		<el-carousel :interval="2000" type="card" height="350px">
    	    <el-carousel-item v-for="item in tebleImg" :key="item">
    	      <img :src="item" height="350" width="670">
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
              <div class="auction-content-span-one">
                <!-- <img src="../images/meiri-1.jpg" height="300" width="400" alt=""> -->
                <span class="auction-content-span-one-span">{{countDown}}</span>
                <span class="auction-content-span-one-span-1">
                  <h2 style="color:#FFFFFF;float:left;margin:10px 0 0 30px;">寒舍.明清古瓷集专场</h2>
                  <p style="color:#FFFFFF;float:left;margin:5px 0 0 30px; font-size:14px;">开始下线:2018-03-28 15:30:00</p>
                  <p style="color:#FFFFFF;float:left;margin:5px 0 0 30px;font-size:14px;">下线结束:2018-03-28 15:50:00</p>
                </span>
              </div>
              <div class="auction-content-span-two">
                <!-- <img src="../images/meiri-2.jpg" height="250" width="250" alt=""> -->
                <span class="auction-content-span-one-span-2">
                  <h2 style="color:#FFFFFF;text-align: center;line-height:260px;">陶瓷专场</h2>
                </span>
              </div>
              <div class="auction-content-span-three">
                <!-- <img src="../images/meiri-3.jpg"  height="250" width="250" alt=""> -->
                <span class="auction-content-span-one-span-3">
                  <h2 style="color:#FFFFFF;text-align: center;line-height:260px;">书法专场</h2>
                </span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="2018/3/23线下"><div class="auction-content-span">
              <div class="auction-content-span-one1">
                <!-- <img src="../images/meiri-1.jpg" height="300" width="400" alt=""> -->
                <span class="auction-content-span-one-span">{{countDown}}</span>
                <span class="auction-content-span-one-span-11">
                  <h2 style="color:#FFFFFF;float:left;margin:10px 0 0 30px;">寒舍.明清古瓷集专场</h2>
                  <p style="color:#FFFFFF;float:left;margin:5px 0 0 30px; font-size:14px;">开始下线:2018-03-28 15:30:00</p>
                  <p style="color:#FFFFFF;float:left;margin:5px 0 0 30px;font-size:14px;">下线结束:2018-03-28 15:50:00</p>
                </span>
              </div>
              <div class="auction-content-span-two1">
                <!-- <img src="../images/meiri-2.jpg" height="250" width="250" alt=""> -->
                <span class="auction-content-span-one-span-22">
                  <h2 style="color:#FFFFFF;text-align: center;line-height:260px;">陶瓷专场</h2>
                </span>
              </div>
              <div class="auction-content-span-three1">
                <!-- <img src="../images/meiri-3.jpg"  height="250" width="250" alt=""> -->
                <span class="auction-content-span-one-span-33">
                  <h2 style="color:#FFFFFF;text-align: center;line-height:260px;">书法专场</h2>
                </span>
              </div>
          </div></el-tab-pane>
          <el-tab-pane label="2018/3/24线下"><div class="auction-content-span">
              <div class="auction-content-span-seven">
                <span class="auction-content-span-seven-span">每周荟萃</span>
              </div>
              <div class="auction-content-span-eight">
                <ul class="auction-content-span-eight-ul">
                  <li class="auction-content-span-eight-ul-li" style="margin-left:-5px;">
                    <img src="../images/010.jpg" height="250" width="280" alt="">
                  </li>
                  <li class="auction-content-span-eight-ul-li">
                    <img src="../images/011.jpg" height="250" width="280" alt="">
                  </li>
                  <li class="auction-content-span-eight-ul-li">
                    <img src="../images/012.jpg" height="250" width="280" alt="">
                  </li>
                  <li class="auction-content-span-eight-ul-li">
                    <img src="../images/013.jpg" height="250" width="280" alt="">
                  </li>
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
        <img src="../images/banner-7.jpg" height="250" width="250" alt="">
      </div>
      <ul class="commodity-show-one-ul">
        <li class="commodity-show-one-ul-li">
          <img src="../images/001.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：青花花鸟六棱直颈瓶</span>
          <span class="commodity-show-one-ul-li-span-1">朝代：明朝</span>
        </li>
        <li class="commodity-show-one-ul-li">
          <img src="../images/002.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称： 青花山水人物方瓷板</span>
          <span class="commodity-show-one-ul-li-span-1">朝代：清嘉庆（官）</span>
        </li>
        <li class="commodity-show-one-ul-li">
          <img src="../images/003.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span"> 名称：哥釉粉彩刀马人物纹大赏瓶</span>
          <span class="commodity-show-one-ul-li-span-1">朝代：清同治</span>
        </li>
      </ul>
      <div class="commodity-show-one-one">
        <span class="commodity-show-one-one-1">珍赏斋精品瓷杂专场</span>
        <span class="commodity-show-one-one-1">炳德堂精品瓷器杂项专场</span>
        <span class="commodity-show-one-one-1">品珍阁瓷杂专场</span>
        <span class="commodity-show-one-one-1">小雅轩--精品瓷器专场</span>
        <span class="commodity-show-one-one-1">当代实力派中青年名家作品</span>
        <span class="commodity-show-one-one-1">小雅轩--天然翡翠摆件专场</span>
      </div>
    </div>
    <div class="commodity-show-2">
      <div class="commodity-show-two">
        <span class="commodity-show-two-span">中国书画</span>
      </div>
      <div class="commodity-show-2-img">
        <img src="../images/004.jpg" height="250" width="250" alt="">
      </div>
      <ul class="commodity-show-one-ul">
        <li class="commodity-show-one-ul-li">
          <img src="../images/005.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：春山帆影</span>
          <span class="commodity-show-one-ul-li-span-1">作者：蒋大卫</span>
        </li>
        <li class="commodity-show-one-ul-li">
          <img src="../images/006.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：江山多娇</span>
          <span class="commodity-show-one-ul-li-span-1">作者：王天然</span>
        </li>
        <li class="commodity-show-one-ul-li">
          <img src="../images/007.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：孙克维</span>
          <span class="commodity-show-one-ul-li-span-1">作者：水乡情</span>
        </li>
      </ul>
      <div class="commodity-show-one-one">
        <span class="commodity-show-one-one-1">执一斋·郭传璋作品专场</span>
        <span class="commodity-show-one-one-1">群英荟萃（三）</span>
        <span class="commodity-show-one-one-1">鼓庐舍藏作品专场</span>
        <span class="commodity-show-one-one-1">墨缘斋藏绘画作品专场</span>
        <span class="commodity-show-one-one-1">孙克维绘画作品专场</span>
        <span class="commodity-show-one-one-1">万象回春--甄选院派名家书</span>
      </div>
    </div>
    <div class="commodity-show-3">
      <div class="commodity-show-three">
        <span class="commodity-show-three-span">油画雕塑</span>
      </div>
      <div class="commodity-show-3-img">
        <img src="../images/banner-5.jpg" height="250" width="250" alt="">
      </div>
      <ul class="commodity-show-one-ul">
        <li class="commodity-show-one-ul-li">
          <img src="../images/008.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：17-18世纪 A.Schouman</span>
          <span class="commodity-show-one-ul-li-span-1">作者：弗雷德里克·梅杰亨德里克</span>
        </li>
        <li class="commodity-show-one-ul-li">
          <img src="../images/banner-6.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：曹阳</span>
          <span class="commodity-show-one-ul-li-span-1">作者：室雅兰香</span>
        </li>
        <li class="commodity-show-one-ul-li">
          <img src="../images/009.jpg" height="180" width="210" alt="" style="float:left;">
          <span class="commodity-show-one-ul-li-span">名称：张明辉</span>
          <span class="commodity-show-one-ul-li-span-1">作者：不能说的秘密</span>
        </li>
      </ul>
      <div class="commodity-show-one-one">
        <span class="commodity-show-one-one-1">守拙出新意</span>
        <span class="commodity-show-one-one-1">山水清音</span>
        <span class="commodity-show-one-one-1">时代印记--版画专题</span>
        <span class="commodity-show-one-one-1">西画老片专场</span>
        <span class="commodity-show-one-one-1">舌尖清味</span>
        <span class="commodity-show-one-one-1"></span>
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
        tebleImg:[imgOne,imgTwo,imgThree,imgFour,imgFive,imgSix],
        countDown:123,

      }
    },
    methods:{
      //带天数的倒计时

    },
    created() {
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
	width:1200px;
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
    background-color: #169E50;
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
    }
    .auction-content-span{
      width:100%;
      height:350px;
      .auction-content-span-one{
        width:37%;
        height:350px;
        background-image: url("../images/meiri-1.jpg");
        float: left;
        margin: 0 0 0 20px;
        .auction-content-span-one-span{
          width:100%;
          height:80px;
          color:#FFFFFF;
          font-size:20px;
          font-weight: bold;
          display:block;
          float: left;
          margin:5px 0 0 10px;
        }
        .auction-content-span-one-span-1{
          width:100%;
          height:100px;
          display:block;
          float: left;
          margin:170px 0 0 0;
        }
      }
      
            .auction-content-span-one1{
        width:37%;
        height:350px;
        background-image: url("../images/meiri-11.jpg");
        float: left;
        margin: 0 0 0 20px;
        .auction-content-span-one-span{
          width:100%;
          height:80px;
          color:#FFFFFF;
          font-size:20px;
          font-weight: bold;
          display:block;
          float: left;
          margin:5px 0 0 10px;
        }
        .auction-content-span-one-span-11{
          width:100%;
          height:100px;
          display:block;
          float: left;
          margin:170px 0 0 0;
        }
      }
      
      
      
      
      
      
      
      .auction-content-span-two{
        width:27%;
        height:280px;
        background-image: url("../images/meiri-2.jpg");
        float: left;
        margin: 30px 0 0 20px;
        .auction-content-span-one-span-2{
          width:100%;
          height:280px;
          display:block;
          float: left;
          margin:100px 0 0 0;
          background-color: rgba(89,89,89,1);
          opacity:0;
          transition: all 0.5s;
          &:hover{
             opacity:1;
             margin:0 0 0 0;
             background-color: rgba(89,89,89,0.5);
          }
         }
      }
      
            .auction-content-span-two1{
        width:27%;
        height:280px;
        background-image: url("../images/meiri-5.jpg");
        float: left;
        margin: 30px 0 0 20px;
        .auction-content-span-one-span-22{
          width:100%;
          height:280px;
          display:block;
          float: left;
          margin:100px 0 0 0;
          background-color: rgba(89,89,89,1);
          opacity:0;
          transition: all 0.5s;
          &:hover{
             opacity:1;
             margin:0 0 0 0;
             background-color: rgba(89,89,89,0.5);
          }
         }
      }
      
           .auction-content-span-three1{
        width:27%;
        height:280px;
        background-image: url("../images/meiri-4.jpg");
        float: left;
        margin: 30px 0 0 20px;
        .auction-content-span-one-span-33{
          width:100%;
          height:280px;
          display:block;
          float: left;
          margin:100px 0 0 0;
          background-color: rgba(89,89,89,1);
          opacity:0;
          transition: all 0.5s;
          &:hover{
             opacity:1;
             margin:0 0 0 0;
             background-color: rgba(89,89,89,0.5);
          }
         }
      }
      
      
      
      
      
      
      
      .auction-content-span-three{
        width:27%;
        height:280px;
        background-image: url("../images/meiri-3.jpg");
        float: left;
        margin: 30px 0 0 20px;
        .auction-content-span-one-span-3{
          width:100%;
          height:280px;
          display:block;
          float: left;
          margin:100px 0 0 0;
          background-color: rgba(89,89,89,1);
          opacity:0;
          transition: all 0.5s;
          &:hover{
             opacity:1;
             margin:0 0 0 0;
             background-color: rgba(89,89,89,0.5);
          }
        }
      }
      .auction-content-span-four{
        width:37%;
        height:360px;
        background-color:#0DCF57;
        float: left;
        margin: 0 0 0 20px;
      }
      .auction-content-span-five{
        width:27%;
        height:280px;
        background-color:#0DCF57;
        float: left;
        margin: 30px 0 0 20px;
      }
      .auction-content-span-six{
        width:27%;
        height:280px;
        background-color:#0DCF57;
        float: left;
        margin: 30px 0 0 20px;
      }
      .auction-content-span-seven{
        width:1200px;
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
        width:1200px;
        height:250px;
        float: left;

        margin:10px 0 0 0 ;
        .auction-content-span-eight-ul{
          width:1200px;
          height:250px;
          float: left;
          margin: 15px 0 0 -40px;
          .auction-content-span-eight-ul-li{
            list-style-type: none;
            float: left;
            width:280px;
            height:250px;
            background-color:#D3D45A;
            margin:-20px 0 0 20px;
          }
        }
      }
    }
  }

}
.commodity-show-1{
  width:1200px;
  height:340px;
  
  margin:0 0 30px 0;
  border-radius:10px 10px 10px 10px;
  box-shadow: #9D9D9D 2px 2px 2px,#DEDEDE -1px -1px 1px;
  .commodity-show-one{
    width:1200px;
    height:70px;
    background-color:#EAEEF7;
    border-radius:10px 10px 0 0;
    .commodity-show-one-span{
      line-height:70px;
      margin:0 0 0 20px;
      font-weight: bold;
    }
  }
  .commodity-show-1-img{
    width:250px;
    height:250px;
    float: left;
    margin: 10px 0 0 10px;
  }
  .commodity-show-one-ul{
    width:680px;
    height:250px;
    float: left;
    margin:10px 0 0 0;
  .commodity-show-one-ul-li{
    width:210px;
    height:250px;
    float: left;
    margin:0 0 0 10px;
    list-style-type: none;
    .commodity-show-one-ul-li-span{
      width:205px;
      height:20px;
      display:block;
      float:left;
      color:#333333;
      font-size:14px;
      border-bottom: #B8B8B8 1px dotted;
      margin:10px 0 0 5px;
      &:hover{
        color:#F52184;
      }
    }
    .commodity-show-one-ul-li-span-1{
      width:205px;
      height:20px;
      display:block;
      float:left;
      color:#333333;
      font-size:14px;
      border-bottom: #B8B8B8 1px dotted;
      margin:10px 0 0 5px;
      &:hover{
        color:#F52184;
      }
    }
  }
  }
  .commodity-show-one-one{
    width:200px;
    height:250px;
    float: left;
    margin:10px 10px 0 0;
    .commodity-show-one-one-1{
      width:180px;
      height:40px;
      float: left;
      display:block;
      font-size:14px;
      line-height:40px;
      color:#333333;
      margin:0 0 0 20px;
      transition: all 0.5s;
      &:hover{
        margin:0 0 0 25px;
        color:#F52184;
      }
    }
  }
}
.commodity-show-2{
  width:1200px;
  height:340px;
  
  margin:0 0 30px 0;
  border-radius:10px 10px 10px 10px;
  box-shadow: #9D9D9D 2px 2px 2px,#DEDEDE -1px -1px 1px;
  .commodity-show-two{
    width:1200px;
    height:70px;
    background-color:#F3FBF1;
    border-radius:10px 10px 0 0;
    .commodity-show-two-span{
      line-height:70px;
      margin:0 0 0 20px;
      font-weight: bold;
    }
  }
  .commodity-show-2-img{
    width:250px;
    height:250px;
    float: left;
    margin: 10px 0 0 20px;
    background-color:#45CC3C;
  }
  .commodity-show-one-ul{
    width:680px;
    height:250px;
    float: left;
    margin:10px 0 0 0;
  .commodity-show-one-ul-li{
    width:210px;
    height:250px;
    float: left;
    margin:0 0 0 10px;
    list-style-type: none;
    .commodity-show-one-ul-li-span{
      width:205px;
      height:20px;
      display:block;
      float:left;
      color:#333333;
      font-size:14px;
      border-bottom: #B8B8B8 1px dotted;
      margin:10px 0 0 5px;
      &:hover{
        color:#F52184;
      }
    }
    .commodity-show-one-ul-li-span-1{
      width:205px;
      height:20px;
      display:block;
      float:left;
      color:#333333;
      font-size:14px;
      border-bottom: #B8B8B8 1px dotted;
      margin:10px 0 0 5px;
      &:hover{
        color:#F52184;
      }
    }
  }
  }
  .commodity-show-one-one{
    width:200px;
    height:250px;
    float: left;
    margin:10px 10px 0 0;
    .commodity-show-one-one-1{
      width:180px;
      height:40px;
      float: left;
      display:block;
      font-size:14px;
      line-height:40px;
      color:#333333;
      margin:0 0 0 20px;
      transition: all 0.5s;
      &:hover{
        margin:0 0 0 25px;
        color:#F52184;
      }
    }
  }

}
.commodity-show-3{
  width:1200px;
  height:340px;
  
  margin:0 0 30px 0;
  border-radius:10px 10px 10px 10px;
  box-shadow: #9D9D9D 2px 2px 2px,#DEDEDE -1px -1px 1px;
  .commodity-show-three{
    width:1200px;
    height:70px;
    background-color:#F7F7E7;
    border-radius:10px 10px 0 0;
    .commodity-show-three-span{
      line-height:70px;
      margin:0 0 0 20px;
      font-weight: bold;
    }
  }
  .commodity-show-3-img{
    width:250px;
    height:250px;
    float: left;
    margin: 10px 0 0 20px;
    background-color:#EDC52F;
  }
  .commodity-show-one-ul{
    width:680px;
    height:250px;
    float: left;
    margin:10px 0 0 0;
  .commodity-show-one-ul-li{
    width:210px;
    height:250px;
    float: left;
    margin:0 0 0 10px;
    list-style-type: none;
    .commodity-show-one-ul-li-span{
      width:205px;
      height:20px;
      display:block;
      float:left;
      color:#333333;
      font-size:14px;
      border-bottom: #B8B8B8 1px dotted;
      margin:10px 0 0 5px;
      &:hover{
        color:#F52184;
      }
    }
    .commodity-show-one-ul-li-span-1{
      width:205px;
      height:20px;
      display:block;
      float:left;
      color:#333333;
      font-size:14px;
      border-bottom: #B8B8B8 1px dotted;
      margin:10px 0 0 5px;
      &:hover{
        color:#F52184;
      }
    }
  }
  }
  .commodity-show-one-one{
    width:200px;
    height:250px;
    float: left;
    margin:10px 10px 0 0;
    .commodity-show-one-one-1{
      width:180px;
      height:40px;
      float: left;
      display:block;
      font-size:14px;
      line-height:40px;
      color:#333333;
      margin:0 0 0 20px;
      transition: all 0.5s;
      &:hover{
        margin:0 0 0 25px;
        color:#F52184;
      }
    }
  }

}
  .recommendation{
    width:1200px;
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