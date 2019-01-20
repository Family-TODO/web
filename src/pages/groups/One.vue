<template>
	<div class="page">
		<TopBar
			:title="group ? group.name : 'Loading..'"
			right-icon="more_vert"
			:right-click="onClickRight"
			:loading="loading"
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
			group: null
		}
	},
	computed: {
		groups() {
			return this.$store.state.groups.list
		}
	},
	async created() {
		await this.getCurrentGroup()
	},
	methods: {
		async getCurrentGroup() {
			const routeId = this.$route.params.id
			this.loading = true

			for (let group of this.groups) {
				if (group.id === routeId) {
					this.group = group
					this.loading = false
					return
				}
			}

			const res = await this.fetchGroup()

			if (!res) {
				this.$router.push({ name: 'dashboard' })
			} else {
				this.group = res
			}

			this.loading = false
		},
		async fetchGroup() {
			return await this.$axios.get(`/groups/${this.$route.params.id}`)
				.then(res => res.data.group)
				.catch(() => null)
		},
		onClickRight() {
			// this.$router.push({ name: '' }) TODO
		}
	}
}
</script>
