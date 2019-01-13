<template>
	<article class="group">
		<router-link :to="{ name: 'dashboard' }">
			<header class="group__header">
				<div class="group-name">
					<span>{{ group.name }}</span>
					<i
						v-if="group.creator_id === user.id"
						class="material-icons color_yellow">star_rate</i>
				</div>
			</header>
			<footer class="group__footer">

			</footer>
		</router-link>
	</article>
</template>

<script>
export default {
	props: {
		group: {
			type: Object,
			required: true
		}
	},
	computed: {
		user() {
			return this.$store.state.profile.user
		}
	}
}
</script>
