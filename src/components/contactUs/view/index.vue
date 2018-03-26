<template>
  <div class="container">
     <div class="nav">
     	<ul>
     		<li><a href="#part1" >关于我们</a></li>
     		<li><a href="#part2" >联系咨询</a></li>
     		<li><a href="#part3" >售后服务</a></li>
     		<li><a href="#part4" >客服热线</a></li>
     		<li><a href="#part5" >开发背景</a></li>
     		<li><a href="#part6" >加入我们</a></li>
     	</ul>
     </div>
     <div class="jianjie">
     	  <div id="part1">
           <p>关于我们</p>
           <p><span>about me</span></p>
           <p>关于我们</p>
           <p><span>about me</span></p>
           <p>关于我们</p>
           <p><span>about me</span></p>
           <p>关于我们</p>
           <p><span>about me</span></p>
           <p>关于我们</p>
           <p><span>about me</span></p>
     	  </div> 
     	  <div id="part2">
           <p>总部地址：重庆市师范大学</p>
           <p><span>电话：11111111111</span></p>
           <p>重庆客户服务：</p>
           <p><span>电话：11111111111</span></p>
           <p>重庆客户服务：</p>
           <p><span>电话：11111111111</span></p>
           <p>重庆客户服务：</p>
           <p><span>电话：11111111111</span></p>
           <p>重庆客户服务：</p>
           <p><span>电话：11111111111</span></p>
     	  </div>
     	  <div id="part3">
           <p>重庆售后服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆售后服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆售后服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆售后服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆售后服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
     	  </div>
     	  <div id="part4">
           <p>重庆客户服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆客户服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆客户服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆客户服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
           <p>重庆客户服务：</p>
           <p><span>地址：重庆市师范大学</span></p>
     	  </div>
     	  <div id="part5">
           <p>开发背景</p>
           <p><span>join us</span></p>
           <p>开发背景</p>
           <p><span>join us</span></p>
           <p>开发背景</p>
           <p><span>join us</span></p>
           <p>开发背景</p>
           <p><span>join us</span></p>
           <p>开发背景</p>
           <p><span>join us</span></p>
     	  </div>
     	  <div id="part6">
           <p>加入我们</p>
           <p><span>join us</span></p>
           <p>加入我们</p>
           <p><span>join us</span></p>
           <p>加入我们</p>
           <p><span>join us</span></p>
           <p>加入我们</p>
           <p><span>join us</span></p>
           <p>加入我们</p>
           <p><span>join us</span></p>
     	  </div>
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
  function opens(obj){
  	for (var i=1;i++;i<=6) {
  		if (i==obj) {
  			document.getElementById("dis"+i).style.display="block"
  		}else 
  		document.getElementById("dis"+i).style.display="none"
  	}
  }
</script>
<style lang="scss" scoped>
.container{
	margin:0 auto;
	width:70%;
	height:50%;
	padding: 10px 0 50px 0;background-color:#e3eaf3;
	}
.nav{ color: #475669;
      width: 10%;
      height: 380PX;
      display: inline-block;
      }
.nav ul{
      	padding: 0;
      	margin: 0;
      }
.nav ul li {list-style: none;
           line-height: 60px;
           width: 93px;
           background-color:#D1DCE9;
           border-bottom: 1px solid #8F9AA7;
           font-size: 15px;
           font-family: "arial, helvetica, sans-serif";
           text-align: center;
           }
.nav ul a{
         text-decoration: none;	
}
.nav ul li a:hover{ color: #FF0000;
                    cursor: pointer;
                    text-decoration: none;
                    }
.jianjie{ margin:0;
	        padding:0;
	        width: 85%;	
	        height: 300PX;
	        overflow: hidden;     
	        display: inline-block;
          margin-left: 110px;
          position: relative;
          top: -370px;
          font-size: medium;
         }
#part1{ text-align: center; font-size: 15px;font-family: "arial, helvetica, sans-serif";}
#part2{ text-align: center; font-size: 15px;font-family: "arial, helvetica, sans-serif";}
#part3{ text-align: center; font-size: 15px;font-family: "arial, helvetica, sans-serif";}
#part4{ text-align: center; font-size: 15px;font-family: "arial, helvetica, sans-serif";}
#part5{ text-align: center; font-size: 15px;font-family: "arial, helvetica, sans-serif";}
#part6{ text-align: center; font-size: 15px;font-family: "arial, helvetica, sans-serif";}
</style>