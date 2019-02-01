/**
 * @example
 *  form: {
 *    login: {
 *     value: '',
 *     error: {
 *       has: false,
 *       text: ''
 *     },
 *     validation: [
 *       v => !!v || 'Login is empty',
 *       v => v.length < 6 || 'Minimum password length 5'
 *     ]
 *    },
 *    ...
 *  }
 */

// TODO Show form error (list)

export default class ValidateForm {

	/** @param {Object} form */
	constructor(form) {
		this._result = true
		this._form = form

		// Begin validate
		for (let key in this._form) {
			if (!this._form.hasOwnProperty(key)) {
				continue
			}

			const item = this._form[key]

			if (!item.validation) {
				continue
			}

			// Validate array of validation
			if (Array.isArray(item.validation)) {
				for (let validateFn of item.validation) {
					if (!this._validateItem(item, validateFn)) {
						this._result = false
						break
					}
				}
				continue
			}

			// Validate only one
			if (typeof item.validation === 'object') {
				if (!this._validateItem(item, item.validation)) {
					this._result = false
				}
			}
		}
	}

	/**
	 * @param {Object} item
	 * @param {Function} validateFn
	 * @return {Boolean}
	 */
	_validateItem(item, validateFn) {
		const hasErrorProperty = item.error && typeof item.error === 'object'
		const res = validateFn(item.value)

		if (hasErrorProperty) {
			item.error.has = false
			item.error.text = ''
		}

		if (res !== true) {
			if (hasErrorProperty && !item.error.has) {
				item.error.has = true
				item.error.text = res
			}
			return false
		}

		return true
	}

	/** @return {Boolean} */
	get result() {
		return this._result
	}

	/** @return {FormData} */
	get formData() {
		const fd = new FormData

		Object.entries(this._form).map(([key, item]) => {
			fd.set(key, item.value)
		})

		return fd
	}
}
