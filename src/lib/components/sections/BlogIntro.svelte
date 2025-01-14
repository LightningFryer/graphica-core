<script>
</script>

<main id="blog-intro-sec" class="blog-intro-sec flex h-screen flex-col items-center justify-center">
	<div class="flex h-[80%] w-[90%] flex-col items-center gap-4">
		<h1 class="font-bebas text-8xl">BLOG POSTS</h1>

		<p class="flex flex-col items-center font-poppins text-xl font-extralight">
			Our blog is a space for thoughtful insights and design-driven stories.
			<span>Explore ideas that blend creativity.</span>
		</p>

		<div class="flex flex-row gap-28">
			<div class="relative h-[22rem] w-[18rem] justify-end">
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
						<h2 class="font-poppins text-xl font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>

				<!-- </div> -->
			</div>

			<div class="relative h-[22rem] w-[18rem] justify-end">
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
						<h2 class="font-poppins text-xl font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>

				<!-- </div> -->
			</div>

			<div class="relative h-[22rem] w-[18rem] justify-end">
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
						<h2 class="font-poppins text-xl font-semibold text-[#F5F3E4]">
							MASTERING THE ART OF LOGO DESIGN
						</h2>
					</div>
				</div>

				<!-- </div> -->
			</div>
		</div>
	</div>
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