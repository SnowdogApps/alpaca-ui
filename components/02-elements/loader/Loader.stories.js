import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import Loader from './Loader.vue'

storiesOf('Elements/Loader', module)
  .add('Default', () => ({
    components: { App, Loader },
    template: `
      <app>
        <Loader />
      </app>
    `
  }))
