<template>
	<section class="container mt-3">
		<div class="mt-5" id="hero-text">
			Connect with Tejas on
			<div class="d-flex flex-wrap justify-content-start align-items-center">
				<a target="_blank" href="mailto:tejasgosavi555@gmail.com">
					<img src="../assets/logo/gmail.svg" alt="Gmail" class="contact-img"
					/>
				</a>,
				<a target="_blank" href="https://www.linkedin.com/in/tejasgosavi555/">
					<img src="../assets/logo/linkedin.svg" alt="LinkedIn" class="contact-img"
					/>
				</a>,
				<a target="_blank" href="https://github.com/Tejas-Gosavi">
					<img src="../assets/logo/github.svg" alt="GitHub" class="contact-img"
					/>
				</a>,
				<a target="_blank" href="https://stackoverflow.com/users/17355953/tejas-gosavi">
					<img src="../assets/logo/stackoverflow.svg" alt="Stackoverflow" class="contact-img"/>
				</a>.
			</div><br>
			<a class="link-underline" target="_blank" href="https://drive.google.com/file/d/1i-hhxBzYsrNvFFi7CoYrAGTRA-MVizZZ/view?usp=sharing">
				Tejas's Resume/CV</a
			>.
		</div>
	</section>
</template>

<script>
export default {
	name: "Connect",
};
</script>

<style scoped>
.contact-img {
	height: 50px;
	width: 50px;
	padding: 8px;
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