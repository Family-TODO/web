'use strict'

import { notAuthorizedRoutesName } from '@/router/routes'
import router from './router'
import store from '@/store'

router.beforeEach((to, from, next) => {
	if (to.path === '/') {
		next({ name: 'groups' })
	}
	else if (to.name === 'auth' && store.state.profile.user) {
		next({ name: 'groups' })
	}
	else if (!notAuthorizedRoutesName.includes(to.name) && !store.state.profile.user) {
		next({ name: 'auth' })
	}
	else {
		next()
	}
})

export default router
