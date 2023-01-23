<template>
	<svg fill="currentColor">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
})

const iconName = computed(() => {
	return `#icon-${props.name}`
})
</script>  