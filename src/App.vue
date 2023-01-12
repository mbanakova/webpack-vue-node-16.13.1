<template>
	<TheHeader />
	<main class="container">
		<section id="hero">
			<h1>Это просто песец</h1>
			<img src="./img/pesec.jpg" alt="" width="400" />
			<TheSVGSprite name="fire" />
			<TheSVGSprite name="stones" />
		</section>
		<section id="swiper">
			<Swiper />
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
	</main>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import Tab from "./components/tabs/Tab.vue";
import TabsWrapper from "./components/tabs/TabsWrapper.vue";
import TheSVGSprite from "./components/TheSVGSprite.vue";
import TheAccordion from "./components/accordion/TheAccordion.vue";
import Swiper from "./components/swiper/Swiper.vue";

export default {
	components: {
		TheHeader,
		Tab,
		TabsWrapper,
		TheSVGSprite,
		TheAccordion,
		Swiper,
	},
	setup() {},
};
</script>
