<template>
	<div
		id="settings"
		class="page"
	>
		<TopBar title="Settings" />
		<main>
			Settings
			<!--TODO profile section-->
			<!--TODO list of users-->
		</main>
	</div>
</template>

<script>
import Tasks from '@/components/tasks/Index'
import TopBar from '@/components/TopBar'

export default {
	components: {
		Tasks, TopBar
	},
	props: {
		group: {
			type: Object,
			default: () => {}
		}
	}
}
</script>
