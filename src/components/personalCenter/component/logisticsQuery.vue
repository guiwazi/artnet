<template>
	<!-- 我是确认订单 -->
  <div style="padding-bottom: 24px;">
      <div class="order-header">
          <h2>订单支付</h2>
      </div>
      <div class="order-body">
          <section class="order-info">
                <h4>订单信息</h4>
                <div>
                    <span>订单编号：</span>
                    <span>C0120180328011240</span>
                </div>
              <div>
                  <span>订单金额：</span>
                  <span class="price">￥3,150</span>
              </div>
              <div>
                  <span>收货信息：</span>
                  <span style="display: inline-block; max-width: 340px; vertical-align: top; text-align: justify;">
                      张胜 重庆 重庆市 南岸区 城南新居 17830204515
                  </span>
              </div>
              <div>
                  <span>商品明细：</span>
                  <span></span>
              </div>
              <table border="1px">
                  <tbody>
                  <tr>
                      <th>商品</th>
                      <th>规格</th>
                      <th>数量</th>
                      <th>金额</th>
                  </tr>
                  <tr>
                      <td>
                          <p>赵玉</p>
                          <p>静物</p>

                      </td>
                      <td>
                          <p>布面油画</p>
                          <p>80x60cm</p>
                          <p>无装裱</p>
                      </td>
                      <td>
                          <p>1</p>
                      </td>
                      <td>
                          <p>&yen;3,050</p>
                          <p>运费：&yen;100</p>
                      </td>
                  </tr>
                  <!---->
                  </tbody>
              </table>

          </section>
          <div class="shutiao"></div>
          <section class="pay-info">
              <h4>选择支付方式</h4>
              <div class="tippay">
                  请在15分钟内完成支付，超时订单自动取消
              </div>
              <div class="payment">
                  <p paytype="2" class="pay-item">
                      <b></b>
                      <span>
                      <img src="../image/pay_weixin.png" alt="微信支付">
                          <i>微信支付</i>
                      </span>推荐微信用户使用，扫二维码在线支付
                  </p>
                  <p paytype="1" class="pay-item">
                      <b></b>
                      <span>
                          <img src="../image/alipay.svg" alt="支付宝支付" />
                          <i>支付宝支付</i>
                      </span>推荐有支付宝账户的用户使用
                  </p>
                  <p paytype="4" class="pay-item">
                      <b></b>
                      <span>
                          <img src="../image/icon_Unionpay.png" alt="银联支付" />
                          <i>银联支付</i>
                      </span>无需开通网银即可实现线上支付
                  </p>

                  <p paytype="3" class="pay-item active">
                      <b></b>
                      <span>
                          <img src="../image/zhuan.svg" alt="转账支付" />
                          <i>转账支付</i>
                      </span>通过您的开户银行或相应的电子银行进行转账
                  </p>
              </div>
              <button class="go_pay">去支付</button>
          </section>
          <div style="clear:both;"></div>

      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
    ul,li,p,h2,a,b,span{
        margin: 0;
        padding: 0;
        color: #000;
        text-decoration: none;
        list-style-type: none;
        font-weight: normal;
    }
    .order-header{
        height: 42px;
        overflow: hidden;
        line-height: 42px;
        margin: 35px 0 40px 0;
        width: 1200px;
        h2{
            padding: 0;
            margin: 0;
            float: left;
            font-size: 30px;
            height: 42px;
            line-height: 42px;
            color: #333;
            letter-spacing: 1.2px;
        }
    }
    .order-body{
        position: relative;
        .order-info{
            width: 460px;
            float: left;
            h4{
                font-size: 22px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: left;
                color: #000000;
                line-height: 30px;
                margin-bottom: 26px;
            }
            div{
                margin-bottom: 10px;
            }
            .price{
                color: rgb(199, 40, 59);
                font-weight: bold;
                font-size: 16px;
            }
            table{
                border: 1px solid #ddd;
                border-collapse: collapse;
                width: 430px;
                tbody{
                    display: table-row-group;
                    vertical-align: middle;
                    border-color: inherit;
                }
                th{
                    height: 30px;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: center;
                    color: #333333;
                }
                td{
                    vertical-align: middle;
                    text-align: center;
                    font-size: 12px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    text-align: center;
                    color: #666666;
                    padding: 7px;
                    p{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                tr:nth-child(1){
                    display: table-row;
                }
                td:nth-child(1){
                    width: 128px;
                }
                td:nth-child(2){
                    width: 132px;
                }
                td:nth-child(3){
                    width: 50px;
                }
                td:nth-child(4){
                    width: 100px;
                }


            }
        }
        .shutiao{
            width: 2px;
            height: 100%;
            background-color: #999;
            position: absolute;
            left: 460px;
        }
        .pay-info{
            width: 718px;
            padding-left: 30px;
            box-sizing: border-box;
            float: left;
            h4{
                font-size: 22px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: left;
                color: #000000;
                line-height: 30px;
                margin-bottom: 26px;
            }
            .tippay{
                font-size: 18px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: left;
                color: #000000;
                margin: 23px 0 10px;
            }

            p.active{
                b{
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                    background-color: #fff;
                    position: relative;
                    cursor: pointer;
                }

            }
            p{
                user-select: none;
                color: #bbb;
                font-size: 12px;
                padding-left: 10px;
                height: 60px;
                b{
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                    background-color: #fff;
                    position: relative;
                    cursor: pointer;
                }
                b:after{
                    display: block;
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    width: 20px;
                    height: 20px;
                    content: '';
                    border: 1px solid #c0c0c0;
                    border-radius: 50%;
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                }
                span{
                    cursor: pointer;
                    vertical-align: middle;
                    display: inline-block;
                    width: 140px;
                    height: 40px;
                    border: 1px solid #333;
                    margin: 0 20px;
                    font-size: 16px;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    border-radius: 4px;
                    -moz-border-radius: 4px;
                    -webkit-border-radius: 4px;
                }
                img{
                    position: relative;
                    top: 6px;
                    width: 28px;
                    height: 28px;
                    border-radius: 4px;
                    -moz-border-radius: 4px;
                    -webkit-border-radius: 4px;
                    margin: 0 10px;
                }
                i{
                    position: relative;
                    top: -2px;
                    color: #333;
                    font-style: normal;
                }

            }
            p.active{
                b{
                    background-color: rgb(199, 40, 59);
                }
                b:after{
                    border: 1px solid rgb(199, 40, 59);
                }
                span{
                border: 2px solid rgb(199, 40, 59);
                }
            }
            .go_pay{
                width: 288px;
                height: 40px;
                background-color: rgb(199, 40, 59);
                border: 0;
                margin: 0;
                padding: 0;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 2px;
                color: #ffffff;
            }

        }
    }
</style>
