<script>
    import {Router, Route} from "svelte-navigator";
    import {storeName} from './store.js';

    import Header from "@modules/header/header.svelte";
    import Nav from "@modules/nav/nav.svelte";
    import Mandal from "@section/mandal.svelte";
    import Login from "@modules/login/login.svelte";
    
    $storeName = 'WORLD!!';

</script>

<Router>

    <header>
        <Header/>
    </header>

    <div class="container">
        <nav>
            <Nav/>
        </nav>

        <main>

            <Route path="/">
                <Mandal/>
            </Route>

            <Route path="login">
                <Login/>
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

    </div>

</Router>

<style>
</style>
