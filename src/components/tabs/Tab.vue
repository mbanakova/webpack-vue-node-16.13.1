<template>
	<div class="tab__content" v-show="title == selectedTitle">
		<slot></slot>
	</div>
</template>

<script setup>
import { defineProps, inject } from "vue";

const props = defineProps({
	title: String,
});
const selectedTitle = inject("selectedTitle");
</script>
