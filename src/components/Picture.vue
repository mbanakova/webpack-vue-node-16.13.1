<template>
	<picture>
		<source
			type="image/webp"
			media="(max-width: 767px)"
			:srcset="require(`./../img/${name}-mob.webp`)"
		/>
		<source
			media="(max-width: 767px)"
			:srcset="require(`./../img/${name}-mob.jpg?png`)"
		/>
		<source
			type="image/webp"
			media="(min-width: 1px)"
			:srcset="require(`./../img/${name}.webp`)"
		/>
		<source
			media="(min-width: 768px)"
			:srcset="require(`./../img/${name}.jpg?png`)"
		/>
		<img width="400" :src="require(`./../img/${name}.jpg`)" :alt="imgAlt" />
	</picture>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
});
const imgName = computed(() => {
	return `${props.name}`;
});

const imgAlt = computed(() => {
	return `${props.alt}`;
});
</script>  