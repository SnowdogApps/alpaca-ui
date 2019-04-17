import { addDecorator, storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ABreadcrumbs from './Breadcrumbs.vue'
import ALink from '../link/Link.vue'

import breadcrumbs from '../../../mocks/breadcrumbs.json'

// @vue/component
const defaultData = {
  data: () => ({ breadcrumbs })
}

addDecorator(StoryRouter())
storiesOf('Atoms/Breadcrumbs', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { ABreadcrumbs },
    ...defaultData,
    template: `
      <a-breadcrumbs :breadcrumbs='breadcrumbs'/>
    `
  }))
  // @vue/component
  .add('With slots', () => ({
    components: { ABreadcrumbs, ALink },
    ...defaultData,
    template: `
      <a-breadcrumbs :breadcrumbs='breadcrumbs'>
        <template #previous='data'>
          <a-link 
            :href="data.breadcrumb.href"
            style="padding: 0 10px; color: #333"
          >
            {{ data.breadcrumb.text }}
          </a-link>
          <span style="padding-top: 2px;">
            -
          </span>
        </template>
        <template #current='data'>
          <span style="padding: 0 10px; color: #2962ff; line-height: 1.5;">
            {{ data.breadcrumb.text }}
          </span>
        </template>
      </a-breadcrumbs>
    `
  }))
