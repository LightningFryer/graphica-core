<script>
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
		<div class="relative flex items-center justify-center">
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
		<!-- <h1 class="text-center font-bebas text-5xl text-accent md:text-8xl">Coming soon!</h1> -->
		<div class="flex w-[80vw] flex-col items-center space-y-5 md:flex-row md:space-x-8">
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/reframe_event.avif"
				class="w-[80vw] md:w-[40vw]"
				alt="unwrapped_text"
			/>
			<div class="flex flex-col items-center justify-center gap-y-4">
				<p class="text-justify font-poppins text-sm md:text-2xl">
					Graphica presents an engaging two-day design experience aimed at fostering creativity,
					problem-solving, and hands-on learning. The event consists of a structured UI/UX workshop
					followed by an intense and exciting designathon, offering participants an immersive
					introduction to the world of design.
				</p>

				<a href="/blog/ReframeEventRuleBook" class="btn btn-primary btn-lg rounded-full"
					>Rule Book</a
				>
			</div>
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
