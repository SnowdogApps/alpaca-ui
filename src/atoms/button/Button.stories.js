import AButton from './Button.vue'

export default {
  title: 'Atoms/Button',
  component: AButton,
  args: {
    className: ''
  },
  argTypes: {
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'secondary'
        ]
      }
    },
    onClick: {
      action: 'clicked'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AButton },
  props: Object.keys(argTypes),
  template: `
    <a-button
      :variant="variant"
      :class="className"
      type="button"
      v-bind="$props"
      @click="onClick"
    >
      {{ text }}
    </a-button>
  `
})

export const Primary = Template.bind({})
Primary.args = {
  variant: '',
  text: 'Button primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  text: 'Button secondary'
}

export const Fluid = Template.bind({})
Fluid.args = {
  variant: '',
  className: 'w-full',
  text: 'Button fluid'
}
