<template>
	<svg fill="currentColor" v-on="$listeners">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
});

const iconName = computed(() => {
	return `#icon-${props.name}`;
});
</script>  