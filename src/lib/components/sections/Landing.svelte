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
		
    <div class="md:h-20">
        <!-- Empty div to justify between -->
    </div>

    <div class="flex flex-col">
        <p class="flex justify-center md:justify-start font-pixelify text-3xl md:text-5xl text-accent" bind:this={p1}>Welcome to</p>
        <h1
            class="md:mt-4 flex md:h-[19rem] w-full text-[6.5rem] md:text-[22rem] text-center items-center justify-center font-bebas font-bold"
            bind:this={p2}
        >
            Graphica
        </h1>
        <p class="p3 flex justify-center md:justify-end font-pixelify text-2xl text-center md:text-5xl mr-2 md:mr-0 ml-2 md:ml-0 text-accent" bind:this={p3}>
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
		width: 100%;
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