<script>
    import Notify from './Notify.svelte';
</script>

<h2>Named Slots / default Slots</h2>

<Notify>
    <h4>Here is the message from inside of component!</h4>
</Notify>

<Notify>
    This message also contains named Slot!
    <p slot="smallPrint">I am Named Slot in small print</p>
</Notify>

<Notify />