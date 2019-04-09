import { storiesOf } from '@storybook/vue'

import ABanner from './Banner.vue'

storiesOf('Atoms/Banner', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: { ABanner },
      data () {
        return {
          link: {
            href: '#',
            ariaLabel: 'Banner'
          },
          image: {
            src: '/images/banner/banner-320_176.jpg',
            alt: 'Banner image'
          },
          sources: [
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
        }
      },
      template: `
        <a-banner
          :link="link"
          :image="image"
          :sources="sources"
        />
      `
    })
  )
