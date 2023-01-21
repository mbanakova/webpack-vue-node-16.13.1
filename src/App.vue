<template>
	<Sprite />
	<TheHeader />
	<main class="container">
		<section id="hero">
			<h1>Это песец</h1>
			<img src="./img/pesec.jpg" alt="" width="400" />
			<svg-icon name="fire" />
			<svg-icon name="stones" /> svg лежат в Sprite.vue, он подключён в html,
			так что можно вставлять в любой компонент без импорта
		</section>
		<section id="swiper">
			<Swiper />
		</section>

		<section id="accordion">
			<Accordion />
		</section>
		<section id="tabs">
			<Tabs />
		</section>
		<GoToPageTop />
	</main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import Tabs from "./components/Tabs.vue";
import Sprite from "./components/Sprite.vue"; // добавить ручками тег symbol и задать id (формат "icon-id")
import Accordion from "./components/Accordion.vue";
import Swiper from "./components/Swiper.vue";
import GoToPageTop from "./components/GoToPageTop.vue";
import { useMenuStore } from "./pinia/menuStore";

const store = useMenuStore();
store.checkScreenWidth(); // контролирует бургер-меню и body-scroll-lock при открытом меню
window.addEventListener("resize", store.checkScreenWidth);
</script>
