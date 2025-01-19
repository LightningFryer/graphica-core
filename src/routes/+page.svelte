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

<main class="main-sec overflow-hidden">
	<!-- Splash screen -->
	{#key timeoutDone}
		{#if loading || !timeoutDone}
			<div class="flex h-screen items-center justify-center" in:fade={{duration: 2000}} out:fade={{duration: 2000}}>
				<h1 class="text-8xl">Loading all images, please wait...</h1>
			</div>
		{:else}
			<!-- Main content -->
			<Navbar />
			<Landing />
			<ClubIntroRework />
			<DepartmentsRework />
			<Events />
			<BlogIntro />
			<Footer />
		{/if}
	{/key}
</main>
