<h2>DOM Events</h2>

<form action="/something" on:submit|preventDefault>
    <label for="">Hover over input field to focus it</label>
    <input type="text" placeholder="Fill Me..." on:mouseover={e => e.target.focus()}>

    <input type="submit">
</form>

<style>
    label {
        margin: 1rem;
    }
</style>