<template>
	<header class="header">
		<div
			class="header__left"
			@click="onClickLeft">
			<i
				v-if="hasDefaultSlot"
				class="material-icons">keyboard_arrow_left</i>
			<i
				v-else
				class="material-icons">face</i>
		</div>
		<div class="header__center">
			<slot><span>Home page</span></slot>
		</div>
		<div
			class="header__right"
			@click="onClickRight">
			<i class="material-icons">search</i>
		</div>
	</header>
</template>

<script>
export default {
	props: {
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
		}
	},
	methods: {
		onClickLeft() {
			this.$router.push({ name: this.hasDefaultSlot ? this.backRouteName : 'profile' })
		},
		onClickRight() {

		}
	}
}
</script>
