<template>
	<main class="page">
		<Logo />
		<BaseForm
			:loading="loading"
			@submit="onSubmit"
		>
			<BaseInput
				ref="login"
				v-model="login"
				placeholder="Login"
			/>
			<BaseInput
				ref="password"
				v-model="password"
				placeholder="Password"
				type="password"
			/>
			<BaseButton :loading="loading">
				Login
			</BaseButton>
		</BaseForm>
	</main>
</template>

<script>
import ValidateForm from '@script/ValidateForm'
import Logo from '@/components/Logo'

export default {
	components: {
		Logo
	},
	data() {
		return {
			form: {
				login: {
					value: '',
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
					value: '',
					error: {
						has: false,
						text: ''
					},
					validation: [
						v => !!v || 'Password is empty',
						v => v.length >= 6 || 'Min length is 6'
					]
				}
			}
		}
	},
	computed: {
		loading() {
			return this.$store.state.profile.loading
		},
		login: {
			get() {
				return this.form.login.value
			},
			set(value) {
				this.form.login.value = value
			}
		},
		password: {
			get() {
				return this.form.password.value
			},
			set(value) {
				this.form.password.value = value
			}
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.updateFocus()
		})
	},
	methods: {
		onSubmit() {
			const validate = new ValidateForm(this.form)

			if (!validate.result) {
				this.$notification.error('Validation error')
				this.updateFocus()
				return
			}

			// Send request to the server
			// And get the user
			this.$store.dispatch('profile/auth', validate.formData)
		},
		/** @return Boolean */
		updateFocus() {
			for (let [key, item] of Object.entries(this.form)) {
				if (!item.value || item.error.has) {
					this.setFocus(key)
					return true
				}
			}

			return false
		},
		setFocus(type) {
			this.$refs[type].$refs.input.focus()
		}
	}
}
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	> .base-form {
		padding: 20px;
		/deep/ input,
		/deep/ textarea,
		button {
			height: 40px;
		}
	}
}
</style>
