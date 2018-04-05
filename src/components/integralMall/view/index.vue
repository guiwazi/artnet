<template>
  <div class="whole" @mouseover="move" id="whole">
    <!-- 切换 -->
    <div class="switch" id="switch">
      <ul>
        <li>详情</li>
        <li>生活空间</li>
      </ul>
    </div>
    <!-- 左右 -->
    <div class="turn" id="turn">
      <div class="turn-left">
        <div class="show" @mouseover="glass" id="show">
          <div class="show-img" id="show-img">
            <div class="mark" id="mark"></div>
            <div class="float-box" id="float-box"></div>
            <img src="../images/001.jpg" alt="">
          </div>
          <div class="big-box" id="big-box">
            <img src="../images/001.jpg" alt="">
          </div>
          <div class="show-right">
            <div class="show-right-top">
              <h2>价格</h2>
              <h3>作品信息</h3>
            </div>
            <div class="show-right-dollor">
              <h1>￥2650</h1>
            </div>
            <div class="show-right-switch">
              <p><span></span>装裱</p>
              <p><span></span>艺术家签名</p>
            </div>
            <div class="show-right-small">
              <p>装裱费：免费&nbsp;&nbsp;&nbsp;&nbsp;运费：¥100</p>
              <el-button type="warning" icon="el-icon-star-off" circle style="float:left;margin:10px 0 10px 20px;"@click="shoucang()"></el-button>
            </div>
            <div class="show-right-mall">
              <input type="button" value="加入购物车">
            </div>
          </div>
        </div>
      </div>
      <div class="turn-right">
        <div class="show">
          <timer></timer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timer from '../component/tiMer'
