<template>
	<div
		id="profile"
		class="page page_user">
		<top-bar>Profile</top-bar>
		<main>
			{{ user }}
		</main>
	</div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
	components: {
		TopBar
	},
	computed: {
		user() {
			return this.$store.state.profile.user
		}
	}
}
</script>
