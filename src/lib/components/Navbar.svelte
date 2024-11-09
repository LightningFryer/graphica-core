<script lang="ts">
	import { Notebook, House, Star } from 'lucide-svelte';
	import { navBarEnter } from '$lib/anims/landingAnims';
	import { onMount } from 'svelte';
	let navbar: HTMLElement;

	onMount(() => {
		navBarEnter(navbar);
	});
</script>

<nav class="absolute z-10 w-full p-2" bind:this={navbar}>
	<div class="navbar bg-transparent">
		<div class="navbar-start">
			<button class="btn btn-primary font-bebas text-xl">*Logo*</button>
		</div>
		<div class="navbar-center flex flex-row gap-3">
			<a
				class="btn btn-ghost rounded-none font-bebas text-2xl hover:border-b-2 hover:border-b-accent"
				href="/"><House size="22" />Home</a
			>
			<a
				class="btn btn-ghost rounded-none font-bebas text-2xl hover:border-b-2 hover:border-b-accent"
				href="/"><Notebook size="22" />Blog</a
			>
			<a
				class="btn btn-ghost rounded-none font-bebas text-2xl hover:border-b-2 hover:border-b-accent"
				href="/team"><Star size="22"/>Team</a
			>
		</div>
		<div class="navbar-end">
            <p class="font-bebas text-xl font-bold">ESTD. 2019</p>
        </div>
	</div>
</nav>
