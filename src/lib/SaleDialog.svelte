<script>
    import Dialog from "./components/Dialog.svelte"
    import NumberInput from "./components/NumberInput.svelte";
    import { handleTubipSale } from "../gamestate.svelte";

    let { shown = $bindable(false) } = $props()
</script>

{#snippet content()}
    <NumberInput buttonLabel="sell tubip" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
{/snippet}

<Dialog {content} title="Market" bind:shown={shown}></Dialog>