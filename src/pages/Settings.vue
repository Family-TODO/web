<template>
	<div class="page">
		<TopBar
			title="Settings"
			:loading="loadingUsers"
			@right="fetchUsers"
		/>
		<main>
			<section class="top">
				<BaseButton @click="onClickProfile">Profile</BaseButton>
			</section>
			<section class="center">
				<span>Users</span>
				<Users v-model="showAll" />
			</section>
			<section class="bottom">
				<BaseButton
					:loading="loadingProfile"
					class="btn-logout"
					@click="logout">Logout</BaseButton>
			</section>
		</main>
	</div>
</template>

<script>
import Users from '@/components/users/Index'
import TopBar from '@/components/TopBar'

export default {
	components: {
		Users, TopBar
	},
	data() {
		return {
			showAll: false
		}
	},
	computed: {
		users() {
			return this.$store.state.users.list
		},
		loadingUsers() {
			return this.$store.state.users.loading
		},
		loadingProfile() {
			return this.$store.state.profile.loading
		}
	},
	mounted() {
		if (!this.users.length) {
			this.fetchUsers()
		}
	},
	methods: {
		fetchUsers() {
			this.showAll = false
			return this.$store.dispatch('users/fetchList')
		},
		logout() {
			this.$store.dispatch('profile/logout')
		},
		onClickProfile() {
			this.$router.push({ name: 'profile' })
		}
	}
}
</script>

<style lang="scss" scoped>
.top, .center, .bottom {
	padding: 20px;
}

.center {
	background: rgba(0, 0, 0, .3);
	> span {
		display: block;
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid;
		color: rgba(255, 255, 255, .87);
	}
}
</style>
