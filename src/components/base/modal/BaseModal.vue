<template>
	<transition
		name="base-modal"
		appear
	>
		<div
			v-if="value"
			class="base-modal"
		>
			<div class="base-modal__content">
				<slot />
			</div>
			<div class="base-modal__footer">
				<BaseButton
					icon
					@click="onClickClose"
				>
					<BaseIcon name="close" />
				</BaseButton>
			</div>
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
		},
		onClickClose() {
			this.$store.commit('modals/CLOSE_MODAL')
		}
	}
}
</script>
