<template>
	<div class="">
		<pre>Swiper {{ slides }}</pre>
		<swiper
			:navigation="true"
			:pagination="true"
			:modules="modules"
			class="mySwiper"
		>
			<swiper-slide v-for="slide in slides" :key="slide.img">
				<Picture
					:name="slide.img"
					:alt="slide.name"
					:isMobile="false"
					type="jpg"
				></Picture>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Picture from './Picture.vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation, Pagination} from 'swiper'
import {useSlidesStore} from './../pinia/slidesStore'

const slidesStore = useSlidesStore()
const modules = [Navigation, Pagination]
const slides = slidesStore.slides
</script>
