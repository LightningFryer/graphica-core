<script>
	// import past_events_png_mobile from '$lib/images/past_events_mobile.avif';
	// import past_events_png_desktop from '$lib/images/past_events.avif';
	import Device from 'svelte-device-info';
</script>

<main
	class="events-sec flex h-fit min-h-screen flex-col items-center justify-center gap-4 pt-16 md:pt-0"
>
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
		<div class="relative flex justify-center items-center">
			<!-- <div class="size-10 border-4">

			</div> -->
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/past_events.avif"
				alt="the_full_image"
			/>
		</div>
	{/if}
	<div
		class="flex w-full flex-col items-center justify-center gap-5 pb-12 md:h-fit md:gap-10 md:pb-24"
	>
		<h1 class="text-center font-bebas text-5xl text-accent md:text-8xl">Coming soon!</h1>
		<div class="flex flex-col md:flex-row w-[80vw] space-y-5 md:space-x-6 items-center">
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/unwrapped_event.avif"
				class="w-[80vw] md:w-[40vw] blur-[0.2rem] md:blur-[0.4rem] select-none"
				alt="unwrapped_text"
			/>
			<p class="w-[90vw] text-justify font-poppins text-sm md:w-[80vw] md:text-xl blur-sm select-none">
				Explore the intersection of art and design in this two-day event! Day 1 features a visit to
				the Museum of Art and Photography for inspiration and insights into design principles and
				storytelling. On Day 2, dive into a hands-on Figma workshop to master layouts, typography, and
				color schemes. Create your own personalized scrapbook and build practical design skills while
				unleashing your creativity!
			</p>
		</div>
	</div>
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
