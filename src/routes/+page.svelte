<script lang="ts">
	import SplashScreen from '$lib/components/SplashScreen.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import BlogIntro from '$lib/components/sections/BlogIntro.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import MeetTheTeam from '$lib/components/sections/MeetTheTeam.svelte';
	import DepartmentsVertical from '$lib/components/sections/DepartmentsVertical.svelte';
	import { onMount } from 'svelte';

	import gsap from 'gsap';

	let loaded = true;
	onMount(() => {
		console.log('Hello World! And hello to whoever is looking at the console here!');
		// Splash screen animation
		gsap
			.fromTo(
				'.pop-text-1',
				{
					opacity: 0,
					display: 'none',
					scale: 5
				},
				{
					duration: 1,
					opacity: 1,
					scale: 1,
					display: 'block',
					ease: 'power4.inOut',
					onComplete: () => {
						gsap.set('.pop-text-1', {
							display: 'none'
						});
					}
				}
			)
			.then(() => {
				gsap
					.fromTo(
						'.pop-text-2',
						{
							opacity: 0,
							display: 'none',
							scale: 5
						},
						{
							duration: 1,
							opacity: 1,
							scale: 1,
							display: 'block',
							ease: 'power4.inOut',
							onComplete: () => {
								gsap.set('.pop-text-2', {
									display: 'none'
								});
							}
						}
					)
					.then(() => {
						gsap.fromTo(
							'.pop-text-3',
							{
								opacity: 0,
								display: 'none',
								scale: 5
							},
							{
								duration: 1,
								opacity: 1,
								scale: 1,
								display: 'block',
								ease: 'power4.inOut',
								onComplete: () => {
									gsap.set('.pop-text-3', {
										display: 'none',
										onComplete: () => {
											loaded = true;
											gsap.to('.splash-container', {
												duration: 1,
												yPercent: -100,
												ease: 'power3.inOut'
											});
										}
									});
								}
							}
						);
					});
			});
	});

	// let timeoutDone = false;

	// $: {
	// 	console.log(`Log: Loading images: ${loading}, Timeout Done: ${timeoutDone}`);
	// }

	// onMount(() => {
	// 	const images = document.querySelectorAll('img');
	// 	let loadedCount = 0;

	// 	// Helper function to check if all images are loaded
	// 	const checkAllImagesLoaded = () => {
	// 		if (loadedCount === images.length) {
	// 			loading = false; // Trigger reactivity
	// 		}
	// 	};

	// 	images.forEach((img) => {
	// 		if (img.complete) {
	// 			loadedCount++;
	// 			checkAllImagesLoaded();
	// 		} else {
	// 			img.addEventListener('load', () => {
	// 				loadedCount++;
	// 				checkAllImagesLoaded();
	// 			});
	// 			img.addEventListener('error', () => {
	// 				loadedCount++;
	// 				checkAllImagesLoaded();
	// 			});
	// 		}
	// 	});

	// 	// Handle case where there are no images
	// 	if (images.length === 0) {
	// 		loading = false;
	// 	}

	// 	// Update timeoutDone reactively
	// 	setTimeout(() => {
	// 		timeoutDone = true; // This triggers Svelte's reactivity
	// 		console.log('Timeout finished');
	// 	}, 2000);

	// 	gsap.to('.splash-icon', {
	// 		rotation: 360,
	// 		duration: 10,
	// 		ease: 'none',
	// 		delay: 0,
	// 		repeat: -1
	// 	});
	// });
</script>

<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

<main class={`main-sec overflow-hidden`}>
	<!-- <SplashScreen /> -->
	{#if loaded}
		<Navbar />
		<Landing loadingDone={loaded} />
		<ClubIntroRework />
		<DepartmentsVertical />
		<Events />
		<BlogIntro />
		<MeetTheTeam />
		<Footer />
	{/if}
</main>
