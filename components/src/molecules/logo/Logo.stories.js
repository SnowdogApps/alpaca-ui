import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ALogo from './Logo.vue'

storiesOf('Molecules/Logo', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { ALogo },
    template: `
        <a-logo
          src="/images/logo/alpaca.svg"
          to="/"
        />
    `
  }))
