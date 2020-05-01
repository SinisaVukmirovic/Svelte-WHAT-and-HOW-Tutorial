<script>
    import Gallery from './Gallery.svelte';

    let images = [
        'https://www.dotabuff.com/assets/heroes/zeus-vert-ff8713959042bbe6d39c6d0e1c81de601bb4e49e5a62d0f192884e1203a274ad.jpg',
        'https://www.dotabuff.com/assets/heroes/lycan-vert-0126146ed85954f788272c32c3ea4a6e7644477f66e83241d6eaaffd40cbf58c.jpg',
        'https://www.dotabuff.com/assets/heroes/juggernaut-vert-8ec06b28f6c1d52078d2f6e70be98abcdb692b2094918c7dd75d91cb74b410af.jpg',
        'https://www.dotabuff.com/assets/heroes/disruptor-vert-268b330f05e03f59dd88289f2e09421371a826e77f0808b914cff1299c681178.jpg'
    ];
</script>

<h2>Slot Props</h2>
<p>Click on the images to see the effects passed with slot prop</p>

<div class="container">
    <Gallery let:clicked={IAmClicked}>
        <img style={IAmClicked ? 'border: 6px solid coral' : ''} src={images[0]} alt="Hero image" width="200" />
    </Gallery>

    <Gallery let:clicked={IAmClicked}>
        <img style={IAmClicked ? 'border-radius:50%' : ''} src={images[1]} alt="Hero image" width="200" />
    </Gallery>

    <Gallery let:clicked={IAmClicked}>
        <img style={IAmClicked ? 'opacity:.4' : ''} src={images[2]} alt="Hero image" width="200" />
    </Gallery>

    <Gallery let:clicked={IAmClicked}>
        <img style={IAmClicked ? 'filter:brightness(200%)' : ''} src={images[3]} alt="Hero image" width="200" />
    </Gallery>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-evenly;
        margin: 2rem auto;
    }
    img {
        cursor: pointer;
    }
</style>