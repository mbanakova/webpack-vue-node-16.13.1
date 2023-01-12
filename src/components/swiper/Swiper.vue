<template>
	<swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
		<swiper-slide v-for="slide in slides" :key="slide.name"
			>{{ slide.name }}
			<!-- <img :src="require(`./../../img/${slide.img}`)" alt="" /> -->
		</swiper-slide>
	</swiper>
</template>
<script>
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const store = useStore();

		return {
			modules: [Navigation, Pagination],
			slides: computed(() => store.getters.getSlides),
		};
	},
};
</script>
