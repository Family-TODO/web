<template>
	<i class="base-icon material-icons"><slot>{{ name }}</slot></i>
</template>

<script>
export default {
	name: 'BaseIcon',
	props: {
		name: {
			type: String,
			default: ''
		}
	}
}
</script>
