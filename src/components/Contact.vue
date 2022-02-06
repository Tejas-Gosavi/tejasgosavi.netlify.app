<template>
	<div>
		<h1 id="contact-title" class="mb-5">Let's Connect</h1>
		<div class="d-flex justify-content-center">
			<a target="_blank" href="mailto:tejasgosavi555@gmail.com">
				<img
					src="../assets/logo/gmail.svg"
					alt=""
					class="contact-img"
				/>
			</a>
			<a
				target="_blank"
				href="https://www.linkedin.com/in/tejasgosavi555/"
			>
				<img
					src="../assets/logo/linkedin.svg"
					alt=""
					class="contact-img"
				/>
			</a>
			<a target="_blank" href="https://github.com/Tejas-Gosavi">
				<img
					src="../assets/logo/github-white.svg"
					alt=""
					class="contact-img"
				/>
			</a>
			<a
				target="_blank"
				href="https://stackoverflow.com/users/17355953/tejas-gosavi"
			>
				<img
					src="../assets/logo/stackoverflow.svg"
					alt=""
					class="contact-img"
				/>
			</a>
		</div>
		<div id="resume">
			<a
				target="_blank"
				href="https://drive.google.com/file/d/1i-hhxBzYsrNvFFi7CoYrAGTRA-MVizZZ/view?usp=sharing"
				>Resume</a
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact-title {
	color: var(--color-dark);
	text-align: left;
	background-color: var(--color-primary);
	box-shadow: 5px 5px var(--color-light);
	padding: 5px;
	width: max-content;
	font-weight: 700;
}
div > a {
	margin: 0 10px;
}
a,
a:hover {
	text-decoration: none;
	color: var(--color-light);
}
.contact-img {
	height: 60px;
	width: 60px;
	padding: 8px;
}
#resume {
	margin: auto;
	margin-top: 30px;
	padding: 0 10px;
	font-size: 40px;
	width: max-content;
	border: 3px solid var(--color-primary);
	cursor: pointer;
}

@media screen and (min-width: 320px) and (max-width: 768px){
	#contact {
		width: 80%;
	}
	#contact-title {
		font-size: 20px;
	}
	.contact-img {
		height: 50px;
		width: 50px;
		padding: 8px;
	}
	#resume {
		font-size: 30px;
	}
}
</style>