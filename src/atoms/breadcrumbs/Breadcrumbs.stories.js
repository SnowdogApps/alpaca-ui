import { addDecorator } from '@storybook/vue'
import { object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import ABreadcrumbs from './Breadcrumbs.vue'
import ALink from '../link/Link.vue'

import breadcrumbs from '../../../mocks/breadcrumbs.json'

const defaultData = {
  data: () => ({ breadcrumbs })
}

addDecorator(StoryRouter())

export default {
  title: 'Atoms/Breadcrumbs',
  component: ABreadcrumbs
}

export const Default = () => ({
  components: {
    ABreadcrumbs
  },
  props: {
    breadcrumbsKnob: {
      default: object('Breadcrumbs links', breadcrumbs)
    }
  },
  ...defaultData,
  template: '<a-breadcrumbs :breadcrumbs="breadcrumbsKnob"/>'
})

export const WithSlots = () => ({
  components: {
    ABreadcrumbs,
    ALink
  },
  props: {
    breadcrumbsKnob: {
      default: object('Breadcrumbs links', breadcrumbs)
    }
  },
  ...defaultData,
  template: `
    <a-breadcrumbs :breadcrumbs="breadcrumbsKnob">
      <template #previous="data">
        <a-link
          :href="data.breadcrumb.href"
          class="px-3"
        >
          {{ data.breadcrumb.text }}
        </a-link>
      </template>
      <template #separator>
        <span class="mx-2">
          -
        </span>
      </template>
      <template #current="data">
        <span
          aria-current="page"
          class="
            px-3
            text-blue
          "
        >
          {{ data.breadcrumb.text }}
        </span>
      </template>
    </a-breadcrumbs>
  `
})
