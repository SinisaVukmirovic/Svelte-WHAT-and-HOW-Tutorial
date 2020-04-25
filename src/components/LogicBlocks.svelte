<script>
    let replies = [
        {
            time: '3 minutes ago',
            message: 'React is not reactive!'
        },
        {
            time: '5 minutes ago',
            message: 'React, is a terrible name for React.js'
        },
        {
            time: '10 minutes ago',
            message: 'Svelte does not have virtual DOM'
        },
        {
            time: '15 minutes ago',
            message: 'Svelte is small, fast, reactive...'
        }
    ];

    const addNew = () => {
        replies = [{
            time: '1 minute ago!',
            message: 'Hello, I was just added!'
        }, ...replies];
    };

    let loggedIn = true;

    const remove = (index) => {
        replies = replies.filter((reply, idx) => idx != index);
    };
</script>

<!-- MarkUp -->
<h2>Logic Blocks</h2>

<h3>Talk about Svelte</h3>

<div>
    <span>15 minutes ago</span>
    <p>Svelte is the coolest JS framework!</p>
</div>

<h3>Newest replies talking about Svelte:</h3>
{#each replies as reply, index}
    <div class="reply">
        <span>{reply.time}</span>
        <p>{reply.message}</p>
        <button on:click={() => remove(index)}>Remove</button>
    </div>
{/each}

{#if loggedIn}
    <button on:click={addNew}>Add New</button>
{:else}
    <button>Log In Now</button>
{/if}

<style>
    .reply {
        background: #121212;
        width: 80%;
        max-width: 30rem;
        margin: .5rem auto;
        padding: .25rem;
    }
        .reply p {
            margin: .25rem;
        }
    span {
        font-style: italic;
        color: cornflowerblue;
        font-size: .8rem;
    }
    h3:last-of-type {
        margin-top: 4rem;
    }
</style>