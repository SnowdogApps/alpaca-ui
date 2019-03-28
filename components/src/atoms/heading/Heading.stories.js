import { storiesOf } from '@storybook/vue'

import AHeading from './Heading.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.Heading\` class:
  - \`--page\`
  ------
`

storiesOf('Atoms/Heading', module)
  .add('Default', () => ({
    components: { AHeading },
    template: `
        <a-heading
          :level="1"
        >
          Heading level 1
        </a-heading>
    `
    }),
    { info }
  )
  .add('Custom tag', () => ({
    components: { AHeading },
    template: `
        <a-heading
          :level="4"
          tag="span"
        >
          Span level 4
        </a-heading>
    `
    }),
    { info }
  )
  .add('Page heading', () => ({
    components: { AHeading },
    template: `
        <a-heading 
          :level="6" 
          class="heading--page"
        >
          Page level 6
        </a-heading>
    `
    }),
    { info }
  )
