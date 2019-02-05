<template>
	<button
		:class="['base-button', `base-button_size_${size}`, {
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
		size: {
			type: String,
			default: 'medium',
			validator: (val) => ~['small', 'medium'].indexOf(val)
		},
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
