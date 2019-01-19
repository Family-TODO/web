<template>
	<div
		id="settings"
		class="page"
	>
		<TopBar
			title="Settings"
			:loading="loadingUsers"
			@right="fetchUsers"
		/>
		<main>
			<Users />
			<br><hr><br>
			<BaseButton
				:loading="loadingProfile"
				@click="logout">Logout</BaseButton>
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
		console.log('Settings mounted')
		if (!this.users.length) {
			this.fetchUsers()
		}
	},
	methods: {
		fetchUsers() {
			return this.$store.dispatch('users/fetchList')
		},
		logout() {
			this.$store.dispatch('profile/logout')
		}
	}
}
</script>
