import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import menu from '@alpaca-storybook/mocks/side-menu'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaSideMenu from './SideMenu.vue'

storiesOf('Modules/Side Menu', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaSideMenu },
    data: () => ({
      menu
    }),
    template: `
      <app>
        <alpaca-side-menu :menuItems="menu"/>
      </app>
    `
  }))
