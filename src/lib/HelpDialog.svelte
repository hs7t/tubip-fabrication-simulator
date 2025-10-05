<script>
  import Dialog from "./components/Dialog.svelte";
    let { open = $bindable(true) } = $props();
</script>

{#snippet content()}
<ul>
    <li>Hit the <b>FABRICATE</b> button to fabricate tubip.</li>
    <li>Tubip matter is needed for fabrication. You'll get some every so often - watch the counters!</li>
    <li>You can sell tubip for coins on the Market.</li>
    <li>Coins can be used to buy upgrades that might help you fabricate more tubip.</li>
    <li>Keep an eye on the news ticker! Efficiency and exchange rates fluctuate based on recent events (and also randomly).</li>
</ul>
{/snippet}

<Dialog {content} shown={open} title="How to play"></Dialog>