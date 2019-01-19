<template>
	<div class="user">
		{{ user }}
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true
		}
	}
}
</script>
