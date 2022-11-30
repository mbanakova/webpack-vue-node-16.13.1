<template>
	<li class="faq" :class="{ open: faq.open }">
		<div class="question">{{ faq.question }}</div>
		<div class="answer">{{ faq.answer }}</div>
	</li>
</template>

<script>
export default {
	name: "FAQ",
	props: ["faq", "i", "open"],
};
</script>
