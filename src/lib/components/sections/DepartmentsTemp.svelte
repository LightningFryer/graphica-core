<script lang="ts">
    import { fade } from 'svelte/transition';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
    
	let dep1 = false;
	let dep2 = false;
	let dep3 = false;
	let dep4 = false;
	let dep1Text = "Graphic Design";
    let dep2Text = "UI/UX";
    let dep3Text = "Web Development";
    let dep4Text = "Something Here";
</script>

<section class="flex h-screen flex-row items-center justify-evenly">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep-1 flex flex-col grow h-full duration-1000 cursor-pointer ${dep1 ? "grayscale-0" : "grayscale"}`} 
    style="width: {dep1 ? '50%' : '10%'}"
    onclick={() => {
        dep1 = true;
        dep2 = false;
        dep3 = false;
        dep4 = false;
        dep1Text = "Graphic Design longer text version"
        dep2Text = "UI/UX";
        dep3Text = "Web Development";
        dep4Text = "Something Here";
    }}
    >
        <div class="h-[80%]">
            {#key dep1Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`this text-xl text-wrap`}>{dep1Text}</p>
            {/key}
        </div>

        <div class=" flex flex-col h-[20%] text-8xl w-full text-end backdrop-blur-md">
            1
        </div>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep-2 grow h-full transition-[width] duration-1000 cursor-pointer ${dep2 ? "grayscale-0" : "grayscale"}`} 
    style="width: {dep2 ? '50%' : '10%'}"
    onclick={() => {
        dep1 = false;
        dep2 = true;
        dep3 = false;
        dep4 = false;
        dep1Text = "Graphic Design"
        dep2Text = "UI/UX longer text version";
        dep3Text = "Web Development";
        dep4Text = "Something Here";
    }}>
        <div class="h-[80%]">
            {#key dep2Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`this text-xl text-wrap`}>{dep2Text}</p>
            {/key}
        </div>

        <div class="flex flex-col h-[20%] text-8xl w-full text-end backdrop-blur-md">
            2
        </div>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep-3 grow h-full transition-[width] duration-1000 cursor-pointer ${dep3 ? "grayscale-0" : "grayscale"}`}
    style="width: {dep3 ? '50%' : '10%'}"
    onclick={() => {
        dep1 = false;
        dep2 = false;
        dep3 = true;
        dep4 = false;
        dep1Text = "Graphic Design"
        dep2Text = "UI/UX";
        dep3Text = "Web Development longer text version";
        dep4Text = "Something Here";
    }}>
        <div class="h-[80%]">
            {#key dep3Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`this text-xl text-wrap`}>{dep3Text}</p>
            {/key}
        </div>

        <div class="flex flex-col h-[20%] text-8xl w-full text-end backdrop-blur-md">
            3
        </div>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={`dep-4 grow h-full transition-[width] duration-1000 cursor-pointer ${dep4 ? "grayscale-0" : "grayscale"}`} 
    style="width: {dep4 ? '50%' : '10%'}"
    onclick={() => {
        dep1 = false;
        dep2 = false;
        dep3 = false;
        dep4 = true;
        dep1Text = "Graphic Design"
        dep2Text = "UI/UX";
        dep3Text = "Web Development";
        dep4Text = "Something Here longer text version";
    }}>
        <div class="h-[80%]">
            {#key dep4Text}
            <p in:fade={{duration: 500, delay: 300}} out:fade={{duration: 300}} class={`this text-xl text-wrap`}>{dep4Text}</p>
            {/key}
        </div>

        <div class="flex flex-col h-[20%] text-8xl w-full text-end backdrop-blur-md">
            4
        </div>
    </div>
</section>

<style>
    .dep-1{
        background-image: url("$lib/images/graphic_design_dep.jpg");
        background-size: cover;
    }

    .dep-2{
        background-image: url("$lib/images/ui-ux-dep.jpeg");
        background-size: cover;
    }

    .dep-3{
        background-image: url("$lib/images/web-dev-dep.jpg");
        background-size: cover;
    }

    .dep-4{
        background-image: url("$lib/images/dep4-placeholder.jpg");
        background-size: cover;
    }
</style>