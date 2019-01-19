<template>
	<div
		id="group_create"
		class="page">
		<BaseForm @submit="onSubmit">
			<BaseInput v-model="form.name.value" />
			<BaseTextarea v-model="form.description.value" />
			<BaseButton :loading="loading">Create</BaseButton>
		</BaseForm>
	</div>
</template>

<script>
import ValidateForm from '@/scripts/ValidateForm'

export default {
	data() {
		return {
			loading: false,
			form: {
				name: {
					value: '',
					error: {
						has: false,
						text: ''
					},
					validation: [
						v => !!v || 'Name is empty',
						v => v.length < 60 || 'Max length is 60'
					]
				},
				description: {
					value: '',
					error: {
						has: false,
						text: ''
					},
					validation: [
						v => v.length < 300 || 'Max length is 300'
					]
				}
			}
		}
	},
	methods: {
		onSubmit() {
			const validate = new ValidateForm(this.form)

			if (!validate.result) {
				this.$notification.error('Validation error')
				return
			}

			this.$axios.post('groups', validate.formData)
				.then(res => {
					this.$store.commit('groups/APPEND_GROUP', res.data.group)
					this.$router.push({ name: 'groups' }) // FIXME push to the new group
					this.loading = false
				})
				.catch(() => {
					this.loading = false
				})
		}
	}
}
</script>
