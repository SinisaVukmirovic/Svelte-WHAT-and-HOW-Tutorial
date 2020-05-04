<script>
    import Home from './Home.svelte';
    import About from './About.svelte';

    let currentPage = About;
</script>

<section>
    <button on:click={() => currentPage = Home}>Home</button>
    <button on:click={() => currentPage = About}>About</button>

    <svelte:component this={currentPage} />
</section>

<style>
    section {
        min-height: 50vh;
    }
</style>