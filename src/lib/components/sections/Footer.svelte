<script>
	// import footer from "$lib/images/footer_background_modified.png"

	// import InstagramIconFooter from '$lib/images/logo/instagram_footer_logo.avif';
	// import WhatsappIconFooter from '$lib/images/logo/whatsapp_footer_logo.avif';
	// import LinkedInIconFooter from '$lib/images/logo/linkedin_footer_logo.avif';
	// import iconFooter from '$lib/images/logo/icon_footer.avif';
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
	class="flex h-[29vh] w-full items-end bg-black bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/footer_background_mobile.avif')] bg-contain bg-no-repeat md:h-[30vh] md:items-start md:justify-end md:bg-[url('https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/footer_background_modified.avif')]"
	id="footer-sec"
>
	<div
		class="relative flex h-full w-full flex-row items-end justify-end gap-4 p-4 md:w-[40%] md:items-end"
	>
		<a
			class="btn btn-circle btn-ghost size-6 hover:bg-transparent"
			href="https://www.instagram.com/graphica.club/"
			target="_blank"
		>
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/logo/instagram_footer_logo.avif"
				alt="instagram_icon"
			/>
		</a>

		<a
			class="btn btn-circle btn-ghost size-6 hover:bg-transparent"
			href="https://chat.whatsapp.com/HQnfGg5nbtCIMxQlC3a0o9"
			target="_blank"
		>
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/logo/whatsapp_footer_logo.avif"
				alt="instagram_icon"
			/>
		</a>

		<a
			class="btn btn-circle btn-ghost mr-5 size-6 hover:bg-transparent"
			href="https://www.linkedin.com/company/graphica-club/"
			target="_blank"
		>
			<img
				src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/logo/linkedin_footer_logo.avif"
				alt="instagram_icon"
			/>
		</a>
		<img
			src="https://v1a3dpktdo3ogcjf.public.blob.vercel-storage.com/images/logo/icon_footer.avif"
			class="footer-icon absolute right-2 top-2 size-16 md:right-6 md:size-24"
			alt=""
		/>
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
