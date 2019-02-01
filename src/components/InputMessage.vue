<template>
	<div class="message">
		<BaseInput v-model="message" />
		<BaseButton @click="onClick">
			<BaseIcon name="send" />
		</BaseButton>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: ''
		}
	},
	methods: {
		onClick() {
			this.$emit('send', this.message)
			this.message = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.message {
	display: flex;
	background: rgba(0, 0, 0, .3);
	height: 40px;

	.base-button,
	.base-input /deep/ input {
		max-width: none;
		min-width: auto;
		height: 100%;
	}

	.base-button {
		min-width: 50px;
		background: rgba(0, 0, 0, .5);
	}

	.base-input {
		flex: 1;
		flex-basis: auto;
	}
}
</style>
