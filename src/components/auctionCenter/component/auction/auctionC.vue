<template>
	<div class="center">
    <div class="lots" @mouseover="mouse()" id="demo">
      <div class="lots-img">
        <div class="lots-img-box" id="lots-img-box">
          <img src="../../images/000.jpg" alt="" id="img">
          <div class="float-box" id="float-box"></div>
        </div>
        <div class="lots-big" id="big">
          <img src="../../images/000.jpg" alt="" id="img_s">
        </div>
        <div class="switch">
          <div class="switch-left" @click="left">《</div>
          <div class="switch-center">
            <div class="switch-content" id="center" @mouseover="center()">
              <img src="../../images/000.jpg" alt="">
              <img src="../../images/001.jpg" alt="">
              <img src="../../images/002.jpg" alt="">
            </div>
          </div>
          <div class="switch-right" @click="right">》</div>
        </div>
      </div>
      <div class="lots-right">
        <h2>a10565650 建国初 和田玉山水归舟瓦子</h2>
        <div class="timer">
          <h3>预展中</h3>
          <p>距开拍： 0 天 19 时 55 分 45 秒</p>
          <p>开始时间：2018-03-30 19:00:00</p>
        </div>
        <div class="offerCntDivCls">
          出价次数
          <span>0</span>次
        </div>
        <table>
          <tr>
            <td style="color:#a8a8a8">当前价</td>
            <td style="color:#a8a8a8">起拍价</td>
            <td style="color:#a8a8a8">竞价阶梯</td>
          </tr>
          <tr>
            <td style="color: #d40606">5000.00</td>
            <td>5000.00</td>
            <td>200.00</td>
          </tr>
        </table>
        <p class="_p">拍卖方式：英式</p>
        <div class="choose">
          竞买类型
          <el-radio v-model="radio" label="1">常规竞买</el-radio>
          <el-radio v-model="radio" label="2">代理竞买</el-radio>
        </div>
        <div class="myOfferInfoRowCls">
          <p>竞买价</p>
          <div class="priceDivCls">
            <div class="priceDivCls-left" @click="priceup()">-</div>
            <div class="priceDivCls-center">{{offectvalue}}</div>
            <div class="priceDivCls-right" @click="pricedown()">+</div>
          </div>
          <p style="margin-left:10px;">含佣金价:{{priceoffect}}</p>
        </div>
        <div class="cost">
          <p>快速出价</p>
          <div class="cost-left" @click="comeup()">《</div>
          <div class="cost-cneter" id="cost-center">
            <ul>
              <li>{{firstnum}}</li>
              <li>5400</li>
              <li>5600</li>
              <li>5800</li>
              <li>6000</li>
            </ul>
          </div>
          <div class="cost-right" @click="down()">》</div>
        </div>
        <el-button type="danger" class="el-button">确认提价</el-button>
      </div>
      <div class="echarts">
        <div id="main" style="width: 308px;height:302px;"></div>
    </div>
    <div class="el-tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="拍品介绍" name="first" class="el-tab-text">
      <h2>拍品信息</h2>
      <span>年代：建国初</span>
      <span>长度：5.5厘米&nbsp;&nbsp;&nbsp;&nbsp;宽度：5厘米</span>
      <h2>拍品说明</h2>
      <span>注：玉料产地：新疆和田</span>
      <span>带北大宝石鉴定中心证书。</span>
      <span>玉质甜润细腻，醇美凝厚，是难得的新疆和田玉。采用浅浮雕的技法雕山水归舟图，刀法简洁、线条流畅、琢地平滑，具有鲜明的时代特征。保存完好、品相优美，具有较高的收藏价值。</span>
    </el-tab-pane>
    <el-tab-pane label="作者简介" name="second" class="el-tab-text">
      <h2>作者简介</h2>
      <span>无</span>
    </el-tab-pane>
    <el-tab-pane label="最新出价" name="third" class="el-tab-text">
      <h2 style="margin-top:5px;margin-bottom:10px;">已出的竞价(只显示最近10次竞价)</h2>
      <h6>暂时没有出价！</h6>
    </el-tab-pane>
    <el-tab-pane label="勘误信息" name="fourth" class="el-tab-text">
      <span>无</span>
    </el-tab-pane>
  </el-tabs>
    </div>
    </div>
  </div>
