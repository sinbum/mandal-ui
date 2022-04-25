<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Header from "./pages/header/header.svelte";
	import Nav from "./pages/nav/nav.svelte";
	import Mandal from "./pages/main/section/mandal.svelte";
	import Login from "./pages/login/login.svelte";

	
	import { storeName } from './store.js'	
	
	$storeName = 'WORLD!!';

	
</script>

<Router>
	
		<header>
			<Header />
		</header>

	<nav>		
		<Nav />
	</nav>

	<main>

		<Route path="/">
			<Mandal />
		</Route>

		<Route path="login">
			<Login />
		</Route>

		<!-- <Route path="about">
		<h3>About</h3>
		<p>That's what it's all about!</p>
	  </Route> -->

		<!-- <PrivateRoute path="profile" let:location>
		<h3>Welcome {$user.username}</h3>
		<button on:click={handleLogout}>Logout</button>
	  </PrivateRoute> -->
	</main>


</Router>

<style>
</style>
