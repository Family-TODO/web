<template>
	<div
		id="auth"
		class="page"
	>
		<BaseInput v-model="form.login.value" />
		<BaseInput
			v-model="form.password.value"
			type="password"
		/>
		<BaseButton @click="onClick" />
		{{ form }}
		Auth page
	</div>
</template>

<script>
import ValidateForm from '@script/ValidateForm'

export default {
	data() {
		return {
			form: {
				login: {
					value: 'admin',
					error: {
						has: false,
						text: ''
					},
					validation: [
						v => !!v || 'Login is empty',
						v => v.length > 2 || 'Min length is 3'
					]
				},
				password: {
					value: 'admin123',
					error: {
						has: false,
						text: ''
					},
					validation: [
						v => !!v || 'Password is empty'
					]
				}
			}
		}
	},
	computed: {
		user() {
			return this.$store.state.profile.user
		}
	},
	watch: {
		user(val) {
			if (val) {
				this.$router.push({ name: 'dashboard' })
			}
		}
	},
	created() {
		if (this.user) {
			this.$router.push({ name: 'dashboard' })
		}
	},
	methods: {
		onClick() {
			const validate = new ValidateForm(this.form)

			if (!validate.result) {
				return
			}

			const fd = new FormData
			fd.set('login', this.form.login.value)
			fd.set('password', this.form.password.value)

			this.$store.dispatch('profile/auth', fd)
		}
	}
}
</script>
