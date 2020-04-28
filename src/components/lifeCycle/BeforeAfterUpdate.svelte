<script>
    import { beforeUpdate, afterUpdate } from 'svelte';
    
    let attempts = 0;

    const panels = new Array(25);

    beforeUpdate(() => {
        console.log('I am from before update');
    });
    
    afterUpdate(() => {
        console.log('I am from after update');
    });

    const handleMissedClick = () => {
        attempts = attempts + 1;
    };
    
</script>

<!-- MarkUp -->
<p class="subtitle">Before/After Update Methods</p>

<p>Missed Attempts: {attempts}</p>

<div class="container">
    {#each panels as _, i}
        <span on:click={handleMissedClick}></span>
    {/each}
</div>

<style>
    .container {
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1rem;
        width: 20rem;
        margin: 1rem auto;
    }
    span {
        width: 3rem;
        height: 3rem;
        border-radius: 1.25rem;
        margin: .5rem;
        background: #333;
        box-shadow: 0 0 10px #000;
    }
</style>