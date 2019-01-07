'use strict'

import { loadPage, loadLayout } from './helper'

const notAuthorizedRoutes = {
	path: '',
	name: 'layout-not-authorized',
	component: loadLayout('NotAuthorized'),
	children: [
		{
			path: '/auth',
			name: 'auth',
			component: loadPage('Auth')
		}
	]
}

const authorizedRoutes = {
	path: '',
	name: 'layout-default',
	component: loadLayout('Default'),
	children: [
		{
			path: '/dashboard',
			name: 'dashboard',
			component: loadPage('Dashboard')
		}
	]
}

export const notAuthorizedRoutesName = notAuthorizedRoutes.children.map(route => route.name)

export default [
	notAuthorizedRoutes,
	authorizedRoutes
]
