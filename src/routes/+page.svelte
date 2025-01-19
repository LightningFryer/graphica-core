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
	});
</script>

<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

{#if loading || !timeoutDone}
	<!-- Splash screen -->

	<div class="flex h-screen items-center justify-center">
		<h1 class="text-8xl">Loading all images, please wait...</h1>
	</div>

	<!-- Main content -->
{:else}
	<main class="main-sec overflow-hidden" in:fade={{duration: 1000}}>
		<Navbar />
		<Landing />
		<ClubIntroRework />
		<DepartmentsRework />
		<Events />
		<BlogIntro />
		<Footer />
	</main>
{/if}
