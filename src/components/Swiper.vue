<template>
	<div class="">
		<swiper
			:navigation="true"
			:pagination="true"
			:modules="modules"
			class="mySwiper"
		>
			<swiper-slide v-for="slide in slides" :key="slide.name"
				>{{ slide.name }}
				<img :src="require(`./../img/${slide.img}`)" alt="" />
			</swiper-slide>
		</swiper>
	</div>
</template>
<script setup>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { useSlidesStore } from "./../pinia/slidesStore";

const slidesStore = useSlidesStore();

const modules = [Navigation, Pagination];
const slides = slidesStore.slides;
</script>
