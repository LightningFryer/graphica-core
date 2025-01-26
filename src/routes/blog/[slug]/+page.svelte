<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';

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
		background-color: black;
	}
</style>
