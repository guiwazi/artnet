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
        router="false">
        <el-menu-item index="/home">{{$t('artLang.nameOne')}}</el-menu-item>
        <el-submenu index="/commodity">
          <template slot="title">{{$t('artLang.nameTwo')}}</template>
          <el-submenu index="commodity">
            <template slot="title">中国绘画</template>
            <el-menu-item index="/commodity/paiOne/zhongOne">山水</el-menu-item>
            <el-menu-item index="/commodity/paiOne/zhongTwo">花鸟</el-menu-item>
            <el-menu-item index="/commodity/paiOne/zhongThree">人物</el-menu-item>
            <el-menu-item index="/commodity/paiOne/zhongFour">画瓷</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">书法篆刻</template>
            <el-menu-item index="/commodity/paiTwo/shuOne">楷书</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuTwo">行书</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuThree">隶书</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuFour">篆书</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuFive">草书</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuSix">篆刻</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuSeven">匾额</el-menu-item>
            <el-menu-item index="/commodity/paiTwo/shuEight">古籍文献</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">西画雕塑</template>
            <el-menu-item index="/commodity/paiThree/xiOne">油画</el-menu-item>
            <el-menu-item index="/commodity/paiThree/xiTwo">雕塑</el-menu-item>
            <el-menu-item index="/commodity/paiThree/xiThree">版画</el-menu-item>
            <el-menu-item index="/commodity/paiThree/xiFour">影响</el-menu-item>
            <el-menu-item index="/commodity/paiThree/xiFive">水彩色粉</el-menu-item>
            <el-menu-item index="/commodity/paiThree/xiSix">其他</el-menu-item>
          </el-submenu>
          <el-submenu index="2-4">
            <template slot="title">古瓷杂顶</template>
            <el-menu-item index="/commodity/paiFour/guOne">青花</el-menu-item>
            <el-menu-item index="/commodity/paiFour/guTwo">彩瓷</el-menu-item>
            <el-menu-item index="/commodity/paiFour/guThree">色釉瓷</el-menu-item>
            <el-menu-item index="/commodity/paiFour/guFour">外销瓷</el-menu-item>
            <el-menu-item index="/commodity/paiFour/guFive">文玩杂顶</el-menu-item>
            <el-menu-item index="/commodity/paiFour/guSix">玉器</el-menu-item>
            <el-menu-item index="/commodity/paiFour/guSeven">金属器</el-menu-item>
          </el-submenu>
          <el-submenu index="2-5">
            <template slot="title">当代工艺</template>
            <el-menu-item index="/commodity/paiFive/dangOne">竹木牙角</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangTwo">玉器</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangThree">翡翠</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangFour">珠宝</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangFive">当代陶瓷</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangSix">紫砂</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangSeven">名石</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangEight">玛瑙</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangNine">琥珀蜜蜡</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangTen">沉香檀香</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangEleven">金属器</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangTwelve">海外艺术品</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangThirteen">珊瑚</el-menu-item>
            <el-menu-item index="/commodity/paiFive/dangFourteen">其他</el-menu-item>
          </el-submenu>
          <el-submenu index="2-6">
            <template slot="title">酒品</template>
            <el-menu-item index="/commodity/paiSix/jiuOne">红酒</el-menu-item>
            <el-menu-item index="/commodity/paiSix/jiuTwo">白酒</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="auctionCenter">{{$t('artLang.nameThree')}}</el-menu-item>
        <el-submenu index="/personalCenter">
          <template slot="title">{{$t('artLang.nameFour')}}</template>
          <el-menu-item index="/personalCenter/shoppingCart">购物车</el-menu-item>
          <el-menu-item index="/personalCenter/orderQuery">订单查询</el-menu-item>
          <el-menu-item index="/personalCenter/logisticsQuery">物流查询</el-menu-item>
          <el-menu-item index="/personalCenter/memberCenter">会员中心</el-menu-item>
        </el-submenu>
        <el-menu-item index="/artCenter">{{$t('artLang.nameFive')}}</el-menu-item>
        <el-menu-item index="/integralMall">{{$t('artLang.nameSix')}}</el-menu-item>
        <!-- <el-menu-item index="/preferentialVolumeMall">{{$t('artLang.nameSeven')}}</el-menu-item> -->
        <el-menu-item index="/contactUs">{{$t('artLang.nameEight')}}</el-menu-item>
        <div class="right-title">
          <ul>
            <li><span class="right-title-span" @click="showdenglu()">{{$t('artLang.nameNine')}}</span></li>
            <li><span class="right-title-span" @click="showzhuce()">{{$t('artLang.nameTen')}}</span></li>
            <li><span class="right-title-span"  @click="changeLocale ()">切换语言</span></li>
          </ul>
        </div>
      </el-menu>

    </el-header>
    <router-view></router-view>
    <!-- footer组件 -->
    <artFooter></artFooter>
    </el-container>
    <!-- 登陆组件 -->
    <transition name="el-fade-in-linear">
    <denglu v-show="disdenglu" @close="closedenglu()"></denglu>
    </transition>
    <!-- 注册组件 -->
    <zhuce v-show="diszhuce" @closezhu="closezhuce()"></zhuce>
  </div>
</template>
<script>
// 登陆弹窗
import denglu from './components/Land/view/denglu.vue'
// 注册弹窗
import zhuce from './components/Land/view/zhuce.vue'
// 底部footer引入
import artFooter from './common/footer/footerContact.vue'
  export default {
    data() {
      return {
        activeIndex: 'home',
        activeIndex2: 'home',
        disdenglu:false,
        diszhuce:false 
      };
    },
    components:{
      artFooter,
      denglu,
      zhuce
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // 语言切换方法
      changeLocale () {
          this.$confirm(this.$t('是否切换语言？'),  {
              confirmButtonText: this.$t('确定'),
              cancelButtonText: this.$t('取消'),
              type: 'warning'
              }).then(() => {
                 let locale = this.$i18n.locale
                 locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
              }).catch(() => {
              })
       },
       // 关闭注册弹窗
       closedenglu(){
        console.log();
        this.disdenglu=false;
        // this.diszhuce=true;
       },
       // 显示注册弹窗
       showdenglu(){
        this.disdenglu=true;
       },
       // 跳转到登陆

       // 显示登陆窗口
       showzhuce(){
        this.diszhuce=true;
       },
       // 关闭登陆窗口
       closezhuce(target){
        this.diszhuce=target;
        this.disdenglu=true;
       },
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
  width:300px;
    height:60px;
    float:right;
    li{
      list-style-type: none;
      float: left;
      font-size:16px;
      margin:0 0 0 20px;
      color:#333333;
      text-shadow: #D4D4D4 1px 1px 1px;
      span{
        color:#333333;
        text-decoration: none;
      }
    }
}

// 鼠标hover样式
.right-title-span:hover{
  cursor:pointer;

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