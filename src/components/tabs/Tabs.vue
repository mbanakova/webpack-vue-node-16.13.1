<template>
	<div class="tabs">
		<pre>tabs: {{ tabs }}</pre>
		<ul class="tabs__header">
			<li class="tabs__title" v-for="tab in tabs" :key="tab.id" @click="store.selectTab(tab.id)" :class="{ active: tab.isActive }">
				{{ tab.title }}
			</li>
		</ul>
		<div class="tabs__content" v-auto-animate>
			<div>{{ store.getActiveTab() }}</div>
		</div>
	</div>
</template>

<script setup>
import { useTabsStore } from "./../../pinia/tabsStore";
const store = useTabsStore();
const tabs = store.tabs;
</script>
