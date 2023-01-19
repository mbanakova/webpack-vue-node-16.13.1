<template>
	<TheHeader />
	<main class="container">
		<section id="hero">
			<h1>Это песец</h1>
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
			<Tabs />
		</section>
	</main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import Tabs from "./components/tabs/Tabs.vue";
import TheSVGSprite from "./components/TheSVGSprite.vue";
import TheAccordion from "./components/accordion/TheAccordion.vue";
import Swiper from "./components/swiper/Swiper.vue";
import { useMenuStore } from "./pinia/menuStore";

const store = useMenuStore();
store.checkScreenWidth(); // контролирует бургер-меню и body-scroll-lock при открытом меню
window.addEventListener("resize", store.checkScreenWidth);
</script>
