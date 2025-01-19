<script>
	// import footer from "$lib/images/footer_background_modified.png"

	import InstagramIconFooter from '$lib/images/logo/instagram_footer_logo.png';
	import WhatsappIconFooter from '$lib/images/logo/whatsapp_footer_logo.png';
	import LinkedInIconFooter from '$lib/images/logo/linkedin_footer_logo.png';
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
	class="flex h-[29vh] w-full items-end bg-black bg-[url('$lib/images/footer_background_mobile.svg')] bg-contain bg-no-repeat md:h-[30vh] md:items-start md:justify-end md:bg-[url('$lib/images/footer_background_modified.svg')]"
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
			<img src={InstagramIconFooter} alt="instagram_icon" />
		</a>

		<a
			class="btn btn-circle btn-ghost size-6 hover:bg-transparent"
			href="https://chat.whatsapp.com/HQnfGg5nbtCIMxQlC3a0o9"
			target="_blank"
		>
			<img src={WhatsappIconFooter} alt="instagram_icon" />
		</a>

		<a
			class="btn btn-circle btn-ghost size-6 hover:bg-transparent mr-5"
			href="https://www.linkedin.com/company/graphica-club/"
			target="_blank"
		>
			<img src={LinkedInIconFooter} alt="instagram_icon" />
		</a>
		<img src={iconFooter} class="footer-icon absolute right-6 top-2 size-24" alt="" />
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
