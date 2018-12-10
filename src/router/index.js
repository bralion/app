import Vue from 'vue'
import Router from 'vue-router'
import PassWord from '@/components/PassWord'
import Home from '@/components/Home'
import Index from '@/components/home/Index'
import Music from '@/components/home/Music'

Vue.use (Router)

export default new Router ({
	routes: [
		{
			path: '/',
			name: 'PassWord',
			component: PassWord
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			children: [{
				path: '/',
				redirect:'index'
			},
			{
				path: 'index',
				name:'Index',
				component: Index
			},{
				path: 'music',
				name:'Music',
				component: Music
			},]
		}
	]
})
