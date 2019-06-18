import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import AParagraph from './Paragraph.vue'

const sampleParagraphText = 'Velit proident fugiat pariatur irure sint non ut non. Adipisicing aliqua consectetur nisi aliquip velit. Nisi pariatur est consectetur culpa occaecat enim nulla laborum ex. Consectetur incididunt minim cupidatat ad aliquip. Ea non ipsum ut consequat sit adipisicing eiusmod do. Officia incididunt cillum incididunt aliquip sit labore laboris do cillum commodo occaecat voluptate ea aliqua.'

storiesOf('Atoms/Paragraph', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AParagraph },
    props: {
      textKnob: {
        default: text('Paragraph text', sampleParagraphText)
      }
    },
    template: `
      <a-paragraph>
        {{ textKnob }}
      </a-paragraph>
    `
  }))
  .add('Custom tag', () => ({
    components: { AParagraph },
    props: {
      textKnob: {
        default: text('Paragraph text', sampleParagraphText)
      },
      tagKnob: {
        default: text('Html tag', 'div')
      }
    },
    template: `
      <a-paragraph :tag="tagKnob">
        {{ textKnob }}
      </a-paragraph>
    `
  }))
