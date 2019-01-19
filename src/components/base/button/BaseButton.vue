<template>
	<button
		:class="['base-button', {
			'base-button_icon': icon,
			'base-button_round': round,
			'base-button_loading': loading
		}]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />
		<span
			v-if="loading"
			class="base-button__loading"
		>
			<span /><span />
		</span>
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
		},
		loading: {
			type: Boolean,
			default: false
		}
	}
}
</script>
