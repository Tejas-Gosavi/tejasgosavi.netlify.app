<template>
	<div class="container">
		<Navbar />
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "./assets/css/styles.css";
</style>
