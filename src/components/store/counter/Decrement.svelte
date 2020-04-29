<script>
    import { count } from '../store.js';
    
    const decrement = () => {
        count.update(n => n - 1);
    };
</script>

<button on:click={decrement}>-</button>