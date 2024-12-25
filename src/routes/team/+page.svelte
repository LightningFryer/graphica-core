<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		gsap.from('.card', {
			opacity: 0,
			duration: 1,
			stagger: -0.1,
			yPercent: 40,
			ease: 'back.inOut'
		});

		gsap.from('.team-text', {
			duration: 1,
			xPercent: -100,
			ease: 'power2.out'
		});
	});
</script>

<svelte:head>
	<title>Graphica | Team</title>
</svelte:head>

<main class="flex flex-col overflow-hidden">
	<Navbar />

	<section class="team-sec flex min-h-fit w-screen flex-col items-center justify-center">
		<div class="mt-9 flex h-[90%] w-full flex-col gap-y-4 p-7 md:h-[80%] md:w-[90%]">
			<h1 class="team-text font-bebas text-5xl md:text-7xl">Meet The Team</h1>

			<div class="flex flex-row flex-wrap justify-center gap-3 md:flex-nowrap md:gap-5">
				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>

				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>

				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>

				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>

				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>

				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>

				<div
					class="card flex w-[9rem] border-2 border-accent bg-base-300 bg-opacity-20 p-4 backdrop-blur-sm backdrop-opacity-90 md:w-[12rem] md:p-7"
				>
					<div class="flex flex-col items-center gap-3">
						<h1 class="font-pixelify text-lg md:text-3xl">Title</h1>

						<div class="avatar">
							<div class="size-[5rem] rounded-full md:size-20">
								<img
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									alt="photo"
								/>
							</div>
						</div>

						<p class="text-md font-poppins md:text-xl">Name</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.team-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
		background: radial-gradient(circle, #c39f61 1px, transparent 1px);
		background-size: 20px 20px; /* Spacing between dots */
		animation: moveDots 3s linear infinite;
	}

	@keyframes moveDots {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 20px -20px;
		}
	}
</style>
