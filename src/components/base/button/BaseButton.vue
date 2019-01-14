<template>
	<button
		:class="['base-button', {
			'base-button_icon': icon,
			'base-button_round': round
		}]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	inheritAttrs: false,
	props: {
		icon: {
			type: Boolean,
			default: false
		},
		round: {
			type: Boolean,
			default: false
		}
	}
}
</script>
