<script lang="ts">
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	let dep1 = false;
	let dep2 = false;
	let dep3 = false;
	let dep1Text = 'Graphic Design';
	let dep2Text = 'UI/UX';
	let dep3Text = 'Web Development';


	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		gsap.from('.departmentSec', {
			duration: 1.5,
			opacity: 0,
			scrollTrigger: {
				trigger: '.departmentSec',
				start: 'top 80%'
			}
		});
	});
</script>

<section class="departmentSec flex h-screen flex-col md:flex-row md:items-center md:justify-evenly">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class={`dep dep-1 grow md:h-full ${dep1 ? 'h-[50%]' : 'h-[10%]'} ${dep1 ? 'md:w-[50%]' : 'md:w-[10%]'} transition-[width, height] cursor-pointer duration-1000 ${dep1 ? 'grayscale-0' : 'grayscale'}`}
		onclick={() => {
			dep1 = true;
			dep2 = false;
			dep3 = false;

			dep1Text = 'Graphic Design longer text version';
			dep2Text = 'UI/UX';
			dep3Text = 'Web Development';
		}}
	>
		<div class="h-[80%]">
			{#key dep1Text}
				<p
					in:fade={{ duration: 500, delay: 300 }}
					out:fade={{ duration: 300 }}
					class={`text-wrap md:text-xl`}
				>
					{dep1Text}
				</p>
			{/key}
		</div>

		<div class="flex h-[20%] w-full flex-col text-end text-5xl backdrop-blur-sm md:text-8xl">1</div>
	</div>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class={`dep dep-2 grow md:h-full ${dep2 ? 'h-[50%]' : 'h-[10%]'} ${dep2 ? 'md:w-[50%]' : 'md:w-[10%]'} transition-[width, height] cursor-pointer duration-1000 ${dep2 ? 'grayscale-0' : 'grayscale'}`}
		onclick={() => {
			dep1 = false;
			dep2 = true;
			dep3 = false;

			dep1Text = 'Graphic Design';
			dep2Text = 'UI/UX longer text version';
			dep3Text = 'Web Development';
		}}
	>
		<div class="h-[80%]">
			{#key dep2Text}
				<p
					in:fade={{ duration: 500, delay: 300 }}
					out:fade={{ duration: 300 }}
					class={`text-wrap text-xl`}
				>
					{dep2Text}
				</p>
			{/key}
		</div>

		<div class="flex h-[20%] w-full flex-col text-end text-5xl backdrop-blur-sm md:text-8xl">2</div>
	</div>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class={`dep dep-3 grow md:h-full ${dep3 ? 'h-[50%]' : 'h-[10%]'} ${dep3 ? 'md:w-[50%]' : 'md:w-[10%]'} transition-[width, height] cursor-pointer duration-1000 ${dep3 ? 'grayscale-0' : 'grayscale'}`}
		onclick={() => {
			dep1 = false;
			dep2 = false;
			dep3 = true;

			dep1Text = 'Graphic Design';
			dep2Text = 'UI/UX';
			dep3Text = 'Web Development longer text version';
		}}
	>
		<div class="h-[80%]">
			{#key dep3Text}
				<p
					in:fade={{ duration: 500, delay: 300 }}
					out:fade={{ duration: 300 }}
					class={`text-wrap text-xl`}
				>
					{dep3Text}
				</p>
			{/key}
		</div>

		<div
			class="flex h-[20%] w-full flex-col text-wrap text-end text-5xl backdrop-blur-sm md:text-8xl"
		>
			3
		</div>
	</div>
</section>

<style>
	.dep-1 {
		/* background: url('$lib/images/graphic_design_dep.jpg'); */
		background-size: cover;
	}

	.dep-2 {
		/* background-image: url('$lib/images/web-dev-dep.jpg'); */
		background-size: cover;
	}

	.dep-3 {
		/* background-image: url('$lib/images/ui-ux-dep.jpeg'); */
		background-size: cover;
	}
</style>
