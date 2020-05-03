<script>
    import { tweened } from 'svelte/motion';
    import { elasticInOut,  } from 'svelte/easing';

    const src = 'https://m.media-amazon.com/images/M/MV5BYjQzNWZjYmMtOWQzMS00YTcyLWIyYzctODNmMmE4MjYzYTYxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg';
    const width = tweened(100, {
        duration: 3000,
        easing: elasticInOut
    });

    const animateImg = () => {
        width.set(500);
    };
</script>

<h2>Motion</h2>

<p class="subtitle">Tweened</p>

<button on:click={animateImg}>Animate</button>
<br>

<img {src} alt="" width={$width}>
<!-- whenever we use variable for tweened we need to use $in front of it -->