<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import TextPlugin from 'gsap/TextPlugin';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

	async function getImage() {
		const image = await fetch('https://picsum.photos/400');
		// console.log(image.url);
		return image.url;
	}

	onMount(() => {
		// gsap.registerPlugin(ScrollTrigger);
		// const words = SplitType.create('.textEffect');
		// // console.log(words);
		// gsap.from(words.words, {
		// 	opacity: 0,
		// 	duration: 1,
		// 	stagger: 0.05,
		// 	scrollTrigger: {
		// 		trigger: '.textEffect',
		// 		start: 'top center',
		// 		end: 'bottom 40%'
		// 	}
		// });
	});
</script>

<main class="club-intro-sec flex h-screen flex-col items-center justify-center">
	<!-- <section class="flex h-[90%] w-[85%] flex-col items-center justify-evenly">
		<div
			class="flex min-w-full flex-col rounded-xl border-4 border-accent p-2 backdrop-blur-[0.1rem]"
		>
			<p class="textEffect text-balance text-justify font-bebas text-4xl">
				<span class="font-galada text-5xl">Greetings</span> from
				<span class="font-galada text-5xl">Graphica!</span> Welcome to the world of
				<span class="font-poppins text-5xl">creativity</span> and
				<span class="font-nunito text-4xl">collaboration!</span> Our graphic designing club is a vibrant
				space where ideas come alive, and imagination knows no bounds.
			</p>
		</div>

		<div class="">
			{#await getImage()}
				<div class="flex h-[200px] w-[500px] flex-col items-center justify-center">
					<span class="loading loading-spinner loading-lg"></span>
				</div>
			{:then image}
				<div class="image-class">
					<img src={image} alt="graphica_greeting" />
				</div>
			{/await}
		</div>

		<div
			class="flex min-w-full flex-col rounded-xl border-4 border-accent p-2 backdrop-blur-[0.1rem]"
		>
			<p class="textEffect flex w-full flex-row text-balance font-bebas text-4xl">
				Whether you’re crafting bold visuals, experimenting with quirky designs, or just doodling
				your way to brilliance, this is the place to explore, learn, and grow. With exciting
				workshops, fun projects, and a community of like-minded design enthusiasts, we’re here to
				inspire, challenge, and celebrate your creativity. Join us to turn ideas into art and have a
				blast while doing it!
			</p>
		</div>
	</section> -->

	<section class="relative h-[80%] w-[45%]">
		<div
			class="absolute left-[-10rem] top-[-2rem] z-10 max-w-[30rem] rounded-xl border-4 border-accent p-2 backdrop-blur-[0.2rem] backdrop-brightness-75"
		>
			<p class="text-justify font-bebas text-3xl">
				Welcome to the world of creativity and collaboration! Our graphic designing club is a
				vibrant space where ideas come alive, and imagination knows no bounds
			</p>
		</div>

		<div class="flex h-full w-full -rotate-[25deg] flex-col items-center justify-center">
			{#await getImage()}
				<div class="flex h-[200px] w-[500px] flex-col items-center justify-center">
					<span class="loading loading-spinner loading-lg"></span>
				</div>
			{:then image}
				<div class="image-class border-[1.5rem] border-white shadow-[inset_0_-20px_40px_rgba(0,0,0,0.6)]">
					<img src={image} alt="graphica_greeting" />
				</div>
			{/await}
		</div>
	</section>
</main>

<style>
	.club-intro-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
		background: linear-gradient(to right, #c39f617f 1px, transparent 1px),
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
