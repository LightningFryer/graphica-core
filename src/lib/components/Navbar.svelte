<script lang="ts">
	import { Notebook, House, Star } from 'lucide-svelte';
	import { navBarEnter } from '$lib/anims/landingAnims';
	import { onMount } from 'svelte';
	let navbar: HTMLElement;

	import graphicaLogo from "$lib/images/logo/Logo_Alpha.png";
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	onMount(() => {
		if ($page.url.pathname == "/"){
			navBarEnter(navbar);
		}
	});
</script>

<nav class="absolute z-10 md:max-w-full md:w-full md:p-2" bind:this={navbar}>
	<div class="navbar bg-transparent">
		<div class="navbar-start">
			<button class="btn btn-primary bg-opacity-50 w-16 flex flex-col justify-center items-center" onclick={() => {goto("/")}}>
				<img src={graphicaLogo} alt="graphica_alpha_logo" class=""/>
			</button>
		</div>
		
		<div class="navbar-center flex flex-row gap-0 md:gap-3">
			<a
				class="btn btn-ghost rounded-none font-inter font-light md:tracking-wide text-base md:text-xl hover:border-b-2 hover:border-b-accent"
				href="/"><House size="18" />Home</a
			>
			<a
				class="btn btn-ghost rounded-none font-inter font-light md:tracking-wide text-base md:text-xl hover:border-b-2 hover:border-b-accent"
				href="/blog"><Notebook size="18" />Blog</a
			>
			<a
				class="btn btn-ghost rounded-none font-inter font-light md:tracking-wide text-base md:text-xl hover:border-b-2 hover:border-b-accent"
				href="/team"><Star size="18"/>Team</a
			>
		</div>

		<div class="navbar-end font-inter font-light hidden md:flex md:text-xl">
			<h1>ESTD. 2021</h1>
		</div>
	</div>
</nav>
