<script>
    let clicked;

    const handleClick = () => {
        clicked = !clicked;
    };
</script>

<div on:click={handleClick}>
    <slot {clicked} />
</div>