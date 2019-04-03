import { storiesOf } from '@storybook/vue'

import ABadge from './Badge.vue'

const info = `
  ---
  #### Available these modifiers with \`.badge\` class:
  - \`.badge--new\` - Selector for applying styles for new badge
  - \`.badge--sale\` - Selector for applying styles for sale badge
  ---
`

storiesOf('Atoms/Badge', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      components: { ABadge },
      template: `
        <a-badge>
          Default badge
        </a-badge>
      `
    })
  )
  .add('Custom tag', () => ({
    components: { ABadge },
    template: `
      <a-badge tag="span">
        Custom tag
      </a-badge>
    `
    })
  )
  .add('New', () => ({
    components: { ABadge },
    template: `
      <a-badge class="badge--new">
        New badge
      </a-badge>
    `
    })
  )
  .add(
    'Sale',
    () => ({
      components: { ABadge },
      template: `
        <a-badge class="badge--sale">
          Sale badge
        </a-badge>
      `
    })
  )
