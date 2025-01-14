<script>
	import { horizontalLoop } from '$lib/anims/helperFuncs';
	import TeamBg from '$lib/images/meet_the_team.png';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { scrollRef } from 'svelte-scrolling';

	let loop;
	onMount(() => {
		const teamCards = gsap.utils.toArray('.team-card');

		loop = horizontalLoop(teamCards, { repeat: -1, speed: 1 });
	});
</script>

<main class="meet-the-team-sec flex h-screen flex-col flex-nowrap" use:scrollRef={'team'}>
	<div class="flex w-full flex-row">
		<div class="h-fit w-[50%] p-5">
			<h1 class="font-poppins text-9xl">MEET OUR <span class="font-bold italic">TEAM</span></h1>
		</div>
		<div class="h-fit w-[50%] p-5">
			<p class="text-justify font-poppins text-2xl font-extralight">
				The design team that’s half pixel perfection, half organized chaos, and 100% fueled by
				coffee and creativity! Our idea of a balanced layout is somewhere between bold and
				bonkers—but it works. We’re here to blend aesthetics with functionality, making things
				pretty and purposeful. If laughter, layers, and late-night brainstorming are your vibe,
				you’re in the right place. <span class="font-semibold">Warning: We do judge fonts</span>.
			</p>
		</div>
	</div>
	<div class="relative flex min-w-fit grow flex-row flex-nowrap items-end overflow-hidden">
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/ishita_team_card_test.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">President</p>
				<p class="font-poppins text-4xl font-bold italic">Ishita Khanikar</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/krissh_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">General Secretary</p>
				<p class="font-poppins text-4xl font-bold italic">Krissh Sachdeva</p>
			</div>
		</div>

		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/shristi_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="ml-2 mt-2 flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Treasurer</p>
				<p class="font-poppins text-4xl font-bold italic">Shristi Shree Sahoo</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/mahadev_team_card.jpg')] bg-cover bg-clip-border bg-right"
		>
			<div
				class="ml-2 mt-2 flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Lead Web Dev</p>
				<p class="font-poppins text-4xl font-bold italic">Mahadev R</p>
			</div>
		</div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/joel_team_card.jpg')] bg-contain bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Executive Head</p>
				<p class="font-poppins text-4xl font-bold italic">Joel Josy</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/aria_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Executive Head</p>
				<p class="font-poppins text-4xl font-bold italic">Aria Kanani</p>
			</div>
		</div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/riya_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Graphic Designer</p>
				<p class="font-poppins text-4xl font-bold italic">Riya Kanchi</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/adhish_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Graphic Designer</p>
				<p class="font-poppins text-4xl font-bold italic">Adhish</p>
			</div>
		</div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-white"
		></div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/aaditya_team_card.jpg')] bg-cover bg-clip-border bg-left"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Graphic Designer</p>
				<p class="font-poppins text-4xl font-bold italic">Aaditya Tushir</p>
			</div>
		</div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/sohan_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Operations Head</p>
				<p class="font-poppins text-4xl font-bold italic">Sohan Shinde</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/anvi_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Operational Vice Head</p>
				<p class="font-poppins text-4xl font-bold italic">Anvi Nandwani</p>
			</div>
		</div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/vaisakh_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Logistics Head</p>
				<p class="font-poppins text-4xl font-bold italic">Vaisakh P</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-white"
		></div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/priyanka_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">
					Social Media & <span>Marketing Head</span>
				</p>
				<p class="font-poppins text-4xl font-bold italic">Priyanka Sahoo</p>
			</div>
		</div>
		<div
			class="team-card flex h-[90%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/rithika_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Content Head</p>
				<p class="font-poppins text-3xl font-bold italic">Rithika Narikimilli</p>
			</div>
		</div>
		<div
			class="team-card flex h-[95%] min-w-[20%] items-end rounded-tl-full rounded-tr-full bg-[url('$lib/images/team_card_images/tanav_team_card.jpg')] bg-cover bg-clip-border bg-center"
		>
			<div
				class="flex h-full rotate-180 flex-col justify-end p-4 backdrop-blur-[0.1rem] backdrop-brightness-95 [writing-mode:vertical-lr]"
			>
				<p class="font-poppins text-2xl font-extralight italic">Event Manager</p>
				<p class="font-poppins text-4xl font-bold italic">Tanav</p>
			</div>
		</div>
	</div>
</main>

<style>
	/* main {
        background-image: url("$lib/images/meet_the_team.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    } */

	.meet-the-team-sec {
		/* position: relative; */
		width: 100%;
		height: 100vh; /* Full viewport height */
		background-image: linear-gradient(to right, #ffffff7f 1px, transparent 1px),
			linear-gradient(to bottom, #ffffff7f 1px, transparent 1px);
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
