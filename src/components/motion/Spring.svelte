<script>
    import { spring } from 'svelte/motion';
    // import { cubicOut } from 'svelte/easing';

    let src = '../img/svelte-logo.png';

    let zoomIn;
    let zoomOut;

    // default without options
    // const width = spring(100);
    
    const width = spring(100, {
        stiffness: 0.01,
        damping: 0.1
    });

    zoomIn = setInterval(() => {
        width.set(150);
    }, 300);

    zoomOut = setInterval(() => {
        width.set(100);
    }, 600);
</script>

<section>
    <img {src} alt="Svelte Logo" width={$width}>
</section>
<!-- whenever we use variable for spring we need to use $in front of it -->

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
</style>