<template>
	<div class="page">
		<TopBar
			title="Create a group"
			:loading="loading"
			right-disable
		/>
		<main>
			<BaseForm
				:loading="loading"
				@submit="onSubmit"
			>
				<BaseInput
					v-model="form.name.value"
					label="Name"
				/>
				<BaseTextarea
					v-model="form.description.value"
					label="Description"
				/>
				<BaseButton :loading="loading">
					Create
				</BaseButton>
			</BaseForm>
		</main>
	</div>
</template>

<script>
import ValidateForm from '@/scripts/ValidateForm'
import TopBar from '@/components/TopBar'

export default {
	components: {
		TopBar
	},
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

			this.loading = true

			this.$axios.post('groups', validate.formData)
				.then(res => {
					this.$store.commit('groups/ADD_GROUP', res.data.group)
					this.$router.push({ name: 'group', params: { id: res.data.group.id } })
					this.loading = false
				})
				.catch(() => {
					this.loading = false
				})
		}
	}
}
</script>

<style lang="scss" scoped>
main {
	padding: 20px;
}
</style>
