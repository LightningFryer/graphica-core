<script>
	import { horizontalLoop } from '$lib/anims/helperFuncs';
	import TeamBg from '$lib/images/meet_the_team.png';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const teamCards = gsap.utils.toArray('.team-card');

		const loop = horizontalLoop(teamCards, { repeat: -1 });
	});
</script>

<main class="flex h-screen flex-col flex-nowrap">
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
	<div class="relative flex min-w-fit grow flex-row flex-nowrap items-end overflow-x-hidden">
		<div class="team-card h-[85%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
		<div class="team-card h-[95%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
		<div class="team-card h-[85%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
		<div class="team-card h-[95%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
		<div class="team-card h-[85%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
		<div class="team-card h-[95%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
		<div class="team-card h-[85%] min-w-[20%] rounded-tl-full rounded-tr-full bg-white"></div>
	</div>
</main>

<style>
	/* main {
        background-image: url("$lib/images/meet_the_team.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    } */
</style>
