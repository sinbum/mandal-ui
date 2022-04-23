import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		color: 'black',
	}
});


export default app;

