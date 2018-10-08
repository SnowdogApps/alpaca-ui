import { storiesOf } from '@storybook/vue'

import App from '../components/01-globals/app/App.vue'
import Icon from '../components/01-globals/icon/Icon.vue'

storiesOf('Global/Icon', module)
  .add('Default', () => ({
    components: { App, Icon },
    template: `
      <app>
        <icon icon="arrow-down" />
      </app>
    `,
  }))
