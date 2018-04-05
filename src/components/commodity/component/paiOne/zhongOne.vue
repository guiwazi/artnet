<template>
  <div class="landscape">
    <div class="nav">
      <div class="nav-left">
        <img src="../../images/paiOne-one/logo.png" height="100" width="100" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder="作品/作者" style="width:300px;float:left;margin:20px 0 0 0;">
        <el-button type="primary" style="float:left;height:30px; width:100px;border-radius:0;border-left:none;margin:20px 0 0 0;">搜索</el-button>
      </div>
    </div>
    <div class="landscape-page" style="margin-top:20px">
      <ul>
        <li @click="tiaoshangping()">
          <div>
            <img src="../../images/paiOne-one/001.jpg" alt="">
            <h2>安泉岭-川江晨曲</h2>
            <p>当前价:&nbsp;<span>￥65000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/002.jpg" alt="">
            <h2>安泉岭-云瀑高秋</h2>
            <p>当前价:&nbsp;<span>￥25000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div><img src="../../images/paiOne-one/003.jpg" alt="">
            <h2>凤墨石-松山太庙</h2>
            <p>当前价:&nbsp;<span>￥9000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/004.jpg" alt="">
            <h2>郭传璋-黄山松岭</h2>
            <p>当前价:&nbsp;<span>￥3000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="landscape-page">
      <ul>
        <li>
          <div>
            <img src="../../images/paiOne-one/005.jpg" alt="">
            <h2>郭传璋-漓江帆影</h2>
            <p>当前价:&nbsp;<span>￥2000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/006.jpg" alt="">
            <h2>郭立成-清江帆影</h2>
            <p>当前价:&nbsp;<span>￥1000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div><img src="../../images/paiOne-one/007.jpg" alt="">
            <h2>郭立成-山里人家</h2>
            <p>当前价:&nbsp;<span>￥5000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/008.jpg" alt="">
            <h2>何棣-家在青山碧水间</h2>
            <p>当前价:&nbsp;<span>￥5000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="landscape-page">
      <ul>
        <li>
          <div>
            <img src="../../images/paiOne-one/009.jpg" alt="">
            <h2>何棣-千峰竞秀</h2>
            <p>当前价:&nbsp;<span>￥500</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/010.jpg" alt="">
            <h2>黄玉堂-春山佳韵</h2>
            <p>当前价:&nbsp;<span>￥800</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div><img src="../../images/paiOne-one/011.jpg" alt="">
            <h2>黄玉堂-峡江岫润</h2>
            <p>当前价:&nbsp;<span>￥600</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/012.jpg" alt="">
            <h2>蒋大卫-春山帆影</h2>
            <p>当前价:&nbsp;<span>￥1000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
      </ul>
    </div>
     <div class="landscape-page">
      <ul>
        <li>
          <div>
            <img src="../../images/paiOne-one/013.jpg" alt="">
            <h2>蒋大卫-鸿运当头</h2>
            <p>当前价:&nbsp;<span>￥3000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/014.jpg" alt="">
            <h2>李明久-春山图</h2>
            <p>当前价:&nbsp;<span>￥500</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div><img src="../../images/paiOne-one/015.jpg" alt="">
            <h2>李明久-江南水乡</h2>
            <p>当前价:&nbsp;<span>￥1800</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/016.jpg" alt="">
            <h2>苗重安-山水</h2>
            <p>当前价:&nbsp;<span>￥5000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="landscape-page">
      <ul>
        <li>
          <div>
            <img src="../../images/paiOne-one/017.jpg" alt="">
            <h2>石泉-江南新绿</h2>
            <p>当前价:&nbsp;<span>￥300</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/018.jpg" alt="">
            <h2>石泉-山水（四屏）</h2>
            <p>当前价:&nbsp;<span>￥5000</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div><img src="../../images/paiOne-one/019.jpg" alt="">
            <h2>王天然-江山多娇</h2>
            <p>当前价:&nbsp;<span>￥500</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
        <li>
          <div>
            <img src="../../images/paiOne-one/020.jpg" alt="">
            <h2>王天然-紫气东来</h2>
            <p>当前价:&nbsp;<span>￥500</span></p>
            <p>下线时间: 2018-03-26 14:30:00</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    // 跳转到商品详情
    tiaoshangping(){
      this.$router.push({path:"/integralMall"});
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.landscape {
  width: 80%;
  margin: 0 auto;
  .nav {
    width: 100%;
    margin: 10px auto;
    height: 100px;
    .nav-left {
      width: 100px;
      height: 100px;
      float: left;
      margin-left: 4%;

      background-color: blueviolet;
    }
    .search {
      width: 410px;
      margin-right: 20%;
      margin-top: 15px;
      height: 100%;
      float: right;
      input {
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 3px;
        padding-left: 5px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s,
          -webkit-box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s,
          box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }
      input:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(102, 175, 233, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(102, 175, 233, 0.6);
      }
    }
  }
  .landscape-page {
    width: 100%;
    height: 350px;
    ul {
      width: 100%;
      height: 100%;
      li {
        list-style-type: none;
        float: left;
        width: 20%;
        height: 90%;
        margin-left: 4%;
        div {
          width: 100%;
          height: 100%;
          border: 1px solid #dddddd;
          cursor: pointer;
          position: relative;
          .router{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
          }
          img {
            display: block;
            width: 80%;
            height: 60%;
            margin: 0 auto;
            margin-top: 10px;
          }
          h2 {
            width: 100%;
            text-align: center;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #666666;
            height: 30px;
            line-height: 30px;
            margin-top: 30px;
          }
          p {
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: #8b8b8b;
            span {
              font-size: 16px;
              color: #eb1f1f;
              font-weight: bolder;
            }
          }
        }
        div:hover {
          border: 3px solid #ec154e;
        }
      }
    }
  }
}
</style>