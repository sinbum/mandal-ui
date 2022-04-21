<script>
export let name;
	export let color = 'black';

	const handleClick = (prop) =>{	
		if(prop.color == 'black'){
			color = 'blue';
		}else{
			color = 'black';
		}		
	};

	let foods = ['apple','banana','orange','pear','peach','coconut','tomato','strawberry','rasberry',]
	

	const makeArray = () =>{
		const arry = [];
		for (let index = 1; index < 9; index++) {		
			
			if(index === 5 ){
				arry.push('center topic')				
			}
			arry.push(index)		
		}
		return arry		
	}

	const arry = makeArray();

	console.log(arry);


</script>

<h1>Hello SINBUM {name}!</h1>

<p>{color} jean</p>
<button on:click={handleClick({color})}>update jean color</button>
<main>

<div class="v4_35">
    
    {#each arry as food (food)}
        <button class="v2_24">{food}</button>			
    {/each}
    
</div>
</main>

<style>
	main {
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.v4_35 {
  width: 640px;
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
