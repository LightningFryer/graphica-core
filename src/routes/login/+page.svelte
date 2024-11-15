<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import PocketBase from "pocketbase";
</script>

<button class="btn" onclick={ async () =>{
    const pb = new PocketBase('http://127.0.0.1:8090');
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google'});
}}>Register</button>

<button class="btn" onclick={async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    pb.authStore.clear();
}}>Logout</button>