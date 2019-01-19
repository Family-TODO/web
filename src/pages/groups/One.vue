<template>
	<div
		id="tasks"
		class="page"
	>
		<!--TODO Group name-->
		<TopBar title="Tasks" />
		<main>
			<Tasks />
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
