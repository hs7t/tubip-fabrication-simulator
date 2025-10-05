<script>
    import Dialog from "./components/Dialog.svelte"
  import Shop from "./Shop.svelte";

    let { shown = $bindable(false) } = $props()
    function makeShown(bool) {
        shown = bool;
    }
</script>

{#snippet content()}
    <Shop></Shop>
{/snippet}

<Dialog {content} title="Shop" bind:shown={shown}></Dialog>