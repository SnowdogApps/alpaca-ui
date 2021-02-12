import AButton from './Button.vue'

export default {
  title: 'Atoms/Button',
  component: AButton,
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    },
    componentClass: {
      control: {
        type: 'check',
        options: [
          'btn',
          'btn--primary',
          'btn--secondary',
          'btn--fluid'
        ]
      }
    },
    onClick: { action: 'clicked' }
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { AButton },
    props: Object.keys(argTypes),
    template: `
      <AButton
        :class="componentClass"
        @click="onClick"
      >
        {{ text }}
      </AButton>
    `
  }
}

export const Default = Template.bind({})
Default.args = {
  text: 'Button default',
  componentClass: 'btn'
}

export const Primary = Template.bind({})
Primary.args = {
  text: 'Button primary',
  componentClass: 'btn btn--primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Button secondary',
  componentClass: 'btn btn--secondary'
}
