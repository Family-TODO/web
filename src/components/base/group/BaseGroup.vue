<template>
	<div class="base-group">
		<div
			v-if="leftIcon"
			class="base-group__icon base-group__icon_left"
			@click="$emit('left-icon', $event)">
			<BaseIcon
				v-if="leftIcon"
				:name="leftIcon" />
		</div>
		<div class="base-group__content">
			<slot />
		</div>
		<div
			v-if="rightIcon"
			class="base-group__icon base-group__icon_right"
			@click="$emit('right-icon', $event)">
			<BaseIcon
				v-if="rightIcon"
				:name="rightIcon" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseGroup',
	props: {
		leftIcon: {
			type: String,
			default: ''
		},
		rightIcon: {
			type: String,
			default: ''
		}
	}
}
</script>
