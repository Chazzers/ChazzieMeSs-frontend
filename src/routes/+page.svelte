<script>
    export let data;
</script>

<section>
    {#each data.brands as brand}
        <article>
            <h2>{brand.name}</h2>
            <div class="img-container">
                <img src={brand.image} alt="" />
            </div>
            <p>{brand.description}</p>
        </article>
    {/each}
</section>

<style>
    section {
        display: flex;
    }
    article {
        width: 15rem;
        height: auto;
    }

    article h2 {
        white-space: nowrap;
        font-size: 1.25rem; /* text-xl */
        font-weight: 600; /* font-semibold */
    }

    article .img-container {
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 9999px; /* rounded-full */
    }
    article .img-container img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>
