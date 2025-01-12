<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/sections/Landing.svelte';
	import ClubIntro from '$lib/components/sections/ClubIntro.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import DepartmentsRework from '$lib/components/sections/DepartmentsRework.svelte';
	import Departments from '$lib/components/sections/Departments.svelte';
	import Resources from '$lib/components/sections/Resources.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import BlogIntro from '$lib/components/sections/BlogIntro.svelte';
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
	<!-- <Resources /> -->
</main>

<style>
	.main-sec {
		/* position: relative; */
		/* width: 100%; */
		/* height: 100vh; Full viewport height */

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
