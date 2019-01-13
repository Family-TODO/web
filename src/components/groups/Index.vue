<template>
	<transition-group
		name="groups-animate"
		class="groups"
		appear
	>
		<!--TODO Pagination-->
		<GroupItem
			v-for="group in groups"
			:key="group.id"
			:group="group"
		/>
	</transition-group>
</template>

<script>
import GroupItem from './Item'

export default {
	components: {
		GroupItem
	},
	props: {
		params: {
			type: Object,
			default: () => {}
		}
	},
	computed: {
		groups() {
			return this.$store.state.groups.list
		}
	},
	mounted() {
		if (!this.groups.length) {
			this.$store.dispatch('groups/fetchList', this.params)
		}
		window.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
		onScroll() {
			console.log('Scroll')
		}
	}
}
</script>
