<svelte:head>
    <title>Graphica | Blog</title>
</svelte:head>

<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<main class="sec-blog flex flex-col overflow-hidden">
    <Navbar />

    <section class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-3xl md:text-8xl font-bebas p-4 backdrop-blur-sm border-4 border-accent rounded-xl backdrop-brightness-95">No posts yet! Stay tuned.</h1>
    </section>
</main>

<style>
	.sec-blog {
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