<script lang="ts">
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import { onMount } from "svelte";
    let containerOffsetWidth;

    onMount(() => {
        let sections = gsap.utils.toArray(".secti");
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
		    duration: 2,
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                end: () => "+=" + containerOffsetWidth
            }
		});
    })
    
</script>

<main class="container flex flex-row flex-nowrap">
    <div class="container flex flex-row flex-nowrap" bind:offsetWidth={containerOffsetWidth}>
        <section class="secti h-screen min-w-[100%] bg-blue-500">
            <h1>Section</h1>
        </section>
        <section class="secti h-screen min-w-[100%] bg-green-500" >
            <h1>Section</h1>
        </section>
        <section class="secti h-screen min-w-[100%] bg-red-500">
            <h1>Section</h1>
        </section>
    </div>
</main>