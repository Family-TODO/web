<template>
	<transition
		name="top-bar-animate"
		:duration="400"
		appear
	>
		<header class="top-bar">
			<div
				v-if="!leftDisable"
				class="top-bar__left"
				@click="onClickLeft"
			>
				<slot name="left">
					<BaseIcon :name="leftIcon" />
				</slot>
			</div>
			<div class="top-bar__center">
				<slot>
					<span>{{ title || 'Home page' }}</span>
				</slot>
			</div>
				<div
					v-if="!rightDisable"
					:class="['top-bar__right', {
						'loading': loading
					}]"
					@click="onRightClick"
				>
					<slot name="right">
						<BaseIcon :name="rightIcon" />
					</slot>
				</div>
		</header>
	</transition>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		leftDisable: {
			type: Boolean,
			default: false
		},
		leftIcon: {
			type: String,
			default: 'keyboard_arrow_left'
		},
		leftClick: {
			type: Function,
			default: null
		},
		rightDisable: {
			type: Boolean,
			default: false
		},
		rightIcon: {
			type: String,
			default: 'refresh'
		},
		rightClick: {
			type: Function,
			default: null
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onClickLeft(evt) {
			if (this.leftClick) {
				this.leftClick(evt)
			} else {
				this.$router.push({ name: 'groups' })
			}

			this.$emit('left', evt)
		},
		onRightClick(evt) {
			this.$emit('right', evt)
		}
	}
}
</script>
