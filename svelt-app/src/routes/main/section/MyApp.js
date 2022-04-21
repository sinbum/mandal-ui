import MyApp from './MyApp.svelte';

const myApp = new MyApp({
	target: document.body,
	props: {
		name: 'world',
		color: 'black',
		buttonClick : ()=>{alert('hello')}
	}
});

export default myApp;
