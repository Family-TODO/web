<template>
	<transition
		name="list-animate"
		appear
	>
		<div class="group">
			<router-link :to="{ name: 'group', params: { id: group.id } }">
				<header class="group__header">
					<div class="group__header-name">
						<span>{{ group.name }}</span>
					</div>
					<div class="group__header-time">
						{{ time }}
					</div>
				</header>
				<footer class="group__footer">
					<div
						v-if="lastTask"
						class="group__footer-task"
					>
						<BaseCheckbox
							:value="lastTask.done_time"
							size="small"
							only-view>
							{{ lastTask.name }}
						</BaseCheckbox>
					</div>
					<div class="group__footer-right">
						<BaseIcon
							v-if="group.creator_id === currentUser.id"
							name="star"
							class="color_yellow"
						/>
						<div class="group__footer-right__users">
							<span>{{ group.users.length }}</span>
							<BaseIcon name="people" />
						</div>
					</div>
				</footer>
			</router-link>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		group: {
			type: Object,
			required: true
		}
	},
	computed: {
		currentUser() {
			return this.$store.state.profile.user
		},
		lastTask() {
			if (!this.group.tasks || !this.group.tasks.length) {
				return null
			}

			return this.group.tasks[0]
		},
		time() {
			// const date = this.group.updated_at
			// const now = new Date

			// TODO Calculate date (hour:minute or Day of week or day.month or year

			return '3:10 PM'
		}
	}
}
</script>

<style lang="scss" scoped>
$colorSecondary: #c5c5c5;

.group {
	border-bottom: 1px solid rgba(0, 0, 0, .1);
	font-size: .8em;
	> a {
		display: block;
		padding: 10px 15px;
	}
	&:first-child {
		margin-top: 0;
	}
	&:last-child {
		margin-bottom: 0;
	}
}

// Header

.group__header {
	display: flex;
	align-items: center;
}

.group__header-name {
	display: flex;
	flex: 1;
	flex-basis: auto;
	font-weight: 600;
	padding-right: 10px;
	> span {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
	}
}

.group__header-time {
	white-space: nowrap;
	font-size: .6em;
	color: $colorSecondary;
}

// Footer

.group__footer {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 8px;
	color: $colorSecondary;
	font-size: .8em;
	> .base-checkbox {
		font-size: .6em;
		margin-left: 3px;
	}
	> .base-icon {
		font-size: .6em;
	}
}

.group__footer-task {
	display: flex;
	align-items: center;
	flex: 1;
	flex-basis: auto;
	margin-right: 15px;
	white-space: nowrap;
	overflow: hidden;
}

.group__footer-right {
	display: flex;
	align-items: center;
	font-size: .8em;
}

.group__footer-right__users {
	display: flex;
	align-items: center;
	margin-left: 5px;
	> i {
		margin: 2px 0 0 2px;
	}
}
</style>
