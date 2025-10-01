<script>
    let { id = "number-input", buttonLabel = "enter", onEnter = undefined, value = $bindable(undefined) } = $props()
</script>

<div {id}>
    <input type="number" bind:value={value}>
    <button onclick={onEnter}>{buttonLabel}</button>
</div>