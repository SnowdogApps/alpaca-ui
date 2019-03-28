import { storiesOf } from '@storybook/vue'

import ABadge from './Badge.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.badge\` class:
  - \`--new\`
  - \`--sale\`
  ------
`

storiesOf('Atoms/Badge', module)
  .add(
    'Default',
    () => ({
      components: { ABadge },
      template: `
        <a-badge>
          Default badge
        </a-badge>
      `
    }),
    { info }
  )
  .add(
    'Custom tag',
    () => ({
      components: { ABadge },
      template: `
        <a-badge tag="span">
          Custom tag
        </a-badge>
      `
    }),
    { info }
  )
  .add(
    'New',
    () => ({
      components: { ABadge },
      template: `
        <a-badge class="badge--new">
          New badge
        </a-badge>
      `
    }),
    { info }
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
    }),
    { info }
  )
