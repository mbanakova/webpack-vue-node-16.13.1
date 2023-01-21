<template>
	<ul class="faqs">
		<pre>accordion: {{ accordion }}</pre>
		<li
			v-auto-animate
			v-for="faq in accordion"
			class="faq"
			:key="faq.id"
			@click="store.selectAccordion(faq.id)"
			:class="{ open: faq.isActive }"
		>
			<div class="question">{{ faq.question }}</div>
			<div v-if="faq.isActive" class="answer">{{ faq.answer }}</div>
		</li>
	</ul>
</template>

<script setup>
import { useAccordionStore } from "./../pinia/accordionStore";
const store = useAccordionStore();
const accordion = store.accordion;
</script>
