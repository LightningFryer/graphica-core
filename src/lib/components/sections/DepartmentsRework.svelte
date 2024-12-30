<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	let containerOffsetWidth: Number;

	import gd_sec1 from '$lib/svgs/gd_sec1.svg';
	import gd_sec2 from '$lib/svgs/gd_sec2.svg';
	import gd_sec3 from '$lib/svgs/gd_sec3.svg';
	import TextPlugin from 'gsap/TextPlugin';

	onMount(() => {
		let sections = gsap.utils.toArray('.department-sec');
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(TextPlugin);

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			duration: 2,
			scrollTrigger: {
				trigger: '.container',
				pin: true,
				scrub: 1,
				// snap: 1 / (sections.length - 1),
				end: () => '+=' + containerOffsetWidth
			}
		});

		gsap.from('.intro-text', {
			opacity: 0,
			yPercent: -100,
			duration: 1,
			scale: 2,
			stagger: 0.3,
			ease: 'power4.inOut',

			scrollTrigger: {
				trigger: '.department-intro-sec',
				start: 'top 50%'
			}
		});

		gsap.from('.gd-stamp-anim', {
			opacity: 0,
			yPercent: -100,
			duration: 1,
			scale: 2,
			stagger: 0.3,
			ease: 'power4.inOut',
			onComplete: () => {
				gsap.to('.thisText', {
					opacity: 1,
					yPercent: 0,
					startAt: {
						yPercent: 50
					},
					text: 'Because our club is all about this!',
					duration: 1.5
				});
			},
			scrollTrigger: {
				trigger: '.department-gd-sec',
				start: 'right center'
			}
		});
	});
</script>

<main class="container flex flex-row flex-nowrap">
	<div class="container flex flex-row flex-nowrap" bind:offsetWidth={containerOffsetWidth}>
		<section
			class="department-intro-sec department-sec flex h-screen min-w-[100%] flex-col items-center justify-center bg-accent text-base-200"
		>
			<h1 class="intro-text font-bebas text-7xl">
				What about our <span class="text-white">various departments</span> you ask?
			</h1>
			<h1 class="intro-text font-bebas text-5xl">
				Scroll on to see what <span class="text-7xl">we</span> have to offer!
			</h1>
		</section>
		<section
			class="department-sec department-gd-sec flex h-screen min-w-[100%] flex-col items-center justify-center"
		>
			<div class="relative h-full w-full ">
				<div class="flex h-full w-full flex-col items-center justify-center">
					<div
						class="gd-desc flex h-[80%] w-[40%] flex-row gap-7 rounded-lg bg-yellow-100 p-2 text-black"
					>
						<div class="flex h-full w-[15%] -rotate-180 items-center justify-center border-2">
							<h1 class="font-cinzel text-6xl font-bold [writing-mode:vertical-lr]">
								Graphic Design
							</h1>
						</div>

						<div class="flex w-[85%] flex-col">
							<div class="flex grow"></div>
							<div class="divider"></div>
							<div class="flex grow"></div>
						</div>
					</div>
				</div>

				<!-- <div class="gd-stamp-anim absolute right-[12rem] top-[8rem] z-10 size-32 rotate-[30deg]">
					<img src={gd_sec1} alt="gd_sec1" />
				</div>

				<div class="gd-stamp-anim absolute right-[55rem] top-[17rem] z-20 size-32 -rotate-[27deg]">
					<img src={gd_sec2} alt="gd_sec1" />
				</div> -->
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

		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		animation: moveLeft 2s linear infinite;
	}

	.department-gd-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */

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
