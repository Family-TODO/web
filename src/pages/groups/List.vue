<template>
	<div class="page">
		<TopBar
			left-icon="settings"
			:left-click="onClickLeft"
			:loading="loading"
			@right="fetchGroups"
		/>
		<main ref="main">
			<!--TODO Pagination-->
			<!--TODO Store scrollOffset-->
			<Groups :groups="groups" />
			<BaseButton
				icon
				@click="onClickCreate"
			>
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
			return Object.values(this.$store.state.groups.list)
				.sort((a, b) => {
					return new Date(b.updated_at) - new Date(a.updated_at)
				})
		},
		loading() {
			return this.$store.state.groups.loading
		}
	},
	mounted() {
		this.$refs.main.addEventListener('scroll', this.onScroll)
	},
	methods: {
		fetchGroups() {
			this.$store.dispatch('groups/fetchList')
		},
		onClickLeft() {
			this.$router.push({ name: 'settings' })
		},
		onClickCreate() {
			this.$router.push({ name: 'groups-create' })
		},
		onScroll() {
			const main = this.$refs.main

			// TODO Make directive (also use in tasks)
			console.log('-->', main.scrollHeight - main.clientHeight - main.scrollTop)
		}
	}
}
</script>

<style lang="scss" scoped>
main {
	> .base-button {
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
}
</style>
