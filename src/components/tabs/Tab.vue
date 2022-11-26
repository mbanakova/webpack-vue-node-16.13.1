<template>
	<div class="tab__content" v-show="title == selectedTitle">
		<slot></slot>
	</div>
</template>

<script>
import { inject } from "vue";

export default {
	props: ["title"],

	setup() {
		const selectedTitle = inject("selectedTitle");

		return { selectedTitle };
	},
};
</script>

<style lang="scss" scoped>
// .tab__content {
// 	background-color: $dark;
// 	padding: 20px;
// 	text-align: center;
// }
</style>
