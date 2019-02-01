<template>
	<div class="groups">
		<GroupItem
			v-for="(group, key) in groups"
			:key="key"
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
	props: {
		groups: {
			type: [Object, Array],
			default: () => {}
		}
	}
}
</script>
