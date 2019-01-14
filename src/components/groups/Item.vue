<template>
	<article class="group">
		<router-link :to="{ name: 'tasks', params: { group: group.id } }">
			<header class="group__header">
				<div class="group__header-name">
					<span>{{ group.name }}</span>
				</div>
				<div class="group__header-time">
					{{ time }}
				</div>
			</header>
			<footer
				v-if="lastTask"
				class="group__footer">
				<div class="group__footer-task">
					<BaseCheckbox
						:value="lastTask.is_done"
						only-view />
					<div class="group__footer-task__name">{{ lastTask.name }}</div>
				</div>
				<BaseIcon
					v-if="group.creator_id === user.id"
					name="star"
					class="color_yellow" />
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
		},
		lastTask() {
			return this.group.tasks.length ? this.group.tasks[0] : null
		},
		time() {
			const date = this.group.updated_at || this.group.created_at
			const now = new Date

			// TODO Calculate date (hour:minute or Day of week or day.month or year

			return '3:10 PM'
		}
	}
}
</script>
