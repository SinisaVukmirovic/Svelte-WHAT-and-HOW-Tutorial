<script>
    import Hunger from './Hunger.svelte';
    import Frameworks from './Frameworks.svelte';
    
    let hungerStatus = 'Hungry';
    let hungryPerson = 'Tony Soprano';

    // passing multiple props as object
    let frameworks = {
        reactive: 'Svelte',
        notReactive: 'React'
    }

</script>

<!-- MarkUp -->
<h2>Props</h2>

<Hunger {hungerStatus} name={hungryPerson} />

<Frameworks {frameworks}/>

<style>

</style>