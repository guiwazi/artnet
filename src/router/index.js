import Vue from 'vue'
import Router from 'vue-router'

// 首页
import homePage from '@/components/homePage/view/index'
// 拍卖中心
import auctionCenter from '@/components/auctionCenter/view/index'
// 联系我们
import contactUs from '@/components/contactUs/view/index'
// 积分商城
import integralMall from '@/components/integralMall/view/index'
// 优惠券商城
import preferentialVolumeMall from '@/components/preferentialVolumeMall/view/index'
// 拍品分类
import commodity from '@/components/commodity/view/index'
// ---------------------------分割线----------------------------------
import paiOne from '@/components/commodity/component/paiOne/index.vue'
// 拍品分类-中国绘画-山水
import zhongOne from '@/components/commodity/component/paiOne/zhongOne.vue'
// 拍品分类-中国绘画-花鸟
import zhongTwo from '@/components/commodity/component/paiOne/zhongTwo.vue'
// 拍品分类-中国绘画-人物
import zhongThree from '@/components/commodity/component/paiOne/zhongThree.vue'
// 拍品分类-中国绘画-画瓷
import zhongFour from '@/components/commodity/component/paiOne/zhongFour.vue'
// ---------------------------分割线----------------------------------
import paiTwo from '@/components/commodity/component/paiTwo/index.vue'
// 拍品分类-书法篆刻-楷书
import shuOne from '@/components/commodity/component/paiTwo/shuOne.vue'
// 拍品分类-书法篆刻-行书
import shuTwo from '@/components/commodity/component/paiTwo/shuTwo.vue'
// 拍品分类-书法篆刻-隶书
import shuThree from '@/components/commodity/component/paiTwo/shuThree.vue'
// 拍品分类-书法篆刻-篆书
import shuFour from '@/components/commodity/component/paiTwo/shuFour.vue'
// 拍品分类-书法篆刻-草书
import shuFive from '@/components/commodity/component/paiTwo/shuFive.vue'
// 拍品分类-书法篆刻-篆刻
import shuSix from '@/components/commodity/component/paiTwo/shuSix.vue'
// 拍品分类-书法篆刻-匾额
import shuSeven from '@/components/commodity/component/paiTwo/shuSeven.vue'
// 拍品分类-书法篆刻-古籍文献
import shuEight from '@/components/commodity/component/paiTwo/shuEight.vue'
// ---------------------------分割线----------------------------------
import paiThree from '@/components/commodity/component/paiThree/index.vue'
// 拍品分类-西画雕塑-油画
import xiOne from '@/components/commodity/component/paiThree/xiOne.vue'
// 拍品分类-西画雕塑-雕塑
import xiTwo from '@/components/commodity/component/paiThree/xiTwo.vue'
// 拍品分类-西画雕塑-版画
import xiThree from '@/components/commodity/component/paiThree/xiThree.vue'
// 拍品分类-西画雕塑-影响
import xiFour from '@/components/commodity/component/paiThree/xiFour.vue'
// 拍品分类-西画雕塑-水彩色粉
import xiFive from '@/components/commodity/component/paiThree/xiFive.vue'
// 拍品分类-西画雕塑-其他
import xiSix from '@/components/commodity/component/paiThree/xiSix.vue'
// ---------------------------分割线----------------------------------
import paiFour from '@/components/commodity/component/paiFour/index.vue'
// 拍品分类-古瓷杂顶-青花
import guOne from '@/components/commodity/component/paiFour/guOne.vue'
// 拍品分类-古瓷杂顶-彩瓷
import guTwo from '@/components/commodity/component/paiFour/guTwo.vue'
// 拍品分类-古瓷杂顶-色釉瓷
import guThree from '@/components/commodity/component/paiFour/guThree.vue'
// 拍品分类-古瓷杂顶-外销瓷
import guFour from '@/components/commodity/component/paiFour/guFour.vue'
// 拍品分类-古瓷杂顶-文玩杂顶
import guFive from '@/components/commodity/component/paiFour/guFive.vue'
// 拍品分类-古瓷杂顶-玉器
import guSix from '@/components/commodity/component/paiFour/guSix.vue'
// 拍品分类-古瓷杂顶-金属器
import guSeven from '@/components/commodity/component/paiFour/guSeven.vue'
// ---------------------------分割线----------------------------------
import paiFive from '@/components/commodity/component/paiFive/index.vue'
// 拍品分类-当代工艺-竹木牙角
import dangOne from '@/components/commodity/component/paiFive/dangOne.vue'
// 拍品分类-当代工艺-玉器
import dangTwo from '@/components/commodity/component/paiFive/dangTwo.vue'
// 拍品分类-当代工艺-翡翠
import dangThree from '@/components/commodity/component/paiFive/dangThree.vue'
// 拍品分类-当代工艺-珠宝
import dangFour from '@/components/commodity/component/paiFive/dangFour.vue'
// 拍品分类-当代工艺-当代陶瓷
import dangFive from '@/components/commodity/component/paiFive/dangFive.vue'
// 拍品分类-当代工艺-紫砂
import dangSix from '@/components/commodity/component/paiFive/dangSix.vue'
// 拍品分类-当代工艺-名石
import dangSeven from '@/components/commodity/component/paiFive/dangSeven.vue'
// 拍品分类-当代工艺-玛瑙
import dangEight from '@/components/commodity/component/paiFive/dangEight.vue'
// 拍品分类-当代工艺-琥珀蜜蜡
import dangNine from '@/components/commodity/component/paiFive/dangNine.vue'
// 拍品分类-当代工艺-沉香檀香
import dangTen from '@/components/commodity/component/paiFive/dangTen.vue'
// 拍品分类-当代工艺-金属器
import dangEleven from '@/components/commodity/component/paiFive/dangEleven.vue'
// 拍品分类-当代工艺-海外艺术品
import dangTwelve from '@/components/commodity/component/paiFive/dangTwelve.vue'
// 拍品分类-当代工艺-珊瑚
import dangThirteen from '@/components/commodity/component/paiFive/dangThirteen.vue'
// 拍品分类-当代工艺-其他
import dangFourteen from '@/components/commodity/component/paiFive/dangFourteen.vue'
// ---------------------------分割线----------------------------------
import paiSix from '@/components/commodity/component/paiSix/index.vue'
// 拍品分类-酒品-红酒
import jiuOne from '@/components/commodity/component/paiSix/jiuOne.vue'
// 拍品分类-酒品-白酒
import jiuTwo from '@/components/commodity/component/paiSix/jiuTwo.vue'

