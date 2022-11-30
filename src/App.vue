<template>
	<TheHeader />
	<div class="container">
		<section id="hero">
			<h1>
				{{ name }}
			</h1>
			<img src="./img/pesec.jpg" alt="" width="400" />
			<TheSVGSprite name="fire" />
			<TheSVGSprite name="stones" />
		</section>
		<section id="accordion">
			<TheAccordion />
		</section>
		<section id="tabs">
			<TabsWrapper>
				<Tab title="tab1">1</Tab>
				<Tab title="tab2">2</Tab>
				<Tab title="tab3">3</Tab>
				<Tab title="tab4">4</Tab>
			</TabsWrapper>
		</section>
	</div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import Tab from "./components/tabs/Tab.vue";
import TabsWrapper from "./components/tabs/TabsWrapper.vue";
import TheSVGSprite from "./components/TheSVGSprite.vue";
import TheAccordion from "./components/accordion/TheAccordion.vue";

export default {
	components: {
		TheHeader,
		Tab,
		TabsWrapper,
		TheSVGSprite,
		TheAccordion,
	},
	data: function () {
		return {
			name: "Это просто песец",
		};
	},
};
</script>
