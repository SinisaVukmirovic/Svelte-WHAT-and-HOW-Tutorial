<section>
    <div>
        <!-- this is the default slot -->
        <slot>Give your message here!</slot>

        <p>
            <!-- this is named slot -->
            <slot name="smallPrint" />
        </p>
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
    }
    div {
        padding: 1rem;
        margin: .5rem auto;
        background-color: coral;
        color: #000;
        font-size: 1.25rem;
        border-radius: .5rem;
        width: 30rem;
    }
    p {
        font-size: .7rem;
        font-style: italic;
    }
</style>