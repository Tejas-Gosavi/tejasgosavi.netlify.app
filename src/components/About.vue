<template>
    <section class="container mt-3">
        <div class="mt-5" id="hero-text">
            <p>
                Tejas is currently living in the beautiful holy city of Nashik, Maharashtra.
                He is pursuing B. E (Bachelor of Engineering) in I. T from KKWIEER, Nashik.
                He is going to join <a href="http://prismforce.com/" target="_blank" class="link-underline">Prismforce</a> as an Associate Software Developement Engineer. 
            </p>
            <p>He is a Dreamer, Adventurer, Beatboxer and Star Wars nerd.</p>
            <p>In the mean time he  -
                <ul>
                    <li>
                        watches/reads Sci-fi and Historical shows, movies and books.
                    </li>
                    <li>
                        listens to indie, rock and pop songs.
                    </li>
                </ul>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>

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