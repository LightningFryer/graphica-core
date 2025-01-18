<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	// import ClubIntro from '$lib/components/sections/ClubIntroDeprecated.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import DepartmentsRework from '$lib/components/sections/DepartmentsRework.svelte';
	// import Departments from '$lib/components/sections/DepartmentsDeprecated.svelte';
	import Resources from '$lib/components/sections/Resources.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import BlogIntro from '$lib/components/sections/BlogIntro.svelte';
	import MeetTheTeam from '$lib/components/sections/MeetTheTeam.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		Promise.all(
			Array.from(document.images).map((img) => {
				if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
				return new Promise((resolve) => {
					img.addEventListener('load', () => resolve(true));
					img.addEventListener('error', () => resolve(false));
				});
			})
		).then((results) => {
			if (results.every((res) => res)) console.log('all images loaded successfully');
			else console.log('some images failed to load, all finished loading');
		});
	});
</script>

<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

<main class="main-sec overflow-hidden">
	<Navbar />
	<Landing />
	<ClubIntroRework />
	<DepartmentsRework />
	<Events />
	<BlogIntro />
	<MeetTheTeam />
	<Footer />
	<!-- <Resources /> -->
</main>
