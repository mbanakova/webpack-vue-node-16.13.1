<template>
	<header class="header">
		<div class="container header__container">
			<a class="nav__logo">Any logo</a>
			<button v-if="mobile" class="hamburger" @click="toggleHamburger" :class="{ 'is-active': menuOpen }">
				<div class="bar"></div>
			</button>
			<TheNav />
		</div>
	</header>
</template>

<script>
import TheNav from "./TheNav.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
	name: "TheHeader",
	components: {
		TheNav,
	},
	setup() {
		const store = useStore();
		const windowWidth = ref(null);
		const mobile = computed(() => {
			return store.getters.getMobileState;
		});
		const menuOpen = computed(() => {
			return store.getters.getMenuState;
		});

		window.addEventListener("resize", checkScreen);
		checkScreen();

		function toggleHamburger() {
			store.dispatch("toggleMenu");
			if (mobile) {
				document.querySelector("body").classList.toggle("no-scroll");
			}
		}

		function checkScreen() {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value <= 767) {
				store.dispatch("isMobile");
				return;
			}
			store.dispatch("isNotMobile");
			store.dispatch("toggleMenu");
		}
		return { mobile, menuOpen, windowWidth, toggleHamburger };
	},
};
</script>
