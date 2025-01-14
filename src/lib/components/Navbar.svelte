<script lang="ts">
	import { Notebook, House, Star } from 'lucide-svelte';
	import { navBarEnter } from '$lib/anims/landingAnims';
	import { onMount } from 'svelte';
	let navbar: HTMLElement;

	import graphicaLogo from '$lib/images/logo/Logo_Alpha.png';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import status_bar from '$lib/images/status_bar.png';

	onMount(() => {
		if ($page.url.pathname == '/') {
			navBarEnter(navbar);
		}
	});
</script>

<nav
	class="fixed z-20 w-full overflow-hidden backdrop-blur-[0.5rem] md:w-full md:max-w-full"
	bind:this={navbar}
>
	<div class="navbar bg-transparent">
		<!-- <div class="navbar-start">
			<button class="btn btn-primary bg-opacity-50 w-20 flex flex-col justify-center items-center" onclick={() => {goto("/")}}>
				<img src={graphicaLogo} alt="graphica_alpha_logo"/>
			</button>
		</div> -->

		<div class="navbar-start flex flex-row gap-0 font-jost md:gap-1">
			<a
				class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
				href="/">Home</a
			>
			<a
				class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
				href="#blog-intro-sec" onclick={() => scrollTo({behavior: 'smooth'})}>Blog</a
			>
			<a
				class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
				href="/team">Team</a
			>
		</div>

		<div class="navbar-end font-jost font-light md:flex md:text-xl">
			<button onclick={() => goto('')} class="btn btn-primary rounded-full">Contact Us!</button>
		</div>
	</div>
	<div class="">
		<img src={status_bar} alt="status_bar" />
	</div>
	<!-- <div class="flex flex-row border-b-2 border-accent">
		<div class=""></div>
	</div> -->
</nav>
