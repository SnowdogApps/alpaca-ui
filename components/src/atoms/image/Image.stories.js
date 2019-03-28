import { storiesOf } from '@storybook/vue'

import AImage from './Image.vue'

const info = `
  This component does not have any modifiers.
`

storiesOf('Atoms/Image', module)
  .add('Default', () => ({
    components: { AImage },
    template: `
      <a-image
        src="images/image/banner-480_480.png"
        alt="alt image text"
      />
    `
    }),
    { info }
  )
