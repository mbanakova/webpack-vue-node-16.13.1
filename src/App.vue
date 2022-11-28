<template>
	<TheHeader />
	<div class="container">
		<section id="hero">
			<img src="./img/fish.png" alt="" width="60" />
			<img src="./img/bear.svg" alt="" width="60" />
			<h1>
				{{ name }}
			</h1>
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
			name: "Это просто песец",
		};
	},
};
</script>
