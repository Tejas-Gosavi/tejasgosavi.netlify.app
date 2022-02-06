<template>
	<div class="col bg-light p-0" id="project" >
		<div class="d-flex justify-content-between p-sm-4 pb-2 p-3">
			<h3 id="project-title">{{ project.title }}</h3>
			<a :href="project.link">
				<img
					src="../assets/logo/github.svg"
					alt=""
					class="project-link"
				/>
			</a>
		</div>
		<div class="px-sm-4 px-3">
			<p id="project-desc">{{ project.desc }}</p>
			<p id="project-tools">{{ project.tools }}</p>
		</div>
		<div class="px-2 py-sm-4 py-3">
			<img :src="project.img" alt="" id="project-img" class="img-fluid" />
		</div>
	</div>
</template>

<script>
export default {
	name: "Project",
	props: ["project"],
};
</script>

<style>
#project {
	border-radius: 20px;
	margin: 5% 0;
}
#project-title {
	margin: 0;
	font-weight: 700;
}
#project-desc,
#project-tools {
	text-align: left;
	margin: 0;
	padding-top: 10px;
	color: #797979;
}
.project-link {
	height: 40px;
	width: 40px;
	opacity: 0.7;
	margin: 0;
}
.project-link:hover {
	opacity: 1;
}
#project-img {
	height: 10%;
	width: 95%;
	border-radius: 10px;
}

@media screen and (min-width: 320px) and (max-width: 768px){
	#project-title {
		font-size: 17px;
	}
	.project-link {
		height: 25px;
		width: 25px;
		opacity: 0.7;
		margin: 0;
	}
	#project-desc,
	#project-tools {
		font-size: 13px;
		padding: 0 1px;
		padding-top: 5px;
	}
}
</style>