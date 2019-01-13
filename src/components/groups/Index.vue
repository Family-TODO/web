<template>
	<div class="groups">
		<!--TODO router-link-->
		<article
			v-for="(group, index) in groups"
			:key="index"
			class="group">
			<header class="group__header">
				<div class="group-name">{{ group.name }}</div>
			</header>
			<footer class="group__footer">

			</footer>
		</article>
	</div>
</template>

<script>
export default {
	data() {
		return {
			groups: {}
		}
	},
	mounted() {
		// TODO Store
		this.$axios.get('groups')
			.then(res => {
				this.groups = res.data.groups
			})
	}
}
</script>
