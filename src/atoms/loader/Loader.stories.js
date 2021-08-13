import ALoader from './Loader.vue'

export default {
  title: 'Atoms/Loader',
  component: ALoader,
  argTypes: {
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'primary',
          'small',
          'medium',
          'large',
          'x-large'
        ]
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ALoader },
  props: Object.keys(argTypes),
  template: `
    <a-loader
      :variant="variant"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  variant: ['primary', 'medium']
}
