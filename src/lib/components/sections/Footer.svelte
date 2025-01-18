<script>
	// import footer from "$lib/images/footer_background_modified.png"

	import { Instagram } from 'lucide-svelte';
	import iconFooter from '$lib/images/logo/icon_footer.svg';
	import { onMount } from 'svelte';
    import gsap from 'gsap';

	onMount(() => {
		gsap.to('.footer-icon', {
			rotation: 360,
			duration: 10,
			ease: 'none',
			delay: 0,
			repeat: -1
		});
	});
</script>

<main
	class="flex h-[29vh] w-full items-end md:items-start md:justify-end bg-[url('$lib/images/footer_background_mobile.png')] bg-contain bg-no-repeat md:h-[30vh] md:bg-[url('$lib/images/footer_background_modified.png')]"
	id="footer-sec"
>
	<div class="relative flex h-full w-full md:w-[40%]  flex-row items-end md:items-center justify-center gap-4 p-4">
		<button class="btn btn-circle btn-accent size-20"><Instagram size="48" /></button>
		<button class="btn btn-circle btn-accent size-20"><Instagram size="48" /></button>
		<button class="btn btn-circle btn-accent size-20"><Instagram size="48" /></button>
		<img src={iconFooter} class="footer-icon absolute right-2 top-2 size-24" alt="" />
	</div>
</main>

<style>
	/* main {
        background-image: url("$lib/images/footer_background_modified.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100vw;
    } */
</style>
