<template>
    <div class="sim-inter-info">
        <div class="pop-inner">
            <div class="pop-inner-view">
                <div class="pop-inner-view-title">注册页面</div>
                <div class="pop-table-wrapper">
                	<ul class="denglu-ul">
                		<li class="denglu-ul-li" style="margin:0 0 0 20px;">
                			<span class="denglu-ul-li-span degnlu-all-span">用户名</span>
                                <el-autocomplete
                                  class="inline-input el-input-1"
                                  v-model="user1"
                                  :fetch-suggestions="querySearch"
                                  placeholder="请输入手机号或邮箱"
                                  :trigger-on-focus="false"
                                  @select="handleSelect"
                                  style="top:-40px;left:60px;"
                                ></el-autocomplete>
                		</li>
                		<li class="denglu-ul-li">
                			<span class="denglu-ul-li-span degnlu-all-span">验证码</span>
							    <el-input v-model="input1" style="top:-40px;left:60px;width: 150px;" placeholder="区分大小写" @click="getzhuce()"></el-input>
							    <img :src="imagesSrc" alt="验证" style="display:block;width:100px;height:40px;background-color:#E4406E; float:left;margin:-80px 0 0 240px;" @click="bianyan()">
                		</li>
                		<li class="denglu-ul-li">
                			<span class="denglu-ul-li-span degnlu-all-span">验证</span>
							    <el-input v-model="input2" style="top:-40px;left:60px;width: 150px;" placeholder="请输入验证"></el-input>
							    <el-button plain style="float:left;margin:-80px 0 0 240px;" @click="chuanzhanghao()">获取验证</el-button>
                		</li>
                		<li class="denglu-ul-li">
                			<span class="denglu-ul-li-span degnlu-all-span">设置密码</span>
							    <el-input v-model="input3" style="top:-40px;left:60px;width: 290px;" placeholder="请输入密码"></el-input>
                		</li>
                		</li>
                		<li class="denglu-ul-li">
                			<span class="denglu-ul-li-span degnlu-all-span">确认密码</span>
							    <el-input v-model="input4" style="top:-40px;left:60px;width: 290px;" placeholder="再次确认密码"></el-input>
                		</li>
                		<li class="denglu-ul-li" style="margin-top:10px;">
                			<el-radio v-model="radio" label="1">是否</el-radio>
                			<span class="denglu-ul-li-span degnlu-all-span-2">我已阅读并同意《艺术品拍卖网规则》</span>
                		</li>
                	</ul>
                </div>
                <div class="pop-inner-view-btn">
                    <el-button class="btn" type="primary" round @click="hidePop()" style="float:right;margin-right:80px;">取消</el-button>
                    <el-button class="btn" type="primary" round @click="openzhuce()">注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sim-inter-info',
    data() {
        return {
        	imagesSrc:'',
        	input1: '',
            input2: '',
            input3: '',
            input4: '',
            username: '',
            radio: '0',
            user1:'',
            //获取的验证码
            huoyan:'',
            // 手机获取的验证码
            shouyan:''
        }
    },
    methods:{
    	    // 取消登陆弹窗
    	hidePop(){
    		this.$emit('close',false,true);
    	},
        // 跳转到登陆页面
        tiaodenglu(){
            this.$emit('close',false,true);
        },

    	// 输入框提示相关
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
	   loadAll() {
	        return [
	          { "value": "@qq.com" },
	          { "value": "@163.com" },
	          { "value": "@baidu.com" },
	          { "value": "@126.com" },
	          { "value": "@Hotmail.com" },
	          { "value": "@gmail.com" }
	        ]
	    },
      handleSelect(item) {
        console.log(item);
      },
      // 点击注册获取验证码
        getzhuce () {
            this.$ajax({
              method: 'get',
              url: 'http://120.79.194.48:8080/Artnet/user/register',
           }).then((res) => {
            if(res.data.error == 0){
                this.imagesSrc=res.data.data[0].imageCode[0].url;
                this.huoyan=res.data.data[0].imageCode[0].code;
            }
              })
                .catch(function (error) {
                console.log(error);
                })

        },
        // post提交表单-账号
        chuanzhanghao() {
            let formData = new FormData();
            formData.append('verifyData', this.user1);
             let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
             this.$ajax.post('http://120.79.194.48:8080/Artnet/user/verify', formData, config).then((res) => {
                if(res.data.error == 0){
                    this.shouyan=res.data.data[0].mailCode;
                }
              })
                .catch(function (error) {
                console.log(error);
                })
           },
           // 刷新验证码
           bianyan(){
            this. getzhuce();
           },
              // post 提交密码
        chuanzhangmi(){
            let formData = new FormData();
            formData.append('username', this.user1);
            formData.append('password', this.input4);
             let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
             this.$ajax.post('http://120.79.194.48:8080/Artnet/user/register', formData, config).then((res) => {
              })
                .catch(function (error) {
                console.log(error);
                })
        },
        // 注册按钮
      openzhuce() {
        // 判断输入条件
        if(this.radio == 1){
            if(this.input1==this.huoyan){
                if(this.input2 == this.shouyan){
                     if(this.input3==this.input4){
                        this.$message('注册成功,请登录!');
                        this.$emit('close',false,true);
                        alert("2222");
                        this.chuanzhangmi();
                     }
                     else{
                        this.$message('两次密码不一致!');
                     }
                }
                else{
                    this.$message('手机或邮箱验证码错误!');
                }

            }
            else{
                this.$message('验证码错误!');
            }
        }
        else{
            this.$message('请勾选规则!');
            this.$emit('close',false,true);
        }
      }

    },
    components: {
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    created() {
        this.getzhuce()
    },
    beforeDestroy() {
    }
}
</script>

