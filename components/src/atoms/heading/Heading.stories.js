import { storiesOf } from '@storybook/vue'

import AHeading from './Heading.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.label\` class:
  - \`--inline\`
  - \`--hidden\`
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
  }))
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
  }))
  .add('Page heading', () => ({
    components: { AHeading },
    template: `
        <a-heading tag="h1">
          Page level 6
        </a-heading>
    `
  }))
