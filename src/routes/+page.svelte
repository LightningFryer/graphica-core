<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from "$lib/components/sections/Landing.svelte";
	import ClubIntro from '$lib/components/sections/ClubIntro.svelte';
	import ClubIntroRework from '$lib/components/sections/ClubIntroRework.svelte';
	import DepartmentsRework from '$lib/components/sections/DepartmentsRework.svelte';
	import Departments from '$lib/components/sections/Departments.svelte';
	import Resources from '$lib/components/sections/Resources.svelte';
	import Events from '$lib/components/sections/Events.svelte';
</script>

<main class="overflow-hidden bg-blue-500">	
	<Navbar />
	<Landing />
	<!-- <ClubIntro /> -->
	<!-- <Departments /> -->
	<ClubIntroRework />
	<DepartmentsRework />
	<Resources />
	<Events />
	
</main>





