<template>
	<transition name="top-bar-animate" :duration="250" appear>
		<header class="top-bar">
			<div
				class="top-bar__left"
				@click="onClickLeft">
				<i
					v-if="isHomePage"
					class="material-icons">keyboard_arrow_left</i>
				<i
					v-else
					class="material-icons">face</i>
			</div>
			<div class="top-bar__center">
				<slot><span>{{ title || 'Home page' }}</span></slot>
			</div>
			<div
				class="top-bar__right"
				@click="onClickRight">
				<i class="material-icons">search</i>
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
		backRouteName: {
			type: String,
			default: 'dashboard'
		}
	},
	data() {
		return {}
	},
	computed: {
		hasDefaultSlot() {
			return !!this.$slots.default
		},
		isHomePage() {
			return this.hasDefaultSlot || !!this.title
		}
	},
	methods: {
		onClickLeft() {
			this.$router.push({ name: this.isHomePage ? this.backRouteName : 'profile' })
		},
		onClickRight() {

		}
	}
}
</script>
