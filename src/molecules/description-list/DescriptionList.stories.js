import ADescriptionList from './DescriptionList.vue'
import AListItem from '@atoms/list-item/ListItem.vue'

import alpacaUIMixin from '@utils/helpers/alpaca-ui.js'

export default {
  title: 'Molecules/DescriptionList',
  component: ADescriptionList
}

// description list
const DescriptionTemplate = (args, { argTypes }) => ({
  components: { ADescriptionList, AListItem },
  mixins: [alpacaUIMixin],
  props: Object.keys(argTypes),
  template: `
    <a-description-list>
      <a-list-item tag="dt">
        Lorem ipsum
      </a-list-item>
      <a-list-item tag="dd">
        Lorem ipsum value
      </a-list-item>
      <a-list-item tag="dt">
        Lorem ipsum
      </a-list-item>
      <a-list-item tag="dd">
        Lorem ipsum value
      </a-list-item>
    </a-description-list>
  `
})

export const Default = DescriptionTemplate.bind({})
