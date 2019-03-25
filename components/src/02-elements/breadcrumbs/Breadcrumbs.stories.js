import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import breadcrumbs from './mocks/breadcrumbs.json'

import AlpacaBreadcrumbs from './Breadcrumbs.vue'

storiesOf('Elements/Breadcrumbs', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { AlpacaBreadcrumbs },
    data() {
      return {
        breadcrumbs
      }
    },
    template: `
        <alpaca-breadcrumbs :breadcrumbs="breadcrumbs"/>
    `
  }))
