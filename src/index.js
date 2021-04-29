import { initPathRouter } from '@bjornlu/svelte-router';
import App from './App.svelte';
import Home from './pages/Home.svelte';
import Masters from './pages/Masters.svelte';
import Nav from './pages/Nav.svelte';


 initPathRouter([
  { path: '/', component: Home },
  { path: '/masters', component: Masters },
  { path: '/nav', component: Nav }
  ])

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
