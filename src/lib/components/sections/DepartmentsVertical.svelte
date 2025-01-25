<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	import dept_gd_sec_card from '$lib/images/gd_sec_card.avif';
	import dept_3d_sec_card from '$lib/images/3d_sec_card.avif';
	import dept_ui_ux_sec_card from '$lib/images/ui_ux_sec_card.avif';
	import dept_web_dev_ux_sec_card from '$lib/images/web_dev_sec_card.avif';
	import Device from 'svelte-device-info';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

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

		gsap.from('.dept-card-sec-1', {
			opacity: 0,
			yPercent: 50,
			xPercent: -50,
			duration: 2,
			ease: 'power4.out',
			stagger: 0.4,
			rotate: 45,

			scrollTrigger: {
				trigger: '.department-gd-3d-sec',
				start: 'top center'
				// markers: true
			}
		});

		// if (!Device.isMobile) {
		gsap.from('.dept-card-sec-2', {
			opacity: 0,
			yPercent: 50,
			xPercent: -50,
			duration: 2,
			ease: 'power4.out',
			stagger: 0.4,
			rotate: 45,

			scrollTrigger: {
				trigger: '.department-ui-web-sec',
				start: 'top center'
				// markers: true
			}
		});
		// } else {
		// 	gsap.from('.dept-card-sec-2', {
		// 		opacity: 0,
		// 		yPercent: 50,
		// 		xPercent: -50,
		// 		duration: 2,
		// 		ease: 'power4.out',
		// 		stagger: 0.4,
		// 		rotate: 45,

		// 		scrollTrigger: {
		// 			trigger: '.department-ui-web-sec',
		// 			start: 'right center',
		// 			// markers: true
		// 		}
		// 	});
		// }
	});
	// right center for phones
</script>

<main class="">
	<div class="container flex min-h-screen flex-col">
		<section
			class="department-intro-sec department-sec min-w-screen flex h-[50vh] flex-col items-center justify-center text-base-200 md:h-[70vh]"
		>
			<!-- This is the background image that looks like the exploding thingy. DO NOT DELETE -->
			<!-- <div class="absolute z-0 scale-[1.3]">
				<img src={dept_intro_blob} alt="dept_intro_blob" />
			</div> -->
			<div class="flex h-full w-full items-center justify-center">
				<div class="flex flex-col items-center justify-center">
					<h1 class="intro-text text-center font-bebas text-3xl text-white md:text-7xl">
						What about our <span class="text-[#ffda45]">various departments</span> you ask?
					</h1>
					<h1 class="intro-text text-center font-bebas text-3xl text-white md:text-5xl">
						Scroll on to see what <span class="text-7xl">we</span> have to offer!
					</h1>
				</div>
			</div>
		</section>

		<section
			class="department-sec department-gd-3d-sec min-w-screen flex h-[100vh] flex-col items-center justify-center md:h-full"
		>
			<div class="h-full w-full">
				<div class="flex flex-col items-center justify-center md:flex-row md:gap-0">
					<div class="dept-card-sec-1">
						<img
							src={dept_gd_sec_card}
							class=" scale-[0.9] rounded-xl md:scale-[0.7]"
							alt="gd_sec"
						/>
					</div>
					<div class="dept-card-sec-1">
						<img
							src={dept_3d_sec_card}
							class=" scale-[0.9] rounded-xl md:scale-[0.7]"
							alt="gd_sec"
						/>
					</div>
				</div>
			</div>
		</section>

		<section
			class="department-sec department-ui-web-sec min-w-screen flex h-[100vh] flex-col items-center justify-center md:h-full"
		>
			<div class="h-full w-full">
				<div class="flex flex-col items-center justify-center md:flex-row md:gap-0">
					<div class="dept-card-sec-2">
						<img
							src={dept_ui_ux_sec_card}
							class=" scale-[0.9] rounded-xl md:scale-[0.7]"
							alt="gd_sec"
						/>
					</div>
					<div class="dept-card-sec-2">
						<img
							src={dept_web_dev_ux_sec_card}
							class=" scale-[0.9] rounded-xl md:scale-[0.7]"
							alt="gd_sec"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.department-intro-sec {
		position: relative;
		width: 100vw !important;

		background-color: black;
		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		animation: moveLeft 2s linear infinite;
	}

	.department-gd-3d-sec {
		position: relative;
		width: 100vw !important;

		background-color: black;
		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		animation: moveLeft 2s linear infinite;
	}

	.department-ui-web-sec {
		position: relative;
		width: 100vw !important;

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
