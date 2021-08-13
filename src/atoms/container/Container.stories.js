import AContainer from './Container.vue'

export default {
  title: 'Atoms/Container',
  component: AContainer,
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    },
    tag: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AContainer },
  props: Object.keys(argTypes),
  template: `
    <a-container :tag="tag">
      {{ text }}
    </a-container>
  `
})
export const Default = Template.bind({})
Default.args = {
  text: 'Container content'
}
