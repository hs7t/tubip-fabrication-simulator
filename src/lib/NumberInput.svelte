<script>
    let { id = "number-input", buttonLabel = "enter", onEnter = undefined, value = $bindable(undefined), allowNegatives = true } = $props()
</script>

<div {id}>
    {#if allowNegatives === false}
        <input type="number" bind:value={value} min="0">
    {:else} 
        <input type="number" bind:value={value}>
    {/if}
    <button onclick={onEnter}>{buttonLabel}</button>
</div>