import AFieldset from './Fieldset.vue'

export default {
  title: 'Atoms/Fieldset',
  component: AFieldset,
  argTypes: {
    legendHidden: {
      control: {
        type: 'boolean',
        default: false
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AFieldset },
  props: Object.keys(argTypes),
  template: `
    <a-fieldset
      :legend-text="legendText"
      :legend-hidden="legendHidden"
    >
      Fieldset content
    </a-fieldset>
  `
})

export const Default = Template.bind({})
Default.args = {
  legendText: 'Fieldset title'
}
