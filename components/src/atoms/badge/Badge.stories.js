import {storiesOf} from '@storybook/vue'

import AlpacaBadge from './Badge.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.badge\` class:
  - \`--new\`
  - \`--sale\`
  ------
`

storiesOf('Atoms/Badge', module)
  .add('Default', () => ({
    components: { AlpacaBadge },
    template: `
      <alpaca-badge>
        Default badge
      </alpaca-badge>
    `
    }),
    { info }
  )
  .add('Custom tag', () => ({
    components: { AlpacaBadge },
    template: `
      <alpaca-badge tag="span">
        Custom tag
      </alpaca-badge>
    `
    }),
    { info }
  )
  .add('New', () => ({
    components: { AlpacaBadge },
    template: `
      <alpaca-badge class="badge--new">
        New badge
      </alpaca-badge>
    `
    }),
    { info }
  )
  .add('Sale', () => ({
    components: { AlpacaBadge },
    template: `
      <alpaca-badge class="badge--sale">
        Sale badge
      </alpaca-badge>
    `
    }),
    { info }
  )
