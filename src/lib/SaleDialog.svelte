<script>
    import Dialog from "./components/Dialog.svelte"
    import NumberInput from "./components/NumberInput.svelte";
    import { handleTubipSale } from "../gamestate.svelte";
  import Stats from "./Stats.svelte";

    let { shown = $bindable(false) } = $props()
</script>

{#snippet content()}
    <Stats statsShown={["coins", "tubip"]} kind={"compact"}></Stats>
    <NumberInput buttonLabel="Sell tubip" onEnter={(response) => { handleTubipSale(response) }} allowNegatives={false}></NumberInput>
{/snippet}

<Dialog {content} title="Sell" bind:shown={shown}></Dialog>