import { addDecorator, storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ALogo from './Logo.vue'

addDecorator(StoryRouter())
storiesOf('Molecules/Logo', module)
  .addParameters({ info: true })
  // @vue/component
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
  // @vue/component
  .add('With slots', () => ({
    components: { ALogo },
    template: `
      <a-logo to="/">
        <template #image>
          <img
            src="/images/logo/alpaca.svg"
            alt="Logo"
            style="width: 70%;"
          />
        </template>
      </a-logo>
    `
  }))
