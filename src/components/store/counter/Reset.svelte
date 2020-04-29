<script>
    import { count } from '../store.js';
    
    const reset = () => {
        count.set(0);
    };
</script>

<button on:click={reset}>Reset</button>