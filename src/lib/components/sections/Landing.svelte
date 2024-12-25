<script lang="ts">
	import { onMount } from 'svelte';
	import { gts1, gts2, gts2Bob, gts3, sec1Bob, sec1MarqueeEnter } from '../../anims/landingAnims';
	let p1: HTMLElement,
		p2: HTMLElement,
		p3: HTMLElement,
		sec1: SVGElement,
		sec1Marquee: HTMLDivElement;
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Marquee from 'svelte-fast-marquee';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gts1(p1);

		gts2(p2).then(() => {
			gts2Bob(p2);
			sec1Bob(sec1);
		});

		gts3(p3);
		sec1MarqueeEnter(sec1Marquee);
	});
</script>

<section class="sec-1 flex h-screen flex-col items-center justify-between">
	<div class="md:h-20">
		<!-- Empty div to justify between -->
	</div>

	<div class="flex flex-col">
		<p
			class="flex justify-start font-pixelify text-xl text-accent md:justify-start md:text-5xl"
			bind:this={p1}
		>
			Welcome to
		</p>
		<h1
			class={`main-text flex w-full items-center justify-center text-center font-bebas text-[6.5rem] font-bold md:mt-4 md:h-[19rem] md:text-[22rem]`}
			bind:this={p2}
		>
			Graphica
		</h1>
		<p
			class="p3 ml-2 mr-2 flex justify-end text-center font-pixelify text-lg text-accent md:ml-0 md:mr-0 md:justify-end md:text-5xl"
			bind:this={p3}
		>
			The graphic designing club!
		</p>
	</div>

	<div class="flex w-full" bind:this={sec1Marquee}>
		<Marquee
			gradient={true}
			direction="right"
			class="border-b-4 border-t-4 border-accent p-2"
			gap="20%"
			style="--gradientColor: #18140e"
		>
			<p class="text-nowrap font-pixelify text-xl font-bold">Graphic Design</p>
			<p class="text-nowrap font-pixelify text-xl font-bold">UI/UX</p>
			<p class="text-nowrap font-pixelify text-xl font-bold">Figma</p>
			<p class="text-nowrap font-pixelify text-xl font-bold">Web Development</p>
		</Marquee>
	</div>
</section>

<style>
	.nope {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
		background: radial-gradient(circle, #c39f61 1px, transparent 1px);
		background-size: 20px 20px; /* Spacing between dots */
		animation: moveDots 3s linear infinite;
	}

	@keyframes moveDots {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 20px -20px;
		}
	}

	.sec-1 {
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
