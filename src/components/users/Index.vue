<template>
	<transition-group
		tag="div"
		name="list-animate"
		class="users"
		appear
	>
		<UserItem
			v-for="user in users"
			:key="user.id"
			:user="user" />
		<!--TODO Show more button-->
	</transition-group>
</template>

<script>
import UserItem from './Item'

export default {
	components: {
		UserItem
	},
	computed: {
		users() {
			return this.$store.state.users.list
		}
	}
}
</script>
