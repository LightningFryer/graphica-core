<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import ViewTransition from '$lib/components/Navigation.svelte';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		gsap.registerPlugin(ScrollSmoother);
		ScrollSmoother.create({
			smooth: 0.8,
			effects: true
		});
	});
</script>

<svelte:head>
	<!-- <meta
		name="description"
		content="Explore the world of cutting-edge design at Club Graphica. Learn, create, and share!"
	/>
	<meta name="keywords" content="design, graphic, tech, tutorials" />
	<meta name="author" content="Club Graphica Team" /> -->

	<meta property="og:site_name" content="Club Graphica" />
	<meta property="og:title" content="Club Graphica" />
	<meta
		property="og:description"
		content="Explore the world of cutting-edge design at Club Graphica. Learn, create, and share!"
	/>
</svelte:head>
<div id="smooth-wrapper">
	<div id="smooth-content">
		<ViewTransition />
		{@render children()}
	</div>
</div>
