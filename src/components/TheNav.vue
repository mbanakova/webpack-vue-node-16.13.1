<template>
	<nav class="nav" :class="{ open: menuOpen }">
		<ul class="nav__list">
			<li>
				<a class="nav__link" href="#slider" v-smooth-scroll @click="toggleHamburger">Scroll to slider</a>
			</li>
			<li>
				<a class="nav__link" href="#accordion" v-smooth-scroll @click="toggleHamburger">Scroll to accordion</a>
			</li>
			<li>
				<a class="nav__link" href="#tabs" v-smooth-scroll @click="toggleHamburger">Scroll to tabs</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	name: "TheNav",
	setup() {
		const store = useStore();
		const menuOpen = computed(() => {
			return store.getters.getMenuState;
		});
		const mobile = computed(() => {
			return store.getters.getMobileState;
		});
		const body = document.querySelector("body");

		function toggleHamburger() {
			store.dispatch("toggleMenu");

			if (mobile) {
				body.classList.toggle("no-scroll");
			}
		}

		return { menuOpen, toggleHamburger };
	},
};
</script>

<style></style>
