<template>
	<BaseModal
		value
		class="group-detail">
		<!--TODO BaseGroup-->
		<div
			v-if="data.description"
			class="group-description">
			<BaseIcon name="description" /> <span>{{ data.description }}</span>
		</div>
	</BaseModal>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>
