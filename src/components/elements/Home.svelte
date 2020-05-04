<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
</svelte:head>

<h4>This is the HOME page</h4>

<article>
    <h5><i class="fas fa-home fa-2x"></i> Welcome to the Home Page</h5>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eius modi sed, dolorem quam nam tenetur deleniti maiores aliquid similique?</p>
</article>

<style>
    :global(article) {
        width: 80%;
        max-width: 40rem;
        margin: 3rem auto;
        text-align: left;
        padding: 1rem 2rem;
        background: #131313;
    }
    h5 {
        margin: 2rem 0 0 2rem;
        font-size: 1.25rem;
        color: cornflowerblue;
    }
    i {
        margin-right: 2rem;
    }
</style>