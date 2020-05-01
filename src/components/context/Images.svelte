<script>
    import { getContext } from 'svelte';

    let ShowcaseImgs = getContext('ShowcaseImgs');
</script>

<div class="container">
    {#each ShowcaseImgs as img}
        <img src={img} alt="Showcase image">
    {/each}
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-content: center;
        align-content: center;
        grid-gap: 1rem;
        width: fit-content;
        margin: 2rem auto;
        padding: 2rem;
        background: #111;
        border: 1px solid #000;
        box-shadow: 0 0 25px 15px #000;
    }
        .container img {
            border: 2px solid #000;
        }
</style>