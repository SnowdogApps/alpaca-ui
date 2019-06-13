import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import AContainer from './Container.vue'

storiesOf('Atoms/Container', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AContainer },
    props: {
      contentKnob: {
        default: text('Container content', 'Container')
      }
    },
    template: `
      <a-container>
        {{ contentKnob }}
      </a-container>
    `
  }))
  .add('Custom tag', () => ({
    components: { AContainer },
    props: {
      contentKnob: {
        default: text('Container content', 'Container')
      },
      tagKnob: {
        default: text('Html tag', 'div')
      }
    },
    template: `
      <a-container :tag="tagKnob">
        {{ contentKnob }}
      </a-container>
    `
  }))
