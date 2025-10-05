<script>
    let { content, title = "Dialog", shown = $bindable() } = $props()
    let dialogReference
    
    $effect(() => {
        if (shown) {
            dialogReference.showModal()
        } else {
            dialogReference.close()
        }
    })
</script>

<dialog bind:this={dialogReference} onclose={() => shown = false} closedby="any">
    <nav>
        <h2>{title}</h2>
        <button id="close-button" onclick={() => { shown = false }}>Close</button>
    </nav>
    {@render content()}
</dialog>

<style>
    dialog {
        width: clamp(280px, 100%, 560px);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        color: inherit;
        font-size: inherit;
        border: var(--t-border-primary);
        border-radius: var(--t-radius-large);
        background-color: var(--t-color-overlay-background);
        color: var(--t-color-overlay-primary);

        animation: 400ms dialogEnter;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        transition-behavior: allow-discrete;
        transition: all 100ms;

        align-self: center;
        justify-self: center;
    }

    dialog:focus {
        outline: var(--t-border-secondary);
        outline-offset: 3pt;
        transition: all 200ms;
    }

    @keyframes dialogEnter {
        0% {
            transform: scale(0.98);
            opacity: 0.7;
        }
        100% {
            transform: none;
            opacity: 1;
        }
    }

    dialog::backdrop {
        animation: 600ms backdropEnter forwards;
        background-color: #fff;
        opacity: 0.5;
    }

    dialog nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    dialog nav h2 {
        font-size: 1.5rem;
    }

    #close-button {
        align-self: flex-end;
    }

    ul {
        max-width: 100%;
        list-style-type: circle;
    }

    dialog:not([open]) {
        display: none;
        transition: all;
    }
</style>