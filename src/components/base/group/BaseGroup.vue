<template>
	<div class="base-group">
		<div class="base-group__icon">
			<BaseIcon
				v-if="icon"
				:name="icon" />
		</div>
		<div class="base-group__content">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseGroup',
	props: {
		icon: {
			type: String,
			default: ''
		}
	}
}
</script>
