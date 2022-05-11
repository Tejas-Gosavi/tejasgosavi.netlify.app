import {
	createRouter,
	createWebHistory
} from 'vue-router'

const routes = [{
		path: '/',
		name: 'Home',
		component: () => import('./components/Home.vue'),
	},
	{
		path: '/skills',
		name: 'Skills',
		component: () => import('./components/Skills.vue'),
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('./components/Projects.vue'),
	},
    {
        path: '/about',
		name: 'About',
		component: () => import('./components/About.vue'),
    },
    {
        path: '/connect',
		name: 'Connect',
		component: () => import('./components/Connect.vue'),
    },
	{	path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router