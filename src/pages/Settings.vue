<template>
	<div class="page">
		<TopBar
			title="Settings"
			:loading="loadingProfile"
			right-icon="edit"
			@right="onClickRight"
		/>
		<main>
			<section class="profile">
				<h3 class="section-title">Profile</h3>
				<UserItem
					v-if="currentUser"
					:user="currentUser" />
			</section>
			<section
				v-if="hasUsers"
				class="users">
				<h3 class="section-title">Family</h3>
				<Users expect-me />
			</section>
			<!--TODO Section - choose background-->
			<!--TODO Section choose display success/error notification from ajax-->
			<section class="logout">
				<BaseButton
					:loading="loadingProfile"
					class="btn-logout"
					@click="logout"
				>
					Logout
				</BaseButton>
			</section>
		</main>
	</div>
</template>

<script>
import UserItem from '@/components/users/Item'
import Users from '@/components/users/Index'
import TopBar from '@/components/TopBar'

export default {
	components: {
		Users, UserItem, TopBar
	},
	mounted() {
		if (!this.users.length) {
			this.fetchUsers()
		}
	},
	computed: {
		users() {
			return this.$store.state.users.list
		},
		hasUsers() {
			return this.users.length > 0
		},
		currentUser() {
			return this.$store.state.profile.user
		},
		loadingProfile() {
			return this.$store.state.profile.loading
		}
	},
	methods: {
		fetchUsers() {
			this.$store.dispatch('users/fetchList')
		},
		onClickRight() {
			this.$store.commit('modals/SET_USER', this.currentUser)
		},
		logout() {
			this.$store.dispatch('profile/logout')
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	padding: 15px 20px;
	border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.section-title {
	font-size: .9rem;
	margin-bottom: 15px;
}

.logout {
	text-align: center;
}

.btn-logout {
	width: 100%;
}
</style>
