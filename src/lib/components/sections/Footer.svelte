<script>
	// import footer from "$lib/images/footer_background_modified.png"

	import { Instagram } from "lucide-svelte";

</script>

<main
	class="h-[29vh] w-full flex justify-end bg-[url('$lib/images/footer_background_mobile.png')] bg-contain bg-no-repeat md:h-[30vh] md:bg-[url('$lib/images/footer_background_modified.png')]"
	id="footer-sec"
>
    <div class="h-full w-[40%] flex flex-row justify-center items-center p-4 gap-4 border-4">
        <button class="btn btn-circle btn-accent size-20"><Instagram size=48 /></button>
        <button class="btn btn-circle btn-accent size-20"><Instagram size=48 /></button>
        <button class="btn btn-circle btn-accent size-20"><Instagram size=48 /></button>
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
