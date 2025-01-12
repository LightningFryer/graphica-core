<script lang="ts">
    import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(".club-image", {
			scrollTrigger: {
				trigger: ".sec-2",
				// markers: true,
				start: "top center",
				// end: "center 65%", 
				// scrub: 1.5
			},
			duration: 1,
			xPercent: 100,
			yPercent: -100,
			opacity: 0,
			ease: "power2.inOut"
		})

		gsap.from(".card", {
			scrollTrigger: {
				trigger: ".sec-2",
				// markers: true,
				start: "top center",
				// end: "center 65%", 
				// scrub: 1.5
			},
			duration: 1,
			xPercent: -100,
			yPercent: 100,
			opacity: 0,
			ease: "power2.inOut"
		})
	})
</script>

<main>
    <section class="sec-2 h-screen flex flex-col md:flex-row items-center justify-evenly p-2">
		<div class="card border-4 border-accent bg-secondary bg-opacity-5 backdrop-blur-[0.15rem] flex flex-col h-[45%] md:h-[85%] w-[85%] md:w-[40%] p-5 gap-6">
			<h1 class="font-bold font-bebas underline decoration-accent text-5xl md:text-7xl tracking-wider">Greetings!</h1>
			<p class="font-inter">We are Graphica! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatum facere placeat quod quam soluta asperiores ea magni consequuntur quibusdam libero deserunt laborum nobis ipsum dolorem, officia blanditiis quisquam ut.</p>
			<!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis possimus dolor molestias quod consequatur doloribus adipisci labore atque placeat quisquam perferendis nulla ea, dignissimos praesentium nihil eum ratione dolorem nam.</p> -->
			<!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat reiciendis, reprehenderit, officia aliquid veritatis dolorum possimus quia deleniti dolor, laudantium et. Quis, tempora est. Sapiente exercitationem consequuntur magnam nesciunt?</p> -->
		</div>

		<div class="club-image h-[45%] md:h-[80%] w-[85%] md:w-[40%] border-4">

		</div>
		
		
	</section>
</main>

<style>
	.sec-2 {
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