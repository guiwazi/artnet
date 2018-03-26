<template>
    <div class="sim-inter-info-zhuce">
        <div class="pop-inner-zhuce">
            <div class="pop-inner-view-zhuce">
                <div class="pop-inner-view-title-zhuce">登录页面</div>
                <div class="pop-table-wrapper-zhuce">
                	<ul class="zhuce-ul">
                		<li class="zhuce-ul-li">
                			<span class="zhuce-ul-li-span zhuce-all-span">用户名</span>
                                <el-autocomplete
                                  class="inline-input el-input-1"
                                  v-model="state1"
                                  :fetch-suggestions="querySearch"
                                  placeholder="请输入手机号或邮箱"
                                  :trigger-on-focus="false"
                                  @select="handleSelect"
                                  style="top:-40px;left:60px;"
                                ></el-autocomplete>
                		</li>
                		<li class="zhuce-ul-li">
                			<span class="zhuce-ul-li-span zhuce-all-span">密码</span>
							    <el-input v-model="input" style="top:-40px;left:60px;width: 290px;" placeholder="请输入密码"></el-input>
                		</li>
                		<li class="zhuce-ul-li">
                			<span class="zhuce-ul-li-span zhuce-all-span">验证码</span>
							    <el-input v-model="input" style="top:-40px;left:60px;width: 150px;" placeholder="请输入验证码"></el-input>
							    <img :src="imgPath" alt="验证" style="display:block;width:100px;height:40px; float:left;margin:-80px 0 0 240px;" @click="shuaxin()">
                		</li>
                	</ul>
                </div>
                <div class="pop-inner-view-btn-zhuce">
                    <el-button class="btn-zhuce" type="primary" round @click="hidePopzhucezhuce()" style="margin:0 10px 0 0;">取消</el-button>
                    <el-button class="btn-zhuce" type="primary" round @click="zhec()">注册</el-button>
                    <el-button class="btn-zhuce" type="primary" round @click="tiaodenglu()">登陆</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'zhuce',
    data() {
        return {
        	imgPath:'',
        	input: '',
            state1: '',
            radio: '0'
        }
    },
    methods:{
    	// 登陆成功提示
    	tiaodenglu(){
    	   this.$message('登陆成功!');
    	},
    	 // 取消登陆弹窗
    	hidePopzhucezhuce(){
    		this.$emit('closezhu',false);
    	},
    	// 登陆提示
      zhec() {
            this.$emit('closezhu',false);

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
      // 获取接口
        submitForm () {
		    this.$ajax({
		      method: 'get',
		      url: 'http://120.79.194.48:8080/Artnet/user/login',
		   }).then((res) => {
                  this.imgPath=res.data.data[0].url;
              })
				.catch(function (error) {
				console.log(error);
				})

		},
		shuaxin(){
			this.submitForm ();
		}
    },
    components: {
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    created() {
    	this.submitForm ();
    },
    beforeDestroy() {
    }
}
</script>

<style>
.sim-inter-info-zhuce {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 30;
    overflow: auto;
}
.sim-inter-info-zhuce {

}
.pop-inner-zhuce {
    width: 500px;
    max-height:500px;
    margin: 200px auto;
}
.pop-inner-view-zhuce {
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
.pop-inner-view-title-zhuce {
    padding: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background: #49a1ea;
    color: #ffffff;
}
.pop-table-wrapper-zhuce {
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
/*.handle {
    display: flex;
    justify-content: space-around;
}
.cell {
    text-align: center;
    color: #333333;
    padding-left: 11px;
    padding-right: 11px;
}*/
.pop-inner-view-btn-zhuce {
    float: right;
    width: 500px;
    height: auto;
    line-height: 60px;
    padding: 15px 60px 15px 0;
    margin: -30px 0 0 0;
    border-top: 1px solid #e7eaec;
}
.btn-zhuce {
    float: right;
    margin-right: 60px;
}
.x-btn-zhuce {
    display: inline-block;
    float: left;
    width: 32px;
    height: 32px;
    margin-left: 15px;
    margin-top: 5px;
    cursor: pointer;
}
/*content*/
.zhuce-ul{
	width: 430px;
	height:250px;
	float: left;
}
.zhuce-ul-li{
	list-style-type: none;
	width: 380px;
	height: 40px;
/*	background-color: #E8E8E8;*/
	float: left;
	margin: 30px 0 0 20px;
}
/*登陆页面span*/
.zhuce-all-span{
	display: block;
	height: 40px;
	width: 80px;
	color: #333333;
	line-height: 40px;
	font-weight: bold;
	font-size: 16px;
}
.zhuce-all-span-2{
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
