<template>
	<section>
		<p>
			<a :href="project.link" id="project-title">{{ project.title }}</a> -
			<span id="project-tools">{{ project.tools }}</span>
		</p>
		<span id="project-desc">{{ project.desc }}</span>
	</section>
</template>

<script>
export default {
	name: "Project",
	props: ["project"],
};
</script>

<style scoped>
#project-title {
	font-size: 25px;
	font-weight: 100;
}
#project-title:hover {
	text-decoration: underline;
}
#project-desc,
#project-tools {
	font-size: 1.1rem;
	color: #797979;
}

@media screen and (min-width: 425px) and (max-width: 992px){
	#project-title {
		font-size: 1.5rem;
	}
}

@media screen and (min-width: 320px) and (max-width: 425px){
	#project-title {
		font-size: 1.3rem;
	}
}
</style>