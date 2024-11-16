<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import { pb } from '$lib/pocketbase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    onMount(() => {
        console.log(pb.authStore.model?.avatar);
        console.log(pb.authStore.isValid);
    })
</script>

<button class="btn" onclick={ async () =>{
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google'});
}}>Register</button>

<button class="btn" onclick={async () => {
    pb.authStore.clear();
}}>Logout</button>