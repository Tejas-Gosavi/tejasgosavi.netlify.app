<template>
	<section>
		<p class="mb-0">
			<a :href="project.link" id="project-title" class="link-underline">{{ project.title }}</a>
		</p>
		<p id="project-tools">{{ project.tools }}</p>
		<p id="project-desc" class="mb-2">{{ project.desc }}</p>
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
	font-size: 1.5rem;
	font-weight: 100;
}

#project-tools {
	font-size: 0.9rem;
	color: #797979;
}
#project-desc {
	font-size: 1.1rem;
	color: #4e4e4e;
}

@media screen and (min-width: 425px) and (max-width: 992px){
	#project-title {
		font-size: 1.5rem;
	}
	#project-tools {
		font-size: 1.1rem;
	}
	#project-desc {
		font-size: 1.3rem;
	}
}

@media screen and (min-width: 320px) and (max-width: 425px){
	#project-title {
		font-size: 1.3rem;
	}
	#project-tools {
		font-size: 0.9rem;
	}
	#project-desc {
		font-size: 1.1rem;
	}
}
</style>