<template>
	<div>
		<h1 id="projects-title" class="mb-5">Projects</h1>
		<div v-for="project in projects" :key="project.id" class="mt-5">
			<Project :project="project" />
		</div>
	</div>
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
					img: require("../assets/images/project-images/" +
						"nerds.png"),
				},
				{
					title: "Farmer Management System",
					link: "https://github.com/Tejas-Gosavi/Farmer-Management-System",
					desc: "Mini Project on Farmer management system with CRUD operations.",
					tools: "Flask, SQLite, Bootstrap",
					img: require("../assets/images/project-images/" +
						"farmer.png"),
				},
				{
					title: "News classifier",
					link: "https://github.com/Tejas-Gosavi/Final-Project-CS50",
					desc: "NLP based News classifier Web app",
					tools: "Flask, Scikit-learn, NLTK",
					img: require("../assets/images/project-images/" +
						"news.png"),
				},
			],
		};
	},
};
</script>

<style scoped>
#projects-title {
	color: var(--color-dark);
	text-align: left;
	background-color: var(--color-primary);
	box-shadow: 5px 5px var(--color-light);
	padding: 5px;
	width: max-content;
	font-weight: 700;
}

@media screen and (min-width: 320px) and (max-width: 768px){
	#projects {
		width: 80%;
	}
	#projects-title {
		font-size: 20px;
	}
}
</style>