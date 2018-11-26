import {storiesOf} from '@storybook/vue'
import { action } from '@storybook/addon-actions';

import App from '../../01-globals/app/App.vue'
import AlpacaAction from './Action.vue'

storiesOf('Elements/Action', module)
  .add('Default', () => ({
    components: {App, AlpacaAction},
    template: `
      <app>
        <alpaca-action 
          button
          customClass="exampleClass"
          :click="exampleMethod"
         >
          Example button
        </alpaca-action>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Link', () => ({
    components: {App, AlpacaAction},
    template: `
      <app>
        <alpaca-action 
          title="Title" 
          link="#"
         >
          Link this title
         </alpaca-action>
      </app>
    `
  }))
