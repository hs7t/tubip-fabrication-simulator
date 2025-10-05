<script>
    import Dialog from "./components/Dialog.svelte"

    let { shown = $bindable(false) } = $props()
    function makeShown(bool) {
        shown = bool;
    }
</script>

{#snippet content()}
{/snippet}

<Dialog {content} title="Shop" bind:shown={shown}></Dialog>