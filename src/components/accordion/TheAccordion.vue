<template>
	<ul class="faqs">
		<FAQ v-for="(faq, i) in faqs" :open="faq.open" :faq="faq" :index="i" :key="i" @click="toggleOpen(i)" />
	</ul>
</template>

<script>
import FAQ from "./FAQ";

export default {
	components: { FAQ },
	data() {
		return {
			faqs: [
				{
					question: "5*2",
					answer: "10",
					open: true,
				},
				{
					question: "3*7",
					answer: "21",
					open: false,
				},
				{
					question: "6*8",
					answer: "48",
					open: false,
				},
			],
		};
	},
	methods: {
		toggleOpen(index) {
			console.log(index);
			this.faqs = this.faqs.map((faq, i) => {
				if (index === i) {
					faq.open = !faq.open;
				} else {
					faq.open = false;
				}
				return faq;
			});
		},
	},
};
</script>

<style></style>
