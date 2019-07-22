import { addDecorator, storiesOf } from '@storybook/vue'
import { object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import ABreadcrumbs from './Breadcrumbs.vue'
import ALink from '../link/Link.vue'

import breadcrumbs from '../../../mocks/breadcrumbs.json'

const defaultData = {
  data: () => ({ breadcrumbs })
}

addDecorator(StoryRouter())

storiesOf('Atoms/Breadcrumbs', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ABreadcrumbs },
    props: {
      breadcrumbsKnob: {
        default: object('Breadcrumbs links', breadcrumbs)
      }
    },
    ...defaultData,
    template: `<a-breadcrumbs :breadcrumbs="breadcrumbsKnob"/>`
  }))
  .add('With slots', () => ({
    components: { ABreadcrumbs, ALink },
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
            style="padding: 0 10px; color: #333"
          >
            {{ data.breadcrumb.text }}
          </a-link>
        </template>
        <template #separator>
          <span class="a-breadcrumbs__separator">
            -
          </span>
        </template>
        <template #current="data">
          <span
            aria-current="page"
            style="padding: 0 10px; color: #2962ff;"
          >
            {{ data.breadcrumb.text }}
          </span>
        </template>
      </a-breadcrumbs>
    `
  }))
