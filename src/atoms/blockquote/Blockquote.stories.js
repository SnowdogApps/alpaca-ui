import ABlockquote from './Blockquote.vue'

export default {
  title: 'Atoms/Blockquote',
  component: ABlockquote,
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ABlockquote },
  props: Object.keys(argTypes),
  template: `
    <a-blockquote>
      {{ text }}
    </a-blockquote>
  `
})

export const Default = Template.bind({})
Default.args = {
  text: 'Qui quis labore ad laborum laborum ipsum veniam sunt. Laboris tempor id ut commodo aute incididunt consequat esse aute irure. Et irure elit veniam proident non do commodo labore cillum irure laborum ullamco nostrud.'
}
