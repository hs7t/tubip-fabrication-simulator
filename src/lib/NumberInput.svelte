<script>
    let { id = "number-input", onEnter = undefined, value = $bindable(undefined) } = $props()
</script>

<div {id}>
    <input type="number" bind:value={value}>
    <button onclick={onEnter}>sell tubips</button>
</div>