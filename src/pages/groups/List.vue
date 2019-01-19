<template>
	<div class="page">
		<TopBar
			left-icon="settings"
			:left-click="onClickLeft"
			:loading="loading"
			@right="fetchGroups"
		/>
		<main>
			<Groups />
			<BaseLoading v-if="loading" />
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
			return this.$store.state.groups.list
		},
		loading() {
			return this.$store.state.groups.loading
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
			this.$router.push({ name: 'groups-create' })
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
		border-radius: 10px;
	}
}
</style>
