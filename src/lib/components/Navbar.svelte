<script lang="ts">
	import { navBarEnter } from '$lib/anims/landingAnims';
	import { onMount } from 'svelte';
	let navbar: HTMLElement;
	import { page } from '$app/stores';
	// import status_bar from '$lib/images/status_bar.avif';
	import gsap from 'gsap';
	import ScrollToPlugin from 'gsap/ScrollToPlugin';
	import { goto } from '$app/navigation';

	const scrollToHome = () => {
		if ($page.url.pathname.includes('blog')) {
			goto('/');
		} else {
			gsap.to(window, {
				duration: 1.2,
				scrollTo: '#landing-sec',
				ease: 'power1.inOut'
			});
		}
	};

	const scrollToBlog = () => {
		gsap.to(window, {
			duration: 1.2,
			scrollTo: '#blog-intro-sec',
			ease: 'power1.inOut'
		});
	};

	const scrollToTeam = () => {
		gsap.to(window, {
			duration: 1.2,
			scrollTo: '#meet-the-team',
			ease: 'power1.inOut'
		});
	};

	const scrollToFooter = () => {
		gsap.to(window, {
			duration: 1.2,
			scrollTo: '#footer-sec',
			ease: 'power1.inOut'
		});
	};

	onMount(() => {
		gsap.registerPlugin(ScrollToPlugin);
		if ($page.url.pathname == '/') {
			navBarEnter(navbar);
		}
	});
</script>

<nav
	class="fixed z-20 w-full overflow-hidden backdrop-blur-[0.12rem] md:w-full md:max-w-full"
	bind:this={navbar}
>
	<div class="navbar bg-transparent">
		<!-- <div class="navbar-start">
			<button class="btn btn-primary bg-opacity-50 w-20 flex flex-col justify-center items-center" onclick={() => {goto("/")}}>
				<img src={graphicaLogo} alt="graphica_alpha_logo"/>
			</button>
		</div> -->

		{#if $page.url.pathname.includes('blog')}
			<div class="navbar-start flex flex-row gap-0 font-jost md:gap-1">
				<button
					onclick={scrollToHome}
					class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
					>Back To Home</button
				>
			</div>
		{:else}
			<div class="navbar-start flex flex-row gap-0 font-jost md:gap-1">
				<button
					onclick={scrollToHome}
					class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
					>Home</button
				>
				<button
					onclick={scrollToBlog}
					class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
					>Blog</button
				>
				<button
					onclick={scrollToTeam}
					class="btn btn-ghost rounded-none text-base font-light hover:border-b-2 hover:border-b-accent md:text-xl md:tracking-wide"
					>Team</button
				>
			</div>

			<div class="navbar-end font-jost font-light md:flex md:text-xl">
				<button onclick={scrollToFooter} class="btn btn-primary rounded-full">Contact Us!</button>
			</div>
		{/if}
	</div>
	<div class="">
		<img
			src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/status_bar.avif"
			alt="status_bar"
		/>
	</div>
	<!-- <div class="flex flex-row border-b-2 border-accent">
		<div class=""></div>
	</div> -->
</nav>
