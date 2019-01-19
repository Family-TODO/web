<template>
	<div class="tasks">
		<BaseButton @click="onClickDelete">Delete</BaseButton>
		Tasks - {{ this.$route.params.id }}
	</div>
</template>

<script>
export default {
	methods: {
		onClickDelete() {
			this.$axios.delete(`groups/${this.$route.params.id}`)
				.then(res => {
					this.$router.push({ name: 'groups' })
					// TODO splice
				})
		}
	}
}
</script>
