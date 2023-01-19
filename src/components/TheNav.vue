<template>
	<nav class="nav" :class="{ open: store.menuOpen }">
		<ul class="nav__list">
			<li>
				<a class="nav__link" href="#swiper" v-smooth-scroll @click="store.toggleMenu()">Scroll to slider</a>
			</li>
			<li>
				<a class="nav__link" href="#accordion" v-smooth-scroll @click="store.toggleMenu()">Scroll to accordion</a>
			</li>
			<li>
				<a class="nav__link" href="#tabs" v-smooth-scroll @click="store.toggleMenu()">Scroll to tabs</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { useMenuStore } from "./../pinia/menuStore";
const store = useMenuStore();
</script>
