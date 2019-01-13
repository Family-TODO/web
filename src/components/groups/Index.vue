<template>
	<transition-group
		tag="div"
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
	computed: {
		groups() {
			return this.$store.state.groups.list
		}
	}
}
</script>
