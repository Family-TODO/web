<template>
	<div
		:class="['base-checkbox', `base-checkbox_size_${size}`]"
		v-on="listeners">
		<div
			:class="['base-checkbox__input', {
			'base-checkbox__input_checked': value,
			'base-checkbox__input_only_view': onlyView
		}]"
		/>
		<div
			v-if="hasDefaultSlot"
			class="base-checkbox__content">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseCheckbox',
	inheritAttrs: false,
	props: {
		value: {
			type: Boolean,
			default: false
		},
		onlyView: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'medium',
			validator: (val) => {
				return ~['small', 'medium'].indexOf(val)
			}
		}
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				click: (evt) => {
					if (!this.onlyView) {
						this.$emit('input', !this.value)
					}
					this.$emit('click', evt)
				}
			}
		},
		hasDefaultSlot() {
			return !!this.$slots.default
		}
	}
}
</script>
