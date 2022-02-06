<template>
	<!-- Use any element to open/show the overlay navigation menu -->
	<p class="navbtn text-light" @click="openNav()">&#9776;</p>

	<!-- The overlay -->
	<div id="myNav" class="overlay">
		<!-- Button to close the overlay navigation -->
		<p class="navbtn closebtn text-light" @click="closeNav()">&times;</p>

		<!-- Overlay content -->
		<div class="overlay-content">
			<a href="#home" @click="openURL('home')">Home</a>
			<a href="#me" @click="openURL('me')">About Me</a>
			<a href="#projects" @click="openURL('projects')">Projects</a>
			<a href="#contact" @click="openURL('contact')">Let's Connect</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	methods: {
		openNav() {
			document.getElementById("myNav").style.height = "100%";
		},

		closeNav() {
			document.getElementById("myNav").style.height = "0%";
		},

		openURL(url) {
			document.getElementById(url).scrollIntoView({ behavior: "smooth" });
		},
	},
};
</script>

<style scoped>
.overlay {
	height: 0%;
	width: 100%;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.9);
	overflow: hidden;
	transition: 0.5s;
}

.overlay-content {
	position: relative;
	top: 25%;
	width: 100%;
	text-align: center;
	margin-top: 30px;
}

.overlay a {
	padding: 8px;
	text-decoration: none;
	font-size: 35px;
	color: #818181;
	display: block;
	transition: 0.3s;
	width: max-content;
	margin: auto;
}

.overlay a:hover,
.overlay a:focus {
	color: var(--color-primary);
}

.navbtn {
	position: fixed;
	z-index: 1;
	top: 20px;
	right: 45px;
	font-size: 35px;
	cursor: pointer;
}

.navbtn.closebtn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 45px;
}

@media screen and (max-height: 450px) {
	.overlay {
		overflow-y: auto;
	}
	.overlay a {
		font-size: 20px;
	}
	.overlay .navbtn {
		font-size: 40px;
		top: 15px;
		right: 35px;
	}
}
</style>