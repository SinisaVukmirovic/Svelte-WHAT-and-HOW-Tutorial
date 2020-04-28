<script>
    import { onMount, beforeUpdate, afterUpdate } from 'svelte';
    
    let attempts = 0;

    let panels = new Array(16);

    let randomNmb = 0;

    let interval;

    // beforeUpdate(() => {
    //     console.log('I am from before update');
    // });

    onMount(() => {
        interval = setInterval(() => {
            randomNmb = Math.floor(Math.random() * panels.length);
        }, 1500);
    });
    
    afterUpdate(() => {
        // console.log('I am from after update');

        if(attempts == 5) {
            clearInterval(interval);
            alert('You Lost!');
        }

        if(panels.length == 0) {
            clearInterval(interval);
            alert('You Won!');
        }
    });

    const handleMissedClick = (index) => {
        if (index == randomNmb) {
            panels = [...panels.slice(0, index), ...panels.slice(index + 1)];
        }
        else {
            attempts = attempts + 1;
        }
    };
    
</script>

<!-- MarkUp -->
<p class="subtitle">On Mount/Before/After Update Methods</p>

<p>Missed Attempts: <strong>{attempts}</strong> out of <strong>5</strong></p>

<div class="container">
    {#each panels as _, i}
        <span class={i == randomNmb ? '' : 'active'} on:click={() => handleMissedClick(i)}></span>
    {/each}
</div>

<p>Clear the Panel! Click on the lighted Panels!</p>

<style>
    .container {
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        width: 20rem;
        margin: 2rem auto;
        padding: .5rem;
        border: 2px solid #111;
        box-shadow: 6px 4px 10px #111;
    }
    span {
        width: 3rem;
        height: 3rem;
        border-radius: 1.25rem;
        margin: .5rem;
        background-image: radial-gradient(coral, red);
        box-shadow: 0 0 10px 5px crimson;
        cursor: pointer;
        transition: all 1s ease;
    }
    .active {
        background-image: radial-gradient(#333, #111);
        box-shadow: 0 0 10px 5px #000;
    }
</style>