<template>
	<BaseModal
		v-model="modal"
		class="group-detail">
		<!--TODO BaseGroup-->
		<div
			v-if="group.description"
			class="group-description">
			<BaseIcon name="description" /> <span>{{ group.description }}</span>
		</div>
	</BaseModal>
</template>

<script>
export default {
	data() {
		return {
			modal: false
		}
	},
	mounted() {
		this.modal = true
	},
	computed: {
		group() {
			return this.$store.state.modals.group
		}
	},
	watch: {
		group(val) {
			this.modal = !!val
		}
	}
}
</script>
