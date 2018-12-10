import Vue from 'vue'
import Router from 'vue-router'
import PassWord from '@/components/PassWord'

Vue.use (Router)

export default new Router ({
	routes: [
		{
			path: '/',
			name: 'PassWord',
			component: PassWord
		}
	]
})
