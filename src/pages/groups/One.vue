<template>
	<div class="page">
		<TopBar
			:title="group ? group.name : 'Loading..'"
			:right-icon="modal ? 'close' : 'more_vert'"
			:loading="loading"
			@right="onClickRight"
		/>
		<main>
			<Tasks
				v-if="group"
				:group="group"
			/>
		</main>
	</div>
</template>

<script>
import Tasks from '@/components/tasks/Index'
import TopBar from '@/components/TopBar'

export default {
	components: {
		Tasks, TopBar
	},
	data() {
		return {
			loading: false,
			modal: false,
			group: null
		}
	},
	computed: {
		groups() {
			return this.$store.state.groups.list
		}
	},
	async created() {
		this.loading = true
		const group = await this.getCurrentGroup()

		if (!group) {
			this.$router.push({ name: 'dashboard' })
		} else {
			this.group = group
			this.loading = false
		}
	},
	methods: {
		async getCurrentGroup() {
			const routeId = this.$route.params.id
			const group = this.groups[routeId]

			return group || await this.fetchGroup()
		},
		async fetchGroup() {
			return await this.$axios.get(`/groups/${this.$route.params.id}`)
				.then(res => res.data.group)
				.catch(() => null)
		},
		onClickRight() {
			this.$store.commit('modals/OPEN_GROUP_DETAIL', this.group)
		}
	}
}
</script>
