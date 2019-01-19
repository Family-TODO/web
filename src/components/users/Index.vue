<template>
	<div class="users">
		<transition-group
			tag="div"
			name="list-animate"
			class="users-list"
			appear
		>
			<UserItem
				v-for="user in users"
				:key="user.id"
				:user="user"
			/>
		</transition-group>
		<BaseButton
			v-if="!value"
			@click="onClickShowAll"
		>
			Show More
		</BaseButton>
	</div>
</template>

<script>
import UserItem from './Item'

export default {
	components: {
		UserItem
	},
	props: {
		/* Show all */
		value: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		users() {
			const users = this.$store.state.users.list

			if (!this.value) {
				return users.slice(0, 3)
			}

			return users
		}
	},
	methods: {
		onClickShowAll() {
			this.$emit('input', !this.value)
		}
	}
}
</script>

<style lang="scss" scoped>
.users {
	> .base-button {
		width: auto;
		height: 30px;
	}
}
</style>
