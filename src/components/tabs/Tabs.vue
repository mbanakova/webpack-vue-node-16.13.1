<template>
	<div class="tabs">
		<pre>tabs: {{ tabs }}</pre>
		<ul class="tabs__header">
			<li class="tabs__title" v-for="tab in tabs" :key="tab.id" @click="store.selectTab(tab.id)" :class="{ active: tab.isActive }">
				{{ tab.title }}
			</li>
		</ul>
		<ul class="tabs__content">
			<li v-for="tab in tabs" :key="tab.title" v-show="tab.isActive">{{ tab.content }}</li>
		</ul>
	</div>
</template>

<script setup>
import { useTabsStore } from "./../../pinia/tabsStore";
const store = useTabsStore();
const tabs = store.tabs;
</script>
