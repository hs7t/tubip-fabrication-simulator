<script>
    import { handleItemPurchase, items } from "../shop.svelte.js";

    let shopItems = $derived(arrayFromObject(items))

    function arrayFromObject (object) {
        let objectItems = []
        for (let objectItemKey of Object.keys(object)) {
            objectItems.push(object[objectItemKey]);
            // TODO: I'm too tired to figure out how to convert an object to an array efficiently.
        }
        return objectItems;
    }
</script>

<div class="shop">
    <div class="items">
        {#each shopItems as item}
            <button class="item" onclick={() => handleItemPurchase(item.id)}>
                <p class="name">{item.name}</p>
            </button>
        {/each}
    </div>
</div>

<style> 
    .shop {
        width: 100%;
    }
    .items {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
    .item {
        all: unset;
        cursor: pointer;
        padding: 0.8ch;
        border: var(--t-border-primary);
    }
    .item .name {
        font-weight: 600;
    }
</style>