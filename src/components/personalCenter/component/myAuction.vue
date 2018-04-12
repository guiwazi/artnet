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
	    	    		    <el-input v-model="inputnichen" placeholder="昵称" style="width:280px;float:left;margin:0 0 0 0;"></el-input>
	    	    	    </li>
	    	    		<li class="jibenziliao-li"><span class="jibenziliao-li-span">真实姓名</span>
	    	    			<el-input v-model="inputname" placeholder="真实姓名" style="width:280px;float:left;margin:0 0 0 0;"></el-input>
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
	    	    			 <el-button type="primary" style="height:40px;width:80px;margin:0 0 0 100px;" @click="jibenxinxibao()">保存</el-button>
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
	    	    				<el-input v-model="input11" placeholder="当前密码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span">新密码</span>
	    	    				<el-input v-model="input22" placeholder="新密码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span">确认新密码</span>
	    	    				<el-input v-model="input33" placeholder="确认新密码" style="float:left; width:250px;"></el-input>
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
	    	    				<el-input v-model="input44" placeholder="手机号" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-input v-model="input55" placeholder="验证码" style="float:left; width:80px;"></el-input>
	    	    				<img :src="imgPathh" alt="验证" style="display:block;width:100px;height:40px; float:left;margin:0 0 0 10px;" >
	    	    				 <el-button plain style="width:80px;height:40px;" @click="getxiugai()">获取验证码</el-button>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-input v-model="input66" placeholder="输入短信验证码" style="float:left; width:250px;"></el-input>
	    	    			</li>
	    	    			<li class="anquanshezhi-ul-li-ul-li">
	    	    				<span class="anquanshezhi-ul-li-ul-li-span"></span>
	    	    				<el-button type="success" style="float:left;height:40px;width:50px;margin:0 0 0 25px;" @click="bangdingphone()">绑定</el-button>
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
	    	    				<el-input v-model="input77" placeholder="输入短信验证码" style="float:left; width:250px;"></el-input>
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
				    	<div class="dingdang">
				    		<div class="dingdang-top-xinxi">
				    		    <span class="dingdang-span">2018-03-28</span>
				    		    <span class="dingdang-span-1">订单编号:  C0120180328011242</span>
				    		</div>
				    		<div class="dingdang-content">
				    			<div class="dingdang-content-one">
				    				<div class="dingdang-content-one-img">
				    					<img src="" alt="">
				    				</div>
				    			</div>
				    			<div class="dingdang-content-two">
				    				<span class="dingdang-content-two-span">争春8, 逄劼龙, 数码版, 100x150cm 版号:3</span>
				    				<span class="dingdang-content-two-span-1" style="margin:110px 0 0 0;">数量：1</span><br>
				    				<span class="dingdang-content-two-span-1">价格：¥6,350</span><br>
				    				<span class="dingdang-content-two-span-1">运费：¥330</span>
				    			</div>
				    			<div class="dingdang-content-three">
				    				<span class="dingdang-content-three-span">已取消</span>
				    				  <el-rate
									    v-model="value2"
									    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
									    style="float:left;margin:220px 0 0 70px">
									  </el-rate>
				    			</div>
				    		</div>
				    	</div>
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
	    	    <span class="gouwuche-span">我的购物车(2)</span>
	    	    <span class="gouwuche-span-2">2018-03-28</span>
	    	    <ul class="gouwuche-ul">
	    	    	<li class="gouwuche-ul-li">
	    	    		<el-radio v-model="radioshang1" style="float:left;margin:70px 0 0 20px;"></el-radio>
	    	    		<img src="" alt="" style="width:120px;height:120px;float:left;margin:20px 0 0 10px; background-color:#36EE9A;">

	    	    		<span class="gouwuche-ul-li-span">桂林山水甲天下</span>
	    	    		<span class="gouwuche-ul-li-span-1">RMB:2510.00</span>
	    	    		<el-button type="danger" icon="el-icon-delete" circle style="flaot:left;width:30px;height:30px;margin:60px 0 0 300px;"></el-button>
	    	    	</li>
	    	    	<li class="gouwuche-ul-li">
	    	    		<el-radio v-model="radioshang2" style="float:left;margin:70px 0 0 20px;"></el-radio>
	    	    		<img src="" alt="" style="width:120px;height:120px;float:left;margin:20px 0 0 10px; background-color:#5D60E5;">
	    	    		<span class="gouwuche-ul-li-span">王者荣耀电玩小子模型</span>
	    	    		<span class="gouwuche-ul-li-span-1">RMB:800.00</span>
	    	    		<el-button type="danger" icon="el-icon-delete" circle style="flaot:left;width:30px;height:30px;margin:60px 0 0 300px;"></el-button>
	    	    	</li>
	    	    </ul>
	    	    <span class="gouwuche-jiage-span">合计RMB:0</span>
	    	     <el-button type="primary" style="width:60px;height:40px;float:right;margin:50px 100px 0 0;" @click="tiaotijiao()">结算</el-button>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="收货地址">
	    	<div class="songhuodizhi">
	    	    <div class="songhuodizhi-table">
	    	    	<transition name="el-zoom-in-top">
	    	    	<span class="songhuodizhi-table-span" style="margin:30px 0 0 20px" v-show="morendizhi">{{xingming}}</span>
	    	    	</transition>
	    	    	<transition name="el-zoom-in-top">
	    	    	<span class="songhuodizhi-table-span" v-show="morendizhi">{{dianhua}}</span>
	    	    	</transition>
	    	    	<transition name="el-zoom-in-top">
	    	    	<span class="songhuodizhi-table-span" v-show="morendizhi">{{shouhoudizhi}}</span>
	    	    	</transition>
	    	    	<span class="songhuodizhi-table-span-1">默认地址</span>
	    	    	<el-button style="height:40px;width:50px;float:right;margin:0 50px 0 0;" @click="showxiudi()">修改</el-button>
	    	    	<el-button style="height:40px;width:50px;float:right;margin:0 20px 0 0;" @click="shanchudizhi()">删除</el-button>
	    	    	<el-button style="height:40px;width:50px;float:right;margin:0 20px 0 0;" @click="showxiudi()">新增</el-button>
	    	    </div>
