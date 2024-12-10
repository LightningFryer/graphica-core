<svelte:head>
	<title>Graphica | Team</title>
</svelte:head>

<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<main class="flex flex-col overflow-hidden">
    <Navbar />

    <section class="team-sec h-screen w-screen flex flex-col justify-end items-center">
        <div class="flex flex-row border-2 border-white h-[90%] w-[90%] p-7">
            
        </div>
    </section>
</main>

<style>
    .team-sec {
		background-image: url("$lib/images/DotGrid.png");
		background-size: auto;
		background-repeat: repeat;
		animation: moveBg 40s linear infinite;
	}

	@keyframes moveBg{
		from{
			background-position-y: 0%;
			background-position-x: 0%;
		}

		to{
			background-position-y: 100%;
			background-position-x: -100%;
		}
	}
</style>