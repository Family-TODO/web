<template>
	<BaseModal
		value
		class="user-edit">
		<span class="title">{{ data.login }}</span>
		<div class="user-edit__basic">
			<span class="subtitle">Basic</span>
			<BaseForm @submit="onSubmit">
				<BaseInput
					v-model="form.name"
					label="Name" />
				<BaseCheckbox
					v-model="form.is_admin"
					v-if="currentUser.is_admin && currentUser.id !== data.id">
					Admin
				</BaseCheckbox>
				<BaseButton>Save</BaseButton>
			</BaseForm>
		</div>
	</BaseModal>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			form: {},
			tokens: []
		}
	},
	computed: {
		currentUser() {
			return this.$store.state.profile.user
		}
	},
	mounted() {
		if (this.currentUser.id === this.data.id || this.currentUser.isAdmin) {
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
			// this.$axios.post(`users/${this.data.id}`)
			// 	.then(res => {
			// 		// TODO
			// 	})
		}
	},
	watch: {
		data: {
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
.title {
	display: block;
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
}

.subtitle {
	display: block;
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 20px;
	padding-bottom: 5px;
	border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.base-modal__content {
	> h1 {
		margin: 0 0 20px;
		text-align: center;
		font-size: 1.3rem;
	}
}
</style>
