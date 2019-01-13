<template>
	<div class="tasks">
		Tasks - {{ this.$route.params.group }}
	</div>
</template>

<script>
export default {
	mounted() {
		console.log(this.$router, this.$route)
	}
}
</script>
