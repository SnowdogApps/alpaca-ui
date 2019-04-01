import { storiesOf } from '@storybook/vue'

import ALink from './Link.vue'

const info = `
  ------
  #### Use these modifiers with \`.link\` class:
  - \`.link--inverted\` - Selector for applying inverted styles
  - \`.link--secondary\` Selector for applying secondary styles
  ------
`

storiesOf('Atoms/Link', module)
  .add(
    'Default',
    () => ({
      components: { ALink },
      template: `
        <a-link href="#">
          Default link
        </a-link>
      `
    }),
    { info }
  )
  .add(
    'Inverted',
    () => ({
      components: { ALink },
      template: `
        <a-link
          href="#"
          class="link--inverted"
        >
          Inverted link
        </a-link>
      `
    }),
    { info }
  )
  .add(
    'Secondary',
    () => ({
      components: { ALink },
      template: `
        <a-link
          href="#"
          class="link--secondary"
        >
          Secondary link
        </a-link>
      `
    }),
    { info }
  )
