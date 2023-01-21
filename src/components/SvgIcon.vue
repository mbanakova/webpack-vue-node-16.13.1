<template>
	<svg fill="currentColor" v-on="$listeners">
		<use :xlink:href="iconName" />
	</svg>
</template>
<script>
export default {
	name: "SvgIcon",
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	computed: {
		iconName() {
			return `#icon-${this.name}`;
		},
	},
};
</script>  