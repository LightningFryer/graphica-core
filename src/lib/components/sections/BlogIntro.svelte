<script>
	import { ArrowDown, ArrowUp } from 'lucide-svelte';
	import { quadInOut, sineIn } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import gsap from 'gsap';
	import PsychOfColorsCardImage from "$lib/images/blog/psychology_of_colours/psych_of_colors_card.png"

	const scrollToBlog = () => {
		gsap.to(window, {
			duration: 1.2,
			scrollTo: '#blog-intro-sec',
			ease: 'power1.inOut'
		});
	};

	let moreBlogsOpen = true;
</script>

<main
	id="blog-intro-sec"
	class="blog-intro-sec min-h-[{moreBlogsOpen
		? '200vh'
		: '100vh'}] flex flex-col items-center justify-center p-5 md:min-h-fit md:p-0"
>
	<div
		class="flex w-[90%] flex-col items-center justify-start gap-5 md:h-screen md:justify-center md:gap-10"
	>
		<h1 class="font-bebas text-7xl md:text-8xl">BLOG POSTS</h1>

		<p
			class="flex flex-col items-center justify-center text-center font-poppins text-xl font-extralight"
		>
			Our blog is a space for thoughtful insights and design-driven stories.
			<span>Explore ideas that blend creativity.</span>
		</p>

		<div class="flex flex-col flex-wrap gap-6 md:flex-row md:gap-28">
			<a	href="/blog/PsychologyOfColors"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div class="absolute flex justify-center items-center top-0 h-[60%] w-full rounded-br-[3rem] bg-[#F5F3E4]">
					<img src={PsychOfColorsCardImage} alt="psych_of_colors_card" class="size-32 md:size-40" />
				</div>
				<div
					class="absolute bottom-0 flex h-[40%] w-full items-center justify-center rounded-tl-[3rem] bg-[#C39F61]"
				>
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content">
						<p class="font-nunito text-sm">design • 20/01/2025</p>
						<h2 class="text-md font-poppins font-semibold text-[#F5F3E4]">
							The Psychology of Colors: What Your Design Says About You
						</h2>
					</div>
				</div>
			</a>

			<div
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div class="absolute top-0 h-[60%] w-full rounded-br-[3rem] bg-[#F5F3E4]"></div>
				<div
					class="absolute bottom-0 flex h-[40%] w-full items-center justify-center rounded-tl-[3rem] bg-[#C39F61]"
				>
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content">
						<p class="font-nunito">insight • date</p>
						<h2 class="text-md font-poppins font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>
			</div>

			<div
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div class="absolute top-0 h-[60%] w-full rounded-br-[3rem] bg-[#F5F3E4]"></div>
				<div
					class="absolute bottom-0 flex h-[40%] w-full items-center justify-center rounded-tl-[3rem] bg-[#C39F61]"
				>
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content">
						<p class="font-nunito">insight • date</p>
						<h2 class="text-md font-poppins font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>
			</div>
		</div>

		{#if !moreBlogsOpen}
			<div class="flex w-full justify-center">
				<button class="btn btn-accent" onclick={() => (moreBlogsOpen = true)}
					>More Blogs <ArrowDown /></button
				>
			</div>
		{/if}
	</div>

	{#key moreBlogsOpen}
		<!-- {#if moreBlogsOpen} -->
		<div
			class="{moreBlogsOpen
				? 'flex h-screen'
				: 'invisible h-0'} flex-col items-center justify-center"
			in:slide={{ duration: 500, easing: quadInOut }}
			out:slide={{ duration: 500 }}
		>
			<p class="text-9xl">Test. More blogs here.</p>
		</div>
		<div
			class="{moreBlogsOpen ? 'flex' : 'invisible h-0'} w-full justify-center"
			out:fade={{ duration: 100 }}
		>
			<button
				class="btn btn-accent md:mb-7"
				onclick={() => {
					moreBlogsOpen = false;
					scrollToBlog();
				}}>Show Less <ArrowUp /></button
			>
		</div>
		<!-- {/if} -->
	{/key}
</main>

<style>
	.blog-intro-sec {
		/* position: relative; */
		/* width: 100vw !important; */
		/* height: 100vh; */

		background-color: black;
		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		animation: moveLeft 2s linear infinite;
	}

	@keyframes moveLeft {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 70px 0; /* Moves by exactly one grid cell size */
		}
	}
</style>
