import {storiesOf} from '@storybook/vue'

import App from '../app/App.vue'
import Icon from './Icon.vue'

storiesOf('Global/Icon', module).add('Default', () => ({
  components: {App, Icon},
  template: `
      <app>
        <icon icon="arrow-down" />
      </app>
    `
}))
