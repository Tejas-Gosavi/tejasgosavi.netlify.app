<template>
	<section class="container mt-3">
		<div class="mt-5" id="hero-text">
			Tejas mostly works in
			<div class="d-flex flex-wrap justify-content-start align-items-center">
				<img src="../assets/logo/c++.svg" alt="C++" class="skills-img" />,
				<img src="../assets/logo/python.svg" alt="Python" class="skills-img" />,
				<img src="../assets/logo/go.svg" alt="Golang" class="skills-img" />,
				<img src="../assets/logo/js.svg" alt="JavaScript" class="skills-img" />.
			</div><br>
			He has decent knowledge of
			<div class="d-flex flex-wrap justify-content-start align-items-center">
				<img src="../assets/logo/django.svg" alt="Django" class="skills-img" />,
				<img src="../assets/logo/vuejs.svg" alt="Vue.js" class="skills-img" />,
				<img src="../assets/logo/angular.svg" alt="Angular" class="skills-img" />,
				<img src="../assets/logo/nodejs.svg" alt="Node.js" class="skills-img" />,
				<img src="../assets/logo/mysql.svg" alt="MySQL" class="skills-img" />,
				<img src="../assets/logo/mongodb.svg" alt="MongoDB" class="skills-img" />, 
				<img src="../assets/logo/bootstrap.svg" alt="Bootstrap" class="skills-img" />.
			</div><br>
			He also has interest in machine learning; he had participated in machine learning hackathons on various platforms,
			there, he did perform well and also achieved some decent rank.
		</div>
	</section>
</template>

<script>
export default {
	name: "Skills",
};
</script>

<style scoped>
.skills-img {
	height: 50px;
	width: 50px;
	padding: 8px;
	cursor: pointer;
}

@media screen and (min-width: 425px) and (max-width: 992px){
	#hero-text {
		font-size: 1.5rem;
	}
}

@media screen and (min-width: 320px) and (max-width: 425px){
	#hero-text {
		font-size: 1.1rem;
	}
}
</style>