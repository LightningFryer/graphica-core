<script>
	import gsap from 'gsap';
	// import PsychOfColorsCardImage from '$lib/images/blog/psychology_of_colours/psych_of_colors_card.png';

	const scrollToBlog = () => {
		gsap.to(window, {
			duration: 1.2,
			scrollTo: '#blog-intro-sec',
			ease: 'power1.inOut'
		});
	};

	// let moreBlogsOpen = true;
</script>

<main
	id="blog-intro-sec"
	class="blog-intro-sec flex flex-col items-center justify-center p-5 md:min-h-fit md:p-0"
>
	<div
		class="flex w-[90%] flex-col items-center justify-start gap-5 pb-12 md:min-h-screen md:justify-center md:gap-10"
	>
		<div class="flex flex-col items-center justify-center">
			<h1 class="font-bebas text-7xl md:text-8xl">BLOG POSTS</h1>

			<p
				class="flex flex-col items-center justify-center text-center font-poppins text-xl font-extralight"
			>
				Our blog is a space for thoughtful insights and design-driven stories.
				<span>Explore ideas that blend creativity.</span>
			</p>
		</div>

		<div class="flex flex-col flex-wrap gap-6 md:flex-row md:gap-12">
			<a
				href="/blog/PsychologyOfColors"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div
					class="absolute top-0 flex h-[60%] w-full items-center justify-center rounded-br-[3rem] bg-[#F5F3E4] bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/psychology_of_colours/psychology_of_colors_blog_card.avif')] bg-cover bg-center"
				>
					<!-- <img
						src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/psychology_of_colours/psychology_of_colors_blog_card.avif"
						alt="psych_of_colors_card"
						class="size-32 md:size-40"
					/> -->
				</div>
				<div class="absolute bottom-0 flex h-[40%] w-full items-center justify-center bg-[#C39F61]">
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content md:w-[90%]">
						<div>
							<p class="font-nunito text-sm">Insight • 3 mins read</p>
							<h2 class="text-left font-poppins text-sm font-bold text-[#F5F3E4] md:text-sm">
								The Psychology of Colors: What Your Design Says About You
							</h2>
						</div>
						<div class="flex grow items-end justify-end">
							<p>By Aria Kanani</p>
						</div>
					</div>
				</div>
			</a>

			<a
				href="/blog/WeirdestLogos"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div
					class="absolute top-0 flex h-[60%] w-full items-center justify-center rounded-br-[3rem] bg-[#F5F3E4] bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/weirdest_logos/weirdest_logos_blog_card.avif')] bg-cover bg-center"
				>
					
				</div>
				<div class="absolute bottom-0 flex h-[40%] w-full items-center justify-center bg-[#C39F61]">
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content md:w-[90%]">
						<div>
							<p class="font-nunito text-sm">Insight • 1.5 mins read</p>
							<h2 class="font-poppins text-sm font-bold text-[#F5F3E4] md:text-sm">
								The Weirdest Logos That Somehow Got Approved
							</h2>
						</div>
						<div class="flex grow items-end justify-end">
							<p>By Shristi Shree Sahoo</p>
						</div>
					</div>
				</div>
			</a>

			<a
				href="/blog/MandelaEffectInLogos"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div
					class="absolute top-0 flex h-[60%] w-full items-center justify-center rounded-br-[3rem] bg-[#F5F3E4] bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/mandela_effect/mandela_effect_blog_card.avif')] bg-cover bg-center"
				>
					<!-- <img
						src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/mandela_effect/mandela_effect_blog_card.avif"
						alt="psych_of_colors_card"
						class="size-32 h-[90%] w-[30%] md:h-[95%] md:w-[55%]"
					/> -->
				</div>
				<div class="absolute bottom-0 flex h-[40%] w-full items-center justify-center bg-[#C39F61]">
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content md:w-[90%]">
						<div>
							<p class="font-nunito text-sm">Insight • 2 mins read</p>
							<h2 class="text-md font-poppins text-sm font-bold text-[#F5F3E4] md:text-sm">
								The Mandela Effect and Logos
							</h2>
						</div>
						<div class="flex grow items-end justify-end">
							<p>By Tanav</p>
						</div>
					</div>
				</div>
			</a>
		</div>

		<div class="flex flex-col flex-wrap gap-6 md:flex-row md:gap-12">
			<a
				href="/blog/DarkSideOfDesign"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div
					class="absolute top-0 flex h-[60%] w-full items-center justify-center rounded-br-[3rem] bg-[#F5F3E4] bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/dark_side_of_design/dark_side_of_design_blog_card.avif')] bg-cover bg-center"
				>
					<!-- <img
						src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/psychology_of_colours/psychology_of_colors_blog_card.avif"
						alt="psych_of_colors_card"
						class="size-32 md:size-40"
					/> -->
				</div>
				<div class="absolute bottom-0 flex h-[40%] w-full items-center justify-center bg-[#C39F61]">
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content md:w-[90%]">
						<div>
							<p class="font-nunito text-sm">Insight • 2 mins read</p>
							<h2 class="font-poppins text-sm font-bold text-[#F5F3E4] md:text-sm">
								The Dark Side of Design: How Manipulative Graphics Drive Consumer Behavior
							</h2>
						</div>
						<div class="flex grow items-end justify-end">
							<p>By Ishita Khanikar</p>
						</div>
					</div>
				</div>
			</a>

			<a
				href="/blog/FastFoodLogos"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div
					class="absolute top-0 flex h-[60%] w-full items-center justify-center rounded-br-[3rem] bg-[#F5F3E4] bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/fast_food_logos/fast_food_logo_blog_card.avif')] bg-contain bg-center"
				>
					
				</div>
				<div class="absolute bottom-0 flex h-[40%] w-full items-center justify-center bg-[#C39F61]">
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content md:w-[90%]">
						<div>
							<p class="font-nunito text-sm">Insight • 1.5 mins read</p>
							<h2 class="font-poppins text-sm font-bold text-[#F5F3E4] md:text-sm">
								The Psychology Behind Fast Food Logos: Why Red and Yellow Dominate
							</h2>
						</div>
						<div class="flex grow items-end justify-end">
							<p>By Rithika Narikimilli</p>
						</div>
					</div>
				</div>
			</a>

			<a
				href="/blog/DesignToKeepYouHooked"
				class="relative h-[15rem] w-[18rem] justify-end transition-all duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer md:h-[22rem] md:w-[18rem]"
			>
				<div class="flex h-full w-full flex-row">
					<div class="h-full w-[50%] bg-[#F5F3E4]"></div>
					<div class="h-full w-[50%] bg-[#C39F61]"></div>
				</div>
				<!-- <div class="relative"> -->
				<div
					class="absolute top-0 flex h-[60%] w-full items-center justify-center rounded-br-[3rem] bg-[#F5F3E4] bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/blog/designed_to_keep_you_hooked/designed_to_keep_you_hooked_blog_card.avif')] bg-cover bg-center"
				>
				
				</div>
				<div class="absolute bottom-0 flex h-[40%] w-full items-center justify-center bg-[#C39F61]">
					<div class="flex h-[70%] w-[80%] flex-col text-accent-content">
						<div>
							<p class="font-nunito text-sm">Insight • 2 mins read</p>
							<h2 class="font-poppins text-sm font-bold text-[#F5F3E4] md:text-sm">
								The Psychology Behind Fast Food Logos: Why Red and Yellow Dominate
							</h2>
						</div>
						<div class="flex grow items-end justify-end">
							<p>By Joel Josy</p>
						</div>
					</div>
				</div>
			</a>
		</div>

		<!-- {#if !moreBlogsOpen}
			<div class="flex w-full justify-center">
				<button class="btn btn-accent" onclick={() => (moreBlogsOpen = true)}
					>More Blogs <ArrowDown /></button
				>
			</div>
		{/if} -->
	</div>

	<!-- {#key moreBlogsOpen}
		{#if moreBlogsOpen}
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
		{/if}
	{/key} -->
</main>

<style>
	.blog-intro-sec {
		/* position: relative; */
		/* width: 100vw !important; */
		/* height: 100vh; */

		background-color: black;
		background-image: linear-gradient(to right, #c39f617f 1px, transparent 1px),
			linear-gradient(to bottom, #c39f617f 1px, transparent 1px);
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
