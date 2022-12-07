<template>
	<TheHeader />
	<div class="container">
		<section id="hero">
			<h1>Это просто песец</h1>
			<img src="./img/pesec.jpg" alt="" width="400" />
			<TheSVGSprite name="fire" />
			<TheSVGSprite name="stones" />
		</section>
		<section id="slider">
			<Carousel :navigation="true" :pagination="true" :startAutoplay="true" :timeout="6000" v-slot="{ currentSlide }">
				<Slide v-for="(slide, index) in carouselSlides" :key="index">
					<div v-show="currentSlide === index + 1" class="slide__info">
						<img :src="require(`./img/${slide}.jpg`)" alt="" />
					</div>
				</Slide>
			</Carousel>
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
import Carousel from "./components/slider/Carousel.vue";
import Slide from "./components/slider/Slide.vue";

export default {
	components: {
		TheHeader,
		Tab,
		TabsWrapper,
		TheSVGSprite,
		TheAccordion,
		Carousel,
		Slide,
	},
	setup() {
		const carouselSlides = ["sl1", "sl2", "sl3", "sl4"];

		return { carouselSlides };
	},
};
</script>
