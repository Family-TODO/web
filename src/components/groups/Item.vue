<template>
	<article class="group">
		<router-link :to="{ name: 'tasks', params: { group: group.id } }">
			<header class="group__header">
				<div class="group__header-name">
					<span>{{ group.name }}</span>
					<i
						v-if="group.creator_id === user.id"
						class="material-icons color_yellow"
					>
						star_rate
					</i>
				</div>
				<div class="group__header-time">
					{{ time }}
				</div>
			</header>
			<footer
				v-if="lastTask"
				class="group__footer">
				<div class="group__footer-task">
					<BaseCheckbox :value="lastTask.is_done" only-view />
					<div class="group__footer-task__name">{{ lastTask.name }}</div>
				</div>
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
			const date = this.lastTask ? this.lastTask.created_at : this.group.created_at
			const now = new Date

			// TODO Calculate date (hour:minute or Day of week or day.month or year

			return '3:10 PM'
		}
	}
}
</script>
