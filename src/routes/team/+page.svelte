<svelte:head>
	<title>Graphica | Team</title>
</svelte:head>

<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import { onMount } from "svelte";
	import gsap from "gsap";

	onMount(() => {
		gsap.from(".card", {
			opacity: 0,
			duration: 1,
			stagger: -0.1,
			yPercent: 100,
			ease: "back.inOut",
		});

		gsap.from(".team-text", {
			duration: 1,
			xPercent: -100,
			ease: "power2.out"
		})
	})
</script>

<main class="flex flex-col overflow-hidden">
    <Navbar />

    <section class="team-sec h-screen w-screen flex flex-col justify-center items-center">
        <div class="flex flex-col mt-9 h-[80%] w-[90%] p-7 gap-y-4">
			<h1 class="team-text text-7xl font-bebas">Meet The Team</h1>
            
			<div class="flex flex-row gap-5">
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
					</div>
				</div>
	
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
					</div>
				</div>
	
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
					</div>
				</div>
	
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
					</div>
				</div>
	
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
					</div>
				</div>
	
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
					</div>
				</div>
				<div class="card flex max-h-fit w-[12rem] bg-base-300 p-7 backdrop-blur-sm bg-opacity-20 backdrop-opacity-90 border-2 border-accent">
					<div class="flex flex-col gap-3 items-center">
						<h1 class="text-3xl font-pixelify">Title</h1>
						
						<div class="avatar">
							<div class="rounded-full w-22">
								<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="photo"/>
							</div>
						</div>
	
						<p class="text-xl font-poppins">Name</p>
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