<template>
    <div class="contanier">
        <div style="height:30%;width: 100%;background-color: #0d1c2f; ">
            <div class="img_bg">
                <div ref="echarts" style="width: 100%;height: 100%;"></div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "index",
		components: {},
		mounted () {
            this.init();
		},
		data () {
			return {
				healthData:[]
            }
		},
		methods: {
			init () {
				let myChart=this.$echarts.init(this.$refs.echarts);
				let option = {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: 'line',
						smooth: true
					},{
						data: [220, 432, 901, 434, 190, 1330, 120],
						type: 'line',
						smooth: true
					}]
				};
				myChart.setOption(option);
			}
		}
	}
</script>

<style scoped>
    .img_bg{
        height: 100%;
        width: 100%;
        background: url("../../assets/timg.png") no-repeat center;
    }
</style>