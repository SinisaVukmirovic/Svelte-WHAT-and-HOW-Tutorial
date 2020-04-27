<script>
    let width = 200;
    let imgPath;

    let locked = false;
</script>

<!-- NOTE TO SELF - local images must be places in public folder -->

<!-- MockUp -->
<h2>Bindings</h2>

<div class="container">
    <input type="text" bind:value={width}>

    <!-- to disable inputs -->
    <label>Disable Inputs
        <input type="checkbox" bind:checked={locked}>    
    </label>

    <input type="range" bind:value={width} min='100' max="1200" disabled={locked}>    

    <div class="radio-btns">
        <label>
            <input type="radio" bind:group={imgPath}
            value='../img/radiant.jpg'  disabled={locked}>Radiant
        </label>
        <label>
            <input type="radio" bind:group={imgPath}
            value='../img/dire.jpg'  disabled={locked}>Dire
        </label>
    </div>
    

    <select name="" id="" bind:value={imgPath}>
        <option value="../img/radiant.jpg">Radiant</option>
        <option value="../img/dire.jpg">Dire</option>
    </select>

    <img {width} src={imgPath} alt="Dota 2 Radiant Image">
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .radio-btns {
        display: flex;
        flex-direction: column;   
        align-items: flex-start;
        margin: 1rem;  
    }
    select, input[type="range"] {
        margin: 1rem;
    }
</style>