</template>
<script>
import img_1 from "../../images/000.jpg";
import img_2 from "../../images/001.jpg";
import img_3 from "../../images/002.jpg";
import echarts from "echarts";
export default {
  data() {
    return {
      radio: "1",
      firstnum: "5000",
      offectvalue: "5000",
      priceoffect: "5500",
      activeName: 'second',
      chart: null,
      // 初始化图表配置
      opinion: ["一月", "二月", "三月", "四月", "五月"],
      opinionData: [
        {
          value: 26,
          name: "一月"
        },
        {
          value: 31,
          name: "二月"
        },
        {
          value: 18,
          name: "三月"
        },
        {
          value: 28,
          name: "四月"
        },
        {
          value: 21,
          name: "五月"
        }
      ]
    };
  },
  methods: {
    // 放大镜
    mouse() {
      var oDemo = document.getElementById("demo");
      var oFloatbox = document.getElementById("float-box");
      var obig = document.getElementById("big");
      var obigimg = obig.getElementsByTagName("img")[0];
      var olost = document.getElementById("lots-img-box");
      olost.onmouseover = function() {
        oFloatbox.style.display = "block";
        obig.style.display = "block";
      };
      olost.onmouseout = function() {
        oFloatbox.style.display = "none";
        obig.style.display = "none";
      };
      olost.onmousemove = function(ev) {
        var oevent = ev || event;
        var left =
          oevent.clientX -
          oDemo.offsetLeft -
          olost.offsetLeft -
          oFloatbox.offsetWidth / 2;
        var top =
          oevent.clientY -
            oDemo.offsetTop -
            olost.offsetTop +
            -oFloatbox.offsetHeight / 2 +
            document.documentElement.scrollTop || document.body.scrollTop;
            // 防止脱出框外
        if (left < 0) {
          left = 0;
        } else if (left > olost.offsetWidth - oFloatbox.offsetWidth) {
          left = olost.offsetWidth - oFloatbox.offsetWidth;
        }
        if (top < 0) {
          top = 0;
        } else if (top > olost.offsetHeight - oFloatbox.offsetHeight) {
          top = olost.offsetHeight - oFloatbox.offsetHeight;
        }
        oFloatbox.style.left = left + "px";
        oFloatbox.style.top = top + "px";
        // 计算放大图片的位置
        var percentX = (left + oFloatbox.offsetWidth / 2) / olost.offsetWidth;
        var percentY = (top + oFloatbox.offsetHeight / 2) / olost.offsetHeight;
        obigimg.style.left =
          -percentX * obigimg.offsetWidth + obig.offsetWidth / 2 + "px";
        obigimg.style.top =
          -percentY * obigimg.offsetHeight + obig.offsetHeight / 2 + "px";
      };
    },
    // 左右切换图片位置
    left() {
      var center = document.getElementById("center");
      center.style.left = 0 + "%";
      if (center.style.left == 0 + "%") {
        center.style.left = 0 + "%";
      }
    },
    right() {
      var center = document.getElementById("center");
      center.style.left = -35 + "%";
      if (center.style.left == -35 + "%") {
        center.style.left = -35 + "%";
      }
    },
    drawGraph(id) {
      // 绘图方法
      this.chart = echarts.init(document.getElementById(id));
      // 皮肤添加同一般使用方式
      this.chart.showLoading();
      // 返回到data中
      var that = this;
      // ajax 请求数据
      $.ajax({
        // 方式
        type: "GET",
        // 是否异步
        async: true,
        // 路径||API
        url: "xxx",
        //返回数据形式为json
        dataType: "json",
        // 加载成功
        success: function(result) {
          // 更新初始数据
          that.opinionData = result;
        },
        // 加载错误
        error: function(errorMsg) {
          // alert("请求数据失败!");
          console.log(errorMsg);
        }
      });
      // set
      this.chart.setOption({
        title: {
          text: "各月浏览的人数",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: this.opinion // 别忘了this
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ["pie"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        series: [
          {
            name: "种类",
            type: "pie",
            // 内圆半径，外圆半径
            radius: [30, 100],
            // 位置，左右，上下
            center: ["50%", "50%"],
            roseType: "area",
            data: this.opinionData // 别忘了this
          }
        ]
      });
      this.chart.hideLoading();
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  components: {},
  mounted() {
    this.$nextTick(function() {
      this.drawGraph("main");
    });
  },
  created() {},
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.center {
  width: 1200px;
  margin: 0 auto;
  margin-top: 10px;
  height: 1000px;
  .lots {
    width: 85%;
    height: 100%;
    position: relative;
    .lots-img {
      width: 460px;
      height: 545px;
      border: 1px solid #dddddd;
      position: relative;
      .lots-img-box {
        margin: 0 auto;
        width: 430px;
        height: 400px;
        margin-top: 15px;
        position: relative;
        z-index: 5;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .float-box {
          width: 100px;
          height: 100px;
          background-color: #cecece;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.6;
          display: none;
          z-index: 10;
        }
      }
      .lots-big {
        width: 380px;
        height: 400px;
        position: absolute;
        left: 450px;
        top: 15px;
        display: none;
        overflow: hidden;
        z-index: 1000;
        img {
          position: absolute;
          display: block;
          width: 300%;
          height: 300%;
        }
      }
      .switch {
        width: 100%;
        height: 130px;
        position: relative;
        .switch-left {
          width: 20px;
          height: 70px;
          position: absolute;
          top: 25px;
          left: 20px;
          background-color: gray;
          z-index: 10;
          cursor: pointer;
          font-size: 20px;
          line-height: 70px;
          text-align: center;
          color: white;
        }
        .switch-right {
          width: 20px;
          height: 70px;
          position: absolute;
          top: 25px;
          right: 20px;
          background-color: gray;
          z-index: 10;
          cursor: pointer;
          font-size: 20px;
          line-height: 70px;
          text-align: center;
          color: white;
        }
        .switch-center {
          width: 80%;
          height: 100%;
          position: relative;
          z-index: 5;
          left: 10%;
          overflow: hidden;
          .switch-content {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            img {
              display: block;
              float: left;
              width: 30%;
              height: 80%;
              margin-top: 3%;
              margin-left: 2.5%;
              cursor: pointer;
            }
          }
        }
      }
    }
    .lots-right {
      width: 52%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      h2 {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        font-weight: 400;
        margin-top: 10px;
      }
      .timer {
        width: 100%;
        height: 60px;
        border: 1px solid #dddddd;
        margin-top: 10px;
        h3 {
          background-color: #d2375f;
          height: 60px;
          width: 60px;
          color: #fff;
          font-family: "微软雅黑";
          font-size: 14px;
          padding-right: 7px;
          padding-left: 8px;
          float: left;
          text-align: center;
          line-height: 60px;
          vertical-align: middle;
        }
        p {
          height: 30px;
          line-height: 30px;
          width: 235px;
          text-indent: 10px;
          color: #989898;
          float: left;
          font-family: "微软雅黑";
          font-size: 12px;
        }
      }
      .offerCntDivCls {
        height: 40px;
        width: 100%;
        line-height: 40px;
        font-size: 12px;
        text-align: left;
        vertical-align: middle;
        border-bottom: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
        margin-top: 20px;
        span {
          color: #d40606;
        }
      }
      table {
        width: 100%;
        height: 80px;
        border: 1px solid #dddddd;
        margin-top: 25px;
        tr {
          width: 100%;
          height: 50%;
          text-align: center;
          border: 1px solid #8a8a8a;
        }
      }
      ._p {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #b9b9b9;
        margin-top: 5px;
      }
      .choose {
        font-size: 12px;
        color: #b1b1b1;
      }
      .myOfferInfoRowCls {
        height: 29px;
        line-height: 29px;
        font-family: "微软雅黑";
        width: 520px;
        font-size: 12px;
        margin-top: 20px;
        color: #999999;
        p {
          font-size: 12px;
          color: #b1b1b1;
          float: left;
        }
        .priceDivCls {
          width: 104px;
          height: 100%;
          float: left;
          margin-left: 10px;
          .priceDivCls-left {
            width: 20px;
            height: 100%;
            line-height: 29px;
            float: left;
            background-color: #999999;
            color: white;
            text-align: center;
            cursor: pointer;
          }
          .priceDivCls-right {
            width: 20px;
            height: 100%;
            line-height: 29px;
            float: left;
            background-color: #999999;
            text-align: center;
            color: white;
            cursor: pointer;
          }
          .priceDivCls-center {
            width: 62px;
            float: left;
            height: 27px;
            text-align: center;
            line-height: 29px;
            border: 1px solid #999999;
          }
        }
      }
      .cost {
        width: 100%;
        height: 60px;
        margin-top: 10px;
        position: relative;
        p {
          height: 60px;
          width: 80px;
          line-height: 60px;
          font-size: 12px;
          color: #b9b9b9;
        }
        .cost-left {
          position: absolute;
          width: 6%;
          height: 50px;
          top: 5px;
          left: 80px;
          background-color: gray;
          cursor: pointer;
          font-size: 20px;
          line-height: 50px;
          text-align: center;
          color: white;
        }
        .cost-right {
          position: absolute;
          width: 6%;
          height: 50px;
          top: 5px;
          right: 0;
          background-color: gray;
          cursor: pointer;
          font-size: 20px;
          line-height: 50px;
          text-align: center;
          color: white;
        }
        .cost-cneter {
          position: absolute;
          width: 74%;
          height: 80%;
          top: 5px;
          left: 110px;
          border: 1px solid #999999;
          ul {
            width: 100%;
            height: 100%;
            li {
              list-style: none;
              float: left;
              width: 20%;
              height: 100%;
              line-height: 48px;
              text-align: center;
              cursor: pointer;
              font-size: 16px;
              color: gray;
            }
            li:hover {
              background-color: orange;
              color: white;
            }
          }
        }
      }
      .el-button {
        width: 200px;
        height: 50px;
        cursor: pointer;
        margin-top: 10px;
        background-color: #d73660;
      }
    }
    .echarts {
      width: 30%;
      height: 300px;
      margin-top: 30px;
      float: left;
    }
    .el-tab {
      width: 60%;
      height: 300px;
      margin-top: 30px;
      float: right;
      .el-tab-text{
        h2{
          font-size: 16px;
        }
        span{
          display: block;
          color: #666666;
        }
      }
    }
  }
}
</style>