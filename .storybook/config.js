// Storybook
import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';

// // Vue
// import Vue from 'vue';
// import Vuex from 'vuex';

// // Install Vue plugins
// Vue.use(Vuex);

// // Import and register components
// import App from '../components/01-globals/app/App.vue';

// Vue.component('app', App)

setOptions({
  hierarchyRootSeparator: /\|/,
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
