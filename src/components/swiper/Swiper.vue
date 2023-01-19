<template>
	<div class="">
		<pre>{{ slides }}</pre>
		<swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
			<swiper-slide v-for="slide in slides" :key="slide.name"
				>{{ slide.name }}
				<img :src="require(`./../../img/${slide.img}`)" alt="" />
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { useSlidesStore } from "./../../pinia/slidesStore";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const slidesStore = useSlidesStore();

		return {
			modules: [Navigation, Pagination],
			slides: slidesStore.slides,
		};
	},
};
</script>
