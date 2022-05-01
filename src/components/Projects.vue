<template>
	<section class="container mt-3">
		<div class="mt-5">
			<div v-for="project in projects" :key="project.id">
				<Project :project="project" />
				<hr>
			</div>
		</div>
	</section>
</template>

<script>
import Project from "./Project.vue";

export default {
	name: "Projects",
	components: {
		Project,
	},
	data() {
		return {
			projects: [
				{
					title: "Nerds.com",
					link: "https://github.com/Tejas-Gosavi/Nerds.com",
					desc: "Nerds.com - An E-commerce web site to buy comic books.",
					tools: "Django, SQLite, Bootstrap, jQuery",
				},
				{
					title: "Farmer Management System",
					link: "https://github.com/Tejas-Gosavi/Farmer-Management-System",
					desc: "Mini Project on Farmer management system with CRUD operations.",
					tools: "Flask, SQLite, Bootstrap",
				},
				{
					title: "News classifier",
					link: "https://github.com/Tejas-Gosavi/Final-Project-CS50",
					desc: "NLP based News classifier Web app.",
					tools: "Flask, Scikit-learn, NLTK",
				},
			],
		};
	},
};
</script>

<style scoped>
</style>