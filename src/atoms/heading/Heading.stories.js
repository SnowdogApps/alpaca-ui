import AHeading from './Heading.vue'

export default {
  title: 'Atoms/Heading',
  component: AHeading,
  argTypes: {
    tag: {
      control: {
        type: 'text',
        required: true
      }
    },
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'font-secondary',
          'first-level',
          'second-level',
          'third-level',
          'fourth-level',
          'fifth-level',
          'sixth-level'
        ]
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
  components: { AHeading },
  props: Object.keys(argTypes),
  template: `
    <a-heading
      :tag="tag"
      :variant="variant"
    >
      {{ text }}
    </a-heading>
  `
})

export const First = Template.bind({})
First.args = {
  tag: 'h1',
  variant: 'first-level',
  text: 'Heading level 1'
}

export const Second = Template.bind({})
Second.args = {
  tag: 'h2',
  variant: 'second-level',
  text: 'Heading level 2'
}

export const Third = Template.bind({})
Third.args = {
  tag: 'h3',
  variant: 'third-level',
  text: 'Heading level 3'
}

export const Fourth = Template.bind({})
Fourth.args = {
  tag: 'h4',
  variant: 'fourth-level',
  text: 'Heading level 4'
}

export const Fifth = Template.bind({})
Fifth.args = {
  tag: 'h5',
  variant: 'fifth-level',
  text: 'Heading level 5'
}

export const Sixth = Template.bind({})
Sixth.args = {
  tag: 'h6',
  variant: 'sixth-level',
  text: 'Heading level 6'
}
