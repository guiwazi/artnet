<template> 
  <div class="landscape">
    <div class="nav">
      <div class="nav-left">
        <img src="../../images/paiOne-one/logo.png" height="100" width="100" alt="">
      </div>
      <div class="search">
        <input type="text" placeholder="作品/作者" style="width:300px;float:left;margin:20px 0 0 0;">
        <el-button type="primary" style="float:left;height:30px; width:100px;border-radius:0;border-left:none;margin:20px 0 0 0;">搜索</el-button>
      </div>
    </div>
    <div class="landscape-page" style="margin-top:20px">
      <ul>
        <li @click="tiaoshangping()" v-for="items in items">
          <div>
            <img :src="items.thumb" alt="">
            <h2>{{items.author}}-{{items.artName}}</h2>
            <p>售价:&nbsp;<span>￥{{items.price}}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items:[],
      author:'',
      artName:'',
      price:'',
      thumb:'',
      j:''
    };
  },
  methods:{
    // 跳转到商品详情
    tiaoshangping(){
      this.$router.push({path:"/integralMall"});
    },
      // 获取商品信息
        getshangping () {
            this.$ajax({
              method: 'get',
              url: ' http://120.79.194.48:8080/Artnet/art/artlist',
           }).then((res) => {
            if(res.data.error == 0){
                 this.items=res.data.data[0].art_lists;
                 console.log("1111111111",this.items);

            }
              })
                .catch(function (error) {
                console.log(error);
                })
        },
    },
 created() {
    this.getshangping()
},

}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.landscape {
  width: 80%;
  margin: 0 auto;
  .nav {
    width: 100%;
    margin: 10px auto;
    height: 100px;
    .nav-left {
      width: 100px;
      height: 100px;
      float: left;
      margin-left: 4%;

      background-color: blueviolet;
    }
    .search {
      width: 410px;
      margin-right: 20%;
      margin-top: 15px;
      height: 100%;
      float: right;
      input {
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 3px;
        padding-left: 5px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s,
          -webkit-box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s,
          box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }
      input:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(102, 175, 233, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
          0 0 8px rgba(102, 175, 233, 0.6);
      }
    }
  }
  .landscape-page {
    width: 100%;
    height: 350px;
    ul {
      width: 100%;
      height: 100%;
      li {
        list-style-type: none;
        float: left;
        width: 20%;
        height: 90%;
        margin-left: 4%;
        div {
          width: 100%;
          height: 100%;
          border: 1px solid #dddddd;
          cursor: pointer;
          position: relative;
          .router{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
          }
          img {
            display: block;
            width: 80%;
            height: 60%;
            margin: 0 auto;
            margin-top: 10px;
          }
          h2 {
            width: 100%;
            text-align: center;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #666666;
            height: 30px;
            line-height: 30px;
            margin-top: 30px;
          }
          p {
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: #8b8b8b;
            span {
              font-size: 16px;
              color: #eb1f1f;
              font-weight: bolder;
            }
          }
        }
        div:hover {
          border: 3px solid #ec154e;
        }
      }
    }
  }
}
</style>