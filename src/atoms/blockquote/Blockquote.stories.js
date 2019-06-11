import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import ABlockquote from './Blockquote.vue'

storiesOf('Atoms/Blockquote', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ABlockquote },
    props: {
      contentKnob: {
        default: text('Blockquote content', 'Qui quis labore ad laborum laborum ipsum veniam sunt. Laboris tempor id ut commodo aute incididunt consequat esse aute irure. Et irure elit veniam proident non do commodo labore cillum irure laborum ullamco nostrud.')
      }
    },
    template: `
      <a-blockquote>
        {{ contentKnob }}
      </a-blockquote>
    `
  }))
