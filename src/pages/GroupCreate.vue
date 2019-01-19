<template>
	<div
		id="group_create"
		class="page">
		<form @submit.prevent="onSubmit">
			<BaseInput v-model="form.name" />
			<BaseTextarea v-model="form.description" />
			<BaseButton>Create</BaseButton>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {}
		}
	},
	methods: {
		onSubmit() {
			// TODO Validate, loading, etc

			const fd = new FormData
			fd.set('name', this.form.name)
			fd.set('description', this.form.description)

			this.$axios.post('groups', fd)
				.then(res => {
					this.$store.commit('groups/APPEND_GROUP', res.data.group)
					this.$router.push({ name: 'dashboard' })
				})
		}
	}
}
</script>
