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

    <input type="range" bind:value={width} min='100' max="1000" disabled={locked}>    

    <div class="radio-btns">
        <label>
            <input type="radio" bind:group={imgPath}
            value='../img/size.png'  disabled={locked}> Size
        </label>
        <label>
            <input type="radio" bind:group={imgPath}
            value='../img/speed.png'  disabled={locked}> Speed
        </label>
    </div>
    

    <select name="" id="" bind:value={imgPath}>
        <option value="../img/size.png">Size</option>
        <option value="../img/speed.png">Speed</option>
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

    input[type="checkbox"] {
        width: 1.25rem;
        height: 1.25rem;
        transform: translatey(25%);
        margin-left: .5rem;
    }
</style>