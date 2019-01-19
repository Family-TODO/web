<template>
	<div class="base-input">
		<label
			v-if="hasLabel"
			:for="strId">
			{{ label }}
		</label>
		<input
			:value="value"
			:id="strId"
			v-bind="$attrs"
			v-on="listeners"
		>
	</div>
</template>

<script>
import inputMixin from '@/mixins/input'

export default {
	name: 'BaseInput',
	inheritAttrs: false,
	mixins: [
		inputMixin
	],
	props: {
		value: {
			type: String,
			default: ''
		}
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				input: (evt) => {
					this.$emit('input', evt.target.value)
				}
			}
		}
	}
}
</script>
