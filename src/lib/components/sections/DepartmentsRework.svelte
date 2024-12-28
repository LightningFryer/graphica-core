<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	let containerOffsetWidth: Number;

	onMount(() => {
		let sections = gsap.utils.toArray('.department-sec');
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			duration: 2,
			scrollTrigger: {
				trigger: '.container',
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				end: () => '+=' + containerOffsetWidth
			}
		});

		gsap.from(".thisTest", {
			opacity: 0,
			yPercent: -100,
			duration: 2,
			scrollTrigger: {
				trigger: ".gd-sec",
				start: "right center",
				markers: true,
			}
		})
	});
</script>

<main class="container flex flex-row flex-nowrap">
	<div class="container flex flex-row flex-nowrap" bind:offsetWidth={containerOffsetWidth}>
		<section
			class="department-intro-sec department-sec flex h-screen min-w-[100%] flex-col items-center justify-center"
		>
			<h1 class="font-bebas text-7xl">What about our various departments you ask?</h1>
			<h1 class="font-bebas text-5xl">
				Scroll on to see what <span class="text-7xl">we</span> have to offer!
			</h1>
		</section>
		<section
			class="department-sec gd-sec flex h-screen min-w-[100%] flex-col items-center justify-center bg-green-500"
		>
			<div class="flex flex-col justify-center items-center h-[80%] w-[80%] border-2">
				<h1 class="thisTest text-9xl font-bebas">Graphic Design</h1>
			</div>
		</section>
		<section class="department-sec h-screen min-w-[100%] bg-red-500">
			<h1>Section</h1>
		</section>
	</div>
</main>

<style>
	.department-intro-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
		background-color: rgb(59 130 246);
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
