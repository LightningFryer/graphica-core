<script>
	import { ArrowDown } from 'lucide-svelte';
	import { scrollRef } from 'svelte-scrolling';
	import { fade } from 'svelte/transition';

	let moreBlogsOpen = false;
</script>

<main
	id="blog-intro-sec"
	class="blog-intro-sec min-h-fit p-5 md:p-0 flex flex-col items-center justify-center"
	use:scrollRef={'blog'}
>
	<div class="flex md:h-screen w-[90%] flex-col items-center justify-center gap-5 md:gap-10">
		<h1 class="font-bebas text-7xl md:text-8xl">BLOG POSTS</h1>

		<p class="flex flex-col items-center justify-center font-poppins text-center text-xl font-extralight">
			Our blog is a space for thoughtful insights and design-driven stories.
			<span>Explore ideas that blend creativity.</span>
		</p>

		<div class="flex flex-col md:flex-row gap-6 flex-wrap md:gap-28">
			<div class="relative h-[15rem] w-[18rem] md:h-[22rem] md:w-[18rem] justify-end">
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
						<h2 class="font-poppins text-md font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>
			</div>

			<div class="relative h-[15rem] w-[18rem] md:h-[22rem] md:w-[18rem] justify-end">
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
						<h2 class="font-poppins text-md font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>
			</div>

			<div class="relative h-[15rem] w-[18rem] md:h-[22rem] md:w-[18rem] justify-end">
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
						<h2 class="font-poppins text-md font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>
			</div>
		</div>
		
		<div class="flex w-full justify-center">
			<button class="btn btn-accent" onclick={() => (moreBlogsOpen = true)}
				>More Blogs <ArrowDown /></button
			>
		</div>
	</div>

	{#key moreBlogsOpen}
		{#if moreBlogsOpen}
			<div class="flex h-screen flex-col items-center justify-center" in:fade={{duration: 500}}>
				<p>jwhbfwhf</p>
			</div>
		{/if}
	{/key}
</main>

<style>
	.blog-intro-sec {
		position: relative;
		/* width: 100vw !important; */
		height: 100vh;

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
