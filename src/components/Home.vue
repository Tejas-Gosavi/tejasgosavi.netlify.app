<template>
	<div>
		<div class="col mx-auto">
			<div class="card border-0 rounded-0 bg-dark">
				<div class="row g-0">
					<div class="col-md-4">
						<img
							src="../assets/images/hero.png"
							class="img-thumbnail border-0 p-0"
							alt=""
						/>
					</div>
					<transition name="fade">
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title" id="hero-text-start">
									Hi I'm
								</h5>
								<h5 class="card-title" id="hero-title">
									T&epsilon;j&alpha;s Gos&alpha;&nu;&#943;.
								</h5>
								<h5
									class="card-subtitle p-2 mt-3"
									id="hero-subtitle"
								>
									Software Engineer
								</h5>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomeHero",
};
</script>

<style>
img {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 70%;
}
#hero-text-start {
	color: var(--color-light);
	text-align: left;
	font-size: 30px;
	font-weight: 100;
}
#hero-title {
	color: var(--color-light);
	text-align: left;
	font-size: 80px;
	font-weight: 700;
}
#hero-subtitle {
	color: var(--color-dark);
	background-color: var(--color-primary);
	font-size: 40px;
	font-weight: 700;
	box-shadow: 10px 10px var(--color-light);
}

@media screen and (min-width: 768px) and (max-width: 992px){
	#hero-text-start {
		font-size: 20px;
	}
	#hero-title {
		font-size: 50px;
	}
	#hero-subtitle {
		font-size: 40px;
		box-shadow: 7px 7px var(--color-light);
	}
}

@media screen and (min-width: 425px) and (max-width: 768px){
	img {
		width: 40%;
	}
	#hero-text-start {
		padding-top: 30px;
		font-size: 20px;
	}
	#hero-title {
		font-size: 40px;
	}
	#hero-subtitle {
		font-size: 30px;
		box-shadow: 7px 7px var(--color-light);
	}
}

@media screen and (min-width: 320px) and (max-width: 425px){
	img {
		width: 50%;
	}
	#hero-text-start {
		padding-top: 10px;
		font-size: 20px;
	}
	#hero-title {
		font-size: 40px;
	}
	#hero-subtitle {
		font-size: 30px;
		box-shadow: 7px 7px var(--color-light);
	}
}
</style>