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
			<div class="relative h-full w-full border-2">
				<div class="flex h-full w-full flex-col items-center justify-center">
					<div class="gd-desc flex flex-row gap-7 w-[40%] h-[80%] border-2 p-2 text-black rounded-lg">
						<div class="-rotate-180 flex justify-center items-center border-2 w-[15%] h-full">
							<h1 class="[writing-mode:vertical-lr] font-cinzel font-bold text-6xl">Graphic Design</h1>
						</div>

						<div class="flex flex-col w-[85%]">
							<div class="flex grow">
								
							</div>
							<div class="divider"></div>
							<div class="flex grow">

							</div>
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

	.gd-desc{
		background-image: url("$lib/svgs/dept_sec_bg.svg");
		/* background-size: cover; */
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
