<script>
    // to define something as a prop in Svelte, give an export keyword in front
    export let hungerStatus;
    export let name;

    const status = () => {
        if (hungerStatus == 'Hungry') {
            return 'I am very hungry, give me food!'
        }
        return 'No thanks, you can take the food.';
    };
</script>

<p>{hungerStatus}</p>
<p>{name} is saying: {status()}</p>