// 个人中心
import personalCenter from '@/components/personalCenter/view/index.vue'
// 个人中心-购物车
import shoppingCart from '@/components/personalCenter/component/shoppingCart.vue'
// 个人中心-订单查询
import orderQuery from '@/components/personalCenter/component/orderQuery.vue'
// 个人中心-物流查询
import logisticsQuery from '@/components/personalCenter/component/logisticsQuery.vue'
// 个人中心-会员中心
// import memberCenter from '@/components/personalCenter/component/memberCenter.vue'


// 艺术新闻
import artCenter from '@/components/artCenter/view/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
    	path: '/home',  //首页
    	name: 'homePage',
    	component: homePage
    },
    {
      path: '/auctionCenter', //拍卖中心
      name: 'auctionCenter',
      component: auctionCenter
    },
    {
      path: '/contactUs',  //联系我们
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/integralMall', //积分商城
      name: 'integralMall',
      component: integralMall
    },
    {
      path: '/preferentialVolumeMall', //优惠券商城
      name: 'preferentialVolumeMall',
      component: preferentialVolumeMall
    },
    {
      path: '/artCenter', //艺术新闻
      name: 'artCenter',
      component: artCenter
    },
    {
      path: '/commodity',   //拍品分类
      name: 'commodity',
      component: commodity,
      redirect: '/commodity/paiOne',
      children: [
        {
         path: 'paiOne',   //中国绘画
          name: 'paiOne',
          component:paiOne,
          redirect: '/commodity/paiOne/zhongOne',
          children: [
            {
              path: 'zhongOne',
              name:'zhongOne',
              component: zhongOne
            },
            {
              path: 'zhongTwo',
              name:'zhongTwo',
              component: zhongTwo
            },
            {
              path: 'zhongThree',
              name:'zhongThree',
              component: zhongThree
            },
            {
              path: 'zhongFour',
              name:'zhongFour',
              component: zhongFour
            }
          ],
        },
        {
         path: 'paiTwo',   //书法篆刻
          name: 'paiTwo',
          component:paiTwo,
          redirect: '/commodity/paiTwo/shuOne',
          children: [
            {
              path: 'shuOne',
              name:'shuOne',
              component: shuOne
            },
            {
              path: 'shuTwo',
              name:'shuTwo',
              component: shuTwo
            },
            {
              path: 'shuThree',
              name:'shuThree',
              component: shuThree
            },
            {
              path: 'shuFour',
              name:'shuFour',
              component: shuFour
            },
            {
              path: 'shuFive',
              name:'shuFive',
              component: shuFive
            },
            {
              path: 'shuSix',
              name:'huSix',
              component: shuSix
            },
            {
              path: 'shuSeven',
              name:'shuSeven',
              component: shuSeven
            },
            {
              path: 'shuEight',
              name:'shuEight',
              component: shuEight
            }
          ],
        },
        {
         path: 'paiThree',   //西画雕塑
          name: 'paiThree',
          component:paiThree,
          redirect: '/commodity/paiTwo/xiOne',
          children: [
            {
              path: 'xiOne',
              name:'xiOne',
              component: xiOne
            },
            {
              path: 'xiTwo',
              name:'xiTwo',
              component: xiTwo
            },
            {
              path: 'xiThree',
              name:'xiThree',
              component: xiThree
            },
            {
              path: 'xiFour',
              name:'xiFour',
              component: xiFour
            },
            {
              path: 'xiFive',
              name:'xiFive',
              component: xiFive
            },
            {
              path: 'xiSix',
              name:'xiSix',
              component: xiSix
            }
          ],
        },
        {
         path: 'paiFour',   //古瓷杂顶
          name: 'paiFour',
          component:paiFour,
          redirect: '/commodity/paiFour/guOne',
          children: [
            {
              path: 'guOne',
              name:'guOne',
              component: guOne
            },
            {
              path: 'guTwo',
              name:'guTwo',
              component: guTwo
            },
            {
              path: 'guThree',
              name:'guThree',
              component: guThree
            },
            {
              path: 'guFour',
              name:'guFour',
              component: guFour
            },
            {
              path: 'guFive',
              name:'guFive',
              component: guFive
            },
            {
              path: 'guSix',
              name:'guSix',
              component: guSix
            },
            {
              path: 'guSeven',
              name:'guSeven',
              component: guSeven
            }
          ],
        },
        {
         path: 'paiFive',   //当代工艺
          name: 'paiFive',
          component:paiFive,
          redirect: '/commodity/paiFive/dangOne',
          children: [
            {
              path: 'dangOne',
              name:'dangOne',
              component: dangOne
            },
            {
              path: 'dangTwo',
              name:'dangTwo',
              component: dangTwo
            },
            {
              path: 'dangThree',
              name:'dangThree',
              component: dangThree
            },
            {
              path: 'dangFour',
              name:'dangFour',
              component: dangFour
            },
            {
              path: 'dangFive',
              name:'dangFive',
              component: dangFive
            },
            {
              path: 'dangSix',
              name:'dangSix',
              component: dangSix
            },
            {
              path: 'dangSeven',
              name:'dangSeven',
              component: dangSeven
            },
            {
              path: 'dangEight',
              name:'dangEight',
              component: dangEight
            },
            {
              path: 'dangNine',
              name:'dangNine',
              component: dangNine
            },
            {
              path: 'dangTen',
              name:'dangTen',
              component: dangTen
            },
            {
              path: 'dangEleven',
              name:'dangEleven',
              component: dangEleven
            },
            {
              path: 'dangTwelve',
              name:'dangTwelve',
              component: dangTwelve
            },
            {
              path: 'dangThirteen',
              name:'dangThirteen',
              component: dangThirteen
            },
            {
              path: 'dangFourteen',
              name:'dangFourteen',
              component: dangFourteen
            }
          ],
        },
        {
         path: 'paiSix',   //酒品
          name: 'paiSix',
          component:paiSix,
          redirect: '/commodity/paiSix/jiuOne',
          children: [
            {
              path: 'jiuOne',
              name:'jiuOne',
              component: jiuOne
            },
            {
              path: 'jiuTwo',
              name:'jiuTwo',
              component: jiuTwo
            }
          ],
        },

      ]
    },
    {
      path: '/personalCenter',   //个人中心
      name: 'personalCenter',
      component: personalCenter,
      redirect: '/personalCenter/view',
      children: [
        {
          path: 'shoppingCart',
          name:'shoppingCart',
          component: shoppingCart
        },
        {
          path: 'orderQuery',
          name:'orderQuery',
          component: orderQuery
        },
        {
          path: 'logisticsQuery',
          name:'logisticsQuery',
          component: logisticsQuery
        }
      ]
    },
  ]
})
