<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	// import ClubIntro from '$lib/components/sections/ClubIntroDeprecated.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import DepartmentsRework from '$lib/components/sections/DepartmentsRework.svelte';
	// import Departments from '$lib/components/sections/DepartmentsDeprecated.svelte';
	// import Resources from '$lib/components/sections/Resources.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import BlogIntro from '$lib/components/sections/BlogIntro.svelte';
	import MeetTheTeam from '$lib/components/sections/MeetTheTeam.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { onMount } from 'svelte';

	let loading = true;

	$: {
		console.log(`Log: Loading images: ${loading}`);
	}

	onMount(() => {
		const images = document.querySelectorAll('img');
		let loadedCount = 0;

		// Helper function to check if all images are loaded
		const checkAllImagesLoaded = () => {
			if (loadedCount === images.length) {
				loading = false;
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

		if (images.length === 0) {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

<main class="main-sec overflow-hidden">
	{#key loading}
		{#if loading}
			<div class="flex h-screen items-center justify-center">
				<h1 class="text-8xl">Loading all images please wait...</h1>
			</div>
		{:else}
			<Navbar />
			<Landing />
			<ClubIntroRework />
			<DepartmentsRework />
			<Events />
			<BlogIntro />
			<!-- <MeetTheTeam /> -->
			<Footer />
			<!-- <Resources /> -->
		{/if}
	{/key}
</main>