export default {
  data() {
    return {};
  },
  components:{
    timer
  },
  methods: {
     // 收藏成功提示
      shoucang(){
        this.$message('收藏成功！');
      },
    // 顶部切换
    move() {
      var oDiv = document.getElementById("turn");
      var list = document.getElementById("switch").getElementsByTagName("li");
      var timer;
      //封装函数
      function run(offset) {
        oDiv.style.left =
          oDiv.offsetLeft + offset + oDiv.offsetLeft / offset * 10 + "px";
        if (oDiv.offsetLeft >= 0) {
          clearInterval(timer);
          oDiv.style.left = 0;
        }
        if (oDiv.offsetLeft < -oDiv.offsetWidth / 2) {
          clearInterval(timer);
          oDiv.style.left = -oDiv.offsetWidth / 2 + "px";
        }
      }
      list[0].onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
          run(200);
        }, 50);
        this.style.backgroundColor='#2373eb';
        this.style.color='white';
        list[1].style.backgroundColor='white';
        list[1].style.color='black';
      };
      list[1].onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
          run(-200);
        }, 50);
        this.style.backgroundColor='#2373eb';
        this.style.color='white';
        list[0].style.backgroundColor='white';
        list[0].style.color='black';
      };
    },
    // 放大镜
    glass() {
      var turnLeft=document.getElementById('whole');
      var oShow = document.getElementById("show");
      var showImg = document.getElementById("show-img");
      var oMark = document.getElementById("mark");
      var oFloat = document.getElementById("float-box");
      var oBigbox = document.getElementById("big-box");
      var oBigimg = oBigbox.getElementsByTagName("img")[0];
      // 移入移出
      oMark.onmouseover = function() {
        oFloat.style.display = "block";
        oBigbox.style.display = "block";
      };
      oMark.onmouseout = function() {
        oFloat.style.display = "none";
        oBigbox.style.display = "none";
      };
      // 主函数
      oMark.onmousemove = function(ev) {
        var oevent = ev || event;
        var left =oevent.clientX -oShow.offsetLeft -showImg.offsetLeft-turnLeft.offsetLeft-oFloat.offsetWidth / 2;
        var top =oevent.clientY -oShow.offsetTop -showImg.offsetTop -oFloat.offsetHeight / 2 -60;
        // 判断边界点
        if (left < 0) {
          left = 0;
        } else if (left > showImg.offsetWidth - oFloat.offsetWidth) {
          left = showImg.offsetWidth - oFloat.offsetWidth;
        }
        if (top < 0) {
          top = 0;
        } else if (top > showImg.offsetHeight - oFloat.offsetHeight) {
          top = showImg.offsetHeight - oFloat.offsetHeight;
        }
        // 赋值
        oFloat.style.left = left + "px";
        oFloat.style.top = top + "px";
        // 计算放大后的图片位置
        var percentX = (left + oFloat.offsetWidth / 2) / oMark.offsetWidth;
        var percentY = (top + oFloat.offsetHeight / 2) / oMark.offsetHeight;
        oBigimg.style.left =-percentX * oBigimg.offsetWidth + oBigbox.offsetWidth / 2 + "px";
        oBigimg.style.top =-percentY * oBigimg.offsetHeight + oBigbox.offsetHeight / 2 + "px";
      };
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.whole {
  width: 1200px;
  height: 580px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .switch {
    width: 20%;
    height: 30px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    z-index: 1000;
    ul {
      display: block;
      width: 160px;
      height: 100%;
      border-radius: 15px;
      background-color: white;
      li {
        list-style-type: none;
        float: left;
        width: 80px;
        height: 100%;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor:pointer;
        background-color: white;
      }
    }
  }
  .turn {
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .turn-left,
    .turn-right {
      display: block;
      width: 50%;
      height: 100%;
    }
    .show {
      width: 90%;
      height: 80%;
      margin: 0 auto;
      margin-top: 5%;
      position: relative;
      .show-img {
        width: 55%;
        height: 90%;
        display: block;
        position: relative;
        margin-left: 2.5%;
        margin-top: 2.5%;
        border: 2px solid #969696;
        .mark {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1000;
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
        .float-box {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 100;
          width: 160px;
          height: 120px;
          opacity: 0.5;
          background-color: #ffffcc;
        }
      }
      .big-box {
        display: none;
        width: 20%;
        height: 50%;
        position: absolute;
        top: 20%;
        left: 58%;
        overflow: hidden;
        img {
          position: absolute;
          display: block;
          width: 500%;
          height: 500%;
          z-index: 5;
        }
      }
      .show-right {
        width: 40%;
        height: 90%;
        position: absolute;
        right: 0;
        top: 5%;
        .show-right-top {
          position: relative;
          width: 90%;
          height: 50px;
          margin: 0 auto;
          border-bottom: 1px solid #9e9e9e;
          h2 {
            position: absolute;
            height: 40px;
            top: 0;
            left: 0;
            border-bottom: 3px solid black;
            line-height: 40px;
            font-size: 25px;
          }
          h3 {
            position: absolute;
            right: 0;
            line-height: 40px;
            font-size: 25px;
          }
        }
      }
      .show-right-dollor {
        width: 90%;
        height: 80px;
        margin: 0 auto;
        border-bottom: 1px solid #9e9e9e;
        line-height: 80px;
      }
      .show-right-switch {
        width: 90%;
        height: 30px;
        margin: 0 auto;
        border-bottom: 1px solid #9e9e9e;
        line-height: 30px;
        p {
          float: left;
          margin-left: 10px;
          span {
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #408fe9;
            float: left;
            margin-top: 5px;
          }
        }
      }
      .show-right-mall {
        width: 90%;
        height: 40px;
        margin: 0 auto;
        margin-top: 10px;
        input {
          width: 100%;
          height: 100%;
          line-height: 40px;
          text-align: center;
          background-color: black;
          border: none;
          color: white;
          cursor: pointer;
        }
      }
      .show-right-small {
        width: 90%;
        height: 40px;
        margin: 0 auto;
        margin-top: 10px;
        color: gray;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .turn-left {
      float: left;
    }
    .turn-right {
      float: right;
    }
  }
}
</style>