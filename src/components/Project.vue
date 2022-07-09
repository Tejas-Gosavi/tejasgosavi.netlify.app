<template>
	<p class="mb-1">
		<a :href="project.link" class="project-title special-link">{{ project.title }}</a>
	</p>
	<p class="project-tools mb-1">{{ project.tools }}</p>
	<p class="project-desc mb-5">{{ project.desc }}</p>
</template>

<script>
export default {
	name: "Project",
	props: ["project"],
};
</script>

<style scoped>
.project-title {
	font-size: var(--fs-large);
}
.project-tools {
	font-size: var(--fs-smaller);
	color: var(--primary-color-600);
}
.project-desc {
	font-size: var(--fs-medium);
	color: var(--primary-color-800);
}

@media screen and (min-width: 425px) and (max-width: 992px){
	.project-title {
		font-size: var(--fs-medium);
	}
	.project-tools {
		font-size: var(--fs-small);
	}
	.project-desc {
		font-size: var(--fs-small);
	}
}

@media screen and (min-width: 250px) and (max-width: 425px){
	.project-title {
		font-size: var(--fs-medium);
	}
	.project-tools {
		font-size: var(--fs-smaller);
	}
	.project-desc {
		font-size: var(--fs-small);
	}
}
</style>