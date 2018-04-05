<template>
	<!--提交订 -->
    <div>
        <div class="order-header">
            <h2>订单结算</h2>
        </div>
        <div class="order-body" style="margin-bottom: 100px;">
            <!--左侧商品-->
            <div class="goods-list">
                <h2>商品订单<span class="ware_sum">（3）</span></h2>
                <ul>
                    <li>
                        <div class="left-img">
                            <a class="ware_img" href="/artworks/1mxm1w" target="_blank" style="background-image:url(https://cdn.ywart.com/yw/2017082514404549845dbb641.jpg_small02)"></a>
                        </div>
                        <div class="right-tag">
                            <p class="ware_info">
                                <a class="artist_name">争春8，</a>
                                <a href="/artist/1x0kgq" target="_blank" class="works_name">
                                    逄劼龙,
                                </a>
                                <a class="works_size">100x150cm,</a>
                                <b class="works_sum">x1</b>
                            </p>
                            <p class="ware_frame">
                                <span>版号“3”，</span>
                            </p>
                            <div class="price1">
                                <p><span>运费：¥330  </span><span class="price f_r">¥6,350</span></p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="left-img">
                            <a class="ware_img" href="/artworks/1mxm1w" target="_blank" style="background-image:url(https://cdn.ywart.com/yw/2017082514404549845dbb641.jpg_small02)"></a>
                        </div>
                        <div class="right-tag">
                            <p class="ware_info">
                                <a class="artist_name">争春8，</a>
                                <a href="/artist/1x0kgq" target="_blank" class="works_name">
                                    逄劼龙,
                                </a>
                                <a class="works_size">100x150cm,</a>
                                <b class="works_sum">x1</b>
                            </p>
                            <p class="ware_frame">
                                <span>版号“3”，</span>
                            </p>
                            <div class="price1">
                                <p><span>运费：¥330  </span><span class="price f_r">¥6,350</span></p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="left-img">
                            <a class="ware_img" href="/artworks/1mxm1w" target="_blank" style="background-image:url(https://cdn.ywart.com/yw/2017082514404549845dbb641.jpg_small02)"></a>
                        </div>
                        <div class="right-tag">
                            <p class="ware_info">
                                <a class="artist_name">争春8，</a>
                                <a href="/artist/1x0kgq" target="_blank" class="works_name">
                                    逄劼龙,
                                </a>
                                <a class="works_size">100x150cm,</a>
                                <b class="works_sum">x1</b>
                            </p>
                            <p class="ware_frame">
                                <span>版号“3”，</span>
                            </p>
                            <div class="price1">
                                <p><span>运费：¥330  </span><span class="price f_r">¥6,350</span></p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!--左侧商品  end-->
            <div class="user-info">
                <!--收货地址-->
                <div class="address">
                    <h2>收货地址</h2>
                    <ul>
                        <li class="active">
                            <div class="recepter active">张胜</div>
                            <div class="address-detail">
                                <p class="person-name">张胜</p>
                                <p>重庆 重庆市 南岸区城南新居</p>
                                <p>17830204515</p>
                            </div>
                            <a href="javascript:void(0);" class="s_edit" data-bind="click:$root.editAddr">
                                <img src="https://cdn.ywart.com/material/icon/xg.png" alt="edit">
                            </a>
                            <div style="clear: both;"></div>
                        </li>
                        <li class="">
                            <div class="recepter">张胜</div>
                            <div class="address-detail">
                                <p class="person-name">张胜</p>
                                <p>重庆 重庆市 南岸区城南新居</p>
                                <p>17830204515</p>
                            </div>
                            <a href="javascript:void(0);" class="s_edit" data-bind="click:$root.editAddr">
                                <img src="https://cdn.ywart.com/material/icon/xg.png" alt="edit">
                            </a>
                            <div style="clear: both;"></div>
                        </li>
                        <li class="addNew">
                            <a href="javascript:void(0);" class="insert _add_addrs">
                                <b></b><span>新增收货地址</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--收货地址-->
                <div class="discount">
                    <h2 class="titleheader">使用优惠</h2>
                    <div class="discount-item">
                        <div class="discount-title">
                            <p>代金卷</p>
                            <span>4张可用</span>
                            <b class="shang" id="venter" @click="showVoucher()" style="transform: rotate(0deg);">▲</b>
                        </div>
                        <div class="discount-body" id="voucher" style="display: none;">
                            <ul>
                                <li class="voucherItem">
                                    <div class="tr canuse">
                                        <p class="p1"><span>&yen;</span><span>300</span></p>
                                        <p class="p2"><span>使用条件：</span><span>满9000可用</span></p>
                                        <hr />
                                        <p class="p3">适用于全部(<span>每笔订单限用一张</span>)</p>
                                        <p class="p4">2017-12-12 11:27-2019-03-28 02:02</p>
                                        <img src="https://cdn.ywart.com/Voucher/dbg.png" />
                                    </div>
                                </li>
                                <li class="voucherItem">
                                    <div class="tr canuse">
                                        <p class="p1"><span>&yen;</span><span>300</span></p>
                                        <p class="p2"><span>使用条件：</span><span>满9000可用</span></p>
                                        <hr />
                                        <p class="p3">适用于全部(<span>每笔订单限用一张</span>)</p>
                                        <p class="p4">2017-12-12 11:27-2019-03-28 02:02</p>
                                        <img src="https://cdn.ywart.com/Voucher/dbg.png" />
                                    </div>
                                </li>
                                <li class="voucherItem">
                                    <div class="tr canuse">
                                        <p class="p1"><span>&yen;</span><span>300</span></p>
                                        <p class="p2"><span>使用条件：</span><span>满9000可用</span></p>
                                        <hr />
                                        <p class="p3">适用于全部(<span>每笔订单限用一张</span>)</p>
                                        <p class="p4">2017-12-12 11:27-2019-03-28 02:02</p>
                                        <img src="https://cdn.ywart.com/Voucher/dbg.png" />
                                    </div>
                                </li>
                                <li class="voucherItem">
                                    <div class="tr canuse">
                                        <p class="p1"><span>&yen;</span><span>300</span></p>
                                        <p class="p2"><span>使用条件：</span><span>满9000可用</span></p>
                                        <hr />
                                        <p class="p3">适用于全部(<span>每笔订单限用一张</span>)</p>
                                        <p class="p4">2017-12-12 11:27-2019-03-28 02:02</p>
                                        <img src="https://cdn.ywart.com/Voucher/dbg.png" />
                                    </div>
                                </li>
                                <div style="clear: both;"></div>
                            </ul>

                        </div>
                    </div>

                    <el-input placeholder="如果有其他需求请告诉我们" style="margin:0; border-radius: 1px;">
                        <template slot="prepend">购买备注</template>
                    </el-input>

                </div>
                <div class="result">
                    <h2 class="titleheader">订单总计</h2>
                    <div class="detail">
                        <p>商品金额 <span> ￥  <em>19,450</em></span></p>
                        <p>运费合计 <span> ￥    <em>530</em> </span></p>
                        <p>代金卷抵扣 <span> -￥ <em>530</em> </span></p>
                    </div>
                    <div class="allSub">
                        <div class="sum _sum">
                            <b>合计：</b>
                            <em id="orderAmount">¥19,980</em>
                        </div>
                        <div class="submit">
                            <button type="button" class="submit-button" @click="tiaoqueren()">提交订单</button>
                        </div>
                    </div>
                    <div style="clear: both;"></div>
                </div>
            </div>
            <div style="clear: both;"></div>
        </div>


    </div>