<!-- 修改新增弹窗 -->
			    <div class="sim-inter-info-xinxiu" v-show="xinxiutan">
			        <div class="pop-inner-xinxiu">
			            <div class="pop-inner-view-xinxiu">
			                <div class="pop-inner-view-title-xinxiu">修改新增地址</div>
			                <div class="pop-table-wrapper-xinxiu">
			                	<ul class="pop-table-wrapper-xinxiu-ul">
			                		<li class="pop-table-wrapper-xinxiu-ul-li">
			                			<span class="pop-table-wrapper-xinxiu-ul-li-span">
			                				收货人
			                			</span>
			                			<el-input v-model="inputshouhuoren" placeholder="请输入收货人姓名" style="float:left;width:600px;"></el-input>
			                		</li>
			                		<li class="pop-table-wrapper-xinxiu-ul-li">
			                			<span class="pop-table-wrapper-xinxiu-ul-li-span">
			                				详细地址
			                			</span>
			                			<el-input v-model="inputxiangxidizhi" placeholder="提示:详细到门牌号" style="float:left;width:600px;"></el-input>
			                		</li>
			                		<li class="pop-table-wrapper-xinxiu-ul-li">
			                			<span class="pop-table-wrapper-xinxiu-ul-li-span">
			                				手机号码
			                			</span>
			                			  <el-select v-model="shoujihaomavalue1" placeholder="请选择" style="width:150px;float:left;">
										    <el-option
										      v-for="item in shoujihaomaoptions"
										      :key="item.shoujihaomavalue"
										      :label="item.shoujihaomalabel"
										      :value="item.shoujihaomavalue">
										    </el-option>
										  </el-select>
			                			<el-input v-model="inputshoujihao" placeholder="请输入您的11位手机号" style="float:left;width:450px;"></el-input>
			                		</li>
			                		<li class="pop-table-wrapper-xinxiu-ul-li">
			                			<span class="pop-table-wrapper-xinxiu-ul-li-span">
			                				邮政编码
			                			</span>
			                			<el-input v-model="inputyouzheng" placeholder="请输入您的邮政编码" style="float:left;width:600px;"></el-input>
			                		</li>
			                		<li class="pop-table-wrapper-xinxiu-ul-li">
			                			<span class="pop-table-wrapper-xinxiu-ul-li-span">
			                			</span>
			                			<el-radio v-model="radiomorendizhi" label="1" style="float;padding:13px 0 0 0;">设为默认地址</el-radio>
			                		</li>
			                		<li class="pop-table-wrapper-xinxiu-ul-li">
			                			<span class="pop-table-wrapper-xinxiu-ul-li-span">
			                			</span>
			                			<el-button round @click="tishi()">保存</el-button>
			                			<el-button round @click="closexinzen()">取消</el-button>
			                		</li>
			                	</ul>
			                </div>
			                <div class="pop-inner-view-btn-xinxiu">
			                    <el-button class="btn-xinxiu" type="primary" round @click="closexinzen()">取消</el-button>
			                    <el-button class="btn-xinxiu" type="primary" round style="margin-right:20px;">确定</el-button>
			                </div>
			            </div>
			        </div>
			    </div>
    <!-- 修改新增弹窗 end -->
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="代金券">
	    	<div class="daijinquan">
	    	        <el-table
				      :data="tableData"
				      style="width: 100%">
				      <el-table-column
				        prop="daijinquan"
				        label="代金券"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="begintime"
				        label="生效时间"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="endtime"
				        label="过期时间"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="zhuangtai"
				        label="状态"
				        width="180">
				        <template scope="scope"><el-button type="primary" round >使用</el-button></template>
				      </el-table-column>
				    </el-table>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="常见问题">
	    	<div class="changjianwenti">
	    	    <h3 class="changjianwenti-h3">常见问题</h3>
		    	<span class="changjianwenti-span">
		    		1. 凡在艺网购买的艺术品，均是由艺网独家代理的原创艺术品。每件艺术品均为原版作品。
		    	</span>
		    	<span class="changjianwenti-span">
		    		2. 每件艺术品在上架前，均由艺网的专家团队进行严格的筛选、审核、评定，在品质和价格上具有权威保障
		    	</span>
		    	<span class="changjianwenti-span">
		    		3. 每件从艺网上购买的作品，均会得到高规格的包装和专业的运送。目前，艺网已与艺术品物流公司达成合作。
		    	</span>
		    	<span class="changjianwenti-span">
		    		4. 您可以在艺网网站上浏览每一件在售的艺术品，并直接通过网站完成订购。
		    	</span>
		    	<span class="changjianwenti-span">
		    		5. 您也可以拨打艺网的客服电话400-605-7033进行咨询，或通过页面右侧的在线客服联系我们，让我们帮助您挑选、订购艺术品。
		    	</span>
		    	<span class="changjianwenti-span">
		    		6. 您可选择网上银行或支付宝进行支付。
		    	</span>
		    	<span class="changjianwenti-span">
		    		7. 在您下单后，我们将会同您取得联系，与您沟通艺术品装裱、发货的相关情况。艺术品包装发货后，由艺术品物流公司EES百福东方承运。
		    	</span>
		    	<span class="changjianwenti-span">
		    		8. 除售前已配有画框的艺术品外，艺网暂不提供画框服务。
		    	</span>
		    	<span class="changjianwenti-span">
		    		9. 您在艺网付款下单后，在订单未确认状态下可以取消订单，并获全额退款。您在  选择取消后1个工作日内，我们的客服将与您沟通退款事宜
		    	</span>
		    	<span class="changjianwenti-span">
		    		10. 若支付订单已确认，恕不能取消。
		    	</span>
		    	<span class="changjianwenti-span">
		    		11. 如果您在收货后发现艺术品出现损坏，可以拒收。我们的客服会在1个工作日内与您联系，全额退款（包含运费）。
		    	</span>
		    	<span class="changjianwenti-span">
		    		12. 如果您在签收后发现艺术品破损，恕不接受退换。如有问题请及时与客服沟通。
		    	</span>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="如何购买">
	    	<div class="ruhegoumai">
	    	    <h3 class="ruhegoumai-h3">如何购买</h3>
		    	<span class="ruhegoumai-span">
		    		1. 获得艺网账号只需一个手机号码或邮箱即可完成注册。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		2. 搜索关键字或者艺术家的名字，能找到您想要的艺术品将选中的艺术品放进购物车，以免错过
		    	</span>
		    	<span class="ruhegoumai-span">
		    		3. 通过艺网艺术品搜索器搜索，根据主色调，风格，类别，尺寸对艺网万余件艺术品进行筛选。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		4. 拍下艺术品点击“立刻购买”或者购物车结算，可以提交订单·提交订单前请填写收货地址，确认购物信息·请放心，此时并不会进行扣款。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		5. 艺网支持微信支付和支付宝在线支付。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		6. 收到艺术品，在艺网订单页面点击“确认收货”·对艺术品满意给出评价，如购买过程中遇到问题可以申请退款。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		7. 您在艺网付款下单后，订单在未确认状态下可以取消订单，如果已经支付订单艺网客服会在1个工作日内与您联系退款事宜。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		8. 当客户签收后发现破损，艺网将不再接受退换，如有问题可以与艺网客服联系。
		    	</span>
		    	<span class="ruhegoumai-span">
		    		9. 您在艺网付款下单后，在订单未确认状态下可以取消订单，并获全额退款。您在  选择取消后1个工作日内，我们的客服将与您沟通退款事宜
		    	</span>
		    	<span class="ruhegoumai-span">
		    		10. 由于艺网所售商品特殊，艺网不接受无理由退换货，如果客户有退货要求，需要在收到货5个工作日内提出。
		    	</span>
	    	</div>
	    </el-tab-pane>
	  </el-tabs>

  </div>
