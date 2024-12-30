<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import TextPlugin from 'gsap/TextPlugin';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';
	import club_intro_blob from '$lib/images/club_intro_blob.png';

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
	<img src={club_intro_blob} alt="club_intro" class="absolute bg-transparent" />
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
