<script>
    import { handleItemPurchase, isItemAvailable, items } from "../shop.svelte.js";

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
            <button class="item" onclick={() => handleItemPurchase(item.id)} disabled={!(isItemAvailable(item.id))}>
                <span class="inline group item-info">
                    <p class="name">{item.name}</p>
                    <p class="level">(max {item.level.max})</p>
                </span>
                <p class="description">{item.description}</p>
                <p class="price">{item.coinPrice} coins</p>
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
        padding: 0.8ch;
        display: flex;
        flex-direction: column;
        gap: 0.2em;

        cursor: pointer;
        border: var(--t-border-primary);
        background-color: var(--t-color-secondary-overlay-background);
        border-radius: var(--t-radius-primary);

        transition: all 100ms;
    }

    .item:disabled {
        background-color: inherit;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 15px,
            rgb(69, 69, 69) 15px,
            rgb(69, 69, 69) 16px
        );
        cursor: default;
    }

    .item:disabled:active {
        transform: none;
        outline: var(--t-border-secondary);
        outline-offset: 0.2em;
    }

    .item .name {
        font-weight: 600;
    }
    .item .price {
        font-style: italic;
        align-self: flex-end;
    }
    .group.inline {
        display: flex;
        gap: 1ch;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>