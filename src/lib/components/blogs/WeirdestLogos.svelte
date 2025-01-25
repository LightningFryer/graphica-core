<script>
	import Society27 from '$lib/images/blog/weirdest_logos/weirdest_logos_society_27.avif';
	import Metroplex from '$lib/images/blog/weirdest_logos/weirdest_logos_metroplex.avif';
	import Schizophrenic from '$lib/images/blog/weirdest_logos/weirdest_logos_schizophrenic.avif';
	import ModernNerd from '$lib/images/blog/weirdest_logos/weirdest_logos_modern_nerd.avif';
	import Olympics from '$lib/images/blog/weirdest_logos/weirdest_logos_olympics.png';
	import Gap from '$lib/images/blog/weirdest_logos/weirdest_logos_gap.avif';
</script>

<svelte:head>
	<title>Blog | The Weirdest Logos That Somehow Got Approved</title>
</svelte:head>

<main class="flex h-fit flex-col items-center gap-4 pb-4 pt-24">
	<h1
		class="spacing w-[88vw] font-bebas text-6xl leading-tight text-accent md:w-[60vw] md:text-[7rem]"
	>
		The Weirdest Logos That Somehow Got Approved
	</h1>
	<p class="w-[88vw] text-right font-inter text-sm md:w-[60vw] md:text-2xl">
		Written by Shristi Shree Sahoo
	</p>
	<!-- <h1 class="mb-7 font-bebas text-6xl text-accent"></h1> -->

	<div class=" w-[85%] md:w-[60%] place-items-center space-y-10 md:mt-20 md:pb-52">
		<h2 class="w-full text-center font-bebas text-5xl md:text-6xl">Society 27</h2>
		<div class="flex flex-col-reverse items-center md:flex-row gap-3 md:gap-16">
			<p class="text-justify font-poppins md:text-xl">
				The Society 27 logo by Pavel Pavlov makes use of the fantastic ambigram effect, which
				ensures the logo display exactly the same when viewed in an upside down position. The
				abstract use of the quotation marks and number seven cleverly make up the complete 27.
			</p>
			<img src={Society27} alt="society_27" class="size-48 md:size-fit" />
		</div>

		<h2 class="w-full text-center font-bebas text-5xl md:text-6xl">Metroplex</h2>
		<div class="flex flex-col-reverse items-center md:flex-row gap-3 md:gap-16">
			<img src={Metroplex} alt="metroplex" class="size-48 md:size-fit" />
			<p class="text-justify font-poppins md:text-xl">
				The Metroplex logo by Brand Berry creates an excellent sense of depth with the use of
				three-dimensional shapes. The array of cuboid shapes represents skyscraper buildings which
				make up the overall metropolis graphic, linking well to the meaning behind the name.
			</p>
		</div>

		<h2 class="w-full text-center font-bebas text-5xl md:text-6xl">Schizophrenic</h2>
		<div class="flex flex-col-reverse items-center md:flex-row gap-3 md:gap-16">
			<p class="text-justify font-poppins md:text-xl">
				Another logo that plays in representational symbols while relating heavily to the brand name
				is the Schizophrenic logo. Being a medical disorder that often depicts split personalities
				the logo characterises this with simple shapes that depict a happy and sad face.
			</p>
			<img src={Schizophrenic} alt="society_27" />
		</div>

		<h2 class="w-full text-center font-bebas text-5xl md:text-6xl">Modern Nerd</h2>
		<div class="flex flex-col-reverse items-center md:flex-row gap-3 md:gap-16">
			<img src={ModernNerd} alt="society_27" />
			<p class="text-justify font-poppins md:text-xl">
				The Modern Nerd logo makes fine use of negative space to fool the eye into seeing the
				overall image of a figure, using just the symbolic shapes of hair, glasses and tie it links
				in well to the stereotypical geek/nerd image.
			</p>
		</div>

		<h2 class="w-full text-center font-bebas text-5xl md:text-6xl">Olympic Logo of London 2012</h2>
		<div class="flex flex-col-reverse items-center md:flex-row gap-3 md:gap-16">
			<p class="text-justify font-poppins md:text-xl">
				Designed by Wolff Olin’s at an expenditure of Â£400,000 (almost $800,000), the logo has been
				met with expected ambivalence and, in some unavoidable cases, hatred. It is perhaps the
				worst logo for the Olympics to date.
			</p>
			<img src={Olympics} alt="society_27" class="size-64" />
		</div>

		<h2 class="w-full text-center font-bebas text-5xl md:text-6xl">GAP – A lesson in unnecessary changes</h2>
		<div class="flex flex-col gap-4">
			<img src={Gap} alt="society_27" class="" />
			<p class="text-justify font-poppins md:text-2xl">
				Designed by Wolff Olin’s at an expenditure of Â£400,000 (almost $800,000), the logo has been
				met with expected ambivalence and, in some unavoidable cases, hatred. It is perhaps the
				worst logo for the Olympics to date.
			</p>
		</div>
	</div>
</main>

<style>
</style>
