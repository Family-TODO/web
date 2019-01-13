<template>
	<transition-group name="groups-animate" class="groups">
		<!--TODO Pagination-->
		<group-item
			v-for="group in groups"
			:key="group.id"
			:group="group" />
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
	data() {
		return {
			groups: {}
		}
	},
	mounted() {
		// TODO Store
		this.get()
	},
	methods: {
		get() {
			this.groups = {}

			this.$axios.get('groups', {
				params: this.params
			})
				.then(res => {
					this.groups = res.data.groups
				})
		}
	}
}
</script>
