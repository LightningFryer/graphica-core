<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Navbar from "$lib/components/Navbar.svelte";

	let { data }: { data: PageData } = $props();
	let BlogTest = data.module.default;
	onMount(() => {
		console.log(data.done);
	});
</script>

<main class="blog-sec min-h-screen">
	<Navbar />
	<BlogTest />
</main>

<style>
	.blog-sec {
		/* position: relative; */
		/* width: 100vw !important; */
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
