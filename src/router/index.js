import Vue from 'vue'
import Router from 'vue-router'
import PassWord from '@/components/PassWord'
import Home from '@/components/Home'
import Index from '@/components/home/Index'
import Music from '@/components/home/Music'
import Target from '@/components/home/Target'
import Life from '@/components/home/Life'

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
			redirect:'/home/index',
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
			},{
				path: 'target',
				name:'Target',
				component: Target
			},{
				path: 'life',
				name:'Life',
				component: Life
			},]
		}
	]
})
