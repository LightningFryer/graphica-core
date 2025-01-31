<script lang="ts">
	import { horizontalLoop } from '$lib/anims/helperFuncs';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
	import Device from 'svelte-device-info';

	let loop;
	onMount(() => {
		const teamCards = gsap.utils.toArray('.team-card');
		gsap.registerPlugin(ScrollTrigger);
		setTimeout(() => {
			loop = horizontalLoop(teamCards, { repeat: -1, speed: 1 });
			// console.log("Hello world")
		}, 2000);
		// console.log(Device.isMobile)
		// if (!Device.isMobile) {

		// 	gsap.from('.meet-the-team-sec', {
		// 		onStart: () => loop.resume(),
		// 		scrollTrigger: {
		// 			trigger: '.meet-team-sec',
		// 			start: 'bottom center',
		// 			// end: 'top top',
		// 			// markers: true
		// 		}
		// 	});
		// } else {
		// 	gsap.from('.meet-the-team-sec', {
		// 		onStart: () => loop.resume(),
		// 		scrollTrigger: {
		// 			trigger: '.meet-team-sec',
		// 			start: 'bottom bottom',
		// 			// end: 'top top',
		// 			// markers: true
		// 		}
		// 	});
		// }
	});
</script>

<main class="meet-the-team-sec flex h-screen flex-col flex-nowrap" id="meet-the-team">
	<div class="flex w-full flex-col md:flex-row">
		<div class="h-fit p-4 md:w-[50%] md:p-5">
			<h1 class="font-poppins text-5xl md:text-9xl">
				MEET OUR <span class="font-bold italic text-accent">TEAM</span>
			</h1>
		</div>
		<div class="h-fit p-5 md:w-[50%]">
			<p class="text-justify font-poppins font-extralight md:text-2xl">
				The design team that’s half pixel perfection, half organized chaos, and 100% fueled by
				coffee and creativity! Our idea of a balanced layout is somewhere between bold and
				bonkers—but it works. We’re here to blend aesthetics with functionality, making things
				pretty and purposeful. If laughter, layers, and late-night brainstorming are your vibe,
				you’re in the right place. <span class="font-semibold">Warning: We do judge fonts</span>.
			</p>
		</div>
	</div>
	<div
		class="team-scroll-cards relative flex min-w-fit grow flex-row flex-nowrap items-end overflow-hidden"
	>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/rithika_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Content Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-3xl">Rithika Narikimilli</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/tanav_team_card.avif')] bg-cover bg-clip-border bg-top md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Event Manager</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Tanav</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/ishita_team_card.avif')] bg-cover bg-clip-border md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-75 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">President</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Ishita Khanikar</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/joel_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Vice President</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Joel Josy</p>
			</div>
		</div>

		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/krissh_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">General Secretary</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Krissh Sachdeva</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/shristi_team_card.avif')] bg-cover bg-clip-border bg-right md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-90 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Treasurer</p>
				<p class="font-poppins text-2xl font-bold italic md:text-2xl">Shristi Shree Sahoo</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/mahadev_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-75 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Lead Web Dev</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Mahadev</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/aria_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-75 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Executive Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Aria Kanani</p>
			</div>
		</div>

		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/pakhi_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Event Coordinator</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Pakhi Manya</p>
			</div>
		</div>

		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/riya_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins font-extralight italic md:text-2xl">Graphic Designer</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Riya Kanchi</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/adhish_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Graphic Designer</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Adhish</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/siddarth_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins font-extralight italic md:text-2xl">3D Designer</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Siddarth</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/aaditya_team_card.avif')] bg-cover bg-clip-border bg-left md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Graphic Designer</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Aaditya Tushir</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/sohan_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Operations Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Sohan Shinde</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/anvi_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Operational Vice Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Anvi Nandwani</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/vaisakh_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">Logistics Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Vaisakh P</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/alankryt_team_card.avif')] bg-cover bg-clip-border bg-center md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-xl font-extralight italic md:text-2xl">3D Designer</p>
				<p class="font-poppins text-2xl font-bold italic md:text-3xl">Alankryt Sharma</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[99%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/priyanka_team_card.avif')] bg-cover bg-clip-border bg-center md:h-[95%] md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-lg font-extralight italic md:text-xl">Social Media Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Priyanka Sahoo</p>
			</div>
		</div>
		<div
			class="team-card relative flex h-[90%] min-w-[16%] items-end overflow-hidden rounded-tl-full rounded-tr-full bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/team_card_images/aadit_team_card.avif')] bg-cover bg-clip-border bg-top md:min-w-[20%]"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-2 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr] md:p-4"
			>
				<p class="font-poppins text-lg font-extralight italic md:text-xl">Marketing Head</p>
				<p class="font-poppins text-2xl font-bold italic md:text-4xl">Aadit Agarwaal</p>
			</div>
		</div>
	</div>
</main>

<style>
	.meet-the-team-sec {
		/* position: relative; */
		width: 100%;
		height: 100vh; /* Full viewport height */
		background-image: linear-gradient(to right, #c39f617f 1px, transparent 1px),
			linear-gradient(to bottom, #c39f617f 1px, transparent 1px);
		background-size: 70px 70px; /* Set grid cell size */
		background-color: black;
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
