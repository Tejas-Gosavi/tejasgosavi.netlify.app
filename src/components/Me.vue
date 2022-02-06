<template>
	<div>
		<h1 id="about-title" class="mb-4">About Me</h1>
		<p id="about-text">
			A very detail oriented Software Engineer/Developer with a keen
			interest towards Designing scalable systems and Problem solving.
		</p>
		<div class="d-flex flex-wrap justify-content-sm-between justify-content-center" id="about-skills">
			<img src="../assets/logo/c++.svg" alt="" class="skills-img" />
			<img src="../assets/logo/python.svg" alt="" class="skills-img" />
			<img src="../assets/logo/go.svg" alt="" class="skills-img" />
			<img src="../assets/logo/mysql.svg" alt="" class="skills-img" />
			<img src="../assets/logo/mongodb.svg" alt="" class="skills-img" />
			<img src="../assets/logo/django.svg" alt="" class="skills-img" />
			<img src="../assets/logo/bootstrap.svg" alt="" class="skills-img" />
			<img src="../assets/logo/vuejs.svg" alt="" class="skills-img" />
		</div>
	</div>
</template>

<script>
export default {
	name: "Me",
};
</script>

<style scoped>
#about-title {
	color: var(--color-dark);
	text-align: left;
	background-color: var(--color-primary);
	box-shadow: 5px 5px var(--color-light);
	padding: 5px;
	width: max-content;
	font-weight: 700;
}
#about-text {
	color: var(--color-light);
	font-size: 20px;
	text-align: left;
	padding-top: 30px;
}
#about-skills {
	padding: 20px 0 20px 0;
}
.skills-img {
	height: 60px;
	width: 60px;
	padding: 8px;
}

@media screen and (min-width: 320px) and (max-width: 768px){
	#me {
		width: 80%;
	}
	#about-title {
		font-size: 20px;
	}
	#about-text {
		font-size: 15px;
	}
	#about-skills {
		justify-content: center;
	}
	.skills-img {
		height: 50px;
		width: 50px;
	}
}
</style>