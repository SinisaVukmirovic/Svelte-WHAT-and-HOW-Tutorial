<script>
    let src = 'https://pbs.twimg.com/media/EM4NfuGXkAAJpqg.png';

    let blog = `
        <img src=${src} alt="Svelte logo" width="200" />
        <h1 class="sty">Why learn Svelte js</h1>
        <p>Because it is very simple and has <strong>compiler</strong> instead of <strong>virtual DOM</strong></p>
    `;
</script>

<!-- MarkUp -->
<h2>Data and Attributes</h2>

<img {src} alt="Svelte logo" width="200" />

{@html blog}

<style>
    :global(h2) {
        color: #111;
        background: cornflowerblue;
        padding: .5rem;
    }
</style>