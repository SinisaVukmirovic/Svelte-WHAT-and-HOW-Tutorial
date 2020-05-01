<script>
    import { readOnlyData } from './store.js';
</script>


<p class="subtitle">Readable</p>

<!-- to subscribe to a value from a store add a $ sign infront of it -->
<!-- this automatically handles subscribe and unsubscribe -->
<h3>{$readOnlyData}</h3>