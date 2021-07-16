import AList from './List.vue'
import AListItem from '@atoms/list-item/ListItem.vue'
import ALink from '@atoms/link/Link.vue'

export default {
  title: 'Atoms/List',
  component: AList,
  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'primary',
          'native',
          'horizontal',
          'divided',
          'centered',
          'divided-horizontal'
        ]
      }
    }
  }
}

// base list
const BaseTemplate = (args, { argTypes }) => ({
  components: { AList, AListItem },
  props: Object.keys(argTypes),
  template: `
    <a-list
      :tag="tag"
      :variant="variant"
    >
      <a-list-item>
        Lorem ipsum
      </a-list-item>
      <a-list-item>
        Lorem ipsum
      </a-list-item>
      <a-list-item>
        Lorem ipsum
      </a-list-item>
    </a-list>
  `
})

export const Default = BaseTemplate.bind({})

// with slots list
const WithSlotsTemplate = (args, { argTypes }) => ({
  components: { AList, AListItem, ALink },
  props: Object.keys(argTypes),
  template: `
    <a-list
      :tag="tag"
      :variant="variant"
    >
      <a-list-item>
        <a-link href="#">Lorem ipsum</a-link>
      </a-list-item>
      <a-list-item>
        <a-link href="#">Lorem ipsum</a-link>
      </a-list-item>
      <a-list-item>
        <a-link href="#">Lorem ipsum</a-link>
      </a-list-item>
    </a-list>
  `
})

export const WithSlots = WithSlotsTemplate.bind({})