<style>
.sim-inter-info {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 30;
    overflow: auto;
}
.sim-inter-info {

}
.pop-inner {
    width: 500px;
    max-height:500px;
    margin: 200px auto;
}
.pop-inner-view {
    float: left;
    width: 500px;
    height: 400px;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border-bottom-left-radius:10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}
.pop-inner-view-title {
    padding: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background: #49a1ea;
    color: #ffffff;
}
.pop-table-wrapper {
    padding: 15px;
    padding-bottom: 30px;
    width: 460px;
    height: 280px;
    position: relative;
}
a {
    color: #49a1ea;
    text-decoration: underline;
    font-size: 14px;
}
a {
    color: #49a1ea;
    text-decoration: underline;
    font-size: 14px;
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
.pop-inner-view-btn {
    float: right;
    width: 500px;
    height: auto;
    line-height: 60px;
    padding: 15px 60px 15px 0;
    margin: -30px 0 0 0;
    border-top: 1px solid #e7eaec;
}
.btn {
    float: right;
    margin-right: 60px;
}
.x-btn {
    display: inline-block;
    float: left;
    width: 32px;
    height: 32px;
    margin-left: 15px;
    margin-top: 5px;
    cursor: pointer;
}
/*content*/
.denglu-ul{
	width: 430px;
	height:250px;
	float: left;
}
.denglu-ul-li{
	list-style-type: none;
	width: 380px;
	height: 40px;
/*	background-color: #E8E8E8;*/
	float: left;
	margin: 8px 0 0 20px;
}
/*登陆页面span*/
.degnlu-all-span{
	display: block;
	height: 40px;
	width: 80px;
	color: #333333;
	line-height: 40px;
	font-weight: bold;
	font-size: 16px;
}
.degnlu-all-span-2{
	display: block;
	height: 40px;
	width: 400px;
	color: #333333;
	line-height: 40px;
	font-size: 14px;
	text-align: center;
	margin: -30px 0 0 0;
}
/*input*/
.el-input{
	margin: 0 0 0 20px;
}
.el-input-1{
	width: 290px;
}

</style>
