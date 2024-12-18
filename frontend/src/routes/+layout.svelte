<script lang="ts">
	import '../app.css';
	let { children } = $props();
	let connected = $state(false);
    let api_endpoint = import.meta.env.VITE_API_ENDPOINT;

	async function callRoot() {
        try {
            const response = await fetch(api_endpoint);
            connected = response.ok;
            console.log(response.ok)
        } catch (error) {
            connected = false;
        }
    }
</script>

<div class="bg-base-200 mx-auto my-5 container rounded-box p-5">
  <div class="flex justify-between items-center">
    <button class="btn btn-ghost text-xl font-bold" onclick={callRoot}>Contoso</button>
	{#if connected}
        <span class="badge badge-success">Connected</span>
    {:else}
        <span class="badge">Disconnected</span>
    {/if}
  </div>
</div>
<div class="container mx-auto space-y-8 p-24">
	{@render children()}
</div>
