<script>
  import './w3.css';
  import './nedb.min.js';
 var db = new Nedb({
    filename: 'AppData.db',
    autoload: true
  });
 import { RouterView, Link } from '@bjornlu/svelte-router';
 import './bootstrap.min.css';
 import './bootstrap.bundle.min.js';
</script>

  <nav>
    <a href="/">Home</a>
    <a href="/masters">Masters</a>
    <a href="/nav">Navbar</a>
  </nav>
  <RouterView />