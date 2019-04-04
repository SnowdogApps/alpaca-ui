import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ALogo from './Logo.vue'

storiesOf('Molecules/Logo', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { ALogo },
    template: `
        <a-logo
          to="/"
          src="/images/logo/alpaca.svg"
          alt="Logo"
        />
    `
  }))
  .add('With slots', () => ({
    components: { ALogo },
    template: `
        <a-logo to="/">
          <template #image>
            <img 
              src="/images/logo/alpaca.svg" 
              :style="{
                boxShadow: '0 4px 4px 0 rgba(51, 51, 51, 0.3)', 
                padding: '5px'
              }"
            />
          </template>
        </a-logo>
    `
  }))
