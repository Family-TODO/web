<template>
	<div id="app">
		<RouterView />
	</div>
</template>

<script>
const STORE_NAME = 'user'

export default {
	beforeCreate() {
		const storageUserData = localStorage.getItem(STORE_NAME)

		if (!storageUserData) {
			return this.$router.push({ name: 'auth' })
		}

		try {
			const user = JSON.parse(storageUserData)

			this.$store.commit('profile/SET_USER', user)
			// TODO Connect to websocket

		} catch (e) {
			localStorage.removeItem(STORE_NAME)
			this.$router.push({ name: 'auth' })
		}
	}
}
</script>
