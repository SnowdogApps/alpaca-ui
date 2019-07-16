import { storiesOf } from '@storybook/vue'

import ACollapse from '../../molecules/collapse/Collapse.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

storiesOf('Templates/Transitions', module)
  .addParameters({ info: true })
  .add('Fade', () => ({
    components: {
      ACollapse,
      AParagraph
    },
    template: `
      <a-collapse
        title="Fade animation"
        transition-name="fade"
      >
        <a-paragraph>Fade</a-paragraph>
      </a-collapse>
    `
  }))
  .add('Slide up', () => ({
    components: {
      ACollapse,
      AParagraph
    },
    template: `
      <a-collapse
        title="Slide up animation"
        transition-name="slide-up"
      >
        <a-paragraph>Slide up</a-paragraph>
      </a-collapse>
    `
  }))
  .add('Slide right', () => ({
    components: {
      ACollapse,
      AParagraph
    },
    template: `
      <a-collapse
        title="Slide right animation"
        transition-name="slide-right"
      >
        <a-paragraph>Slide right</a-paragraph>
      </a-collapse>
    `
  }))
  .add('Slide down', () => ({
    components: {
      ACollapse,
      AParagraph
    },
    template: `
      <a-collapse
        title="Slide down animation"
        transition-name="slide-down"
      >
        <a-paragraph>Slide down</a-paragraph>
      </a-collapse>
    `
  }))
  .add('Slide left', () => ({
    components: {
      ACollapse,
      AParagraph
    },
    template: `
      <a-collapse
        title="Slide left animation"
        transition-name="slide-left"
      >
        <a-paragraph>Slide left</a-paragraph>
      </a-collapse>
    `
  }))
