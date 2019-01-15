<template>
	<main
		id="auth"
		class="page"
	>
		<Logo />
		<BaseForm @submit="onSubmit">
			<BaseInput v-model="form.login.value" />
			<BaseInput
				v-model="form.password.value"
				type="password"
			/>
			<BaseButton>Login</BaseButton>
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
			loading: false,
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
						v => !!v || 'Password is empty',
						v => v.length > 5 || 'Min length is 6'
					]
				}
			}
		}
	},
	methods: {
		onSubmit() {
			// TODO Loading
			const validate = new ValidateForm(this.form)

			if (!validate.result) {
				// TODO Show error
				return
			}

			const fd = new FormData
			fd.set('login', this.form.login.value)
			fd.set('password', this.form.password.value)

			// TODO Success message
			this.$store.dispatch('profile/auth', fd)
		}
	}
}
</script>
