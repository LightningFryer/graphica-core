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

	let websiteLoaded = false;

	onMount(() => {
		window.addEventListener('load', () => {
			websiteLoaded = true;
			console.log(websiteLoaded);
		})
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
