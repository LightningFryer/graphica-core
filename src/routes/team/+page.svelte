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
		position: relative;
		width: 100%;
		height: 100vh; /* Full viewport height */
		background: radial-gradient(circle, #c39f61 1px, transparent 1px);
		background-size: 20px 20px; /* Spacing between dots */
		animation: moveDots 3s linear infinite;
	}

	@keyframes moveDots {
		0% {
		background-position: 0 0;
		}
		100% {
		background-position: 20px -20px;
		}
	}
</style>