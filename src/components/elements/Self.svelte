<script>
    export let count;
</script>


{#if count > 0}
    <h4>React is not reactive!</h4>
    <svelte:self count = {count - 1} />
{:else}
    <h4>React is a terrible name for React.js!</h4>
{/if}