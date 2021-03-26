import ABreadcrumbs from './Breadcrumbs.vue'

import breadcrumbs from '../../../mocks/breadcrumbs.json'

export default {
  title: 'Atoms/Breadcrumbs',
  component: ABreadcrumbs,
  args: {
    breadcrumbs
  },
  argTypes: {
    breadcrumbs: {
      control: 'object'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ABreadcrumbs },
  props: Object.keys(argTypes),
  template: `
    <a-breadcrumbs :breadcrumbs="breadcrumbs"/>
  `
})

export const Default = Template.bind({})

export const WithSlots = (args, { argTypes }) => ({
  components: { ABreadcrumbs },
  props: Object.keys(argTypes),
  template: `
    <a-breadcrumbs :breadcrumbs="breadcrumbs">
      <template #previous="data">
        <a
          :href="data.breadcrumb.href"
          class="text-gray-500 hover:text-blue-600"
        >
          {{ data.breadcrumb.text }}
        </a>
      </template>
      <template #separator>
        <span class="mx-4 text-gray-500">
          -
        </span>
      </template>
      <template #current="data">
        <a
          :href="data.breadcrumb.href"
          class="text-blue-800"
        >
          {{ data.breadcrumb.text }}
        </a>
      </template>
    </a-breadcrumbs>
  `
})
WithSlots.args = {
  breadcrumbs
}
