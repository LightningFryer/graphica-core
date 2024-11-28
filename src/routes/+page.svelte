<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from "$lib/components/sections/Landing.svelte"
	import ClubIntro from '$lib/components/sections/ClubIntro.svelte';
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	// import TextPlugin from 'gsap/dist/TextPlugin';

	let dep1 = false;
	let dep2 = false;
	let dep3 = false;
	let dep4 = false;
	let showText = false;
	let text = "Graphic Design";

	const changeText = () => {
		if (showText){
			gsap.to(".this", {
				opacity: 1,
				duration: 0.5,
			});
		}	
	}


</script>

<main class="flex flex-col overflow-x-hidden bg-base-100" id="smooth-wrapper">	
	<Navbar />
	<Landing />
	<ClubIntro />
	
	
	<section class="flex h-screen flex-row items-center justify-evenly">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class={`border-2 flex flex-col grow h-full duration-1000 cursor-pointer`} 
		style="width: {dep1 ? '50%' : '10%'}"
		onmouseenter={() => {
			dep1 = true;
			dep2 = false;
			dep3 = false;
			dep4 = false;
		}}>
			<div class="border-2 h-[80%]">
				{#if dep1}
				<div in:fade={{duration: 1000}} onintroend={() => {
					showText = true
					changeText();
					}}>
					<p class={`this text-xl text-wrap`}>{text}</p>
				</div>
				{:else}
				<div in:fade={{duration: 1000}} onintrostart={() => showText = false}>
					<p>Graphic Design</p>
				</div>
				{/if}
			</div>

			<div class="bg-black flex flex-col h-[20%] text-8xl w-full text-end">
				1
			</div>
		</div>

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class={`border-2 grow h-full transition-[width] duration-1000 cursor-pointer`} 
		style="width: {dep2 ? '50%' : '10%'}"
		onmouseenter={() => {
			dep1 = false;
			dep2 = true;
			dep3 = false;
			dep4 = false;
		}}>
			<div class="border-2 h-[80%]">

			</div>

			<div class="bg-black flex flex-col h-[20%] text-8xl w-full text-end ">
				2
			</div>
		</div>

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class={`border-2 grow h-full transition-[width] duration-1000 cursor-pointer`}
		style="width: {dep3 ? '50%' : '10%'}"
		onmouseenter={() => {
			dep1 = false;
			dep2 = false;
			dep3 = true;
			dep4 = false;
		}}>
			<div class="border-2 h-[80%]">

			</div>

			<div class="bg-black flex flex-col h-[20%] text-8xl w-full text-end">
				3
			</div>
		</div>

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class={`border-2 grow h-full transition-[width] duration-1000 cursor-pointer`} 
		style="width: {dep4 ? '50%' : '10%'}"
		onmouseenter={() => {
			dep1 = false;
			dep2 = false;
			dep3 = false;
			dep4 = true;
		}}>
			<div class="border-2 h-[80%]">

			</div>

			<div class="bg-black flex flex-col h-[20%] text-8xl w-full text-end ">
				4
			</div>
		</div>
		
		
	</section>
</main>
