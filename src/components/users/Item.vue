<template>
	<div
		class="user"
		@click="onClick"
	>
		{{ user.name || user.login }}
	</div>
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
	padding: 5px 10px;
	margin-bottom: 10px;
	font-size: .9rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	cursor: pointer;
}
</style>
