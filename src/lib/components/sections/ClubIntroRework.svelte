<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import TextPlugin from 'gsap/TextPlugin';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';
	// import club_intro_blob from '$lib/images/club_intro_blob.png';
	import blob from '$lib/images/section2.png';
	// import catto from "$lib/images/catto1.png"

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

<main class="club-intro-sec relative h-screen flex-col items-center justify-center">
	<!-- <div class="absolute md:left-4 md:top-[2rem]">
		<h1 class="text-[9.5rem] font-futura">(We are good</h1>
	</div>

	<div class="absolute scale-[0.5] md:bottom-[3rem] md:right-[-14rem]">
		<img src={catto} alt="club_intro" class="bg-transparent" />
	</div>

	<div class="absolute md:right-4 md:top-[16rem]">
		<h1 class="text-[6.5rem] font-futura">At design)</h1>
	</div> -->
	<div
		class="absolute z-0 h-full w-full bg-gradient-to-b from-transparent from-10% via-black via-20% to-black to-90%"
	></div>

	<div class="">
		<img src={blob} alt="blob" class="absolute left-[-7rem] right-0 top-7 z-10 scale-[1.1]" />
	</div>

	<!-- <div class="absolute bottom-9 left-[19rem] right-0 z-10">
		<h1 class="font-jost text-3xl">
			This is Graphica<span class="font-bold">!</span> We love Graphica<span class="font-bold"
				>!</span
			>
			I love Graphica<span class="font-bold">!</span> You should too<span class="font-bold">!</span>
			
		</h1>
	</div> -->
</main>

<style>
	.club-intro-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
		background: linear-gradient(to right, #c39f617f 1px, transparent 1px),
			linear-gradient(to bottom, #c39f617f 1px, transparent 1px);
		background-size: 70px 70px;
		background-color: black;
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
