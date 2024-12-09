<script lang="ts">
    import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(".club-image", {
			scrollTrigger: {
				trigger: ".card",
				// markers: true,
				start: "top center",
				// end: "center 65%", 
				// scrub: 1.5
			},
			duration: 1,
			xPercent: -100,
			opacity: 0,
			ease: "power2.inOut"
		})

		gsap.from(".card", {
			scrollTrigger: {
				trigger: ".card",
				// markers: true,
				start: "top center",
				// end: "center 65%", 
				// scrub: 1.5
			},
			duration: 1,
			xPercent: 100,
			opacity: 0,
			ease: "power2.inOut"
		})
	})
</script>

<main>
    <section class="sec2 flex h-screen flex-row items-center justify-evenly">
		<div class="club-image h-[80%] w-[40%] border-4">

		</div>
		
		<div class="card bg-secondary bg-opacity-5 backdrop-blur-sm flex flex-col h-[85%] w-[40%] p-5 gap-6">
			<h1 class="text-7xl font-bold font-bebas tracking-wider">Greetings!</h1>
			<p class="font-nunito">We are Graphica! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatum facere placeat quod quam soluta asperiores ea magni consequuntur quibusdam libero deserunt laborum nobis ipsum dolorem, officia blanditiis quisquam ut. Expedita impedit obcaecati dolorem consequuntur. Dolores pariatur, at quae amet et, aut nam architecto hic cum ab voluptas! Ipsa, laboriosam. Impedit neque illo, quasi quibusdam sapiente esse perspiciatis laboriosam quo dignissimos veritatis eum nemo, nobis adipisci ut? Vel, saepe libero accusantium sed molestias exercitationem numquam nostrum enim quod fugit mollitia eligendi quisquam illum recusandae consectetur blanditiis. Amet laboriosam nisi mollitia sunt veniam. Sint distinctio iure eligendi ratione ad impedit aliquid.</p>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis possimus dolor molestias quod consequatur doloribus adipisci labore atque placeat quisquam perferendis nulla ea, dignissimos praesentium nihil eum ratione dolorem nam.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat reiciendis, reprehenderit, officia aliquid veritatis dolorum possimus quia deleniti dolor, laudantium et. Quis, tempora est. Sapiente exercitationem consequuntur magnam nesciunt?</p>
		</div>
	</section>
</main>

<style>
	.sec2 {
		background-image: url("$lib/images/DotGrid.png");
		background-size: auto;
		background-repeat: repeat;
		animation: moveBg 40s linear infinite;
	}

	@keyframes moveBg{
		from{
			background-position-y: 0%;
			background-position-x: 0%;
		}

		to{
			background-position-y: 100%;
			background-position-x: -100%;
		}
	}
</style>