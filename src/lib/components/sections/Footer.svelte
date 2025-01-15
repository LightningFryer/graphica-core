<script>
    import footer from "$lib/images/footer_background_modified.png"
	import { scrollRef } from "svelte-scrolling";
</script>

<main class="h-[35vh] w-full bg-[url('$lib/images/footer_background_modified.png')] bg-contain bg-no-repeat" use:scrollRef={'footer'}>
    <!-- <div class="h-full w-full scale-100"> -->
        <!-- <img src={footer} alt="footer_img" class="h-full w-full" /> -->
    <!-- </div> -->
</main>

<style>
    /* main {
        background-image: url("$lib/images/footer_background_modified.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100vw;
    } */
</style>