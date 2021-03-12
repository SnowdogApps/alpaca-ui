import ABadge from './Badge.vue'

export default {
  title: 'Atoms/Badge',
  component: ABadge,
  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'text'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ABadge },
  props: Object.keys(argTypes),
  template: `
    <a-badge
      :tag="tag"
      :variant="variant"
    >
      {{ text }}
    </a-badge>
  `
})

export const Default = Template.bind({})
Default.args = {
  text: 'Badge'
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  variant: 'secondary'
}
