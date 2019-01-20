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
			<section class="users">
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
	computed: {
		currentUser() {
			return this.$store.state.profile.user
		},
		users() {
			return this.$store.state.users.list
		},
		loadingProfile() {
			return this.$store.state.profile.loading
		}
	},
	methods: {
		onClickRight() {
			// TODO Go to edit profile page (or dialog?)
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
