import { globalName } from "svelte/store";

export let name = globalName(() =>{
    return 'world';
});