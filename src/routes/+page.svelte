<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { gts1, gts2, gts2Bob, gts3, sec1Bob, sec1MarqueeEnter } from '$lib/anims/landingAnims';
	export let p1: HTMLElement, p2: HTMLElement, p3: HTMLElement, sec1: SVGElement, sec1Marquee: HTMLDivElement;
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Marquee from 'svelte-fast-marquee';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.this', {
			scrollTrigger: {
				trigger: '.this',
				// markers: true,
				start: "top 80%",
				end: "center 50%",
				scrub: 0.8,
				
			},
			// duration: 2,
			opacity: 0,
			scale: '4'
		});
		gts1(p1);
		gts2(p2).then(() => {
			gts2Bob(p2);
			sec1Bob(sec1);
		});
		gts3(p3);
		sec1MarqueeEnter(sec1Marquee);
	});
</script>

<main class="flex flex-col overflow-x-hidden">	
	<Navbar />

	<section class="sec1 flex h-screen flex-col items-center justify-between">
		
		<div class="h-20">
			<!-- Empty div to justify between -->
		</div>
		
		

		<div class="flex flex-col">
			<p class="flex justify-start font-pixelify text-5xl text-accent" bind:this={p1}>Welcome to</p>
			<h1
				class="mt-4 flex h-[19rem] w-full items-center justify-center font-bebas text-[22rem] font-bold"
				bind:this={p2}
			>
				Graphica
			</h1>
			<p class="p3 flex justify-end font-pixelify text-5xl text-accent" bind:this={p3}>
				The graphic designing club!
			</p>
		</div>

		<div class="flex w-full p-6" bind:this={sec1Marquee}>
			<Marquee gradient={true} class="border-t-4 border-b-4 border-accent p-2" gap="20%" style="--gradientColor: #18140e">
				<p class="font-pixelify text-nowrap text-xl font-bold">Graphic Design</p>
				<p class="font-pixelify text-nowrap text-xl font-bold">UI/UX</p>
				<p class="font-pixelify text-nowrap text-xl font-bold">Figma</p>
				<p class="font-pixelify text-nowrap text-xl font-bold">Web Development</p>
			</Marquee>
		</div>
	</section>
	

	<section class="flex h-screen flex-col items-center justify-center border-4 border-black">
		<h1 class="this font-galada text-8xl">
			Welcome to <p class="inline font-bebas font-bold underline">GRAPHICA</p>
		</h1>
	</section>

	<section class="flex h-screen flex-col items-center justify-center">
		<h1 class="font-galada text-8xl">
			Welcome to <p class="inline font-bebas font-bold underline">GRAPHICA</p>
		</h1>
	</section>
</main>

<style>
	.sec1 {
		/* background-image: url("$lib/images/dotgrid2.png"); */
		background-size: auto;
		background-repeat: no-repeat;
		animation: moveBg 45s linear infinite;
	}

	@keyframes moveBg{
		0% {
			background-position: 0% 0%;
		}

		25% {
			background-position: 25% 25%;
		}

		50% {
			background-position: 50% 50%;
		}

		75% {
			background-position: 75% 75%;
		}

		100% {
			background-position: 100% 100%;
		}
	}
</style>
