<template>
	<div class="homeMain">
		<el-container>
		<el-header>
			<el-menu
			  :default-active="activeIndex2"
			  class="el-menu-demo"
			  mode="horizontal"
			  @select="handleSelect"
			  background-color="#c7283b"
			  text-color="#fff"
			  active-text-color="#ffd04b"
			  router="true">
			  <el-menu-item index="1">商城首页</el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">拍品分类</template>
			    <el-submenu index="2-1">
			      <template slot="title">中国绘画</template>
			      <el-menu-item index="2-1-1">山水</el-menu-item>
			      <el-menu-item index="2-1-2">花鸟</el-menu-item>
			      <el-menu-item index="2-1-3">人物</el-menu-item>
			      <el-menu-item index="2-1-3">画瓷</el-menu-item>
			    </el-submenu>
			    <el-submenu index="2-2">
			      <template slot="title">书法篆刻</template>
			      <el-menu-item index="2-2-1">楷书</el-menu-item>
			      <el-menu-item index="2-2-2">行书</el-menu-item>
			      <el-menu-item index="2-2-3">隶书</el-menu-item>
			      <el-menu-item index="2-1-3">篆书</el-menu-item>
			      <el-menu-item index="2-1-3">草书</el-menu-item>
			      <el-menu-item index="2-1-3">篆刻</el-menu-item>
			      <el-menu-item index="2-1-3">匾额</el-menu-item>
			      <el-menu-item index="2-1-3">古籍文献</el-menu-item>
			    </el-submenu>
			    <el-submenu index="2-3">
			      <template slot="title">西画雕塑</template>
			      <el-menu-item index="2-3-1">油画</el-menu-item>
			      <el-menu-item index="2-3-2">雕塑</el-menu-item>
			      <el-menu-item index="2-3-3">版画</el-menu-item>
			      <el-menu-item index="2-1-3">影响</el-menu-item>
			      <el-menu-item index="2-1-3">水彩色粉</el-menu-item>
			      <el-menu-item index="2-1-3">其他</el-menu-item>
			    </el-submenu>
			    <el-submenu index="2-4">
			      <template slot="title">古瓷杂顶</template>
			      <el-menu-item index="2-4-1">青花</el-menu-item>
			      <el-menu-item index="2-4-2">彩瓷</el-menu-item>
			      <el-menu-item index="2-4-3">色釉瓷</el-menu-item>
			      <el-menu-item index="2-1-3">外销瓷</el-menu-item>
			      <el-menu-item index="2-1-3">文玩杂顶</el-menu-item>
			      <el-menu-item index="2-1-3">玉器</el-menu-item>
			      <el-menu-item index="2-1-3">金属器</el-menu-item>
			    </el-submenu>
			    <el-submenu index="2-5">
			      <template slot="title">当代工艺</template>
			      <el-menu-item index="2-5-1">竹木牙角</el-menu-item>
			      <el-menu-item index="2-5-2">玉器</el-menu-item>
			      <el-menu-item index="2-5-3">翡翠</el-menu-item>
			      <el-menu-item index="2-1-3">珠宝</el-menu-item>
			      <el-menu-item index="2-1-3">当代陶瓷</el-menu-item>
			      <el-menu-item index="2-1-3">紫砂</el-menu-item>
			      <el-menu-item index="2-1-3">名石</el-menu-item>
			      <el-menu-item index="2-1-3">玛瑙</el-menu-item>
			      <el-menu-item index="2-1-3">琥珀蜜蜡</el-menu-item>
			      <el-menu-item index="2-1-3">沉香檀香</el-menu-item>
			      <el-menu-item index="2-1-3">金属器</el-menu-item>
			      <el-menu-item index="2-1-3">海外艺术品</el-menu-item>
			      <el-menu-item index="2-1-3">珊瑚</el-menu-item>
			      <el-menu-item index="2-1-3">其他</el-menu-item>
			    </el-submenu>
			    <el-submenu index="2-6">
			      <template slot="title">酒品</template>
			      <el-menu-item index="2-6-1">红酒</el-menu-item>
			      <el-menu-item index="2-6-2">白酒</el-menu-item>
			    </el-submenu>
			  </el-submenu>
			  <el-menu-item index="3">拍卖中心</el-menu-item>
			  <el-submenu index="4">
			    <template slot="title">个人中心</template>
			    <el-menu-item index="4-1">购物车</el-menu-item>
			    <el-menu-item index="4-2">订单查询</el-menu-item>
			    <el-menu-item index="4-3">物流查询</el-menu-item>
			    <el-menu-item index="4-4">会员中心</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="5">艺术新闻</el-menu-item>
			  <el-menu-item index="6">积分商城</el-menu-item>
			  <el-menu-item index="7">优惠卷商城</el-menu-item>
			  <el-menu-item index="7">联系我们</el-menu-item>
				<div class="right-title">
					<ul>
						<li><a href="#">注册</a></li>
						<li><a href="#">登陆</a></li>
					</ul>
				</div>
			</el-menu>

		</el-header>
		<el-main>Main</el-main>
		<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>

  .el-header{
    background-color: #c7283b;
    color: #333;
    text-align: center;
    line-height: 60px;
      // 右上角样式
.right-title{
	width:150px;
   	height:60px;
   	float:right;
   	li{
   		list-style-type: none;
   		float: left;
   		font-size:16px;
   		margin:0 0 0 20px;
   		color:#333333;
   		text-shadow: #D4D4D4 1px 1px 1px;
   		a{
   			color:#333333;
   			text-decoration: none;
   		}
   	}
}


  }
  .el-footer{
    background-color: #DEDEDE;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
// 小图标的样式
.el-icon-arrow-down{
	color:#FFFFFF!important;
}
</style>