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

		// Groups
		{
			path: '/groups',
			name: 'groups',
			component: loadPage('groups/List')
		},
		{
			path: '/group/:id',
			name: 'group',
			component: loadPage('groups/One')
		},
		{
			path: '/groups/create',
			name: 'groups-create',
			component: loadPage('groups/Create')
		},

		{
			path: '/profile',
			name: 'profile',
			component: loadPage('Profile')
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
