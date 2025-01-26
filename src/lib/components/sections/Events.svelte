<script>
	// import past_events_png_mobile from '$lib/images/past_events_mobile.avif';
	// import past_events_png_desktop from '$lib/images/past_events.avif';
	import Device from 'svelte-device-info';
</script>

<main
	class="events-sec flex h-fit min-h-screen flex-col items-center justify-center gap-4 pt-16 md:pt-0"
>
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
		<h1
			class="flex flex-row items-center gap-2 font-bebas text-3xl opacity-85 md:mt-10 md:gap-4 md:text-6xl"
		>
			Take a look at our <span class="text-accent md:text-8xl">past events!</span>
		</h1>
	</div>
	{#if Device.isPhone}
		<div class="relative">
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/past_events_mobile.avif"
				alt="the_full_image"
			/>
		</div>
	{:else}
		<div class="relative">
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/past_events.avif"
				alt="the_full_image"
			/>
		</div>
	{/if}
</main>

<style>
	.events-sec {
		/* position: relative; */
		/* width: 100vw !important; */
		/* height: 100vh; Full viewport height */

		background-color: black;
		background-image: linear-gradient(to right, #c39f617f 1px, transparent 1px),
			linear-gradient(to bottom, #c39f617f 1px, transparent 1px);
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
