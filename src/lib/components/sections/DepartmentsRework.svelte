<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	let containerOffsetWidth: Number;

	import dept_gd_sec_card from '$lib/images/gd_sec_card.webp';
	import dept_3d_sec_card from '$lib/images/3d_sec_card.webp';
	import dept_ui_ux_sec_card from '$lib/images/ui_ux_sec_card.webp';
	import dept_web_dev_ux_sec_card from '$lib/images/web_dev_sec_card.webp';
	import Device from 'svelte-device-info';
	import { stopOverscroll } from '$lib/anims/helperFuncs';
	// import { Star } from 'lucide-svelte';

	onMount(() => {
		let sections = gsap.utils.toArray('.department-sec');
		gsap.registerPlugin(ScrollTrigger);
		// ScrollTrigger.normalizeScroll(true);

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			// duration: 2,
			scrollTrigger: {
				trigger: '.container',
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				end: () => '+=' + containerOffsetWidth || 0
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

		// gsap.from('.gd-stamp-anim', {
		// 	opacity: 0,
		// 	yPercent: -100,
		// 	duration: 1,
		// 	scale: 2,
		// 	stagger: 0.3,
		// 	ease: 'power4.inOut',
		// 	onComplete: () => {
		// 		gsap.to('.thisText', {
		// 			opacity: 1,
		// 			yPercent: 0,
		// 			startAt: {
		// 				yPercent: 50
		// 			},
		// 			text: 'Because our club is all about this!',
		// 			duration: 1.5
		// 		});
		// 	},
		// 	scrollTrigger: {
		// 		trigger: '.department-gd-3d-sec',
		// 		start: 'right center'
		// 	}
		// });

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
				start: 'bottom right'
				// markers: true,
			}
		});

		if (!Device.isMobile) {
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
					start: 'bottom left'
					// markers: true
				}
			});
		} else {
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
					start: 'right center'
					// markers: true
				}
			});
		}
		stopOverscroll('.container');
	});
	// right center for phones
</script>

<main class="">
	<div class="container flex flex-row" bind:offsetWidth={containerOffsetWidth}>
		<section
			class="department-intro-sec department-sec flex h-screen min-w-full flex-col items-center justify-center bg-accent text-base-200"
		>
			<!-- This is the background image that looks like the exploding thingy. DO NOT DELETE -->
			<!-- <div class="absolute z-0 scale-[1.3]">
				<img src={dept_intro_blob} alt="dept_intro_blob" />
			</div> -->
			<div class="h-full w-full flex justify-center items-center">
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
			class="department-sec department-gd-3d-sec flex h-screen min-w-full flex-col items-center justify-center"
		>
			<div class="h-full w-full">
				<div class="flex flex-col items-center justify-center md:flex-row md:gap-0">
					<div class="dept-card-sec-1">
						<img src={dept_gd_sec_card} class=" scale-[0.7] rounded-xl" alt="gd_sec" />
					</div>
					<div class="dept-card-sec-1">
						<img src={dept_3d_sec_card} class=" scale-[0.7] rounded-xl" alt="gd_sec" />
					</div>
				</div>
			</div>
		</section>

		<section
			class="department-sec department-ui-web-sec flex h-screen min-w-full flex-col items-center justify-center"
		>
			<div class="h-full w-full">
				<div class="flex flex-col items-center justify-center md:flex-row md:gap-0">
					<div class="dept-card-sec-2">
						<img src={dept_ui_ux_sec_card} class=" scale-[0.7] rounded-xl" alt="gd_sec" />
					</div>
					<div class="dept-card-sec-2">
						<img src={dept_web_dev_ux_sec_card} class=" scale-[0.7] rounded-xl" alt="gd_sec" />
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.overscroll-avoid {
		overscroll-behavior: none;
	}

	.department-intro-sec {
		position: relative;
		/* width: 100vw !important; */
		height: 100vh; /* Full viewport height */

		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		background-color: black;
		animation: moveLeft 2s linear infinite;
	}

	.department-gd-3d-sec {
		position: relative;
		/* width: 100vw !important; */
		height: 100vh; /* Full viewport height */

		background-color: black;
		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		animation: moveLeft 2s linear infinite;
	}

	.department-ui-web-sec {
		position: relative;
		/* width: 100vw !important; */
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

	main {
		margin: 0;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch
	}
</style>
