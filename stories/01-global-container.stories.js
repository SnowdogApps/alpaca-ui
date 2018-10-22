import {storiesOf} from '@storybook/vue'

import App from '../components/01-globals/app/App.vue'
import Container from '../components/01-globals/container/Container.vue'

storiesOf('Global/Container', module).add('Default', () => ({
  components: {App, Container},
  template: `
      <app>
        <container>
          Test
        </container>
      </app>
    `
}))
