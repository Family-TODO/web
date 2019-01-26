<template>
	<transition
		name="list-animate"
		appear
	>
		<BaseGroup
			icon="face"
			class="user"
			@click="onClick"
		>
			<span>{{ user.name }}</span>
			<BaseIcon
				v-if="user.is_admin"
				name="star_border" />
		</BaseGroup>
	</transition>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true
		}
	},
	methods: {
		onClick() {
			this.$store.commit('modals/SET_USER', this.user)
		}
	}
}
</script>

<style lang="scss" scoped>
.user {
	padding: 5px 10px;
	margin-bottom: 10px;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
	> span {
		margin-left: 10px;
	}
	/deep/ .base-group__content {
		display: flex;
		align-items: center;
		width: 100%;
		> span {
			flex: 1;
			flex-basis: auto;
		}
	}
}
</style>
