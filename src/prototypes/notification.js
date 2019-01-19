'use strict'

import { guidGenerator } from '../scripts/utils'

class ELem {

	/**
	 * @param message
	 * @param {String} type - success, error
	 * @param {Number} timeout - ms
	 */
	constructor(message, type = 'success', timeout = 2000) {
		this.appendEl = document.querySelector('#notifications')
		this.rootEl = document.createElement('div')
		this.id = guidGenerator()
		this.message = message
		this.type = type
		this.timeout = timeout

		this.rootEl.id = `notification-${this.id}`
		this.rootEl.classList.add('base-notification', type)
		this.rootEl.innerHTML = this.getIcon() + this.message
	}

	getIcon() {
		let icon = ''

		switch (this.type) {
		case 'success':
			icon = 'done'
			break
		case 'error':
			icon = 'cancel'
			break
		}

		if (icon) {
			return `<i class="base-icon material-icons ${this.type}">${icon}</i>`
		}

		return null
	}

	append() {
		this.appendEl.appendChild(this.rootEl)
		setTimeout(() => this.rootEl.classList.add('active'))
		setTimeout(() => this.destroy(), this.timeout)
	}

	destroy() {
		this.appendEl.removeChild(this.rootEl)
	}
}

export const notification = {
	success(message, timeout) {
		new ELem(message, 'success', timeout).append()
	},
	error(message, timeout) {
		new ELem(message, 'error', timeout).append()
	}
	// TODO warning, info, default??
}

export default (Vue) => Vue.prototype.$notification = notification
