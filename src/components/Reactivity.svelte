<script>
    let cost = 0;

    // reactive values - if anything on the right of equal sign changes, variable reacts
    $: shipping = cost * 0.01;
    $: grandTotal = cost + shipping;

    const addToCart = () => {
        cost = cost + 30;
    };
</script>

<!-- MarkUp -->
<h2>Reactivity Declaration</h2>

<div class="products">
    <div class="item">
        <img src="http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_hphover.png?v=5800661" alt="Product">
        <span>30$</span>
        <button on:click={addToCart}>Add to Cart</button>
    </div>
    <div class="item">
        <img src="http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_hphover.png?v=5800661" alt="Product">
        <span>30$</span>
        <button on:click={addToCart}>Add to Cart</button>
    </div>
    <div class="item">
        <img src="http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_hphover.png" alt="Product">
        <span>30$</span>
        <button on:click={addToCart}>Add to Cart</button>
    </div>
</div>

<div class="cost">
    <h4>Cost: {cost}$</h4>
    <h4>Shipping: {shipping}$</h4>
    <h4>Total: {grandTotal}$</h4>
</div>


<!-- ======================================================== -->

<style>
    .products {
        display: flex;
        justify-content: center;
    }
    .item {
        display: flex;
        flex-direction: column;
        margin: .25rem .5rem;
    }
    .cost {
        display: flex;
        justify-content: space-around;
        width: 30rem;
        margin: 0 auto;
    }
</style>