</template>
<script>
    export default {
    data() {
      return {
      }
    },
        methods:{
            // 跳转到确定订单页面
            tiaoqueren(){
                this.$emit('tiaozhuanqueren','true')
            },
          showVoucher(){

            if( $('#venter').hasClass('shang') ){

                $('#voucher').show();
                $('#venter').removeClass('shang').addClass('xia').css('transform','rotate(180deg)');

            } else {

                $('#voucher').hide();
                $('#venter').removeClass('xia').addClass('shang').css('transform','rotate(0deg)');
            }
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
        .goods-list{
            float: left;
            margin-left: 10px;
            width: 450px;
            /*border-right: 2px solid #999;*/
            h2{
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 18px;
            }
            li{
                margin: 0;
                padding: 0;
                display: list-item;
                text-align: -webkit-match-parent;
                list-style-type: none;
                width: 420px;
                overflow: hidden;
                padding-bottom: 14px;
                padding-top: 14px;
                border-bottom: solid 2px #dddddd;
            }
            .left-img{
                float: left;
                .ware_img{
                    display: block;
                    width: 100px;
                    height: 100px;
                    cursor: pointer;
                    background-size: cover;
                    background-position: center;
                }
            }
            .right-tag{
                float: left;
                width: 300px;
                margin-left: 20px;
                .ware_info{
                    line-height: 1.54;
                    .works_sum{
                        font-weight: normal;
                        float: right;
                        font-size: 14px;
                        position: relative;
                        top: 2px;
                    }
                }
                .ware_frame{
                    font-size: 13px;
                    line-height: 1.54;
                    height: 20px;
                }
                .price1{
                    margin-top: 12px;
                    font-size: 14px;
                    .price{
                        display: inline-block;
                        float:right;
                    }
                }
            }


        }
    }
    .user-info{
        float: left;
        width: 688px;
        padding-left: 30px;
        border-left: 2px solid rgb(153, 153, 153);
        .address{
            border-bottom: solid 2px rgb(153, 153, 153);
            h2{
                width: 100%;
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 18px;
                /*margin-top: 18px;*/
            }
            li{
                width: 688px;
                height: 56px;
                border-radius: 1px;
                margin: 0 0 12px 0;
                padding: 6px;
                position: relative;
                overflow: hidden;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                .recepter{
                    width: 110px;
                    height: 44px;
                    border: solid 1px #999999;
                    text-align: center;
                    line-height: 44px;
                    font-size: 16px;
                    color: #666666;
                    float: left;
                    margin-right: 14px;
                }
                .active{
                    border:2px solid rgb(199, 40, 59);
                    color:rgb(199, 40, 59);
                    font-weight: bold;
                }
                p{
                    display: inline-block;
                    width: auto;
                    font-size: 14px;
                    word-wrap: break-word;
                    line-height: 1.29;
                    color: #666666;
                    margin-right: 10px;
                }
                .s_edit{
                    display: none;
                    color: #666;
                    position: absolute;
                    top: 20px;
                    right: 45px;
                    img{
                        width: 15px;
                        height: 15px;
                    }
                }
            }
            .active{
                background: #fcf6f1;
            }
            li:hover{
                background: #fcf6f1;
                .s_edit{
                    display: block;
                }
            }
            .addNew{
                width: 676px;
                margin-left: 6px;
                border: 1px dashed #979797;
                text-align: center;
                border-radius: 2px;
                background: #FFF;
                b{
                    display: inline-block;
                    width: 19px;
                    height: 19px;
                    border-radius: 50%;
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                    margin-right: 10px;
                    background: url(https://cdn.ywart.com/material/icon/sh.png) no-repeat;
                    background-size: 100%;
                    position: relative;
                    top: 4.3px;
                }
                a{
                    font-size: 14px;
                    display: inline-block;
                    color: #666;
                    margin-top: 6px;
                    line-height: 28px;
                    span{
                        color: #666;
                    }
                }
            }
            .addNew:hover{

            }
        }
        .titleheader{
            width: 100%;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 18px;
            margin-top: 18px;
        }
        .discount{
            border-bottom: solid 2px rgb(153, 153, 153);
            padding-bottom: 24px;
            .discount-item{
                padding-bottom: 20px;
                .discount-title{
                    height: 100%;
                    box-sizing: border-box;
                    display: block;
                    line-height: 40px;

                    cursor: pointer;
                    font-weight: bold;
                    position: relative;
                    background-color: #f8f8f8;
                    padding-left: 20px;
                    padding-right: 30px;
                    p{
                        display: inline;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    span{
                        float: right;
                        color: rgb(199, 40, 59);
                        font-size: 14px;
                    }
                    b{
                        position: absolute;
                        right: 10px;
                        top: 0;
                    }
                    .el-input{
                        margin: 0;
                    }
                }

                .discount-body{
                    li{
                        display: block;
                        float: left;
                    }
                    .voucherItem{
                        width: 308px;
                        height: 130px;
                        padding: 20px;
                        border-radius: 4px;
                        background-color: #ffffff;
                        box-shadow: 0 1px 4px 0 #dddddd;
                        padding-bottom: 0;
                        box-sizing: border-box;
                        float: left;
                        position: relative;
                        margin-right: 22px;
                        margin-top: 10px;
                        .canuse{
                            opacity: 1;
                        }
                        p{
                            z-index: 2;
                            position: relative;
                            font-weight: normal;
                            color: #666;
                            font-size: 14px;
                            span{
                                color: #666;
                                font-size: 14px;
                            }
                        }
                        .p1{
                            height: 30px;
                            line-height: 30px;

                            span:nth-child(1){
                                font-size: 20px;
                                font-weight: bold;
                                vertical-align: top;
                                margin-top: -4px;
                                color: rgb(199, 40, 59);
                            }
                            span:nth-child(2){
                                font-size: 30px;
                                font-weight: bold;
                                vertical-align: top;
                                color: rgb(199, 40, 59);
                            }
                        }
                        hr{
                            border: 0;
                            border-bottom: 1px dashed #ddd;
                            z-index: 2;
                            position: relative;
                        }
                        .p4{
                            color: #666;
                            font-size: 14px;
                        }
                        img{
                            position: absolute;
                            width: 101px;
                            height: 70px;
                            top: 32px;
                            right: 12px;
                            opacity: 0.88;
                        }
                    }
                }
            }
        }
        .result{
            width: 688px;

            margin-top: 10px;
            overflow: hidden;
            padding-bottom: 24px;
            position: relative;
            border-bottom: solid 2px rgb(153, 153, 153);
            .detail{
                min-width: 200px;
                float: left;
                p{
                    line-height: 1.57;
                    font-size: 14px;
                    color: #666666;
                    text-align: right;
                    overflow: hidden;
                    em{
                        display: inline-block;
                        padding: 0 3px;
                        font-style: normal;
                        color: #000;
                        font-size: 14px;
                    }
                }
            }
            .allSub{
                position: absolute;
                right: 10px;
                bottom: 24px;
                .sum {
                    color: rgb(199, 40, 59);
                    font-weight: bold;
                    font-size: 20px;
                    margin-bottom: 20px;
                    text-align: right;
                }
                b{
                    font-weight: bold;
                    color: rgb(199, 40, 59);
                }
                button{
                    width: 288px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    display: inline-block;
                    border: 0;
                    font-size: 16px;
                    cursor: pointer;
                    letter-spacing: 2px;
                }
                .submit-button{
                    background-color: rgb(199, 40, 59);
                    border-radius: 2px;
                    color: #ffffff;
                }
            }
        }
    }
</style>
