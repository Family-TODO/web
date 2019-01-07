<template>
	<div class="base-button">
		<button
			v-bind="$attrs"
			v-on="$listeners"
		>
			Button
		</button>
	</div>
</template>

<script>
export default {
	name: 'BaseButton',
	inheritAttrs: false
}
</script>
