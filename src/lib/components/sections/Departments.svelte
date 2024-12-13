<script lang="ts">
    import { fade } from 'svelte/transition';
	// import gsap from 'gsap';
	// import { onMount } from 'svelte';
	// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
    
	let dep1 = false;
	let dep2 = false;
	let dep3 = false;
	let dep1Text = "Graphic Design";
    let dep2Text = "UI/UX";
    let dep3Text = "Web Development";

    // onMount(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     let departmentDivs = gsap.utils.toArray(".dep");

    //     gsap.from(departmentDivs, {
    //         duration: 1,
    //         stagger: 0.1,
    //         opacity: 0,
    //         yPercent: 50,
    //         scrollTrigger: {
    //             trigger: ".departmentSec",
    //             start: "top 80%",
    //         },
    //     })
    // })
</script>

<section class="departmentSec flex h-screen flex-col md:flex-row md:items-center md:justify-evenly">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep dep-1 grow md:h-full ${dep1 ? 'h-[50%]' : 'h-[10%]'} ${dep1 ? 'md:w-[50%]' : 'md:w-[10%]'} transition-[width, height] duration-1000 cursor-pointer ${dep1 ? "grayscale-0" : "grayscale"}`} 

    onclick={() => {
        dep1 = true
        dep2 = false;
        dep3 = false;

        dep1Text = "Graphic Design longer text version"
        dep2Text = "UI/UX";
        dep3Text = "Web Development";
    }}>
        <div class="h-[80%]">
            {#key dep1Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`md:text-xl text-wrap`}>{dep1Text}</p>
            {/key}
        </div>

        <div class="flex flex-col h-[20%] text-5xl md:text-8xl w-full text-end backdrop-blur-sm">
            1
        </div>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep dep-2 grow md:h-full ${dep2 ? 'h-[50%]' : 'h-[10%]'} ${dep2 ? 'md:w-[50%]' : 'md:w-[10%]'} transition-[width, height] duration-1000 cursor-pointer ${dep2 ? "grayscale-0" : "grayscale"}`}

    onclick={() => {
        dep1 = false;
        dep2 = true;
        dep3 = false;

        dep1Text = "Graphic Design"
        dep2Text = "UI/UX longer text version";
        dep3Text = "Web Development";
    }}>
        <div class="h-[80%]">
            {#key dep2Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`text-xl text-wrap`}>{dep2Text}</p>
            {/key}
        </div>

        <div class="flex flex-col h-[20%] text-5xl md:text-8xl w-full text-end backdrop-blur-sm">
            2
        </div>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep dep-3 grow md:h-full ${dep3 ? 'h-[50%]' : 'h-[10%]'} ${dep3 ? 'md:w-[50%]' : 'md:w-[10%]'} transition-[width, height] duration-1000 cursor-pointer ${dep3 ? "grayscale-0" : "grayscale"}`} 

    onclick={() => {
        dep1 = false;
        dep2 = false;
        dep3 = true;
        
        dep1Text = "Graphic Design"
        dep2Text = "UI/UX";
        dep3Text = "Web Development longer text version";
    }}>
        <div class="h-[80%]">
            {#key dep3Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`text-xl text-wrap`}>{dep3Text}</p>
            {/key}
        </div>

        <div class="flex flex-col h-[20%] text-5xl md:text-8xl w-full text-end text-wrap backdrop-blur-sm">
            3
        </div>
    </div>
</section>

<style>

    .dep-1{
        background: url("$lib/images/graphic_design_dep.jpg");
        background-size: cover;
    }

    .dep-2{
        background-image: url("$lib/images/web-dev-dep.jpg");
        background-size: cover;
    }

    .dep-3{
        background-image: url("$lib/images/ui-ux-dep.jpeg");
        background-size: cover;
    }
</style>