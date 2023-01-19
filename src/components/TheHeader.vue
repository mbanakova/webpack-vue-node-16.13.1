<template>
	<header class="header">
		<div class="container header__container">
			<a class="nav__logo">Any logo</a>
			<button v-if="store.isMobile" class="hamburger" @click="store.toggleMenu()" :class="{ 'is-active': store.menuOpen }">
				<div class="bar"></div>
			</button>
			<TheNav />
		</div>
	</header>
</template>

<script setup>
import TheNav from "./TheNav";
import { useMenuStore } from "./../pinia/menuStore";

const store = useMenuStore();
</script>
