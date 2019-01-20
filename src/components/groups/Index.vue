<template>
	<div class="groups">
		<!--TODO Pagination-->
		<GroupItem
			v-for="group in groups"
			:key="group.id"
			:group="group"
		/>
	</div>
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
