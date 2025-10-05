<script>
    import { items } from "../shop.svelte.js";

    let shopItems = $derived(arrayFromObject(items))

    function arrayFromObject (object) {
        let objectItems = []
        for (let objectItemKey of objectItems.keys()) {
            shopItems.push(items[objectItems]);
            // TODO: I'm too tired to figure out how to convert an object to an array efficiently.
        }
        return objectItems;
    }
</script>

<div>
    <ul>
        {#each shopItems as item}
            <li>{item.name}</li>
        {/each}
    </ul>
</div>