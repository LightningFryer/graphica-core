<script lang="ts">
    import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	let sectionContainer: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let sections = gsap.utils.toArray(".section");

		
	});
</script>

<div class="container flex" bind:this={sectionContainer}>
    <section class="section h-screen w-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl">First section</h1>
    </section>

    <section class="section h-screen w-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl">Second section</h1>
    </section>

    <section class="section h-screen w-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl">Third section</h1>
    </section>
</div>