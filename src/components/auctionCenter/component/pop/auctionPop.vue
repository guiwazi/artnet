<template>
    <div class="auction-info">
        <div class="auction-pop-inner">
            <div class="auction-pop-inner-view">
                <div class="auction-pop-inner-view-title">拍卖参与须知</div>
                <div class="auction-pop-table-wrapper">
                	<div class="auction-content">
                		<h3>规则</h3>
                		<ol class="auction-content-ul" type="I">
                			<li class="auction-content-ul-li">为了保证在线用户个人信息的安全，故无法使用在线账户访问拍卖大厅，凡参与使用拍卖大厅的用户须单独注册账号。</li>
                            <li class="auction-content-ul-li">用户只对需要参与的专场交纳保证金，我们为用户提供了支付宝、等多种支付渠道供用户选择。</li>
                            <li class="auction-content-ul-li">拍卖大厅采用即时互动的拍卖方式，第一件拍卖标的结束后，第二件开拍，以此类推。</li>
                            <li class="auction-content-ul-li">已报名的用户如对拍卖标的或拍卖规则有疑问，可在专场开拍前30分钟，小秘书会为您提供相关服务。</li>
                            <li class="auction-content-ul-li">例：上一次价格10000元，此时您出价11000元，可获得（11000-10000）*5=5000积分。</li>
                            <li class="auction-content-ul-li"> 在拍卖过程中，由拍场主持人根据用户最后出价是否达到拍卖标的预设保留价判定该标的成交或流拍。</li>
                            <li class="auction-content-ul-li">所有参与拍卖的标的，完残状况均以图片和描述为准。</li>
                            <li class="auction-content-ul-li">用户对竞拍成功标的的订单完成结算，公司将在两个工作日内发货。</li>
                            <li class="auction-content-ul-li">如有疑问，请拨打电话 010-2131222-2121（上午 9:00-11:00,下午 14:00-17:00）。</li>
                		</ol>
                	</div>
                </div>
                <div class="auction-pop-inner-view-btn">
                    <el-button class="auction-btn" type="primary" round @click="auctionShow()">同意并进入</el-button>
                </div>
            </div>
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
        auctionShow(){
            this.$emit('auctionShow',false,true);
        }
    },
    components: {
    },
    mounted() {

    },
    created() {
    },
    beforeDestroy() {
    }
}
</script>

<style>
.auction-info {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 30;
    overflow: auto;
}

.auction-pop-inner {
    width: 800px;
    max-height:500px;
    margin: 200px auto;
}
.auction-pop-inner-view {
    float: left;
    width: 800px;
    height: 600px;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border-bottom-left-radius:10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}
.auction-pop-inner-view-title {
    padding: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background: #DABD31;
    color: #ffffff;
}
.auction-pop-table-wrapper {

    padding-bottom: 30px;
    width: 800px;
    height: 480px;
    position: relative;

}
.handle {
    display: flex;
    justify-content: space-around;
}
.cell {
    text-align: center;
    color: #333333;
    padding-left: 11px;
    padding-right: 11px;
}
.auction-pop-inner-view-btn {
    float: right;
    width: 800px;
    height: auto;
    line-height: 60px;
    padding: 15px 60px 15px 0;
    margin: -30px 0 0 0;
    border-top: 1px solid #e7eaec;
}
.auction-btn {
    float: right;
    margin-right: 280px;
}
.auction-x-btn {
    display: inline-block;
    float: left;
    width: 32px;
    height: 32px;
    margin-left: 15px;
    margin-top: 5px;
    cursor: pointer;
}
/*内容*/
.auction-content{
	width: 100%;
	height: 450px;
	float: left;
    background-color: #E3F0E7;
}
.auction-content h3{
	float: left;
	margin: 20px 0 0 20px;
}
.auction-content-ul{
	width: 100%;
	height: 450px;
	float: left;
}
.auction-content-ul-li{
	/*list-style-type: none;*/
}
.auction-content-ul-li{
	width: 100%;
	height: 35px;
	margin: 5px 0 0 0;
    line-height: 35px;
    color: #333333;

}
.auction-content-ul-li:hover{
    color: #F61651;
}
</style>
