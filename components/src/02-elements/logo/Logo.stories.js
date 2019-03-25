import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import AlpacaLogo from './Logo.vue'

storiesOf('Elements/Logo', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { AlpacaLogo },
    template: `
        <alpaca-logo
          src="/images/logo/alpaca.svg"
          to="/"
        />
    `
  }))
