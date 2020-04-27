<script>
    import { onDestroy } from 'svelte';

    let count = 0;

    let myInterval = setInterval(() => {
        count = count + 1;

        console.log(count);
    }, 1000);

    // onDestroy(() => {
    //     clearInterval(myInterval);
    // });

    // or put it in a function
    const removeInterval = () => {
        onDestroy(() => {
            clearInterval(myInterval);
        });
    };

    removeInterval();
</script>

<p>Count: {count}</p>