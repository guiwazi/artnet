<template>
	<!-- 我是拍卖网主页 -->
  <div class="myAuction">
	  <el-tabs :tab-position="tabPosition" style="height: auto;">
	    <el-tab-pane label="基本信息">
	    	<div class="jibenxinxi">
	    	    <span class="jibenxinxi-span">选择头像</span style="color:#333333;">
	    	    	<ul class="jibenxinxi-ul">
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    		<li class="jibenxinxi-ul-li"><img src="../image/logo.png" height="80" width="80" class="jibenxinxi-ul-li-img" alt=""><span class="jibenxinxi-ul-li-span">艺术网</span></li>
	    	    	</ul>
	    	    	<div class="datouxiang">
						<el-upload
						  class="avatar-uploader"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :before-upload="beforeAvatarUpload">
						  <img v-if="imageUrl" :src="imageUrl" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
						<span class="datouxiang-img">点击+上传头像</span>
	    	    	</div>
	    	    	<ul class="jibenziliao">
	    	    		<li class="jibenziliao-li"><span class="jibenziliao-li-span">昵称</span>
	    	    		    <el-input v-model="input" placeholder="昵称" style="width:280px;float:left;margin:0 0 0 0;"></el-input>
	    	    	    </li>
	    	    		<li class="jibenziliao-li"><span class="jibenziliao-li-span">真实姓名</span>
	    	    			<el-input v-model="input1" placeholder="真实姓名" style="width:280px;float:left;margin:0 0 0 0;"></el-input>
	    	    		</li>
	    	    		<li class="jibenziliao-li"><span class="jibenziliao-li-span">我是</span>
	    	    			  <el-radio v-model="radio" label="1" style="line-height:40px;">男</el-radio>
  							  <el-radio v-model="radio1" label="2" style="line-height:40px;">女</el-radio>
	    	    		</li>
	    	    		<li class="jibenziliao-li"><span class="jibenziliao-li-span">生日</span>
	    	    		    <el-date-picker
						      v-model="data1"
						      type="datetime"
						      placeholder="选择你的生日"
						      style="float:left;margin:0 0 0 -5px;">
						    </el-date-picker>
	    	    		</li>
	    	    		<li class="jibenziliao-li" style="margin:50px 0 0 0;"><span class="jibenziliao-li-span"></span>
	    	    			 <el-button type="primary" style="height:40px;width:80px;margin:0 0 0 100px;">保存</el-button>
	    	    		</li>
	    	    	</ul>
	
	    	</div>
	  </el-tab-pane>
	    <el-tab-pane label="安全设置">
	    	<div class="anquanshezhi">
	    	    <ul class="anquanshezhi-ul">
	    	    	<li class="anquanshezhi-ul-li">
	    	    		<span class="anquanshezhi-ul-li-span">登陆密码</span>
	    	    		<ul class="anquanshezhi-ul-li-ul">
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span">当前密码</span>
	    	    				<el-input v-model="input" placeholder="当前密码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span">新密码</span>
	    	    				<el-input v-model="input" placeholder="新密码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span">确认新密码</span>
	    	    				<el-input v-model="input" placeholder="确认新密码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<el-button type="success" style="float:left;height:40px;width:50px;margin:0 0 0 135px;">确定</el-button>
	    	    				<el-button type="warning" style="float:left;height:40px;width:50px;margin:0 0 0 20px;">取消</el-button>
	    	    			</li>
	    	    		</ul>
	    	    	</li>
	    	    	<li class="anquanshezhi-ul-li">
	    	    		<span class="anquanshezhi-ul-li-span">手机号码</span>
	    	    		<ul class="anquanshezhi-ul-li-ul">
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span">手机号</span>
	    	    				<el-input v-model="input" placeholder="手机号" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-input v-model="input" placeholder="验证码" style="float:left; width:80px;"></el-input>
	    	    				<img :src="imgPathh" alt="验证" style="display:block;width:100px;height:40px; float:left;margin:0 0 0 10px;" >
	    	    				 <el-button plain style="width:80px;height:40px;">获取验证码</el-button>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-input v-model="input" placeholder="输入短信验证码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-button type="success" style="float:left;height:40px;width:50px;margin:0 0 0 25px;">绑定</el-button>
	    	    				<el-button type="warning" style="float:left;height:40px;width:50px;margin:0 0 0 20px;">取消</el-button>
	    	    			</li>
	    	    		</ul>
	    	    	</li>
	    	    	<li class="anquanshezhi-ul-li">
	    	    		<span class="anquanshezhi-ul-li-span">电子邮箱</span>
	    	    		<ul class="anquanshezhi-ul-li-ul">
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-input v-model="input" placeholder="输入短信验证码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-button type="warning" style="float:left;height:40px;width:50px;margin:0 0 0 20px;">取消</el-button>
	    	    			</li>
	    	    		</ul>
	    	    	</li>
	    	    </ul>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="我的订单">
	    	<div class="wodedingdang" style="margin:0 0 0 100px;">
	    	    <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="进行中" name="first">
				    	
				    </el-tab-pane>
				    <el-tab-pane label="全部" name="second">
				    </el-tab-pane>
				    <el-tab-pane label="已完成" name="third">
				    </el-tab-pane>
				    <el-tab-pane label="已取消" name="fourth">
				    </el-tab-pane>
				</el-tabs>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="购物车">
	    	<div class="gouwuche">
	    	    购物车
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="送货地址">
	    	<div class="songhuodizhi">
	    	    送货地址
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="代金券">
	    	<div class="daijinquan">
	    	    代金券
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="常见问题">
	    	<div class="changjianwenti">
	    	    常见问题
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="如何购买">
	    	<div class="ruhegoumai">
	    	    如何购买
	    	</div>
	    </el-tab-pane>
	  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      	tabPosition: 'left',
      	 fileList: [{name: '', url: ''}, {name: '', url: ''}],
      	 input1:'',
      	 input:'',
      	 imageUrl: '',
      	 radio: '1',
      	 radio1: '',
      	 data1:'',
      	 imgPathh:'',
      	 activeName: 'second'
      }
    },
    methods: {
    	// 侧边栏
      handleClick(tab, event) {
        console.log(tab, event);
      },
      // 头像上传
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
}
</script>
<style lang="scss" scoped>
*{
	margin:0;
	padding:0;
}
.myAuction{
	// 基本信息
	.jibenxinxi{
		width:100%;
		height:100%;
		.jibenxinxi-span{
			color:#333333;
			width:100px;
			height:80px;
			font-size:20px;
			display:block;
			float:left;
			margin:10px 0 0 20px;
			font-weight: bold;
		}
		.jibenxinxi-ul{
			width:425px;
			height:265px;
			float:left;
			margin:0 0 0 0;
			.jibenxinxi-ul-li{
			width:80px;
			height:80px;
			margin:5px 5px 0 0;
			float:left;
			list-style-type: none;
			position: relative;
			.jibenxinxi-ul-li-img{
				position: absolute;
				z-index:5;
			}
			.jibenxinxi-ul-li-span{
				position: absolute;
				width:80px;
				height:80px;
				display:block;
				z-index:10;
				top:0;
				background-color: rgba(222, 222,222,0 );
				text-align: center;
				line-height:80px;
				transition: all 0.5s;
				opacity: 0;
				&:hover{
					opacity: 1;
					background-color: rgba(222, 222,222,0.5 );
					color:#F6184E;
					font-weight: bold;
					border-radius:50%;
				}
			}
			}
		}
		.datouxiang{
			width:200px;
			height:250px;
			margin:0 0 0 50px;
			float:left;
			border:1px solid #272727;
		//头像上传样式
		  .avatar-uploader .el-upload {
			    border: 1px dashed #d9d9d9;
			    border-radius: 6px;
			    cursor: pointer;
			    position: relative;
			    overflow: hidden;
			  }
			  .avatar-uploader .el-upload:hover {
			    border-color: #409EFF;
			  }
			  .avatar-uploader-icon {
			    font-size: 28px;
			    color: #8c939d;
			    width: 200px;
			    height: 200px;
			    line-height: 200px;
			    text-align: center;
			  }
			  .avatar {
			    width: 200px;
			    height: 200px;
			    display: block;
			  }
			  .datouxiang-img{
			  	float:left;
			  	width:200px;
			  	height:50px;
			  	line-height:50px;
			  	text-align: center;
			  	color:#4C88E9;
			  	font-weight: bold;
			  }
		}
		// 基本资料修改
		.jibenziliao{
			width:100%;
			height:1000px;
			float:left;
			margin:50px 0 0 20px;
			.jibenziliao-li{
				width:100%;
				height:40px;
				float:left;
				margin:20px 0 0 0;
				list-style-type: none;
				position: relative;
				.jibenziliao-li-span{
					width:80px;
					height:40px;
					float:left;
					line-height:40px;
				}
			    .xiugaimima-ul{
				    width:300px;
					height:300px;
					float:left;
					background-color:red;
					z-index:10;
					position: absolute;
					.xiugaimima-ul-li{
						list-style-type: none;
						}
					}
			}
		}


	}
	// 安全设置
	.anquanshezhi{
		width:100%;
		height:100%;
		.anquanshezhi-ul{
			width:100%;
		    height:100%;
		    float:left;
		    .anquanshezhi-ul-li{
				width:300px;
			    height:280px;
			    list-style-type: none;
			    margin:10px 0 0 10px;
			    .anquanshezhi-ul-li-ul{
					width:400px;
				    height:300px;
				   	.anquanshezhi-ul-li-ul-li{
				   		list-style-type: none;
				   		width:100%;
				   		height:40px;
				   		margin:10px 0 0 0;
				   		.anquanshezhi-ul-li-ul-li-span{
					   		width:80px;
					   		height:40px;
					   		float:left;
					   		line-height:40px;
					   		margin:0 0 0 20px;
				   		}
				   	}
			    }
			    .anquanshezhi-ul-li-span{
					width:80px;
				    height:40px;
				    float:left;
				    display: block;
				    line-height:40px;
				    color:#333333;
				    font-weight: bold;
			    }
		    }
		}

	}
	// 我的订单
	.wodedingdang{
		width:100%;
		height:100%;

	}
	// 购物车
	.gouwuche{
		width:100%;
		height:100%;

	}
	// 送货地址
	.songhuodizhi{
		width:100%;
		height:100%;

	}
	// 代金券
	.daijinquan{
		width:100%;
		height:100%;

	}
	// 常见问题
	.changjianwenti{
		width:100%;
		height:100%;

	}
	// 如何购买
	.ruhegoumai{
		width:100%;
		height:100%;

	}
}

</style>