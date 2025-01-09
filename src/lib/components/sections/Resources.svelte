<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let resourceCards = gsap.utils.toArray('.resource-card');

		gsap.from('.resources-text', {
			duration: 1,
			opacity: 0,
			xPercent: -100,
			ease: 'power2.out',

			scrollTrigger: {
				trigger: '.resources-sec',
				start: 'top center'
			}
		});

		gsap.from(resourceCards, {
			duration: 0.6,
			stagger: 0.2,
			opacity: 0,
			yPercent: 50,
			ease: 'power2.out',

			scrollTrigger: {
				trigger: '.resources-sec',
				start: 'top center'
			}
		});
	});
</script>

<section class="resources-sec flex h-screen flex-col items-center justify-center">
	<div class="flex h-[90%] w-full flex-col md:w-[85%]">
		<h1
			class="resources-text ml-6 w-fit rounded-lg border-4 border-accent p-3 font-bebas text-5xl backdrop-blur-[0.1rem] md:mt-0 md:text-7xl"
		>
			Resources
		</h1>
		<div
			class="mb-8 ml-8 mr-8 mt-5 flex flex-col gap-y-3 md:h-[80%] md:flex-row md:justify-evenly md:gap-y-0"
		>
			<div class="resource-card flex flex-col rounded-lg bg-accent p-6 md:gap-4 md:p-8">
				<p class="text-center font-bebas text-3xl underline">Graphic Design</p>

				<div>
					<p class="font-inter text-lg font-bold">Instagram Accounts</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://www.instagram.com/sandracreatess?igsh=d3hxdjJuaThqMmwx"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">Sandra K | @sandracreatess</a
							>
						</li>
					</ul>
				</div>

				<div>
					<p class="font-inter text-lg font-bold">Pactice Websites</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://www.dailyui.co/"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">Daily UI</a
							>
						</li>
					</ul>
				</div>
			</div>

			<div class="resource-card flex flex-col rounded-lg bg-accent p-6 md:gap-4 md:p-8">
				<p class="text-center font-bebas text-3xl underline">UI/UX</p>

				<div>
					<p class="font-inter text-lg font-bold">Learn</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://www.kickassux.com/free-ux-design-course"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">kickassux</a
							>
						</li>
						<li>
							<a
								href="https://www.figma.com/best-practices/"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">Figma | Best practices</a
							>
						</li>
					</ul>
				</div>

				<div>
					<p class="font-inter text-lg font-bold">Pactice Websites</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://www.uxchallenge.co/"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">UXchallenge</a
							>
						</li>
					</ul>
				</div>
			</div>

			<div class="resource-card flex flex-col rounded-lg bg-accent p-6 md:gap-4 md:p-8">
				<p class="text-center font-bebas text-3xl underline">Web Development</p>

				<div>
					<p class="font-inter text-lg font-bold">Learn</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://www.theodinproject.com/"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">The Odin Project</a
							>
						</li>
					</ul>
				</div>

				<div>
					<p class="font-inter text-lg font-bold">Resources</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://developer.mozilla.org/en-US/"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">MDN Web Docs</a
							>
						</li>
						<li>
							<a
								href="https://dev.to/"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">DEV Community</a
							>
						</li>
					</ul>
				</div>

				<div>
					<p class="font-inter text-lg font-bold">Youtube</p>
					<ul class="list-disc">
						<li>
							<a
								href="https://www.youtube.com/@t3dotgg"
								target="_blank"
								rel="noopener noreferrer"
								class="link-hover link text-primary-content">Theo - t3.gg</a
							>
						</li>
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

		background-color: black;
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
