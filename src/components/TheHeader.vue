<template>
	<header class="header">
		<div class="container header__container">
			<nav class="nav">
				<a class="nav__link nav__logo"><font-awesome icon="fa-campground" /> Any logo</a>
				<ul class="nav__list" v-if="!mobile">
					<li>
						<a class="nav__link" href="#slider" v-smooth-scroll>Scroll to slider</a>
					</li>
					<li>
						<a class="nav__link" href="#tabs" v-smooth-scroll>Scroll to tabs</a>
					</li>
				</ul>

				<div class="mobile-menu" v-if="mobile">
					<p class="mobile-menu__title">Menu</p>
					<button class="hamburger" @click="toggleHamburger" :class="{ 'is-active': mobileNav }">
						<div class="bar"></div>
					</button>
				</div>

				<transition name="mobile-nav">
					<div class="mobile-nav" v-if="mobileNav">
						<ul class="mobile-nav__list">
							<li>
								<a class="nav__link" href="#slider" v-smooth-scroll @click="toggleHamburger">Scroll to slider</a>
							</li>
							<li>
								<a class="nav__link" href="#tabs" v-smooth-scroll @click="toggleHamburger">Scroll to tabs</a>
							</li>
						</ul>
						<ul class="mobile-nav__contacts">
							<li>
								<a class="nav__link" href="#"><font-awesome icon="envelope" /> </a>
							</li>
							<li>
								<a class="nav__link" href="#"><font-awesome icon="phone" /> </a>
							</li>
							<li>
								<a class="nav__link" href="#"><font-awesome icon="piggy-bank" /> </a>
							</li>
						</ul>
					</div>
				</transition>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "TheHeader",
	data() {
		return {
			mobile: null,
			mobileNav: null,
			windowWidth: null,
		};
	},
	created() {
		window.addEventListener("resize", this.checkScreen);
		this.checkScreen();
	},
	methods: {
		toggleHamburger() {
			this.mobileNav = !this.mobileNav;
		},
		checkScreen() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth <= 767) {
				this.mobile = true;
				return;
			}
			this.mobile = false;
			this.mobileNav = false;
			return;
		},
	},
};
</script>
