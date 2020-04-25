<script>
    async function fetchUser() {
        const url = 'https://source.unsplash.com/400x200/?beach';

        const response = await fetch(`${url}`);

        if (response.ok) {
            // console.log(response);
            return response;
        }

        throw new Error('Something went wrong in fetching your image!');
    }
</script>

<!-- MarkUp -->
<h2>Await Block</h2>

{#await fetchUser()}
    <span>...fetching data</span>
{:then response}
    <img src={response.url} alt="Image from Unsplash API">
{:catch err}
    <span>{err}</span>
{/await}

<style>
    span {
        color: crimson;
    }
</style>