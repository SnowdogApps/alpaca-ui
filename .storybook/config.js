// Storybook
import { configure } from '@storybook/vue';

// Vue
import Vue from 'vue';
import Vuex from 'vuex';

// Install Vue plugins
Vue.use(Vuex);

// Import and register components
import MyButton from '../components/MyButton';
import MyWelcome from '../components/MyWelcome';

Vue.component('my-button', MyButton)
Vue.component('my-welcome', MyWelcome)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
