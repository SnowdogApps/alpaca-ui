import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import breadcrumbs from './mocks/breadcrumbs.json'

import App from '@/components/01-globals/app/App.vue'
import AlpacaBreadcrumbs from './Breadcrumbs.vue'

storiesOf('Elements/Breadcrumbs', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaBreadcrumbs },
    data() {
      return {
        breadcrumbs
      }
    },
    template: `
      <app>
        <alpaca-breadcrumbs :breadcrumbs="breadcrumbs"/>
      </app>
    `
  }))
