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
			if (!this.loading) {
				this.$emit('right', evt)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
.top-bar {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 45px;
	padding: 5px 0;
	background-color: rgba(0, 0, 0, .2);
	border-bottom: 1px solid #2c2c4d;
}

.top-bar__left, .top-bar__right {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 100%;
	line-height: 0;
	cursor: pointer;
	user-select: none;
	> i {
		font-size: 20px;
	}
}

.top-bar__left {
	margin-left: 5px;
}

.top-bar__center {
	flex: 1;
	flex-basis: auto;
	padding: 0 10px;
	will-change: transform;
	> span {
		font-weight: 600;
		letter-spacing: 1px;
	}
}

.top-bar__right {
	margin-right: 5px;
	&.loading {
		opacity: .7;
		pointer-events: none;
		@include animRotate();
	}
}

// <animate>

.top-bar-animate-enter-active {
	.top-bar__center {
		transform: translate3d(-10px, 0, 0);
		opacity: .2;
		transition: .4s;
	}
}

.top-bar-animate-enter-to {
	.top-bar__center {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}
</style>