</template>
<script>
  export default {
    data() {
      return {
      	// 基本信息
      	inputnichen:'',
      	inputname:'',
      	// 安全设置变量
      	anquanyan:'',
      	input11:'',
      	input22:'',
      	input33:'',
      	input44:'',
      	input55:'',
      	input66:'',
      	input77:'',
      	// 默认的地址
      	xingming:'王维',
      	dianhua:'15025568143',
      	shouhoudizhi:'重庆市渝中区领事巷6号1-4',
      	tabPosition: 'left',
      	disxiudi:true,
      	xiugaiyan:'',
      	radioshang1:'',
      	radioshang2:'',
      	morendizhi:true,
      	fileList: [{name: '', url: ''}, {name: '', url: ''}],
      	inputshouhuoren:'',
      	input:'',
      	imageUrl: '',
      	radio: '1',
      	radio1: '',
      	data1:'',
      	imgPathh:'',
      	activeName: 'second',
      	value2: null,
        xinxiutan:false,
        inputshouhuoren:'',
        inputxiangxidizhi:'',
        shoujihaomavalue:'',
        shoujihaomavalue1:'',
        shoujihaomaoptions: [{
          shoujihaomavalue: '选项1',
          shoujihaomalabel: '中国大陆+86'
        }],
        inputshoujihao:'',
        inputyouzheng:'',
        radiomorendizhi:'',
        // 代金券data
        tableData: [{
            daijinquan: '50(满51使用)',
            begintime: '2018-03-28 13:30:54',
            endtime: '2021-03-28 22:11:07',
            zhuangtai:''
        }, {
            daijinquan: '50(满51使用)',
            begintime: '2018-03-28 13:30:54',
            endtime: '2021-03-28 22:11:07',
            zhuangtai:''
        }, {
            daijinquan: '50(满51使用)',
            begintime: '2018-03-28 13:30:54',
            endtime: '2021-03-28 22:11:07',
            zhuangtai:''
        }, {
            daijinquan: '50(满51使用)',
            begintime: '2018-03-28 13:30:54',
            endtime: '2021-03-28 22:11:07',
            zhuangtai:''
        }]

      }
    },
    methods: {
    	// 基本信息 保存提示
    	jibenxinxibao(){
                let formData = new FormData();
            formData.append('userID', this.inputnichen,'token', this.inputname);
             let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
             this.$ajax.post('http://120.79.194.48:8080/Artnet/user/info/uphe', formData, config).then((res) => {
                if(res.data.error == 0){
                    alert(res.data.msg);
                }
              })
                .catch(function () {
                console.log();
                })
    	},
    	// 安全设置 修改密码 获取验证码
        getxiugai () {
            this.$ajax({
              method: 'get',
              url: 'http://120.79.194.48:8080/Artnet/user/register',
           }).then((res) => {
            if(res.data.error == 0){
                this.imgPathh = res.data.data[0].imageCode[0].url;
                this.xiugaiyan=res.data.data[0].imageCode[0].code;
            }
              })
                .catch(function (error) {
                console.log(error);
                })
                this.chuanzhanghao();

        },
        	// 向手机发送验证码
        chuanzhanghao() {
            let formData = new FormData();
            formData.append('verifyData', this.input44);
             let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
             this.$ajax.post('http://120.79.194.48:8080/Artnet/user/verify', formData, config).then((res) => {
                if(res.data.error == 0){
                    this.anquanyan=res.data.data[0].mailCode;
                }
              })
                .catch(function () {
                console.log();
                })
           },
        // 安全设置 手机号码
        bangdingphone(){
        	if(this.xiugaiyan ==this.input55 ){
        		this.$message('验证成功!');
        		if(this.anquanyan==this.input66){
        			this.$message('绑定成功!');
        		}
        		else{
        			this.$message('手机验证码错误');
        		}
        	}
        	else{
                this.$message('验证码错误');
        	}
        	},
    	// 跳转到提交订单页面
    	tiaotijiao(){
    		this.$emit('tijiaodingdang','true');

    	},
    	// 删除默认地址
    	shanchudizhi(){
    		this.xingming= '暂无';
    		this.shouhoudizhi='暂无';
    		this.dianhua='暂无';

    	},
    	// 新增修改地址提示
    	tishi(){
    		this.xingming = this.inputshouhuoren;
    		this.shouhoudizhi = this.inputxiangxidizhi;
    		this.dianhua = this.inputshoujihao;
    		this.$message('保存成功！');
    		this.xinxiutan=false;
    	},
    	// 地区选择
    	handleChange(value) {
            console.log(value);
        },
    	// 显示新增修改地址弹窗
    	showxiudi(){
    		this.xinxiutan=true;
    	},
    	// 关闭新增修改地址弹窗
    	closexinzen(){
             this.xinxiutan=false;
    	},
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
      },
    components: {
 
    },
  created() {
  },
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
		.dingdang{
			width:800px;
			height:350px;
			float:left;
			.dingdang-top-xinxi{
				width:800px;
				height:50px;
				float:left;
				background-color:#232323;
				.dingdang-span{
					height:50px;
					width:100px;
					float:left;
					color:#FFFFFF;
					line-height:50px;
					display:block;
					text-align: center;
				}
				.dingdang-span-1{
					height:50px;
					width:300px;
					float:left;
					color:#FFFFFF;
					line-height:50px;
					display:block;
					text-align: center;
				}
			}
		.dingdang-content{
			width:800px;
			height:300px;
			float:left;
			.dingdang-content-one{
				width:250px;
			    height:300px;
			    float:left;
			    .dingdang-content-one-img{
			    	width:200px;
			    	height:200px;
			    	float:left;
			    	margin:50px 0 0 10px;
			    	background-color:#DF8282;
			    }

			}
			.dingdang-content-two{
			    width:200px;
			    height:300px;
			    float:left;
			    border-left:1px solid #D3D3D3;
			    padding:0 0 0 30px;
			    .dingdang-content-two-span{
			    	width:200px;
			    	height:100px;
			    	display:block;
			    	float:left;
			    }
			    .dingdang-content-two-span-1{
			    	width:200px;
			    	height:30px;
			    	display:block;
			    	float:left;

			    }
			}
			.dingdang-content-three{
			    width:200px;
			    height:300px;
			    float:right;
			    border-left:1px solid #D3D3D3;
			    .dingdang-content-three-span{
			    	width:200px;
			    	height:30px;
			    	display:block;
			    	float:left;
			    	margin:10px 0 0 140px;
			    }
			}
		}
		}

	}
	// 购物车
	.gouwuche{
		width:910px;
		height:100%;
		.gouwuche-span{
			width:100%;
			height:30px;
			float:left;
			margin:10px 0 0 20px;
			font-weight: bold;
			font-size:20px;
			border-bottom:1px solid #BABABA;
			padding:0 0 5px 0;
		}
		.gouwuche-span-2{
			width:100%;
			height:30px;
			float:left;
			margin:100px 0 0 20px;
			font-size:14px;
		}
		.gouwuche-ul{
		    width:900px;
			height:100%;
			float:left;
			border:1px solid #414141;
			border-bottom:none;
			margin:5px 0 0 20px;
			.gouwuche-ul-li{
				width:100%;
				height:160px;
				border-bottom:1px solid #414141;
				list-style-type: none;
				.gouwuche-ul-li-span{
					width:500px;
					height:30px;
					display:block;
					float:left;
					margin:20px 0 0 20px;
					font-weight: bold;
				}
				.gouwuche-ul-li-span-1{
					width:60px;
					height:30px;
					display:block;
					float:right;
					margin:20px 80px 0 0;
					font-weight: bold;
					backgrounde:red;
				}
			}
		}
		.gouwuche-jiage-span{
			width:500px;
			height:30px;
			font-size:20px;
			color:#F81010;
			font-weight: bold;
			display:block;
			float:left;
			margin:50px 0 0 20px;
		}

	}
	// 送货地址
	.songhuodizhi{
		width:100%;
		height:100%;
		.songhuodizhi-table{
			width:400px;
			height:200px;
			float:left;
			border:2px solid #1B1B1B;
			margin:50px 0 0 20px;
			.songhuodizhi-table-span{
				width:400px;
				height:40px;
				float:left;
				color:#1B1B1B;
				font-weight: bold;
				margin:0 0 0 20px;
			}
			.songhuodizhi-table-span-1{
			    width:60px;
				height:20px;
				float:right;
				font-size:12px;
				font-weight: bold;
				margin:-150px 0 0 0;
				background-color:#1B1B1B;
				color:#FFFFFF;
				display:block;
				text-align: center;
			}
		}
		// 新增修改弹窗样式
		.sim-inter-info-xinxiu {
		    position: fixed;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		    background-color: rgba(0, 0, 0, 0.5);
		    z-index: 30;
		    overflow: auto;
		}
		.sim-inter-info-xinxiu {

		}
		.pop-inner-xinxiu {
		    width: 500px;
		    max-height:500px;
		    margin: 200px auto;
		}
		.pop-inner-view-xinxiu {
		    float: left;
		    width: 750px;
		    height: 500px;
		    font-size: 14px;
		    text-align: left;
		    background-color: #fff;
		    border-bottom-left-radius:10px;
		    border-bottom-right-radius: 10px;
		    border-top-left-radius:10px;
		    border-top-right-radius: 10px;
		    overflow: hidden;
		}
		.pop-inner-view-title-xinxiu {
		    padding: 0;
		    height: 40px;
		    line-height: 40px;
		    text-align: center;
		    font-size: 16px;
		    background: #49a1ea;
		    color: #ffffff;
		}
		.pop-table-wrapper-xinxiu {
		    padding: 15px;
		    padding-bottom: 30px;
		    width: 720px;
		    height: 380px;
		    position: relative;
		    .pop-table-wrapper-xinxiu-ul{
		    	width:720px;
		    	height:380px;
		    	float:left;
		    	.pop-table-wrapper-xinxiu-ul-li{
		    		list-style-type: none;
		    		width:100%;
		    		height:40px;
		    	    margin:20px 0 0 0;
		    		.pop-table-wrapper-xinxiu-ul-li-span{
		    			width:60px;
		    			height:40px;
		    			float:left;
		    			display:block;
		    			line-height:40px;
		    			margin:0 0 0 10px;
		    			color:#333333;

		    		}
		    		.el-cascader{
		    			width:600px;
		    			.el-cascader__label{
		    				left:10px!important;

		    			}
		    		}
		    	}

		    }
		}
		.pop-inner-view-btn-xinxiu {
		    float: right;
		    width: 500px;
		    height: auto;
		    line-height: 60px;
		    padding: 15px 60px 15px 0;
		    margin: -30px 0 0 0;
		    border-top: 1px solid #e7eaec;
		}
		.btn-xinxiu {
		    float: right;
		    margin-right: 0px;
		}
		.x-btn-xinxiu {
		    display: inline-block;
		    float: left;
		    width: 32px;
		    height: 32px;
		    margin-left: 15px;
		    margin-top: 5px;
		    cursor: pointer;
		}
		/*content*/

				// 新增修改弹窗样式 end
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
		.changjianwenti-h3{
			width:100%;
			height:30px;
			float:left;
			margin:10px 0 0 20px;
			border-bottom:1px solid #6E6E6E;
			padding:0 0 10px 0;
		}
		.changjianwenti-span{
			width:95%;
			height:40px;
			display:block;
			float:left;
			line-height:40px;
			margin:5px 0 0 40px;
			transition: all 0.5s;
			&:hover{
				color:#FF0000;
			}
		}

	}
	// 如何购买
	.ruhegoumai{
		width:100%;
		height:100%;
		.ruhegoumai-h3{
			width:100%;
			height:30px;
			float:left;
			margin:10px 0 0 20px;
			border-bottom:1px solid #6E6E6E;
			padding:0 0 10px 0;
		}
		.ruhegoumai-span{
			width:95%;
			height:40px;
			display:block;
			float:left;
			line-height:40px;
			margin:5px 0 0 40px;
			transition: all 0.5s;
			&:hover{
				color:#FFFFFF;
				background-color:#3090D4;
			}
		}

	}
}
</style>