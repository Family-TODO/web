<template>
	<transition name="base-modal">
		<div
			v-if="value"
			class="base-modal"
		>
			<slot />
		</div>
	</transition>
</template>

<script>
export default {
	name: 'BaseModal',
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		value: {
			handler(val) {
				if (val) {
					window.addEventListener('keydown', this.onWindowKeydown)
				} else {
					window.removeEventListener('keydown', this.onWindowKeydown)
				}
			},
			immediate: true
		}
	},
	beforeDestroy() {
		window.removeEventListener('keydown', this.onWindowKeydown)
	},
	methods: {
		onWindowKeydown(evt) {
			if (evt.key === 'Escape') {
				this.$emit('input', false)
			}
		}
	}
}
</script>
