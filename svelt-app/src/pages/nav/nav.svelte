<script>
    import {Link} from 'svelte-navigator';
</script>

<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="about">About</Link></li>
    <li><Link to="login">로그인</Link></li>
</ul>

<style>
    ul{
        list-style: none;
        padding: 0;
        display: flex;
    }

    li{
        padding-left: 20px;
    }

</style>