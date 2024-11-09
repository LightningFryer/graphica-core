<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { gts1, gts2, gts2Bob, gts3, sec1Bob } from '$lib/anims/landingAnims';
	export let p1: HTMLElement, p2: HTMLElement, p3: HTMLElement, sec1: SVGElement;
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
	});
</script>

<main class="flex flex-col overflow-x-hidden">	
	<Navbar />

	<section class="flex h-screen flex-col items-center justify-center">
		<svg bind:this={sec1} class="absolute z-0 max-w-full max-h-full" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_7_2)">
			<mask id="mask0_7_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080">
			<path d="M1920 0H0V1080H1920V0Z" fill="white"/>
			</mask>
			<g mask="url(#mask0_7_2)">
			<path d="M153.69 537.62C203.396 537.62 243.69 497.326 243.69 447.62C243.69 397.914 203.396 357.62 153.69 357.62C103.984 357.62 63.69 397.914 63.69 447.62C63.69 497.326 103.984 537.62 153.69 537.62Z" stroke="black" stroke-width="2.73"/>
			<path d="M537.2 1149.93L643.44 1033.95L666.499 1168.12L537.2 1149.93Z" fill="black"/>
			<path d="M2053.22 934.22L1956.26 1197.21L1885.12 946.098L2053.22 934.22Z" stroke="black" stroke-width="1.8" stroke-dasharray="4 4"/>
			<path d="M1830.65 924.32C1880.36 924.32 1920.65 884.026 1920.65 834.32C1920.65 784.614 1880.36 744.32 1830.65 744.32C1780.94 744.32 1740.65 784.614 1740.65 834.32C1740.65 884.026 1780.94 924.32 1830.65 924.32Z" stroke="black" stroke-width="2.48" stroke-dasharray="3 3"/>
			</g>
			</g>
			<defs>
			<clipPath id="clip0_7_2">
			<rect width="1920" height="1080" fill="white"/>
			</clipPath>
			</defs>
		</svg>	
		<div class="flex flex-col">
			<p class="flex justify-start font-pixelify text-5xl" bind:this={p1}>Welcome to</p>
			<h1
				class="mt-4 flex h-[19rem] w-full items-center justify-center font-bebas text-[22rem] font-bold"
				bind:this={p2}
			>
				Graphica
			</h1>
			<p class="p3 flex justify-end font-pixelify text-5xl" bind:this={p3}>
				The graphic designing club!
			</p>
		</div>
		<div class="flex justify-end">
			<Marquee gradient={true} class="border-4 border-black flex">
				This should be moving right/left
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

<!-- <style>
	.sec-1 {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1237%26quot%3b)' fill='none'%3e%3crect width='396' height='396' clip-path='url(%26quot%3b%23SvgjsClipPath1238%26quot%3b)' x='1310.64' y='593.73' fill='url(%26quot%3b%23SvgjsPattern1239%26quot%3b)' transform='rotate(351.15%2c 1508.64%2c 791.73)'%3e%3c/rect%3e%3crect width='492.24' height='492.24' clip-path='url(%26quot%3b%23SvgjsClipPath1240%26quot%3b)' x='397.98' y='776.49' fill='url(%26quot%3b%23SvgjsPattern1241%26quot%3b)' transform='rotate(211.2%2c 644.1%2c 1022.61)'%3e%3c/rect%3e%3crect width='144' height='144' clip-path='url(%26quot%3b%23SvgjsClipPath1242%26quot%3b)' x='29.65' y='996.37' fill='url(%26quot%3b%23SvgjsPattern1243%26quot%3b)' transform='rotate(154.63%2c 101.65%2c 1068.37)'%3e%3c/rect%3e%3crect width='147.12' height='147.12' clip-path='url(%26quot%3b%23SvgjsClipPath1244%26quot%3b)' x='1409.91' y='70.66' fill='url(%26quot%3b%23SvgjsPattern1245%26quot%3b)' transform='rotate(121.67%2c 1483.47%2c 144.22)'%3e%3c/rect%3e%3ccircle r='90' cx='153.69' cy='447.62' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2.73'%3e%3c/circle%3e%3cpath d='M537.1999999999999 1149.93 L643.44 1033.95L666.4985934427579 1168.118593442758z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M2053.22 934.22 L1956.2599999999998 1197.21L1885.1226034946962 946.0976034946965z' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='1.8' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3ccircle r='90' cx='1830.65' cy='834.32' stroke='rgba(0%2c 0%2c 0%2c 1)' stroke-width='2.48' stroke-dasharray='3%2c 3'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1237'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1239'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(0%2c 0%2c 0%2c 1)' fill='none' stroke-width='1.92'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1238'%3e%3ccircle r='99' cx='1508.64' cy='791.73'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='11.72' height='11.72' patternUnits='userSpaceOnUse' id='SvgjsPattern1241'%3e%3cpath d='M0 11.72L5.86 0L11.72 11.72' stroke='rgba(0%2c 0%2c 0%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1240'%3e%3ccircle r='123.06' cx='644.1' cy='1022.61'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1243'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(0%2c 0%2c 0%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1242'%3e%3ccircle r='36' cx='101.65' cy='1068.37'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='147.12' height='12.26' patternUnits='userSpaceOnUse' id='SvgjsPattern1245'%3e%3crect width='147.12' height='6.13' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3crect width='147.12' height='6.13' x='0' y='6.13' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1244'%3e%3ccircle r='36.78' cx='1483.47' cy='144.22'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
		background-size: contain;
		background-repeat: no-repeat;
	}
</style> -->
