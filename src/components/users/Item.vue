<template>
	<transition
		name="list-animate"
		appear
	>
		<div
			class="user"
			@click="onClick"
		>
			<BaseIcon name="face" />
			<span class="user__name">{{ user.name }}</span>
		</div>
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
			// this.$router.push({ name: 'user', params: { id: this.user.id } })
		}
	}
}
</script>

<style lang="scss" scoped>
.user {
	display: flex;
	align-items: center;
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
