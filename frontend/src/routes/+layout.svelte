<script>
	import '../app.css';
    let { children, data } = $props();
    const { healthStatus } = data;
</script>

<div class="bg-base-200 mx-auto my-5 container rounded-box p-5">
  <div class="flex justify-between items-center">
    <p class="btn btn-ghost text-xl font-bold">Contoso</p>
	{#if healthStatus===true}
        <span class="badge badge-success">Connected</span>
    {:else}
        <span class="badge">Disconnected</span>
    {/if}
  </div>
</div>
<div class="container mx-auto space-y-8 py-24">
	{@render children()}
</div>
