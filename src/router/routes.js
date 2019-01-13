'use strict'

import { loadPage, loadLayout } from './helper'

const notAuthorizedRoutes = {
	path: '/auth',
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
			path: '/tasks/:group',
			name: 'tasks',
			component: loadPage('Tasks')
		},
		{
			path: '/settings',
			name: 'settings',
			component: loadPage('Settings')
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
