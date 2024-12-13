<svelte:head>
	<title>Graphica | Home</title>
</svelte:head>

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from "$lib/components/sections/Landing.svelte";
	import ClubIntro from '$lib/components/sections/ClubIntro.svelte';
	import Departments from '$lib/components/sections/Departments.svelte';
	import Resources from '$lib/components/sections/Resources.svelte';
</script>

<main class="flex flex-col overflow-hidden bg-base-100">	
	<Navbar />
	<Landing />
	<ClubIntro />
	<Departments />
	<Resources />
	
</main>





