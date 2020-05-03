<script>
    import { fade, fly, blur, slide, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let sliderImgs = [
        'https://steamcdn-a.akamaihd.net/steam/apps/257510/ss_8061dc63743404a7829eabdd47590421652c318d.600x338.jpg?t=1569399451',
        'https://steamcdn-a.akamaihd.net/steam/apps/257510/ss_bf869965e8e972acb4dfe3f8d4bf7baa2c2cdf29.600x338.jpg?t=1569399451',
        'https://steamcdn-a.akamaihd.net/steam/apps/257510/ss_b42acabe63d45a11580a2949e34f305e1bd10fc7.600x338.jpg?t=1569399451',
        'https://steamcdn-a.akamaihd.net/steam/apps/257510/ss_56f8a07f7c2ac684cfec3b17bc0668c24b905b4b.600x338.jpg?t=1569399451',
		'https://steamcdn-a.akamaihd.net/steam/apps/257510/ss_3f16d21674b27dad893ccb27b581670b5bb8043a.600x338.jpg?t=1569399451'
    ];

    let active = 0;

    setInterval(() => {
        let next = active + 1;
        active = next == sliderImgs.length ? 0 : next;
    }, 3000);
</script>

<h2>Transition</h2>

<section>
    {#each sliderImgs as slide, i}
        {#if active === i}
            <img transition:fade={{ delay: 3000, duration: 2000 }} 
            src={slide} alt="Image in slider" width="500" />
        {/if}
    {/each}
</section>



<!-- more transition effects and options -->
<!-- in:fade={{ delay: 250, duration: 300 }} -->
<!-- transition:blur={{amount: 10}}" -->
<!-- transition:fly={{ delay: 150, duration: 300, x: 50, y: 00, opacity: 0.3, easing: quintOut }} -->
<!-- transition:slide={{delay: 250, duration: 300, easing: quintOut }} -->
<!-- transition:scale={{duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut}}" -->

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        position: relative;
    }
        section img {
            position: absolute;
        }
</style>