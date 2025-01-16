<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import DepartmentsRework from '$lib/components/sections/DepartmentsRework.svelte';
	import Resources from '$lib/components/sections/Resources.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import BlogIntro from '$lib/components/sections/BlogIntro.svelte';
	import MeetTheTeam from '$lib/components/sections/MeetTheTeam.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { onMount } from 'svelte';

	let isLoading = true;
	let loadingProgress = 0;
	let totalImages = 0;
	let loadedImages = 0;

	async function waitForImagesToLoad() {
		const images = Array.from(document.querySelectorAll('img'));
		totalImages = images.length;

		if (totalImages === 0) {
			isLoading = false;
			return;
		}

		const imageLoadPromises = images.map(
			(img) =>
				new Promise<void>((resolve) => {
					if (img.complete && img.naturalWidth !== 0) {
						loadedImages++;
						loadingProgress = (loadedImages / totalImages) * 100;
						resolve();
					} else {
						img.onload = () => {
							loadedImages++;
							loadingProgress = (loadedImages / totalImages) * 100;
							resolve();
						};
						img.onerror = () => {
							loadedImages++;
							loadingProgress = (loadedImages / totalImages) * 100;
							resolve();
						};
					}
				})
		);

		try {
			await Promise.all(imageLoadPromises);
		} catch (error) {
			console.error('Error loading images:', error);
		} finally {
			isLoading = false;
		}
	}

	// Add a timeout to prevent infinite loading
	function setupLoadingTimeout() {
		const LOADING_TIMEOUT = 10000; // 10 seconds
		setTimeout(() => {
			if (isLoading) {
				console.warn('Loading timeout reached, showing content anyway');
				isLoading = false;
			}
		}, LOADING_TIMEOUT);
	}

	onMount(() => {
		setupLoadingTimeout();
		waitForImagesToLoad();
	});
</script>

<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

<main class="main-sec overflow-hidden">
	{#if isLoading}
		<div class="flex h-screen flex-col items-center justify-center space-y-4">
			<p class="text-4xl font-medium">Loading...</p>
			<div class="h-2 w-64 rounded-full bg-gray-200">
				<div
					class="h-full rounded-full bg-blue-500 transition-all duration-300"
					style="width: {loadingProgress}%"
				></div>
			</div>
			<p class="text-sm text-gray-600">{Math.round(loadingProgress)}%</p>
		</div>
	{:else}
		<Navbar />
		<Landing />
		<ClubIntroRework />
		<DepartmentsRework />
		<Events />
		<BlogIntro />
		<MeetTheTeam />
		<Footer />
	{/if}
</main>
