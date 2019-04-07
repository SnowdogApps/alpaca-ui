import { storiesOf } from '@storybook/vue'

import AHeading from './Heading.vue'

storiesOf('Atoms/Heading', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: { AHeading },
      template: `
        <a-heading :level="1">
          Heading level 1
        </a-heading>
      `
    })
  )
  .add(
    'Custom tag',
    () => ({
      components: { AHeading },
      template: `
        <a-heading
          :level="4"
          tag="span"
        >
          Span level 4
        </a-heading>
      `
    })
  )
