<script>
    import Increment from './counter/Increment.svelte';
    import Decrement from './counter/Decrement.svelte';
    import Reset from './counter/Reset.svelte';
    import { count } from './store.js';
</script>

<h2>Store</h2>
<p class="subtitle">Writable</p>

<!-- to subscribe to a value from a store add a $ sign infront of it -->
<!-- this automatically handles subscribe and unsubscribe -->
<p>The counter is: <strong>{$count}</strong></p>

<Increment />
<Decrement />
<Reset />