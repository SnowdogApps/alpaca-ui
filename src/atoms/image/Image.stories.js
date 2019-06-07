import { storiesOf } from '@storybook/vue'

import AImage from './Image.vue'

storiesOf('Atoms/Image', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AImage },
    template: `
      <a-image
        src="images/image/banner-480_480.png"
        alt="alt image text"
      />
    `
  })
  )
