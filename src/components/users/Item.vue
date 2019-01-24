<template>
	<transition
		name="list-animate"
		appear
	>
		<BaseGroup
			icon="face"
			class="user"
			@click="onClick"
		>
			{{ user.name }}
		</BaseGroup>
	</transition>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true
		}
	},
	methods: {
		onClick() {
			this.$store.commit('modals/SET_USER', this.user)
		}
	}
}
</script>

<style lang="scss" scoped>
.user {
	padding: 5px 10px;
	margin-bottom: 10px;
	font-size: .8rem;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
	> span {
		margin-left: 10px;
	}
}
</style>
