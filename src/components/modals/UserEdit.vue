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
		<div
			v-if="showTokens"
			class="user-edit__tokens">
			<span class="subtitle">Tokens</span>
			<BaseGroup
				v-for="(token, index) in tokens"
				:key="index"
				class="token">
				<div class="token__content">{{ token.token }}</div>
				<div class="token__ip">{{ token.ip }}</div>
			</BaseGroup>
			<BaseButton
				size="small"
				@click="fetchClearTokens">Clear All</BaseButton>
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
		showTokens() {
			return !!this.tokens.length && this.canGetTokens
		},
		canGetTokens() {
			return this.currentUser.isAdmin || this.currentUser.id === this.data.id
		},
		currentUser() {
			return this.$store.state.profile.user
		}
	},
	mounted() {
		if (this.canGetTokens) {
			this.fetchTokens()
		}
	},
	methods: {
		fetchTokens() {
			this.$axios.get('auth/tokens')
				.then(res => this.tokens = res.data.tokens)
		},
		fetchClearTokens() {
			// TODO
			// this.$axios.delete('')
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
.base-modal__content {
	> div {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
}

.title {
	display: block;
	font-size: 1.5em;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
}

.subtitle {
	display: block;
	font-size: 1em;
	font-weight: 600;
	margin-bottom: 20px;
	padding-bottom: 5px;
	border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.token {
	margin-bottom: 15px;
	/deep/ .base-group__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}

.token__content {
	font-size: .8em;
	margin-bottom: 4px;
}

.token__ip {
	font-size: .7em;
	color: #c5c5c5;
}
</style>
