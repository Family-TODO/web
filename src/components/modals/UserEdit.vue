<template>
	<BaseModal
		v-if="user"
		value
		class="user-edit">
		<h1>{{ user.name || user.login }}</h1>
		<BaseForm @submit="onSubmit">
			<BaseInput
				v-model="form.name"
				label="Name" />
			<BaseInput
				v-model="form.login"
				label="Login" />
			<BaseCheckbox
				v-model="form.is_admin"
				v-if="currentUser.is_admin && currentUser.id !== user.id">
				Admin
			</BaseCheckbox>
		</BaseForm>
	</BaseModal>
</template>

<script>
export default {
	data() {
		return {
			form: {},
			tokens: []
		}
	},
	computed: {
		currentUser() {
			return this.$store.state.profile.user
		},
		user() {
			return this.$store.state.modals.user
		}
	},
	mounted() {
		if (this.currentUser.id === this.user.id || this.currentUser.isAdmin) {
			this.fetchTokens()
		}
	},
	methods: {
		fetchTokens() {
			this.$axios.get('auth/tokens')
				.then(res => {
					this.tokens = res.data.tokens
				})
		},
		onSubmit() {
			this.$axios.post('')
		}
	},
	watch: {
		user: {
			handler(obj) {
				if (obj) {
					this.form = { ...obj }
				}
			},
			immediate: true
		}
	}
}
</script>

<style lang="scss" scoped>
.base-modal__content {
	> h1 {
		margin: 0 0 20px;
		text-align: center;
		font-size: 1.3rem;
	}
}
</style>
