<template>
	<div
		id="dashboard"
		class="page"
	>
		<TopBar />
		<main>
			<!--TODO Loading-->
			<Groups />
		</main>
	</div>
</template>

<script>
import Groups from '@/components/groups/Index'
import TopBar from '@/components/TopBar'

export default {
	components: {
		Groups, TopBar
	}
}
</script>
