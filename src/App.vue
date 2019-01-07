<template>
	<div id="app">
		<RouterView />
	</div>
</template>

<script>
const STORE_TOKEN = 'token'
const STORE_USER = 'user'

export default {
	/**
	 * Get data from localStorage and set init config.
	 */
	beforeCreate() {
		const storageUserData = localStorage.getItem(STORE_USER)
		const token = localStorage.getItem(STORE_TOKEN)

		if (!storageUserData || !token) {
			return this.$router.push({ name: 'auth' })
		}

		try {
			const user = JSON.parse(storageUserData)

			this.$axios.defaults.headers['Auth'] = token
			this.$store.commit('profile/SET_USER', user)
			// TODO Connect to websocket

		} catch (e) {
			localStorage.removeItem(STORE_USER)
			localStorage.removeItem(STORE_TOKEN)
			this.$router.push({ name: 'auth' })
		}
	}
}
</script>
