<script lang="ts">
	import { Notebook, House, Star } from 'lucide-svelte';
	import { navBarEnter } from '$lib/anims/landingAnims';
	import { onMount } from 'svelte';
	let navbar: HTMLElement;

	import graphicaLogo from "$lib/images/logo/Logo_Alpha.png";
	import { goto } from '$app/navigation';

	onMount(() => {
		navBarEnter(navbar);
	});
</script>

<nav class="absolute z-10 w-screen p-2" bind:this={navbar}>
	<div class="navbar bg-transparent">
		<div class="navbar-start">
			<button class="btn btn-primary bg-opacity-70 flex flex-col justify-center items-center font-inter text-xl" onclick={() => {goto("/")}}>
				<img src={graphicaLogo} alt="graphica_alpha_logo" class="h-12 w-12"/>
			</button>
		</div>
		<div class="navbar-center flex flex-row gap-3">
			<a
				class="btn btn-ghost rounded-none font-inter font-light tracking-wide text-xl hover:border-b-2 hover:border-b-accent"
				href="/"><House size="22" />Home</a
			>
			<a
				class="btn btn-ghost rounded-none font-inter font-light tracking-wide text-xl hover:border-b-2 hover:border-b-accent"
				href="/blog"><Notebook size="22" />Blog</a
			>
			<a
				class="btn btn-ghost rounded-none font-inter font-light tracking-wide text-xl hover:border-b-2 hover:border-b-accent"
				href="/team"><Star size="22"/>Team</a
			>
		</div>
		<div class="navbar-end">
            <p class="text-xl font-inter tracking-wide font-light">ESTD. 2021</p>
        </div>
	</div>
</nav>
