'use strict'

import { loadPage, loadLayout } from './helper'

const notAuthorizedRoutes = {
	path: '/auth',
	name: 'layout-not-authorized',
	component: loadLayout('NotAuthorized'),
	children: [
		{
			path: '/',
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
		},
		{
			path: '/profile',
			name: 'profile',
			component: loadPage('Profile')
		},
		{
			path: '*',
			name: 'not-found',
			component: loadPage('NotFound')
		}
	]
}

export const notAuthorizedRoutesName = notAuthorizedRoutes.children.map(route => route.name)

export default [
	notAuthorizedRoutes,
	authorizedRoutes
]
