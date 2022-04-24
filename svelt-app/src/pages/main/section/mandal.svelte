<script>
import getResponseSample from "../../../sampleDatas.js";
import { storeName } from "../../../store.js"



	export let color = 'black';

	const handleClick = (prop) =>{	
		if(prop.color == 'black'){
			color = 'blue';
		}else{
			color = 'black';
		}
	};

	


	

	let datas = ['apple','banana','orange','pear','peach','coconut','tomato','strawberry','rasberry',];	

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

console.log('아아아');
	console.log(JSON.parse(getResponseSample()));
	

	
	const mandalList = makeArray(datas);

</script>




<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->


<div class = "mainWrap">

<h1>Hello SINBUM {$storeName}</h1>

<div class="mandals">
    
    {#each mandalList as box,idx (box)}
		<button class="mandal" >{box}</button>			
    {/each}
    
</div>
</div>









<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<style>
	.mainWrap {
		text-align: center;
		padding: 1em;
		max-width: 100%;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.mandals {
		width: 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		padding: 10px 10px;
		margin: 10px;
		opacity: 1;
		position: relative;  	
		overflow: hidden;				
	}
		
	.mandal {
		position: relative;
		float: left;
		width: 30%;	
		padding-bottom: 25%;
		/* height: 30%; */
		background: rgba(129,213,148,0.8299999833106995);		
		font-size: larger;
		/* margin: 5px; */
	}

</style>
