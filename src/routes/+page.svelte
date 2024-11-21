<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from "$lib/components/sections/Landing.svelte"
	import ClubIntro from '$lib/components/sections/ClubIntro.svelte';

	let clubDepDivs: HTMLElement;

	import gsap from 'gsap';
	import { onMount } from 'svelte';
	let dep1 = false;
	let dep2 = false;
	let dep3 = false;
	let dep4 = false;

</script>

<main class="flex flex-col overflow-x-hidden" id="smooth-wrapper">	
	<Navbar />
	<Landing />
	<ClubIntro />
	
	
	<section class="flex h-screen flex-row items-center justify-evenly">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class={`border-2 flex flex-col grow h-full w-[${dep1 ? "50%" : "10%"}] transition-[width] duration-500 cursor-pointer`} onclick={() => {
			dep1 = true;
			dep2 = false;
			dep3 = false;
			dep4 = false;
		}}>
			<div class="border-2 h-[80%]">

			</div>

			<div class="bg-black flex flex-col h-[20%] text-8xl w-full text-end">
				1
			</div>
		</div>

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class={`border-2 grow h-full w-[${dep2 ? "50%" : "10%"}] transition-[width] duration-500 cursor-pointer`} onclick={() => {
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
		<div class={`border-2 grow h-full w-[${dep3 ? "50%" : "10%"}] transition-[width] duration-500 cursor-pointer`} onclick={() => {
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
		<div class={`border-2 grow h-full w-[${dep4 ? "50%" : "10%"}] transition-[width] duration-500 cursor-pointer`} onclick={() => {
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
