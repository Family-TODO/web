<template>
	<div class="page">
		<!--TODO Group name-->
		<TopBar title="Group ??" />
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
