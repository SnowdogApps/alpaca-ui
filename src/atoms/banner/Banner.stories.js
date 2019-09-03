import { storiesOf } from '@storybook/vue'
import { object, text } from '@storybook/addon-knobs'

import ABanner from './Banner.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p>
`

const sources = [
  {
    'id': 'image_1',
    'srcset': '/images/banner/banner-320_176.jpg',
    'media': '(max-width: 480px)'
  },
  {
    'id': 'image_2',
    'srcset': '/images/banner/banner-768_416.jpg',
    'media': '(max-width: 960px)'
  },
  {
    'id': 'image_3',
    'srcset': '/images/banner/banner-1024_416.jpg',
    'media': '(max-width: 1328px)'
  },
  {
    'id': 'image_4',
    'srcset': '/images/banner/banner-1920_512.jpg',
    'media': ''
  }
]

const image = {
  src: '/images/banner/banner-320_176.jpg',
  alt: 'Banner image'
}

storiesOf('Atoms/Banner', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ABanner },
    props: {
      imageKnobs: {
        default: object('Image', image)
      },
      sourcesKnobs: {
        default: object('Sources', sources)
      },
      textKnobs: {
        default: object('Text', sources)
      },
      ariaLabelKnobs: {
        default: text('Aria label', 'Banner')
      },
      hrefKnobs: {
        default: object('Href', '#')
      }
    },
    template: `
      <a-banner
        :href="hrefKnobs"
        :ariaLabel="ariaLabelKnobs"
        :image="imageKnobs"
        :sources="sourcesKnobs"
      />
    `
  }))
