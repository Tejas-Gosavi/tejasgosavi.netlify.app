<template>
	<Navbar />
	<Home id="home" class="section container" />
	<Me id="me" class="section" />
	<Projects id="projects" class="section" />
	<Contact id="contact" class="section" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Me from "./components/Me.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

export default {
	name: "App",
	components: {
		Navbar,
		Home,
		Me,
		Projects,
		Contact,
	},
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "./assets/css/styles.css";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.section {
	padding-top: 100px;
	height: 100vh;
}

#me,
#projects,
#contact {
	margin: auto;
	width: 60vw;
	background: transparent;
}

#projects {
	height: max-content;
}

</style>
