import { storiesOf } from '@storybook/vue'

import ALink from './Link.vue'

const info = `
  ------
  #### Use these modifiers with \`.link\` class:
  - \`.a-link--inverted\` - Selector for applying inverted styles
  - \`.a-link--secondary\` Selector for applying secondary styles
  ------
`

storiesOf('Atoms/Link', module)
  .addParameters({ info })
  // @vue/component
  .add('Default', () => ({
    components: { ALink },
    template: `
      <a-link href="#">
        Default link
      </a-link>
    `
  }))
  // @vue/component
  .add('Inverted', () => ({
    components: { ALink },
    template: `
      <a-link
        href="#"
        class="a-link--inverted"
      >
        Inverted link
        </a-link>
      `
  }))
  // @vue/component
  .add('Secondary', () => ({
    components: { ALink },
    template: `
      <a-link
        href="#"
        class="a-link--secondary"
      >
        Secondary link
        </a-link>
      `
  }))
