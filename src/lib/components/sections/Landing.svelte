<script lang="ts">
    import { onMount } from 'svelte';
	import { gts1, gts2, gts2Bob, gts3, sec1Bob, sec1MarqueeEnter } from '../../anims/landingAnims';
	let p1: HTMLElement, p2: HTMLElement, p3: HTMLElement, sec1: SVGElement, sec1Marquee: HTMLDivElement;
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


<style>
	.sec1 {
		background-image: url("$lib/images/DotGrid.png");
		background-size: auto;
		background-repeat: repeat;
		animation: moveBg 40s linear infinite;
	}

	@keyframes moveBg{
		0%{
			background-position: 0% 0%;
		}

		50%{
			background-position: -50% 50%;
		}

		99%{
			background-position: -100% 100%;

		}

		100%{
			background-position: 0% 0%;
		}
	}
</style>