<template>
	<div class="base-textarea">
		<label
			v-if="hasLabel"
			:for="strId">
			{{ label }}
		</label>
		<textarea
			:value="value"
			rows="5"
			:id="strId"
			v-bind="$attrs"
			v-on="listeners"
		/>
	</div>
</template>

<script>
import inputMixin from '@/mixins/input'

export default {
	name: 'BaseTextarea',
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
