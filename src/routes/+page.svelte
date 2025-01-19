<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import DepartmentsRework from '$lib/components/sections/DepartmentsRework.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import BlogIntro from '$lib/components/sections/BlogIntro.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';
	import SplashLogo from '$lib/images/logo/Logo_Alpha.webp';
	import MeetTheTeam from '$lib/components/sections/MeetTheTeam.svelte';
	import DepartmentsVertical from '$lib/components/sections/DepartmentsVertical.svelte';

	let loading = true;
	let timeoutDone = false;

	$: {
		console.log(`Log: Loading images: ${loading}, Timeout Done: ${timeoutDone}`);
	}

	onMount(() => {
		const images = document.querySelectorAll('img');
		let loadedCount = 0;

		// Helper function to check if all images are loaded
		const checkAllImagesLoaded = () => {
			if (loadedCount === images.length) {
				loading = false; // Trigger reactivity
			}
		};

		images.forEach((img) => {
			if (img.complete) {
				loadedCount++;
				checkAllImagesLoaded();
			} else {
				img.addEventListener('load', () => {
					loadedCount++;
					checkAllImagesLoaded();
				});
				img.addEventListener('error', () => {
					loadedCount++;
					checkAllImagesLoaded();
				});
			}
		});

		// Handle case where there are no images
		if (images.length === 0) {
			loading = false;
		}

		// Update timeoutDone reactively
		setTimeout(() => {
			timeoutDone = true; // This triggers Svelte's reactivity
			console.log('Timeout finished');
		}, 3000);

		gsap.to('.splash-icon', {
			rotation: 360,
			duration: 10,
			ease: 'none',
			delay: 0,
			repeat: -1
		});
	});
</script>

<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

{#if loading || !timeoutDone}
	<!-- Splash screen -->

	<div class="flex h-screen flex-col items-center justify-center">
		<img
			src={SplashLogo}
			alt="splash_logo"
			class="splash-icon btn-circle size-48 bg-white bg-opacity-50"
		/>
		<!-- <h1 class="text-2xl font-poppins">Loading all images, please wait...</h1> -->
	</div>

	<!-- Main content -->
{:else}
	<main class="main-sec overflow-hidden" in:fade={{ duration: 1000 }}>
		<Navbar />
		<Landing />
		<ClubIntroRework />
		<!-- <DepartmentsRework /> -->
		<DepartmentsVertical />
		<Events />
		<BlogIntro />
		<MeetTheTeam />
		<Footer />
	</main>
{/if}
