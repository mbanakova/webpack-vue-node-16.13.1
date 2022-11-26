<template>
	<div class="tabs">
		<ul class="tabs__header">
			<li class="tabs__title" v-for="title in tabTitles" :key="title" @click="selectedTitle = title" :class="{ selected: title == selectedTitle }">{{ title }}</li>
		</ul>
		<slot></slot>
	</div>
</template>

<script>
import { ref, provide } from "vue";

export default {
	setup(props, { slots }) {
		const tabTitles = ref(slots.default().map(tab => tab.props.title));
		const selectedTitle = ref(tabTitles.value[0]);

		provide("selectedTitle", selectedTitle);
		return {
			tabTitles,
			selectedTitle,
		};
	},
};
</script>

<style lang="scss" scoped>
// .tabs {
// 	max-width: 400px;
// 	margin: 0 auto;
// }

// .tabs__header {
// 	list-style: none;
// 	margin: 0;
// 	padding: 0;
// 	display: flex;
// 	justify-content: space-beetween;
// }

// .tabs__title {
// 	text-align: center;
// 	padding: 10px 20px;
// 	background-color: $dark;
// 	color: light;
// 	border: 1px solid $bright;
// 	border-radius: 10px 10px 0 0;
// 	cursor: pointer;
// 	transition: $tr;

// 	&.selected {
// 		background-color: $accent;
// 	}
// }
</style>
