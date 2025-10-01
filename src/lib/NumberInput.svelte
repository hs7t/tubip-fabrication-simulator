<script>
    let { id = "number-input", onEnter, value = $bindable() } = $props()

</script>

<div {id}>
    <input type="number" bind:value={value}>
    <button onclick={onEnter}>sell tubips</button>
</div>