import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import breadcrumbs from './mocks/breadcrumbs.json'

import ABreadcrumbs from './Breadcrumbs.vue'

storiesOf('Elements/Breadcrumbs', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { ABreadcrumbs },
    data () {
      return {
        breadcrumbs
      }
    },
    template: `
      <a-breadcrumbs :breadcrumbs="breadcrumbs"/>
    `
  }))
