<template>
	<div
		id="dashboard"
		class="page"
	>
		<TopBar
			:left-click="onClickLeft"
			left-icon="settings"
			@right="fetchGroups" />
		<main>
			<Groups />
			<BaseLoading v-if="loading" />
			<BaseButton
				icon
				@click="onClickCreate">
				<BaseIcon name="add" />
			</BaseButton>
		</main>
	</div>
</template>

<script>
import Groups from '@/components/groups/Index'
import TopBar from '@/components/TopBar'

export default {
	components: {
		Groups, TopBar
	},
	computed: {
		groups() {
			return this.$store.state.groups.list
		},
		loading() {
			return this.$store.state.groups.loading
		}
	},
	mounted() {
		if (!this.groups.length) {
			this.fetchGroups()
		}
	},
	methods: {
		fetchGroups() {
			this.$store.dispatch('groups/fetchList')
		},
		onClickLeft() {
			this.$router.push({ name: 'settings' })
		},
		onClickCreate() {
			// TODO
		}
	}
}
</script>
