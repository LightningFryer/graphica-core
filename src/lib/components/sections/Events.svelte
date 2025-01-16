<script>
	import past_events_png from "$lib/images/past_events_mobile.svg"
</script>

<main class="events-sec flex h-fit flex-col items-center justify-center">
	<!-- <div class="h-full w-full p-28">
		<p class="text-justify font-poppins text-3xl font-extralight">
			As a design club, we immerse ourselves in the vibrant world of creativity and innovation. We
			focus on design not just as a discipline, but as a way of thinking that shapes the spaces,
			products, and experiences around us. Our scope of work includes graphic design, web
			development, animation, and 3D modelling, allowing us to tackle a diverse range of projects
			that challenge conventional ideas. Through collaborative workshops and hands-on challenges, we
			cultivate a supportive environment where every idea is valued.
		</p>
	</div> -->
	<div class="">
		<h1 class="md:mt-10 font-bebas text-3xl md:text-6xl flex flex-row gap-2 md:gap-4 items-center opacity-75">Take a look at our <span class="md:text-8xl text-accent">past events!</span></h1>
	</div>
	<div class="relative">
		<img class="border-2" src={past_events_png} alt="the_full_image" />
	</div>
</main>

<style>
	.events-sec {
		/* position: relative; */
		/* width: 100vw !important; */
		/* height: 100vh; Full viewport height */

		background-color: black;
		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		animation: moveLeft 2s linear infinite;
	}
	
	@keyframes moveLeft {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 70px 0; /* Moves by exactly one grid cell size */
		}
	}
</style>
