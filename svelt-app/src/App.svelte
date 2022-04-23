<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Header from "./pages/header/header.svelte";
	import Nav from "./pages/nav/nav.svelte";
	import MyApp from "./pages/main/section/MyApp.svelte";
	import Login from "./pages/login/login.svelte";
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
			<MyApp />
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
