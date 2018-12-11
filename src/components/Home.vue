<template>
    <mu-container style="height: 100%; width:100%;padding: 0;">
        <router-view/>
        <mu-bottom-nav @change="menuChange" :value.sync="shift" color="#2dbe5f" shift style="position: absolute;bottom: 0;left: 0;width: 100%;">
            <mu-bottom-nav-item value="/home/index" title="主页" icon="home"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="/home/target" title="目标" icon="donut_small"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="/home/music" title="聊天" icon="bubble_chart"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="/home/life" title="生活" icon="photo"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </mu-container>
</template>

<script>
	export default {
		name: "home",
		components: {},
		mounted () {
			this.init ();
		},
		data () {
			return {
				shift: '/home/index'
            }
		},
		methods: {
			init () {
			},
			menuChange(val){//
				this.$router.push(val)
            }
		}
	}
</script>

<style scoped>

</style>