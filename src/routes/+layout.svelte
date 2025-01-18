<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import ViewTransition from "$lib/components/Navigation.svelte";

</script>

<svelte:head>
	<meta name="description" content="Explore the world of cutting-edge design at Club Graphica. Learn, create, and share!">
	<meta name="keywords" content="design, graphic, tech, tutorials">
	<meta name="author" content="Club Graphica Team">
</svelte:head>

<ViewTransition />
{@render children()}
