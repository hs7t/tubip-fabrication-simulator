<script>
    import Dialog from "./components/Dialog.svelte"

    let { shown = $bindable(false) } = $props()
    function makeShown(bool) {
        shown = bool;
    }
</script>

{#snippet content()}
    <button onclick={() => makeShown(false)}>Close</button>
    <h2>meow</h2>
{/snippet}

<Dialog {content} bind:shown={shown}></Dialog>