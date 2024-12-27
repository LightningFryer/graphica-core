<script lang="ts">
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import { onMount } from "svelte";
    let containerOffsetWidth: Number;

    onMount(() => {
        let sections = gsap.utils.toArray(".sec");
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
		    duration: 2,
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + containerOffsetWidth
            }
		});
    })
    
</script>

<main class="container flex flex-row flex-nowrap">
    <div class="container flex flex-row flex-nowrap" bind:offsetWidth={containerOffsetWidth}>
        <section class="department-intro-sec sec h-screen min-w-[100%] flex flex-col justify-center items-center ">
            <h1 class="text-7xl font-bebas">What about our various departments you ask?</h1>
            <h1 class="text-5xl font-bebas">Scroll on to see what <span class="text-7xl">we</span> have to offer!</h1>
        </section>
        <section class="department-sec sec h-screen min-w-[100%] flex flex-col justify-center items-center bg-green-500" >
            <div class="flex flex-col border-2 h-[80%] w-[80%]">

            </div>
        </section>
        <section class="department-sec sec h-screen min-w-[100%] bg-red-500">
            <h1>Section</h1>
        </section>
    </div>
</main>

<style>
    .department-intro-sec {
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
        background-color: rgb(59 130 246);
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