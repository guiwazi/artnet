<template>
	<div>
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
		 <el-button @click="textnimation()">点我试试</el-button>
		 <span class="spanStyle" id="dowebok">animation css</span>
	</div>

</template>
<script>
// 引入animation
import animate from '../animation/animate.css'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '测试在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    textnimation(){
    $('#dowebok').addClass('animated rotateOut');

    }
  }
}
</script>
<style lang="scss">
.spanStyle{
	font-size:3rem;
	text-align: center;
}
</style>