import AParagraph from './Paragraph.vue'

export default {
  title: 'Atoms/Paragraph',
  component: AParagraph,
  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AParagraph },
  props: Object.keys(argTypes),
  template: `
    <a-paragraph :tag="tag">
      {{ text }}
    </a-paragraph>
  `
})

export const Default = Template.bind({})
Default.args = {
  text: 'Paragraph content'
}

export const Custom = Template.bind({})
Custom.args = {
  text: 'Paragraph content',
  tag: 'span'
}
