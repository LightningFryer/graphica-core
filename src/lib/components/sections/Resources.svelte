<script lang="ts">
import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let resourceCards = gsap.utils.toArray(".resource-card");

		gsap.from(".resources-text", {
			duration: 1,
			opacity: 0,
			xPercent: -100,
			ease: "power2.out",

			scrollTrigger: {
				trigger: ".resources-sec",
				start: "top center",
			}
		});

		gsap.from(resourceCards, {
			duration: 0.6, 
			stagger: 0.2,
			opacity: 0,
			yPercent: 50,
			ease: "power2.out",

			scrollTrigger: {
				trigger: ".resources-sec",
				start: "top center",
				// markers: true,
			}
		});
	});
</script>

<section class="resources-sec h-screen flex flex-col  justify-center items-center">
    <div class=" h-[90%] w-[85%]">
        <h1 class="resources-text font-bebas text-7xl">Resources</h1>
        <div class="flex flex-row m-8 h-[80%] justify-evenly">
            <div class="resource-card bg-accent rounded-lg p-8 text-center">
                <p class="font-bebas text-3xl underline">Graphic Design</p>
            </div>

            <div class="resource-card bg-accent rounded-lg p-8 text-center">
                <p class="font-bebas text-3xl underline">UI/UX</p>
            </div>

            <div class="resource-card bg-accent rounded-lg p-8 text-center">
                <p class="font-bebas text-3xl underline">Web Development</p>
            </div>
        </div>
    </div>
</section>

<style>
	.resources-sec {
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