<template>
	<div class="container">
		<Navbar />
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { store } from './store';

export default {
	setup() {
        const myStore = store();
        return { myStore }
    },
	name: "App",
	components: {
		Navbar,
	},
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "./assets/css/styles.css";

#app {
	font-family: 'Roboto Mono', monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: #2d3748;
}
#hero-text {
	font-size: 1.5rem;
	font-weight: 100;
}
a, a:hover {
	text-decoration: none;
	color: #2d3748;
}
.link-underline {
	text-decoration: underline;
}
.link-underline:hover {
	text-decoration: none;
}
</style>
