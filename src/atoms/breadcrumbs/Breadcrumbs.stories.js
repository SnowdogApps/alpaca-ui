import { addDecorator, storiesOf } from '@storybook/vue'
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
    ...defaultData,
    template: `
      <a-breadcrumbs :breadcrumbs="breadcrumbs"/>
    `
  }))
  .add('With slots', () => ({
    components: { ABreadcrumbs, ALink },
    ...defaultData,
    template: `
      <a-breadcrumbs :breadcrumbs="breadcrumbs">
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
          <span style="padding: 0 10px; color: #2962ff; line-height: 1.5;">
            {{ data.breadcrumb.text }}
          </span>
        </template>
      </a-breadcrumbs>
    `
  }))
