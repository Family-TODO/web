<template>
	<main
		id="auth"
		class="page"
	>
		<Logo />
		<BaseForm @submit="onSubmit">
			<BaseInput
				v-model="form.login.value"
				autofocus
			/>
			<BaseInput
				v-model="form.password.value"
				type="password"
			/>
			<BaseButton :loading="loading">Login</BaseButton>
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
					// FIXME Remove value
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
					// FIXME Remove value
					value: 'admin123',
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
		}
	},
	methods: {
		onSubmit() {
			const validate = new ValidateForm(this.form)

			if (!validate.result) {
				this.$notification.error('Validation error')
				return
			}

			this.$store.dispatch('profile/auth', validate.formData)
		}
	}
}
</script>
