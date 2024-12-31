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
			}
		});
	});
</script>

<section class="resources-sec h-screen flex flex-col justify-center items-center">
    <div class="flex flex-col h-[90%] w-full md:w-[85%]">
        <h1 class="resources-text font-bebas w-fit text-5xl md:text-7xl ml-6 md:mt-0 p-3 border-4 border-accent rounded-lg backdrop-blur-[0.1rem]">Resources</h1>
        <div class="flex flex-col md:flex-row ml-8 mr-8 mb-8 mt-5 md:h-[80%] md:justify-evenly gap-y-3 md:gap-y-0">
            <div class="resource-card flex flex-col md:gap-4 bg-accent rounded-lg p-6 md:p-8">
                <p class="font-bebas text-3xl underline text-center">Graphic Design</p>
				
				<div>
					<p class="text-lg font-inter font-bold">Instagram Accounts</p>
					<ul class="list-disc">
						<li><a href="https://www.instagram.com/sandracreatess?igsh=d3hxdjJuaThqMmwx" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">Sandra K | @sandracreatess</a></li>
					</ul>
				</div>

				<div>
					<p class="text-lg font-inter font-bold">Pactice Websites</p>
					<ul class="list-disc">
						<li><a href="https://www.dailyui.co/" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">Daily UI</a></li>
					</ul>
				</div>
            </div>

            <div class="resource-card flex flex-col md:gap-4 bg-accent rounded-lg p-6 md:p-8">
                <p class="font-bebas text-3xl underline text-center">UI/UX</p>

				<div>
					<p class="text-lg font-inter font-bold">Learn</p>
					<ul class="list-disc">
						<li><a href="https://www.kickassux.com/free-ux-design-course" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">kickassux</a></li>
						<li><a href="https://www.figma.com/best-practices/" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">Figma | Best practices</a></li>
					</ul>
				</div>

				<div>
					<p class="text-lg font-inter font-bold">Pactice Websites</p>
					<ul class="list-disc">
						<li><a href="https://www.uxchallenge.co/" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">UXchallenge</a></li>
					</ul>
				</div>

            </div>

            <div class="resource-card flex flex-col md:gap-4 bg-accent rounded-lg p-6 md:p-8">
                <p class="font-bebas text-3xl underline text-center">Web Development</p>

				<div>
					<p class="text-lg font-inter font-bold">Learn</p>
					<ul class="list-disc">
						<li><a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">The Odin Project</a></li>
					</ul>
				</div>

				<div>
					<p class="text-lg font-inter font-bold">Resources</p>
					<ul class="list-disc">
						<li><a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">MDN Web Docs</a></li>
						<li><a href="https://dev.to/" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">DEV Community</a></li>
					</ul>
				</div>

				<div>
					<p class="text-lg font-inter font-bold">Youtube</p>
					<ul class="list-disc">
						<li><a href="https://www.youtube.com/@t3dotgg" target="_blank" rel="noopener noreferrer" class="link link-hover text-primary-content">Theo - t3.gg</a></li>
					</ul>
				</div>

            </div>
        </div>
    </div>
</section>

<style>
	.resources-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */

		background-image: linear-gradient(to right, #c39f61 1px, transparent 1px),
			linear-gradient(to bottom, #c39f61 1px, transparent 1px);
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