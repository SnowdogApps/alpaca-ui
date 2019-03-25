import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import Container from './Container.vue'

storiesOf('Global/Container', module).add('Default', () => ({
  components: { App, Container },
  template: `
    <app>
      <container>
        Container
      </container>
    </app>
  `
}))
