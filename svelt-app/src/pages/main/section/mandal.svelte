<script>

import { storeName } from "../../../store.js"


	export let color = 'black';

	const handleClick = (prop) =>{	
		if(prop.color == 'black'){
			color = 'blue';
		}else{
			color = 'black';
		}		
	};

	let foods = ['apple','banana','orange','pear','peach','coconut','tomato','strawberry','rasberry',];	

	const makeArray = (mandalList) =>{
		const result = [];
		for (let idx = 1; idx < 9; idx++) {		
			
			if(idx === 5 ){
				result.push('center topic')				
			}
			result.push(mandalList[idx])
		}
		return result;
	}
	
	const arry = makeArray(foods);

</script>




<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->




<div class = "mainWrap">

<h1>Hello SINBUM {$storeName}!</h1>

<p>{color} jean</p>
<button on:click={handleClick({color})}>update jean color</button>

<div class="mand">
    
    {#each arry as food (food)}
        <button class="v2_24">{food}</button>			
    {/each}
    
</div>
</div>









<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<style>
	.mainWrap {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.v4_35 {
		width: 100%;
		height: 640px;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		padding: 10px 10px;
		margin: 10px;
		opacity: 1;
		position: relative;  
		top: 0px;
		left: 0px;
		overflow: hidden;
	}
		
	.v2_24 {
		width: 200px;
		height: 200px;
		background: rgba(129,213,148,0.8299999833106995);
		opacity: 1;
		display: inline-block;
		top: 10px;
		left: 10px;
		margin: 5px;
	}

</style>
