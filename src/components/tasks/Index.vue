<template>
	<div class="tasks">
		<!--<BaseButton @click="onClickDelete">-->
			<!--Delete-->
		<!--</BaseButton>-->
		Tasks - {{ this.$route.params.id }}
	</div>
</template>

<script>
export default {
	props: {
		group: {
			type: Object,
			required: true
		}
	},
	methods: {
		// onClickDelete() {
		// 	this.$axios.delete(`groups/${this.$route.params.id}`)
		// 		.then(() => {
		// 			this.$router.push({ name: 'groups' })
		// 			// TODO splice
		// 		})
		// }
	}
}
</script>
