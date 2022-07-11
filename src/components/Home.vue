<template>
	<section class="container mt-5 home hero-text gap-4">
		<div>
			<p>Hello, My name is Tejas Gosavi.</p>
			<p>I'm currently at
				<a href="http://prismforce.com/" target="_blank" class="special-link">Prismforce</a>
				as an Associate Software Developement Engineer.</p>
		</div>
		<div class="img-wrapper">
			<img :src="`src/assets/images/hero${img}.jpg`" height="300" alt="" @click="changeImg()">
		</div>
	</section>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			img: 1,
		}
	},
	methods: {
		changeImg() {
			this.$data.img = (this.$data.img % 2) + 1;
		}
	}
};
</script>

<style scoped>
.home {
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
}
.img-wrapper {
	display: flex;
	flex-direction: column;
}
@media screen and (min-width: 250px) and (max-width: 992px){
	.home > div  {
		flex-wrap: wrap-reverse;
	}
}
@media screen and (min-width: 250px) and (max-width: 992px) {
	img {
		height: 300px;
	}
}
</style>