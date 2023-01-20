<template>
	<button type="button" class="go-up" @click="toTop"></button>
</template>

<script setup>
function toTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
</script>
