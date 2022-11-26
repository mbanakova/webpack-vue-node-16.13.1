<template>
	<TheHeader />
	<div class="container">
		<section id="hero">
			<h1>
				{{ name }}
			</h1>
			<button @click="plusOne">Iterate</button>
			<div>{{ counter }}</div>
			<img src="./img/plant.png" width="200" />
		</section>
		<section id="tabs">
			<TabsWrapper>
				<Tab title="tab1">1</Tab>
				<Tab title="tab2">2</Tab>
				<Tab title="tab3">3</Tab>
				<Tab title="tab4">4</Tab>
			</TabsWrapper>
		</section>
	</div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import Tab from "./components/tabs/Tab.vue";
import TabsWrapper from "./components/tabs/TabsWrapper.vue";
export default {
	components: {
		TheHeader,
		Tab,
		TabsWrapper,
	},
	data: function () {
		return {
			name: "Hello 122211 World!",
			counter: 0,
		};
	},
	methods: {
		plusOne() {
			this.counter++;
		},
	},
};
</script>

<style lang="scss" scoped></style>
